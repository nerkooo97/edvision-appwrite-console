import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";
function PlanLimitWarning({ currentCount, limit, planName = "plan", resourceName, orgId, fullWidth = true }) {
	const t = useT();
	const limitNumber = limit == null ? 0 : typeof limit === "bigint" ? Number(limit) : Number(limit);
	if (!Number.isFinite(limitNumber) || limitNumber === 0) return null;
	const isAtLimit = currentCount >= limitNumber;
	const isApproachingLimit = currentCount >= limitNumber * .5;
	if (!isAtLimit && !isApproachingLimit) return null;
	const remaining = Math.max(0, limitNumber - currentCount);
	return /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-amber-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("w-full px-4 py-3 sm:px-6", !fullWidth && "mx-auto max-w-7xl"),
			children: /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: "border-amber-500/30 bg-transparent",
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx(AlertTitle, {
							className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
							children: isAtLimit ? `${t("You've reached the limit of")} ${limitNumber} ${t(resourceName)}` : `${t("Approaching the limit for")} ${t(resourceName)}`
						}), /* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline",
								children: isAtLimit ? /* @__PURE__ */ jsxs(Fragment, { children: [
									t("Your plan"),
									" (",
									planName,
									") ",
									t("includes up to"),
									" ",
									limitNumber,
									" ",
									t(resourceName),
									".",
									" ",
									orgId && /* @__PURE__ */ jsx(Link, {
										to: "/upgrade",
										search: { orgId },
										className: "font-medium underline hover:no-underline",
										children: t("Upgrade")
									}),
									" ",
									t("to unlock more capacity.")
								] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
									t("Your plan"),
									" (",
									planName,
									") ",
									t("includes up to"),
									" ",
									limitNumber,
									" ",
									t(resourceName),
									". ",
									t("Remaining:"),
									" ",
									remaining,
									".",
									" ",
									orgId && /* @__PURE__ */ jsx(Link, {
										to: "/upgrade",
										search: { orgId },
										className: "font-medium underline hover:no-underline",
										children: t("Upgrade")
									}),
									" ",
									t("to unlock more capacity.")
								] })
							})
						})]
					}), orgId && /* @__PURE__ */ jsx(Button, {
						asChild: true,
						size: "sm",
						className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/upgrade",
							search: { orgId },
							children: t("Upgrade")
						})
					})]
				})]
			})
		})
	});
}
export { PlanLimitWarning as t };
