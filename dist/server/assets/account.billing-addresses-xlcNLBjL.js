import "./utils-DoqqkI3X.js";
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
import { J as organizationsFullQueryOptions, St as useDeleteBillingAddress, m as fetchBillingAddress, r as billingAddressesQueryOptions } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ws as useCountryLookups, qs as getCountryDisplayName } from "./hooks-BONwG3Mt.js";
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
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as Route$1 } from "./account.billing-addresses-Dk4YWNQS.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as AddressModal } from "./Address-BE4m8u57.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertTriangle, Copy, FileJson, Link as Link$1, MapPin, Pencil, Plus, Trash2 } from "lucide-react";
function DeleteAddressModal({ open, onOpenChange, address, linkedOrganizations, onSuccess }) {
	const t = useT();
	const deleteAddressMutation = useDeleteBillingAddress();
	const handleDelete = async () => {
		try {
			await deleteAddressMutation.mutateAsync({ billingAddressId: address.$id });
			toast.success(t("Billing address deleted"));
			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to delete billing address"));
		}
	};
	const isLoading = deleteAddressMutation.isPending;
	const isLinked = linkedOrganizations.length > 0;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete billing address") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: isLinked ? `${t("This billing address is linked to")} ${linkedOrganizations.length} ${linkedOrganizations.length > 1 ? t("organizations") : t("organization")}. ${t("Deleting it will remove it from those organizations.")}` : t("Are you sure you want to delete this billing address? This action cannot be undone.")
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
function formatAddressLabel(address) {
	return [
		address.streetAddress,
		address.city,
		address.country
	].filter(Boolean).join(", ") || address.$id;
}
function BillingAddressContextMenu({ address, onUpdate, onDelete, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(address)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", address.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Address", formatAddressLabel(address)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchBillingAddress(address.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(address)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] });
}
function AccountBillingAddresses({ initialData } = {}) {
	const t = useT();
	const { data: addressesData, isFetched: addressesFetched } = useQuery(billingAddressesQueryOptions());
	const { lookups: countryLookups } = useCountryLookups();
	useDeleteBillingAddress();
	const addresses = addressesData?.addresses ?? initialData?.addresses?.addresses ?? [];
	const { data: organizationsData } = useQuery(organizationsFullQueryOptions());
	const organizations = organizationsData ?? initialData?.organizations ?? [];
	const hasResolvedData = addressesFetched || initialData?.addresses !== void 0;
	const [addModalOpen, setAddModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState(null);
	const getLinkedOrganizations = (addressId) => {
		return organizations.filter((org) => org.billingAddressId === addressId);
	};
	const handleAdd = () => {
		setSelectedAddress(null);
		setAddModalOpen(true);
	};
	const handleEdit = (address) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedAddress(address);
			setEditModalOpen(true);
		});
	};
	const handleDelete = (address) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedAddress(address);
			setDeleteModalOpen(true);
		});
	};
	const handleAddSuccess = () => {
		setAddModalOpen(false);
		setSelectedAddress(null);
	};
	const handleEditSuccess = () => {
		setEditModalOpen(false);
		setSelectedAddress(null);
	};
	const handleDeleteSuccess = () => {
		setDeleteModalOpen(false);
		setSelectedAddress(null);
	};
	const formatAddress = (address) => {
		const parts = [];
		if (address.streetAddress) parts.push(address.streetAddress);
		if (address.addressLine2) parts.push(address.addressLine2);
		if (address.city) {
			let cityPart = address.city;
			if (address.state) cityPart += `, ${address.state}`;
			if (address.postalCode) cityPart += ` ${address.postalCode}`;
			parts.push(cityPart);
		}
		if (address.country) parts.push(getCountryDisplayName(address.country, countryLookups) ?? address.country);
		return parts.join(", ") || "-";
	};
	if (!hasResolvedData) return null;
	if (addresses.length === 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Billing addresses")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-1",
						children: t("Manage your billing addresses for invoices and payments.")
					})] })
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border -mx-6" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-8 text-center",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: MapPin,
					title: t("No billing addresses"),
					description: t("Add a billing address to get started"),
					isEmpty: true,
					hasFilters: false,
					variant: "default",
					children: /* @__PURE__ */ jsx("div", {
						className: "mt-4",
						children: /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleAdd,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add billing address")]
						})
					})
				})
			})
		]
	}), /* @__PURE__ */ jsx(AddressModal, {
		open: addModalOpen,
		onOpenChange: setAddModalOpen,
		onSuccess: handleAddSuccess
	})] });
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
							children: t("Billing addresses")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-1",
							children: t("Manage your billing addresses for invoices and payments.")
						})] }), /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleAdd,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add billing address")]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border -mx-6" }),
				/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Address")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Linked To")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[60px]" })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: addresses.map((address) => {
					const linkedOrgs = getLinkedOrganizations(address.$id);
					const isLinked = linkedOrgs.length > 0;
					return /* @__PURE__ */ jsx(BillingAddressContextMenu, {
						address,
						onUpdate: handleEdit,
						onDelete: handleDelete,
						children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-muted/50 transition-colors",
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-6 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted",
											children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-muted-foreground" })
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-foreground",
											children: formatAddress(address)
										})]
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
												onClick: () => handleEdit(address),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Pencil,
													children: t("Update")
												})
											}),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												className: "text-[13px]",
												onClick: () => handleDelete(address),
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
					}, address.$id);
				}) })] })
			]
		}),
		/* @__PURE__ */ jsx(AddressModal, {
			open: addModalOpen,
			onOpenChange: setAddModalOpen,
			onSuccess: handleAddSuccess
		}),
		selectedAddress && /* @__PURE__ */ jsx(AddressModal, {
			open: editModalOpen,
			onOpenChange: setEditModalOpen,
			address: selectedAddress,
			onSuccess: handleEditSuccess
		}),
		selectedAddress && /* @__PURE__ */ jsx(DeleteAddressModal, {
			open: deleteModalOpen,
			onOpenChange: setDeleteModalOpen,
			address: selectedAddress,
			linkedOrganizations: getLinkedOrganizations(selectedAddress.$id),
			onSuccess: handleDeleteSuccess
		})
	] });
}
function AccountBillingAddressesPage({ initialData } = {}) {
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: useMemo(() => [{
		id: "billing-addresses",
		search: {
			title: "Billing addresses",
			keywords: [
				"address",
				"country",
				"city",
				"postal",
				"zip",
				"street"
			]
		},
		node: /* @__PURE__ */ jsx(AccountBillingAddresses, { initialData })
	}], [initialData]) });
}
function AccountBillingAddressesRoute() {
	return /* @__PURE__ */ jsx(AccountBillingAddressesPage, { initialData: Route$1.useLoaderData() });
}
export { AccountBillingAddressesRoute as component };
