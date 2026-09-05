import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Bt as MYSQL_COLUMN_TYPE_DEFINITIONS, Gt as formatMysqlColumnTypePropertyLimits, Jt as getMysqlColumnTypePropertyPlaceholder, Qt as isMysqlSerialColumnType, Ut as createDefaultMysqlColumnTypeState, Vt as MYSQL_COLUMN_TYPE_GROUPS, Wt as formatMysqlColumnTypeLabel, Xt as getMysqlColumnTypePropertyValue, Yt as getMysqlColumnTypePropertyRangeError, Zt as getMysqlColumnTypeSearchValue, qt as getMysqlColumnTypeDefinition } from "./form-field-type-badge-C7qMzJo0.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { i as getMysqlIndexAlgorithmDefinition, o as getMysqlIndexAlgorithmSearchValue, t as MYSQL_INDEX_ALGORITHMS } from "./mysql-index-metadata-CpeqQ75u.js";
import { r as localizeMysqlIndexAlgorithmLabel } from "./resource-status-labels-C-bLMJxj.js";
import { n as sortableAxisTransform, t as getAxisRestrictedDragModifiers } from "./dnd-modifiers-CiFEVwzL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, GripVertical, Plus, X } from "lucide-react";
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
var enumValueDragModifiers = getAxisRestrictedDragModifiers("vertical");
var rowIconButtonClass = "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground";
function createEntry(value = "") {
	return {
		id: crypto.randomUUID(),
		value
	};
}
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
				children: t("Enum columns need at least one value.")
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
function MysqlEnumValuesEditor({ values, onChange, existing = false }) {
	const t = useT();
	const [entries, setEntries] = useState(() => (values.length > 0 ? values : [""]).map((value) => createEntry(value)));
	const [activeId, setActiveId] = useState(null);
	const [focusEntryId, setFocusEntryId] = useState(null);
	const commit = (next) => {
		setEntries(next);
		onChange(next.map((entry) => entry.value));
	};
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
		commit(arrayMove(entries, oldIndex, newIndex));
	};
	const handleDragCancel = () => {
		setActiveId(null);
	};
	const handleAddValue = () => {
		const newEntry = createEntry();
		setFocusEntryId(newEntry.id);
		commit([...entries, newEntry]);
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
							canRemove: entries.length > 1,
							onValueChange: (value) => commit(entries.map((current) => current.id === entry.id ? {
								...current,
								value
							} : current)),
							onRemove: () => commit(entries.filter((current) => current.id !== entry.id))
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
				children: existing ? t("Removing a value fails if existing rows still use it.") : t("Drag to set the order of allowed values.")
			})
		]
	});
}
function MysqlColumnTypePropertyField({ property, value, onChange }) {
	const t = useT();
	const propertyValue = getMysqlColumnTypePropertyValue(value, property.key);
	const inputId = `mysql-column-${property.key}`;
	const limitsLabel = formatMysqlColumnTypePropertyLimits(property);
	const rangeError = getMysqlColumnTypePropertyRangeError(property, propertyValue);
	const handleChange = (nextValue) => {
		onChange({
			...value,
			[property.key]: nextValue
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: inputId,
					className: "text-[12px] font-medium leading-snug",
					children: property.label
				}), /* @__PURE__ */ jsx("span", {
					className: "shrink-0 text-end text-[11px] font-medium tabular-nums text-muted-foreground",
					children: limitsLabel
				})]
			}),
			property.hint ? /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: property.hint
			}) : null,
			property.optional && property.optionalEmptyLabel ? /* @__PURE__ */ jsxs("p", {
				className: "text-[11px] text-muted-foreground",
				children: [
					t("Leave empty for"),
					" ",
					t(property.optionalEmptyLabel),
					"."
				]
			}) : null,
			/* @__PURE__ */ jsx(Input, {
				id: inputId,
				type: "number",
				min: property.min,
				max: property.max,
				value: propertyValue ?? "",
				placeholder: (() => {
					const placeholder = getMysqlColumnTypePropertyPlaceholder(property);
					return placeholder ? t(placeholder) : void 0;
				})(),
				"aria-invalid": rangeError ? true : void 0,
				onChange: (event) => {
					const raw = event.target.value.trim();
					if (!raw) {
						handleChange(void 0);
						return;
					}
					const parsed = Number.parseInt(raw, 10);
					handleChange(Number.isFinite(parsed) ? parsed : void 0);
				},
				className: cn("tabular-nums", rangeError && "border-destructive focus-visible:ring-destructive/30")
			}),
			rangeError ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-destructive",
				children: rangeError
			}) : null
		]
	});
}
function MysqlColumnTypeSelector({ value, onChange, allowSerialTypes = true, compact = false, showTypeOptions, showArrayOption, showTypePicker = true, existing = false }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const definition = getMysqlColumnTypeDefinition(value.typeId);
	const resolvedShowTypeOptions = showTypeOptions ?? (!compact || value.typeId === "enum");
	const resolvedShowArrayOption = showArrayOption ?? !compact;
	const visibleDefinitions = useMemo(() => MYSQL_COLUMN_TYPE_DEFINITIONS.filter((entry) => allowSerialTypes || !entry.createOnly), [allowSerialTypes]);
	const supportsArray = !isMysqlSerialColumnType(value.typeId) && value.typeId !== "enum";
	const handleTypeChange = (nextTypeId) => {
		const next = createDefaultMysqlColumnTypeState(nextTypeId);
		if (value.isArray && !isMysqlSerialColumnType(nextTypeId) && nextTypeId !== "enum") next.isArray = true;
		onChange(next);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: compact ? "" : "space-y-3",
		children: [
			showTypePicker ? /* @__PURE__ */ jsxs("div", {
				className: compact ? "" : "space-y-2",
				children: [!compact ? /* @__PURE__ */ jsxs(Label, {
					htmlFor: "mysql-column-type",
					className: "text-[12px] font-medium",
					children: [
						t("Type"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-destructive",
							children: "*"
						})
					]
				}) : null, /* @__PURE__ */ jsxs(Popover, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ jsx(PopoverTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs(Button, {
							id: compact ? void 0 : "mysql-column-type",
							type: "button",
							variant: "outline",
							role: "combobox",
							"aria-expanded": open,
							className: cn("w-full justify-between gap-2 font-normal", compact ? "h-8 px-2 text-[12px]" : "h-9 text-[13px]"),
							children: [/* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: formatMysqlColumnTypeLabel(value)
							}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })]
						})
					}), /* @__PURE__ */ jsx(PopoverContent, {
						className: "max-h-[min(360px,var(--radix-popover-content-available-height))] w-[max(var(--radix-popover-trigger-width),20rem)] overflow-hidden p-0",
						align: "start",
						onWheelCapture: (event) => {
							event.stopPropagation();
						},
						children: /* @__PURE__ */ jsxs(Command$1, { children: [/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t("Search types..."),
							className: "h-9 text-[13px]"
						}), /* @__PURE__ */ jsxs(CommandList, {
							className: "max-h-[280px] overflow-y-auto overscroll-contain",
							children: [/* @__PURE__ */ jsx(CommandEmpty, {
								className: "py-4 text-center text-[13px] text-muted-foreground",
								children: t("No types found")
							}), MYSQL_COLUMN_TYPE_GROUPS.map((group) => {
								const options = visibleDefinitions.filter((entry) => entry.group === group);
								if (options.length === 0) return null;
								return /* @__PURE__ */ jsx(CommandGroup, {
									heading: group,
									className: "[&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider",
									children: options.map((entry) => /* @__PURE__ */ jsxs(CommandItem, {
										value: getMysqlColumnTypeSearchValue(entry),
										className: "text-[13px]",
										onSelect: () => {
											handleTypeChange(entry.id);
											setOpen(false);
										},
										children: [/* @__PURE__ */ jsx(Check, { className: cn("me-2 h-4 w-4 shrink-0", value.typeId === entry.id ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 flex-1 items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "shrink-0",
												children: entry.label
											}), /* @__PURE__ */ jsx("span", {
												className: "truncate text-[11px] text-muted-foreground",
												children: t(entry.description)
											})]
										})]
									}, entry.id))
								}, group);
							})]
						})] })
					})]
				})]
			}) : null,
			resolvedShowArrayOption && supportsArray ? /* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					id: "mysql-column-array",
					checked: value.isArray === true,
					onCheckedChange: (checked) => onChange({
						...value,
						isArray: checked === true
					}),
					className: "mt-0.5"
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "mysql-column-array",
						className: "text-[12px] font-medium leading-none",
						children: t("Define as array")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-muted-foreground",
						children: t("Store multiple values of this type in a single column.")
					})]
				})]
			}) : null,
			resolvedShowTypeOptions && (definition.properties.length > 0 || value.typeId === "enum") ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-3 rounded-lg border border-border bg-muted/20 px-3 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: value.typeId === "enum" ? t("Allowed values") : t("Type options")
				}), value.typeId === "enum" ? /* @__PURE__ */ jsx(MysqlEnumValuesEditor, {
					values: value.enumValues?.length ? value.enumValues : [""],
					onChange: (enumValues) => onChange({
						...value,
						enumValues
					}),
					existing
				}) : definition.properties.map((property) => /* @__PURE__ */ jsx(MysqlColumnTypePropertyField, {
					property,
					value,
					onChange
				}, property.key))]
			}) : null
		]
	});
}
function MysqlIndexAlgorithmSelector({ value, onChange }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const selected = getMysqlIndexAlgorithmDefinition(value);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsxs(Label, {
				htmlFor: "index-algorithm",
				className: "text-[12px] font-medium",
				children: ["Algorithm ", /* @__PURE__ */ jsx("span", {
					className: "text-destructive",
					children: "*"
				})]
			}), /* @__PURE__ */ jsxs(Popover, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ jsx(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs(Button, {
						id: "index-algorithm",
						type: "button",
						variant: "outline",
						role: "combobox",
						"aria-expanded": open,
						className: "h-9 w-full justify-between gap-2 text-[13px] font-normal",
						children: [/* @__PURE__ */ jsx("span", {
							className: "truncate",
							children: localizeMysqlIndexAlgorithmLabel(value, t)
						}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
					})
				}), /* @__PURE__ */ jsx(PopoverContent, {
					className: "max-h-[min(360px,var(--radix-popover-content-available-height))] w-[var(--radix-popover-trigger-width)] overflow-hidden p-0",
					align: "start",
					onWheelCapture: (event) => {
						event.stopPropagation();
					},
					children: /* @__PURE__ */ jsxs(Command$1, { children: [/* @__PURE__ */ jsx(CommandInput, {
						placeholder: t("Search algorithms..."),
						className: "h-9 text-[13px]"
					}), /* @__PURE__ */ jsxs(CommandList, {
						className: "max-h-[280px] overflow-y-auto overscroll-contain p-1",
						children: [/* @__PURE__ */ jsx(CommandEmpty, {
							className: "py-4 text-center text-[13px] text-muted-foreground",
							children: t("No algorithms found")
						}), /* @__PURE__ */ jsx(CommandGroup, { children: MYSQL_INDEX_ALGORITHMS.map((entry) => /* @__PURE__ */ jsxs(CommandItem, {
							value: getMysqlIndexAlgorithmSearchValue(entry),
							className: "items-start rounded-md px-2 py-2.5 aria-selected:bg-accent",
							onSelect: () => {
								onChange(entry.id);
								setOpen(false);
							},
							children: [/* @__PURE__ */ jsx(Check, { className: cn("me-2 mt-0.5 h-4 w-4 shrink-0", value === entry.id ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1 space-y-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium leading-none text-foreground",
									children: t(entry.label)
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] leading-relaxed text-muted-foreground",
									children: entry.description
								})]
							})]
						}, entry.id)) })]
					})] })
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-muted/20 px-3 py-3",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("About this algorithm")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[12px] font-medium text-foreground",
					children: t(selected.label)
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1 text-[11px] leading-relaxed text-muted-foreground",
					children: selected.description
				})
			]
		})]
	});
}
export { MysqlColumnTypeSelector as n, MysqlIndexAlgorithmSelector as t };
