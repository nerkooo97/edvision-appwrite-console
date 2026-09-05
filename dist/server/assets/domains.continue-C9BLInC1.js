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
import { Mt as ensurePersonalOrgAndFirstProject } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { t as RequireAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Route$1 } from "./domains.continue-C-L514cu.js";
import { t as buildBuyDomainWizardSearch } from "./buy-wizard-Hsxw7GRH.js";
import { jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
function DomainsContinuePage() {
	const search = Route$1.useSearch();
	return /* @__PURE__ */ jsx(RequireAuth, {
		loadingComponent: /* @__PURE__ */ jsx("div", {
			className: "flex min-h-svh items-center justify-center bg-background",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
		}),
		children: ({ account: accountUnknown }) => /* @__PURE__ */ jsx(DomainsContinueRedirect, {
			accountOrgId: accountUnknown?.prefs?.organization,
			search
		})
	});
}
function DomainsContinueRedirect({ accountOrgId, search }) {
	const navigate = useNavigate();
	const startedRef = useRef(false);
	useEffect(() => {
		if (startedRef.current) return;
		startedRef.current = true;
		(async () => {
			const wizardSearch = buildBuyDomainWizardSearch(search);
			let orgId = accountOrgId;
			if (!orgId) try {
				orgId = await ensurePersonalOrgAndFirstProject();
			} catch {
				navigate({
					to: "/account",
					replace: true
				});
				return;
			}
			navigate({
				to: "/organizations/$orgId/domains/buy",
				params: { orgId },
				search: wizardSearch,
				replace: true
			});
		})();
	}, [
		accountOrgId,
		navigate,
		search
	]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh items-center justify-center bg-background",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
}
export { DomainsContinuePage as component };
