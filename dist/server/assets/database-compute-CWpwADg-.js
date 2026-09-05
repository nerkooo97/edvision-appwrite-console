import { i as isNativeDatabaseTypeValue, n as coerceDatabaseType, r as engineFromDatabaseTypeValue, t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { a as formatDedicatedSpecMemory, f as isServerlessDatabaseSpecId, i as formatDedicatedSpecCpu, t as SERVERLESS_DATABASE_SPEC_ID } from "./database-specs-CBc802K0.js";
import { b as coerceTrimmedString } from "./database-routes-DB_xKWuY.js";
function readDatabaseLifecycleStatus(status) {
	if (typeof status !== "string") return null;
	const trimmed = status.trim();
	return trimmed ? trimmed : null;
}
function readDatabaseSpecification(value) {
	const trimmed = coerceTrimmedString(value);
	return trimmed ? trimmed : null;
}
function productDedicatedEngineHints(databaseType) {
	const nativeEngine = engineFromDatabaseTypeValue(databaseType);
	if (nativeEngine) return [nativeEngine];
	const type = coerceDatabaseType(databaseType);
	if (type === DatabaseType.Documentsdb) return ["mongodb"];
	if (type === DatabaseType.Vectorsdb) return ["postgresql"];
	return ["mysql"];
}
function hasDedicatedDatabaseCompute(db, dedicated) {
	if (dedicated?.$id) return true;
	const spec = readDatabaseSpecification(db.specification);
	if (spec && !isServerlessDatabaseSpecId(spec)) return true;
	if (typeof db.replicas === "number") return true;
	if (isNativeDatabaseTypeValue(db.databaseType)) return true;
	const type = coerceDatabaseType(db.databaseType);
	return type === DatabaseType.Documentsdb || type === DatabaseType.Vectorsdb;
}
function canConfigureDedicatedReplication(db, dedicated) {
	const productSpec = readDatabaseSpecification(db.specification);
	const dedicatedSpec = readDatabaseSpecification(dedicated?.specification);
	if (productSpec && isServerlessDatabaseSpecId(productSpec)) {
		if (!dedicated?.$id || dedicatedSpec != null && isServerlessDatabaseSpecId(dedicatedSpec)) return false;
	}
	if (dedicatedSpec && isServerlessDatabaseSpecId(dedicatedSpec)) return false;
	if (isNativeDatabaseTypeValue(db.databaseType)) return true;
	const type = coerceDatabaseType(db.databaseType);
	if (type === DatabaseType.Documentsdb || type === DatabaseType.Vectorsdb) return true;
	if (dedicated?.$id) return true;
	if (productSpec && !isServerlessDatabaseSpecId(productSpec)) return true;
	if (typeof dedicated?.replicas === "number" && dedicated.replicas > 0) return true;
	if (typeof db.replicas === "number" && db.replicas > 0) return true;
	return false;
}
function findSpecOptionByResources(specs, cpuMillicores, memoryMb, rawSpecifications) {
	if ((cpuMillicores == null || cpuMillicores <= 0) && (memoryMb == null || memoryMb <= 0)) return null;
	if (rawSpecifications?.length) {
		const match = rawSpecifications.find((spec) => {
			const cpuOk = cpuMillicores == null || cpuMillicores <= 0 || spec.cpu === cpuMillicores;
			const memoryOk = memoryMb == null || memoryMb <= 0 || spec.memory === memoryMb;
			return cpuOk && memoryOk;
		});
		if (match) return specs.find((item) => item.id === match.slug) ?? {
			id: match.slug,
			label: match.name,
			cpu: formatDedicatedSpecCpu(match.cpu),
			memory: formatDedicatedSpecMemory(match.memory),
			storage: "-",
			connections: String(match.maxConnections),
			price: "",
			priceUsd: match.price,
			comingSoon: !match.enabled
		};
	}
	const cpuLabel = cpuMillicores != null && cpuMillicores > 0 ? formatDedicatedSpecCpu(cpuMillicores) : null;
	const memoryLabel = memoryMb != null && memoryMb > 0 ? formatDedicatedSpecMemory(memoryMb) : null;
	if (!cpuLabel && !memoryLabel) return null;
	return specs.find((spec) => {
		if (spec.id === "shared") return false;
		const cpuOk = !cpuLabel || spec.cpu === cpuLabel;
		const memoryOk = !memoryLabel || spec.memory === memoryLabel;
		return cpuOk && memoryOk;
	}) ?? null;
}
function buildProductDedicatedCardSource(db, dedicated) {
	if (!db.$id) return null;
	if (!hasDedicatedDatabaseCompute(db, dedicated ?? void 0)) return null;
	const type = coerceDatabaseType(db.databaseType);
	const api = coerceTrimmedString(dedicated?.api) || (type === DatabaseType.Documentsdb ? "documentsdb" : type === DatabaseType.Vectorsdb ? "vectorsdb" : isNativeDatabaseTypeValue(db.databaseType) ? String(db.databaseType ?? "") : "tablesdb");
	const engineHint = productDedicatedEngineHints(db.databaseType)[0] ?? "postgresql";
	const engine = coerceTrimmedString(dedicated?.engine) || engineHint;
	const status = readDatabaseLifecycleStatus(dedicated?.status) || readDatabaseLifecycleStatus(db.status) || "ready";
	const specification = readDatabaseSpecification(dedicated?.specification) || readDatabaseSpecification(db.specification) || "";
	const replicas = typeof dedicated?.replicas === "number" ? dedicated.replicas : typeof db.replicas === "number" ? db.replicas : 0;
	return {
		$id: dedicated?.$id || db.$id,
		name: db.name ?? void 0,
		status,
		replicas,
		specification,
		engine,
		api,
		cpu: dedicated?.cpu ?? void 0,
		memory: dedicated?.memory ?? void 0
	};
}
function resolveDatabaseComputeLabel(db, dedicated, t, options) {
	const fromDedicated = readDatabaseSpecification(dedicated?.specification);
	if (fromDedicated) return isServerlessDatabaseSpecId(fromDedicated) ? t("Serverless") : fromDedicated;
	const fromProduct = readDatabaseSpecification(db.specification);
	if (fromProduct) return isServerlessDatabaseSpecId(fromProduct) ? t("Serverless") : fromProduct;
	if (hasDedicatedDatabaseCompute(db, dedicated)) {
		const fromResources = findSpecOptionByResources(options?.specs ?? [], dedicated?.cpu, dedicated?.memory, options?.rawSpecifications);
		if (fromResources?.id) return fromResources.id;
		if (fromResources?.label?.trim()) return fromResources.label.trim();
		if (dedicated?.cpu != null && dedicated.cpu > 0 && dedicated?.memory != null && dedicated.memory > 0) return `${formatDedicatedSpecCpu(dedicated.cpu)} · ${formatDedicatedSpecMemory(dedicated.memory)}`;
		return "";
	}
	if (typeof options?.unspecifiedLabel === "string") return options.unspecifiedLabel;
	return t("Serverless");
}
function resolveDatabaseComputeSpecId(db, dedicated, options) {
	const fromDedicated = readDatabaseSpecification(dedicated?.specification);
	if (fromDedicated) return fromDedicated;
	const fromProduct = readDatabaseSpecification(db.specification);
	if (fromProduct) return fromProduct;
	if (hasDedicatedDatabaseCompute(db, dedicated)) return findSpecOptionByResources(options?.specs ?? [], dedicated?.cpu, dedicated?.memory, options?.rawSpecifications)?.id ?? null;
	return SERVERLESS_DATABASE_SPEC_ID;
}
export { readDatabaseSpecification as a, productDedicatedEngineHints as i, canConfigureDedicatedReplication as n, resolveDatabaseComputeLabel as o, hasDedicatedDatabaseCompute as r, resolveDatabaseComputeSpecId as s, buildProductDedicatedCardSource as t };
