import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jr as isSpecificationAllowedInPlan } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useId } from "react";
function SpecificationTableCard({ title, description, scope, specs, selectedSlug, onSelectedSlugChange, hasChanges, isSaving, onSave, footerNote }) {
	const t = useT();
	const radioGroupId = useId();
	const rows = specs.filter((s) => s.slug && String(s.slug).trim() !== "");
	const radioName = `spec-${scope}-${radioGroupId}`;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-1",
					children: description
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-0 py-0 sm:px-0",
				children: /* @__PURE__ */ jsxs(Table, {
					withScrollContainer: false,
					children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, { className: "w-[44px] px-4 py-3" }),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Identifier")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: "vCPU"
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Memory")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Availability")
							})
						]
					}) }), /* @__PURE__ */ jsx(TableBody, { children: rows.map((spec) => {
						const slug = spec.slug;
						const allowed = isSpecificationAllowedInPlan(spec);
						const selected = selectedSlug === slug;
						return /* @__PURE__ */ jsxs(TableRow, {
							className: cn("cursor-pointer border-b border-border transition-colors", selected && "bg-primary/[0.06]", !allowed && "cursor-not-allowed opacity-55 hover:bg-transparent", allowed && "hover:bg-muted/40"),
							onClick: () => {
								if (allowed) onSelectedSlugChange(slug);
							},
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3 align-middle",
									children: /* @__PURE__ */ jsx("input", {
										type: "radio",
										name: radioName,
										className: "h-4 w-4 accent-primary",
										checked: selected,
										disabled: !allowed,
										onChange: () => allowed && onSelectedSlugChange(slug),
										"aria-label": `${t("Select specification")} ${slug}`
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "font-mono text-[12px] font-medium text-foreground tracking-tight",
										children: slug
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[13px] tabular-nums text-foreground",
										children: spec.cpus ?? "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[13px] tabular-nums text-foreground",
										children: spec.memory != null ? `${spec.memory} MB` : "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: allowed ? /* @__PURE__ */ jsx(Badge, {
										variant: "success",
										className: "text-[10px] shrink-0",
										children: t("Available")
									}) : /* @__PURE__ */ jsx(Badge, {
										variant: "warning",
										className: "text-[10px] shrink-0",
										children: t("Plan limit")
									})
								})
							]
						}, slug);
					}) })]
				})
			}),
			footerNote ? /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-3",
				children: footerNote
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || isSaving,
					onClick: onSave,
					children: t("Update")
				})
			})
		]
	});
}
export { SpecificationTableCard as t };
