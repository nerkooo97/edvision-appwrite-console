import { t as cn } from "./utils-DoqqkI3X.js";
import { n as usePageDirection } from "./page-direction-CnacIIOa.js";
import { m as setBodyResizeDragActive, r as RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X } from "./horizontal-resize-BcegzCwH.js";
import { jsx } from "react/jsx-runtime";
import * as React$1 from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
function ResizablePanelGroup({ className, dir, direction, style, ...props }) {
	const pageDirection = usePageDirection();
	const groupDirection = dir ?? pageDirection;
	return /* @__PURE__ */ jsx(ResizablePrimitive.PanelGroup, {
		"data-slot": "resizable-panel-group",
		dir: groupDirection,
		direction,
		style: {
			...style,
			direction: groupDirection
		},
		className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
		...props
	}, groupDirection);
}
var ResizablePanel = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ResizablePrimitive.Panel, {
	ref,
	"data-slot": "resizable-panel",
	className,
	...props
}));
ResizablePanel.displayName = "ResizablePanel";
function ResizableHandle({ withHandle, className, onDragging, ...props }) {
	const handleDragging = React$1.useCallback((isDragging) => {
		setBodyResizeDragActive(isDragging);
		onDragging?.(isDragging);
	}, [onDragging]);
	return /* @__PURE__ */ jsx(ResizablePrimitive.PanelResizeHandle, {
		"data-slot": "resizable-handle",
		onDragging: handleDragging,
		className: cn("bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:w-1", RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X, "focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:start-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
		...props,
		children: withHandle && /* @__PURE__ */ jsx("div", {
			className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
			children: /* @__PURE__ */ jsx(GripVerticalIcon, { className: "size-2.5" })
		})
	});
}
export { ResizablePanel as n, ResizablePanelGroup as r, ResizableHandle as t };
