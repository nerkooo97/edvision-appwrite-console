import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
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
import { J as organizationsFullQueryOptions, N as fetchPaymentMethod, X as paymentMethodsQueryOptions, qt as useUpdatePaymentMethod, wt as useDeletePaymentMethod } from "./organizations-BKtnlNrj.js";
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
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./stripe-B07yV6XF.js";
import { n as formatCardExpiry } from "./utils-DMkzhjmw.js";
import { t as Route$1 } from "./account.payment-methods-Dp6mj4hY.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { n as PaymentMethodBrandAvatar, t as PaymentModal } from "./Payment-BjDWA9P5.js";
import "./WarningAlert-ZIbpbrZO.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertTriangle, Copy, CreditCard, FileJson, Link as Link$1, Pencil, Plus, Trash2 } from "lucide-react";
var MONTHS = Array.from({ length: 12 }, (_, i) => {
	const month = i + 1;
	return {
		value: month.toString().padStart(2, "0"),
		label: month.toString().padStart(2, "0")
	};
});
var getYears = () => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return Array.from({ length: 21 }, (_, i) => {
		const year = currentYear + i;
		return {
			value: year.toString(),
			label: year.toString()
		};
	});
};
var US_STATES = [
	{
		value: "AL",
		label: "Alabama"
	},
	{
		value: "AK",
		label: "Alaska"
	},
	{
		value: "AZ",
		label: "Arizona"
	},
	{
		value: "AR",
		label: "Arkansas"
	},
	{
		value: "CA",
		label: "California"
	},
	{
		value: "CO",
		label: "Colorado"
	},
	{
		value: "CT",
		label: "Connecticut"
	},
	{
		value: "DE",
		label: "Delaware"
	},
	{
		value: "FL",
		label: "Florida"
	},
	{
		value: "GA",
		label: "Georgia"
	},
	{
		value: "HI",
		label: "Hawaii"
	},
	{
		value: "ID",
		label: "Idaho"
	},
	{
		value: "IL",
		label: "Illinois"
	},
	{
		value: "IN",
		label: "Indiana"
	},
	{
		value: "IA",
		label: "Iowa"
	},
	{
		value: "KS",
		label: "Kansas"
	},
	{
		value: "KY",
		label: "Kentucky"
	},
	{
		value: "LA",
		label: "Louisiana"
	},
	{
		value: "ME",
		label: "Maine"
	},
	{
		value: "MD",
		label: "Maryland"
	},
	{
		value: "MA",
		label: "Massachusetts"
	},
	{
		value: "MI",
		label: "Michigan"
	},
	{
		value: "MN",
		label: "Minnesota"
	},
	{
		value: "MS",
		label: "Mississippi"
	},
	{
		value: "MO",
		label: "Missouri"
	},
	{
		value: "MT",
		label: "Montana"
	},
	{
		value: "NE",
		label: "Nebraska"
	},
	{
		value: "NV",
		label: "Nevada"
	},
	{
		value: "NH",
		label: "New Hampshire"
	},
	{
		value: "NJ",
		label: "New Jersey"
	},
	{
		value: "NM",
		label: "New Mexico"
	},
	{
		value: "NY",
		label: "New York"
	},
	{
		value: "NC",
		label: "North Carolina"
	},
	{
		value: "ND",
		label: "North Dakota"
	},
	{
		value: "OH",
		label: "Ohio"
	},
	{
		value: "OK",
		label: "Oklahoma"
	},
	{
		value: "OR",
		label: "Oregon"
	},
	{
		value: "PA",
		label: "Pennsylvania"
	},
	{
		value: "RI",
		label: "Rhode Island"
	},
	{
		value: "SC",
		label: "South Carolina"
	},
	{
		value: "SD",
		label: "South Dakota"
	},
	{
		value: "TN",
		label: "Tennessee"
	},
	{
		value: "TX",
		label: "Texas"
	},
	{
		value: "UT",
		label: "Utah"
	},
	{
		value: "VT",
		label: "Vermont"
	},
	{
		value: "VA",
		label: "Virginia"
	},
	{
		value: "WA",
		label: "Washington"
	},
	{
		value: "WV",
		label: "West Virginia"
	},
	{
		value: "WI",
		label: "Wisconsin"
	},
	{
		value: "WY",
		label: "Wyoming"
	}
];
function EditPaymentMethodModal({ open, onOpenChange, paymentMethod, onSuccess }) {
	const t = useT();
	const [expiryMonth, setExpiryMonth] = useState(paymentMethod.expiryMonth?.toString().padStart(2, "0") || "");
	const [expiryYear, setExpiryYear] = useState(paymentMethod.expiryYear?.toString() || "");
	const [state, setState] = useState(paymentMethod.state || "");
	const updatePaymentMethodMutation = useUpdatePaymentMethod();
	useEffect(() => {
		if (open && paymentMethod) {
			setExpiryMonth(paymentMethod.expiryMonth?.toString().padStart(2, "0") || "");
			setExpiryYear(paymentMethod.expiryYear?.toString() || "");
			setState(paymentMethod.state || "");
		}
	}, [open, paymentMethod]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!expiryMonth || !expiryYear) {
			toast.error(t("Please select expiration month and year"));
			return;
		}
		if (paymentMethod.country === "US" && !state) {
			toast.error(t("Please select a state"));
			return;
		}
		try {
			const finalState = state || paymentMethod.state || "";
			await updatePaymentMethodMutation.mutateAsync({
				paymentMethodId: paymentMethod.$id,
				expiryMonth: parseInt(expiryMonth, 10),
				expiryYear: parseInt(expiryYear, 10),
				state: finalState
			});
			toast.success(t("Payment method updated"));
			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update payment method"));
		}
	};
	const isLoading = updatePaymentMethodMutation.isPending;
	const hasChanges = expiryMonth !== (paymentMethod.expiryMonth?.toString().padStart(2, "0") || "") || expiryYear !== (paymentMethod.expiryYear?.toString() || "") || state !== (paymentMethod.state || "");
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Update payment method") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Update the expiration date for this payment method.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "expiry-month",
									className: "text-[13px]",
									children: t("Month")
								}), /* @__PURE__ */ jsxs(Select, {
									value: expiryMonth,
									onValueChange: setExpiryMonth,
									disabled: isLoading,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "expiry-month",
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "MM" })
									}), /* @__PURE__ */ jsx(SelectContent, { children: MONTHS.map((month) => /* @__PURE__ */ jsx(SelectItem, {
										value: month.value,
										children: month.label
									}, month.value)) })]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "expiry-year",
									className: "text-[13px]",
									children: t("Year")
								}), /* @__PURE__ */ jsxs(Select, {
									value: expiryYear,
									onValueChange: setExpiryYear,
									disabled: isLoading,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "expiry-year",
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "YYYY" })
									}), /* @__PURE__ */ jsx(SelectContent, { children: getYears().map((year) => /* @__PURE__ */ jsx(SelectItem, {
										value: year.value,
										children: year.label
									}, year.value)) })]
								})]
							})]
						}), paymentMethod.country === "US" && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "state",
								className: "text-[13px]",
								children: t("State")
							}), /* @__PURE__ */ jsxs(Select, {
								value: state,
								onValueChange: setState,
								disabled: isLoading,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									id: "state",
									className: "h-9 text-[13px]",
									children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select a state") })
								}), /* @__PURE__ */ jsx(SelectContent, { children: US_STATES.map((stateOption) => /* @__PURE__ */ jsx(SelectItem, {
									value: stateOption.value,
									children: stateOption.label
								}, stateOption.value)) })]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || !hasChanges || !expiryMonth || !expiryYear,
							children: t("Update")
						})]
					})]
				})
			]
		})
	});
}
function DeletePaymentMethodModal({ open, onOpenChange, paymentMethod, linkedOrganizations, onSuccess }) {
	const t = useT();
	const deletePaymentMethodMutation = useDeletePaymentMethod();
	const handleDelete = async () => {
		try {
			await deletePaymentMethodMutation.mutateAsync({ paymentMethodId: paymentMethod.$id });
			toast.success(t("Payment method deleted"));
			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to delete payment method"));
		}
	};
	const isLoading = deletePaymentMethodMutation.isPending;
	const isLinked = linkedOrganizations.length > 0;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete payment method") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: isLinked ? `${t("This payment method is linked to")} ${linkedOrganizations.length} ${linkedOrganizations.length > 1 ? t("organizations") : t("organization")}. ${t("Deleting it will remove it from those organizations.")}` : t("Are you sure you want to delete this payment method? This action cannot be undone.")
					})]
				}),
				isLinked && /* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs(Alert, {
						variant: "destructive",
						children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[12px] mt-2",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium",
									children: t("Linked to:")
								}), /* @__PURE__ */ jsx("ul", {
									className: "list-disc list-inside space-y-0.5",
									children: linkedOrganizations.map((org) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/organizations/$orgId/settings/billing",
										params: { orgId: org.$id },
										className: "underline hover:no-underline",
										onClick: (e) => e.stopPropagation(),
										children: org.name
									}) }, org.$id))
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						onClick: handleDelete,
						disabled: isLoading,
						children: t("Delete")
					})]
				})
			]
		})
	});
}
function PaymentMethodContextMenu({ paymentMethod, onUpdate, onDelete, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(paymentMethod)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", paymentMethod.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				paymentMethod.name ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", paymentMethod.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchPaymentMethod(paymentMethod.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(paymentMethod)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] });
}
function AccountPaymentMethods({ onAddPaymentMethod, initialData }) {
	const t = useT();
	const { data: paymentMethodsData, isFetched: methodsFetched } = useQuery(paymentMethodsQueryOptions());
	useUpdatePaymentMethod();
	useDeletePaymentMethod();
	const paymentMethodsList = paymentMethodsData?.paymentMethods ?? initialData?.paymentMethods?.paymentMethods ?? [];
	const { data: organizationsData } = useQuery(organizationsFullQueryOptions());
	const organizations = organizationsData ?? initialData?.organizations ?? [];
	const hasResolvedData = methodsFetched || initialData?.paymentMethods !== void 0;
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
	const completedPaymentMethods = useMemo(() => {
		return paymentMethodsList.filter((pm) => pm.last4);
	}, [paymentMethodsList]);
	const linkedMethodIds = useMemo(() => {
		const linked = /* @__PURE__ */ new Set();
		organizations.forEach((org) => {
			if (org.paymentMethodId) linked.add(org.paymentMethodId);
			if (org.backupPaymentMethodId) linked.add(org.backupPaymentMethodId);
		});
		return linked;
	}, [organizations]);
	const getLinkedOrganizations = (paymentMethodId) => {
		return organizations.filter((org) => org.paymentMethodId === paymentMethodId || org.backupPaymentMethodId === paymentMethodId);
	};
	const hasPaymentError = useMemo(() => {
		return completedPaymentMethods.some((method) => method.lastError || method.expired || method.failed);
	}, [completedPaymentMethods]);
	const handleEdit = (method) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedPaymentMethod(method);
			setEditModalOpen(true);
		});
	};
	const handleDelete = (method) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedPaymentMethod(method);
			setDeleteModalOpen(true);
		});
	};
	const handleEditSuccess = () => {
		setEditModalOpen(false);
		setSelectedPaymentMethod(null);
	};
	const handleDeleteSuccess = () => {
		setDeleteModalOpen(false);
		setSelectedPaymentMethod(null);
	};
	if (!hasResolvedData) return null;
	if (completedPaymentMethods.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Payment methods")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-1",
						children: t("Manage your payment methods and billing information.")
					})] })
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border -mx-6" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-8 text-center",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: CreditCard,
					title: t("No payment methods"),
					description: t("Add a payment method to get started"),
					isEmpty: true,
					hasFilters: false,
					variant: "default",
					children: /* @__PURE__ */ jsx("div", {
						className: "mt-4",
						children: /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: onAddPaymentMethod,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add payment method")]
						})
					})
				})
			})
		]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Payment methods")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-1",
							children: t("Manage your payment methods and billing information.")
						})] }), /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: onAddPaymentMethod,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add payment method")]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border -mx-6" }),
				/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[220px]",
							children: t("Card")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
							children: t("Cardholder")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[140px]",
							children: t("Expires")
						}),
						hasPaymentError && /* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[120px]",
							children: t("Status")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Linked To")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[60px]" })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: completedPaymentMethods.map((method) => {
					const isExpiringSoon = method.expiryMonth && method.expiryYear ? isCardExpiringSoon(method.expiryMonth, method.expiryYear) : false;
					const hasError = method.failed || method.expired;
					const linkedOrgs = getLinkedOrganizations(method.$id);
					const isLinked = linkedMethodIds.has(method.$id);
					return /* @__PURE__ */ jsx(PaymentMethodContextMenu, {
						paymentMethod: method,
						onUpdate: handleEdit,
						onDelete: handleDelete,
						children: /* @__PURE__ */ jsxs(TableRow, {
							className: cn("transition-colors", hasError && "bg-red-50/50 dark:bg-red-950/10"),
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-6 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: method.brand }), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsxs("p", {
												className: "text-[13px] font-medium text-foreground",
												children: [
													method.brand,
													" ••••",
													method.last4
												]
											}), method.expiryMonth && method.expiryYear && /* @__PURE__ */ jsxs("p", {
												className: "text-[11px] text-muted-foreground mt-0.5",
												children: [
													t("Expires"),
													" ",
													formatCardExpiry(method.expiryMonth, method.expiryYear)
												]
											})]
										})]
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-foreground",
										children: method.name || /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: " - "
										})
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: method.expiryMonth && method.expiryYear ? /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-foreground",
										children: formatCardExpiry(method.expiryMonth, method.expiryYear)
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: "-"
									})
								}),
								hasPaymentError && /* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: hasError ? /* @__PURE__ */ jsx(Badge, {
										variant: "failed",
										className: "text-[10px] shrink-0",
										children: method.expired ? t("Expired") : t("Failed")
									}) : isExpiringSoon ? /* @__PURE__ */ jsx(Badge, {
										variant: "warning",
										className: "text-[10px] shrink-0",
										children: t("Expiring soon")
									}) : /* @__PURE__ */ jsx(Badge, {
										variant: "active",
										className: "text-[10px] shrink-0",
										children: t("Active")
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: isLinked ? /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "ghost",
											size: "sm",
											className: "h-7 text-[12px] text-muted-foreground hover:text-foreground -ms-2",
											children: [
												/* @__PURE__ */ jsx(Link$1, { className: "me-1.5 h-3.5 w-3.5" }),
												linkedOrgs.length,
												" ",
												linkedOrgs.length > 1 ? t("organizations") : t("organization")
											]
										})
									}), /* @__PURE__ */ jsx(PopoverContent, {
										className: "w-64",
										align: "start",
										children: /* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[12px] font-medium text-foreground mb-2",
												children: t("Linked Organizations")
											}), linkedOrgs.map((org) => /* @__PURE__ */ jsx(Link, {
												to: "/organizations/$orgId/settings/billing",
												params: { orgId: org.$id },
												className: "block rounded-md px-2 py-1.5 text-[12px] text-foreground hover:bg-muted transition-colors",
												children: org.name
											}, org.$id))]
										})
									})] }) : /* @__PURE__ */ jsx(Badge, {
										variant: "inactive",
										className: "text-[10px] shrink-0",
										children: t("Not linked")
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-6 py-3 text-end",
									children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
									}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
										align: "end",
										className: "w-40",
										children: [
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												className: "text-[13px]",
												onClick: () => handleEdit(method),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Pencil,
													children: t("Update")
												})
											}),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												className: "text-[13px]",
												onClick: () => handleDelete(method),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Trash2,
													children: t("Delete")
												})
											})
										]
									})] })
								})
							]
						})
					}, method.$id);
				}) })] })
			]
		}),
		selectedPaymentMethod && /* @__PURE__ */ jsx(EditPaymentMethodModal, {
			open: editModalOpen,
			onOpenChange: setEditModalOpen,
			paymentMethod: selectedPaymentMethod,
			onSuccess: handleEditSuccess
		}),
		selectedPaymentMethod && /* @__PURE__ */ jsx(DeletePaymentMethodModal, {
			open: deleteModalOpen,
			onOpenChange: setDeleteModalOpen,
			paymentMethod: selectedPaymentMethod,
			linkedOrganizations: getLinkedOrganizations(selectedPaymentMethod.$id),
			onSuccess: handleDeleteSuccess
		})
	] });
}
function isCardExpiringSoon(month, year) {
	const now = /* @__PURE__ */ new Date();
	const expiryDate = new Date(year, month - 1);
	const threeMonthsFromNow = /* @__PURE__ */ new Date();
	threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
	return expiryDate <= threeMonthsFromNow && expiryDate >= now;
}
function AccountPaymentMethodsPage({ initialData } = {}) {
	const [paymentModalOpen, setPaymentModalOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SettingsCardsList, { cards: useMemo(() => [{
		id: "payment-methods",
		search: {
			title: "Payment methods",
			keywords: [
				"card",
				"credit card",
				"stripe",
				"payment method"
			]
		},
		node: /* @__PURE__ */ jsx(AccountPaymentMethods, {
			initialData,
			onAddPaymentMethod: () => setPaymentModalOpen(true)
		})
	}], [initialData]) }), /* @__PURE__ */ jsx(PaymentModal, {
		open: paymentModalOpen,
		onOpenChange: setPaymentModalOpen,
		onSuccess: () => setPaymentModalOpen(false)
	})] });
}
function AccountPaymentMethodsRoute() {
	return /* @__PURE__ */ jsx(AccountPaymentMethodsPage, { initialData: Route$1.useLoaderData() });
}
export { AccountPaymentMethodsRoute as component };
