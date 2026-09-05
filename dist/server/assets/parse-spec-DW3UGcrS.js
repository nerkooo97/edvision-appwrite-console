import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
const API_SERVICE_ORDER = [
	"account",
	"users",
	"teams",
	"databases",
	"tablesDB",
	"sites",
	"storage",
	"functions",
	"messaging",
	"tokens",
	"locale",
	"avatars",
	"presences",
	"project",
	"health",
	"graphql",
	"proxy",
	"migrations",
	"vcs",
	"console",
	"backups",
	"usage",
	"webhooks",
	"organization",
	"activities",
	"advisor",
	"documentsDB",
	"vectorsDB",
	"postgresql",
	"mysql",
	"mongo"
];
const INTERNAL_API_SERVICES = [];
const CONSOLE_ONLY_DATABASE_API_SERVICES = [
	"postgresql",
	"mysql",
	"mongo"
];
const FEATURE_GATED_DATABASE_API_SERVICES = [
	"documentsDB",
	"vectorsDB",
	...CONSOLE_ONLY_DATABASE_API_SERVICES
];
const API_EXPLORER_PRODUCT_GROUPS = [
	{
		id: "auth",
		label: "Auth",
		services: [
			"account",
			"users",
			"teams",
			"presences"
		]
	},
	{
		id: "databases",
		label: "Databases",
		services: [
			"tablesDB",
			"documentsDB",
			"vectorsDB",
			"postgresql",
			"mysql",
			"mongo"
		]
	},
	{
		id: "sites",
		label: "Sites",
		services: ["sites"]
	},
	{
		id: "storage",
		label: "Storage",
		services: ["storage", "tokens"]
	},
	{
		id: "functions",
		label: "Functions",
		services: ["functions"]
	},
	{
		id: "messaging",
		label: "Messaging",
		services: ["messaging"]
	},
	{
		id: "platform",
		label: "Platform",
		services: [
			"project",
			"webhooks",
			"proxy"
		]
	},
	{
		id: "utilities",
		label: "Utilities",
		services: ["locale", "avatars"]
	}
];
const PROJECT_API_EXPLORER_BASE_ALLOWED_SERVICES = [
	"account",
	"users",
	"teams",
	"tokens",
	"tablesDB",
	"storage",
	"functions",
	"messaging",
	"sites",
	"avatars",
	"locale",
	"project",
	"webhooks",
	"proxy",
	"presences"
];
function getFeatureGatedDatabaseApiServices(features = getActiveProfileFeatures()) {
	const services = [];
	if (features.dedicatedDbsDocumentsDB) services.push("documentsDB");
	if (features.dedicatedDbsVectorsDB) services.push("vectorsDB");
	if (features.nativeDbsPostgres) services.push("postgresql");
	if (features.nativeDbsMySQL) services.push("mysql");
	if (features.nativeDbsMongo) services.push("mongo");
	return services;
}
function isInternalApiService(serviceId) {
	return INTERNAL_API_SERVICES.includes(serviceId);
}
function isFeatureGatedDatabaseApiService(serviceId) {
	return FEATURE_GATED_DATABASE_API_SERVICES.includes(serviceId);
}
function isConsoleOnlyDatabaseApiService(serviceId) {
	return CONSOLE_ONLY_DATABASE_API_SERVICES.includes(serviceId);
}
function isDatabaseApiServiceVisible(serviceId, features = getActiveProfileFeatures()) {
	if (isInternalApiService(serviceId)) return false;
	if (!isFeatureGatedDatabaseApiService(serviceId)) return true;
	return getFeatureGatedDatabaseApiServices(features).includes(serviceId);
}
function getProjectApiExplorerAllowedServices(features = getActiveProfileFeatures()) {
	return [...PROJECT_API_EXPLORER_BASE_ALLOWED_SERVICES, ...getFeatureGatedDatabaseApiServices(features)];
}
const API_SERVICE_LABELS = {
	account: "Account",
	avatars: "Avatars",
	databases: "Databases",
	tablesDB: "TablesDB",
	functions: "Functions",
	messaging: "Messaging",
	health: "Health",
	locale: "Locale",
	presences: "Presences",
	storage: "Storage",
	teams: "Teams",
	users: "Users",
	sites: "Sites",
	tokens: "Tokens",
	project: "Project",
	graphql: "GraphQL",
	proxy: "Proxy",
	migrations: "Migrations",
	vcs: "VCS",
	console: "Console",
	backups: "Backups",
	usage: "Usage",
	webhooks: "Webhooks",
	organization: "Organization",
	activities: "Activities",
	advisor: "Advisor",
	documentsDB: "DocumentsDB",
	vectorsDB: "VectorsDB",
	postgresql: "PostgreSQL",
	mysql: "MySQL",
	mongo: "MongoDB"
};
function filterAllowedServices(services, allowedServices) {
	const allowed = new Set(allowedServices ?? getProjectApiExplorerAllowedServices());
	return services.filter((service) => allowed.has(service.id) && !isInternalApiService(service.id));
}
function groupServicesByProduct(services, productGroups = API_EXPLORER_PRODUCT_GROUPS) {
	const serviceById = new Map(services.map((service) => [service.id, service]));
	const assigned = /* @__PURE__ */ new Set();
	const groups = [];
	for (const group of productGroups) {
		const groupServices = group.services.map((serviceId) => serviceById.get(serviceId)).filter((service) => Boolean(service));
		for (const service of groupServices) assigned.add(service.id);
		if (groupServices.length > 0) groups.push({
			id: group.id,
			label: group.label,
			services: groupServices
		});
	}
	const ungrouped = services.filter((service) => !assigned.has(service.id)).sort((a, b) => compareServices(a.id, b.id));
	if (ungrouped.length > 0) groups.push({
		id: "other",
		label: "Other",
		services: ungrouped
	});
	return groups;
}
function getServiceLabel(serviceId) {
	const knownLabel = API_SERVICE_LABELS[serviceId];
	if (knownLabel) return knownLabel;
	const caseInsensitiveKey = Object.keys(API_SERVICE_LABELS).find((key) => key.toLowerCase() === serviceId.toLowerCase());
	if (caseInsensitiveKey) return API_SERVICE_LABELS[caseInsensitiveKey];
	return serviceId.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[-_]/g, " ").split(" ").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function compareServices(a, b) {
	const aIndex = API_SERVICE_ORDER.indexOf(a);
	const bIndex = API_SERVICE_ORDER.indexOf(b);
	if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
	if (aIndex !== -1) return -1;
	if (bIndex !== -1) return 1;
	return a.localeCompare(b, void 0, { sensitivity: "base" });
}
var REFERENCE_HTTP_METHODS = [
	"get",
	"post",
	"put",
	"patch",
	"delete"
];
function formatAuthLabel(xAppwrite, security) {
	const auth = xAppwrite?.auth;
	if (auth && Object.keys(auth).length > 0) return Object.keys(auth).join(", ");
	if (security?.length) {
		const keys = /* @__PURE__ */ new Set();
		for (const entry of security) for (const key of Object.keys(entry)) keys.add(key);
		if (keys.size > 0) return Array.from(keys).join(", ");
	}
	return "Project";
}
function isPlatformSupported(xAppwrite, platform) {
	const platforms = xAppwrite?.platforms;
	if (!platforms?.length) return true;
	return platforms.includes(platform);
}
function resolveSchema(schema, components) {
	if (!schema?.$ref || !components?.schemas) return schema;
	const name = schema.$ref.replace("#/components/schemas/", "");
	return components.schemas[name] ?? schema;
}
function filterRequestBodyProperties(requestBody, allowedParameters, components) {
	if (!requestBody?.content) return requestBody;
	const jsonContent = requestBody.content["application/json"];
	if (!jsonContent?.schema) return requestBody;
	const schema = resolveSchema(jsonContent.schema, components);
	if (!schema?.properties) return requestBody;
	const filteredProperties = {};
	for (const [propertyName, propertySchema] of Object.entries(schema.properties)) if (allowedParameters.includes(propertyName)) filteredProperties[propertyName] = propertySchema;
	return {
		...requestBody,
		content: {
			...requestBody.content,
			"application/json": {
				...jsonContent,
				schema: {
					...schema,
					properties: filteredProperties,
					required: schema.required?.filter((prop) => allowedParameters.includes(prop))
				}
			}
		}
	};
}
function hasAdditionalMethods(operation, service) {
	const xAppwrite = operation?.["x-appwrite"];
	return Boolean(operation?.tags?.includes(service) && xAppwrite && Array.isArray(xAppwrite.methods) && xAppwrite.methods.length > 0);
}
function* processAdditionalMethods(operation, httpMethod, path, service, components) {
	const xAppwrite = operation["x-appwrite"];
	for (const additionalMethod of xAppwrite.methods ?? []) {
		if (additionalMethod.public === false) continue;
		const responseCode = additionalMethod.responses?.[0]?.code;
		const responseModel = additionalMethod.responses?.[0]?.model;
		yield {
			path,
			httpMethod,
			service,
			operation: {
				...operation,
				summary: additionalMethod.desc && additionalMethod.desc.length > 0 ? additionalMethod.desc : operation.summary,
				description: additionalMethod.description ?? operation.description,
				requestBody: filterRequestBodyProperties(operation.requestBody, additionalMethod.parameters ?? [], components),
				"x-appwrite": {
					...xAppwrite,
					method: additionalMethod.name,
					demo: additionalMethod.demo ?? xAppwrite.demo,
					public: additionalMethod.public ?? true,
					weight: additionalMethod.weight ?? xAppwrite.weight
				},
				responses: responseCode !== void 0 ? {
					...operation.responses,
					[String(responseCode)]: responseCode === 204 ? { description: "No Content" } : { content: { "application/json": { schema: responseModel ? { $ref: responseModel } : void 0 } } }
				} : operation.responses
			}
		};
	}
}
function* iterateOperations(spec, platform) {
	for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
		if (!pathItem) continue;
		for (const httpMethod of REFERENCE_HTTP_METHODS) {
			const operation = pathItem[httpMethod];
			if (!operation) continue;
			const xAppwrite = operation["x-appwrite"];
			if (!isPlatformSupported(xAppwrite, platform)) continue;
			if (xAppwrite?.public === false) continue;
			const service = operation.tags?.[0];
			if (!service) continue;
			if (hasAdditionalMethods(operation, service)) continue;
			yield {
				path,
				httpMethod,
				operation,
				service
			};
		}
		for (const httpMethod of REFERENCE_HTTP_METHODS) {
			const operation = pathItem[httpMethod];
			if (!operation) continue;
			const xAppwrite = operation["x-appwrite"];
			if (!isPlatformSupported(xAppwrite, platform)) continue;
			if (xAppwrite?.public === false) continue;
			const service = operation.tags?.[0];
			if (!service) continue;
			if (!hasAdditionalMethods(operation, service)) continue;
			yield* processAdditionalMethods(operation, httpMethod, path, service, spec.components);
		}
	}
}
function getPrimaryContentType(operation) {
	const content = operation.requestBody?.content;
	if (!content) return void 0;
	if (content["application/json"]) return "application/json";
	if (content["multipart/form-data"]) return "multipart/form-data";
	return Object.keys(content)[0];
}
function normalizeScope(scope) {
	if (scope === void 0) return void 0;
	if (Array.isArray(scope)) {
		const values = scope.filter(Boolean).map(String);
		return values.length > 0 ? values.join(", ") : void 0;
	}
	return String(scope);
}
function parseOperation(context, components) {
	const { path, httpMethod, operation, service } = context;
	const xAppwrite = operation["x-appwrite"];
	const operationId = operation.operationId ?? `${httpMethod}${path.replace(/[^a-zA-Z0-9]/g, "")}`;
	const contentType = getPrimaryContentType(operation);
	const parameters = (operation.parameters ?? []).map((param) => {
		if (param.schema?.$ref && components?.schemas) return {
			...param,
			schema: resolveSchema(param.schema, components)
		};
		return param;
	});
	let requestBody = operation.requestBody;
	if (requestBody?.content) {
		const nextContent = {};
		for (const [key, value] of Object.entries(requestBody.content)) nextContent[key] = {
			...value,
			schema: resolveSchema(value.schema, components)
		};
		requestBody = {
			...requestBody,
			content: nextContent
		};
	}
	const isDeprecated = Boolean(operation.deprecated) || Boolean(xAppwrite?.deprecated);
	return {
		id: xAppwrite.method,
		operationId,
		path,
		httpMethod: httpMethod.toLowerCase(),
		summary: operation.summary ?? xAppwrite.method,
		description: operation.description,
		deprecated: isDeprecated,
		scope: normalizeScope(xAppwrite.scope),
		service,
		resourceGroup: xAppwrite.group || void 0,
		weight: xAppwrite.weight ?? 0,
		tags: operation.tags ?? [service],
		parameters,
		requestBody,
		contentType,
		security: operation.security,
		xAppwrite,
		authLabel: formatAuthLabel(xAppwrite, operation.security)
	};
}
function getOperationOrder(summary) {
	const title = summary.toLowerCase();
	if (title.startsWith("create")) return 1;
	if (title.startsWith("read") || title.startsWith("get") || title.startsWith("list")) return 2;
	if (title.startsWith("update")) return 3;
	if (title.startsWith("upsert")) return 4;
	if (title.startsWith("delete")) return 5;
	if (title.startsWith("increment")) return 6;
	if (title.startsWith("decrement")) return 7;
	return 8;
}
function getOperationWeightFromSpec(spec, path, httpMethod) {
	return (spec.paths?.[path]?.[httpMethod.toLowerCase()])?.["x-appwrite"]?.weight ?? 0;
}
function sortMethodsByWeight(methods, spec) {
	return [...methods].sort((a, b) => {
		return getOperationWeightFromSpec(spec, a.path, a.httpMethod) - getOperationWeightFromSpec(spec, b.path, b.httpMethod);
	});
}
function sortMethodsByOperationOrder(methods) {
	return [...methods].sort((a, b) => {
		const orderA = getOperationOrder(a.summary);
		const orderB = getOperationOrder(b.summary);
		if (orderA !== orderB) return orderA - orderB;
		return a.summary.localeCompare(b.summary, void 0, { sensitivity: "base" });
	});
}
function buildTagDescriptionMap(spec) {
	const descriptions = /* @__PURE__ */ new Map();
	for (const tag of spec.tags ?? []) {
		const name = tag.name?.trim();
		const description = tag.description?.trim();
		if (!name || !description) continue;
		descriptions.set(name.toLowerCase(), description);
	}
	return descriptions;
}
function getServiceDescription(serviceId, tagDescriptions) {
	return tagDescriptions.get(serviceId.toLowerCase());
}
function parseOpenApiSpec(spec, platform) {
	const serviceMap = /* @__PURE__ */ new Map();
	const tagDescriptions = buildTagDescriptionMap(spec);
	for (const context of iterateOperations(spec, platform)) {
		const parsed = parseOperation(context, spec.components);
		const existing = serviceMap.get(parsed.service) ?? [];
		existing.push(parsed);
		serviceMap.set(parsed.service, existing);
	}
	const services = Array.from(serviceMap.entries()).map(([id, methods]) => ({
		id,
		label: getServiceLabel(id),
		description: getServiceDescription(id, tagDescriptions),
		methods: sortMethodsByWeight(methods, spec)
	})).sort((a, b) => compareServices(a.id, b.id));
	return {
		platform,
		version: spec.info?.version,
		services
	};
}
function mergeConsoleOnlyDatabaseServices(base, consoleParsed) {
	const existingIds = new Set(base.services.map((service) => service.id));
	const extras = consoleParsed.services.filter((service) => isConsoleOnlyDatabaseApiService(service.id) && service.methods.length > 0 && !existingIds.has(service.id));
	if (extras.length === 0) return base;
	return {
		...base,
		services: [...base.services, ...extras].sort((a, b) => compareServices(a.id, b.id))
	};
}
function formatResourceGroupLabel(group) {
	if (!group) return "";
	return group.replace(/([a-z])([A-Z])/g, "$1 $2");
}
function groupMethodsByResource(methods) {
	const groups = /* @__PURE__ */ new Map();
	const groupOrder = [];
	for (const method of methods) {
		const key = method.resourceGroup ?? "";
		if (!groups.has(key)) {
			groups.set(key, []);
			groupOrder.push(key);
		}
		groups.get(key).push(method);
	}
	return groupOrder.map((id) => ({
		id,
		label: formatResourceGroupLabel(id),
		methods: sortMethodsByOperationOrder(groups.get(id) ?? [])
	}));
}
function isOpenApiPlaceholderExample(value) {
	if (typeof value !== "string") return false;
	return /^<[A-Z][A-Z0-9_]*>$/.test(value.trim());
}
function generateSampleRequestBody(schema) {
	if (!schema) return "{\n  \n}";
	const sample = buildSampleValue(schema);
	return JSON.stringify(sample, null, 2);
}
var CREATABLE_ID_DESCRIPTION = /(?:choose a custom .{0,40}? id|generate a random id|id\.unique\(\))/i;
function isCreatableIdSchemaForSample(schema) {
	const description = schema.description?.trim() ?? "";
	if (!description) return false;
	return CREATABLE_ID_DESCRIPTION.test(description);
}
function buildSampleValue(schema) {
	if (schema.example !== void 0) {
		if (!isOpenApiPlaceholderExample(schema.example)) return schema.example;
	}
	if (schema["x-example"] !== void 0) {
		if (!isOpenApiPlaceholderExample(schema["x-example"])) return schema["x-example"];
	}
	if (schema.default !== void 0) return schema.default;
	if (schema.enum?.length) return schema.enum[0];
	switch (schema.type) {
		case "object": {
			const obj = {};
			for (const [key, prop] of Object.entries(schema.properties ?? {})) {
				if (isCreatableIdSchemaForSample(prop)) continue;
				obj[key] = buildSampleValue(prop);
			}
			return obj;
		}
		case "array": return schema.items ? [buildSampleValue(schema.items)] : [];
		case "boolean": return false;
		case "integer":
		case "number": return 0;
		case "string": switch (schema.format) {
			case "email": return "user@example.com";
			case "url": return "https://example.com";
			case "phone": return "+1234567890";
			case "ip": return "127.0.0.1";
			case "datetime": return (/* @__PURE__ */ new Date()).toISOString();
			case "password": return "";
			default: return "";
		}
		default: return "";
	}
}
function findMethodByOperationId(services, operationId) {
	if (!operationId) return void 0;
	for (const service of services) {
		const match = service.methods.find((method) => method.operationId === operationId || method.id === operationId);
		if (match) return match;
	}
}
export { isOpenApiPlaceholderExample as a, compareServices as c, getServiceLabel as d, groupServicesByProduct as f, groupMethodsByResource as i, filterAllowedServices as l, isDatabaseApiServiceVisible as m, findMethodByOperationId as n, mergeConsoleOnlyDatabaseServices as o, isConsoleOnlyDatabaseApiService as p, generateSampleRequestBody as r, parseOpenApiSpec as s, buildSampleValue as t, getProjectApiExplorerAllowedServices as u };
