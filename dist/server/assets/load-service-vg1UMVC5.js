import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { a as SERVICE_LABELS, d as isReferenceService, f as isReferenceVersion, l as getSpecMode, p as resolveSpecVersionDirs, u as isReferencePlatform } from "./constants-Dd6QzW31.js";
import "./console-profiles-D__E5Kgi.js";
import { d as getServiceLabel, p as isConsoleOnlyDatabaseApiService, s as parseOpenApiSpec } from "./parse-spec-DW3UGcrS.js";
import { r as resolveResponseModels, t as buildInlineResponseModel } from "./parse-model-wUlH8B1Q.js";
import { i as getSpecsPackageRoot, n as loadReferenceOpenApiSpec, t as loadReferenceConsoleSpec } from "./load-spec-ga300HYB.js";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
function getServiceDescriptionFromSpec(spec, serviceId) {
	return (spec.tags?.find((entry) => entry.name?.toLowerCase() === serviceId.toLowerCase()))?.description?.trim() ?? "";
}
var exampleContentCache = /* @__PURE__ */ new Map();
function stripMarkdownCodeFence(content) {
	const trimmed = content.trim();
	const withNewlineBeforeClose = trimmed.match(/^```[^\n]*\n([\s\S]*?)\n```[ \t]*$/);
	if (withNewlineBeforeClose) return withNewlineBeforeClose[1].trimEnd();
	const closingFenceOnLastLine = trimmed.match(/^```[^\n]*\n([\s\S]*?)```[ \t]*$/);
	if (closingFenceOnLastLine) return closingFenceOnLastLine[1].trimEnd();
	if (trimmed.startsWith("```")) {
		const withoutClose = trimmed.replace(/^```[^\n]*\n?/, "").replace(/\n?```[ \t]*$/, "");
		if (withoutClose !== trimmed) return withoutClose.trimEnd();
	}
	return content;
}
function getExamplePath(version, platform, demo) {
	const { examplesDir } = resolveSpecVersionDirs(version);
	const isAndroidJava = platform === "client-android-java" || platform === "server-java";
	const isAndroid = isAndroidJava || platform === "client-android-kotlin" || platform === "server-kotlin";
	const isAndroidServer = platform === "server-java" || platform === "server-kotlin";
	if (isAndroid) return `examples/${examplesDir}/${isAndroidServer ? "server-kotlin" : "client-android"}/${isAndroidJava ? "java" : "kotlin"}/${demo}`;
	return `examples/${examplesDir}/${platform}/examples/${demo}`;
}
async function loadMethodDemo(version, platform, demoPath) {
	if (!demoPath) return void 0;
	const relativePath = getExamplePath(version, platform, demoPath);
	const cached = exampleContentCache.get(relativePath);
	if (cached !== void 0) return cached;
	const filePath = join(getSpecsPackageRoot(), relativePath);
	try {
		const content = stripMarkdownCodeFence(await readFile(filePath, "utf-8"));
		exampleContentCache.set(relativePath, content);
		return content;
	} catch {
		exampleContentCache.set(relativePath, void 0);
		return;
	}
}
async function loadMethodDemos(version, platform, methods) {
	const demos = /* @__PURE__ */ new Map();
	await Promise.all(methods.map(async (method) => {
		const demo = await loadMethodDemo(version, platform, method.xAppwrite?.demo);
		if (demo) demos.set(method.id, demo);
	}));
	return demos;
}
function getRawOperationForMethod(spec, method) {
	const pathItem = spec.paths?.[method.path];
	if (!pathItem) return void 0;
	return pathItem[method.httpMethod];
}
function collectMethodResponses(operation, platformSpec, consoleSpec, version) {
	if (!operation?.responses) return [];
	return Object.entries(operation.responses).map(([code, response]) => {
		const responseObj = response;
		const content = responseObj.content?.["application/json"];
		const models = (Number(code) === 204 ? [] : resolveResponseModels(content?.schema, platformSpec)).map((model) => buildInlineResponseModel(model.id, model.name, consoleSpec, version));
		return {
			code: Number(code),
			contentType: responseObj.content ? Object.keys(responseObj.content)[0] : void 0,
			models
		};
	}).sort((a, b) => a.code - b.code);
}
async function loadApiReferenceService(version, platform, serviceId) {
	if (!isReferenceVersion(version) || !isReferencePlatform(platform) || !isReferenceService(serviceId)) return null;
	const [spec, consoleSpec] = await Promise.all([loadReferenceOpenApiSpec(version, platform), loadReferenceConsoleSpec(version)]);
	const mode = getSpecMode(platform);
	const useConsoleService = isConsoleOnlyDatabaseApiService(serviceId);
	const serviceSpec = useConsoleService ? consoleSpec : spec;
	const service = parseOpenApiSpec(serviceSpec, useConsoleService ? "console" : mode).services.find((item) => item.id === serviceId);
	if (!service) return {
		id: serviceId,
		label: SERVICE_LABELS[serviceId] ?? getServiceLabel(serviceId),
		description: getServiceDescriptionFromSpec(serviceSpec, serviceId),
		methods: []
	};
	const demos = await loadMethodDemos(version, platform, service.methods);
	const methods = service.methods.map((method) => {
		const rawOperation = getRawOperationForMethod(serviceSpec, method);
		return {
			...method,
			demo: demos.get(method.id),
			responses: collectMethodResponses(rawOperation, serviceSpec, consoleSpec, version)
		};
	});
	return {
		id: serviceId,
		label: SERVICE_LABELS[serviceId] ?? service.label,
		description: service.description ?? "",
		methods
	};
}
export { loadApiReferenceService };
