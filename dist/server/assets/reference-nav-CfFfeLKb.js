import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as isReferenceService } from "./constants-Dd6QzW31.js";
import "./console-profiles-D__E5Kgi.js";
import { o as mergeConsoleOnlyDatabaseServices, s as parseOpenApiSpec } from "./parse-spec-DW3UGcrS.js";
import { n as loadReferenceOpenApiSpec, t as loadReferenceConsoleSpec } from "./load-spec-ga300HYB.js";
async function loadReferenceNavServiceCounts(version, mode) {
	const platform = mode === "client" ? "client-web" : "server-nodejs";
	const [spec, consoleSpec] = await Promise.all([loadReferenceOpenApiSpec(version, platform), loadReferenceConsoleSpec(version)]);
	const parsed = mergeConsoleOnlyDatabaseServices(parseOpenApiSpec(spec, mode), parseOpenApiSpec(consoleSpec, "console"));
	const counts = /* @__PURE__ */ new Map();
	for (const service of parsed.services) {
		if (service.methods.length === 0 || !isReferenceService(service.id)) continue;
		counts.set(service.id, service.methods.length);
	}
	return counts;
}
export { loadReferenceNavServiceCounts };
