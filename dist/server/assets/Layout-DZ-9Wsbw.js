import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { L as executionsFilterColumns, P as proxyRulesFilterColumns, R as deploymentsFilterColumns, pt as queryParamToMap, st as getQueryParam, ut as mapToQueryParam } from "./form-field-type-badge-C7qMzJo0.js";
import { gr as useFunctionDeployment, tr as functionDeploymentQueryOptions, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { k as canShowFunctionSecuritySettings } from "./console-access-checks-BTMEOKcL.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { n as useRefresh, t as RefreshProvider } from "./RefreshContext-CCamFujD.js";
import { a as CreateDeploymentProvider, i as CreateDeploymentDropdown, n as CreateCliDeploymentModal, r as CreateGitDeploymentModal, t as CreateManualDeploymentModal } from "./CreateManualDeploymentModal-CZJSSa3W.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, Outlet, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import React, { useEffect, useMemo, useState } from "react";
import { ExecutionMethod } from "@appwrite.io/console";
import { useIsFetching, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, ArrowLeft, Play, Plus, X } from "lucide-react";
var HTTP_METHODS = [
	{
		value: ExecutionMethod.GET,
		label: "GET"
	},
	{
		value: ExecutionMethod.POST,
		label: "POST"
	},
	{
		value: ExecutionMethod.PUT,
		label: "PUT"
	},
	{
		value: ExecutionMethod.PATCH,
		label: "PATCH"
	},
	{
		value: ExecutionMethod.DELETE,
		label: "DELETE"
	}
];
var SUGGESTED_HEADER_KEYS = [
	"Content-Type",
	"Accept",
	"Accept-Language",
	"Authorization",
	"X-API-Key",
	"User-Agent",
	"Cache-Control",
	"X-Requested-With",
	"Origin"
];
var DEFAULT_BODY = "{}";
var selectFieldClassName = "border-input bg-transparent dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-[13px] shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50";
function nextHeaderId() {
	return `h-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function executionToHttpResponse(execution) {
	const headers = (execution.responseHeaders ?? []).map((h) => ({
		name: h.name,
		value: h.value
	}));
	const status = execution.responseStatusCode ?? 0;
	const ok = execution.status === "completed" && status >= 200 && status < 300;
	const body = execution.responseBody || execution.errors || (execution.logs ? execution.logs : "");
	return {
		status,
		statusText: execution.status,
		headers,
		body,
		ok
	};
}
function CreateExecutionDrawer({ open, onOpenChange, functionId, func, onSuccess }) {
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: useT()("Create execution"),
		maxWidth: "sm:max-w-lg",
		disableAutoFocus: true,
		children: open ? /* @__PURE__ */ jsx(CreateExecutionDrawerForm, {
			functionId,
			func,
			onOpenChange,
			onSuccess
		}) : null
	});
}
function CreateExecutionDrawerForm({ functionId, func, onOpenChange, onSuccess }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const [method, setMethod] = useState(ExecutionMethod.POST);
	const [path, setPath] = useState("/");
	const [body, setBody] = useState(DEFAULT_BODY);
	const [headers, setHeaders] = useState([]);
	const [isAsync, setIsAsync] = useState(false);
	const [isExecuting, setIsExecuting] = useState(false);
	const [response, setResponse] = useState(null);
	const canExecute = func?.deploymentId != null;
	const fieldsDisabled = !canExecute || isExecuting;
	const buildHeadersObject = () => {
		const headersObj = {};
		for (const row of headers) {
			const key = row.key.trim();
			if (key) headersObj[key] = row.value.trim();
		}
		return Object.keys(headersObj).length > 0 ? headersObj : void 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!projectId) {
			toast.error(t("Project ID is required"));
			return;
		}
		setIsExecuting(true);
		setResponse(null);
		try {
			const pathNormalized = path.startsWith("/") ? path : `/${path}`;
			const execution = await sdk.forProject(projectId).functions.createExecution({
				functionId,
				xpath: pathNormalized,
				method,
				body: body.trim() && [
					ExecutionMethod.POST,
					ExecutionMethod.PUT,
					ExecutionMethod.PATCH
				].includes(method) ? body.trim() : void 0,
				headers: buildHeadersObject(),
				async: isAsync
			});
			await queryClient.refetchQueries({ queryKey: [
				"executions",
				"function",
				projectId,
				functionId
			] });
			onSuccess?.(execution.$id);
			if (isAsync) {
				toast.success(t("Async execution created"));
				onOpenChange(false);
				return;
			}
			const res = executionToHttpResponse(execution);
			setResponse(res);
			if (!res.ok) toast.error(execution.errors?.trim() || `${t("Execution finished with status")} ${execution.status}`);
		} catch (err) {
			const message = err instanceof Error ? err.message : t("Request failed");
			setResponse({
				status: 0,
				statusText: "Error",
				headers: [],
				body: message,
				ok: false
			});
			toast.error(message);
		} finally {
			setIsExecuting(false);
		}
	};
	const addHeader = () => {
		setHeaders((prev) => [...prev, {
			id: nextHeaderId(),
			key: "",
			value: ""
		}]);
	};
	const updateHeader = (id, updates) => {
		setHeaders((prev) => prev.map((h) => h.id === id ? {
			...h,
			...updates
		} : h));
	};
	const removeHeader = (id) => {
		setHeaders((prev) => prev.filter((h) => h.id !== id));
	};
	const formatResponseBody = (text) => {
		try {
			const parsed = JSON.parse(text);
			return JSON.stringify(parsed, null, 2);
		} catch {
			return text;
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: "flex flex-col flex-1 min-h-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col flex-1 min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto min-h-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-6 space-y-6",
					children: [!func?.deploymentId && /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-amber-600 dark:text-amber-400",
						children: t("No active deployment. Deploy the function first to run executions.")
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-[7rem_1fr] gap-x-3 gap-y-2 items-end",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 min-w-0",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "create-exec-method",
										className: "text-[13px]",
										children: t("Method")
									}), /* @__PURE__ */ jsx("select", {
										id: "create-exec-method",
										value: method,
										disabled: fieldsDisabled,
										onChange: (e) => setMethod(e.target.value),
										className: cn(selectFieldClassName, "cursor-pointer"),
										children: HTTP_METHODS.map((m) => /* @__PURE__ */ jsx("option", {
											value: m.value,
											children: m.label
										}, m.value))
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2 min-w-0",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "create-exec-path",
										className: "text-[13px]",
										children: t("Path")
									}), /* @__PURE__ */ jsx(Input, {
										id: "create-exec-path",
										value: path,
										disabled: fieldsDisabled,
										onChange: (e) => setPath(e.target.value),
										placeholder: "/",
										className: "h-9 text-[13px] font-mono"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-border pt-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[14px] font-medium",
											children: t("Headers")
										}), /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[11px] font-normal",
											children: t("Optional")
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mb-3",
										children: t("Provide essential metadata to define the content type, authentication details, and the expected response format.")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ jsx("datalist", {
												id: "header-keys-suggestions",
												children: SUGGESTED_HEADER_KEYS.map((k) => /* @__PURE__ */ jsx("option", { value: k }, k))
											}),
											headers.map((row) => /* @__PURE__ */ jsxs("div", {
												className: "flex gap-2 items-center flex-wrap",
												children: [
													/* @__PURE__ */ jsx(Input, {
														value: row.key,
														disabled: fieldsDisabled,
														onChange: (e) => updateHeader(row.id, { key: e.target.value }),
														list: "header-keys-suggestions",
														placeholder: t("Header name"),
														className: "h-9 text-[13px] w-[180px] shrink-0"
													}),
													/* @__PURE__ */ jsx(Input, {
														value: row.value,
														disabled: fieldsDisabled,
														onChange: (e) => updateHeader(row.id, { value: e.target.value }),
														placeholder: t("Enter value"),
														className: "h-9 text-[13px] flex-1 min-w-[120px]"
													}),
													/* @__PURE__ */ jsx(Button, {
														type: "button",
														variant: "ghost",
														size: "sm",
														disabled: fieldsDisabled,
														className: "h-9 w-9 p-0 shrink-0 text-muted-foreground hover:text-foreground",
														onClick: () => removeHeader(row.id),
														"aria-label": t("Remove header"),
														children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
													})
												]
											}, row.id)),
											/* @__PURE__ */ jsxs(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												disabled: fieldsDisabled,
												className: "h-8 text-[13px] text-primary hover:text-primary",
												onClick: addHeader,
												children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add header")]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-border pt-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[14px] font-medium",
											children: t("Body")
										}), /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[11px] font-normal",
											children: t("Optional")
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mb-3",
										children: t("Provide the request body to include the main data you want to send to the server.")
									}),
									/* @__PURE__ */ jsx(Textarea, {
										value: body,
										disabled: fieldsDisabled,
										onChange: (e) => setBody(e.target.value),
										placeholder: t("Enter request body here..."),
										className: "min-h-[100px] text-[13px] font-mono resize-y",
										rows: 4
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "border-t border-border pt-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "create-exec-async",
											className: "text-[14px] font-medium",
											children: t("Async execution")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground mt-1",
											children: t("Return immediately and run in the background. View the response on the executions tab when it completes.")
										})]
									}), /* @__PURE__ */ jsx(Switch, {
										id: "create-exec-async",
										checked: isAsync,
										disabled: fieldsDisabled,
										onCheckedChange: (checked) => {
											setIsAsync(checked);
											if (checked) setResponse(null);
										},
										className: "shrink-0"
									})]
								})
							})
						]
					})]
				})
			}), response && !isAsync && /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 border-t border-border bg-muted/30 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-3 border-b border-border",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[13px] font-medium",
						children: t("Response")
					}), /* @__PURE__ */ jsxs(Badge, {
						variant: response.ok ? "default" : "destructive",
						className: "ms-2 text-[11px]",
						children: [
							response.status,
							" ",
							response.statusText
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-h-[200px] overflow-y-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-3 border-b border-border",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2",
							children: t("Headers")
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [response.headers.map((h) => /* @__PURE__ */ jsxs("div", {
								className: "text-[12px] font-mono flex gap-2",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground shrink-0",
									children: [h.name, ":"]
								}), /* @__PURE__ */ jsx("span", {
									className: "break-all",
									children: h.value
								})]
							}, `${h.name}-${h.value}`)), response.headers.length === 0 && /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("No headers")
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2",
							children: t("Body")
						}), /* @__PURE__ */ jsx("pre", {
							className: "text-[12px] font-mono whitespace-pre-wrap break-words bg-background/50 rounded border border-border p-3 overflow-x-auto",
							children: response.body ? formatResponseBody(response.body) : t("(empty)")
						})]
					})]
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
			children: [/* @__PURE__ */ jsxs(Button, {
				type: "submit",
				disabled: !canExecute || isExecuting,
				children: [/* @__PURE__ */ jsx(Play, { className: "me-1.5 h-4 w-4" }), t("Execute")]
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				onClick: () => onOpenChange(false),
				children: t("Cancel")
			})]
		})]
	})] });
}
const DeploymentsToolbarContext = React.createContext(null);
function Layout() {
	return /* @__PURE__ */ jsx(RefreshProvider, { children: /* @__PURE__ */ jsx(FunctionLayoutContent, {}) });
}
function FunctionLayoutContent() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { triggerRefresh, hasRefreshHandler } = useRefresh();
	const executionsListRefreshing = useIsFetching({ queryKey: [
		"executions",
		"function",
		projectId,
		functionId
	] }) > 0;
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const functionIndex = pathParts.findIndex((part, idx) => part === "functions" && pathParts[idx + 1] && pathParts[idx + 1] !== "templates");
		if (functionIndex >= 0) {
			if (pathParts[functionIndex + 2]) {
				const tabFromPath = pathParts[functionIndex + 2];
				if ([
					"deployments",
					"executions",
					"domains",
					"variables",
					"security",
					"settings"
				].includes(tabFromPath)) return tabFromPath;
			}
		}
		return "deployments";
	}, [location.pathname]);
	const { data: func, isLoading } = useProjectFunction(projectId, functionId);
	const activeDeploymentId = func?.deploymentId;
	const isExecutionsTab = activeTab === "executions";
	const cachedActiveDeployment = projectId && functionId && activeDeploymentId ? queryClient.getQueryData(functionDeploymentQueryOptions(projectId, functionId, activeDeploymentId).queryKey) : void 0;
	const { data: activeDeploymentFromQuery } = useFunctionDeployment(projectId, functionId, isExecutionsTab ? void 0 : activeDeploymentId);
	const activeDeployment = activeDeploymentFromQuery ?? cachedActiveDeployment;
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSecuritySettings = canShowFunctionSecuritySettings(access, features);
	const domainsSearchValue = (() => {
		const search = location.search;
		if (typeof search === "object" && search !== null && "search" in search) return search.search ?? "";
		return new URLSearchParams(typeof search === "string" ? search : "").get("search") || "";
	})();
	const [filtersOpen, setFiltersOpen] = useState(false);
	const functionFilterMap = useMemo(() => {
		const search = location.search;
		return queryParamToMap(typeof search === "object" && search !== null && "query" in search ? search.query ?? null : getQueryParam(new URL(location.pathname + (typeof search === "string" ? search || "" : ""), typeof window !== "undefined" ? window.location.origin : "http://dummy")));
	}, [location.pathname, location.search]);
	const functionFilterColumns = useMemo(() => {
		if (activeTab === "deployments") return deploymentsFilterColumns;
		if (activeTab === "executions") return executionsFilterColumns;
		if (activeTab === "domains") return proxyRulesFilterColumns;
		return deploymentsFilterColumns;
	}, [activeTab]);
	const applyFunctionFilter = (key, queryStr, replaceKey) => {
		const newMap = new Map(functionFilterMap);
		if (replaceKey) newMap.delete(replaceKey);
		newMap.set(key, queryStr);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...typeof prev === "object" && prev !== null ? prev : {},
				query: mapToQueryParam(newMap),
				page: 1
			}),
			replace: true
		});
	};
	const removeFunctionFilter = (key) => {
		const newMap = new Map(functionFilterMap);
		newMap.delete(key);
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...typeof prev === "object" && prev !== null ? prev : {},
				query: newMap.size > 0 ? mapToQueryParam(newMap) : void 0,
				page: newMap.size > 0 ? 1 : void 0
			}),
			replace: true
		});
	};
	const clearAllFunctionFilters = () => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...typeof prev === "object" && prev !== null ? prev : {},
				query: void 0
			}),
			replace: true
		});
	};
	const tabs = useMemo(() => {
		return [
			{
				id: "deployments",
				label: t("Deployments"),
				to: "/projects/$projectId/functions/$functionId",
				params: {
					projectId,
					functionId
				}
			},
			{
				id: "domains",
				label: t("Domains"),
				to: "/projects/$projectId/functions/$functionId/domains",
				params: {
					projectId,
					functionId
				}
			},
			{
				id: "executions",
				label: t("Executions"),
				to: "/projects/$projectId/functions/$functionId/executions",
				params: {
					projectId,
					functionId
				}
			},
			...showSecuritySettings ? [
				{
					id: "variables",
					label: t("Variables"),
					to: "/projects/$projectId/functions/$functionId/variables",
					params: {
						projectId,
						functionId
					}
				},
				{
					id: "security",
					label: t("Security"),
					to: "/projects/$projectId/functions/$functionId/security",
					params: {
						projectId,
						functionId
					}
				},
				{
					id: "settings",
					label: t("Settings"),
					to: "/projects/$projectId/functions/$functionId/settings",
					params: {
						projectId,
						functionId
					}
				}
			] : []
		];
	}, [
		projectId,
		functionId,
		showSecuritySettings,
		t
	]);
	useEffect(() => {
		if (showSecuritySettings || !projectId || !functionId) return;
		if (activeTab === "variables" || activeTab === "security" || activeTab === "settings") navigate({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId
			},
			replace: true
		});
	}, [
		showSecuritySettings,
		activeTab,
		projectId,
		functionId,
		navigate
	]);
	const handleDomainsSearchChange = (value) => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				search: value || void 0
			}),
			replace: true
		});
	};
	const [gitDeployOpen, setGitDeployOpen] = useState(false);
	const [cliDeployOpen, setCliDeployOpen] = useState(false);
	const [manualDeployOpen, setManualDeployOpen] = useState(false);
	const [executeDrawerOpen, setExecuteDrawerOpen] = useState(false);
	const [redeployDialogOpen, setRedeployDialogOpen] = useState(false);
	const redeployMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !functionId || !activeDeployment) throw new Error("Project ID, Function ID, and Deployment ID are required");
			return await sdk.forProject(projectId).functions.createDuplicateDeployment({
				functionId,
				deploymentId: activeDeployment.$id
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"deployments",
				"project",
				projectId,
				functionId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"function",
				"project",
				projectId,
				functionId
			] });
			toast.success(t("Deployment rebuild started"));
			setRedeployDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to redeploy"));
		}
	});
	const handleCreateExecution = () => {
		if (!func?.deploymentId) {
			toast.error(t("Execution cannot be created because there is no active deployment"));
			return;
		}
		setExecuteDrawerOpen(true);
	};
	const handleAddDomain = () => {
		navigate({
			to: "/projects/$projectId/functions/$functionId/domains/add",
			params: {
				projectId,
				functionId
			}
		});
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Loading..."),
			fullWidthBorder: true
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card py-12 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Loading function...")
				})
			})
		})]
	});
	if (!func) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Function not found"),
			fullWidthBorder: true
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-card py-12 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-4 text-[13px] text-muted-foreground",
					children: t("The function you're looking for doesn't exist or you don't have access to it.")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/projects/$projectId/functions",
						params: { projectId },
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), t("Back to Functions")]
					})
				})]
			})
		})]
	});
	const disabledAlert = func && func.enabled === false ? /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-amber-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
			children: /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: "border-amber-500/30 bg-transparent",
				children: [
					/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }),
					/* @__PURE__ */ jsx(AlertTitle, {
						className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
						children: t("Function is disabled")
					}),
					/* @__PURE__ */ jsx(AlertDescription, {
						className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
						children: /* @__PURE__ */ jsxs("span", {
							className: "inline",
							children: [
								t("This function is disabled and not accessible to end users through the API. Console actions remain available."),
								" ",
								/* @__PURE__ */ jsx(Link, {
									to: "/projects/$projectId/functions/$functionId/settings",
									params: {
										projectId,
										functionId
									},
									className: "font-medium underline hover:no-underline inline",
									children: t("Enable it in the Settings tab")
								}),
								" ",
								t("to make it available to end users.")
							]
						})
					})
				]
			})
		})
	}) : void 0;
	const configAlert = !func?.live && func ? /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-amber-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
			children: /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: "border-amber-500/30 bg-transparent",
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx(AlertTitle, {
							className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
							children: t("Settings changes are not live yet")
						}), /* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline",
								children: t("You've updated function settings, but they won't take effect until you redeploy. The current deployment is still running with the previous settings.")
							})
						})]
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
						onClick: () => setRedeployDialogOpen(true),
						disabled: !func.deploymentId || !activeDeployment || redeployMutation.isPending,
						children: t("Redeploy")
					})]
				})]
			})
		})
	}) : void 0;
	const isExecutionsTabLayout = activeTab === "executions";
	return /* @__PURE__ */ jsx(CreateDeploymentProvider, {
		onOpenGit: () => setGitDeployOpen(true),
		onOpenCli: () => setCliDeployOpen(true),
		onOpenManual: () => setManualDeployOpen(true),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex min-h-0 flex-1 flex-col", isExecutionsTabLayout && "h-full"),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn(isExecutionsTabLayout && "sticky top-0 z-20 shrink-0 bg-background"),
					children: /* @__PURE__ */ jsx(ServiceHeader, {
						title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
							kind: "function",
							label: func.name || t("Unnamed Function"),
							resourceId: func.$id,
							projectId,
							back: {
								to: "/projects/$projectId/functions",
								params: { projectId },
								"aria-label": t("Back to functions")
							}
						}),
						tabs,
						activeTab,
						fullWidthBorder: true,
						fullWidth: activeTab === "executions",
						showToolbarBottomBorder: isExecutionsTabLayout,
						searchPlaceholder: activeTab === "domains" ? t("Search domain...") : void 0,
						searchValue: activeTab === "domains" ? domainsSearchValue : void 0,
						onSearchChange: activeTab === "domains" ? handleDomainsSearchChange : void 0,
						showFilters: activeTab === "executions" || activeTab === "domains",
						filterTrigger: activeTab === "executions" || activeTab === "domains" ? /* @__PURE__ */ jsx(FiltersPopover, {
							open: filtersOpen,
							onOpenChange: setFiltersOpen,
							columns: functionFilterColumns,
							filterMap: functionFilterMap,
							onRemoveFilter: removeFunctionFilter,
							onClearAll: clearAllFunctionFilters,
							onApplyFilter: applyFunctionFilter,
							resourceLabel: activeTab === "executions" ? "executions" : "domains",
							filterScope: `functions.${activeTab}`,
							onApplyQuery: (queryParam) => {
								navigate({
									to: location.pathname,
									search: (prev) => ({
										...typeof prev === "object" && prev !== null ? prev : {},
										query: queryParam ?? void 0,
										page: 1
									}),
									replace: true
								});
							},
							teamId: project?.teamId
						}) : void 0,
						showRefresh: activeTab === "executions" && hasRefreshHandler,
						onRefresh: activeTab === "executions" ? triggerRefresh : void 0,
						isRefreshing: executionsListRefreshing,
						beforeCreateButtons: void 0,
						createLabel: activeTab === "deployments" ? void 0 : activeTab === "executions" ? t("Create execution") : activeTab === "domains" ? t("Add domain") : void 0,
						createAnalyticsAction: activeTab === "executions" ? "create-execution" : void 0,
						onCreate: activeTab === "deployments" ? void 0 : activeTab === "executions" ? handleCreateExecution : activeTab === "domains" ? handleAddDomain : void 0,
						createDisabled: activeTab === "executions" && !func?.deploymentId,
						contentAfterBorder: disabledAlert || configAlert ? /* @__PURE__ */ jsxs("div", { children: [disabledAlert, configAlert] }) : void 0
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("flex-1 min-h-0", isExecutionsTabLayout && "flex flex-col"),
					children: /* @__PURE__ */ jsx(DeploymentsToolbarContext.Provider, {
						value: activeTab === "deployments" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FiltersPopover, {
							open: filtersOpen,
							onOpenChange: setFiltersOpen,
							columns: functionFilterColumns,
							filterMap: functionFilterMap,
							onRemoveFilter: removeFunctionFilter,
							onClearAll: clearAllFunctionFilters,
							onApplyFilter: applyFunctionFilter,
							resourceLabel: "deployments",
							filterScope: "functions.deployments",
							onApplyQuery: (queryParam) => {
								navigate({
									to: location.pathname,
									search: (prev) => ({
										...typeof prev === "object" && prev !== null ? prev : {},
										query: queryParam ?? void 0,
										page: 1
									}),
									replace: true
								});
							},
							teamId: project?.teamId
						}), /* @__PURE__ */ jsx(CreateDeploymentDropdown, {
							onSelectGit: () => setGitDeployOpen(true),
							onSelectCli: () => setCliDeployOpen(true),
							onSelectManual: () => setManualDeployOpen(true)
						})] }) : null,
						children: /* @__PURE__ */ jsx(Outlet, {})
					})
				}),
				func && functionId && projectId && /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(CreateExecutionDrawer, {
						open: executeDrawerOpen,
						onOpenChange: setExecuteDrawerOpen,
						functionId,
						func
					}),
					/* @__PURE__ */ jsx(CreateGitDeploymentModal, {
						open: gitDeployOpen,
						onOpenChange: setGitDeployOpen,
						resourceType: "function",
						projectId,
						resourceId: functionId,
						resource: func
					}),
					/* @__PURE__ */ jsx(CreateCliDeploymentModal, {
						open: cliDeployOpen,
						onOpenChange: setCliDeployOpen,
						resourceType: "function",
						projectId,
						resourceId: functionId
					}),
					/* @__PURE__ */ jsx(CreateManualDeploymentModal, {
						open: manualDeployOpen,
						onOpenChange: setManualDeployOpen,
						resourceType: "function",
						projectId,
						resourceId: functionId
					})
				] }),
				activeDeployment && /* @__PURE__ */ jsx(Dialog, {
					open: redeployDialogOpen,
					onOpenChange: setRedeployDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [
							/* @__PURE__ */ jsx(DialogHeader, {
								className: "px-6 pt-6 pb-4 text-start",
								children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Redeploy deployment") })
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-4 pt-4",
								children: [/* @__PURE__ */ jsx(DialogDescription, {
									className: "text-[13px] mb-4",
									children: t("This will create a new build for this deployment using the current function configuration. The original deployment's code will be preserved and used for the new build.")
								}), /* @__PURE__ */ jsx(DeploymentInfo, {
									deployment: activeDeployment,
									showStatus: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									onClick: () => setRedeployDialogOpen(false),
									disabled: redeployMutation.isPending,
									className: "h-9 text-[13px]",
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "default",
									onClick: () => redeployMutation.mutate(),
									disabled: redeployMutation.isPending,
									className: "h-9 text-[13px]",
									children: t("Redeploy")
								})]
							})
						]
					})
				})
			]
		})
	});
}
export { Layout as n, CreateExecutionDrawer as r, DeploymentsToolbarContext as t };
