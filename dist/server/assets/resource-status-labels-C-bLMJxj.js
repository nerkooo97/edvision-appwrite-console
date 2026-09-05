import { Gm as formatMysqlConnectionStateLabel, Hm as formatMysqlBackendTypeLabel, L_ as formatPostgresConnectionStateLabel, M_ as formatConnectionStateLabel, P_ as formatPostgresBackendTypeLabel } from "./hooks-BONwG3Mt.js";
import { a as getPostgresIndexAlgorithmLabel } from "./postgres-index-metadata-CC7j1aCq.js";
import { a as getMysqlIndexAlgorithmLabel } from "./mysql-index-metadata-CpeqQ75u.js";
var RESOURCE_STATUS_LABEL_KEYS = {
	available: "Available",
	processing: "Processing",
	deleting: "Deleting",
	stuck: "Stuck",
	failed: "Failed",
	ready: "Ready",
	provisioning: "Provisioning",
	restoring: "Restoring",
	scaling: "Scaling",
	upgrading: "Upgrading",
	migrating: "Migrating",
	pausing: "Pausing",
	resuming: "Resuming",
	inactive: "Inactive",
	paused: "Paused",
	deleted: "Deleted",
	active: "Active",
	idle: "Idle",
	disabled: "Disabled",
	enabled: "Enabled",
	scheduled: "Scheduled",
	pending: "Pending",
	completed: "Completed",
	complete: "Complete",
	uploading: "Uploading",
	downloading: "Downloading",
	draft: "Draft",
	sent: "Sent",
	delivered: "Delivered",
	waiting: "Waiting"
};
function localizeResourceStatusLabel(status, t) {
	if (!status?.trim()) return t("Unknown");
	const trimmed = status.trim();
	return t(RESOURCE_STATUS_LABEL_KEYS[trimmed.toLowerCase()] ?? trimmed.charAt(0).toUpperCase() + trimmed.slice(1));
}
function localizeTableIndexTypeLabel(type, t) {
	switch (type.toLowerCase()) {
		case "key": return t("Key");
		case "unique": return t("Unique");
		case "fulltext": return t("Fulltext");
		case "spatial": return t("Spatial");
		default: return localizeResourceStatusLabel(type, t);
	}
}
function localizePostgresBackendTypeLabel(backendType, t) {
	const label = formatPostgresBackendTypeLabel(backendType);
	if (label === "-") return label;
	if (label === "Unknown") return t("Unknown");
	return t(label);
}
function localizePostgresConnectionStateLabel(state, backendType, t) {
	const label = formatPostgresConnectionStateLabel(state, backendType);
	if (label === "-") return label;
	if (label === "System") return t("System");
	if (state?.trim()) switch (formatConnectionStateLabel(state.trim())) {
		case "Active": return t("Active");
		case "Idle": return t("Idle");
		case "Idle in transaction": return t("Idle in transaction");
		case "Idle in transaction (aborted)": return t("Idle in transaction (aborted)");
		case "Fastpath function call": return t("Fastpath function call");
		case "Disabled": return t("Disabled");
		default: break;
	}
	return localizeResourceStatusLabel(label, t);
}
function localizePostgresIndexAlgorithmLabel(algorithm, t) {
	return t(getPostgresIndexAlgorithmLabel(algorithm));
}
function localizeMysqlBackendTypeLabel(backendType, t) {
	const label = formatMysqlBackendTypeLabel(backendType);
	if (label === "-") return label;
	if (label === "Unknown") return t("Unknown");
	return t(label);
}
function localizeMysqlConnectionStateLabel(state, backendType, t) {
	const label = formatMysqlConnectionStateLabel(state, backendType);
	if (label === "-") return label;
	if (label === "System") return t("System");
	if (state?.trim()) switch (formatConnectionStateLabel(state.trim())) {
		case "Active": return t("Active");
		case "Idle": return t("Idle");
		case "Idle in transaction": return t("Idle in transaction");
		case "Idle in transaction (aborted)": return t("Idle in transaction (aborted)");
		case "Fastpath function call": return t("Fastpath function call");
		case "Disabled": return t("Disabled");
		default: break;
	}
	return localizeResourceStatusLabel(label, t);
}
function localizeMysqlIndexAlgorithmLabel(algorithm, t) {
	return t(getMysqlIndexAlgorithmLabel(algorithm));
}
export { localizePostgresConnectionStateLabel as a, localizeTableIndexTypeLabel as c, localizePostgresBackendTypeLabel as i, localizeMysqlConnectionStateLabel as n, localizePostgresIndexAlgorithmLabel as o, localizeMysqlIndexAlgorithmLabel as r, localizeResourceStatusLabel as s, localizeMysqlBackendTypeLabel as t };
