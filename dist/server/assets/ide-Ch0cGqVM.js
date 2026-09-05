const IDE_CONFIGS = [
	{
		id: "claude",
		name: "Claude",
		iconPath: "/icons/claude.svg",
		supportsAIChat: true,
		aiChatDeeplink: "https://claude.ai/new?q={prompt}"
	},
	{
		id: "codex",
		name: "Codex",
		iconPath: "/icons/chatgpt.svg",
		supportsAIChat: true,
		aiChatDeeplink: "codex://threads/new",
		pluginDocsUrl: "/docs/tooling/ai/agents/codex"
	},
	{
		id: "cursor",
		name: "Cursor",
		iconPath: "/icons/cursor-ai.svg",
		supportsAIChat: true,
		aiChatDeeplink: "cursor://anysphere.cursor-deeplink/prompt?text={prompt}",
		pluginDocsUrl: "/docs/tooling/ai/ai-dev-tools/cursor",
		mcpDocsUrl: "/docs/tooling/mcp/cursor"
	},
	{
		id: "windsurf",
		name: "Windsurf",
		iconPath: "/icons/windsurf.svg",
		supportsAIChat: true,
		aiChatDeeplink: "windsurf://new-chat?prompt={prompt}",
		mcpDocsUrl: "/docs/tooling/mcp/windsurf"
	},
	{
		id: "vscode",
		name: "VS Code",
		iconPath: "/icons/vscode.svg",
		supportsAIChat: true,
		aiChatDeeplink: "vscode://GitHub.copilot-chat/chat?prompt={prompt}",
		mcpDocsUrl: "/docs/tooling/mcp/vscode"
	},
	{
		id: "claude-code",
		name: "Claude Code",
		iconPath: "/icons/claude.svg",
		supportsAIChat: false,
		pluginDocsUrl: "/docs/tooling/ai/ai-dev-tools/claude-code",
		mcpDocsUrl: "/docs/tooling/mcp/claude"
	},
	{
		id: "google-antigravity",
		name: "Antigravity",
		iconPath: "/icons/google-antigravity.svg",
		supportsAIChat: false,
		mcpDocsUrl: "/docs/tooling/mcp/antigravity"
	},
	{
		id: "opencode",
		name: "OpenCode",
		iconPath: "/icons/opencode.svg",
		supportsAIChat: false,
		mcpDocsUrl: "/docs/tooling/mcp/opencode"
	}
];
function getAIChatIDEs() {
	return IDE_CONFIGS.filter((ide) => ide.supportsAIChat && ide.aiChatDeeplink);
}
function getMCPIDEs() {
	return IDE_CONFIGS.filter((ide) => ide.mcpDocsUrl);
}
const OFFICIAL_PLUGIN_IDS = [
	"cursor",
	"claude-code",
	"codex"
];
function getOfficialPlugins() {
	return OFFICIAL_PLUGIN_IDS.map((id) => {
		const ide = getIDEById(id);
		if (!ide?.pluginDocsUrl) throw new Error(`Missing plugin docs for IDE: ${id}`);
		return {
			id: ide.id,
			name: ide.name,
			iconPath: ide.iconPath,
			docsUrl: ide.pluginDocsUrl
		};
	});
}
function getMcpIntegrations() {
	const officialIds = new Set(OFFICIAL_PLUGIN_IDS);
	return getMCPIDEs().filter((ide) => !officialIds.has(ide.id));
}
function getIDEById(id) {
	return IDE_CONFIGS.find((ide) => ide.id === id);
}
function generateCodexNewThreadDeeplink(prompt, options) {
	const params = new URLSearchParams();
	const trimmedPrompt = prompt.trim();
	if (trimmedPrompt) params.set("prompt", trimmedPrompt);
	if (options?.workspacePath?.trim()) params.set("path", options.workspacePath.trim());
	if (options?.originUrl?.trim()) params.set("originUrl", options.originUrl.trim());
	const query = params.toString();
	return query ? `codex://threads/new?${query}` : "codex://threads/new";
}
function generateAIChatDeeplink(ide, prompt, codexOptions) {
	if (!ide.supportsAIChat) return null;
	if (ide.id === "codex") return generateCodexNewThreadDeeplink(prompt, codexOptions);
	if (!ide.aiChatDeeplink?.includes("{prompt}")) return null;
	return ide.aiChatDeeplink.replace("{prompt}", encodeURIComponent(prompt));
}
function openAIChatDeeplink(deeplink) {
	if (/^[a-z][a-z0-9+.-]*:/i.test(deeplink) && !/^https?:/i.test(deeplink)) {
		window.location.assign(deeplink);
		return;
	}
	window.open(deeplink, "_blank", "noopener,noreferrer");
}
export { openAIChatDeeplink as a, getOfficialPlugins as i, getAIChatIDEs as n, getMcpIntegrations as r, generateAIChatDeeplink as t };
