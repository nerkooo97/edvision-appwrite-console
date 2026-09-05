const POSTGRES_DB_KIND = "postgres";
const POSTGRES_DATABASE_TAB_LABELS = {
	sql: "SQL editor",
	visualizer: "Visualizer",
	enums: "Enums",
	monitor: "Monitor",
	backups: "Backups",
	connections: "Connections",
	roles: "Roles",
	settings: "Settings"
};
function postgresTableId(schema, table) {
	return `${schema}.${table}`;
}
function parsePostgresTableId(tableId) {
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
function normalizePostgresTableRouteId(tableId) {
	try {
		return decodeURIComponent(tableId);
	} catch {
		return tableId;
	}
}
function quotePostgresIdentifier(identifier) {
	return `"${identifier.replace(/"/g, "\"\"")}"`;
}
function postgresNavBase(params) {
	return {
		projectId: params.projectId,
		databaseId: params.databaseId
	};
}
function postgresDatabaseTabRoute(to, params) {
	return {
		to,
		params,
		search: {}
	};
}
function postgresNav(params) {
	const base = postgresNavBase(params);
	return {
		table(p) {
			const tableBase = {
				...base,
				tableId: p.tableId
			};
			return {
				rows() {
					return {
						to: "/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/rows",
						params: tableBase
					};
				},
				columns() {
					return {
						to: "/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/columns",
						params: tableBase
					};
				},
				indexes() {
					return {
						to: "/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/indexes",
						params: tableBase
					};
				},
				security() {
					return {
						to: "/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/security",
						params: tableBase
					};
				},
				settings() {
					return {
						to: "/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/settings",
						params: tableBase
					};
				}
			};
		},
		tables(p) {
			return this.table({ tableId: p.tableId ?? "-" }).rows();
		},
		sql() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/sql", base);
		},
		editor() {
			return this.sql();
		},
		visualizer() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/visualizer", base);
		},
		enums() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/enums", base);
		},
		monitor() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/monitor", base);
		},
		backups() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/backups", base);
		},
		connections() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/connections", base);
		},
		roles() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/roles", base);
		},
		settings() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/settings", base);
		},
		computeSettings() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/settings/compute", base);
		},
		settingsExtensions() {
			return postgresDatabaseTabRoute("/projects/$projectId/databases/postgres/$databaseId/settings/extensions", base);
		}
	};
}
function postgresDatabaseHome(params) {
	if (!params.tableId || params.tableId === "-") return postgresNav(params).sql();
	return postgresNav(params).table({ tableId: params.tableId }).rows();
}
function postgresTableRows(params) {
	return postgresNav(params).table({ tableId: params.tableId }).rows();
}
var POSTGRES_DATABASE_TAB_SEGMENTS = [
	"sql",
	"visualizer",
	"enums",
	"monitor",
	"backups",
	"connections",
	"roles",
	"settings"
];
function isPostgresDatabaseTabSegment(segment) {
	return POSTGRES_DATABASE_TAB_SEGMENTS.includes(segment);
}
function postgresDatabaseTabLink(projectId, databaseId, tab) {
	const nav = postgresNav({
		projectId,
		databaseId
	});
	switch (tab) {
		case "sql": return nav.sql();
		case "visualizer": return nav.visualizer();
		case "enums": return nav.enums();
		case "monitor": return nav.monitor();
		case "backups": return nav.backups();
		case "connections": return nav.connections();
		case "roles": return nav.roles();
		case "settings": return nav.settings();
	}
}
function parsePostgresDatabaseTabFromPathname(pathname) {
	const segments = pathname.split("/").filter(Boolean);
	const postgresIndex = segments.indexOf("postgres");
	if (postgresIndex === -1) return void 0;
	const segment = segments[postgresIndex + 2];
	if (!segment) return void 0;
	if (segment === "tables") return void 0;
	return POSTGRES_DATABASE_TAB_SEGMENTS.find((tab) => tab === segment);
}
function parsePostgresTableTabFromPathname(pathname) {
	if (!pathname.includes("/tables/")) return null;
	if (pathname.endsWith("/columns")) return "columns";
	if (pathname.endsWith("/indexes")) return "indexes";
	if (pathname.endsWith("/settings")) return "settings";
	if (pathname.endsWith("/security")) return "security";
	if (pathname.endsWith("/rows")) return "rows";
	return null;
}
function parsePostgresShellRouteState(args) {
	if (parsePostgresTableTabFromPathname(args.pathname)) return { tableId: args.tableId ? normalizePostgresTableRouteId(args.tableId) : void 0 };
	return { databaseTab: parsePostgresDatabaseTabFromPathname(args.pathname) };
}
export { parsePostgresDatabaseTabFromPathname as a, parsePostgresTableTabFromPathname as c, postgresNav as d, postgresTableId as f, normalizePostgresTableRouteId as i, postgresDatabaseHome as l, quotePostgresIdentifier as m, POSTGRES_DB_KIND as n, parsePostgresShellRouteState as o, postgresTableRows as p, isPostgresDatabaseTabSegment as r, parsePostgresTableId as s, POSTGRES_DATABASE_TAB_LABELS as t, postgresDatabaseTabLink as u };
