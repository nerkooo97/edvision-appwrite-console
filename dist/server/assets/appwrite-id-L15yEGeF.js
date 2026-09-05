import { Query } from "@appwrite.io/console";
function buildAttributePrefixSearchQueries(attributes, search, options) {
	const trimmed = search?.trim() || "";
	if (!trimmed || attributes.length === 0) return [];
	const prefix = trimmed.slice(0, options?.maxPrefixLength ?? 128);
	if (attributes.length === 1) return [Query.startsWith(attributes[0], prefix)];
	return [Query.or(attributes.map((attribute) => Query.startsWith(attribute, prefix)))];
}
export { buildAttributePrefixSearchQueries as t };
