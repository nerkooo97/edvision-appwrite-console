import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Drawer } from "vaul";
function Drawer$1({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Root, {
		"data-slot": "drawer",
		...props
	});
}
function DrawerTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Trigger, {
		"data-slot": "drawer-trigger",
		...props
	});
}
function DrawerPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Portal, {
		"data-slot": "drawer-portal",
		...props
	});
}
function DrawerClose({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Close, {
		"data-slot": "drawer-close",
		...props
	});
}
function DrawerOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Overlay, {
		"data-slot": "drawer-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm", className),
		...props
	});
}
function DrawerContent({ className, overlayClassName, children, ...props }) {
	const pageDirection = usePageDirection();
	return /* @__PURE__ */ jsxs(DrawerPortal, {
		"data-slot": "drawer-portal",
		children: [/* @__PURE__ */ jsx(DrawerOverlay, { className: overlayClassName }), /* @__PURE__ */ jsxs(Drawer.Content, {
			"data-slot": "drawer-content",
			dir: pageDirection,
			className: cn("group/drawer-content bg-background fixed z-[120] flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80dvh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80dvh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:end-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-s data-[vaul-drawer-direction=right]:sm:max-w-lg", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:start-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-e data-[vaul-drawer-direction=left]:sm:max-w-lg", className),
			...props,
			children: [/* @__PURE__ */ jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }), children]
		})]
	});
}
function DrawerHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-header",
		className: cn("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-start", className),
		...props
	});
}
function DrawerFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-footer",
		className: cn("mt-auto flex flex-col gap-2 p-4 justify-start", className),
		...props
	});
}
function DrawerTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Title, {
		"data-slot": "drawer-title",
		className: cn("text-foreground font-semibold", className),
		...props
	});
}
function DrawerDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer.Description, {
		"data-slot": "drawer-description",
		className: cn("text-muted-foreground text-sm", className),
		...props
	});
}
export { DrawerFooter as a, DrawerTrigger as c, DrawerDescription as i, DrawerClose as n, DrawerHeader as o, DrawerContent as r, DrawerTitle as s, Drawer$1 as t };
