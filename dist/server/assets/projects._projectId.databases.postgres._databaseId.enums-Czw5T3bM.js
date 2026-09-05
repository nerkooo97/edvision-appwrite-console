import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { C_ as createPostgresEnumFormStateFromRow, Cg as usePostgresSchemaEnums, D_ as validatePostgresEnumUpdateForm, E_ as validatePostgresEnumCreateForm, O_ as buildPostgresCreateEnumSql, S_ as createEnumValueEntry, T_ as normalizePostgresEnumFormValues, b_ as buildPostgresEnumUpdateStatements, k_ as buildPostgresDropEnumSql, pg as useExecutePostgresSql, w_ as isPostgresEnumValueEntryNew, x_ as createDefaultPostgresEnumFormState } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import { J as isPostgresEnumUsedInSchema, R as buildPostgresSingleRequestDdlSql } from "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./horizontal-resize-BcegzCwH.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./postgres-tab-route-loader-B--X8VvC.js";
import { t as Route$1 } from "./projects._projectId.databases.postgres._databaseId.enums-BilXFXBO.js";
import { a as useDatabaseTableOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as SPREADSHEET_FILLER_HEADER_CLASS, r as SPREADSHEET_SCROLL_LAYER_CLASS, t as SPREADSHEET_FILLER_CELL_CLASS } from "./spreadsheet-sticky-CpUihTZG.js";
import { n as sortableAxisTransform, t as getAxisRestrictedDragModifiers } from "./dnd-modifiers-CiFEVwzL.js";
import { i as usePostgresSidebar } from "./PostgresSidebarContext-CiaD4ogj.js";
import { n as usePostgresDatabaseHeaderSlot } from "./PostgresDatabaseHeaderSlotContext-CXBY4Myx.js";
import { _ as matchesPostgresLocalSearch, a as POSTGRES_HEADER_CELL_BORDER_CLASS, d as POSTGRES_STICKY_THEAD_CLASS, m as getPostgresEnumValueBadgeClass, n as POSTGRES_ACTIONS_COL_STYLE, r as POSTGRES_BODY_CELL_BORDER_CLASS, t as POSTGRES_ACTIONS_COL_PX, u as POSTGRES_STICKY_ACTIONS_HEADER_CLASS, y as postgresStickyActionsCellClass } from "./postgres-spreadsheet-chrome-BSNXJzGv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Copy, FileJson, GripVertical, ListOrdered, Pencil, Plus, Trash2, X } from "lucide-react";
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
var enumValueDragModifiers = getAxisRestrictedDragModifiers("vertical");
var rowIconButtonClass = "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground";
function SortableEnumValueRow({ entry, canRemove, autoFocus = false, onAutoFocused, onValueChange, onRemove }) {
	const t = useT();
	const inputRef = useRef(null);
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
		id: entry.id,
		animateLayoutChanges: () => false,
		transition: null
	});
	useLayoutEffect(() => {
		if (!autoFocus) return;
		inputRef.current?.focus();
		onAutoFocused?.();
	}, [autoFocus, onAutoFocused]);
	const style = isDragging ? void 0 : {
		transform: sortableAxisTransform(transform, "vertical"),
		transition
	};
	const removeControl = /* @__PURE__ */ jsx("button", {
		type: "button",
		disabled: !canRemove,
		onClick: onRemove,
		className: cn(rowIconButtonClass, !canRemove && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-muted-foreground"),
		"aria-label": t("Remove value"),
		children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
	});
	return /* @__PURE__ */ jsxs("div", {
		ref: setNodeRef,
		style,
		className: cn("group flex h-10 items-center gap-1 px-1.5", isDragging && "opacity-0"),
		children: [
			/* @__PURE__ */ jsx("button", {
				ref: setActivatorNodeRef,
				type: "button",
				className: cn(rowIconButtonClass, "cursor-grab touch-none active:cursor-grabbing"),
				"aria-label": t("Drag to reorder value"),
				...attributes,
				...listeners,
				children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ jsx("input", {
				ref: inputRef,
				value: entry.value,
				onChange: (event) => onValueChange(event.target.value),
				placeholder: t("Value"),
				className: "h-8 min-w-0 flex-1 rounded-md border-0 bg-transparent px-2 font-mono text-[13px] shadow-none outline-none focus-visible:border-transparent focus-visible:ring-0 placeholder:text-muted-foreground",
				autoComplete: "off",
				spellCheck: false
			}),
			canRemove ? removeControl : /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("span", {
					className: "inline-flex shrink-0",
					children: removeControl
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-xs text-[12px]",
				children: t("Existing enum values cannot be removed from PostgreSQL.")
			})] })
		]
	});
}
function EnumValueRowPreview({ entry }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-10 items-center gap-1 overflow-hidden rounded-lg border border-border bg-background px-1.5 shadow-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn(rowIconButtonClass, "pointer-events-none"),
			children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex h-8 min-w-[12rem] flex-1 items-center px-2",
			children: /* @__PURE__ */ jsx("span", {
				className: "truncate font-mono text-[13px] text-foreground",
				children: entry.value.trim() || "…"
			})
		})]
	});
}
function PostgresEnumValuesEditor({ entries, onChange, mode }) {
	const t = useT();
	const [activeId, setActiveId] = useState(null);
	const [focusEntryId, setFocusEntryId] = useState(null);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
	const sortableIds = useMemo(() => entries.map((entry) => entry.id), [entries]);
	const activeEntry = useMemo(() => entries.find((entry) => entry.id === activeId) ?? null, [activeId, entries]);
	const handleDragStart = (event) => {
		setActiveId(String(event.active.id));
	};
	const handleDragEnd = (event) => {
		setActiveId(null);
		const { active, over } = event;
		if (!over || active.id === over.id) return;
		const oldIndex = entries.findIndex((entry) => entry.id === active.id);
		const newIndex = entries.findIndex((entry) => entry.id === over.id);
		if (oldIndex === -1 || newIndex === -1) return;
		onChange(arrayMove(entries, oldIndex, newIndex));
	};
	const handleDragCancel = () => {
		setActiveId(null);
	};
	const handleAddValue = () => {
		const newEntry = createEnumValueEntry();
		setFocusEntryId(newEntry.id);
		onChange([...entries, newEntry]);
	};
	const handleAutoFocused = useCallback(() => {
		setFocusEntryId(null);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ jsxs(DndContext, {
				sensors,
				collisionDetection: closestCenter,
				modifiers: enumValueDragModifiers,
				onDragStart: handleDragStart,
				onDragEnd: handleDragEnd,
				onDragCancel: handleDragCancel,
				children: [/* @__PURE__ */ jsx(SortableContext, {
					items: sortableIds,
					strategy: verticalListSortingStrategy,
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-lg border border-border bg-card divide-y divide-border",
						children: entries.map((entry) => /* @__PURE__ */ jsx(SortableEnumValueRow, {
							entry,
							autoFocus: focusEntryId === entry.id,
							onAutoFocused: handleAutoFocused,
							canRemove: mode === "create" ? entries.length > 1 : isPostgresEnumValueEntryNew(entry),
							onValueChange: (value) => onChange(entries.map((current) => current.id === entry.id ? {
								...current,
								value
							} : current)),
							onRemove: () => onChange(entries.filter((current) => current.id !== entry.id))
						}, entry.id))
					})
				}), /* @__PURE__ */ jsx(DragOverlay, {
					dropAnimation: null,
					children: activeEntry ? /* @__PURE__ */ jsx(EnumValueRowPreview, { entry: activeEntry }) : null
				})]
			}),
			/* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 text-[12px]",
				onClick: handleAddValue,
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add value")]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: mode === "create" ? t("Drag values to set their sort order in the enum type.") : t("Rename existing values inline, add new rows, and drag to choose where new values are inserted.")
			})
		]
	});
}
function EnumFormSection({ title, description, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-muted/20 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-4 py-3",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-semibold text-foreground",
				children: title
			}), description ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[11px] text-muted-foreground",
				children: description
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-4 py-4",
			children
		})]
	});
}
function PostgresSchemaEnumDrawer({ open, onOpenChange, projectId, databaseId, schema, enumRow = null, onSuccess }) {
	const t = useT();
	const isEdit = enumRow != null;
	const executeSql = useExecutePostgresSql(projectId, databaseId);
	const [formState, setFormState] = useState(createDefaultPostgresEnumFormState());
	useEffect(() => {
		if (!open) return;
		setFormState(enumRow ? createPostgresEnumFormStateFromRow(enumRow) : createDefaultPostgresEnumFormState());
	}, [open, enumRow]);
	const handleSubmit = async () => {
		if (isEdit && enumRow) {
			const validationError$1 = validatePostgresEnumUpdateForm({
				state: formState,
				original: enumRow
			});
			if (validationError$1) {
				toast.error(t(validationError$1));
				return;
			}
			const statements = buildPostgresEnumUpdateStatements(schema, enumRow, formState);
			try {
				await executeSql.mutateAsync(buildPostgresSingleRequestDdlSql(statements, "Update enum type"));
				toast.success(t("Enum updated"));
				onOpenChange(false);
				onSuccess();
			} catch (error) {
				toast.error(getErrorMessage(error) ?? t("Failed to update enum"));
			}
			return;
		}
		const validationError = validatePostgresEnumCreateForm(formState);
		if (validationError) {
			toast.error(t(validationError));
			return;
		}
		const trimmedName = formState.name.trim();
		const values = normalizePostgresEnumFormValues(formState.entries);
		try {
			await executeSql.mutateAsync(buildPostgresCreateEnumSql(schema, trimmedName, values, { comment: formState.comment.trim() || void 0 }));
			toast.success(t("Enum created"));
			onOpenChange(false);
			onSuccess();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to create enum"));
		}
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: isEdit ? t("Update enum") : t("Create enum"),
		description: isEdit ? t("Update the enum name, values, and description for this schema.") : t("Define a named list of allowed values for columns in this schema."),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 space-y-4 overflow-y-auto px-6 pb-4 pt-4",
				children: [/* @__PURE__ */ jsx(EnumFormSection, {
					title: t("General"),
					description: t("Basic details for this enum type."),
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs(Label, {
								htmlFor: "enum-name",
								className: "text-[12px] font-medium",
								children: [
									t("Name"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}), /* @__PURE__ */ jsx(Input, {
								id: "enum-name",
								value: formState.name,
								onChange: (event) => setFormState((current) => ({
									...current,
									name: event.target.value
								})),
								placeholder: t("e.g. status"),
								className: "h-9 font-mono text-[13px]",
								autoComplete: "off"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "enum-comment",
								className: "text-[12px] font-medium",
								children: t("Description")
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "enum-comment",
								value: formState.comment,
								onChange: (event) => setFormState((current) => ({
									...current,
									comment: event.target.value
								})),
								placeholder: t("Describe what this enum represents"),
								className: "min-h-[72px] resize-y text-[13px]"
							})]
						})]
					})
				}), /* @__PURE__ */ jsx(EnumFormSection, {
					title: t("Values"),
					description: isEdit ? t("Existing values can be renamed. New values can be added and positioned.") : t("Add every allowed value and drag to set the sort order."),
					children: /* @__PURE__ */ jsx(PostgresEnumValuesEditor, {
						entries: formState.entries,
						onChange: (entries) => setFormState((current) => ({
							...current,
							entries
						})),
						mode: isEdit ? "update" : "create"
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: executeSql.isPending,
					children: isEdit ? t("Update") : t("Create")
				})]
			})]
		})] })
	});
}
function PostgresEnumContextMenu({ enumRow, canWrite = true, onUpdate, onDelete, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			canWrite ? /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(enumRow)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}) : null,
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => copyToClipboard("Name", enumRow.enum_name),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
			}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => void copyResourceAsJson(() => enumRow, { fallback: enumRow }),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
			})] })] }),
			canWrite ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(enumRow.enum_name)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})] }) : null
		]
	})] });
}
var POSTGRES_ENUMS_GRID_MIN_WIDTH_PX = 820;
function PostgresSchemaEnumsPanel({ databaseId, schema, search = "", createDialogOpen: createDialogOpenProp, onCreateDialogOpenChange }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { enums, isLoading, refetch } = usePostgresSchemaEnums(projectId, databaseId, schema);
	const executeSql = useExecutePostgresSql(projectId, databaseId);
	const [internalDialogOpen, setInternalDialogOpen] = useState(false);
	const dialogOpen = (createDialogOpenProp ?? false) || internalDialogOpen;
	const [selectedEnum, setSelectedEnum] = useState(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [enumToDelete, setEnumToDelete] = useState(null);
	useEffect(() => {
		if (createDialogOpenProp) setSelectedEnum(null);
	}, [createDialogOpenProp]);
	const closeDialog = () => {
		setInternalDialogOpen(false);
		onCreateDialogOpenChange?.(false);
		setSelectedEnum(null);
	};
	const handleEdit = (enumRow) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedEnum(enumRow);
			setInternalDialogOpen(true);
		});
	};
	const openDeleteDialog = (enumName) => {
		openDialogAfterOverlayCloses(() => {
			setEnumToDelete(enumName);
			setDeleteDialogOpen(true);
		});
	};
	const handleDelete = async () => {
		if (!enumToDelete) return;
		const name = enumToDelete;
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
			setEnumToDelete(null);
		});
		try {
			await executeSql.mutateAsync(buildPostgresDropEnumSql(schema, name));
			toast.success(t("Enum deleted"));
			await refetch();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete enum"));
		}
	};
	const filteredEnums = useMemo(() => {
		return enums.filter((enumRow) => matchesPostgresLocalSearch(search, enumRow.enum_name, enumRow.values.join(" "), enumRow.enum_comment));
	}, [enums, search]);
	const hasSearch = search.trim().length > 0;
	if (isLoading && enums.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading enums…")
		})
	});
	if (hasSearch && filteredEnums.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 w-full items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: ListOrdered,
				iconSize: "md",
				title: t("No enums match your search"),
				description: t("Try adjusting or clearing your search."),
				hasFilters: true,
				className: "w-full"
			})
		})
	});
	if (enums.length === 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 w-full items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: ListOrdered,
				iconSize: "md",
				title: t("No enums"),
				description: canWrite ? t("Use Create enum in the header to define your first enum type for this schema.") : t("This schema has no enum types yet."),
				isEmpty: true,
				className: "w-full"
			})
		})
	}), /* @__PURE__ */ jsx(PostgresSchemaEnumDrawer, {
		open: dialogOpen,
		onOpenChange: (open) => {
			if (!open) closeDialog();
		},
		projectId,
		databaseId,
		schema,
		enumRow: selectedEnum,
		onSuccess: () => void refetch()
	})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "relative flex h-full flex-col",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto overscroll-contain",
				children: /* @__PURE__ */ jsx("div", {
					className: SPREADSHEET_SCROLL_LAYER_CLASS,
					style: { minWidth: POSTGRES_ENUMS_GRID_MIN_WIDTH_PX },
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full border-collapse",
						children: [/* @__PURE__ */ jsx("thead", {
							className: POSTGRES_STICKY_THEAD_CLASS,
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[200px] px-3 py-2 text-start", POSTGRES_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Name")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[280px] px-3 py-2 text-start", POSTGRES_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Values")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[120px] px-3 py-2 text-start", POSTGRES_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("In use")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: cn("min-w-[180px] px-3 py-2 text-start", POSTGRES_HEADER_CELL_BORDER_CLASS),
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-foreground",
										children: t("Description")
									})
								}),
								/* @__PURE__ */ jsx("th", {
									"aria-hidden": true,
									className: SPREADSHEET_FILLER_HEADER_CLASS
								}),
								/* @__PURE__ */ jsx("th", {
									className: POSTGRES_STICKY_ACTIONS_HEADER_CLASS,
									style: POSTGRES_ACTIONS_COL_STYLE
								})
							] })
						}), /* @__PURE__ */ jsx("tbody", { children: filteredEnums.map((enumRow) => {
							const usedInSchema = isPostgresEnumUsedInSchema(enumRow);
							const comment = enumRow.enum_comment?.trim() ?? "";
							return /* @__PURE__ */ jsx(PostgresEnumContextMenu, {
								enumRow,
								canWrite,
								onUpdate: handleEdit,
								onDelete: openDeleteDialog,
								children: /* @__PURE__ */ jsxs("tr", {
									className: "group transition-colors hover:bg-muted/50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", POSTGRES_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(ListOrdered, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("code", {
													className: "font-mono text-[12px] text-foreground",
													children: enumRow.enum_name
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", POSTGRES_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-wrap gap-1.5",
												children: enumRow.values.map((value, valueIndex) => /* @__PURE__ */ jsx(Badge, {
													variant: "outline",
													className: cn("text-[11px] font-medium border", getPostgresEnumValueBadgeClass()),
													children: value
												}, `${enumRow.enum_name}-${valueIndex}-${value}`))
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", POSTGRES_BODY_CELL_BORDER_CLASS),
											children: usedInSchema ? /* @__PURE__ */ jsx(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: t("In use")
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: t("Not used")
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: cn("px-3 py-2", POSTGRES_BODY_CELL_BORDER_CLASS),
											children: /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: comment || t("No description")
											})
										}),
										/* @__PURE__ */ jsx("td", {
											"aria-hidden": true,
											className: SPREADSHEET_FILLER_CELL_CLASS
										}),
										/* @__PURE__ */ jsx("td", {
											className: postgresStickyActionsCellClass(),
											style: POSTGRES_ACTIONS_COL_STYLE,
											children: /* @__PURE__ */ jsx("div", {
												className: "flex h-full items-center justify-center py-1.5",
												style: POSTGRES_ACTIONS_COL_STYLE,
												children: canWrite ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
												}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
													align: "end",
													children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => handleEdit(enumRow),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Pencil,
															children: t("Update")
														})
													}), /* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => openDeleteDialog(enumRow.enum_name),
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Trash2,
															children: t("Delete")
														})
													})]
												})] }) : null
											})
										})
									]
								})
							}, enumRow.enum_name);
						}) })]
					})
				})
			})
		}),
		/* @__PURE__ */ jsx(PostgresSchemaEnumDrawer, {
			open: dialogOpen,
			onOpenChange: (open) => {
				if (!open) closeDialog();
			},
			projectId,
			databaseId,
			schema,
			enumRow: selectedEnum,
			onSuccess: () => void refetch()
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete enum") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Delete"),
							" \"",
							enumToDelete,
							"\"?",
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => {
							setDeleteDialogOpen(false);
							setEnumToDelete(null);
						},
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
function PostgresSchemaEnums({ databaseId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { selectedSchema } = usePostgresSidebar();
	const { canWrite, writeTooltip } = useDatabaseTableOperationsAccess();
	const [searchValue, setSearchValue] = useState("");
	const [createOpen, setCreateOpen] = useState(false);
	const { refetch, isFetching } = usePostgresSchemaEnums(projectId, databaseId, selectedSchema);
	useEffect(() => {
		setSearchValue("");
	}, [selectedSchema]);
	usePostgresDatabaseHeaderSlot(useMemo(() => {
		if (!selectedSchema) return {};
		return {
			searchPlaceholder: t("Search enums..."),
			searchValue,
			onSearchChange: setSearchValue,
			createLabel: canWrite ? t("Create enum") : void 0,
			onCreate: canWrite ? () => setCreateOpen(true) : void 0,
			createDisabled: !canWrite,
			createDisabledTooltip: writeTooltip,
			showRefresh: true,
			onRefresh: () => void refetch(),
			isRefreshing: isFetching
		};
	}, [
		canWrite,
		isFetching,
		refetch,
		searchValue,
		selectedSchema,
		t,
		writeTooltip
	]));
	if (!selectedSchema) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 w-full items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: ListOrdered,
				iconSize: "md",
				title: t("No schema selected"),
				description: t("Select a schema in the sidebar to manage enum types."),
				isEmpty: true,
				className: "w-full"
			})
		})
	});
	return /* @__PURE__ */ jsx(PostgresSchemaEnumsPanel, {
		databaseId,
		schema: selectedSchema,
		search: searchValue,
		createDialogOpen: createOpen,
		onCreateDialogOpenChange: setCreateOpen
	});
}
function PostgresEnumsPage() {
	const { databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(PostgresSchemaEnums, { databaseId });
}
export { PostgresEnumsPage as component };
