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
import "./constants-BDeF927R.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { c as parsePostgresTableTabFromPathname, d as postgresNav, i as normalizePostgresTableRouteId, s as parsePostgresTableId } from "./postgres-database-routes-CyTsPbzl.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { H as canShowTableSecuritySettings } from "./console-access-checks-BTMEOKcL.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as PostgresTableHeaderSlotProvider } from "./PostgresTableHeaderSlotContext-Bh_kLwdq.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Outlet, useLocation, useParams } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
function PostgresTableHeader({ projectId, databaseId, tableId, activeTab, onCreate, createLabel, createDisabled, createDisabledTooltip, showRefresh, onRefresh, isRefreshing, searchPlaceholder, searchValue, onSearchChange, filterTrigger }) {
	const t = useT();
	const { schema, table } = parsePostgresTableId(tableId);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId ?? void 0);
	const showSecurityTab = canShowTableSecuritySettings(access, features);
	const nav = useMemo(() => postgresNav({
		projectId,
		databaseId
	}).table({ tableId }), [
		projectId,
		databaseId,
		tableId
	]);
	const tabs = useMemo(() => [
		{
			id: "rows",
			label: t("Rows"),
			...nav.rows()
		},
		{
			id: "columns",
			label: t("Columns"),
			...nav.columns()
		},
		{
			id: "indexes",
			label: t("Indexes"),
			...nav.indexes()
		},
		...showSecurityTab ? [{
			id: "security",
			label: t("Security"),
			...nav.security()
		}] : [],
		{
			id: "settings",
			label: t("Settings"),
			...nav.settings()
		}
	], [
		nav,
		showSecurityTab,
		t
	]);
	return /* @__PURE__ */ jsx(ServiceHeader, {
		title: /* @__PURE__ */ jsxs("span", {
			className: "truncate",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "text-muted-foreground",
				children: [schema, "."]
			}), table]
		}),
		tabs,
		activeTab,
		fullWidthBorder: true,
		fullWidth: true,
		createLabel,
		onCreate,
		createDisabled,
		createDisabledTooltip,
		showRefresh,
		onRefresh,
		isRefreshing,
		searchPlaceholder,
		searchValue,
		onSearchChange,
		filterTrigger
	});
}
function PostgresTableLayout() {
	const { projectId, databaseId, tableId } = useParams({ strict: false });
	const location = useLocation();
	const normalizedTableId = normalizePostgresTableRouteId(tableId);
	const activeTab = useMemo(() => parsePostgresTableTabFromPathname(location.pathname) ?? "rows", [location.pathname]);
	const [headerSlot, setHeaderSlotState] = useState({});
	const setHeaderSlot = useCallback((next) => {
		setHeaderSlotState((prev) => {
			if (prev.searchPlaceholder === next.searchPlaceholder && prev.searchValue === next.searchValue && prev.onSearchChange === next.onSearchChange && prev.createLabel === next.createLabel && prev.onCreate === next.onCreate && prev.createDisabled === next.createDisabled && prev.createDisabledTooltip === next.createDisabledTooltip && prev.showRefresh === next.showRefresh && prev.onRefresh === next.onRefresh && prev.isRefreshing === next.isRefreshing && prev.filterTrigger === next.filterTrigger) return prev;
			return next;
		});
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "shrink-0 bg-background",
			children: /* @__PURE__ */ jsx(PostgresTableHeader, {
				projectId,
				databaseId,
				tableId: normalizedTableId,
				activeTab,
				...headerSlot
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			children: /* @__PURE__ */ jsx(PostgresTableHeaderSlotProvider, {
				setSlot: setHeaderSlot,
				children: /* @__PURE__ */ jsx(Outlet, {})
			})
		})]
	});
}
var SplitComponent = PostgresTableLayout;
export { SplitComponent as component };
