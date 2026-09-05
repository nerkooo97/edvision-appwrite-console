import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Mp as useExecuteMysqlSql, Xp as useMysqlTableIndexes, Yp as useMysqlTableColumns, Zp as useMysqlTableInfo, gp as mysqlTableColumnsQueryOptions, mp as mysqlSidebarTablesInfiniteQueryOptions, pp as mysqlSidebarSchemasInfiniteQueryOptions } from "./hooks-BONwG3Mt.js";
import { f as parseMysqlTableId, o as mysqlNav, s as mysqlTableId } from "./mysql-database-routes-CVHkJzTt.js";
import { $t as mysqlColumnTypeStatesEqual, Ht as buildMysqlColumnTypeSql, Kt as getMysqlColumnDefaultPlaceholder, Sn as isMysqlUniqueColumn, Ut as createDefaultMysqlColumnTypeState, bn as isMysqlPrimaryIndex, cn as buildMysqlSingleRequestDdlSql, en as parseMysqlColumnTypeFromRow, tn as validateMysqlColumnTypeState, xn as isMysqlPrimaryKeyColumn } from "./form-field-type-badge-C7qMzJo0.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { t as getColumnIcon } from "./column-icons-CL3QmOrR.js";
import { l as validateMysqlIndexFormState, n as createDefaultMysqlIndexFormState, r as formatMysqlIndexMetadataPreview, s as parseMysqlIndexIncludeColumns } from "./mysql-index-metadata-CpeqQ75u.js";
import { r as localizeMysqlIndexAlgorithmLabel } from "./resource-status-labels-C-bLMJxj.js";
import { a as useDatabaseTableOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as SPREADSHEET_FILLER_HEADER_CLASS, r as SPREADSHEET_SCROLL_LAYER_CLASS, t as SPREADSHEET_FILLER_CELL_CLASS } from "./spreadsheet-sticky-CpUihTZG.js";
import { _ as mysqlStickyActionsCellClass, a as MYSQL_HEADER_CELL_BORDER_CLASS, d as MYSQL_STICKY_THEAD_CLASS, g as matchesMysqlLocalSearch, n as MYSQL_ACTIONS_COL_STYLE, p as getMysqlColumnTypeColor, r as MYSQL_BODY_CELL_BORDER_CLASS, t as MYSQL_ACTIONS_COL_PX, u as MYSQL_STICKY_ACTIONS_HEADER_CLASS, v as parseMysqlIndexColumnsFromDefinition } from "./mysql-spreadsheet-chrome-CfmSw3G0.js";
import { n as useMysqlTableHeaderSlot } from "./MysqlTableHeaderSlotContext-DhaZhCAt.js";
import { _ as buildMysqlRenameTableSql, a as buildMysqlAddUniqueConstraintSql, b as formatMysqlColumnType, c as buildMysqlAlterColumnTypeSql, d as buildMysqlDropColumnSql, f as buildMysqlDropConstraintSql, g as buildMysqlRenameColumnSql, h as buildMysqlIndexCommentSql, i as buildMysqlAddPrimaryKeySql, l as buildMysqlColumnCommentSql, m as buildMysqlDropTableSql, n as buildMysqlAddColumnSql, o as buildMysqlAlterColumnDefaultSql, p as buildMysqlDropIndexSql, r as buildMysqlAddForeignKeySql, s as buildMysqlAlterColumnNullableSql, t as buildMysqlAddCheckConstraintSql, u as buildMysqlCreateIndexSql, v as buildMysqlTableCommentSql, y as formatMysqlBytes } from "./mysql-table-ddl-DacHo4_T.js";
import { n as MysqlColumnTypeSelector, t as MysqlIndexAlgorithmSelector } from "./MysqlIndexAlgorithmSelector-zMJMzNk2.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckCircle2, Copy, FileJson, Key, Pencil, Trash2 } from "lucide-react";
var CHECK_ENTRY_SEPARATOR = "\n";
var CHECK_NAME_SEPARATOR = "::";
function parseMysqlColumnCheckConstraints(raw) {
	if (!raw?.trim()) return [];
	return raw.split(CHECK_ENTRY_SEPARATOR).map((entry) => entry.trim()).filter(Boolean).map((entry) => {
		const separatorIndex = entry.indexOf(CHECK_NAME_SEPARATOR);
		if (separatorIndex === -1) return {
			name: "",
			expression: entry
		};
		return {
			name: entry.slice(0, separatorIndex).trim(),
			expression: entry.slice(separatorIndex + 2).trim()
		};
	}).filter((entry) => entry.expression);
}
function parseMysqlColumnForeignKeys(raw) {
	if (!raw?.trim()) return [];
	return raw.split(CHECK_ENTRY_SEPARATOR).map((entry) => entry.trim()).filter(Boolean).map((entry) => {
		const separatorIndex = entry.indexOf(CHECK_NAME_SEPARATOR);
		if (separatorIndex === -1) return {
			name: "",
			reference: entry
		};
		return {
			name: entry.slice(0, separatorIndex).trim(),
			reference: entry.slice(separatorIndex + 2).trim()
		};
	}).filter((entry) => entry.reference);
}
function formatMysqlForeignKeyReference(reference) {
	return `${reference.schema}.${reference.table}(${reference.column})`;
}
function createEmptyMysqlForeignKeyState(defaultSchema) {
	return {
		enabled: false,
		schema: defaultSchema,
		table: "",
		column: ""
	};
}
function parseMysqlForeignKeyStateFromRow(raw, defaultSchema) {
	const foreignKeys = parseMysqlColumnForeignKeys(raw);
	if (foreignKeys.length === 0) return createEmptyMysqlForeignKeyState(defaultSchema);
	const parsedReference = parseMysqlForeignKeyReference(foreignKeys[0].reference, defaultSchema);
	if (!parsedReference) return createEmptyMysqlForeignKeyState(defaultSchema);
	return {
		enabled: true,
		schema: parsedReference.schema,
		table: parsedReference.table,
		column: parsedReference.column
	};
}
function mysqlForeignKeyStateToReference(state) {
	if (!state.enabled) return null;
	const schema = state.schema.trim();
	const table = state.table.trim();
	const column = state.column.trim();
	if (!schema || !table || !column) return null;
	return {
		schema,
		table,
		column
	};
}
function getMysqlForeignKeyReferenceForCompare(state) {
	const reference = mysqlForeignKeyStateToReference(state);
	if (!reference) return "";
	return formatMysqlForeignKeyReference(reference);
}
function validateMysqlForeignKeyState(state) {
	if (!state.enabled) return null;
	if (!state.schema.trim()) return "Select a schema for the foreign key.";
	if (!state.table.trim()) return "Select a referenced table for the foreign key.";
	if (!state.column.trim()) return "Select a referenced column for the foreign key.";
	return null;
}
function parseMysqlForeignKeyReference(input, defaultSchema) {
	const trimmed = input.trim();
	if (!trimmed) return null;
	const openParen = trimmed.indexOf("(");
	const closeParen = trimmed.lastIndexOf(")");
	if (openParen === -1 || closeParen <= openParen) return null;
	const column = trimmed.slice(openParen + 1, closeParen).trim();
	const tablePart = trimmed.slice(0, openParen).trim();
	if (!column || !tablePart) return null;
	const lastDot = tablePart.lastIndexOf(".");
	if (lastDot === -1) return {
		schema: defaultSchema,
		table: tablePart,
		column
	};
	const schema = tablePart.slice(0, lastDot).trim();
	const table = tablePart.slice(lastDot + 1).trim();
	if (!schema || !table) return null;
	return {
		schema,
		table,
		column
	};
}
function getMysqlColumnCheckExpressionForEdit(raw) {
	const checks = parseMysqlColumnCheckConstraints(raw);
	if (checks.length === 0) return "";
	if (checks.length === 1) return checks[0].expression;
	return checks.map((check) => check.expression).join("\n");
}
function getMysqlColumnForeignKeyReferenceForEdit(raw) {
	const foreignKeys = parseMysqlColumnForeignKeys(raw);
	if (foreignKeys.length === 0) return "";
	if (foreignKeys.length === 1) return foreignKeys[0].reference;
	return foreignKeys.map((foreignKey) => foreignKey.reference).join("\n");
}
function buildMysqlColumnConstraintName(tableName, columnName, suffix) {
	return `${tableName}_${columnName}_${suffix}`.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 63);
}
function formatMysqlColumnMetadataPreview(value, maxLength = 48) {
	if (!value?.trim()) return "-";
	const singleLine = value.replace(/\s+/g, " ").trim();
	if (singleLine.length <= maxLength) return singleLine;
	return `${singleLine.slice(0, maxLength - 1)}…`;
}
function getMysqlColumnCheckDisplay(raw) {
	const checks = parseMysqlColumnCheckConstraints(raw);
	if (checks.length === 0) return "";
	return checks.map((check) => check.expression).join("; ");
}
function getMysqlColumnForeignKeyDisplay(raw) {
	const foreignKeys = parseMysqlColumnForeignKeys(raw);
	if (foreignKeys.length === 0) return "";
	return foreignKeys.map((foreignKey) => foreignKey.reference).join(", ");
}
function MysqlForeignKeySelector({ value, onChange, projectId, databaseId, defaultSchema, active = true, hasMultipleForeignKeys = false }) {
	const t = useT();
	const [schemaSearch, setSchemaSearch] = useState("");
	const [tableSearch, setTableSearch] = useState("");
	const [debouncedSchemaSearch, setDebouncedSchemaSearch] = useState("");
	const [debouncedTableSearch, setDebouncedTableSearch] = useState("");
	useEffect(() => {
		const timeout = window.setTimeout(() => setDebouncedSchemaSearch(schemaSearch.trim()), 300);
		return () => window.clearTimeout(timeout);
	}, [schemaSearch]);
	useEffect(() => {
		const timeout = window.setTimeout(() => setDebouncedTableSearch(tableSearch.trim()), 300);
		return () => window.clearTimeout(timeout);
	}, [tableSearch]);
	const { data: schemasData, isLoading: schemasLoading, isFetching: schemasFetching, isFetchingNextPage: schemasFetchingNextPage, fetchNextPage: fetchNextSchemaPage, hasNextPage: hasMoreSchemas } = useInfiniteQuery({
		...mysqlSidebarSchemasInfiniteQueryOptions(projectId, databaseId, debouncedSchemaSearch),
		enabled: active && value.enabled
	});
	const { data: tablesData, isLoading: tablesLoading, isFetching: tablesFetching, isFetchingNextPage: tablesFetchingNextPage, fetchNextPage: fetchNextTablePage, hasNextPage: hasMoreTables } = useInfiniteQuery({
		...mysqlSidebarTablesInfiniteQueryOptions(projectId, databaseId, value.schema || defaultSchema, debouncedTableSearch),
		enabled: active && value.enabled && !!value.schema
	});
	const referencedTableId = value.schema && value.table ? `${value.schema}.${value.table}` : null;
	const { data: columnsData, isFetching: columnsLoading } = useQuery({
		...mysqlTableColumnsQueryOptions(projectId, databaseId, referencedTableId),
		enabled: active && value.enabled && !!referencedTableId
	});
	const schemas = useMemo(() => schemasData?.pages.flatMap((page) => page.schemas) ?? [], [schemasData?.pages]);
	const schemasTotal = schemasData?.pages[0]?.total ?? schemas.length;
	const tables = useMemo(() => tablesData?.pages.flatMap((page) => page.tables) ?? [], [tablesData?.pages]);
	const tablesTotal = tablesData?.pages[0]?.total ?? tables.length;
	const schemaItems = useMemo(() => schemas.map((schema) => ({
		value: schema,
		label: schema
	})), [schemas]);
	const tableItems = useMemo(() => tables.map((table) => ({
		value: table.table_name,
		label: table.table_name
	})), [tables]);
	const columnItems = useMemo(() => (columnsData?.columns ?? []).map((column) => {
		const isPrimaryKey = isMysqlPrimaryKeyColumn(column);
		return {
			value: column.column_name,
			label: column.column_name,
			description: isPrimaryKey ? t("Primary key") : formatMysqlColumnType(column),
			searchText: `${column.column_name} ${formatMysqlColumnType(column)}`
		};
	}), [columnsData?.columns, t]);
	const selectedReference = mysqlForeignKeyStateToReference(value);
	const handleEnabledChange = (enabled) => {
		onChange({
			...value,
			enabled,
			schema: value.schema || defaultSchema,
			table: enabled ? value.table : "",
			column: enabled ? value.column : ""
		});
	};
	const handleSchemaChange = (schema) => {
		onChange({
			...value,
			schema,
			table: "",
			column: ""
		});
	};
	const handleTableChange = (table) => {
		onChange({
			...value,
			table,
			column: ""
		});
	};
	const handleColumnChange = (column) => {
		onChange({
			...value,
			column
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "column-foreign-key-enabled",
					className: "text-[12px] font-medium",
					children: t("Foreign key")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-muted-foreground mt-1",
					children: t("Reference a column in another table.")
				})] }), /* @__PURE__ */ jsx(Switch, {
					id: "column-foreign-key-enabled",
					checked: value.enabled,
					onCheckedChange: handleEnabledChange
				})]
			}),
			hasMultipleForeignKeys ? /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: t("This column has multiple foreign keys. Saving replaces them with a single foreign key.")
			}) : null,
			value.enabled ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-3 rounded-lg border border-border bg-muted/20 px-3 py-3",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Reference")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "foreign-key-schema",
							className: "text-[12px] font-medium",
							children: t("Schema")
						}), /* @__PURE__ */ jsx(SearchableSelect, {
							value: value.schema,
							onValueChange: handleSchemaChange,
							items: schemaItems,
							placeholder: schemasLoading ? t("Loading schemas…") : t("Select schema"),
							searchPlaceholder: t("Search schemas..."),
							emptyMessage: t("No schemas found"),
							disabled: schemasLoading && schemaItems.length === 0,
							onSearchChange: setSchemaSearch,
							isFetching: schemasFetching,
							hasNextPage: hasMoreSchemas ?? false,
							isFetchingNextPage: schemasFetchingNextPage,
							onLoadMore: () => fetchNextSchemaPage(),
							listFooter: schemasTotal > schemas.length ? `Showing ${schemas.length.toLocaleString()} of ${schemasTotal.toLocaleString()} schemas` : void 0
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "foreign-key-table",
							className: "text-[12px] font-medium",
							children: t("Table")
						}), /* @__PURE__ */ jsx(SearchableSelect, {
							value: value.table,
							onValueChange: handleTableChange,
							items: tableItems,
							placeholder: !value.schema ? t("Select a schema first") : tablesLoading ? t("Loading tables…") : t("Select table"),
							searchPlaceholder: t("Search tables..."),
							emptyMessage: t("No tables found"),
							disabled: !value.schema || tablesLoading && tableItems.length === 0,
							onSearchChange: setTableSearch,
							isFetching: tablesFetching,
							hasNextPage: hasMoreTables ?? false,
							isFetchingNextPage: tablesFetchingNextPage,
							onLoadMore: () => fetchNextTablePage(),
							listFooter: tablesTotal > tables.length ? `Showing ${tables.length.toLocaleString()} of ${tablesTotal.toLocaleString()} tables` : void 0
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "foreign-key-column",
							className: "text-[12px] font-medium",
							children: t("Column")
						}), /* @__PURE__ */ jsx(SearchableSelect, {
							value: value.column,
							onValueChange: handleColumnChange,
							items: columnItems,
							placeholder: !value.table ? t("Select a table first") : columnsLoading ? t("Loading columns…") : t("Select column"),
							searchPlaceholder: t("Search columns..."),
							emptyMessage: t("No columns found"),
							disabled: !value.table || columnsLoading && columnItems.length === 0
						})]
					}),
					selectedReference ? /* @__PURE__ */ jsxs("p", {
						className: "text-[11px] text-muted-foreground",
						children: [
							"References",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "font-mono text-[11px] text-foreground",
								children: formatMysqlForeignKeyReference(selectedReference)
							})
						]
					}) : null
				]
			}) : null
		]
	});
}
function normalizeOptionalText(value) {
	return value.trim();
}
function ConstraintToggle({ id, label, description, checked, onCheckedChange, disabled }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: id,
				className: "text-[12px] font-medium",
				children: label
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground mt-1",
				children: description
			})]
		}), /* @__PURE__ */ jsx(Switch, {
			id,
			checked,
			onCheckedChange,
			disabled
		})]
	});
}
function MysqlTableColumnDrawer({ open, onOpenChange, projectId, databaseId, tableId, column, onSuccess }) {
	const t = useT();
	const isEditing = !!column;
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const { schema: tableSchema, table: tableName } = parseMysqlTableId(tableId);
	const [name, setName] = useState("");
	const [typeState, setTypeState] = useState(createDefaultMysqlColumnTypeState());
	const [nullable, setNullable] = useState(true);
	const [primaryKey, setPrimaryKey] = useState(false);
	const [unique, setUnique] = useState(false);
	const [defaultValue, setDefaultValue] = useState("");
	const [comment, setComment] = useState("");
	const [checkExpression, setCheckExpression] = useState("");
	const [foreignKeyState, setForeignKeyState] = useState(() => createEmptyMysqlForeignKeyState(tableSchema));
	const nameInputRef = useRef(null);
	useEffect(() => {
		if (!open || column) return;
		const timeout = window.setTimeout(() => {
			nameInputRef.current?.focus();
		}, 0);
		return () => window.clearTimeout(timeout);
	}, [open, column]);
	useEffect(() => {
		if (!open) return;
		if (column) {
			const isPrimary = isMysqlPrimaryKeyColumn(column);
			setName(column.column_name);
			setTypeState(parseMysqlColumnTypeFromRow(column));
			setNullable(column.is_nullable === "YES");
			setPrimaryKey(isPrimary);
			setUnique(isPrimary || isMysqlUniqueColumn(column));
			setDefaultValue(column.column_default ?? "");
			setComment(column.column_comment ?? "");
			setCheckExpression(getMysqlColumnCheckExpressionForEdit(column.check_constraints));
			setForeignKeyState(parseMysqlForeignKeyStateFromRow(column.foreign_keys, tableSchema));
		} else {
			setName("");
			setTypeState(createDefaultMysqlColumnTypeState());
			setNullable(true);
			setPrimaryKey(false);
			setUnique(false);
			setDefaultValue("");
			setComment("");
			setCheckExpression("");
			setForeignKeyState(createEmptyMysqlForeignKeyState(tableSchema));
		}
	}, [
		open,
		column,
		tableSchema
	]);
	const handlePrimaryKeyChange = (checked) => {
		setPrimaryKey(checked);
		if (checked) {
			setNullable(false);
			setUnique(true);
		}
	};
	const handleSubmit = async () => {
		const trimmedName = name.trim();
		if (!trimmedName) {
			toast.error(t("Column name is required"));
			return;
		}
		const typeError = validateMysqlColumnTypeState(typeState);
		if (typeError) {
			toast.error(t(typeError));
			return;
		}
		const nextComment = normalizeOptionalText(comment);
		const nextCheckExpression = normalizeOptionalText(checkExpression);
		const nextDefault = defaultValue.trim();
		const foreignKeyError = validateMysqlForeignKeyState(foreignKeyState);
		if (foreignKeyError) {
			toast.error(foreignKeyError);
			return;
		}
		const nextForeignKeyReference = getMysqlForeignKeyReferenceForCompare(foreignKeyState);
		const dataType = buildMysqlColumnTypeSql(typeState);
		const statements = [];
		try {
			if (!isEditing) statements.push(buildMysqlAddColumnSql(tableId, trimmedName, dataType, {
				nullable: primaryKey ? false : nullable,
				defaultValue: nextDefault || void 0,
				primaryKey,
				unique: unique && !primaryKey
			}));
			else {
				if (trimmedName !== column.column_name) statements.push(buildMysqlRenameColumnSql(tableId, column.column_name, trimmedName));
				if (!mysqlColumnTypeStatesEqual(typeState, parseMysqlColumnTypeFromRow(column))) statements.push(buildMysqlAlterColumnTypeSql(tableId, trimmedName, dataType));
				const wasNullable = column.is_nullable === "YES";
				const nextNullable = primaryKey ? false : nullable;
				if (nextNullable !== wasNullable) statements.push(buildMysqlAlterColumnNullableSql(tableId, trimmedName, nextNullable, dataType));
				if (nextDefault !== (column.column_default ?? "").trim()) statements.push(buildMysqlAlterColumnDefaultSql(tableId, trimmedName, nextDefault || null));
				const wasPrimary = isMysqlPrimaryKeyColumn(column);
				const hadStandaloneUnique = isMysqlUniqueColumn(column);
				if (primaryKey !== wasPrimary) {
					if (wasPrimary && column.primary_key_constraint) statements.push(buildMysqlDropConstraintSql(tableId, column.primary_key_constraint));
					if (primaryKey) statements.push(buildMysqlAddPrimaryKeySql(tableId, trimmedName, buildMysqlColumnConstraintName(tableName, trimmedName, "pkey")));
				}
				if (primaryKey) {
					if (hadStandaloneUnique && column.unique_constraint) statements.push(buildMysqlDropConstraintSql(tableId, column.unique_constraint));
				} else if (hadStandaloneUnique && !unique && column.unique_constraint) statements.push(buildMysqlDropConstraintSql(tableId, column.unique_constraint));
				else if (!hadStandaloneUnique && unique) statements.push(buildMysqlAddUniqueConstraintSql(tableId, trimmedName, buildMysqlColumnConstraintName(tableName, trimmedName, "key")));
			}
			if (nextComment !== normalizeOptionalText(column?.column_comment ?? "")) statements.push(buildMysqlColumnCommentSql(tableId, trimmedName, nextComment || null, dataType));
			if (nextCheckExpression !== normalizeOptionalText(getMysqlColumnCheckExpressionForEdit(column?.check_constraints ?? null))) {
				for (const check of parseMysqlColumnCheckConstraints(column?.check_constraints ?? null)) if (check.name) statements.push(buildMysqlDropConstraintSql(tableId, check.name));
				if (nextCheckExpression) statements.push(buildMysqlAddCheckConstraintSql(tableId, buildMysqlColumnConstraintName(tableName, trimmedName, "check"), nextCheckExpression));
			}
			if (nextForeignKeyReference !== normalizeOptionalText(getMysqlColumnForeignKeyReferenceForEdit(column?.foreign_keys ?? null))) {
				for (const foreignKey of parseMysqlColumnForeignKeys(column?.foreign_keys ?? null)) if (foreignKey.name) statements.push(buildMysqlDropConstraintSql(tableId, foreignKey.name));
				if (nextForeignKeyReference) {
					const parsedReference = mysqlForeignKeyStateToReference(foreignKeyState);
					if (parsedReference) statements.push(buildMysqlAddForeignKeySql(tableId, trimmedName, buildMysqlColumnConstraintName(tableName, trimmedName, "fkey"), parsedReference));
				}
			}
			if (statements.length === 0) {
				onOpenChange(false);
				return;
			}
			await executeSql.mutateAsync(buildMysqlSingleRequestDdlSql(statements, isEditing ? "Update table column" : "Add table column"));
			toast.success(isEditing ? t("Column updated") : t("Column created"));
			onOpenChange(false);
			await onSuccess();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t(isEditing ? "Failed to update column" : "Failed to create column"));
		}
	};
	const hasMultipleChecks = isEditing && parseMysqlColumnCheckConstraints(column?.check_constraints).length > 1;
	const hasMultipleForeignKeys = isEditing && parseMysqlColumnForeignKeys(column?.foreign_keys).length > 1;
	const isExistingPrimaryKey = isEditing && column != null && isMysqlPrimaryKeyColumn(column);
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: isEditing ? t("Update column") : t("Create column"),
		description: isEditing ? t("Update the column definition, constraints, and metadata.") : t("Add a new column with optional constraints and metadata."),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			className: "flex flex-col flex-1 min-h-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 overflow-y-auto px-6 pb-4 pt-4 space-y-5",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t("General")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "column-name",
										className: "text-[12px] font-medium",
										children: [
											t("Name"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										ref: nameInputRef,
										id: "column-name",
										value: name,
										onChange: (event) => setName(event.target.value),
										placeholder: "column_name",
										disabled: isExistingPrimaryKey,
										autoFocus: !isEditing
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: t("Use lowercase letters and underscores, for example column_name.")
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "column-comment",
									className: "text-[12px] font-medium",
									children: t("Description")
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "column-comment",
									value: comment,
									onChange: (event) => setComment(event.target.value),
									rows: 2,
									className: "min-h-[72px] resize-y",
									placeholder: t("Optional")
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t("Data type")
							}),
							/* @__PURE__ */ jsx(MysqlColumnTypeSelector, {
								value: typeState,
								onChange: setTypeState,
								allowSerialTypes: !isEditing,
								existing: isEditing
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "column-default",
										className: "text-[12px] font-medium",
										children: t("Default value")
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "column-default",
										value: defaultValue,
										onChange: (event) => setDefaultValue(event.target.value),
										className: "font-mono",
										placeholder: t(getMysqlColumnDefaultPlaceholder(typeState.typeId))
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: t("A literal or SQL expression, for example now() or gen_random_uuid().")
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Foreign key")
						}), /* @__PURE__ */ jsx(MysqlForeignKeySelector, {
							value: foreignKeyState,
							onChange: setForeignKeyState,
							projectId,
							databaseId,
							defaultSchema: tableSchema,
							active: open,
							hasMultipleForeignKeys
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t("Constraints")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(ConstraintToggle, {
										id: "column-primary-key",
										label: t("Primary key"),
										description: t("Use this column as a unique identifier for rows in the table."),
										checked: primaryKey,
										onCheckedChange: handlePrimaryKeyChange
									}),
									/* @__PURE__ */ jsx(ConstraintToggle, {
										id: "column-nullable",
										label: t("Allow nullable"),
										description: t("Allow the column to be NULL when no value is provided."),
										checked: primaryKey ? false : nullable,
										onCheckedChange: setNullable,
										disabled: primaryKey
									}),
									/* @__PURE__ */ jsx(ConstraintToggle, {
										id: "column-unique",
										label: t("Unique"),
										description: t("Require values in this column to be unique across rows."),
										checked: primaryKey ? true : unique,
										onCheckedChange: setUnique,
										disabled: primaryKey
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "column-check",
										className: "text-[12px] font-medium",
										children: t("Check constraint")
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											t("Optional SQL expression, for example"),
											" ",
											/* @__PURE__ */ jsx("code", {
												className: "font-mono text-[11px]",
												children: "length(column_name) < 500"
											}),
											"."
										]
									}),
									hasMultipleChecks ? /* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: t("This column has multiple check constraints. Saving replaces them with a single check.")
									}) : null,
									/* @__PURE__ */ jsx(Textarea, {
										id: "column-check",
										value: checkExpression,
										onChange: (event) => setCheckExpression(event.target.value),
										rows: 2,
										className: "min-h-[72px] resize-y font-mono",
										placeholder: "length(column_name) < 500"
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex flex-col gap-2 sm:flex-row sm:justify-start",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: executeSql.isPending || !name.trim(),
					children: isEditing ? t("Update") : t("Create")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: executeSql.isPending,
					children: t("Cancel")
				})]
			})]
		})] })
	});
}
function MysqlColumnContextMenu({ column, isPrimary, canWrite = true, onUpdate, onDelete, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			canWrite ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(column)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }) : null,
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", column.column_name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				column.column_default ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Value", String(column.column_default)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy value")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => column, { fallback: column }),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			!isPrimary && onDelete && canWrite ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(column.column_name)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})] }) : null
		]
	})] });
}
var MYSQL_COLUMNS_GRID_MIN_WIDTH_PX = 980;
function MysqlTableColumnsPanel({ databaseId, tableId, search = "", createDialogOpen: createDialogOpenProp, onCreateDialogOpenChange }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { columns, isLoading, refetch } = useMysqlTableColumns(projectId, databaseId, tableId);
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const [internalDialogOpen, setInternalDialogOpen] = useState(false);
	const dialogOpen = (createDialogOpenProp ?? false) || internalDialogOpen;
	const [selectedColumn, setSelectedColumn] = useState(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [columnToDelete, setColumnToDelete] = useState(null);
	useEffect(() => {
		if (createDialogOpenProp) setSelectedColumn(null);
	}, [createDialogOpenProp]);
	const closeDialog = () => {
		setInternalDialogOpen(false);
		onCreateDialogOpenChange?.(false);
		setSelectedColumn(null);
	};
	const handleCreate = () => {
		setSelectedColumn(null);
		setInternalDialogOpen(true);
		onCreateDialogOpenChange?.(true);
	};
	const handleEdit = (column) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedColumn(column);
			setInternalDialogOpen(true);
		});
	};
	const openDeleteDialog = (columnName) => {
		openDialogAfterOverlayCloses(() => {
			setColumnToDelete(columnName);
			setDeleteDialogOpen(true);
		});
	};
	const handleDelete = async () => {
		if (!columnToDelete) return;
		const name = columnToDelete;
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
			setColumnToDelete(null);
		});
		try {
			await executeSql.mutateAsync(buildMysqlDropColumnSql(tableId, name));
			toast.success(t("Column deleted"));
			await refetch();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete column"));
		}
	};
	const isPrimaryKey = (column) => isMysqlPrimaryKeyColumn(column);
	const filteredColumns = useMemo(() => {
		return columns.filter((column) => {
			const typeLabel = formatMysqlColumnType(column);
			return matchesMysqlLocalSearch(search, column.column_name, column.data_type, column.udt_name, typeLabel, column.column_default, column.column_comment, getMysqlColumnCheckDisplay(column.check_constraints), getMysqlColumnForeignKeyDisplay(column.foreign_keys));
		});
	}, [columns, search]);
	const hasSearch = search.trim().length > 0;
	if (isLoading && columns.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading columns…")
		})
	});
	if (hasSearch && filteredColumns.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[15px] font-medium text-foreground",
			children: t("No columns match your search")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 max-w-sm text-[13px] text-muted-foreground",
			children: t("Try adjusting or clearing your search.")
		})]
	});
	if (columns.length === 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[15px] font-medium text-foreground",
				children: t("No columns")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 max-w-sm text-[13px] text-muted-foreground",
				children: "Add your first column to define this table's structure."
			}),
			canWrite ? /* @__PURE__ */ jsx(Button, {
				size: "sm",
				className: "mt-4 h-9",
				onClick: handleCreate,
				children: t("Add column")
			}) : null
		]
	}), /* @__PURE__ */ jsx(MysqlTableColumnDrawer, {
		open: dialogOpen,
		onOpenChange: (open) => {
			if (!open) closeDialog();
		},
		projectId,
		databaseId,
		tableId,
		column: selectedColumn,
		onSuccess: () => refetch()
	})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "flex h-full flex-col relative",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto overscroll-contain",
				children: /* @__PURE__ */ jsx("div", {
					className: SPREADSHEET_SCROLL_LAYER_CLASS,
					style: { minWidth: MYSQL_COLUMNS_GRID_MIN_WIDTH_PX },
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full border-collapse",
						children: [/* @__PURE__ */ jsx("thead", {
							className: MYSQL_STICKY_THEAD_CLASS,
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[200px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Key")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[120px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Type")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[80px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Required")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[120px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Default")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[140px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: "Check"
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[140px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Foreign key")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[140px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Comment")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									"aria-hidden": true,
									className: SPREADSHEET_FILLER_HEADER_CLASS
								}),
								/* @__PURE__ */ jsx("th", {
									className: MYSQL_STICKY_ACTIONS_HEADER_CLASS,
									style: MYSQL_ACTIONS_COL_STYLE
								})
							] })
						}), /* @__PURE__ */ jsx("tbody", { children: filteredColumns.map((column) => {
							const Icon$1 = getColumnIcon(column.udt_name || column.data_type);
							const typeLabel = formatMysqlColumnType(column);
							const typeKey = column.udt_name || column.data_type;
							const required = column.is_nullable !== "YES";
							const primary = isPrimaryKey(column);
							const checkDisplay = getMysqlColumnCheckDisplay(column.check_constraints);
							const foreignKeyDisplay = getMysqlColumnForeignKeyDisplay(column.foreign_keys);
							const commentDisplay = column.column_comment?.trim() ?? "";
							return /* @__PURE__ */ jsx(MysqlColumnContextMenu, {
								column,
								isPrimary: primary,
								canWrite,
								onUpdate: handleEdit,
								onDelete: !primary ? openDeleteDialog : void 0,
								children: /* @__PURE__ */ jsxs("tr", {
									className: "group transition-colors hover:bg-muted/50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
													/* @__PURE__ */ jsx("code", {
														className: "font-mono text-[12px] text-foreground",
														children: column.column_name
													}),
													/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: (event) => {
																event.stopPropagation();
																navigator.clipboard.writeText(column.column_name);
																toast.success(t("Column name copied"));
															},
															className: "flex h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity hover:bg-muted hover:text-foreground group-hover:opacity-100",
															children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
														})
													}), /* @__PURE__ */ jsx(TooltipContent, {
														side: "top",
														children: /* @__PURE__ */ jsx("p", { children: t("Copy column name") })
													})] }),
													primary ? /* @__PURE__ */ jsx(Badge, {
														variant: "info",
														className: "text-[10px] shrink-0",
														children: t("Primary key")
													}) : null
												]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx(Badge, {
												variant: "outline",
												className: cn("text-[11px] font-medium border", getMysqlColumnTypeColor(typeKey)),
												children: typeLabel
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: required ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx("code", {
												className: "font-mono text-[11px] text-muted-foreground",
												children: column.column_default ?? "NULL"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: checkDisplay ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("code", {
													className: "block max-w-[220px] truncate font-mono text-[11px] text-foreground",
													children: formatMysqlColumnMetadataPreview(checkDisplay, 40)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "font-mono text-[11px] break-all",
													children: checkDisplay
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: foreignKeyDisplay ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("code", {
													className: "block max-w-[220px] truncate font-mono text-[11px] text-foreground",
													children: formatMysqlColumnMetadataPreview(foreignKeyDisplay, 40)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "font-mono text-[11px] break-all",
													children: foreignKeyDisplay
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: commentDisplay ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block max-w-[220px] truncate text-[12px] text-foreground",
													children: formatMysqlColumnMetadataPreview(commentDisplay, 40)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[12px] break-words",
													children: commentDisplay
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											"aria-hidden": true,
											className: SPREADSHEET_FILLER_CELL_CLASS
										}),
										/* @__PURE__ */ jsx("td", {
											className: mysqlStickyActionsCellClass(),
											style: MYSQL_ACTIONS_COL_STYLE,
											children: /* @__PURE__ */ jsx("div", {
												className: "flex h-full items-center justify-center py-1.5",
												style: MYSQL_ACTIONS_COL_STYLE,
												children: canWrite && !primary ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
												}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
													align: "end",
													children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => handleEdit(column),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Pencil,
															children: t("Update")
														})
													}), /* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => openDeleteDialog(column.column_name),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Trash2,
															children: t("Delete")
														})
													})]
												})] }) : canWrite && primary ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
												}), /* @__PURE__ */ jsx(DropdownMenuContent, {
													align: "end",
													children: /* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => handleEdit(column),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Pencil,
															children: t("Update")
														})
													})
												})] }) : null
											})
										})
									]
								})
							}, column.column_name);
						}) })]
					})
				})
			})
		}),
		/* @__PURE__ */ jsx(MysqlTableColumnDrawer, {
			open: dialogOpen,
			onOpenChange: (open) => {
				if (!open) closeDialog();
			},
			projectId,
			databaseId,
			tableId,
			column: selectedColumn,
			onSuccess: () => refetch()
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete column") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							"Are you sure you want to delete",
							" ",
							/* @__PURE__ */ jsx("strong", { children: columnToDelete }),
							"? This action cannot be undone."
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setDeleteDialogOpen(false),
						disabled: executeSql.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: () => void handleDelete(),
						disabled: executeSql.isPending,
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function toggleOrderedColumn(columns, columnName, checked) {
	if (checked) {
		if (columns.includes(columnName)) return columns;
		return [...columns, columnName];
	}
	return columns.filter((column) => column !== columnName);
}
function toggleIncludeColumn(includeColumns, columnName, checked) {
	if (checked) {
		if (includeColumns.includes(columnName)) return includeColumns;
		return [...includeColumns, columnName];
	}
	return includeColumns.filter((column) => column !== columnName);
}
function MysqlTableIndexDrawer({ open, onOpenChange, projectId, databaseId, tableId, onSuccess }) {
	const t = useT();
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const { columns } = useMysqlTableColumns(projectId, databaseId, tableId);
	const [formState, setFormState] = useState(createDefaultMysqlIndexFormState());
	useEffect(() => {
		if (!open) return;
		setFormState(createDefaultMysqlIndexFormState());
	}, [open]);
	const availableIncludeColumns = useMemo(() => columns.map((column) => column.column_name).filter((columnName) => !formState.columns.includes(columnName)), [columns, formState.columns]);
	const handleSubmit = async () => {
		const validationError = validateMysqlIndexFormState(formState);
		if (validationError) {
			toast.error(validationError);
			return;
		}
		const trimmedName = formState.name.trim();
		try {
			const statements = [buildMysqlCreateIndexSql(tableId, trimmedName, formState.columns, {
				unique: formState.unique,
				algorithm: formState.algorithm,
				condition: formState.condition.trim() || void 0,
				includeColumns: formState.includeColumns
			})];
			if (formState.comment.trim()) statements.push(buildMysqlIndexCommentSql(tableId, trimmedName, formState.comment.trim()));
			await executeSql.mutateAsync(buildMysqlSingleRequestDdlSql(statements, "Create table index"));
			toast.success(t("Index created"));
			onOpenChange(false);
			onSuccess();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to create index"));
		}
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: t("Create index"),
		description: t("Define the index algorithm, key columns, and optional partial or covering options."),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			className: "flex flex-col flex-1 min-h-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 overflow-y-auto px-6 pb-4 pt-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "index-name",
							className: "text-[12px] font-medium",
							children: ["Name ", /* @__PURE__ */ jsx("span", {
								className: "text-destructive",
								children: "*"
							})]
						}), /* @__PURE__ */ jsx(Input, {
							id: "index-name",
							value: formState.name,
							onChange: (event) => setFormState((current) => ({
								...current,
								name: event.target.value
							})),
							placeholder: "idx_users_email"
						})]
					}),
					/* @__PURE__ */ jsx(MysqlIndexAlgorithmSelector, {
						value: formState.algorithm,
						onChange: (algorithm) => setFormState((current) => ({
							...current,
							algorithm,
							columns: algorithm === "hash" && current.columns.length > 1 ? current.columns.slice(0, 1) : current.columns
						}))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "index-unique",
							className: "text-[12px] font-medium",
							children: t("Unique")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground mt-1",
							children: t("Enforce unique values across indexed columns.")
						})] }), /* @__PURE__ */ jsx(Switch, {
							id: "index-unique",
							checked: formState.unique,
							onCheckedChange: (unique) => setFormState((current) => ({
								...current,
								unique
							}))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsxs(Label, {
								className: "text-[12px] font-medium",
								children: [
									t("Key columns"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground",
								children: [t("Select one or more columns in index order."), formState.algorithm === "hash" ? ` ${t("Hash indexes support one key column.")}` : null]
							}),
							columns.length === 0 ? /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("No columns available.")
							}) : /* @__PURE__ */ jsx("div", {
								className: "rounded-lg border border-border divide-y divide-border",
								children: columns.map((column) => {
									const order = formState.columns.indexOf(column.column_name);
									const isSelected = order >= 0;
									return /* @__PURE__ */ jsxs("label", {
										className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-muted/40",
										children: [
											/* @__PURE__ */ jsx(Checkbox, {
												checked: isSelected,
												disabled: formState.algorithm === "hash" && formState.columns.length >= 1 && !isSelected,
												onCheckedChange: (checked) => setFormState((current) => ({
													...current,
													columns: toggleOrderedColumn(current.columns, column.column_name, checked === true),
													includeColumns: current.includeColumns.filter((name) => name !== column.column_name)
												}))
											}),
											/* @__PURE__ */ jsx("span", {
												className: "flex-1 text-[12px]",
												children: column.column_name
											}),
											isSelected ? /* @__PURE__ */ jsxs("span", {
												className: "text-[11px] tabular-nums text-muted-foreground",
												children: ["#", order + 1]
											}) : null
										]
									}, column.column_name);
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "index-condition",
								className: "text-[12px] font-medium",
								children: t("Condition")
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground",
								children: [
									"Partial index predicate inside WHERE (...), for example",
									" ",
									/* @__PURE__ */ jsx("code", {
										className: "font-mono text-[11px]",
										children: "deleted_at IS NULL"
									}),
									"."
								]
							}),
							/* @__PURE__ */ jsx(Textarea, {
								id: "index-condition",
								value: formState.condition,
								onChange: (event) => setFormState((current) => ({
									...current,
									condition: event.target.value
								})),
								rows: 2,
								className: "min-h-[80px] resize-y font-mono",
								placeholder: "deleted_at IS NULL"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								className: "text-[12px] font-medium",
								children: t("Include columns")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("Covering index columns stored in the index but not used for lookups.")
							}),
							availableIncludeColumns.length === 0 ? /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: formState.columns.length === columns.length ? t("All table columns are already key columns.") : t("Select key columns first.")
							}) : /* @__PURE__ */ jsx("div", {
								className: "rounded-lg border border-border divide-y divide-border",
								children: availableIncludeColumns.map((columnName) => /* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-muted/40",
									children: [/* @__PURE__ */ jsx(Checkbox, {
										checked: formState.includeColumns.includes(columnName),
										onCheckedChange: (checked) => setFormState((current) => ({
											...current,
											includeColumns: toggleIncludeColumn(current.includeColumns, columnName, checked === true)
										}))
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[12px]",
										children: columnName
									})]
								}, columnName))
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "index-comment",
							className: "text-[12px] font-medium",
							children: t("Comment")
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "index-comment",
							value: formState.comment,
							onChange: (event) => setFormState((current) => ({
								...current,
								comment: event.target.value
							})),
							rows: 2,
							className: "min-h-[80px] resize-y",
							placeholder: t("Describe what this index is for")
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex flex-col gap-2 sm:flex-row sm:justify-start",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: executeSql.isPending || !formState.name.trim() || formState.columns.length === 0,
					children: t("Create")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: executeSql.isPending,
					children: t("Cancel")
				})]
			})]
		})] })
	});
}
function MysqlIndexContextMenu({ index, canWrite = true, onDelete, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
			onSelect: () => copyToClipboard("Name", index.index_name),
			children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
		}), /* @__PURE__ */ jsxs(ContextMenuItem, {
			onSelect: () => void copyResourceAsJson(() => index, { fallback: index }),
			children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
		})] })] }), canWrite ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
			onSelect: () => openDialogAfterOverlayCloses(() => onDelete(index.index_name)),
			children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
		})] }) : null]
	})] });
}
var MYSQL_INDEXES_GRID_MIN_WIDTH_PX = 1010;
function isTruthyFlag(value) {
	return value === true || value === "true" || value === "t";
}
function getMysqlIndexDisplayType(index) {
	if (isMysqlPrimaryIndex(index)) return "primary";
	if (isTruthyFlag(index.is_unique)) return "unique";
	return "key";
}
function MysqlTableIndexesPanel({ databaseId, tableId, search = "", createDialogOpen: createDialogOpenProp, onCreateDialogOpenChange }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { schema } = parseMysqlTableId(tableId);
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { indexes, isLoading, refetch } = useMysqlTableIndexes(projectId, databaseId, tableId);
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const [internalDialogOpen, setInternalDialogOpen] = useState(false);
	const dialogOpen = (createDialogOpenProp ?? false) || internalDialogOpen;
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [indexToDelete, setIndexToDelete] = useState(null);
	const setDialogOpen = (open) => {
		setInternalDialogOpen(open);
		onCreateDialogOpenChange?.(open);
	};
	const openDeleteDialog = (indexName) => {
		openDialogAfterOverlayCloses(() => {
			setIndexToDelete(indexName);
			setDeleteDialogOpen(true);
		});
	};
	const handleDelete = async () => {
		if (!indexToDelete) return;
		const name = indexToDelete;
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
			setIndexToDelete(null);
		});
		try {
			await executeSql.mutateAsync(buildMysqlDropIndexSql(tableId, name));
			toast.success(t("Index deleted"));
			await refetch();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete index"));
		}
	};
	const filteredIndexes = useMemo(() => {
		return indexes.filter((index) => {
			const indexType = getMysqlIndexDisplayType(index);
			const indexColumns = parseMysqlIndexColumnsFromDefinition(index.index_definition).join(" ");
			const includeColumns = index.index_include ?? parseMysqlIndexIncludeColumns(index.index_definition).join(", ");
			return matchesMysqlLocalSearch(search, index.index_name, indexType, indexColumns, index.index_definition, index.index_algorithm, index.index_condition, includeColumns, index.index_comment);
		});
	}, [indexes, search]);
	const hasSearch = search.trim().length > 0;
	if (isLoading && indexes.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading indexes…")
		})
	});
	if (hasSearch && filteredIndexes.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[15px] font-medium text-foreground",
			children: t("No indexes match your search")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 max-w-sm text-[13px] text-muted-foreground",
			children: t("Try adjusting or clearing your search.")
		})]
	});
	if (indexes.length === 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[15px] font-medium text-foreground",
				children: t("No indexes")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 max-w-sm text-[13px] text-muted-foreground",
				children: t("Create an index to improve query performance on this table.")
			}),
			canWrite ? /* @__PURE__ */ jsx(Button, {
				size: "sm",
				className: "mt-4 h-9",
				onClick: () => setDialogOpen(true),
				children: t("Create index")
			}) : null
		]
	}), /* @__PURE__ */ jsx(MysqlTableIndexDrawer, {
		open: dialogOpen,
		onOpenChange: setDialogOpen,
		projectId,
		databaseId,
		tableId,
		onSuccess: () => void refetch()
	})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "flex h-full flex-col relative",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto overscroll-contain",
				children: /* @__PURE__ */ jsx("div", {
					className: SPREADSHEET_SCROLL_LAYER_CLASS,
					style: { minWidth: MYSQL_INDEXES_GRID_MIN_WIDTH_PX },
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full border-collapse",
						children: [/* @__PURE__ */ jsx("thead", {
							className: MYSQL_STICKY_THEAD_CLASS,
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[200px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Key")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[100px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Algorithm")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[90px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Unique")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[180px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Columns")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[140px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Condition")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[120px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Include")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[140px] px-3 py-2 text-start", MYSQL_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Comment")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									"aria-hidden": true,
									className: SPREADSHEET_FILLER_HEADER_CLASS
								}),
								/* @__PURE__ */ jsx("th", {
									className: MYSQL_STICKY_ACTIONS_HEADER_CLASS,
									style: MYSQL_ACTIONS_COL_STYLE
								})
							] })
						}), /* @__PURE__ */ jsx("tbody", { children: filteredIndexes.map((index) => {
							const isPrimary = getMysqlIndexDisplayType(index) === "primary";
							const indexColumns = parseMysqlIndexColumnsFromDefinition(index.index_definition);
							const includeColumns = index.index_include ?? parseMysqlIndexIncludeColumns(index.index_definition).join(", ");
							const condition = index.index_condition?.trim() ?? "";
							const comment = index.index_comment?.trim() ?? "";
							const isUnique = isTruthyFlag(index.is_unique) || isMysqlPrimaryIndex(index);
							return /* @__PURE__ */ jsx(MysqlIndexContextMenu, {
								index,
								canWrite: canWrite && !isPrimary,
								onDelete: openDeleteDialog,
								children: /* @__PURE__ */ jsxs("tr", {
									className: cn("group transition-colors hover:bg-muted/50", isPrimary && "bg-muted/30"),
									children: [
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
													/* @__PURE__ */ jsx("code", {
														className: cn("font-mono text-[12px]", isPrimary ? "text-muted-foreground" : "text-foreground"),
														children: index.index_name
													}),
													isPrimary ? /* @__PURE__ */ jsx(Badge, {
														variant: "info",
														className: "text-[10px] shrink-0",
														children: t("Primary key")
													}) : null
												]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx(Badge, {
												variant: "outline",
												className: "text-[11px] font-medium",
												children: localizeMysqlIndexAlgorithmLabel(index.index_algorithm, t)
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-foreground",
												children: isUnique ? "TRUE" : "FALSE"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-wrap gap-2",
												children: indexColumns.length > 0 ? indexColumns.map((columnName) => /* @__PURE__ */ jsx("code", {
													className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground",
													children: columnName
												}, columnName)) : /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground",
													children: "-"
												})
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: condition ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("code", {
													className: "block max-w-[220px] truncate font-mono text-[11px] text-foreground",
													children: formatMysqlIndexMetadataPreview(condition, 40)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "font-mono text-[11px] break-all",
													children: condition
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: includeColumns ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("code", {
													className: "block max-w-[180px] truncate font-mono text-[11px] text-foreground",
													children: formatMysqlIndexMetadataPreview(includeColumns, 32)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "font-mono text-[11px] break-all",
													children: includeColumns
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", MYSQL_BODY_CELL_BORDER_CLASS),
											children: comment ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block max-w-[220px] truncate text-[12px] text-foreground",
													children: formatMysqlIndexMetadataPreview(comment, 40)
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-sm",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[12px] break-words",
													children: comment
												})
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											"aria-hidden": true,
											className: SPREADSHEET_FILLER_CELL_CLASS
										}),
										/* @__PURE__ */ jsx("td", {
											className: mysqlStickyActionsCellClass({ mutedRow: isPrimary }),
											style: MYSQL_ACTIONS_COL_STYLE,
											children: /* @__PURE__ */ jsx("div", {
												className: "flex h-full items-center justify-center py-1.5",
												style: MYSQL_ACTIONS_COL_STYLE,
												children: canWrite && !isPrimary ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
												}), /* @__PURE__ */ jsx(DropdownMenuContent, {
													align: "end",
													children: /* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => openDeleteDialog(index.index_name),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Trash2,
															children: t("Delete")
														})
													})
												})] }) : null
											})
										})
									]
								})
							}, index.index_name);
						}) })]
					})
				})
			})
		}),
		/* @__PURE__ */ jsx(MysqlTableIndexDrawer, {
			open: dialogOpen,
			onOpenChange: setDialogOpen,
			projectId,
			databaseId,
			tableId,
			onSuccess: () => void refetch()
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete index") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							"Are you sure you want to delete",
							" ",
							/* @__PURE__ */ jsx("strong", { children: indexToDelete }),
							"? This action cannot be undone."
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setDeleteDialogOpen(false),
						disabled: executeSql.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: () => void handleDelete(),
						disabled: executeSql.isPending,
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function MysqlTablePropertiesPanel({ databaseId, tableId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { schema, table } = parseMysqlTableId(tableId);
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { tableInfo, isLoading, refetch } = useMysqlTableInfo(projectId, databaseId, tableId);
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const [tableName, setTableName] = useState(table);
	const [comment, setComment] = useState("");
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const savedComment = tableInfo?.table_comment ?? "";
	const isCommentUnchanged = comment === savedComment;
	const isNameUnchanged = !tableName.trim() || tableName.trim() === table;
	useEffect(() => {
		setTableName(table);
	}, [table]);
	useEffect(() => {
		setComment(tableInfo?.table_comment ?? "");
	}, [tableId, tableInfo?.table_comment]);
	const handleUpdateName = async () => {
		const trimmed = tableName.trim();
		if (!trimmed || trimmed === table) return;
		try {
			await executeSql.mutateAsync(buildMysqlRenameTableSql(tableId, trimmed));
			toast.success(t("Table renamed"));
			const nextTableId = mysqlTableId(schema, trimmed);
			navigate({
				...mysqlNav({
					projectId,
					databaseId
				}).table({ tableId: nextTableId }).settings(),
				replace: true
			});
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to rename table"));
		}
	};
	const handleUpdateComment = async () => {
		if (comment === savedComment) return;
		try {
			await executeSql.mutateAsync(buildMysqlTableCommentSql(tableId, comment));
			toast.success(t("Comment updated"));
			await refetch();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to update comment"));
		}
	};
	const handleDelete = async () => {
		try {
			await executeSql.mutateAsync(buildMysqlDropTableSql(tableId));
			toast.success(t("Table deleted"));
			setDeleteDialogOpen(false);
			navigate({
				...mysqlNav({
					projectId,
					databaseId
				}).sql(),
				replace: true
			});
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete table"));
		}
	};
	const estimatedRows = tableInfo?.estimated_rows;
	const rowEstimate = estimatedRows != null && estimatedRows !== "" ? Number.parseInt(String(estimatedRows), 10).toLocaleString() : "-";
	return /* @__PURE__ */ jsx("div", {
		className: "w-full flex-1 overflow-y-auto px-4 py-4 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Table properties")
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: [
									"Overview of this table in the ",
									schema,
									" schema."
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Schema")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[13px]",
									children: schema
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Type")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[13px]",
									children: isLoading ? "Loading…" : tableInfo?.table_type ?? "-"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Estimated rows")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[13px]",
									children: isLoading ? "Loading…" : rowEstimate
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Total size")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[13px]",
									children: isLoading ? "Loading…" : formatMysqlBytes(tableInfo?.total_bytes)
								})] })
							]
						})
					]
				}),
				canWrite ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Rename table")
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: [
										"Change the table name within the ",
										schema,
										" schema."
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 space-y-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "mysql-table-name",
										children: t("Table name")
									}), /* @__PURE__ */ jsx(Input, {
										id: "mysql-table-name",
										value: tableName,
										onChange: (event) => setTableName(event.target.value),
										className: "h-9 text-[13px]"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30",
								children: /* @__PURE__ */ jsx(Button, {
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: executeSql.isPending || isNameUnchanged,
									onClick: () => void handleUpdateName(),
									children: t("Update")
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Comment")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("Add a description for this table.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx(Textarea, {
									value: comment,
									onChange: (event) => setComment(event.target.value),
									rows: 3,
									className: "text-[13px] resize-none",
									placeholder: t("Optional table comment")
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30",
								children: /* @__PURE__ */ jsx(Button, {
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: executeSql.isPending || isCommentUnchanged,
									onClick: () => void handleUpdateComment(),
									children: t("Update")
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Delete table")
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: [
										"Permanently delete ",
										schema,
										".",
										table,
										" and all of its data. This action cannot be undone."
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 bg-muted/30",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => setDeleteDialogOpen(true),
									children: t("Delete table")
								})
							})
						]
					})
				] }) : null,
				/* @__PURE__ */ jsx(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete table") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									"Are you sure you want to delete",
									" ",
									/* @__PURE__ */ jsxs("strong", { children: [
										schema,
										".",
										table
									] }),
									"? All rows and data will be permanently removed. This action cannot be undone."
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: executeSql.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => void handleDelete(),
								disabled: executeSql.isPending,
								children: t("Delete")
							})]
						})]
					})
				})
			]
		})
	});
}
function TableStructureContent({ databaseId, tableId, activeTab }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite, writeTooltip } = useDatabaseTableOperationsAccess();
	const { refetch: refetchColumns, isFetching: columnsFetching } = useMysqlTableColumns(projectId, databaseId, tableId);
	const { refetch: refetchIndexes, isFetching: indexesFetching } = useMysqlTableIndexes(projectId, databaseId, tableId);
	const [columnCreateOpen, setColumnCreateOpen] = useState(false);
	const [indexCreateOpen, setIndexCreateOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	useEffect(() => {
		setSearchValue("");
	}, [activeTab, tableId]);
	useMysqlTableHeaderSlot(useMemo(() => {
		const searchProps = activeTab === "columns" || activeTab === "indexes" ? {
			searchPlaceholder: activeTab === "columns" ? t("Search columns...") : t("Search indexes..."),
			searchValue,
			onSearchChange: setSearchValue
		} : {};
		if (activeTab === "columns") return {
			...searchProps,
			createLabel: canWrite ? t("Add column") : void 0,
			onCreate: canWrite ? () => setColumnCreateOpen(true) : void 0,
			createDisabled: !canWrite,
			createDisabledTooltip: writeTooltip,
			showRefresh: true,
			onRefresh: () => void refetchColumns(),
			isRefreshing: columnsFetching
		};
		if (activeTab === "indexes") return {
			...searchProps,
			createLabel: canWrite ? t("Create index") : void 0,
			onCreate: canWrite ? () => setIndexCreateOpen(true) : void 0,
			createDisabled: !canWrite,
			createDisabledTooltip: writeTooltip,
			showRefresh: true,
			onRefresh: () => void refetchIndexes(),
			isRefreshing: indexesFetching
		};
		return {};
	}, [
		activeTab,
		canWrite,
		writeTooltip,
		columnsFetching,
		indexesFetching,
		refetchColumns,
		refetchIndexes,
		searchValue,
		t
	]));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden",
		children: [
			activeTab === "columns" ? /* @__PURE__ */ jsx(MysqlTableColumnsPanel, {
				databaseId,
				tableId,
				search: searchValue,
				createDialogOpen: columnCreateOpen,
				onCreateDialogOpenChange: setColumnCreateOpen
			}) : null,
			activeTab === "indexes" ? /* @__PURE__ */ jsx(MysqlTableIndexesPanel, {
				databaseId,
				tableId,
				search: searchValue,
				createDialogOpen: indexCreateOpen,
				onCreateDialogOpenChange: setIndexCreateOpen
			}) : null,
			activeTab === "settings" ? /* @__PURE__ */ jsx(MysqlTablePropertiesPanel, {
				databaseId,
				tableId
			}) : null
		]
	});
}
export { TableStructureContent as t };
