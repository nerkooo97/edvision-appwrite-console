import { t as cn } from "./utils-DoqqkI3X.js";
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
import { Dt as useOrganizationById, It as usePaymentMethods, ht as useBillingAddresses } from "./organizations-BKtnlNrj.js";
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
import { T as finalizeDomainPurchase, o as createDomainPurchase, v as fetchDomainPrice } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./skeleton-8d0Q_D56.js";
import "./alert-BTaNwkUC.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import "./utils-DMkzhjmw.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as Route$1 } from "./organizations._orgId.domains.buy-4T7h8yF5.js";
import { t as DomainSearchResults } from "./DomainSearchResults-CwRWQhVB.js";
import { t as AddressModal } from "./Address-BE4m8u57.js";
import { t as PaymentModal } from "./Payment-BjDWA9P5.js";
import "./WarningAlert-ZIbpbrZO.js";
import { t as PaymentMethodDropdown } from "./PaymentMethodDropdown-Ds1rkpnO.js";
import { t as useOrganizationDomainsPlanLimit } from "./useOrganizationDomainsPlanLimit-CdhZDNIk.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { DomainPurchaseStatus } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus } from "lucide-react";
function splitAccountName(name) {
	const t = name.trim();
	if (!t) return {
		firstName: "",
		lastName: ""
	};
	const i = t.indexOf(" ");
	if (i <= 0) return {
		firstName: t,
		lastName: ""
	};
	return {
		firstName: t.slice(0, i),
		lastName: t.slice(i + 1).trim()
	};
}
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
function BuyDomainPurchaseSummary({ selection }) {
	const t = useT();
	const hasRegistrationPrice = selection.price != null && selection.price > 0;
	const periodLabel = selection.periodYears === 1 ? t("1 year") : `${selection.periodYears} ${t("years")}`;
	const renewalYears = selection.renewalPeriodYears ?? selection.periodYears ?? 1;
	const hasRenewal = selection.renewalPrice != null && selection.renewalPrice > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "border-b border-border bg-muted/30 px-5 py-3.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-semibold tracking-tight text-foreground",
				children: t("Order summary")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 text-[12px] text-muted-foreground leading-snug",
				children: t("Review charges before you complete payment.")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "px-5 py-5",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
					children: t("Domain")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "min-w-0 break-all font-mono text-[15px] font-medium leading-snug tracking-tight text-foreground",
						children: selection.domain
					}), selection.premium ? /* @__PURE__ */ jsx(Badge, {
						variant: "info",
						className: "shrink-0 px-1.5 py-0 text-[10px] font-medium",
						children: t("Premium")
					}) : null]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 space-y-3 border-t border-border pt-5",
					children: hasRegistrationPrice ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4 text-[13px] leading-snug",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium text-foreground",
								children: t("Registration")
							}), /* @__PURE__ */ jsxs("p", {
								className: "mt-0.5 text-[12px] text-muted-foreground",
								children: [
									t("Initial term"),
									" · ",
									periodLabel
								]
							})]
						}), /* @__PURE__ */ jsxs("p", {
							className: "shrink-0 tabular-nums font-semibold text-foreground",
							children: ["$", formatUsd(selection.price)]
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
								formatUsd(selection.renewalPrice),
								/* @__PURE__ */ jsx("span", {
									className: "ms-1 text-[12px] font-normal text-muted-foreground",
									children: renewalPeriodSuffix(renewalYears)
								})
							]
						})]
					}) : null] }) : /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: t("Pricing is confirmed when you submit payment. Premium and specialty names may require manual review from the registry.")
					})
				}),
				hasRegistrationPrice ? /* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("Total due today")
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[22px] font-semibold tabular-nums tracking-tight text-foreground",
						children: ["$", formatUsd(selection.price)]
					})]
				}) : null
			]
		})]
	});
}
function BuyDomainCheckout({ orgId, selection, fallbackPath, onBackToSearch }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { account } = useAuth();
	const { organization } = useOrganizationById(orgId);
	const { paymentMethods } = usePaymentMethods();
	const { addresses } = useBillingAddresses();
	const { isAtLimit: isDomainLimitReached, limit: domainsLimit } = useOrganizationDomainsPlanLimit(orgId);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [billingAddressId, setBillingAddressId] = useState("");
	const [paymentMethodId, setPaymentMethodId] = useState("");
	const [paymentModalOpen, setPaymentModalOpen] = useState(false);
	const [addressModalOpen, setAddressModalOpen] = useState(false);
	const completedPaymentMethods = useMemo(() => paymentMethods.filter((pm) => pm.last4), [paymentMethods]);
	useEffect(() => {
		if (!account || typeof account !== "object") return;
		const acc = account;
		const { firstName: f, lastName: l } = splitAccountName(acc.name || "");
		setFirstName((prev) => prev || f);
		setLastName((prev) => prev || l);
		setEmail((prev) => prev || acc.email || "");
		setPhone((prev) => prev || acc.phone || "");
	}, [account]);
	useEffect(() => {
		if (addresses.length === 0) return;
		setBillingAddressId((prev) => {
			if (prev && addresses.some((a) => a.$id === prev)) return prev;
			const orgAddr = organization?.billingAddressId;
			if (orgAddr && addresses.some((a) => a.$id === orgAddr)) return orgAddr;
			return addresses[0].$id;
		});
	}, [addresses, organization?.billingAddressId]);
	useEffect(() => {
		if (completedPaymentMethods.length === 0) return;
		setPaymentMethodId((prev) => {
			if (prev && completedPaymentMethods.some((p) => p.$id === prev)) return prev;
			const orgPm = organization?.paymentMethodId || organization?.backupPaymentMethodId;
			if (orgPm && completedPaymentMethods.some((p) => p.$id === orgPm)) return orgPm;
			return completedPaymentMethods[0].$id;
		});
	}, [
		completedPaymentMethods,
		organization?.paymentMethodId,
		organization?.backupPaymentMethodId
	]);
	const purchaseMutation = useMutation({
		mutationFn: async () => {
			if (isDomainLimitReached) throw new Error(`${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.`);
			if (!billingAddressId) throw new Error(t("Select a billing address"));
			if (!paymentMethodId) throw new Error(t("Select a payment method"));
			const fn = firstName.trim();
			const ln = lastName.trim();
			if (!fn || !ln) throw new Error(t("First and last name are required"));
			if (!email.trim()) throw new Error(t("Email is required"));
			if (!phone.trim()) throw new Error(t("Phone is required (E.164, e.g. +15551234567)"));
			const purchase = await createDomainPurchase({
				domain: selection.domain,
				organizationId: orgId,
				firstName: fn,
				lastName: ln,
				email: email.trim(),
				phone: phone.trim(),
				billingAddressId,
				paymentMethodId,
				companyName: companyName.trim() || void 0,
				periodYears: selection.periodYears
			});
			if (purchase.status === DomainPurchaseStatus.Succeeded) return {
				kind: "done",
				domainId: purchase.domainId
			};
			if (purchase.clientSecret) await confirmPayment({ clientSecret: purchase.clientSecret });
			const finalized = await finalizeDomainPurchase({
				invoiceId: purchase.$id,
				organizationId: orgId
			});
			if (finalized.status !== DomainPurchaseStatus.Succeeded) throw new Error(t("Purchase could not be completed. Please try again."));
			return {
				kind: "done",
				domainId: finalized.domainId
			};
		},
		onSuccess: async (result) => {
			await queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				orgId
			] });
			toast.success(`${selection.domain} ${t("registered successfully")}`);
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
	const addressLabel = (a) => {
		return [
			a.streetAddress,
			a.addressLine2,
			a.city,
			a.state,
			a.postalCode,
			a.country
		].filter(Boolean).join(", ") || a.$id;
	};
	const canSubmit = !purchaseMutation.isPending && !isDomainLimitReached && !!billingAddressId && !!paymentMethodId && completedPaymentMethods.length > 0 && addresses.length > 0;
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Buy domain"),
		fallbackPath,
		fullscreen: true,
		useSidebar: true,
		sidebar: /* @__PURE__ */ jsx(BuyDomainPurchaseSummary, { selection }),
		showBackButton: true,
		backButtonLabel: t("Back"),
		onBack: onBackToSearch,
		footerAlign: "right",
		constrainFooterWidth: true,
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			type: "button",
			onClick: onBackToSearch,
			children: t("Back")
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			disabled: !canSubmit,
			className: cn((completedPaymentMethods.length === 0 || addresses.length === 0) && "opacity-80"),
			onClick: () => purchaseMutation.mutate(),
			children: t("Pay and register")
		})] }),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "w-full min-w-0 space-y-6 lg:max-w-none",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Complete registration")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[13px] text-muted-foreground",
							children: t("Registrant details must match your domain registry requirements.")
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
								t("to register another domain.")
							]
						}) : null
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Registrant contact")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "bd-first",
												className: "text-[13px]",
												children: t("First name")
											}), /* @__PURE__ */ jsx(Input, {
												id: "bd-first",
												value: firstName,
												onChange: (e) => setFirstName(e.target.value),
												className: "h-9 text-[13px]"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "bd-last",
												className: "text-[13px]",
												children: t("Last name")
											}), /* @__PURE__ */ jsx(Input, {
												id: "bd-last",
												value: lastName,
												onChange: (e) => setLastName(e.target.value),
												className: "h-9 text-[13px]"
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "bd-email",
											className: "text-[13px]",
											children: t("Email")
										}), /* @__PURE__ */ jsx(Input, {
											id: "bd-email",
											type: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "h-9 text-[13px]"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "bd-phone",
											className: "text-[13px]",
											children: t("Phone (E.164)")
										}), /* @__PURE__ */ jsx(Input, {
											id: "bd-phone",
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											placeholder: "+15551234567",
											className: "h-9 text-[13px] font-mono"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "bd-company",
											className: "text-[13px]",
											children: t("Company (optional)")
										}), /* @__PURE__ */ jsx(Input, {
											id: "bd-company",
											value: companyName,
											onChange: (e) => setCompanyName(e.target.value),
											className: "h-9 text-[13px]"
										})]
									})
								]
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
									children: t("Billing address")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("Used for registry contact and invoicing.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 space-y-3",
								children: [addresses.length > 0 ? /* @__PURE__ */ jsxs(Select, {
									value: billingAddressId || void 0,
									onValueChange: setBillingAddressId,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 w-full min-w-0 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select billing address") })
									}), /* @__PURE__ */ jsx(SelectContent, { children: addresses.map((a) => /* @__PURE__ */ jsx(SelectItem, {
										value: a.$id,
										children: addressLabel(a)
									}, a.$id)) })]
								}) : /* @__PURE__ */ jsx("div", {
									className: "rounded-md border border-border bg-background px-3 py-2 text-[13px] text-muted-foreground",
									children: t("No billing addresses on file.")
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 text-[13px]",
									onClick: () => setAddressModalOpen(true),
									children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add billing address")]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Payment")
								})
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
			}),
			/* @__PURE__ */ jsx(AddressModal, {
				open: addressModalOpen,
				onOpenChange: setAddressModalOpen,
				organizationId: orgId,
				elevatedForWizard: true,
				onSuccess: (address) => {
					setAddressModalOpen(false);
					if (address?.$id) setBillingAddressId(address.$id);
				}
			}),
			/* @__PURE__ */ jsx(PaymentModal, {
				open: paymentModalOpen,
				onOpenChange: setPaymentModalOpen,
				organizationId: orgId,
				onSuccess: () => setPaymentModalOpen(false),
				elevatedForWizard: true
			})
		]
	});
}
function BuyDomainWizard({ routeSearch }) {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [stage, setStage] = useState("search");
	const [checkoutSelection, setCheckoutSelection] = useState(null);
	const paymentReturnHandled = useRef(false);
	const deepLinkHandled = useRef(false);
	const { isAtLimit: isDomainLimitReached, limit: domainsLimit } = useOrganizationDomainsPlanLimit(orgId);
	const fallbackPath = `/organizations/${orgId}/domains/`;
	const initialSearch = routeSearch.domain ?? "";
	useEffect(() => {
		if (routeSearch.payment !== "purchase" || !routeSearch.invoiceId || !orgId || paymentReturnHandled.current) return;
		paymentReturnHandled.current = true;
		(async () => {
			try {
				const result = await finalizeDomainPurchase({
					invoiceId: routeSearch.invoiceId,
					organizationId: orgId
				});
				if (result.status === DomainPurchaseStatus.Succeeded) {
					await queryClient.refetchQueries({ queryKey: [
						"domains",
						"organization",
						orgId
					] });
					toast.success(t("Payment confirmed"));
					navigate({
						to: "/organizations/$orgId/domains/$domainId",
						params: {
							orgId,
							domainId: result.domainId
						},
						replace: true
					});
				} else {
					toast.error(t("Purchase could not be completed"));
					navigate({
						to: "/organizations/$orgId/domains/buy",
						params: { orgId },
						search: {},
						replace: true
					});
				}
			} catch (e) {
				toast.error(e instanceof Error ? e.message : t("Failed to complete purchase"));
				navigate({
					to: "/organizations/$orgId/domains/buy",
					params: { orgId },
					search: {},
					replace: true
				});
			}
		})();
	}, [
		routeSearch.payment,
		routeSearch.invoiceId,
		orgId,
		navigate,
		queryClient,
		t
	]);
	useEffect(() => {
		if (deepLinkHandled.current || routeSearch.stage !== "checkout" || !routeSearch.domain || !orgId) return;
		deepLinkHandled.current = true;
		const domain = routeSearch.domain.trim().toLowerCase();
		(async () => {
			try {
				const quote = await fetchDomainPrice(domain);
				if (!quote.available) {
					toast.error(`${domain} ${t("is not available")}`);
					return;
				}
				if (isDomainLimitReached) {
					toast.error(`${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.`);
					return;
				}
				setCheckoutSelection({
					domain,
					price: quote.price,
					periodYears: typeof quote.periodYears === "number" ? quote.periodYears : 1,
					premium: quote.premium,
					renewalPrice: quote.renewalPrice,
					renewalPeriodYears: quote.renewalPeriodYears
				});
				setStage("checkout");
			} catch (e) {
				toast.error(e instanceof Error ? e.message : t("Failed to load domain price"));
			}
		})();
	}, [
		routeSearch.domain,
		routeSearch.stage,
		orgId,
		isDomainLimitReached,
		domainsLimit,
		t
	]);
	const handleSelectDomain = (full, opts) => {
		if (isDomainLimitReached) {
			toast.error(`${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.`);
			return;
		}
		setCheckoutSelection({
			domain: full.toLowerCase(),
			price: opts?.price,
			periodYears: opts?.periodYears ?? 1,
			premium: opts?.premium,
			renewalPrice: opts?.renewalPrice,
			renewalPeriodYears: opts?.renewalPeriodYears
		});
		setStage("checkout");
	};
	if (stage === "checkout" && checkoutSelection && orgId) return /* @__PURE__ */ jsx(BuyDomainCheckout, {
		orgId,
		selection: checkoutSelection,
		fallbackPath,
		onBackToSearch: () => {
			setStage("search");
			setCheckoutSelection(null);
		}
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Buy domain"),
		fallbackPath,
		fullscreen: true,
		useSidebar: false,
		footer: /* @__PURE__ */ jsx("div", {
			className: "flex gap-2 justify-end w-full",
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				onClick: () => navigate({ to: ".." }),
				children: t("Cancel")
			})
		}),
		children: /* @__PURE__ */ jsx(DomainSearchResults, {
			initialSearch,
			onSelectDomain: handleSelectDomain,
			limitReached: isDomainLimitReached,
			limitMessage: isDomainLimitReached ? /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-amber-600 dark:text-amber-400",
				children: [
					t("Your current plan includes up to"),
					" ",
					domainsLimit,
					" ",
					t("domains"),
					". ",
					/* @__PURE__ */ jsx(UpgradePlanLink, { orgId }),
					" ",
					t("to buy another domain.")
				]
			}) : null
		})
	});
}
function BuyDomainWizardPage() {
	return /* @__PURE__ */ jsx(BuyDomainWizard, { routeSearch: Route$1.useSearch() });
}
export { BuyDomainWizardPage as component };
