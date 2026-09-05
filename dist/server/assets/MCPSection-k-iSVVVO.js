import { o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as MCP_SELF_HOSTED_DOCS_URL, c as getCursorMcpInstallUrl, d as getSelfHostedCodexConfig, f as getSelfHostedMcpEditorConfig, h as openMcpInstallUrl, i as MCP_OPENCODE_CONFIG_SNIPPET, l as getMcpClaudeCodeInstallCommand, m as getVscodeMcpInstallUrl, n as MCP_CODEX_INSTALL_COMMAND, p as getSelfHostedOpencodeConfig, r as MCP_EDITOR_CONFIG_SNIPPET, t as MCP_CLAUDE_DESKTOP_CONFIG_SNIPPET, u as getSelfHostedClaudeCodeInstallCommand } from "./mcp-CgjPVMsn.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Download, ExternalLink } from "lucide-react";
const MCP_TRY_IT_PROMPT_TEMPLATES = [
	"Use Appwrite MCP to list the databases in project {projectName}",
	"Use Appwrite MCP to list the storage buckets in project {projectName}",
	"Use Appwrite MCP to list the users in project {projectName}"
];
function getMcpTryItPrompts(projectName) {
	return MCP_TRY_IT_PROMPT_TEMPLATES.map((template) => template.replaceAll("{projectName}", projectName));
}
var AGENT_ONBOARDING_PREFIX = "console.mcp.agentOnboardingDone.";
function storageGet(key) {
	if (typeof window === "undefined") return null;
	try {
		return window.localStorage.getItem(key);
	} catch {
		return null;
	}
}
function storageSet(key, value) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(key, value);
	} catch {}
}
function onboardingAgentStorageKey(projectId) {
	return `${AGENT_ONBOARDING_PREFIX}${projectId}`;
}
function getOnboardingAgentStepState(projectId) {
	const value = storageGet(onboardingAgentStorageKey(projectId));
	if (value === "skipped") return "skipped";
	if (value === "completed") return "completed";
	return "pending";
}
function markOnboardingAgentStepSkipped(projectId) {
	storageSet(onboardingAgentStorageKey(projectId), "skipped");
}
function markOnboardingAgentStepDone(projectId) {
	storageSet(onboardingAgentStorageKey(projectId), "completed");
}
function jsonSnippet(value) {
	return JSON.stringify(value, null, 2);
}
var MCP_MORE_TOOLS_DOCS_HREF = "/docs/tooling/ai/mcp-servers";
function getCloudMcpTools(t) {
	return [
		{
			id: "claude-code",
			name: "Claude Code",
			iconPath: "/icons/claude.svg",
			language: "bash",
			code: getMcpClaudeCodeInstallCommand(t("select \"appwrite\", then \"Authenticate\""))
		},
		{
			id: "codex",
			name: "Codex",
			iconPath: "/icons/chatgpt.svg",
			language: "bash",
			code: MCP_CODEX_INSTALL_COMMAND
		},
		{
			id: "cursor",
			name: "Cursor",
			iconPath: "/icons/cursor-ai.svg",
			language: "json",
			code: jsonSnippet(MCP_EDITOR_CONFIG_SNIPPET),
			installUrl: getCursorMcpInstallUrl()
		},
		{
			id: "claude-desktop",
			name: "Claude Desktop",
			iconPath: "/icons/claude.svg",
			language: "json",
			code: jsonSnippet(MCP_CLAUDE_DESKTOP_CONFIG_SNIPPET)
		},
		{
			id: "vscode",
			name: "VS Code",
			iconPath: "/icons/vscode.svg",
			language: "json",
			code: jsonSnippet(MCP_EDITOR_CONFIG_SNIPPET),
			installUrl: getVscodeMcpInstallUrl()
		},
		{
			id: "opencode",
			name: "OpenCode",
			iconPath: "/icons/opencode.svg",
			language: "json",
			code: jsonSnippet(MCP_OPENCODE_CONFIG_SNIPPET)
		}
	];
}
function getSelfHostedMcpTools(projectId, endpoint) {
	const editorConfig = jsonSnippet(getSelfHostedMcpEditorConfig(projectId, endpoint));
	return [
		{
			id: "claude-code",
			name: "Claude Code",
			iconPath: "/icons/claude.svg",
			language: "bash",
			code: getSelfHostedClaudeCodeInstallCommand(projectId, endpoint)
		},
		{
			id: "codex",
			name: "Codex",
			iconPath: "/icons/chatgpt.svg",
			language: "toml",
			code: getSelfHostedCodexConfig(projectId, endpoint)
		},
		{
			id: "cursor",
			name: "Cursor",
			iconPath: "/icons/cursor-ai.svg",
			language: "json",
			code: editorConfig
		},
		{
			id: "claude-desktop",
			name: "Claude Desktop",
			iconPath: "/icons/claude.svg",
			language: "json",
			code: editorConfig
		},
		{
			id: "vscode",
			name: "VS Code",
			iconPath: "/icons/vscode.svg",
			language: "json",
			code: editorConfig
		},
		{
			id: "opencode",
			name: "OpenCode",
			iconPath: "/icons/opencode.svg",
			language: "json",
			code: jsonSnippet(getSelfHostedOpencodeConfig(projectId, endpoint))
		}
	];
}
function MCPSection({ projectId, projectName, compact = false }) {
	const t = useT();
	const { isSelfHosted } = useConsoleProfile();
	const { project } = useProject(projectId);
	const [selectedToolId, setSelectedToolId] = useState("claude-code");
	const [copiedPrompt, setCopiedPrompt] = useState(null);
	const endpoint = useMemo(() => getApiEndpoint(project?.region), [project?.region]);
	const tryItPrompts = useMemo(() => getMcpTryItPrompts(projectName), [projectName]);
	const tools = useMemo(() => isSelfHosted ? getSelfHostedMcpTools(projectId, endpoint) : getCloudMcpTools(t), [
		isSelfHosted,
		projectId,
		endpoint,
		t
	]);
	const selectedTool = useMemo(() => tools.find((tool) => tool.id === selectedToolId) ?? tools[0], [tools, selectedToolId]);
	const toolTabs = useMemo(() => tools.map((tool) => ({
		id: tool.id,
		label: tool.name,
		icon: /* @__PURE__ */ jsx("img", {
			src: tool.iconPath,
			alt: "",
			className: `h-3.5 w-3.5 ${PUBLIC_ICON_MUTED_CLASSES}`
		})
	})), [tools]);
	const handleCopyPrompt = (prompt) => {
		navigator.clipboard.writeText(prompt);
		setCopiedPrompt(prompt);
		toast.success(t("Copied to clipboard"));
		setTimeout(() => setCopiedPrompt(null), 2e3);
	};
	const docsLinkClassName = "text-foreground underline hover:no-underline";
	const description = isSelfHosted ? /* @__PURE__ */ jsxs("p", {
		className: `text-[13px] text-muted-foreground${compact ? " mb-4" : ""}`,
		children: [
			t("Run Appwrite MCP locally with uvx and a project API key. Replace YOUR_API_KEY, then see the"),
			" ",
			/* @__PURE__ */ jsx("a", {
				href: MCP_SELF_HOSTED_DOCS_URL,
				target: "_blank",
				rel: "noreferrer",
				className: docsLinkClassName,
				children: t("docs")
			}),
			"."
		]
	}) : /* @__PURE__ */ jsxs("p", {
		className: `text-[13px] text-muted-foreground${compact ? " mb-4" : ""}`,
		children: [
			t("Appwrite offers an MCP server that allows LLMs to interact with Appwrite's API and documentation. Install with a single click or view the"),
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				rel: "noreferrer",
				className: docsLinkClassName,
				href: "/docs/tooling/ai/mcp-servers",
				children: t("docs")
			}),
			" ",
			t("for instructions.")
		]
	});
	const installContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx("h4", {
				className: "text-[13px] font-semibold text-foreground",
				children: t("1. Install")
			}),
			/* @__PURE__ */ jsx(ConnectCodeExample, {
				code: selectedTool.code,
				language: selectedTool.language,
				tabs: toolTabs,
				activeTabId: selectedTool.id,
				onTabChange: (id) => setSelectedToolId(id),
				selectorAriaLabel: t("Select tool")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [selectedTool.installUrl ? /* @__PURE__ */ jsxs(Button, {
					variant: "secondary",
					size: "sm",
					className: "h-9 text-[13px] gap-1.5",
					onClick: () => openMcpInstallUrl(selectedTool.installUrl),
					children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), t("Install")]
				}) : null, /* @__PURE__ */ jsxs(DocsRouteLink, {
					href: MCP_MORE_TOOLS_DOCS_HREF,
					className: "inline-flex items-center gap-1.5 text-[12px] text-muted-foreground hover:text-foreground",
					children: [t("More tools in the docs"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
				})]
			})
		]
	});
	const tryItContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsx("h4", {
				className: "text-[13px] font-semibold text-foreground",
				children: t("2. Try it")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground leading-relaxed",
				children: t("Open your coding agent and ask one of these prompts to confirm Appwrite MCP is working.")
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "space-y-2",
				children: MCP_TRY_IT_PROMPT_TEMPLATES.map((template, index) => {
					const prompt = tryItPrompts[index];
					return /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "min-w-0 flex-1 text-[13px] font-medium text-foreground",
							children: t(template).replaceAll("{projectName}", projectName)
						}), /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-7 gap-1 text-[12px] text-muted-foreground shrink-0",
							onClick: () => handleCopyPrompt(prompt),
							children: [copiedPrompt === prompt ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy")]
						})]
					}, template);
				})
			})
		]
	});
	const mainContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			installContent,
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			tryItContent
		]
	});
	if (compact) return /* @__PURE__ */ jsxs("div", {
		className: "pt-4",
		children: [description, mainContent]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("h3", {
					className: "flex items-center gap-2 text-[15px] font-semibold text-foreground",
					children: [/* @__PURE__ */ jsx(McpIcon, { className: "h-4 w-4" }), t("MCP server")]
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 @container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6 @[600px]:flex-row flex-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "@[600px]:w-64 shrink-0",
						children: description
					}), /* @__PURE__ */ jsx("div", {
						className: "flex-1 min-w-0",
						children: mainContent
					})]
				})
			})
		]
	});
}
export { markOnboardingAgentStepSkipped as i, getOnboardingAgentStepState as n, markOnboardingAgentStepDone as r, MCPSection as t };
