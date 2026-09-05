import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { Lock } from "lucide-react";
function navigateToUpgradeWizard(navigate, orgId) {
	if (orgId) {
		navigate({
			to: "/upgrade",
			search: { orgId }
		});
		return;
	}
	navigate({ to: "/upgrade" });
}
function getOrgIdFromPathname(pathname = typeof window !== "undefined" ? window.location.pathname : "") {
	const pathParts = pathname.split("/").filter(Boolean);
	const orgIndex = pathParts.findIndex((part) => part === "organizations");
	if (orgIndex >= 0 && pathParts[orgIndex + 1]) return pathParts[orgIndex + 1];
	return null;
}
function UpgradeCurtain({ isLocked, children, orgId, title, message = "This feature requires an upgrade to access.", ctaLabel, onCtaClick, showCta = true, className }) {
	const t = useT();
	const navigate = useNavigate();
	const resolvedTitle = title ?? t("Upgrade required");
	const resolvedCtaLabel = ctaLabel ?? t("Upgrade plan");
	if (!isLocked) return /* @__PURE__ */ jsx(Fragment, { children });
	const handleUpgrade = () => {
		if (onCtaClick) {
			onCtaClick();
			return;
		}
		navigateToUpgradeWizard(navigate, orgId ?? getOrgIdFromPathname());
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative @container", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("transition-opacity", isLocked && "opacity-40 pointer-events-none select-none blur-sm"),
			children
		}), isLocked && /* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-lg z-10 p-1.5 @[200px]:p-2 @[300px]:p-3 @[400px]:p-4 @[500px]:p-6 overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center justify-center gap-1.5 @[200px]:gap-2 @[300px]:gap-2.5 @[400px]:flex-row @[400px]:gap-3 @[500px]:gap-4 w-full max-w-full @[400px]:max-w-lg max-h-full",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hidden @[200px]:flex shrink-0",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 @[250px]:h-7 @[250px]:w-7 @[300px]:h-8 @[300px]:w-8 @[400px]:h-10 @[400px]:w-10 @[500px]:h-12 @[500px]:w-12 items-center justify-center rounded-full bg-muted",
							children: /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 @[250px]:h-3.5 @[250px]:w-3.5 @[300px]:h-4 @[300px]:w-4 @[400px]:h-5 @[400px]:w-5 @[500px]:h-6 @[500px]:w-6 text-muted-foreground" })
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 text-center @[400px]:text-start space-y-0.5 @[200px]:space-y-1 @[300px]:space-y-1.5 @[400px]:space-y-2 min-w-0",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[12px] @[200px]:text-[13px] @[250px]:text-[14px] @[300px]:text-[15px] font-semibold text-foreground leading-tight",
							children: resolvedTitle
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[10px] @[200px]:text-[11px] @[250px]:text-[12px] @[300px]:text-[13px] text-muted-foreground line-clamp-1 @[300px]:line-clamp-2 leading-tight",
							children: message
						})]
					}),
					showCta ? /* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 w-full @[400px]:w-auto",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-6 @[200px]:h-7 @[250px]:h-8 @[300px]:h-9 text-[10px] @[200px]:text-[11px] @[250px]:text-[12px] @[300px]:text-[13px] w-full @[400px]:w-auto px-2 @[200px]:px-3 @[250px]:px-4",
							onClick: handleUpgrade,
							...analyticsAttrs("upgrade-clicked"),
							children: resolvedCtaLabel
						})
					}) : null
				]
			})
		})]
	});
}
export { navigateToUpgradeWizard as n, UpgradeCurtain as t };
