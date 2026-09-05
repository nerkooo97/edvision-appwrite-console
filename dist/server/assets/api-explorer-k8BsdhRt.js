import { s as createServerFn, t as createServerRpc } from "../server.js";
import { t as assertAllowedExplorerRequestUrl } from "./proxy-validation-Bk7Iiado.js";
import { z } from "zod";
var proxyApiExplorerRequestSchema = z.object({
	url: z.string().url(),
	method: z.string().min(1),
	headers: z.record(z.string(), z.string()),
	body: z.string().optional(),
	allowedEndpoint: z.string().url()
});
var proxyApiExplorerRequestFn_createServerFn_handler = createServerRpc("src_server_functions_api-explorer_ts--proxyApiExplorerRequestFn_createServerFn_handler", (opts, signal) => {
	return proxyApiExplorerRequestFn.__executeServer(opts, signal);
});
var proxyApiExplorerRequestFn = createServerFn({ method: "POST" }).inputValidator(proxyApiExplorerRequestSchema).handler(proxyApiExplorerRequestFn_createServerFn_handler, async ({ data }) => {
	assertAllowedExplorerRequestUrl(data.url, data.allowedEndpoint);
	const startedAt = performance.now();
	const response = await fetch(data.url, {
		method: data.method.toUpperCase(),
		headers: data.headers,
		body: data.body,
		cache: "no-store",
		redirect: "manual"
	});
	const buffer = Buffer.from(await response.arrayBuffer());
	const responseHeaders = {};
	response.headers.forEach((value, key) => {
		responseHeaders[key] = value;
	});
	return {
		status: response.status,
		statusText: response.statusText,
		headers: responseHeaders,
		bodyBase64: buffer.toString("base64"),
		durationMs: Math.round(performance.now() - startedAt),
		ok: response.ok
	};
});
export { proxyApiExplorerRequestFn_createServerFn_handler };
