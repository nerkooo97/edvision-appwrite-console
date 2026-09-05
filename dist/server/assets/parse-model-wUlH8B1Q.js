function resolveSchemaRef(schema, spec) {
	if (!schema?.$ref || !spec.components?.schemas) return schema;
	const name = schema.$ref.replace("#/components/schemas/", "");
	return spec.components.schemas[name] ?? schema;
}
function getSchemaIdFromRef(ref) {
	return ref.replace("#/components/schemas/", "");
}
function formatSchemaType(schema, spec) {
	if (!schema) return "";
	const resolved = resolveSchemaRef(schema, spec) ?? schema;
	if (resolved.$ref) return getSchemaIdFromRef(resolved.$ref);
	if (resolved.type === "array" && resolved.items) {
		const itemType = formatSchemaType(resolved.items, spec);
		return itemType ? `${itemType}[]` : "array";
	}
	if (resolved.enum?.length) {
		const enumName = resolved["x-enum-name"];
		if (enumName) return enumName;
		return resolved.enum.map(String).join(" | ");
	}
	if (resolved.type) return resolved.type;
	return "";
}
function getResponseModelFromRef(ref, spec) {
	const id = getSchemaIdFromRef(ref);
	return {
		id,
		name: (spec.components?.schemas?.[id])?.description?.trim() || id
	};
}
function resolveResponseModels(schema, spec) {
	if (!schema) return [];
	if (schema.oneOf?.length) return schema.oneOf.filter((item) => Boolean(item.$ref)).map((item) => getResponseModelFromRef(item.$ref, spec));
	if (schema.$ref) return [getResponseModelFromRef(schema.$ref, spec)];
	if (schema.type === "array" && schema.items) return resolveResponseModels(schema.items, spec);
	return [];
}
function formatModelLink(modelId, version) {
	return `[${modelId}](/docs/references/${version}/models/${modelId})`;
}
function formatRelatedModelsMarkdown(modelIds, version) {
	return modelIds.map((id) => formatModelLink(id, version)).join(", ");
}
function collectRelatedModelIds(property, spec) {
	if (property.$ref) return [getSchemaIdFromRef(property.$ref)];
	const resolved = resolveSchemaRef(property, spec) ?? property;
	if (resolved.items) {
		const rawItems = resolved.items;
		if (rawItems.$ref) return [getSchemaIdFromRef(rawItems.$ref)];
		const items = resolveSchemaRef(rawItems, spec) ?? rawItems;
		if (items.oneOf?.length) return items.oneOf.filter((item) => item.$ref).map((item) => getSchemaIdFromRef(item.$ref));
		if (items.anyOf?.length) return items.anyOf.filter((item) => item.$ref).map((item) => getSchemaIdFromRef(item.$ref));
	}
	if (resolved.$ref) return [getSchemaIdFromRef(resolved.$ref)];
	if (resolved.oneOf?.length) return resolved.oneOf.filter((item) => item.$ref).map((item) => getSchemaIdFromRef(item.$ref));
	if (resolved.anyOf?.length) return resolved.anyOf.filter((item) => item.$ref).map((item) => getSchemaIdFromRef(item.$ref));
	return [];
}
function resolvePropertyTypeMeta(resolved, spec, relatedIds, variants) {
	if (variants?.length) {
		if (resolved.type === "array") return {
			typeKind: "array",
			type: "array",
			itemType: variants.length === 1 ? variants[0].name : void 0,
			variantCount: variants.length > 1 ? variants.length : void 0
		};
		return {
			typeKind: "object",
			type: "object",
			itemType: variants.length === 1 ? variants[0].name : void 0,
			variantCount: variants.length > 1 ? variants.length : void 0
		};
	}
	if (resolved.type === "array") {
		if (relatedIds.length === 1) {
			const itemId = relatedIds[0];
			return {
				typeKind: "array",
				type: "array",
				itemType: spec.components?.schemas?.[itemId]?.description?.trim() || itemId
			};
		}
		return {
			typeKind: "array",
			type: "array",
			itemType: formatSchemaType(resolved.items, spec) || void 0
		};
	}
	if (resolved.type === "object" || resolved.properties) return {
		typeKind: "object",
		type: "object"
	};
	return {
		typeKind: "scalar",
		type: formatSchemaType(resolved, spec) || "unknown"
	};
}
function parseModelPropertiesFromSchema(schema, spec, options = {}) {
	const { version, linkRelatedModels = false } = options;
	const properties = schema.properties ?? {};
	return Object.entries(properties).map(([name, propertySchema]) => {
		const resolved = resolveSchemaRef(propertySchema, spec) ?? propertySchema;
		const relatedIds = collectRelatedModelIds(propertySchema, spec);
		const variants = Boolean(version) && relatedIds.length > 0 && (relatedIds.length > 1 || resolved.type === "array") ? relatedIds.map((id) => buildInlineResponseModel(id, spec.components?.schemas?.[id]?.description?.trim() || id, spec, version)) : void 0;
		let relatedModels;
		if (!variants && relatedIds.length > 0) relatedModels = linkRelatedModels && version ? formatRelatedModelsMarkdown(relatedIds, version) : relatedIds.join(", ");
		return {
			name,
			...resolvePropertyTypeMeta(resolved, spec, relatedIds, variants),
			description: resolved.description ?? "",
			relatedModels,
			variants
		};
	});
}
function getModelExamples(schema) {
	const examples = [];
	const example = schema.example;
	if (example?.rest !== void 0) examples.push({
		type: "REST",
		example: example.rest
	});
	if (example?.graphql !== void 0) examples.push({
		type: "GraphQL",
		example: example.graphql
	});
	return examples;
}
function parseModelFromSpec(modelId, spec, version, options = {}) {
	const schema = spec.components?.schemas?.[modelId];
	if (!schema) return null;
	const resolved = resolveSchemaRef(schema, spec) ?? schema;
	return {
		id: modelId,
		title: resolved.description?.trim() || modelId,
		properties: parseModelPropertiesFromSchema(resolved, spec, {
			...options,
			version
		}),
		examples: getModelExamples(resolved)
	};
}
function buildInlineResponseModel(modelId, fallbackName, consoleSpec, version) {
	const parsed = parseModelFromSpec(modelId, consoleSpec, version, { linkRelatedModels: false });
	if (!parsed) return {
		id: modelId,
		name: fallbackName,
		properties: []
	};
	return {
		id: parsed.id,
		name: parsed.title,
		properties: parsed.properties
	};
}
export { parseModelFromSpec as n, resolveResponseModels as r, buildInlineResponseModel as t };
