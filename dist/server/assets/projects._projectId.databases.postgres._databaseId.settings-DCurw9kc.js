import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./console-profiles-D__E5Kgi.js";
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as SettingsLayoutShell } from "./SettingsLayoutShell-B7hNlMNA.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { n as usePostgresDatabaseHeaderSlot } from "./PostgresDatabaseHeaderSlotContext-CXBY4Myx.js";
import { jsx } from "react/jsx-runtime";
import { Outlet, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useMemo } from "react";
import { CalendarClock, Cpu, Globe, HardDrive, History, Puzzle, Settings, ShieldCheck } from "lucide-react";
const POSTGRES_DATABASE_SETTINGS_CARD_INDEX = [
	{
		sectionId: "general",
		title: "Name",
		keywords: [
			"rename",
			"display",
			"database name"
		]
	},
	{
		sectionId: "general",
		title: "Details",
		keywords: [
			"id",
			"created",
			"updated",
			"status",
			"paused",
			"version"
		]
	},
	{
		sectionId: "general",
		title: "Delete database",
		keywords: [
			"delete",
			"remove",
			"destroy",
			"danger"
		]
	},
	{
		sectionId: "compute",
		title: "Compute tier",
		keywords: [
			"tier",
			"cpu",
			"memory",
			"upgrade",
			"specification",
			"price"
		]
	},
	{
		sectionId: "replication",
		title: "Read replicas",
		keywords: [
			"replica",
			"replicas",
			"failover",
			"ha",
			"topology",
			"cluster"
		]
	},
	{
		sectionId: "replication",
		title: "Primary instance",
		keywords: [
			"primary",
			"main",
			"leader",
			"failover",
			"promote",
			"promotion"
		]
	},
	{
		sectionId: "replication",
		title: "Sync mode",
		keywords: [
			"sync",
			"async",
			"synchronous",
			"quorum",
			"replication"
		]
	},
	{
		sectionId: "network",
		title: "Network",
		keywords: [
			"ip",
			"allowlist",
			"cidr",
			"idle",
			"timeout"
		]
	},
	{
		sectionId: "pitr",
		title: "Point-in-time recovery (PITR)",
		keywords: [
			"pitr",
			"retention",
			"restore",
			"recovery",
			"point in time"
		]
	},
	{
		sectionId: "storage",
		title: "Storage",
		keywords: [
			"autoscaling",
			"disk",
			"threshold",
			"gb"
		]
	},
	{
		sectionId: "extensions",
		title: "Extensions",
		keywords: [
			"extension",
			"pgvector",
			"postgis",
			"install",
			"uninstall",
			"plugin"
		]
	},
	{
		sectionId: "maintenance",
		title: "Maintenance window",
		keywords: [
			"window",
			"utc",
			"day",
			"hour",
			"upgrade",
			"weekly"
		]
	}
];
const POSTGRES_DATABASE_SETTINGS_NAV = [
	{
		id: "general",
		label: "General",
		pathSuffix: "",
		icon: Settings,
		keywords: [
			"general",
			"name",
			"identity",
			"status",
			"paused",
			"running",
			"details",
			"id",
			"copy",
			"created",
			"updated",
			"identifiers",
			"delete",
			"remove",
			"trash",
			"destroy",
			"danger"
		]
	},
	{
		id: "compute",
		label: "Compute",
		pathSuffix: "compute",
		icon: Cpu,
		keywords: [
			"compute",
			"tier",
			"specification",
			"cpu",
			"memory",
			"connections",
			"upgrade",
			"vcpu",
			"price"
		]
	},
	{
		id: "replication",
		label: "Replication",
		pathSuffix: "replication",
		icon: ShieldCheck,
		keywords: [
			"replication",
			"replica",
			"replicas",
			"failover",
			"primary",
			"promote",
			"sync",
			"async",
			"ha"
		]
	},
	{
		id: "network",
		label: "Network",
		pathSuffix: "network",
		icon: Globe,
		keywords: [
			"network",
			"ip",
			"allowlist",
			"cidr",
			"idle",
			"timeout",
			"firewall",
			"access"
		]
	},
	{
		id: "pitr",
		label: "PITR",
		pathSuffix: "pitr",
		icon: History,
		keywords: [
			"pitr",
			"point in time",
			"point-in-time",
			"recovery",
			"retention",
			"restore"
		]
	},
	{
		id: "storage",
		label: "Storage",
		pathSuffix: "storage",
		icon: HardDrive,
		keywords: [
			"storage",
			"disk",
			"autoscaling",
			"threshold",
			"gb",
			"expansion"
		]
	},
	{
		id: "extensions",
		label: "Extensions",
		pathSuffix: "extensions",
		icon: Puzzle,
		keywords: [
			"extensions",
			"extension",
			"pgvector",
			"postgis",
			"install",
			"uninstall",
			"plugin"
		]
	},
	{
		id: "maintenance",
		label: "Maintenance",
		pathSuffix: "maintenance",
		icon: CalendarClock,
		keywords: [
			"maintenance",
			"window",
			"upgrade",
			"utc",
			"schedule",
			"weekly"
		]
	}
];
var POSTGRES_SETTINGS_TO = {
	"": "/projects/$projectId/databases/postgres/$databaseId/settings",
	compute: "/projects/$projectId/databases/postgres/$databaseId/settings/compute",
	replication: "/projects/$projectId/databases/postgres/$databaseId/settings/replication",
	network: "/projects/$projectId/databases/postgres/$databaseId/settings/network",
	pitr: "/projects/$projectId/databases/postgres/$databaseId/settings/pitr",
	storage: "/projects/$projectId/databases/postgres/$databaseId/settings/storage",
	extensions: "/projects/$projectId/databases/postgres/$databaseId/settings/extensions",
	maintenance: "/projects/$projectId/databases/postgres/$databaseId/settings/maintenance"
};
function useActiveSettingsSection(pathname) {
	return useMemo(() => {
		const parts = pathname.split("/").filter(Boolean);
		const i = parts.indexOf("settings");
		const next = i >= 0 ? parts[i + 1] : void 0;
		if (!next) return "general";
		if ([
			"compute",
			"replication",
			"network",
			"pitr",
			"storage",
			"extensions",
			"maintenance"
		].includes(next)) return next;
		return "general";
	}, [pathname]);
}
function toForItem(pathSuffix) {
	return POSTGRES_SETTINGS_TO[pathSuffix];
}
function PostgresDatabaseSettingsShell() {
	const t = useT();
	const location = useLocation();
	const navigate = useNavigate();
	const { projectId, databaseId } = useParams({ strict: false });
	const { features } = useConsoleProfile();
	const activeSection = useActiveSettingsSection(location.pathname);
	const navItems = useMemo(() => POSTGRES_DATABASE_SETTINGS_NAV.filter((item) => item.id !== "pitr" || features.databaseBackups), [features.databaseBackups]);
	const params = {
		projectId,
		databaseId
	};
	return /* @__PURE__ */ jsx(SettingsLayoutShell, {
		navItems: useMemo(() => navItems.map((item) => ({
			id: item.id,
			label: t(item.label),
			icon: item.icon,
			keywords: item.keywords,
			to: toForItem(item.pathSuffix),
			params
		})), [
			navItems,
			projectId,
			databaseId,
			t
		]),
		activeSectionId: activeSection,
		cardIndex: POSTGRES_DATABASE_SETTINGS_CARD_INDEX,
		onNavigateToSection: (sectionId) => {
			const item = navItems.find((n) => n.id === sectionId);
			if (!item) return;
			navigate({
				to: toForItem(item.pathSuffix),
				params
			});
		},
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
function PostgresDatabaseSettingsLayout() {
	usePostgresDatabaseHeaderSlot({});
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-0 flex-1 overflow-y-auto",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:pb-8 sm:pt-6",
			children: /* @__PURE__ */ jsx(PostgresDatabaseSettingsShell, {})
		})
	});
}
var SplitComponent = PostgresDatabaseSettingsLayout;
export { SplitComponent as component };
