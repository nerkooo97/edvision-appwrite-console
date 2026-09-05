import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { J as getVariableValueError, Y as validateVariables } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, Check, Code, Copy, Download, Eye, EyeOff, FileJson, Key, Loader2, Lock, Pencil, Plus, Trash2, Upload, XCircle } from "lucide-react";
function VariableRowContextMenu(props) {
	const t = useT();
	const { children } = props;
	if (props.variant === "wizard") {
		const { variable: variable$1, onToggleSecret, onDelete: onDelete$1 } = props;
		return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ jsxs(ContextMenuContent, {
			className: "w-56",
			children: [
				/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Key", variable$1.key),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy key")]
				}), !variable$1.secret ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Value", variable$1.value),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy value")]
				}) : null] })] }),
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: onToggleSecret,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: variable$1.secret ? Eye : Lock }), variable$1.secret ? t("Unmark secret") : t("Secret")]
				}),
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: onDelete$1,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
				})
			]
		})] });
	}
	const { variable, onUpdate, onMarkSecret, onDelete } = props;
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: onUpdate,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", variable.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Key", variable.key),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy key")]
				}),
				!variable.secret ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Value", variable.value),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy value")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => variable, { fallback: variable }),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			!variable.secret && onMarkSecret ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: onMarkSecret,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Lock }), t("Secret")]
			})] }) : null,
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: onDelete,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] });
}
const WIZARD_DIALOG_OVERLAY_Z = "z-[10050]";
const WIZARD_DIALOG_CONTENT_Z = "z-[10051]";
function wizardDialogContentClassName(className) {
	return cn(WIZARD_DIALOG_CONTENT_Z, className);
}
function wizardDropdownContentClassName(className) {
	return cn(WIZARD_DIALOG_OVERLAY_Z, className);
}
function VariableEditor({ open, onOpenChange, content, onContentChange, format, onFormatChange, error, onSave, onCopy, onDownload, isSaving = false, elevatedForWizard = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: cn("sm:max-w-3xl p-0 max-h-[90dvh] flex flex-col", elevatedForWizard && wizardDialogContentClassName()),
			overlayClassName: elevatedForWizard ? WIZARD_DIALOG_OVERLAY_Z : void 0,
			onEscapeKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Variable editor") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Edit all variables at once. Secret variables are not shown and will not be affected.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 flex-1 flex flex-col min-h-0 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-4 shrink-0",
							children: [/* @__PURE__ */ jsx(Tabs, {
								value: format,
								onValueChange: (v) => onFormatChange(v),
								children: /* @__PURE__ */ jsxs(TabsList, { children: [/* @__PURE__ */ jsx(TabsTrigger, {
									value: "env",
									children: "ENV"
								}), /* @__PURE__ */ jsx(TabsTrigger, {
									value: "json",
									children: "JSON"
								})] })
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: onCopy,
									children: [/* @__PURE__ */ jsx(Copy, { className: "me-2 h-3.5 w-3.5" }), t("Copy")]
								}), /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: onDownload,
									children: [/* @__PURE__ */ jsx(Download, { className: "me-2 h-3.5 w-3.5" }), t("Download")]
								})]
							})]
						}),
						error && /* @__PURE__ */ jsxs(Alert, {
							variant: "destructive",
							className: "mb-4 shrink-0",
							children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
								className: "text-[13px]",
								children: error
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1 min-h-0 flex flex-col overflow-hidden",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "editor-content",
								className: "text-[13px] mb-2 shrink-0",
								children: t("Content")
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-1 min-h-0 overflow-hidden",
								children: /* @__PURE__ */ jsx(Textarea, {
									id: "editor-content",
									value: content,
									onChange: (e) => onContentChange(e.target.value),
									placeholder: format === "env" ? "SECRET_KEY=dQw4w9WgXcQ..." : "{\n  \"SECRET_KEY\": \"dQw4w9WgXcQ...\"\n}",
									spellCheck: false,
									className: "font-mono text-[13px] h-full w-full resize-none overflow-x-auto overflow-y-auto break-all whitespace-pre-wrap",
									style: {
										wordBreak: "break-all",
										overflowWrap: "anywhere"
									}
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => onOpenChange(false),
						disabled: isSaving,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: onSave,
						disabled: isSaving,
						children: t("Update")
					})]
				})
			]
		})
	});
}
function isWizardProps(props) {
	return props.variant === "wizard";
}
function parseEnvFile(content) {
	const result = {};
	const lines = content.split("\n");
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const match = trimmed.match(/^([^=:#]+?)[=:](.*)$/);
		if (match) {
			const key = match[1].trim();
			let value = match[2].trim();
			value = value.replace(/^["']|["']$/g, "");
			if (key) result[key] = value;
		}
	}
	return result;
}
function variablesToEnv(vars) {
	return vars.filter((v) => !v.secret).map((v) => `${v.key}=${v.value}`).join("\n");
}
function variablesToJson(vars) {
	const obj = {};
	vars.filter((v) => !v.secret).forEach((v) => {
		obj[v.key] = v.value;
	});
	return JSON.stringify(obj, null, 2);
}
function CopyableText({ value, hideValue = false }) {
	const [copied, setCopied] = useState(false);
	const [showValue, setShowValue] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const displayValue = hideValue && !showValue ? "•".repeat(20) : value;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 group cursor-pointer",
		children: [/* @__PURE__ */ jsx("span", {
			className: cn("text-[13px] font-mono text-foreground truncate", hideValue && "w-[200px]"),
			title: value,
			children: displayValue
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
			children: [hideValue && /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setShowValue(!showValue),
				className: "text-muted-foreground hover:text-foreground cursor-pointer",
				children: showValue ? /* @__PURE__ */ jsx(EyeOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" })
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: handleCopy,
				className: "cursor-pointer",
				children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5 text-muted-foreground" })
			})]
		})]
	});
}
function RevealableValueInput({ id, value, onChange, placeholder, autoComplete }) {
	const t = useT();
	const [revealed, setRevealed] = useState(false);
	useEffect(() => {
		setRevealed(false);
	}, [id]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Input, {
			id,
			type: revealed ? "text" : "password",
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			autoComplete,
			className: "font-mono text-[13px] pe-10"
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setRevealed((current) => !current),
			className: "absolute end-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
			"aria-label": revealed ? t("Hide value") : t("Show value"),
			title: revealed ? t("Hide value") : t("Show value"),
			children: revealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
		})]
	});
}
function VariablesSettingsCard(props) {
	const t = useT();
	const isWizard = isWizardProps(props);
	const { emptyTitle = "No environment variables yet", emptyDescription = "Add a variable above or import from a .env file.", className } = props;
	const title = props.title ?? "Environment variables";
	const description = isWizard ? void 0 : props.description;
	const wizardVariables = isWizard ? props.variables : [];
	const onWizardChange = isWizard ? props.onChange : void 0;
	const wizardDisabled = isWizard ? props.disabled ?? false : false;
	const variables = isWizard ? [] : props.variables;
	const total = isWizard ? wizardVariables.length : props.total;
	const isLoading = isWizard ? false : props.isLoading;
	const createMutation = isWizard ? void 0 : props.createMutation;
	const updateMutation = isWizard ? void 0 : props.updateMutation;
	const deleteMutation = isWizard ? void 0 : props.deleteMutation;
	const scopeLabel = isWizard ? "" : props.scopeLabel;
	const page = isWizard ? 0 : props.page ?? 0;
	const limit = isWizard ? 0 : props.limit ?? 10;
	const onPageChange = isWizard ? void 0 : props.onPageChange;
	const onPageSizeChange = isWizard ? void 0 : props.onPageSizeChange;
	const itemLabel = isWizard ? "variables" : props.itemLabel ?? "variables";
	const isVariableEditable = isWizard ? () => true : props.isVariableEditable ?? (() => true);
	const getVariableBadge = isWizard ? void 0 : props.getVariableBadge;
	const projectVariableKeysForWarning = isWizard ? void 0 : props.projectVariableKeysForWarning;
	const duplicateProjectKeyTooltip = isWizard ? void 0 : props.duplicateProjectKeyTooltip;
	const projectVariablesProjectId = isWizard ? void 0 : props.projectVariablesProjectId;
	const actionsDisabled = isWizard ? wizardDisabled : isLoading;
	const dialogContentClass = (extra) => isWizard ? wizardDialogContentClassName(extra) : cn(extra);
	const dialogOverlayClass = isWizard ? WIZARD_DIALOG_OVERLAY_Z : void 0;
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showSecretModal, setShowSecretModal] = useState(false);
	const [showEditorModal, setShowEditorModal] = useState(false);
	const [showImportModal, setShowImportModal] = useState(false);
	const [selectedVar, setSelectedVar] = useState(null);
	const [createPairs, setCreatePairs] = useState([{
		key: "",
		value: ""
	}]);
	const [createSecret, setCreateSecret] = useState(false);
	const [updateValue, setUpdateValue] = useState("");
	const [importFile, setImportFile] = useState(null);
	const [importSecret, setImportSecret] = useState(false);
	const [importError, setImportError] = useState("");
	const [editorContent, setEditorContent] = useState("");
	const [editorFormat, setEditorFormat] = useState("env");
	const [editorError, setEditorError] = useState("");
	const [deleteError, setDeleteError] = useState("");
	const [showSecrets, setShowSecrets] = useState(/* @__PURE__ */ new Set());
	const fileInputRef = useRef(null);
	const createKeyRefs = useRef(/* @__PURE__ */ new Map());
	const focusCreateKeyInput = (index) => {
		requestAnimationFrame(() => {
			createKeyRefs.current.get(index)?.focus();
		});
	};
	const handleAddCreatePair = () => {
		const newIndex = createPairs.length;
		setCreatePairs([...createPairs, {
			key: "",
			value: ""
		}]);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => focusCreateKeyInput(newIndex));
		});
	};
	const currentPage = page + 1;
	const hasPagination = limit > 0 && !!onPageChange;
	const defaultDuplicateProjectKeyTooltip = `This key is also set on the project. The value in this row overwrites the project default for this ${scopeLabel.toLowerCase()}-only the value here is used in this context.`;
	const envToObject = (content) => parseEnvFile(content);
	const jsonToObject = (content) => {
		try {
			return JSON.parse(content);
		} catch {
			throw new Error(t("Invalid JSON format"));
		}
	};
	useEffect(() => {
		if (!showEditorModal || isWizard) return;
		if (variables.length > 0) {
			const editableVars = variables.filter((v) => !v.secret);
			setEditorContent(editorFormat === "env" ? variablesToEnv(editableVars) : variablesToJson(editableVars));
		} else setEditorContent(editorFormat === "env" ? "" : "{}");
	}, [
		showEditorModal,
		editorFormat,
		variables,
		isWizard
	]);
	const handleWizardCreate = () => {
		if (!onWizardChange) return;
		for (const pair of createPairs) {
			if (!pair.key.trim()) {
				toast.error(t("All variable keys are required"));
				return;
			}
			if (wizardVariables.some((v) => v.key === pair.key.trim())) {
				toast.error(`${t("Variable")} ${pair.key.trim()} ${t("already exists")}`);
				return;
			}
		}
		const validationError = validateVariables(createPairs.map((pair) => ({
			key: pair.key.trim(),
			value: pair.value
		})));
		if (validationError) {
			toast.error(validationError);
			return;
		}
		const newVars = createPairs.filter((p) => p.key.trim()).map((pair) => ({
			key: pair.key.trim(),
			value: pair.value,
			secret: createSecret
		}));
		if (newVars.length > 0) onWizardChange([...wizardVariables, ...newVars]);
		setShowCreateModal(false);
		setCreatePairs([{
			key: "",
			value: ""
		}]);
		setCreateSecret(false);
	};
	const handleWizardRemove = (index) => {
		onWizardChange?.(wizardVariables.filter((_, i) => i !== index));
	};
	const handleWizardToggleSecret = (key) => {
		if (!wizardVariables.find((v) => v.key === key) || !onWizardChange) return;
		onWizardChange(wizardVariables.map((v) => v.key === key ? {
			...v,
			secret: !v.secret
		} : v));
	};
	const handleWizardToggleShowSecret = (key) => {
		setShowSecrets((prev) => {
			const next = new Set(prev);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			return next;
		});
	};
	const handleWizardFileImport = (e) => {
		const file = e.target.files?.[0];
		if (!file || !onWizardChange) return;
		const reader = new FileReader();
		reader.onload = (event) => {
			const parsed = parseEnvFile(event.target?.result || "");
			const newVars = [];
			for (const [key, value] of Object.entries(parsed)) if (!wizardVariables.some((v) => v.key === key) && !newVars.some((v) => v.key === key)) newVars.push({
				key,
				value,
				secret: false
			});
			const validationError = validateVariables(newVars);
			if (validationError) {
				toast.error(validationError);
				return;
			}
			if (newVars.length > 0) onWizardChange([...wizardVariables, ...newVars]);
		};
		reader.readAsText(file);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const handleWizardEditorSave = () => {
		if (!onWizardChange) return;
		setEditorError("");
		try {
			const parsed = editorFormat === "env" ? envToObject(editorContent) : jsonToObject(editorContent);
			const secretVars = wizardVariables.filter((v) => v.secret);
			const newVars = Object.entries(parsed).map(([key, value]) => ({
				key,
				value,
				secret: false
			}));
			const validationError = validateVariables(newVars);
			if (validationError) {
				setEditorError(validationError);
				return;
			}
			onWizardChange([...secretVars, ...newVars]);
			setShowEditorModal(false);
		} catch (error) {
			setEditorError(getErrorMessage(error, t("Invalid format")));
		}
	};
	const handleOpenEditor = () => {
		const nonSecret = (isWizard ? wizardVariables : variables).filter((v) => !v.secret);
		setEditorContent(editorFormat === "env" ? variablesToEnv(nonSecret) : variablesToJson(nonSecret));
		setEditorError("");
		setShowEditorModal(true);
	};
	const handleCreate = async () => {
		if (isWizard) {
			handleWizardCreate();
			return;
		}
		if (!createMutation) return;
		for (const pair of createPairs) if (!pair.key.trim()) {
			toast.error(t("All variable keys are required"));
			return;
		}
		const validationError = validateVariables(createPairs.map((pair) => ({
			key: pair.key.trim(),
			value: pair.value
		})));
		if (validationError) {
			toast.error(validationError);
			return;
		}
		try {
			await Promise.all(createPairs.filter((p) => p.key.trim()).map((pair) => createMutation.mutateAsync({
				key: pair.key.trim(),
				value: pair.value,
				secret: createSecret
			})));
			toast.success(t(`${scopeLabel} variable has been created.`));
			setShowCreateModal(false);
			setCreatePairs([{
				key: "",
				value: ""
			}]);
			setCreateSecret(false);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create variable")));
		}
	};
	const handleUpdate = async () => {
		if (isWizard || !updateMutation || !selectedVar) return;
		if (updateValue.length > 8192) {
			toast.error(t("Variable value is longer than 8192 allowed characters"));
			return;
		}
		try {
			await updateMutation.mutateAsync({
				variableId: selectedVar.$id,
				key: selectedVar.key,
				value: updateValue,
				secret: selectedVar.secret || false
			});
			toast.success(t(`${scopeLabel} variable has been updated.`));
			setShowUpdateModal(false);
			setSelectedVar(null);
			setUpdateValue("");
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to update variable")));
		}
	};
	const handleDelete = async () => {
		if (isWizard || !deleteMutation || !selectedVar) return;
		setDeleteError("");
		closeDialogBeforeOverlayUnmount(() => {
			setShowDeleteModal(false);
			setSelectedVar(null);
		});
		try {
			await deleteMutation.mutateAsync(selectedVar.$id);
			toast.success(t(`${scopeLabel} variable has been deleted.`));
		} catch (error) {
			setDeleteError(getErrorMessage(error, t("Failed to delete variable")));
		}
	};
	const handleMarkSecret = async () => {
		if (isWizard || !updateMutation || !selectedVar) return;
		try {
			await updateMutation.mutateAsync({
				variableId: selectedVar.$id,
				key: selectedVar.key,
				value: selectedVar.value || "",
				secret: true
			});
			toast.success(t(`${scopeLabel} variable has been marked as secret.`));
			setShowSecretModal(false);
			setSelectedVar(null);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to mark variable as secret")));
		}
	};
	const handleImport = async () => {
		if (isWizard) return;
		if (!createMutation || !updateMutation) return;
		if (!importFile) {
			setImportError(t("No file selected"));
			return;
		}
		setImportError("");
		try {
			const parsed = parseEnvFile(await importFile.text());
			if (Object.keys(parsed).length === 0) {
				setImportError(t("No variables found"));
				return;
			}
			const existingKeys = new Set(variables.map((v) => v.key));
			const entries = Object.entries(parsed);
			const keyError = validateVariables(entries.filter(([key]) => !existingKeys.has(key)).map(([key, value]) => ({
				key,
				value
			})));
			if (keyError) {
				setImportError(keyError);
				return;
			}
			for (const [key, value] of entries) {
				const valueError = getVariableValueError(key, value);
				if (valueError) {
					setImportError(valueError);
					return;
				}
			}
			const promises = [];
			for (const [key, value] of Object.entries(parsed)) if (existingKeys.has(key)) {
				const existing = variables.find((v) => v.key === key);
				if (existing?.$id) promises.push(updateMutation.mutateAsync({
					variableId: existing.$id,
					key,
					value,
					secret: importSecret
				}));
			} else promises.push(createMutation.mutateAsync({
				key,
				value,
				secret: importSecret
			}));
			await Promise.all(promises);
			toast.success(t("Variables have been uploaded."));
			setShowImportModal(false);
			setImportFile(null);
			setImportSecret(false);
		} catch (error) {
			setImportError(getErrorMessage(error, t("Failed to import variables")));
		}
	};
	const handleEditorSave = async () => {
		if (isWizard) {
			handleWizardEditorSave();
			return;
		}
		if (!createMutation || !updateMutation || !deleteMutation) return;
		setEditorError("");
		try {
			const parsed = editorFormat === "env" ? envToObject(editorContent) : jsonToObject(editorContent);
			const editableVars = variables.filter((v) => !v.secret);
			const secretKeys = new Set(variables.filter((v) => v.secret).map((v) => v.key));
			const keyError = validateVariables(Object.entries(parsed).filter(([key]) => !editableVars.some((v) => v.key === key) && !secretKeys.has(key)).map(([key, value]) => ({
				key,
				value
			})));
			if (keyError) {
				setEditorError(keyError);
				return;
			}
			for (const [key, value] of Object.entries(parsed)) {
				const valueError = getVariableValueError(key, value);
				if (valueError) {
					setEditorError(valueError);
					return;
				}
			}
			const updatePromises = [];
			const deletePromises = [];
			for (const variable of editableVars) {
				if (!variable.$id) continue;
				if (parsed[variable.key] === void 0) deletePromises.push(deleteMutation.mutateAsync(variable.$id));
				else if (parsed[variable.key] !== variable.value) updatePromises.push(updateMutation.mutateAsync({
					variableId: variable.$id,
					key: variable.key,
					value: parsed[variable.key],
					secret: false
				}));
			}
			const createPromises = [];
			for (const [key, value] of Object.entries(parsed)) if (!editableVars.some((v) => v.key === key) && !secretKeys.has(key)) createPromises.push(createMutation.mutateAsync({
				key,
				value,
				secret: false
			}));
			await Promise.all([
				...updatePromises,
				...deletePromises,
				...createPromises
			]);
			toast.success(t("Variables have been updated."));
			setShowEditorModal(false);
			setEditorContent("");
		} catch (error) {
			setEditorError(getErrorMessage(error, t("Failed to save variables")));
		}
	};
	const handleDownload = () => {
		const editableVars = (isWizard ? wizardVariables : variables).filter((v) => !v.secret);
		const content = editorFormat === "env" ? variablesToEnv(editableVars) : variablesToJson(editableVars);
		const filename = editorFormat === "env" ? "variables.env" : "variables.json";
		const blob = new Blob([content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	};
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(editorContent);
			toast.success(t("Copied to clipboard"));
		} catch {
			toast.error(t("Failed to copy to clipboard"));
		}
	};
	const handleFormatSwitch = (format) => {
		if (format === editorFormat) return;
		try {
			const parsed = editorFormat === "env" ? envToObject(editorContent) : jsonToObject(editorContent);
			setEditorContent(format === "env" ? Object.entries(parsed).map(([k, v]) => `${k}=${v}`).join("\n") : JSON.stringify(parsed, null, 2));
			setEditorFormat(format);
		} catch {
			const editableVars = (isWizard ? wizardVariables : variables).filter((v) => !v.secret);
			setEditorContent(format === "env" ? variablesToEnv(editableVars) : variablesToJson(editableVars));
			setEditorFormat(format);
		}
	};
	const isEmpty = isWizard ? wizardVariables.length === 0 : total === 0;
	const listVariables = isWizard ? wizardVariables : variables;
	useEffect(() => {
		if (!showCreateModal) {
			setCreatePairs([{
				key: "",
				value: ""
			}]);
			setCreateSecret(false);
			createKeyRefs.current.clear();
		}
	}, [showCreateModal]);
	useEffect(() => {
		if (!showUpdateModal) setUpdateValue("");
		else if (selectedVar) setUpdateValue(selectedVar.secret ? "" : selectedVar.value || "");
	}, [showUpdateModal, selectedVar]);
	useEffect(() => {
		if (!showDeleteModal) {
			setSelectedVar(null);
			setDeleteError("");
		}
	}, [showDeleteModal]);
	useEffect(() => {
		if (!showSecretModal) setSelectedVar(null);
	}, [showSecretModal]);
	useEffect(() => {
		if (!showImportModal) {
			setImportFile(null);
			setImportSecret(false);
			setImportError("");
		}
	}, [showImportModal]);
	useEffect(() => {
		if (!showEditorModal) {
			setEditorContent("");
			setEditorError("");
			setEditorFormat("env");
		}
	}, [showEditorModal]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: cn("rounded-xl border border-border bg-card/50 overflow-hidden", className),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t(title)
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: cn("px-6 py-4", !isWizard && "@container"),
					children: /* @__PURE__ */ jsxs("div", {
						className: cn(!isWizard && "flex gap-6 @[600px]:flex-row flex-col"),
						children: [description || projectVariablesProjectId ? /* @__PURE__ */ jsxs("div", {
							className: "@[600px]:w-64 shrink-0 space-y-4",
							children: [description ? /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: t(description)
							}) : null, projectVariablesProjectId ? /* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								className: "h-9 w-full text-[13px]",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/projects/$projectId/settings/variables",
									params: { projectId: projectVariablesProjectId },
									children: t("Manage project variables")
								})
							}) : null]
						}) : null, /* @__PURE__ */ jsxs("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2 mb-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										isWizard ? /* @__PURE__ */ jsx("input", {
											ref: fileInputRef,
											type: "file",
											accept: ".env,.txt",
											onChange: handleWizardFileImport,
											className: "hidden"
										}) : null,
										/* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: handleOpenEditor,
											disabled: actionsDisabled,
											children: [/* @__PURE__ */ jsx(Code, { className: "me-1.5 h-4 w-4" }), t("Editor")]
										}),
										/* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: () => isWizard ? fileInputRef.current?.click() : setShowImportModal(true),
											disabled: actionsDisabled,
											children: [/* @__PURE__ */ jsx(Upload, { className: "me-1.5 h-4 w-4" }), t("Import .env")]
										})
									]
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => setShowCreateModal(true),
									disabled: actionsDisabled,
									children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Create variable")]
								})]
							}), !isWizard && isLoading ? /* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-center py-8",
								children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
							}) : isEmpty ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Key,
								title: emptyTitle,
								description: emptyDescription,
								isEmpty: true,
								variant: "card"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider min-w-[200px] max-w-[400px]",
										children: t("Key")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider min-w-[200px] max-w-[400px]",
										children: t("Value")
									}),
									/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[50px]" })
								]
							}) }), /* @__PURE__ */ jsx(TableBody, { children: listVariables.map((variable, index) => {
								if (isWizard) {
									const w = variable;
									return /* @__PURE__ */ jsx(VariableRowContextMenu, {
										variant: "wizard",
										variable: w,
										onToggleSecret: () => handleWizardToggleSecret(w.key),
										onDelete: () => handleWizardRemove(index),
										children: /* @__PURE__ */ jsxs(TableRow, {
											className: "border-b border-border/50",
											children: [
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-4 py-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[12px] font-mono",
														children: w.key
													})
												}),
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-4 py-3",
													children: w.secret ? /* @__PURE__ */ jsx("div", {
														className: "flex items-center gap-2",
														children: showSecrets.has(w.key) ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("code", {
															className: "text-[12px] font-mono text-muted-foreground",
															children: w.value || t("(empty)")
														}), /* @__PURE__ */ jsx(Button, {
															type: "button",
															variant: "ghost",
															size: "sm",
															onClick: () => handleWizardToggleShowSecret(w.key),
															className: "h-6 w-6 p-0",
															children: /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" })
														})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Badge, {
															variant: "secondary",
															className: "text-[12px]",
															children: t("Secret")
														}), /* @__PURE__ */ jsx(Button, {
															type: "button",
															variant: "ghost",
															size: "sm",
															onClick: () => handleWizardToggleShowSecret(w.key),
															className: "h-6 w-6 p-0",
															children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
														})] })
													}) : /* @__PURE__ */ jsx("code", {
														className: "text-[12px] font-mono text-muted-foreground",
														children: w.value || t("(empty)")
													})
												}),
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-4 py-3",
													children: !wizardDisabled && /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
															compact: true,
															onClick: (e) => e.stopPropagation()
														})
													}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
														align: "end",
														className: wizardDropdownContentClassName(),
														children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
															onClick: () => handleWizardToggleSecret(w.key),
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: w.secret ? Eye : Lock,
																children: w.secret ? t("Unmark secret") : t("Secret")
															})
														}), /* @__PURE__ */ jsx(DropdownMenuItem, {
															onClick: () => handleWizardRemove(index),
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: Trash2,
																children: t("Delete")
															})
														})]
													})] })
												})
											]
										})
									}, `${w.key}-${index}`);
								}
								const record = variable;
								const editable = isVariableEditable(record);
								const badge = getVariableBadge?.(record);
								const showProjectKeyWarning = projectVariableKeysForWarning?.has(record.key) ?? false;
								return /* @__PURE__ */ jsx(VariableRowContextMenu, {
									variant: "settings",
									variable: record,
									onUpdate: () => {
										openDialogAfterOverlayCloses(() => {
											setSelectedVar(record);
											setShowUpdateModal(true);
										});
									},
									onMarkSecret: !record.secret ? () => {
										openDialogAfterOverlayCloses(() => {
											setSelectedVar(record);
											setShowSecretModal(true);
										});
									} : void 0,
									onDelete: () => {
										openDialogAfterOverlayCloses(() => {
											setSelectedVar(record);
											setShowDeleteModal(true);
										});
									},
									children: /* @__PURE__ */ jsxs(TableRow, { children: [
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 min-w-0",
												children: [
													/* @__PURE__ */ jsx(CopyableText, { value: record.key }),
													showProjectKeyWarning && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx("button", {
															type: "button",
															className: "inline-flex shrink-0 text-amber-600 hover:text-amber-700 cursor-help rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
															"aria-label": t("Same name as a project variable"),
															children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5" })
														})
													}), /* @__PURE__ */ jsx(TooltipContent, {
														side: "top",
														className: "max-w-[280px] text-[12px]",
														children: t(duplicateProjectKeyTooltip ?? defaultDuplicateProjectKeyTooltip)
													})] }),
													badge && /* @__PURE__ */ jsx(Badge, {
														variant: "secondary",
														className: "text-[11px]",
														children: t(badge)
													})
												]
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: record.secret ? /* @__PURE__ */ jsx(Badge, {
												variant: "secondary",
												className: "text-[12px]",
												children: t("Secret")
											}) : /* @__PURE__ */ jsx(CopyableText, {
												value: record.value || "",
												hideValue: true
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: editable && /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
													compact: true,
													onClick: (e) => e.stopPropagation()
												})
											}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
												align: "end",
												children: [
													/* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => {
															openDialogAfterOverlayCloses(() => {
																setSelectedVar(record);
																setShowUpdateModal(true);
															});
														},
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Pencil,
															children: t("Update")
														})
													}),
													!record.secret && /* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => {
															openDialogAfterOverlayCloses(() => {
																setSelectedVar(record);
																setShowSecretModal(true);
															});
														},
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Lock,
															children: t("Secret")
														})
													}),
													/* @__PURE__ */ jsx(DropdownMenuItem, {
														onSelect: () => {
															openDialogAfterOverlayCloses(() => {
																setSelectedVar(record);
																setShowDeleteModal(true);
															});
														},
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Trash2,
															children: t("Delete")
														})
													})
												]
											})] })
										})
									] })
								}, record.$id);
							}) })] }), !isWizard && hasPagination && /* @__PURE__ */ jsx("div", {
								className: "mt-4",
								children: /* @__PURE__ */ jsx(Pagination, {
									currentPage,
									totalItems: total,
									pageSize: limit,
									pageSizeOptions: [
										10,
										25,
										50,
										100
									],
									onPageChange: (newPage) => onPageChange(newPage - 1),
									onPageSizeChange: onPageSizeChange ?? (() => {}),
									showPageSizeSelector: !!onPageSizeChange,
									itemLabel
								})
							})] })]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: showCreateModal,
			onOpenChange: setShowCreateModal,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: dialogContentClass("sm:max-w-2xl p-0"),
				overlayClassName: dialogOverlayClass,
				onOpenAutoFocus: (e) => {
					e.preventDefault();
					focusCreateKeyInput(0);
				},
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create variable") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Add one or more environment variables. You can add multiple variables at once.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-0 max-h-[60dvh] overflow-y-auto",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								createPairs.map((pair, index) => /* @__PURE__ */ jsxs("div", {
									className: "space-y-3 p-4 border border-border rounded-lg",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsxs(Label, {
												className: "text-[13px] font-medium",
												children: [
													t("Variable"),
													" ",
													index + 1
												]
											}), createPairs.length > 1 && /* @__PURE__ */ jsx(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												className: "h-7 w-7 p-0",
												onClick: () => setCreatePairs(createPairs.filter((_, i) => i !== index)),
												disabled: createPairs.length === 1 && !pair.key && !pair.value,
												children: /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" })
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsxs(Label, {
												htmlFor: `key-${index}`,
												className: "text-[12px]",
												children: [
													t("Key"),
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "text-destructive",
														children: "*"
													})
												]
											}), /* @__PURE__ */ jsx(Input, {
												id: `key-${index}`,
												ref: (el) => {
													if (el) createKeyRefs.current.set(index, el);
													else createKeyRefs.current.delete(index);
												},
												value: pair.key,
												onChange: (e) => {
													const newPairs = [...createPairs];
													newPairs[index].key = e.target.value;
													setCreatePairs(newPairs);
												},
												placeholder: "ENTER_KEY",
												autoComplete: "off",
												className: "font-mono text-[13px]"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsxs(Label, {
												htmlFor: `value-${index}`,
												className: "text-[12px]",
												children: [
													t("Value"),
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "text-destructive",
														children: "*"
													})
												]
											}), /* @__PURE__ */ jsx(RevealableValueInput, {
												id: `value-${index}`,
												value: pair.value,
												onChange: (nextValue) => {
													const newPairs = [...createPairs];
													newPairs[index].value = nextValue;
													setCreatePairs(newPairs);
												},
												placeholder: t("Enter value")
											})]
										})
									]
								}, index)),
								/* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: handleAddCreatePair,
									disabled: !createPairs[createPairs.length - 1]?.key,
									children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add variable")]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2 pt-2",
									children: [/* @__PURE__ */ jsx(Checkbox, {
										id: "create-secret",
										checked: createSecret,
										onCheckedChange: (c) => setCreateSecret(c === true)
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "create-secret",
										className: "text-[13px] cursor-pointer",
										children: t("Secret")
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground -mt-2",
									children: t("If selected, you and your team won't be able to read the values after creation.")
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setShowCreateModal(false),
							disabled: createMutation?.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleCreate,
							disabled: createMutation?.isPending || createPairs.some((p) => !p.key.trim()) || createPairs.some((p) => p.value.length > 8192),
							children: t("Create")
						})]
					})
				]
			})
		}),
		!isWizard && /* @__PURE__ */ jsx(Dialog, {
			open: showUpdateModal,
			onOpenChange: (open) => {
				setShowUpdateModal(open);
				if (!open) setSelectedVar(null);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Update variable") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Update the value of this variable. The key cannot be changed.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "update-key",
									className: "text-[13px]",
									children: t("Key")
								}), /* @__PURE__ */ jsx(Input, {
									id: "update-key",
									value: selectedVar?.key || "",
									disabled: true,
									className: "font-mono text-[13px] bg-muted"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: `update-value-${selectedVar?.$id ?? "new"}`,
									className: "text-[13px]",
									children: [
										t("Value"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(RevealableValueInput, {
									id: `update-value-${selectedVar?.$id ?? "new"}`,
									value: updateValue,
									onChange: setUpdateValue,
									placeholder: t("Enter value"),
									autoComplete: "off"
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => {
								setShowUpdateModal(false);
								setSelectedVar(null);
							},
							disabled: updateMutation?.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleUpdate,
							disabled: updateMutation?.isPending || !updateValue.trim() || updateValue.length > 8192,
							children: t("Update")
						})]
					})
				]
			})
		}),
		!isWizard && /* @__PURE__ */ jsx(Dialog, {
			open: showDeleteModal,
			onOpenChange: setShowDeleteModal,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete variable") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Are you sure you want to delete this variable? This action cannot be undone.")
						})]
					}),
					deleteError && /* @__PURE__ */ jsx("div", {
						className: "px-6",
						children: /* @__PURE__ */ jsx("div", {
							className: "rounded-md bg-destructive/10 border border-destructive/20 p-3",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-destructive",
								children: deleteError
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setShowDeleteModal(false),
							disabled: deleteMutation?.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleDelete,
							disabled: deleteMutation?.isPending,
							children: t("Delete")
						})]
					})
				]
			})
		}),
		!isWizard && /* @__PURE__ */ jsx(Dialog, {
			open: showSecretModal,
			onOpenChange: setShowSecretModal,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Mark as secret") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Once marked as secret, you and your team won't be able to read this variable's value. This action cannot be undone.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => setShowSecretModal(false),
						disabled: updateMutation?.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleMarkSecret,
						disabled: updateMutation?.isPending,
						children: t("Mark as secret")
					})]
				})]
			})
		}),
		!isWizard && /* @__PURE__ */ jsx(Dialog, {
			open: showImportModal,
			onOpenChange: setShowImportModal,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Import .env file") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Upload a .env file to import variables. Existing variables with the same key will be updated.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "import-file",
										className: "text-[13px]",
										children: t("File")
									}), /* @__PURE__ */ jsx(Input, {
										id: "import-file",
										type: "file",
										accept: ".env",
										onChange: (e) => {
											const file = e.target.files?.[0];
											if (file) setImportFile(file);
										},
										className: "text-[13px]"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx(Checkbox, {
										id: "import-secret",
										checked: importSecret,
										onCheckedChange: (c) => setImportSecret(c === true)
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "import-secret",
										className: "text-[13px] cursor-pointer",
										children: t("Mark all as secret")
									})]
								}),
								importError && /* @__PURE__ */ jsx("div", {
									className: "rounded-md bg-destructive/10 border border-destructive/20 p-3",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-destructive",
										children: importError
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setShowImportModal(false),
							disabled: createMutation?.isPending || updateMutation?.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleImport,
							disabled: !importFile || createMutation?.isPending || updateMutation?.isPending,
							children: t("Import")
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(VariableEditor, {
			open: showEditorModal,
			onOpenChange: setShowEditorModal,
			content: editorContent,
			onContentChange: setEditorContent,
			format: editorFormat,
			onFormatChange: handleFormatSwitch,
			error: editorError,
			onSave: handleEditorSave,
			onCopy: handleCopy,
			onDownload: handleDownload,
			elevatedForWizard: isWizard,
			isSaving: !isWizard && !!(createMutation?.isPending || updateMutation?.isPending || deleteMutation?.isPending)
		})
	] });
}
export { VariablesSettingsCard as t };
