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
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./button-Bnm2QhOm.js";
import { i as ConsoleImpersonationBanner } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./SentryContext-BM5Kx9zs.js";
import "./network-connectivity-D-2A27IF.js";
import { t as ErrorComponent } from "./Component-Fg6-kkbf.js";
import { c as setInitialLoaderShellGate, r as INITIAL_LOADER_SHELL_GATE, t as CloudStatusBanner } from "./CloudStatusBanner-CLph43RA.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLayoutEffect } from "react";
function ProjectAccessErrorView({ error, reset }) {
	useLayoutEffect(() => {
		setInitialLoaderShellGate(INITIAL_LOADER_SHELL_GATE.projectSelector, true);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "org-layout-container flex h-full flex-col bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "sticky top-0 z-[110] flex shrink-0 flex-col bg-background",
			children: [/* @__PURE__ */ jsx(CloudStatusBanner, {}), /* @__PURE__ */ jsx(ConsoleImpersonationBanner, {})]
		}), /* @__PURE__ */ jsx("main", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: /* @__PURE__ */ jsx(ErrorComponent, {
				error,
				info: void 0,
				reset
			})
		})]
	});
}
function ProjectRouteErrorComponent({ error, reset }) {
	return /* @__PURE__ */ jsx(ProjectAccessErrorView, {
		error,
		reset
	});
}
export { ProjectRouteErrorComponent as errorComponent };
