import "./utils-DoqqkI3X.js";
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
import { pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { bn as useSiteLogs } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./mcp-CgjPVMsn.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./McpIcon-D1Jv-oq2.js";
import "./calendar-6OJ5dwYN.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import "./ProjectConnectDialogContext-DgcmISfV.js";
import "./Icon-BtIL187e.js";
import "./FrameworkIcon-DTkSe6r3.js";
import "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import "./analytics-C_KnVoso.js";
import { t as Route } from "./projects._projectId.sites._siteId.logs-DCwKRiuE.js";
import "./projects._projectId.functions._functionId.executions-BEmbRDzz.js";
import "./format-ip-BZEMAGGm.js";
import "./scroll-area-CakPDLgR.js";
import "./FixWithAgentDropdown-Bbwqh7Cs.js";
import { n as LogsListView } from "./Executions-BOZDjTz3.js";
import { r as useRefreshOptional } from "./RefreshContext-CCamFujD.js";
import { jsx } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
var LOGS_PER_PAGE = 25;
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const search = Route.useSearch();
	const urlPage = search.page ?? 1;
	const urlExecutionId = search.executionId;
	const filterMap = useMemo(() => queryParamToMap(search.query ?? null), [search.query]);
	const filterQueries = filterMap.size > 0 ? Array.from(filterMap.values()) : void 0;
	const [pageSize, setPageSize] = useState(LOGS_PER_PAGE);
	const [selectedExecutionId, setSelectedExecutionId] = useState(urlExecutionId || null);
	const refreshContext = useRefreshOptional();
	const { logs, total, isLoading: logsLoading, isFetching: logsFetching, refetch } = useSiteLogs(projectId, siteId, urlPage - 1, pageSize, filterQueries);
	useEffect(() => {
		if (refreshContext) {
			refreshContext.registerRefreshHandler(async () => {
				await refetch();
			}, "Logs");
			return () => {
				refreshContext.unregisterRefreshHandler();
			};
		}
	}, [refreshContext, refetch]);
	const handlePageChange = (page) => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				page: page === 1 ? void 0 : page
			}),
			replace: true
		});
	};
	const handlePageSizeChange = (size) => {
		setPageSize(size);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				page: void 0
			}),
			replace: true
		});
	};
	useEffect(() => {
		if (urlExecutionId && urlExecutionId !== selectedExecutionId) setSelectedExecutionId(urlExecutionId);
		else if (!urlExecutionId && selectedExecutionId) setSelectedExecutionId(null);
	}, [urlExecutionId, selectedExecutionId]);
	const handleExecutionSelect = (executionId) => {
		setSelectedExecutionId(executionId);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				executionId
			}),
			replace: true
		});
	};
	const handleExecutionDeselect = () => {
		setSelectedExecutionId(null);
	};
	const hasFilters = filterMap.size > 0;
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 min-w-0 flex-1 flex-col",
		children: /* @__PURE__ */ jsx(LogsListView, {
			executions: logs,
			total,
			isLoading: logsLoading,
			isFetching: logsFetching,
			currentPage: urlPage,
			pageSize,
			onPageChange: handlePageChange,
			onPageSizeChange: handlePageSizeChange,
			selectedExecutionId,
			onExecutionSelect: handleExecutionSelect,
			onExecutionDeselect: handleExecutionDeselect,
			func: null,
			projectId,
			resourceVariant: "site",
			resourceId: siteId,
			emptyStateTitle: hasFilters ? void 0 : t("No logs yet"),
			emptyStateDescription: hasFilters ? void 0 : t("Logs will appear here when your site runs."),
			hasFilters,
			itemLabel: t("logs")
		})
	});
}
function SiteLogsPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { SiteLogsPage as component };
