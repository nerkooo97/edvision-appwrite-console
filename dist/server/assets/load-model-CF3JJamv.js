import { f as isReferenceVersion } from "./constants-Dd6QzW31.js";
import { t as ReferenceNotFoundError } from "./errors-Dx4R8-YI.js";
import { n as parseModelFromSpec } from "./parse-model-wUlH8B1Q.js";
import { t as loadReferenceConsoleSpec } from "./load-spec-ga300HYB.js";
async function loadApiReferenceModel(version, modelId) {
	if (!isReferenceVersion(version)) return null;
	const model = parseModelFromSpec(modelId, await loadReferenceConsoleSpec(version), version, { linkRelatedModels: true });
	if (!model) throw new ReferenceNotFoundError(`Model ${modelId} not found`);
	return model;
}
export { loadApiReferenceModel };
