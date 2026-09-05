import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Ht as useUpdateBillingAddress, vt as useCreateBillingAddress, zt as useSetOrganizationBillingAddress } from "./organizations-BKtnlNrj.js";
import { Gs as useLocale, Us as useCountries } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, ChevronDown } from "lucide-react";
function AddressModal({ open, onOpenChange, address, organizationId, onSuccess, elevatedForWizard = false }) {
	const t = useT();
	const isEditing = !!address;
	const [country, setCountry] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [addressLine2, setAddressLine2] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const createAddressMutation = useCreateBillingAddress();
	const updateAddressMutation = useUpdateBillingAddress();
	const setOrgAddressMutation = useSetOrganizationBillingAddress();
	const { data: countriesData, isLoading: countriesLoading } = useCountries();
	const { data: localeData } = useLocale();
	const [countryPopoverOpen, setCountryPopoverOpen] = useState(false);
	const didPrefillCountryRef = useRef(false);
	const countries = countriesData?.countries || [];
	const resolveLocaleCountryCode = () => {
		const raw = localeData?.countryCode?.trim();
		if (!raw || raw === "--") return "";
		const normalized = raw.toUpperCase();
		return countries.find((c) => c.code.toUpperCase() === normalized)?.code ?? normalized;
	};
	useEffect(() => {
		if (!open) {
			didPrefillCountryRef.current = false;
			setCountry("");
			setStreetAddress("");
			setAddressLine2("");
			setCity("");
			setState("");
			setPostalCode("");
			return;
		}
		if (address) {
			didPrefillCountryRef.current = true;
			setCountry(address.country || "");
			setStreetAddress(address.streetAddress || "");
			setAddressLine2(address.addressLine2 || "");
			setCity(address.city || "");
			setState(address.state || "");
			setPostalCode(address.postalCode || "");
			return;
		}
		didPrefillCountryRef.current = false;
		setStreetAddress("");
		setAddressLine2("");
		setCity("");
		setState("");
		setPostalCode("");
		const localeCountry = resolveLocaleCountryCode();
		setCountry(localeCountry);
		if (localeCountry) didPrefillCountryRef.current = true;
	}, [open, address]);
	useEffect(() => {
		if (!open || address || didPrefillCountryRef.current) return;
		const localeCountry = resolveLocaleCountryCode();
		if (!localeCountry) return;
		setCountry(localeCountry);
		didPrefillCountryRef.current = true;
	}, [
		open,
		address,
		localeData?.countryCode,
		countriesData?.countries
	]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!country || !streetAddress || !city || !state) {
			toast.error(t("Please fill in all required fields"));
			return;
		}
		try {
			let savedAddress;
			if (isEditing && address) {
				savedAddress = await updateAddressMutation.mutateAsync({
					billingAddressId: address.$id,
					country,
					streetAddress,
					city,
					state,
					postalCode: postalCode || void 0,
					addressLine2: addressLine2 || void 0
				});
				toast.success(t("Billing address updated"));
			} else {
				savedAddress = await createAddressMutation.mutateAsync({
					country,
					streetAddress,
					city,
					state,
					postalCode: postalCode || void 0,
					addressLine2: addressLine2 || void 0
				});
				if (organizationId) {
					await setOrgAddressMutation.mutateAsync({
						organizationId,
						billingAddressId: savedAddress.$id
					});
					toast.success(t("Billing address has been added to your organization"));
				} else toast.success(t("Billing address created"));
			}
			onOpenChange(false);
			onSuccess?.(savedAddress);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to save billing address"));
		}
	};
	const isLoading = createAddressMutation.isPending || updateAddressMutation.isPending || setOrgAddressMutation.isPending;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: cn("sm:max-w-md p-0", elevatedForWizard && "z-[9999]"),
			overlayClassName: elevatedForWizard ? "z-[9999]" : void 0,
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: isEditing ? t("Update billing address") : t("Add billing address") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: isEditing ? t("Update your billing address information.") : t("Add a new billing address to your account.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "country",
									className: "text-[13px]",
									children: [
										t("Country"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-red-500",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsxs(Popover, {
									open: countryPopoverOpen,
									onOpenChange: setCountryPopoverOpen,
									children: [/* @__PURE__ */ jsx(PopoverTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Button, {
											id: "country",
											variant: "outline",
											role: "combobox",
											"aria-expanded": countryPopoverOpen,
											className: "h-9 w-full justify-between text-[13px] font-normal",
											disabled: isLoading || countriesLoading,
											children: [/* @__PURE__ */ jsx("span", {
												className: "truncate",
												children: country ? countries.find((c) => c.code === country)?.name || t("Select a country") : t("Select a country")
											}), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-2 h-4 w-4 shrink-0 opacity-50" })]
										})
									}), /* @__PURE__ */ jsx(PopoverContent, {
										className: "w-[--radix-popover-trigger-width] p-0",
										align: "start",
										children: /* @__PURE__ */ jsxs(Command$1, { children: [/* @__PURE__ */ jsx(CommandInput, {
											placeholder: t("Search countries..."),
											className: "h-9"
										}), /* @__PURE__ */ jsxs(CommandList, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t("No country found.") }), /* @__PURE__ */ jsx(CommandGroup, { children: countries.map((c) => /* @__PURE__ */ jsxs(CommandItem, {
											value: `${c.name} ${c.code}`,
											onSelect: () => {
												setCountry(c.code);
												setCountryPopoverOpen(false);
											},
											className: "text-[13px]",
											children: [/* @__PURE__ */ jsx(Check, { className: cn("me-2 h-4 w-4", country === c.code ? "opacity-100" : "opacity-0") }), c.name]
										}, c.code)) })] })] })
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "street-address",
									className: "text-[13px]",
									children: [
										t("Street Address"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-red-500",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "street-address",
									value: streetAddress,
									onChange: (e) => setStreetAddress(e.target.value),
									placeholder: t("123 Main St"),
									className: "h-9 text-[13px]",
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "address-line-2",
									className: "text-[13px]",
									children: t("Address Line 2")
								}), /* @__PURE__ */ jsx(Input, {
									id: "address-line-2",
									value: addressLine2,
									onChange: (e) => setAddressLine2(e.target.value),
									placeholder: t("Apt, suite, etc. (optional)"),
									className: "h-9 text-[13px]",
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs(Label, {
										htmlFor: "city",
										className: "text-[13px]",
										children: [
											t("City"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-red-500",
												children: "*"
											})
										]
									}), /* @__PURE__ */ jsx(Input, {
										id: "city",
										value: city,
										onChange: (e) => setCity(e.target.value),
										placeholder: t("City"),
										className: "h-9 text-[13px]",
										disabled: isLoading
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs(Label, {
										htmlFor: "state",
										className: "text-[13px]",
										children: [
											t("State/Province"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-red-500",
												children: "*"
											})
										]
									}), /* @__PURE__ */ jsx(Input, {
										id: "state",
										value: state,
										onChange: (e) => setState(e.target.value),
										placeholder: t("State"),
										className: "h-9 text-[13px]",
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "postal-code",
									className: "text-[13px]",
									children: t("Postal Code")
								}), /* @__PURE__ */ jsx(Input, {
									id: "postal-code",
									value: postalCode,
									onChange: (e) => setPostalCode(e.target.value),
									placeholder: "12345",
									className: "h-9 text-[13px]",
									disabled: isLoading
								})]
							})
						]
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
							disabled: isLoading || !country || !streetAddress || !city || !state,
							children: isEditing ? t("Update") : t("Add")
						})]
					})]
				})
			]
		})
	});
}
export { AddressModal as t };
