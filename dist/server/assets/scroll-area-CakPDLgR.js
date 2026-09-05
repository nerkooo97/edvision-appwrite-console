import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
function ScrollArea({ className, children, viewportRef, ...props }) {
	return /* @__PURE__ */ jsxs(ScrollAreaPrimitive.Root, {
		"data-slot": "scroll-area",
		className: cn("relative overflow-hidden", className),
		...props,
		children: [
			/* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, {
				ref: viewportRef,
				"data-slot": "scroll-area-viewport",
				className: cn("focus-visible:ring-ring/50 size-full overflow-x-hidden rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1", "[&>div]:!block [&>div]:!w-full [&>div]:!min-w-0 [&>div]:!max-w-full"),
				children
			}),
			/* @__PURE__ */ jsx(ScrollBar, {}),
			/* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
		]
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, {
		"data-slot": "scroll-area-scrollbar",
		orientation,
		className: cn("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-s border-s-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, {
			"data-slot": "scroll-area-thumb",
			className: "bg-border relative flex-1 rounded-full"
		})
	});
}
export { ScrollArea as t };
