import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
import * as React$1 from "react";
import { cva } from "class-variance-authority";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as TogglePrimitive from "@radix-ui/react-toggle";
var toggleVariants = cva("inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 px-2 min-w-9",
			sm: "h-8 px-1.5 min-w-8",
			lg: "h-10 px-2.5 min-w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Toggle({ className, variant, size, ...props }) {
	return /* @__PURE__ */ jsx(TogglePrimitive.Root, {
		"data-slot": "toggle",
		className: cn(toggleVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var ToggleGroupContext = React$1.createContext({
	size: "default",
	variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
	return /* @__PURE__ */ jsx(ToggleGroupPrimitive.Root, {
		"data-slot": "toggle-group",
		"data-variant": variant,
		"data-size": size,
		className: cn("group/toggle-group flex w-fit items-center rounded-md", className),
		...props,
		children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, {
			value: {
				variant,
				size
			},
			children
		})
	});
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
	const context = React$1.useContext(ToggleGroupContext);
	return /* @__PURE__ */ jsx(ToggleGroupPrimitive.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": context.variant || variant,
		"data-size": context.size || size,
		className: cn(toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-s-0 data-[variant=outline]:first:border-s", className),
		...props,
		children
	});
}
export { ToggleGroupItem as n, Toggle as r, ToggleGroup as t };
