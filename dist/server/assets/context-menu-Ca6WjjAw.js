import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
function ContextMenu({ ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Root, {
		"data-slot": "context-menu",
		...props
	});
}
function ContextMenuTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Trigger, {
		"data-slot": "context-menu-trigger",
		className: cn("pointer-coarse:[-webkit-touch-callout:none] pointer-coarse:[-webkit-user-select:none] pointer-coarse:select-none", className),
		...props
	});
}
function ContextMenuSub({ ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Sub, {
		"data-slot": "context-menu-sub",
		...props
	});
}
function ContextMenuSubTrigger({ className, inset, children, ...props }) {
	return /* @__PURE__ */ jsxs(ContextMenuPrimitive.SubTrigger, {
		"data-slot": "context-menu-sub-trigger",
		"data-inset": inset,
		className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ms-auto" })]
	});
}
function ContextMenuSubContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.SubContent, {
		"data-slot": "context-menu-sub-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
		...props
	});
}
function ContextMenuContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(ContextMenuPrimitive.Content, {
		"data-slot": "context-menu-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden rounded-md border p-1 shadow-md", className),
		...props
	}) });
}
function ContextMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Item, {
		"data-slot": "context-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
function ContextMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(ContextMenuPrimitive.Separator, {
		"data-slot": "context-menu-separator",
		className: cn("bg-border -mx-1 my-1 h-px", className),
		...props
	});
}
export { ContextMenuSub as a, ContextMenuTrigger as c, ContextMenuSeparator as i, ContextMenuContent as n, ContextMenuSubContent as o, ContextMenuItem as r, ContextMenuSubTrigger as s, ContextMenu as t };
