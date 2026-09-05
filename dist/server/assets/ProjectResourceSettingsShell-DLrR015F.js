import { n as useT } from "./translate-DZcqveGn.js";
import { t as SettingsLayoutShell } from "./SettingsLayoutShell-B7hNlMNA.js";
import { jsx } from "react/jsx-runtime";
import { Outlet, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useMemo } from "react";
const FUNCTION_SETTINGS_CARD_INDEX = [
	{
		sectionId: "general",
		title: "Details",
		keywords: [
			"id",
			"created",
			"updated",
			"identifiers",
			"timestamps"
		]
	},
	{
		sectionId: "general",
		title: "Name",
		keywords: [
			"rename",
			"display",
			"function name"
		]
	},
	{
		sectionId: "general",
		title: "Status",
		keywords: [
			"enabled",
			"disabled",
			"toggle"
		]
	},
	{
		sectionId: "general",
		title: "Delete function",
		keywords: [
			"delete",
			"remove",
			"destroy",
			"danger"
		]
	},
	{
		sectionId: "git",
		title: "Repository",
		keywords: [
			"git",
			"github",
			"branch",
			"connect",
			"disconnect",
			"root directory",
			"production"
		]
	},
	{
		sectionId: "git",
		title: "Silent mode",
		keywords: [
			"comments",
			"commits",
			"pull request",
			"deployment"
		]
	},
	{
		sectionId: "build",
		title: "Commands",
		keywords: [
			"install",
			"build",
			"package",
			"script"
		]
	},
	{
		sectionId: "build",
		title: "Triggers",
		keywords: [
			"git",
			"branch",
			"path",
			"glob",
			"filter",
			"deploy",
			"pattern"
		]
	},
	{
		sectionId: "build",
		title: "Specification",
		keywords: [
			"vcpu",
			"memory",
			"worker",
			"profile",
			"cpu"
		]
	},
	{
		sectionId: "runtime",
		title: "Image",
		keywords: [
			"runtime",
			"docker",
			"container"
		]
	},
	{
		sectionId: "runtime",
		title: "Timeout",
		keywords: [
			"execute",
			"seconds",
			"limit"
		]
	},
	{
		sectionId: "runtime",
		title: "Logging",
		keywords: [
			"logs",
			"stdout",
			"stderr"
		]
	},
	{
		sectionId: "runtime",
		title: "Specification",
		keywords: [
			"vcpu",
			"memory",
			"cpu",
			"resources"
		]
	},
	{
		sectionId: "executions",
		title: "Schedule",
		keywords: [
			"cron",
			"scheduled",
			"recurring"
		]
	},
	{
		sectionId: "executions",
		title: "Events",
		keywords: [
			"webhook",
			"trigger",
			"invoke",
			"async"
		]
	}
];
const SITE_SETTINGS_CARD_INDEX = [
	{
		sectionId: "general",
		title: "Details",
		keywords: [
			"id",
			"created",
			"updated",
			"identifiers"
		]
	},
	{
		sectionId: "general",
		title: "Name",
		keywords: [
			"rename",
			"display",
			"site name"
		]
	},
	{
		sectionId: "general",
		title: "Delete site",
		keywords: [
			"delete",
			"remove",
			"destroy",
			"danger"
		]
	},
	{
		sectionId: "git",
		title: "Repository",
		keywords: [
			"git",
			"github",
			"branch",
			"connect",
			"deployment"
		]
	},
	{
		sectionId: "git",
		title: "Silent mode",
		keywords: [
			"comments",
			"commits",
			"pull request"
		]
	},
	{
		sectionId: "build",
		title: "Framework",
		keywords: [
			"adapter",
			"static",
			"ssg",
			"next",
			"react"
		]
	},
	{
		sectionId: "build",
		title: "Commands",
		keywords: [
			"install",
			"build",
			"output",
			"compile"
		]
	},
	{
		sectionId: "build",
		title: "Triggers",
		keywords: [
			"git",
			"branch",
			"path",
			"glob",
			"filter",
			"deploy",
			"pattern"
		]
	},
	{
		sectionId: "build",
		title: "Specification",
		keywords: [
			"vcpu",
			"memory",
			"worker",
			"profile"
		]
	},
	{
		sectionId: "runtime",
		title: "Image",
		keywords: [
			"runtime",
			"ssr",
			"server"
		]
	},
	{
		sectionId: "runtime",
		title: "Timeout",
		keywords: ["execute", "seconds"]
	},
	{
		sectionId: "runtime",
		title: "Logging",
		keywords: ["logs", "stdout"]
	},
	{
		sectionId: "runtime",
		title: "Specification",
		keywords: [
			"vcpu",
			"memory",
			"cpu"
		]
	}
];
var FUNCTION_SETTINGS_TO = {
	"": "/projects/$projectId/functions/$functionId/settings",
	git: "/projects/$projectId/functions/$functionId/settings/git",
	build: "/projects/$projectId/functions/$functionId/settings/build",
	runtime: "/projects/$projectId/functions/$functionId/settings/runtime",
	executions: "/projects/$projectId/functions/$functionId/settings/executions"
};
var SITE_SETTINGS_TO = {
	"": "/projects/$projectId/sites/$siteId/settings",
	git: "/projects/$projectId/sites/$siteId/settings/git",
	build: "/projects/$projectId/sites/$siteId/settings/build",
	runtime: "/projects/$projectId/sites/$siteId/settings/runtime",
	executions: "/projects/$projectId/sites/$siteId/settings"
};
function useActiveSettingsSection(pathname) {
	return useMemo(() => {
		const parts = pathname.split("/").filter(Boolean);
		const i = parts.indexOf("settings");
		const next = i >= 0 ? parts[i + 1] : void 0;
		if (!next) return "general";
		if (next === "danger-zone") return "general";
		if ([
			"git",
			"build",
			"runtime",
			"executions"
		].includes(next)) return next;
		return "general";
	}, [pathname]);
}
function ProjectResourceSettingsShell({ kind, navItems }) {
	const t = useT();
	const location = useLocation();
	const navigate = useNavigate();
	const { projectId, functionId, siteId } = useParams({ strict: false });
	const activeSection = useActiveSettingsSection(location.pathname);
	const paramsForNavigate = kind === "function" ? {
		projectId,
		functionId
	} : {
		projectId,
		siteId
	};
	const toForItem = (pathSuffix) => kind === "function" ? FUNCTION_SETTINGS_TO[pathSuffix] : SITE_SETTINGS_TO[pathSuffix];
	const cardIndex = kind === "function" ? FUNCTION_SETTINGS_CARD_INDEX : SITE_SETTINGS_CARD_INDEX;
	return /* @__PURE__ */ jsx(SettingsLayoutShell, {
		navItems: useMemo(() => navItems.map((item) => ({
			id: item.id,
			label: t(item.label),
			icon: item.icon,
			keywords: item.keywords,
			to: toForItem(item.pathSuffix),
			params: paramsForNavigate
		})), [
			navItems,
			kind,
			projectId,
			functionId,
			siteId,
			t
		]),
		activeSectionId: activeSection,
		cardIndex,
		onNavigateToSection: (sectionId) => {
			const item = navItems.find((n) => n.id === sectionId);
			if (!item) return;
			navigate({
				to: toForItem(item.pathSuffix),
				params: paramsForNavigate
			});
		},
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
export { ProjectResourceSettingsShell as t };
