import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { m as quotePostgresIdentifier } from "./postgres-database-routes-CyTsPbzl.js";
import { W as escapePostgresLikePattern, X as isPostgresPrimaryKeyColumn, l as isNumericInlineFieldType, s as isDateTimeInlineFieldType, tt as quotePostgresStringLiteral } from "./database-row-inline-edits-CdyGeTxj.js";
import { m as quoteMysqlIdentifier } from "./mysql-database-routes-CVHkJzTt.js";
import { a as isOpenApiPlaceholderExample, t as buildSampleValue } from "./parse-spec-DW3UGcrS.js";
import { Query } from "@appwrite.io/console";
import { format } from "sql-formatter";
import { z } from "zod";
function quoteSqlValue$1(value) {
	if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
	if (typeof value === "number") return String(value);
	return quotePostgresStringLiteral(String(value));
}
function likePattern$1(value, mode) {
	const escaped = escapePostgresLikePattern(value);
	if (mode === "starts") return `${escaped}%`;
	if (mode === "ends") return `%${escaped}`;
	return `%${escaped}%`;
}
function ilikeCondition(columnId, pattern, negate = false) {
	const column = quotePostgresIdentifier(columnId);
	const patternLit = quotePostgresStringLiteral(pattern);
	const escapeLit = quotePostgresStringLiteral("\\");
	return negate ? `${column}::text NOT ILIKE ${patternLit} ESCAPE ${escapeLit}` : `${column}::text ILIKE ${patternLit} ESCAPE ${escapeLit}`;
}
function parseBetweenValue$2(value) {
	const parts = (typeof value === "string" ? value : Array.isArray(value) ? value.join(",") : String(value ?? "")).split(",").map((p) => p.trim()).filter(Boolean);
	if (parts.length >= 2) return [parts[0], parts[1]];
	return null;
}
function buildPostgresFilterSqlCondition(operatorKey, columnId, value, _columnType) {
	const column = quotePostgresIdentifier(columnId);
	const safeVal = value ?? "";
	switch (operatorKey) {
		case "equal":
			if (value === null || value === void 0) return `${column} IS NULL`;
			return `${column} = ${quoteSqlValue$1(value)}`;
		case "notEqual":
			if (value === null || value === void 0) return `${column} IS NOT NULL`;
			return `${column} <> ${quoteSqlValue$1(value)}`;
		case "startsWith": return ilikeCondition(columnId, likePattern$1(String(safeVal), "starts"));
		case "notStartsWith": return ilikeCondition(columnId, likePattern$1(String(safeVal), "starts"), true);
		case "endsWith": return ilikeCondition(columnId, likePattern$1(String(safeVal), "ends"));
		case "notEndsWith": return ilikeCondition(columnId, likePattern$1(String(safeVal), "ends"), true);
		case "contains":
		case "search": return ilikeCondition(columnId, likePattern$1(String(safeVal), "contains"));
		case "notContains":
		case "notSearch": return ilikeCondition(columnId, likePattern$1(String(safeVal), "contains"), true);
		case "regex": return `${column}::text ~ ${quotePostgresStringLiteral(String(safeVal))}`;
		case "greaterThan": return `${column} > ${quoteSqlValue$1(safeVal)}`;
		case "greaterThanEqual": return `${column} >= ${quoteSqlValue$1(safeVal)}`;
		case "lessThan": return `${column} < ${quoteSqlValue$1(safeVal)}`;
		case "lessThanEqual": return `${column} <= ${quoteSqlValue$1(safeVal)}`;
		case "between": {
			const pair = parseBetweenValue$2(value);
			if (!pair) return void 0;
			return `${column} BETWEEN ${quoteSqlValue$1(pair[0])} AND ${quoteSqlValue$1(pair[1])}`;
		}
		case "notBetween": {
			const pair = parseBetweenValue$2(value);
			if (!pair) return void 0;
			return `${column} NOT BETWEEN ${quoteSqlValue$1(pair[0])} AND ${quoteSqlValue$1(pair[1])}`;
		}
		case "isNull": return `${column} IS NULL`;
		case "isNotNull": return `${column} IS NOT NULL`;
		case "exists": return `${column} IS NOT NULL`;
		case "notExists": return `${column} IS NULL`;
		default:
			if (value == null) return void 0;
			return `${column} = ${quoteSqlValue$1(value)}`;
	}
}
function buildPostgresFilterWhereClause(filterKeys) {
	const conditions = filterKeys.map((key) => buildPostgresFilterSqlCondition(key.o, key.c, key.v)).filter((condition) => Boolean(condition));
	if (conditions.length === 0) return void 0;
	return conditions.map((condition) => `(${condition})`).join(" AND ");
}
function buildPostgresTextSearchWhereClause(search, textColumnNames) {
	const trimmed = search.trim();
	if (!trimmed || textColumnNames.length === 0) return void 0;
	const patternLit = quotePostgresStringLiteral(likePattern$1(trimmed, "contains"));
	const escapeLit = quotePostgresStringLiteral("\\");
	return `(${textColumnNames.map((column) => `${quotePostgresIdentifier(column)}::text ILIKE ${patternLit} ESCAPE ${escapeLit}`).join(" OR ")})`;
}
function combinePostgresWhereClauses(...clauses) {
	const parts = clauses.map((clause) => clause?.trim()).filter((clause) => Boolean(clause));
	if (parts.length === 0) return void 0;
	return parts.map((part) => `(${part})`).join(" AND ");
}
var LENGTH_PROPERTY$1 = (defaults) => ({
	key: "length",
	label: defaults.label ?? "Length",
	hint: defaults.hint,
	unit: defaults.unit,
	min: defaults.min,
	max: defaults.max,
	defaultValue: defaults.defaultValue,
	optional: defaults.optional,
	optionalEmptyLabel: defaults.optionalEmptyLabel
});
var NUMERIC_PRECISION_PROPERTY$1 = (defaultValue = 10) => ({
	key: "numericPrecision",
	label: "Precision",
	hint: "Total number of digits.",
	unit: "digits",
	min: 1,
	max: 1e3,
	defaultValue
});
var NUMERIC_SCALE_PROPERTY$1 = (defaultValue = 0) => ({
	key: "numericScale",
	label: "Scale",
	hint: "Digits after the decimal point.",
	unit: "digits",
	min: 0,
	max: 1e3,
	defaultValue
});
var DATETIME_PRECISION_PROPERTY$1 = {
	key: "datetimePrecision",
	label: "Fractional seconds",
	hint: "Number of digits after the decimal point in seconds.",
	unit: "decimal places",
	min: 0,
	max: 6,
	optional: true,
	optionalEmptyLabel: "default (6)"
};
const POSTGRES_COLUMN_TYPE_DEFINITIONS = [
	{
		id: "text",
		label: "Text",
		description: "Unlimited length text",
		group: "Text",
		properties: [],
		searchTerms: ["text", "string"]
	},
	{
		id: "varchar",
		label: "Varchar",
		description: "Variable-length text",
		group: "Text",
		properties: [LENGTH_PROPERTY$1({
			hint: "Maximum number of characters stored in this column.",
			unit: "characters",
			min: 1,
			max: 10485760,
			defaultValue: 255
		})],
		searchTerms: ["character varying", "varchar"]
	},
	{
		id: "char",
		label: "Char",
		description: "Fixed-length text",
		group: "Text",
		properties: [LENGTH_PROPERTY$1({
			hint: "Fixed number of characters. Values are padded or truncated to this length.",
			unit: "characters",
			min: 1,
			max: 10485760,
			defaultValue: 1
		})],
		searchTerms: [
			"character",
			"bpchar",
			"char"
		]
	},
	{
		id: "smallint",
		label: "Smallint",
		description: "2-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: ["int2", "smallint"]
	},
	{
		id: "integer",
		label: "Integer",
		description: "4-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: [
			"int4",
			"integer",
			"int"
		]
	},
	{
		id: "bigint",
		label: "Bigint",
		description: "8-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: ["int8", "bigint"]
	},
	{
		id: "smallserial",
		label: "Smallserial",
		description: "Auto-incrementing smallint",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["smallserial", "serial2"]
	},
	{
		id: "serial",
		label: "Serial",
		description: "Auto-incrementing integer",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["serial", "serial4"]
	},
	{
		id: "bigserial",
		label: "Bigserial",
		description: "Auto-incrementing bigint",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["bigserial", "serial8"]
	},
	{
		id: "real",
		label: "Real",
		description: "Single-precision float",
		group: "Decimal",
		properties: [],
		searchTerms: ["float4", "real"]
	},
	{
		id: "double precision",
		label: "Double precision",
		description: "Double-precision float",
		group: "Decimal",
		properties: [],
		searchTerms: [
			"float8",
			"double precision",
			"float"
		]
	},
	{
		id: "numeric",
		label: "Numeric",
		description: "Exact decimal number",
		group: "Decimal",
		properties: [NUMERIC_PRECISION_PROPERTY$1(), NUMERIC_SCALE_PROPERTY$1()],
		searchTerms: ["numeric", "decimal"]
	},
	{
		id: "boolean",
		label: "Boolean",
		description: "True or false",
		group: "Boolean",
		properties: [],
		searchTerms: ["bool", "boolean"]
	},
	{
		id: "date",
		label: "Date",
		description: "Calendar date",
		group: "Date & time",
		properties: []
	},
	{
		id: "time",
		label: "Time",
		description: "Time of day",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY$1],
		searchTerms: ["time without time zone"]
	},
	{
		id: "time with time zone",
		label: "Time with time zone",
		description: "Time with time zone",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY$1],
		searchTerms: ["timetz", "time with time zone"]
	},
	{
		id: "timestamp",
		label: "Timestamp",
		description: "Date and time",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY$1],
		searchTerms: ["timestamp without time zone"]
	},
	{
		id: "timestamp with time zone",
		label: "Timestamp with time zone",
		description: "Date and time with time zone",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY$1],
		searchTerms: ["timestamptz", "timestamp with time zone"]
	},
	{
		id: "interval",
		label: "Interval",
		description: "Time span",
		group: "Date & time",
		properties: []
	},
	{
		id: "uuid",
		label: "UUID",
		description: "Unique identifier",
		group: "Structured",
		properties: [],
		searchTerms: ["uuid"]
	},
	{
		id: "json",
		label: "JSON",
		description: "JSON stored as text",
		group: "Structured",
		properties: []
	},
	{
		id: "jsonb",
		label: "JSONB",
		description: "Binary JSON",
		group: "Structured",
		properties: []
	},
	{
		id: "bytea",
		label: "Bytea",
		description: "Binary data",
		group: "Structured",
		properties: []
	},
	{
		id: "bit",
		label: "Bit",
		description: "Fixed-length bit string",
		group: "Structured",
		properties: [LENGTH_PROPERTY$1({
			label: "Length (bits)",
			hint: "Number of bits stored in this column.",
			unit: "bits",
			min: 1,
			max: 83886080,
			defaultValue: 1,
			optional: true,
			optionalEmptyLabel: "1 bit"
		})],
		searchTerms: ["bit"]
	},
	{
		id: "bit varying",
		label: "Bit varying",
		description: "Variable-length bit string",
		group: "Structured",
		properties: [LENGTH_PROPERTY$1({
			label: "Max length (bits)",
			hint: "Maximum number of bits stored in this column.",
			unit: "bits",
			min: 1,
			max: 83886080,
			optional: true,
			optionalEmptyLabel: "unlimited"
		})],
		searchTerms: ["varbit", "bit varying"]
	},
	{
		id: "inet",
		label: "Inet",
		description: "IPv4 or IPv6 address",
		group: "Network",
		properties: []
	},
	{
		id: "cidr",
		label: "CIDR",
		description: "IPv4 or IPv6 network",
		group: "Network",
		properties: []
	},
	{
		id: "macaddr",
		label: "MAC address",
		description: "MAC address",
		group: "Network",
		properties: []
	}
];
var POSTGRES_COLUMN_TYPE_BY_ID = new Map(POSTGRES_COLUMN_TYPE_DEFINITIONS.map((definition) => [definition.id, definition]));
const POSTGRES_COLUMN_TYPE_GROUPS = [
	"Text",
	"Integer",
	"Decimal",
	"Boolean",
	"Date & time",
	"Structured",
	"Network"
];
var DATETIME_TYPE_IDS$1 = new Set([
	"time",
	"time with time zone",
	"timestamp",
	"timestamp with time zone"
]);
function parseOptionalInt$1(value) {
	if (value == null || value === "") return void 0;
	const parsed = typeof value === "number" ? value : Number.parseInt(String(value), 10);
	return Number.isFinite(parsed) ? parsed : void 0;
}
function getPostgresColumnTypeDefinition(typeId) {
	return POSTGRES_COLUMN_TYPE_BY_ID.get(typeId);
}
function getPostgresColumnTypePropertyValue(state, key) {
	return state[key];
}
function formatLimitNumber$1(value) {
	return value.toLocaleString();
}
function formatPostgresColumnTypePropertyLimits(property) {
	const min = formatLimitNumber$1(property.min);
	const max = formatLimitNumber$1(property.max);
	const unit = property.unit ? ` ${property.unit}` : "";
	if (property.min === property.max) return `${min}${unit}`;
	return `${min} to ${max}${unit}`;
}
function getPostgresColumnTypePropertyPlaceholder(property) {
	if (!property.optional) return property.defaultValue != null ? String(property.defaultValue) : void 0;
	return property.optionalEmptyLabel ?? "Default";
}
function getPostgresColumnTypePropertyRangeError(property, value) {
	if (value == null) return property.optional ? null : `${property.label} is required.`;
	if (!Number.isInteger(value)) return `${property.label} must be a whole number.`;
	if (value < property.min || value > property.max) return `${property.label} must be between ${formatLimitNumber$1(property.min)} and ${formatLimitNumber$1(property.max)}${property.unit ? ` ${property.unit}` : ""}.`;
	return null;
}
function createDefaultPostgresColumnTypeState(typeId = "text") {
	const definition = getPostgresColumnTypeDefinition(typeId);
	const state = { typeId };
	for (const property of definition.properties) if (property.defaultValue != null) state[property.key] = property.defaultValue;
	return state;
}
function appendPrecisionSuffix$1(baseType, datetimePrecision) {
	if (datetimePrecision == null) return baseType;
	return `${baseType}(${datetimePrecision})`;
}
function buildPostgresColumnBaseTypeSql(state) {
	switch (state.typeId) {
		case "varchar": return `varchar(${state.length ?? 255})`;
		case "char": return `char(${state.length ?? 1})`;
		case "numeric": {
			const precision = state.numericPrecision;
			const scale = state.numericScale;
			if (precision != null && scale != null) return `numeric(${precision},${scale})`;
			if (precision != null) return `numeric(${precision})`;
			return "numeric";
		}
		case "time": return appendPrecisionSuffix$1("time", state.datetimePrecision);
		case "time with time zone": return appendPrecisionSuffix$1("time with time zone", state.datetimePrecision);
		case "timestamp": return appendPrecisionSuffix$1("timestamp", state.datetimePrecision);
		case "timestamp with time zone": return appendPrecisionSuffix$1("timestamp with time zone", state.datetimePrecision);
		case "bit": return state.length != null ? `bit(${state.length})` : "bit";
		case "bit varying": return state.length != null ? `bit varying(${state.length})` : "bit varying";
		default: return state.typeId;
	}
}
function buildPostgresColumnTypeSql(state) {
	const base = buildPostgresColumnBaseTypeSql(state);
	return state.isArray ? `${base}[]` : base;
}
function isPostgresSerialColumnType(typeId) {
	return typeId === "serial" || typeId === "bigserial" || typeId === "smallserial";
}
function formatPostgresColumnTypeLabel(state) {
	const definition = getPostgresColumnTypeDefinition(state.typeId);
	const baseSql = buildPostgresColumnBaseTypeSql(state);
	let label = definition.label;
	if (baseSql !== state.typeId) {
		const paramsMatch = baseSql.match(/\((.+)\)$/);
		if (paramsMatch) label = `${definition.label} (${paramsMatch[1]})`;
	}
	return state.isArray ? `${label}[]` : label;
}
function normalizeDataTypeLabel$1(value) {
	return value.trim().toLowerCase().replace(/\s+/g, " ");
}
function parsePrecisionFromDataType$1(dataType) {
	const match = dataType.match(/\((\d+)\)$/);
	if (!match) return void 0;
	return parseOptionalInt$1(match[1]);
}
var POSTGRES_ARRAY_UDT_TO_BASE = {
	int2: "int2",
	int4: "int4",
	int8: "int8",
	float4: "float4",
	float8: "float8",
	bool: "bool",
	bpchar: "bpchar",
	varchar: "varchar",
	text: "text",
	numeric: "numeric",
	uuid: "uuid",
	json: "json",
	jsonb: "jsonb",
	bytea: "bytea",
	date: "date",
	time: "time",
	timetz: "timetz",
	timestamp: "timestamp",
	timestamptz: "timestamptz",
	interval: "interval",
	bit: "bit",
	varbit: "varbit",
	inet: "inet",
	cidr: "cidr",
	macaddr: "macaddr"
};
function parsePostgresColumnBaseTypeState(udt, dataType, length, numericPrecision, numericScale, datetimePrecision) {
	if (udt === "varchar" || dataType.startsWith("character varying")) return {
		typeId: "varchar",
		length: length ?? parsePrecisionFromDataType$1(dataType) ?? 255
	};
	if (udt === "bpchar" || dataType === "character") return {
		typeId: "char",
		length: length ?? parsePrecisionFromDataType$1(dataType) ?? 1
	};
	if (udt === "int2" || dataType === "smallint") return { typeId: "smallint" };
	if (udt === "int4" || dataType === "integer") return { typeId: "integer" };
	if (udt === "int8" || dataType === "bigint") return { typeId: "bigint" };
	if (udt === "float4" || dataType === "real") return { typeId: "real" };
	if (udt === "float8" || dataType === "double precision") return { typeId: "double precision" };
	if (udt === "numeric" || dataType === "numeric") return {
		typeId: "numeric",
		numericPrecision,
		numericScale
	};
	if (udt === "bool" || dataType === "boolean") return { typeId: "boolean" };
	if (dataType === "timestamp with time zone" || udt === "timestamptz") return {
		typeId: "timestamp with time zone",
		datetimePrecision
	};
	if (dataType.startsWith("timestamp without time zone") || udt === "timestamp") return {
		typeId: "timestamp",
		datetimePrecision
	};
	if (dataType === "time with time zone" || udt === "timetz") return {
		typeId: "time with time zone",
		datetimePrecision
	};
	if (dataType.startsWith("time without time zone") || udt === "time") return {
		typeId: "time",
		datetimePrecision
	};
	if (udt === "bit") return {
		typeId: "bit",
		length: length ?? parsePrecisionFromDataType$1(dataType)
	};
	if (udt === "varbit" || dataType.startsWith("bit varying")) return {
		typeId: "bit varying",
		length: length ?? parsePrecisionFromDataType$1(dataType)
	};
	const directMatch = POSTGRES_COLUMN_TYPE_BY_ID.get(udt || dataType);
	if (directMatch) return createDefaultPostgresColumnTypeState(directMatch.id);
	return createDefaultPostgresColumnTypeState("text");
}
function parsePostgresColumnTypeFromRow(row) {
	const rawUdt = row.udt_name.toLowerCase();
	const rawDataType = normalizeDataTypeLabel$1(row.data_type);
	const isArray = rawDataType === "array" || rawDataType.endsWith("[]") || rawUdt.startsWith("_");
	const udt = isArray && rawUdt.startsWith("_") ? POSTGRES_ARRAY_UDT_TO_BASE[rawUdt.slice(1)] ?? rawUdt.slice(1) : rawUdt;
	const dataType = isArray ? normalizeDataTypeLabel$1(rawDataType.replace(/\[\]$/, "")) : rawDataType;
	const length = parseOptionalInt$1(row.character_maximum_length);
	const numericPrecision = parseOptionalInt$1(row.numeric_precision);
	const numericScale = parseOptionalInt$1(row.numeric_scale);
	const datetimePrecision = parseOptionalInt$1(row.datetime_precision) ?? parsePrecisionFromDataType$1(dataType);
	const state = parsePostgresColumnBaseTypeState(udt, dataType === "array" ? udt : dataType, length, numericPrecision, numericScale, datetimePrecision);
	if (isArray) state.isArray = true;
	return state;
}
function postgresColumnTypeStatesEqual(a, b) {
	return buildPostgresColumnTypeSql(a).toLowerCase() === buildPostgresColumnTypeSql(b).toLowerCase();
}
function validatePostgresColumnTypeState(state) {
	const definition = getPostgresColumnTypeDefinition(state.typeId);
	for (const property of definition.properties) {
		const value = getPostgresColumnTypePropertyValue(state, property.key);
		const rangeError = getPostgresColumnTypePropertyRangeError(property, value);
		if (rangeError) return rangeError;
		if (property.key === "numericScale" && value != null && state.numericPrecision != null && value > state.numericPrecision) return "Scale cannot be greater than precision.";
	}
	return null;
}
function getPostgresColumnDefaultPlaceholder(typeId) {
	switch (typeId) {
		case "boolean": return "NULL";
		case "uuid": return "gen_random_uuid()";
		case "timestamp with time zone":
		case "timestamp": return "now()";
		case "json":
		case "jsonb": return "'{}'::jsonb";
		default: return "NULL";
	}
}
function getPostgresColumnTypeSearchValue(definition) {
	return [
		definition.label,
		definition.description,
		definition.id,
		definition.group,
		...definition.searchTerms ?? []
	].join(" ");
}
function isPostgresDatetimeType(typeId) {
	return DATETIME_TYPE_IDS$1.has(typeId);
}
var NON_INLINE_EDITABLE_TYPES$1 = new Set([
	"json",
	"jsonb",
	"bytea",
	"interval",
	"bit",
	"bit varying"
]);
function getPostgresColumnEditMeta(column) {
	const typeState = parsePostgresColumnTypeFromRow(column);
	return {
		typeId: typeState.typeId,
		dataType: column.data_type,
		udtName: column.udt_name,
		nullable: column.is_nullable === "YES",
		isPrimaryKey: isPostgresPrimaryKeyColumn(column),
		hasDefault: column.column_default != null && column.column_default !== "",
		length: typeState.length,
		numericPrecision: typeState.numericPrecision,
		numericScale: typeState.numericScale
	};
}
function getPostgresInlineFieldType(meta, value) {
	if (meta.typeId === "boolean") return "boolean";
	if (isPostgresDatetimeType(meta.typeId)) return "datetime";
	if (meta.typeId === "smallint" || meta.typeId === "integer" || meta.typeId === "bigint" || meta.typeId === "smallserial" || meta.typeId === "serial" || meta.typeId === "bigserial") return "integer";
	if (meta.typeId === "real" || meta.typeId === "double precision" || meta.typeId === "numeric") return "double";
	if (meta.typeId === "uuid") return "string";
	if (meta.typeId === "json" || meta.typeId === "jsonb") return "json";
	if (meta.typeId === "bytea") return "bytea";
	if (Array.isArray(value)) return "array";
	return "string";
}
function columnHasExplicitDefault$1(column) {
	return column.column_default != null && column.column_default !== "";
}
function postgresColumnAutoGeneratesOnInsert(column) {
	if (column.serial_sequence?.trim()) return true;
	const identity = String(column.is_identity ?? "").toUpperCase();
	if (identity === "YES" || identity === "TRUE" || identity === "T") return true;
	const generation = String(column.identity_generation ?? "").toUpperCase();
	if (generation === "ALWAYS" || generation === "BY DEFAULT") return true;
	const defaultValue = column.column_default?.toLowerCase() ?? "";
	if (!defaultValue) return false;
	return defaultValue.includes("nextval(") || defaultValue.includes("gen_random_uuid(") || defaultValue.includes("uuid_generate_");
}
function postgresColumnCanOmitOnCreate(column) {
	if (postgresColumnAutoGeneratesOnInsert(column)) return true;
	if (columnHasExplicitDefault$1(column) && !isPostgresPrimaryKeyColumn(column)) return true;
	return false;
}
function isPostgresColumnSystemGenerated(column) {
	if (String(column.identity_generation ?? "").toUpperCase() === "ALWAYS") return true;
	return (column.column_default?.toLowerCase() ?? "").includes("generated always");
}
function shouldOmitPostgresColumnOnRowCreate(column) {
	return isPostgresColumnSystemGenerated(column);
}
function isPostgresColumnRequiredOnCreate(column) {
	if (postgresColumnAutoGeneratesOnInsert(column)) return false;
	if (column.is_nullable === "YES") return false;
	if (isPostgresPrimaryKeyColumn(column)) return true;
	if (columnHasExplicitDefault$1(column)) return false;
	return true;
}
function filterPostgresRowCreateValues(values, columns) {
	const omitColumns = new Set(columns.filter((column) => shouldOmitPostgresColumnOnRowCreate(column)).map((column) => column.column_name));
	const filtered = {};
	for (const [columnName, value] of Object.entries(values)) {
		if (omitColumns.has(columnName) || value === void 0) continue;
		filtered[columnName] = value;
	}
	return filtered;
}
function isPostgresColumnInlineEditable(column) {
	if (isPostgresColumnSystemGenerated(column)) return false;
	const meta = getPostgresColumnEditMeta(column);
	if (NON_INLINE_EDITABLE_TYPES$1.has(meta.typeId)) return false;
	return true;
}
function isPostgresColumnRequired(column) {
	return column.is_nullable !== "YES";
}
function valueToPostgresEditString(value, _meta) {
	if (value === null || value === void 0) return "";
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "object") return JSON.stringify(value, null, 2);
	return String(value);
}
function parseBooleanInput$1(raw) {
	const normalized = raw.trim().toLowerCase();
	if (!normalized) return {
		ok: true,
		value: null
	};
	if ([
		"true",
		"t",
		"1",
		"yes"
	].includes(normalized)) return {
		ok: true,
		value: true
	};
	if ([
		"false",
		"f",
		"0",
		"no"
	].includes(normalized)) return {
		ok: true,
		value: false
	};
	return {
		ok: false,
		error: "Enter true or false."
	};
}
function parseNumericInput$1(raw, meta, integerOnly) {
	const trimmed = raw.trim();
	if (!trimmed) return {
		ok: true,
		value: null
	};
	const parsed = integerOnly ? Number.parseInt(trimmed, 10) : Number(trimmed);
	if (!Number.isFinite(parsed)) return {
		ok: false,
		error: "Enter a valid number."
	};
	if (meta.numericPrecision != null && integerOnly) {
		const max = 10 ** meta.numericPrecision - 1;
		if (Math.abs(parsed) > max) return {
			ok: false,
			error: `Value exceeds allowed range.`
		};
	}
	return {
		ok: true,
		value: parsed
	};
}
function parseJsonInput$1(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return {
		ok: true,
		value: null
	};
	try {
		return {
			ok: true,
			value: JSON.parse(trimmed)
		};
	} catch {
		return {
			ok: false,
			error: "Enter valid JSON."
		};
	}
}
function parseAndValidatePostgresCellInput(raw, column) {
	const meta = getPostgresColumnEditMeta(column);
	const trimmed = raw.trim();
	const required = isPostgresColumnRequired(column);
	if (!trimmed) {
		if (required) return {
			ok: false,
			error: "This field is required."
		};
		return {
			ok: true,
			value: null
		};
	}
	const fieldType = getPostgresInlineFieldType(meta);
	if (fieldType === "boolean") return parseBooleanInput$1(raw);
	if (fieldType === "json") return parseJsonInput$1(raw);
	if (isDateTimeInlineFieldType(fieldType)) {
		const date = new Date(trimmed);
		if (Number.isNaN(date.getTime())) return {
			ok: false,
			error: "Enter a valid date and time."
		};
		return {
			ok: true,
			value: trimmed
		};
	}
	if (isNumericInlineFieldType(fieldType)) return parseNumericInput$1(raw, meta, fieldType === "integer" || fieldType === "bigint");
	if (meta.length != null && trimmed.length > meta.length) return {
		ok: false,
		error: `Maximum length is ${meta.length} characters.`
	};
	return {
		ok: true,
		value: trimmed
	};
}
function makePostgresPendingEditKey(tableId, rowKey, columnKey) {
	return `${tableId}:${rowKey}:${columnKey}`;
}
function groupPostgresEditsByRow(edits) {
	const grouped = /* @__PURE__ */ new Map();
	for (const edit of edits) {
		const existing = grouped.get(edit.rowKey);
		if (existing) {
			existing.changes[edit.columnKey] = edit.value;
			continue;
		}
		grouped.set(edit.rowKey, {
			identity: edit.identity,
			changes: { [edit.columnKey]: edit.value }
		});
	}
	return grouped;
}
function mapPostgresTypeToFilterType(column) {
	const fieldType = getPostgresInlineFieldType(getPostgresColumnEditMeta(column));
	switch (fieldType) {
		case "boolean": return "boolean";
		case "integer":
		case "bigint": return fieldType;
		case "double": return "double";
		case "datetime": return "datetime";
		default: return "string";
	}
}
function postgresRowsFilterColumnsFromTableColumns(columns) {
	return columns.map((column) => {
		const type = mapPostgresTypeToFilterType(column);
		return {
			id: column.column_name,
			title: column.column_name,
			type,
			optional: column.is_nullable === "YES"
		};
	});
}
function buildPostgresRowsListWhereClause(filterKeys, search, columns) {
	const filterWhere = filterKeys?.length ? buildPostgresFilterWhereClause(filterKeys) : void 0;
	const textColumns = columns.filter((column) => {
		const type = column.data_type.toLowerCase();
		return type.includes("char") || type.includes("text") || type === "uuid" || type.includes("json");
	}).map((column) => column.column_name);
	return combinePostgresWhereClauses(filterWhere, search?.trim() ? buildPostgresTextSearchWhereClause(search, textColumns) : void 0);
}
var MYSQL_TABLES_SYSTEM_SCHEMA_FILTER = `
  TABLE_SCHEMA NOT IN ('mysql', 'information_schema', 'performance_schema', 'sys')
`.trim();
const MYSQL_SIDEBAR_LIST_PAGE_SIZE = 50;
function quoteMysqlStringLiteral(value) {
	return `'${value.replace(/'/g, "''")}'`;
}
function stripLeadingMysqlSqlComments(sql) {
	return peelLeadingMysqlSqlComments(sql).sqlWithoutLeadingComments;
}
function peelLeadingMysqlSqlComments(sql) {
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
function prefixMysqlSqlComment(sql, comment) {
	const trimmedSql = sql.trim();
	if (!trimmedSql) return trimmedSql;
	const trimmedComment = comment.trim().replace(/\s+/g, " ");
	if (!trimmedComment) return trimmedSql;
	return `-- ${trimmedComment}\n${trimmedSql}`;
}
function stripTrailingMysqlSqlSemicolon(sql) {
	return sql.trim().replace(/;\s*$/, "");
}
function buildMysqlSingleRequestDdlSql(statements, traceComment) {
	const normalized = statements.map((statement) => stripTrailingMysqlSqlSemicolon(statement)).filter(Boolean);
	if (normalized.length === 0) return "";
	if (normalized.length === 1) return prefixMysqlSqlComment(normalized[0], traceComment);
	return prefixMysqlSqlComment(normalized.join(";\n"), traceComment);
}
function escapeMysqlLikePattern(value) {
	return value.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");
}
function appendMysqlSqlLimitOffset(sql, limit, offset) {
	if (limit == null || !Number.isFinite(limit)) return sql;
	return `${sql}\nLIMIT ${Math.max(1, Math.floor(limit))} OFFSET ${offset != null && Number.isFinite(offset) ? Math.max(0, Math.floor(offset)) : 0}`;
}
function mysqlLikeCondition(column, pattern) {
	return `LOWER(${column}) LIKE LOWER(${quoteMysqlStringLiteral(pattern)}) ESCAPE ${quoteMysqlStringLiteral("\\")}`;
}
function buildMysqlListSchemasSql(options) {
	const conditions = [];
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapeMysqlLikePattern(search)}%`;
		conditions.push(mysqlLikeCondition("SCHEMA_NAME", pattern));
	}
	return prefixMysqlSqlComment(appendMysqlSqlLimitOffset(`
SELECT CONVERT(SCHEMA_NAME USING utf8mb4) AS schema_name
FROM information_schema.SCHEMATA
${conditions.length > 0 ? `WHERE ${conditions.join("\n  AND ")}` : ""}
ORDER BY SCHEMA_NAME
`.trim(), options?.limit, options?.offset), "List database schemas");
}
function buildMysqlListSchemasCountSql(options) {
	const conditions = [];
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapeMysqlLikePattern(search)}%`;
		conditions.push(mysqlLikeCondition("SCHEMA_NAME", pattern));
	}
	return prefixMysqlSqlComment(`
SELECT COUNT(*) AS total
FROM information_schema.SCHEMATA
${conditions.length > 0 ? `WHERE ${conditions.join("\n  AND ")}` : ""}
`.trim(), "Count database schemas");
}
function buildMysqlListTablesSql(options) {
	const conditions = [`TABLE_TYPE IN ('BASE TABLE', 'VIEW')`];
	const schema = options?.schema?.trim();
	if (schema) conditions.push(`TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}`);
	else conditions.push(MYSQL_TABLES_SYSTEM_SCHEMA_FILTER);
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapeMysqlLikePattern(search)}%`;
		conditions.push(mysqlLikeCondition("TABLE_NAME", pattern));
	}
	return prefixMysqlSqlComment(appendMysqlSqlLimitOffset(`
SELECT
  TABLE_SCHEMA AS table_schema,
  TABLE_NAME AS table_name,
  TABLE_TYPE AS table_type
FROM information_schema.TABLES
WHERE ${conditions.join("\n  AND ")}
ORDER BY TABLE_SCHEMA, TABLE_NAME
`.trim(), options?.limit, options?.offset), "List tables and views");
}
function buildMysqlListTablesCountSql(options) {
	const conditions = [`TABLE_TYPE IN ('BASE TABLE', 'VIEW')`];
	const schema = options?.schema?.trim();
	if (schema) conditions.push(`TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}`);
	else conditions.push(MYSQL_TABLES_SYSTEM_SCHEMA_FILTER);
	const search = options?.search?.trim();
	if (search) {
		const pattern = `%${escapeMysqlLikePattern(search)}%`;
		conditions.push(mysqlLikeCondition("TABLE_NAME", pattern));
	}
	return prefixMysqlSqlComment(`
SELECT COUNT(*) AS total
FROM information_schema.TABLES
WHERE ${conditions.join("\n  AND ")}
`.trim(), "Count tables and views");
}
function isMysqlTruthyFlag(value) {
	if (value === true) return true;
	const normalized = String(value ?? "").trim().toLowerCase();
	return normalized === "true" || normalized === "t" || normalized === "1";
}
function isMysqlPrimaryKeyColumn(column) {
	return isMysqlTruthyFlag(column.is_primary_key);
}
function isMysqlUniqueColumn(column) {
	return isMysqlTruthyFlag(column.is_unique);
}
function sortMysqlTableColumns(columns) {
	return [...columns].sort((a, b) => {
		const aPrimary = isMysqlPrimaryKeyColumn(a);
		if (aPrimary !== isMysqlPrimaryKeyColumn(b)) return aPrimary ? -1 : 1;
		return Number(a.ordinal_position) - Number(b.ordinal_position);
	});
}
function isMysqlPrimaryIndex(index) {
	const value = index.is_primary;
	return value === true || value === "true" || value === "t" || value === 1 || value === "1";
}
function sortMysqlTableIndexes(indexes) {
	return [...indexes].sort((a, b) => {
		const aPrimary = isMysqlPrimaryIndex(a);
		if (aPrimary !== isMysqlPrimaryIndex(b)) return aPrimary ? -1 : 1;
		return a.index_name.localeCompare(b.index_name);
	});
}
function buildMysqlTableColumnsSql(schema, table) {
	const schemaLit = quoteMysqlStringLiteral(schema);
	const tableLit = quoteMysqlStringLiteral(table);
	return prefixMysqlSqlComment(`
SELECT
  c.COLUMN_NAME AS column_name,
  c.DATA_TYPE AS data_type,
  COALESCE(c.COLUMN_TYPE, c.DATA_TYPE) AS udt_name,
  c.IS_NULLABLE AS is_nullable,
  c.COLUMN_DEFAULT AS column_default,
  CASE
    WHEN c.EXTRA LIKE '%auto_increment%' THEN 'YES'
    ELSE 'NO'
  END AS is_identity,
  CASE
    WHEN c.EXTRA LIKE '%auto_increment%' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  NULL AS serial_sequence,
  c.CHARACTER_MAXIMUM_LENGTH AS character_maximum_length,
  c.NUMERIC_PRECISION AS numeric_precision,
  c.NUMERIC_SCALE AS numeric_scale,
  c.DATETIME_PRECISION AS datetime_precision,
  c.ORDINAL_POSITION AS ordinal_position,
  CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_primary_key,
  CASE WHEN uq.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_unique,
  pk.CONSTRAINT_NAME AS primary_key_constraint,
  uq.CONSTRAINT_NAME AS unique_constraint,
  NULLIF(c.COLUMN_COMMENT, '') AS column_comment,
  NULL AS check_constraints,
  fkeys.foreign_keys
FROM information_schema.COLUMNS c
LEFT JOIN (
  SELECT kcu.COLUMN_NAME, tc.CONSTRAINT_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    AND tc.TABLE_SCHEMA = ${schemaLit}
    AND tc.TABLE_NAME = ${tableLit}
) pk ON c.COLUMN_NAME = pk.COLUMN_NAME
LEFT JOIN (
  SELECT kcu.COLUMN_NAME, tc.CONSTRAINT_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'UNIQUE'
    AND tc.TABLE_SCHEMA = ${schemaLit}
    AND tc.TABLE_NAME = ${tableLit}
    AND (
      SELECT COUNT(*)
      FROM information_schema.KEY_COLUMN_USAGE kcu2
      WHERE kcu2.CONSTRAINT_SCHEMA = tc.CONSTRAINT_SCHEMA
        AND kcu2.CONSTRAINT_NAME = tc.CONSTRAINT_NAME
        AND kcu2.TABLE_SCHEMA = tc.TABLE_SCHEMA
        AND kcu2.TABLE_NAME = tc.TABLE_NAME
    ) = 1
) uq ON c.COLUMN_NAME = uq.COLUMN_NAME
LEFT JOIN (
  SELECT
    src.COLUMN_NAME AS column_name,
    GROUP_CONCAT(
      CONCAT(
        tc.CONSTRAINT_NAME, '::',
        src.REFERENCED_TABLE_SCHEMA, '.',
        src.REFERENCED_TABLE_NAME, '(',
        src.REFERENCED_COLUMN_NAME, ')'
      )
      ORDER BY tc.CONSTRAINT_NAME, src.ORDINAL_POSITION
      SEPARATOR '\\n'
    ) AS foreign_keys
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE src
    ON src.CONSTRAINT_NAME = tc.CONSTRAINT_NAME
    AND src.TABLE_SCHEMA = tc.TABLE_SCHEMA
    AND src.TABLE_NAME = tc.TABLE_NAME
  WHERE tc.TABLE_SCHEMA = ${schemaLit}
    AND tc.TABLE_NAME = ${tableLit}
    AND tc.CONSTRAINT_TYPE = 'FOREIGN KEY'
    AND src.REFERENCED_TABLE_NAME IS NOT NULL
  GROUP BY src.COLUMN_NAME
) fkeys ON fkeys.column_name = c.COLUMN_NAME
WHERE c.TABLE_SCHEMA = ${schemaLit}
  AND c.TABLE_NAME = ${tableLit}
ORDER BY CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN 0 ELSE 1 END, c.ORDINAL_POSITION
`.trim(), "List table columns");
}
function buildMysqlTableColumnsForRowsSql(schema, table) {
	const schemaLit = quoteMysqlStringLiteral(schema);
	const tableLit = quoteMysqlStringLiteral(table);
	return prefixMysqlSqlComment(`
SELECT
  c.COLUMN_NAME AS column_name,
  c.DATA_TYPE AS data_type,
  COALESCE(c.COLUMN_TYPE, c.DATA_TYPE) AS udt_name,
  c.IS_NULLABLE AS is_nullable,
  c.COLUMN_DEFAULT AS column_default,
  CASE
    WHEN c.EXTRA LIKE '%auto_increment%' THEN 'YES'
    ELSE 'NO'
  END AS is_identity,
  CASE
    WHEN c.EXTRA LIKE '%auto_increment%' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  NULL AS serial_sequence,
  c.CHARACTER_MAXIMUM_LENGTH AS character_maximum_length,
  c.NUMERIC_PRECISION AS numeric_precision,
  c.NUMERIC_SCALE AS numeric_scale,
  c.DATETIME_PRECISION AS datetime_precision,
  c.ORDINAL_POSITION AS ordinal_position,
  CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_primary_key,
  CASE WHEN uq.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_unique,
  pk.CONSTRAINT_NAME AS primary_key_constraint,
  uq.CONSTRAINT_NAME AS unique_constraint,
  NULL AS column_comment,
  NULL AS check_constraints,
  NULL AS foreign_keys,
  CASE t.TABLE_TYPE
    WHEN 'BASE TABLE' THEN 'r'
    WHEN 'VIEW' THEN 'v'
    ELSE t.TABLE_TYPE
  END AS rel_kind
FROM information_schema.COLUMNS c
LEFT JOIN information_schema.TABLES t
  ON t.TABLE_SCHEMA = c.TABLE_SCHEMA
  AND t.TABLE_NAME = c.TABLE_NAME
LEFT JOIN (
  SELECT kcu.COLUMN_NAME, tc.CONSTRAINT_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    AND tc.TABLE_SCHEMA = ${schemaLit}
    AND tc.TABLE_NAME = ${tableLit}
) pk ON c.COLUMN_NAME = pk.COLUMN_NAME
LEFT JOIN (
  SELECT kcu.COLUMN_NAME, tc.CONSTRAINT_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'UNIQUE'
    AND tc.TABLE_SCHEMA = ${schemaLit}
    AND tc.TABLE_NAME = ${tableLit}
    AND (
      SELECT COUNT(*)
      FROM information_schema.KEY_COLUMN_USAGE kcu2
      WHERE kcu2.CONSTRAINT_SCHEMA = tc.CONSTRAINT_SCHEMA
        AND kcu2.CONSTRAINT_NAME = tc.CONSTRAINT_NAME
        AND kcu2.TABLE_SCHEMA = tc.TABLE_SCHEMA
        AND kcu2.TABLE_NAME = tc.TABLE_NAME
    ) = 1
) uq ON c.COLUMN_NAME = uq.COLUMN_NAME
WHERE c.TABLE_SCHEMA = ${schemaLit}
  AND c.TABLE_NAME = ${tableLit}
ORDER BY CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN 0 ELSE 1 END, c.ORDINAL_POSITION
`.trim(), "Load row columns");
}
function buildMysqlTableAutocompleteColumnsSql(schema, table) {
	return prefixMysqlSqlComment(`
SELECT
  TABLE_SCHEMA AS table_schema,
  TABLE_NAME AS table_name,
  COLUMN_NAME AS column_name,
  DATA_TYPE AS data_type,
  IS_NULLABLE AS is_nullable,
  ORDINAL_POSITION AS ordinal_position
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}
  AND TABLE_NAME = ${quoteMysqlStringLiteral(table)}
ORDER BY ORDINAL_POSITION
`.trim(), "List autocomplete columns");
}
function mysqlRelationSupportsRowCtid(_relKind) {
	return false;
}
function buildMysqlTableIndexesSql(schema, table) {
	return prefixMysqlSqlComment(`
SELECT
  s.INDEX_NAME AS index_name,
  CONCAT(
    CASE WHEN s.NON_UNIQUE = 0 THEN 'UNIQUE ' ELSE '' END,
    'INDEX ', s.INDEX_NAME, ' ON ',
    s.TABLE_SCHEMA, '.', s.TABLE_NAME, ' (',
    GROUP_CONCAT(s.COLUMN_NAME ORDER BY s.SEQ_IN_INDEX SEPARATOR ', '),
    ')',
    CASE WHEN s.INDEX_TYPE IS NOT NULL THEN CONCAT(' USING ', s.INDEX_TYPE) ELSE '' END
  ) AS index_definition,
  CASE WHEN s.NON_UNIQUE = 0 THEN TRUE ELSE FALSE END AS is_unique,
  CASE WHEN s.INDEX_NAME = 'PRIMARY' THEN TRUE ELSE FALSE END AS is_primary,
  LOWER(s.INDEX_TYPE) AS index_algorithm,
  NULL AS index_condition,
  NULL AS index_include,
  NULLIF(s.INDEX_COMMENT, '') AS index_comment
FROM information_schema.STATISTICS s
WHERE s.TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}
  AND s.TABLE_NAME = ${quoteMysqlStringLiteral(table)}
GROUP BY
  s.INDEX_NAME,
  s.NON_UNIQUE,
  s.INDEX_TYPE,
  s.INDEX_COMMENT,
  s.TABLE_SCHEMA,
  s.TABLE_NAME
ORDER BY CASE WHEN s.INDEX_NAME = 'PRIMARY' THEN 0 ELSE 1 END, s.INDEX_NAME
`.trim(), "List table indexes");
}
function buildMysqlTableInfoSql(schema, table) {
	return prefixMysqlSqlComment(`
SELECT
  TABLE_SCHEMA AS table_schema,
  TABLE_NAME AS table_name,
  TABLE_TYPE AS table_type,
  (COALESCE(DATA_LENGTH, 0) + COALESCE(INDEX_LENGTH, 0)) AS total_bytes,
  NULLIF(TABLE_COMMENT, '') AS table_comment,
  TABLE_ROWS AS estimated_rows
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}
  AND TABLE_NAME = ${quoteMysqlStringLiteral(table)}
`.trim(), "Load table info");
}
function executionResultRows(execution) {
	const { rows } = execution;
	if (Array.isArray(rows)) return rows;
	if (rows && typeof rows === "object") {
		const record = rows;
		const values = Object.values(record);
		if (values.length > 0 && values.every((value) => value !== null && typeof value === "object" && !Array.isArray(value))) return values;
		return [record];
	}
	return [];
}
function isMysqlDriverByteArray(value) {
	if (!Array.isArray(value)) return false;
	if (value.length === 0) return true;
	return value.every((entry) => typeof entry === "number" && Number.isInteger(entry) && entry >= 0 && entry <= 255);
}
function decodeMysqlDriverByteArray(bytes) {
	try {
		const decoded = new TextDecoder("utf-8", { fatal: false }).decode(Uint8Array.from(bytes));
		if (!decoded.includes("�")) return decoded;
		if ([...decoded].filter((char) => char === "�").length <= Math.max(1, Math.floor(decoded.length * .1))) return decoded;
		return null;
	} catch {
		return null;
	}
}
function coerceMysqlStringValue(value) {
	if (typeof value === "string") {
		const trimmed = value.trim();
		return trimmed.length > 0 ? trimmed : null;
	}
	if (typeof value === "number" || typeof value === "bigint") return String(value);
	if (isMysqlDriverByteArray(value)) {
		const decoded = decodeMysqlDriverByteArray(value);
		if (decoded === null) return null;
		const trimmed = decoded.trim();
		return trimmed.length > 0 ? trimmed : null;
	}
	if (value && typeof value === "object" && !Array.isArray(value) && value.type === "Buffer" && isMysqlDriverByteArray(value.data)) return coerceMysqlStringValue(value.data);
	if (!value || typeof value !== "object" || Array.isArray(value)) return null;
	const record = value;
	for (const key of [
		"value",
		"Value",
		"$value",
		"text",
		"Text",
		"string",
		"String",
		"schema_name",
		"SCHEMA_NAME"
	]) {
		if (!(key in record)) continue;
		const nested = coerceMysqlStringValue(record[key]);
		if (nested) return nested;
	}
	return null;
}
function readMysqlRowString(row, ...keys) {
	const keyByLower = new Map(Object.keys(row).map((key) => [key.toLowerCase(), key]));
	for (const key of keys) {
		const actualKey = keyByLower.get(key.toLowerCase());
		if (actualKey === void 0) continue;
		const coerced = coerceMysqlStringValue(row[actualKey]);
		if (coerced) return coerced;
	}
	return null;
}
function formatMysqlQueryDurationMs(ms) {
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
function buildMysqlSelectSql(schema, table, limit, offset) {
	return `SELECT * FROM ${`${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`} LIMIT ${limit} OFFSET ${offset}`;
}
function formatMysqlSql(sql) {
	const trimmed = sql.trim();
	if (!trimmed) return sql;
	try {
		return format(trimmed, {
			language: "mysql",
			tabWidth: 2,
			keywordCase: "upper"
		});
	} catch {
		return sql;
	}
}
function quoteSqlValue(value) {
	if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
	if (typeof value === "number") return String(value);
	return quoteMysqlStringLiteral(String(value));
}
function likePattern(value, mode) {
	const escaped = escapeMysqlLikePattern(value);
	if (mode === "starts") return `${escaped}%`;
	if (mode === "ends") return `%${escaped}`;
	return `%${escaped}%`;
}
function likeCondition(columnId, pattern, negate = false) {
	const column = quoteMysqlIdentifier(columnId);
	const patternLit = quoteMysqlStringLiteral(pattern);
	const escapeLit = quoteMysqlStringLiteral("\\");
	return negate ? `LOWER(CAST(${column} AS CHAR)) NOT LIKE LOWER(${patternLit}) ESCAPE ${escapeLit}` : `LOWER(CAST(${column} AS CHAR)) LIKE LOWER(${patternLit}) ESCAPE ${escapeLit}`;
}
function parseBetweenValue$1(value) {
	const parts = (typeof value === "string" ? value : Array.isArray(value) ? value.join(",") : String(value ?? "")).split(",").map((p) => p.trim()).filter(Boolean);
	if (parts.length >= 2) return [parts[0], parts[1]];
	return null;
}
function buildMysqlFilterSqlCondition(operatorKey, columnId, value, _columnType) {
	const column = quoteMysqlIdentifier(columnId);
	const safeVal = value ?? "";
	switch (operatorKey) {
		case "equal":
			if (value === null || value === void 0) return `${column} IS NULL`;
			return `${column} = ${quoteSqlValue(value)}`;
		case "notEqual":
			if (value === null || value === void 0) return `${column} IS NOT NULL`;
			return `${column} <> ${quoteSqlValue(value)}`;
		case "startsWith": return likeCondition(columnId, likePattern(String(safeVal), "starts"));
		case "notStartsWith": return likeCondition(columnId, likePattern(String(safeVal), "starts"), true);
		case "endsWith": return likeCondition(columnId, likePattern(String(safeVal), "ends"));
		case "notEndsWith": return likeCondition(columnId, likePattern(String(safeVal), "ends"), true);
		case "contains":
		case "search": return likeCondition(columnId, likePattern(String(safeVal), "contains"));
		case "notContains":
		case "notSearch": return likeCondition(columnId, likePattern(String(safeVal), "contains"), true);
		case "regex": return `CAST(${column} AS CHAR) REGEXP ${quoteMysqlStringLiteral(String(safeVal))}`;
		case "greaterThan": return `${column} > ${quoteSqlValue(safeVal)}`;
		case "greaterThanEqual": return `${column} >= ${quoteSqlValue(safeVal)}`;
		case "lessThan": return `${column} < ${quoteSqlValue(safeVal)}`;
		case "lessThanEqual": return `${column} <= ${quoteSqlValue(safeVal)}`;
		case "between": {
			const pair = parseBetweenValue$1(value);
			if (!pair) return void 0;
			return `${column} BETWEEN ${quoteSqlValue(pair[0])} AND ${quoteSqlValue(pair[1])}`;
		}
		case "notBetween": {
			const pair = parseBetweenValue$1(value);
			if (!pair) return void 0;
			return `${column} NOT BETWEEN ${quoteSqlValue(pair[0])} AND ${quoteSqlValue(pair[1])}`;
		}
		case "isNull": return `${column} IS NULL`;
		case "isNotNull": return `${column} IS NOT NULL`;
		case "exists": return `${column} IS NOT NULL`;
		case "notExists": return `${column} IS NULL`;
		default:
			if (value == null) return void 0;
			return `${column} = ${quoteSqlValue(value)}`;
	}
}
function buildMysqlFilterWhereClause(filterKeys) {
	const conditions = filterKeys.map((key) => buildMysqlFilterSqlCondition(key.o, key.c, key.v)).filter((condition) => Boolean(condition));
	if (conditions.length === 0) return void 0;
	return conditions.map((condition) => `(${condition})`).join(" AND ");
}
function buildMysqlTextSearchWhereClause(search, textColumnNames) {
	const trimmed = search.trim();
	if (!trimmed || textColumnNames.length === 0) return void 0;
	const patternLit = quoteMysqlStringLiteral(likePattern(trimmed, "contains"));
	const escapeLit = quoteMysqlStringLiteral("\\");
	return `(${textColumnNames.map((column) => `LOWER(CAST(${quoteMysqlIdentifier(column)} AS CHAR)) LIKE LOWER(${patternLit}) ESCAPE ${escapeLit}`).join(" OR ")})`;
}
function combineMysqlWhereClauses(...clauses) {
	const parts = clauses.map((clause) => clause?.trim()).filter((clause) => Boolean(clause));
	if (parts.length === 0) return void 0;
	return parts.map((part) => `(${part})`).join(" AND ");
}
function buildMysqlInlineEnumTypeSql(values) {
	return `ENUM(${values.map((value) => quoteMysqlStringLiteral(value)).join(", ")})`;
}
function parseMysqlEnumValues(raw) {
	if (Array.isArray(raw)) return raw.map(String);
	if (typeof raw !== "string") return [];
	const trimmed = raw.trim();
	if (!trimmed) return [];
	const enumMatch = trimmed.match(/^enum\s*\((.*)\)\s*$/i);
	if (enumMatch) {
		const inner = enumMatch[1];
		const values = [];
		const literalRe = /'((?:[^'\\]|\\.|'')*)'/g;
		let match;
		while ((match = literalRe.exec(inner)) !== null) values.push(match[1].replace(/''/g, "'").replace(/\\'/g, "'"));
		return values;
	}
	try {
		const parsed = JSON.parse(trimmed);
		return Array.isArray(parsed) ? parsed.map(String) : [];
	} catch {
		return [];
	}
}
function normalizeMysqlEnumValues(values) {
	return (values ?? []).map((value) => value.trim()).filter(Boolean);
}
function validateMysqlEnumValues(values) {
	const labels = normalizeMysqlEnumValues(values);
	if (labels.length === 0) return "Add at least one enum value.";
	const seen = /* @__PURE__ */ new Set();
	for (const label of labels) {
		if (seen.has(label)) return "Duplicate enum value.";
		seen.add(label);
	}
	return null;
}
var LENGTH_PROPERTY = (defaults) => ({
	key: "length",
	label: defaults.label ?? "Length",
	hint: defaults.hint,
	unit: defaults.unit,
	min: defaults.min,
	max: defaults.max,
	defaultValue: defaults.defaultValue,
	optional: defaults.optional,
	optionalEmptyLabel: defaults.optionalEmptyLabel
});
var NUMERIC_PRECISION_PROPERTY = (defaultValue = 10) => ({
	key: "numericPrecision",
	label: "Precision",
	hint: "Total number of digits.",
	unit: "digits",
	min: 1,
	max: 1e3,
	defaultValue
});
var NUMERIC_SCALE_PROPERTY = (defaultValue = 0) => ({
	key: "numericScale",
	label: "Scale",
	hint: "Digits after the decimal point.",
	unit: "digits",
	min: 0,
	max: 1e3,
	defaultValue
});
var DATETIME_PRECISION_PROPERTY = {
	key: "datetimePrecision",
	label: "Fractional seconds",
	hint: "Number of digits after the decimal point in seconds.",
	unit: "decimal places",
	min: 0,
	max: 6,
	optional: true,
	optionalEmptyLabel: "default (6)"
};
const MYSQL_COLUMN_TYPE_DEFINITIONS = [
	{
		id: "text",
		label: "Text",
		description: "Unlimited length text",
		group: "Text",
		properties: [],
		searchTerms: ["text", "string"]
	},
	{
		id: "varchar",
		label: "Varchar",
		description: "Variable-length text",
		group: "Text",
		properties: [LENGTH_PROPERTY({
			hint: "Maximum number of characters stored in this column.",
			unit: "characters",
			min: 1,
			max: 10485760,
			defaultValue: 255
		})],
		searchTerms: ["character varying", "varchar"]
	},
	{
		id: "char",
		label: "Char",
		description: "Fixed-length text",
		group: "Text",
		properties: [LENGTH_PROPERTY({
			hint: "Fixed number of characters. Values are padded or truncated to this length.",
			unit: "characters",
			min: 1,
			max: 10485760,
			defaultValue: 1
		})],
		searchTerms: [
			"character",
			"bpchar",
			"char"
		]
	},
	{
		id: "smallint",
		label: "Smallint",
		description: "2-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: ["int2", "smallint"]
	},
	{
		id: "integer",
		label: "Integer",
		description: "4-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: [
			"int4",
			"integer",
			"int"
		]
	},
	{
		id: "bigint",
		label: "Bigint",
		description: "8-byte integer",
		group: "Integer",
		properties: [],
		searchTerms: ["int8", "bigint"]
	},
	{
		id: "smallserial",
		label: "Smallserial",
		description: "Auto-incrementing smallint",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["smallserial", "serial2"]
	},
	{
		id: "serial",
		label: "Serial",
		description: "Auto-incrementing integer",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["serial", "serial4"]
	},
	{
		id: "bigserial",
		label: "Bigserial",
		description: "Auto-incrementing bigint",
		group: "Integer",
		properties: [],
		createOnly: true,
		searchTerms: ["bigserial", "serial8"]
	},
	{
		id: "real",
		label: "Real",
		description: "Single-precision float",
		group: "Decimal",
		properties: [],
		searchTerms: ["float4", "real"]
	},
	{
		id: "double precision",
		label: "Double precision",
		description: "Double-precision float",
		group: "Decimal",
		properties: [],
		searchTerms: [
			"float8",
			"double precision",
			"float"
		]
	},
	{
		id: "numeric",
		label: "Numeric",
		description: "Exact decimal number",
		group: "Decimal",
		properties: [NUMERIC_PRECISION_PROPERTY(), NUMERIC_SCALE_PROPERTY()],
		searchTerms: ["numeric", "decimal"]
	},
	{
		id: "boolean",
		label: "Boolean",
		description: "True or false",
		group: "Boolean",
		properties: [],
		searchTerms: ["bool", "boolean"]
	},
	{
		id: "date",
		label: "Date",
		description: "Calendar date",
		group: "Date & time",
		properties: []
	},
	{
		id: "time",
		label: "Time",
		description: "Time of day",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY],
		searchTerms: ["time without time zone"]
	},
	{
		id: "time with time zone",
		label: "Time with time zone",
		description: "Time with time zone",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY],
		searchTerms: ["timetz", "time with time zone"]
	},
	{
		id: "timestamp",
		label: "Timestamp",
		description: "Date and time",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY],
		searchTerms: ["timestamp without time zone"]
	},
	{
		id: "timestamp with time zone",
		label: "Timestamp with time zone",
		description: "Date and time with time zone",
		group: "Date & time",
		properties: [DATETIME_PRECISION_PROPERTY],
		searchTerms: ["timestamptz", "timestamp with time zone"]
	},
	{
		id: "interval",
		label: "Interval",
		description: "Time span",
		group: "Date & time",
		properties: []
	},
	{
		id: "uuid",
		label: "UUID",
		description: "Unique identifier",
		group: "Structured",
		properties: [],
		searchTerms: ["uuid"]
	},
	{
		id: "enum",
		label: "Enum",
		description: "One value from a fixed list",
		group: "Structured",
		properties: [],
		searchTerms: [
			"enum",
			"enumeration",
			"list"
		]
	},
	{
		id: "json",
		label: "JSON",
		description: "JSON stored as text",
		group: "Structured",
		properties: []
	},
	{
		id: "jsonb",
		label: "JSONB",
		description: "Binary JSON",
		group: "Structured",
		properties: []
	},
	{
		id: "bytea",
		label: "Bytea",
		description: "Binary data",
		group: "Structured",
		properties: []
	},
	{
		id: "bit",
		label: "Bit",
		description: "Fixed-length bit string",
		group: "Structured",
		properties: [LENGTH_PROPERTY({
			label: "Length (bits)",
			hint: "Number of bits stored in this column.",
			unit: "bits",
			min: 1,
			max: 83886080,
			defaultValue: 1,
			optional: true,
			optionalEmptyLabel: "1 bit"
		})],
		searchTerms: ["bit"]
	},
	{
		id: "bit varying",
		label: "Bit varying",
		description: "Variable-length bit string",
		group: "Structured",
		properties: [LENGTH_PROPERTY({
			label: "Max length (bits)",
			hint: "Maximum number of bits stored in this column.",
			unit: "bits",
			min: 1,
			max: 83886080,
			optional: true,
			optionalEmptyLabel: "unlimited"
		})],
		searchTerms: ["varbit", "bit varying"]
	},
	{
		id: "inet",
		label: "Inet",
		description: "IPv4 or IPv6 address",
		group: "Network",
		properties: []
	},
	{
		id: "cidr",
		label: "CIDR",
		description: "IPv4 or IPv6 network",
		group: "Network",
		properties: []
	},
	{
		id: "macaddr",
		label: "MAC address",
		description: "MAC address",
		group: "Network",
		properties: []
	}
];
var MYSQL_COLUMN_TYPE_BY_ID = new Map(MYSQL_COLUMN_TYPE_DEFINITIONS.map((definition) => [definition.id, definition]));
const MYSQL_COLUMN_TYPE_GROUPS = [
	"Text",
	"Integer",
	"Decimal",
	"Boolean",
	"Date & time",
	"Structured",
	"Network"
];
var DATETIME_TYPE_IDS = new Set([
	"time",
	"time with time zone",
	"timestamp",
	"timestamp with time zone"
]);
function parseOptionalInt(value) {
	if (value == null || value === "") return void 0;
	const parsed = typeof value === "number" ? value : Number.parseInt(String(value), 10);
	return Number.isFinite(parsed) ? parsed : void 0;
}
function getMysqlColumnTypeDefinition(typeId) {
	return MYSQL_COLUMN_TYPE_BY_ID.get(typeId);
}
function getMysqlColumnTypePropertyValue(state, key) {
	return state[key];
}
function formatLimitNumber(value) {
	return value.toLocaleString();
}
function formatMysqlColumnTypePropertyLimits(property) {
	const min = formatLimitNumber(property.min);
	const max = formatLimitNumber(property.max);
	const unit = property.unit ? ` ${property.unit}` : "";
	if (property.min === property.max) return `${min}${unit}`;
	return `${min} to ${max}${unit}`;
}
function getMysqlColumnTypePropertyPlaceholder(property) {
	if (!property.optional) return property.defaultValue != null ? String(property.defaultValue) : void 0;
	return property.optionalEmptyLabel ?? "Default";
}
function getMysqlColumnTypePropertyRangeError(property, value) {
	if (value == null) return property.optional ? null : `${property.label} is required.`;
	if (!Number.isInteger(value)) return `${property.label} must be a whole number.`;
	if (value < property.min || value > property.max) return `${property.label} must be between ${formatLimitNumber(property.min)} and ${formatLimitNumber(property.max)}${property.unit ? ` ${property.unit}` : ""}.`;
	return null;
}
function createDefaultMysqlColumnTypeState(typeId = "text") {
	const definition = getMysqlColumnTypeDefinition(typeId);
	const state = { typeId };
	for (const property of definition.properties) if (property.defaultValue != null) state[property.key] = property.defaultValue;
	if (typeId === "enum") state.enumValues = [""];
	return state;
}
function appendPrecisionSuffix(baseType, datetimePrecision) {
	if (datetimePrecision == null) return baseType;
	return `${baseType}(${datetimePrecision})`;
}
function buildMysqlColumnBaseTypeSql(state) {
	switch (state.typeId) {
		case "varchar": return `VARCHAR(${state.length ?? 255})`;
		case "char": return `CHAR(${state.length ?? 1})`;
		case "text": return "TEXT";
		case "smallint": return "SMALLINT";
		case "integer": return "INT";
		case "bigint": return "BIGINT";
		case "smallserial": return "SMALLINT";
		case "serial": return "INT";
		case "bigserial": return "BIGINT";
		case "real": return "FLOAT";
		case "double precision": return "DOUBLE";
		case "numeric": {
			const precision = state.numericPrecision;
			const scale = state.numericScale;
			if (precision != null && scale != null) return `DECIMAL(${precision},${scale})`;
			if (precision != null) return `DECIMAL(${precision})`;
			return "DECIMAL";
		}
		case "boolean": return "BOOLEAN";
		case "date": return "DATE";
		case "time": return appendPrecisionSuffix("TIME", state.datetimePrecision);
		case "time with time zone": return appendPrecisionSuffix("TIME", state.datetimePrecision);
		case "timestamp": return appendPrecisionSuffix("DATETIME", state.datetimePrecision);
		case "timestamp with time zone": return appendPrecisionSuffix("TIMESTAMP", state.datetimePrecision);
		case "interval": return "VARCHAR(64)";
		case "uuid": return "CHAR(36)";
		case "enum": return buildMysqlInlineEnumTypeSql(normalizeMysqlEnumValues(state.enumValues));
		case "json":
		case "jsonb": return "JSON";
		case "bytea": return "BLOB";
		case "bit": return state.length != null ? `BIT(${state.length})` : "BIT";
		case "bit varying": return state.length != null ? `VARBINARY(${Math.ceil(state.length / 8)})` : "VARBINARY(255)";
		case "inet":
		case "cidr": return "VARCHAR(45)";
		case "macaddr": return "VARCHAR(17)";
		default: return state.typeId;
	}
}
function buildMysqlColumnTypeSql(state) {
	const base = buildMysqlColumnBaseTypeSql(state);
	if (isMysqlSerialColumnType(state.typeId)) return `${base} AUTO_INCREMENT`;
	return base;
}
function isMysqlSerialColumnType(typeId) {
	return typeId === "serial" || typeId === "bigserial" || typeId === "smallserial";
}
function formatMysqlColumnTypeLabel(state) {
	const definition = getMysqlColumnTypeDefinition(state.typeId);
	const baseSql = buildMysqlColumnBaseTypeSql(state);
	let label = definition.label;
	if (baseSql !== state.typeId) {
		const paramsMatch = baseSql.match(/\((.+)\)$/);
		if (paramsMatch) label = `${definition.label} (${paramsMatch[1]})`;
	}
	return state.isArray ? `${label}[]` : label;
}
function normalizeDataTypeLabel(value) {
	return value.trim().toLowerCase().replace(/\s+/g, " ");
}
function parsePrecisionFromDataType(dataType) {
	const match = dataType.match(/\((\d+)\)$/);
	if (!match) return void 0;
	return parseOptionalInt(match[1]);
}
function parseMysqlColumnBaseTypeState(udt, dataType, length, numericPrecision, numericScale, datetimePrecision) {
	const normalizedUdt = udt.toLowerCase().replace(/\s+/g, " ");
	const normalizedData = dataType.toLowerCase().replace(/\s+/g, " ");
	if (normalizedUdt.startsWith("varchar") || normalizedData.startsWith("varchar") || normalizedData.startsWith("character varying")) return {
		typeId: "varchar",
		length: length ?? parsePrecisionFromDataType(dataType) ?? 255
	};
	if (normalizedUdt.startsWith("char") || normalizedData === "char" || normalizedData === "character") return {
		typeId: "char",
		length: length ?? parsePrecisionFromDataType(dataType) ?? 1
	};
	if (normalizedData === "tinyint" || normalizedUdt.startsWith("tinyint")) {
		if (length === 1 || normalizedUdt.includes("(1)")) return { typeId: "boolean" };
		return { typeId: "smallint" };
	}
	if (normalizedData === "smallint" || normalizedUdt.startsWith("smallint")) return { typeId: "smallint" };
	if (normalizedData === "int" || normalizedData === "integer" || normalizedData === "mediumint" || normalizedUdt.startsWith("int")) return { typeId: "integer" };
	if (normalizedData === "bigint" || normalizedUdt.startsWith("bigint")) return { typeId: "bigint" };
	if (normalizedData === "float" || normalizedData === "real" || normalizedUdt.startsWith("float")) return { typeId: "real" };
	if (normalizedData === "double" || normalizedData === "double precision" || normalizedUdt.startsWith("double")) return { typeId: "double precision" };
	if (normalizedData === "decimal" || normalizedData === "numeric" || normalizedUdt.startsWith("decimal") || normalizedUdt.startsWith("numeric")) return {
		typeId: "numeric",
		numericPrecision,
		numericScale
	};
	if (normalizedData === "boolean" || normalizedData === "bool") return { typeId: "boolean" };
	if (normalizedData === "datetime" || normalizedUdt.startsWith("datetime")) return {
		typeId: "timestamp",
		datetimePrecision
	};
	if (normalizedData === "timestamp" || normalizedUdt.startsWith("timestamp")) return {
		typeId: "timestamp with time zone",
		datetimePrecision
	};
	if (normalizedData === "time" || normalizedUdt.startsWith("time")) return {
		typeId: "time",
		datetimePrecision
	};
	if (normalizedData === "date") return { typeId: "date" };
	if (normalizedData === "enum" || normalizedUdt.startsWith("enum")) return {
		typeId: "enum",
		enumValues: parseMysqlEnumValues(udt || dataType)
	};
	if (normalizedData === "json" || normalizedUdt.startsWith("json")) return { typeId: "json" };
	if (normalizedData.includes("blob") || normalizedData.includes("binary") || normalizedUdt.includes("blob")) return { typeId: "bytea" };
	if (normalizedData === "bit" || normalizedUdt.startsWith("bit")) return {
		typeId: "bit",
		length: length ?? parsePrecisionFromDataType(dataType)
	};
	if (normalizedData === "text" || normalizedData.includes("text")) return { typeId: "text" };
	const directMatch = MYSQL_COLUMN_TYPE_BY_ID.get(udt || dataType);
	if (directMatch) return createDefaultMysqlColumnTypeState(directMatch.id);
	return createDefaultMysqlColumnTypeState("text");
}
function parseMysqlColumnTypeFromRow(row) {
	const rawUdt = row.udt_name.toLowerCase();
	const rawDataType = normalizeDataTypeLabel(row.data_type);
	return parseMysqlColumnBaseTypeState(rawUdt, rawDataType, parseOptionalInt(row.character_maximum_length), parseOptionalInt(row.numeric_precision), parseOptionalInt(row.numeric_scale), parseOptionalInt(row.datetime_precision) ?? parsePrecisionFromDataType(rawDataType));
}
function mysqlColumnTypeStatesEqual(a, b) {
	return buildMysqlColumnTypeSql(a).toLowerCase() === buildMysqlColumnTypeSql(b).toLowerCase();
}
function validateMysqlColumnTypeState(state) {
	if (state.typeId === "enum") return validateMysqlEnumValues(state.enumValues);
	const definition = getMysqlColumnTypeDefinition(state.typeId);
	for (const property of definition.properties) {
		const value = getMysqlColumnTypePropertyValue(state, property.key);
		const rangeError = getMysqlColumnTypePropertyRangeError(property, value);
		if (rangeError) return rangeError;
		if (property.key === "numericScale" && value != null && state.numericPrecision != null && value > state.numericPrecision) return "Scale cannot be greater than precision.";
	}
	return null;
}
function getMysqlColumnDefaultPlaceholder(typeId) {
	switch (typeId) {
		case "boolean": return "NULL";
		case "uuid": return "NULL";
		case "enum": return "NULL";
		case "timestamp with time zone":
		case "timestamp": return "CURRENT_TIMESTAMP";
		case "json":
		case "jsonb": return `CAST('{}' AS JSON)`;
		default: return "NULL";
	}
}
function getMysqlColumnTypeSearchValue(definition) {
	return [
		definition.label,
		definition.description,
		definition.id,
		definition.group,
		...definition.searchTerms ?? []
	].join(" ");
}
function isMysqlDatetimeType(typeId) {
	return DATETIME_TYPE_IDS.has(typeId);
}
var NON_INLINE_EDITABLE_TYPES = new Set([
	"json",
	"jsonb",
	"bytea",
	"interval",
	"bit",
	"bit varying"
]);
function getMysqlColumnEditMeta(column) {
	const typeState = parseMysqlColumnTypeFromRow(column);
	return {
		typeId: typeState.typeId,
		dataType: column.data_type,
		udtName: column.udt_name,
		nullable: column.is_nullable === "YES",
		isPrimaryKey: isMysqlPrimaryKeyColumn(column),
		hasDefault: column.column_default != null && column.column_default !== "",
		length: typeState.length,
		numericPrecision: typeState.numericPrecision,
		numericScale: typeState.numericScale,
		enumValues: typeState.typeId === "enum" ? typeState.enumValues : void 0
	};
}
function getMysqlInlineFieldType(meta, value) {
	if (meta.typeId === "boolean") return "boolean";
	if (meta.typeId === "enum") return "enum";
	if (isMysqlDatetimeType(meta.typeId)) return "datetime";
	if (meta.typeId === "smallint" || meta.typeId === "integer" || meta.typeId === "bigint" || meta.typeId === "smallserial" || meta.typeId === "serial" || meta.typeId === "bigserial") return "integer";
	if (meta.typeId === "real" || meta.typeId === "double precision" || meta.typeId === "numeric") return "double";
	if (meta.typeId === "uuid") return "string";
	if (meta.typeId === "json" || meta.typeId === "jsonb") return "json";
	if (meta.typeId === "bytea") return "bytea";
	if (Array.isArray(value)) return "array";
	return "string";
}
function columnHasExplicitDefault(column) {
	return column.column_default != null && column.column_default !== "";
}
function mysqlColumnAutoGeneratesOnInsert(column) {
	if (column.serial_sequence?.trim()) return true;
	const identity = String(column.is_identity ?? "").toUpperCase();
	if (identity === "YES" || identity === "TRUE" || identity === "T") return true;
	const generation = String(column.identity_generation ?? "").toUpperCase();
	if (generation === "ALWAYS" || generation === "BY DEFAULT") return true;
	const defaultValue = column.column_default?.toLowerCase() ?? "";
	if (!defaultValue) return false;
	return defaultValue.includes("nextval(") || defaultValue.includes("gen_random_uuid(") || defaultValue.includes("uuid_generate_");
}
function mysqlColumnCanOmitOnCreate(column) {
	if (mysqlColumnAutoGeneratesOnInsert(column)) return true;
	if (columnHasExplicitDefault(column) && !isMysqlPrimaryKeyColumn(column)) return true;
	return false;
}
function isMysqlColumnSystemGenerated(column) {
	if (String(column.identity_generation ?? "").toUpperCase() === "ALWAYS") return true;
	return (column.column_default?.toLowerCase() ?? "").includes("generated always");
}
function shouldOmitMysqlColumnOnRowCreate(column) {
	return isMysqlColumnSystemGenerated(column);
}
function isMysqlColumnRequiredOnCreate(column) {
	if (mysqlColumnAutoGeneratesOnInsert(column)) return false;
	if (column.is_nullable === "YES") return false;
	if (isMysqlPrimaryKeyColumn(column)) return true;
	if (columnHasExplicitDefault(column)) return false;
	return true;
}
function filterMysqlRowCreateValues(values, columns) {
	const omitColumns = new Set(columns.filter((column) => shouldOmitMysqlColumnOnRowCreate(column)).map((column) => column.column_name));
	const filtered = {};
	for (const [columnName, value] of Object.entries(values)) {
		if (omitColumns.has(columnName) || value === void 0) continue;
		filtered[columnName] = value;
	}
	return filtered;
}
function isMysqlColumnInlineEditable(column) {
	if (isMysqlColumnSystemGenerated(column)) return false;
	const meta = getMysqlColumnEditMeta(column);
	if (NON_INLINE_EDITABLE_TYPES.has(meta.typeId)) return false;
	return true;
}
function isMysqlColumnRequired(column) {
	return column.is_nullable !== "YES";
}
function valueToMysqlEditString(value, _meta) {
	if (value === null || value === void 0) return "";
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "object") return JSON.stringify(value, null, 2);
	return String(value);
}
function parseBooleanInput(raw) {
	const normalized = raw.trim().toLowerCase();
	if (!normalized) return {
		ok: true,
		value: null
	};
	if ([
		"true",
		"t",
		"1",
		"yes"
	].includes(normalized)) return {
		ok: true,
		value: true
	};
	if ([
		"false",
		"f",
		"0",
		"no"
	].includes(normalized)) return {
		ok: true,
		value: false
	};
	return {
		ok: false,
		error: "Enter true or false."
	};
}
function parseNumericInput(raw, meta, integerOnly) {
	const trimmed = raw.trim();
	if (!trimmed) return {
		ok: true,
		value: null
	};
	const parsed = integerOnly ? Number.parseInt(trimmed, 10) : Number(trimmed);
	if (!Number.isFinite(parsed)) return {
		ok: false,
		error: "Enter a valid number."
	};
	if (meta.numericPrecision != null && integerOnly) {
		const max = 10 ** meta.numericPrecision - 1;
		if (Math.abs(parsed) > max) return {
			ok: false,
			error: `Value exceeds allowed range.`
		};
	}
	return {
		ok: true,
		value: parsed
	};
}
function parseJsonInput(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return {
		ok: true,
		value: null
	};
	try {
		return {
			ok: true,
			value: JSON.parse(trimmed)
		};
	} catch {
		return {
			ok: false,
			error: "Enter valid JSON."
		};
	}
}
function parseAndValidateMysqlCellInput(raw, column) {
	const meta = getMysqlColumnEditMeta(column);
	const trimmed = raw.trim();
	const required = isMysqlColumnRequired(column);
	if (!trimmed) {
		if (required) return {
			ok: false,
			error: "This field is required."
		};
		return {
			ok: true,
			value: null
		};
	}
	const fieldType = getMysqlInlineFieldType(meta);
	if (fieldType === "boolean") return parseBooleanInput(raw);
	if (fieldType === "enum") {
		if (meta.enumValues?.length && !meta.enumValues.includes(trimmed)) return {
			ok: false,
			error: "Value is not allowed for this enum."
		};
		return {
			ok: true,
			value: trimmed
		};
	}
	if (fieldType === "json") return parseJsonInput(raw);
	if (isDateTimeInlineFieldType(fieldType)) {
		const date = new Date(trimmed);
		if (Number.isNaN(date.getTime())) return {
			ok: false,
			error: "Enter a valid date and time."
		};
		return {
			ok: true,
			value: trimmed
		};
	}
	if (isNumericInlineFieldType(fieldType)) return parseNumericInput(raw, meta, fieldType === "integer" || fieldType === "bigint");
	if (meta.length != null && trimmed.length > meta.length) return {
		ok: false,
		error: `Maximum length is ${meta.length} characters.`
	};
	return {
		ok: true,
		value: trimmed
	};
}
function makeMysqlPendingEditKey(tableId, rowKey, columnKey) {
	return `${tableId}:${rowKey}:${columnKey}`;
}
function groupMysqlEditsByRow(edits) {
	const grouped = /* @__PURE__ */ new Map();
	for (const edit of edits) {
		const existing = grouped.get(edit.rowKey);
		if (existing) {
			existing.changes[edit.columnKey] = edit.value;
			continue;
		}
		grouped.set(edit.rowKey, {
			identity: edit.identity,
			changes: { [edit.columnKey]: edit.value }
		});
	}
	return grouped;
}
function mapMysqlTypeToFilterType(column) {
	const fieldType = getMysqlInlineFieldType(getMysqlColumnEditMeta(column));
	switch (fieldType) {
		case "boolean": return "boolean";
		case "integer":
		case "bigint": return fieldType;
		case "double": return "double";
		case "datetime": return "datetime";
		default: return "string";
	}
}
function mysqlRowsFilterColumnsFromTableColumns(columns) {
	return columns.map((column) => {
		const type = mapMysqlTypeToFilterType(column);
		return {
			id: column.column_name,
			title: column.column_name,
			type,
			optional: column.is_nullable === "YES"
		};
	});
}
function buildMysqlRowsListWhereClause(filterKeys, search, columns) {
	const filterWhere = filterKeys?.length ? buildMysqlFilterWhereClause(filterKeys) : void 0;
	const textColumns = columns.filter((column) => {
		const type = column.data_type.toLowerCase();
		return type.includes("char") || type.includes("text") || type === "uuid" || type.includes("json");
	}).map((column) => column.column_name);
	return combineMysqlWhereClauses(filterWhere, search?.trim() ? buildMysqlTextSearchWhereClause(search, textColumns) : void 0);
}
var DEFAULT_INTEGER_TOLERANCE = 1e-9;
function isIntegerValue(value, tolerance = DEFAULT_INTEGER_TOLERANCE) {
	if (!Number.isFinite(value)) return false;
	return Math.abs(value - Math.round(value)) < tolerance;
}
function pickUnitWithSmallestIntegerValue(baseValue, scales, options = {}) {
	const minConverted = options.minConvertedValue ?? 1;
	const tolerance = options.tolerance ?? DEFAULT_INTEGER_TOLERANCE;
	if (scales.length === 0) throw new Error("pickUnitWithSmallestIntegerValue requires at least one scale");
	const smallestScale = scales.reduce((a, b) => a.factor <= b.factor ? a : b);
	if (!Number.isFinite(baseValue) || baseValue <= 0) return {
		value: 0,
		unit: smallestScale.unit
	};
	const sorted = [...scales].sort((a, b) => b.factor - a.factor);
	for (const scale of sorted) {
		const converted$1 = baseValue / scale.factor;
		if (converted$1 >= minConverted && isIntegerValue(converted$1, tolerance)) return {
			value: Math.round(converted$1),
			unit: scale.unit
		};
	}
	const converted = baseValue / smallestScale.factor;
	return {
		value: isIntegerValue(converted, tolerance) ? Math.round(converted) : Math.round(converted * 100) / 100,
		unit: smallestScale.unit
	};
}
function pickUnitWithLargestReadableValue(baseValue, scales, options = {}) {
	const minConverted = options.minConvertedValue ?? 1;
	if (scales.length === 0) throw new Error("pickUnitWithLargestReadableValue requires at least one scale");
	const smallestScale = scales.reduce((a, b) => a.factor <= b.factor ? a : b);
	if (!Number.isFinite(baseValue) || baseValue <= 0) return {
		value: 0,
		unit: smallestScale.unit
	};
	const sorted = [...scales].sort((a, b) => b.factor - a.factor);
	for (const scale of sorted) {
		if (scale.factor <= smallestScale.factor) continue;
		const converted = baseValue / scale.factor;
		if (converted >= minConverted) return {
			value: converted,
			unit: scale.unit
		};
	}
	return {
		value: baseValue / smallestScale.factor,
		unit: smallestScale.unit
	};
}
function toByteCount(value) {
	if (value == null) return 0;
	if (typeof value === "bigint") {
		const n = Number(value);
		return Number.isFinite(n) ? n : 0;
	}
	return Number.isFinite(value) ? value : 0;
}
var DECIMAL_BYTE_SCALES = [
	{
		unit: "bytes",
		factor: 1
	},
	{
		unit: "KB",
		factor: 1e3
	},
	{
		unit: "MB",
		factor: 1e3 ** 2
	},
	{
		unit: "GB",
		factor: 1e3 ** 3
	},
	{
		unit: "TB",
		factor: 1e3 ** 4
	}
];
var BINARY_BYTE_SCALES = [
	{
		unit: "bytes",
		factor: 1
	},
	{
		unit: "kb",
		factor: 1024
	},
	{
		unit: "mb",
		factor: 1024 ** 2
	},
	{
		unit: "gb",
		factor: 1024 ** 3
	},
	{
		unit: "tb",
		factor: 1024 ** 4
	}
];
var FORM_DECIMAL_BYTE_SCALES = DECIMAL_BYTE_SCALES.filter((scale) => scale.unit !== "TB");
function pickFormDecimalByteDisplayUnit(bytes) {
	return pickUnitWithSmallestIntegerValue(bytes, FORM_DECIMAL_BYTE_SCALES);
}
function pickBinaryByteDisplayUnit(bytes) {
	return pickUnitWithSmallestIntegerValue(bytes, BINARY_BYTE_SCALES);
}
function formatByteDisplayValue(value, unitLabel, isBytesUnit) {
	if (isBytesUnit) return `${Math.round(value)} ${unitLabel}`;
	if (Number.isInteger(value)) return `${value} ${unitLabel}`;
	return `${parseFloat(value.toFixed(2))} ${unitLabel}`;
}
function formatDecimalBytes(bytes) {
	const n = toByteCount(bytes);
	if (n <= 0) return "0 B";
	const { value, unit } = pickUnitWithLargestReadableValue(n, DECIMAL_BYTE_SCALES);
	return formatByteDisplayValue(value, unit === "bytes" ? "B" : unit, unit === "bytes");
}
function formatBinaryBytes(bytes) {
	const n = toByteCount(bytes);
	if (n < 0) return String(bytes);
	if (n === 0) return "0 B";
	const { value, unit } = pickUnitWithLargestReadableValue(n, BINARY_BYTE_SCALES);
	return formatByteDisplayValue(value, unit === "bytes" ? "B" : unit.toUpperCase(), unit === "bytes");
}
const FILTER_OPERATORS = [
	{
		key: "equal",
		label: "equal",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"enum",
			"point",
			"linestring",
			"polygon",
			"varchar",
			"text"
		]
	},
	{
		key: "notEqual",
		label: "not equal",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"enum",
			"point",
			"linestring",
			"polygon",
			"varchar",
			"text"
		]
	},
	{
		key: "startsWith",
		label: "starts with",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "notStartsWith",
		label: "not starts with",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "endsWith",
		label: "ends with",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "notEndsWith",
		label: "not ends with",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "contains",
		label: "contains",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"point",
			"linestring",
			"polygon",
			"varchar",
			"text"
		]
	},
	{
		key: "notContains",
		label: "not contains",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"point",
			"linestring",
			"polygon",
			"varchar",
			"text"
		]
	},
	{
		key: "search",
		label: "search",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "notSearch",
		label: "does not match search",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "regex",
		label: "matches regex",
		types: [
			"string",
			"varchar",
			"text"
		]
	},
	{
		key: "greaterThan",
		label: "greater than",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "greaterThanEqual",
		label: "greater than or equal",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "lessThan",
		label: "less than",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "lessThanEqual",
		label: "less than or equal",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "between",
		label: "between",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "notBetween",
		label: "not between",
		types: [
			"integer",
			"bigint",
			"double",
			"datetime"
		]
	},
	{
		key: "isNull",
		label: "is null",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"enum",
			"varchar",
			"text"
		],
		noValue: true
	},
	{
		key: "isNotNull",
		label: "is not null",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"enum",
			"varchar",
			"text"
		],
		noValue: true
	},
	{
		key: "exists",
		label: "exists",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"varchar",
			"text"
		],
		noValue: true
	},
	{
		key: "notExists",
		label: "does not exist",
		types: [
			"string",
			"integer",
			"bigint",
			"double",
			"boolean",
			"datetime",
			"varchar",
			"text"
		],
		noValue: true
	}
];
function getOperatorsForType(columnType, options) {
	let base = FILTER_OPERATORS.filter((op) => op.types.includes(columnType));
	if (options?.fulltextSearchable !== true) base = base.filter((op) => op.key !== "search" && op.key !== "notSearch");
	if (columnType === "enum" && options?.enumOptional !== true) base = base.filter((op) => op.key !== "isNull" && op.key !== "isNotNull");
	return base;
}
function getOperatorsForColumn(column, valueTypeOverride) {
	const columnType = valueTypeOverride ?? column.type;
	const base = getOperatorsForType(columnType, {
		fulltextSearchable: column.customAttributeSlot ? false : !!column.fulltextSearchable,
		enumOptional: columnType === "enum" ? column.optional : void 0
	});
	if (!column.allowedOperators?.length) return base;
	const allowed = new Set(column.allowedOperators);
	return base.filter((op) => allowed.has(op.key));
}
function parseBetweenValue(value) {
	const parts = (typeof value === "string" ? value : Array.isArray(value) ? value.join(",") : String(value ?? "")).split(",").map((p) => p.trim()).filter(Boolean);
	if (parts.length >= 2) return [parts[0], parts[1]];
	return null;
}
function buildFilterQueryString(operatorKey, columnId, value) {
	const safeVal = value ?? "";
	switch (operatorKey) {
		case "equal": return Array.isArray(safeVal) ? Query.equal(columnId, safeVal) : Query.equal(columnId, safeVal);
		case "notEqual": return Query.notEqual(columnId, safeVal);
		case "startsWith": return Query.startsWith(columnId, String(safeVal));
		case "notStartsWith": return Query.notStartsWith(columnId, String(safeVal));
		case "endsWith": return Query.endsWith(columnId, String(safeVal));
		case "notEndsWith": return Query.notEndsWith(columnId, String(safeVal));
		case "contains": return Array.isArray(safeVal) ? Query.contains(columnId, safeVal) : Query.contains(columnId, String(safeVal));
		case "notContains": return Array.isArray(safeVal) ? Query.notContains(columnId, safeVal) : Query.notContains(columnId, String(safeVal));
		case "search": return Query.search(columnId, String(safeVal));
		case "notSearch": return Query.notSearch(columnId, String(safeVal));
		case "regex": return Query.regex(columnId, String(safeVal));
		case "greaterThan": return Query.greaterThan(columnId, safeVal);
		case "greaterThanEqual": return Query.greaterThanEqual(columnId, safeVal);
		case "lessThan": return Query.lessThan(columnId, safeVal);
		case "lessThanEqual": return Query.lessThanEqual(columnId, safeVal);
		case "between": {
			const pair = parseBetweenValue(value);
			if (pair) return Query.between(columnId, pair[0], pair[1]);
			return Query.equal(columnId, safeVal);
		}
		case "notBetween": {
			const pair = parseBetweenValue(value);
			if (pair) return Query.notBetween(columnId, pair[0], pair[1]);
			return Query.notEqual(columnId, safeVal);
		}
		case "isNull": return Query.isNull(columnId);
		case "isNotNull": return Query.isNotNull(columnId);
		case "exists": return Query.exists([columnId]);
		case "notExists": return Query.notExists([columnId]);
		default: return Query.equal(columnId, safeVal);
	}
}
function buildFilterTag(columnTitle, operatorLabel, value) {
	if (value == null || value === "" || Array.isArray(value) && value.length === 0) return {
		tag: `**${columnTitle}** ${operatorLabel}`,
		value: ""
	};
	let display = Array.isArray(value) ? value.join(", ") : String(value);
	if ((operatorLabel === "between" || operatorLabel === "not between") && display.includes(",")) display = display.split(",").map((p) => p.trim()).filter(Boolean).join(" and ");
	return {
		tag: `**${columnTitle}** ${operatorLabel} **${display}**`,
		value
	};
}
function buildFilterTagFromCompactKey(key, columns) {
	const col = columns.find((c) => c.id === key.c);
	if (!col) {
		const opLabel$1 = FILTER_OPERATORS.find((o) => o.key === key.o)?.label ?? key.o;
		let tagDisplayVal$1 = "";
		if (key.v !== void 0 && key.v !== "") tagDisplayVal$1 = Array.isArray(key.v) ? key.v.join(", ") : String(key.v);
		return buildFilterTag(String(key.c), opLabel$1, tagDisplayVal$1 || void 0);
	}
	const op = getOperatorsForColumn(col).find((o) => o.key === key.o);
	const opLabel = op?.label ?? key.o;
	if (op?.noValue) return buildFilterTag(col.title, opLabel, void 0);
	let tagDisplayVal;
	if (col.id === "status" && (key.v === true || key.v === false)) tagDisplayVal = key.v ? "Enabled" : "Disabled";
	else if (col.format === "size" && typeof key.v === "number") tagDisplayVal = formatBytesForFilter(key.v);
	else if (key.v !== void 0 && key.v !== "") tagDisplayVal = Array.isArray(key.v) ? key.v.join(", ") : String(key.v);
	else tagDisplayVal = "";
	return buildFilterTag(col.title, opLabel, tagDisplayVal || void 0);
}
function formatBytesForFilter(bytes) {
	return formatBinaryBytes(bytes);
}
var PARAM_SEARCH = "search";
var PARAM_QUERY = "query";
var PARAM_PAGE = "page";
var PARAM_LIMIT = "limit";
var PARAM_SORT = "sort";
function getSearch(url) {
	const v = url.searchParams.get(PARAM_SEARCH)?.trim();
	return v === "" ? void 0 : v;
}
function getPage(url, defaultPage = 1) {
	const p = url.searchParams.get(PARAM_PAGE);
	if (p == null || p === "") return defaultPage;
	const n = Number(p);
	return Number.isInteger(n) && n >= 1 ? n : defaultPage;
}
function getLimit(url, defaultLimit) {
	const p = url.searchParams.get(PARAM_LIMIT);
	if (p == null || p === "") return defaultLimit;
	const n = Number(p);
	return Number.isInteger(n) && n >= 1 ? n : defaultLimit;
}
function getQueryParam(url) {
	return url.searchParams.get(PARAM_QUERY);
}
function compactFilterKeysEqual(a, b) {
	if (a.c !== b.c || a.o !== b.o) return false;
	const av = a.v;
	const bv = b.v;
	if (av === bv) return true;
	if (av === void 0 && bv === void 0) return true;
	if (av === void 0 || bv === void 0) return false;
	if (Array.isArray(av) && Array.isArray(bv)) {
		if (av.length !== bv.length) return false;
		return av.every((x, i) => x === bv[i]);
	}
	return av === bv;
}
function findCompactFilterKeyInMap(map, key) {
	for (const k of map.keys()) if (compactFilterKeysEqual(k, key)) return k;
}
function queryParamToMap(param) {
	if (param == null || param === "") return /* @__PURE__ */ new Map();
	try {
		const decoded = decodeURIComponent(param);
		const keys = JSON.parse(decoded);
		if (!Array.isArray(keys)) return /* @__PURE__ */ new Map();
		return new Map(keys.map((k) => [k, buildFilterQueryString(k.o, k.c, k.v)]));
	} catch {
		return /* @__PURE__ */ new Map();
	}
}
function mapToQueryParam(map) {
	if (map.size === 0) return "";
	const keys = Array.from(map.keys());
	return encodeURIComponent(JSON.stringify(keys));
}
function parseSort(param) {
	const v = param?.trim();
	if (!v) return void 0;
	const lastUnderscore = v.lastIndexOf("_");
	if (lastUnderscore <= 0 || lastUnderscore === v.length - 1) return void 0;
	const sortBy = v.slice(0, lastUnderscore);
	const order = v.slice(lastUnderscore + 1).toLowerCase();
	if (order !== "asc" && order !== "desc") return void 0;
	return {
		sortBy,
		sortOrder: order
	};
}
function encodeSort(sortBy, sortOrder) {
	return `${sortBy}_${sortOrder}`;
}
function getSort(url) {
	return parseSort(url.searchParams.get(PARAM_SORT));
}
const MIN_SEARCH_LENGTH = 3;
function urlFromRouterLocation(location, base = "http://localhost") {
	if (location.href) try {
		return new URL(location.href);
	} catch {}
	if (typeof location.searchStr === "string") return new URL(location.pathname + location.searchStr, base);
	if (typeof location.search === "string") {
		const search = location.search.startsWith("?") ? location.search : location.search ? `?${location.search}` : "";
		return new URL(location.pathname + search, base);
	}
	if (location.search instanceof URLSearchParams) {
		const qs = location.search.toString();
		return new URL(location.pathname + (qs ? `?${qs}` : ""), base);
	}
	if (location.search && typeof location.search === "object") {
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(location.search)) if (value !== void 0 && value !== null && value !== "") params.set(key, String(value));
		const qs = params.toString();
		return new URL(location.pathname + (qs ? `?${qs}` : ""), base);
	}
	return new URL(location.pathname, base);
}
function searchParamsFromRouterLocation(location, base = "http://localhost") {
	return urlFromRouterLocation(location, base).searchParams;
}
function parseListSearch(routeSearch, defaults) {
	const page = routeSearch?.page != null && Number.isInteger(routeSearch.page) && routeSearch.page >= 1 ? routeSearch.page : defaults.page ?? 1;
	const limit = routeSearch?.limit != null && Number.isInteger(routeSearch.limit) && routeSearch.limit >= 1 ? routeSearch.limit : defaults.limit;
	const searchText = routeSearch?.search?.trim();
	const filterMap = queryParamToMap(routeSearch?.query ?? null);
	const filterQueries = filterMap.size > 0 ? Array.from(filterMap.values()) : void 0;
	const sort = parseSort(routeSearch?.sort);
	return {
		search: searchText === "" ? void 0 : searchText,
		page,
		limit,
		filterMap,
		filterQueries,
		sort
	};
}
function buildListSearchParams(params) {
	const out = {};
	const search = params.search?.trim();
	if (search) out[PARAM_SEARCH] = search;
	if (params.query) out[PARAM_QUERY] = params.query;
	if (params.page != null && params.page > 1) out[PARAM_PAGE] = params.page;
	if (params.limit != null && params.limit > 0) out[PARAM_LIMIT] = params.limit;
	if (params.sort) out[PARAM_SORT] = params.sort;
	return out;
}
const listSearchSchema = z.object({
	search: z.string().optional().catch(void 0),
	query: z.string().optional().catch(void 0),
	page: z.coerce.number().int().min(1).optional().catch(void 0),
	limit: z.coerce.number().int().min(1).max(100).optional().catch(void 0),
	sort: z.string().optional().catch(void 0),
	openRowCreate: z.literal("1").optional().catch(void 0)
});
const usersFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "email",
		title: "Email",
		type: "string"
	},
	{
		id: "phone",
		title: "Phone",
		type: "string"
	},
	{
		id: "status",
		title: "Status",
		type: "enum",
		elements: [{
			value: "enabled",
			label: "Enabled"
		}, {
			value: "disabled",
			label: "Disabled"
		}],
		optional: false
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	},
	{
		id: "accessedAt",
		title: "Last activity",
		type: "datetime"
	}
];
const teamsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
const bucketsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "enabled",
		title: "Status",
		type: "boolean"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
const filesFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "signature",
		title: "Signature",
		type: "string"
	},
	{
		id: "mimeType",
		title: "MIME type",
		type: "string"
	},
	{
		id: "sizeOriginal",
		title: "Size",
		type: "integer",
		format: "size"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
function normalizeDatabaseServiceKey(value) {
	return value.trim().toLowerCase().replace(/-/g, "");
}
function getDatabaseServiceLucideIcon(serviceKey) {
	const key = normalizeDatabaseServiceKey(serviceKey);
	if (key === "tablesdb" || key === String(DatabaseType.Tablesdb).toLowerCase()) return icons_exports.Table;
	if (key === "documentsdb" || key === String(DatabaseType.Documentsdb).toLowerCase()) return icons_exports.Braces;
	if (key === "vectorsdb" || key === String(DatabaseType.Vectorsdb).toLowerCase()) return icons_exports.Layers;
	if (key === "databases" || key === "legacy" || key === String(DatabaseType.Legacy).toLowerCase()) return icons_exports.Table;
	return null;
}
function formatDatabaseServiceLabel(serviceKey) {
	switch (normalizeDatabaseServiceKey(serviceKey)) {
		case "tablesdb":
		case "databases":
		case "legacy": return "TablesDB";
		case "documentsdb": return "DocumentsDB";
		case "vectorsdb": return "VectorsDB";
		default: return null;
	}
}
const DATABASE_TYPE_FILTER_COLUMN_ID = "type";
var DATABASE_TYPE_ORDER = [
	DatabaseType.Tablesdb,
	DatabaseType.Documentsdb,
	DatabaseType.Vectorsdb
];
function databaseTypeFilterElements(features) {
	const types = [DatabaseType.Tablesdb];
	if (features.dedicatedDbsDocumentsDB) types.push(DatabaseType.Documentsdb);
	if (features.dedicatedDbsVectorsDB) types.push(DatabaseType.Vectorsdb);
	return types.map((value) => ({
		value,
		label: formatDatabaseServiceLabel(value) ?? value
	}));
}
function getDatabasesFilterColumns(features) {
	const columns = [{
		id: "$id",
		title: "$id",
		type: "string"
	}, {
		id: "name",
		title: "Name",
		type: "string"
	}];
	if (features.dedicatedDbsSupport) columns.push({
		id: DATABASE_TYPE_FILTER_COLUMN_ID,
		title: "Type",
		type: "enum",
		format: "enum",
		elements: databaseTypeFilterElements(features),
		optional: false
	});
	columns.push({
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	}, {
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	});
	return columns;
}
const databasesFilterColumns = getDatabasesFilterColumns({
	dedicatedDbsSupport: true,
	dedicatedDbsDocumentsDB: true,
	dedicatedDbsVectorsDB: true
});
function getDatabaseTypeFilterOptions(features) {
	return databaseTypeFilterElements(features).map((el) => ({
		value: el.value,
		label: el.label
	}));
}
function normalizeTypeValues(value) {
	if (value == null) return [];
	const raw = Array.isArray(value) ? value : [value];
	const allowed = new Set(DATABASE_TYPE_ORDER);
	const selected = /* @__PURE__ */ new Set();
	for (const item of raw) {
		const key = String(item);
		if (allowed.has(key)) selected.add(key);
	}
	return DATABASE_TYPE_ORDER.filter((type) => selected.has(type));
}
function getSelectedDatabaseTypesFromFilterMap(filterMap) {
	for (const key of filterMap.keys()) if (key.c === "type" && key.o === "equal") return normalizeTypeValues(key.v);
	return [];
}
function omitDatabaseTypeFilters(filterMap) {
	const next = new Map(filterMap);
	for (const key of [...next.keys()]) if (key.c === "type") next.delete(key);
	return next;
}
function setSelectedDatabaseTypesInFilterMap(filterMap, types) {
	const next = omitDatabaseTypeFilters(filterMap);
	const selected = normalizeTypeValues(types);
	if (selected.length === 0) return next;
	const value = selected.length === 1 ? selected[0] : selected;
	const compactKey = {
		c: DATABASE_TYPE_FILTER_COLUMN_ID,
		o: "equal",
		v: value
	};
	const existing = findCompactFilterKeyInMap(next, compactKey);
	if (existing) next.delete(existing);
	next.set(compactKey, buildFilterQueryString("equal", DATABASE_TYPE_FILTER_COLUMN_ID, value));
	return next;
}
const functionsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "runtime",
		title: "Runtime",
		type: "string"
	},
	{
		id: "latestDeploymentStatus",
		title: "Deployment status",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "ready",
				label: "Ready"
			},
			{
				value: "building",
				label: "Building"
			},
			{
				value: "processing",
				label: "Processing"
			},
			{
				value: "waiting",
				label: "Waiting"
			},
			{
				value: "failed",
				label: "Failed"
			},
			{
				value: "timeout",
				label: "Timeout"
			}
		],
		optional: false
	},
	{
		id: "enabled",
		title: "Enabled",
		type: "boolean"
	},
	{
		id: "live",
		title: "Live",
		type: "boolean"
	},
	{
		id: "deploymentCreatedAt",
		title: "Last deployed",
		type: "datetime"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
const sitesFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "latestDeploymentStatus",
		title: "Deployment status",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "ready",
				label: "Ready"
			},
			{
				value: "building",
				label: "Building"
			},
			{
				value: "processing",
				label: "Processing"
			},
			{
				value: "waiting",
				label: "Waiting"
			},
			{
				value: "failed",
				label: "Failed"
			},
			{
				value: "timeout",
				label: "Timeout"
			}
		],
		optional: false
	},
	{
		id: "enabled",
		title: "Enabled",
		type: "boolean"
	},
	{
		id: "live",
		title: "Live",
		type: "boolean"
	},
	{
		id: "deploymentCreatedAt",
		title: "Last deployed",
		type: "datetime"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
const domainsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "domain",
		title: "Domain",
		type: "string"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
const dnsRecordsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "type",
		title: "Type",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "A",
				label: "A"
			},
			{
				value: "AAAA",
				label: "AAAA"
			},
			{
				value: "CNAME",
				label: "CNAME"
			},
			{
				value: "MX",
				label: "MX"
			},
			{
				value: "TXT",
				label: "TXT"
			},
			{
				value: "NS",
				label: "NS"
			},
			{
				value: "SRV",
				label: "SRV"
			},
			{
				value: "CAA",
				label: "CAA"
			},
			{
				value: "HTTPS",
				label: "HTTPS"
			},
			{
				value: "ALIAS",
				label: "ALIAS"
			}
		],
		optional: false
	},
	{
		id: "value",
		title: "Value",
		type: "string"
	},
	{
		id: "ttl",
		title: "TTL",
		type: "integer"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	}
];
const deploymentsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "status",
		title: "Status",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "ready",
				label: "Ready"
			},
			{
				value: "building",
				label: "Building"
			},
			{
				value: "processing",
				label: "Processing"
			},
			{
				value: "waiting",
				label: "Waiting"
			},
			{
				value: "failed",
				label: "Failed"
			},
			{
				value: "timeout",
				label: "Timeout"
			}
		],
		optional: false
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	}
];
const executionsFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "deploymentId",
		title: "Deployment ID",
		type: "string"
	},
	{
		id: "status",
		title: "Status",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "completed",
				label: "Completed"
			},
			{
				value: "processing",
				label: "Processing"
			},
			{
				value: "failed",
				label: "Failed"
			},
			{
				value: "waiting",
				label: "Waiting"
			},
			{
				value: "scheduled",
				label: "Scheduled"
			}
		],
		optional: false
	},
	{
		id: "trigger",
		title: "Trigger",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "http",
				label: "HTTP"
			},
			{
				value: "schedule",
				label: "Schedule"
			},
			{
				value: "event",
				label: "Event"
			}
		],
		optional: false
	},
	{
		id: "requestMethod",
		title: "Method",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "GET",
				label: "GET"
			},
			{
				value: "POST",
				label: "POST"
			},
			{
				value: "PUT",
				label: "PUT"
			},
			{
				value: "PATCH",
				label: "PATCH"
			},
			{
				value: "DELETE",
				label: "DELETE"
			},
			{
				value: "OPTIONS",
				label: "OPTIONS"
			},
			{
				value: "HEAD",
				label: "HEAD"
			}
		],
		optional: false
	},
	{
		id: "responseStatusCode",
		title: "Status code",
		type: "integer"
	},
	{
		id: "requestPath",
		title: "Path",
		type: "string"
	},
	{
		id: "duration",
		title: "Duration",
		type: "double"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	}
];
var ACTIVITY_CORE_FILTER_COLUMNS = [
	{
		id: "time",
		title: "Time",
		type: "datetime"
	},
	{
		id: "resourceType",
		title: "Resource type",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "document",
				label: "Document"
			},
			{
				value: "collection",
				label: "Collection"
			},
			{
				value: "database",
				label: "Database"
			},
			{
				value: "file",
				label: "File"
			},
			{
				value: "bucket",
				label: "Bucket"
			},
			{
				value: "function",
				label: "Function"
			},
			{
				value: "user",
				label: "User / key"
			},
			{
				value: "team",
				label: "Team"
			},
			{
				value: "site",
				label: "Site"
			},
			{
				value: "rule",
				label: "Rule"
			},
			{
				value: "project",
				label: "Project"
			}
		],
		optional: false
	},
	{
		id: "actorType",
		title: "Actor type",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "user",
				label: "User (client API)"
			},
			{
				value: "admin",
				label: "Admin"
			},
			{
				value: "guest",
				label: "Guest"
			},
			{
				value: "keyProject",
				label: "Project API key"
			},
			{
				value: "keyAccount",
				label: "Account API key"
			},
			{
				value: "keyOrganization",
				label: "Organization API key"
			}
		],
		optional: false
	},
	{
		id: "actorId",
		title: "Actor ID",
		type: "string"
	},
	{
		id: "event",
		title: "Event path",
		type: "string"
	}
];
function getActivitiesFilterColumns(countryElements) {
	return [
		...ACTIVITY_CORE_FILTER_COLUMNS,
		{
			id: "country",
			title: "Country",
			type: "enum",
			format: "enum",
			elements: countryElements,
			optional: false
		},
		{
			id: "ip",
			title: "IP address",
			type: "string"
		}
	];
}
const activitiesFilterColumns = getActivitiesFilterColumns([]);
function normalizeActivityCountryFilterKey(key) {
	if (key.c !== "country" || key.v == null || key.v === "") return key;
	if (Array.isArray(key.v)) return {
		...key,
		v: key.v.map((item) => String(item).toLowerCase())
	};
	return {
		...key,
		v: String(key.v).toLowerCase()
	};
}
function activityFilterQueryString(key) {
	const normalized = key.c === "country" ? normalizeActivityCountryFilterKey(key) : key;
	return buildFilterQueryString(normalized.o, normalized.c, normalized.v);
}
function maxIso(a, b) {
	return a >= b ? a : b;
}
function minIso(a, b) {
	return a <= b ? a : b;
}
function getActivityFilterQueryParts(filterMap, planSinceIso) {
	let userLo;
	let userHi;
	for (const [k] of filterMap) {
		if (k.c !== "time") continue;
		const v = k.v;
		if (k.o === "between" && v != null) {
			const parts = (Array.isArray(v) ? v.join(",") : String(v)).split(",").map((p) => p.trim()).filter(Boolean);
			if (parts.length >= 2) {
				userLo = userLo ? maxIso(userLo, parts[0]) : parts[0];
				userHi = userHi ? minIso(userHi, parts[1]) : parts[1];
			}
		} else if ((k.o === "greaterThanEqual" || k.o === "greaterThan") && v != null && v !== "") {
			const s = String(v);
			userLo = userLo ? maxIso(userLo, s) : s;
		} else if ((k.o === "lessThanEqual" || k.o === "lessThan") && v != null && v !== "") {
			const s = String(v);
			userHi = userHi ? minIso(userHi, s) : s;
		}
	}
	const mergedSince = userLo ? maxIso(planSinceIso, userLo) : planSinceIso;
	const nowIso = (/* @__PURE__ */ new Date()).toISOString();
	return {
		mergedSince,
		until: userHi ? minIso(nowIso, userHi) : void 0,
		extraQueries: [...filterMap.entries()].filter(([key]) => key.c !== "time").map(([key]) => activityFilterQueryString(key))
	};
}
const proxyRulesFilterColumns = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "domain",
		title: "Domain",
		type: "string"
	},
	{
		id: "status",
		title: "Status",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "verified",
				label: "Verified"
			},
			{
				value: "verifying",
				label: "Verifying"
			},
			{
				value: "unverified",
				label: "Unverified"
			},
			{
				value: "created",
				label: "Created"
			}
		],
		optional: false
	},
	{
		id: "type",
		title: "Type",
		type: "string"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	}
];
const tableColumnsFilterColumns = [
	{
		id: "key",
		title: "Key",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "type",
		title: "Type",
		type: "enum",
		format: "enum",
		elements: [
			{
				value: "text",
				label: "Text"
			},
			{
				value: "mediumtext",
				label: "Mediumtext"
			},
			{
				value: "longtext",
				label: "Longtext"
			},
			{
				value: "varchar",
				label: "Varchar"
			},
			{
				value: "integer",
				label: "Integer"
			},
			{
				value: "bigint",
				label: "Bigint"
			},
			{
				value: "double",
				label: "Float"
			},
			{
				value: "boolean",
				label: "Boolean"
			},
			{
				value: "datetime",
				label: "Datetime"
			},
			{
				value: "email",
				label: "Email"
			},
			{
				value: "ip",
				label: "IP"
			},
			{
				value: "url",
				label: "URL"
			},
			{
				value: "enum",
				label: "Enum"
			},
			{
				value: "relationship",
				label: "Relationship"
			},
			{
				value: "point",
				label: "Point"
			},
			{
				value: "linestring",
				label: "Line"
			},
			{
				value: "polygon",
				label: "Polygon"
			},
			{
				value: "string",
				label: "String (deprecated)"
			}
		],
		optional: false
	}
];
const COLLECTION_INDEX_TYPES = [
	{
		id: "key",
		label: "Key",
		description: "Speed up filters and sorting on indexed fields."
	},
	{
		id: "unique",
		label: "Unique",
		description: "Reject duplicate values across indexed fields."
	},
	{
		id: "fulltext",
		label: "Fulltext",
		description: "Enable text search on string fields."
	},
	{
		id: "spatial",
		label: "Spatial",
		description: "Accelerate location queries on spatial fields."
	}
];
function getCollectionIndexTypeDefinition(type) {
	return COLLECTION_INDEX_TYPES.find((entry) => entry.id === type) ?? COLLECTION_INDEX_TYPES[0];
}
function getCollectionIndexTypeSearchValue(entry) {
	return `${entry.label} ${entry.description}`;
}
const tableIndexesFilterColumns = [
	{
		id: "key",
		title: "Key",
		type: "string"
	},
	{
		id: "name",
		title: "Name",
		type: "string"
	},
	{
		id: "type",
		title: "Type",
		type: "enum",
		format: "enum",
		elements: COLLECTION_INDEX_TYPES.map((entry) => ({
			value: entry.id,
			label: entry.label,
			description: entry.description
		})),
		optional: false
	}
];
function mapAttributeTypeToFilterType(type) {
	switch (type) {
		case "integer": return "integer";
		case "bigint": return "bigint";
		case "double":
		case "float": return "double";
		case "boolean": return "boolean";
		case "datetime": return "datetime";
		case "enum": return "enum";
		case "string":
		case "varchar":
		case "text":
		case "email":
		case "ip":
		case "url":
		default: return "string";
	}
}
var ROWS_SYSTEM_COLUMNS = [
	{
		id: "$id",
		title: "$id",
		type: "string"
	},
	{
		id: "$createdAt",
		title: "$createdAt",
		type: "datetime"
	},
	{
		id: "$updatedAt",
		title: "$updatedAt",
		type: "datetime"
	}
];
function rowsFilterColumnsFromAttributes(attributes, indexes) {
	const fulltextColumnKeys = /* @__PURE__ */ new Set();
	if (indexes?.length) {
		for (const idx of indexes) if (idx.type === "fulltext" && Array.isArray(idx.columns)) {
			for (const key of idx.columns) if (key && typeof key === "string") fulltextColumnKeys.add(key);
		}
	}
	if (!attributes?.length) return ROWS_SYSTEM_COLUMNS;
	const fromAttrs = attributes.filter((a) => a.key && !a.key.startsWith("$")).map((attr) => {
		const type = mapAttributeTypeToFilterType(attr.type);
		const col = {
			id: attr.key,
			title: attr.name || attr.key,
			type,
			fulltextSearchable: fulltextColumnKeys.has(attr.key)
		};
		if (type === "enum" && attr.elements?.length) col.elements = attr.elements.map((e) => ({
			value: e.value,
			label: e.label ?? String(e.value)
		}));
		if (type === "enum") col.optional = attr.required === false;
		return col;
	});
	return [...ROWS_SYSTEM_COLUMNS, ...fromAttrs];
}
const DOCUMENTS_DB_CUSTOM_ATTRIBUTE_FILTER_COLUMN_ID = "__documentsDbCustomAttribute";
function appendDocumentsDbCustomAttributeFilter(columns) {
	const slot = {
		id: DOCUMENTS_DB_CUSTOM_ATTRIBUTE_FILTER_COLUMN_ID,
		title: "Custom attribute",
		type: "string",
		customAttributeSlot: true
	};
	return [...columns, slot];
}
const SIZE_FILTER_UNITS = [
	{
		value: "bytes",
		label: "Bytes"
	},
	{
		value: "kb",
		label: "KB"
	},
	{
		value: "mb",
		label: "MB"
	},
	{
		value: "gb",
		label: "GB"
	},
	{
		value: "tb",
		label: "TB"
	}
];
function sizeFilterToBytes(value, unit) {
	const k = 1024;
	const factor = {
		bytes: 1,
		kb: k,
		mb: k * k,
		gb: k * k * k,
		tb: k * k * k * k
	}[unit.toLowerCase()] ?? 1;
	return Math.round(value * factor);
}
function bytesToSizeFilterInput(bytes) {
	if (!Number.isFinite(bytes) || bytes < 0) return {
		value: String(bytes),
		unit: "bytes"
	};
	const { value, unit } = pickBinaryByteDisplayUnit(bytes);
	return {
		value: Number.isInteger(value) ? String(value) : String(parseFloat(value.toFixed(6))),
		unit
	};
}
var CREATABLE_ID_DESCRIPTION$1 = /(?:choose a custom .{0,40}? id|generate a random id|id\.unique\(\))/i;
var RESOURCE_ID_PARAM_NAMES = {
	databaseid: "database",
	bucketid: "bucket",
	fileid: "file",
	tableid: "table",
	collectionid: "table",
	documentid: "row",
	rowid: "row",
	columnid: "column",
	attributeid: "column",
	key: "column",
	indexid: "index",
	functionid: "function",
	siteid: "site",
	teamid: "team",
	userid: "user",
	topicid: "topic",
	providerid: "provider"
};
function resolveResourceIdType(paramName) {
	return RESOURCE_ID_PARAM_NAMES[paramName.trim().toLowerCase()] ?? null;
}
function shouldOfferResourceIdPicker(schema, paramName, paramIn) {
	if (isCreatableIdReference(schema, paramIn)) return false;
	return resolveResourceIdType(paramName) !== null;
}
function isCreatableIdReference(schema, paramIn) {
	if (paramIn === "path" || paramIn === "query") return false;
	if (schema.type && schema.type !== "string") return false;
	const description = schema.description?.trim() ?? "";
	if (!description) return false;
	return CREATABLE_ID_DESCRIPTION$1.test(description);
}
function isPermissionsField(name, kind, schema) {
	if (!kind.startsWith("array")) return false;
	if (name === "permissions") return true;
	if (/permissions?/i.test(name)) return true;
	return (schema?.description?.toLowerCase() ?? "").includes("permission");
}
function isQueriesField(name, schema) {
	if (name !== "queries") return false;
	const type = schema?.type;
	if (type === "array" || type === "string") return true;
	const description = schema?.description?.toLowerCase() ?? "";
	return description.includes("query class") || description.includes("query strings");
}
function isStorageFilePermissionsContext(method) {
	if (!method || method.service !== "storage") return false;
	return /\/files(?:\/|$)/i.test(method.path);
}
function isResourceCreateMethod(method) {
	if (!method || method.httpMethod !== "post") return false;
	const summary = method.summary ?? "";
	if (!/create/i.test(summary)) return false;
	if (method.service === "databases") return true;
	if (method.path.includes("/tables") || method.path.includes("/collections")) return true;
	if (method.service === "storage") return method.path.includes("/buckets") && !isStorageFilePermissionsContext(method);
	return false;
}
function getPermissionsEditorOptions(method, fieldName) {
	if (fieldName === "execute" && method?.service === "functions") return { executeOnly: true };
	if (isStorageFilePermissionsContext(method)) return {
		withCreate: false,
		withWrite: true
	};
	if (isResourceCreateMethod(method)) return { withCreate: true };
	return { withCreate: false };
}
function resolveFieldHelper(name, schema, kind, paramIn, method) {
	if (shouldOfferResourceIdPicker(schema, name, paramIn)) {
		const resourceType = resolveResourceIdType(name);
		if (resourceType) return {
			type: "resource-id",
			resourceType
		};
	}
	if (isPermissionsField(name, kind, schema)) return {
		type: "permissions",
		...getPermissionsEditorOptions(method, name)
	};
	if (isQueriesField(name, schema)) return { type: "queries" };
}
function attachFieldHelper(field, schema, paramIn, method) {
	const kind = isQueriesField(field.name, schema) && field.kind === "string" ? "array-string" : field.kind;
	const normalizedField = kind === field.kind ? field : {
		...field,
		kind
	};
	const helper = resolveFieldHelper(normalizedField.name, schema, normalizedField.kind, paramIn, method);
	if (!helper) return normalizedField;
	return {
		...normalizedField,
		helper
	};
}
function getQueryFilterColumnsForMethod(method) {
	if (!method) return genericQueryFilterColumns();
	const path = method.path.toLowerCase();
	if (path.includes("/users")) return usersFilterColumns;
	if (path.includes("/teams")) return teamsFilterColumns;
	if (path.includes("/storage/buckets") && path.includes("/files")) return filesFilterColumns;
	if (path.includes("/storage/buckets")) return bucketsFilterColumns;
	if (path.includes("/documents") || path.includes("/rows") || path.includes("/collections")) return genericQueryFilterColumns();
	if (path.includes("/databases")) return databasesFilterColumns;
	if (path.includes("/functions") && path.includes("/executions")) return executionsFilterColumns;
	if (path.includes("/functions") && path.includes("/deployments")) return deploymentsFilterColumns;
	if (path.includes("/functions")) return functionsFilterColumns;
	if (path.includes("/sites") && path.includes("/deployments")) return deploymentsFilterColumns;
	if (path.includes("/sites")) return sitesFilterColumns;
	if (path.includes("/activities")) return activitiesFilterColumns;
	return genericQueryFilterColumns();
}
function genericQueryFilterColumns() {
	return [
		{
			id: "$id",
			title: "$id",
			type: "string"
		},
		{
			id: "$createdAt",
			title: "$createdAt",
			type: "datetime"
		},
		{
			id: "$updatedAt",
			title: "$updatedAt",
			type: "datetime"
		}
	];
}
function resolveResourceIdContext(formValues) {
	const read = (...keys) => {
		for (const key of keys) {
			const raw = formValues[key];
			if (typeof raw === "string" && raw.trim()) return raw.trim();
		}
	};
	return {
		databaseId: read("databaseId", "database"),
		tableId: read("tableId", "collectionId", "table"),
		bucketId: read("bucketId", "bucket")
	};
}
var OPENAPI_STRING_FORMAT_KIND = {
	password: "password",
	email: "email",
	url: "url",
	phone: "phone",
	datetime: "datetime",
	binary: "binary",
	ip: "ip"
};
var OPENAPI_NUMBER_FORMATS = new Set(["float", "double"]);
var OPENAPI_STRING_FORMATS = new Set([
	"password",
	"email",
	"url",
	"phone",
	"datetime",
	"ip",
	"id",
	"binary",
	"uuid"
]);
var OPENAPI_PRIMITIVE_TYPES = new Set([
	"string",
	"integer",
	"number",
	"boolean",
	"array",
	"object",
	"enum"
]);
function normalizeOpenApiPrimitiveType(type) {
	const trimmed = type.trim();
	const normalized = trimmed.toLowerCase();
	if (trimmed === normalized) {
		if (OPENAPI_STRING_FORMATS.has(normalized)) return "string";
		if (OPENAPI_NUMBER_FORMATS.has(normalized)) return "number";
	}
	if (OPENAPI_PRIMITIVE_TYPES.has(normalized)) return normalized;
	return trimmed;
}
function getFormFieldTypeLabel(kind) {
	return getFormFieldOpenApiTypeLabel(kind);
}
function getFormFieldOpenApiTypeLabel(kind) {
	switch (kind) {
		case "boolean": return "boolean";
		case "integer": return "integer";
		case "number": return "number";
		case "enum":
		case "array-enum": return "enum";
		case "array-string":
		case "array-number": return "array";
		case "json": return "object";
		case "binary": return "file";
		case "password":
		case "email":
		case "url":
		case "phone":
		case "datetime":
		case "ip":
		case "id":
		case "string":
		default: return "string";
	}
}
function getFormFieldPlaceholder(kind, options) {
	switch (kind) {
		case "password": return "// enter password";
		case "email": return "// user@example.com";
		case "url": return "// https://example.com";
		case "phone": return "// +1234567890";
		case "datetime": return "// select date and time";
		case "ip": return "// 127.0.0.1";
		case "id": return options?.required ? "// required custom ID" : "// optional custom ID";
		case "json": return "// enter JSON object";
		case "integer":
		case "number":
		default: return "// enter value";
	}
}
function serializeDatetimeApiValue(value) {
	const trimmed = value.trim();
	if (!trimmed) return "";
	if (/[zZ]|[+-]\d{2}:\d{2}$/.test(trimmed)) return trimmed;
	const date = new Date(trimmed);
	if (Number.isNaN(date.getTime())) return trimmed;
	return date.toISOString();
}
function kindFromOpenApiStringFormat(format$1) {
	if (!format$1) return "string";
	return OPENAPI_STRING_FORMAT_KIND[format$1] ?? "string";
}
var CREATABLE_ID_DESCRIPTION = /(?:choose a custom .{0,40}? id|generate a random id|id\.unique\(\))/i;
function isCreatableIdSchema(schema) {
	const description = schema.description?.trim() ?? "";
	if (!description) return false;
	return CREATABLE_ID_DESCRIPTION.test(description);
}
function isCreatableIdField(schema, paramIn) {
	if (paramIn === "path" || paramIn === "query") return false;
	if (schema.type && schema.type !== "string") return false;
	return isCreatableIdSchema(schema);
}
function getRequestBodyJsonSchema(method) {
	return method.requestBody?.content?.["application/json"]?.schema;
}
function getRequestBodyContentSchema(method) {
	const content = method.requestBody?.content;
	if (!content) return void 0;
	return content["application/json"]?.schema ?? content["multipart/form-data"]?.schema;
}
function hasRequestBodyForMethod(method) {
	return getRequestBodyFormFields(method).length > 0;
}
function getRequestBodyFormFields(method) {
	const schema = getRequestBodyContentSchema(method);
	if (!schema?.properties) return [];
	const requiredSet = new Set(schema.required ?? []);
	return Object.entries(schema.properties).map(([name, propertySchema]) => attachFieldHelper(schemaToFormField(name, propertySchema, requiredSet.has(name)), propertySchema, void 0, method));
}
function parameterToFormField(param, method) {
	const schema = param.schema ?? { type: "string" };
	return attachFieldHelper(schemaToFormField(param.name, schema, Boolean(param.required), param.in, param.description), schema, param.in, method);
}
function schemaToFormField(name, schema, required, paramIn, paramDescription) {
	const base = {
		name,
		label: name,
		description: paramDescription?.trim() || schema.description,
		required,
		nullable: schema["x-nullable"] === true
	};
	if (isCreatableIdField(schema, paramIn)) return {
		...base,
		kind: "id"
	};
	if (schema.type === "boolean") return {
		...base,
		kind: "boolean"
	};
	if (schema.type === "integer" || schema.format === "int32" || schema.format === "int64") return {
		...base,
		kind: "integer"
	};
	if (schema.type === "number" || schema.format && OPENAPI_NUMBER_FORMATS.has(schema.format)) return {
		...base,
		kind: "number"
	};
	if (schema.type === "array") {
		const items = schema.items ?? {};
		if (items.enum?.length) return {
			...base,
			kind: "array-enum",
			enumValues: items.enum.map(String)
		};
		if (items.type === "integer" || items.type === "number") return {
			...base,
			kind: "array-number"
		};
		if (items.type === "string") return {
			...base,
			kind: "array-string"
		};
		return {
			...base,
			kind: "json"
		};
	}
	if (schema.type === "object" || !schema.type && !schema.enum?.length) return {
		...base,
		kind: "json"
	};
	if (schema.enum?.length) return {
		...base,
		kind: "enum",
		enumValues: schema.enum.map(String)
	};
	if (schema.type === "string" || !schema.type && schema.format) return {
		...base,
		kind: kindFromOpenApiStringFormat(schema.format)
	};
	return {
		...base,
		kind: "string"
	};
}
function defaultValueForField(field, schema) {
	if (schema) return valueFromParsed(field, buildSampleValue(schema));
	switch (field.kind) {
		case "boolean": return false;
		case "integer":
		case "number": return 0;
		case "array-string":
		case "array-enum":
		case "array-number": return [];
		case "json": return "{}";
		case "binary": return null;
		default: return "";
	}
}
function valueFromParsed(field, value) {
	if (value === null || value === void 0) return field.nullable ? null : defaultValueForField(field);
	switch (field.kind) {
		case "boolean": return Boolean(value);
		case "integer": return typeof value === "number" ? Math.trunc(value) : Number(value) || 0;
		case "number": return typeof value === "number" ? value : Number(value) || 0;
		case "enum":
		case "string":
		case "id":
		case "password":
		case "email":
		case "url":
		case "phone":
		case "ip":
		case "datetime":
		case "binary": return null;
		case "array-string":
		case "array-enum":
		case "array-number": return Array.isArray(value) ? value.map(String) : [];
		case "json": return typeof value === "string" ? value : JSON.stringify(value, null, 2);
		default: return String(value);
	}
}
function buildDefaultFormValues(fields, schemaProperties) {
	const values = {};
	for (const field of fields) values[field.name] = defaultValueForField(field, schemaProperties?.[field.name]);
	return values;
}
function buildDefaultBodyFormValues(method) {
	const schema = getRequestBodyContentSchema(method);
	return buildDefaultFormValues(getRequestBodyFormFields(method), schema?.properties);
}
function isEmptyFormValue(value) {
	if (value instanceof File) return false;
	if (value === null || value === void 0) return true;
	if (typeof value === "string") return value.trim() === "";
	if (Array.isArray(value)) return value.length === 0;
	return false;
}
function getMissingRequiredFormField(fields, values) {
	return fields.find((field) => field.required && isEmptyFormValue(values[field.name]));
}
function isEmptyCreatableIdValue(value) {
	return value === void 0 || value === null || typeof value === "string" && value.trim() === "";
}
function getMissingRequiredFieldInJsonBody(fields, json) {
	const trimmed = json.trim();
	if (!trimmed) return fields.find((field) => field.required);
	let parsed;
	try {
		parsed = JSON.parse(trimmed);
	} catch {
		return;
	}
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fields.find((field) => field.required);
	return fields.find((field) => {
		if (!field.required) return false;
		if (!(field.name in parsed)) return true;
		return isEmptyFormValue(valueFromParsed(field, parsed[field.name]));
	});
}
function stripEmptyCreatableIdFieldsFromJson(fields, json) {
	const trimmed = json.trim();
	if (!trimmed) return trimmed;
	const parsed = JSON.parse(trimmed);
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return trimmed;
	const next = { ...parsed };
	for (const field of fields) {
		if (field.kind !== "id") continue;
		if (isEmptyCreatableIdValue(next[field.name])) delete next[field.name];
	}
	return JSON.stringify(next, null, 2);
}
function buildMultipartFormData(fields, values) {
	const formData = new FormData();
	for (const field of fields) {
		const value = values[field.name];
		if (isEmptyFormValue(value)) continue;
		switch (field.kind) {
			case "binary":
				if (value instanceof File) formData.append(field.name, value, value.name);
				break;
			case "array-string":
			case "array-enum":
			case "array-number": {
				const items = Array.isArray(value) ? value : [];
				for (const item of items) {
					const itemValue = String(item).trim();
					if (itemValue) formData.append(`${field.name}[]`, itemValue);
				}
				break;
			}
			case "boolean":
				formData.append(field.name, value ? "true" : "false");
				break;
			case "integer":
			case "number":
				formData.append(field.name, String(value));
				break;
			case "json":
				formData.append(field.name, String(value));
				break;
			case "datetime":
				formData.append(field.name, serializeDatetimeApiValue(String(value)));
				break;
			default: formData.append(field.name, String(value));
		}
	}
	return formData;
}
function parseJsonFieldValue(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return void 0;
	return JSON.parse(trimmed);
}
function serializeFieldValue(field, value) {
	if (value === null) return null;
	switch (field.kind) {
		case "boolean": return Boolean(value);
		case "integer": return typeof value === "number" ? Math.trunc(value) : parseInt(String(value), 10) || 0;
		case "number": return typeof value === "number" ? value : Number(value) || 0;
		case "array-string":
		case "array-enum":
		case "array-number": return Array.isArray(value) ? value : [];
		case "json": return parseJsonFieldValue(String(value));
		case "datetime": return serializeDatetimeApiValue(String(value));
		default: return String(value);
	}
}
function serializeBodyFromForm(fields, values) {
	const payload = {};
	for (const field of fields) {
		if (field.kind === "binary") continue;
		const value = values[field.name];
		if (isEmptyFormValue(value)) {
			if (field.kind === "id") continue;
			if (field.required) payload[field.name] = serializeFieldValue(field, value ?? defaultValueForField(field));
			continue;
		}
		payload[field.name] = serializeFieldValue(field, value);
	}
	return JSON.stringify(payload, null, 2);
}
function parseBodyToFormValues(fields, json) {
	const trimmed = json.trim();
	if (!trimmed) return buildDefaultFormValues(fields);
	const parsed = JSON.parse(trimmed);
	const values = {};
	for (const field of fields) {
		if (!(field.name in parsed)) {
			values[field.name] = defaultValueForField(field);
			continue;
		}
		values[field.name] = valueFromParsed(field, parsed[field.name]);
	}
	return values;
}
function serializeParamFormValue(field, value) {
	if (isEmptyFormValue(value)) return "";
	switch (field.kind) {
		case "boolean": return value ? "true" : "false";
		case "integer":
		case "number": return String(value);
		case "array-string":
		case "array-enum":
		case "array-number": return JSON.stringify(Array.isArray(value) ? value : []);
		case "json": return String(value);
		default: {
			const stringValue = String(value);
			if (isOpenApiPlaceholderExample(stringValue)) return "";
			return stringValue;
		}
	}
}
function parseParamFormValue(field, raw) {
	if (!raw.trim()) return defaultValueForField(field);
	switch (field.kind) {
		case "boolean": return raw === "true";
		case "integer": return parseInt(raw, 10) || 0;
		case "number": return Number(raw) || 0;
		case "array-string":
		case "array-enum":
		case "array-number": try {
			const parsed = JSON.parse(raw);
			return Array.isArray(parsed) ? parsed.map(String) : [];
		} catch {
			return raw.split("\n").map((line) => line.trim()).filter(Boolean);
		}
		case "json": return raw;
		case "datetime": return serializeDatetimeApiValue(raw);
		default: return raw;
	}
}
function buildInitialParamFormValues(parameters, method) {
	const values = {};
	for (const param of parameters) {
		const field = parameterToFormField(param, method);
		const raw = param.schema ? getSchemaDefaultString(param.schema) : "";
		values[param.name] = raw ? parseParamFormValue(field, raw) : defaultValueForField(field, param.schema);
	}
	return values;
}
function getSchemaDefaultString(schema) {
	if (schema.default !== void 0 && schema.default !== null) {
		if (Array.isArray(schema.default) || typeof schema.default === "object") return JSON.stringify(schema.default);
		return String(schema.default);
	}
	const example = schema.example ?? schema["x-example"];
	if (example !== void 0 && example !== null) {
		if (typeof example === "string" && isOpenApiPlaceholderExample(example)) return "";
		if (typeof example === "object") return JSON.stringify(example);
		return String(example);
	}
	if (schema.enum?.length) return String(schema.enum[0]);
	return "";
}
function paramFormValuesToStrings(parameters, values) {
	const result = {};
	for (const param of parameters) {
		const field = parameterToFormField(param);
		result[param.name] = serializeParamFormValue(field, values[param.name]);
	}
	return result;
}
const API_EXPLORER_PILL_CLASS = cn("border-0 shadow-none shrink-0");
const FORM_FIELD_TYPE_PILL_CLASS = cn(API_EXPLORER_PILL_CLASS, "px-2 font-mono text-[10px]");
function getOpenApiTypeBadgeVariant(type) {
	const normalized = type.toLowerCase().trim();
	switch (normalized) {
		case "boolean": return "info";
		case "integer":
		case "number": return "warning";
		case "string": return "processing";
		case "file":
		case "binary": return "inactive";
		case "array": return "success";
		case "object": return "info";
		default:
			if (normalized.includes("|")) return "warning";
			return "processing";
	}
}
function getFormFieldTypeBadgeVariant(kind) {
	if (kind === "enum" || kind === "array-enum") return "warning";
	if (kind === "array-string" || kind === "array-number") return "success";
	if (kind === "json") return "info";
	return getOpenApiTypeBadgeVariant(getFormFieldOpenApiTypeLabel(kind));
}
export { listSearchSchema as $, getPostgresColumnDefaultPlaceholder as $n, mysqlColumnTypeStatesEqual as $t, COLLECTION_INDEX_TYPES as A, stripLeadingMysqlSqlComments as An, isMysqlColumnInlineEditable as At, domainsFilterColumns as B, isPostgresColumnSystemGenerated as Bn, MYSQL_COLUMN_TYPE_DEFINITIONS as Bt, resolveResourceIdContext as C, mysqlRelationSupportsRowCtid as Cn, pickUnitWithSmallestIntegerValue as Ct, appendDocumentsDbCustomAttributeFilter as D, readMysqlRowString as Dn, getMysqlColumnEditMeta as Dt, sizeFilterToBytes as E, quoteMysqlStringLiteral as En, filterMysqlRowCreateValues as Et, getActivityFilterQueryParts as F, getPostgresInlineFieldType as Fn, mysqlColumnAutoGeneratesOnInsert as Ft, getSelectedDatabaseTypesFromFilterMap as G, shouldOmitPostgresColumnOnRowCreate as Gn, formatMysqlColumnTypePropertyLimits as Gt, functionsFilterColumns as H, parseAndValidatePostgresCellInput as Hn, buildMysqlColumnTypeSql as Ht, getActivitiesFilterColumns as I, groupPostgresEditsByRow as In, mysqlColumnCanOmitOnCreate as It, formatDatabaseServiceLabel as J, POSTGRES_COLUMN_TYPE_GROUPS as Jn, getMysqlColumnTypePropertyPlaceholder as Jt, omitDatabaseTypeFilters as K, valueToPostgresEditString as Kn, getMysqlColumnDefaultPlaceholder as Kt, executionsFilterColumns as L, isPostgresColumnInlineEditable as Ln, parseAndValidateMysqlCellInput as Lt, getCollectionIndexTypeSearchValue as M, postgresRowsFilterColumnsFromTableColumns as Mn, isMysqlColumnRequiredOnCreate as Mt, tableColumnsFilterColumns as N, filterPostgresRowCreateValues as Nn, isMysqlColumnSystemGenerated as Nt, rowsFilterColumnsFromAttributes as O, sortMysqlTableColumns as On, getMysqlInlineFieldType as Ot, proxyRulesFilterColumns as P, getPostgresColumnEditMeta as Pn, makeMysqlPendingEditKey as Pt, usersFilterColumns as Q, formatPostgresColumnTypePropertyLimits as Qn, isMysqlSerialColumnType as Qt, deploymentsFilterColumns as R, isPostgresColumnRequired as Rn, shouldOmitMysqlColumnOnRowCreate as Rt, getQueryFilterColumnsForMethod as S, isMysqlUniqueColumn as Sn, toByteCount as St, bytesToSizeFilterInput as T, prefixMysqlSqlComment as Tn, mysqlRowsFilterColumnsFromTableColumns as Tt, getDatabaseTypeFilterOptions as U, postgresColumnAutoGeneratesOnInsert as Un, createDefaultMysqlColumnTypeState as Ut, sitesFilterColumns as V, makePostgresPendingEditKey as Vn, MYSQL_COLUMN_TYPE_GROUPS as Vt, getDatabasesFilterColumns as W, postgresColumnCanOmitOnCreate as Wn, formatMysqlColumnTypeLabel as Wt, filesFilterColumns as X, createDefaultPostgresColumnTypeState as Xn, getMysqlColumnTypePropertyValue as Xt, getDatabaseServiceLucideIcon as Y, buildPostgresColumnTypeSql as Yn, getMysqlColumnTypePropertyRangeError as Yt, teamsFilterColumns as Z, formatPostgresColumnTypeLabel as Zn, getMysqlColumnTypeSearchValue as Zt, paramFormValuesToStrings as _, formatMysqlQueryDurationMs as _n, buildFilterTagFromCompactKey as _t, buildDefaultBodyFormValues as a, buildMysqlListTablesCountSql as an, isPostgresSerialColumnType as ar, getLimit as at, serializeBodyFromForm as b, isMysqlPrimaryIndex as bn, formatDecimalBytes as bt, getFormFieldOpenApiTypeLabel as c, buildMysqlSingleRequestDdlSql as cn, validatePostgresColumnTypeState as cr, getSearch as ct, getMissingRequiredFieldInJsonBody as d, buildMysqlTableColumnsSql as dn, parseListSearch as dt, parseMysqlColumnTypeFromRow as en, getPostgresColumnTypeDefinition as er, MIN_SEARCH_LENGTH as et, getMissingRequiredFormField as f, buildMysqlTableIndexesSql as fn, parseSort as ft, normalizeOpenApiPrimitiveType as g, executionResultRows as gn, buildFilterQueryString as gt, hasRequestBodyForMethod as h, decodeMysqlDriverByteArray as hn, urlFromRouterLocation as ht, getOpenApiTypeBadgeVariant as i, buildMysqlListSchemasSql as in, getPostgresColumnTypeSearchValue as ir, findCompactFilterKeyInMap as it, getCollectionIndexTypeDefinition as j, buildPostgresRowsListWhereClause as jn, isMysqlColumnRequired as jt, tableIndexesFilterColumns as k, sortMysqlTableIndexes as kn, groupMysqlEditsByRow as kt, getFormFieldPlaceholder as l, buildMysqlTableAutocompleteColumnsSql as ln, getSort as lt, getRequestBodyJsonSchema as m, coerceMysqlStringValue as mn, searchParamsFromRouterLocation as mt, FORM_FIELD_TYPE_PILL_CLASS as n, MYSQL_SIDEBAR_LIST_PAGE_SIZE as nn, getPostgresColumnTypePropertyRangeError as nr, compactFilterKeysEqual as nt, buildInitialParamFormValues as o, buildMysqlListTablesSql as on, parsePostgresColumnTypeFromRow as or, getPage as ot, getRequestBodyFormFields as p, buildMysqlTableInfoSql as pn, queryParamToMap as pt, setSelectedDatabaseTypesInFilterMap as q, POSTGRES_COLUMN_TYPE_DEFINITIONS as qn, getMysqlColumnTypeDefinition as qt, getFormFieldTypeBadgeVariant as r, buildMysqlListSchemasCountSql as rn, getPostgresColumnTypePropertyValue as rr, encodeSort as rt, buildMultipartFormData as s, buildMysqlSelectSql as sn, postgresColumnTypeStatesEqual as sr, getQueryParam as st, API_EXPLORER_PILL_CLASS as t, validateMysqlColumnTypeState as tn, getPostgresColumnTypePropertyPlaceholder as tr, buildListSearchParams as tt, getFormFieldTypeLabel as u, buildMysqlTableColumnsForRowsSql as un, mapToQueryParam as ut, parameterToFormField as v, formatMysqlSql as vn, getOperatorsForColumn as vt, SIZE_FILTER_UNITS as w, peelLeadingMysqlSqlComments as wn, buildMysqlRowsListWhereClause as wt, stripEmptyCreatableIdFieldsFromJson as x, isMysqlPrimaryKeyColumn as xn, pickFormDecimalByteDisplayUnit as xt, parseBodyToFormValues as y, isMysqlDriverByteArray as yn, getOperatorsForType as yt, dnsRecordsFilterColumns as z, isPostgresColumnRequiredOnCreate as zn, valueToMysqlEditString as zt };
