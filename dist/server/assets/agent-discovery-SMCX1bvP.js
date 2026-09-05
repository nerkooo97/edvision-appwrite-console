import { o as MCP_SERVER_NAME, s as MCP_SERVER_URL } from "./mcp-CgjPVMsn.js";
const APPWRITE_MCP_SERVER_CARD_PATH = "/.well-known/mcp/server-card.json";
const APPWRITE_AI_CATALOG_PATH = "/.well-known/ai-catalog.json";
const APPWRITE_AGENT_SKILLS_DISCOVERY_PATH = "/.well-known/agent-skills/index.json";
const APPWRITE_MCP_DOCS_PATH = "/docs/tooling/ai/mcp-servers";
const APPWRITE_AGENT_SKILLS_REPO = "https://github.com/appwrite/skills";
const APPWRITE_AGENT_SKILLS_INSTALL = "npx skills add appwrite/skills";
var SKILLS_RAW_BASE = "https://raw.githubusercontent.com/appwrite/skills/main/skills";
const MCP_SERVER_CARD_SCHEMA = "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json";
const APPWRITE_MCP_SERVER_CARD_NAME = "io.appwrite/mcp";
const MCP_SERVER_CARD_CONTENT_TYPE = "application/mcp-server-card+json; charset=utf-8";
const AI_CATALOG_CONTENT_TYPE = "application/ai-catalog+json; charset=utf-8";
const DISCOVERY_CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET",
	"Access-Control-Allow-Headers": "Content-Type, If-None-Match, Accept",
	"Access-Control-Expose-Headers": "ETag"
};
const APPWRITE_AGENT_SKILLS = [
	{
		name: "appwrite-cli",
		type: "skill-md",
		description: "Appwrite CLI skill. Use when managing Appwrite projects from the command line. Covers installation, login, project initialization, multi-file project configuration, deploying functions/sites/tables/buckets/teams/webhooks/topics, flag-based list queries, non-interactive CI/CD mode, and generating type-safe SDKs.",
		url: `${SKILLS_RAW_BASE}/appwrite-cli/SKILL.md`
	},
	{
		name: "appwrite-dart",
		type: "skill-md",
		description: "Appwrite Dart SDK skill. Use when building Flutter apps (mobile, web, desktop) or server-side Dart applications with Appwrite. Covers client-side auth (email, OAuth), database queries, file uploads with native file handling, real-time subscriptions, and server-side admin via API keys for user management, database administration, storage, and functions.",
		url: `${SKILLS_RAW_BASE}/appwrite-dart/SKILL.md`
	},
	{
		name: "appwrite-dotnet",
		type: "skill-md",
		description: "Appwrite .NET SDK skill. Use when building server-side C# or .NET applications with Appwrite, including ASP.NET and Blazor integrations. Covers user management, database/table CRUD, file storage, and functions via API keys.",
		url: `${SKILLS_RAW_BASE}/appwrite-dotnet/SKILL.md`
	},
	{
		name: "appwrite-go",
		type: "skill-md",
		description: "Appwrite Go SDK skill. Use when building server-side Go applications with Appwrite. Covers user management, database/table CRUD, file storage, and functions via API keys. Uses per-service packages and functional options pattern.",
		url: `${SKILLS_RAW_BASE}/appwrite-go/SKILL.md`
	},
	{
		name: "appwrite-kotlin",
		type: "skill-md",
		description: "Appwrite Kotlin SDK skill. Use when building native Android apps or server-side Kotlin/JVM backends with Appwrite. Covers client-side auth (email, OAuth with Activity integration), database queries, file uploads, real-time subscriptions with coroutine support, and server-side admin via API keys for user management, database administration, storage, and functions.",
		url: `${SKILLS_RAW_BASE}/appwrite-kotlin/SKILL.md`
	},
	{
		name: "appwrite-php",
		type: "skill-md",
		description: "Appwrite PHP SDK skill. Use when building server-side PHP applications with Appwrite, including Laravel and Symfony integrations. Covers user management, database/table CRUD, file storage, and functions via API keys.",
		url: `${SKILLS_RAW_BASE}/appwrite-php/SKILL.md`
	},
	{
		name: "appwrite-python",
		type: "skill-md",
		description: "Appwrite Python SDK skill. Use when building server-side Python applications with Appwrite, including Django, Flask, and FastAPI integrations. Covers user management, database/table CRUD, file storage, and functions via API keys.",
		url: `${SKILLS_RAW_BASE}/appwrite-python/SKILL.md`
	},
	{
		name: "appwrite-ruby",
		type: "skill-md",
		description: "Appwrite Ruby SDK skill. Use when building server-side Ruby applications with Appwrite, including Rails and Sinatra integrations. Covers user management, database/table CRUD, file storage, and functions via API keys.",
		url: `${SKILLS_RAW_BASE}/appwrite-ruby/SKILL.md`
	},
	{
		name: "appwrite-rust",
		type: "skill-md",
		description: "Appwrite Rust SDK skill. Use when building server-side Rust applications with Appwrite. Covers async client setup with API keys, user management, TablesDB database/table/row operations, file storage, function executions, permissions, queries, and error handling. Uses the crates.io `appwrite` package and Tokio.",
		url: `${SKILLS_RAW_BASE}/appwrite-rust/SKILL.md`
	},
	{
		name: "appwrite-swift",
		type: "skill-md",
		description: "Appwrite Swift SDK skill. Use when building native iOS, macOS, watchOS, or tvOS apps, or server-side Swift applications with Appwrite. Covers client-side auth (email, OAuth), database queries, file uploads, real-time subscriptions with async/await, and server-side admin via API keys for user management, database administration, storage, and functions.",
		url: `${SKILLS_RAW_BASE}/appwrite-swift/SKILL.md`
	},
	{
		name: "appwrite-typescript",
		type: "skill-md",
		description: "Appwrite TypeScript SDK skill. Use when building browser-based JavaScript/TypeScript apps, React Native mobile apps, or server-side Node.js/Deno backends with Appwrite. Covers client-side auth (email, OAuth, anonymous), database queries, file uploads, real-time subscriptions, and server-side admin via API keys for user management, database administration, storage, and functions.",
		url: `${SKILLS_RAW_BASE}/appwrite-typescript/SKILL.md`
	}
];
function buildMcpServerCard(origin = "https://appwrite.io") {
	return {
		$schema: MCP_SERVER_CARD_SCHEMA,
		name: APPWRITE_MCP_SERVER_CARD_NAME,
		title: "Appwrite",
		description: "Backend API for auth, databases, storage, functions, messaging, and hosting.",
		version: "1.0.0",
		websiteUrl: `${origin}${APPWRITE_MCP_DOCS_PATH}`,
		repository: {
			url: "https://github.com/appwrite/mcp",
			source: "github"
		},
		remotes: [{
			type: "streamable-http",
			url: MCP_SERVER_URL,
			headers: [{
				name: "Authorization",
				description: "OAuth 2.0 access token or Appwrite API key as a Bearer token.",
				isRequired: true,
				isSecret: true,
				value: "Bearer {token}",
				variables: { token: {
					description: "OAuth access token from the Appwrite authorization server, or a project API key.",
					isRequired: true,
					isSecret: true
				} }
			}]
		}],
		_meta: { "io.appwrite/mcp": {
			serverName: MCP_SERVER_NAME,
			documentationMarkdown: `${origin}${APPWRITE_MCP_DOCS_PATH}.md`
		} }
	};
}
function buildAiCatalogDocument(origin = "https://appwrite.io") {
	return {
		specVersion: "1.0",
		entries: [{
			identifier: "urn:air:appwrite.io:mcp:appwrite",
			type: "application/mcp-server-card+json",
			url: `${origin}${APPWRITE_MCP_SERVER_CARD_PATH}`
		}]
	};
}
function buildAgentSkillsDiscoveryDocument() {
	return {
		$schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
		skills: APPWRITE_AGENT_SKILLS
	};
}
function serializeDiscoveryJson(value) {
	return `${JSON.stringify(value, null, 2)}\n`;
}
function discoveryJsonResponse(body, contentType) {
	return new Response(body, { headers: {
		"Content-Type": contentType,
		"Cache-Control": "public, max-age=3600",
		...DISCOVERY_CORS_HEADERS
	} });
}
export { APPWRITE_AGENT_SKILLS_REPO as a, APPWRITE_MCP_SERVER_CARD_PATH as c, buildAiCatalogDocument as d, buildMcpServerCard as f, APPWRITE_AGENT_SKILLS_INSTALL as i, MCP_SERVER_CARD_CONTENT_TYPE as l, serializeDiscoveryJson as m, APPWRITE_AGENT_SKILLS as n, APPWRITE_AI_CATALOG_PATH as o, discoveryJsonResponse as p, APPWRITE_AGENT_SKILLS_DISCOVERY_PATH as r, APPWRITE_MCP_DOCS_PATH as s, AI_CATALOG_CONTENT_TYPE as t, buildAgentSkillsDiscoveryDocument as u };
