import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { n as getRelativeTimeString } from "./DateTooltip-wgOggQgS.js";
import { b as sanitizeThreadContent, v as isThreadResolved } from "./route-meta-C-NVlcqg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check, MessageSquare } from "lucide-react";
function highlightText(text, query) {
	if (!query?.trim()) return text;
	const terms = query.split(/\s+/).filter(Boolean);
	if (terms.length === 0) return text;
	const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
	return text.split(pattern).map((part, index) => {
		if (!terms.some((term) => part.toLowerCase() === term.toLowerCase())) return part;
		return /* @__PURE__ */ jsx("mark", {
			className: "rounded-sm bg-[var(--brand-cta)]/30 px-0.5 text-inherit",
			children: part
		}, `${part}-${index}`);
	});
}
function ThreadCard({ thread, query = "" }) {
	const resolved = isThreadResolved(thread);
	return /* @__PURE__ */ jsxs(Link, {
		to: "/threads/$threadId",
		params: { threadId: thread.discord_id },
		className: cn("block rounded-xl border border-border bg-card/50 p-5 transition-colors", "hover:bg-muted/30"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 gap-2",
				children: /* @__PURE__ */ jsx("h3", {
					className: "min-w-0 flex-1 text-[15px] font-medium leading-snug text-foreground",
					children: highlightText(thread.title, query)
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 whitespace-pre-line break-words text-[13px] leading-relaxed text-muted-foreground",
				children: highlightText(sanitizeThreadContent(thread.content), query)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex min-w-0 flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("ul", {
					className: "flex min-w-0 flex-wrap gap-2",
					children: [resolved ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Badge, {
						variant: "success",
						className: "gap-1 text-[10px]",
						children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), "Resolved"]
					}) }) : null, (thread.tags ?? []).map((tag) => /* @__PURE__ */ jsx("li", {
						className: "min-w-0",
						children: /* @__PURE__ */ jsx(Badge, {
							variant: "secondary",
							className: "max-w-full truncate text-[10px]",
							children: tag
						})
					}, tag))]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-3 text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx(MessageSquare, {
							className: "h-3.5 w-3.5",
							"aria-hidden": true
						}), thread.message_count]
					}), thread.last_activity ? /* @__PURE__ */ jsx("span", { children: getRelativeTimeString(thread.last_activity) }) : null]
				})]
			})
		]
	});
}
export { ThreadCard as t };
