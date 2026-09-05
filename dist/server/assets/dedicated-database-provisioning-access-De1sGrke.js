import { T as isDedicatedDatabaseProvisioning } from "./database-routes-DB_xKWuY.js";
import { redirect } from "@tanstack/react-router";
var RESTRICTED_DATABASE_LEVEL_SEGMENTS = new Set([
	"monitor",
	"roles",
	"backups",
	"settings",
	"connections"
]);
var RESTRICTED_RESOURCE_LEVEL_SEGMENTS = new Set([
	"monitor",
	"backups",
	"db-settings",
	"db-security"
]);
function pathSegmentsAfterDatabaseId(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	const databasesIndex = parts.indexOf("databases");
	if (databasesIndex < 0) return [];
	return parts.slice(databasesIndex + 3);
}
function isDedicatedDatabaseProvisioningRestrictedPath(pathname) {
	const rest = pathSegmentsAfterDatabaseId(pathname);
	if (rest.length === 0) return false;
	const [first, , third] = rest;
	if (first && RESTRICTED_DATABASE_LEVEL_SEGMENTS.has(first)) return true;
	if ((first === "tables" || first === "collections") && third && RESTRICTED_RESOURCE_LEVEL_SEGMENTS.has(third)) return true;
	return false;
}
function shouldRedirectDedicatedDatabaseProvisioning(status, pathname) {
	return isDedicatedDatabaseProvisioning(status) && isDedicatedDatabaseProvisioningRestrictedPath(pathname);
}
function throwRedirectIfDedicatedDatabaseProvisioning(status, pathname, fallback) {
	if (!shouldRedirectDedicatedDatabaseProvisioning(status, pathname)) return;
	throw redirect({
		to: fallback.to,
		params: fallback.params,
		...fallback.search !== void 0 ? { search: fallback.search } : {},
		replace: true
	});
}
export { throwRedirectIfDedicatedDatabaseProvisioning as n, shouldRedirectDedicatedDatabaseProvisioning as t };
