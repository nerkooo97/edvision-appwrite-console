import { f as parseMysqlTableId, m as quoteMysqlIdentifier } from "./mysql-database-routes-CVHkJzTt.js";
import { En as quoteMysqlStringLiteral, Tn as prefixMysqlSqlComment } from "./form-field-type-badge-C7qMzJo0.js";
function buildMysqlAddColumnSql(tableId, columnName, dataType, options) {
	const { schema, table } = parseMysqlTableId(tableId);
	const parts = [`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`}`, `ADD COLUMN ${quoteMysqlIdentifier(columnName)} ${dataType}`];
	if (options?.nullable === false && !options?.primaryKey) parts.push("NOT NULL");
	if (options?.defaultValue?.trim()) parts.push(`DEFAULT ${options.defaultValue.trim()}`);
	if (options?.primaryKey) parts.push("PRIMARY KEY");
	else if (options?.unique) parts.push("UNIQUE");
	return prefixMysqlSqlComment(parts.join(" "), "Add table column");
}
function buildMysqlAlterColumnDefaultSql(tableId, columnName, defaultValue) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const column = quoteMysqlIdentifier(columnName);
	if (!defaultValue?.trim()) return prefixMysqlSqlComment(`ALTER TABLE ${qualified} ALTER COLUMN ${column} DROP DEFAULT`, "Drop column default");
	return prefixMysqlSqlComment(`ALTER TABLE ${qualified} ALTER COLUMN ${column} SET DEFAULT ${defaultValue.trim()}`, "Set column default");
}
function buildMysqlAddPrimaryKeySql(tableId, columnName, constraintName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} ADD CONSTRAINT ${quoteMysqlIdentifier(constraintName)} PRIMARY KEY (${quoteMysqlIdentifier(columnName)})`, "Add primary key");
}
function buildMysqlAddUniqueConstraintSql(tableId, columnName, constraintName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} ADD CONSTRAINT ${quoteMysqlIdentifier(constraintName)} UNIQUE (${quoteMysqlIdentifier(columnName)})`, "Add unique constraint");
}
function buildMysqlDropColumnSql(tableId, columnName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} DROP COLUMN ${quoteMysqlIdentifier(columnName)}`, "Drop table column");
}
function buildMysqlRenameColumnSql(tableId, columnName, newName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} RENAME COLUMN ${quoteMysqlIdentifier(columnName)} TO ${quoteMysqlIdentifier(newName)}`, "Rename table column");
}
function buildMysqlAlterColumnTypeSql(tableId, columnName, dataType) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} MODIFY COLUMN ${quoteMysqlIdentifier(columnName)} ${dataType}`, "Change column type");
}
function buildMysqlAlterColumnNullableSql(tableId, columnName, nullable, dataType) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const nullClause = nullable ? "NULL" : "NOT NULL";
	return prefixMysqlSqlComment(`ALTER TABLE ${qualified} MODIFY COLUMN ${quoteMysqlIdentifier(columnName)} ${dataType} ${nullClause}`, "Set column nullable");
}
function buildMysqlCreateIndexSql(tableId, indexName, columnNames, options) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const columns = columnNames.map((name) => quoteMysqlIdentifier(name)).join(", ");
	const uniqueKeyword = options?.unique ? "UNIQUE " : "";
	const algorithm = (options?.algorithm ?? "btree").trim().toLowerCase();
	const usingClause = algorithm && algorithm !== "btree" ? ` USING ${algorithm.toUpperCase()}` : " USING BTREE";
	return prefixMysqlSqlComment(`CREATE ${uniqueKeyword}INDEX ${quoteMysqlIdentifier(indexName)} ON ${qualified} (${columns})${usingClause}`, "Create table index");
}
function buildMysqlIndexCommentSql(tableId, indexName, comment) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const literal = quoteMysqlStringLiteral(comment?.trim() ?? "");
	return prefixMysqlSqlComment(`ALTER TABLE ${qualified} ALTER INDEX ${quoteMysqlIdentifier(indexName)} COMMENT ${literal}`, "Set index comment");
}
function buildMysqlDropIndexSql(tableId, indexName) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	return prefixMysqlSqlComment(`DROP INDEX ${quoteMysqlIdentifier(indexName)} ON ${qualified}`, "Drop table index");
}
function buildMysqlRenameTableSql(tableId, newTableName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`RENAME TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} TO ${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(newTableName)}`, "Rename table");
}
function buildMysqlColumnCommentSql(tableId, columnName, comment, dataType) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} MODIFY COLUMN ${quoteMysqlIdentifier(columnName)} ${dataType} COMMENT ${quoteMysqlStringLiteral(comment?.trim() ?? "")}`, "Set column comment");
}
function buildMysqlDropConstraintSql(tableId, constraintName) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} DROP CONSTRAINT ${quoteMysqlIdentifier(constraintName)}`, "Drop table constraint");
}
function buildMysqlAddCheckConstraintSql(tableId, constraintName, expression) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const trimmed = expression.trim();
	return prefixMysqlSqlComment(`ALTER TABLE ${qualified} ADD CONSTRAINT ${quoteMysqlIdentifier(constraintName)} CHECK (${trimmed})`, "Add check constraint");
}
function buildMysqlAddForeignKeySql(tableId, columnName, constraintName, reference) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
	const refQualified = `${quoteMysqlIdentifier(reference.schema)}.${quoteMysqlIdentifier(reference.table)}`;
	return prefixMysqlSqlComment(`ALTER TABLE ${qualified} ADD CONSTRAINT ${quoteMysqlIdentifier(constraintName)} FOREIGN KEY (${quoteMysqlIdentifier(columnName)}) REFERENCES ${refQualified} (${quoteMysqlIdentifier(reference.column)})`, "Add foreign key");
}
function buildMysqlTableCommentSql(tableId, comment) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`ALTER TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} COMMENT = ${quoteMysqlStringLiteral(comment)}`, "Set table comment");
}
function buildMysqlDropTableSql(tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`DROP TABLE ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`}`, "Drop table");
}
function formatMysqlColumnType(row) {
	if ((row.data_type?.toLowerCase() ?? "") === "enum" && row.udt_name?.trim()) return row.udt_name;
	const base = row.data_type;
	const charLen = row.character_maximum_length;
	if (charLen != null && charLen !== "") return `${base}(${charLen})`;
	const precision = row.numeric_precision;
	const scale = row.numeric_scale;
	if (precision != null && precision !== "" && scale != null && scale !== "") return `${base}(${precision},${scale})`;
	if (precision != null && precision !== "") return `${base}(${precision})`;
	return base;
}
function formatMysqlBytes(bytes) {
	const value = typeof bytes === "string" ? Number.parseInt(bytes, 10) : bytes;
	if (value == null || !Number.isFinite(value)) return "-";
	if (value < 1024) return `${value} B`;
	if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
	if (value < 1024 * 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
	return `${(value / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
export { buildMysqlRenameTableSql as _, buildMysqlAddUniqueConstraintSql as a, formatMysqlColumnType as b, buildMysqlAlterColumnTypeSql as c, buildMysqlDropColumnSql as d, buildMysqlDropConstraintSql as f, buildMysqlRenameColumnSql as g, buildMysqlIndexCommentSql as h, buildMysqlAddPrimaryKeySql as i, buildMysqlColumnCommentSql as l, buildMysqlDropTableSql as m, buildMysqlAddColumnSql as n, buildMysqlAlterColumnDefaultSql as o, buildMysqlDropIndexSql as p, buildMysqlAddForeignKeySql as r, buildMysqlAlterColumnNullableSql as s, buildMysqlAddCheckConstraintSql as t, buildMysqlCreateIndexSql as u, buildMysqlTableCommentSql as v, formatMysqlBytes as y };
