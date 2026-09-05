import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { n as buttonVariants } from "./button-Bnm2QhOm.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Root, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[130] bg-black/50 backdrop-blur-sm", className),
		...props
	});
}
function AlertDialogContent({ className, overlayClassName, ...props }) {
	const pageDirection = usePageDirection();
	return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, { className: overlayClassName }), /* @__PURE__ */ jsx(AlertDialogPrimitive.Content, {
		"data-slot": "alert-dialog-content",
		dir: pageDirection,
		className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-[130] grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
		...props
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-start", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, {
		"data-slot": "alert-dialog-title",
		className: cn("text-lg font-semibold", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, {
		"data-slot": "alert-dialog-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
function AlertDialogAction({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, {
		className: cn(buttonVariants(), className),
		...props
	});
}
function AlertDialogCancel({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, {
		className: cn(buttonVariants({ variant: "outline" }), className),
		...props
	});
}
export { AlertDialogDescription as a, AlertDialogTitle as c, AlertDialogContent as i, AlertDialogTrigger as l, AlertDialogAction as n, AlertDialogFooter as o, AlertDialogCancel as r, AlertDialogHeader as s, AlertDialog as t };
