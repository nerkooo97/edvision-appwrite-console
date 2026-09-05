import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import { Vt as fetchSiteLog, Wn as fetchFunctionExecution, br as useFunctionExecutions, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as Route$1 } from "./projects._projectId.functions._functionId.executions-BEmbRDzz.js";
import { t as formatIpForDisplay } from "./format-ip-BZEMAGGm.js";
import { t as ScrollArea } from "./scroll-area-CakPDLgR.js";
import { t as FixWithAgentDropdown } from "./FixWithAgentDropdown-Bbwqh7Cs.js";
import { r as useRefreshOptional } from "./RefreshContext-CCamFujD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { Fragment as Fragment$1, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, ChevronUp, Clock, Copy, ExternalLink, FileJson, LayoutList, Link2, Search, Square, Zap } from "lucide-react";
function formatExecutionLogContent$1(logs) {
	if (!logs) return "";
	if (typeof logs === "string") return logs;
	if (Array.isArray(logs)) return logs.join("\n");
	return JSON.stringify(logs, null, 2);
}
function stripAnsiCodes(text) {
	return text.replace(/\x1b\[(\d+(?:;\d+)*)?m/g, "");
}
function lastLines(text, lineCount) {
	if (!text.trim()) return "";
	return text.split("\n").slice(-lineCount).join("\n");
}
function generateExecutionAIFixPrompt(execution, options) {
	const resourceType = options?.resourceVariant === "site" ? "Site" : "Function";
	const errors = stripAnsiCodes(lastLines(formatExecutionLogContent$1(execution.errors), 100));
	const logs = stripAnsiCodes(lastLines(formatExecutionLogContent$1(execution.logs), 100));
	let prompt = `# Fix Appwrite ${resourceType} Execution Failure

## Context
`;
	if (options?.resourceName?.trim()) prompt += `- **${resourceType} Name**: ${options.resourceName.trim()}\n`;
	prompt += `- **Execution ID**: ${execution.$id}\n`;
	if (execution.deploymentId) prompt += `- **Deployment ID**: ${execution.deploymentId}\n`;
	if (options?.runtime?.trim()) prompt += `- **Runtime**: ${options.runtime.trim()}\n`;
	if (execution.requestMethod) prompt += `- **Method**: ${execution.requestMethod.toUpperCase()}\n`;
	if (execution.requestPath) prompt += `- **Path**: ${execution.requestPath}\n`;
	if (execution.responseStatusCode) prompt += `- **Response Status Code**: ${execution.responseStatusCode}\n`;
	if (execution.trigger) prompt += `- **Trigger**: ${execution.trigger}\n`;
	prompt += `- **Status**: ${execution.status}\n`;
	prompt += `- **Created**: ${new Date(execution.$createdAt).toISOString()}\n`;
	prompt += `
## Errors (Last 100 lines)

\`\`\`
${errors || "No errors recorded"}
\`\`\`

## Execution Logs (Last 100 lines)

\`\`\`
${logs || "No execution logs available"}
\`\`\`

## Task

Please analyze the errors and execution logs above and help me fix this failed execution. Identify:
1. The root cause of the failure
2. Specific code changes or configuration updates needed
3. Any runtime, request, or deployment issues contributing to the failure

Provide clear, actionable steps to resolve this issue.`;
	return prompt;
}
function formatDuration$1(ms) {
	if (ms < 1e3) return `${Math.round(ms)}ms`;
	const seconds = ms / 1e3;
	if (seconds < 60) return `${Number(seconds.toFixed(2))}s`;
	return `${Math.floor(seconds / 60)}m ${Number((seconds % 60).toFixed(2))}s`;
}
function formatDurationFromSeconds(seconds) {
	if (seconds < 1) return `${Math.round(seconds * 1e3)}ms`;
	if (seconds < 60) return `${Number(seconds.toFixed(2))}s`;
	return `${Math.floor(seconds / 60)}m ${Number((seconds % 60).toFixed(2))}s`;
}
function parseQueryParams(path) {
	try {
		const url = new URL(path, "http://dummy.com");
		const params = [];
		url.searchParams.forEach((value, name) => {
			params.push({
				name,
				value
			});
		});
		return params;
	} catch {
		return [];
	}
}
function capitalizeFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function normalizeOptionalString(value) {
	if (typeof value !== "string") return void 0;
	return value.trim() || void 0;
}
function normalizeHeaderValue(value) {
	if (value == null) return void 0;
	if (typeof value === "string") return normalizeOptionalString(value);
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	if (Array.isArray(value)) for (const item of value) {
		const normalized = normalizeHeaderValue(item);
		if (normalized) return normalized;
	}
}
function getRequestHeaderValue(headers, name) {
	if (!headers?.length) return void 0;
	const target = name.toLowerCase();
	for (const header of headers) {
		if (!header || typeof header !== "object") continue;
		if (typeof header.name === "string" && header.name.toLowerCase() === target) return normalizeHeaderValue(header.value);
		for (const [key, value] of Object.entries(header)) {
			if (key === "name" || key === "value") continue;
			if (key.toLowerCase() === target) return normalizeHeaderValue(value);
		}
	}
}
function getExecutionHostname(execution) {
	const ext = execution;
	return normalizeOptionalString(ext.requestHost) || normalizeOptionalString(ext.hostname) || getRequestHeaderValue(execution.requestHeaders, "host");
}
function getExecutionClientIp(execution) {
	const ext = execution;
	const fromField = normalizeOptionalString(ext.clientIp) || normalizeOptionalString(ext.ip);
	if (fromField) return fromField;
	const appwriteIp = getRequestHeaderValue(execution.requestHeaders, "x-appwrite-client-ip");
	if (appwriteIp) return appwriteIp;
	const forwardedFor = getRequestHeaderValue(execution.requestHeaders, "x-forwarded-for");
	if (forwardedFor) {
		const first = forwardedFor.split(",")[0]?.trim();
		if (first) return first;
	}
	return getRequestHeaderValue(execution.requestHeaders, "x-real-ip");
}
function formatExecutionLogContent(logs) {
	if (!logs) return "";
	if (typeof logs === "string") return logs;
	if (Array.isArray(logs)) return logs.join("\n");
	return JSON.stringify(logs, null, 2);
}
function filterLogLines(text, search) {
	if (!search.trim()) return text;
	const searchLower = search.toLowerCase();
	return text.split("\n").filter((line) => line.toLowerCase().includes(searchLower)).join("\n");
}
function ExecutionDetailsDrawer({ open, onOpenChange, execution, executions, func, onNavigate, projectId, resourceVariant, resourceId }) {
	const t = useT();
	const [copiedPath, setCopiedPath] = useState(false);
	const [copiedLink, setCopiedLink] = useState(false);
	const [copiedJson, setCopiedJson] = useState(false);
	const [copiedLogs, setCopiedLogs] = useState(false);
	const [copiedErrors, setCopiedErrors] = useState(false);
	const [requestTab, setRequestTab] = useState("parameters");
	const [responseTab, setResponseTab] = useState("logs");
	const [elapsedTime, setElapsedTime] = useState(0);
	const [logsSearch, setLogsSearch] = useState("");
	const [errorsSearch, setErrorsSearch] = useState("");
	const [bodySearch, setBodySearch] = useState("");
	const currentIndex = useMemo(() => {
		if (!execution) return -1;
		return executions.findIndex((e) => e.$id === execution.$id);
	}, [execution, executions]);
	const isFirst = currentIndex === 0;
	const isLast = currentIndex === executions.length - 1;
	const queryParams = useMemo(() => {
		if (!execution?.requestPath) return [];
		return parseQueryParams(execution.requestPath);
	}, [execution?.requestPath]);
	useEffect(() => {
		if (!execution) return;
		if (execution.errors) setResponseTab("errors");
		else if (execution.logs) setResponseTab("logs");
		else if (execution.responseHeaders && execution.responseHeaders.length > 0) setResponseTab("headers");
		else setResponseTab("logs");
		setLogsSearch("");
		setErrorsSearch("");
		setBodySearch("");
		setCopiedLogs(false);
		setCopiedErrors(false);
	}, [execution?.$id]);
	const requestHeaderCount = execution?.requestHeaders?.length ?? 0;
	useEffect(() => {
		if (queryParams.length > 0) setRequestTab("parameters");
		else if (requestHeaderCount > 0) setRequestTab("headers");
	}, [
		queryParams.length,
		execution?.$id,
		requestHeaderCount
	]);
	useEffect(() => {
		if (!execution || !execution.$createdAt) return;
		if (execution.status !== "processing" && execution.status !== "waiting") {
			setElapsedTime(0);
			return;
		}
		const startTime = new Date(execution.$createdAt).getTime();
		const updateTimer = () => {
			const now = Date.now();
			setElapsedTime(Math.floor((now - startTime) / 1e3));
		};
		updateTimer();
		const interval = setInterval(updateTimer, 1e3);
		return () => clearInterval(interval);
	}, [
		execution?.$id,
		execution?.$createdAt,
		execution?.status
	]);
	const executionLogsText = useMemo(() => formatExecutionLogContent(execution?.logs), [execution?.logs]);
	const displayedLogsText = useMemo(() => filterLogLines(executionLogsText, logsSearch), [executionLogsText, logsSearch]);
	const executionErrorsText = useMemo(() => formatExecutionLogContent(execution?.errors), [execution?.errors]);
	const displayedErrorsText = useMemo(() => filterLogLines(executionErrorsText, errorsSearch), [executionErrorsText, errorsSearch]);
	const showFixWithAgent = (execution?.responseStatusCode ?? 0) >= 400;
	const aiFixPrompt = useMemo(() => {
		if (!execution || !showFixWithAgent) return "";
		return generateExecutionAIFixPrompt(execution, {
			resourceVariant,
			resourceName: func?.name,
			runtime: func?.runtime
		});
	}, [
		execution,
		showFixWithAgent,
		resourceVariant,
		func?.name,
		func?.runtime
	]);
	if (!execution) return null;
	const statusBadge = getExecutionStatusBadge(execution.status);
	const statusCodeBadge = execution.responseStatusCode ? getStatusCodeBadge(execution.responseStatusCode) : null;
	const requestHostname = getExecutionHostname(execution);
	const clientIp = getExecutionClientIp(execution);
	const clientIpDisplay = clientIp ? formatIpForDisplay(clientIp, 44) ?? clientIp : null;
	const handlePrevious = () => {
		if (currentIndex > 0) onNavigate(executions[currentIndex - 1].$id);
	};
	const handleNext = () => {
		if (currentIndex < executions.length - 1) onNavigate(executions[currentIndex + 1].$id);
	};
	const handleCopyPath = () => {
		if (execution.requestPath) {
			navigator.clipboard.writeText(execution.requestPath);
			setCopiedPath(true);
			setTimeout(() => setCopiedPath(false), 2e3);
		}
	};
	const handleCopyLink = () => {
		if (!execution) return;
		const url = new URL(window.location.href);
		url.searchParams.set("executionId", execution.$id);
		navigator.clipboard.writeText(url.toString());
		setCopiedLink(true);
		setTimeout(() => setCopiedLink(false), 2e3);
	};
	const handleCopyJson = async () => {
		if (!execution) return;
		const resolvedProjectId = projectId;
		const resolvedResourceId = resourceId ?? (func ? func.$id : void 0);
		const resolvedVariant = resourceVariant ?? (func ? "function" : void 0);
		if (await copyResourceAsJson(() => {
			if (resolvedProjectId && resolvedResourceId && resolvedVariant === "function") return fetchFunctionExecution(resolvedProjectId, resolvedResourceId, execution.$id);
			if (resolvedProjectId && resolvedResourceId && resolvedVariant === "site") return fetchSiteLog(resolvedProjectId, resolvedResourceId, execution.$id);
			return execution;
		}, { fallback: execution })) {
			setCopiedJson(true);
			setTimeout(() => setCopiedJson(false), 2e3);
		}
	};
	const handleCopyLogs = () => {
		if (!executionLogsText) return;
		navigator.clipboard.writeText(executionLogsText);
		setCopiedLogs(true);
		setTimeout(() => setCopiedLogs(false), 2e3);
	};
	const handleCopyErrors = () => {
		if (!executionErrorsText) return;
		navigator.clipboard.writeText(executionErrorsText);
		setCopiedErrors(true);
		setTimeout(() => setCopiedErrors(false), 2e3);
	};
	const durationDisplay = execution.status === "processing" || execution.status === "waiting" ? formatDurationFromSeconds(elapsedTime) : execution.duration ? formatDuration$1(execution.duration * 1e3) : "N/A";
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: "",
		maxWidth: "sm:max-w-[700px]",
		contentClassName: "overflow-hidden",
		disableAutoFocus: true,
		headerLeading: /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ jsxs(Button, {
				variant: "outline",
				size: "sm",
				className: "h-8 shrink-0 text-[13px]",
				onClick: () => void handleCopyJson(),
				children: [copiedJson ? /* @__PURE__ */ jsx(Check, { className: "me-1.5 h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(FileJson, { className: "me-1.5 h-4 w-4" }), t("Copy as JSON")]
			}), showFixWithAgent && /* @__PURE__ */ jsx(FixWithAgentDropdown, {
				prompt: aiFixPrompt,
				align: "start",
				className: "h-8 shrink-0 text-[13px]"
			})]
		}),
		headerActions: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 p-0 cursor-pointer",
				onClick: handlePrevious,
				disabled: isFirst,
				children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 p-0 cursor-pointer",
				onClick: handleNext,
				disabled: isLast,
				children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0 cursor-pointer",
					onClick: handleCopyLink,
					children: copiedLink ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: copiedLink ? t("Link copied!") : t("Copy link") }) })] }) })
		] }),
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-b border-border flex-shrink-0" }), /* @__PURE__ */ jsx(ScrollArea, {
			className: "flex-1 min-h-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-6 py-6 space-y-8",
				children: /* @__PURE__ */ jsxs(Accordion, {
					type: "multiple",
					defaultValue: [
						"details",
						"request",
						"response"
					],
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs(AccordionItem, {
							value: "details",
							className: "border-none",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-[16px] font-medium py-2 cursor-pointer hover:no-underline",
								children: t("Details")
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "pt-4 overflow-visible",
								children: /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mx-1.5 px-1.5",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Execution ID")
										}), /* @__PURE__ */ jsx(CopyableId, {
											id: execution.$id,
											size: "sm"
										})] }),
										execution.deploymentId && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Deployment ID")
										}), /* @__PURE__ */ jsx(CopyableId, {
											id: execution.deploymentId,
											size: "sm"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Method")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-foreground font-medium",
											children: execution.requestMethod?.toUpperCase() || "N/A"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Hostname")
										}), requestHostname ? /* @__PURE__ */ jsx(CopyableId, {
											id: requestHostname,
											size: "sm",
											maxWidth: 280
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[14px] text-muted-foreground",
											children: "N/A"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("IP address")
										}), clientIp ? /* @__PURE__ */ jsx(CopyableId, {
											id: clientIp,
											displayText: clientIpDisplay ?? clientIp,
											size: "sm",
											maxWidth: 360
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[14px] text-muted-foreground",
											children: "N/A"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Status code")
										}), execution.responseStatusCode ? /* @__PURE__ */ jsx(Badge, {
											variant: statusCodeBadge?.variant || "outline",
											children: execution.responseStatusCode
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[14px] text-muted-foreground",
											children: "N/A"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Status")
										}), /* @__PURE__ */ jsx(Badge, {
											variant: statusBadge.variant,
											children: t(statusBadge.label)
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Triggered by")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-foreground",
											children: execution.trigger ? t(capitalizeFirst(execution.trigger)) : "N/A"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Duration")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-foreground font-mono",
											children: durationDisplay
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-muted-foreground mb-2",
											children: t("Created")
										}), /* @__PURE__ */ jsx(DateTooltip, { date: execution.$createdAt })] }),
										/* @__PURE__ */ jsxs("div", {
											className: "sm:col-span-2 lg:col-span-3",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[14px] text-muted-foreground mb-2",
												children: t("Path")
											}), execution.requestPath ? /* @__PURE__ */ jsxs("div", {
												className: "relative -mx-1 px-1",
												children: [/* @__PURE__ */ jsx(Input, {
													value: execution.requestPath,
													readOnly: true,
													className: "pe-10 font-mono text-[13px] bg-muted"
												}), /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: handleCopyPath,
													className: "absolute end-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-md hover:bg-accent transition-colors",
													"aria-label": t("Copy path"),
													children: copiedPath ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 text-muted-foreground" })
												})]
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-[14px] text-muted-foreground",
												children: "N/A"
											})]
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ jsxs(AccordionItem, {
							value: "request",
							className: "border-none",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-[16px] font-medium py-2 cursor-pointer hover:no-underline",
								children: t("Request")
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "pt-4 overflow-visible",
								children: /* @__PURE__ */ jsx("div", {
									className: "-mx-1.5 px-1.5",
									children: /* @__PURE__ */ jsxs(Tabs, {
										value: requestTab,
										onValueChange: (v) => setRequestTab(v),
										className: "w-full gap-4",
										children: [
											/* @__PURE__ */ jsxs(TabsList, {
												className: "w-full grid grid-cols-2 h-9",
												children: [/* @__PURE__ */ jsxs(TabsTrigger, {
													value: "parameters",
													className: "text-[13px]",
													children: [t("Parameters"), queryParams.length > 0 && /* @__PURE__ */ jsxs("span", {
														className: "ms-1.5 text-muted-foreground",
														children: [
															"(",
															queryParams.length,
															")"
														]
													})]
												}), /* @__PURE__ */ jsxs(TabsTrigger, {
													value: "headers",
													className: "text-[13px]",
													children: [t("Headers"), execution.requestHeaders && execution.requestHeaders.length > 0 && /* @__PURE__ */ jsxs("span", {
														className: "ms-1.5 text-muted-foreground",
														children: [
															"(",
															execution.requestHeaders.length,
															")"
														]
													})]
												})]
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "parameters",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: queryParams.length > 0 ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, {
														className: "table-fixed w-full",
														children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
															className: "hover:bg-transparent border-b border-border",
															children: [/* @__PURE__ */ jsx(TableHead, {
																className: "w-[35%] px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Key")
															}), /* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Value")
															})]
														}) }), /* @__PURE__ */ jsx(TableBody, { children: queryParams.map((param, index) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
															className: "px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: param.name
														}), /* @__PURE__ */ jsx(TableCell, {
															className: "min-w-0 px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: param.value
														})] }, index)) })]
													})
												}) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[13px] text-muted-foreground",
														children: t("No parameters found.")
													})
												}) })
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "headers",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: execution.requestHeaders && execution.requestHeaders.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, {
														className: "table-fixed w-full",
														children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
															className: "hover:bg-transparent border-b border-border",
															children: [/* @__PURE__ */ jsx(TableHead, {
																className: "w-[35%] px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Key")
															}), /* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Value")
															})]
														}) }), /* @__PURE__ */ jsx(TableBody, { children: execution.requestHeaders.map((header, index) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
															className: "px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: header.name
														}), /* @__PURE__ */ jsx(TableCell, {
															className: "min-w-0 px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: header.value
														})] }, index)) })]
													})
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-[12px] text-muted-foreground mt-4",
													children: [
														t("Missing headers?"),
														" ",
														/* @__PURE__ */ jsx(DocsRouteLink, {
															className: "link-neutral",
															href: "/docs",
															children: t("Check the docs")
														}),
														" ",
														t("to see the supported data and how to log it.")
													]
												})] }) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[13px] text-muted-foreground",
														children: t("No headers found.")
													})
												}) })
											})
										]
									})
								})
							})]
						}),
						/* @__PURE__ */ jsxs(AccordionItem, {
							value: "response",
							className: "border-none",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-[16px] font-medium py-2 cursor-pointer hover:no-underline",
								children: t("Response")
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "pt-4 overflow-visible",
								children: /* @__PURE__ */ jsx("div", {
									className: "-mx-1.5 px-1.5",
									children: /* @__PURE__ */ jsxs(Tabs, {
										value: responseTab,
										onValueChange: (v) => setResponseTab(v),
										className: "w-full gap-4",
										children: [
											/* @__PURE__ */ jsxs(TabsList, {
												className: "w-full grid grid-cols-4 h-9",
												children: [
													/* @__PURE__ */ jsx(TabsTrigger, {
														value: "logs",
														className: "text-[13px]",
														children: t("Logs")
													}),
													/* @__PURE__ */ jsx(TabsTrigger, {
														value: "errors",
														className: "text-[13px]",
														children: t("Errors")
													}),
													/* @__PURE__ */ jsxs(TabsTrigger, {
														value: "headers",
														className: "text-[13px]",
														children: [t("Headers"), execution.responseHeaders && execution.responseHeaders.length > 0 && /* @__PURE__ */ jsxs("span", {
															className: "ms-1.5 text-muted-foreground",
															children: [
																"(",
																execution.responseHeaders.length,
																")"
															]
														})]
													}),
													/* @__PURE__ */ jsx(TabsTrigger, {
														value: "body",
														className: "text-[13px]",
														children: t("Body")
													})
												]
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "logs",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: func?.logging === false ? /* @__PURE__ */ jsxs("div", {
													className: "rounded-lg border border-amber-500/20 bg-amber-500/5 p-4",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-foreground mb-2",
														children: t("Logging is disabled for this function. Enable logging in settings to view execution logs.")
													}), /* @__PURE__ */ jsxs(DocsRouteLink, {
														className: "link-neutral text-[12px]",
														href: "/docs",
														children: [t("Learn more"), " →"]
													})]
												}) : execution.logs ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-4",
													children: /* @__PURE__ */ jsxs("div", {
														className: "space-y-3",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "relative flex-1 min-w-0 -mx-1 px-1",
																children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
																	placeholder: t("Search logs..."),
																	value: logsSearch,
																	onChange: (e) => setLogsSearch(e.target.value),
																	className: "ps-9 h-9 text-[13px]"
																})]
															}), /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx(Button, {
																	type: "button",
																	variant: "outline",
																	size: "sm",
																	onClick: handleCopyLogs,
																	disabled: !executionLogsText,
																	className: "h-9 w-9 shrink-0 p-0",
																	"aria-label": t("Copy logs"),
																	children: copiedLogs ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
																})
															}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Copy logs") }) })] }) })]
														}), /* @__PURE__ */ jsx(ScrollArea, {
															className: "h-[400px] w-full rounded-lg border border-border",
															children: /* @__PURE__ */ jsx("div", {
																className: "p-4 min-w-0",
																children: /* @__PURE__ */ jsx("pre", {
																	className: "text-[12px] font-mono text-foreground whitespace-pre-wrap break-all overflow-x-auto max-w-full min-w-0",
																	children: displayedLogsText
																})
															})
														})]
													})
												}) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[13px] text-muted-foreground",
														children: t("No logs found.")
													})
												}) })
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "errors",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: func?.logging === false ? /* @__PURE__ */ jsxs("div", {
													className: "rounded-lg border border-amber-500/20 bg-amber-500/5 p-4",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-foreground mb-2",
														children: t("Logging is disabled for this function. Enable logging in settings to view execution errors.")
													}), /* @__PURE__ */ jsxs(DocsRouteLink, {
														className: "link-neutral text-[12px]",
														href: "/docs",
														children: [t("Learn more"), " →"]
													})]
												}) : execution.errors ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-4",
													children: /* @__PURE__ */ jsxs("div", {
														className: "space-y-3",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ jsxs("div", {
																className: "relative min-w-0 flex-1 -mx-1 px-1",
																children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
																	placeholder: t("Search errors..."),
																	value: errorsSearch,
																	onChange: (e) => setErrorsSearch(e.target.value),
																	className: "h-9 ps-9 text-[13px]"
																})]
															}), /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx(Button, {
																	type: "button",
																	variant: "outline",
																	size: "sm",
																	onClick: handleCopyErrors,
																	disabled: !executionErrorsText,
																	className: "h-9 w-9 shrink-0 p-0",
																	"aria-label": t("Copy errors"),
																	children: copiedErrors ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
																})
															}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Copy errors") }) })] }) })]
														}), /* @__PURE__ */ jsx(ScrollArea, {
															className: "h-[400px] w-full rounded-lg border border-border bg-muted",
															children: /* @__PURE__ */ jsx("div", {
																className: "min-w-0 p-4",
																children: /* @__PURE__ */ jsx("pre", {
																	className: "max-w-full min-w-0 overflow-x-auto whitespace-pre-wrap break-all font-mono text-[12px] text-foreground",
																	children: displayedErrorsText
																})
															})
														})]
													})
												}) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[13px] text-muted-foreground",
														children: t("No errors found.")
													})
												}) })
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "headers",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: execution.responseHeaders && execution.responseHeaders.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, {
														className: "table-fixed w-full",
														children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
															className: "hover:bg-transparent border-b border-border",
															children: [/* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[200px]",
																children: t("Key")
															}), /* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Value")
															})]
														}) }), /* @__PURE__ */ jsx(TableBody, { children: execution.responseHeaders.map((header, index) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
															className: "px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: header.name
														}), /* @__PURE__ */ jsx(TableCell, {
															className: "min-w-0 px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
															children: header.value
														})] }, index)) })]
													})
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-[12px] text-muted-foreground mt-4",
													children: [
														t("Missing headers?"),
														" ",
														/* @__PURE__ */ jsx(DocsRouteLink, {
															className: "link-neutral",
															href: "/docs",
															children: t("Check the docs")
														}),
														" ",
														t("to see the supported data and how to log it.")
													]
												})] }) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[13px] text-muted-foreground",
														children: t("No headers found.")
													})
												}) })
											}),
											/* @__PURE__ */ jsx(TabsContent, {
												value: "body",
												className: "mt-0",
												children: /* @__PURE__ */ jsx("div", { children: execution.responseBody ? /* @__PURE__ */ jsxs("div", {
													className: "space-y-3",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "relative -mx-1 px-1",
														children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
															placeholder: t("Search body..."),
															value: bodySearch,
															onChange: (e) => setBodySearch(e.target.value),
															className: "ps-9 h-9 text-[13px]"
														})]
													}), /* @__PURE__ */ jsx(ScrollArea, {
														className: "h-[400px] w-full rounded-lg border border-border bg-muted",
														children: /* @__PURE__ */ jsx("div", {
															className: "p-4 min-w-0",
															children: /* @__PURE__ */ jsx("pre", {
																className: "text-[12px] font-mono text-foreground whitespace-pre-wrap break-all overflow-x-auto max-w-full min-w-0",
																children: (() => {
																	const bodyText = typeof execution.responseBody === "string" ? execution.responseBody : JSON.stringify(execution.responseBody, null, 2);
																	if (!bodySearch.trim()) return bodyText;
																	const searchLower = bodySearch.toLowerCase();
																	return bodyText.split("\n").filter((line) => line.toLowerCase().includes(searchLower)).join("\n");
																})()
															})
														})
													})]
												}) : /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card p-3",
													children: /* @__PURE__ */ jsxs("p", {
														className: "text-[13px] text-foreground",
														children: [
															t("Body data is not captured by Appwrite for your user's security and privacy. To display body data in the Logs tab, use"),
															" ",
															/* @__PURE__ */ jsx("code", {
																className: "px-1.5 py-0.5 bg-muted rounded text-[12px]",
																children: "context.log()"
															}),
															".",
															" ",
															/* @__PURE__ */ jsx(DocsRouteLink, {
																className: "link-neutral",
																href: "/docs",
																children: t("Learn more")
															}),
															"."
														]
													})
												}) })
											})
										]
									})
								})
							})]
						})
					]
				})
			})
		})] })
	});
}
function executionPermalink(variant, projectId, resourceId, executionId) {
	return buildConsoleUrl(variant === "function" ? `/projects/${projectId}/functions/${resourceId}/executions?executionId=${encodeURIComponent(executionId)}` : `/projects/${projectId}/sites/${resourceId}/logs?executionId=${encodeURIComponent(executionId)}`);
}
function ExecutionRowContextMenu({ variant, projectId, resourceId, execution, onOpenDetails, children }) {
	const t = useT();
	if (!execution?.$id || !projectId || !resourceId) return /* @__PURE__ */ jsx(Fragment, { children });
	const executionHref = executionPermalink(variant, projectId, resourceId, execution.$id);
	const fetchExecution = () => variant === "function" ? fetchFunctionExecution(projectId, resourceId, execution.$id) : fetchSiteLog(projectId, resourceId, execution.$id);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onOpenDetails(),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", execution.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", executionHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(fetchExecution),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(executionHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(executionHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			})
		]
	})] });
}
function formatDuration(ms) {
	if (ms < 1e3) return `${Math.round(ms)}ms`;
	const seconds = ms / 1e3;
	if (seconds < 60) return `${Number(seconds.toFixed(2))}s`;
	return `${Math.floor(seconds / 60)}m ${Number((seconds % 60).toFixed(2))}s`;
}
function formatRequestMethod(method) {
	if (!method?.trim()) return "N/A";
	return method.toUpperCase();
}
function getTriggerBadge(trigger) {
	return {
		http: {
			label: "HTTP",
			variant: "default"
		},
		schedule: {
			label: "Schedule",
			variant: "secondary"
		},
		event: {
			label: "Event",
			variant: "outline"
		},
		manual: {
			label: "Manual",
			variant: "outline"
		}
	}[trigger?.toLowerCase()] || {
		label: trigger || "HTTP",
		variant: "default"
	};
}
function LogsTableColGroup() {
	return /* @__PURE__ */ jsxs("colgroup", { children: [
		/* @__PURE__ */ jsx("col", { className: "w-[11rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[11rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[6.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[5.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[8.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[5rem]" }),
		/* @__PURE__ */ jsx("col", {}),
		/* @__PURE__ */ jsx("col", { className: "w-[7rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[8rem]" })
	] });
}
var logsTableClassName = "w-full min-w-[77rem] table-fixed";
function LogsTableHead() {
	const t = useT();
	return /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
		className: "hover:bg-transparent border-b border-border",
		children: [
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 ps-6 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)] sm:ps-8",
				children: t("Execution ID")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Deployment ID")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Status")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Trigger")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Status Code")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Method")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Path")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Duration")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 pe-6 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)] sm:pe-8",
				children: t("Created")
			})
		]
	}) });
}
function LogsSkeletonRows({ rowCount }) {
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: rowCount }, (_, i) => /* @__PURE__ */ jsxs(TableRow, {
		className: "pointer-events-none hover:bg-transparent",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3 ps-6 sm:ps-8",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32 max-w-full" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32 max-w-full" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-20 rounded-full" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-10 rounded-full" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-12 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-full max-w-[16rem]" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-14" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3 pe-6 sm:pe-8",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-[6.5rem]" })
			})
		]
	}, i)) });
}
function LogsPaginationSkeleton() {
	return /* @__PURE__ */ jsx("div", {
		className: "h-[54px] shrink-0 border-t border-border bg-background px-4 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "@container flex h-full min-h-8 w-full items-center justify-between gap-2 py-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "hidden h-4 w-36 @[600px]:block" }), /* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-2 @[800px]:flex",
					children: [
						/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-8" }),
						/* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-[72px] rounded-md" }),
						/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-14" })
					]
				})]
			}), /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-[200px] max-w-[45%] shrink-0 rounded-md" })]
		})
	});
}
function LogsLoadingTable({ rowCount }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
		role: "status",
		"aria-live": "polite",
		"aria-busy": "true",
		"aria-label": t("Loading logs"),
		children: /* @__PURE__ */ jsxs(Table$1, {
			withScrollContainer: false,
			className: logsTableClassName,
			children: [
				/* @__PURE__ */ jsx(LogsTableColGroup, {}),
				/* @__PURE__ */ jsx(LogsTableHead, {}),
				/* @__PURE__ */ jsx(TableBody, { children: /* @__PURE__ */ jsx(LogsSkeletonRows, { rowCount }) })
			]
		})
	}), /* @__PURE__ */ jsx(LogsPaginationSkeleton, {})] });
}
function LogsPaginationFooter({ currentPage, total, pageSize, onPageChange, onPageSizeChange, itemLabel }) {
	return /* @__PURE__ */ jsx("div", {
		className: "h-[54px] shrink-0 border-t border-border bg-background px-4 sm:px-6",
		children: /* @__PURE__ */ jsx(Pagination, {
			currentPage,
			totalItems: total,
			pageSize,
			pageSizeOptions: [
				10,
				25,
				50,
				100
			],
			onPageChange,
			onPageSizeChange,
			itemLabel,
			className: "mt-0 h-full min-h-0 border-0 py-0"
		})
	});
}
function LogsListView({ executions, total, isLoading, currentPage, pageSize, onPageChange, onPageSizeChange, selectedExecutionId, onExecutionSelect, onExecutionDeselect, func = null, emptyStateTitle = "No executions yet", emptyStateDescription = "Executions will appear here when your function runs.", emptyStateAction, hasFilters = false, itemLabel = "executions", isFetching: _isFetching = false, projectId, resourceVariant, resourceId }) {
	const t = useT();
	const navigate = useNavigate();
	const location = useLocation();
	const scrollContainerRef = useRef(null);
	const selectedExecution = executions.find((e) => e.$id === selectedExecutionId) || null;
	const drawerOpen = selectedExecutionId !== null;
	useLayoutEffect(() => {
		if (executions.length > 0 && currentPage !== void 0) {
			const container = scrollContainerRef.current;
			if (container) container.scrollTop = 0;
		}
	}, [currentPage, executions.length]);
	const handleNavigate = (executionId) => {
		onExecutionSelect(executionId);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				executionId
			}),
			replace: true
		});
	};
	const handleDrawerClose = (open) => {
		if (!open) {
			navigate({
				to: location.pathname,
				search: (prev) => ({
					...prev,
					executionId: void 0
				}),
				replace: true
			});
			onExecutionDeselect();
		}
	};
	if (isLoading && executions.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 min-w-0 flex-1 flex-col",
		children: /* @__PURE__ */ jsx(LogsLoadingTable, { rowCount: pageSize })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 min-w-0 flex-1 flex-col",
		children: [executions.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			ref: scrollContainerRef,
			className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
			children: /* @__PURE__ */ jsxs(Table$1, {
				withScrollContainer: false,
				className: logsTableClassName,
				children: [
					/* @__PURE__ */ jsx(LogsTableColGroup, {}),
					/* @__PURE__ */ jsx(LogsTableHead, {}),
					/* @__PURE__ */ jsx(TableBody, { children: executions.map((execution) => {
						const executionData = execution;
						const statusBadge = getExecutionStatusBadge(executionData.status || "completed");
						const triggerBadge = getTriggerBadge(executionData.trigger || "http");
						const statusCodeBadge = executionData.responseStatusCode ? getStatusCodeBadge(executionData.responseStatusCode) : null;
						const executionId = executionData.$id;
						const deploymentId = executionData.deploymentId;
						const method = formatRequestMethod(executionData.requestMethod);
						const path = executionData.requestPath || "N/A";
						const isSelected = drawerOpen && selectedExecutionId === executionId;
						const row = /* @__PURE__ */ jsxs(TableRow, {
							role: "button",
							tabIndex: 0,
							"data-state": isSelected ? "selected" : void 0,
							className: cn("cursor-pointer", isSelected && "bg-muted/60 hover:bg-muted/60"),
							onClick: () => onExecutionSelect(executionId),
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									onExecutionSelect(executionId);
								}
							},
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3 ps-6 sm:ps-8",
									children: /* @__PURE__ */ jsx(CopyableId, {
										id: executionId,
										size: "sm",
										constrainToContainer: true
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: deploymentId ? /* @__PURE__ */ jsx(CopyableId, {
										id: deploymentId,
										size: "sm",
										constrainToContainer: true
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: /* @__PURE__ */ jsx(Badge, {
										variant: statusBadge.variant,
										children: t(statusBadge.label)
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 whitespace-nowrap px-4 py-3",
									children: /* @__PURE__ */ jsx("code", {
										className: "rounded bg-muted/50 px-1.5 py-0.5 text-[12px] font-mono text-foreground",
										children: t(triggerBadge.label)
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: executionData.responseStatusCode ? /* @__PURE__ */ jsx(Badge, {
										variant: statusCodeBadge?.variant || "outline",
										children: executionData.responseStatusCode
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: /* @__PURE__ */ jsx("code", {
										className: "rounded bg-muted/50 px-1.5 py-0.5 text-[12px] font-mono text-foreground",
										children: method
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: path !== "N/A" ? /* @__PURE__ */ jsx("div", {
										className: "inline-block max-w-full min-w-0",
										title: path,
										children: /* @__PURE__ */ jsx(CopyableId, {
											id: path,
											size: "md",
											variant: "inline",
											constrainToContainer: true,
											className: "w-full max-w-full"
										})
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-muted-foreground",
											children: executionData.duration ? formatDuration(executionData.duration * 1e3) : "-"
										})]
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "min-w-0 px-4 py-3 pe-6 sm:pe-8",
									children: /* @__PURE__ */ jsx(DateTooltip, {
										date: executionData.$createdAt,
										className: "text-[12px] text-muted-foreground"
									})
								})
							]
						});
						if (projectId && resourceVariant && resourceId) return /* @__PURE__ */ jsx(ExecutionRowContextMenu, {
							variant: resourceVariant,
							projectId,
							resourceId,
							execution: executionData,
							onOpenDetails: () => onExecutionSelect(executionId),
							children: row
						}, executionId);
						return /* @__PURE__ */ jsx(Fragment$1, { children: row }, executionId);
					}) })
				]
			})
		}), /* @__PURE__ */ jsx(LogsPaginationFooter, {
			currentPage,
			total,
			pageSize,
			onPageChange,
			onPageSizeChange,
			itemLabel
		})] }) : /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col items-center justify-center py-16",
			children: [/* @__PURE__ */ jsx(EmptyState, {
				icon: Zap,
				title: t(emptyStateTitle),
				description: t(emptyStateDescription),
				isEmpty: !hasFilters,
				hasFilters,
				variant: "centered",
				iconSize: "md"
			}), emptyStateAction && /* @__PURE__ */ jsx("div", {
				className: "mt-4 flex justify-center",
				children: emptyStateAction
			})]
		}), /* @__PURE__ */ jsx(ExecutionDetailsDrawer, {
			open: drawerOpen,
			onOpenChange: handleDrawerClose,
			execution: selectedExecution,
			executions,
			func,
			onNavigate: handleNavigate,
			projectId,
			resourceVariant,
			resourceId
		})]
	});
}
var EXECUTIONS_PER_PAGE = 25;
function getExecutionStatusBadge(status) {
	return {
		completed: {
			label: "Completed",
			variant: "completed"
		},
		processing: {
			label: "Processing",
			variant: "processing"
		},
		failed: {
			label: "Failed",
			variant: "failed"
		},
		waiting: {
			label: "Waiting",
			variant: "pending"
		},
		scheduled: {
			label: "Scheduled",
			variant: "pending"
		}
	}[status] || {
		label: status,
		variant: "outline"
	};
}
function getStatusCodeBadge(statusCode) {
	if (statusCode >= 200 && statusCode < 300) return { variant: "success" };
	if (statusCode >= 300 && statusCode < 400) return { variant: "warning" };
	if (statusCode >= 400 && statusCode < 500) return { variant: "error" };
	return { variant: "error" };
}
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const search = Route$1.useSearch();
	const urlPage = search.page ?? 1;
	const urlExecutionId = search.executionId;
	const filterMap = useMemo(() => queryParamToMap(search.query ?? null), [search.query]);
	const filterQueries = useMemo(() => filterMap.size > 0 ? Array.from(filterMap.values()) : void 0, [filterMap]);
	const [pageSize, setPageSize] = useState(EXECUTIONS_PER_PAGE);
	const [selectedExecutionId, setSelectedExecutionId] = useState(urlExecutionId || null);
	const refreshContext = useRefreshOptional();
	const { data: func } = useProjectFunction(projectId, functionId);
	const { executions, total, isLoading: executionsLoading, isFetching: executionsFetching, refetch } = useFunctionExecutions(projectId, functionId, urlPage - 1, pageSize, filterQueries);
	const refetchRef = useRef(refetch);
	refetchRef.current = refetch;
	useEffect(() => {
		if (refreshContext) {
			refreshContext.registerRefreshHandler(async () => {
				await refetchRef.current();
			}, "Executions");
			return () => {
				refreshContext.unregisterRefreshHandler();
			};
		}
	}, [refreshContext]);
	const handlePageChange = (page) => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				page: page === 1 ? void 0 : page
			}),
			replace: true
		});
	};
	const handlePageSizeChange = (size) => {
		setPageSize(size);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				page: void 0
			}),
			replace: true
		});
	};
	useEffect(() => {
		if (urlExecutionId && urlExecutionId !== selectedExecutionId) setSelectedExecutionId(urlExecutionId);
		else if (!urlExecutionId && selectedExecutionId) setSelectedExecutionId(null);
	}, [urlExecutionId, selectedExecutionId]);
	const handleExecutionSelect = (executionId) => {
		setSelectedExecutionId(executionId);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				executionId
			}),
			replace: true
		});
	};
	const handleExecutionDeselect = () => {
		setSelectedExecutionId(null);
	};
	const hasFilters = filterMap.size > 0;
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 min-w-0 flex-1 flex-col",
		children: /* @__PURE__ */ jsx(LogsListView, {
			executions,
			total,
			isLoading: executionsLoading,
			isFetching: executionsFetching,
			currentPage: urlPage,
			pageSize,
			onPageChange: handlePageChange,
			onPageSizeChange: handlePageSizeChange,
			selectedExecutionId,
			onExecutionSelect: handleExecutionSelect,
			onExecutionDeselect: handleExecutionDeselect,
			func,
			projectId,
			resourceVariant: "function",
			resourceId: functionId,
			emptyStateTitle: hasFilters ? void 0 : t("No executions yet"),
			emptyStateDescription: hasFilters ? void 0 : t("Executions will appear here when your function runs."),
			hasFilters,
			itemLabel: "executions"
		})
	});
}
export { LogsListView as n, View as t };
