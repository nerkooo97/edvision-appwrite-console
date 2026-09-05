import { t as cn } from "./utils-DoqqkI3X.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { i as getStatusColor } from "./status-badge-_8W34wot.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1 } from "react";
const RESOURCE_CARD_SECTION_DIVIDER_CLASSNAME = "-mx-4 mt-2 min-w-0 border-t border-border px-4 pt-2.5";
const RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME = cn(RESOURCE_CARD_SECTION_DIVIDER_CLASSNAME, "pb-4");
const RESOURCE_CARD_BASE_CLASSNAME = "group min-w-0 overflow-hidden rounded-xl border border-border bg-card/50 transition-all";
const RESOURCE_CARD_INTERACTIVE_CLASSNAME = "cursor-pointer hover:border-border hover:bg-card";
const RESOURCE_CARD_PADDED_CLASSNAME = cn(RESOURCE_CARD_BASE_CLASSNAME, "p-4");
const RESOURCE_CARD_SHELL_CLASSNAME = "min-w-0 overflow-hidden";
const RESOURCE_CARD_MEDIA_SHELL_CLASSNAME = cn(RESOURCE_CARD_BASE_CLASSNAME, RESOURCE_CARD_INTERACTIVE_CLASSNAME, "flex h-full flex-col", RESOURCE_CARD_SHELL_CLASSNAME);
const RESOURCE_CARD_GRID_CLASSNAME = "grid min-w-0 gap-3 @[640px]:grid-cols-2 @[1024px]:grid-cols-3 [&>*]:min-w-0";
const RESOURCE_CARD_GRID_4_COL_CLASSNAME = "grid min-w-0 gap-3 @[640px]:grid-cols-2 @[1024px]:grid-cols-4 [&>*]:min-w-0";
const RESOURCE_CARD_GRID_2_COL_CLASSNAME = "grid min-w-0 gap-4 @[640px]:grid-cols-2 [&>*]:min-w-0";
const RESOURCE_CARD_GRID_WIDE_CLASSNAME = "grid min-w-0 gap-4 grid-cols-1 @[640px]:grid-cols-2 @[1280px]:grid-cols-3 [&>*]:min-w-0";
function ResourceCard({ title, titleAccessory, subtitle, resourceId, icon: Icon, customIcon, iconColor = "bg-muted text-muted-foreground", status, statusLabel, metadata, onClick, onMenuClick, avatar, interactive = true, className }) {
	return /* @__PURE__ */ jsxs("div", {
		onClick,
		className: cn(RESOURCE_CARD_PADDED_CLASSNAME, interactive && "cursor-pointer hover:border-border hover:bg-card", metadata && metadata.length > 0 && "pb-0", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [avatar ? /* @__PURE__ */ jsx(InitialsAvatar, {
					name: avatar,
					size: "lg"
				}) : customIcon ? /* @__PURE__ */ jsx("div", {
					className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconColor),
					children: customIcon
				}) : Icon ? /* @__PURE__ */ jsx("div", {
					className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconColor),
					children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
				}) : null, /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "truncate text-[14px] font-medium text-foreground",
									children: title
								}),
								titleAccessory ? /* @__PURE__ */ jsx("div", {
									className: "flex shrink-0 items-center gap-1",
									children: titleAccessory
								}) : null,
								status && !statusLabel && /* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 shrink-0 rounded-full", {
									success: "bg-emerald-500 dark:bg-emerald-400",
									warning: "bg-amber-500 dark:bg-amber-400",
									error: "bg-red-500 dark:bg-red-400",
									info: "bg-slate-500 dark:bg-slate-400",
									pending: "bg-amber-500 dark:bg-amber-400",
									processing: "bg-blue-500 dark:bg-blue-400",
									active: "bg-emerald-500 dark:bg-emerald-400",
									inactive: "bg-muted-foreground/50",
									completed: "bg-emerald-500 dark:bg-emerald-400",
									failed: "bg-red-500 dark:bg-red-400",
									verified: "bg-emerald-500 dark:bg-emerald-400",
									unverified: "bg-red-500 dark:bg-red-400"
								}[status] || "bg-muted-foreground/50") }),
								statusLabel && /* @__PURE__ */ jsx("span", {
									className: cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium", status ? getStatusColor(status) : "bg-muted text-muted-foreground"),
									children: statusLabel
								})
							]
						}),
						subtitle && /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 truncate text-[12px] text-muted-foreground whitespace-nowrap",
							children: subtitle
						}),
						resourceId && /* @__PURE__ */ jsx("div", {
							className: "mt-1.5",
							children: /* @__PURE__ */ jsx(CopyableId, {
								id: resourceId,
								size: "xs",
								maxWidth: 120
							})
						})
					]
				})]
			}), onMenuClick && /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
				compact: true,
				revealOnGroupHover: true,
				onClick: (e) => {
					e.stopPropagation();
					onMenuClick(e);
				}
			})]
		}), metadata && metadata.length > 0 && /* @__PURE__ */ jsx("div", {
			className: RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 flex-nowrap items-center gap-x-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: metadata.map((item, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [index > 0 && item.align !== "right" ? /* @__PURE__ */ jsx("span", {
					className: "shrink-0 text-[10px] text-muted-foreground/40",
					"aria-hidden": true,
					children: "·"
				}) : null, /* @__PURE__ */ jsxs("div", {
					className: cn("flex shrink-0 items-center gap-0.5", item.align === "right" && "ms-auto"),
					children: [item.label ? /* @__PURE__ */ jsx("span", {
						className: "text-[12px] text-muted-foreground/70",
						children: item.label
					}) : null, /* @__PURE__ */ jsx("span", {
						className: "text-[12px] font-medium text-muted-foreground",
						children: item.value
					})]
				})] }, index))
			})
		})]
	});
}
export { RESOURCE_CARD_GRID_WIDE_CLASSNAME as a, RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME as c, RESOURCE_CARD_SHELL_CLASSNAME as d, ResourceCard as f, RESOURCE_CARD_GRID_CLASSNAME as i, RESOURCE_CARD_PADDED_CLASSNAME as l, RESOURCE_CARD_GRID_2_COL_CLASSNAME as n, RESOURCE_CARD_INTERACTIVE_CLASSNAME as o, RESOURCE_CARD_GRID_4_COL_CLASSNAME as r, RESOURCE_CARD_MEDIA_SHELL_CLASSNAME as s, RESOURCE_CARD_BASE_CLASSNAME as t, RESOURCE_CARD_SECTION_DIVIDER_CLASSNAME as u };
