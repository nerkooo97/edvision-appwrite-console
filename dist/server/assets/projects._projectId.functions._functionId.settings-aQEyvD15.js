import "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./SettingsLayoutShell-B7hNlMNA.js";
import { t as ProjectResourceSettingsShell } from "./ProjectResourceSettingsShell-DLrR015F.js";
import { jsx } from "react/jsx-runtime";
import { Cpu, GitBranch, Hammer, Play, Settings } from "lucide-react";
const FUNCTION_SETTINGS_NAV = [
	{
		id: "general",
		label: "General",
		pathSuffix: "",
		icon: Settings,
		keywords: [
			"general",
			"name",
			"identity",
			"enabled",
			"status",
			"disabled",
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
		id: "git",
		label: "Version control (Git)",
		pathSuffix: "git",
		icon: GitBranch,
		keywords: [
			"git",
			"github",
			"repository",
			"branch",
			"vcs",
			"silent",
			"silent mode",
			"comments",
			"commits",
			"pull request",
			"integration",
			"connect",
			"disconnect",
			"root directory",
			"production",
			"deployment"
		]
	},
	{
		id: "build",
		label: "Build",
		pathSuffix: "build",
		icon: Hammer,
		keywords: [
			"build",
			"commands",
			"install",
			"package",
			"specification",
			"framework",
			"adapter",
			"output",
			"docker",
			"compile",
			"script",
			"profile",
			"vcpu",
			"memory",
			"worker",
			"deployment",
			"retention",
			"cleanup",
			"inactive",
			"forever",
			"triggers",
			"branch filter",
			"path filter",
			"glob",
			"pattern"
		]
	},
	{
		id: "runtime",
		label: "Runtime",
		pathSuffix: "runtime",
		icon: Cpu,
		keywords: [
			"runtime",
			"image",
			"entrypoint",
			"timeout",
			"logging",
			"specification",
			"vcpu",
			"memory",
			"execute",
			"invoke",
			"variables",
			"environment"
		]
	},
	{
		id: "executions",
		label: "Executions",
		pathSuffix: "executions",
		icon: Play,
		keywords: [
			"executions",
			"execution",
			"schedule",
			"cron",
			"events",
			"webhook",
			"trigger",
			"invoke",
			"async"
		]
	}
];
function FunctionSettingsLayout() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex-1",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6 pt-4 sm:pt-6",
			children: /* @__PURE__ */ jsx(ProjectResourceSettingsShell, {
				kind: "function",
				navItems: FUNCTION_SETTINGS_NAV
			})
		})
	});
}
var SplitComponent = FunctionSettingsLayout;
export { SplitComponent as component };
