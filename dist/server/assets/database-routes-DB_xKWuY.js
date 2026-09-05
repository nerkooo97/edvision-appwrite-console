import { i as isNativeDatabaseTypeValue, r as engineFromDatabaseTypeValue, t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { l as postgresDatabaseHome } from "./postgres-database-routes-CyTsPbzl.js";
import { i as mysqlDatabaseHome } from "./mysql-database-routes-CVHkJzTt.js";
const DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS = 5e3;
var DEDICATED_DATABASE_TRANSITIONAL_STATUSES = new Set([
	"provisioning",
	"scaling",
	"restoring",
	"upgrading",
	"migrating",
	"pausing",
	"resuming",
	"deleting"
]);
function coerceTrimmedString(value) {
	if (typeof value === "string") return value.trim();
	if (typeof value === "number" || typeof value === "boolean") return String(value).trim();
	if (typeof value === "bigint") return value.toString();
	if (Array.isArray(value)) {
		if (value.length > 0 && value.every((entry) => typeof entry === "number" && Number.isInteger(entry) && entry >= 0 && entry <= 255)) try {
			const decoded = new TextDecoder("utf-8", { fatal: false }).decode(Uint8Array.from(value));
			if (decoded && !decoded.includes("�")) return decoded.trim();
		} catch {}
		return "";
	}
	if (value && typeof value === "object") {
		const record = value;
		for (const key of [
			"value",
			"Value",
			"$value",
			"text",
			"Text",
			"string",
			"String",
			"name",
			"Name"
		]) {
			const nested = record[key];
			if (typeof nested === "string") return nested.trim();
			if (typeof nested === "number" || typeof nested === "boolean") return String(nested).trim();
		}
	}
	return "";
}
function isDedicatedDatabaseReady(status) {
	return coerceTrimmedString(status).toLowerCase() === "ready";
}
function isDedicatedDatabaseProvisioning(status) {
	const normalized = coerceTrimmedString(status).toLowerCase();
	return normalized === "provisioning" || normalized === "starting";
}
const DEDICATED_DATABASE_PROVISIONING_RESTRICTED_MESSAGE = "Available once the database is ready.";
function shouldPollDedicatedDatabaseStatus(status) {
	const normalized = coerceTrimmedString(status).toLowerCase();
	return !!normalized && DEDICATED_DATABASE_TRANSITIONAL_STATUSES.has(normalized);
}
function dedicatedDatabaseStatusBadgeVariant(status) {
	switch (coerceTrimmedString(status).toLowerCase()) {
		case "ready": return "success";
		case "provisioning":
		case "scaling":
		case "restoring":
		case "upgrading":
		case "migrating":
		case "pausing":
		case "resuming":
		case "deleting": return "warning";
		case "failed":
		case "deleted": return "error";
		case "paused":
		case "inactive": return "inactive";
		default: return "info";
	}
}
function dedicatedDatabaseHeaderAlertVariant(status) {
	switch (coerceTrimmedString(status).toLowerCase()) {
		case "failed":
		case "deleted": return "danger";
		case "paused":
		case "inactive": return "warning";
		default: return "info";
	}
}
function dedicatedDatabaseStatusAlertTitleKey(status) {
	switch (coerceTrimmedString(status).toLowerCase()) {
		case "scaling": return "Database is scaling";
		case "upgrading": return "Database is upgrading";
		case "migrating": return "Database is migrating";
		case "provisioning": return "Database is provisioning";
		case "restoring": return "Database is restoring";
		case "pausing": return "Database is pausing";
		case "resuming": return "Database is resuming";
		case "deleting": return "Database is deleting";
		case "paused": return "Database is paused";
		case "inactive": return "Database is inactive";
		case "failed": return "Database update failed";
		case "deleted": return "Database is deleted";
		default: return "Database is not ready";
	}
}
function dedicatedDatabaseStatusAlertDescriptionKey(status) {
	switch (coerceTrimmedString(status).toLowerCase()) {
		case "scaling": return "A compute tier change is in progress. Your cluster remains available during this operation.";
		case "upgrading": return "A database upgrade is in progress. Some operations may be temporarily unavailable.";
		case "migrating": return "A database migration is in progress. Some operations may be temporarily unavailable.";
		case "provisioning": return "Dedicated compute is being provisioned for this database.";
		case "restoring": return "This database is being restored. Some operations may be unavailable until it is ready again.";
		case "pausing": return "This database is being paused. Some operations may be temporarily unavailable.";
		case "resuming": return "This database is resuming. Some operations may be temporarily unavailable.";
		case "deleting": return "This database is being deleted and will no longer be available once the operation completes.";
		case "paused": return "This database is paused. Resume it in Settings to restore access.";
		case "inactive": return "This database is inactive. Some operations may be unavailable until it is ready again.";
		case "failed": return "This database could not complete its last operation. Review settings or contact support.";
		case "deleted": return "This database has been deleted and is no longer available.";
		default: return "This database is not ready yet. Some operations may be unavailable until the operation completes.";
	}
}
const NATIVE_DATABASE_ENGINE_LABELS = {
	postgres: "PostgreSQL",
	mysql: "MySQL",
	mongo: "MongoDB"
};
function normalizeDatabaseEngine(engine) {
	return coerceTrimmedString(engine).toLowerCase();
}
function isPostgresEngine(engine) {
	const normalized = normalizeDatabaseEngine(engine);
	return normalized === "postgres" || normalized === "postgresql";
}
function isMysqlEngine(engine) {
	const normalized = normalizeDatabaseEngine(engine);
	return normalized === "mysql" || normalized === "mariadb";
}
function isMongoEngine(engine) {
	const normalized = normalizeDatabaseEngine(engine);
	return normalized === "mongodb" || normalized === "mongo";
}
function matchesNativeEngine(engine, nativeEngine) {
	if (nativeEngine === "postgres") return isPostgresEngine(engine);
	if (nativeEngine === "mysql") return isMysqlEngine(engine);
	return isMongoEngine(engine);
}
var KIND_SET = new Set([
	"tablesdb",
	"documentsdb",
	"vectorsdb"
]);
function isDatabaseRouteKind(value) {
	return KIND_SET.has(value);
}
function isProductDatabaseRouteKindEnabled(dbKind, features) {
	if (dbKind === "documentsdb") return features.dedicatedDbsDocumentsDB;
	if (dbKind === "vectorsdb") return features.dedicatedDbsVectorsDB;
	return true;
}
function isProductDatabaseTypeEnabled(type, features) {
	if (type === DatabaseType.Documentsdb) return features.dedicatedDbsDocumentsDB;
	if (type === DatabaseType.Vectorsdb) return features.dedicatedDbsVectorsDB;
	return true;
}
function isDatabaseTypeFeatureEnabled(type, features) {
	const key = String(type ?? "").trim().toLowerCase().replace(/-/g, "");
	if (!key) return true;
	if (key === "documentsdb") return features.dedicatedDbsDocumentsDB;
	if (key === "vectorsdb") return features.dedicatedDbsVectorsDB;
	const engine = engineFromDatabaseTypeValue(key);
	if (engine === "postgresql") return features.nativeDbsPostgres;
	if (engine === "mysql") return features.nativeDbsMySQL;
	if (engine === "mongodb") return features.nativeDbsMongo;
	if (isNativeDatabaseTypeValue(key)) return features.nativeDbsPostgres;
	return true;
}
function databaseRouteKindFromApiType(type) {
	const key = String(type ?? "").trim().toLowerCase();
	if (key === DatabaseType.Documentsdb || key === "documentsdb") return "documentsdb";
	if (key === DatabaseType.Vectorsdb || key === "vectorsdb") return "vectorsdb";
	return "tablesdb";
}
const DATABASE_HOME_TO = "/projects/$projectId/databases/$dbKind/$databaseId/";
function usesCollectionsPath(kind) {
	return kind === "documentsdb" || kind === "vectorsdb";
}
function dbNavLink(kind) {
	const coll = usesCollectionsPath(kind);
	const resource = (resourceId) => coll ? { collectionId: resourceId } : { tableId: resourceId };
	const base = (p) => ({
		projectId: p.projectId,
		dbKind: p.dbKind,
		databaseId: p.databaseId,
		...resource(p.resourceId)
	});
	const baseDatabaseOnly = (p) => ({
		projectId: p.projectId,
		dbKind: p.dbKind,
		databaseId: p.databaseId
	});
	return {
		dataGrid(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows",
				params: base(p)
			};
		},
		dataJson(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/json" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
				params: base(p)
			};
		},
		columns(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/columns" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/columns",
				params: base(p)
			};
		},
		indexes(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/indexes" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/indexes",
				params: base(p)
			};
		},
		security(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/security" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/security",
				params: base(p)
			};
		},
		settings(p) {
			return {
				to: coll ? "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/settings" : "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/settings",
				params: base(p)
			};
		},
		visualizer(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/visualizer",
				params: baseDatabaseOnly(p)
			};
		},
		backups(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/backups",
				params: baseDatabaseOnly(p)
			};
		},
		exportImport(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/export-import",
				params: baseDatabaseOnly(p)
			};
		},
		monitor(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/monitor",
				params: baseDatabaseOnly(p)
			};
		},
		dbSecurity(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/settings/security",
				params: baseDatabaseOnly(p)
			};
		},
		dbSettings(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/settings",
				params: baseDatabaseOnly(p)
			};
		},
		dbSpecificationSettings(p) {
			return {
				to: "/projects/$projectId/databases/$dbKind/$databaseId/settings/specification",
				params: baseDatabaseOnly(p),
				hash: "card-specification"
			};
		}
	};
}
function dedicatedApiToRouteKind(api) {
	const normalized = api.toLowerCase().trim();
	if (normalized === "documentsdb") return "documentsdb";
	if (normalized === "vectorsdb") return "vectorsdb";
	if (normalized === "tablesdb") return "tablesdb";
	return null;
}
function isProductOwnedDedicatedDatabase(db) {
	return dedicatedApiToRouteKind(db.api ?? "") !== null;
}
function isNativeDedicatedDatabase(db) {
	return !isProductOwnedDedicatedDatabase(db);
}
function isPostgresDedicatedEngine(engine) {
	const normalized = engine?.toLowerCase() ?? "";
	return normalized === "postgres" || normalized === "postgresql";
}
function productDatabaseDeepLink(projectId, databaseId, dbKind) {
	const link = dbNavLink(dbKind).dataGrid({
		projectId,
		dbKind,
		databaseId,
		resourceId: "-"
	});
	return {
		to: link.to,
		params: link.params
	};
}
function productDatabaseListLink(projectId, databaseId, type) {
	const dbKind = databaseRouteKindFromApiType(type);
	return dbNavLink(dbKind).dataGrid({
		projectId,
		dbKind,
		databaseId,
		resourceId: "-"
	});
}
function productDatabaseHomePath(projectId, databaseId, type) {
	return `/projects/${projectId}/databases/${databaseRouteKindFromApiType(type)}/${databaseId}/`;
}
function dedicatedDatabaseHomeLink(projectId, db, productRouteKind) {
	const apiKind = dedicatedApiToRouteKind(db.api);
	if (apiKind) return productDatabaseDeepLink(projectId, db.$id, apiKind);
	if (productRouteKind) return productDatabaseDeepLink(projectId, db.$id, productRouteKind);
	if (isPostgresDedicatedEngine(db.engine)) return postgresDatabaseHome({
		projectId,
		databaseId: db.$id,
		tableId: "-"
	});
	if (isMysqlEngine(db.engine)) return mysqlDatabaseHome({
		projectId,
		databaseId: db.$id,
		tableId: "-"
	});
	return null;
}
export { dedicatedDatabaseStatusAlertTitleKey as C, shouldPollDedicatedDatabaseStatus as D, isDedicatedDatabaseReady as E, dedicatedDatabaseStatusAlertDescriptionKey as S, isDedicatedDatabaseProvisioning as T, matchesNativeEngine as _, isDatabaseRouteKind as a, coerceTrimmedString as b, isProductDatabaseRouteKindEnabled as c, productDatabaseListLink as d, usesCollectionsPath as f, isPostgresEngine as g, isMysqlEngine as h, dedicatedDatabaseHomeLink as i, isProductDatabaseTypeEnabled as l, isMongoEngine as m, databaseRouteKindFromApiType as n, isDatabaseTypeFeatureEnabled as o, NATIVE_DATABASE_ENGINE_LABELS as p, dbNavLink as r, isNativeDedicatedDatabase as s, DATABASE_HOME_TO as t, productDatabaseHomePath as u, DEDICATED_DATABASE_PROVISIONING_RESTRICTED_MESSAGE as v, dedicatedDatabaseStatusBadgeVariant as w, dedicatedDatabaseHeaderAlertVariant as x, DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS as y };
