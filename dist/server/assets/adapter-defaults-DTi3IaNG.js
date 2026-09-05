function resolveFrameworkAdapter(framework, adapterKey) {
	if (!framework?.adapters?.length) return void 0;
	if (adapterKey) {
		const match = framework.adapters.find((a) => a.key === adapterKey);
		if (match) return match;
	}
	return framework.adapters[0];
}
function getFrameworkAdapterBuildFields(adapter) {
	return {
		installCommand: adapter?.installCommand ?? "",
		buildCommand: adapter?.buildCommand ?? "",
		outputDirectory: adapter?.outputDirectory ?? "",
		fallbackFile: adapter?.fallbackFile ?? ""
	};
}
function getFrameworkAdapterDefaults(framework, adapterKey) {
	return getFrameworkAdapterBuildFields(resolveFrameworkAdapter(framework, adapterKey));
}
function frameworkHasSsrAdapter(framework) {
	return framework?.adapters?.some((a) => a.key === "ssr") ?? false;
}
function frameworkHasStaticAdapter(framework) {
	return framework?.adapters?.some((a) => a.key === "static") ?? false;
}
function getFrameworkCreateDefaults(framework) {
	if (!framework?.adapters?.length) return {
		installCommand: "npm install",
		buildCommand: "npm run build",
		outputDirectory: ".output",
		fallbackFile: "",
		adapter: "static",
		buildRuntime: "node-22"
	};
	const adapter = framework.adapters.find((a) => a.key === "static") ?? framework.adapters[0];
	const fields = getFrameworkAdapterBuildFields(adapter);
	return {
		...fields,
		installCommand: fields.installCommand || "npm install",
		buildCommand: fields.buildCommand || "npm run build",
		outputDirectory: fields.outputDirectory || ".output",
		adapter: adapter.key,
		buildRuntime: framework.buildRuntime || "node-22"
	};
}
export { getFrameworkCreateDefaults as i, frameworkHasStaticAdapter as n, getFrameworkAdapterDefaults as r, frameworkHasSsrAdapter as t };
