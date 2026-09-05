import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { t as translate } from "./translate-DZcqveGn.js";
import { f as ROWS_DEFAULT_PAGE_SIZE, n as COLUMNS_INDEXES_DEFAULT_PAGE_SIZE, o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { a as getActiveProfileId, i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { t as buildAttributePrefixSearchQueries } from "./appwrite-id-L15yEGeF.js";
import { n as coerceDatabaseType, o as toSdkDatabaseType, t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { f as isServerlessDatabaseSpecId, o as getDefaultEnabledSpecId, p as mapDedicatedDatabaseSpecifications, t as SERVERLESS_DATABASE_SPEC_ID } from "./database-specs-CBc802K0.js";
import { D as shouldPollDedicatedDatabaseStatus, b as coerceTrimmedString, c as isProductDatabaseRouteKindEnabled, l as isProductDatabaseTypeEnabled, n as databaseRouteKindFromApiType, y as DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS } from "./database-routes-DB_xKWuY.js";
import { m as quotePostgresIdentifier } from "./postgres-database-routes-CyTsPbzl.js";
import { G as executionResultRows, N as buildPostgresListSchemasSql, Q as peelLeadingPostgresSqlComments, a as groupEditsIntoUpdateOperations, at as stripLeadingPostgresSqlComments, h as serializeRowDataForApi } from "./database-row-inline-edits-CdyGeTxj.js";
import { n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { useEffect, useMemo } from "react";
import { ID, OrderBy, Query } from "@appwrite.io/console";
import { keepPreviousData, queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
var DEDICATED_DATABASE_ID_REGEX = /^[A-Za-z0-9]+$/;
function getDedicatedDatabaseIdError(id) {
	const trimmed = id.trim();
	if (!trimmed) return null;
	if (trimmed.length > 36) return `Database ID must be 36 characters or less.`;
	if (!DEDICATED_DATABASE_ID_REGEX.test(trimmed)) return "Database ID must contain only letters and numbers (no hyphens, underscores, or periods).";
	return null;
}
function resolveDedicatedDatabaseId(customId) {
	const trimmed = customId?.trim();
	return trimmed && trimmed !== "" ? trimmed : ID.unique();
}
function formatDedicatedDatabaseCreateError(error, fallbackMessage) {
	const message = error instanceof Error ? error.message : typeof error === "string" ? error : fallbackMessage;
	if (!message.includes("dedicated database IDs must match")) return message || fallbackMessage;
	return "Database ID must contain only letters and numbers. Leave the ID blank to auto-generate one, or choose a custom ID without hyphens, underscores, or periods.";
}
function dedicatedEngineService(projectSdk, engine) {
	const e = (engine ?? "").toLowerCase().trim();
	if (e === "mongodb" || e === "mongo") return projectSdk.mongo;
	if (e === "mysql" || e === "mariadb") return projectSdk.mysql;
	return projectSdk.postgresql;
}
const DEDICATED_FEATURE_UNAVAILABLE = "This feature is not available on the current console version.";
function parseDedicatedConnectionString(connectionString) {
	try {
		const url = new URL(connectionString);
		const database = url.pathname.replace(/^\//, "") || "";
		const sslMode = url.searchParams.get("sslmode")?.toLowerCase();
		return {
			database,
			ssl: sslMode === "require" || sslMode === "verify-ca" || sslMode === "verify-full" || url.searchParams.get("ssl") === "true"
		};
	} catch {
		return {
			database: "",
			ssl: true
		};
	}
}
function mapDedicatedDatabaseCredentials(database) {
	const parsed = parseDedicatedConnectionString(database.connectionString);
	const catalogName = parsed.database || database.$id;
	return {
		connectionString: database.connectionString,
		host: database.hostname,
		port: database.connectionPort,
		username: database.connectionUser,
		password: database.connectionPassword,
		database: catalogName,
		tcpHost: database.hostname,
		tcpPort: database.connectionPort,
		tcpDatabase: catalogName,
		ssl: parsed.ssl
	};
}
function dedicatedDatabaseSourceFromRouteKind(dbKind) {
	return {
		type: "product",
		api: dbKind
	};
}
function dedicatedDatabaseSourceFromDatabaseType(backend) {
	if (backend === DatabaseType.Documentsdb) return {
		type: "product",
		api: "documentsdb"
	};
	if (backend === DatabaseType.Vectorsdb) return {
		type: "product",
		api: "vectorsdb"
	};
	return {
		type: "product",
		api: "tablesdb"
	};
}
function dedicatedDatabaseSourceFromEngine(engine) {
	return {
		type: "engine",
		engine
	};
}
const POSTGRES_DATABASE_SPECS_SOURCE = dedicatedDatabaseSourceFromEngine("postgresql");
function dedicatedDatabaseSourceKey(source) {
	return source.type === "product" ? `product:${source.api}` : `engine:${(source.engine || "postgresql").toLowerCase()}`;
}
function dedicatedDatabaseService(projectSdk, source) {
	if (source.type === "product") {
		if (source.api === "documentsdb") return projectSdk.documentsDB;
		if (source.api === "vectorsdb") return projectSdk.vectorsDB;
		return projectSdk.tablesDB;
	}
	return dedicatedEngineService(projectSdk, source.engine);
}
const MYSQL_DATABASE_SPECS_SOURCE = dedicatedDatabaseSourceFromEngine("mysql");
var postgresDatabaseQueryKey = (projectId, databaseId) => [
	"postgres-database",
	"project",
	projectId,
	databaseId
];
var productDatabaseQueryKey = (projectId, databaseId) => [
	"database",
	"project",
	projectId,
	databaseId
];
var dedicatedDatabasesQueryKey = (projectId) => [
	"dedicated-databases",
	"project",
	projectId
];
function readDatabaseOperationalStatus(queryClient, projectId, databaseId) {
	const postgres = queryClient.getQueryData(postgresDatabaseQueryKey(projectId, databaseId));
	if (postgres?.status) return postgres.status;
	const product = queryClient.getQueryData(productDatabaseQueryKey(projectId, databaseId));
	if (product?.status) return product.status;
	return queryClient.getQueryData(dedicatedDatabasesQueryKey(projectId))?.databases?.find((db) => db.$id === databaseId)?.status;
}
const DEDICATED_DATABASE_OPERATIONS_LOCK_MESSAGE = "Database operations are disabled while the database is in a failed state.";
var STATUS_OPERATIONS_LOCK_REASONS = { failed: "failed" };
function getDedicatedDatabaseOperationsLock(status) {
	const normalized = coerceTrimmedString(status).toLowerCase();
	if (!normalized) return {
		locked: false,
		reason: null
	};
	const reason = STATUS_OPERATIONS_LOCK_REASONS[normalized] ?? null;
	return {
		locked: reason != null,
		reason
	};
}
function isDedicatedDatabaseOperationsLocked(status) {
	return getDedicatedDatabaseOperationsLock(status).locked;
}
function getDedicatedDatabaseOperationsLockTooltipKey(_reason) {
	return DEDICATED_DATABASE_OPERATIONS_LOCK_MESSAGE;
}
function assertDedicatedDatabaseOperational(status) {
	if (!isDedicatedDatabaseOperationsLocked(status)) return;
	throw new Error(translate(DEDICATED_DATABASE_OPERATIONS_LOCK_MESSAGE));
}
function requireOperationalDatabase(queryClient, projectId, databaseId) {
	assertDedicatedDatabaseOperational(readDatabaseOperationalStatus(queryClient, projectId, databaseId));
}
const CONSOLE_SQL_API_ALLOWED_STATEMENTS = [...[
	"SELECT",
	"INSERT",
	"UPDATE",
	"DELETE",
	"CREATE",
	"ALTER",
	"DROP",
	"TRUNCATE",
	"GRANT",
	"REVOKE"
]];
function normalizedStatementSet(statements) {
	return new Set((statements ?? []).map((statement) => statement.trim().toUpperCase()).filter(Boolean));
}
function hasConsoleSqlApiStatements(database) {
	const allowed = normalizedStatementSet(database?.sqlApiAllowedStatements);
	if (allowed.size === 0) return false;
	return CONSOLE_SQL_API_ALLOWED_STATEMENTS.every((type) => allowed.has(type));
}
function errorMessage(error) {
	if (typeof error === "string") return error;
	if (typeof error !== "object" || error === null) return String(error ?? "");
	const record = error;
	return [record.message, record.response].map((value) => value == null ? "" : String(value)).filter(Boolean).join(" ");
}
function isSqlApiDdlBlockedError(error) {
	const message = errorMessage(error);
	if (/read-only transaction/i.test(message)) return true;
	if (/cannot execute \w+ in a read-only/i.test(message)) return true;
	if (/statement type/i.test(message) && /not allowed|allow-?list|allowlist/i.test(message)) return true;
	return false;
}
async function ensureConsoleSqlApiStatements(projectId, databaseId, engine, database) {
	const service = dedicatedEngineService(sdk.forProject(projectId), engine);
	const current = database ?? await service.get({ databaseId }).catch(() => null);
	if (!current) return {
		database: null,
		updated: false
	};
	if (hasConsoleSqlApiStatements(current)) return {
		database: current,
		updated: false
	};
	return {
		database: await service.update({
			databaseId,
			sqlApiEnabled: true,
			sqlApiAllowedStatements: CONSOLE_SQL_API_ALLOWED_STATEMENTS
		}),
		updated: true
	};
}
const POSTGRES_CONSOLE_RESULT_COLUMN = "__console_result_rows";
var UNSUPPORTED_TYPE_PATTERN = /^<unsupported type ([^>]+)>$/i;
var READ_QUERY_PATTERN = /^(with\b|select\b)/i;
var MUTATION_QUERY_PATTERN = /^(insert\b|update\b|delete\b|create\b|alter\b|drop\b|truncate\b|call\b|do\b|copy\b|grant\b|revoke\b|comment\b|begin\b|commit\b|rollback\b|set\b|vacuum\b|analyze\b|explain\b)/i;
function stripTrailingStatementSemicolon(sql) {
	return sql.replace(/;\s*$/, "").trim();
}
function isPostgresReadQuery(sql) {
	const trimmed = stripTrailingStatementSemicolon(stripLeadingPostgresSqlComments(sql.trim()));
	if (!trimmed) return false;
	if (MUTATION_QUERY_PATTERN.test(trimmed)) return false;
	if (/\bselect\s+into\b/i.test(trimmed)) return false;
	return READ_QUERY_PATTERN.test(trimmed);
}
function wrapPostgresSqlForDisplay(sql) {
	const trimmed = sql.trim();
	const { leadingComments, sqlWithoutLeadingComments } = peelLeadingPostgresSqlComments(trimmed);
	const innerSql = stripTrailingStatementSemicolon(sqlWithoutLeadingComments);
	if (!isPostgresReadQuery(sqlWithoutLeadingComments)) return trimmed;
	const wrapped = `SELECT coalesce(json_agg(row_to_json(__console_subq)), '[]'::json) AS ${quotePostgresIdentifier(POSTGRES_CONSOLE_RESULT_COLUMN)} FROM (${innerSql}) AS __console_subq`;
	if (!leadingComments) return wrapped;
	return `${leadingComments}\n${wrapped}`;
}
function parseJsonArray(value) {
	if (Array.isArray(value)) return value;
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	if (!trimmed) return [];
	try {
		const parsed = JSON.parse(trimmed);
		return Array.isArray(parsed) ? parsed : null;
	} catch {
		return null;
	}
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function readTaggedField(object, ...keys) {
	for (const key of keys) if (key in object) return object[key];
}
function decodeBase64ToUtf8(value) {
	if (typeof atob === "function") {
		const binary = atob(value);
		const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
		return new TextDecoder().decode(bytes);
	}
	return value;
}
function formatByteaValue(value) {
	if (typeof value === "string") {
		if (value.startsWith("\\x")) {
			const hex = value.slice(2);
			if (hex.length % 2 === 0 && /^[0-9a-f]+$/i.test(hex)) {
				const bytes = Uint8Array.from(hex.match(/.{1,2}/g) ?? [], (pair) => Number.parseInt(pair, 16));
				const decoded = new TextDecoder().decode(bytes);
				if (decoded && /^[\x20-\x7E\s]+$/.test(decoded)) return decoded;
				return `\\x${hex}`;
			}
		}
		return value;
	}
	if (Array.isArray(value)) return `[${value.map((entry) => formatPostgresExecutionCellValue(entry)).join(", ")}]`;
	return String(value);
}
function formatPostgresExecutionCellValue(value) {
	if (value === null || value === void 0) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	if (typeof value === "bigint") return value.toString();
	if (Array.isArray(value)) return `[${value.map((entry) => formatPostgresExecutionCellValue(entry)).join(", ")}]`;
	if (!isPlainObject(value)) return String(value);
	const taggedType = String(readTaggedField(value, "type", "Type", "$type", "pgType", "pg_type") ?? "").toLowerCase();
	const taggedValue = readTaggedField(value, "value", "Value", "$value", "text", "Text", "string", "String");
	if (taggedType.includes("bytea") || taggedType === "bytes") {
		const bytes = readTaggedField(value, "bytes", "Bytes", "data", "Data");
		if (typeof bytes === "string") {
			if (value.encoding === "base64" || value.Encoding === "base64") return decodeBase64ToUtf8(bytes);
			return formatByteaValue(bytes);
		}
		if (taggedValue !== void 0) return formatByteaValue(taggedValue);
	}
	if (taggedType.includes("numeric") || taggedType.includes("decimal") || taggedType.includes("money") || taggedType.includes("int") || taggedType.includes("float") || taggedType.includes("double") || taggedType === "number") {
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("timestamp") || taggedType.includes("date") || taggedType.includes("time") || taggedType.includes("interval")) {
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("bool")) {
		if (typeof taggedValue === "boolean") return String(taggedValue);
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("uuid") && taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	if (taggedType.includes("json") && taggedValue !== void 0) try {
		return typeof taggedValue === "string" ? taggedValue : JSON.stringify(taggedValue);
	} catch {
		return String(taggedValue);
	}
	if (taggedValue !== void 0) return formatPostgresExecutionCellValue(taggedValue);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
function normalizePostgresExecutionCellValue(value) {
	if (value === null || value === void 0) return null;
	if (typeof value === "string") {
		if (UNSUPPORTED_TYPE_PATTERN.test(value)) return value;
		return value;
	}
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return value;
	if (Array.isArray(value)) return value.map((entry) => normalizePostgresExecutionCellValue(entry));
	if (!isPlainObject(value)) return formatPostgresExecutionCellValue(value);
	const taggedType = String(readTaggedField(value, "type", "Type", "$type", "pgType", "pg_type") ?? "").toLowerCase();
	const taggedValue = readTaggedField(value, "value", "Value", "$value", "text", "Text", "string", "String");
	if (taggedType && taggedValue !== void 0) return normalizePostgresExecutionCellValue(taggedValue);
	const normalizedEntries = Object.entries(value).map(([key, entry]) => [key, normalizePostgresExecutionCellValue(entry)]);
	return Object.fromEntries(normalizedEntries);
}
function normalizePostgresExecutionRow(row) {
	const normalized = {};
	for (const [key, value] of Object.entries(row)) normalized[key] = normalizePostgresExecutionCellValue(value);
	return normalized;
}
function inferPostgresColumnType(value) {
	if (value === null || value === void 0) return "text";
	if (typeof value === "boolean") return "bool";
	if (typeof value === "number") return "float8";
	if (typeof value === "bigint") return "int8";
	if (typeof value === "string") return "text";
	if (Array.isArray(value)) return "json";
	if (typeof value === "object") return "json";
	return "text";
}
function deriveColumnsFromRows(rows, fallback) {
	const firstRow = rows[0];
	if (!firstRow) return fallback;
	return Object.keys(firstRow).map((name) => ({
		name,
		type: fallback.find((column) => column.name === name)?.type ?? inferPostgresColumnType(firstRow[name])
	}));
}
function unwrapWrappedPostgresExecution(execution) {
	const rows = executionResultRows(execution);
	if (rows.length !== 1) return null;
	const payload = rows[0][POSTGRES_CONSOLE_RESULT_COLUMN];
	if (payload === void 0) return null;
	const parsedRows = parseJsonArray(payload);
	if (!parsedRows) return null;
	const normalizedRows = parsedRows.filter(isPlainObject).map((row) => normalizePostgresExecutionRow(row));
	const columns = execution.columns?.length === 1 && execution.columns[0]?.name === "__console_result_rows" ? deriveColumnsFromRows(normalizedRows, execution.columns) : deriveColumnsFromRows(normalizedRows, execution.columns ?? []);
	return {
		...execution,
		rows: normalizedRows,
		columns,
		rowCount: normalizedRows.length
	};
}
function normalizePostgresExecutionResult(execution) {
	const unwrapped = unwrapWrappedPostgresExecution(execution);
	if (unwrapped) return unwrapped;
	const rows = executionResultRows(execution).map((row) => normalizePostgresExecutionRow(row));
	return {
		...execution,
		rows,
		columns: deriveColumnsFromRows(rows, execution.columns ?? []),
		rowCount: rows.length > 0 ? rows.length : execution.rowCount
	};
}
const CUSTOM_COLLECTION_INDEX_ATTRIBUTE_VALUE = "__collectionCustomIndexAttribute__";
const COLLECTION_EXPORT_SYSTEM_FIELDS = [
	"$id",
	"$createdAt",
	"$updatedAt"
];
function getCollectionAttributeKey(raw) {
	return String(raw.key ?? raw.name ?? raw.attribute ?? raw.$id ?? "").trim();
}
function collectDocumentPayloadFieldKeys(rows) {
	const keys = /* @__PURE__ */ new Set();
	for (const row of rows) for (const key of Object.keys(row)) if (!key.startsWith("$")) keys.add(key);
	return [...keys].sort((a, b) => a.localeCompare(b));
}
function inferFieldTypeFromDocumentValues(rows, key) {
	for (const row of rows) {
		const value = row[key];
		if (value === null || value === void 0) continue;
		if (typeof value === "boolean") return "boolean";
		if (typeof value === "number") return Number.isInteger(value) ? "integer" : "float";
		if (typeof value === "string") return "string";
	}
	return "string";
}
function buildCollectionIndexableAttributes(schemaAttributes, documentRows) {
	const byKey = /* @__PURE__ */ new Map();
	if (Array.isArray(schemaAttributes)) for (const raw of schemaAttributes) {
		const attribute = raw;
		const key = getCollectionAttributeKey(attribute);
		if (!key || key.startsWith("$")) continue;
		byKey.set(key, {
			key,
			type: String(attribute.type ?? "string"),
			required: attribute.required,
			array: Boolean(attribute.array)
		});
	}
	for (const key of collectDocumentPayloadFieldKeys(documentRows)) {
		if (byKey.has(key)) continue;
		byKey.set(key, {
			key,
			type: inferFieldTypeFromDocumentValues(documentRows, key),
			array: false
		});
	}
	return [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
}
function buildCollectionExportColumnKeys(schemaAttributes, documentRows) {
	const keys = new Set(COLLECTION_EXPORT_SYSTEM_FIELDS);
	if (Array.isArray(schemaAttributes)) for (const raw of schemaAttributes) {
		const key = getCollectionAttributeKey(raw);
		if (!key || key.startsWith("$")) continue;
		keys.add(key);
	}
	for (const key of collectDocumentPayloadFieldKeys(documentRows)) keys.add(key);
	const system = COLLECTION_EXPORT_SYSTEM_FIELDS.filter((key) => keys.has(key));
	const rest = [...keys].filter((key) => !COLLECTION_EXPORT_SYSTEM_FIELDS.includes(key)).sort((a, b) => a.localeCompare(b));
	return [...system, ...rest];
}
var MERGED_DATABASE_LIST_LIMIT = 500;
function hasConsoleUnifiedDatabaseList() {
	return getActiveProfileId() !== "self-hosted";
}
function listProductDatabasesIfEnabled(projectSdk, backend, queries) {
	const features = getActiveProfileFeatures();
	if (backend === DatabaseType.Documentsdb) {
		if (!features.dedicatedDbsDocumentsDB) return Promise.resolve({
			total: 0,
			databases: []
		});
		return projectSdk.documentsDB.list({ queries });
	}
	if (backend === DatabaseType.Vectorsdb) {
		if (!features.dedicatedDbsVectorsDB) return Promise.resolve({
			total: 0,
			databases: []
		});
		return projectSdk.vectorsDB.list({ queries });
	}
	return projectSdk.tablesDB.list({ queries });
}
var databaseModelInflight = /* @__PURE__ */ new Map();
var databaseModelCache = /* @__PURE__ */ new Map();
function databaseModelCacheKey(projectId, databaseId) {
	return `${projectId}:${databaseId}`;
}
function invalidateDatabaseModel(projectId, databaseId) {
	const key = databaseModelCacheKey(projectId, databaseId);
	databaseModelCache.delete(key);
	databaseModelInflight.delete(key);
	databaseTypeInflight.delete(key);
}
var DEDICATED_DATABASE_READY_STATUSES = new Set(["ready", "paused"]);
async function refetchProjectDatabaseLists(queryClient, projectId) {
	await Promise.all([queryClient.refetchQueries({
		queryKey: [
			"databases",
			"project",
			projectId
		],
		type: "all"
	}), queryClient.refetchQueries({
		queryKey: [
			"dedicated-databases",
			"project",
			projectId
		],
		type: "all"
	})]);
}
var DATABASE_LIFECYCLE_FAILED_STATUSES = new Set([
	"failed",
	"error",
	"deleted"
]);
function isDatabaseLifecycleFailed(status) {
	const normalized = coerceTrimmedString(status).toLowerCase();
	return !!normalized && DATABASE_LIFECYCLE_FAILED_STATUSES.has(normalized);
}
function isDatabaseLifecycleReady(status) {
	const normalized = coerceTrimmedString(status).toLowerCase();
	return !!normalized && DEDICATED_DATABASE_READY_STATUSES.has(normalized);
}
var CREATED_DATABASE_READY_ATTEMPTS = 180;
var CREATED_DATABASE_WORKSPACE_ATTEMPTS = 90;
async function waitForDedicatedDatabaseReady(projectId, databaseId, source, maxAttempts = CREATED_DATABASE_READY_ATTEMPTS) {
	let intervalMs = 500;
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		try {
			const database = await fetchDedicatedDatabaseById(projectId, databaseId, source);
			const status = database?.status;
			if (isDatabaseLifecycleFailed(status)) return false;
			if (isDatabaseLifecycleReady(status)) {
				if (source.type === "engine" && database) await ensureConsoleSqlApiStatements(projectId, databaseId, source.engine, database).catch(() => {});
				return true;
			}
		} catch {}
		if (attempt < maxAttempts - 1) {
			await sleep(intervalMs);
			intervalMs = Math.min(Math.round(intervalMs * 1.25), 3e3);
		}
	}
	return false;
}
async function waitForCreatedDatabaseLifecycleReady(projectId, databaseId, kind, maxAttempts = CREATED_DATABASE_READY_ATTEMPTS) {
	if (!projectId || !databaseId) return false;
	if (kind.type === "native") return waitForDedicatedDatabaseReady(projectId, databaseId, {
		type: "engine",
		engine: kind.engine === "postgres" ? "postgresql" : "mysql"
	}, maxAttempts);
	const projectSdk = sdk.forProject(projectId);
	let intervalMs = 500;
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		try {
			const database = await getProductDatabase(projectSdk, kind.backend, databaseId);
			const status = database ? readProductDatabaseLifecycleStatus(database) : null;
			if (isDatabaseLifecycleFailed(status)) return false;
			if (isDatabaseLifecycleReady(status)) return true;
		} catch {}
		if (attempt < maxAttempts - 1) {
			await sleep(intervalMs);
			intervalMs = Math.min(Math.round(intervalMs * 1.25), 3e3);
		}
	}
	return false;
}
async function probeProductDatabaseTablesList(projectId, databaseId, backend) {
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.limit(1)];
	try {
		if (backend === DatabaseType.Documentsdb) {
			await projectSdk.documentsDB.listCollections({
				databaseId,
				queries
			});
			return true;
		}
		if (backend === DatabaseType.Vectorsdb) {
			await projectSdk.vectorsDB.listCollections({
				databaseId,
				queries
			});
			return true;
		}
		await projectSdk.tablesDB.listTables({
			databaseId,
			queries
		});
		return true;
	} catch {
		return false;
	}
}
async function probeNativeDatabaseSchemasList(projectId, databaseId, engine) {
	try {
		const projectSdk = sdk.forProject(projectId);
		if (engine === "postgres") {
			const sql = buildPostgresListSchemasSql({
				limit: 1,
				offset: 0
			});
			normalizePostgresExecutionResult(await projectSdk.postgresql.createExecution({
				databaseId,
				sql: wrapPostgresSqlForDisplay(sql)
			}));
			return true;
		}
		normalizePostgresExecutionResult(await projectSdk.mysql.createExecution({
			databaseId,
			sql: "SHOW DATABASES"
		}));
		return true;
	} catch {
		return false;
	}
}
async function canLoadCreatedDatabaseWorkspace(projectId, databaseId, kind) {
	if (!projectId || !databaseId) return false;
	if (kind.type === "native") return probeNativeDatabaseSchemasList(projectId, databaseId, kind.engine);
	return probeProductDatabaseTablesList(projectId, databaseId, kind.backend);
}
async function waitForCreatedDatabaseWorkspaceReady(projectId, databaseId, kind, maxAttempts = CREATED_DATABASE_WORKSPACE_ATTEMPTS) {
	let intervalMs = 500;
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		if (await canLoadCreatedDatabaseWorkspace(projectId, databaseId, kind)) return true;
		if (attempt < maxAttempts - 1) {
			await sleep(intervalMs);
			intervalMs = Math.min(Math.round(intervalMs * 1.25), 3e3);
		}
	}
	return false;
}
function seedDatabaseModelCache(projectId, databaseId, db, backend) {
	const normalized = normalizeProductDatabase(db, backend);
	const key = databaseModelCacheKey(projectId, databaseId);
	const expiresAt = Date.now() + DEFAULT_STALE_TIME;
	databaseModelCache.set(key, {
		value: normalized,
		expiresAt
	});
	databaseTypeCache.set(key, {
		value: backend,
		expiresAt
	});
}
function readProductDatabaseSpecification(db) {
	const value = db.specification;
	return typeof value === "string" && value.trim() ? value.trim() : null;
}
function readProductDatabaseLifecycleStatus(db) {
	const value = db.status;
	if (typeof value === "string" && value.trim()) return value.trim();
	if (value && typeof value === "object") {
		const status = value;
		if (status.ready === true) return "ready";
		if (status.health === "unhealthy") return "failed";
		if (status.health === "degraded") return "provisioning";
	}
	return null;
}
function buildProjectDatabaseDetail(db) {
	const backupPolicies = db.policies ?? [];
	const backupPolicyCount = backupPolicies.length;
	const hasBackupPolicy = backupPolicyCount > 0;
	const backupPolicy = backupPolicies[0] || null;
	return {
		$id: db.$id,
		name: db.name || "Unnamed Database",
		tables: 0,
		rows: 0,
		enabled: db.enabled !== false,
		createdAt: db.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: db.$updatedAt || db.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
		hasBackupPolicy,
		backupPolicy,
		backupPolicyCount,
		databaseType: coerceDatabaseType(db.type),
		apiType: db.type,
		status: readProductDatabaseLifecycleStatus(db),
		replicas: typeof db.replicas === "number" ? db.replicas : null,
		specification: readProductDatabaseSpecification(db)
	};
}
function seedCreatedDatabaseCaches(queryClient, projectId, databaseId, backend, database) {
	seedDatabaseModelCache(projectId, databaseId, database, backend);
	const normalized = normalizeProductDatabase(database, backend);
	const routeKind = databaseRouteKindFromApiType(backend);
	queryClient.setQueryData(productRouteKindQueryOptions(projectId, databaseId).queryKey, routeKind);
	queryClient.setQueryData(databaseQueryOptions(projectId, databaseId, routeKind).queryKey, buildProjectDatabaseDetail(normalized));
	queryClient.setQueryData(tablesQueryOptions(projectId, databaseId, routeKind, 0, 25, void 0, "asc", "$createdAt").queryKey, {
		tables: [],
		total: 0
	});
}
var databaseTypeInflight = /* @__PURE__ */ new Map();
var databaseTypeCache = /* @__PURE__ */ new Map();
function routeKindToDatabaseType(kind) {
	if (kind === "documentsdb") return DatabaseType.Documentsdb;
	if (kind === "vectorsdb") return DatabaseType.Vectorsdb;
	return DatabaseType.Tablesdb;
}
function readCachedDatabaseType(projectId, databaseId) {
	const key = databaseModelCacheKey(projectId, databaseId);
	const cached = databaseTypeCache.get(key);
	if (cached && cached.expiresAt > Date.now()) return cached.value;
}
function seedDatabaseProductRouteKind(projectId, databaseId, dbKind) {
	if (!isProductDatabaseRouteKindEnabled(dbKind, getActiveProfileFeatures())) return;
	const backend = routeKindToDatabaseType(dbKind);
	const key = databaseModelCacheKey(projectId, databaseId);
	const expiresAt = Date.now() + DEFAULT_STALE_TIME;
	databaseTypeCache.set(key, {
		value: backend,
		expiresAt
	});
	const cachedModel = databaseModelCache.get(key);
	if (cachedModel && cachedModel.value?.type !== backend) {
		databaseModelCache.delete(key);
		databaseModelInflight.delete(key);
	}
}
function invalidateDatabaseModelAndType(projectId, databaseId) {
	invalidateDatabaseModel(projectId, databaseId);
	databaseTypeCache.delete(databaseModelCacheKey(projectId, databaseId));
}
function resolveProjectDatabaseType(dbKind) {
	return routeKindToDatabaseType(dbKind);
}
async function getDatabaseModel(projectId, databaseId, dbKind) {
	if (!projectId || !databaseId || !dbKind) return null;
	const key = databaseModelCacheKey(projectId, databaseId);
	const now = Date.now();
	const backend = routeKindToDatabaseType(dbKind);
	const cached = databaseModelCache.get(key);
	if (cached && cached.expiresAt > now) {
		if (cached.value?.type === backend) return cached.value;
		databaseModelCache.delete(key);
	}
	const inFlight = databaseModelInflight.get(key);
	if (inFlight) return inFlight;
	const projectSdk = sdk.forProject(projectId);
	const promise = (async () => {
		const db = await getProductDatabase(projectSdk, backend, databaseId);
		if (db?.$id) return normalizeProductDatabase(db, backend);
		return null;
	})();
	databaseModelInflight.set(key, promise);
	try {
		const value = await promise;
		databaseModelCache.set(key, {
			value,
			expiresAt: Date.now() + DEFAULT_STALE_TIME
		});
		if (value?.type) databaseTypeCache.set(key, {
			value: coerceDatabaseType(value.type),
			expiresAt: Date.now() + DEFAULT_STALE_TIME
		});
		return value;
	} finally {
		databaseModelInflight.delete(key);
	}
}
function databaseTypeRank(type) {
	switch (type) {
		case DatabaseType.Documentsdb: return 0;
		case DatabaseType.Vectorsdb: return 1;
		case DatabaseType.Tablesdb: return 2;
		default: return 3;
	}
}
function normalizeProductDatabase(db, sourceType) {
	return {
		...db,
		type: toSdkDatabaseType(String(sourceType))
	};
}
function mergeProjectDatabasesById(sources) {
	const byId = /* @__PURE__ */ new Map();
	for (const { databases, defaultType } of sources) for (const db of databases ?? []) {
		if (!db?.$id) continue;
		const normalized = normalizeProductDatabase(db, defaultType);
		const existing = byId.get(db.$id);
		if (!existing || databaseTypeRank(normalized.type) < databaseTypeRank(existing.type)) byId.set(db.$id, normalized);
	}
	return [...byId.values()];
}
function flattenDocumentForTableRow(doc) {
	const base = {
		$id: doc.$id,
		$sequence: doc.$sequence,
		$createdAt: doc.$createdAt,
		$updatedAt: doc.$updatedAt,
		$permissions: doc.$permissions
	};
	const nested = doc.data;
	if (nested && typeof nested === "object" && !Array.isArray(nested)) return {
		...base,
		...nested
	};
	return { ...doc };
}
function mapCollectionAttributesToColumnLike(attributes) {
	if (!Array.isArray(attributes)) return [];
	return attributes.map((raw) => {
		const a = raw;
		const key = getCollectionAttributeKey(a);
		if (!key) return null;
		const type = String(a.type ?? "string");
		return {
			...a,
			key,
			type,
			status: a.status || "available"
		};
	}).filter((col) => col !== null);
}
function normalizeIndexesForTableUi(indexes) {
	if (!indexes?.length) return [];
	return indexes.map((idx) => {
		const cols = idx.columns ?? idx.attributes;
		return {
			...idx,
			columns: Array.isArray(cols) ? cols : []
		};
	});
}
async function fetchProjectDatabases(projectId, page = 0, limit = 10, search, filterQueries) {
	if (!projectId) return {
		databases: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const searchArg = search?.trim() || void 0;
	const mergeQueries = [
		...filterQueries ?? [],
		...searchArg ? [Query.search("name", searchArg)] : [],
		Query.orderDesc("$createdAt"),
		Query.limit(MERGED_DATABASE_LIST_LIMIT)
	];
	const settled = await Promise.allSettled([
		listProductDatabasesIfEnabled(projectSdk, DatabaseType.Documentsdb, mergeQueries),
		listProductDatabasesIfEnabled(projectSdk, DatabaseType.Vectorsdb, mergeQueries),
		projectSdk.tablesDB.list({ queries: mergeQueries })
	]);
	const sorted = [...mergeProjectDatabasesById([
		{
			databases: settled[0].status === "fulfilled" ? settled[0].value.databases : [],
			defaultType: DatabaseType.Documentsdb
		},
		{
			databases: settled[1].status === "fulfilled" ? settled[1].value.databases : [],
			defaultType: DatabaseType.Vectorsdb
		},
		{
			databases: settled[2].status === "fulfilled" ? settled[2].value.databases : [],
			defaultType: DatabaseType.Tablesdb
		}
	])].sort((a, b) => new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime());
	for (const db of sorted) {
		const backend = coerceDatabaseType(db.type);
		seedDatabaseModelCache(projectId, db.$id, db, backend);
	}
	const total = sorted.length;
	return {
		databases: sorted.slice(page * limit, page * limit + limit),
		total
	};
}
async function fetchProjectProductDatabases(projectId, backend, page = 0, limit = 10, search, filterQueries) {
	if (!projectId) return {
		databases: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const searchArg = search?.trim() || void 0;
	const response = await listProductDatabasesIfEnabled(projectSdk, backend, [
		...filterQueries ?? [],
		...searchArg ? [Query.search("name", searchArg)] : [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	]);
	const databases = (response.databases ?? []).map((db) => normalizeProductDatabase(db, backend));
	for (const db of databases) seedDatabaseModelCache(projectId, db.$id, db, backend);
	return {
		databases,
		total: response.total ?? databases.length
	};
}
async function fetchProjectConsoleDatabases(projectId, page = 0, limit = 10, search, filterQueries) {
	if (!projectId) return {
		databases: [],
		total: 0
	};
	if (!hasConsoleUnifiedDatabaseList()) return fetchProjectProductDatabases(projectId, DatabaseType.Tablesdb, page, limit, search, filterQueries);
	const projectSdk = sdk.forProject(projectId);
	const trimmedSearch = search?.trim() || "";
	const searchQueries = trimmedSearch ? [Query.or([Query.contains("name", trimmedSearch), Query.startsWith("$id", trimmedSearch)])] : [];
	const queries = [
		...filterQueries ?? [],
		...searchQueries,
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.console.listDatabases({ queries });
	const databases = (response.databases ?? []).map((db) => normalizeProductDatabase(db, db.type ?? DatabaseType.Tablesdb));
	for (const db of databases) seedDatabaseModelCache(projectId, db.$id, db, coerceDatabaseType(db.type));
	return {
		databases,
		total: response.total ?? databases.length
	};
}
async function fetchProjectDatabasesByIds(projectId, databaseIds) {
	if (!projectId || databaseIds.length === 0) return { databases: [] };
	const validIds = [...new Set(databaseIds.filter((id) => typeof id === "string" && id.trim()))].slice(0, 6);
	if (validIds.length === 0) return { databases: [] };
	const idQuery = validIds.length === 1 ? Query.equal("$id", validIds[0]) : Query.or(validIds.map((id) => Query.equal("$id", id)));
	const projectSdk = sdk.forProject(projectId);
	const settled = await Promise.allSettled([
		listProductDatabasesIfEnabled(projectSdk, DatabaseType.Documentsdb, [idQuery, Query.limit(validIds.length)]),
		listProductDatabasesIfEnabled(projectSdk, DatabaseType.Vectorsdb, [idQuery, Query.limit(validIds.length)]),
		projectSdk.tablesDB.list({ queries: [idQuery, Query.limit(validIds.length)] })
	]);
	const databases = mergeProjectDatabasesById([
		{
			databases: settled[0].status === "fulfilled" ? settled[0].value.databases : [],
			defaultType: DatabaseType.Documentsdb
		},
		{
			databases: settled[1].status === "fulfilled" ? settled[1].value.databases : [],
			defaultType: DatabaseType.Vectorsdb
		},
		{
			databases: settled[2].status === "fulfilled" ? settled[2].value.databases : [],
			defaultType: DatabaseType.Tablesdb
		}
	]);
	for (const db of databases) seedDatabaseModelCache(projectId, db.$id, db, coerceDatabaseType(db.type));
	return { databases };
}
async function fetchProjectDatabase(projectId, databaseId, dbKind) {
	if (!projectId || !databaseId) return null;
	try {
		const db = await getDatabaseModel(projectId, databaseId, dbKind);
		if (!db) return null;
		return buildProjectDatabaseDetail(db);
	} catch {
		return null;
	}
}
function computeApiForDatabaseType(backend) {
	if (backend === DatabaseType.Documentsdb) return "documentsdb";
	if (backend === DatabaseType.Vectorsdb) return "vectorsdb";
	return "tablesdb";
}
function dedicatedComputeEngineForProductBackend(backend) {
	if (backend === DatabaseType.Documentsdb) return "mongodb";
	if (backend === DatabaseType.Vectorsdb) return "postgres";
	if (backend === DatabaseType.Tablesdb) return "mysql";
}
function requiresDedicatedCompute(backend) {
	return backend === DatabaseType.Documentsdb || backend === DatabaseType.Vectorsdb;
}
async function resolveDedicatedSpecification(projectId, region, explicit, source) {
	if (explicit && explicit !== "shared") return explicit;
	const defaultId = getDefaultEnabledSpecId(mapDedicatedDatabaseSpecifications((await dedicatedDatabaseService(sdk.forProject(projectId, region && region.trim() !== "" && region !== "unknown" ? region.trim() : void 0), source ?? dedicatedDatabaseSourceFromDatabaseType(DatabaseType.Tablesdb)).listSpecifications()).specifications));
	if (!defaultId) throw new Error("No dedicated database specifications are available for your plan.");
	return defaultId;
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getProductDatabase(projectSdk, backend, databaseId) {
	const features = getActiveProfileFeatures();
	try {
		if (backend === DatabaseType.Documentsdb) {
			if (!features.dedicatedDbsDocumentsDB) return null;
			return await projectSdk.documentsDB.get({ databaseId });
		}
		if (backend === DatabaseType.Vectorsdb) {
			if (!features.dedicatedDbsVectorsDB) return null;
			return await projectSdk.vectorsDB.get({ databaseId });
		}
		return await projectSdk.tablesDB.get({ databaseId });
	} catch {
		return null;
	}
}
async function resolveProductRouteKindForDatabase(projectId, databaseId, dbKind) {
	if (!projectId || !databaseId || !dbKind) return null;
	if (!isProductDatabaseRouteKindEnabled(dbKind, getActiveProfileFeatures())) return null;
	const projectSdk = sdk.forProject(projectId);
	const backend = routeKindToDatabaseType(dbKind);
	const db = await getProductDatabase(projectSdk, backend, databaseId);
	if (db?.$id) {
		seedDatabaseModelCache(projectId, databaseId, db, backend);
		return dbKind;
	}
	return null;
}
function productRouteKindQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"database",
			"product-route-kind",
			projectId,
			databaseId
		],
		queryFn: async () => {
			const features = getActiveProfileFeatures();
			const cachedType = readCachedDatabaseType(projectId, databaseId);
			if (cachedType && isProductDatabaseTypeEnabled(cachedType, features)) return databaseRouteKindFromApiType(cachedType);
			return null;
		},
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function getProductDatabaseIdError(id) {
	const trimmed = id.trim();
	if (!trimmed) return null;
	if (trimmed.length > 36) return "Database ID must be 36 characters or less.";
	if (!/^[a-zA-Z0-9_]/.test(trimmed)) return "Database ID cannot start with a special character.";
	if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(trimmed)) return "Database ID must be alphanumeric, underscore, hyphen, or period.";
	return null;
}
function resolveProductDatabaseId(customId) {
	const trimmed = customId?.trim();
	return trimmed && trimmed !== "" ? trimmed : ID.unique();
}
function isDatabaseAlreadyExistsError(error) {
	return (error instanceof Error ? error.message : typeof error === "string" ? error : "").toLowerCase().includes("already exists");
}
async function createProductDatabase(projectSdk, backend, params) {
	const payload = {
		databaseId: params.databaseId,
		name: params.name,
		...params.specification ? { specification: params.specification } : {},
		...params.replicas != null && params.replicas > 0 ? { replicas: params.replicas } : {}
	};
	if (backend === DatabaseType.Documentsdb) return await projectSdk.documentsDB.create(payload);
	if (backend === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.create(payload);
	return await projectSdk.tablesDB.create(payload);
}
async function createProductDatabaseWithExistsRecovery(projectSdk, backend, params) {
	try {
		return await createProductDatabase(projectSdk, backend, params);
	} catch (error) {
		if (!isDatabaseAlreadyExistsError(error)) throw error;
		const existing = await getProductDatabase(projectSdk, backend, params.databaseId);
		if (existing) return existing;
		throw error;
	}
}
async function createProjectDatabase(projectId, data, backend = DatabaseType.Tablesdb, options) {
	if (!projectId) throw new Error("Project ID is required");
	const region = options?.region && options.region.trim() !== "" && options.region !== "unknown" ? options.region.trim() : void 0;
	const projectSdk = sdk.forProject(projectId, region);
	const useDedicated = requiresDedicatedCompute(backend) || options?.specification != null && options.specification !== "shared";
	const productDatabaseId = resolveProductDatabaseId(data.databaseId);
	if (data.databaseId?.trim()) {
		const idError = getProductDatabaseIdError(data.databaseId);
		if (idError) throw new Error(idError);
	}
	const name = data.name.trim();
	const haReplicaCount = Math.max(0, options?.haReplicaCount ?? 0);
	if (useDedicated) {
		const created$1 = await createProductDatabaseWithExistsRecovery(projectSdk, backend, {
			databaseId: productDatabaseId,
			name,
			specification: await resolveDedicatedSpecification(projectId, region, options?.specification, dedicatedDatabaseSourceFromDatabaseType(backend)),
			...haReplicaCount > 0 ? { replicas: haReplicaCount } : {}
		});
		seedDatabaseModelCache(projectId, productDatabaseId, created$1, backend);
		return normalizeProductDatabase(created$1, backend);
	}
	const created = await createProductDatabaseWithExistsRecovery(projectSdk, backend, {
		databaseId: productDatabaseId,
		name
	});
	seedDatabaseModelCache(projectId, productDatabaseId, created, backend);
	return normalizeProductDatabase(created, backend);
}
async function waitForCreatedDatabaseHaReady(projectId, databaseId, kind, expectedReplicas, maxAttempts = 40) {
	if (!projectId || !databaseId || expectedReplicas <= 0) return true;
	let intervalMs = 500;
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		try {
			if (kind.type === "native") {
				const database = await fetchDedicatedDatabaseById(projectId, databaseId, {
					type: "engine",
					engine: kind.engine === "postgres" ? "postgresql" : "mysql"
				});
				if (database && typeof database.replicas === "number" && database.replicas >= expectedReplicas) return true;
			} else {
				const database = await getProductDatabase(sdk.forProject(projectId), kind.backend, databaseId);
				if (database) {
					if (typeof database.replicas === "number" && database.replicas >= expectedReplicas) return true;
					const status = readProductDatabaseLifecycleStatus(database);
					if (typeof database.replicas !== "number" && isDatabaseLifecycleReady(status)) return true;
				}
			}
		} catch {}
		if (attempt < maxAttempts - 1) {
			await sleep(intervalMs);
			intervalMs = Math.min(Math.round(intervalMs * 1.25), 3e3);
		}
	}
	return false;
}
async function waitForCreatedDatabasePitrReady(projectId, databaseId, kind, maxAttempts = 40) {
	if (!projectId || !databaseId) return false;
	if (kind.type !== "native") return true;
	let intervalMs = 500;
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		try {
			if ((await fetchDedicatedDatabaseById(projectId, databaseId, {
				type: "engine",
				engine: kind.engine === "postgres" ? "postgresql" : "mysql"
			}))?.pitr === true) return true;
		} catch {}
		if (attempt < maxAttempts - 1) {
			await sleep(intervalMs);
			intervalMs = Math.min(Math.round(intervalMs * 1.25), 3e3);
		}
	}
	return false;
}
async function updateProjectDatabase(projectId, databaseId, data, dbKind) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const payload = {
		databaseId,
		name: data.name.trim(),
		...data.enabled !== void 0 ? { enabled: data.enabled } : {}
	};
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.update(payload);
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.update(payload);
	return await projectSdk.tablesDB.update(payload);
}
async function createTablesDatabaseMigration(projectId, databaseId, specification) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const trimmed = specification.trim();
	if (!trimmed || isServerlessDatabaseSpecId(trimmed)) throw new Error("A dedicated specification is required.");
	return sdk.forProject(projectId).tablesDB.createMigration({
		databaseId,
		specification: trimmed
	});
}
async function updateProductDatabaseSpecificationViaUpdate(projectId, databaseId, dbKind, specification, name) {
	const projectSdk = sdk.forProject(projectId);
	const trimmedName = name?.trim();
	const payload = {
		databaseId,
		specification,
		...trimmedName ? { name: trimmedName } : {}
	};
	if (dbKind === "documentsdb") return projectSdk.documentsDB.update({
		databaseId,
		name: trimmedName || databaseId,
		specification
	});
	if (dbKind === "vectorsdb") return projectSdk.vectorsDB.update({
		databaseId,
		name: trimmedName || databaseId,
		specification
	});
	return projectSdk.tablesDB.update(payload);
}
async function updateProductDatabaseSpecification(projectId, databaseId, dbKind, specification, currentSpecification, name) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const trimmed = specification.trim();
	if (!trimmed || isServerlessDatabaseSpecId(trimmed)) throw new Error("A dedicated specification is required.");
	const currentIsServerless = !currentSpecification?.trim() || isServerlessDatabaseSpecId(currentSpecification);
	if (dbKind === "tablesdb" && currentIsServerless) return createTablesDatabaseMigration(projectId, databaseId, trimmed);
	return updateProductDatabaseSpecificationViaUpdate(projectId, databaseId, dbKind, trimmed, name);
}
async function deleteProjectDatabase(projectId, databaseId, dbKind) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.delete({ databaseId });
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.delete({ databaseId });
	return await projectSdk.tablesDB.delete({ databaseId });
}
async function createNativeDatabase(projectId, data) {
	if (!projectId) throw new Error("Project ID is required");
	if (!data.specification.trim()) throw new Error("Database specification is required");
	const region = data.region && data.region.trim() !== "" && data.region !== "unknown" ? data.region.trim() : void 0;
	const projectSdk = sdk.forProject(projectId, region);
	if (data.databaseId?.trim()) {
		const idError = getDedicatedDatabaseIdError(data.databaseId);
		if (idError) throw new Error(idError);
	}
	const databaseId = resolveDedicatedDatabaseId(data.databaseId);
	const haReplicaCount = Math.max(0, data.haReplicaCount ?? 0);
	const pitrEnabled = data.pitrEnabled === true;
	return await dedicatedEngineService(projectSdk, data.engine).create({
		databaseId,
		name: data.name.trim(),
		specification: data.specification.trim(),
		replicas: haReplicaCount,
		pitr: pitrEnabled
	});
}
function isDatabaseSpecificationsSupported() {
	const features = getActiveProfileFeatures();
	return features.dedicatedDbsSupport || features.dedicatedDbsDocumentsDB || features.dedicatedDbsVectorsDB || features.nativeDbsPostgres || features.nativeDbsMySQL || features.nativeDbsMongo;
}
function isDatabaseSpecificationsSourceSupported(source) {
	const features = getActiveProfileFeatures();
	if (source.type === "product") {
		if (source.api === "documentsdb") return features.dedicatedDbsDocumentsDB;
		if (source.api === "vectorsdb") return features.dedicatedDbsVectorsDB;
		return features.dedicatedDbsSupport;
	}
	const engine = source.engine.toLowerCase();
	if (engine === "mysql" || engine === "mariadb") return features.nativeDbsMySQL;
	if (engine === "mongodb" || engine === "mongo") return features.nativeDbsMongo;
	return features.nativeDbsPostgres || features.dedicatedDbsVectorsDB;
}
function enabledDatabaseSpecificationsSources() {
	const features = getActiveProfileFeatures();
	const sources = [];
	if (features.dedicatedDbsSupport) sources.push({
		type: "product",
		api: "tablesdb"
	});
	if (features.dedicatedDbsDocumentsDB) sources.push({
		type: "product",
		api: "documentsdb"
	});
	if (features.dedicatedDbsVectorsDB) sources.push({
		type: "product",
		api: "vectorsdb"
	});
	if (features.nativeDbsPostgres || features.dedicatedDbsVectorsDB) sources.push({
		type: "engine",
		engine: "postgresql"
	});
	if (features.nativeDbsMySQL) sources.push({
		type: "engine",
		engine: "mysql"
	});
	if (features.nativeDbsMongo) sources.push({
		type: "engine",
		engine: "mongodb"
	});
	return sources;
}
async function fetchDatabaseSpecifications(projectId, source) {
	if (!projectId || !isDatabaseSpecificationsSupported() || !isDatabaseSpecificationsSourceSupported(source)) return {
		specifications: [],
		total: 0,
		pricing: null
	};
	const response = await dedicatedDatabaseService(sdk.forProject(projectId), source).listSpecifications();
	return {
		specifications: response.specifications ?? [],
		total: response.total ?? response.specifications?.length ?? 0,
		pricing: response.pricing ?? null
	};
}
async function fetchMergedDatabaseSpecifications(projectId) {
	if (!projectId || !isDatabaseSpecificationsSupported()) return {
		specifications: [],
		total: 0,
		pricing: null
	};
	const sources = enabledDatabaseSpecificationsSources();
	const settled = await Promise.allSettled(sources.map((source) => fetchDatabaseSpecifications(projectId, source)));
	const byId = /* @__PURE__ */ new Map();
	let pricing = null;
	for (const result of settled) {
		if (result.status !== "fulfilled") continue;
		if (!pricing && result.value.pricing) pricing = result.value.pricing;
		for (const spec of result.value.specifications) {
			const key = spec.slug?.trim();
			if (!key || byId.has(key)) continue;
			byId.set(key, spec);
		}
	}
	const specifications = Array.from(byId.values());
	return {
		specifications,
		total: specifications.length,
		pricing
	};
}
function databaseSpecificationsQueryOptions(projectId, source) {
	return queryOptions({
		queryKey: [
			"database-specifications",
			"project",
			projectId,
			dedicatedDatabaseSourceKey(source)
		],
		queryFn: () => fetchDatabaseSpecifications(projectId, source),
		enabled: !!projectId && isDatabaseSpecificationsSupported() && isDatabaseSpecificationsSourceSupported(source),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function mergedDatabaseSpecificationsQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"database-specifications",
			"project",
			projectId,
			"merged"
		],
		queryFn: () => fetchMergedDatabaseSpecifications(projectId),
		enabled: !!projectId && isDatabaseSpecificationsSupported(),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useDatabaseSpecifications(projectId, source) {
	return useQuery(databaseSpecificationsQueryOptions(projectId, source));
}
function useMergedDatabaseSpecifications(projectId) {
	return useQuery(mergedDatabaseSpecificationsQueryOptions(projectId));
}
function isNativeDatabasesSupported() {
	const features = getActiveProfileFeatures();
	return features.nativeDbsPostgres || features.nativeDbsMySQL || features.nativeDbsMongo;
}
function isDedicatedEngineAccessSupported() {
	const features = getActiveProfileFeatures();
	return isNativeDatabasesSupported() || features.dedicatedDbsSupport || features.dedicatedDbsDocumentsDB || features.dedicatedDbsVectorsDB;
}
function dedicatedEnginesForProfile() {
	const features = getActiveProfileFeatures();
	const engines = [];
	if (features.nativeDbsPostgres || features.dedicatedDbsVectorsDB || features.dedicatedDbsSupport) engines.push("postgresql");
	if (features.nativeDbsMySQL || features.dedicatedDbsSupport) engines.push("mysql");
	if (features.nativeDbsMongo || features.dedicatedDbsDocumentsDB || features.dedicatedDbsSupport) engines.push("mongodb");
	return engines;
}
function allowedDedicatedEngineKeys() {
	const allowed = /* @__PURE__ */ new Set();
	for (const engine of dedicatedEnginesForProfile()) if (engine === "postgresql") {
		allowed.add("postgresql");
		allowed.add("postgres");
	} else if (engine === "mysql") {
		allowed.add("mysql");
		allowed.add("mariadb");
	} else {
		allowed.add("mongodb");
		allowed.add("mongo");
	}
	return allowed;
}
async function fetchProjectDedicatedDatabases(projectId) {
	if (!projectId) return {
		databases: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.orderDesc("$createdAt"), Query.limit(MERGED_DATABASE_LIST_LIMIT)];
	const engineLists = [];
	for (const engine of dedicatedEnginesForProfile()) engineLists.push(dedicatedEngineService(projectSdk, engine).list({ queries }));
	if (engineLists.length === 0) return {
		databases: [],
		total: 0
	};
	const results = await Promise.allSettled(engineLists);
	const fulfilled = results.filter((r) => r.status === "fulfilled");
	const realErrors = results.filter((r) => r.status === "rejected" && r.reason?.code !== 404);
	for (const r of realErrors) console.warn("[dedicated-databases] engine list failed:", r.reason);
	if (fulfilled.length === 0 && realErrors.length > 0) throw realErrors[0].reason;
	const databases = fulfilled.flatMap((r) => r.value.databases ?? []).sort((a, b) => a.$createdAt < b.$createdAt ? 1 : -1).slice(0, MERGED_DATABASE_LIST_LIMIT);
	for (const db of databases) {
		const api = db.api?.toLowerCase().trim();
		if (api === "tablesdb" || api === "documentsdb" || api === "vectorsdb") seedDatabaseProductRouteKind(projectId, db.$id, api);
	}
	return {
		databases,
		total: fulfilled.reduce((sum, r) => sum + (r.value.total ?? r.value.databases?.length ?? 0), 0)
	};
}
function dedicatedCardSourceFromProductDatabase(db, backend) {
	const specification = readProductDatabaseSpecification(db);
	if (!specification || isServerlessDatabaseSpecId(specification)) return null;
	const engine = dedicatedComputeEngineForProductBackend(backend) === "mongodb" ? "mongodb" : dedicatedComputeEngineForProductBackend(backend) === "postgres" ? "postgresql" : "mysql";
	return {
		$id: db.$id,
		name: db.name,
		api: computeApiForDatabaseType(backend),
		engine,
		specification,
		status: readProductDatabaseLifecycleStatus(db) ?? "ready",
		replicas: typeof db.replicas === "number" ? db.replicas : 0,
		cpu: 0,
		memory: 0
	};
}
async function fetchDedicatedDatabaseById(projectId, databaseId, source) {
	if (!projectId || !databaseId) return null;
	const projectSdk = sdk.forProject(projectId);
	if (source.type === "product") {
		const backend = routeKindToDatabaseType(source.dbKind);
		const product = await getProductDatabase(projectSdk, backend, databaseId);
		if (!product) return null;
		return dedicatedCardSourceFromProductDatabase(product, backend);
	}
	const key = source.engine.trim().toLowerCase();
	if (!key || !allowedDedicatedEngineKeys().has(key)) return null;
	const engine = dedicatedEngineService(projectSdk, key);
	try {
		const database = await engine.get({ databaseId });
		if (database?.$id) return database;
	} catch {}
	try {
		return (await engine.list({ queries: [Query.equal("$id", databaseId), Query.limit(1)] })).databases?.[0] ?? null;
	} catch {
		return null;
	}
}
function dedicatedDatabaseByIdQueryOptions(projectId, databaseId, source) {
	return queryOptions({
		queryKey: [
			"dedicated-database",
			"project",
			projectId,
			databaseId,
			source?.type === "product" ? `product:${source.dbKind}` : source?.type === "engine" ? `engine:${source.engine}` : ""
		],
		queryFn: () => fetchDedicatedDatabaseById(projectId, databaseId, source),
		enabled: !!projectId && !!databaseId && !!source && isDedicatedEngineAccessSupported(),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function dedicatedDatabasesQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"dedicated-databases",
			"project",
			projectId
		],
		queryFn: () => fetchProjectDedicatedDatabases(projectId),
		enabled: !!projectId && isDedicatedEngineAccessSupported(),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchInterval: (query) => {
			return (query.state.data?.databases ?? []).some((db) => shouldPollDedicatedDatabaseStatus(db.status)) ? DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS : false;
		},
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectDedicatedDatabases(projectId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(dedicatedDatabasesQueryOptions(projectId));
	return {
		databases: data?.databases ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
async function createProjectTable(projectId, databaseId, dbKind, data) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const projectSdk = sdk.forProject(projectId);
	const tableId = data.tableId && data.tableId.trim() !== "" ? data.tableId.trim() : ID.unique();
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Vectorsdb) {
		const dimension = typeof data.dimension === "number" && data.dimension > 0 ? data.dimension : 768;
		return await projectSdk.vectorsDB.createCollection({
			databaseId,
			collectionId: tableId,
			name: data.name.trim(),
			dimension
		});
	}
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.createCollection({
		databaseId,
		collectionId: tableId,
		name: data.name.trim(),
		...data.attributes?.length ? { attributes: data.attributes } : {}
	});
	return await projectSdk.tablesDB.createTable({
		databaseId,
		tableId,
		name: data.name.trim()
	});
}
async function createProjectTableWithStructure(projectId, databaseId, data) {
	if (!projectId || !databaseId) throw new Error("Project ID and Database ID are required");
	const projectSdk = sdk.forProject(projectId);
	const tableId = data.tableId && data.tableId.trim() !== "" ? data.tableId.trim() : ID.unique();
	return await projectSdk.tablesDB.createTable({
		databaseId,
		tableId,
		name: data.name.trim(),
		columns: data.columns?.length ? data.columns : void 0,
		indexes: data.indexes?.length ? data.indexes : void 0
	});
}
async function fetchTableStructureForCopy(projectId, databaseId, tableId) {
	if (!projectId || !databaseId || !tableId) return {
		columns: [],
		indexes: []
	};
	const projectSdk = sdk.forProject(projectId);
	let list;
	try {
		list = await projectSdk.tablesDB.listColumns({
			databaseId,
			tableId,
			total: true
		});
	} catch {
		return {
			columns: [],
			indexes: []
		};
	}
	const columns = list.columns ?? [];
	const columnDefs = [];
	for (const col of columns) {
		if (col.status !== "available") continue;
		const c = col;
		const key = c.key || "";
		const type = c.type || "string";
		const def = {
			key,
			type,
			required: !!c.required,
			...!!c.array && { array: true }
		};
		if (type === "string" || type === "varchar" || type === "text" || type === "mediumtext" || type === "longtext") {
			if (typeof c.size === "number") def.size = c.size;
			else if (type === "varchar") def.size = 255;
			else if (type === "string") def.size = 255;
		}
		if (c.default !== void 0 && c.default !== null) def.default = c.default;
		if (type === "integer" || type === "bigint" || type === "double") {
			if (typeof c.min !== "undefined") def.min = c.min;
			if (typeof c.max !== "undefined") def.max = c.max;
		}
		if (type === "enum" && Array.isArray(c.elements)) def.elements = c.elements;
		if (type === "datetime" && typeof c.format === "string") def.format = c.format;
		if (type === "relationship") {
			def.relatedTable = c.relatedTable;
			def.relationType = c.relationType ?? c.relationshipType;
			if (typeof c.twoWay === "boolean") def.twoWay = c.twoWay;
			if (typeof c.twoWayKey === "string") def.twoWayKey = c.twoWayKey;
			if (typeof c.onDelete === "string") def.onDelete = c.onDelete;
		}
		if (type === "point" || type === "linestring" || type === "polygon") {
			if (typeof c.format === "string") def.format = c.format;
		}
		if (typeof c.encrypt === "boolean") def.encrypt = c.encrypt;
		columnDefs.push(def);
	}
	let indexList;
	try {
		indexList = await projectSdk.tablesDB.listIndexes({
			databaseId,
			tableId,
			total: true
		});
	} catch {
		return {
			columns: columnDefs,
			indexes: []
		};
	}
	const indexDefs = [];
	const rawIndexes = indexList.indexes ?? [];
	for (const idx of rawIndexes) {
		if (idx.status !== "available") continue;
		const { key, type, columns: indexColumns, orders, lengths } = idx;
		if (!key || !type || !Array.isArray(indexColumns) || indexColumns.length === 0) continue;
		const def = {
			key,
			type,
			attributes: indexColumns
		};
		if (Array.isArray(orders) && orders.length > 0) def.orders = orders;
		if (Array.isArray(lengths) && lengths.length > 0) def.lengths = lengths;
		indexDefs.push(def);
	}
	return {
		columns: columnDefs,
		indexes: indexDefs
	};
}
async function fetchProjectTables(projectId, databaseId, dbKind, page = 0, limit = 10, search, order = "asc", sortBy = "$createdAt") {
	if (!projectId || !databaseId) return {
		tables: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		order === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) try {
		const response$1 = await projectSdk.documentsDB.listCollections({
			databaseId,
			queries
		});
		return {
			tables: response$1.collections ?? [],
			total: response$1.total ?? 0
		};
	} catch {
		return {
			tables: [],
			total: 0
		};
	}
	if (kind === DatabaseType.Vectorsdb) try {
		const response$1 = await projectSdk.vectorsDB.listCollections({
			databaseId,
			queries
		});
		return {
			tables: response$1.collections ?? [],
			total: response$1.total ?? 0
		};
	} catch {
		return {
			tables: [],
			total: 0
		};
	}
	let response;
	try {
		response = await projectSdk.tablesDB.listTables({
			databaseId,
			queries
		});
	} catch {
		response = {
			tables: [],
			total: 0
		};
	}
	return {
		tables: response.tables ?? [],
		total: response.total ?? 0
	};
}
var VISUALIZER_DOCUMENT_SAMPLE_SIZE = 25;
var VISUALIZER_SAMPLE_CONCURRENCY = 10;
async function mapWithConcurrency(items, concurrency, mapper) {
	if (items.length === 0) return [];
	const results = new Array(items.length);
	let nextIndex = 0;
	async function worker() {
		while (nextIndex < items.length) {
			const index = nextIndex++;
			results[index] = await mapper(items[index], index);
		}
	}
	const workerCount = Math.min(Math.max(concurrency, 1), items.length);
	await Promise.all(Array.from({ length: workerCount }, () => worker()));
	return results;
}
async function enrichCollectionsForVisualizer(projectId, databaseId, collections, kind) {
	const projectSdk = sdk.forProject(projectId);
	const listDocuments = kind === DatabaseType.Documentsdb ? projectSdk.documentsDB.listDocuments.bind(projectSdk.documentsDB) : projectSdk.vectorsDB.listDocuments.bind(projectSdk.vectorsDB);
	return mapWithConcurrency(collections, VISUALIZER_SAMPLE_CONCURRENCY, async (collection) => {
		let sampleRows = [];
		try {
			sampleRows = ((await listDocuments({
				databaseId,
				collectionId: collection.$id,
				queries: [Query.limit(VISUALIZER_DOCUMENT_SAMPLE_SIZE)],
				total: false
			})).documents ?? []).map((doc) => flattenDocumentForTableRow(doc));
		} catch {
			sampleRows = [];
		}
		const columns = buildCollectionIndexableAttributes(collection.attributes, sampleRows);
		return {
			...collection,
			columns,
			indexes: normalizeIndexesForTableUi(collection.indexes)
		};
	});
}
async function fetchAllProjectTablesForVisualizer(projectId, databaseId, dbKind) {
	if (!projectId || !databaseId) return { tables: [] };
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.orderDesc("$createdAt"), Query.limit(1e3)];
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) try {
		return { tables: await enrichCollectionsForVisualizer(projectId, databaseId, (await projectSdk.documentsDB.listCollections({
			databaseId,
			queries
		})).collections ?? [], DatabaseType.Documentsdb) };
	} catch {
		return { tables: [] };
	}
	if (kind === DatabaseType.Vectorsdb) try {
		return { tables: await enrichCollectionsForVisualizer(projectId, databaseId, (await projectSdk.vectorsDB.listCollections({
			databaseId,
			queries
		})).collections ?? [], DatabaseType.Vectorsdb) };
	} catch {
		return { tables: [] };
	}
	let response;
	try {
		response = await projectSdk.tablesDB.listTables({
			databaseId,
			queries
		});
	} catch {
		response = {
			tables: [],
			total: 0
		};
	}
	return { tables: response.tables ?? [] };
}
const ROWS_LIST_ORDER_TIEBREAKER = "$sequence";
function buildRowListOrderQueries(sortBy, order) {
	const primary = order === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	if (sortBy === "$sequence") return [primary];
	return [primary, order === "asc" ? Query.orderAsc(ROWS_LIST_ORDER_TIEBREAKER) : Query.orderDesc(ROWS_LIST_ORDER_TIEBREAKER)];
}
function buildRowListSelectQuery(listSelectAttrKeys, sortBy) {
	if (!listSelectAttrKeys?.length) return void 0;
	const fields = new Set([
		"$id",
		"$createdAt",
		"$updatedAt",
		"$permissions",
		ROWS_LIST_ORDER_TIEBREAKER
	]);
	if (sortBy) fields.add(sortBy);
	for (const k of listSelectAttrKeys) {
		if (typeof k !== "string") continue;
		const t = k.trim();
		if (!t || t.startsWith("$") || t.length > 512) continue;
		fields.add(t);
	}
	return Query.select([...fields]);
}
async function fetchProjectTableRows(projectId, databaseId, dbKind, tableId, page = 0, limit = 10, _search, order = "desc", sortBy = "$createdAt", filterQueries, listSelectAttrKeys) {
	if (!projectId || !databaseId || !tableId) return {
		rows: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const selectQuery = buildRowListSelectQuery(listSelectAttrKeys, sortBy);
	const queries = [
		...selectQuery ? [selectQuery] : [],
		...filterQueries ?? [],
		...buildRowListOrderQueries(sortBy, order),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	if (kind === DatabaseType.Documentsdb || kind === DatabaseType.Vectorsdb) {
		const response$1 = await (kind === DatabaseType.Documentsdb ? projectSdk.documentsDB.listDocuments.bind(projectSdk.documentsDB) : projectSdk.vectorsDB.listDocuments.bind(projectSdk.vectorsDB))({
			databaseId,
			collectionId: tableId,
			queries,
			total: true
		});
		return {
			rows: (response$1.documents ?? []).map((d) => flattenDocumentForTableRow(d)),
			total: response$1.total ?? 0
		};
	}
	const response = await projectSdk.tablesDB.listRows({
		databaseId,
		tableId,
		queries,
		total: true
	});
	return {
		rows: response.rows || response.documents || [],
		total: response.total || 0
	};
}
async function fetchProjectTableRow(projectId, databaseId, dbKind, tableId, rowId) {
	if (!projectId || !databaseId || !tableId || !rowId) return null;
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	try {
		if (kind === DatabaseType.Documentsdb) return flattenDocumentForTableRow(await projectSdk.documentsDB.getDocument({
			databaseId,
			collectionId: tableId,
			documentId: rowId
		}));
		if (kind === DatabaseType.Vectorsdb) return flattenDocumentForTableRow(await projectSdk.vectorsDB.getDocument({
			databaseId,
			collectionId: tableId,
			documentId: rowId
		}));
		return await projectSdk.tablesDB.getRow({
			databaseId,
			tableId,
			rowId
		});
	} catch {}
	return null;
}
async function fetchProjectTableColumns(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	if (!projectId || !databaseId || !tableId) return {
		columns: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderAsc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) try {
		const cols = mapCollectionAttributesToColumnLike((await projectSdk.documentsDB.getCollection({
			databaseId,
			collectionId: tableId
		})).attributes);
		return {
			columns: cols,
			total: cols.length
		};
	} catch {
		return {
			columns: [],
			total: 0
		};
	}
	if (kind === DatabaseType.Vectorsdb) try {
		const cols = mapCollectionAttributesToColumnLike((await projectSdk.vectorsDB.getCollection({
			databaseId,
			collectionId: tableId
		})).attributes);
		return {
			columns: cols,
			total: cols.length
		};
	} catch {
		return {
			columns: [],
			total: 0
		};
	}
	try {
		const response = await projectSdk.tablesDB.listColumns({
			databaseId,
			tableId,
			queries,
			total: true
		});
		return {
			columns: response.columns ?? [],
			total: response.total ?? 0
		};
	} catch {
		return {
			columns: [],
			total: 0
		};
	}
}
async function fetchProjectTableIndexes(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	if (!projectId || !databaseId || !tableId) return {
		indexes: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderAsc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) try {
		const response = await projectSdk.documentsDB.listIndexes({
			databaseId,
			collectionId: tableId,
			queries,
			total: true
		});
		return {
			indexes: normalizeIndexesForTableUi(response.indexes),
			total: response.total ?? 0
		};
	} catch {
		return {
			indexes: [],
			total: 0
		};
	}
	if (kind === DatabaseType.Vectorsdb) try {
		const response = await projectSdk.vectorsDB.listIndexes({
			databaseId,
			collectionId: tableId,
			queries,
			total: true
		});
		return {
			indexes: normalizeIndexesForTableUi(response.indexes),
			total: response.total ?? 0
		};
	} catch {
		return {
			indexes: [],
			total: 0
		};
	}
	try {
		const response = await projectSdk.tablesDB.listIndexes({
			databaseId,
			tableId,
			queries,
			total: true
		});
		return {
			indexes: response.indexes ?? [],
			total: response.total ?? 0
		};
	} catch {
		return {
			indexes: [],
			total: 0
		};
	}
}
async function fetchProjectTable(projectId, databaseId, dbKind, tableId) {
	if (!projectId || !databaseId || !tableId) return null;
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	try {
		let response = null;
		if (kind === DatabaseType.Documentsdb) response = await projectSdk.documentsDB.getCollection({
			databaseId,
			collectionId: tableId
		});
		else if (kind === DatabaseType.Vectorsdb) response = await projectSdk.vectorsDB.getCollection({
			databaseId,
			collectionId: tableId
		});
		else response = await projectSdk.tablesDB.getTable({
			databaseId,
			tableId
		});
		const rowSecurity = response.rowSecurity === true || response.documentSecurity === true;
		return {
			$id: response.$id,
			name: response.name || "Unnamed Table",
			databaseId,
			enabled: response.enabled !== false,
			rowSecurity,
			$permissions: response.$permissions || [],
			$createdAt: response.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			$updatedAt: response.$updatedAt || response.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			dimension: typeof response.dimension === "number" ? response.dimension : void 0
		};
	} catch {
		return null;
	}
}
async function deleteProjectTableRow(projectId, databaseId, dbKind, tableId, rowId) {
	if (!projectId || !databaseId || !tableId || !rowId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) {
		await projectSdk.documentsDB.deleteDocument({
			databaseId,
			collectionId: tableId,
			documentId: rowId
		});
		return;
	}
	if (kind === DatabaseType.Vectorsdb) {
		await projectSdk.vectorsDB.deleteDocument({
			databaseId,
			collectionId: tableId,
			documentId: rowId
		});
		return;
	}
	await projectSdk.tablesDB.deleteRow({
		databaseId,
		tableId,
		rowId
	});
}
async function ensureDocumentOrVectorCreateDataPopulated(projectId, databaseId, dbKind, tableId, payloadWithoutId) {
	if (Object.keys(payloadWithoutId).length > 0) return payloadWithoutId;
	const { columns } = await fetchProjectTableColumns(projectId, databaseId, dbKind, tableId);
	const filled = {};
	for (const col of columns) {
		const c = col;
		const key = String(c.key || c.name || c.$id || c.attribute || "");
		if (!key || key.startsWith("$")) continue;
		const type = String(c.type ?? "string").toLowerCase();
		if (type === "relationship") continue;
		const isArray = Boolean(c.array);
		const required = Boolean(c.required);
		const def = c.default;
		if (def !== void 0 && def !== null) filled[key] = def;
		else if (required) if (type === "boolean" || type === "bool") filled[key] = false;
		else if (type === "integer" || type === "int" || type === "bigint" || type === "double" || type === "float" || type === "number") filled[key] = 0;
		else if (type === "vector" || isArray) filled[key] = [];
		else filled[key] = "";
		else filled[key] = null;
	}
	return Object.keys(filled).length > 0 ? filled : payloadWithoutId;
}
async function createTextEmbeddings(projectId, texts, model) {
	if (!projectId) throw new Error("Missing required parameters");
	if (!Array.isArray(texts) || texts.length === 0) throw new Error("At least one text value is required");
	return await sdk.forProject(projectId).vectorsDB.createTextEmbeddings({
		texts,
		...model ? { model } : {}
	});
}
async function createProjectTableRow(projectId, databaseId, dbKind, tableId, data, rowId, permissions) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const { ID: ID$1 } = await import("@appwrite.io/console");
	const id = rowId || data.$id || ID$1.unique();
	let payload = { ...data };
	if (payload.$id) delete payload.$id;
	if (kind === DatabaseType.Documentsdb) {
		payload = await ensureDocumentOrVectorCreateDataPopulated(projectId, databaseId, dbKind, tableId, payload);
		return flattenDocumentForTableRow(await projectSdk.documentsDB.createDocument({
			databaseId,
			collectionId: tableId,
			documentId: id,
			data: payload,
			...permissions && permissions.length > 0 ? { permissions } : {}
		}));
	}
	if (kind === DatabaseType.Vectorsdb) {
		payload = await ensureDocumentOrVectorCreateDataPopulated(projectId, databaseId, dbKind, tableId, payload);
		return flattenDocumentForTableRow(await projectSdk.vectorsDB.createDocument({
			databaseId,
			collectionId: tableId,
			documentId: id,
			data: payload,
			...permissions && permissions.length > 0 ? { permissions } : {}
		}));
	}
	return await projectSdk.tablesDB.createRow({
		databaseId,
		tableId,
		rowId: id,
		data: payload,
		...permissions && permissions.length > 0 ? { permissions } : {}
	});
}
async function updateProjectTableRow(projectId, databaseId, dbKind, tableId, rowId, data, permissions) {
	if (!projectId || !databaseId || !tableId || !rowId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const payload = { ...data };
	if (payload.$id) delete payload.$id;
	if (kind === DatabaseType.Documentsdb) return flattenDocumentForTableRow(await projectSdk.documentsDB.updateDocument({
		databaseId,
		collectionId: tableId,
		documentId: rowId,
		data: payload,
		...permissions !== void 0 ? { permissions } : {}
	}));
	if (kind === DatabaseType.Vectorsdb) return flattenDocumentForTableRow(await projectSdk.vectorsDB.updateDocument({
		databaseId,
		collectionId: tableId,
		documentId: rowId,
		data: payload,
		...permissions !== void 0 ? { permissions } : {}
	}));
	return await projectSdk.tablesDB.updateRow({
		databaseId,
		tableId,
		rowId,
		data: payload,
		...permissions !== void 0 ? { permissions } : {}
	});
}
async function createProjectTableRows(projectId, databaseId, dbKind, tableId, rows, hasRelationshipColumns = false) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	if (rows.length === 0) return {
		created: 0,
		errors: []
	};
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const errors = [];
	let created = 0;
	if (!hasRelationshipColumns && kind === DatabaseType.Tablesdb) try {
		const { ID: ID$1 } = await import("@appwrite.io/console");
		const rowsToInsert = rows.map((row) => {
			const rowRec = row;
			const rowData = { ...rowRec };
			const rowId = typeof rowRec.$id === "string" ? rowRec.$id : ID$1.unique();
			if (rowData.$id) delete rowData.$id;
			return {
				$id: rowId,
				...rowData
			};
		});
		await projectSdk.tablesDB.createRows({
			databaseId,
			tableId,
			rows: rowsToInsert
		});
		created = rows.length;
	} catch {}
	if (created === 0) {
		const batchSize = 10;
		for (let i = 0; i < rows.length; i += batchSize) {
			const batchPromises = rows.slice(i, i + batchSize).map(async (row) => {
				try {
					const rid = row.$id;
					await createProjectTableRow(projectId, databaseId, dbKind, tableId, row, typeof rid === "string" ? rid : void 0);
					created++;
				} catch (error) {
					errors.push(error instanceof Error ? error : new Error(String(error)));
				}
			});
			await Promise.all(batchPromises);
		}
	}
	return {
		created,
		errors
	};
}
async function createProjectTableColumn(projectId, databaseId, tableId, columnData) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const data = columnData;
	const type = data.type;
	const required = data.required === true;
	const array = data.array === true;
	const encrypt = data.encrypt === true;
	const size = typeof data.size === "number" ? data.size : 255;
	const min = typeof data.min === "number" ? data.min : void 0;
	const max = typeof data.max === "number" ? data.max : void 0;
	const stringDefault = data.xdefault === void 0 || data.xdefault === null ? void 0 : String(data.xdefault);
	const numberDefault = typeof data.xdefault === "number" || typeof data.xdefault === "bigint" ? data.xdefault : void 0;
	const floatDefault = typeof data.xdefault === "number" ? data.xdefault : void 0;
	const boolDefault = typeof data.xdefault === "boolean" ? data.xdefault : void 0;
	const elements = Array.isArray(data.elements) ? data.elements.map(String) : [];
	const colKey = typeof data.key === "string" ? data.key : String(data.key ?? "");
	if (!colKey) throw new Error("Column key is required");
	switch (type) {
		case "varchar": return await projectSdk.tablesDB.createVarcharColumn({
			databaseId,
			tableId,
			key: colKey,
			size,
			required,
			xdefault: stringDefault,
			array,
			encrypt
		});
		case "text": return await projectSdk.tablesDB.createTextColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array,
			encrypt
		});
		case "mediumtext": return await projectSdk.tablesDB.createMediumtextColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array,
			encrypt
		});
		case "longtext": return await projectSdk.tablesDB.createLongtextColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array,
			encrypt
		});
		case "string": return await projectSdk.tablesDB.createStringColumn({
			databaseId,
			tableId,
			key: colKey,
			size,
			required,
			xdefault: stringDefault,
			array,
			encrypt
		});
		case "integer": return await projectSdk.tablesDB.createIntegerColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			min,
			max,
			xdefault: numberDefault,
			array
		});
		case "bigint": return await projectSdk.tablesDB.createBigIntColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			min,
			max,
			xdefault: numberDefault,
			array
		});
		case "double":
		case "float": return await projectSdk.tablesDB.createFloatColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			min,
			max,
			xdefault: floatDefault,
			array
		});
		case "boolean": return await projectSdk.tablesDB.createBooleanColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: boolDefault,
			array
		});
		case "datetime": return await projectSdk.tablesDB.createDatetimeColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array
		});
		case "email": return await projectSdk.tablesDB.createEmailColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array
		});
		case "ip": return await projectSdk.tablesDB.createIpColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array
		});
		case "url": return await projectSdk.tablesDB.createUrlColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: stringDefault,
			array
		});
		case "enum": return await projectSdk.tablesDB.createEnumColumn({
			databaseId,
			tableId,
			key: colKey,
			elements,
			required,
			xdefault: stringDefault,
			array
		});
		case "relationship": return await projectSdk.tablesDB.createRelationshipColumn({
			databaseId,
			tableId,
			relatedTableId: String(data.relatedTableId ?? ""),
			type: data.relationshipType,
			twoWay: data.twoWay === true,
			key: colKey,
			twoWayKey: typeof data.twoWayKey === "string" ? data.twoWayKey : void 0,
			onDelete: data.onDelete
		});
		case "point": return await projectSdk.tablesDB.createPointColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: data.xdefault
		});
		case "linestring": return await projectSdk.tablesDB.createLineColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: data.xdefault
		});
		case "polygon": return await projectSdk.tablesDB.createPolygonColumn({
			databaseId,
			tableId,
			key: colKey,
			required,
			xdefault: data.xdefault
		});
		default: throw new Error(`Unsupported column type: ${type}`);
	}
}
async function updateProjectTableColumn(projectId, databaseId, tableId, columnKey, columnData) {
	if (!projectId || !databaseId || !tableId || !columnKey) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const data = columnData;
	const type = data.type;
	const required = data.required === true;
	const size = typeof data.size === "number" ? data.size : void 0;
	const min = typeof data.min === "number" ? data.min : void 0;
	const max = typeof data.max === "number" ? data.max : void 0;
	const stringDefault = data.xdefault === void 0 || data.xdefault === null || data.xdefault === "" ? null : String(data.xdefault);
	const numberDefault = typeof data.xdefault === "number" || typeof data.xdefault === "bigint" ? data.xdefault : null;
	const floatDefault = typeof data.xdefault === "number" ? data.xdefault : null;
	const boolDefault = typeof data.xdefault === "boolean" ? data.xdefault : null;
	const spatialDefault = data.xdefault === void 0 || data.xdefault === null ? null : data.xdefault;
	const elements = Array.isArray(data.elements) ? data.elements.map(String) : [];
	const formKey = typeof data.key === "string" ? data.key.trim() : "";
	const newKey = (typeof data.newKey === "string" ? data.newKey.trim() : "") || (formKey && formKey !== columnKey ? formKey : void 0) || void 0;
	switch (type) {
		case "varchar": return await projectSdk.tablesDB.updateVarcharColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			size,
			newKey
		});
		case "text": return await projectSdk.tablesDB.updateTextColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "mediumtext": return await projectSdk.tablesDB.updateMediumtextColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "longtext": return await projectSdk.tablesDB.updateLongtextColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "string": return await projectSdk.tablesDB.updateStringColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			size,
			newKey
		});
		case "integer": return await projectSdk.tablesDB.updateIntegerColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			min,
			max,
			xdefault: numberDefault,
			newKey
		});
		case "bigint": return await projectSdk.tablesDB.updateBigIntColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			min,
			max,
			xdefault: numberDefault,
			newKey
		});
		case "double":
		case "float": return await projectSdk.tablesDB.updateFloatColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			min,
			max,
			xdefault: floatDefault,
			newKey
		});
		case "boolean": return await projectSdk.tablesDB.updateBooleanColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: boolDefault,
			newKey
		});
		case "datetime": return await projectSdk.tablesDB.updateDatetimeColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "email": return await projectSdk.tablesDB.updateEmailColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "ip": return await projectSdk.tablesDB.updateIpColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "url": return await projectSdk.tablesDB.updateUrlColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "enum": return await projectSdk.tablesDB.updateEnumColumn({
			databaseId,
			tableId,
			key: columnKey,
			elements,
			required,
			xdefault: stringDefault,
			newKey
		});
		case "relationship": return await projectSdk.tablesDB.updateRelationshipColumn({
			databaseId,
			tableId,
			key: columnKey,
			onDelete: data.onDelete,
			newKey
		});
		case "point": return await projectSdk.tablesDB.updatePointColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: spatialDefault,
			newKey
		});
		case "linestring": return await projectSdk.tablesDB.updateLineColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: spatialDefault,
			newKey
		});
		case "polygon": return await projectSdk.tablesDB.updatePolygonColumn({
			databaseId,
			tableId,
			key: columnKey,
			required,
			xdefault: spatialDefault,
			newKey
		});
		default: throw new Error(`Unsupported column type for update: ${type}`);
	}
}
async function deleteProjectTableColumn(projectId, databaseId, tableId, columnKey) {
	if (!projectId || !databaseId || !tableId || !columnKey) throw new Error("Missing required parameters");
	return await sdk.forProject(projectId).tablesDB.deleteColumn({
		databaseId,
		tableId,
		key: columnKey
	});
}
async function createProjectTableIndex(projectId, databaseId, dbKind, tableId, indexData) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const raw = indexData;
	const key = raw.key;
	const type = raw.type;
	const columns = raw.columns || raw.attributes || [];
	const orders = raw.orders;
	const lengths = raw.lengths;
	const orderBy = orders?.map((order) => order === "asc" ? OrderBy.Asc : OrderBy.Desc);
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.createIndex({
		databaseId,
		collectionId: tableId,
		key,
		type,
		attributes: columns,
		orders: orderBy,
		lengths
	});
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.createIndex({
		databaseId,
		collectionId: tableId,
		key,
		type,
		attributes: columns,
		orders: orderBy,
		lengths
	});
	return await projectSdk.tablesDB.createIndex({
		databaseId,
		tableId,
		key,
		type,
		columns,
		orders: orderBy,
		lengths
	});
}
async function deleteProjectTableIndex(projectId, databaseId, dbKind, tableId, indexKey) {
	if (!projectId || !databaseId || !tableId || !indexKey) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.deleteIndex({
		databaseId,
		collectionId: tableId,
		key: indexKey
	});
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.deleteIndex({
		databaseId,
		collectionId: tableId,
		key: indexKey
	});
	return await projectSdk.tablesDB.deleteIndex({
		databaseId,
		tableId,
		key: indexKey
	});
}
async function updateProjectTable(projectId, databaseId, dbKind, tableId, data) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const collectionPayload = {
		databaseId,
		collectionId: tableId,
		name: data.name,
		permissions: data.permissions,
		documentSecurity: data.rowSecurity,
		enabled: data.enabled
	};
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.updateCollection(collectionPayload);
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.updateCollection(collectionPayload);
	return await projectSdk.tablesDB.updateTable({
		databaseId,
		tableId,
		name: data.name,
		permissions: data.permissions,
		rowSecurity: data.rowSecurity,
		enabled: data.enabled
	});
}
async function deleteProjectTable(projectId, databaseId, dbKind, tableId) {
	if (!projectId || !databaseId || !tableId) throw new Error("Missing required parameters");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	if (kind === DatabaseType.Documentsdb) return await projectSdk.documentsDB.deleteCollection({
		databaseId,
		collectionId: tableId
	});
	if (kind === DatabaseType.Vectorsdb) return await projectSdk.vectorsDB.deleteCollection({
		databaseId,
		collectionId: tableId
	});
	return await projectSdk.tablesDB.deleteTable({
		databaseId,
		tableId
	});
}
function databasesQueryOptions(projectId, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"databases",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries
		],
		queryFn: () => fetchProjectDatabases(projectId, page, limit, search, filterQueries),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function productDatabasesQueryOptions(projectId, backend, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"databases",
			"project",
			projectId,
			backend,
			page,
			limit,
			search,
			filterQueries
		],
		queryFn: () => fetchProjectProductDatabases(projectId, backend, page, limit, search, filterQueries),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function consoleDatabasesQueryOptions(projectId, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"databases",
			"project",
			projectId,
			"console",
			page,
			limit,
			search,
			filterQueries
		],
		queryFn: () => fetchProjectConsoleDatabases(projectId, page, limit, search, filterQueries),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function mapProjectDatabaseListItems(databasesData, limit) {
	const databases = (databasesData?.databases ?? []).map((db) => {
		const backupPolicies = db.policies ?? [];
		const backupPolicyCount = backupPolicies.length;
		const hasBackupPolicy = backupPolicyCount > 0;
		const backupPolicy = backupPolicies[0] || null;
		return {
			$id: db.$id,
			name: db.name || "Unnamed Database",
			tables: 0,
			rows: 0,
			enabled: db.enabled !== false,
			createdAt: db.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: db.$updatedAt || db.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			hasBackupPolicy,
			backupPolicy,
			backupPolicyCount,
			databaseType: coerceDatabaseType(db.type),
			apiType: db.type,
			status: readProductDatabaseLifecycleStatus(db),
			replicas: typeof db.replicas === "number" ? db.replicas : null,
			specification: readProductDatabaseSpecification(db)
		};
	});
	const totalPages = databasesData?.total ? Math.ceil(databasesData.total / limit) : 0;
	return {
		databases,
		total: databasesData?.total || 0,
		totalPages
	};
}
function tablesQueryOptions(projectId, databaseId, dbKind, page = 0, limit = 10, search, order = "asc", sortBy = "$createdAt") {
	const normalizedSearch = search?.trim() || void 0;
	return queryOptions({
		queryKey: [
			"tables",
			"project",
			projectId,
			databaseId,
			page,
			limit,
			normalizedSearch,
			order,
			sortBy,
			dbKind
		],
		queryFn: () => fetchProjectTables(projectId, databaseId, dbKind, page, limit, normalizedSearch, order, sortBy),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function tableRowsQueryOptions(projectId, databaseId, tableId, dbKind, page = 0, limit = 25, search, order = "desc", sortBy = "$createdAt", filterQueries, listSelectAttrKeys) {
	const normalizedSearch = search?.trim() || void 0;
	const listSelectKey = (listSelectAttrKeys?.length ?? 0) > 0 ? [...listSelectAttrKeys].sort().join("") : null;
	return queryOptions({
		queryKey: [
			"rows",
			"project",
			projectId,
			databaseId,
			tableId,
			page,
			limit,
			normalizedSearch,
			order,
			sortBy,
			sortBy === "$sequence" ? null : ROWS_LIST_ORDER_TIEBREAKER,
			filterQueries,
			listSelectKey,
			dbKind
		],
		queryFn: () => fetchProjectTableRows(projectId, databaseId, dbKind, tableId, page, limit, normalizedSearch, order, sortBy, filterQueries, listSelectAttrKeys),
		enabled: !!projectId && !!databaseId && !!tableId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function databaseQueryOptions(projectId, databaseId, dbKind) {
	return queryOptions({
		queryKey: [
			"database",
			"project",
			projectId,
			databaseId,
			dbKind
		],
		queryFn: () => fetchProjectDatabase(projectId, databaseId, dbKind),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function projectTableColumnsQueryKeyPrefix(projectId, databaseId, tableId) {
	return [
		"columns",
		"project",
		projectId,
		databaseId,
		tableId
	];
}
function patchProjectTableColumnsCache(queryClient, projectId, databaseId, tableId, patch) {
	const prefix = projectTableColumnsQueryKeyPrefix(projectId, databaseId, tableId);
	queryClient.setQueriesData({ queryKey: prefix }, (old) => {
		if (!old?.columns) return old;
		const nextColumns = patch(old.columns);
		return {
			...old,
			columns: nextColumns
		};
	});
}
async function refetchProjectTableColumnsQueries(queryClient, projectId, databaseId, tableId) {
	const prefix = projectTableColumnsQueryKeyPrefix(projectId, databaseId, tableId);
	await queryClient.refetchQueries({
		queryKey: prefix,
		type: "all"
	});
}
async function refetchProjectTableRelatedQueries(queryClient, projectId, databaseId, tableId) {
	await refetchProjectTableColumnsQueries(queryClient, projectId, databaseId, tableId);
	await queryClient.refetchQueries({
		queryKey: [
			"indexes",
			"project",
			projectId,
			databaseId,
			tableId
		],
		type: "all"
	});
	await queryClient.refetchQueries({
		queryKey: [
			"table",
			"project",
			projectId,
			databaseId,
			tableId
		],
		type: "active"
	});
	await queryClient.refetchQueries({
		queryKey: [
			"tables",
			"project",
			projectId,
			databaseId
		],
		type: "active"
	});
}
function tableColumnsQueryOptions(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	return queryOptions({
		queryKey: [
			"columns",
			"project",
			projectId,
			databaseId,
			tableId,
			dbKind,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : [],
			page,
			limit
		],
		queryFn: () => fetchProjectTableColumns(projectId, databaseId, dbKind, tableId, filterQueries, page, limit),
		enabled: !!projectId && !!databaseId && !!tableId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function tableQueryOptions(projectId, databaseId, dbKind, tableId) {
	return queryOptions({
		queryKey: [
			"table",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchProjectTable(projectId, databaseId, dbKind, tableId),
		enabled: !!projectId && !!databaseId && !!tableId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function tableIndexesQueryOptions(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	return queryOptions({
		queryKey: [
			"indexes",
			"project",
			projectId,
			databaseId,
			tableId,
			dbKind,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : [],
			page,
			limit
		],
		queryFn: () => fetchProjectTableIndexes(projectId, databaseId, dbKind, tableId, filterQueries, page, limit),
		enabled: !!projectId && !!databaseId && !!tableId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function allTablesForVisualizerQueryOptions(projectId, databaseId, dbKind) {
	return queryOptions({
		queryKey: [
			"tables",
			"visualizer",
			"project",
			projectId,
			databaseId,
			dbKind
		],
		queryFn: () => fetchAllProjectTablesForVisualizer(projectId, databaseId, dbKind),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useProjectConsoleDatabases(projectId, page = 0, limit = 10, search, filterQueries) {
	const { data: databasesData, isLoading, isFetching, isFetched, error, refetch } = useQuery(consoleDatabasesQueryOptions(projectId, page, limit, search, filterQueries));
	const mapped = useMemo(() => mapProjectDatabaseListItems(databasesData, limit), [databasesData, limit]);
	return {
		databases: mapped.databases,
		total: mapped.total,
		totalPages: mapped.totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useProjectDatabase(projectId, databaseId, dbKind) {
	const queryClient = useQueryClient();
	const { data: databaseData, isLoading, isPending, error, refetch } = useQuery({
		...databaseQueryOptions(projectId, databaseId, dbKind),
		refetchInterval: (query) => shouldPollDedicatedDatabaseStatus(query.state.data?.status) ? DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS : false
	});
	useEffect(() => {
		const nextStatus = databaseData?.status;
		if (!projectId || !databaseId || !nextStatus) return;
		queryClient.setQueryData([
			"dedicated-databases",
			"project",
			projectId
		], (prev) => {
			if (!prev?.databases?.length) return prev;
			let changed = false;
			const databases = prev.databases.map((db) => {
				if (db.$id !== databaseId || db.status === nextStatus) return db;
				changed = true;
				return {
					...db,
					status: nextStatus
				};
			});
			return changed ? {
				...prev,
				databases
			} : prev;
		});
	}, [
		databaseData,
		databaseId,
		projectId,
		queryClient
	]);
	return {
		database: databaseData || null,
		isLoading: isLoading && !databaseData,
		isPending,
		error,
		refetch
	};
}
function useProjectTables(projectId, databaseId, dbKind, page = 0, limit = 10, search, order = "asc", sortBy = "$createdAt") {
	const { data: tablesData, isLoading, isFetching, isPending, error, refetch } = useQuery(tablesQueryOptions(projectId, databaseId, dbKind, page, limit, search?.trim() || void 0, order, sortBy));
	const tables = useMemo(() => {
		if (!tablesData?.tables) return [];
		return tablesData.tables.map((table) => {
			const t = table;
			const attrs = t.attributes;
			const idxs = t.indexes;
			return {
				$id: t.$id,
				name: t.name || "Unnamed Table",
				databaseId: databaseId || "",
				rows: t.total || 0,
				columns: attrs?.length || 0,
				indexes: idxs?.length || 0,
				enabled: t.enabled !== false
			};
		});
	}, [tablesData, databaseId]);
	const totalPages = useMemo(() => {
		if (!tablesData?.total) return 0;
		return Math.ceil(tablesData.total / limit);
	}, [tablesData?.total, limit]);
	return {
		tables,
		total: tablesData?.total || 0,
		totalPages,
		isLoading: isLoading && !tablesData,
		isFetching,
		isPending,
		error,
		refetch
	};
}
function useAllProjectTablesForVisualizer(projectId, databaseId, dbKind) {
	const { data: tablesData, isLoading, isPending, error, refetch } = useQuery(allTablesForVisualizerQueryOptions(projectId, databaseId, dbKind));
	return {
		tables: tablesData?.tables ?? [],
		isLoading: isLoading && !tablesData,
		isPending,
		error,
		refetch
	};
}
function useProjectTableRows(projectId, databaseId, tableId, dbKind, page = 0, limit = 25, search, order = "desc", sortBy = "$createdAt", filterQueries, listSelectAttrKeys) {
	const { data: rowsData, isLoading, isFetching, isError, isPlaceholderData, error, refetch } = useQuery(tableRowsQueryOptions(projectId, databaseId, tableId, dbKind, page, limit, search?.trim() || void 0, order, sortBy, filterQueries, listSelectAttrKeys));
	const totalPages = useMemo(() => {
		if (!rowsData?.total) return 0;
		return Math.ceil(rowsData.total / limit);
	}, [rowsData?.total, limit]);
	return {
		rows: rowsData?.rows || [],
		total: rowsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isError,
		isPlaceholderData,
		error,
		refetch
	};
}
function useProjectTableColumns(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	const { data: columnsData, isLoading, isFetching, error, refetch } = useQuery(tableColumnsQueryOptions(projectId, databaseId, dbKind, tableId, filterQueries, page, limit));
	return {
		columns: columnsData?.columns || [],
		total: columnsData?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProjectTableIndexes(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	const { data: indexesData, isLoading, isFetching, error, refetch } = useQuery(tableIndexesQueryOptions(projectId, databaseId, dbKind, tableId, filterQueries, page, limit));
	return {
		indexes: indexesData?.indexes || [],
		total: indexesData?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
const collectionAttributesQueryOptions = tableColumnsQueryOptions;
function useProjectCollectionAttributes(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	return useProjectTableColumns(projectId, databaseId, dbKind, tableId, filterQueries, page, limit);
}
function useProjectCollectionIndexes(projectId, databaseId, dbKind, tableId, filterQueries, page = 0, limit = 100) {
	return useProjectTableIndexes(projectId, databaseId, dbKind, tableId, filterQueries, page, limit);
}
function useProjectTable(projectId, databaseId, dbKind, tableId) {
	const { data: tableData, isLoading, isPending, error, refetch } = useQuery(tableQueryOptions(projectId, databaseId, dbKind, tableId));
	return {
		table: tableData || null,
		isLoading: isLoading && !tableData,
		isPending,
		error,
		refetch
	};
}
function applyEditsToApiRow(row, edits) {
	const rowId = String(row.$id ?? "");
	const rowEdits = edits.filter((edit) => edit.rowId === rowId);
	if (rowEdits.length === 0) return row;
	const next = { ...row };
	for (const edit of rowEdits) {
		const serialized = serializeRowDataForApi({ [edit.columnKey]: edit.value });
		next[edit.columnKey] = serialized[edit.columnKey];
	}
	return next;
}
function applyCommittedEditsToRowsCache(queryClient, projectId, databaseId, edits) {
	if (edits.length === 0) return;
	const editsByTable = /* @__PURE__ */ new Map();
	for (const edit of edits) {
		const list = editsByTable.get(edit.tableId);
		if (list) list.push(edit);
		else editsByTable.set(edit.tableId, [edit]);
	}
	for (const [tableId, tableEdits] of editsByTable) queryClient.setQueriesData({ queryKey: [
		"rows",
		"project",
		projectId,
		databaseId,
		tableId
	] }, (old) => {
		if (!old?.rows?.length) return old;
		const editedRowIds = new Set(tableEdits.map((edit) => edit.rowId));
		return {
			...old,
			rows: old.rows.map((row) => {
				const record = row;
				if (!editedRowIds.has(String(record.$id))) return row;
				return applyEditsToApiRow(record, tableEdits);
			})
		};
	});
}
function getRowEditTransactionSdk(projectSdk, kind) {
	if (kind === DatabaseType.Documentsdb) return projectSdk.documentsDB;
	if (kind === DatabaseType.Vectorsdb) return projectSdk.vectorsDB;
	return projectSdk.tablesDB;
}
async function stageRowEditTransactionOperations(projectSdk, kind, transactionId, operations) {
	if (kind === DatabaseType.Documentsdb) {
		for (const operation of operations) await projectSdk.documentsDB.updateDocument({
			databaseId: operation.databaseId,
			collectionId: operation.collectionId,
			documentId: operation.documentId,
			data: operation.data,
			transactionId
		});
		return;
	}
	const transactionSdk = getRowEditTransactionSdk(projectSdk, kind);
	if (typeof transactionSdk.createOperations !== "function") throw new Error("Bulk transaction staging is not available in this environment");
	await transactionSdk.createOperations({
		transactionId,
		operations
	});
}
async function commitProjectTableRowEdits(projectId, dbKind, edits) {
	if (!projectId) throw new Error("Missing project ID");
	if (edits.length === 0) throw new Error("No edits to commit");
	const projectSdk = sdk.forProject(projectId);
	const kind = resolveProjectDatabaseType(dbKind);
	const transactionSdk = getRowEditTransactionSdk(projectSdk, kind);
	if (typeof transactionSdk.createTransaction !== "function") throw new Error("Transactions are not available in this environment");
	const operations = groupEditsIntoUpdateOperations(edits, kind);
	const tx = await transactionSdk.createTransaction();
	try {
		await stageRowEditTransactionOperations(projectSdk, kind, tx.$id, operations);
		await transactionSdk.updateTransaction({
			transactionId: tx.$id,
			commit: true
		});
	} catch (error) {
		try {
			await transactionSdk.updateTransaction({
				transactionId: tx.$id,
				rollback: true
			});
		} catch {}
		throw error;
	}
	const affectedTables = [...new Set(edits.map((edit) => edit.tableId))];
	return {
		transactionId: tx.$id,
		affectedTables,
		editCount: edits.length,
		rowCount: operations.length
	};
}
export { productRouteKindQueryOptions as $, dedicatedDatabaseSourceKey as $t, fetchAllProjectTablesForVisualizer as A, useProjectTables as At, fetchProjectTable as B, normalizePostgresExecutionResult as Bt, dedicatedDatabasesQueryOptions as C, useProjectConsoleDatabases as Ct, deleteProjectTableIndex as D, useProjectTableColumns as Dt, deleteProjectTableColumn as E, useProjectTable as Et, fetchProjectDatabase as F, waitForDedicatedDatabaseReady as Ft, fetchProjectTables as G, getDedicatedDatabaseOperationsLockTooltipKey as Gt, fetchProjectTableIndexes as H, ensureConsoleSqlApiStatements as Ht, fetchProjectDatabases as I, CUSTOM_COLLECTION_INDEX_ATTRIBUTE_VALUE as It, invalidateDatabaseModel as J, POSTGRES_DATABASE_SPECS_SOURCE as Jt, fetchTableStructureForCopy as K, requireOperationalDatabase as Kt, fetchProjectDatabasesByIds as L, buildCollectionExportColumnKeys as Lt, fetchDedicatedDatabaseById as M, waitForCreatedDatabaseLifecycleReady as Mt, fetchMergedDatabaseSpecifications as N, waitForCreatedDatabasePitrReady as Nt, deleteProjectTableRow as O, useProjectTableIndexes as Ot, fetchProjectConsoleDatabases as P, waitForCreatedDatabaseWorkspaceReady as Pt, productDatabasesQueryOptions as Q, dedicatedDatabaseSourceFromRouteKind as Qt, fetchProjectDedicatedDatabases as R, buildCollectionIndexableAttributes as Rt, dedicatedDatabaseByIdQueryOptions as S, useProjectCollectionIndexes as St, deleteProjectTable as T, useProjectDedicatedDatabases as Tt, fetchProjectTableRow as U, isSqlApiDdlBlockedError as Ut, fetchProjectTableColumns as V, wrapPostgresSqlForDisplay as Vt, fetchProjectTableRows as W, getDedicatedDatabaseOperationsLock as Wt, mergedDatabaseSpecificationsQueryOptions as X, dedicatedDatabaseSourceFromDatabaseType as Xt, invalidateDatabaseModelAndType as Y, dedicatedDatabaseService as Yt, patchProjectTableColumnsCache as Z, dedicatedDatabaseSourceFromEngine as Zt, createTablesDatabaseMigration as _, updateProjectTableRow as _t, canLoadCreatedDatabaseWorkspace as a, resolveProjectDatabaseType as at, databaseSpecificationsQueryOptions as b, useMergedDatabaseSpecifications as bt, consoleDatabasesQueryOptions as c, tableColumnsQueryOptions as ct, createProjectTable as d, tableRowsQueryOptions as dt, DEDICATED_FEATURE_UNAVAILABLE as en, projectTableColumnsQueryKeyPrefix as et, createProjectTableColumn as f, tablesQueryOptions as ft, createProjectTableWithStructure as g, updateProjectTableColumn as gt, createProjectTableRows as h, updateProjectTable as ht, buildRowListOrderQueries as i, getDedicatedDatabaseIdError as in, resolveProductRouteKindForDatabase as it, fetchDatabaseSpecifications as j, waitForCreatedDatabaseHaReady as jt, enabledDatabaseSpecificationsSources as k, useProjectTableRows as kt, createNativeDatabase as l, tableIndexesQueryOptions as lt, createProjectTableRow as m, updateProjectDatabase as mt, allTablesForVisualizerQueryOptions as n, mapDedicatedDatabaseCredentials as nn, refetchProjectTableColumnsQueries as nt, collectionAttributesQueryOptions as o, seedCreatedDatabaseCaches as ot, createProjectTableIndex as p, updateProductDatabaseSpecification as pt, getDatabaseModel as q, MYSQL_DATABASE_SPECS_SOURCE as qt, applyCommittedEditsToRowsCache as r, formatDedicatedDatabaseCreateError as rn, refetchProjectTableRelatedQueries as rt, commitProjectTableRowEdits as s, seedDatabaseProductRouteKind as st, ROWS_LIST_ORDER_TIEBREAKER as t, dedicatedEngineService as tn, refetchProjectDatabaseLists as tt, createProjectDatabase as u, tableQueryOptions as ut, createTextEmbeddings as v, useAllProjectTablesForVisualizer as vt, deleteProjectDatabase as w, useProjectDatabase as wt, databasesQueryOptions as x, useProjectCollectionAttributes as xt, databaseQueryOptions as y, useDatabaseSpecifications as yt, fetchProjectProductDatabases as z, formatPostgresExecutionCellValue as zt };
