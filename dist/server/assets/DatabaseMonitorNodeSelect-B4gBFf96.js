import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Copy, Database } from "lucide-react";
function buildDatabaseMonitorNodeOptions(replicaCount) {
	const count = Math.max(0, Math.floor(replicaCount));
	const options = [{ ordinal: 0 }];
	for (let i = 1; i <= count; i++) options.push({ ordinal: i });
	return options;
}
function getDatabaseMonitorNodeLabel(ordinal, t) {
	if (ordinal <= 0) return t("Primary");
	return `${t("Read replica")} ${ordinal}`;
}
function getDatabaseMonitorNodeIcon(ordinal) {
	return ordinal <= 0 ? Database : Copy;
}
function DatabaseMonitorNodeOptionContent({ ordinal, className }) {
	const t = useT();
	const Icon$1 = getDatabaseMonitorNodeIcon(ordinal);
	return /* @__PURE__ */ jsxs("span", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
			className: "truncate",
			children: getDatabaseMonitorNodeLabel(ordinal, t)
		})]
	});
}
function DatabaseMonitorNodeSelect({ replicaCount, value, onValueChange, className }) {
	const t = useT();
	const options = useMemo(() => buildDatabaseMonitorNodeOptions(replicaCount), [replicaCount]);
	if (replicaCount <= 0) return null;
	const selectedOrdinal = options.find((option) => option.ordinal === value)?.ordinal ?? 0;
	return /* @__PURE__ */ jsxs(Select, {
		value: String(selectedOrdinal),
		onValueChange: (next) => {
			const parsed = Number.parseInt(next, 10);
			if (Number.isFinite(parsed)) onValueChange(parsed);
		},
		children: [/* @__PURE__ */ jsx(SelectTrigger, {
			size: "sm",
			className: cn("h-7 w-[180px] text-[12px]", className),
			"aria-label": t("Instance"),
			children: /* @__PURE__ */ jsx(SelectValue, { children: /* @__PURE__ */ jsx(DatabaseMonitorNodeOptionContent, { ordinal: selectedOrdinal }) })
		}), /* @__PURE__ */ jsx(SelectContent, { children: options.map((option) => /* @__PURE__ */ jsx(SelectItem, {
			value: String(option.ordinal),
			className: "text-[13px]",
			children: /* @__PURE__ */ jsx(DatabaseMonitorNodeOptionContent, { ordinal: option.ordinal })
		}, option.ordinal)) })]
	});
}
export { DatabaseMonitorNodeSelect as t };
