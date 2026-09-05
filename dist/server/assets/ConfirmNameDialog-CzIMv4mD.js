import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
function ConfirmNameDialog({ open, onOpenChange, title, description, confirmValue, confirmPlaceholder, confirmLabel = "Delete", onConfirm, isConfirming = false, children, contentClassName, overlayClassName }) {
	const t = useT();
	const [confirmation, setConfirmation] = useState("");
	useEffect(() => {
		if (!open) setConfirmation("");
	}, [open]);
	const canConfirm = !!confirmValue && confirmation === confirmValue && !isConfirming;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: cn("sm:max-w-md p-0", contentClassName),
			overlayClassName,
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t(title) }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: description
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-4",
					children: [
						children ? /* @__PURE__ */ jsx("div", {
							className: "mb-4",
							children
						}) : null,
						/* @__PURE__ */ jsxs("label", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("Type"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-mono font-medium text-foreground bg-muted px-1.5 py-0.5 rounded",
									children: confirmValue
								}),
								" ",
								t("to confirm")
							]
						}),
						/* @__PURE__ */ jsx(Input, {
							value: confirmation,
							onChange: (event) => setConfirmation(event.target.value),
							placeholder: t(confirmPlaceholder),
							className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0",
							autoFocus: true,
							onKeyDown: (event) => {
								if (event.key === "Enter" && canConfirm) {
									event.preventDefault();
									onConfirm();
								}
							}
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						className: "h-9 text-[13px]",
						disabled: isConfirming,
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						className: "h-9 text-[13px]",
						disabled: !canConfirm,
						onClick: onConfirm,
						children: t(confirmLabel)
					})]
				})
			]
		})
	});
}
export { ConfirmNameDialog as t };
