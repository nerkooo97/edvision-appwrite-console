const PROJECT_CHANNELS = ["console"];
const REALTIME_EVENTS = {
	SITES_ANY: "sites.*",
	SITES_DEPLOYMENTS_ANY: "sites.*.deployments.*",
	SITES_DEPLOYMENT_CREATE: "sites.*.deployments.*.create",
	SITES_DEPLOYMENT_UPDATE: "sites.*.deployments.*.update",
	SITES_DEPLOYMENT_DELETE: "sites.*.deployments.*.delete",
	SITES_EXECUTIONS_ANY: "sites.*.executions.*",
	FUNCTIONS_DEPLOYMENTS_ANY: "functions.*.deployments.*",
	FUNCTIONS_DEPLOYMENT_CREATE: "functions.*.deployments.*.create",
	FUNCTIONS_DEPLOYMENT_UPDATE: "functions.*.deployments.*.update",
	FUNCTIONS_DEPLOYMENT_DELETE: "functions.*.deployments.*.delete",
	FUNCTIONS_EXECUTIONS_ANY: "functions.*.executions.*",
	DATABASES_TABLES_COLUMNS_ANY: "databases.*.tables.*.columns.*",
	DATABASES_TABLES_COLUMNS_CREATE: "databases.*.tables.*.columns.*.create",
	DATABASES_TABLES_COLUMNS_UPDATE: "databases.*.tables.*.columns.*.update",
	DATABASES_TABLES_COLUMNS_DELETE: "databases.*.tables.*.columns.*.delete",
	DATABASES_TABLES_INDEXES_ANY: "databases.*.tables.*.indexes.*",
	ARCHIVES_ANY: "archives.*",
	RESTORATIONS_ANY: "restorations.*",
	POLICIES_ANY: "policies.*",
	MIGRATIONS_ANY: "migrations.*",
	PROJECT_PING: "projects.",
	STATS_CONNECTIONS: "stats.connections",
	RULES_UPDATE: "rules.*.update"
};
export { REALTIME_EVENTS as n, PROJECT_CHANNELS as t };
