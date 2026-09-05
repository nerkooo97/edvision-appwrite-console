import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as ResourceSearchPopover } from "./ResourceSearchPopover-bBzpMw-c.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
const RESOURCE_TITLE_SWITCHER_DISABLED_KINDS = ["bucket", "table"];
function isResourceTitleSwitchable(kind) {
	return !RESOURCE_TITLE_SWITCHER_DISABLED_KINDS.includes(kind);
}
function replaceResourceIdInPath(pathname, currentResourceId, newResourceId) {
	const needle = `/${currentResourceId}`;
	const idx = pathname.indexOf(needle);
	if (idx === -1) return pathname;
	return pathname.slice(0, idx) + `/${newResourceId}` + pathname.slice(idx + needle.length);
}
function useSwitchResourceInPlace() {
	const navigate = useNavigate();
	const location = useLocation();
	return useCallback((currentResourceId, newResourceId) => {
		if (!currentResourceId || currentResourceId === newResourceId) return;
		navigate({
			to: replaceResourceIdInPath(location.pathname, currentResourceId, newResourceId),
			search: location.search
		});
	}, [
		navigate,
		location.pathname,
		location.search
	]);
}
function ResourceTitleSwitcher(props) {
	if (!isResourceTitleSwitchable(props.kind)) return /* @__PURE__ */ jsx("span", {
		className: cn("truncate", props.className),
		children: props.label
	});
	return /* @__PURE__ */ jsx(ResourceTitleSwitcherPopover, { ...props });
}
function ResourceTitleSwitcherPopover({ kind, label, resourceId, projectId, organizationId, databaseId, onSelect, disabled = false, className }) {
	return /* @__PURE__ */ jsx(ResourceSearchPopover, {
		kind,
		projectId,
		organizationId,
		databaseId,
		selectedId: resourceId,
		onSelect,
		disabled,
		trigger: /* @__PURE__ */ jsxs("button", {
			type: "button",
			disabled,
			className: cn("inline-flex min-w-0 max-w-full items-center gap-1 rounded-md px-1 py-0.5 text-start text-[17px] font-semibold text-foreground transition-colors", "hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", disabled && "pointer-events-none opacity-50", className),
			"aria-label": `Switch ${kind}`,
			children: [/* @__PURE__ */ jsx("span", {
				className: "truncate",
				children: label
			}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })]
		})
	});
}
function DetailResourceHeaderTitle({ kind, label, resourceId, projectId, organizationId, databaseId, onResourceSelect, back, showCopyableId = true }) {
	const switchResource = useSwitchResourceInPlace();
	const handleSelect = onResourceSelect ?? ((newResourceId) => switchResource(resourceId, newResourceId));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-2",
		children: [
			back ? back.to ? /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				asChild: true,
				className: "h-7 w-7 p-0",
				"aria-label": back["aria-label"],
				children: /* @__PURE__ */ jsx(Link, {
					to: back.to,
					params: back.params,
					children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
				})
			}) : /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-7 w-7 p-0",
				onClick: back.onClick,
				"aria-label": back["aria-label"],
				children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
			}) : null,
			/* @__PURE__ */ jsx(ResourceTitleSwitcher, {
				kind,
				label,
				resourceId,
				projectId,
				organizationId,
				databaseId,
				onSelect: handleSelect
			}),
			showCopyableId && resourceId ? /* @__PURE__ */ jsx(CopyableId, {
				id: resourceId,
				size: "xs",
				className: "shrink-0"
			}) : null
		]
	});
}
export { DetailResourceHeaderTitle as t };
