import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import { Dt as useOrganizationById, It as usePaymentMethods } from "./organizations-BKtnlNrj.js";
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
import { E as finalizeDomainTransferIn, h as domainTransferPriceQueryOptions, s as createDomainTransferIn } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./alert-BTaNwkUC.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import "./utils-DMkzhjmw.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as Route$1 } from "./organizations._orgId.domains.transfer-in-BLl6W3LV.js";
import { t as PaymentModal } from "./Payment-BjDWA9P5.js";
import "./WarningAlert-ZIbpbrZO.js";
import { t as PaymentMethodDropdown } from "./PaymentMethodDropdown-Ds1rkpnO.js";
import { t as useOrganizationDomainsPlanLimit } from "./useOrganizationDomainsPlanLimit-CdhZDNIk.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { DomainPurchaseStatus } from "@appwrite.io/console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
function formatUsd(amount) {
	return amount.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
function renewalPeriodSuffix(periodYears) {
	if (periodYears <= 1) return "/yr";
	return `/${periodYears} yrs`;
}
function TransferDomainInSummary({ quotedDomain, isPriceLoading, priceError, quote }) {
	const t = useT();
	const hasDomain = quotedDomain.length > 0;
	const hasTransferPrice = quote != null && quote.price > 0;
	const periodYears = quote?.periodYears ?? 1;
	const periodLabel = periodYears === 1 ? t("1 year") : `${periodYears} ${t("years")}`;
	const renewalYears = quote?.renewalPeriodYears ?? quote?.periodYears ?? 1;
	const hasRenewal = quote != null && quote.renewalPrice != null && quote.renewalPrice > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "border-b border-border bg-muted/30 px-5 py-3.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-semibold tracking-tight text-foreground",
				children: t("Transfer summary")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 text-[12px] text-muted-foreground leading-snug",
				children: t("Estimated fees from the registry before you pay.")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "px-5 py-5",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
					children: t("Domain")
				}),
				hasDomain ? /* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "min-w-0 break-all font-mono text-[15px] font-medium leading-snug tracking-tight text-foreground",
						children: quotedDomain
					}), quote?.premium ? /* @__PURE__ */ jsx(Badge, {
						variant: "info",
						className: "shrink-0 px-1.5 py-0 text-[10px] font-medium",
						children: t("Premium")
					}) : null]
				}) : /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
					children: t("Enter your full domain name to load a price quote.")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 space-y-3 border-t border-border pt-5",
					children: !hasDomain ? null : isPriceLoading ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-full rounded-md bg-muted/60" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full rounded-md bg-muted/50" })]
					}) : priceError ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: t("We couldn't load a quote for this domain. You can still continue - the amount due is confirmed when you complete payment.")
					}) : hasTransferPrice ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4 text-[13px] leading-snug",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium text-foreground",
								children: t("Transfer")
							}), /* @__PURE__ */ jsxs("p", {
								className: "mt-0.5 text-[12px] text-muted-foreground",
								children: [
									t("Registry transfer"),
									" · ",
									periodLabel
								]
							})]
						}), /* @__PURE__ */ jsxs("p", {
							className: "shrink-0 tabular-nums font-semibold text-foreground",
							children: ["$", formatUsd(quote.price)]
						})]
					}), hasRenewal ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4 text-[13px] leading-snug",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium text-foreground",
								children: t("Renewal")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-[12px] text-muted-foreground",
								children: t("When you renew after the initial term")
							})]
						}), /* @__PURE__ */ jsxs("p", {
							className: "shrink-0 tabular-nums font-semibold text-foreground",
							children: [
								"$",
								formatUsd(quote.renewalPrice),
								/* @__PURE__ */ jsx("span", {
									className: "ms-1 text-[12px] font-normal text-muted-foreground",
									children: renewalPeriodSuffix(renewalYears)
								})
							]
						})]
					}) : null] }) : quote?.premium ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: t("This name is listed as premium. Final transfer pricing is confirmed when you submit payment.")
					}) : /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: t("Pricing is confirmed when you submit payment.")
					})
				}),
				hasDomain && hasTransferPrice ? /* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("Total due today")
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[22px] font-semibold tabular-nums tracking-tight text-foreground",
						children: ["$", formatUsd(quote.price)]
					})]
				}) : null
			]
		})]
	});
}
var PRICE_DEBOUNCE_MS = 500;
function TransferDomainInWizard({ search }) {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { organization } = useOrganizationById(orgId);
	const { paymentMethods } = usePaymentMethods();
	const { isAtLimit: isDomainLimitReached, limit: domainsLimit } = useOrganizationDomainsPlanLimit(orgId);
	const [domainInput, setDomainInput] = useState("");
	const [authCode, setAuthCode] = useState("");
	const [authCodeRevealed, setAuthCodeRevealed] = useState(false);
	const [paymentMethodId, setPaymentMethodId] = useState("");
	const [paymentModalOpen, setPaymentModalOpen] = useState(false);
	const [debouncedPriceDomain, setDebouncedPriceDomain] = useState("");
	const paymentReturnHandled = useRef(false);
	const fallbackPath = `/organizations/${orgId}/domains/`;
	useEffect(() => {
		const raw = domainInput.trim().toLowerCase();
		if (!raw.includes(".")) {
			setDebouncedPriceDomain("");
			return;
		}
		const timer = setTimeout(() => setDebouncedPriceDomain(raw), PRICE_DEBOUNCE_MS);
		return () => clearTimeout(timer);
	}, [domainInput]);
	const priceQuery = useQuery(domainTransferPriceQueryOptions(debouncedPriceDomain));
	useEffect(() => {
		if (!organization) return;
		const pm = organization.paymentMethodId || organization.backupPaymentMethodId;
		if (pm) setPaymentMethodId((id) => id || pm);
	}, [organization]);
	useEffect(() => {
		if (search.payment !== "transfer_in" || !search.invoiceId || !orgId || paymentReturnHandled.current) return;
		paymentReturnHandled.current = true;
		(async () => {
			try {
				const result = await finalizeDomainTransferIn({
					invoiceId: search.invoiceId,
					organizationId: orgId
				});
				if (result.status === DomainPurchaseStatus.Succeeded) {
					await Promise.all([queryClient.refetchQueries({ queryKey: [
						"domains",
						"organization",
						orgId
					] }), queryClient.invalidateQueries({ queryKey: ["domain", result.domainId] })]);
					toast.success(t("Transfer payment confirmed"));
					navigate({
						to: "/organizations/$orgId/domains/$domainId",
						params: {
							orgId,
							domainId: result.domainId
						},
						replace: true
					});
				} else {
					toast.error(t("Transfer could not be completed"));
					navigate({
						to: "/organizations/$orgId/domains/transfer-in",
						params: { orgId },
						search: {},
						replace: true
					});
				}
			} catch (e) {
				toast.error(e instanceof Error ? e.message : t("Failed to complete transfer"));
				navigate({
					to: "/organizations/$orgId/domains/transfer-in",
					params: { orgId },
					search: {},
					replace: true
				});
			}
		})();
	}, [
		search.payment,
		search.invoiceId,
		orgId,
		navigate,
		queryClient,
		t
	]);
	const completedPaymentMethods = useMemo(() => paymentMethods.filter((pm) => pm.last4), [paymentMethods]);
	const transferMutation = useMutation({
		mutationFn: async () => {
			if (!orgId) throw new Error(t("Organization is required"));
			if (isDomainLimitReached) throw new Error(`${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.`);
			const domain = domainInput.trim().toLowerCase();
			if (!domain || !domain.includes(".")) throw new Error(t("Enter a full domain name (e.g. example.com)"));
			if (!authCode.trim()) throw new Error(t("Authorization code is required"));
			if (!paymentMethodId) throw new Error(t("Select a payment method"));
			const purchase = await createDomainTransferIn({
				domain,
				organizationId: orgId,
				authCode: authCode.trim(),
				paymentMethodId
			});
			if (purchase.status === DomainPurchaseStatus.Succeeded) return {
				kind: "done",
				domainId: purchase.domainId
			};
			if (purchase.clientSecret) await confirmPayment({ clientSecret: purchase.clientSecret });
			const finalized = await finalizeDomainTransferIn({
				invoiceId: purchase.$id,
				organizationId: orgId
			});
			if (finalized.status !== DomainPurchaseStatus.Succeeded) throw new Error(t("Transfer could not be completed. Please try again."));
			return {
				kind: "done",
				domainId: finalized.domainId
			};
		},
		onSuccess: async (result) => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				orgId
			] }), queryClient.invalidateQueries({ queryKey: ["domain", result.domainId] })]);
			toast.success(t("Domain transfer started"));
			navigate({
				to: "/organizations/$orgId/domains/$domainId",
				params: {
					orgId,
					domainId: result.domainId
				}
			});
		},
		onError: (e) => {
			toast.error(getErrorMessage(e));
		}
	});
	const canStartTransfer = !transferMutation.isPending && !isDomainLimitReached && completedPaymentMethods.length > 0 && !!paymentMethodId && domainInput.trim().includes(".") && authCode.trim().length > 0;
	if (!orgId) return null;
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Transfer domain in"),
		fallbackPath,
		fullscreen: true,
		useSidebar: true,
		footerAlign: "right",
		sidebar: /* @__PURE__ */ jsx(TransferDomainInSummary, {
			quotedDomain: debouncedPriceDomain,
			isPriceLoading: priceQuery.isFetching && !!debouncedPriceDomain,
			priceError: !!priceQuery.isError,
			quote: priceQuery.data
		}),
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			type: "button",
			disabled: transferMutation.isPending,
			onClick: () => navigate({
				to: "/organizations/$orgId/domains",
				params: { orgId }
			}),
			children: t("Cancel")
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			disabled: !canStartTransfer,
			onClick: () => transferMutation.mutate(),
			children: t("Start transfer")
		})] }),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "w-full min-w-0 space-y-6 lg:max-w-none",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Transfer an existing domain")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[13px] text-muted-foreground",
						children: t("Request a transfer into this organization using the authorization code from your current registrar. Registry fees are shown in the summary as you type the domain name.")
					}),
					isDomainLimitReached ? /* @__PURE__ */ jsxs("p", {
						className: "mt-2 text-[12px] text-amber-600 dark:text-amber-400",
						children: [
							t("Your current plan includes up to"),
							" ",
							domainsLimit,
							" ",
							t("domains"),
							". ",
							/* @__PURE__ */ jsx(UpgradePlanLink, { orgId }),
							" ",
							t("to transfer another domain.")
						]
					}) : null
				] }),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Domain")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Full hostname and the auth code your registrar provided.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "td-domain",
									className: "text-[13px]",
									children: t("Domain name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "td-domain",
									value: domainInput,
									onChange: (e) => setDomainInput(e.target.value),
									placeholder: "example.com",
									className: "h-9 text-[13px] font-mono"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "td-auth",
									className: "text-[13px]",
									children: t("Authorization code")
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ jsx(Input, {
										id: "td-auth",
										type: authCodeRevealed ? "text" : "password",
										value: authCode,
										onChange: (e) => setAuthCode(e.target.value),
										placeholder: t("From your current registrar"),
										className: "h-9 text-[13px] font-mono",
										autoComplete: "off"
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "icon",
										className: "h-9 w-9 shrink-0",
										onClick: () => setAuthCodeRevealed((v) => !v),
										title: authCodeRevealed ? t("Hide code") : t("Show code"),
										"aria-label": authCodeRevealed ? t("Hide code") : t("Show code"),
										children: authCodeRevealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
									})]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Payment")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Transfer fees are charged to the selected payment method.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx(PaymentMethodDropdown, {
								paymentMethods,
								selectedPaymentMethodId: paymentMethodId,
								onPaymentMethodSelect: setPaymentMethodId,
								onAddPaymentMethod: () => setPaymentModalOpen(true)
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ jsx(PaymentModal, {
			open: paymentModalOpen,
			onOpenChange: setPaymentModalOpen,
			organizationId: orgId,
			onSuccess: () => setPaymentModalOpen(false),
			elevatedForWizard: true
		})]
	});
}
function TransferDomainInPage() {
	return /* @__PURE__ */ jsx(TransferDomainInWizard, { search: Route$1.useSearch() });
}
export { TransferDomainInPage as component };
