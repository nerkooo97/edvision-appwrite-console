import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Jn as POSTGRES_COLUMN_TYPE_GROUPS, Qn as formatPostgresColumnTypePropertyLimits, Xn as createDefaultPostgresColumnTypeState, Zn as formatPostgresColumnTypeLabel, ar as isPostgresSerialColumnType, er as getPostgresColumnTypeDefinition, ir as getPostgresColumnTypeSearchValue, nr as getPostgresColumnTypePropertyRangeError, qn as POSTGRES_COLUMN_TYPE_DEFINITIONS, rr as getPostgresColumnTypePropertyValue, tr as getPostgresColumnTypePropertyPlaceholder } from "./form-field-type-badge-C7qMzJo0.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { i as getPostgresIndexAlgorithmDefinition, o as getPostgresIndexAlgorithmSearchValue, t as POSTGRES_INDEX_ALGORITHMS } from "./postgres-index-metadata-CC7j1aCq.js";
import { o as localizePostgresIndexAlgorithmLabel } from "./resource-status-labels-C-bLMJxj.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
function PostgresColumnTypePropertyField({ property, value, onChange }) {
	const t = useT();
	const propertyValue = getPostgresColumnTypePropertyValue(value, property.key);
	const inputId = `postgres-column-${property.key}`;
	const limitsLabel = formatPostgresColumnTypePropertyLimits(property);
	const rangeError = getPostgresColumnTypePropertyRangeError(property, propertyValue);
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
					const placeholder = getPostgresColumnTypePropertyPlaceholder(property);
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
function PostgresColumnTypeSelector({ value, onChange, allowSerialTypes = true, compact = false, showTypeOptions, showArrayOption, showTypePicker = true }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const definition = getPostgresColumnTypeDefinition(value.typeId);
	const resolvedShowTypeOptions = showTypeOptions ?? !compact;
	const resolvedShowArrayOption = showArrayOption ?? !compact;
	const visibleDefinitions = useMemo(() => POSTGRES_COLUMN_TYPE_DEFINITIONS.filter((entry) => allowSerialTypes || !entry.createOnly), [allowSerialTypes]);
	const supportsArray = !isPostgresSerialColumnType(value.typeId);
	const handleTypeChange = (nextTypeId) => {
		const next = createDefaultPostgresColumnTypeState(nextTypeId);
		if (value.isArray && !isPostgresSerialColumnType(nextTypeId)) next.isArray = true;
		onChange(next);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: compact ? "" : "space-y-3",
		children: [
			showTypePicker ? /* @__PURE__ */ jsxs("div", {
				className: compact ? "" : "space-y-2",
				children: [!compact ? /* @__PURE__ */ jsxs(Label, {
					htmlFor: "postgres-column-type",
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
							id: compact ? void 0 : "postgres-column-type",
							type: "button",
							variant: "outline",
							role: "combobox",
							"aria-expanded": open,
							className: cn("w-full justify-between gap-2 font-normal", compact ? "h-8 px-2 text-[12px]" : "h-9 text-[13px]"),
							children: [/* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: formatPostgresColumnTypeLabel(value)
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
							}), POSTGRES_COLUMN_TYPE_GROUPS.map((group) => {
								const options = visibleDefinitions.filter((entry) => entry.group === group);
								if (options.length === 0) return null;
								return /* @__PURE__ */ jsx(CommandGroup, {
									heading: group,
									className: "[&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider",
									children: options.map((entry) => /* @__PURE__ */ jsxs(CommandItem, {
										value: getPostgresColumnTypeSearchValue(entry),
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
					id: "postgres-column-array",
					checked: value.isArray === true,
					onCheckedChange: (checked) => onChange({
						...value,
						isArray: checked === true
					}),
					className: "mt-0.5"
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "postgres-column-array",
						className: "text-[12px] font-medium leading-none",
						children: t("Define as array")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-muted-foreground",
						children: t("Store multiple values of this type in a single column.")
					})]
				})]
			}) : null,
			resolvedShowTypeOptions && definition.properties.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-3 rounded-lg border border-border bg-muted/20 px-3 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Type options")
				}), definition.properties.map((property) => /* @__PURE__ */ jsx(PostgresColumnTypePropertyField, {
					property,
					value,
					onChange
				}, property.key))]
			}) : null
		]
	});
}
function PostgresIndexAlgorithmSelector({ value, onChange }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const selected = getPostgresIndexAlgorithmDefinition(value);
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
							children: localizePostgresIndexAlgorithmLabel(value, t)
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
						}), /* @__PURE__ */ jsx(CommandGroup, { children: POSTGRES_INDEX_ALGORITHMS.map((entry) => /* @__PURE__ */ jsxs(CommandItem, {
							value: getPostgresIndexAlgorithmSearchValue(entry),
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
export { PostgresColumnTypeSelector as n, PostgresIndexAlgorithmSelector as t };
