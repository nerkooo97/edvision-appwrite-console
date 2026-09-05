import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { n as MYSQL_SEGMENTED_TOGGLE_ITEM_CLASS } from "./mysql-chrome-BbKkgFlK.js";
import { jsx } from "react/jsx-runtime";
function MysqlSegmentedToggle({ value, onValueChange, options, ariaLabel, variant = "inline", className }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: cn(variant === "bar" ? "flex h-12 w-full shrink-0 items-center border-b border-border bg-muted/20 px-2" : "shrink-0", className),
		children: /* @__PURE__ */ jsx(ToggleGroup, {
			type: "single",
			variant: "outline",
			size: "sm",
			value,
			onValueChange: (next) => {
				if (!next) return;
				if (options.some((option) => option.value === next)) onValueChange(next);
			},
			className: cn(variant === "bar" ? "w-full" : "shrink-0"),
			"aria-label": t(ariaLabel),
			children: options.map((option) => /* @__PURE__ */ jsx(ToggleGroupItem, {
				value: option.value,
				className: cn(MYSQL_SEGMENTED_TOGGLE_ITEM_CLASS, variant === "inline" && "min-w-[5.5rem] px-3"),
				children: t(option.label)
			}, option.value))
		})
	});
}
export { MysqlSegmentedToggle as t };
