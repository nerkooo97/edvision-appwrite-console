const MYSQL_DB_KIND = "mysql";
const MYSQL_DATABASE_TAB_LABELS = {
	sql: "SQL editor",
	visualizer: "Visualizer",
	monitor: "Monitor",
	backups: "Backups",
	connections: "Connections",
	roles: "Roles",
	settings: "Settings"
};
function mysqlTableId(schema, table) {
	return `${schema}.${table}`;
}
function parseMysqlTableId(tableId) {
	const dot = tableId.indexOf(".");
	if (dot === -1) return {
		schema: "public",
		table: tableId
	};
	return {
		schema: tableId.slice(0, dot),
		table: tableId.slice(dot + 1)
	};
}
function normalizeMysqlTableRouteId(tableId) {
	try {
		return decodeURIComponent(tableId);
	} catch {
		return tableId;
	}
}
function quoteMysqlIdentifier(identifier) {
	return `\`${identifier.replace(/`/g, "``")}\``;
}
function mysqlNavBase(params) {
	return {
		projectId: params.projectId,
		databaseId: params.databaseId
	};
}
function mysqlDatabaseTabRoute(to, params) {
	return {
		to,
		params,
		search: {}
	};
}
function mysqlNav(params) {
	const base = mysqlNavBase(params);
	return {
		table(p) {
			const tableBase = {
				...base,
				tableId: p.tableId
			};
			return {
				rows() {
					return {
						to: "/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/rows",
						params: tableBase
					};
				},
				columns() {
					return {
						to: "/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/columns",
						params: tableBase
					};
				},
				indexes() {
					return {
						to: "/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/indexes",
						params: tableBase
					};
				},
				security() {
					return {
						to: "/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/security",
						params: tableBase
					};
				},
				settings() {
					return {
						to: "/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/settings",
						params: tableBase
					};
				}
			};
		},
		tables(p) {
			return this.table({ tableId: p.tableId ?? "-" }).rows();
		},
		sql() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/sql", base);
		},
		editor() {
			return this.sql();
		},
		visualizer() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/visualizer", base);
		},
		monitor() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/monitor", base);
		},
		backups() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/backups", base);
		},
		connections() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/connections", base);
		},
		roles() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/roles", base);
		},
		settings() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/settings", base);
		},
		computeSettings() {
			return mysqlDatabaseTabRoute("/projects/$projectId/databases/mysql/$databaseId/settings/compute", base);
		}
	};
}
function mysqlDatabaseHome(params) {
	if (!params.tableId || params.tableId === "-") return mysqlNav(params).sql();
	return mysqlNav(params).table({ tableId: params.tableId }).rows();
}
function mysqlTableRows(params) {
	return mysqlNav(params).table({ tableId: params.tableId }).rows();
}
var MYSQL_DATABASE_TAB_SEGMENTS = [
	"sql",
	"visualizer",
	"monitor",
	"backups",
	"connections",
	"roles",
	"settings"
];
function isMysqlDatabaseTabSegment(segment) {
	return MYSQL_DATABASE_TAB_SEGMENTS.includes(segment);
}
function mysqlDatabaseTabLink(projectId, databaseId, tab) {
	const nav = mysqlNav({
		projectId,
		databaseId
	});
	switch (tab) {
		case "sql": return nav.sql();
		case "visualizer": return nav.visualizer();
		case "monitor": return nav.monitor();
		case "backups": return nav.backups();
		case "connections": return nav.connections();
		case "roles": return nav.roles();
		case "settings": return nav.settings();
	}
}
function parseMysqlDatabaseTabFromPathname(pathname) {
	const segments = pathname.split("/").filter(Boolean);
	const mysqlIndex = segments.indexOf("mysql");
	if (mysqlIndex === -1) return void 0;
	const segment = segments[mysqlIndex + 2];
	if (!segment) return void 0;
	if (segment === "tables") return void 0;
	return MYSQL_DATABASE_TAB_SEGMENTS.find((tab) => tab === segment);
}
function parseMysqlTableTabFromPathname(pathname) {
	if (!pathname.includes("/tables/")) return null;
	if (pathname.endsWith("/columns")) return "columns";
	if (pathname.endsWith("/indexes")) return "indexes";
	if (pathname.endsWith("/settings")) return "settings";
	if (pathname.endsWith("/security")) return "security";
	if (pathname.endsWith("/rows")) return "rows";
	return null;
}
function parseMysqlShellRouteState(args) {
	if (parseMysqlTableTabFromPathname(args.pathname)) return { tableId: args.tableId ? normalizeMysqlTableRouteId(args.tableId) : void 0 };
	return { databaseTab: parseMysqlDatabaseTabFromPathname(args.pathname) };
}
export { mysqlDatabaseTabLink as a, mysqlTableRows as c, parseMysqlShellRouteState as d, parseMysqlTableId as f, mysqlDatabaseHome as i, normalizeMysqlTableRouteId as l, quoteMysqlIdentifier as m, MYSQL_DB_KIND as n, mysqlNav as o, parseMysqlTableTabFromPathname as p, isMysqlDatabaseTabSegment as r, mysqlTableId as s, MYSQL_DATABASE_TAB_LABELS as t, parseMysqlDatabaseTabFromPathname as u };
