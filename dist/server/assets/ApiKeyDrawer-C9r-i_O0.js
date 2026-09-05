import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { t as ScopeEditor } from "./ScopeEditor-DGe3mP1w.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
function maskKey(key) {
	if (key.length <= 15) return "•".repeat(12);
	return key.slice(0, 7) + "•".repeat(24) + key.slice(-4);
}
function ApiKeyDrawer({ open, onOpenChange, onSubmit, isLoading = false, apiKey, createdKeySecret, onCopy, copiedField, initialName, initialScopes }) {
	const t = useT();
	const [name, setName] = useState("");
	const [expire, setExpire] = useState("");
	const [scopes, setScopes] = useState([]);
	const [errors, setErrors] = useState({});
	const [expiryOption, setExpiryOption] = useState("never");
	const [keyRevealed, setKeyRevealed] = useState(false);
	const isEditing = !!apiKey;
	const showCreatedKey = !!createdKeySecret;
	const secretToShow = createdKeySecret ?? (apiKey?.secret && apiKey.secret.trim() ? apiKey.secret : null);
	const canCopyKey = !!secretToShow;
	const copyFieldId = createdKeySecret ? "apiKeyDrawer-created" : `apiKeyDrawer-${apiKey?.$id ?? "edit"}`;
	const isCopied = copiedField === copyFieldId;
	const expiryOptions = [
		{
			value: "never",
			label: "Never"
		},
		{
			value: "1week",
			label: "1 week"
		},
		{
			value: "1month",
			label: "1 month"
		},
		{
			value: "6months",
			label: "6 months"
		},
		{
			value: "1year",
			label: "1 year"
		},
		{
			value: "custom",
			label: "Custom date"
		}
	];
	const getExpiryDateFromOption = (option) => {
		if (option === "never" || option === "custom") return "";
		const now = /* @__PURE__ */ new Date();
		switch (option) {
			case "1week":
				now.setDate(now.getDate() + 7);
				break;
			case "1month":
				now.setMonth(now.getMonth() + 1);
				break;
			case "6months":
				now.setMonth(now.getMonth() + 6);
				break;
			case "1year":
				now.setFullYear(now.getFullYear() + 1);
				break;
		}
		return now.toISOString();
	};
	const getExpiryOptionFromDate = (dateString) => {
		if (!dateString) return "never";
		const expireDate = new Date(dateString);
		if (isNaN(expireDate.getTime())) return "never";
		const now = /* @__PURE__ */ new Date();
		const diffMs = expireDate.getTime() - now.getTime();
		const diffDays = Math.round(diffMs / (1e3 * 60 * 60 * 24));
		if (diffDays >= 6 && diffDays <= 8) return "1week";
		if (diffDays >= 28 && diffDays <= 31) return "1month";
		if (diffDays >= 178 && diffDays <= 186) return "6months";
		if (diffDays >= 365 && diffDays <= 366) return "1year";
		return "custom";
	};
	const handleCopyKey = () => {
		if (!secretToShow) return;
		navigator.clipboard.writeText(secretToShow);
		if (onCopy) onCopy(secretToShow, copyFieldId);
		else toast.success(t("Copied to clipboard"));
	};
	useEffect(() => {
		if (!open) {
			setName("");
			setExpire("");
			setScopes([]);
			setErrors({});
			setExpiryOption("never");
			setKeyRevealed(false);
		} else if (apiKey) {
			setName(apiKey.name || "");
			const existingExpire = apiKey.expire || "";
			setExpire(existingExpire);
			setScopes(apiKey.scopes || []);
			setErrors({});
			setExpiryOption(getExpiryOptionFromDate(existingExpire));
		} else {
			setName(initialName ?? "");
			setExpire("");
			setScopes(initialScopes ?? []);
			setErrors({});
			setExpiryOption("never");
		}
	}, [
		open,
		apiKey,
		initialName,
		initialScopes
	]);
	const handleOpenChange = (newOpen) => {
		if (!isLoading) onOpenChange(newOpen);
	};
	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = t("Name is required");
		if (expire) {
			const expireDate = new Date(expire);
			if (isNaN(expireDate.getTime())) newErrors.expire = t("Invalid date format");
			else if (expireDate < /* @__PURE__ */ new Date()) newErrors.expire = t("Expiration date must be in the future");
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		onSubmit({
			name: name.trim(),
			scopes: scopes.length > 0 ? scopes : void 0,
			expire: expire.trim() || void 0
		});
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: showCreatedKey ? t("API key created") : isEditing ? t("Update API key") : t("Create API key"),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-6",
					children: [showCreatedKey && secretToShow && /* @__PURE__ */ jsxs("div", {
						className: "mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground mb-1",
								children: t("Your new API key")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mb-3",
								children: t("Copy and store it securely. You can view the full key anytime from the API keys list.")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx("textarea", {
									readOnly: true,
									value: secretToShow,
									rows: 3,
									className: "flex-1 rounded-md border border-border bg-muted px-3 py-2 font-mono text-[12px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring select-all",
									onClick: (e) => e.target.select()
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-9 shrink-0",
									onClick: handleCopyKey,
									children: isCopied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
								})]
							})
						]
					}), !showCreatedKey && /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "name",
										children: [
											t("Name"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "name",
										type: "text",
										placeholder: t("Enter API key name"),
										value: name,
										onChange: (e) => {
											setName(e.target.value);
											if (errors.name) setErrors((prev) => ({
												...prev,
												name: ""
											}));
										},
										disabled: isLoading,
										className: errors.name ? "border-destructive" : ""
									}),
									errors.name && /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-destructive",
										children: errors.name
									})
								]
							}),
							isEditing && apiKey && /* @__PURE__ */ jsxs("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
									children: t("Last used")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-foreground",
									children: apiKey.accessedAt?.trim() ? /* @__PURE__ */ jsx(DateTooltip, { date: apiKey.accessedAt }) : t("Never")
								})]
							}),
							isEditing && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[12px] font-medium",
									children: t("API key")
								}), canCopyKey ? /* @__PURE__ */ jsxs("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ jsx(Input, {
											readOnly: true,
											type: keyRevealed ? "text" : "password",
											value: keyRevealed ? secretToShow : maskKey(secretToShow),
											className: "font-mono text-[12px]"
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											size: "icon",
											className: "h-9 w-9 shrink-0",
											onClick: () => setKeyRevealed((v) => !v),
											title: keyRevealed ? t("Hide key") : t("Show key"),
											"aria-label": keyRevealed ? t("Hide key") : t("Show key"),
											children: keyRevealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											size: "icon",
											className: "h-9 w-9 shrink-0",
											onClick: handleCopyKey,
											title: t("Copy key"),
											"aria-label": t("Copy key"),
											children: isCopied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
										})
									]
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("The full key value isn't shown here. Find this key in the API keys list to view and copy it.")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, { children: t("Expiration date") }),
									/* @__PURE__ */ jsx(RadioGroup, {
										value: expiryOption,
										defaultValue: "never",
										onValueChange: (value) => {
											setExpiryOption(value);
											if (value === "never") setExpire("");
											else if (value === "custom") {
												if (!expire) setExpire("");
											} else setExpire(getExpiryDateFromOption(value));
											if (errors.expire) setErrors((prev) => ({
												...prev,
												expire: ""
											}));
										},
										disabled: isLoading,
										className: "grid grid-cols-2 gap-3",
										children: expiryOptions.map((option) => {
											const isSelected = expiryOption === option.value;
											return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(RadioGroupItem, {
												value: option.value,
												id: `expire-${option.value}`,
												className: "peer sr-only"
											}), /* @__PURE__ */ jsx(Label, {
												htmlFor: `expire-${option.value}`,
												className: cn("flex cursor-pointer items-center justify-center rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-all", "hover:border-primary/50 hover:bg-accent/50", isSelected && "border-primary bg-accent", isLoading && "cursor-not-allowed opacity-50"),
												children: t(option.label)
											})] }, option.value);
										})
									}),
									expiryOption === "custom" && /* @__PURE__ */ jsxs("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ jsx(DateTimePicker, {
											id: "expire",
											value: expire || null,
											onChange: (value) => {
												setExpire(value ?? "");
												if (errors.expire) setErrors((prev) => ({
													...prev,
													expire: ""
												}));
											},
											disabled: isLoading,
											clearable: true,
											className: errors.expire ? "border-destructive" : ""
										}), errors.expire && /* @__PURE__ */ jsx("p", {
											className: "text-[12px] text-destructive mt-1",
											children: errors.expire
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, { children: t("Scopes") }),
									/* @__PURE__ */ jsx(ScopeEditor, {
										value: scopes,
										onChange: setScopes,
										disabled: isLoading
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Select the scopes this API key will have access to."),
											" ",
											/* @__PURE__ */ jsx(DocsRouteLink, {
												className: "link-neutral",
												href: "/docs/advanced/platform/api-keys",
												children: t("Learn more about API key scopes")
											}),
											"."
										]
									})
								]
							})
						]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: showCreatedKey ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					onClick: () => handleOpenChange(false),
					children: t("Done")
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: isLoading,
					children: isEditing ? t("Update API key") : t("Create API key")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => handleOpenChange(false),
					disabled: isLoading,
					children: t("Cancel")
				})] })
			})]
		})] })
	});
}
export { ApiKeyDrawer as t };
