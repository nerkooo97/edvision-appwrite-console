import { m as quotePostgresIdentifier, s as parsePostgresTableId } from "./postgres-database-routes-CyTsPbzl.js";
import { et as prefixPostgresSqlComment, tt as quotePostgresStringLiteral } from "./database-row-inline-edits-CdyGeTxj.js";
function buildPostgresAddColumnSql(tableId, columnName, dataType, options) {
	const { schema, table } = parsePostgresTableId(tableId);
	const parts = [`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`}`, `ADD COLUMN ${quotePostgresIdentifier(columnName)} ${dataType}`];
	if (options?.primaryKey) parts.push("PRIMARY KEY");
	else if (options?.unique) parts.push("UNIQUE");
	if (options?.nullable === false && !options?.primaryKey) parts.push("NOT NULL");
	if (options?.defaultValue?.trim()) parts.push(`DEFAULT ${options.defaultValue.trim()}`);
	return prefixPostgresSqlComment(parts.join(" "), "Add table column");
}
function buildPostgresAlterColumnDefaultSql(tableId, columnName, defaultValue) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const column = quotePostgresIdentifier(columnName);
	if (!defaultValue?.trim()) return prefixPostgresSqlComment(`ALTER TABLE ${qualified} ALTER COLUMN ${column} DROP DEFAULT`, "Drop column default");
	return prefixPostgresSqlComment(`ALTER TABLE ${qualified} ALTER COLUMN ${column} SET DEFAULT ${defaultValue.trim()}`, "Set column default");
}
function buildPostgresAddPrimaryKeySql(tableId, columnName, constraintName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} ADD CONSTRAINT ${quotePostgresIdentifier(constraintName)} PRIMARY KEY (${quotePostgresIdentifier(columnName)})`, "Add primary key");
}
function buildPostgresAddUniqueConstraintSql(tableId, columnName, constraintName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} ADD CONSTRAINT ${quotePostgresIdentifier(constraintName)} UNIQUE (${quotePostgresIdentifier(columnName)})`, "Add unique constraint");
}
function buildPostgresDropColumnSql(tableId, columnName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} DROP COLUMN ${quotePostgresIdentifier(columnName)}`, "Drop table column");
}
function buildPostgresRenameColumnSql(tableId, columnName, newName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} RENAME COLUMN ${quotePostgresIdentifier(columnName)} TO ${quotePostgresIdentifier(newName)}`, "Rename table column");
}
function buildPostgresAlterColumnTypeSql(tableId, columnName, dataType) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} ALTER COLUMN ${quotePostgresIdentifier(columnName)} TYPE ${dataType}`, "Change column type");
}
function buildPostgresAlterColumnNullableSql(tableId, columnName, nullable) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const action = nullable ? "DROP NOT NULL" : "SET NOT NULL";
	return prefixPostgresSqlComment(`ALTER TABLE ${qualified} ALTER COLUMN ${quotePostgresIdentifier(columnName)} ${action}`, "Set column nullable");
}
function buildPostgresCreateIndexSql(tableId, indexName, columnNames, options) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const columns = columnNames.map((name) => quotePostgresIdentifier(name)).join(", ");
	const uniqueKeyword = options?.unique ? "UNIQUE " : "";
	const algorithm = (options?.algorithm ?? "btree").trim().toLowerCase();
	const includeColumns = (options?.includeColumns ?? []).filter(Boolean);
	const includeClause = includeColumns.length > 0 ? ` INCLUDE (${includeColumns.map((name) => quotePostgresIdentifier(name)).join(", ")})` : "";
	const condition = options?.condition?.trim();
	const whereClause = condition ? ` WHERE (${condition})` : "";
	return prefixPostgresSqlComment(`CREATE ${uniqueKeyword}INDEX ${quotePostgresIdentifier(indexName)} ON ${qualified} USING ${algorithm} (${columns})${includeClause}${whereClause}`, "Create table index");
}
function buildPostgresIndexCommentSql(schema, indexName, comment) {
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(indexName)}`;
	if (!comment?.trim()) return prefixPostgresSqlComment(`COMMENT ON INDEX ${qualified} IS NULL`, "Set index comment");
	return prefixPostgresSqlComment(`COMMENT ON INDEX ${qualified} IS ${quotePostgresStringLiteral(comment.trim())}`, "Set index comment");
}
function buildPostgresDropIndexSql(schema, indexName) {
	return prefixPostgresSqlComment(`DROP INDEX ${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(indexName)}`, "Drop table index");
}
function buildPostgresRenameTableSql(tableId, newTableName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} RENAME TO ${quotePostgresIdentifier(newTableName)}`, "Rename table");
}
function buildPostgresColumnCommentSql(tableId, columnName, comment) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const column = quotePostgresIdentifier(columnName);
	if (!comment?.trim()) return prefixPostgresSqlComment(`COMMENT ON COLUMN ${qualified}.${column} IS NULL`, "Set column comment");
	return prefixPostgresSqlComment(`COMMENT ON COLUMN ${qualified}.${column} IS ${quotePostgresStringLiteral(comment.trim())}`, "Set column comment");
}
function buildPostgresDropConstraintSql(tableId, constraintName) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`ALTER TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} DROP CONSTRAINT ${quotePostgresIdentifier(constraintName)}`, "Drop table constraint");
}
function buildPostgresAddCheckConstraintSql(tableId, constraintName, expression) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const trimmed = expression.trim();
	return prefixPostgresSqlComment(`ALTER TABLE ${qualified} ADD CONSTRAINT ${quotePostgresIdentifier(constraintName)} CHECK (${trimmed})`, "Add check constraint");
}
function buildPostgresAddForeignKeySql(tableId, columnName, constraintName, reference) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
	const refQualified = `${quotePostgresIdentifier(reference.schema)}.${quotePostgresIdentifier(reference.table)}`;
	return prefixPostgresSqlComment(`ALTER TABLE ${qualified} ADD CONSTRAINT ${quotePostgresIdentifier(constraintName)} FOREIGN KEY (${quotePostgresIdentifier(columnName)}) REFERENCES ${refQualified} (${quotePostgresIdentifier(reference.column)})`, "Add foreign key");
}
function buildPostgresTableCommentSql(tableId, comment) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`COMMENT ON TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} IS ${quotePostgresStringLiteral(comment)}`, "Set table comment");
}
function buildPostgresDropTableSql(tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`DROP TABLE ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`}`, "Drop table");
}
function formatPostgresColumnType(row) {
	const base = row.data_type;
	const charLen = row.character_maximum_length;
	if (charLen != null && charLen !== "") return `${base}(${charLen})`;
	const precision = row.numeric_precision;
	const scale = row.numeric_scale;
	if (precision != null && precision !== "" && scale != null && scale !== "") return `${base}(${precision},${scale})`;
	if (precision != null && precision !== "") return `${base}(${precision})`;
	return base;
}
function formatPostgresBytes(bytes) {
	const value = typeof bytes === "string" ? Number.parseInt(bytes, 10) : bytes;
	if (value == null || !Number.isFinite(value)) return "-";
	if (value < 1024) return `${value} B`;
	if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
	if (value < 1024 * 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
	return `${(value / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
export { buildPostgresRenameTableSql as _, buildPostgresAddUniqueConstraintSql as a, formatPostgresColumnType as b, buildPostgresAlterColumnTypeSql as c, buildPostgresDropColumnSql as d, buildPostgresDropConstraintSql as f, buildPostgresRenameColumnSql as g, buildPostgresIndexCommentSql as h, buildPostgresAddPrimaryKeySql as i, buildPostgresColumnCommentSql as l, buildPostgresDropTableSql as m, buildPostgresAddColumnSql as n, buildPostgresAlterColumnDefaultSql as o, buildPostgresDropIndexSql as p, buildPostgresAddForeignKeySql as r, buildPostgresAlterColumnNullableSql as s, buildPostgresAddCheckConstraintSql as t, buildPostgresCreateIndexSql as u, buildPostgresTableCommentSql as v, formatPostgresBytes as y };
