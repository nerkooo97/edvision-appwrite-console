import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import { Dt as useOrganizationById, Et as useEstimationUpdatePlan, Ft as useOrganizations, G as organizationQueryOptions, Gt as useUpdateOrganizationPlan, H as organizationPlanQueryOptions, It as usePaymentMethods, Jt as useValidateOrganization, Mt as useOrganizationPlan, Nt as useOrganizationProjects, O as fetchOrganizationProjects, Tt as useEstimationCreateOrganization, Y as organizationsQueryOptions, _ as fetchCouponAccount, _t as useCouponAccount, an as compareBillingPlanRefs, bn as BillingPlanTier, bt as useCreateOrganization, cn as getPlanCanonicalFromRecord, d as deleteOrganization, dn as resolveBillingPlanRecord, fn as resolveOrganizationPlanDisplayLabel, gt as useBillingPlans, i as billingPlansQueryOptions, ln as getPlanNameFromTier, on as getBillingPlanDisplayLabel, un as isFreePlanRef, yt as useCreateDowngradeFeedback } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { wd as fetchProjectBuckets } from "./hooks-BONwG3Mt.js";
import { Et as prefetchOrganizationOverviewData, fo as fetchOrganizationMemberships } from "./auth-BPuxYQAc.js";
import { _ as formatProjectNameForDisplay, l as deleteProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { I as fetchProjectDatabases, Y as invalidateDatabaseModelAndType, w as deleteProjectDatabase } from "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import { n as databaseRouteKindFromApiType } from "./database-routes-DB_xKWuY.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Pt as fetchProjectSites, Zn as fetchProjectFunctions } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import { C as fetchOrganizationDomains, d as deleteOrganizationDomain } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { l as getUpgradePlanSelectAnalyticsAction, n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { n as useSmartNavigation, t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { r as useAuth, t as RequireAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider } from "./tooltip-DUssQZhw.js";
import { s as isPaymentAuthentication } from "./addons-DpAB_yDA.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import { o as formatPaymentMethodSummary, r as formatCurrency } from "./utils-DMkzhjmw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { n as PaymentMethodBrandAvatar, t as PaymentModal } from "./Payment-BjDWA9P5.js";
import { t as WarningAlert } from "./WarningAlert-ZIbpbrZO.js";
import { t as OrganizationSetupProgress } from "./OrganizationSetupProgress-CTQpKskx.js";
import { t as useDebouncedValue } from "./useDebouncedValue-CLVLvRJ7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppwriteException, ID } from "@appwrite.io/console";
import { keepPreviousData, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, ChevronLeft, ChevronRight, Plus, Search, Ticket, X } from "lucide-react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
var CONTACT_SALES_URL = CONTACT_ENTERPRISE_URL;
var ENTERPRISE_INTRO = "Custom plans for teams that need negotiated limits, compliance, premium support, and tailored billing.";
var ENTERPRISE_WHO_SHOULD_REACH_OUT = [
	"Organizations with compliance or procurement requirements",
	"Companies needing annual contracts, custom SLAs, or dedicated support",
	"Teams that need custom resource limits or volume pricing"
];
var ENTERPRISE_WHEN_TO_REACH_OUT = [
	"When you need SOC 2, BAA, 24/7 support, or a success manager",
	"During vendor review, security assessment, or enterprise procurement",
	"When pay-as-you-go plans do not meet your support or billing needs"
];
var planCardShellClassName = "flex items-start gap-4 rounded-lg border p-4 transition-colors";
var planCardBodyClassName = "flex-1 min-w-0";
var planCardContentClassName = "space-y-1.5";
var planTitleRowClassName = "flex items-center gap-2 flex-wrap";
var planListClassName = "grid gap-3";
var ENTERPRISE_COLLAPSED_HINT = "Need compliance, custom SLAs, or volume pricing?";
var FREE_PLAN_CONFLICT_DESCRIPTION = "Only one free organization per account.";
function PlanSelection({ plans, currentPlan, selectedPlan, onPlanSelect, selfService, hasFreeOrgs, isCreateMode = false, variant = "card" }) {
	const t = useT();
	const [enterpriseOpen, setEnterpriseOpen] = useState(false);
	const availablePlans = plans && typeof plans === "object" ? Object.entries(plans) : [];
	const planCatalog = plans;
	const isOrganizationOnFreePlan = !isCreateMode && isFreePlanRef(currentPlan, planCatalog);
	const isCurrentPlan = (planTier) => {
		if (isCreateMode) return false;
		return planTier === currentPlan || getPlanCanonicalFromRecord(planTier, planCatalog) === getPlanCanonicalFromRecord(currentPlan, planCatalog);
	};
	const isFreePlan = (planTier) => {
		return isFreePlanRef(planTier, planCatalog);
	};
	const isFreeDisabledByAccountLimit = (planTier) => selfService && isFreePlan(planTier) && hasFreeOrgs && (isCreateMode || !isOrganizationOnFreePlan);
	const isDisabled = (planTier) => {
		if (!selfService) return true;
		if (isCreateMode && isFreeDisabledByAccountLimit(planTier)) return true;
		return false;
	};
	const hasFreePlanConflict = (planTier) => isFreeDisabledByAccountLimit(planTier);
	const selectedPlanIsFree = !!selectedPlan && ((resolveBillingPlanRecord(selectedPlan, planCatalog)?.price ?? 0) === 0 || isFreePlanRef(selectedPlan, planCatalog));
	const showEnterpriseSection = !!selectedPlan && !selectedPlanIsFree;
	const isEnterpriseCurrent = getPlanNameFromTier(currentPlan) === "custom" || currentPlan.toLowerCase() === "enterprise" || currentPlan.toLowerCase() === "ent-1";
	const enterpriseDetails = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
		className: "px-6 py-5 grid gap-6 sm:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: t("Who should reach out")
		}), /* @__PURE__ */ jsx("ul", {
			className: "mt-2 space-y-2 text-[13px] text-muted-foreground leading-relaxed list-disc ps-4",
			children: ENTERPRISE_WHO_SHOULD_REACH_OUT.map((item) => /* @__PURE__ */ jsx("li", { children: t(item) }, item))
		})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: t("When to reach out")
		}), /* @__PURE__ */ jsx("ul", {
			className: "mt-2 space-y-2 text-[13px] text-muted-foreground leading-relaxed list-disc ps-4",
			children: ENTERPRISE_WHEN_TO_REACH_OUT.map((item) => /* @__PURE__ */ jsx("li", { children: t(item) }, item))
		})] })]
	})] });
	const contactSalesButton = /* @__PURE__ */ jsx(Button, {
		variant: "outline",
		size: "sm",
		className: "h-8 shrink-0 text-[13px]",
		asChild: true,
		children: /* @__PURE__ */ jsx("a", {
			href: CONTACT_SALES_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			...analyticsAttrs("upgrade-contact-sales"),
			children: t("Contact sales")
		})
	});
	const enterpriseSection = isCreateMode ? /* @__PURE__ */ jsxs(Collapsible, {
		open: enterpriseOpen,
		onOpenChange: setEnterpriseOpen,
		className: "mt-8 rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 space-y-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Enterprise")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground leading-relaxed",
							children: t(ENTERPRISE_COLLAPSED_HINT)
						})]
					}), contactSalesButton]
				})
			}),
			/* @__PURE__ */ jsxs(CollapsibleContent, { children: [/* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground leading-relaxed",
					children: t(ENTERPRISE_INTRO)
				})
			}), enterpriseDetails] }),
			/* @__PURE__ */ jsx(CollapsibleTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex w-full cursor-pointer items-center justify-between gap-3 border-t border-border px-6 py-3 text-[13px] text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground",
					...analyticsAttrs("upgrade-enterprise-learn-more"),
					children: [/* @__PURE__ */ jsx("span", { children: enterpriseOpen ? t("Show less") : t("Learn more") }), /* @__PURE__ */ jsx(icons_exports.ChevronDown, { className: cn("h-4 w-4 shrink-0 transition-transform duration-200", enterpriseOpen && "rotate-180") })]
				})
			})
		]
	}) : /* @__PURE__ */ jsxs("div", {
		className: "mt-10 rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-5",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1 space-y-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: planTitleRowClassName,
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Enterprise")
						}), isEnterpriseCurrent && /* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: "text-[10px] font-medium px-2 py-0.5 h-5 shrink-0",
							children: t("Current plan")
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground leading-relaxed",
						children: t(ENTERPRISE_INTRO)
					})]
				}), contactSalesButton]
			})
		}), enterpriseDetails]
	});
	const radioGroupContent = /* @__PURE__ */ jsxs(Fragment, { children: [
		!selfService && /* @__PURE__ */ jsxs(Alert, {
			className: "mb-4",
			children: [
				/* @__PURE__ */ jsx(icons_exports.Info, { className: "h-4 w-4" }),
				/* @__PURE__ */ jsx(AlertTitle, { children: t("Plan Changes Restricted") }),
				/* @__PURE__ */ jsx(AlertDescription, {
					className: "mt-2",
					children: t("Plan changes are not available for self-service. Please contact support to change your plan.")
				})
			]
		}),
		/* @__PURE__ */ jsx(RadioGroup, {
			value: selectedPlan || void 0,
			onValueChange: (value) => onPlanSelect(value),
			className: planListClassName,
			children: availablePlans.map(([planTier, planData]) => {
				const planName = resolveOrganizationPlanDisplayLabel({
					billingPlan: planTier,
					planName: planData?.name ?? null,
					planId: planData?.$id
				});
				const disabled = isDisabled(planTier);
				const isCurrent = isCurrentPlan(planTier);
				const price = planData?.price || 0;
				const description = planData?.desc || planData?.description;
				const planDescription = hasFreePlanConflict(planTier) ? t(FREE_PLAN_CONFLICT_DESCRIPTION) : description;
				const isSelected = selectedPlan === planTier;
				const isRecommendedPlan = getPlanCanonicalFromRecord(planTier, plans) === "pro";
				const handleSelect = () => {
					if (disabled) return;
					onPlanSelect(planTier);
				};
				const planSelectAnalytics = getUpgradePlanSelectAnalyticsAction(planTier) ?? getUpgradePlanSelectAnalyticsAction(planName);
				return /* @__PURE__ */ jsxs("div", {
					role: "radio",
					"aria-checked": isSelected,
					"aria-disabled": disabled,
					tabIndex: disabled ? -1 : 0,
					onClick: handleSelect,
					onKeyDown: (event) => {
						if (disabled) return;
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							handleSelect();
						}
					},
					className: cn(planCardShellClassName, isSelected ? "border-primary bg-card" : "border-border bg-card/50 hover:border-primary/30", disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
					...planSelectAnalytics ? analyticsAttrs(planSelectAnalytics) : {},
					children: [/* @__PURE__ */ jsx(RadioGroupItem, {
						value: planTier,
						id: planTier,
						disabled,
						className: "mt-0.5 shrink-0 pointer-events-none"
					}), /* @__PURE__ */ jsx(Label, {
						htmlFor: planTier,
						className: cn(planCardBodyClassName, "pointer-events-none", disabled ? "cursor-not-allowed" : "cursor-pointer"),
						children: /* @__PURE__ */ jsxs("div", {
							className: planCardContentClassName,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: planTitleRowClassName,
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-[15px] font-semibold text-foreground",
											children: planName
										}),
										isRecommendedPlan && !isCurrent && /* @__PURE__ */ jsx(Badge, {
											variant: "success",
											className: "text-[10px] font-medium px-2 py-0.5 h-5 shrink-0",
											children: t("Recommended")
										}),
										isCurrent && /* @__PURE__ */ jsx(Badge, {
											variant: "info",
											className: "text-[10px] font-medium px-2 py-0.5 h-5 shrink-0",
											children: t("Current plan")
										})
									]
								}),
								planDescription && /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground leading-snug",
									children: planDescription
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-[13px] font-medium text-foreground",
									children: price > 0 ? /* @__PURE__ */ jsxs("span", { children: [
										"$",
										price.toFixed(2),
										" ",
										t("per month")
									] }) : /* @__PURE__ */ jsx("span", { children: "$0.00" })
								})
							]
						})
					})]
				}, planTier);
			})
		}),
		showEnterpriseSection ? enterpriseSection : null,
		variant === "card" && /* @__PURE__ */ jsx("div", {
			className: "mt-4",
			children: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "text-[13px] text-muted-foreground",
				asChild: true,
				children: /* @__PURE__ */ jsxs(MarketingSiteLink, {
					href: "/pricing",
					...analyticsAttrs("upgrade-view-pricing"),
					children: [t("View detailed pricing"), /* @__PURE__ */ jsx(icons_exports.ExternalLink, { className: "ms-1.5 h-3.5 w-3.5" })]
				})
			})
		})
	] });
	if (variant === "inline") return /* @__PURE__ */ jsx("div", { children: radioGroupContent });
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Select a plan")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Choose the plan that best fits your needs.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-5",
				children: radioGroupContent
			})
		]
	});
}
const NEW_ORG_CHOICE = "__new_organization__";
function resolveOrgToDelete(keepChoiceId, otherFreeOrg, currentOrg, showCurrentOrgOption) {
	if (keepChoiceId === "__new_organization__") return otherFreeOrg;
	if (keepChoiceId === currentOrg?.$id) return otherFreeOrg;
	if (keepChoiceId === otherFreeOrg.$id && showCurrentOrgOption && currentOrg) return currentOrg;
	return null;
}
function FreePlanConflictResolution({ otherFreeOrg, currentOrg, pendingOrgName, showCurrentOrgOption = false, keepChoiceId: keepChoiceIdProp, onKeepChoiceChange }) {
	const t = useT();
	const [keepChoiceIdState, setKeepChoiceIdState] = useState(() => showCurrentOrgOption && currentOrg ? currentOrg.$id : NEW_ORG_CHOICE);
	const keepChoiceId = keepChoiceIdProp ?? keepChoiceIdState;
	const setKeepChoiceId = (value) => {
		onKeepChoiceChange?.(value);
		if (keepChoiceIdProp === void 0) setKeepChoiceIdState(value);
	};
	const keepChoices = useMemo(() => {
		if (showCurrentOrgOption && currentOrg) return [{
			id: currentOrg.$id,
			name: currentOrg.name
		}, {
			id: otherFreeOrg.$id,
			name: otherFreeOrg.name
		}];
		return [{
			id: NEW_ORG_CHOICE,
			name: pendingOrgName?.trim() || t("New organization")
		}, {
			id: otherFreeOrg.$id,
			name: otherFreeOrg.name
		}];
	}, [
		currentOrg,
		otherFreeOrg,
		pendingOrgName,
		showCurrentOrgOption,
		t
	]);
	const orgToDelete = resolveOrgToDelete(keepChoiceId, otherFreeOrg, currentOrg, showCurrentOrgOption);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Choose which organization to keep")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Only one free organization is allowed per account.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsx(RadioGroup, {
					value: keepChoiceId,
					onValueChange: setKeepChoiceId,
					className: "space-y-2",
					children: keepChoices.map(({ id, name }) => /* @__PURE__ */ jsxs("div", {
						className: cn("flex items-center gap-3 rounded-lg border px-4 py-3", keepChoiceId === id ? "border-primary bg-card" : "border-border bg-background/60"),
						...analyticsAttrs("upgrade-free-conflict-choice"),
						children: [/* @__PURE__ */ jsx(RadioGroupItem, {
							value: id,
							id: `keep-org-${id}`
						}), /* @__PURE__ */ jsxs(Label, {
							htmlFor: `keep-org-${id}`,
							className: "cursor-pointer text-[13px] font-medium text-foreground",
							children: [
								t("Keep"),
								" ",
								name
							]
						})]
					}, id))
				}), orgToDelete ? /* @__PURE__ */ jsxs("p", {
					className: "text-[13px] text-red-600 dark:text-red-400",
					children: [
						orgToDelete.name,
						" ",
						t("and all its resources will be deleted.")
					]
				}) : /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Choose a paid plan for the new organization instead.")
				})]
			})
		]
	});
}
function SelectPaymentMethod({ paymentMethods, selectedPaymentMethodId, onPaymentMethodSelect, onAddPaymentMethod, taxId, onTaxIdChange, onAddCredits, showApplyCoupon = false }) {
	const t = useT();
	const completedPaymentMethods = paymentMethods.filter((pm) => pm.last4);
	const hasCompletedPaymentMethods = completedPaymentMethods.length > 0;
	const getDisplayText = (method) => formatPaymentMethodSummary(method, { includeExpiry: true });
	const renderPaymentMethodOption = (method) => /* @__PURE__ */ jsxs("span", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: method.brand }), /* @__PURE__ */ jsx("span", {
			className: "truncate",
			children: getDisplayText(method)
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Label, {
			htmlFor: "payment-method",
			className: "text-[13px] font-medium mb-2 block",
			children: [
				t("Payment method"),
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "text-destructive",
					children: "*"
				})
			]
		}), hasCompletedPaymentMethods ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Select, {
			value: selectedPaymentMethodId || void 0,
			onValueChange: onPaymentMethodSelect,
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				id: "payment-method",
				className: "h-9 text-[13px]",
				children: /* @__PURE__ */ jsx(SelectValue, {
					placeholder: t("Select payment method"),
					children: selectedPaymentMethodId ? (() => {
						const method = completedPaymentMethods.find((pm) => pm.$id === selectedPaymentMethodId);
						return method ? renderPaymentMethodOption(method) : void 0;
					})() : void 0
				})
			}), /* @__PURE__ */ jsx(SelectContent, {
				className: "z-[9999]",
				children: completedPaymentMethods.map((method) => /* @__PURE__ */ jsx(SelectItem, {
					value: method.$id,
					children: renderPaymentMethodOption(method)
				}, method.$id))
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-3 flex items-center gap-2",
			children: [/* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 text-[13px]",
				onClick: onAddPaymentMethod,
				...analyticsAttrs("upgrade-add-payment"),
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add payment method")]
			}), showApplyCoupon && onAddCredits ? /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 text-[13px]",
				onClick: onAddCredits,
				...analyticsAttrs("upgrade-apply-coupon"),
				children: [/* @__PURE__ */ jsx(Ticket, { className: "me-1.5 h-4 w-4" }), t("Apply coupon")]
			}) : null]
		})] }) : /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card/50 p-4",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground leading-relaxed",
				children: t("Add a payment method to continue with a paid plan.")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-3 h-8 text-[13px]",
				onClick: onAddPaymentMethod,
				...analyticsAttrs("upgrade-add-payment"),
				children: t("Add payment method")
			})]
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "pt-4 border-t border-border",
			children: [
				/* @__PURE__ */ jsx(Label, {
					htmlFor: "tax-id",
					className: "text-[13px] font-medium",
					children: t("Tax ID (Optional)")
				}),
				/* @__PURE__ */ jsx(Input, {
					id: "tax-id",
					value: taxId,
					onChange: (e) => onTaxIdChange(e.target.value),
					placeholder: t("Enter tax identification number"),
					className: "mt-2 h-9 text-[13px]"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground mt-1",
					children: t("For business accounts, enter your tax identification number")
				})
			]
		})]
	});
}
function CouponExpirationNotice({ coupon, variant = "default", className }) {
	const t = useT();
	if (!(typeof coupon.validity === "number" && coupon.validity > 0)) return null;
	const message = /* @__PURE__ */ jsxs("p", {
		className: cn("text-muted-foreground leading-relaxed", variant === "compact" ? "text-[12px]" : "text-[13px]"),
		children: [
			t("Credits expire"),
			" ",
			coupon.validity,
			" ",
			coupon.validity === 1 ? t("day") : t("days"),
			" ",
			t("after redemption and do not roll over.")
		]
	});
	if (variant === "compact") return /* @__PURE__ */ jsx("div", {
		className: cn(className),
		children: message
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1", className),
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: t("Credit expiration")
		}), message]
	});
}
function getEstimationErrorMessage(error) {
	if (error instanceof AppwriteException && error.code === 429) return "Too many estimation requests. Wait a moment, then try again.";
	const message = error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
	if (message.includes("429") || /rate limit/i.test(message)) return "Too many estimation requests. Wait a moment, then try again.";
	return "Unable to load estimation. Try again in a moment.";
}
function normalizeEstimationPayload(estimation) {
	if (!estimation || typeof estimation !== "object") return {};
	const data = estimation;
	if (data.estimation && typeof data.estimation === "object") return data.estimation;
	return data;
}
function getEstimationLineLabel(item) {
	return item.label ?? item.name ?? item.description ?? "";
}
function getEstimationLineAmount(item) {
	const amount = item.value ?? item.amount ?? 0;
	return typeof amount === "number" && Number.isFinite(amount) ? amount : 0;
}
function getEstimationDiscountLines(estimationData) {
	const lines = (estimationData.discounts ?? []).map((entry) => ({
		label: getEstimationLineLabel(entry),
		amount: getEstimationLineAmount(entry)
	})).filter((entry) => entry.amount > 0 && entry.label.length > 0);
	const hasLabel = (pattern) => lines.some((line) => pattern.test(line.label));
	const discountScalar = typeof estimationData.discount === "number" && estimationData.discount > 0 ? estimationData.discount : 0;
	const creditsScalar = typeof estimationData.credits === "number" && estimationData.credits > 0 ? estimationData.credits : 0;
	const organizationCreditsScalar = typeof estimationData.organizationCredits === "number" && estimationData.organizationCredits > 0 ? estimationData.organizationCredits : 0;
	if (discountScalar > 0 && !hasLabel(/discount/i)) lines.push({
		label: "Discount",
		amount: discountScalar
	});
	if (creditsScalar > 0 && !hasLabel(/credit/i)) lines.push({
		label: "Credits",
		amount: creditsScalar
	});
	if (organizationCreditsScalar > 0 && !hasLabel(/organization credit/i)) lines.push({
		label: "Organization credits",
		amount: organizationCreditsScalar
	});
	return lines;
}
var DEFAULT_BUDGET_CAP_USD = 200;
function EstimatedTotalSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden sticky top-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[13px] font-semibold text-foreground",
					children: useT()("Estimated total")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: [
							0,
							1,
							2
						].map((index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16 shrink-0" })]
						}, index))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-2 border-t border-border pt-2",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-24 shrink-0" })]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4 pt-2",
						children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 shrink-0" })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-3 border-t border-border pt-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-9 shrink-0 rounded-full" })]
						})
					})
				]
			})
		]
	});
}
function EstimatedTotalBox({ estimation, isLoading, awaitingPaymentMethod = false, error, onRetry, coupon, onCouponRemove, onBudgetChange }) {
	const t = useT();
	const [budgetEnabled, setBudgetEnabled] = useState(false);
	const [budgetValue, setBudgetValue] = useState("");
	const handleBudgetToggle = (enabled) => {
		setBudgetEnabled(enabled);
		if (!enabled) {
			setBudgetValue("");
			onBudgetChange(void 0);
			return;
		}
		setBudgetValue(String(DEFAULT_BUDGET_CAP_USD));
		onBudgetChange(DEFAULT_BUDGET_CAP_USD);
	};
	const handleBudgetChange = (value) => {
		if (value === "") {
			setBudgetValue("");
			onBudgetChange(void 0);
			return;
		}
		if (!/^\d+$/.test(value)) return;
		setBudgetValue(value);
		const numValue = parseInt(value, 10);
		if (numValue > 0) onBudgetChange(numValue);
		else onBudgetChange(void 0);
	};
	if (isLoading && !estimation && !awaitingPaymentMethod) return /* @__PURE__ */ jsx(EstimatedTotalSkeleton, {});
	if (awaitingPaymentMethod) return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-semibold text-foreground",
				children: t("Estimated total")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2 leading-relaxed",
				children: t("Add a payment method to see your estimated total.")
			})]
		})
	});
	if (!estimation) {
		const message = error ? t(getEstimationErrorMessage(error)) : t("Unable to load estimation.");
		return /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden sticky top-6",
			children: [/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[13px] font-semibold text-foreground",
					children: t("Estimated total")
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4",
				children: /* @__PURE__ */ jsx(WarningAlert, {
					title: t("Unable to load estimation"),
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", { children: message }), error && onRetry ? /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 text-[13px]",
							onClick: onRetry,
							children: t("Try again")
						}) : null]
					})
				})
			})]
		});
	}
	const estimationData = normalizeEstimationPayload(estimation);
	const currency = estimationData.currency ?? "USD";
	const lineItems = (estimationData.items ?? []).map((item) => ({
		name: getEstimationLineLabel(item),
		amount: getEstimationLineAmount(item),
		currency
	}));
	const discountLines = getEstimationDiscountLines(estimationData);
	const totalDue = typeof estimationData.grossAmount === "number" ? estimationData.grossAmount : 0;
	const recurringCharge = estimationData.recurringCharge ?? 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden sticky top-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[13px] font-semibold text-foreground",
					children: t("Estimated total")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					lineItems.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: lineItems.map((item, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[13px]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: t(item.name)
							}), /* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: formatCurrency(item.amount || 0, item.currency || "USD")
							})]
						}, index))
					}),
					discountLines.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "space-y-2 pt-2 border-t border-border",
						children: discountLines.map((discountLine, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[13px]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: t(discountLine.label)
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-medium text-green-600 dark:text-green-400",
								children: ["-", formatCurrency(discountLine.amount, currency)]
							})]
						}, index))
					}),
					coupon && /* @__PURE__ */ jsx("div", {
						className: "pt-2 border-t border-border",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 space-y-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Ticket, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
										className: "text-[13px] font-medium text-foreground",
										children: coupon.code
									})]
								}), /* @__PURE__ */ jsx(CouponExpirationNotice, {
									coupon,
									variant: "compact"
								})]
							}), /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-6 w-6 shrink-0 p-0",
								onClick: onCouponRemove,
								"aria-label": t("Remove coupon"),
								children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pt-2 border-t border-border",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Total due now")
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[15px] font-semibold text-foreground",
								children: formatCurrency(totalDue, currency)
							})]
						})
					}),
					recurringCharge > 0 && /* @__PURE__ */ jsx("div", {
						className: "pt-2",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: t("Recurring Charge")
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] font-medium text-foreground",
								children: [
									formatCurrency(recurringCharge, currency),
									"/",
									t("month")
								]
							})]
						})
					}),
					estimationData.budgetEnabled !== false && /* @__PURE__ */ jsxs("div", {
						className: "pt-4 border-t border-border space-y-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "budget-cap",
								className: "text-[13px] font-medium",
								children: t("Budget cap")
							}), /* @__PURE__ */ jsx(Switch, {
								id: "budget-cap",
								checked: budgetEnabled,
								onCheckedChange: handleBudgetToggle
							})]
						}), budgetEnabled && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("span", {
								className: "absolute start-3 top-1/2 -translate-y-1/2 text-[13px] text-muted-foreground",
								children: "$"
							}), /* @__PURE__ */ jsx(Input, {
								id: "budget-amount",
								type: "number",
								placeholder: "200",
								value: budgetValue,
								onChange: (e) => handleBudgetChange(e.target.value),
								className: "h-9 text-[13px] ps-7",
								min: 1,
								step: 1
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t("Set a monthly spending limit")
						})] })]
					})
				]
			})
		]
	});
}
function PlanComparisonBox({ currentPlan, selectedPlan }) {
	const t = useT();
	const currentPlanName = getBillingPlanDisplayLabel(currentPlan);
	const selectedPlanName = selectedPlan ? getBillingPlanDisplayLabel(selectedPlan) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden sticky top-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Plan comparison")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Compare features between plans")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[13px]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: t("Current Plan")
							}), /* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: currentPlanName
							})]
						}),
						selectedPlanName && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[13px]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: t("Selected Plan")
							}), /* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: selectedPlanName
							})]
						}),
						!selectedPlan && /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Select a plan to see comparison")
						})
					]
				})
			})
		]
	});
}
const DOWNGRADE_RESOURCE_TYPES = [
	{
		id: "databases",
		label: "Databases",
		planKey: "databases"
	},
	{
		id: "buckets",
		label: "Buckets",
		planKey: "buckets"
	},
	{
		id: "functions",
		label: "Functions",
		planKey: "functions"
	},
	{
		id: "sites",
		label: "Sites",
		planKey: "sites"
	}
];
function readPlanLimit(targetPlan, key, allowZero = false) {
	const value = targetPlan?.[key];
	if (value === null || value === void 0) return null;
	const num = Number(value);
	if (Number.isNaN(num) || num < 0) return null;
	if (!allowZero && num <= 0) return null;
	return num;
}
function readAddonLimit(targetPlan, addonKey, allowZero = false) {
	const addon = (targetPlan?.addons)?.[addonKey];
	if (!addon) return null;
	const value = addon.limit ?? addon.planIncluded;
	if (value === null || value === void 0) return null;
	const num = Number(value);
	if (Number.isNaN(num) || num < 0) return null;
	if (!allowZero && num <= 0) return null;
	return num;
}
function getMemberLimit(targetPlan) {
	if (!targetPlan) return null;
	const addons = targetPlan.addons;
	const limitCandidates = [
		addons?.seats?.limit,
		addons?.seats?.planIncluded,
		targetPlan.members
	];
	for (const value of limitCandidates) {
		if (value === null || value === void 0) continue;
		const num = Number(value);
		if (!Number.isNaN(num) && num > 0) return num;
	}
	return null;
}
function getDowngradePlanLimits(targetPlan) {
	const planName = typeof targetPlan?.name === "string" ? targetPlan.name.toLowerCase() : "";
	const isFreePlan = planName.includes("free") || planName === "starter" || targetPlan && Number(targetPlan.price ?? 0) === 0 && Number(targetPlan.order ?? 0) <= 0;
	return {
		projects: readPlanLimit(targetPlan, "projects") ?? readAddonLimit(targetPlan, "projects"),
		members: getMemberLimit(targetPlan) ?? (isFreePlan ? 1 : null),
		domains: readPlanLimit(targetPlan, "domains", true) ?? readAddonLimit(targetPlan, "domains", true) ?? (isFreePlan ? 0 : null),
		databases: readPlanLimit(targetPlan, "databases"),
		buckets: readPlanLimit(targetPlan, "buckets"),
		functions: readPlanLimit(targetPlan, "functions"),
		sites: readPlanLimit(targetPlan, "sites")
	};
}
function getResourceViolationCount(total, limit) {
	if (limit === null) return 0;
	return Math.max(0, total - limit);
}
function isResourceSelectionValid(items, selectedIds, limit) {
	if (limit === null || items.length <= limit) return true;
	return selectedIds.size === limit;
}
function getDefaultKeepIds(items, limit) {
	if (limit === null) return new Set(items.map((item) => item.$id));
	return new Set(items.slice(0, limit).map((item) => item.$id));
}
function countResourcesToDeleteForProject(resources, keepSelections, limits) {
	const counts = {};
	for (const { id } of DOWNGRADE_RESOURCE_TYPES) {
		const limit = limits[id];
		if (limit === null) continue;
		const items = resources[id].items;
		const keepIds = keepSelections[id] ?? (items.length <= limit ? new Set(items.map((item) => item.$id)) : getDefaultKeepIds(items, limit));
		const deleteCount = items.filter((item) => !keepIds.has(item.$id)).length;
		if (deleteCount > 0) counts[id] = deleteCount;
	}
	return counts;
}
function mergeResourceImpacts(impacts) {
	const merged = {};
	for (const impact of impacts) for (const { id } of DOWNGRADE_RESOURCE_TYPES) {
		const count = impact[id];
		if (!count) continue;
		merged[id] = (merged[id] ?? 0) + count;
	}
	return merged;
}
function getTotalResourceDeletions(impact) {
	return DOWNGRADE_RESOURCE_TYPES.reduce((total, { id }) => total + (impact[id] ?? 0), 0);
}
async function tryUpdateSelectedMemberships(organizationId, membershipIds) {
	if (sdk.forConsole.billing?.updateSelectedMemberships) return await sdk.forConsole.billing.updateSelectedMemberships(organizationId, membershipIds);
	if (sdk.forConsole.organizations.updateSelectedMemberships) return await sdk.forConsole.organizations.updateSelectedMemberships(organizationId, membershipIds);
	return null;
}
async function tryUpdateSelectedDomains(organizationId, domainIds) {
	if (sdk.forConsole.billing?.updateSelectedDomains) return await sdk.forConsole.billing.updateSelectedDomains(organizationId, domainIds);
	if (sdk.forConsole.organizations.updateSelectedDomains) return await sdk.forConsole.organizations.updateSelectedDomains(organizationId, domainIds);
	return null;
}
async function deleteDowngradeMemberships(organizationId, membershipIds, selectedMembershipIds) {
	if (membershipIds.length === 0) return;
	if (await tryUpdateSelectedMemberships(organizationId, selectedMembershipIds).catch(() => null)) return;
	await Promise.all(membershipIds.map((membershipId) => sdk.forConsole.teams.deleteMembership(organizationId, membershipId)));
}
async function deleteDowngradeDomains(organizationId, domainIds, selectedDomainIds) {
	if (domainIds.length === 0) return;
	if (await tryUpdateSelectedDomains(organizationId, selectedDomainIds).catch(() => null)) return;
	await Promise.all(domainIds.map((domainId) => deleteOrganizationDomain(domainId)));
}
function ImpactListSection({ title, items, getLabel }) {
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "text-[13px] leading-normal text-red-600 dark:text-red-400",
			children: items.map((item) => getLabel(item)).join(", ")
		})]
	});
}
function ResourceImpactSection({ title, resourceImpact }) {
	const t = useT();
	const resourceLines = DOWNGRADE_RESOURCE_TYPES.filter(({ id }) => (resourceImpact[id] ?? 0) > 0);
	if (resourceLines.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: title
		}), /* @__PURE__ */ jsx("ul", {
			className: "space-y-1.5",
			children: resourceLines.map(({ id, label }) => /* @__PURE__ */ jsxs("li", {
				className: "flex items-start justify-between gap-3 text-[13px] leading-normal",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: t(label)
				}), /* @__PURE__ */ jsxs("span", {
					className: "text-red-600 dark:text-red-400 shrink-0",
					children: [
						resourceImpact[id],
						" ",
						t("to delete")
					]
				})]
			}, id))
		})]
	});
}
function ProjectResourceImpactSection({ projects }) {
	const t = useT();
	const projectsWithResources = projects.filter(({ resourceImpact }) => getTotalResourceDeletions(resourceImpact) > 0);
	if (projectsWithResources.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: t("Resources by project")
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-2",
			children: projectsWithResources.map(({ projectId, projectName, resourceImpact }) => {
				const resourceLines = DOWNGRADE_RESOURCE_TYPES.filter(({ id }) => (resourceImpact[id] ?? 0) > 0);
				return /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card/50 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "truncate text-[13px] font-medium leading-normal text-foreground",
						title: projectName,
						children: formatProjectNameForDisplay(projectName)
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-2 space-y-1.5",
						children: resourceLines.map(({ id, label }) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start justify-between gap-3 text-[13px] leading-normal",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: t(label)
							}), /* @__PURE__ */ jsxs("span", {
								className: "shrink-0 text-red-600 dark:text-red-400",
								children: [
									resourceImpact[id],
									" ",
									t("to delete")
								]
							})]
						}, id))
					})]
				}, projectId);
			})
		})]
	});
}
function OrganizationImpactSection({ name, description, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border bg-background/60 p-4 space-y-4",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-semibold leading-normal text-foreground",
			children: name
		}), /* @__PURE__ */ jsx("p", {
			className: "text-[13px] leading-normal text-muted-foreground mt-1",
			children: description
		})] }), children]
	});
}
function DowngradeImpactSummary({ keptOrganizationName, allProjects, keptProjects, allMemberships = [], keptMemberships = [], allDomains = [], keptDomains = [], resourceImpact, keptProjectResourceImpacts = [], resourcesLoading = false, deletedOrganizationImpact = null, deletedOrganizationLoading = false, expectDeletedOrganizationImpact = false, keptOrganizationImpactReady = true }) {
	const t = useT();
	const keptProjectIds = new Set(keptProjects.map((project) => project.$id));
	const projectsToDelete = allProjects.filter((project) => !keptProjectIds.has(project.$id));
	const keptMembershipIds = new Set(keptMemberships.map((membership) => membership.$id));
	const membersToDelete = allMemberships.filter((membership) => !keptMembershipIds.has(membership.$id));
	const keptDomainIds = new Set(keptDomains.map((domain) => domain.$id));
	const domainsToDelete = allDomains.filter((domain) => !keptDomainIds.has(domain.$id));
	const keptResourceDeletions = getTotalResourceDeletions(resourceImpact);
	const deletedResourceDeletions = deletedOrganizationImpact ? getTotalResourceDeletions(deletedOrganizationImpact.resourceImpact) : 0;
	const hasKeptOrgImpact = keptOrganizationImpactReady && (projectsToDelete.length > 0 || membersToDelete.length > 0 || domainsToDelete.length > 0 || keptResourceDeletions > 0);
	const hasDeletedOrgImpact = !!deletedOrganizationImpact;
	const deletedSectionLoading = expectDeletedOrganizationImpact && deletedOrganizationLoading;
	const keptSectionLoading = keptOrganizationImpactReady && resourcesLoading;
	const hasImpact = hasKeptOrgImpact || hasDeletedOrgImpact;
	const showDeletedSection = hasDeletedOrgImpact || deletedSectionLoading;
	const showKeptSection = hasKeptOrgImpact || keptSectionLoading;
	const showEmptyState = !hasImpact && !deletedSectionLoading && !keptSectionLoading;
	const keptOrgLabel = keptOrganizationName ?? t("Organization being downgraded");
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Downgrade impact")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Summary of everything that will be deleted when you change plan.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 space-y-4",
				children: showEmptyState ? /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("No projects, members, domains, or resources will be deleted.")
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [
					showDeletedSection ? deletedSectionLoading && !hasDeletedOrgImpact ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Calculating impact for the organization that will be removed...")
					}) : hasDeletedOrgImpact && deletedOrganizationImpact ? /* @__PURE__ */ jsxs(OrganizationImpactSection, {
						name: deletedOrganizationImpact.organizationName,
						description: t("This entire organization will be deleted, including all of its projects and resources."),
						children: [
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Projects")} (${deletedOrganizationImpact.projects.length})`,
								items: deletedOrganizationImpact.projects,
								getLabel: (project) => project.name || project.$id
							}),
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Members")} (${deletedOrganizationImpact.memberships.length})`,
								items: deletedOrganizationImpact.memberships,
								getLabel: (membership) => {
									const member = membership;
									return member.userName || member.userEmail || member.$id;
								}
							}),
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Domains")} (${deletedOrganizationImpact.domains.length})`,
								items: deletedOrganizationImpact.domains,
								getLabel: (domain) => domain.domain || domain.$id
							}),
							/* @__PURE__ */ jsx(ResourceImpactSection, {
								title: t("Resources in all projects"),
								resourceImpact: deletedOrganizationImpact.resourceImpact
							}),
							/* @__PURE__ */ jsx(ProjectResourceImpactSection, { projects: deletedOrganizationImpact.projectResourceImpacts ?? [] })
						]
					}) : null : null,
					hasDeletedOrgImpact && (hasKeptOrgImpact || keptSectionLoading) ? /* @__PURE__ */ jsx("div", { className: "border-t border-border" }) : null,
					showKeptSection ? keptSectionLoading && !hasKeptOrgImpact ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Calculating impact for resources to remove...")
					}) : hasKeptOrgImpact ? /* @__PURE__ */ jsxs(OrganizationImpactSection, {
						name: keptOrgLabel,
						description: t("Resources removed to fit the target plan limits."),
						children: [
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Projects")} (${projectsToDelete.length})`,
								items: projectsToDelete,
								getLabel: (project) => project.name || project.$id
							}),
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Members")} (${membersToDelete.length})`,
								items: membersToDelete,
								getLabel: (membership) => {
									const member = membership;
									return member.userName || member.userEmail || member.$id;
								}
							}),
							/* @__PURE__ */ jsx(ImpactListSection, {
								title: `${t("Domains")} (${domainsToDelete.length})`,
								items: domainsToDelete,
								getLabel: (domain) => domain.domain || domain.$id
							}),
							/* @__PURE__ */ jsx(ResourceImpactSection, {
								title: t("Resources in kept projects"),
								resourceImpact
							}),
							/* @__PURE__ */ jsx(ProjectResourceImpactSection, { projects: keptProjectResourceImpacts })
						]
					}) : null : null,
					hasImpact ? /* @__PURE__ */ jsxs("div", {
						className: "border-t border-border pt-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] font-medium text-foreground",
							children: t("Total impact")
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-2 space-y-1.5 text-[13px] text-muted-foreground",
							children: [hasDeletedOrgImpact && deletedOrganizationImpact ? /* @__PURE__ */ jsxs("li", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: deletedOrganizationImpact.organizationName
								}),
								": ",
								t("entire organization deleted"),
								" (",
								deletedOrganizationImpact.projects.length,
								" ",
								deletedOrganizationImpact.projects.length === 1 ? t("project") : t("projects"),
								", ",
								deletedOrganizationImpact.memberships.length,
								" ",
								deletedOrganizationImpact.memberships.length === 1 ? t("member") : t("members"),
								", ",
								deletedOrganizationImpact.domains.length,
								" ",
								deletedOrganizationImpact.domains.length === 1 ? t("domain") : t("domains"),
								", ",
								deletedResourceDeletions,
								" ",
								deletedResourceDeletions === 1 ? t("resource") : t("resources"),
								")"
							] }) : null, hasKeptOrgImpact ? /* @__PURE__ */ jsxs("li", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: keptOrgLabel
								}),
								": ",
								projectsToDelete.length,
								" ",
								projectsToDelete.length === 1 ? t("project") : t("projects"),
								",",
								" ",
								membersToDelete.length,
								" ",
								membersToDelete.length === 1 ? t("member") : t("members"),
								",",
								" ",
								domainsToDelete.length,
								" ",
								domainsToDelete.length === 1 ? t("domain") : t("domains"),
								",",
								" ",
								keptResourceDeletions,
								" ",
								keptResourceDeletions === 1 ? t("resource") : t("resources"),
								" ",
								t("removed")
							] }) : null]
						})]
					}) : null
				] })
			})
		]
	});
}
var SELECTION_PAGE_SIZE$1 = 5;
var SELECTION_ROW_HEIGHT_CLASS$1 = "h-[46px]";
var SELECTION_LIST_MIN_HEIGHT_CLASS$1 = "min-h-[262px]";
function DowngradeLimitSelection({ title, description, resourceLabel, limit, items, total, page, selectedIds, onToggle, onPageChange, loading = false, paginationDisabled = false }) {
	const t = useT();
	const selectionValid = selectedIds.size === limit;
	const totalPages = Math.max(1, Math.ceil(total / SELECTION_PAGE_SIZE$1));
	const safePage = Math.min(page, totalPages);
	const pageStart = (safePage - 1) * SELECTION_PAGE_SIZE$1;
	const pageEnd = Math.min(pageStart + items.length, total);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold leading-normal text-foreground",
						children: title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-normal text-muted-foreground mt-2",
						children: description
					})] }), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] font-medium leading-normal text-foreground shrink-0",
						children: [
							selectedIds.size,
							" / ",
							limit
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					!selectionValid ? /* @__PURE__ */ jsxs(WarningAlert, {
						title: `${t("Select")} ${t(resourceLabel)} ${t("to keep")}`,
						children: [
							t("Choose exactly"),
							" ",
							limit,
							" ",
							t(resourceLabel),
							" ",
							t("to continue.")
						]
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: cn("space-y-2", SELECTION_LIST_MIN_HEIGHT_CLASS$1),
						children: loading ? /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Loading...")
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [items.map((item) => {
							const selected = selectedIds.has(item.id);
							const disabled = item.locked || !selected && selectedIds.size >= limit;
							return /* @__PURE__ */ jsxs("div", {
								className: cn("flex items-start gap-3 rounded-lg border p-3 transition-colors", SELECTION_ROW_HEIGHT_CLASS$1, selected ? "border-primary bg-primary/5" : "border-border bg-background/60", disabled && !item.locked && "opacity-50"),
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: `keep-${resourceLabel}-${item.id}`,
									checked: selected,
									disabled,
									onCheckedChange: () => onToggle(item.id),
									className: "mt-0.5 shrink-0"
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: `keep-${resourceLabel}-${item.id}`,
									className: cn("min-w-0 flex-1", disabled ? "cursor-not-allowed" : "cursor-pointer"),
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "min-w-0 truncate text-[13px] font-medium leading-normal text-foreground",
											children: item.label
										}), item.locked ? /* @__PURE__ */ jsx(Badge, {
											variant: "info",
											className: "text-[10px] shrink-0",
											children: t("You")
										}) : null]
									})
								})]
							}, item.id);
						}), Array.from({ length: Math.max(0, SELECTION_PAGE_SIZE$1 - items.length) }).map((_, index) => /* @__PURE__ */ jsx("div", {
							className: SELECTION_ROW_HEIGHT_CLASS$1,
							"aria-hidden": true
						}, `limit-selection-spacer-${index}`))] })
					}),
					total > SELECTION_PAGE_SIZE$1 ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 border-t border-border pt-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Showing"),
								" ",
								pageStart + 1,
								"-",
								pageEnd,
								" ",
								t("of"),
								" ",
								total,
								" ",
								t(resourceLabel)
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "h-8 w-8",
								onClick: () => onPageChange(safePage - 1),
								disabled: safePage <= 1 || loading || paginationDisabled,
								"aria-label": `${t("Previous")} ${t(resourceLabel)} ${t("page")}`,
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "h-8 w-8",
								onClick: () => onPageChange(safePage + 1),
								disabled: safePage >= totalPages || loading || paginationDisabled,
								"aria-label": `${t("Next")} ${t(resourceLabel)} ${t("page")}`,
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
							})]
						})]
					}) : null
				]
			})
		]
	});
}
var SELECTION_PAGE_SIZE = 5;
var SELECTION_ROW_HEIGHT_CLASS = "h-[46px]";
var SELECTION_LIST_MIN_HEIGHT_CLASS = "min-h-[262px]";
function DowngradeProjectSelection({ projects, total, page, projectsLimit, selectedProjectIds, onToggleProject, onPageChange, loading = false, paginationDisabled = false }) {
	const t = useT();
	const projectSelectionValid = selectedProjectIds.size === projectsLimit;
	const totalPages = Math.max(1, Math.ceil(total / SELECTION_PAGE_SIZE));
	const safePage = Math.min(page, totalPages);
	const pageStart = (safePage - 1) * SELECTION_PAGE_SIZE;
	const pageEnd = Math.min(pageStart + projects.length, total);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold leading-normal text-foreground",
						children: t("Choose projects to keep")
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] leading-normal text-muted-foreground mt-2",
						children: [
							t("The target plan allows"),
							" ",
							projectsLimit,
							" ",
							projectsLimit === 1 ? t("project") : t("projects"),
							".",
							" ",
							t("Unselected projects and everything in them will be deleted.")
						]
					})] }), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] font-medium leading-normal text-foreground shrink-0",
						children: [
							selectedProjectIds.size,
							" / ",
							projectsLimit
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					!projectSelectionValid ? /* @__PURE__ */ jsxs(WarningAlert, {
						title: t("Select projects to keep"),
						children: [
							t("Choose exactly"),
							" ",
							projectsLimit,
							" ",
							projectsLimit === 1 ? t("project") : t("projects"),
							" ",
							t("to continue.")
						]
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: cn("space-y-2", SELECTION_LIST_MIN_HEIGHT_CLASS),
						children: loading ? /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Loading projects...")
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [projects.map((project) => {
							const selected = selectedProjectIds.has(project.$id);
							const disabled = !selected && selectedProjectIds.size >= projectsLimit;
							return /* @__PURE__ */ jsxs("div", {
								className: cn("flex items-start gap-3 rounded-lg border p-3 transition-colors", SELECTION_ROW_HEIGHT_CLASS, selected ? "border-primary bg-primary/5" : "border-border bg-background/60", disabled && "opacity-50"),
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: `keep-project-${project.$id}`,
									checked: selected,
									disabled,
									onCheckedChange: () => onToggleProject(project.$id),
									className: "mt-0.5 shrink-0"
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: `keep-project-${project.$id}`,
									className: cn("min-w-0 flex-1 cursor-pointer", disabled && "cursor-not-allowed"),
									children: /* @__PURE__ */ jsx("p", {
										className: "min-w-0 truncate text-[13px] font-medium leading-normal text-foreground",
										title: project.name,
										children: formatProjectNameForDisplay(project.name)
									})
								})]
							}, project.$id);
						}), Array.from({ length: Math.max(0, SELECTION_PAGE_SIZE - projects.length) }).map((_, index) => /* @__PURE__ */ jsx("div", {
							className: SELECTION_ROW_HEIGHT_CLASS,
							"aria-hidden": true
						}, `project-selection-spacer-${index}`))] })
					}),
					total > SELECTION_PAGE_SIZE ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 border-t border-border pt-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Showing"),
								" ",
								pageStart + 1,
								"-",
								pageEnd,
								" ",
								t("of"),
								" ",
								total,
								" ",
								t("projects")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "h-8 w-8",
								onClick: () => onPageChange(safePage - 1),
								disabled: safePage <= 1 || loading || paginationDisabled,
								"aria-label": t("Previous projects page"),
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "h-8 w-8",
								onClick: () => onPageChange(safePage + 1),
								disabled: safePage >= totalPages || loading || paginationDisabled,
								"aria-label": t("Next projects page"),
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
							})]
						})]
					}) : null
				]
			})
		]
	});
}
var DOWNGRADE_LIST_LIMIT = 1e3;
function mapItems(items, total) {
	return {
		items: (items ?? []).map((item) => ({
			$id: item.$id,
			name: item.name?.trim() || "Untitled"
		})),
		total: total ?? items?.length ?? 0
	};
}
function mapDatabaseItems(items, total) {
	return {
		items: (items ?? []).map((item) => ({
			$id: item.$id,
			name: item.name?.trim() || "Untitled",
			dbKind: databaseRouteKindFromApiType(item.type)
		})),
		total: total ?? items?.length ?? 0
	};
}
async function fetchProjectDowngradeResources(projectId) {
	const [databases, buckets, functions, sites] = await Promise.all([
		fetchProjectDatabases(projectId, 0, DOWNGRADE_LIST_LIMIT),
		fetchProjectBuckets(projectId, 0, DOWNGRADE_LIST_LIMIT),
		fetchProjectFunctions(projectId, 0, DOWNGRADE_LIST_LIMIT),
		fetchProjectSites(projectId, 0, DOWNGRADE_LIST_LIMIT)
	]);
	return {
		databases: mapDatabaseItems(databases.databases, databases.total),
		buckets: mapItems(buckets.buckets, buckets.total),
		functions: mapItems(functions.functions, functions.total),
		sites: mapItems(sites.sites, sites.total)
	};
}
async function deleteDowngradeResources(resourcesToDelete) {
	const tasks = [];
	for (const [projectId, resourceMap] of Object.entries(resourcesToDelete)) {
		if (!resourceMap) continue;
		const projectSdk = sdk.forProject(projectId);
		for (const database of resourceMap.databases ?? []) tasks.push(deleteProjectDatabase(projectId, database.$id, database.dbKind).then(() => {
			invalidateDatabaseModelAndType(projectId, database.$id);
		}));
		for (const bucketId of resourceMap.buckets ?? []) tasks.push(projectSdk.storage.deleteBucket({ bucketId }));
		for (const functionId of resourceMap.functions ?? []) tasks.push(projectSdk.functions.delete({ functionId }));
		for (const siteId of resourceMap.sites ?? []) tasks.push(projectSdk.sites.delete({ siteId }));
	}
	await Promise.all(tasks);
}
function buildResourcesToDelete(projectId, resources, keepSelections) {
	const result = {};
	for (const type of Object.keys(resources)) {
		const keepIds = keepSelections[type] ?? /* @__PURE__ */ new Set();
		const remainingItems = resources[type].items.filter((item) => !keepIds.has(item.$id));
		if (remainingItems.length === 0) continue;
		if (type === "databases") result.databases = remainingItems.map((item) => ({
			$id: item.$id,
			dbKind: item.dbKind ?? "tablesdb"
		}));
		else result[type] = remainingItems.map((item) => item.$id);
	}
	return result;
}
var COLUMN_LIST_PAGE_SIZE = 5;
var PAGINATED_LIST_ROW_HEIGHT_CLASS = "h-[42px]";
var PAGINATED_LIST_BODY_MIN_HEIGHT_CLASS = "min-h-[226px]";
function filterPaginatedList(items, search, filterFn, page, pageSize) {
	const query = search.trim().toLowerCase();
	const filtered = query ? items.filter((item) => filterFn(item, query)) : items;
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(Math.max(1, page), totalPages);
	const start = (safePage - 1) * pageSize;
	return {
		filtered,
		paginated: filtered.slice(start, start + pageSize),
		totalPages,
		safePage,
		totalItems: filtered.length
	};
}
function ColumnSearchBar({ value, onChange, placeholder }) {
	return /* @__PURE__ */ jsx("div", {
		className: "shrink-0 border-b border-border px-2 py-2",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
				value,
				onChange: (event) => onChange(event.target.value),
				placeholder,
				className: "h-8 border-border bg-background ps-8 text-[13px]"
			})]
		})
	});
}
function ColumnPaginationFooter({ currentPage, totalPages, totalItems, onPageChange, reserveSpace = false }) {
	const t = useT();
	const showPagination = totalItems > COLUMN_LIST_PAGE_SIZE;
	if (!showPagination && !reserveSpace) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-[41px] shrink-0 items-center justify-between gap-2 border-t border-border px-2 py-2", !showPagination && "invisible pointer-events-none"),
		"aria-hidden": !showPagination,
		children: [/* @__PURE__ */ jsxs("span", {
			className: "text-[11px] tabular-nums text-muted-foreground",
			children: [
				t("Page"),
				" ",
				currentPage,
				" ",
				t("of"),
				" ",
				totalPages
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: "h-7 w-7",
				onClick: () => onPageChange(currentPage - 1),
				disabled: currentPage <= 1,
				"aria-label": t("Previous page"),
				children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: "h-7 w-7",
				onClick: () => onPageChange(currentPage + 1),
				disabled: currentPage >= totalPages,
				"aria-label": t("Next page"),
				children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
			})]
		})]
	});
}
function PaginatedListSlots({ pageSize, itemCount, children }) {
	const spacerCount = Math.max(0, pageSize - itemCount);
	return /* @__PURE__ */ jsxs(Fragment, { children: [children, Array.from({ length: spacerCount }).map((_, index) => /* @__PURE__ */ jsx("div", {
		className: cn(PAGINATED_LIST_ROW_HEIGHT_CLASS, "shrink-0"),
		"aria-hidden": true
	}, `paginated-slot-spacer-${index}`))] });
}
function DowngradeResourceValidation({ projects, targetPlan, onRef, onValidityChange, onImpactChange }) {
	const t = useT();
	const limits = useMemo(() => getDowngradePlanLimits(targetPlan), [targetPlan]);
	const [activeProjectId, setActiveProjectId] = useState(null);
	const [activeResourceType, setActiveResourceType] = useState(null);
	const [resourceSelections, setResourceSelections] = useState({});
	const [resourceTypeSearch, setResourceTypeSearch] = useState("");
	const [resourceTypePage, setResourceTypePage] = useState(1);
	const [selectionSearch, setSelectionSearch] = useState("");
	const [selectionPage, setSelectionPage] = useState(1);
	const keptProjectIds = useMemo(() => projects.map((project) => project.$id).sort().join(","), [projects]);
	const resourceQueries = useQueries({ queries: projects.map((project) => ({
		queryKey: ["downgrade-resources", project.$id],
		queryFn: () => fetchProjectDowngradeResources(project.$id),
		enabled: !!project.$id,
		staleTime: 3e4
	})) });
	const resourcesLoading = resourceQueries.some((query) => query.isLoading);
	const resourcesLoadedSignature = useMemo(() => projects.map((project, index) => {
		const query = resourceQueries[index];
		return `${project.$id}:${query?.dataUpdatedAt ?? 0}:${query?.isLoading ? "loading" : "ready"}`;
	}).join("|"), [projects, resourceQueries]);
	const resourcesByProjectId = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		projects.forEach((project, index) => {
			const data = resourceQueries[index]?.data;
			if (data) map.set(project.$id, data);
		});
		return map;
	}, [projects, resourcesLoadedSignature]);
	useEffect(() => {
		setResourceSelections((prev) => {
			const keptIds = new Set(projects.map((project) => project.$id));
			const next = Object.fromEntries(Object.entries(prev).filter(([projectId]) => keptIds.has(projectId)));
			return Object.keys(next).length === Object.keys(prev).length ? prev : next;
		});
	}, [keptProjectIds, projects]);
	useEffect(() => {
		if (projects.length === 0) {
			setActiveProjectId(null);
			return;
		}
		if (!activeProjectId || !projects.some((project) => project.$id === activeProjectId)) setActiveProjectId(projects[0].$id);
	}, [activeProjectId, projects]);
	useEffect(() => {
		setActiveResourceType(null);
	}, [activeProjectId]);
	useEffect(() => {
		setResourceTypeSearch("");
		setResourceTypePage(1);
	}, [activeProjectId]);
	useEffect(() => {
		setSelectionSearch("");
		setSelectionPage(1);
	}, [activeProjectId, activeResourceType]);
	useEffect(() => {
		setResourceTypePage(1);
	}, [resourceTypeSearch]);
	useEffect(() => {
		setSelectionPage(1);
	}, [selectionSearch]);
	useEffect(() => {
		setResourceSelections((prev) => {
			let changed = false;
			const next = { ...prev };
			for (const project of projects) {
				const resources = resourcesByProjectId.get(project.$id);
				if (!resources) continue;
				const updated = { ...next[project.$id] ?? {} };
				let projectChanged = false;
				for (const { id } of DOWNGRADE_RESOURCE_TYPES) {
					const limit = limits[id];
					const items = resources[id].items;
					if (!updated[id] && getResourceViolationCount(items.length, limit) > 0) {
						updated[id] = getDefaultKeepIds(items, limit);
						projectChanged = true;
					}
				}
				if (projectChanged) {
					next[project.$id] = updated;
					changed = true;
				}
			}
			return changed ? next : prev;
		});
	}, [
		projects,
		limits,
		resourcesLoadedSignature
	]);
	const getProjectIssueCount = useCallback((projectId) => {
		const resources = resourcesByProjectId.get(projectId);
		if (!resources) return 0;
		return DOWNGRADE_RESOURCE_TYPES.reduce((count, { id }) => {
			const limit = limits[id];
			if (limit === null) return count;
			return count + getResourceViolationCount(resources[id].total, limit);
		}, 0);
	}, [limits, resourcesByProjectId]);
	const isValid = useMemo(() => {
		return projects.every((project) => {
			const resources = resourcesByProjectId.get(project.$id);
			if (!resources) return !resourcesLoading;
			return DOWNGRADE_RESOURCE_TYPES.every(({ id }) => {
				const limit = limits[id];
				const selection = resourceSelections[project.$id]?.[id];
				return isResourceSelectionValid(resources[id].items, selection ?? /* @__PURE__ */ new Set(), limit);
			});
		});
	}, [
		projects,
		limits,
		resourceSelections,
		resourcesByProjectId,
		resourcesLoading
	]) && !resourcesLoading;
	const projectResourceImpacts = useMemo(() => {
		return projects.map((project) => {
			const resources = resourcesByProjectId.get(project.$id);
			const impact = resources ? countResourcesToDeleteForProject(resources, resourceSelections[project.$id] ?? {}, limits) : {};
			return {
				projectId: project.$id,
				projectName: project.name || project.$id,
				resourceImpact: impact
			};
		});
	}, [
		projects,
		resourceSelections,
		resourcesByProjectId,
		limits
	]);
	const resourceImpact = useMemo(() => {
		return mergeResourceImpacts(projectResourceImpacts.map(({ resourceImpact: resourceImpact$1 }) => resourceImpact$1));
	}, [projectResourceImpacts]);
	const onImpactChangeRef = useRef(onImpactChange);
	useEffect(() => {
		onImpactChangeRef.current = onImpactChange;
	}, [onImpactChange]);
	const lastImpactSignatureRef = useRef("");
	useEffect(() => {
		const signature = `${resourcesLoading}:${JSON.stringify(projectResourceImpacts)}`;
		if (lastImpactSignatureRef.current === signature) return;
		lastImpactSignatureRef.current = signature;
		onImpactChangeRef.current?.(resourceImpact, resourcesLoading, projectResourceImpacts);
	}, [
		projectResourceImpacts,
		resourceImpact,
		resourcesLoading
	]);
	const getSelectedProjects = useCallback(() => projects.map((project) => project.$id), [projects]);
	const deleteMarkedResources = useCallback(async () => {
		const payload = {};
		for (const project of projects) {
			const resources = resourcesByProjectId.get(project.$id);
			if (!resources) continue;
			const toDelete = buildResourcesToDelete(project.$id, resources, resourceSelections[project.$id] ?? {});
			if (Object.keys(toDelete).length > 0) payload[project.$id] = toDelete;
		}
		if (Object.keys(payload).length === 0) return;
		await deleteDowngradeResources(payload);
	}, [
		projects,
		resourceSelections,
		resourcesByProjectId
	]);
	const onRefRef = useRef(onRef);
	const onValidityChangeRef = useRef(onValidityChange);
	const getSelectedProjectsRef = useRef(getSelectedProjects);
	const deleteMarkedResourcesRef = useRef(deleteMarkedResources);
	const isValidRef = useRef(isValid);
	useEffect(() => {
		onRefRef.current = onRef;
	}, [onRef]);
	useEffect(() => {
		onValidityChangeRef.current = onValidityChange;
	}, [onValidityChange]);
	getSelectedProjectsRef.current = getSelectedProjects;
	deleteMarkedResourcesRef.current = deleteMarkedResources;
	isValidRef.current = isValid;
	useEffect(() => {
		onRefRef.current({
			getSelectedProjects: () => getSelectedProjectsRef.current(),
			isValid: () => isValidRef.current,
			deleteMarkedResources: () => deleteMarkedResourcesRef.current()
		});
		return () => {
			onRefRef.current(null);
		};
	}, []);
	const lastReportedValidRef = useRef(null);
	useEffect(() => {
		if (lastReportedValidRef.current === isValid) return;
		lastReportedValidRef.current = isValid;
		onValidityChangeRef.current?.(isValid);
	}, [isValid]);
	const toggleResource = (projectId, resourceType, resourceId, limit) => {
		if (limit === null) return;
		setResourceSelections((prev) => {
			const projectSelection = prev[projectId] ?? {};
			const current = new Set(projectSelection[resourceType] ?? []);
			if (current.has(resourceId)) current.delete(resourceId);
			else if (current.size < limit) current.add(resourceId);
			return {
				...prev,
				[projectId]: {
					...projectSelection,
					[resourceType]: current
				}
			};
		});
	};
	const activeProject = projects.find((project) => project.$id === activeProjectId);
	const activeResources = activeProjectId ? resourcesByProjectId.get(activeProjectId) : void 0;
	const activeSelections = activeProjectId ? resourceSelections[activeProjectId] ?? {} : {};
	const planRelevantResourceTypes = useMemo(() => DOWNGRADE_RESOURCE_TYPES.filter(({ id }) => limits[id] !== null), [limits]);
	const activeTypeConfig = activeResourceType ? DOWNGRADE_RESOURCE_TYPES.find((type) => type.id === activeResourceType) : void 0;
	const activeLimit = activeTypeConfig ? limits[activeTypeConfig.id] : null;
	const activeItems = activeResourceType && activeResources ? activeResources[activeResourceType]?.items ?? [] : [];
	const activeSelected = activeResourceType && activeProjectId ? activeSelections[activeResourceType] ?? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set();
	const activeViolation = getResourceViolationCount(activeItems.length, activeLimit);
	const filterResourceType = useCallback((type, query) => type.label.toLowerCase().includes(query), []);
	const filterSelectionItem = useCallback((item, query) => item.name.toLowerCase().includes(query) || item.$id.toLowerCase().includes(query), []);
	const paginatedResourceTypes = useMemo(() => filterPaginatedList(planRelevantResourceTypes, resourceTypeSearch, filterResourceType, resourceTypePage, COLUMN_LIST_PAGE_SIZE), [
		planRelevantResourceTypes,
		resourceTypeSearch,
		filterResourceType,
		resourceTypePage
	]);
	const paginatedSelectionItems = useMemo(() => filterPaginatedList(activeItems, selectionSearch, filterSelectionItem, selectionPage, COLUMN_LIST_PAGE_SIZE), [
		activeItems,
		selectionSearch,
		filterSelectionItem,
		selectionPage
	]);
	const activeProjectResourcesLoading = resourcesLoading && !resourceQueries.some((query, index) => projects[index]?.$id === activeProjectId && query.data);
	const showResourceTypeList = !!activeProject && !!activeResources && !activeProjectResourcesLoading;
	const showSelectionList = !!activeResourceType && !!activeProject && !!activeResources;
	const showSelectionItems = showSelectionList && activeItems.length > 0 && paginatedSelectionItems.filtered.length > 0;
	const columnHeaderClassName = "border-b border-border bg-muted/20 px-4 py-3 min-h-[45px] flex items-center";
	const columnBodyClassName = "p-2 space-y-1";
	const paginatedColumnBodyClassName = cn(columnBodyClassName, PAGINATED_LIST_BODY_MIN_HEIGHT_CLASS);
	const columnPlaceholderClassName = "px-3 py-2.5 text-[13px] text-muted-foreground";
	const columnEmptyPlaceholderClassName = "text-center text-[13px] text-muted-foreground";
	const listRowClassName = "flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 transition-colors";
	const listRowActiveClassName = "border-primary bg-primary/5";
	const listRowButtonClassName = "border-transparent bg-background/60 hover:border-border hover:bg-muted/30";
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Adjust resources for the target plan")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border overflow-hidden",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-border",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col border-b border-border lg:border-b-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: columnHeaderClassName,
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: t("Projects")
									})
								}), /* @__PURE__ */ jsx(TooltipProvider, {
									delayDuration: 0,
									children: /* @__PURE__ */ jsx("div", {
										className: columnBodyClassName,
										children: projects.map((project) => {
											const isActive = project.$id === activeProjectId;
											const issueCount = getProjectIssueCount(project.$id);
											const isLoadingProject = resourceQueries.find((query, index) => projects[index]?.$id === project.$id && query.isLoading);
											return /* @__PURE__ */ jsxs("div", {
												role: "button",
												tabIndex: 0,
												onClick: () => setActiveProjectId(project.$id),
												onKeyDown: (event) => {
													if (event.key === "Enter" || event.key === " ") {
														event.preventDefault();
														setActiveProjectId(project.$id);
													}
												},
												className: cn(listRowClassName, "cursor-pointer justify-between gap-2 text-start", isActive ? listRowActiveClassName : listRowButtonClassName),
												children: [/* @__PURE__ */ jsxs("span", {
													className: "min-w-0",
													children: [/* @__PURE__ */ jsx("span", {
														className: "block truncate text-[13px] font-medium leading-normal text-foreground",
														title: project.name,
														children: formatProjectNameForDisplay(project.name)
													}), isLoadingProject ? /* @__PURE__ */ jsx("span", {
														className: "block text-[12px] leading-normal text-muted-foreground mt-0.5",
														children: t("Loading resources...")
													}) : null]
												}), issueCount > 0 ? /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx("span", {
														className: "inline-flex shrink-0",
														onClick: (event) => event.stopPropagation(),
														onPointerDown: (event) => event.stopPropagation(),
														children: /* @__PURE__ */ jsx(Badge, {
															variant: "warning",
															className: "text-[10px] shrink-0",
															children: issueCount
														})
													})
												}), /* @__PURE__ */ jsxs(TooltipContent, {
													side: "left",
													children: [
														issueCount,
														" ",
														t("over limit")
													]
												})] }) : null]
											}, project.$id);
										})
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col border-b border-border lg:border-b-0",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: columnHeaderClassName,
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: t("Resources")
										})
									}),
									showResourceTypeList ? /* @__PURE__ */ jsx(ColumnSearchBar, {
										value: resourceTypeSearch,
										onChange: setResourceTypeSearch,
										placeholder: t("Search resource types...")
									}) : null,
									/* @__PURE__ */ jsx("div", {
										className: showResourceTypeList && paginatedResourceTypes.filtered.length > 0 ? paginatedColumnBodyClassName : columnBodyClassName,
										children: !activeProject || !activeResources ? /* @__PURE__ */ jsx("p", {
											className: columnPlaceholderClassName,
											children: t("Select a project to view resources.")
										}) : activeProjectResourcesLoading ? /* @__PURE__ */ jsx("p", {
											className: columnPlaceholderClassName,
											children: t("Loading resources...")
										}) : paginatedResourceTypes.filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
											className: columnPlaceholderClassName,
											children: t("No resource types match your search.")
										}) : /* @__PURE__ */ jsx(PaginatedListSlots, {
											pageSize: COLUMN_LIST_PAGE_SIZE,
											itemCount: paginatedResourceTypes.paginated.length,
											children: paginatedResourceTypes.paginated.map(({ id, label }) => {
												const total = activeResources[id].total;
												const limit = limits[id];
												const overLimit = total > limit;
												return /* @__PURE__ */ jsxs("button", {
													type: "button",
													onClick: () => setActiveResourceType(id),
													className: cn(listRowClassName, PAGINATED_LIST_ROW_HEIGHT_CLASS, "items-center justify-between text-start shrink-0", activeResourceType === id ? listRowActiveClassName : listRowButtonClassName),
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium leading-normal text-foreground",
														children: t(label)
													}), overLimit ? /* @__PURE__ */ jsxs(Badge, {
														variant: "error",
														className: "text-[10px] shrink-0",
														children: [
															total,
															"/",
															limit
														]
													}) : /* @__PURE__ */ jsxs(Badge, {
														variant: "success",
														className: "text-[10px] shrink-0",
														children: [
															total,
															"/",
															limit
														]
													})]
												}, id);
											})
										})
									}),
									showResourceTypeList ? /* @__PURE__ */ jsx(ColumnPaginationFooter, {
										currentPage: paginatedResourceTypes.safePage,
										totalPages: paginatedResourceTypes.totalPages,
										totalItems: paginatedResourceTypes.totalItems,
										onPageChange: setResourceTypePage,
										reserveSpace: true
									}) : null
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: columnHeaderClassName,
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: activeTypeConfig ? t(activeTypeConfig.label) : t("Selection")
										})
									}),
									showSelectionList && activeItems.length > 0 ? /* @__PURE__ */ jsx(ColumnSearchBar, {
										value: selectionSearch,
										onChange: setSelectionSearch,
										placeholder: `${t("Search")} ${activeTypeConfig ? t(activeTypeConfig.label).toLowerCase() : t("items")}...`
									}) : null,
									/* @__PURE__ */ jsx("div", {
										className: cn(showSelectionItems ? paginatedColumnBodyClassName : "flex items-center justify-center p-8"),
										children: !activeResourceType ? /* @__PURE__ */ jsx("p", {
											className: columnEmptyPlaceholderClassName,
											children: t("Select a resource type to review items.")
										}) : !activeProject || !activeResources ? /* @__PURE__ */ jsx("p", {
											className: columnEmptyPlaceholderClassName,
											children: t("Select a project to view resources.")
										}) : activeItems.length === 0 ? /* @__PURE__ */ jsxs("p", {
											className: columnEmptyPlaceholderClassName,
											children: [
												t("No"),
												" ",
												activeTypeConfig ? t(activeTypeConfig.label).toLowerCase() : "",
												" ",
												t("in this project.")
											]
										}) : paginatedSelectionItems.filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
											className: columnEmptyPlaceholderClassName,
											children: t("No items match your search.")
										}) : /* @__PURE__ */ jsx(PaginatedListSlots, {
											pageSize: COLUMN_LIST_PAGE_SIZE,
											itemCount: paginatedSelectionItems.paginated.length,
											children: paginatedSelectionItems.paginated.map((item) => {
												const selected = activeSelected.has(item.$id);
												const disabled = !selected && activeLimit !== null && activeSelected.size >= activeLimit && activeViolation > 0;
												return /* @__PURE__ */ jsxs("div", {
													className: cn(listRowClassName, PAGINATED_LIST_ROW_HEIGHT_CLASS, "items-center justify-between gap-2 text-start shrink-0", selected ? listRowActiveClassName : listRowButtonClassName, disabled && "opacity-50"),
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex min-w-0 flex-1 items-center gap-3",
														children: [/* @__PURE__ */ jsx(Checkbox, {
															id: `${activeProject.$id}-${activeResourceType}-${item.$id}`,
															checked: selected,
															disabled: disabled || activeViolation === 0,
															onCheckedChange: () => activeResourceType && toggleResource(activeProject.$id, activeResourceType, item.$id, activeLimit),
															className: "shrink-0"
														}), /* @__PURE__ */ jsx(Label, {
															htmlFor: `${activeProject.$id}-${activeResourceType}-${item.$id}`,
															className: cn("min-w-0 truncate text-[13px] font-medium leading-normal text-foreground", disabled || activeViolation === 0 ? "cursor-default" : "cursor-pointer"),
															children: item.name
														})]
													}), !selected && activeViolation > 0 ? /* @__PURE__ */ jsx(Badge, {
														variant: "error",
														className: "text-[10px] shrink-0",
														children: t("Will delete")
													}) : null]
												}, item.$id);
											})
										})
									}),
									showSelectionList && activeItems.length > 0 ? /* @__PURE__ */ jsx(ColumnPaginationFooter, {
										currentPage: paginatedSelectionItems.safePage,
										totalPages: paginatedSelectionItems.totalPages,
										totalItems: paginatedSelectionItems.totalItems,
										onPageChange: setSelectionPage,
										reserveSpace: true
									}) : null
								]
							})
						]
					})
				})
			})
		]
	});
}
var DOWNGRADE_SELECTION_PAGE_SIZE = 5;
var DOWNGRADE_DELETE_PAGE_SIZE = 100;
function findCurrentUserMembership(memberships, account) {
	if (!account) return void 0;
	return memberships.find((membership) => membership.userId === account.$id || !!account.email && membership.userEmail?.toLowerCase() === account.email.toLowerCase());
}
async function fetchAllDowngradeMemberships(organizationId) {
	const all = [];
	let page = 0;
	let total = 0;
	do {
		const data = await fetchOrganizationMemberships(organizationId, page, DOWNGRADE_DELETE_PAGE_SIZE);
		all.push(...data.memberships ?? []);
		total = data.total ?? all.length;
		page += 1;
	} while (all.length < total);
	return all;
}
async function fetchAllDowngradeDomains(organizationId) {
	const all = [];
	let page = 0;
	let total = 0;
	do {
		const data = await fetchOrganizationDomains(organizationId, page, DOWNGRADE_DELETE_PAGE_SIZE);
		all.push(...data.domains ?? []);
		total = data.total ?? all.length;
		page += 1;
	} while (all.length < total);
	return all;
}
function DowngradeValidation({ organizationId, organizationName, projects, projectsTotal = projects.length, targetPlan, onRef, onValidityChange, deletedOrganizationImpact = null, deletedOrganizationLoading = false, expectDeletedOrganizationImpact = false }) {
	const t = useT();
	const { account } = useAuth();
	const accountModel = account;
	const limits = useMemo(() => getDowngradePlanLimits(targetPlan), [targetPlan]);
	const projectsLimit = limits.projects;
	const membersLimit = limits.members;
	const domainsLimit = limits.domains;
	const needsProjectSelection = projectsLimit !== null && projectsTotal > projectsLimit;
	const [projectPage, setProjectPage] = useState(1);
	const [memberPage, setMemberPage] = useState(1);
	const [domainPage, setDomainPage] = useState(1);
	const [displayedProjectPage, setDisplayedProjectPage] = useState(1);
	const [displayedMemberPage, setDisplayedMemberPage] = useState(1);
	const [displayedDomainPage, setDisplayedDomainPage] = useState(1);
	const { data: projectPageData, isLoading: projectsLoading, isFetching: projectsFetching } = useQuery({
		queryKey: [
			"projects",
			"organization",
			organizationId,
			"downgrade",
			projectPage,
			DOWNGRADE_SELECTION_PAGE_SIZE
		],
		queryFn: () => fetchOrganizationProjects(organizationId, projectPage - 1, DOWNGRADE_SELECTION_PAGE_SIZE),
		enabled: !!organizationId && needsProjectSelection,
		placeholderData: keepPreviousData,
		staleTime: 3e4
	});
	const { data: membershipsData, isLoading: membershipsLoading, isFetching: membershipsFetching } = useQuery({
		queryKey: [
			"memberships",
			"organization",
			organizationId,
			"downgrade",
			memberPage,
			DOWNGRADE_SELECTION_PAGE_SIZE
		],
		queryFn: () => fetchOrganizationMemberships(organizationId, memberPage - 1, DOWNGRADE_SELECTION_PAGE_SIZE),
		enabled: !!organizationId,
		placeholderData: keepPreviousData,
		staleTime: 3e4
	});
	const { data: domainsData, isLoading: domainsLoading, isFetching: domainsFetching } = useQuery({
		queryKey: [
			"domains",
			"organization",
			organizationId,
			"downgrade",
			domainPage,
			DOWNGRADE_SELECTION_PAGE_SIZE
		],
		queryFn: () => fetchOrganizationDomains(organizationId, domainPage - 1, DOWNGRADE_SELECTION_PAGE_SIZE),
		enabled: !!organizationId,
		placeholderData: keepPreviousData,
		staleTime: 3e4
	});
	useEffect(() => {
		if (projectsFetching || !projectPageData) return;
		setDisplayedProjectPage(projectPage);
	}, [
		projectPage,
		projectPageData,
		projectsFetching
	]);
	useEffect(() => {
		if (membershipsFetching || !membershipsData) return;
		setDisplayedMemberPage(memberPage);
	}, [
		memberPage,
		membershipsData,
		membershipsFetching
	]);
	useEffect(() => {
		if (domainsFetching || !domainsData) return;
		setDisplayedDomainPage(domainPage);
	}, [
		domainPage,
		domainsData,
		domainsFetching
	]);
	const projectPageProjects = projectPageData?.projects ?? [];
	const currentProjects = needsProjectSelection ? projectPageProjects : projects;
	const currentProjectsTotal = needsProjectSelection ? projectPageData?.total ?? projectsTotal : projectsTotal;
	const memberships = membershipsData?.memberships ?? [];
	const membershipsTotal = membershipsData?.total ?? memberships.length;
	const domains = domainsData?.domains ?? [];
	const domainsTotal = domainsData?.total ?? domains.length;
	const needsMemberSelection = membersLimit !== null && (membershipsLoading || membershipsTotal > membersLimit);
	const needsDomainSelection = domainsLimit !== null && (domainsLoading || domainsTotal > domainsLimit);
	const pageCurrentUserMembership = useMemo(() => findCurrentUserMembership(memberships, accountModel), [memberships, accountModel]);
	const { data: currentUserMembershipData } = useQuery({
		queryKey: [
			"memberships",
			"organization",
			organizationId,
			"downgrade",
			"current-user",
			accountModel?.email
		],
		queryFn: () => fetchOrganizationMemberships(organizationId, 0, 1, accountModel?.email ?? void 0),
		enabled: !!organizationId && !!accountModel?.email,
		staleTime: 3e4
	});
	const queriedCurrentUserMembership = useMemo(() => findCurrentUserMembership(currentUserMembershipData?.memberships ?? [], accountModel), [currentUserMembershipData?.memberships, accountModel]);
	const currentUserMembership = pageCurrentUserMembership ?? queriedCurrentUserMembership;
	const lockedMembershipId = currentUserMembership?.$id ?? null;
	const [selectedProjectIds, setSelectedProjectIds] = useState(() => /* @__PURE__ */ new Set());
	const [selectedMemberIds, setSelectedMemberIds] = useState(() => /* @__PURE__ */ new Set());
	const [selectedDomainIds, setSelectedDomainIds] = useState(() => /* @__PURE__ */ new Set());
	const [selectedProjectsById, setSelectedProjectsById] = useState(() => /* @__PURE__ */ new Map());
	const [selectedMembershipsById, setSelectedMembershipsById] = useState(() => /* @__PURE__ */ new Map());
	const [selectedDomainsById, setSelectedDomainsById] = useState(() => /* @__PURE__ */ new Map());
	useEffect(() => {
		setSelectedProjectIds(/* @__PURE__ */ new Set());
		setSelectedMemberIds(/* @__PURE__ */ new Set());
		setSelectedDomainIds(/* @__PURE__ */ new Set());
		setSelectedProjectsById(/* @__PURE__ */ new Map());
		setSelectedMembershipsById(/* @__PURE__ */ new Map());
		setSelectedDomainsById(/* @__PURE__ */ new Map());
	}, [organizationId]);
	useEffect(() => {
		if (!needsMemberSelection || !lockedMembershipId || !currentUserMembership) return;
		setSelectedMemberIds((prev) => {
			if (prev.has(lockedMembershipId)) return prev;
			const next = new Set(prev);
			next.add(lockedMembershipId);
			return next;
		});
		setSelectedMembershipsById((prev) => {
			if (prev.has(lockedMembershipId)) return prev;
			const next = new Map(prev);
			next.set(lockedMembershipId, currentUserMembership);
			return next;
		});
	}, [
		needsMemberSelection,
		lockedMembershipId,
		currentUserMembership
	]);
	const keptProjects = useMemo(() => {
		if (needsProjectSelection) return Array.from(selectedProjectsById.values());
		return projects;
	}, [
		needsProjectSelection,
		projects,
		selectedProjectsById
	]);
	const keptMemberships = useMemo(() => {
		if (needsMemberSelection) return Array.from(selectedMembershipsById.values());
		return memberships;
	}, [
		needsMemberSelection,
		memberships,
		selectedMembershipsById
	]);
	const keptDomains = useMemo(() => {
		if (needsDomainSelection) return Array.from(selectedDomainsById.values());
		return domains;
	}, [
		needsDomainSelection,
		domains,
		selectedDomainsById
	]);
	const projectSelectionValid = !needsProjectSelection || projectsLimit !== null && selectedProjectIds.size === projectsLimit;
	const memberSelectionValid = !needsMemberSelection || membersLimit !== null && selectedMemberIds.size === membersLimit && (!lockedMembershipId || selectedMemberIds.has(lockedMembershipId));
	const domainSelectionValid = !needsDomainSelection || domainsLimit !== null && selectedDomainIds.size === domainsLimit;
	const orgSelectionsLoading = needsProjectSelection && projectsLoading || needsMemberSelection && membershipsLoading || needsDomainSelection && domainsLoading;
	const orgSelectionsValid = !orgSelectionsLoading && projectSelectionValid && memberSelectionValid && domainSelectionValid;
	const resourceRef = useRef(null);
	const resourceValidRef = useRef(false);
	const [resourceImpact, setResourceImpact] = useState({});
	const [keptProjectResourceImpacts, setKeptProjectResourceImpacts] = useState([]);
	const [resourceImpactLoading, setResourceImpactLoading] = useState(false);
	const handleResourceImpactChange = useCallback((impact, loading, projectImpacts) => {
		setResourceImpact((prev) => {
			if (JSON.stringify(prev) === JSON.stringify(impact)) return prev;
			return impact;
		});
		setKeptProjectResourceImpacts((prev) => {
			if (JSON.stringify(prev) === JSON.stringify(projectImpacts)) return prev;
			return projectImpacts;
		});
		setResourceImpactLoading((prev) => prev === loading ? prev : loading);
	}, []);
	const toggleProject = useCallback((projectId) => {
		if (!needsProjectSelection || projectsLimit === null) return;
		const project = currentProjects.find((item) => item.$id === projectId);
		setSelectedProjectIds((prev) => {
			const next = new Set(prev);
			if (next.has(projectId)) next.delete(projectId);
			else if (next.size < projectsLimit) next.add(projectId);
			return next;
		});
		setSelectedProjectsById((prev) => {
			const next = new Map(prev);
			if (next.has(projectId)) next.delete(projectId);
			else if (next.size < projectsLimit && project) next.set(projectId, project);
			return next;
		});
	}, [
		currentProjects,
		needsProjectSelection,
		projectsLimit
	]);
	const toggleMember = useCallback((membershipId) => {
		if (!needsMemberSelection || membersLimit === null) return;
		if (membershipId === lockedMembershipId) return;
		const membership = memberships.find((item) => item.$id === membershipId);
		setSelectedMemberIds((prev) => {
			const next = new Set(prev);
			if (next.has(membershipId)) next.delete(membershipId);
			else if (next.size < membersLimit) next.add(membershipId);
			return next;
		});
		setSelectedMembershipsById((prev) => {
			const next = new Map(prev);
			if (next.has(membershipId)) next.delete(membershipId);
			else if (next.size < membersLimit && membership) next.set(membershipId, membership);
			return next;
		});
	}, [
		memberships,
		needsMemberSelection,
		membersLimit,
		lockedMembershipId
	]);
	const toggleDomain = useCallback((domainId) => {
		if (!needsDomainSelection || domainsLimit === null) return;
		const domain = domains.find((item) => item.$id === domainId);
		setSelectedDomainIds((prev) => {
			const next = new Set(prev);
			if (next.has(domainId)) next.delete(domainId);
			else if (next.size < domainsLimit) next.add(domainId);
			return next;
		});
		setSelectedDomainsById((prev) => {
			const next = new Map(prev);
			if (next.has(domainId)) next.delete(domainId);
			else if (next.size < domainsLimit && domain) next.set(domainId, domain);
			return next;
		});
	}, [
		domains,
		needsDomainSelection,
		domainsLimit
	]);
	const syncValidity = useCallback(() => {
		const resourceValid = keptProjects.length === 0 || resourceValidRef.current;
		onValidityChange?.(projectSelectionValid && orgSelectionsValid && resourceValid);
	}, [
		onValidityChange,
		projectSelectionValid,
		orgSelectionsValid,
		keptProjects.length
	]);
	const handleResourceRef = useCallback((ref) => {
		resourceRef.current = ref;
	}, []);
	const handleResourceValidityChange = useCallback((resourceValid) => {
		resourceValidRef.current = resourceValid;
		syncValidity();
	}, [syncValidity]);
	useEffect(() => {
		syncValidity();
	}, [
		projectSelectionValid,
		orgSelectionsValid,
		syncValidity
	]);
	const onRefRef = useRef(onRef);
	const keptProjectsRef = useRef(keptProjects);
	const keptMembershipsRef = useRef(keptMemberships);
	const keptDomainsRef = useRef(keptDomains);
	const projectSelectionValidRef = useRef(projectSelectionValid);
	const orgSelectionsValidRef = useRef(orgSelectionsValid);
	const membershipsRef = useRef(memberships);
	const domainsRef = useRef(domains);
	const selectedMemberIdsRef = useRef(selectedMemberIds);
	const selectedDomainIdsRef = useRef(selectedDomainIds);
	useEffect(() => {
		onRefRef.current = onRef;
	}, [onRef]);
	keptProjectsRef.current = keptProjects;
	keptMembershipsRef.current = keptMemberships;
	keptDomainsRef.current = keptDomains;
	projectSelectionValidRef.current = projectSelectionValid;
	orgSelectionsValidRef.current = orgSelectionsValid;
	membershipsRef.current = memberships;
	domainsRef.current = domains;
	selectedMemberIdsRef.current = selectedMemberIds;
	selectedDomainIdsRef.current = selectedDomainIds;
	const deleteMarkedMemberships = useCallback(async () => {
		if (!needsMemberSelection) return;
		const membershipIdsToDelete = (await fetchAllDowngradeMemberships(organizationId)).filter((membership) => !selectedMemberIdsRef.current.has(membership.$id)).map((membership) => membership.$id);
		if (membershipIdsToDelete.length > 0) await deleteDowngradeMemberships(organizationId, membershipIdsToDelete, Array.from(selectedMemberIdsRef.current));
	}, [needsMemberSelection, organizationId]);
	const deleteMarkedResources = useCallback(async () => {
		const domainIdsToDelete = (needsDomainSelection ? await fetchAllDowngradeDomains(organizationId) : []).filter((domain) => !selectedDomainIdsRef.current.has(domain.$id)).map((domain) => domain.$id);
		if (domainIdsToDelete.length > 0) await deleteDowngradeDomains(organizationId, domainIdsToDelete, Array.from(selectedDomainIdsRef.current));
		await resourceRef.current?.deleteMarkedResources();
	}, [needsDomainSelection, organizationId]);
	const deleteMarkedResourcesRef = useRef(deleteMarkedResources);
	const deleteMarkedMembershipsRef = useRef(deleteMarkedMemberships);
	deleteMarkedResourcesRef.current = deleteMarkedResources;
	deleteMarkedMembershipsRef.current = deleteMarkedMemberships;
	useEffect(() => {
		onRefRef.current({
			getSelectedProjects: () => keptProjectsRef.current.map((project) => project.$id),
			getSelectedMembershipIds: () => keptMembershipsRef.current.map((membership) => membership.$id),
			getSelectedDomainIds: () => keptDomainsRef.current.map((domain) => domain.$id),
			isValid: () => {
				const resourceValid = keptProjectsRef.current.length === 0 || resourceValidRef.current;
				return projectSelectionValidRef.current && orgSelectionsValidRef.current && resourceValid;
			},
			deleteMarkedResources: () => deleteMarkedResourcesRef.current(),
			deleteMarkedMemberships: () => deleteMarkedMembershipsRef.current()
		});
		return () => {
			onRefRef.current(null);
		};
	}, []);
	const memberItems = useMemo(() => memberships.map((membership) => ({
		id: membership.$id,
		label: membership.userName || membership.userEmail || membership.$id,
		description: membership.userEmail || void 0,
		locked: membership.$id === lockedMembershipId
	})), [memberships, lockedMembershipId]);
	const domainItems = useMemo(() => domains.map((domain) => ({
		id: domain.$id,
		label: domain.domain
	})), [domains]);
	const hasOrgLevelSelections = needsProjectSelection || needsMemberSelection || needsDomainSelection;
	const orgSelectionReady = orgSelectionsValid && !orgSelectionsLoading;
	const showProjectResourceValidation = orgSelectionReady && keptProjects.length > 0;
	const showImpactSummary = deletedOrganizationLoading || !!deletedOrganizationImpact || orgSelectionReady && (hasOrgLevelSelections || keptProjects.length > 0);
	if (projects.length === 0 && !needsMemberSelection && !needsDomainSelection) return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Adjust resources for the target plan")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("This organization has no projects.")
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			needsProjectSelection && projectsLimit !== null ? /* @__PURE__ */ jsx(DowngradeProjectSelection, {
				projects: currentProjects,
				total: currentProjectsTotal,
				page: displayedProjectPage,
				projectsLimit,
				selectedProjectIds,
				onToggleProject: toggleProject,
				onPageChange: setProjectPage,
				loading: projectsLoading && !projectPageData,
				paginationDisabled: projectsFetching
			}) : null,
			needsMemberSelection && membersLimit !== null ? /* @__PURE__ */ jsx(DowngradeLimitSelection, {
				title: t("Choose members to keep"),
				description: `${t("The target plan allows")} ${membersLimit} ${membersLimit === 1 ? t("member") : t("members")}. ${t("Unselected members will be removed from the organization.")}`,
				resourceLabel: "members",
				limit: membersLimit,
				items: memberItems,
				total: membershipsTotal,
				page: displayedMemberPage,
				selectedIds: selectedMemberIds,
				onToggle: toggleMember,
				onPageChange: setMemberPage,
				loading: membershipsLoading && !membershipsData,
				paginationDisabled: membershipsFetching
			}) : null,
			needsDomainSelection && domainsLimit !== null ? /* @__PURE__ */ jsx(DowngradeLimitSelection, {
				title: t("Choose domains to keep"),
				description: `${t("The target plan allows")} ${domainsLimit} ${domainsLimit === 1 ? t("domain") : t("domains")}. ${t("Unselected domains will be deleted.")}`,
				resourceLabel: "domains",
				limit: domainsLimit,
				items: domainItems,
				total: domainsTotal,
				page: displayedDomainPage,
				selectedIds: selectedDomainIds,
				onToggle: toggleDomain,
				onPageChange: setDomainPage,
				loading: domainsLoading && !domainsData,
				paginationDisabled: domainsFetching
			}) : null,
			showProjectResourceValidation ? /* @__PURE__ */ jsx(DowngradeResourceValidation, {
				projects: keptProjects,
				targetPlan,
				onRef: handleResourceRef,
				onValidityChange: handleResourceValidityChange,
				onImpactChange: handleResourceImpactChange
			}) : null,
			showImpactSummary ? /* @__PURE__ */ jsx(DowngradeImpactSummary, {
				keptOrganizationName: organizationName,
				allProjects: projects,
				keptProjects,
				allMemberships: memberships,
				keptMemberships,
				allDomains: domains,
				keptDomains,
				resourceImpact,
				keptProjectResourceImpacts,
				resourcesLoading: resourceImpactLoading || orgSelectionsLoading,
				deletedOrganizationImpact,
				deletedOrganizationLoading,
				expectDeletedOrganizationImpact,
				keptOrganizationImpactReady: orgSelectionReady
			}) : null,
			hasOrgLevelSelections && !orgSelectionReady ? /* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Adjust resources for the target plan")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: orgSelectionsLoading ? t("Loading organization resources...") : needsProjectSelection && keptProjects.length === 0 ? t("Select projects above to review their resources.") : t("Complete the selections above to review project resources.")
					})]
				})
			}) : showProjectResourceValidation ? null : hasOrgLevelSelections && orgSelectionReady && keptProjects.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Adjust resources for the target plan")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("No projects to review. Confirm your member and domain selections above, then continue.")
					})]
				})
			}) : null
		]
	});
}
var DELETED_ORG_LIST_LIMIT$1 = 1e3;
async function fetchDeletedOrganizationImpact(organizationId, organizationName, fallbackProjects = []) {
	const [projectsData, membershipsData, domainsData] = await Promise.all([
		fetchOrganizationProjects(organizationId),
		fetchOrganizationMemberships(organizationId, 0, DELETED_ORG_LIST_LIMIT$1),
		fetchOrganizationDomains(organizationId, 0, DELETED_ORG_LIST_LIMIT$1)
	]);
	const fetchedProjects = projectsData.projects ?? [];
	const projects = fetchedProjects.length > 0 ? fetchedProjects : fallbackProjects;
	const resourceImpacts = await Promise.all(projects.map((project) => fetchProjectDowngradeResources(project.$id)));
	const resourceImpact = {};
	const projectResourceImpacts = projects.map((project, index) => {
		const resources = resourceImpacts[index];
		const projectImpact = {};
		for (const { id } of DOWNGRADE_RESOURCE_TYPES) {
			resourceImpact[id] = (resourceImpact[id] ?? 0) + resources[id].total;
			projectImpact[id] = resources[id].total;
		}
		return {
			projectId: project.$id,
			projectName: project.name || project.$id,
			resourceImpact: projectImpact
		};
	});
	return {
		organizationId,
		organizationName,
		projects,
		memberships: membershipsData.memberships ?? [],
		domains: domainsData.domains ?? [],
		resourceImpact,
		projectResourceImpacts
	};
}
function getCouponErrorMessage(error) {
	const message = error instanceof AppwriteException ? error.message : error instanceof Error ? error.message : "Invalid coupon code";
	if (message.includes("not_found")) return "Coupon not found. Please check the code and try again.";
	if (message.includes("already_used")) return "This coupon has already been used.";
	if (message.includes("not_eligible")) return "This coupon is not eligible for your selected plan.";
	if (message.includes("unsupported")) return "Credits are not supported on this plan.";
	return message;
}
function ValidateCreditModal({ open, onOpenChange, onCouponApply, elevatedForWizard = false }) {
	const t = useT();
	const [couponCode, setCouponCode] = useState("");
	const [isApplying, setIsApplying] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const trimmedCode = couponCode.trim();
	const handleApply = async () => {
		if (!trimmedCode) {
			toast.error(t("Please enter a coupon code"));
			return;
		}
		setIsApplying(true);
		setSubmitError(null);
		try {
			const resolvedCoupon = await fetchCouponAccount(trimmedCode);
			if (!resolvedCoupon) {
				const message = t("Coupon not found. Please check the code and try again.");
				setSubmitError(message);
				toast.error(message);
				return;
			}
			onCouponApply(resolvedCoupon);
			setCouponCode("");
			setSubmitError(null);
			onOpenChange(false);
			toast.success(t("Coupon applied successfully"));
		} catch (error) {
			const message = t(getCouponErrorMessage(error));
			setSubmitError(message);
			toast.error(message);
		} finally {
			setIsApplying(false);
		}
	};
	const handleOpenChange = (newOpen) => {
		if (!newOpen) {
			setCouponCode("");
			setSubmitError(null);
		}
		onOpenChange(newOpen);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: cn("sm:max-w-md p-0", elevatedForWizard && "z-[9999]"),
			overlayClassName: elevatedForWizard ? "z-[9999]" : void 0,
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Apply coupon") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Enter a coupon code to update your estimated total. Applied credits expire after a set period and do not roll over.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "coupon-code",
							className: "text-[13px] font-medium",
							children: [
								t("Coupon code"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-destructive",
									children: "*"
								})
							]
						}), /* @__PURE__ */ jsx(Input, {
							id: "coupon-code",
							value: couponCode,
							onChange: (e) => {
								setCouponCode(e.target.value.toUpperCase());
								setSubmitError(null);
							},
							placeholder: t("Enter coupon code"),
							className: "mt-2 h-9 text-[13px]",
							disabled: isApplying,
							onKeyDown: (e) => {
								if (e.key === "Enter") handleApply();
							}
						})] }), submitError ? /* @__PURE__ */ jsx(WarningAlert, {
							icon: AlertCircle,
							children: submitError
						}) : null]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => handleOpenChange(false),
						disabled: isApplying,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: () => void handleApply(),
						disabled: !trimmedCode || isApplying,
						...analyticsAttrs("upgrade-apply-coupon-confirm"),
						children: t("Apply coupon")
					})]
				})
			]
		})
	});
}
var ESTIMATION_DEBOUNCE_MS = 500;
var DELETED_ORG_LIST_LIMIT = 1e3;
var DOWNGRADE_PROJECT_DELETE_PAGE_SIZE = 100;
function usesFreeOrganizationSlot(org) {
	return org.plan === "free" || !!org.billingPlanDowngrade;
}
function isOrganizationWriteResult(value) {
	return !!value && typeof value === "object" && typeof value.$id === "string" && !isPaymentAuthentication(value);
}
function catalogPlanForId(queryClient, planId) {
	if (!planId) return void 0;
	return resolveBillingPlanRecord(planId, queryClient.getQueryData(billingPlansQueryOptions().queryKey)?.plans);
}
function getInitialDowngradeProgressPhase({ showResourceDeletionStep, showOrganizationDeletionStep, showProjectDeletionStep, showPlanUpdateStep, showMembershipDeletionStep }) {
	if (showResourceDeletionStep) return "deleting-resources";
	if (showOrganizationDeletionStep) return "deleting-organization";
	if (showProjectDeletionStep) return "deleting-projects";
	if (showPlanUpdateStep) return "updating-plan";
	if (showMembershipDeletionStep) return "deleting-memberships";
	return "complete";
}
async function fetchAllDowngradeProjects(organizationId) {
	const all = [];
	let page = 0;
	let total = 0;
	do {
		const data = await fetchOrganizationProjects(organizationId, page, DOWNGRADE_PROJECT_DELETE_PAGE_SIZE);
		all.push(...data.projects ?? []);
		total = data.total ?? all.length;
		page += 1;
	} while (all.length < total);
	return all;
}
function ChangePlanWizardFullscreen() {
	const t = useT();
	const navigate = useNavigate();
	const search = useSearch({ from: "/_public/upgrade" });
	const orgId = search.orgId;
	const isCreateMode = !orgId;
	const queryClient = useQueryClient();
	const refreshOrganizationBillingResources = useCallback(async (organizationId, seedOrganization, targetPlanId) => {
		await Promise.all([
			queryClient.cancelQueries({ queryKey: ["organization", organizationId] }),
			queryClient.cancelQueries({ queryKey: [
				"organization",
				"plan",
				organizationId
			] }),
			queryClient.cancelQueries({ queryKey: ["organizations", "console"] })
		]);
		if (seedOrganization?.$id) queryClient.setQueryData(["organization", seedOrganization.$id], seedOrganization);
		const catalogPlan = catalogPlanForId(queryClient, targetPlanId || seedOrganization?.billingPlan);
		if (catalogPlan) queryClient.setQueryData([
			"organization",
			"plan",
			organizationId
		], catalogPlan);
		const [fetchedOrganization, , fetchedPlan] = await Promise.all([
			queryClient.fetchQuery(organizationQueryOptions(organizationId)),
			queryClient.fetchQuery(organizationsQueryOptions()),
			queryClient.fetchQuery(organizationPlanQueryOptions(organizationId)).catch(() => void 0)
		]);
		if (seedOrganization?.billingPlan && fetchedOrganization?.billingPlan !== seedOrganization.billingPlan) {
			queryClient.setQueryData(["organization", organizationId], seedOrganization);
			queryClient.setQueryData(["organizations", "console"], (previous) => {
				if (!previous?.teams) return previous;
				return {
					...previous,
					teams: previous.teams.map((team) => team.$id === organizationId ? {
						...team,
						...seedOrganization
					} : team)
				};
			});
		}
		if (catalogPlan && fetchedPlan?.$id !== catalogPlan.$id) queryClient.setQueryData([
			"organization",
			"plan",
			organizationId
		], catalogPlan);
		await Promise.allSettled([
			queryClient.refetchQueries({
				queryKey: ["organization-usage", organizationId],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: ["organization-projects", organizationId],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"projects",
					"active",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"projects",
					"pinned",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"billing-aggregation",
					"organization",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"invoices",
					"organization",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"credits",
					"organization",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: [
					"payment-method",
					"organization",
					organizationId
				],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: ["payment-methods", "account"],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: ["billing-addresses", "account"],
				type: "all"
			}),
			queryClient.refetchQueries({
				queryKey: ["billing-address"],
				type: "all"
			})
		]);
	}, [queryClient]);
	const seedCreatedOrganizationCache = useCallback((createdOrg) => {
		queryClient.setQueryData(["organization", createdOrg.$id], createdOrg);
		queryClient.setQueryData(["organizations", "console"], (previous) => {
			const teams = previous?.teams ?? [];
			if (teams.some((team) => team.$id === createdOrg.$id)) return previous;
			return {
				...previous,
				teams: [...teams, createdOrg],
				total: (previous?.total ?? teams.length) + 1
			};
		});
	}, [queryClient]);
	const handleCancel = useSmartNavigation();
	const { organization } = useOrganizationById(orgId);
	const { plan } = useOrganizationPlan(orgId);
	const { organizations } = useOrganizations();
	const { plans: billingPlans, isLoading: plansLoading } = useBillingPlans();
	const hasFreeOrgs = useMemo(() => {
		return organizations.some((org) => usesFreeOrganizationSlot(org) && org.$id !== orgId);
	}, [organizations, orgId]);
	const otherFreeOrg = useMemo(() => {
		return organizations.find((org) => usesFreeOrganizationSlot(org) && org.$id !== orgId) ?? null;
	}, [organizations, orgId]);
	const defaultPlan = useMemo(() => {
		if (isCreateMode) return BillingPlanTier.Tier1;
		const current = organization?.billingPlan || BillingPlanTier.Tier0;
		if (getPlanCanonicalFromRecord(current, billingPlans) === "free" && billingPlans && Object.keys(billingPlans).length > 0) {
			const firstPaidPlan = Object.keys(billingPlans).filter((planId) => getPlanCanonicalFromRecord(planId, billingPlans) !== "free").sort((a, b) => {
				return (resolveBillingPlanRecord(a, billingPlans)?.order ?? 999) - (resolveBillingPlanRecord(b, billingPlans)?.order ?? 999);
			})[0];
			if (firstPaidPlan) return firstPaidPlan;
		}
		return current;
	}, [
		isCreateMode,
		organization?.billingPlan,
		billingPlans
	]);
	const selfService = isCreateMode ? true : plan?.selfService !== false;
	const [organizationName, setOrganizationName] = useState("");
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [selectedCoupon, setSelectedCoupon] = useState(null);
	const [paymentMethodId, setPaymentMethodId] = useState(void 0);
	const [taxId, setTaxId] = useState("");
	const [billingBudget, setBillingBudget] = useState(void 0);
	const [feedbackMessage, setFeedbackMessage] = useState("");
	const [couponModalOpen, setCouponModalOpen] = useState(false);
	const [paymentModalOpen, setPaymentModalOpen] = useState(false);
	const [setupProgress, setSetupProgress] = useState(null);
	const downgradeValidationRef = useRef(null);
	const [downgradeValidationValid, setDowngradeValidationValid] = useState(true);
	const [freePlanKeepChoiceId, setFreePlanKeepChoiceId] = useState(null);
	const handleDowngradeValidationRef = useCallback((ref) => {
		downgradeValidationRef.current = ref;
	}, []);
	const handleDowngradeValidationValid = useCallback((valid) => {
		setDowngradeValidationValid((prev) => prev === valid ? prev : valid);
	}, []);
	const { projects: allProjects, total: allProjectsTotal, isLoading: allProjectsLoading } = useOrganizationProjects(orgId);
	const selectedPlanIsFree = useMemo(() => isFreePlanRef(selectedPlan, billingPlans), [selectedPlan, billingPlans]);
	const selectedPlanIsPro = useMemo(() => getPlanCanonicalFromRecord(selectedPlan, billingPlans) === "pro", [selectedPlan, billingPlans]);
	const currentPlanTier = isCreateMode ? BillingPlanTier.Tier0 : organization?.billingPlan || "tier-0";
	const currentPlanEnum = useMemo(() => {
		if (isCreateMode) return BillingPlanTier.Tier0;
		try {
			return currentPlanTier;
		} catch {
			return BillingPlanTier.Tier0;
		}
	}, [currentPlanTier, isCreateMode]);
	const currentPlanIsFree = useMemo(() => isFreePlanRef(currentPlanEnum, billingPlans), [currentPlanEnum, billingPlans]);
	const updatePlanMutation = useUpdateOrganizationPlan();
	const createOrgMutation = useCreateOrganization();
	const validateOrganizationMutation = useValidateOrganization();
	const createDowngradeFeedbackMutation = useCreateDowngradeFeedback();
	const isSubmitting = updatePlanMutation.isPending || createOrgMutation.isPending || setupProgress !== null;
	const paymentConfirmedHandled = useRef(false);
	useEffect(() => {
		if (search?.type === "payment_confirmed" && orgId && !paymentConfirmedHandled.current) {
			paymentConfirmedHandled.current = true;
			const invites = (search?.invites)?.split(",") || [];
			const handlePaymentConfirmation = async (organizationId, invites$1) => {
				try {
					const validatedOrganization = await validateOrganizationMutation.mutateAsync({
						organizationId,
						invites: invites$1
					});
					await refreshOrganizationBillingResources(organizationId, isOrganizationWriteResult(validatedOrganization) ? validatedOrganization : void 0, search?.plan || (isOrganizationWriteResult(validatedOrganization) ? validatedOrganization.billingPlan : void 0));
					toast.success(t("Payment confirmed successfully"));
					navigate({
						to: "/organizations/$orgId/settings/billing",
						params: { orgId: organizationId }
					});
				} catch (error) {
					toast.error(error instanceof Error ? error.message : t("Failed to validate payment"));
				}
			};
			handlePaymentConfirmation(orgId, invites);
		}
	}, [
		search?.type,
		orgId,
		validateOrganizationMutation,
		refreshOrganizationBillingResources,
		navigate,
		t
	]);
	const [planInitialized, setPlanInitialized] = useState(false);
	useEffect(() => {
		if (planInitialized) return;
		if (!billingPlans || Object.keys(billingPlans).length === 0) return;
		if (!isCreateMode && orgId && !organization) return;
		const isValidPlan = (plan$1) => plan$1 in billingPlans;
		const planParam = search?.plan;
		if (planParam && isValidPlan(planParam)) {
			setSelectedPlan(planParam);
			setPlanInitialized(true);
			return;
		}
		if (defaultPlan && isValidPlan(defaultPlan)) setSelectedPlan(defaultPlan);
		setPlanInitialized(true);
	}, [
		search?.plan,
		defaultPlan,
		planInitialized,
		isCreateMode,
		orgId,
		organization,
		billingPlans
	]);
	const couponCodeFromUrl = search?.code;
	const { coupon: couponFromUrl } = useCouponAccount(couponCodeFromUrl?.trim() || null);
	useEffect(() => {
		if (couponFromUrl) setSelectedCoupon(couponFromUrl);
	}, [couponFromUrl]);
	const isUpgrade = useMemo(() => {
		if (!selectedPlan) return false;
		if (isCreateMode) return !selectedPlanIsFree;
		if (!currentPlanEnum) return false;
		return compareBillingPlanRefs(currentPlanEnum, selectedPlan, billingPlans) === "upgrade";
	}, [
		selectedPlan,
		currentPlanEnum,
		isCreateMode,
		billingPlans,
		selectedPlanIsFree
	]);
	const isDowngrade = useMemo(() => {
		if (isCreateMode || !selectedPlan || !currentPlanEnum) return false;
		if (selectedPlanIsFree && !currentPlanIsFree) return true;
		return compareBillingPlanRefs(currentPlanEnum, selectedPlan, billingPlans) === "downgrade";
	}, [
		selectedPlan,
		currentPlanEnum,
		isCreateMode,
		billingPlans,
		selectedPlanIsFree,
		currentPlanIsFree
	]);
	const showFreePlanConflict = selectedPlanIsFree && hasFreeOrgs && !!otherFreeOrg && isDowngrade;
	const orgToDelete = useMemo(() => {
		if (!showFreePlanConflict || !otherFreeOrg || isCreateMode) return null;
		const currentOrg = organization ? {
			$id: organization.$id,
			name: organization.name
		} : null;
		const keepChoiceId = freePlanKeepChoiceId ?? organization?.$id;
		if (!keepChoiceId) return null;
		return resolveOrgToDelete(keepChoiceId, otherFreeOrg, currentOrg, !isCreateMode);
	}, [
		showFreePlanConflict,
		otherFreeOrg,
		organization,
		isCreateMode,
		freePlanKeepChoiceId
	]);
	const deletedOrganizationFallbackProjects = useMemo(() => {
		if (orgToDelete?.$id !== orgId) return [];
		return allProjects;
	}, [
		allProjects,
		orgId,
		orgToDelete?.$id
	]);
	const deletedOrganizationFallbackProjectSignature = useMemo(() => deletedOrganizationFallbackProjects.map((project) => project.$id).sort().join(","), [deletedOrganizationFallbackProjects]);
	const { data: deletedOrganizationImpact, isLoading: deletedOrganizationImpactLoading, isPending: deletedOrganizationImpactPending } = useQuery({
		queryKey: [
			"billing",
			"deleted-organization-impact",
			"with-project-resource-breakdown",
			orgToDelete?.$id,
			deletedOrganizationFallbackProjectSignature
		],
		queryFn: () => fetchDeletedOrganizationImpact(orgToDelete.$id, orgToDelete.name, deletedOrganizationFallbackProjects),
		enabled: !!orgToDelete && (orgToDelete.$id !== orgId || !allProjectsLoading),
		staleTime: 30 * 1e3
	});
	const isDeletingCurrentOrganization = orgToDelete?.$id === orgId;
	const currentDeletedMembershipsQuery = useQuery({
		queryKey: [
			"billing",
			"current-deleted-organization-memberships",
			orgId
		],
		queryFn: () => fetchOrganizationMemberships(orgId, 0, DELETED_ORG_LIST_LIMIT),
		enabled: !!orgId && isDeletingCurrentOrganization,
		staleTime: 30 * 1e3
	});
	const currentDeletedDomainsQuery = useQuery({
		queryKey: [
			"billing",
			"current-deleted-organization-domains",
			orgId
		],
		queryFn: () => fetchOrganizationDomains(orgId, 0, DELETED_ORG_LIST_LIMIT),
		enabled: !!orgId && isDeletingCurrentOrganization,
		staleTime: 30 * 1e3
	});
	const currentDeletedResourceQueries = useQueries({ queries: allProjects.map((project) => ({
		queryKey: [
			"billing",
			"current-deleted-organization-project-resources",
			project.$id
		],
		queryFn: () => fetchProjectDowngradeResources(project.$id),
		enabled: isDeletingCurrentOrganization && !allProjectsLoading && !!project.$id,
		staleTime: 30 * 1e3
	})) });
	const currentDeletedOrganizationImpact = useMemo(() => {
		if (!isDeletingCurrentOrganization || !orgToDelete || !orgId) return null;
		if (allProjectsLoading) return null;
		const resourceImpact = {};
		const projectResourceImpacts = allProjects.map((project, index) => {
			const resources = currentDeletedResourceQueries[index]?.data;
			const projectImpact = {};
			for (const { id } of DOWNGRADE_RESOURCE_TYPES) {
				const total = resources?.[id]?.total ?? 0;
				resourceImpact[id] = (resourceImpact[id] ?? 0) + total;
				projectImpact[id] = total;
			}
			return {
				projectId: project.$id,
				projectName: project.name || project.$id,
				resourceImpact: projectImpact
			};
		});
		return {
			organizationId: orgId,
			organizationName: orgToDelete.name,
			projects: allProjects,
			memberships: currentDeletedMembershipsQuery.data?.memberships ?? [],
			domains: currentDeletedDomainsQuery.data?.domains ?? [],
			resourceImpact,
			projectResourceImpacts
		};
	}, [
		allProjects,
		allProjectsLoading,
		currentDeletedDomainsQuery.data?.domains,
		currentDeletedMembershipsQuery.data?.memberships,
		currentDeletedResourceQueries,
		isDeletingCurrentOrganization,
		orgId,
		orgToDelete
	]);
	const currentDeletedOrganizationLoading = isDeletingCurrentOrganization && (allProjectsLoading || currentDeletedMembershipsQuery.isLoading || currentDeletedDomainsQuery.isLoading || currentDeletedResourceQueries.some((query) => query.isLoading));
	const effectiveDeletedOrganizationImpact = currentDeletedOrganizationImpact ?? deletedOrganizationImpact ?? null;
	const effectiveDeletedOrganizationLoading = currentDeletedOrganizationLoading || deletedOrganizationImpactLoading || deletedOrganizationImpactPending;
	useEffect(() => {
		if (!showFreePlanConflict || !organization || isCreateMode) {
			setFreePlanKeepChoiceId(null);
			return;
		}
		setFreePlanKeepChoiceId((prev) => prev ?? organization.$id);
	}, [
		showFreePlanConflict,
		organization?.$id,
		isCreateMode
	]);
	useEffect(() => {
		if (isDowngrade) setSelectedCoupon(null);
	}, [isDowngrade, selectedPlan]);
	const { paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods({ enabled: !!selectedPlan && !selectedPlanIsFree && isUpgrade || paymentModalOpen });
	useEffect(() => {
		if (paymentMethodId) return;
		if (organization?.paymentMethodId) setPaymentMethodId(organization.paymentMethodId);
		else if (paymentMethods.length > 0) {
			const completedMethod = paymentMethods.find((pm) => pm.last4);
			if (completedMethod) setPaymentMethodId(completedMethod.$id);
		}
	}, [
		organization?.paymentMethodId,
		paymentMethods,
		paymentMethodId
	]);
	const estimationPaymentMethodId = useMemo(() => {
		if (paymentMethodId) return paymentMethodId;
		if (organization?.paymentMethodId) return organization.paymentMethodId;
		return paymentMethods.find((pm) => pm.last4)?.$id;
	}, [
		paymentMethodId,
		organization?.paymentMethodId,
		paymentMethods
	]);
	const estimationCouponId = useMemo(() => {
		if (!isUpgrade || !selectedCoupon) return void 0;
		const value = selectedCoupon.code ?? selectedCoupon.$id;
		if (typeof value !== "string") return void 0;
		const trimmed = value.trim();
		return trimmed.length > 0 ? trimmed : void 0;
	}, [selectedCoupon, isUpgrade]);
	const debouncedEstimationPlan = useDebouncedValue(selectedPlan && !selectedPlanIsFree ? selectedPlan : null, ESTIMATION_DEBOUNCE_MS);
	const debouncedEstimationPaymentMethodId = useDebouncedValue(estimationPaymentMethodId ?? null, ESTIMATION_DEBOUNCE_MS);
	const shouldFetchUpdateEstimationDebounced = !isCreateMode && debouncedEstimationPlan && debouncedEstimationPlan !== currentPlanEnum && orgId;
	const shouldFetchCreateEstimationDebounced = isCreateMode && debouncedEstimationPlan && !!debouncedEstimationPaymentMethodId;
	const updateEstimation = useEstimationUpdatePlan(shouldFetchUpdateEstimationDebounced ? orgId : null, shouldFetchUpdateEstimationDebounced ? debouncedEstimationPlan : null, shouldFetchUpdateEstimationDebounced ? estimationCouponId : void 0);
	const createEstimation = useEstimationCreateOrganization(shouldFetchCreateEstimationDebounced ? debouncedEstimationPlan : null, shouldFetchCreateEstimationDebounced ? estimationCouponId : void 0, void 0, shouldFetchCreateEstimationDebounced ? debouncedEstimationPaymentMethodId : null);
	const estimation = isCreateMode ? createEstimation : updateEstimation;
	const estimationInputsDebouncing = (selectedPlan && !selectedPlanIsFree ? selectedPlan : null) !== debouncedEstimationPlan || isCreateMode && (estimationPaymentMethodId ?? null) !== debouncedEstimationPaymentMethodId;
	const awaitingEstimationPaymentMethod = isCreateMode && !!selectedPlan && !selectedPlanIsFree && !paymentMethodsLoading && !estimationPaymentMethodId;
	const estimationBoxLoading = estimation.isLoading || estimation.isFetching || estimationInputsDebouncing || isCreateMode && !!selectedPlan && !selectedPlanIsFree && paymentMethodsLoading;
	const targetPlanInfo = useMemo(() => {
		return resolveBillingPlanRecord(selectedPlan, billingPlans);
	}, [billingPlans, selectedPlan]);
	const targetProjectsLimit = typeof targetPlanInfo?.projects === "number" ? targetPlanInfo.projects : 0;
	const extraSeatPrice = typeof targetPlanInfo?.addons === "object" && targetPlanInfo.addons !== null && "seats" in targetPlanInfo.addons && typeof targetPlanInfo.addons.seats === "object" && targetPlanInfo.addons.seats !== null && "price" in targetPlanInfo.addons.seats ? targetPlanInfo.addons.seats.price : void 0;
	const needsDowngradeValidation = isDowngrade && !!selectedPlan && orgToDelete?.$id !== orgId;
	const shouldCollectDowngradeFeedback = isDowngrade && selectedPlanIsFree;
	useEffect(() => {
		if (!needsDowngradeValidation) {
			downgradeValidationRef.current = null;
			setDowngradeValidationValid(true);
		}
	}, [needsDowngradeValidation]);
	const isButtonDisabled = useMemo(() => {
		if (!selfService) return true;
		if (!selectedPlan) return true;
		if (isSubmitting) return true;
		if (isCreateMode) {
			if (!organizationName.trim()) return true;
			if (selectedPlanIsFree && hasFreeOrgs) return true;
			if (isUpgrade) {
				if (!paymentMethodId) return true;
				if (!paymentMethods.find((pm) => pm.$id === paymentMethodId)?.last4) return true;
			}
			return false;
		}
		if (selectedPlan === currentPlanEnum) return true;
		if (isUpgrade) {
			if (!paymentMethodId) return true;
			if (!paymentMethods.find((pm) => pm.$id === paymentMethodId)?.last4) return true;
		}
		if (isDowngrade) {
			if (needsDowngradeValidation && !downgradeValidationValid) return true;
			if (shouldCollectDowngradeFeedback) {
				if (!feedbackMessage.trim()) return true;
			}
			if (selectedPlanIsFree && hasFreeOrgs && !orgToDelete) return true;
		}
		return false;
	}, [
		selfService,
		selectedPlan,
		currentPlanEnum,
		isUpgrade,
		isDowngrade,
		paymentMethodId,
		paymentMethods,
		needsDowngradeValidation,
		downgradeValidationValid,
		shouldCollectDowngradeFeedback,
		feedbackMessage,
		selectedPlanIsFree,
		hasFreeOrgs,
		orgToDelete,
		isCreateMode,
		organizationName,
		isSubmitting
	]);
	const handleUpgrade = async () => {
		if (!orgId || !selectedPlan || !paymentMethodId) return;
		const planLabel = getBillingPlanDisplayLabel(selectedPlan);
		const showActivationStep = !selectedPlanIsFree;
		setSetupProgress({
			mode: "upgrade",
			phase: "submitting",
			planLabel,
			showPaymentStep: false,
			showActivationStep
		});
		try {
			const result = await updatePlanMutation.mutateAsync({
				organizationId: orgId,
				billingPlan: selectedPlan,
				paymentMethodId,
				billingAddressId: void 0,
				couponId: selectedCoupon?.code ?? selectedCoupon?.$id,
				invites: [],
				budget: billingBudget,
				taxId: taxId || null
			});
			const resultObj = result;
			if (typeof resultObj?.status === "string" && (resultObj.status === "requires_action" || resultObj.status === "requires_authentication") && !resultObj?.clientSecret) throw new Error("Payment authentication is required but the server did not return a client secret.");
			if (resultObj?.clientSecret) {
				setSetupProgress((prev) => prev ? {
					...prev,
					showPaymentStep: true,
					phase: "confirming-payment"
				} : prev);
				const selectedMethod = paymentMethods.find((pm) => pm.$id === paymentMethodId);
				await confirmPayment({
					clientSecret: resultObj.clientSecret,
					paymentMethod: selectedMethod?.providerMethodId || void 0
				});
				await queryClient.invalidateQueries({ queryKey: [
					"invoices",
					"organization",
					orgId
				] });
			}
			if (showActivationStep) setSetupProgress((prev) => prev ? {
				...prev,
				phase: "activating"
			} : prev);
			const validatedOrganization = await validateOrganizationMutation.mutateAsync({
				organizationId: orgId,
				invites: []
			});
			await refreshOrganizationBillingResources(orgId, isOrganizationWriteResult(validatedOrganization) ? validatedOrganization : isOrganizationWriteResult(result) ? result : void 0, selectedPlan);
			setSetupProgress((prev) => prev ? {
				...prev,
				phase: "complete"
			} : prev);
			toast.success(t("Plan updated successfully"));
			await navigate({
				to: "/organizations/$orgId/settings/billing",
				params: { orgId },
				replace: true
			});
		} catch (error) {
			setSetupProgress(null);
			toast.error(error instanceof Error ? error.message : t("Failed to update plan"));
		}
	};
	const handleDowngrade = async () => {
		if (!orgId || !selectedPlan) return;
		const planLabel = getBillingPlanDisplayLabel(selectedPlan);
		const selectedProjects = downgradeValidationRef.current?.getSelectedProjects?.();
		const shouldDeleteUnkeptProjects = orgToDelete?.$id !== orgId && targetProjectsLimit > 0 && allProjectsTotal > targetProjectsLimit && !!selectedProjects && selectedProjects.length > 0;
		const showResourceDeletionStep = !!downgradeValidationRef.current?.deleteMarkedResources;
		const showOrganizationDeletionStep = !!orgToDelete;
		const showPlanUpdateStep = orgToDelete?.$id !== orgId;
		const showMembershipDeletionStep = !!downgradeValidationRef.current?.deleteMarkedMemberships && orgToDelete?.$id !== orgId;
		setSetupProgress({
			mode: "downgrade",
			phase: getInitialDowngradeProgressPhase({
				showResourceDeletionStep,
				showOrganizationDeletionStep,
				showProjectDeletionStep: shouldDeleteUnkeptProjects,
				showPlanUpdateStep,
				showMembershipDeletionStep
			}),
			planLabel,
			showPaymentStep: false,
			showActivationStep: false,
			showPlanUpdateStep,
			showProjectDeletionStep: shouldDeleteUnkeptProjects,
			showResourceDeletionStep,
			showMembershipDeletionStep,
			showOrganizationDeletionStep
		});
		try {
			if (downgradeValidationRef.current?.deleteMarkedResources) {
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "deleting-resources"
				} : prev);
				await downgradeValidationRef.current.deleteMarkedResources();
			}
			if (orgToDelete && orgToDelete.$id !== orgId) {
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "deleting-organization"
				} : prev);
				await deleteOrganization(orgToDelete.$id);
				await queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
			}
			if (shouldDeleteUnkeptProjects) {
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "deleting-projects"
				} : prev);
				const selectedProjectIds = new Set(selectedProjects);
				const projectsToDelete = (await fetchAllDowngradeProjects(orgId)).filter((project) => !selectedProjectIds.has(project.$id));
				for (const project of projectsToDelete) await deleteProject(project.$id, project.region);
			}
			if (orgToDelete?.$id === orgId) {
				if (shouldCollectDowngradeFeedback) await createDowngradeFeedbackMutation.mutateAsync({
					organizationId: orgId,
					reason: "other",
					message: feedbackMessage,
					fromPlanId: currentPlanEnum,
					toPlanId: selectedPlan
				});
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "deleting-organization"
				} : prev);
				await deleteOrganization(orgId);
				await queryClient.refetchQueries({
					queryKey: ["organizations", "console"],
					type: "all"
				});
				if (otherFreeOrg?.$id) await refreshOrganizationBillingResources(otherFreeOrg.$id);
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "complete"
				} : prev);
				toast.success(t("Organization deleted successfully"));
				navigate({
					to: "/organizations/$orgId",
					params: { orgId: otherFreeOrg?.$id ?? orgId }
				});
				return;
			}
			setSetupProgress((prev) => prev ? {
				...prev,
				phase: "updating-plan"
			} : prev);
			const downgradeResult = await updatePlanMutation.mutateAsync({
				organizationId: orgId,
				billingPlan: selectedPlan,
				paymentMethodId
			});
			if (downgradeValidationRef.current?.deleteMarkedMemberships) {
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "deleting-memberships"
				} : prev);
				await downgradeValidationRef.current.deleteMarkedMemberships();
			}
			if (shouldCollectDowngradeFeedback) await createDowngradeFeedbackMutation.mutateAsync({
				organizationId: orgId,
				reason: "other",
				message: feedbackMessage,
				fromPlanId: currentPlanEnum,
				toPlanId: selectedPlan
			});
			await refreshOrganizationBillingResources(orgId, isOrganizationWriteResult(downgradeResult) ? downgradeResult : void 0, selectedPlan);
			setSetupProgress((prev) => prev ? {
				...prev,
				phase: "complete"
			} : prev);
			toast.success(t("Plan updated successfully"));
			navigate({
				to: "/organizations/$orgId/settings/billing",
				params: { orgId }
			});
		} catch (error) {
			setSetupProgress(null);
			toast.error(error instanceof Error ? error.message : t("Failed to update plan"));
		}
	};
	const handleCreateOrganization = async () => {
		if (!selectedPlan || !organizationName.trim()) return;
		const organizationId = ID.unique();
		const requiresPayment = !selectedPlanIsFree && isUpgrade && paymentMethodId;
		if (!selectedPlanIsFree && !paymentMethodId) return;
		const planLabel = getBillingPlanDisplayLabel(selectedPlan);
		const showActivationStep = !selectedPlanIsFree;
		let createdOrgId = null;
		setSetupProgress({
			mode: "create",
			phase: "submitting",
			organizationName: organizationName.trim(),
			planLabel,
			showPaymentStep: false,
			showActivationStep
		});
		try {
			const result = await createOrgMutation.mutateAsync({
				organizationId,
				name: organizationName.trim(),
				billingPlan: selectedPlan,
				paymentMethodId: requiresPayment ? paymentMethodId : void 0,
				couponId: isUpgrade ? selectedCoupon?.code ?? selectedCoupon?.$id : void 0,
				budget: billingBudget,
				taxId: taxId || null
			});
			const resultObj = result;
			createdOrgId = resultObj?.$id || organizationId;
			if (resultObj?.$id) seedCreatedOrganizationCache(resultObj);
			else seedCreatedOrganizationCache({
				$id: createdOrgId,
				name: organizationName.trim()
			});
			if (typeof resultObj?.status === "string" && (resultObj.status === "requires_action" || resultObj.status === "requires_authentication") && !resultObj?.clientSecret) throw new Error("Payment authentication is required but the server did not return a client secret.");
			if (resultObj?.clientSecret && paymentMethodId) {
				setSetupProgress((prev) => prev ? {
					...prev,
					showPaymentStep: true,
					phase: "confirming-payment"
				} : prev);
				const selectedMethod = paymentMethods.find((pm) => pm.$id === paymentMethodId);
				await confirmPayment({
					clientSecret: resultObj.clientSecret,
					paymentMethod: selectedMethod?.providerMethodId || void 0
				});
			}
			let createdSeedOrganization;
			if (isOrganizationWriteResult(result)) createdSeedOrganization = result;
			if (showActivationStep) {
				setSetupProgress((prev) => prev ? {
					...prev,
					phase: "activating"
				} : prev);
				const validatedOrganization = await validateOrganizationMutation.mutateAsync({
					organizationId: createdOrgId,
					invites: []
				});
				if (isOrganizationWriteResult(validatedOrganization)) createdSeedOrganization = validatedOrganization;
			}
			await refreshOrganizationBillingResources(createdOrgId, createdSeedOrganization, selectedPlan);
			await prefetchOrganizationOverviewData(queryClient, createdOrgId);
			setSetupProgress((prev) => prev ? {
				...prev,
				phase: "complete"
			} : prev);
			toast.success(t("Organization created successfully"));
			await navigate({
				to: "/organizations/$orgId",
				params: { orgId: createdOrgId },
				replace: true
			});
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to create organization"));
			if (createdOrgId) try {
				await prefetchOrganizationOverviewData(queryClient, createdOrgId);
				await navigate({
					to: "/organizations/$orgId",
					params: { orgId: createdOrgId },
					replace: true
				});
				return;
			} catch {}
			setSetupProgress(null);
		}
	};
	const handleSubmit = () => {
		if (isCreateMode) {
			handleCreateOrganization();
			return;
		}
		if (isUpgrade) handleUpgrade();
		else if (isDowngrade) handleDowngrade();
	};
	const handlePaymentMethodAdded = () => {
		setPaymentModalOpen(false);
	};
	const currentTierStr = currentPlanEnum;
	const selectedTierStr = selectedPlan;
	const showEstimatedTotal = selectedTierStr && selectedTierStr !== currentTierStr && !selectedPlanIsFree && currentTierStr !== "custom" && currentTierStr !== "Custom";
	const showPlanComparison = !showEstimatedTotal || selectedPlanIsFree || selectedTierStr === currentTierStr || currentTierStr === "custom" || currentTierStr === "Custom";
	const wizardTitle = isCreateMode ? t("Create organization") : t("Change plan");
	const submitLabel = isCreateMode ? t("Create organization") : t("Change plan");
	if (setupProgress) return /* @__PURE__ */ jsx(WizardLayout, {
		title: wizardTitle,
		fullscreen: true,
		useSidebar: false,
		skipInitialFieldFocus: true,
		fallbackPath: orgId ? `/organizations/${orgId}/settings/billing` : void 0,
		children: /* @__PURE__ */ jsx(OrganizationSetupProgress, { progress: setupProgress })
	});
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: wizardTitle,
		fullscreen: true,
		skipInitialFieldFocus: !isCreateMode,
		initialFocusKey: isCreateMode ? plansLoading ? "plans-loading" : "plans-ready" : void 0,
		fallbackPath: orgId ? `/organizations/${orgId}/settings/billing` : void 0,
		footerAlign: "right",
		sidebar: /* @__PURE__ */ jsxs(Fragment, { children: [showEstimatedTotal && /* @__PURE__ */ jsx(EstimatedTotalBox, {
			estimation: estimation.estimation,
			isLoading: estimationBoxLoading,
			awaitingPaymentMethod: awaitingEstimationPaymentMethod,
			error: estimation.error,
			onRetry: () => {
				estimation.refetch();
			},
			selectedPlan,
			billingPlans,
			coupon: selectedCoupon,
			onCouponRemove: () => setSelectedCoupon(null),
			budget: billingBudget,
			onBudgetChange: setBillingBudget
		}), showPlanComparison && /* @__PURE__ */ jsx(PlanComparisonBox, {
			currentPlan: currentPlanEnum,
			selectedPlan,
			plans: billingPlans
		})] }),
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			onClick: handleCancel,
			disabled: isSubmitting,
			...analyticsAttrs("upgrade-cancel"),
			children: t("Cancel")
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleSubmit,
			disabled: isButtonDisabled,
			...analyticsAttrs(isCreateMode ? "upgrade-create-org" : "upgrade-submit"),
			children: submitLabel
		})] }),
		children: [
			isCreateMode && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "organization-name",
					children: [
						t("Name"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-destructive",
							children: "*"
						})
					]
				}), /* @__PURE__ */ jsx(Input, {
					id: "organization-name",
					type: "text",
					placeholder: t("My Organization"),
					value: organizationName,
					onChange: (e) => setOrganizationName(e.target.value),
					disabled: isSubmitting,
					maxLength: 128,
					required: true
				})]
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Label, {
				className: "mb-2 block",
				children: [
					t("Select plan"),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-destructive",
						children: "*"
					})
				]
			}), !selfService ? /* @__PURE__ */ jsxs(Alert, {
				className: "mt-2",
				children: [
					/* @__PURE__ */ jsx(icons_exports.AlertTriangle, { className: "h-4 w-4" }),
					/* @__PURE__ */ jsx(AlertTitle, { children: t("Custom plan") }),
					/* @__PURE__ */ jsxs(AlertDescription, {
						className: "mt-2",
						children: [
							t("You are on a custom plan. To change your plan, contact your customer success manager or"),
							" ",
							orgId ? /* @__PURE__ */ jsx(Link, {
								to: "/organizations/$orgId/support",
								params: { orgId },
								className: "underline hover:text-foreground",
								children: t("contact support")
							}) : t("contact support"),
							"."
						]
					})
				]
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground mb-4",
				children: [
					t("For more details on our plans, visit our"),
					" ",
					/* @__PURE__ */ jsx(MarketingSiteLink, {
						className: "underline hover:text-foreground",
						href: "/pricing",
						children: t("pricing page")
					}),
					"."
				]
			}), plansLoading ? /* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Loading plans...")
					})
				})
			}) : billingPlans && typeof billingPlans === "object" && Object.keys(billingPlans).length > 0 ? /* @__PURE__ */ jsx(PlanSelection, {
				plans: billingPlans,
				currentPlan: currentPlanEnum,
				selectedPlan,
				onPlanSelect: setSelectedPlan,
				selfService,
				hasFreeOrgs,
				isCreateMode,
				variant: "inline"
			}) : /* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("No plans available. Please try refreshing the page.")
					})
				})
			})] })] }),
			isUpgrade && selectedPlan && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(SelectPaymentMethod, {
				paymentMethods,
				selectedPaymentMethodId: paymentMethodId,
				onPaymentMethodSelect: setPaymentMethodId,
				onAddPaymentMethod: () => setPaymentModalOpen(true),
				taxId,
				onTaxIdChange: setTaxId,
				showApplyCoupon: isUpgrade,
				onAddCredits: () => setCouponModalOpen(true)
			}) }),
			showFreePlanConflict && otherFreeOrg && /* @__PURE__ */ jsx(FreePlanConflictResolution, {
				otherFreeOrg,
				currentOrg: organization ? {
					$id: organization.$id,
					name: organization.name
				} : null,
				pendingOrgName: organizationName,
				showCurrentOrgOption: !isCreateMode,
				keepChoiceId: !isCreateMode && organization ? freePlanKeepChoiceId ?? organization.$id : void 0,
				onKeepChoiceChange: !isCreateMode ? setFreePlanKeepChoiceId : void 0
			}),
			isDowngrade && selectedPlan && /* @__PURE__ */ jsxs(Fragment, { children: [
				needsDowngradeValidation && orgId ? /* @__PURE__ */ jsx(DowngradeValidation, {
					organizationId: orgId,
					organizationName: organization?.name,
					projects: allProjects,
					projectsTotal: allProjectsTotal,
					targetPlan: targetPlanInfo,
					onRef: handleDowngradeValidationRef,
					onValidityChange: handleDowngradeValidationValid,
					deletedOrganizationImpact: effectiveDeletedOrganizationImpact,
					deletedOrganizationLoading: effectiveDeletedOrganizationLoading,
					expectDeletedOrganizationImpact: !!orgToDelete
				}, `${orgId}-${freePlanKeepChoiceId ?? "default"}`) : orgToDelete ? /* @__PURE__ */ jsx(DowngradeImpactSummary, {
					allProjects: [],
					keptProjects: [],
					resourceImpact: {},
					deletedOrganizationImpact: effectiveDeletedOrganizationImpact,
					deletedOrganizationLoading: effectiveDeletedOrganizationLoading,
					expectDeletedOrganizationImpact: true,
					keptOrganizationImpactReady: false
				}, `deleted-org-impact-${orgToDelete.$id}`) : null,
				selectedPlanIsPro && /* @__PURE__ */ jsxs(Alert, { children: [
					/* @__PURE__ */ jsx(icons_exports.AlertTriangle, { className: "h-4 w-4" }),
					/* @__PURE__ */ jsx(AlertTitle, { children: t("Monthly Charges for Extra Organization Members") }),
					/* @__PURE__ */ jsx(AlertDescription, {
						className: "mt-2",
						children: extraSeatPrice ? `${t("You will be charged")} $${extraSeatPrice} ${t("per month for each organization member beyond the plan limit.")}` : t("You will be charged for each organization member beyond the plan limit.")
					})
				] }),
				selectedPlanIsFree && /* @__PURE__ */ jsxs(WarningAlert, {
					title: t("Downgrading to Free Plan"),
					children: [
						t("Your plan will change on"),
						" ",
						organization?.billingPlanDowngrade || t("the end of your billing period"),
						". ",
						t("You will lose access to premium features and organization members beyond the free limit will be removed."),
						/* @__PURE__ */ jsx(DocsRouteLink, {
							className: "ms-1 underline",
							href: "/docs/migration",
							children: t("Learn more about migration")
						})
					]
				}),
				shouldCollectDowngradeFeedback && /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Label, {
						className: "mb-2 block",
						children: t("Feedback")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mb-4",
						children: t("What wasn't working for you? Please share anything that influenced your decision to downgrade. This feedback helps us improve the platform.")
					}),
					/* @__PURE__ */ jsxs(Label, {
						htmlFor: "downgrade-message",
						className: "text-[13px] font-medium",
						children: [
							t("Your feedback"),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-destructive",
								children: "*"
							})
						]
					}),
					/* @__PURE__ */ jsx(Textarea, {
						id: "downgrade-message",
						value: feedbackMessage,
						onChange: (e) => setFeedbackMessage(e.target.value),
						placeholder: t("Please share anything that influenced your decision to downgrade..."),
						className: "mt-2 min-h-[100px]",
						required: true
					})
				] })
			] }),
			/* @__PURE__ */ jsx(PaymentModal, {
				open: paymentModalOpen,
				onOpenChange: setPaymentModalOpen,
				organizationId: orgId,
				onSuccess: handlePaymentMethodAdded,
				elevatedForWizard: true
			}),
			/* @__PURE__ */ jsx(ValidateCreditModal, {
				open: couponModalOpen,
				onOpenChange: setCouponModalOpen,
				onCouponApply: (coupon) => {
					setSelectedCoupon(coupon);
				},
				elevatedForWizard: true
			})
		]
	});
}
function UpgradePage() {
	return /* @__PURE__ */ jsx(RequireAuth, { children: /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[9997] flex flex-col bg-background",
		children: /* @__PURE__ */ jsx(ChangePlanWizardFullscreen, {})
	}) });
}
export { UpgradePage as component };
