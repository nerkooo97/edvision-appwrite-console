import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./context-menu-D55xedo-.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import "./card-BZWeW6wv.js";
import { t as VerifyEmail } from "./VerifyEmail-Bcf5Pxwg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function VerifyEmailPreviewPage() {
	const [status, setStatus] = useState("pending");
	const [isResendLoading, setIsResendLoading] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-2 border-b border-border bg-background/95 px-4 py-2 backdrop-blur",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "mr-2 text-[12px] text-muted-foreground",
					children: "Debug preview. Toggle verify-email states."
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: status === "pending" ? "default" : "outline",
					className: "h-8 text-[12px]",
					onClick: () => setStatus("pending"),
					children: "Pending"
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: status === "confirming" ? "default" : "outline",
					className: "h-8 text-[12px]",
					onClick: () => setStatus("confirming"),
					children: "Confirming"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl pt-12",
			children: [
				/* @__PURE__ */ jsx(VerifyEmail, {
					preview: true,
					status,
					isResendLoading,
					onResend: () => {
						setIsResendLoading(true);
						window.setTimeout(() => setIsResendLoading(false), 1200);
					}
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						"By continuing, you agree to our",
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/terms",
							children: "Terms of Service"
						}),
						" ",
						"and",
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/privacy",
							children: "Privacy Policy"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 md:mt-16 flex justify-center",
					children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
				})
			]
		})]
	});
}
export { VerifyEmailPreviewPage as component };
