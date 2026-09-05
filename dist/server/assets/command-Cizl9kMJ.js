import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { SearchIcon } from "lucide-react";
import { Command as Command$1 } from "cmdk";
function Command$2({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1, {
		"data-slot": "command",
		className: cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
		...props
	});
}
function CommandInput({ className, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ jsx(SearchIcon, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ jsx(Command$1.Input, {
			"data-slot": "command-input",
			className: cn("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
			...props
		})]
	});
}
function CommandList({ className, ref, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.List, {
		ref,
		"data-slot": "command-list",
		className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
		...props
	});
}
function CommandEmpty({ ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...props
	});
}
function CommandGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Group, {
		"data-slot": "command-group",
		className: cn("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
		...props
	});
}
function CommandSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Separator, {
		"data-slot": "command-separator",
		className: cn("bg-border -mx-1 h-px", className),
		...props
	});
}
function CommandItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Item, {
		"data-slot": "command-item",
		className: cn("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
export { CommandItem as a, CommandInput as i, CommandEmpty as n, CommandList as o, CommandGroup as r, CommandSeparator as s, Command$2 as t };
