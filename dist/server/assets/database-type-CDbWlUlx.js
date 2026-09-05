let DatabaseType = /* @__PURE__ */ function(DatabaseType$1) {
	DatabaseType$1["Legacy"] = "legacy";
	DatabaseType$1["Tablesdb"] = "tablesdb";
	DatabaseType$1["Documentsdb"] = "documentsdb";
	DatabaseType$1["Vectorsdb"] = "vectorsdb";
	DatabaseType$1["Mysql"] = "mysql";
	DatabaseType$1["Postgresql"] = "postgresql";
	DatabaseType$1["Mongodb"] = "mongodb";
	return DatabaseType$1;
}({});
let DatabaseProduct = /* @__PURE__ */ function(DatabaseProduct$1) {
	DatabaseProduct$1["Nativedb"] = "nativedb";
	DatabaseProduct$1["Tablesdb"] = "tablesdb";
	DatabaseProduct$1["Documentsdb"] = "documentsdb";
	DatabaseProduct$1["Vectorsdb"] = "vectorsdb";
	return DatabaseProduct$1;
}({});
var NATIVE_ENGINE_TYPE_SET = new Set([
	"mysql",
	"mariadb",
	"postgresql",
	"postgres",
	"mongodb",
	"mongo"
]);
function normalizeDatabaseTypeKey(value) {
	return String(value ?? "").trim().toLowerCase().replace(/-/g, "");
}
function isNativeDatabaseTypeValue(type) {
	const key = normalizeDatabaseTypeKey(type);
	return key === "nativedb" || NATIVE_ENGINE_TYPE_SET.has(key);
}
function engineFromDatabaseTypeValue(type) {
	const key = normalizeDatabaseTypeKey(type);
	if (!NATIVE_ENGINE_TYPE_SET.has(key)) return null;
	if (key === "postgres") return "postgresql";
	if (key === "mongo") return "mongodb";
	return key;
}
function productFromDatabaseTypeValue(type) {
	const key = normalizeDatabaseTypeKey(type);
	if (key === "tablesdb" || key === "documentsdb" || key === "vectorsdb" || key === "legacy") return key === "legacy" ? "tablesdb" : key;
	if (key === "nativedb" || NATIVE_ENGINE_TYPE_SET.has(key)) return key === "nativedb" ? DatabaseProduct.Nativedb : key;
	return null;
}
function coerceDatabaseType(value) {
	const key = normalizeDatabaseTypeKey(value);
	if (key === "documentsdb") return DatabaseType.Documentsdb;
	if (key === "vectorsdb") return DatabaseType.Vectorsdb;
	return DatabaseType.Tablesdb;
}
function toSdkDatabaseType(value) {
	switch (normalizeDatabaseTypeKey(value)) {
		case "legacy": return DatabaseType.Legacy;
		case "tablesdb": return DatabaseType.Tablesdb;
		case "documentsdb": return DatabaseType.Documentsdb;
		case "vectorsdb": return DatabaseType.Vectorsdb;
		case "mysql": return DatabaseType.Mysql;
		case "postgresql":
		case "postgres": return DatabaseType.Postgresql;
		case "mongodb":
		case "mongo": return DatabaseType.Mongodb;
		default: return DatabaseType.Tablesdb;
	}
}
export { productFromDatabaseTypeValue as a, isNativeDatabaseTypeValue as i, coerceDatabaseType as n, toSdkDatabaseType as o, engineFromDatabaseTypeValue as r, DatabaseType as t };
