import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
var Tooltip = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, {
		"data-slot": "tooltip",
		className: cn(className),
		...props
	}) });
};
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
	const pageDirection = usePageDirection();
	return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, {
		"data-slot": "tooltip-content",
		dir: pageDirection,
		sideOffset,
		className: cn("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[120] w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-[120] size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
	}) });
}
export { TooltipTrigger as i, TooltipContent as n, TooltipProvider as r, Tooltip as t };
