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
import { Ps as vcsInstallationsQueryOptions, zo as useConsoleVariables } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Zt as siteFrameworksQueryOptions } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { n as useWizard, t as WizardProvider } from "./WizardContext-BjDTRlef.js";
import { jsx } from "react/jsx-runtime";
import { Outlet, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
function CreateSiteLayout() {
	return /* @__PURE__ */ jsx(WizardProvider, { children: /* @__PURE__ */ jsx(CreateSiteLayoutInner, {}) });
}
function CreateSiteLayoutInner() {
	const { projectId } = useParams({ strict: false });
	const { setInstallations, setFrameworks, setBaseDomain } = useWizard();
	const { data: installationsData } = useQuery(vcsInstallationsQueryOptions(projectId));
	const { data: frameworksData } = useQuery(siteFrameworksQueryOptions(projectId));
	const { data: project } = useQuery(projectQueryOptions(projectId));
	const { sitesDomain } = useConsoleVariables(project?.region);
	useEffect(() => {
		if (installationsData?.installations) setInstallations(installationsData.installations);
	}, [installationsData, setInstallations]);
	useEffect(() => {
		if (frameworksData?.frameworks) setFrameworks(frameworksData.frameworks);
	}, [frameworksData, setFrameworks]);
	useEffect(() => {
		setBaseDomain(sitesDomain ?? "appwrite.network");
	}, [sitesDomain, setBaseDomain]);
	return /* @__PURE__ */ jsx(Outlet, {});
}
export { CreateSiteLayout as component };
