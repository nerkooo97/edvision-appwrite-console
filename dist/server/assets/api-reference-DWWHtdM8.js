import { s as createServerFn, t as createServerRpc } from "../server.js";
import { z } from "zod";
var referenceServiceSchema = z.object({
	version: z.string(),
	platform: z.string(),
	service: z.string()
});
var referenceModelSchema = z.object({
	version: z.string(),
	model: z.string()
});
var referenceNavCountsSchema = z.object({
	version: z.string(),
	mode: z.enum(["client", "server"])
});
var referenceOpenApiSpecSchema = z.object({
	version: z.string(),
	mode: z.enum(["client", "server"])
});
var loadApiReferenceServiceFn_createServerFn_handler = createServerRpc("src_server_functions_api-reference_ts--loadApiReferenceServiceFn_createServerFn_handler", (opts, signal) => {
	return loadApiReferenceServiceFn.__executeServer(opts, signal);
});
const loadApiReferenceServiceFn = createServerFn({ method: "GET" }).inputValidator(referenceServiceSchema).handler(loadApiReferenceServiceFn_createServerFn_handler, async ({ data }) => {
	const { loadApiReferenceService } = await import("./load-service-vg1UMVC5.js");
	const result = await loadApiReferenceService(data.version, data.platform, data.service);
	if (!result) throw new Error("API_REFERENCE_NOT_FOUND");
	return result;
});
var loadApiReferenceModelFn_createServerFn_handler = createServerRpc("src_server_functions_api-reference_ts--loadApiReferenceModelFn_createServerFn_handler", (opts, signal) => {
	return loadApiReferenceModelFn.__executeServer(opts, signal);
});
const loadApiReferenceModelFn = createServerFn({ method: "GET" }).inputValidator(referenceModelSchema).handler(loadApiReferenceModelFn_createServerFn_handler, async ({ data }) => {
	const { loadApiReferenceModel } = await import("./load-model-CF3JJamv.js");
	const { isReferenceNotFoundError } = await import("./errors-DxMW-oo4.js");
	try {
		const result = await loadApiReferenceModel(data.version, data.model);
		if (!result) throw new Error("API_REFERENCE_NOT_FOUND");
		return result;
	} catch (error) {
		if (isReferenceNotFoundError(error)) throw new Error("API_REFERENCE_NOT_FOUND");
		throw error;
	}
});
var loadReferenceNavServiceCountsFn_createServerFn_handler = createServerRpc("src_server_functions_api-reference_ts--loadReferenceNavServiceCountsFn_createServerFn_handler", (opts, signal) => {
	return loadReferenceNavServiceCountsFn.__executeServer(opts, signal);
});
const loadReferenceNavServiceCountsFn = createServerFn({ method: "GET" }).inputValidator(referenceNavCountsSchema).handler(loadReferenceNavServiceCountsFn_createServerFn_handler, async ({ data }) => {
	const { loadReferenceNavServiceCounts } = await import("./reference-nav-CfFfeLKb.js");
	const counts = await loadReferenceNavServiceCounts(data.version, data.mode);
	return Array.from(counts.entries());
});
var loadReferenceOpenApiSpecFn_createServerFn_handler = createServerRpc("src_server_functions_api-reference_ts--loadReferenceOpenApiSpecFn_createServerFn_handler", (opts, signal) => {
	return loadReferenceOpenApiSpecFn.__executeServer(opts, signal);
});
const loadReferenceOpenApiSpecFn = createServerFn({ method: "GET" }).inputValidator(referenceOpenApiSpecSchema).handler(loadReferenceOpenApiSpecFn_createServerFn_handler, async ({ data }) => {
	const { loadReferenceOpenApiSpecByMode } = await import("./load-spec-BWF8SleZ.js");
	const { isReferenceVersion } = await import("./constants-_e66k9Z-.js");
	if (!isReferenceVersion(data.version)) throw new Error("API_REFERENCE_NOT_FOUND");
	return loadReferenceOpenApiSpecByMode(data.version, data.mode);
});
export { loadReferenceOpenApiSpecFn as i, loadApiReferenceServiceFn as n, loadReferenceNavServiceCountsFn as r, loadApiReferenceModelFn as t };
