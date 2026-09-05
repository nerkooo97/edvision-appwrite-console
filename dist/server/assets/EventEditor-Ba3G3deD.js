import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EventResourceIdSelector } from "./EventResourceIdSelector-DoLZYJw-.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { Check, Copy, Pencil } from "lucide-react";
const EVENT_SERVICES = [
	{
		name: "buckets",
		resources: [{
			name: "files",
			actions: [
				{ name: "create" },
				{ name: "update" },
				{ name: "delete" }
			]
		}],
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	},
	{
		name: "databases",
		resources: [
			{
				name: "tables",
				actions: [
					{ name: "create" },
					{ name: "update" },
					{ name: "delete" }
				]
			},
			{
				name: "columns",
				actions: [{ name: "create" }, { name: "delete" }]
			},
			{
				name: "rows",
				actions: [
					{ name: "create" },
					{ name: "update" },
					{ name: "delete" },
					{ name: "upsert" }
				]
			},
			{
				name: "indexes",
				actions: [{ name: "create" }, { name: "delete" }]
			}
		],
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	},
	{
		name: "functions",
		resources: [{
			name: "deployments",
			actions: [
				{ name: "create" },
				{ name: "update" },
				{ name: "delete" }
			]
		}, {
			name: "executions",
			actions: [
				{ name: "create" },
				{ name: "update" },
				{ name: "delete" }
			]
		}],
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	},
	{
		name: "teams",
		resources: [{
			name: "memberships",
			actions: [
				{ name: "create" },
				{
					name: "update",
					columns: ["status"]
				},
				{ name: "delete" }
			]
		}],
		actions: [
			{ name: "create" },
			{
				name: "update",
				columns: ["prefs"]
			},
			{ name: "delete" }
		]
	},
	{
		name: "users",
		resources: [
			{
				name: "recovery",
				actions: [{ name: "create" }, { name: "update" }]
			},
			{
				name: "sessions",
				actions: [{ name: "create" }, { name: "delete" }]
			},
			{
				name: "verification",
				actions: [{ name: "create" }, { name: "update" }]
			}
		],
		actions: [
			{ name: "create" },
			{
				name: "update",
				columns: [
					"email",
					"name",
					"password",
					"status",
					"prefs"
				]
			},
			{ name: "delete" }
		]
	},
	{
		name: "providers",
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	},
	{
		name: "topics",
		resources: [{
			name: "subscribers",
			actions: [{ name: "create" }, { name: "delete" }]
		}],
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	},
	{
		name: "messages",
		actions: [
			{ name: "create" },
			{ name: "update" },
			{ name: "delete" }
		]
	}
];
function buildEventString(sel) {
	const parts = [];
	if (!sel.service) return "";
	parts.push(sel.service);
	if (sel.service === "databases" && sel.databaseId) parts.push(sel.databaseId);
	else if (sel.service === "buckets" && sel.bucketId) parts.push(sel.bucketId);
	else if (sel.service === "functions" && sel.functionId) parts.push(sel.functionId);
	else if (sel.service === "teams" && sel.teamId) parts.push(sel.teamId);
	else if (sel.service === "users" && sel.userId) parts.push(sel.userId);
	else if (sel.service === "topics" && sel.topicId) parts.push(sel.topicId);
	else if (sel.service === "providers" && sel.providerId) parts.push(sel.providerId);
	else parts.push("*");
	if (sel.service === "databases" && sel.resource === "rows") {
		parts.push("tables");
		parts.push(sel.tableId ?? "*");
		parts.push("rows", sel.rowId ?? "*");
	} else if (sel.service === "databases" && sel.resource === "columns") {
		parts.push("tables");
		parts.push(sel.tableId ?? "*");
		parts.push("columns", sel.columnId ?? "*");
	} else if (sel.service === "databases" && sel.resource === "indexes") {
		parts.push("tables");
		parts.push(sel.tableId ?? "*");
		parts.push("indexes", sel.indexId ?? "*");
	} else if (sel.service === "databases" && sel.resource === "tables") {
		parts.push("tables");
		parts.push(sel.tableId ?? "*");
	} else if (sel.service === "buckets" && sel.resource === "files") parts.push("files", sel.fileId ?? "*");
	else if (sel.resource) {
		parts.push(sel.resource);
		parts.push("*");
	}
	if (sel.action) parts.push(sel.action);
	if (sel.attribute) parts.push(sel.attribute);
	return parts.join(".");
}
function parseEventString(str) {
	if (!str || typeof str !== "string") return null;
	const trimmed = str.trim();
	if (!trimmed) return null;
	const parts = trimmed.split(".");
	const sel = {
		service: null,
		resource: null,
		action: null,
		attribute: null
	};
	let i = 0;
	if (parts.length <= i) return sel;
	const svc = EVENT_SERVICES.find((s) => s.name === parts[i]);
	if (!svc) return null;
	sel.service = svc.name;
	i++;
	if (parts[i] === "*") i++;
	else if (parts[i] && /^[a-zA-Z0-9_-]+$/.test(parts[i])) {
		if (svc.name === "databases") sel.databaseId = parts[i];
		else if (svc.name === "buckets") sel.bucketId = parts[i];
		else if (svc.name === "functions") sel.functionId = parts[i];
		else if (svc.name === "teams") sel.teamId = parts[i];
		else if (svc.name === "users") sel.userId = parts[i];
		else if (svc.name === "topics") sel.topicId = parts[i];
		else if (svc.name === "providers") sel.providerId = parts[i];
		i++;
	}
	if (i >= parts.length) return sel;
	if (svc.name === "databases" && parts[i] === "tables") {
		i++;
		if (parts[i] && parts[i] !== "*") sel.tableId = parts[i];
		i++;
		if (parts[i] === "rows") {
			sel.resource = "rows";
			i++;
			if (parts[i] && parts[i] !== "*") sel.rowId = parts[i];
			i++;
		} else if (parts[i] === "columns") {
			sel.resource = "columns";
			i++;
			if (parts[i] && parts[i] !== "*") sel.columnId = parts[i];
			i++;
		} else if (parts[i] === "indexes") {
			sel.resource = "indexes";
			i++;
			if (parts[i] && parts[i] !== "*") sel.indexId = parts[i];
			i++;
		} else sel.resource = "tables";
	} else if (svc.name === "buckets" && parts[i] === "files") {
		sel.resource = "files";
		i++;
		if (parts[i] && parts[i] !== "*") sel.fileId = parts[i];
		i++;
	} else if (svc.resources) {
		for (const r of svc.resources) if (parts[i] === r.name) {
			sel.resource = r.name;
			i += 2;
			break;
		}
	}
	if (i >= parts.length) return sel;
	const actions = getActionsForSelection(sel);
	if (actions.map((a) => a.name).includes(parts[i])) {
		sel.action = parts[i];
		i++;
	}
	if (i >= parts.length) return sel;
	if (actions.find((a) => a.name === sel.action)?.columns?.includes(parts[i])) sel.attribute = parts[i];
	return sel;
}
function getResources(serviceName) {
	return EVENT_SERVICES.find((s) => s.name === serviceName)?.resources ?? [];
}
function getActions(serviceName) {
	return EVENT_SERVICES.find((s) => s.name === serviceName)?.actions ?? [];
}
function getResourceActions(serviceName, resourceName) {
	return (EVENT_SERVICES.find((s) => s.name === serviceName)?.resources?.find((r) => r.name === resourceName))?.actions ?? [];
}
function getActionsForSelection(sel) {
	if (!sel.service) return [];
	if (sel.resource) return getResourceActions(sel.service, sel.resource);
	return getActions(sel.service);
}
const DOCS_LINK = "/docs/advanced/platform/events";
function buildChannelString(sel) {
	return buildEventString({
		...sel,
		action: null,
		attribute: null
	});
}
function isValidChannelString(str) {
	const trimmed = str.trim();
	if (!trimmed) return false;
	if (parseEventString(trimmed) !== null) return true;
	return /^[\w.*-]+(\.[\w*-]+)*$/.test(trimmed);
}
function useEventBuilder(initialValue) {
	const [selection, setSelection] = useState({
		service: null,
		resource: null,
		action: null,
		attribute: null
	});
	const [customMode, setCustomMode] = useState(false);
	const [customInput, setCustomInput] = useState("");
	const eventString = customMode ? customInput : buildEventString(selection);
	const isValid = eventString.trim().length > 0 && (!customMode || parseEventString(customInput.trim()) !== null || /^[\w.*-]+(\.[\w*]+)+$/.test(customInput.trim()));
	const reset = useCallback(() => {
		setSelection({
			service: null,
			resource: null,
			action: null,
			attribute: null,
			databaseId: void 0,
			tableId: void 0,
			bucketId: void 0,
			functionId: void 0,
			teamId: void 0,
			userId: void 0,
			topicId: void 0,
			providerId: void 0,
			fileId: void 0,
			rowId: void 0,
			columnId: void 0,
			indexId: void 0
		});
		setCustomMode(false);
		setCustomInput("");
	}, []);
	const initFromString = useCallback((str) => {
		const parsed = parseEventString(str);
		if (parsed) {
			setSelection(parsed);
			setCustomMode(false);
			setCustomInput(str);
		} else {
			setCustomMode(true);
			setCustomInput(str);
		}
	}, []);
	useEffect(() => {
		if (initialValue) initFromString(initialValue);
		else reset();
	}, [
		initialValue,
		initFromString,
		reset
	]);
	return {
		selection,
		setService: useCallback((v) => {
			setSelection(() => ({
				service: v,
				resource: null,
				action: null,
				attribute: null,
				databaseId: void 0,
				tableId: void 0,
				bucketId: void 0,
				functionId: void 0,
				teamId: void 0,
				userId: void 0,
				topicId: void 0,
				providerId: void 0,
				fileId: void 0,
				rowId: void 0,
				columnId: void 0,
				indexId: void 0
			}));
		}, []),
		setResource: useCallback((v) => {
			setSelection((s) => ({
				...s,
				resource: v,
				action: null,
				attribute: null,
				tableId: void 0,
				fileId: void 0,
				rowId: void 0,
				columnId: void 0,
				indexId: void 0
			}));
		}, []),
		setAction: useCallback((v) => {
			setSelection((s) => ({
				...s,
				action: v,
				attribute: null
			}));
		}, []),
		setAttribute: useCallback((v) => {
			setSelection((s) => ({
				...s,
				attribute: v
			}));
		}, []),
		setDatabaseId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				databaseId: v ?? void 0,
				tableId: void 0,
				rowId: void 0,
				columnId: void 0,
				indexId: void 0
			}));
		}, []),
		setTableId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				tableId: v ?? void 0,
				rowId: void 0,
				columnId: void 0,
				indexId: void 0
			}));
		}, []),
		setBucketId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				bucketId: v ?? void 0,
				fileId: void 0
			}));
		}, []),
		setFunctionId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				functionId: v ?? void 0
			}));
		}, []),
		setTeamId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				teamId: v ?? void 0
			}));
		}, []),
		setUserId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				userId: v ?? void 0
			}));
		}, []),
		setTopicId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				topicId: v ?? void 0
			}));
		}, []),
		setProviderId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				providerId: v ?? void 0
			}));
		}, []),
		setFileId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				fileId: v ?? void 0
			}));
		}, []),
		setRowId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				rowId: v ?? void 0
			}));
		}, []),
		setColumnId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				columnId: v ?? void 0
			}));
		}, []),
		setIndexId: useCallback((v) => {
			setSelection((s) => ({
				...s,
				indexId: v ?? void 0
			}));
		}, []),
		customMode,
		setCustomMode,
		customInput,
		setCustomInput,
		eventString,
		isValid,
		reset,
		initFromString,
		applyCustomAndExit: useCallback(() => {
			const parsed = parseEventString(customInput.trim());
			if (parsed) {
				setSelection(parsed);
				setCustomMode(false);
			}
		}, [customInput]),
		cancelCustom: useCallback(() => {
			setCustomMode(false);
			setCustomInput(buildEventString(selection));
		}, [selection]),
		enterCustomMode: useCallback(() => {
			setCustomInput(buildEventString(selection));
			setCustomMode(true);
		}, [selection])
	};
}
function EventEditor({ open, onOpenChange, initialValue, onCreated, description, projectId, channelMode = false, docsLink, confirmLabel, title }) {
	const t = useT();
	const builder = useEventBuilder(initialValue);
	const [copied, setCopied] = useState(false);
	const builtString = channelMode ? buildChannelString(builder.selection) : builder.eventString;
	const previewString = builder.customMode ? builder.customInput : builtString;
	const isConfirmValid = channelMode ? builder.customMode ? isValidChannelString(builder.customInput) : builtString.trim().length > 0 : builder.isValid;
	const handleConfirm = () => {
		const str = builder.customMode ? builder.customInput.trim() : builtString;
		if (str && isConfirmValid) {
			onCreated(str);
			onOpenChange(false);
			builder.reset();
		}
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(previewString);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	const resources = builder.selection.service ? getResources(builder.selection.service) : [];
	const actions = builder.selection.resource ? getResourceActions(builder.selection.service, builder.selection.resource) : getActions(builder.selection.service);
	const selectedAction = actions.find((a) => a.name === builder.selection.action);
	const showResourceRow = resources.length > 0;
	const showActionRow = !channelMode && builder.selection.service;
	const showAttributeRow = !channelMode && selectedAction?.columns && selectedAction.columns.length > 0;
	const resolvedDocsLink = docsLink ?? (channelMode ? "/docs/apis/realtime/subscribe" : "/docs/advanced/platform/events");
	const resolvedTitle = title ?? (channelMode ? initialValue ? "Edit channel" : "Create channel" : initialValue ? "Edit event" : "Create event");
	const resolvedConfirmLabel = confirmLabel ?? (channelMode ? "Subscribe" : initialValue ? "Update" : "Add event");
	const resolvedDescription = description ?? (channelMode ? "Build a Realtime channel to subscribe to. Use wildcards (*) to match multiple resources." : "Select events that will trigger your function or webhook.");
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0 z-[130]",
			overlayClassName: "z-[130]",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t(resolvedTitle) }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t(resolvedDescription),
							" ",
							/* @__PURE__ */ jsx("a", {
								href: resolvedDocsLink,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "link-neutral",
								children: t("Learn more")
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "min-w-0 overflow-hidden px-6 pb-4 pt-4 space-y-4",
					children: builder.customMode ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Input, {
							value: builder.customInput,
							onChange: (e) => builder.setCustomInput(e.target.value),
							placeholder: channelMode ? t("e.g. account or databases.*.tables.*.rows.*") : t("e.g. databases.*.tables.*.rows.*.create"),
							className: "font-mono text-[13px]",
							autoFocus: true
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								size: "sm",
								variant: "outline",
								onClick: builder.cancelCustom,
								children: t("Cancel")
							}), /* @__PURE__ */ jsxs(Button, {
								size: "sm",
								onClick: builder.applyCustomAndExit,
								disabled: channelMode ? !isValidChannelString(builder.customInput) : !builder.isValid,
								children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 me-1.5" }), t("Apply")]
							})]
						})]
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(PillRow, {
							label: "Service",
							value: builder.selection.service,
							options: EVENT_SERVICES.map((s) => s.name),
							onSelect: builder.setService
						}),
						builder.selection.service === "databases" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Database (optional)",
							projectId,
							type: "database",
							value: builder.selection.databaseId ?? "*",
							onSelect: (v) => builder.setDatabaseId(v === "*" ? void 0 : v),
							placeholder: "All databases"
						}),
						builder.selection.service === "buckets" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Bucket (optional)",
							projectId,
							type: "bucket",
							value: builder.selection.bucketId ?? "*",
							onSelect: (v) => builder.setBucketId(v === "*" ? void 0 : v),
							placeholder: "All buckets"
						}),
						builder.selection.service === "functions" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Function (optional)",
							projectId,
							type: "function",
							value: builder.selection.functionId ?? "*",
							onSelect: (v) => builder.setFunctionId(v === "*" ? void 0 : v),
							placeholder: "All functions"
						}),
						builder.selection.service === "teams" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Team (optional)",
							projectId,
							type: "team",
							value: builder.selection.teamId ?? "*",
							onSelect: (v) => builder.setTeamId(v === "*" ? void 0 : v),
							placeholder: "All teams"
						}),
						builder.selection.service === "users" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "User (optional)",
							projectId,
							type: "user",
							value: builder.selection.userId ?? "*",
							onSelect: (v) => builder.setUserId(v === "*" ? void 0 : v),
							placeholder: "All users"
						}),
						builder.selection.service === "topics" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Topic (optional)",
							projectId,
							type: "topic",
							value: builder.selection.topicId ?? "*",
							onSelect: (v) => builder.setTopicId(v === "*" ? void 0 : v),
							placeholder: "All topics"
						}),
						builder.selection.service === "providers" && projectId && /* @__PURE__ */ jsx(IdSelectorRow, {
							label: "Provider (optional)",
							projectId,
							type: "provider",
							value: builder.selection.providerId ?? "*",
							onSelect: (v) => builder.setProviderId(v === "*" ? void 0 : v),
							placeholder: "All providers"
						}),
						showResourceRow && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx(PillRow, {
								label: "Resource (optional)",
								value: builder.selection.resource,
								options: resources.map((r) => r.name),
								onSelect: builder.setResource,
								optional: true
							}),
							builder.selection.resource && builder.selection.service === "databases" && projectId && builder.selection.databaseId && builder.selection.databaseId !== "*" && /* @__PURE__ */ jsx(IdSelectorRow, {
								label: "Table (optional)",
								projectId,
								type: "table",
								databaseId: builder.selection.databaseId,
								value: builder.selection.tableId ?? "*",
								onSelect: (v) => builder.setTableId(v === "*" ? void 0 : v),
								placeholder: "All tables"
							}),
							builder.selection.resource === "files" && builder.selection.service === "buckets" && projectId && builder.selection.bucketId && builder.selection.bucketId !== "*" && /* @__PURE__ */ jsx(IdSelectorRow, {
								label: "File (optional)",
								projectId,
								type: "file",
								bucketId: builder.selection.bucketId,
								value: builder.selection.fileId ?? "*",
								onSelect: (v) => builder.setFileId(v === "*" ? void 0 : v),
								placeholder: "All files"
							}),
							builder.selection.resource === "rows" && builder.selection.service === "databases" && projectId && builder.selection.databaseId && builder.selection.databaseId !== "*" && builder.selection.tableId && builder.selection.tableId !== "*" && /* @__PURE__ */ jsx(IdSelectorRow, {
								label: "Row (optional)",
								projectId,
								type: "row",
								databaseId: builder.selection.databaseId,
								tableId: builder.selection.tableId,
								value: builder.selection.rowId ?? "*",
								onSelect: (v) => builder.setRowId(v === "*" ? void 0 : v),
								placeholder: "All rows"
							}),
							builder.selection.resource === "columns" && builder.selection.service === "databases" && projectId && builder.selection.databaseId && builder.selection.databaseId !== "*" && builder.selection.tableId && builder.selection.tableId !== "*" && /* @__PURE__ */ jsx(IdSelectorRow, {
								label: "Column (optional)",
								projectId,
								type: "column",
								databaseId: builder.selection.databaseId,
								tableId: builder.selection.tableId,
								value: builder.selection.columnId ?? "*",
								onSelect: (v) => builder.setColumnId(v === "*" ? void 0 : v),
								placeholder: "All columns"
							}),
							builder.selection.resource === "indexes" && builder.selection.service === "databases" && projectId && builder.selection.databaseId && builder.selection.databaseId !== "*" && builder.selection.tableId && builder.selection.tableId !== "*" && /* @__PURE__ */ jsx(IdSelectorRow, {
								label: "Index (optional)",
								projectId,
								type: "index",
								databaseId: builder.selection.databaseId,
								tableId: builder.selection.tableId,
								value: builder.selection.indexId ?? "*",
								onSelect: (v) => builder.setIndexId(v === "*" ? void 0 : v),
								placeholder: "All indexes"
							})
						] }),
						showActionRow && /* @__PURE__ */ jsx(PillRow, {
							label: "Action (optional)",
							value: builder.selection.action,
							options: actions.map((a) => a.name),
							onSelect: builder.setAction,
							optional: true
						}),
						showAttributeRow && /* @__PURE__ */ jsx(PillRow, {
							label: "Attribute (optional)",
							value: builder.selection.attribute,
							options: selectedAction.columns,
							onSelect: builder.setAttribute,
							optional: true
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-2 pt-2",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "min-w-0 flex-1 overflow-x-auto overflow-y-hidden rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-[12px] text-foreground select-text",
									children: /* @__PURE__ */ jsx("span", {
										className: "whitespace-nowrap",
										children: previewString || /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: t("Select a service to build")
										})
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 w-8 p-0 shrink-0",
									onClick: builder.enterCustomMode,
									title: t("Edit manually"),
									children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 w-8 p-0 shrink-0",
									onClick: handleCopy,
									disabled: !previewString,
									title: t("Copy"),
									children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
								})
							]
						})
					] })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleConfirm,
						disabled: !isConfirmValid,
						children: t(resolvedConfirmLabel)
					})]
				})
			]
		})
	});
}
function IdSelectorRow({ label, projectId, type, databaseId, tableId, bucketId, value, onSelect, placeholder }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "text-[12px] font-medium text-muted-foreground mb-2",
		children: useT()(label)
	}), /* @__PURE__ */ jsx(EventResourceIdSelector, {
		projectId,
		type,
		databaseId,
		tableId,
		bucketId,
		value,
		onSelect,
		placeholder
	})] });
}
function PillRow({ label, value, options, onSelect, optional }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "text-[12px] font-medium text-muted-foreground mb-2",
		children: t(label)
	}), /* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap gap-1.5",
		children: [optional && /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => onSelect(null),
			className: cn("rounded-md border px-2.5 py-1 text-[12px] font-medium transition-colors", !value ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:bg-muted"),
			children: t("All")
		}), options.map((opt) => /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => onSelect(opt === value ? optional ? null : opt : opt),
			className: cn("rounded-md border px-2.5 py-1 text-[12px] font-medium transition-colors", value === opt ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:bg-muted"),
			children: opt
		}, opt))]
	})] });
}
function EventEditorModal(props) {
	return /* @__PURE__ */ jsx(EventEditor, { ...props });
}
export { DOCS_LINK as n, EventEditorModal as t };
