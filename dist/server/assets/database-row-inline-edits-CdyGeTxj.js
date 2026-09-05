import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { m as quotePostgresIdentifier } from "./postgres-database-routes-CyTsPbzl.js";
import { format } from "sql-formatter";
var POSTGRES_NAMESPACE_SYSTEM_FILTER = `
  n.nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
  AND n.nspname NOT LIKE 'pg_temp_%'
  AND n.nspname NOT LIKE 'pg_toast_temp_%'
`.trim();
var POSTGRES_SCHEMAS_SYSTEM_FILTER = `
  nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
  AND nspname NOT LIKE 'pg_temp_%'
  AND nspname NOT LIKE 'pg_toast_temp_%'
`.trim();
const POSTGRES_SIDEBAR_LIST_PAGE_SIZE = 50;
function quotePostgresStringLiteral(value) {
	return `'${value.replace(/'/g, "''")}'`;
}
function stripLeadingPostgresSqlComments(sql) {
	return peelLeadingPostgresSqlComments(sql).sqlWithoutLeadingComments;
}
function peelLeadingPostgresSqlComments(sql) {
	const commentLines = [];
	let remaining = sql.trimStart();
	while (remaining.length > 0) {
		if (remaining.startsWith("--")) {
			const newlineIndex = remaining.indexOf("\n");
			if (newlineIndex === -1) {
				commentLines.push(remaining);
				remaining = "";
				break;
			}
			commentLines.push(remaining.slice(0, newlineIndex));
			remaining = remaining.slice(newlineIndex + 1).trimStart();
			continue;
		}
		if (remaining.startsWith("/*")) {
			const endIndex = remaining.indexOf("*/");
			if (endIndex === -1) {
				commentLines.push(remaining);
				remaining = "";
				break;
			}
			commentLines.push(remaining.slice(0, endIndex + 2));
			remaining = remaining.slice(endIndex + 2).trimStart();
			continue;
		}
		break;
	}
	return {
		leadingComments: commentLines.join("\n"),
		sqlWithoutLeadingComments: remaining.trim()
	};
}
function prefixPostgresSqlComment(sql, comment) {
	const trimmedSql = sql.trim();
	if (!trimmedSql) return trimmedSql;
	const trimmedComment = comment.trim().replace(/\s+/g, " ");
	if (!trimmedComment) return trimmedSql;
	return `-- ${trimmedComment}\n${trimmedSql}`;
}
function stripTrailingPostgresSqlSemicolon(sql) {
	return sql.trim().replace(/;\s*$/, "");
}
function buildPostgresSingleRequestDdlSql(statements, traceComment) {
	const normalized = statements.map((statement) => stripTrailingPostgresSqlSemicolon(statement)).filter(Boolean);
	if (normalized.length === 0) return "";
	if (normalized.length === 1) return prefixPostgresSqlComment(normalized[0], traceComment);
	return prefixPostgresSqlComment(`DO $appwrite_ddl$\nBEGIN\n  ${normalized.map((statement) => `${statement};`).join("\n  ")}\nEND\n$appwrite_ddl$`, traceComment);
}
function escapePostgresLikePattern(value) {
	return value.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");
}
function appendPostgresSqlLimitOffset(sql, limit, offset) {
	if (limit == null || !Number.isFinite(limit)) return sql;
	return `${sql}\nLIMIT ${Math.max(1, Math.floor(limit))} OFFSET ${offset != null && Number.isFinite(offset) ? Math.max(0, Math.floor(offset)) : 0}`;
}
function buildPostgresListSchemasSql(options) {
	const conditions = [POSTGRES_SCHEMAS_SYSTEM_FILTER];
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapePostgresLikePattern(search)}%`;
		conditions.push(`nspname ILIKE ${quotePostgresStringLiteral(pattern)} ESCAPE ${quotePostgresStringLiteral("\\")}`);
	}
	return prefixPostgresSqlComment(appendPostgresSqlLimitOffset(`
SELECT nspname AS schema_name
FROM pg_catalog.pg_namespace
WHERE ${conditions.join("\n  AND ")}
ORDER BY nspname
`.trim(), options?.limit, options?.offset), "List database schemas");
}
function buildPostgresListSchemasCountSql(options) {
	const conditions = [POSTGRES_SCHEMAS_SYSTEM_FILTER];
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapePostgresLikePattern(search)}%`;
		conditions.push(`nspname ILIKE ${quotePostgresStringLiteral(pattern)} ESCAPE ${quotePostgresStringLiteral("\\")}`);
	}
	return prefixPostgresSqlComment(`
SELECT COUNT(*) AS total
FROM pg_catalog.pg_namespace
WHERE ${conditions.join("\n  AND ")}
`.trim(), "Count database schemas");
}
var POSTGRES_TABLES_SYSTEM_SCHEMA_FILTER = POSTGRES_NAMESPACE_SYSTEM_FILTER;
var POSTGRES_TABLE_RELKIND_FILTER = `c.relkind IN ('r', 'v')`;
function buildPostgresListTablesSql(options) {
	const conditions = [POSTGRES_TABLES_SYSTEM_SCHEMA_FILTER, POSTGRES_TABLE_RELKIND_FILTER];
	const schema = options?.schema?.trim();
	if (schema) conditions.push(`n.nspname = ${quotePostgresStringLiteral(schema)}`);
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapePostgresLikePattern(search)}%`;
		conditions.push(`c.relname ILIKE ${quotePostgresStringLiteral(pattern)} ESCAPE ${quotePostgresStringLiteral("\\")}`);
	}
	return prefixPostgresSqlComment(appendPostgresSqlLimitOffset(`
SELECT
  n.nspname AS table_schema,
  c.relname AS table_name,
  CASE c.relkind
    WHEN 'r' THEN 'BASE TABLE'
    WHEN 'v' THEN 'VIEW'
    ELSE c.relkind::text
  END AS table_type
FROM pg_catalog.pg_class c
JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE ${conditions.join("\n  AND ")}
ORDER BY n.nspname, c.relname
`.trim(), options?.limit, options?.offset), "List tables and views");
}
function buildPostgresListTablesCountSql(options) {
	const conditions = [POSTGRES_TABLES_SYSTEM_SCHEMA_FILTER, POSTGRES_TABLE_RELKIND_FILTER];
	const schema = options?.schema?.trim();
	if (schema) conditions.push(`n.nspname = ${quotePostgresStringLiteral(schema)}`);
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapePostgresLikePattern(search)}%`;
		conditions.push(`c.relname ILIKE ${quotePostgresStringLiteral(pattern)} ESCAPE ${quotePostgresStringLiteral("\\")}`);
	}
	return prefixPostgresSqlComment(`
SELECT COUNT(*) AS total
FROM pg_catalog.pg_class c
JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE ${conditions.join("\n  AND ")}
`.trim(), "Count tables and views");
}
function isPostgresTruthyFlag(value) {
	if (value === true) return true;
	const normalized = String(value ?? "").trim().toLowerCase();
	return normalized === "true" || normalized === "t" || normalized === "1";
}
function isPostgresPrimaryKeyColumn(column) {
	return isPostgresTruthyFlag(column.is_primary_key);
}
function isPostgresUniqueColumn(column) {
	return isPostgresTruthyFlag(column.is_unique);
}
function sortPostgresTableColumns(columns) {
	return [...columns].sort((a, b) => {
		const aPrimary = isPostgresPrimaryKeyColumn(a);
		if (aPrimary !== isPostgresPrimaryKeyColumn(b)) return aPrimary ? -1 : 1;
		return Number(a.ordinal_position) - Number(b.ordinal_position);
	});
}
function isPostgresPrimaryIndex(index) {
	const value = index.is_primary;
	return value === true || value === "true" || value === "t";
}
function sortPostgresTableIndexes(indexes) {
	return [...indexes].sort((a, b) => {
		const aPrimary = isPostgresPrimaryIndex(a);
		if (aPrimary !== isPostgresPrimaryIndex(b)) return aPrimary ? -1 : 1;
		return a.index_name.localeCompare(b.index_name);
	});
}
function sortPostgresSchemaEnums(enums) {
	return [...enums].sort((a, b) => a.enum_name.localeCompare(b.enum_name));
}
function isPostgresEnumUsedInSchema(row) {
	const value = row.used_in_schema;
	return value === true || value === "true" || value === "t";
}
function buildPostgresSchemaEnumsSql(schema) {
	const schemaLit = quotePostgresStringLiteral(schema);
	return prefixPostgresSqlComment(`
SELECT
  t.typname AS enum_name,
  n.nspname AS enum_schema,
  COALESCE(
    json_agg(e.enumlabel ORDER BY e.enumsortorder),
    '[]'::json
  ) AS enum_values,
  obj_description(t.oid, 'pg_type') AS enum_comment,
  EXISTS (
    SELECT 1
    FROM information_schema.columns c
    WHERE c.table_schema = ${schemaLit}
      AND c.udt_name = t.typname
  ) AS used_in_schema
FROM pg_type t
JOIN pg_namespace n ON n.oid = t.typnamespace
LEFT JOIN pg_enum e ON e.enumtypid = t.oid
WHERE n.nspname = ${schemaLit}
  AND t.typtype = 'e'
GROUP BY t.typname, n.nspname, t.oid
ORDER BY t.typname
`.trim(), "Load schema enums");
}
function buildPostgresTableColumnsSql(schema, table) {
	const schemaLit = quotePostgresStringLiteral(schema);
	const tableLit = quotePostgresStringLiteral(table);
	return prefixPostgresSqlComment(`
SELECT
  c.column_name,
  c.data_type,
  c.udt_name,
  c.is_nullable,
  COALESCE(pg_get_expr(def.adbin, def.adrelid), c.column_default) AS column_default,
  CASE WHEN attr.attidentity IN ('a', 'd') THEN 'YES' ELSE 'NO' END AS is_identity,
  CASE attr.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  pg_get_serial_sequence(
    quote_ident(c.table_schema) || '.' || quote_ident(c.table_name),
    c.column_name
  ) AS serial_sequence,
  c.character_maximum_length,
  c.numeric_precision,
  c.numeric_scale,
  c.datetime_precision,
  c.ordinal_position,
  CASE WHEN pk.column_name IS NOT NULL THEN true ELSE false END AS is_primary_key,
  CASE WHEN uq.column_name IS NOT NULL THEN true ELSE false END AS is_unique,
  pk.constraint_name AS primary_key_constraint,
  uq.constraint_name AS unique_constraint,
  pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS column_comment,
  checks.check_constraints,
  fkeys.foreign_keys
FROM information_schema.columns c
JOIN pg_catalog.pg_class pgc
  ON pgc.relname = c.table_name
JOIN pg_catalog.pg_namespace n
  ON n.oid = pgc.relnamespace
  AND n.nspname = c.table_schema
LEFT JOIN pg_attribute attr
  ON attr.attrelid = pgc.oid
  AND attr.attname = c.column_name
  AND attr.attnum > 0
  AND NOT attr.attisdropped
LEFT JOIN pg_attrdef def
  ON def.adrelid = attr.attrelid
  AND def.adnum = attr.attnum
LEFT JOIN (
  SELECT kcu.column_name, tc.constraint_name
  FROM information_schema.table_constraints tc
  JOIN information_schema.key_column_usage kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
    AND tc.table_name = kcu.table_name
  WHERE tc.constraint_type = 'PRIMARY KEY'
    AND tc.table_schema = ${schemaLit}
    AND tc.table_name = ${tableLit}
) pk ON c.column_name = pk.column_name
LEFT JOIN (
  SELECT kcu.column_name, tc.constraint_name
  FROM information_schema.table_constraints tc
  JOIN information_schema.key_column_usage kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
    AND tc.table_name = kcu.table_name
  WHERE tc.constraint_type = 'UNIQUE'
    AND tc.table_schema = ${schemaLit}
    AND tc.table_name = ${tableLit}
    AND (
      SELECT COUNT(*)::int
      FROM information_schema.key_column_usage kcu2
      WHERE kcu2.constraint_schema = tc.constraint_schema
        AND kcu2.constraint_name = tc.constraint_name
        AND kcu2.table_schema = tc.table_schema
        AND kcu2.table_name = tc.table_name
    ) = 1
) uq ON c.column_name = uq.column_name
LEFT JOIN (
  SELECT
    ccu.column_name,
    string_agg(
      tc.constraint_name || '::' || cc.check_clause,
      E'\\n'
      ORDER BY tc.constraint_name
    ) AS check_constraints
  FROM information_schema.table_constraints tc
  JOIN information_schema.check_constraints cc
    ON tc.constraint_name = cc.constraint_name
    AND tc.constraint_schema = cc.constraint_schema
  JOIN information_schema.constraint_column_usage ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.constraint_schema = tc.constraint_schema
    AND ccu.table_schema = tc.table_schema
    AND ccu.table_name = tc.table_name
  WHERE tc.table_schema = ${schemaLit}
    AND tc.table_name = ${tableLit}
    AND tc.constraint_type = 'CHECK'
  GROUP BY ccu.column_name
) checks ON checks.column_name = c.column_name
LEFT JOIN (
  SELECT
    src.column_name,
    string_agg(
      tc.constraint_name || '::' || ref.table_schema || '.' || ref.table_name || '(' || ref.column_name || ')',
      E'\\n'
      ORDER BY tc.constraint_name, src.ordinal_position
    ) AS foreign_keys
  FROM information_schema.table_constraints tc
  JOIN information_schema.key_column_usage src
    ON src.constraint_name = tc.constraint_name
    AND src.table_schema = tc.table_schema
    AND src.table_name = tc.table_name
  JOIN information_schema.referential_constraints rc
    ON rc.constraint_name = tc.constraint_name
    AND rc.constraint_schema = tc.constraint_schema
  JOIN information_schema.key_column_usage ref
    ON ref.constraint_name = rc.unique_constraint_name
    AND ref.constraint_schema = rc.unique_constraint_schema
    AND ref.ordinal_position = src.ordinal_position
  WHERE tc.table_schema = ${schemaLit}
    AND tc.table_name = ${tableLit}
    AND tc.constraint_type = 'FOREIGN KEY'
  GROUP BY src.column_name
) fkeys ON fkeys.column_name = c.column_name
WHERE c.table_schema = ${schemaLit}
  AND c.table_name = ${tableLit}
ORDER BY CASE WHEN pk.column_name IS NOT NULL THEN 0 ELSE 1 END, c.ordinal_position
`.trim(), "List table columns");
}
function buildPostgresTableColumnsForRowsSql(schema, table) {
	const schemaLit = quotePostgresStringLiteral(schema);
	const tableLit = quotePostgresStringLiteral(table);
	return prefixPostgresSqlComment(`
WITH rel AS (
  SELECT c.oid AS rel_oid, c.relkind
  FROM pg_catalog.pg_class c
  JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = ${schemaLit}
    AND c.relname = ${tableLit}
)
SELECT
  a.attname AS column_name,
  format_type(a.atttypid, a.atttypmod) AS data_type,
  t.typname AS udt_name,
  CASE WHEN a.attnotnull THEN 'NO' ELSE 'YES' END AS is_nullable,
  pg_get_expr(d.adbin, d.adrelid) AS column_default,
  CASE WHEN a.attidentity IN ('a', 'd') THEN 'YES' ELSE 'NO' END AS is_identity,
  CASE a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  pg_get_serial_sequence(
    quote_ident(${schemaLit}) || '.' || quote_ident(${tableLit}),
    a.attname
  ) AS serial_sequence,
  CASE
    WHEN t.typname IN ('varchar', 'bpchar', 'bit', 'varbit') AND a.atttypmod > 0
      THEN a.atttypmod - 4
    ELSE NULL
  END AS character_maximum_length,
  CASE
    WHEN t.typname = 'numeric' AND a.atttypmod > 0
      THEN ((a.atttypmod - 4) >> 16) & 65535
    ELSE NULL
  END AS numeric_precision,
  CASE
    WHEN t.typname = 'numeric' AND a.atttypmod > 0
      THEN (a.atttypmod - 4) & 65535
    ELSE NULL
  END AS numeric_scale,
  CASE
    WHEN t.typname IN ('time', 'timetz', 'timestamp', 'timestamptz', 'interval')
      AND a.atttypmod > 0
      THEN a.atttypmod
    ELSE NULL
  END AS datetime_precision,
  a.attnum AS ordinal_position,
  CASE WHEN pk.contype = 'p' THEN true ELSE false END AS is_primary_key,
  CASE
    WHEN uq.contype = 'u' AND cardinality(uq.conkey) = 1 THEN true
    ELSE false
  END AS is_unique,
  pk.conname AS primary_key_constraint,
  CASE
    WHEN uq.contype = 'u' AND cardinality(uq.conkey) = 1 THEN uq.conname
    ELSE NULL
  END AS unique_constraint,
  NULL::text AS column_comment,
  NULL::text AS check_constraints,
  NULL::text AS foreign_keys,
  rel.relkind AS rel_kind
FROM rel
LEFT JOIN pg_catalog.pg_attribute a
  ON a.attrelid = rel.rel_oid
 AND a.attnum > 0
 AND NOT a.attisdropped
LEFT JOIN pg_catalog.pg_type t
  ON t.oid = a.atttypid
LEFT JOIN pg_catalog.pg_attrdef d
  ON d.adrelid = a.attrelid
 AND d.adnum = a.attnum
LEFT JOIN pg_catalog.pg_constraint pk
  ON pk.conrelid = rel.rel_oid
 AND pk.contype = 'p'
 AND a.attnum = ANY (pk.conkey)
LEFT JOIN pg_catalog.pg_constraint uq
  ON uq.conrelid = rel.rel_oid
 AND uq.contype = 'u'
 AND a.attnum = ANY (uq.conkey)
 AND cardinality(uq.conkey) = 1
WHERE a.attname IS NOT NULL
   OR NOT EXISTS (
     SELECT 1
     FROM pg_catalog.pg_attribute a2
     WHERE a2.attrelid = rel.rel_oid
       AND a2.attnum > 0
       AND NOT a2.attisdropped
   )
ORDER BY CASE WHEN pk.contype = 'p' THEN 0 ELSE 1 END, a.attnum
`.trim(), "Load row columns");
}
function buildPostgresTableAutocompleteColumnsSql(schema, table) {
	return prefixPostgresSqlComment(`
SELECT
  n.nspname AS table_schema,
  c.relname AS table_name,
  a.attname AS column_name,
  format_type(a.atttypid, a.atttypmod) AS data_type,
  CASE WHEN a.attnotnull THEN 'NO' ELSE 'YES' END AS is_nullable,
  a.attnum AS ordinal_position
FROM pg_catalog.pg_class c
JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
JOIN pg_catalog.pg_attribute a
  ON a.attrelid = c.oid
 AND a.attnum > 0
 AND NOT a.attisdropped
WHERE n.nspname = ${quotePostgresStringLiteral(schema)}
  AND c.relname = ${quotePostgresStringLiteral(table)}
ORDER BY a.attnum
`.trim(), "List autocomplete columns");
}
function postgresRelationSupportsRowCtid(relKind) {
	return relKind === "r" || relKind === "m";
}
function buildPostgresTableIndexesSql(schema, table) {
	return prefixPostgresSqlComment(`
SELECT
  i.relname AS index_name,
  pg_get_indexdef(i.oid) AS index_definition,
  ix.indisunique AS is_unique,
  ix.indisprimary AS is_primary,
  am.amname AS index_algorithm,
  pg_get_expr(ix.indpred, ix.indrelid) AS index_condition,
  pg_catalog.obj_description(i.oid, 'pg_class') AS index_comment,
  (
    SELECT string_agg(a.attname, ', ' ORDER BY u.ord)
    FROM unnest(ix.indkey) WITH ORDINALITY AS u(attnum, ord)
    JOIN pg_attribute a
      ON a.attrelid = t.oid
      AND a.attnum = u.attnum
      AND NOT a.attisdropped
    WHERE u.ord > ix.indnkeyatts
  ) AS index_include
FROM pg_class t
JOIN pg_namespace n ON n.oid = t.relnamespace
JOIN pg_index ix ON ix.indrelid = t.oid
JOIN pg_class i ON i.oid = ix.indexrelid
JOIN pg_am am ON am.oid = i.relam
WHERE n.nspname = ${quotePostgresStringLiteral(schema)}
  AND t.relname = ${quotePostgresStringLiteral(table)}
ORDER BY ix.indisprimary DESC, i.relname
`.trim(), "List table indexes");
}
function buildPostgresTableInfoSql(schema, table) {
	return prefixPostgresSqlComment(`
SELECT
  n.nspname AS table_schema,
  c.relname AS table_name,
  CASE c.relkind
    WHEN 'r' THEN 'BASE TABLE'
    WHEN 'v' THEN 'VIEW'
    WHEN 'm' THEN 'MATERIALIZED VIEW'
    ELSE c.relkind::text
  END AS table_type,
  pg_total_relation_size(c.oid) AS total_bytes,
  obj_description(c.oid) AS table_comment,
  c.reltuples::bigint AS estimated_rows
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname = ${quotePostgresStringLiteral(schema)}
  AND c.relname = ${quotePostgresStringLiteral(table)}
`.trim(), "Load table info");
}
function executionResultRows(execution) {
	const { rows } = execution;
	if (Array.isArray(rows)) return rows;
	if (rows && typeof rows === "object") return Object.values(rows);
	return [];
}
function formatPostgresQueryDurationMs(ms) {
	if (ms < 1) return "< 1 ms";
	if (ms < 1e3) {
		if (ms < 10) return `${Math.round(ms * 10) / 10} ms`;
		return `${Math.round(ms)} ms`;
	}
	const seconds = ms / 1e3;
	if (seconds < 60) return seconds < 10 ? `${seconds.toFixed(2)} s` : `${seconds.toFixed(1)} s`;
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	if (remainingSeconds < .05) return `${minutes} min`;
	return `${minutes} min ${remainingSeconds.toFixed(0)} s`;
}
function buildPostgresSelectSql(schema, table, limit, offset) {
	return `SELECT * FROM ${`${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`} LIMIT ${limit} OFFSET ${offset}`;
}
function formatPostgresSql(sql) {
	const trimmed = sql.trim();
	if (!trimmed) return sql;
	try {
		return format(trimmed, {
			language: "postgresql",
			tabWidth: 2,
			keywordCase: "upper"
		});
	} catch {
		return sql;
	}
}
const TEXT_TYPES = [
	"string",
	"varchar",
	"text",
	"mediumtext",
	"longtext"
];
function isTextType(type) {
	if (!type) return false;
	return TEXT_TYPES.includes(type.toLowerCase());
}
const INT64_MIN = -9223372036854775808n;
const INT64_MAX = 9223372036854775807n;
function parseInt64Value(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return null;
	try {
		return BigInt(trimmed);
	} catch {
		return null;
	}
}
function isValidInt64(value) {
	return value >= -9223372036854775808n && value <= 9223372036854775807n;
}
function formatInt64Bound(value) {
	if (value === void 0 || value === null) return "";
	return String(value);
}
function normalizeTableColumnStatus(status) {
	if (!status) return "available";
	return status;
}
function isTableColumnStatusPending(status) {
	return normalizeTableColumnStatus(status) !== "available";
}
function getTableColumnStatusBadgeVariant(status) {
	switch (normalizeTableColumnStatus(status)) {
		case "available": return "success";
		case "deleting":
		case "failed":
		case "stuck": return "error";
		case "processing":
		default: return "processing";
	}
}
const TABLESDB_SYSTEM_COLUMNS = [
	{
		key: "$id",
		type: "string",
		required: true
	},
	{
		key: "$createdAt",
		type: "datetime",
		required: true
	},
	{
		key: "$updatedAt",
		type: "datetime",
		required: true
	}
];
function isTablesDbSystemColumnKey(key) {
	return key === "$id" || key === "$createdAt" || key === "$updatedAt";
}
function buildTablesDbSystemColumnListItem(def) {
	return {
		key: def.key,
		type: def.type,
		format: null,
		size: null,
		encrypt: false,
		elements: null,
		required: def.required,
		array: false,
		default: null,
		xdefault: null,
		status: "available",
		error: "",
		$id: def.key
	};
}
function mergeTablesDbSystemColumnsIntoList(userColumns) {
	const systemColumns = TABLESDB_SYSTEM_COLUMNS.map((def) => buildTablesDbSystemColumnListItem(def));
	const filteredUser = userColumns.filter((column) => !isTablesDbSystemColumnKey(column.key));
	return [...systemColumns, ...filteredUser];
}
var NUMERIC_RANGE_COLUMN_TYPES = new Set([
	"integer",
	"int",
	"bigint",
	"double",
	"float",
	"number"
]);
function columnTypeSupportsNumericRange(type) {
	if (!type) return false;
	return NUMERIC_RANGE_COLUMN_TYPES.has(type.toLowerCase());
}
var INTEGER_LIKE_COLUMN_TYPES = new Set([
	"integer",
	"int",
	"bigint"
]);
function isIntegerLikeColumnType(type) {
	if (!type) return false;
	return INTEGER_LIKE_COLUMN_TYPES.has(type.toLowerCase());
}
function formatIntegerLikeGrouped(value) {
	if (typeof value === "bigint") {
		const negative = value < 0n;
		const grouped = (negative ? -value : value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return negative ? `-${grouped}` : grouped;
	}
	return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}
function integerLikeRawString(value) {
	return typeof value === "bigint" ? value.toString() : String(Math.trunc(value));
}
function shouldAbbreviateIntegerLike(value, columnType) {
	if (!isIntegerLikeColumnType(columnType)) return false;
	return integerLikeRawString(value).replace(/^-/, "").length > 6;
}
function formatScientificIntegerLike(value) {
	if (typeof value === "bigint") {
		if (value === 0n) return "0";
		const negative = value < 0n;
		const digits = (negative ? -value : value).toString();
		const exp$1 = digits.length - 1;
		const d0 = Number(digits[0] ?? 0);
		const d1 = Number(digits[1] ?? 0);
		const d2 = Number(digits[2] ?? 0);
		const mantissa$1 = d0 + d1 / 10 + d2 / 100;
		return `${negative ? "-" : ""}${mantissa$1.toFixed(2)}e+${exp$1}`;
	}
	const n = value;
	if (!Number.isFinite(n) || n === 0) return String(n);
	const exp = Math.floor(Math.log10(Math.abs(n)));
	const mantissa = n / 10 ** exp;
	return `${mantissa < 0 ? "-" : ""}${Math.abs(mantissa).toFixed(2)}e+${exp}`;
}
function parseColumnIntegerLikeValue(value, columnType) {
	if (value === null || value === void 0) return null;
	const type = columnType?.toLowerCase();
	if (!type || !INTEGER_LIKE_COLUMN_TYPES.has(type)) return null;
	if (type === "bigint") {
		if (typeof value === "bigint") return value;
		if (typeof value === "number" && Number.isFinite(value)) return BigInt(Math.trunc(value));
		if (typeof value === "string") return parseInt64Value(value);
		return null;
	}
	if (typeof value === "number" && Number.isFinite(value)) return Math.trunc(value);
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (!trimmed) return null;
		const parsed = Number(trimmed);
		return Number.isFinite(parsed) ? Math.trunc(parsed) : null;
	}
	return null;
}
function formatIntegerLikeCellPart(value, columnType) {
	const copyValue = integerLikeRawString(value);
	const grouped = formatIntegerLikeGrouped(value);
	if (shouldAbbreviateIntegerLike(value, columnType)) return {
		label: formatScientificIntegerLike(value),
		detail: grouped,
		copyValue,
		abbreviated: true
	};
	return {
		label: grouped,
		copyValue,
		abbreviated: false
	};
}
function formatColumnNumericDisplay(value, columnType) {
	const parsed = parseColumnIntegerLikeValue(value, columnType);
	if (parsed === null) return null;
	const part = formatIntegerLikeCellPart(parsed, columnType);
	if (!part.abbreviated) return {
		label: part.label,
		copyValue: part.copyValue
	};
	return {
		label: part.label,
		entries: [{
			label: "Default",
			detail: part.detail,
			copyValue: part.copyValue
		}]
	};
}
function rangeDisplayFromParts(label, parts) {
	if (!(parts.some((p) => p.abbreviated) || parts.length > 1)) return { label };
	return {
		label,
		entries: parts.map((p) => ({
			label: p.boundLabel,
			detail: p.detail ?? p.label,
			copyValue: p.copyValue
		}))
	};
}
function formatRangeCellPart(value, columnType) {
	if (!isIntegerLikeColumnType(columnType)) {
		const label = String(value);
		return {
			label,
			copyValue: label,
			abbreviated: false
		};
	}
	return formatIntegerLikeCellPart(value, columnType);
}
function formatColumnRangeDisplay(min, max, columnType) {
	const hasMin = min !== void 0 && min !== null;
	const hasMax = max !== void 0 && max !== null;
	if (!hasMin && !hasMax) return null;
	if (hasMin && hasMax) {
		const minPart = formatRangeCellPart(min, columnType);
		const maxPart$1 = formatRangeCellPart(max, columnType);
		return rangeDisplayFromParts(`${minPart.label} – ${maxPart$1.label}`, [{
			boundLabel: "Min",
			...minPart
		}, {
			boundLabel: "Max",
			...maxPart$1
		}]);
	}
	if (hasMin) {
		const minPart = formatRangeCellPart(min, columnType);
		return rangeDisplayFromParts(`≥ ${minPart.label}`, [{
			boundLabel: "Min",
			...minPart
		}]);
	}
	const maxPart = formatRangeCellPart(max, columnType);
	return rangeDisplayFromParts(`≤ ${maxPart.label}`, [{
		boundLabel: "Max",
		...maxPart
	}]);
}
var NON_INLINE_EDITABLE_TYPES = new Set([
	"relationship",
	"point",
	"linestring",
	"polygon"
]);
function isSystemDateColumnKey(key) {
	return key === "$createdAt" || key === "$updatedAt";
}
function getSystemDateColumnInfo(_key) {
	return {
		type: "datetime",
		required: true
	};
}
function resolveInlineColumnInfo(columnKey, columnInfo) {
	if (isSystemDateColumnKey(columnKey)) return getSystemDateColumnInfo(columnKey);
	return getColumnMeta(columnInfo);
}
function getColumnMeta(columnInfo) {
	return columnInfo ?? {};
}
function makePendingEditKey(tableId, rowId, columnKey) {
	return `${tableId}:${rowId}:${columnKey}`;
}
function getInlineFieldType(columnInfo, value, columnKey) {
	if (columnKey && isSystemDateColumnKey(columnKey)) return "datetime";
	const col = getColumnMeta(columnInfo);
	if (col.array) return "array";
	if (col.type === "array" || (col.type?.endsWith("[]") ?? false)) return "array";
	if (col.type) return col.type;
	if (Array.isArray(value)) return "array";
	if (typeof value === "boolean") return "boolean";
	if (typeof value === "number" || typeof value === "bigint") return "number";
	return "string";
}
function isInlineColumnRequired(columnInfo) {
	const col = getColumnMeta(columnInfo);
	return col.required === true || col.required === "true" || col.isRequired === true || col.isRequired === "true" || col.nullable === false || col.nullable === "false";
}
function isNumericInlineFieldType(type) {
	return type === "integer" || type === "int" || type === "bigint" || type === "double" || type === "float" || type === "number";
}
function isDateTimeInlineFieldType(type) {
	return type === "datetime" || type === "date";
}
function isColumnInlineEditable(columnInfo, columnKey) {
	if (columnKey && isSystemDateColumnKey(columnKey)) return true;
	const col = getColumnMeta(columnInfo);
	if (col.array) return false;
	if (col.type && NON_INLINE_EDITABLE_TYPES.has(col.type)) return false;
	if (isTableColumnStatusPending(col.status)) return false;
	return true;
}
function getEnumOptions(columnInfo) {
	const col = getColumnMeta(columnInfo);
	return Array.isArray(col.elements) ? col.elements : [];
}
function getInlineInputConfig(columnInfo, columnKey) {
	const col = getColumnMeta(columnInfo);
	const type = getInlineFieldType(columnInfo, void 0, columnKey);
	const isRequired = isInlineColumnRequired(columnInfo);
	const placeholder = isRequired ? void 0 : "NULL";
	if (type === "email") return {
		htmlType: "email",
		inputMode: "email",
		placeholder
	};
	if (type === "url") return {
		htmlType: "url",
		inputMode: "url",
		placeholder
	};
	if (isDateTimeInlineFieldType(type)) return {
		htmlType: "text",
		placeholder: isRequired ? "Select date & time" : "NULL"
	};
	if (type === "bigint") return {
		htmlType: "text",
		inputMode: "numeric",
		placeholder
	};
	if (isNumericInlineFieldType(type)) return {
		htmlType: "number",
		inputMode: "numeric",
		min: col.min,
		max: col.max,
		step: type === "double" || type === "float" ? .1 : 1,
		placeholder
	};
	if ((type === "string" || type === "varchar") && col.size && col.size > 0) return {
		htmlType: "text",
		maxLength: col.size,
		placeholder
	};
	return {
		htmlType: "text",
		placeholder
	};
}
function rowCellValuesEqual(a, b) {
	if (a === b) return true;
	if (a === null || a === void 0) return b === null || b === void 0;
	if (b === null || b === void 0) return false;
	if (typeof a === "bigint" || typeof b === "bigint") try {
		return BigInt(String(a)) === BigInt(String(b));
	} catch {
		return false;
	}
	if (Array.isArray(a) || Array.isArray(b)) return JSON.stringify(a) === JSON.stringify(b);
	return a === b;
}
function formatDateTimeLocalForInput(d) {
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function valueToInlineEditString(value, columnInfo, columnKey) {
	if (value === null || value === void 0) return "";
	if (isDateTimeInlineFieldType(getInlineFieldType(columnInfo, value, columnKey)) && typeof value === "string") {
		const d = new Date(value);
		if (!Number.isNaN(d.getTime())) return formatDateTimeLocalForInput(d);
	}
	if (typeof value === "boolean") return value ? "true" : "false";
	return String(value);
}
function isEmptyDraft(raw) {
	const trimmed = raw.trim();
	return trimmed === "" || trimmed.toLowerCase() === "null";
}
function validateNumericRange(value, columnInfo, type) {
	if (type === "bigint") return null;
	const num = typeof value === "bigint" ? Number(value) : value;
	if (columnInfo.min !== void 0 && num < columnInfo.min) return `Value must be at least ${columnInfo.min}`;
	if (columnInfo.max !== void 0 && num > columnInfo.max) return `Value must be at most ${columnInfo.max}`;
	return null;
}
function parseAndValidateInlineCellInput(raw, columnInfo, columnKey) {
	const col = getColumnMeta(columnInfo);
	const type = getInlineFieldType(columnInfo, void 0, columnKey);
	const isRequired = isInlineColumnRequired(columnInfo);
	const trimmed = raw.trim();
	if (isEmptyDraft(raw)) {
		if (isRequired) return {
			ok: false,
			error: "This field is required"
		};
		return {
			ok: true,
			value: null
		};
	}
	if (type === "boolean" || type === "bool") return {
		ok: true,
		value: /^(true|1|yes)$/i.test(trimmed)
	};
	if (type === "enum") {
		const options = getEnumOptions(columnInfo);
		if (options.length > 0 && !options.includes(trimmed)) return {
			ok: false,
			error: "Select a valid option"
		};
		return {
			ok: true,
			value: trimmed
		};
	}
	if (type === "integer" || type === "int") {
		const n = parseInt(trimmed, 10);
		if (!Number.isFinite(n) || !/^-?\d+$/.test(trimmed)) return {
			ok: false,
			error: "Enter a valid integer"
		};
		const rangeError = validateNumericRange(n, col, type);
		if (rangeError) return {
			ok: false,
			error: rangeError
		};
		return {
			ok: true,
			value: n
		};
	}
	if (type === "bigint") try {
		return {
			ok: true,
			value: BigInt(trimmed)
		};
	} catch {
		return {
			ok: false,
			error: "Enter a valid bigint"
		};
	}
	if (type === "double" || type === "float" || type === "number") {
		const n = parseFloat(trimmed);
		if (!Number.isFinite(n)) return {
			ok: false,
			error: "Enter a valid number"
		};
		const rangeError = validateNumericRange(n, col, type);
		if (rangeError) return {
			ok: false,
			error: rangeError
		};
		return {
			ok: true,
			value: n
		};
	}
	if (isDateTimeInlineFieldType(type)) {
		const d = new Date(trimmed);
		if (Number.isNaN(d.getTime())) return {
			ok: false,
			error: "Enter a valid date and time"
		};
		return {
			ok: true,
			value: d.toISOString()
		};
	}
	if (type === "email") {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return {
			ok: false,
			error: "Enter a valid email address"
		};
		return {
			ok: true,
			value: trimmed
		};
	}
	if (type === "url") try {
		new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
		return {
			ok: true,
			value: trimmed
		};
	} catch {
		return {
			ok: false,
			error: "Enter a valid URL"
		};
	}
	if ((type === "string" || type === "varchar") && col.size && col.size > 0 && trimmed.length > col.size) return {
		ok: false,
		error: `Maximum length is ${col.size} characters`
	};
	return {
		ok: true,
		value: trimmed
	};
}
function parseAndValidateInlineCellValue(value, columnInfo, columnKey) {
	const type = getInlineFieldType(columnInfo, value, columnKey);
	if (value === null || value === void 0) return parseAndValidateInlineCellInput("", columnInfo, columnKey);
	if (type === "boolean" || type === "bool") return {
		ok: true,
		value: Boolean(value)
	};
	if (isDateTimeInlineFieldType(type) && typeof value === "string") {
		const d = new Date(value);
		if (Number.isNaN(d.getTime())) return {
			ok: false,
			error: "Enter a valid date and time"
		};
		return {
			ok: true,
			value: d.toISOString()
		};
	}
	return parseAndValidateInlineCellInput(String(value), columnInfo, columnKey);
}
function serializeRowDataForApi(data) {
	const out = {};
	for (const [key, value] of Object.entries(data)) if (typeof value === "bigint") out[key] = value.toString();
	else out[key] = value;
	return out;
}
function usesCollectionDocumentIds(kind) {
	return kind === DatabaseType.Documentsdb || kind === DatabaseType.Vectorsdb;
}
function groupEditsIntoUpdateOperations(edits, kind = DatabaseType.Tablesdb) {
	const byRow = /* @__PURE__ */ new Map();
	for (const edit of edits) {
		const key = `${edit.databaseId}:${edit.tableId}:${edit.rowId}`;
		const list = byRow.get(key);
		if (list) list.push(edit);
		else byRow.set(key, [edit]);
	}
	const operations = [];
	for (const rowEdits of byRow.values()) {
		const first = rowEdits[0];
		const data = {};
		for (const edit of rowEdits) {
			const serialized = serializeRowDataForApi({ [edit.columnKey]: edit.value });
			data[edit.columnKey] = serialized[edit.columnKey];
		}
		operations.push(usesCollectionDocumentIds(kind) ? {
			action: "update",
			databaseId: first.databaseId,
			collectionId: first.tableId,
			documentId: first.rowId,
			data
		} : {
			action: "update",
			databaseId: first.databaseId,
			tableId: first.tableId,
			rowId: first.rowId,
			data
		});
	}
	return operations;
}
export { postgresRelationSupportsRowCtid as $, parseInt64Value as A, buildPostgresTableColumnsForRowsSql as B, getTableColumnStatusBadgeVariant as C, isValidInt64 as D, isTextType as E, buildPostgresListTablesSql as F, executionResultRows as G, buildPostgresTableIndexesSql as H, buildPostgresSchemaEnumsSql as I, isPostgresEnumUsedInSchema as J, formatPostgresQueryDurationMs as K, buildPostgresSelectSql as L, buildPostgresListSchemasCountSql as M, buildPostgresListSchemasSql as N, mergeTablesDbSystemColumnsIntoList as O, buildPostgresListTablesCountSql as P, peelLeadingPostgresSqlComments as Q, buildPostgresSingleRequestDdlSql as R, formatInt64Bound as S, isTablesDbSystemColumnKey as T, buildPostgresTableInfoSql as U, buildPostgresTableColumnsSql as V, escapePostgresLikePattern as W, isPostgresPrimaryKeyColumn as X, isPostgresPrimaryIndex as Y, isPostgresUniqueColumn as Z, INT64_MAX as _, groupEditsIntoUpdateOperations as a, stripLeadingPostgresSqlComments as at, formatColumnNumericDisplay as b, isInlineColumnRequired as c, parseAndValidateInlineCellInput as d, prefixPostgresSqlComment as et, parseAndValidateInlineCellValue as f, valueToInlineEditString as g, serializeRowDataForApi as h, getSystemDateColumnInfo as i, sortPostgresTableIndexes as it, POSTGRES_SIDEBAR_LIST_PAGE_SIZE as j, normalizeTableColumnStatus as k, isNumericInlineFieldType as l, rowCellValuesEqual as m, getInlineFieldType as n, sortPostgresSchemaEnums as nt, isColumnInlineEditable as o, resolveInlineColumnInfo as p, formatPostgresSql as q, getInlineInputConfig as r, sortPostgresTableColumns as rt, isDateTimeInlineFieldType as s, getEnumOptions as t, quotePostgresStringLiteral as tt, makePendingEditKey as u, INT64_MIN as v, isTableColumnStatusPending as w, formatColumnRangeDisplay as x, columnTypeSupportsNumericRange as y, buildPostgresTableAutocompleteColumnsSql as z };
