import { l as postgresDatabaseHome, n as POSTGRES_DB_KIND, r as isPostgresDatabaseTabSegment, u as postgresDatabaseTabLink } from "./postgres-database-routes-CyTsPbzl.js";
import { a as mysqlDatabaseTabLink, i as mysqlDatabaseHome, n as MYSQL_DB_KIND, r as isMysqlDatabaseTabSegment } from "./mysql-database-routes-CVHkJzTt.js";
import { redirect } from "@tanstack/react-router";
const DATABASE_LEVEL_TAB_PATH = {
	visualizer: "/projects/$projectId/databases/$dbKind/$databaseId/visualizer",
	backups: "/projects/$projectId/databases/$dbKind/$databaseId/backups",
	"export-import": "/projects/$projectId/databases/$dbKind/$databaseId/export-import",
	monitor: "/projects/$projectId/databases/$dbKind/$databaseId/monitor",
	"db-security": "/projects/$projectId/databases/$dbKind/$databaseId/settings/security",
	"db-settings": "/projects/$projectId/databases/$dbKind/$databaseId/settings"
};
function throwRedirectPostgresDbKind(dbKind, params) {
	if (dbKind !== "postgres") return;
	const tableId = params.tableId?.trim();
	if (tableId && tableId !== "-" && isPostgresDatabaseTabSegment(tableId)) throw redirect({
		...postgresDatabaseTabLink(params.projectId, params.databaseId, tableId),
		search: {},
		replace: true
	});
	throw redirect({
		...postgresDatabaseHome({
			projectId: params.projectId,
			databaseId: params.databaseId,
			tableId: tableId && tableId !== "-" ? tableId : "-"
		}),
		search: {},
		replace: true
	});
}
function throwRedirectMysqlDbKind(dbKind, params) {
	if (dbKind !== "mysql") return;
	const tableId = params.tableId?.trim();
	if (tableId && tableId !== "-" && isMysqlDatabaseTabSegment(tableId)) throw redirect({
		...mysqlDatabaseTabLink(params.projectId, params.databaseId, tableId),
		search: {},
		replace: true
	});
	throw redirect({
		...mysqlDatabaseHome({
			projectId: params.projectId,
			databaseId: params.databaseId,
			tableId: tableId && tableId !== "-" ? tableId : "-"
		}),
		search: {},
		replace: true
	});
}
function isDatabaseLevelTab(tab) {
	return Object.prototype.hasOwnProperty.call(DATABASE_LEVEL_TAB_PATH, tab);
}
var COLLECTIONS_TO_TABLES_ROUTE = {
	dataGrid: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows",
	dataJson: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
	indexes: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/indexes",
	security: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/security",
	settings: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/settings",
	columns: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/columns"
};
function throwRedirectTablesDbFromCollectionsChild(dbKind, tab, p) {
	if (isDatabaseLevelTab(tab)) throw redirect({
		to: DATABASE_LEVEL_TAB_PATH[tab],
		params: {
			projectId: p.projectId,
			dbKind: p.dbKind,
			databaseId: p.databaseId
		},
		replace: true
	});
	if (dbKind !== "tablesdb") return;
	throw redirect({
		to: COLLECTIONS_TO_TABLES_ROUTE[tab],
		params: {
			projectId: p.projectId,
			dbKind: p.dbKind,
			databaseId: p.databaseId,
			tableId: p.collectionId
		},
		replace: true
	});
}
var TABLES_TO_COLLECTIONS_ROUTE = {
	dataGrid: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
	dataJson: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
	indexes: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/indexes",
	security: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/security",
	settings: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/settings",
	columns: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/columns"
};
function throwRedirectCollectionsDbFromTablesChild(dbKind, tab, p) {
	if (isDatabaseLevelTab(tab)) throw redirect({
		to: DATABASE_LEVEL_TAB_PATH[tab],
		params: {
			projectId: p.projectId,
			dbKind: p.dbKind,
			databaseId: p.databaseId
		},
		replace: true
	});
	if (tab === "dataJson" && dbKind === "vectorsdb") throw redirect({
		to: TABLES_TO_COLLECTIONS_ROUTE.dataGrid,
		params: {
			projectId: p.projectId,
			dbKind: p.dbKind,
			databaseId: p.databaseId,
			collectionId: p.tableId
		},
		replace: true
	});
	if (dbKind !== "documentsdb" && dbKind !== "vectorsdb") return;
	throw redirect({
		to: TABLES_TO_COLLECTIONS_ROUTE[tab],
		params: {
			projectId: p.projectId,
			dbKind: p.dbKind,
			databaseId: p.databaseId,
			collectionId: p.tableId
		},
		replace: true
	});
}
export { throwRedirectTablesDbFromCollectionsChild as i, throwRedirectMysqlDbKind as n, throwRedirectPostgresDbKind as r, throwRedirectCollectionsDbFromTablesChild as t };
