import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, GitBranch, Rocket } from "lucide-react";
var STATUS_CODES = [
	{
		value: "301",
		label: "301",
		description: "Moved Permanently"
	},
	{
		value: "302",
		label: "302",
		description: "Found (temporary)"
	},
	{
		value: "307",
		label: "307",
		description: "Temporary Redirect"
	},
	{
		value: "308",
		label: "308",
		description: "Permanent Redirect"
	}
];
function DomainTargetCard({ behaviour, onBehaviourChange, branch = "", onBranchChange, redirectUrl = "", onRedirectUrlChange, statusCode = "302", onStatusCodeChange, projectId, installationId, providerRepositoryId, hasRepository = false, disabled = false }) {
	const t = useT();
	const branchDisabled = !hasRepository;
	const redirectDisabled = false;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Target")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onBehaviourChange("active"),
								disabled,
								className: cn("text-start rounded-lg border p-4 transition-all cursor-pointer", behaviour === "active" ? "border-foreground bg-primary/5" : "border-border hover:border-muted-foreground/50", disabled && "opacity-50 cursor-not-allowed"),
								children: [
									/* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-muted-foreground mb-2" }),
									/* @__PURE__ */ jsx("div", {
										className: "text-[13px] font-semibold",
										children: t("Active deployment")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: t("Serves the active deployment")
									})
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => !branchDisabled && onBehaviourChange("branch"),
								disabled: disabled || branchDisabled,
								title: branchDisabled ? t("Connect repository first") : void 0,
								className: cn("text-start rounded-lg border p-4 transition-all cursor-pointer", behaviour === "branch" ? "border-foreground bg-primary/5" : "border-border hover:border-muted-foreground/50", (disabled || branchDisabled) && "opacity-50 cursor-not-allowed"),
								children: [
									/* @__PURE__ */ jsx(GitBranch, { className: "h-5 w-5 text-muted-foreground mb-2" }),
									/* @__PURE__ */ jsx("div", {
										className: "text-[13px] font-semibold",
										children: t("Branch")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: t("Serve a specific branch")
									})
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onBehaviourChange("redirect"),
								disabled: disabled || redirectDisabled,
								className: cn("text-start rounded-lg border p-4 transition-all cursor-pointer", behaviour === "redirect" ? "border-foreground bg-primary/5" : "border-border hover:border-muted-foreground/50", (disabled || redirectDisabled) && "opacity-50 cursor-not-allowed"),
								children: [
									/* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-muted-foreground mb-2" }),
									/* @__PURE__ */ jsx("div", {
										className: "text-[13px] font-semibold",
										children: t("Redirect")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: t("Redirect to another URL")
									})
								]
							})
						]
					}),
					behaviour === "branch" && hasRepository && onBranchChange && /* @__PURE__ */ jsx(BranchSelector, {
						projectId,
						installationId,
						providerRepositoryId,
						value: branch,
						onChange: onBranchChange,
						label: t("Branch"),
						placeholder: t("Select branch"),
						disabled,
						className: "max-w-[280px]"
					}),
					behaviour === "redirect" && onRedirectUrlChange && onStatusCodeChange && /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[12px]",
							children: t("Redirect URL")
						}), /* @__PURE__ */ jsx(Input, {
							placeholder: "https://example.com",
							value: redirectUrl,
							onChange: (e) => onRedirectUrlChange(e.target.value),
							className: "font-mono mt-1.5",
							disabled
						})] }), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Label, {
								className: "text-[12px]",
								children: t("Status code")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground mt-0.5 mb-1.5",
								children: t("301/308 permanent, 302/307 temporary")
							}),
							/* @__PURE__ */ jsxs(Select, {
								value: statusCode,
								onValueChange: onStatusCodeChange,
								disabled,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									className: "mt-1.5 h-9 min-w-[240px] [&_[data-slot=select-value]]:line-clamp-none",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsx(SelectContent, { children: STATUS_CODES.map((s) => /* @__PURE__ */ jsxs(SelectItem, {
									value: s.value,
									children: [
										s.label,
										" - ",
										t(s.description)
									]
								}, s.value)) })]
							})
						] })]
					})
				]
			})
		]
	});
}
export { DomainTargetCard as t };
