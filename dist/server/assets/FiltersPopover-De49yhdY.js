import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { et as useSavedFilters } from "./auth-BPuxYQAc.js";
import { E as sizeFilterToBytes, T as bytesToSizeFilterInput, _t as buildFilterTagFromCompactKey, gt as buildFilterQueryString, it as findCompactFilterKeyInMap, nt as compactFilterKeysEqual, rt as encodeSort, ut as mapToQueryParam, vt as getOperatorsForColumn, w as SIZE_FILTER_UNITS, yt as getOperatorsForType } from "./form-field-type-badge-C7qMzJo0.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { b as canSaveTeamFilters } from "./console-access-checks-BTMEOKcL.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { i as serviceHeaderFiltersLabel, r as serviceHeaderFiltersButton } from "./service-header-container-CwwZ6im7.js";
import { t as ToolbarCountBadge } from "./ToolbarCountBadge-WR-HvODH.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, ChevronDown, Filter, GripVertical, Loader2, Pencil, Plus, Trash2, X } from "lucide-react";
var NAME_MAX = 64;
function SavedFilterPresetRow({ item, canEdit, dragOverKey, rowDropKey, onDragStart, onDragOver, onDragLeave, onDrop, onApply, onDelete, deleteBusy, deleteDisabled, onRenameCommit }) {
	const t = useT();
	const [editing, setEditing] = useState(false);
	const [draft, setDraft] = useState(item.name);
	const skipBlurCommitRef = useRef(false);
	const inputRef = useRef(null);
	useEffect(() => {
		if (!editing) setDraft(item.name);
	}, [item.name, editing]);
	const endEditing = useCallback(() => {
		setEditing(false);
	}, []);
	const commitFromDraft = useCallback(() => {
		const next = draft.trim();
		if (!next) {
			setDraft(item.name);
			endEditing();
			return;
		}
		if (next !== item.name) Promise.resolve(onRenameCommit(next)).catch(() => {});
		endEditing();
	}, [
		draft,
		item.name,
		onRenameCommit,
		endEditing
	]);
	const cancelEditing = useCallback(() => {
		skipBlurCommitRef.current = true;
		setDraft(item.name);
		endEditing();
	}, [item.name, endEditing]);
	const onInputBlur = useCallback(() => {
		if (skipBlurCommitRef.current) {
			skipBlurCommitRef.current = false;
			return;
		}
		commitFromDraft();
	}, [commitFromDraft]);
	const startEditing = useCallback(() => {
		setDraft(item.name);
		setEditing(true);
		requestAnimationFrame(() => {
			const el = inputRef.current;
			if (el) {
				el.focus();
				el.select();
			}
		});
	}, [item.name]);
	return /* @__PURE__ */ jsxs("div", {
		draggable: canEdit && !editing,
		onDragStart: canEdit && !editing ? onDragStart : void 0,
		onDragOver: (e) => {
			if (!canEdit || editing) return;
			onDragOver(e);
		},
		onDragLeave,
		onDrop: (e) => {
			e.preventDefault();
			if (canEdit) onDrop(e);
		},
		className: cn("group flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-2 py-1.5 transition-colors", editing ? "cursor-default" : canEdit && "cursor-grab active:cursor-grabbing", dragOverKey === rowDropKey && canEdit && !editing && "border-primary bg-primary/10"),
		"aria-label": editing ? void 0 : canEdit ? `${item.name}, ${t("drag to reorder")}` : item.name,
		children: [
			canEdit ? /* @__PURE__ */ jsx(GripVertical, {
				className: cn("h-3.5 w-3.5 shrink-0 text-muted-foreground transition-opacity", editing ? "opacity-0" : "opacity-0 group-hover:opacity-100"),
				"aria-hidden": true
			}) : /* @__PURE__ */ jsx("span", {
				className: "h-3.5 w-3.5 shrink-0",
				"aria-hidden": true
			}),
			editing ? /* @__PURE__ */ jsx(Input, {
				ref: inputRef,
				value: draft,
				onChange: (e) => setDraft(e.target.value.slice(0, NAME_MAX)),
				onBlur: onInputBlur,
				onKeyDown: (e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						skipBlurCommitRef.current = true;
						commitFromDraft();
					} else if (e.key === "Escape") {
						e.preventDefault();
						cancelEditing();
					}
				},
				className: "h-7 min-w-0 flex-1 text-[13px]",
				maxLength: NAME_MAX,
				"aria-label": t("Saved filter name"),
				onClick: (ev) => ev.stopPropagation()
			}) : /* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 truncate text-[13px] text-foreground",
				children: item.name
			}),
			canEdit && !editing ? /* @__PURE__ */ jsxs(Tooltip, {
				delayDuration: 300,
				children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
						"aria-label": t("Rename saved filter"),
						onClick: (e) => {
							e.stopPropagation();
							startEditing();
						},
						children: /* @__PURE__ */ jsx(Pencil, { className: "h-3.5 w-3.5" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					sideOffset: 4,
					className: "z-[250]",
					children: t("Rename")
				})]
			}) : editing ? /* @__PURE__ */ jsx("span", {
				className: "w-7 shrink-0",
				"aria-hidden": true
			}) : null,
			/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "secondary",
				size: "sm",
				className: "h-7 shrink-0 text-[12px]",
				onClick: (e) => {
					e.stopPropagation();
					if (editing) {
						skipBlurCommitRef.current = true;
						commitFromDraft();
					}
					onApply();
				},
				children: t("Apply")
			}),
			canEdit ? /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onDelete();
				},
				disabled: deleteDisabled,
				className: "shrink-0 cursor-pointer rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50",
				"aria-label": t("Delete saved filter"),
				children: deleteBusy ? /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" })
			}) : null
		]
	});
}
function reorderList(list, fromIndex, toIndex) {
	const copy = [...list];
	const [removed] = copy.splice(fromIndex, 1);
	copy.splice(toIndex, 0, removed);
	return copy;
}
var SECTION_DIVIDE = "border-muted-foreground/6 dark:border-muted-foreground/9";
var SEGMENT_DIVIDE = "border-s border-muted-foreground/7 dark:border-muted-foreground/10";
var K1024 = 1024;
function inferCustomAttributeType(key) {
	const { v, o } = key;
	if (o === "between" || o === "notBetween") {
		const parts = (v == null ? "" : Array.isArray(v) ? v.join(",") : String(v)).split(",").map((p) => p.trim()).filter(Boolean);
		if (parts.length >= 2) {
			const n0 = Number(parts[0]);
			const n1 = Number(parts[1]);
			if (!Number.isNaN(n0) && !Number.isNaN(n1) && Number.isInteger(n0) && Number.isInteger(n1)) return "integer";
			if (!Number.isNaN(n0) && !Number.isNaN(n1)) return "double";
		}
	}
	if (typeof v === "boolean") return "boolean";
	if (typeof v === "number") return Number.isInteger(v) ? "integer" : "double";
	if (typeof v === "string") {
		if (/^\d{4}-\d{2}-\d{2}T/.test(v)) return "datetime";
		return "string";
	}
	return "string";
}
function FiltersPopoverContent({ columns, filterMap, onRemoveFilter, onClearAll, onApplyFilter, onClose, filterScope, onApplyQuery, teamId, sortBy, sortOrder, onSortChange, defaultSortParam, onReset }) {
	const t = useT();
	const sortEnabled = sortBy != null && sortOrder != null && !!onSortChange;
	const sortOptionsFromColumns = sortEnabled ? columns.filter((c) => !c.customAttributeSlot).map((c) => ({
		id: c.id,
		label: c.title
	})) : [];
	const { account } = useAuth();
	const { userSavedFilters, teamSavedFilters, savedFilters, addSavedFilter, deleteSavedFilter, reorderSavedFilters, updateSavedFilterName, isAdding, hasTeamLevel } = useSavedFilters(filterScope ?? null, account, teamId ?? null);
	const { access } = useOrganizationScopes(teamId ?? void 0);
	const { features } = useConsoleProfile();
	const canSaveTeamFiltersResult = !teamId || canSaveTeamFilters(access, features);
	const [saveName, setSaveName] = useState("");
	const [saveLevel, setSaveLevel] = useState("user");
	const [savingId, setSavingId] = useState(null);
	const [deletingId, setDeletingId] = useState(null);
	const [dragOverKey, setDragOverKey] = useState(null);
	const firstColumnId = columns[0]?.id ?? "";
	const firstCol = columns[0];
	const firstOperatorKey = firstColumnId ? getOperatorsForColumn(firstCol)[0]?.key ?? "" : "";
	const [filterColumnId, setFilterColumnId] = useState(() => firstColumnId);
	const [filterOperatorKey, setFilterOperatorKey] = useState(() => firstOperatorKey);
	const [filterValue, setFilterValue] = useState("");
	const [filterValueEnd, setFilterValueEnd] = useState("");
	const [filterSizeUnit, setFilterSizeUnit] = useState("mb");
	const [customDocumentAttrKey, setCustomDocumentAttrKey] = useState("");
	const [customDocumentAttrType, setCustomDocumentAttrType] = useState("string");
	const [editingReplaceKey, setEditingReplaceKey] = useState(null);
	const [listSortOpen, setListSortOpen] = useState(false);
	const resetFormToDefaults = useCallback(() => {
		const first = columns[0];
		if (first) {
			setFilterColumnId(first.id);
			setFilterOperatorKey(getOperatorsForColumn(first)[0]?.key ?? "");
		}
		setFilterValue("");
		setFilterValueEnd("");
		setFilterSizeUnit("mb");
		setCustomDocumentAttrKey("");
		setCustomDocumentAttrType("string");
		setEditingReplaceKey(null);
	}, [columns]);
	useEffect(() => {
		if (columns.length > 0 && !filterColumnId) {
			const first = columns[0];
			const ops = getOperatorsForColumn(first);
			setFilterColumnId(first.id);
			setFilterOperatorKey(ops[0]?.key ?? "");
		}
	}, [columns, filterColumnId]);
	useEffect(() => {
		if (!columns.find((c) => c.id === filterColumnId)?.customAttributeSlot) return;
		const ops = getOperatorsForType(customDocumentAttrType, { fulltextSearchable: false });
		if (!ops.some((o) => o.key === filterOperatorKey)) setFilterOperatorKey(ops[0]?.key ?? "");
	}, [
		customDocumentAttrType,
		filterColumnId,
		filterOperatorKey,
		columns
	]);
	const loadFilterFormFromCompactKey = (key) => {
		let resolvedCol = columns.find((c) => c.id === key.c);
		let customKey = "";
		let customType = "string";
		if (!resolvedCol) {
			const slot = columns.find((c) => c.customAttributeSlot);
			if (slot) {
				resolvedCol = slot;
				customKey = key.c;
				customType = inferCustomAttributeType(key);
			} else resolvedCol = columns[0];
		}
		if (!resolvedCol) return;
		setFilterColumnId(resolvedCol.id);
		setFilterOperatorKey(key.o);
		setCustomDocumentAttrKey(customKey);
		setCustomDocumentAttrType(resolvedCol.customAttributeSlot ? customType : "string");
		const valueType = resolvedCol.customAttributeSlot ? customType : resolvedCol.type;
		if (getOperatorsForType(valueType, {
			fulltextSearchable: resolvedCol.customAttributeSlot ? false : !!resolvedCol.fulltextSearchable,
			enumOptional: valueType === "enum" ? resolvedCol.optional : void 0
		}).find((o) => o.key === key.o)?.noValue) {
			setFilterValue("");
			setFilterValueEnd("");
			return;
		}
		const isBetween = key.o === "between" || key.o === "notBetween";
		const rawV = key.v;
		if (isBetween) {
			const parts = (rawV == null ? "" : Array.isArray(rawV) ? rawV.join(",") : String(rawV)).split(",").map((s) => s.trim()).filter(Boolean);
			if (parts.length < 2) {
				setFilterValue("");
				setFilterValueEnd("");
				return;
			}
			if (resolvedCol.format === "size") {
				const numA = Number(parts[0]);
				const numB = Number(parts[1]);
				setFilterSizeUnit("mb");
				setFilterValue(!Number.isNaN(numA) ? String(numA / (K1024 * K1024)) : parts[0] ?? "");
				setFilterValueEnd(!Number.isNaN(numB) ? String(numB / (K1024 * K1024)) : parts[1] ?? "");
				return;
			}
			if (valueType === "datetime") {
				setFilterValue(parts[0] ?? "");
				setFilterValueEnd(parts[1] ?? "");
				return;
			}
			setFilterValue(parts[0] ?? "");
			setFilterValueEnd(parts[1] ?? "");
			return;
		}
		if (resolvedCol.format === "size" && typeof rawV === "number") {
			const { value, unit } = bytesToSizeFilterInput(rawV);
			setFilterValue(value);
			setFilterSizeUnit(unit);
			setFilterValueEnd("");
			return;
		}
		if (resolvedCol.id === "status" && typeof rawV === "boolean") {
			setFilterValue(String(rawV));
			setFilterValueEnd("");
			return;
		}
		if (valueType === "boolean") {
			setFilterValue(typeof rawV === "boolean" ? String(rawV) : String(rawV ?? ""));
			setFilterValueEnd("");
			return;
		}
		if (rawV === void 0 || rawV === "") {
			setFilterValue("");
			setFilterValueEnd("");
			return;
		}
		if (Array.isArray(rawV)) {
			setFilterValue(rawV.join(","));
			setFilterValueEnd("");
			return;
		}
		setFilterValue(String(rawV));
		setFilterValueEnd("");
	};
	const beginEditFilter = (key) => {
		setEditingReplaceKey(key);
		loadFilterFormFromCompactKey(key);
	};
	const cancelFilterEdit = () => {
		resetFormToDefaults();
	};
	useEffect(() => {
		if (!editingReplaceKey) return;
		if (!findCompactFilterKeyInMap(filterMap, editingReplaceKey)) resetFormToDefaults();
	}, [
		filterMap,
		editingReplaceKey,
		resetFormToDefaults
	]);
	useEffect(() => {
		if (!(sortBy != null && sortOrder != null && onSortChange != null) || defaultSortParam == null) return;
		if ((encodeSort(sortBy, sortOrder) ?? defaultSortParam) !== defaultSortParam) setListSortOpen(true);
	}, [
		sortBy,
		sortOrder,
		onSortChange,
		defaultSortParam
	]);
	const filterEntries = Array.from(filterMap.entries());
	const applyFilter = () => {
		const col$1 = columns.find((c) => c.id === filterColumnId);
		if (!col$1 || !filterOperatorKey) return;
		const valueType = col$1.customAttributeSlot ? customDocumentAttrType : col$1.type;
		const resolvedColumnId = col$1.customAttributeSlot ? customDocumentAttrKey.trim() : filterColumnId;
		if (col$1.customAttributeSlot) {
			if (!resolvedColumnId || resolvedColumnId.startsWith("$")) return;
		}
		const op$1 = getOperatorsForType(valueType, {
			fulltextSearchable: col$1.customAttributeSlot ? false : !!col$1.fulltextSearchable,
			enumOptional: valueType === "enum" ? col$1.optional : void 0
		}).find((o) => o.key === filterOperatorKey);
		if (!op$1) return;
		const isBetweenOp$1 = filterOperatorKey === "between" || filterOperatorKey === "notBetween";
		let val = op$1.noValue ? void 0 : isBetweenOp$1 ? `${filterValue.trim()},${filterValueEnd.trim()}` : filterValue.trim() || void 0;
		if (val !== void 0 && val !== "" && !isBetweenOp$1) {
			if (col$1.format === "size") {
				const n = Number(val);
				val = Number.isNaN(n) ? String(val) : sizeFilterToBytes(n, filterSizeUnit);
			} else if (valueType === "integer") {
				const n = Number(val);
				val = Number.isNaN(n) ? String(val) : n;
			} else if (valueType === "bigint") val = String(val);
			else if (valueType === "double") {
				const n = Number(val);
				val = Number.isNaN(n) ? String(val) : n;
			} else if (valueType === "boolean") val = val === "true";
			else if (col$1.id === "status" && (val === "enabled" || val === "disabled")) val = val === "enabled";
		}
		if (isBetweenOp$1 && val !== void 0 && col$1.format === "size") {
			const [a, b] = `${val}`.split(",").map((s) => s.trim());
			const numA = Number(a);
			const numB = Number(b);
			val = !Number.isNaN(numA) && !Number.isNaN(numB) ? `${sizeFilterToBytes(numA, filterSizeUnit)},${sizeFilterToBytes(numB, filterSizeUnit)}` : val;
		}
		const queryString = buildFilterQueryString(filterOperatorKey, resolvedColumnId, val);
		onApplyFilter({
			c: resolvedColumnId,
			o: filterOperatorKey,
			...val !== void 0 && val !== "" ? { v: val } : {}
		}, queryString, editingReplaceKey != null ? findCompactFilterKeyInMap(filterMap, editingReplaceKey) ?? editingReplaceKey : void 0);
		setEditingReplaceKey(null);
		setFilterValue("");
		setFilterValueEnd("");
	};
	const handleClearAll = () => {
		onClearAll();
		onClose?.();
	};
	const col = columns.find((c) => c.id === filterColumnId);
	const valueColumnType = col?.customAttributeSlot === true ? customDocumentAttrType : col?.type ?? "string";
	const op = col ? getOperatorsForColumn(col, valueColumnType).find((operator) => operator.key === filterOperatorKey) : null;
	const needsValue = col && op && !op.noValue;
	const isBetweenOp = filterOperatorKey === "between" || filterOperatorKey === "notBetween";
	const customDocAttrInvalid = col?.customAttributeSlot === true && (!customDocumentAttrKey.trim() || customDocumentAttrKey.trim().startsWith("$"));
	const isApplyDisabled = !filterColumnId || !filterOperatorKey || customDocAttrInvalid || (needsValue ? isBetweenOp ? !filterValue.trim() || !filterValueEnd.trim() : !filterValue.trim() : false);
	const inputClass = "h-9 w-full text-[13px]";
	const labelClass = "text-[12px] font-medium text-muted-foreground mb-1 block";
	const subLabelClass = "text-[11px] text-muted-foreground mb-0.5 block";
	const renderValueInput = () => {
		if (!col || !op || op.noValue) return null;
		const vc = col.customAttributeSlot === true ? {
			...col,
			type: customDocumentAttrType,
			fulltextSearchable: false,
			elements: void 0,
			optional: void 0
		} : col;
		const label = /* @__PURE__ */ jsx("label", {
			className: labelClass,
			children: t("Value")
		});
		if (isBetweenOp) {
			if (vc.format === "size") return /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: subLabelClass,
						children: t("Start")
					}), /* @__PURE__ */ jsx(Input, {
						type: "number",
						min: 0,
						step: 1,
						className: inputClass,
						value: filterValue,
						onChange: (e) => setFilterValue(e.target.value),
						placeholder: t("Min")
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: subLabelClass,
						children: t("End")
					}), /* @__PURE__ */ jsx(Input, {
						type: "number",
						min: 0,
						step: 1,
						className: inputClass,
						value: filterValueEnd,
						onChange: (e) => setFilterValueEnd(e.target.value),
						placeholder: t("Max")
					})] })]
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: subLabelClass,
					children: t("Unit")
				}), /* @__PURE__ */ jsx(SearchableSelect, {
					value: filterSizeUnit,
					onValueChange: setFilterSizeUnit,
					items: SIZE_FILTER_UNITS.map((u) => ({
						value: u.value,
						label: t(u.label)
					})),
					placeholder: t("Unit"),
					searchPlaceholder: t("Search units..."),
					emptyMessage: t("No units found")
				})] })]
			}, "value-between-size");
			if (vc.type === "datetime") return /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: subLabelClass,
					children: t("Start")
				}), /* @__PURE__ */ jsx(DateTimePicker, {
					value: filterValue || null,
					onChange: (v) => setFilterValue(v ?? ""),
					className: inputClass,
					clearable: true
				})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: subLabelClass,
					children: t("End")
				}), /* @__PURE__ */ jsx(DateTimePicker, {
					value: filterValueEnd || null,
					onChange: (v) => setFilterValueEnd(v ?? ""),
					className: inputClass,
					clearable: true
				})] })]
			}, "value-between-datetime");
			if (vc.type === "integer" || vc.type === "bigint" || vc.type === "double") return /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: subLabelClass,
					children: t("Start")
				}), /* @__PURE__ */ jsx(Input, {
					type: "number",
					step: vc.type === "integer" || vc.type === "bigint" ? 1 : "any",
					className: inputClass,
					value: filterValue,
					onChange: (e) => setFilterValue(e.target.value),
					placeholder: t("Min")
				})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: subLabelClass,
					children: t("End")
				}), /* @__PURE__ */ jsx(Input, {
					type: "number",
					step: vc.type === "integer" || vc.type === "bigint" ? 1 : "any",
					className: inputClass,
					value: filterValueEnd,
					onChange: (e) => setFilterValueEnd(e.target.value),
					placeholder: t("Max")
				})] })]
			}, "value-between-number");
			return null;
		}
		if (vc.type === "boolean") return /* @__PURE__ */ jsxs("div", { children: [label, /* @__PURE__ */ jsx(SearchableSelect, {
			value: filterValue,
			onValueChange: setFilterValue,
			items: col.customAttributeSlot ? [{
				value: "true",
				label: t("True")
			}, {
				value: "false",
				label: t("False")
			}] : [{
				value: "true",
				label: t("Enabled")
			}, {
				value: "false",
				label: t("Disabled")
			}],
			placeholder: t("Select"),
			searchPlaceholder: t("Search..."),
			emptyMessage: t("No results")
		})] }, "value-bool");
		if (vc.type === "datetime") return /* @__PURE__ */ jsxs("div", { children: [label, /* @__PURE__ */ jsx(DateTimePicker, {
			value: filterValue || null,
			onChange: (v) => setFilterValue(v ?? ""),
			className: inputClass,
			clearable: true
		})] }, "value-datetime");
		if (vc.format === "size") return /* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [label, /* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsx(Input, {
					type: "number",
					min: 0,
					step: 1,
					className: inputClass,
					value: filterValue,
					onChange: (e) => setFilterValue(e.target.value),
					placeholder: t("Amount")
				}), /* @__PURE__ */ jsx(SearchableSelect, {
					value: filterSizeUnit,
					onValueChange: setFilterSizeUnit,
					items: SIZE_FILTER_UNITS.map((u) => ({
						value: u.value,
						label: t(u.label)
					})),
					placeholder: t("Unit"),
					searchPlaceholder: t("Search units..."),
					emptyMessage: t("No units found"),
					triggerClassName: "min-w-[100px]"
				})]
			})]
		}, "value-size");
		if (vc.type === "integer" || vc.type === "bigint") return /* @__PURE__ */ jsxs("div", { children: [label, /* @__PURE__ */ jsx(Input, {
			type: vc.type === "bigint" ? "text" : "number",
			inputMode: "numeric",
			step: vc.type === "bigint" ? void 0 : 1,
			className: inputClass,
			value: filterValue,
			onChange: (e) => setFilterValue(e.target.value),
			placeholder: t("Number")
		})] }, "value-int");
		if (vc.type === "enum" && vc.elements?.length) return /* @__PURE__ */ jsxs("div", { children: [label, /* @__PURE__ */ jsx(SearchableSelect, {
			value: filterValue,
			onValueChange: setFilterValue,
			items: vc.elements.map((el) => ({
				value: String(el.value),
				label: t(el.label),
				description: el.description ? t(el.description) : void 0,
				searchText: el.description ? `${t(el.label)} ${t(el.description)}` : void 0
			})),
			placeholder: t("Select"),
			searchPlaceholder: t("Search values..."),
			emptyMessage: t("No values found")
		})] }, "value-enum");
		return /* @__PURE__ */ jsxs("div", { children: [label, /* @__PURE__ */ jsx(Input, {
			className: inputClass,
			value: filterValue,
			onChange: (e) => setFilterValue(e.target.value),
			placeholder: filterOperatorKey === "search" || filterOperatorKey === "notSearch" ? t("Min. 3 characters") : filterOperatorKey === "regex" ? "e.g. ^foo.*bar$" : t("Value")
		})] }, "value-text");
	};
	const hasSavedFiltersFeature = !!(filterScope && onApplyQuery);
	const currentQueryParam = mapToQueryParam(filterMap);
	const currentSortParam = sortEnabled ? encodeSort(sortBy, sortOrder) : void 0;
	const matchingSavedFilter = hasSavedFiltersFeature ? savedFilters.find((s) => s.query === currentQueryParam && (!sortEnabled || (s.sort ?? defaultSortParam) === (currentSortParam ?? defaultSortParam))) : null;
	const hasNonDefaultSort = sortEnabled && defaultSortParam != null && (currentSortParam ?? defaultSortParam) !== defaultSortParam;
	const canSaveCurrent = filterMap.size > 0 || sortEnabled && hasNonDefaultSort;
	const sortFieldSummaryLabel = sortEnabled && sortOptionsFromColumns.length > 0 ? sortOptionsFromColumns.find((o) => o.id === sortBy)?.label ?? sortBy ?? "" : "";
	const filtersTabContent = /* @__PURE__ */ jsxs(Fragment, { children: [
		sortEnabled && sortOptionsFromColumns.length > 0 && /* @__PURE__ */ jsx(Collapsible, {
			open: listSortOpen,
			onOpenChange: setListSortOpen,
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("border-t border-b", SECTION_DIVIDE),
				children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-start transition-colors hover:bg-muted/50",
						children: [/* @__PURE__ */ jsx(ChevronDown, {
							className: cn("size-3.5 shrink-0 text-muted-foreground transition-transform duration-200", listSortOpen && "rotate-180"),
							"aria-hidden": true
						}), /* @__PURE__ */ jsxs("span", {
							className: "min-w-0 flex-1 text-[12px] leading-snug",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground/85",
								children: t("List order")
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-muted-foreground",
								children: [
									" ",
									"· ",
									t(sortFieldSummaryLabel),
									" ·",
									" ",
									sortOrder === "asc" ? t("Ascending") : t("Descending")
								]
							})]
						})]
					})
				}), /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxs("div", {
					className: cn("space-y-2 border-t bg-muted/20 px-4 py-2.5", SECTION_DIVIDE),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
							children: t("List order")
						}), onReset && (hasNonDefaultSort || filterMap.size > 0) && /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => {
								onReset();
								onClose?.();
							},
							className: "cursor-pointer shrink-0 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors",
							children: t("Reset")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(SearchableSelect, {
							value: sortBy,
							onValueChange: (field) => {
								onSortChange(field, field === sortBy && sortOrder === "desc" ? "asc" : "desc");
							},
							items: sortOptionsFromColumns.map((o) => ({
								value: o.id,
								label: t(o.label)
							})),
							placeholder: t("Sort field"),
							searchPlaceholder: t("Search columns..."),
							emptyMessage: t("No columns"),
							triggerClassName: "h-9 min-w-0 flex-1 text-[13px]"
						}), /* @__PURE__ */ jsxs("div", {
							className: cn("flex shrink-0 overflow-hidden rounded-md border", SECTION_DIVIDE),
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onSortChange(sortBy, "asc"),
								className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors", sortOrder === "asc" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60"),
								"aria-pressed": sortOrder === "asc",
								title: t("Ascending"),
								children: [/* @__PURE__ */ jsx(ArrowUp, { className: "h-3.5 w-3.5" }), t("Asc")]
							}), /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onSortChange(sortBy, "desc"),
								className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors", SEGMENT_DIVIDE, sortOrder === "desc" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60"),
								"aria-pressed": sortOrder === "desc",
								title: t("Descending"),
								children: [/* @__PURE__ */ jsx(ArrowDown, { className: "h-3.5 w-3.5" }), t("Desc")]
							})]
						})]
					})]
				}) })]
			})
		}),
		/* @__PURE__ */ jsx("form", {
			onSubmit: (e) => {
				e.preventDefault();
				applyFilter();
			},
			className: cn("px-4 pb-3", sortEnabled && sortOptionsFromColumns.length > 0 ? "pt-2" : "pt-3"),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ jsx("label", {
								className: labelClass,
								children: t("Column")
							}), /* @__PURE__ */ jsx(SearchableSelect, {
								value: filterColumnId,
								onValueChange: (v) => {
									setFilterColumnId(v);
									setFilterValue("");
									setFilterValueEnd("");
									const column = columns.find((c) => c.id === v);
									if (!column?.customAttributeSlot) {
										setCustomDocumentAttrKey("");
										setCustomDocumentAttrType("string");
									} else setCustomDocumentAttrKey("");
									if (column?.format === "size") setFilterSizeUnit("mb");
									const vt = column?.customAttributeSlot === true ? customDocumentAttrType : column?.type ?? "string";
									setFilterOperatorKey((column ? getOperatorsForColumn(column, vt)[0] : null)?.key ?? "");
								},
								items: columns.map((c) => ({
									value: c.id,
									label: t(c.title)
								})),
								placeholder: t("Column"),
								searchPlaceholder: t("Search columns..."),
								emptyMessage: t("No columns found")
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ jsx("label", {
								className: labelClass,
								children: t("Operator")
							}), /* @__PURE__ */ jsx(SearchableSelect, {
								value: filterOperatorKey,
								onValueChange: (v) => {
									setFilterOperatorKey(v);
									setFilterValueEnd("");
								},
								disabled: !filterColumnId,
								items: filterColumnId ? (() => {
									const column = columns.find((c) => c.id === filterColumnId);
									if (!column) return [];
									return getOperatorsForColumn(column, column.customAttributeSlot === true ? customDocumentAttrType : column.type).map((operator) => ({
										value: operator.key,
										label: t(operator.label)
									}));
								})() : [],
								placeholder: t("Operator"),
								searchPlaceholder: t("Search operators..."),
								emptyMessage: t("No operators found")
							})]
						})]
					}),
					col?.customAttributeSlot === true && /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ jsx("label", {
									className: labelClass,
									children: t("Attribute name")
								}),
								/* @__PURE__ */ jsx(Input, {
									className: inputClass,
									value: customDocumentAttrKey,
									onChange: (e) => setCustomDocumentAttrKey(e.target.value),
									placeholder: t("e.g. email, score, tags"),
									autoComplete: "off"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-muted-foreground",
									children: t("Use preset columns for $id and other system fields. Custom names must not start with $.")
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ jsx("label", {
								className: labelClass,
								children: t("Value type")
							}), /* @__PURE__ */ jsx(SearchableSelect, {
								value: customDocumentAttrType,
								onValueChange: (v) => setCustomDocumentAttrType(v),
								items: [
									{
										value: "string",
										label: t("Text")
									},
									{
										value: "integer",
										label: t("Integer")
									},
									{
										value: "double",
										label: t("Decimal")
									},
									{
										value: "boolean",
										label: t("Boolean")
									},
									{
										value: "datetime",
										label: t("Date / time")
									}
								],
								placeholder: t("Type"),
								searchPlaceholder: t("Search..."),
								emptyMessage: t("No types"),
								triggerClassName: "h-9 w-full text-[13px]"
							})]
						})]
					}),
					filterColumnId && renderValueInput(),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "submit",
							size: "sm",
							className: "h-9 min-w-0 flex-1 text-[13px]",
							disabled: isApplyDisabled,
							children: editingReplaceKey ? t("Update filter") : t("Add filter")
						}), editingReplaceKey && /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 shrink-0 text-[13px]",
							onClick: cancelFilterEdit,
							children: t("Cancel")
						})]
					})
				]
			})
		}),
		filterMap.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: cn("border-t", SECTION_DIVIDE) }), /* @__PURE__ */ jsxs("div", {
			className: "px-4 py-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 mb-1.5",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
					children: [
						t("Active"),
						" (",
						filterMap.size,
						")"
					]
				}), /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-7 text-[12px] text-muted-foreground hover:text-foreground -me-1",
					onClick: handleClearAll,
					children: t("Clear all")
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "max-h-40 overflow-y-auto space-y-1",
				children: filterEntries.map(([key]) => {
					const parts = buildFilterTagFromCompactKey(key, columns).tag.split(/\*\*/);
					const column = parts[1] ?? "";
					const operator = (parts[2] ?? "").trim();
					const value = parts[3] ?? null;
					return /* @__PURE__ */ jsxs("div", {
						className: cn("flex items-center gap-2 rounded-lg border bg-muted/30 px-2.5 py-1.5 group", editingReplaceKey != null && compactFilterKeysEqual(editingReplaceKey, key) ? "border-primary" : "border-border"),
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => beginEditFilter(key),
							className: "flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 truncate text-start text-[12px] rounded-md outline-none hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring -mx-1 px-1 -my-0.5 py-0.5",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "shrink-0 font-medium text-foreground",
									children: t(column)
								}),
								/* @__PURE__ */ jsx("span", {
									className: "shrink-0 text-muted-foreground",
									children: t(operator)
								}),
								value != null && value !== "" && /* @__PURE__ */ jsx("span", {
									className: "truncate text-foreground",
									children: value
								})
							]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => onRemoveFilter(key),
							className: "cursor-pointer shrink-0 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
							"aria-label": t("Remove filter"),
							children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
						})]
					}, `${key.c}-${key.o}-${JSON.stringify(key.v ?? "")}`);
				})
			})]
		})] }),
		hasSavedFiltersFeature && canSaveCurrent && /* @__PURE__ */ jsx("div", {
			className: cn("border-t px-4 py-2", SECTION_DIVIDE),
			children: matchingSavedFilter ? /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-muted-foreground",
				children: [
					t("Same as saved filter"),
					" \"",
					matchingSavedFilter.name,
					"\""
				]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("Save for later")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-nowrap items-center gap-2",
					children: [
						hasTeamLevel && /* @__PURE__ */ jsxs("div", {
							className: cn("flex shrink-0 overflow-hidden rounded-md border", SECTION_DIVIDE),
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSaveLevel("user"),
								className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors", saveLevel === "user" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60"),
								"aria-pressed": saveLevel === "user",
								children: t("For me")
							}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => canSaveTeamFiltersResult && setSaveLevel("team"),
									disabled: !canSaveTeamFiltersResult,
									className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors disabled:cursor-not-allowed", SEGMENT_DIVIDE, saveLevel === "team" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60 disabled:opacity-50"),
									"aria-pressed": saveLevel === "team",
									children: t("For team")
								})
							}), !canSaveTeamFiltersResult && /* @__PURE__ */ jsx(TooltipContent, {
								side: "top",
								sideOffset: 4,
								className: "z-[250]",
								children: t("Only owners and developers can save team-level filters.")
							})] })]
						}),
						/* @__PURE__ */ jsx(Input, {
							placeholder: t("Filter name"),
							value: saveName,
							onChange: (e) => setSaveName(e.target.value),
							onKeyDown: (e) => {
								if (e.key !== "Enter") return;
								e.preventDefault();
								const name = saveName.trim();
								if (!name || isAdding || savingId !== null) return;
								if (hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult) return;
								setSavingId("current");
								addSavedFilter({
									name,
									query: currentQueryParam,
									level: hasTeamLevel ? saveLevel : "user",
									...currentSortParam != null ? { sort: currentSortParam } : {}
								}).then(() => setSaveName("")).finally(() => setSavingId(null));
							},
							className: "h-9 min-w-0 flex-1 text-[13px]",
							maxLength: 64
						}),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-flex",
								children: /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "icon",
									variant: "secondary",
									className: "h-9 w-9 shrink-0",
									title: t("Save filter"),
									"aria-label": t("Save filter"),
									disabled: !saveName.trim() || isAdding || savingId !== null || hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult,
									onClick: () => {
										const name = saveName.trim();
										if (!name) return;
										setSavingId("current");
										addSavedFilter({
											name,
											query: currentQueryParam,
											level: hasTeamLevel ? saveLevel : "user",
											...currentSortParam != null ? { sort: currentSortParam } : {}
										}).then(() => setSaveName("")).finally(() => setSavingId(null));
									},
									children: isAdding && savingId === "current" ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
								})
							})
						}), hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult && /* @__PURE__ */ jsx(TooltipContent, {
							side: "top",
							sideOffset: 4,
							className: "z-[250]",
							children: t("Only owners and developers can save team-level filters.")
						})] })
					]
				})]
			})
		})
	] });
	const handleSavedFilterDragStart = (e, level, index) => {
		if (e.target.closest("button")) {
			e.preventDefault();
			return;
		}
		e.dataTransfer.setData("application/json", JSON.stringify({
			level,
			index
		}));
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.dropEffect = "move";
		if (e.currentTarget instanceof HTMLElement) e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
	};
	const handleSavedFilterDrop = (e, level, dropIndex) => {
		e.preventDefault();
		setDragOverKey(null);
		const raw = e.dataTransfer.getData("application/json");
		if (!raw) return;
		try {
			const { level: dragLevel, index: dragIndex } = JSON.parse(raw);
			if (dragLevel !== level || dragIndex === dropIndex) return;
			reorderSavedFilters(reorderList(level === "user" ? userSavedFilters : teamSavedFilters, dragIndex, dropIndex), level);
		} catch {}
	};
	const rowDropKey = (level, index) => `${level}-${index}`;
	const canEditTeamFilter = (l) => l === "user" || canSaveTeamFiltersResult;
	const savedTabContent = hasSavedFiltersFeature && /* @__PURE__ */ jsxs("div", { children: [
		userSavedFilters.length > 0 || teamSavedFilters.length > 0 ? /* @__PURE__ */ jsx("div", {
			className: "px-4 py-2",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-h-80 overflow-y-auto space-y-3",
				children: hasTeamLevel ? /* @__PURE__ */ jsxs(Fragment, { children: [userSavedFilters.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1",
					children: t("My filters")
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-1",
					children: userSavedFilters.map((item, index) => /* @__PURE__ */ jsx(SavedFilterPresetRow, {
						item,
						canEdit: canEditTeamFilter("user"),
						dragOverKey,
						rowDropKey: rowDropKey("user", index),
						onDragStart: (e) => handleSavedFilterDragStart(e, "user", index),
						onDragOver: (e) => {
							e.preventDefault();
							e.dataTransfer.dropEffect = "move";
							setDragOverKey(rowDropKey("user", index));
						},
						onDragLeave: () => setDragOverKey(null),
						onDrop: (e) => handleSavedFilterDrop(e, "user", index),
						onApply: () => onApplyQuery(item.query || void 0, item.sort),
						onDelete: () => {
							setDeletingId(item.id);
							deleteSavedFilter(item.id, "user").finally(() => setDeletingId(null));
						},
						deleteBusy: deletingId === item.id,
						deleteDisabled: deletingId !== null,
						onRenameCommit: (name) => updateSavedFilterName(item.id, "user", name)
					}, `user-${item.id}`))
				})] }), teamSavedFilters.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1",
					children: t("Team filters")
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-1",
					children: teamSavedFilters.map((item, index) => /* @__PURE__ */ jsx(SavedFilterPresetRow, {
						item,
						canEdit: canEditTeamFilter("team"),
						dragOverKey,
						rowDropKey: rowDropKey("team", index),
						onDragStart: (e) => handleSavedFilterDragStart(e, "team", index),
						onDragOver: (e) => {
							e.preventDefault();
							e.dataTransfer.dropEffect = "move";
							setDragOverKey(rowDropKey("team", index));
						},
						onDragLeave: () => setDragOverKey(null),
						onDrop: (e) => handleSavedFilterDrop(e, "team", index),
						onApply: () => onApplyQuery(item.query || void 0, item.sort),
						onDelete: () => {
							setDeletingId(item.id);
							deleteSavedFilter(item.id, "team").finally(() => setDeletingId(null));
						},
						deleteBusy: deletingId === item.id,
						deleteDisabled: deletingId !== null,
						onRenameCommit: (name) => updateSavedFilterName(item.id, "team", name)
					}, `team-${item.id}`))
				})] })] }) : /* @__PURE__ */ jsx("div", {
					className: "space-y-1",
					children: savedFilters.map((item, index) => /* @__PURE__ */ jsx(SavedFilterPresetRow, {
						item,
						canEdit: canEditTeamFilter("user"),
						dragOverKey,
						rowDropKey: rowDropKey("user", index),
						onDragStart: (e) => handleSavedFilterDragStart(e, "user", index),
						onDragOver: (e) => {
							e.preventDefault();
							e.dataTransfer.dropEffect = "move";
							setDragOverKey(rowDropKey("user", index));
						},
						onDragLeave: () => setDragOverKey(null),
						onDrop: (e) => handleSavedFilterDrop(e, "user", index),
						onApply: () => onApplyQuery(item.query || void 0, item.sort),
						onDelete: () => {
							setDeletingId(item.id);
							deleteSavedFilter(item.id, "user").finally(() => setDeletingId(null));
						},
						deleteBusy: deletingId === item.id,
						deleteDisabled: deletingId !== null,
						onRenameCommit: (name) => updateSavedFilterName(item.id, "user", name)
					}, `user-${item.id}`))
				})
			})
		}) : null,
		userSavedFilters.length === 0 && teamSavedFilters.length === 0 && /* @__PURE__ */ jsx("p", {
			className: "px-4 py-3 text-[13px] text-muted-foreground",
			children: t("No saved filters yet. Add filters in the Filters tab and save them here for quick access.")
		}),
		filterMap.size > 0 && /* @__PURE__ */ jsx("div", {
			className: cn("border-t px-4 py-2", SECTION_DIVIDE),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("Save current filters with a name:")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-nowrap items-center gap-2",
					children: [
						hasTeamLevel && /* @__PURE__ */ jsxs("div", {
							className: cn("flex shrink-0 overflow-hidden rounded-md border", SECTION_DIVIDE),
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSaveLevel("user"),
								className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors", saveLevel === "user" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60"),
								"aria-pressed": saveLevel === "user",
								children: t("For me")
							}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => canSaveTeamFiltersResult && setSaveLevel("team"),
									disabled: !canSaveTeamFiltersResult,
									className: cn("flex h-9 cursor-pointer items-center gap-1 px-2 text-[12px] transition-colors disabled:cursor-not-allowed", SEGMENT_DIVIDE, saveLevel === "team" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60 disabled:opacity-50"),
									"aria-pressed": saveLevel === "team",
									children: t("For team")
								})
							}), !canSaveTeamFiltersResult && /* @__PURE__ */ jsx(TooltipContent, {
								side: "top",
								sideOffset: 4,
								className: "z-[250]",
								children: t("Only owners and developers can save team-level filters.")
							})] })]
						}),
						/* @__PURE__ */ jsx(Input, {
							placeholder: t("Filter name"),
							value: saveName,
							onChange: (e) => setSaveName(e.target.value),
							onKeyDown: (e) => {
								if (e.key !== "Enter") return;
								e.preventDefault();
								const name = saveName.trim();
								if (!name || isAdding || savingId !== null) return;
								if (hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult) return;
								setSavingId("current");
								addSavedFilter({
									name,
									query: mapToQueryParam(filterMap),
									level: hasTeamLevel ? saveLevel : "user",
									...currentSortParam != null ? { sort: currentSortParam } : {}
								}).then(() => setSaveName("")).finally(() => setSavingId(null));
							},
							className: "h-9 min-w-0 flex-1 text-[13px]",
							maxLength: 64
						}),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-flex",
								children: /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "icon",
									variant: "secondary",
									className: "h-9 w-9 shrink-0",
									title: t("Save filter"),
									"aria-label": t("Save filter"),
									disabled: !saveName.trim() || isAdding || savingId !== null || hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult,
									onClick: () => {
										const name = saveName.trim();
										if (!name) return;
										setSavingId("current");
										addSavedFilter({
											name,
											query: mapToQueryParam(filterMap),
											level: hasTeamLevel ? saveLevel : "user",
											...currentSortParam != null ? { sort: currentSortParam } : {}
										}).then(() => setSaveName("")).finally(() => setSavingId(null));
									},
									children: isAdding && savingId === "current" ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
								})
							})
						}), hasTeamLevel && saveLevel === "team" && !canSaveTeamFiltersResult && /* @__PURE__ */ jsx(TooltipContent, {
							side: "top",
							sideOffset: 4,
							className: "z-[250]",
							children: t("Only owners and developers can save team-level filters.")
						})] })
					]
				})]
			})
		})
	] });
	return /* @__PURE__ */ jsx("div", {
		className: "flex max-h-[calc(100dvh-4rem)] flex-col pt-4",
		children: hasSavedFiltersFeature ? /* @__PURE__ */ jsxs(Tabs, {
			defaultValue: "filters",
			className: "flex min-h-0 flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "shrink-0 px-4",
					children: /* @__PURE__ */ jsxs(TabsList, {
						className: "w-full grid grid-cols-2 h-9",
						children: [/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "filters",
							className: "text-[13px]",
							children: [t("Filters"), filterMap.size > 0 ? /* @__PURE__ */ jsx(ToolbarCountBadge, {
								count: filterMap.size,
								placement: "inline"
							}) : null]
						}), /* @__PURE__ */ jsxs(TabsTrigger, {
							value: "saved",
							className: "text-[13px]",
							children: [t("Saved"), savedFilters.length > 0 ? /* @__PURE__ */ jsx(ToolbarCountBadge, {
								count: savedFilters.length,
								placement: "inline"
							}) : null]
						})]
					})
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "filters",
					className: "mt-0 max-h-[calc(100dvh-14rem)] min-h-0 overflow-y-auto",
					children: filtersTabContent
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "saved",
					className: "mt-0 max-h-[calc(100dvh-14rem)] min-h-0 overflow-y-auto",
					children: savedTabContent
				})
			]
		}) : /* @__PURE__ */ jsx("div", {
			className: "max-h-[calc(100dvh-14rem)] min-h-0 overflow-y-auto",
			children: filtersTabContent
		})
	});
}
function FiltersPopover({ open, onOpenChange, columns, filterMap, onRemoveFilter, onClearAll, onApplyFilter, resourceLabel = "items", filterScope, onApplyQuery, teamId, sortBy, sortOrder, onSortChange, defaultSortParam, onReset }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: cn("border-border bg-transparent text-[13px] text-muted-foreground hover:bg-accent hover:text-foreground", serviceHeaderFiltersButton),
				children: [
					/* @__PURE__ */ jsx(Filter, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ jsx("span", {
						className: serviceHeaderFiltersLabel,
						children: t("Filters")
					}),
					filterMap.size > 0 ? /* @__PURE__ */ jsx(ToolbarCountBadge, {
						count: filterMap.size,
						placement: "inline",
						inlineTone: "emphasis"
					}) : null
				]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: "max-h-[calc(100dvh-4rem)] w-[380px] overflow-hidden rounded-xl border-border p-0 shadow-lg",
			align: "start",
			side: "bottom",
			sideOffset: 8,
			children: open ? /* @__PURE__ */ jsx(FiltersPopoverContent, {
				columns,
				filterMap,
				onRemoveFilter,
				onClearAll,
				onApplyFilter,
				onClose: () => onOpenChange(false),
				resourceLabel,
				filterScope,
				onApplyQuery,
				teamId: teamId ?? void 0,
				sortBy,
				sortOrder,
				onSortChange,
				defaultSortParam,
				onReset
			}) : null
		})]
	});
}
export { FiltersPopover as t };
