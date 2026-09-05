import { t as cn } from "./utils-DoqqkI3X.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
const menuItemIconGapClassName = "gap-2";
function ContextMenuIcon({ icon: Icon }) {
	return /* @__PURE__ */ jsx("span", {
		className: "flex h-4 w-4 shrink-0 items-center justify-center [&_svg]:m-0",
		children: /* @__PURE__ */ jsx(Icon, { className: "size-4 shrink-0" })
	});
}
const MenuItemIcon = ContextMenuIcon;
function MenuItemContent({ icon, children, className }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon }), /* @__PURE__ */ jsx("span", {
		className: cn("min-w-0 flex-1", className),
		children
	})] });
}
const menuItemRowClassName = cn("flex w-full min-w-0 cursor-pointer items-center", menuItemIconGapClassName);
export { menuItemRowClassName as i, MenuItemContent as n, MenuItemIcon as r, ContextMenuIcon as t };
