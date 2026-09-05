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
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { a as AccountAccessBlockedScreen, i as ConsoleImpersonationBanner, r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
function RootRedirect() {
	const { accountAccessBlocked, isLoading, isMfaRequired } = useAuth();
	if (!isLoading && accountAccessBlocked) return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-svh w-full flex-col bg-background",
		children: [/* @__PURE__ */ jsx(ConsoleImpersonationBanner, { sessionOnly: true }), /* @__PURE__ */ jsx(AccountAccessBlockedScreen, { layout: "fill" })]
	});
	if (!isLoading && isMfaRequired) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh items-center justify-center bg-background",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 bg-background",
		"aria-hidden": true
	});
}
export { RootRedirect as component };
