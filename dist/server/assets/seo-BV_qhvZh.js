import { f as isReferenceVersion } from "./constants-Dd6QzW31.js";
function getApiReferenceCanonicalSlug(slug) {
	const normalized = slug.replace(/^\/+|\/+$/g, "");
	const match = normalized.match(/^references\/([^/]+)\/(.+)$/);
	if (!match) return normalized;
	const [, version, rest] = match;
	if (version === "cloud" || !isReferenceVersion(version)) return normalized;
	return `references/cloud/${rest}`;
}
export { getApiReferenceCanonicalSlug as t };
