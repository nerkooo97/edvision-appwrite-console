import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Mt as ensurePersonalOrgAndFirstProject } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./domains-Bfw8HsXF.js";
import "./input-yKHNPhDZ.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./skeleton-8d0Q_D56.js";
import { c as trackEvent } from "./analytics-C_KnVoso.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./route-meta-CfD66bzz.js";
import { n as domainsHero, t as Route } from "./domains-wqiNI2-0.js";
import { t as DomainSearchResults } from "./DomainSearchResults-CwRWQhVB.js";
import { n as buildSignInForDomainPath, r as buildSignUpForDomainPath, t as buildBuyDomainWizardSearch } from "./buy-wizard-Hsxw7GRH.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
function DomainsSearchBackground({ className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("pointer-events-none absolute inset-0 overflow-hidden", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 z-[1] overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: cn("absolute -start-[42%] bottom-[-32%] h-[480px] w-[820px] opacity-[0.52]", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.2)_0%,rgba(253,54,110,0.07)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.12)_0%,rgba(253,54,110,0.04)_38%,transparent_72%)]", "sm:-start-[38%] sm:h-[560px] sm:w-[980px]", "lg:-start-[36%] lg:h-[640px] lg:w-[1120px]") }), /* @__PURE__ */ jsx("div", { className: cn("absolute -end-[44%] bottom-[-34%] h-[500px] w-[840px] opacity-[0.52]", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.17)_0%,rgba(124,103,254,0.06)_40%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.11)_0%,rgba(124,103,254,0.04)_40%,transparent_74%)]", "sm:-end-[40%] sm:h-[580px] sm:w-[1000px]", "lg:-end-[38%] lg:h-[660px] lg:w-[1140px]") })]
		})]
	});
}
function DomainsAuthFooter() {
	const t = useT();
	return /* @__PURE__ */ jsxs("p", { children: [
		/* @__PURE__ */ jsx(Link, {
			...buildSignUpForDomainPath(),
			className: "link-neutral",
			children: t("Create an account")
		}),
		" ",
		t("or"),
		" ",
		/* @__PURE__ */ jsx(Link, {
			...buildSignInForDomainPath(),
			className: "link-neutral",
			children: t("sign in")
		}),
		" ",
		t("to register and connect your domain.")
	] });
}
function View({ initialSearch = "" }) {
	const t = useT();
	const navigate = useNavigate();
	const { account: accountUnknown, isAuthenticated, isLoading, isFetched } = useAuth();
	const account = accountUnknown;
	const showAuthFooter = isFetched && !isLoading && !isAuthenticated;
	const continueToBuyWizard = useCallback(async (domain) => {
		const search = buildBuyDomainWizardSearch({
			domain,
			stage: "checkout"
		});
		if (!isAuthenticated || !account) {
			navigate(buildSignUpForDomainPath(search));
			return;
		}
		const orgId = account.prefs?.organization;
		if (orgId) {
			navigate({
				to: "/organizations/$orgId/domains/buy",
				params: { orgId },
				search
			});
			return;
		}
		try {
			navigate({
				to: "/organizations/$orgId/domains/buy",
				params: { orgId: await ensurePersonalOrgAndFirstProject() },
				search
			});
		} catch {
			navigate({
				to: "/domains/continue",
				search
			});
		}
	}, [
		account,
		isAuthenticated,
		navigate
	]);
	const handleSelectDomain = useCallback((full, _quote) => {
		trackEvent("Wizard Option Selected", {
			wizard: "domains_marketing",
			step: "search",
			result: "domain_selected"
		});
		continueToBuyWizard(full);
	}, [continueToBuyWizard]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative isolate min-h-[calc(100dvh-3.5rem)] min-w-0 bg-background",
		children: [/* @__PURE__ */ jsx(DomainsSearchBackground, {}), /* @__PURE__ */ jsx("div", {
			className: "relative z-[2]",
			children: /* @__PURE__ */ jsx(DomainSearchResults, {
				variant: "focus",
				initialSearch,
				onSelectDomain: handleSelectDomain,
				actionLabel: t("Continue"),
				inputId: "marketing-domain-search",
				title: t(domainsHero.title),
				description: t(domainsHero.description),
				footer: showAuthFooter ? /* @__PURE__ */ jsx(DomainsAuthFooter, {}) : void 0
			})
		})]
	});
}
function DomainsPage() {
	const { q } = Route.useSearch();
	return /* @__PURE__ */ jsx(View, { initialSearch: q?.trim() ?? "" });
}
export { DomainsPage as component };
