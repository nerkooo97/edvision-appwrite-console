import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { XIcon } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
const OFFCANVAS_START_CLOSED = "ltr:-translate-x-full rtl:translate-x-full";
const OFFCANVAS_SHEET_MOTION_TIMING = "ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-300";
const SIDEBAR_EDGE_TOGGLE_OVERFLOW = "ltr:translate-x-1/2 rtl:-translate-x-1/2";
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetClose({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Close, {
		"data-slot": "sheet-close",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
		"data-slot": "sheet-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	const pageDirection = usePageDirection();
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
		"data-slot": "sheet-content",
		dir: pageDirection,
		className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-[120] flex flex-col gap-4 shadow-lg data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", OFFCANVAS_SHEET_MOTION_TIMING, side === "right" && cn("inset-y-0 end-0 h-full w-3/4 border-s sm:max-w-sm", "data-[state=open]:slide-in-from-end data-[state=closed]:slide-out-to-end"), side === "left" && cn("inset-y-0 start-0 h-full w-3/4 border-e sm:max-w-sm", "data-[state=open]:slide-in-from-start data-[state=closed]:slide-out-to-start"), side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(SheetPrimitive.Close, {
			className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 end-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
			children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-1.5 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Title, {
		"data-slot": "sheet-title",
		className: cn("text-foreground font-semibold", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Description, {
		"data-slot": "sheet-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
export { SheetHeader as a, OFFCANVAS_START_CLOSED as c, SheetDescription as i, SIDEBAR_EDGE_TOGGLE_OVERFLOW as l, SheetClose as n, SheetTitle as o, SheetContent as r, SheetTrigger as s, Sheet as t };
