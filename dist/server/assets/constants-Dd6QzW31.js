const NUMBERED_REFERENCE_VERSIONS = [
	"1.9.x",
	"1.8.x",
	"1.7.x",
	"1.6.x",
	"1.5.x",
	"1.4.x",
	"1.3.x",
	"1.2.x",
	"1.1.x",
	"1.0.x",
	"0.15.x",
	"0.14.x",
	"0.13.x",
	"0.12.x",
	"0.11.x",
	"0.10.x",
	"0.9.x",
	"0.8.x",
	"0.7.x",
	"0.6.x"
];
const LATEST_EXAMPLES_VERSION = NUMBERED_REFERENCE_VERSIONS[0] ?? "1.9.x";
const REFERENCE_VERSIONS = ["cloud", ...NUMBERED_REFERENCE_VERSIONS];
var referenceVersionSet = new Set(REFERENCE_VERSIONS);
function isDiscoveredReferenceVersion(value) {
	return referenceVersionSet.has(value);
}
const REFERENCE_PLATFORMS = [
	"client-web",
	"client-flutter",
	"client-react-native",
	"client-apple",
	"client-android-kotlin",
	"client-android-java",
	"client-graphql",
	"client-rest",
	"server-nodejs",
	"server-python",
	"server-dart",
	"server-php",
	"server-ruby",
	"server-dotnet",
	"server-deno",
	"server-go",
	"server-swift",
	"server-kotlin",
	"server-rust",
	"server-java",
	"server-graphql",
	"server-rest"
];
const REFERENCE_SERVICES = [
	"account",
	"avatars",
	"databases",
	"tablesDB",
	"documentsDB",
	"vectorsDB",
	"postgresql",
	"mysql",
	"mongo",
	"functions",
	"messaging",
	"health",
	"locale",
	"presences",
	"storage",
	"teams",
	"users",
	"sites",
	"tokens",
	"project"
];
const SERVICE_LABELS = {
	account: "Account",
	avatars: "Avatars",
	databases: "Databases",
	tablesDB: "TablesDB",
	documentsDB: "DocumentsDB",
	vectorsDB: "VectorsDB",
	postgresql: "PostgreSQL",
	mysql: "MySQL",
	mongo: "MongoDB",
	functions: "Functions",
	messaging: "Messaging",
	health: "Health",
	locale: "Localization",
	presences: "Presences",
	storage: "Storage",
	teams: "Teams",
	users: "Users",
	sites: "Sites",
	tokens: "Tokens",
	project: "Project"
};
const PLATFORM_LABELS = {
	"client-web": "Web",
	"client-flutter": "Flutter",
	"client-react-native": "React Native",
	"client-apple": "Apple",
	"client-android-kotlin": "Android (Kotlin)",
	"client-android-java": "Android (Java)",
	"client-graphql": "GraphQL",
	"client-rest": "REST",
	"server-nodejs": "Node.js",
	"server-python": "Python",
	"server-dart": "Dart",
	"server-php": "PHP",
	"server-ruby": "Ruby",
	"server-dotnet": ".NET",
	"server-deno": "Deno",
	"server-go": "Go",
	"server-swift": "Swift",
	"server-kotlin": "Kotlin",
	"server-rust": "Rust",
	"server-java": "Java",
	"server-graphql": "GraphQL",
	"server-rest": "REST"
};
const PLATFORM_CODE_LANGUAGES = {
	"client-web": "javascript",
	"client-flutter": "dart",
	"client-react-native": "javascript",
	"client-apple": "swift",
	"client-android-kotlin": "kotlin",
	"client-android-java": "java",
	"client-graphql": "graphql",
	"client-rest": "http",
	"server-nodejs": "javascript",
	"server-python": "python",
	"server-dart": "dart",
	"server-php": "php",
	"server-ruby": "ruby",
	"server-dotnet": "csharp",
	"server-deno": "javascript",
	"server-go": "go",
	"server-swift": "swift",
	"server-kotlin": "kotlin",
	"server-rust": "rust",
	"server-java": "java",
	"server-graphql": "graphql",
	"server-rest": "http"
};
function isReferenceVersion(value) {
	return isDiscoveredReferenceVersion(value);
}
function isReferencePlatform(value) {
	return REFERENCE_PLATFORMS.includes(value);
}
function isReferenceService(value) {
	return REFERENCE_SERVICES.includes(value);
}
function getSpecMode(platform) {
	if (platform.startsWith("client-")) return "client";
	if (platform.startsWith("server-")) return "server";
	return "console";
}
function getDefaultReferencePlatform(mode) {
	return mode === "client" ? "client-web" : "server-nodejs";
}
function resolveSpecVersionDirs(version) {
	if (version === "cloud") return {
		specDir: LATEST_EXAMPLES_VERSION,
		examplesDir: LATEST_EXAMPLES_VERSION
	};
	return {
		specDir: version,
		examplesDir: version
	};
}
function getSpecFilename(specDir, mode) {
	if (specDir === "latest") return `open-api3-latest-${mode}.json`;
	return `open-api3-${specDir}-${mode}.json`;
}
function getReferenceOpenApiSpecDownloadFilename(version, mode) {
	const { specDir } = resolveSpecVersionDirs(version);
	return getSpecFilename(specDir, mode);
}
export { SERVICE_LABELS as a, getSpecFilename as c, isReferenceService as d, isReferenceVersion as f, REFERENCE_VERSIONS as h, REFERENCE_SERVICES as i, getSpecMode as l, LATEST_EXAMPLES_VERSION as m, PLATFORM_LABELS as n, getDefaultReferencePlatform as o, resolveSpecVersionDirs as p, REFERENCE_PLATFORMS as r, getReferenceOpenApiSpecDownloadFilename as s, PLATFORM_CODE_LANGUAGES as t, isReferencePlatform as u };
