import { t as cn } from "./utils-DoqqkI3X.js";
import { i as isNativeDatabaseTypeValue, t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { g as isPostgresEngine, h as isMysqlEngine, m as isMongoEngine, p as NATIVE_DATABASE_ENGINE_LABELS } from "./database-routes-DB_xKWuY.js";
import { J as formatDatabaseServiceLabel, Y as getDatabaseServiceLucideIcon } from "./form-field-type-badge-C7qMzJo0.js";
import { n as MySQLDolphinIcon, r as PostgresElephantIcon, t as MongoDbLeafIcon } from "./database-mascot-icons-mAQ4uqbH.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Database } from "lucide-react";
function normalizeKey(value) {
	return String(value ?? "").trim().toLowerCase().replace(/-/g, "");
}
function isNativeProduct(product) {
	return isNativeDatabaseTypeValue(product);
}
function resolveAppwriteProductType(apiType, product) {
	for (const key of [apiType, product]) if (key === "tablesdb" || key === String(DatabaseType.Tablesdb).toLowerCase() || key === "documentsdb" || key === String(DatabaseType.Documentsdb).toLowerCase() || key === "vectorsdb" || key === String(DatabaseType.Vectorsdb).toLowerCase()) return key;
	return null;
}
function getDatabaseEngineDisplayLabel(engine) {
	const normalized = normalizeKey(engine);
	if (!normalized) return null;
	if (isPostgresEngine(normalized)) return NATIVE_DATABASE_ENGINE_LABELS.postgres;
	if (isMysqlEngine(normalized)) return normalized === "mariadb" ? "MariaDB" : NATIVE_DATABASE_ENGINE_LABELS.mysql;
	if (isMongoEngine(normalized)) return NATIVE_DATABASE_ENGINE_LABELS.mongo;
	return null;
}
function resolveDatabaseTypeDisplay(hints) {
	const apiType = normalizeKey(hints.apiType);
	const product = normalizeKey(hints.product);
	const engineFromHints = hints.engine ?? (isNativeDatabaseTypeValue(apiType) ? hints.apiType : null);
	const engineLabel = getDatabaseEngineDisplayLabel(engineFromHints);
	if (isNativeProduct(product)) return {
		mode: "engine",
		key: normalizeKey(engineFromHints) || normalizeKey(product) || "postgres",
		label: engineLabel ?? getDatabaseEngineDisplayLabel(product) ?? "PostgreSQL"
	};
	const appwriteType = resolveAppwriteProductType(apiType, product);
	if (appwriteType) return {
		mode: "product",
		key: appwriteType,
		label: formatDatabaseServiceLabel(appwriteType) ?? "TablesDB"
	};
	if (engineLabel) return {
		mode: "engine",
		key: normalizeKey(engineFromHints),
		label: engineLabel
	};
	return {
		mode: "product",
		key: "tablesdb",
		label: "TablesDB"
	};
}
function getDatabaseTypeDisplayLabel(apiType, engine, product) {
	return resolveDatabaseTypeDisplay({
		apiType,
		engine,
		product
	}).label;
}
function getDatabaseTypeDisplayLucideIcon(hints) {
	const resolved = resolveDatabaseTypeDisplay(hints);
	if (resolved.mode !== "product") return null;
	return getDatabaseServiceLucideIcon(resolved.key);
}
function resolveDatabaseTypeIcon({ apiType, engine, product, className }) {
	const iconClass = cn("h-4 w-4 shrink-0 text-muted-foreground", className);
	const resolved = resolveDatabaseTypeDisplay({
		apiType,
		engine,
		product
	});
	if (resolved.mode === "engine") {
		const normalizedEngine = resolved.key;
		if (normalizedEngine === "postgres" || normalizedEngine === "postgresql") return /* @__PURE__ */ jsx(PostgresElephantIcon, { className: iconClass });
		if (normalizedEngine === "mysql" || normalizedEngine === "mariadb") return /* @__PURE__ */ jsx(MySQLDolphinIcon, { className: iconClass });
		if (normalizedEngine === "mongo" || normalizedEngine === "mongodb") return /* @__PURE__ */ jsx(MongoDbLeafIcon, { className: iconClass });
	}
	const ProductIcon = getDatabaseTypeDisplayLucideIcon({
		apiType,
		engine,
		product
	});
	if (ProductIcon) return /* @__PURE__ */ jsx(ProductIcon, { className: iconClass });
	return /* @__PURE__ */ jsx(Database, { className: iconClass });
}
function DatabaseTypeIcon({ apiType, engine, product, className }) {
	return resolveDatabaseTypeIcon({
		apiType,
		engine,
		product,
		className
	});
}
function DatabaseTypeBadge({ apiType, engine, product, className, iconOnly = false }) {
	const label = getDatabaseTypeDisplayLabel(apiType, engine, product);
	return /* @__PURE__ */ jsxs("span", {
		className: cn("inline-flex max-w-full items-center gap-1.5", !iconOnly && "rounded-md border border-border bg-muted/40 px-1.5 py-0.5", className),
		title: label,
		children: [/* @__PURE__ */ jsx(DatabaseTypeIcon, {
			apiType,
			engine,
			product,
			className: "h-3.5 w-3.5"
		}), !iconOnly ? /* @__PURE__ */ jsx("span", {
			className: "truncate text-[12px] font-medium text-foreground",
			children: label
		}) : null]
	});
}
export { DatabaseTypeIcon as n, getDatabaseTypeDisplayLabel as r, DatabaseTypeBadge as t };
