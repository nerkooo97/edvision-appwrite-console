const DEFAULT_NEW_DATABASE_NAME = "Production";
var NEW_DATABASE_NAME_BY_TYPE = {
	TablesDB: "Production TablesDB",
	DocumentsDB: "Production DocumentsDB",
	VectorsDB: "Production VectorsDB",
	Postgres: "Production PostgreSQL",
	MySQL: "Production MySQL"
};
function getNewDatabaseNameForType(type) {
	if (!type) return DEFAULT_NEW_DATABASE_NAME;
	return NEW_DATABASE_NAME_BY_TYPE[type];
}
function isAutoFilledNewDatabaseName(name) {
	const trimmed = name.trim();
	if (!trimmed) return true;
	if (trimmed === "Production") return true;
	return Object.values(NEW_DATABASE_NAME_BY_TYPE).includes(trimmed);
}
export { getNewDatabaseNameForType as n, isAutoFilledNewDatabaseName as r, DEFAULT_NEW_DATABASE_NAME as t };
