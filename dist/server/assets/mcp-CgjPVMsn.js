const MCP_SERVER_NAME = "appwrite";
const MCP_SERVER_URL = "https://mcp.appwrite.io";
const MCP_API_KEY_PLACEHOLDER = "YOUR_API_KEY";
const MCP_SELF_HOSTED_DOCS_URL = "https://github.com/appwrite/mcp/blob/main/docs/self-hosted.md";
const MCP_SERVER_CONFIG = { url: MCP_SERVER_URL };
const MCP_EDITOR_CONFIG_SNIPPET = { mcpServers: { [MCP_SERVER_NAME]: MCP_SERVER_CONFIG } };
const MCP_CLAUDE_DESKTOP_CONFIG_SNIPPET = { mcpServers: { [MCP_SERVER_NAME]: {
	command: "npx",
	args: ["mcp-remote", MCP_SERVER_URL]
} } };
const MCP_OPENCODE_CONFIG_SNIPPET = {
	$schema: "https://opencode.ai/config.json",
	mcp: { [MCP_SERVER_NAME]: {
		type: "remote",
		enabled: true,
		url: MCP_SERVER_URL
	} }
};
function getMcpClaudeCodeInstallCommand(authenticateComment) {
	return `claude mcp add ${MCP_SERVER_NAME} --transport http ${MCP_SERVER_URL}
claude "/mcp" # ${authenticateComment}`;
}
const MCP_CODEX_INSTALL_COMMAND = `codex mcp add ${MCP_SERVER_NAME} --url ${MCP_SERVER_URL}`;
function getSelfHostedMcpEnv(projectId, endpoint) {
	return {
		APPWRITE_PROJECT_ID: projectId,
		APPWRITE_API_KEY: MCP_API_KEY_PLACEHOLDER,
		APPWRITE_ENDPOINT: endpoint
	};
}
function getSelfHostedUvxServer(projectId, endpoint) {
	return {
		command: "uvx",
		args: ["mcp-server-appwrite"],
		env: getSelfHostedMcpEnv(projectId, endpoint)
	};
}
function getSelfHostedMcpEditorConfig(projectId, endpoint) {
	return { mcpServers: { [MCP_SERVER_NAME]: getSelfHostedUvxServer(projectId, endpoint) } };
}
function getSelfHostedOpencodeConfig(projectId, endpoint) {
	const env = getSelfHostedMcpEnv(projectId, endpoint);
	return {
		$schema: "https://opencode.ai/config.json",
		mcp: { [MCP_SERVER_NAME]: {
			type: "local",
			command: ["uvx", "mcp-server-appwrite"],
			enabled: true,
			environment: env
		} }
	};
}
function getSelfHostedClaudeCodeInstallCommand(projectId, endpoint) {
	return `claude mcp add ${MCP_SERVER_NAME} \\
  --env APPWRITE_PROJECT_ID=${projectId} \\
  --env APPWRITE_API_KEY=${MCP_API_KEY_PLACEHOLDER} \\
  --env APPWRITE_ENDPOINT=${endpoint} \\
  -- uvx mcp-server-appwrite`;
}
function getSelfHostedCodexConfig(projectId, endpoint) {
	return `[mcp_servers.${MCP_SERVER_NAME}]
command = "uvx"
args = ["mcp-server-appwrite"]

[mcp_servers.${MCP_SERVER_NAME}.env]
APPWRITE_PROJECT_ID = "${projectId}"
APPWRITE_API_KEY = "${MCP_API_KEY_PLACEHOLDER}"
APPWRITE_ENDPOINT = "${endpoint}"`;
}
function toBase64(value) {
	return globalThis.btoa(value);
}
function getCursorMcpInstallUrl(name = MCP_SERVER_NAME, config = MCP_SERVER_CONFIG) {
	const encodedConfig = encodeURIComponent(toBase64(JSON.stringify(config)));
	return `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(name)}&config=${encodedConfig}`;
}
function getVscodeMcpInstallUrl(name = MCP_SERVER_NAME, config = MCP_SERVER_CONFIG) {
	const payload = JSON.stringify({
		name,
		type: "http",
		...config
	});
	return `vscode:mcp/install?${encodeURIComponent(payload)}`;
}
function openMcpInstallUrl(url) {
	if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !/^https?:/i.test(url)) {
		window.location.assign(url);
		return;
	}
	window.open(url, "_blank", "noopener,noreferrer");
}
export { MCP_SELF_HOSTED_DOCS_URL as a, getCursorMcpInstallUrl as c, getSelfHostedCodexConfig as d, getSelfHostedMcpEditorConfig as f, openMcpInstallUrl as h, MCP_OPENCODE_CONFIG_SNIPPET as i, getMcpClaudeCodeInstallCommand as l, getVscodeMcpInstallUrl as m, MCP_CODEX_INSTALL_COMMAND as n, MCP_SERVER_NAME as o, getSelfHostedOpencodeConfig as p, MCP_EDITOR_CONFIG_SNIPPET as r, MCP_SERVER_URL as s, MCP_CLAUDE_DESKTOP_CONFIG_SNIPPET as t, getSelfHostedClaudeCodeInstallCommand as u };
