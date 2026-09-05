import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { t as handleModalOpenAutoFocus } from "./modal-auto-focus-BO41bKmA.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { XIcon } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
function Dialog({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
		"data-slot": "dialog-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, overlayClassName, disableAutoFocus = false, onOpenAutoFocus, ...props }) {
	const pageDirection = usePageDirection();
	const handleOpenAutoFocus = React$1.useCallback((event) => {
		onOpenAutoFocus?.(event);
		if (event.defaultPrevented) return;
		if (disableAutoFocus) {
			event.preventDefault();
			return;
		}
		handleModalOpenAutoFocus(event);
	}, [disableAutoFocus, onOpenAutoFocus]);
	return /* @__PURE__ */ jsxs(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ jsx(DialogOverlay, { className: overlayClassName }), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
			"data-slot": "dialog-content",
			dir: pageDirection,
			className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-[110] grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-visible rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
			onOpenAutoFocus: handleOpenAutoFocus,
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
				"data-slot": "dialog-close",
				className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 end-4 cursor-pointer rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-start", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Title, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-none font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Description, {
		"data-slot": "dialog-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
export { DialogHeader as a, DialogFooter as i, DialogContent as n, DialogTitle as o, DialogDescription as r, DialogTrigger as s, Dialog as t };
