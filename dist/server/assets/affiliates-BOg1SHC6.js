import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { o as areUsageBreakdownQueriesEnabled } from "./i18n-Db4baE06.js";
import { d as LONG_STALE_TIME, o as DEFAULT_PAGE_SIZE, p as SMALL_PAGE_SIZE, s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { tn as isScreenshotModeActive } from "./organizations-BKtnlNrj.js";
import { J as getVariableValueError, Y as validateVariables } from "./projects-BaTJenfQ.js";
import { t as buildAttributePrefixSearchQueries } from "./appwrite-id-L15yEGeF.js";
import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { B as fetchProjectTable, I as fetchProjectDatabases, L as fetchProjectDatabasesByIds, P as fetchProjectConsoleDatabases, at as resolveProjectDatabaseType } from "./databases-Dh0pwZ6h.js";
import { n as databaseRouteKindFromApiType } from "./database-routes-DB_xKWuY.js";
import { i as resolveUsageListOrder, n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT, r as USAGE_BREAKDOWN_DRAWER_LIMIT, t as COMPUTE_BREAKDOWN_RESOURCE_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { a as isUsageChartIntervalValidForRange, c as resolveUsageChartIntervalForRange, d as isFullCalendarDayRange, g as resolveUsageDateBounds, h as resolveUsageChartFetchBounds, l as getStableUsageChartDateRange, t as DEFAULT_USAGE_CHART_INTERVAL, x as getUsageDateRangePresetByValue } from "./chart-interval-Dbrn19qD.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { useMemo } from "react";
import { ID, Query } from "@appwrite.io/console";
import { keepPreviousData, queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addDays, addHours, addMinutes, differenceInCalendarDays, endOfDay, format, isSameDay, parseISO, startOfDay, startOfHour, startOfMinute, subDays } from "date-fns";
const SpecificationType = {
	Runtimes: "runtimes",
	Builds: "builds"
};
function getFirstEnabledSpecification(specifications) {
	return specifications.find((spec) => spec.enabled !== false);
}
function hasUnavailableSpecifications(specifications) {
	return specifications.some((spec) => spec.enabled === false);
}
function isSpecificationAllowedInPlan(spec) {
	return spec.enabled !== false;
}
var EMPTY_PROXY_RULES = [];
const FUNCTIONS_DEFAULT_SORT_BY = "$createdAt";
const FUNCTIONS_DEFAULT_SORT_ORDER = "desc";
async function fetchProjectFunctions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = FUNCTIONS_DEFAULT_SORT_BY, sortOrder = FUNCTIONS_DEFAULT_SORT_ORDER) {
	if (!projectId) return {
		functions: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.functions.list({ queries });
	return {
		functions: response.functions || [],
		total: response.total || 0
	};
}
async function fetchProjectFunction(projectId, functionId) {
	if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
	return await sdk.forProject(projectId).functions.get({ functionId });
}
async function fetchProjectFunctionsByIds(projectId, functionIds) {
	if (!projectId || functionIds.length === 0) return { functions: [] };
	const validIds = [...new Set(functionIds.filter((id) => typeof id === "string" && id.trim()))];
	if (validIds.length === 0) return { functions: [] };
	const idQuery = validIds.length === 1 ? Query.equal("$id", validIds[0]) : Query.or(validIds.map((id) => Query.equal("$id", id)));
	return { functions: (await sdk.forProject(projectId).functions.list({ queries: [idQuery, Query.limit(validIds.length)] })).functions ?? [] };
}
function buildFunctionUpdateParams(func, updates) {
	return {
		functionId: func.$id,
		name: func.name,
		runtime: func.runtime,
		execute: func.execute || void 0,
		events: func.events || void 0,
		schedule: func.schedule || void 0,
		timeout: func.timeout || void 0,
		enabled: func.enabled ?? void 0,
		logging: func.logging ?? void 0,
		entrypoint: func.entrypoint || void 0,
		commands: func.commands || void 0,
		scopes: func.scopes || void 0,
		installationId: func.installationId,
		providerRepositoryId: func.providerRepositoryId,
		providerBranch: func.providerBranch,
		providerSilentMode: func.providerSilentMode,
		providerRootDirectory: func.providerRootDirectory,
		providerBranches: func.providerBranches || void 0,
		providerPaths: func.providerPaths || void 0,
		buildSpecification: func.buildSpecification,
		runtimeSpecification: func.runtimeSpecification,
		deploymentRetention: func.deploymentRetention,
		...updates
	};
}
async function fetchFunctionDeployments(projectId, functionId, page = 0, limit = 10, filterQueries) {
	if (!projectId || !functionId) return {
		deployments: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.functions.listDeployments({
		functionId,
		queries
	});
	return {
		deployments: response.deployments || [],
		total: response.total || 0
	};
}
async function fetchFunctionDeployment(projectId, functionId, deploymentId) {
	if (!projectId || !functionId || !deploymentId) throw new Error("Project ID, Function ID, and Deployment ID are required");
	return await sdk.forProject(projectId).functions.getDeployment({
		functionId,
		deploymentId
	});
}
var FUNCTION_TEMPLATES_LIST_BATCH = 100;
function dedupeTemplateFunctionsById(templates) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const t of templates) {
		const id = t.id != null && t.id !== "" ? String(t.id) : null;
		if (id) {
			if (seen.has(id)) continue;
			seen.add(id);
		}
		out.push(t);
	}
	return out;
}
function templatesSortKey(arr) {
	if (!arr?.length) return "";
	return [...arr].sort().join("");
}
function listTemplatesFilterPayload(runtimes, useCases) {
	return {
		runtimes: runtimes?.length ? runtimes : void 0,
		useCases: useCases?.length ? useCases : void 0
	};
}
async function fetchFunctionTemplatesPage(projectId, offset, limit, runtimes, useCases) {
	if (!projectId) return {
		templates: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).functions.listTemplates({
		...listTemplatesFilterPayload(runtimes, useCases),
		limit,
		offset,
		total: true
	});
	const templates = response.templates ? [...response.templates] : [];
	return {
		templates,
		total: response.total ?? templates.length
	};
}
function functionTemplatesPageQueryOptions(projectId, offset, limit, runtimes, useCases) {
	const rt = runtimes?.length ? runtimes : void 0;
	const uc = useCases?.length ? useCases : void 0;
	return queryOptions({
		queryKey: [
			"function-templates",
			"page",
			"project",
			projectId,
			offset,
			limit,
			templatesSortKey(rt),
			templatesSortKey(uc)
		],
		queryFn: () => fetchFunctionTemplatesPage(projectId, offset, limit, rt, uc),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: LONG_STALE_TIME,
		structuralSharing: false,
		placeholderData: keepPreviousData
	});
}
async function fetchAllFunctionTemplates(projectId, filters) {
	if (!projectId) return {
		templates: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const all = [];
	let offset = 0;
	let total = 0;
	while (true) {
		const response = await projectSdk.functions.listTemplates({
			...listTemplatesFilterPayload(filters?.runtimes, filters?.useCases),
			limit: FUNCTION_TEMPLATES_LIST_BATCH,
			offset,
			total: offset === 0
		});
		const batch = (response.templates ? [...response.templates] : []).slice(0, FUNCTION_TEMPLATES_LIST_BATCH);
		if (offset === 0) total = response.total || 0;
		all.push(...batch);
		if (batch.length === 0) break;
		if (batch.length < FUNCTION_TEMPLATES_LIST_BATCH) break;
		if (total > 0 && all.length >= total) break;
		offset += FUNCTION_TEMPLATES_LIST_BATCH;
	}
	const templates = dedupeTemplateFunctionsById(all);
	return {
		templates,
		total: templates.length
	};
}
function allFunctionTemplatesQueryOptions(projectId, filters) {
	return queryOptions({
		queryKey: [
			"function-templates",
			"all",
			"project",
			projectId,
			templatesSortKey(filters?.runtimes),
			templatesSortKey(filters?.useCases)
		],
		queryFn: () => fetchAllFunctionTemplates(projectId, filters),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: LONG_STALE_TIME,
		structuralSharing: false,
		placeholderData: keepPreviousData
	});
}
async function fetchFunctionTemplate(projectId, templateId) {
	if (!projectId || !templateId) throw new Error("Project ID and Template ID are required");
	return await sdk.forProject(projectId).functions.getTemplate({ templateId });
}
async function fetchFunctionExecutions(projectId, functionId, page = 0, limit = 10, filterQueries) {
	if (!projectId || !functionId) return {
		executions: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.functions.listExecutions({
		functionId,
		queries
	});
	return {
		executions: response.executions || [],
		total: response.total || 0
	};
}
async function fetchFunctionExecution(projectId, functionId, executionId) {
	if (!projectId || !functionId || !executionId) throw new Error("Project ID, Function ID, and Execution ID are required");
	return await sdk.forProject(projectId).functions.getExecution({
		functionId,
		executionId
	});
}
async function fetchFunctionVariables(projectId, functionId) {
	if (!projectId || !functionId) return {
		variables: [],
		total: 0
	};
	const variables = [...(await sdk.forProject(projectId).functions.listVariables({ functionId })).variables || []].sort((a, b) => {
		const aTime = new Date(a.$createdAt || 0).getTime();
		return new Date(b.$createdAt || 0).getTime() - aTime;
	});
	return {
		variables,
		total: variables.length
	};
}
async function fetchFunctionDomains(projectId, functionId, page = 0, limit = 10, search, filterQueries) {
	if (!projectId || !functionId) return {
		rules: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const fixedQueries = [
		Query.equal("type", ["deployment", "redirect"]),
		Query.equal("deploymentResourceType", "function"),
		Query.equal("deploymentResourceId", functionId),
		Query.equal("trigger", "manual"),
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.proxy.listRules({
		queries: fixedQueries,
		search: search?.trim() || void 0
	});
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
async function fetchFunctionDeploymentProxyRules(projectId, functionId, deploymentId) {
	if (!projectId || !functionId || !deploymentId) return {
		rules: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.equal("type", ["deployment", "redirect"]),
		Query.equal("deploymentId", deploymentId),
		Query.equal("deploymentResourceType", "function"),
		Query.equal("deploymentResourceId", functionId),
		Query.orderDesc("$createdAt")
	];
	const response = await projectSdk.proxy.listRules({ queries });
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
async function fetchProjectRuntimes(projectId) {
	if (!projectId) return { runtimes: [] };
	return await sdk.forProject(projectId).functions.listRuntimes();
}
async function fetchFunctionSpecifications(projectId, type = SpecificationType.Runtimes) {
	if (!projectId) return {
		specifications: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).functions.listSpecifications({ type });
	return {
		specifications: response.specifications || [],
		total: response.total || 0
	};
}
function functionsQueryOptions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = FUNCTIONS_DEFAULT_SORT_BY, sortOrder = FUNCTIONS_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"functions",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchProjectFunctions(projectId, page, limit, search, filterQueries, sortBy, sortOrder),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function projectFunctionQueryOptions(projectId, functionId) {
	return queryOptions({
		queryKey: [
			"function",
			"project",
			projectId,
			functionId
		],
		queryFn: () => fetchProjectFunction(projectId, functionId),
		enabled: !!projectId && !!functionId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId ? 300 * 1e3 : 0
	});
}
function functionDeploymentQueryOptions(projectId, functionId, deploymentId) {
	return queryOptions({
		queryKey: [
			"deployment",
			"function",
			projectId,
			functionId,
			deploymentId
		],
		queryFn: () => fetchFunctionDeployment(projectId, functionId, deploymentId),
		enabled: !!projectId && !!functionId && !!deploymentId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId && deploymentId ? 300 * 1e3 : 0
	});
}
function functionDeploymentsQueryOptions(projectId, functionId, page = 0, limit = 10, filterQueries) {
	return queryOptions({
		queryKey: [
			"deployments",
			"function",
			projectId,
			functionId,
			page,
			limit,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchFunctionDeployments(projectId, functionId, page, limit, filterQueries),
		enabled: !!projectId && !!functionId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function functionExecutionsQueryOptions(projectId, functionId, page = 0, limit = 10, filterQueries) {
	return queryOptions({
		queryKey: [
			"executions",
			"function",
			projectId,
			functionId,
			page,
			limit,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchFunctionExecutions(projectId, functionId, page, limit, filterQueries),
		enabled: !!projectId && !!functionId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function functionDomainsQueryOptions(projectId, functionId, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"proxy-rules",
			"function",
			projectId,
			functionId,
			page,
			limit,
			search,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchFunctionDomains(projectId, functionId, page, limit, search, filterQueries),
		enabled: !!projectId && !!functionId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function functionDeploymentProxyRulesQueryOptions(projectId, functionId, deploymentId) {
	return queryOptions({
		queryKey: [
			"proxy-rules",
			"deployment",
			"function",
			projectId,
			functionId,
			deploymentId
		],
		queryFn: () => fetchFunctionDeploymentProxyRules(projectId, functionId, deploymentId),
		enabled: !!projectId && !!functionId && !!deploymentId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId && deploymentId ? 300 * 1e3 : 0
	});
}
function projectRuntimesQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"runtimes",
			"project",
			projectId
		],
		queryFn: () => fetchProjectRuntimes(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function functionVariablesQueryOptions(projectId, functionId) {
	return queryOptions({
		queryKey: [
			"variables",
			"function",
			projectId,
			functionId
		],
		queryFn: () => fetchFunctionVariables(projectId, functionId),
		enabled: !!projectId && !!functionId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && functionId ? 300 * 1e3 : 0
	});
}
function functionSpecificationsQueryOptions(projectId, type = SpecificationType.Runtimes) {
	return queryOptions({
		queryKey: [
			"specifications",
			"function",
			projectId,
			type
		],
		queryFn: () => fetchFunctionSpecifications(projectId, type),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectFunctions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = FUNCTIONS_DEFAULT_SORT_BY, sortOrder = FUNCTIONS_DEFAULT_SORT_ORDER) {
	const { data: functionsData, isLoading, isFetching, isFetched, error, refetch } = useQuery(functionsQueryOptions(projectId, page, limit, search, filterQueries, sortBy, sortOrder));
	const functions = useMemo(() => {
		if (!functionsData || !("functions" in functionsData)) return [];
		return functionsData.functions || [];
	}, [functionsData]);
	const totalPages = useMemo(() => {
		if (!functionsData || !("total" in functionsData)) return 0;
		return Math.ceil((functionsData.total || 0) / limit);
	}, [functionsData, limit]);
	return {
		functions,
		total: functionsData && "total" in functionsData ? functionsData.total || 0 : 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useProjectFunction(projectId, functionId) {
	return useQuery(projectFunctionQueryOptions(projectId, functionId));
}
function useFunctionDeployments(projectId, functionId, page = 0, limit = 10, filterQueries) {
	const { data: deploymentsData, isLoading, isFetching, error, refetch } = useQuery(functionDeploymentsQueryOptions(projectId, functionId, page, limit, filterQueries));
	return {
		data: deploymentsData,
		deployments: deploymentsData?.deployments || [],
		total: deploymentsData?.total || 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useFunctionDeployment(projectId, functionId, deploymentId) {
	return useQuery(functionDeploymentQueryOptions(projectId, functionId, deploymentId));
}
function functionTemplateQueryOptions(projectId, templateId) {
	return queryOptions({
		queryKey: [
			"function-template",
			"project",
			projectId,
			templateId
		],
		queryFn: () => fetchFunctionTemplate(projectId, templateId),
		enabled: !!projectId && !!templateId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useFunctionTemplate(projectId, templateId) {
	return useQuery(functionTemplateQueryOptions(projectId, templateId));
}
function useFunctionExecutions(projectId, functionId, page = 0, limit = 10, filterQueries) {
	const { data: executionsData, isLoading, isFetching, error, refetch } = useQuery(functionExecutionsQueryOptions(projectId, functionId, page, limit, filterQueries));
	return {
		executions: executionsData?.executions || [],
		total: executionsData?.total || 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useFunctionVariables(projectId, functionId, page = 0, limit = 10) {
	const { data, isLoading, error, refetch } = useQuery(functionVariablesQueryOptions(projectId, functionId));
	const all = data?.variables ?? [];
	const { variables, total } = useMemo(() => {
		const totalCount = all.length;
		const start = page * limit;
		return {
			variables: all.slice(start, start + limit),
			total: totalCount
		};
	}, [
		all,
		page,
		limit
	]);
	return {
		data,
		variables,
		total,
		isLoading,
		error,
		refetch
	};
}
function useFunctionDomains(projectId, functionId, page = 0, limit = 10, search, filterQueries) {
	return useQuery(functionDomainsQueryOptions(projectId, functionId, page, limit, search, filterQueries));
}
function useFunctionDeploymentProxyRules(projectId, functionId, deploymentId, options) {
	const baseOptions = functionDeploymentProxyRulesQueryOptions(projectId, functionId, deploymentId);
	const enabled = options?.enabled !== false && baseOptions.enabled !== false;
	const { data, isLoading, error, refetch } = useQuery({
		...baseOptions,
		enabled
	});
	return {
		rules: data?.rules ?? EMPTY_PROXY_RULES,
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useCreateFunctionVariable(projectId, functionId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ key, value, secret = false }) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			const validationError = validateVariables([{
				key: key.trim(),
				value
			}]);
			if (validationError) throw new Error(validationError);
			return await sdk.forProject(projectId).functions.createVariable({
				functionId,
				variableId: ID.unique(),
				key: key.trim(),
				value,
				secret
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"function",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"function",
				"project",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateFunctionVariable(projectId, functionId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ variableId, key, value, secret }) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			if (!key.trim()) throw new Error("Variable key is required");
			const valueError = getVariableValueError(key, value);
			if (valueError) throw new Error(valueError);
			return await sdk.forProject(projectId).functions.updateVariable({
				functionId,
				variableId,
				key: key.trim(),
				value,
				secret
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"function",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"function",
				"project",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteFunctionVariable(projectId, functionId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (variableId) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.deleteVariable({
				functionId,
				variableId
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"function",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"function",
				"project",
				projectId,
				functionId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		}
	});
}
async function cancelFunctionDeployment(projectId, functionId, deploymentId) {
	if (!projectId || !functionId || !deploymentId) throw new Error("Project ID, Function ID, and Deployment ID are required");
	return await sdk.forProject(projectId).functions.updateDeploymentStatus({
		functionId,
		deploymentId
	});
}
async function deleteFunctionDeployment(projectId, functionId, deploymentId) {
	if (!projectId || !functionId || !deploymentId) throw new Error("Project ID, Function ID, and Deployment ID are required");
	return await sdk.forProject(projectId).functions.deleteDeployment({
		functionId,
		deploymentId
	});
}
function useProjectRuntimes(projectId) {
	return useQuery(projectRuntimesQueryOptions(projectId));
}
function useFunctionSpecifications(projectId, type = SpecificationType.Runtimes) {
	return useQuery(functionSpecificationsQueryOptions(projectId, type));
}
function useDeleteFunction(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (functionId) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.delete({ functionId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: Dependencies.FUNCTIONS });
		}
	});
}
function useCreateFunctionDomainRule(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			const { domain, functionId, behaviour, branch, redirectUrl, statusCode } = params;
			const domainNorm = domain.trim().toLowerCase();
			if (behaviour === "redirect") {
				if (!redirectUrl?.trim() || !statusCode) throw new Error("Redirect URL and status code are required");
				const { ProxyResourceType, StatusCode } = await import("@appwrite.io/console");
				const codeMap = {
					"301": StatusCode.MovedPermanently301,
					"302": StatusCode.Found302,
					"307": StatusCode.TemporaryRedirect307,
					"308": StatusCode.PermanentRedirect308
				};
				return await projectSdk.proxy.createRedirectRule({
					domain: domainNorm,
					url: redirectUrl.trim(),
					statusCode: codeMap[statusCode] ?? StatusCode.Found302,
					resourceId: functionId,
					resourceType: ProxyResourceType.Function
				});
			}
			if (behaviour === "branch" && branch) return await projectSdk.proxy.createFunctionRule({
				domain: domainNorm,
				functionId,
				branch
			});
			return await projectSdk.proxy.createFunctionRule({
				domain: domainNorm,
				functionId
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["proxy-rules"] });
		}
	});
}
const MARKETING_SITE_TEMPLATES_PROJECT_ID = "console";
const SITE_TEMPLATE_GALLERY_DEFAULT_PAGE_SIZE = 9;
const MARKETING_SITE_TEMPLATES_PAGE_SIZE = 8;
const MARKETING_SITE_TEMPLATES_COLUMNS = 4;
const SITE_TEMPLATE_USE_CASE_OPTIONS = [
	{
		value: "all",
		label: "All use cases"
	},
	{
		value: "starter",
		label: "Starter"
	},
	{
		value: "ai",
		label: "AI"
	},
	{
		value: "databases",
		label: "Databases"
	},
	{
		value: "messaging",
		label: "Messaging"
	},
	{
		value: "dev-tools",
		label: "Dev tools"
	},
	{
		value: "utilities",
		label: "Utilities"
	}
];
var SITE_TEMPLATE_SCREENSHOT_PATH = "/images/sites/templates/";
function normalizeSiteTemplateScreenshotUrl(url) {
	if (!url) return url;
	try {
		const { pathname } = new URL(url);
		return pathname.startsWith(SITE_TEMPLATE_SCREENSHOT_PATH) ? pathname : url;
	} catch {
		return url;
	}
}
function getSiteTemplateScreenshotUrl(template, isDark) {
	return normalizeSiteTemplateScreenshotUrl(isDark ? template.screenshotDark : template.screenshotLight);
}
function buildSiteTemplateFrameworkOptions(frameworks) {
	const options = [{
		value: "all",
		label: "All frameworks"
	}];
	if (!frameworks?.length) return options;
	for (const fw of frameworks) {
		const key = typeof fw === "string" ? fw : typeof fw === "object" && fw !== null ? String(fw.key ?? fw.name ?? fw.id ?? "") : "";
		const name = typeof fw === "string" ? fw : typeof fw === "object" && fw !== null ? String(fw.name ?? fw.key ?? fw.id ?? "") : "";
		if (key && name) options.push({
			value: key,
			label: name
		});
	}
	return options;
}
const SITES_DEFAULT_SORT_BY = "$createdAt";
const SITES_DEFAULT_SORT_ORDER = "desc";
async function fetchProjectSites(projectId, page = 0, limit = 10, search, filterQueries, sortBy = SITES_DEFAULT_SORT_BY, sortOrder = SITES_DEFAULT_SORT_ORDER) {
	if (!projectId) return {
		sites: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.sites.list({ queries });
	return {
		sites: response.sites || [],
		total: response.total || 0
	};
}
async function fetchProjectSite(projectId, siteId) {
	if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
	return await sdk.forProject(projectId).sites.get({ siteId });
}
async function fetchProjectSitesByIds(projectId, siteIds) {
	if (!projectId || siteIds.length === 0) return { sites: [] };
	const validIds = [...new Set(siteIds.filter((id) => typeof id === "string" && id.trim()))];
	if (validIds.length === 0) return { sites: [] };
	const idQuery = validIds.length === 1 ? Query.equal("$id", validIds[0]) : Query.or(validIds.map((id) => Query.equal("$id", id)));
	return { sites: (await sdk.forProject(projectId).sites.list({ queries: [idQuery, Query.limit(validIds.length)] })).sites ?? [] };
}
function buildSiteUpdateParams(site, updates) {
	return {
		siteId: site.$id,
		name: site.name,
		framework: site.framework,
		enabled: site.enabled,
		logging: site.logging,
		timeout: site.timeout,
		installCommand: site.installCommand,
		buildCommand: site.buildCommand,
		startCommand: site.startCommand,
		outputDirectory: site.outputDirectory,
		buildRuntime: site.buildRuntime,
		adapter: site.adapter,
		fallbackFile: site.fallbackFile,
		installationId: site.installationId,
		providerRepositoryId: site.providerRepositoryId,
		providerBranch: site.providerBranch,
		providerSilentMode: site.providerSilentMode,
		providerRootDirectory: site.providerRootDirectory,
		providerBranches: site.providerBranches || void 0,
		providerPaths: site.providerPaths || void 0,
		buildSpecification: site.buildSpecification,
		runtimeSpecification: site.runtimeSpecification,
		deploymentRetention: site.deploymentRetention,
		...updates
	};
}
async function fetchSiteDeployments(projectId, siteId, page = 0, limit = 10, filterQueries) {
	if (!projectId || !siteId) return {
		deployments: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.sites.listDeployments({
		siteId,
		queries
	});
	return {
		deployments: response.deployments || [],
		total: response.total || 0
	};
}
async function fetchSiteDeployment(projectId, siteId, deploymentId) {
	if (!projectId || !siteId || !deploymentId) throw new Error("Project ID, Site ID, and Deployment ID are required");
	return await sdk.forProject(projectId).sites.getDeployment({
		siteId,
		deploymentId
	});
}
async function fetchSiteLogs(projectId, siteId, page = 0, limit = 10, filterQueries) {
	if (!projectId || !siteId) return {
		logs: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.sites.listLogs({
		siteId,
		queries
	});
	return {
		logs: response.executions || response.logs || [],
		total: response.total || 0
	};
}
async function fetchSiteLog(projectId, siteId, logId) {
	if (!projectId || !siteId || !logId) throw new Error("Project ID, Site ID, and Log ID are required");
	return await sdk.forProject(projectId).sites.getLog({
		siteId,
		logId
	});
}
async function fetchSiteVariables(projectId, siteId) {
	if (!projectId || !siteId) return {
		variables: [],
		total: 0
	};
	const variables = [...(await sdk.forProject(projectId).sites.listVariables({ siteId })).variables || []].sort((a, b) => {
		const aTime = new Date(a.$createdAt || 0).getTime();
		return new Date(b.$createdAt || 0).getTime() - aTime;
	});
	return {
		variables,
		total: variables.length
	};
}
async function fetchSiteFrameworks(projectId) {
	if (!projectId) return {
		frameworks: [],
		total: 0
	};
	const response = projectId === "console" ? await sdk.forConsole.sites.listFrameworks() : await sdk.forProject(projectId).sites.listFrameworks();
	return {
		frameworks: response.frameworks || [],
		total: response.total || 0
	};
}
async function fetchSiteSpecifications(projectId, type = SpecificationType.Runtimes) {
	if (!projectId) return {
		specifications: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).sites.listSpecifications({ type });
	return {
		specifications: response.specifications || [],
		total: response.total || 0
	};
}
async function fetchSiteDomains(projectId, siteId, page = 0, limit = 10, search, filterQueries) {
	if (!projectId || !siteId) return {
		rules: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const fixedQueries = [
		Query.equal("type", ["deployment", "redirect"]),
		Query.equal("deploymentResourceType", "site"),
		Query.equal("deploymentResourceId", siteId),
		Query.equal("trigger", "manual"),
		...filterQueries ?? [],
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.proxy.listRules({
		queries: fixedQueries,
		search: search?.trim() || void 0
	});
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
async function fetchProxyRule(projectId, ruleId) {
	if (!projectId || !ruleId) throw new Error("Project ID and Rule ID are required");
	return await sdk.forProject(projectId).proxy.getRule({ ruleId });
}
async function fetchDeploymentProxyRules(projectId, siteId, deploymentId) {
	if (!projectId || !siteId || !deploymentId) return {
		rules: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.equal("type", ["deployment", "redirect"]),
		Query.equal("deploymentId", deploymentId),
		Query.equal("deploymentResourceType", "site"),
		Query.equal("deploymentResourceId", siteId),
		Query.orderDesc("$createdAt")
	];
	const response = await projectSdk.proxy.listRules({ queries });
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
function sitesQueryOptions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = SITES_DEFAULT_SORT_BY, sortOrder = SITES_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"sites",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchProjectSites(projectId, page, limit, search, filterQueries, sortBy, sortOrder),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function siteQueryOptions(projectId, siteId) {
	return queryOptions({
		queryKey: [
			"site",
			"project",
			projectId,
			siteId
		],
		queryFn: () => fetchProjectSite(projectId, siteId),
		enabled: !!projectId && !!siteId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId ? 300 * 1e3 : 0
	});
}
function siteDeploymentsQueryOptions(projectId, siteId, page = 0, limit = 10, filterQueries) {
	return queryOptions({
		queryKey: [
			"deployments",
			"site",
			projectId,
			siteId,
			page,
			limit,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchSiteDeployments(projectId, siteId, page, limit, filterQueries),
		enabled: !!projectId && !!siteId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function siteDeploymentQueryOptions(projectId, siteId, deploymentId) {
	return queryOptions({
		queryKey: [
			"deployment",
			"site",
			projectId,
			siteId,
			deploymentId
		],
		queryFn: () => fetchSiteDeployment(projectId, siteId, deploymentId),
		enabled: !!projectId && !!siteId && !!deploymentId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId && deploymentId ? 300 * 1e3 : 0
	});
}
function siteDomainsQueryOptions(projectId, siteId, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"proxy-rules",
			"site",
			projectId,
			siteId,
			page,
			limit,
			search,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchSiteDomains(projectId, siteId, page, limit, search, filterQueries),
		enabled: !!projectId && !!siteId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function deploymentProxyRulesQueryOptions(projectId, siteId, deploymentId) {
	return queryOptions({
		queryKey: [
			"proxy-rules",
			"deployment",
			projectId,
			siteId,
			deploymentId
		],
		queryFn: () => fetchDeploymentProxyRules(projectId, siteId, deploymentId),
		enabled: !!projectId && !!siteId && !!deploymentId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId && deploymentId ? 300 * 1e3 : 0
	});
}
function siteLogsQueryOptions(projectId, siteId, page = 0, limit = 10, filterQueries) {
	return queryOptions({
		queryKey: [
			"logs",
			"site",
			projectId,
			siteId,
			page,
			limit,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : []
		],
		queryFn: () => fetchSiteLogs(projectId, siteId, page, limit, filterQueries),
		enabled: !!projectId && !!siteId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function siteVariablesQueryOptions(projectId, siteId) {
	return queryOptions({
		queryKey: [
			"variables",
			"site",
			projectId,
			siteId
		],
		queryFn: () => fetchSiteVariables(projectId, siteId),
		enabled: !!projectId && !!siteId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && siteId ? 300 * 1e3 : 0
	});
}
function siteFrameworksQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"frameworks",
			"sites",
			projectId
		],
		queryFn: () => fetchSiteFrameworks(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function siteSpecificationsQueryOptions(projectId, type = SpecificationType.Runtimes) {
	return queryOptions({
		queryKey: [
			"specifications",
			"site",
			projectId,
			type
		],
		queryFn: () => fetchSiteSpecifications(projectId, type),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectSites(projectId, page = 0, limit = 10, search, filterQueries, sortBy = SITES_DEFAULT_SORT_BY, sortOrder = SITES_DEFAULT_SORT_ORDER) {
	const { data: sitesData, isLoading, isFetching, isFetched, error, refetch } = useQuery(sitesQueryOptions(projectId, page, limit, search, filterQueries, sortBy, sortOrder));
	const sites = useMemo(() => {
		if (!sitesData?.sites) return [];
		return sitesData.sites;
	}, [sitesData]);
	const totalPages = useMemo(() => {
		if (!sitesData?.total) return 0;
		return Math.ceil(sitesData.total / limit);
	}, [sitesData?.total, limit]);
	return {
		sites,
		total: sitesData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useProjectSite(projectId, siteId) {
	return useQuery(siteQueryOptions(projectId, siteId));
}
function useSiteDeployments(projectId, siteId, page = 0, limit = 10, filterQueries) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(siteDeploymentsQueryOptions(projectId, siteId, page, limit, filterQueries));
	return {
		deployments: data?.deployments || [],
		total: data?.total || 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useSiteDeployment(projectId, siteId, deploymentId) {
	return useQuery(siteDeploymentQueryOptions(projectId, siteId, deploymentId));
}
function useSiteLogs(projectId, siteId, page = 0, limit = 10, filterQueries) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(siteLogsQueryOptions(projectId, siteId, page, limit, filterQueries));
	return {
		logs: data?.logs || [],
		total: data?.total || 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useSiteVariables(projectId, siteId, page = 0, limit) {
	const { data, isLoading, error, refetch } = useQuery(siteVariablesQueryOptions(projectId, siteId));
	const all = data?.variables ?? [];
	const { variables, total } = useMemo(() => {
		const totalCount = all.length;
		if (limit === void 0) return {
			variables: all,
			total: totalCount
		};
		const start = page * limit;
		return {
			variables: all.slice(start, start + limit),
			total: totalCount
		};
	}, [
		all,
		page,
		limit
	]);
	return {
		variables,
		total,
		isLoading,
		error,
		refetch
	};
}
function useSiteFrameworks(projectId) {
	return useQuery(siteFrameworksQueryOptions(projectId));
}
function useSiteSpecifications(projectId, type = SpecificationType.Runtimes) {
	return useQuery(siteSpecificationsQueryOptions(projectId, type));
}
function useSiteDomains(projectId, siteId, page = 0, limit = 10, search, filterQueries) {
	const { data, isLoading, error, refetch } = useQuery(siteDomainsQueryOptions(projectId, siteId, page, limit, search, filterQueries));
	return {
		rules: data?.rules || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useDeploymentProxyRules(projectId, siteId, deploymentId) {
	const { data, isLoading, error, refetch } = useQuery(deploymentProxyRulesQueryOptions(projectId, siteId, deploymentId));
	return {
		rules: data?.rules || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
async function cancelSiteDeployment(projectId, siteId, deploymentId) {
	if (!projectId || !siteId || !deploymentId) throw new Error("Project ID, Site ID, and Deployment ID are required");
	return await sdk.forProject(projectId).sites.updateDeploymentStatus({
		siteId,
		deploymentId
	});
}
async function deleteSiteDeployment(projectId, siteId, deploymentId) {
	if (!projectId || !siteId || !deploymentId) throw new Error("Project ID, Site ID, and Deployment ID are required");
	return await sdk.forProject(projectId).sites.deleteDeployment({
		siteId,
		deploymentId
	});
}
function useDeleteSite(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (siteId) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			await sdk.forProject(projectId).sites.delete({ siteId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: Dependencies.SITES });
		}
	});
}
async function fetchSiteTemplates(projectId, frameworks, useCases, limit = 100, offset = 0) {
	if (!projectId) return {
		templates: [],
		total: 0
	};
	const listParams = {
		frameworks,
		useCases,
		limit,
		offset
	};
	const response = projectId === "console" ? await sdk.forConsole.sites.listTemplates(listParams) : await sdk.forProject(projectId).sites.listTemplates(listParams);
	return {
		templates: response.templates ? [...response.templates] : [],
		total: response.total || 0
	};
}
async function fetchSiteTemplate(projectId, templateId) {
	if (!projectId || !templateId) throw new Error("Project ID and Template ID are required");
	return await sdk.forProject(projectId).sites.getTemplate({ templateId });
}
function siteTemplatesQueryOptions(projectId, frameworks, useCases, limit = 100, offset = 0) {
	return queryOptions({
		queryKey: [
			"site-templates",
			"project",
			projectId,
			limit,
			offset,
			frameworks && frameworks.length > 0 ? [...frameworks].sort().join(",") : null,
			useCases && useCases.length > 0 ? [...useCases].sort().join(",") : null
		],
		queryFn: () => fetchSiteTemplates(projectId, frameworks, useCases, limit, offset),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function marketingSiteTemplatesQueryOptions(frameworks, useCases, limit = 8, offset = 0) {
	return siteTemplatesQueryOptions(MARKETING_SITE_TEMPLATES_PROJECT_ID, frameworks, useCases, limit, offset);
}
function siteTemplateQueryOptions(projectId, templateId) {
	return queryOptions({
		queryKey: [
			"site-template",
			"project",
			projectId,
			templateId
		],
		queryFn: () => fetchSiteTemplate(projectId, templateId),
		enabled: !!projectId && !!templateId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && templateId ? 300 * 1e3 : 0
	});
}
function useSiteTemplates(projectId, frameworks, useCases, limit = 100, offset = 0) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(siteTemplatesQueryOptions(projectId, frameworks, useCases, limit, offset));
	return {
		templates: data?.templates || [],
		total: data?.total || 0,
		data,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useSiteTemplate(projectId, templateId) {
	return useQuery(siteTemplateQueryOptions(projectId, templateId));
}
function useCreateSite(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			const siteId = params.siteId && params.siteId.trim() !== "" ? params.siteId.trim() : ID.unique();
			return await projectSdk.sites.create({
				...params,
				siteId
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.SITES });
		}
	});
}
function useCreateSiteVariable(projectId, siteId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			const validationError = validateVariables([{
				key: params.key.trim(),
				value: params.value
			}]);
			if (validationError) throw new Error(validationError);
			return await sdk.forProject(projectId).sites.createVariable({
				siteId,
				variableId: ID.unique(),
				key: params.key.trim(),
				value: params.value,
				secret: params.secret
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"site",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateSiteVariable(projectId, siteId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ variableId, key, value, secret }) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			if (!key.trim()) throw new Error("Variable key is required");
			const valueError = getVariableValueError(key, value);
			if (valueError) throw new Error(valueError);
			return await sdk.forProject(projectId).sites.updateVariable({
				siteId,
				variableId,
				key: key.trim(),
				value,
				secret
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"site",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteSiteVariable(projectId, siteId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (variableId) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			return await sdk.forProject(projectId).sites.deleteVariable({
				siteId,
				variableId
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"variables",
				"site",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		}
	});
}
function useCreateVcsDeployment(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).sites.createVcsDeployment({
				siteId: params.siteId,
				type: params.type,
				reference: params.reference,
				activate: params.activate
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.DEPLOYMENTS });
			queryClient.invalidateQueries({ queryKey: Dependencies.SITE });
		}
	});
}
function useCreateTemplateDeployment(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).sites.createTemplateDeployment({
				siteId: params.siteId,
				repository: params.repository,
				owner: params.owner,
				rootDirectory: params.rootDirectory,
				type: params.type,
				reference: params.reference,
				activate: params.activate
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.DEPLOYMENTS });
			queryClient.invalidateQueries({ queryKey: Dependencies.SITE });
		}
	});
}
function useCreateSiteDomain(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ domain, siteId }) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).proxy.createSiteRule({
				domain,
				siteId
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["proxy-rules"] });
		}
	});
}
function useCreateSiteDomainRule(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			const { domain, siteId, behaviour, branch, redirectUrl, statusCode } = params;
			const domainNorm = domain.trim().toLowerCase();
			if (behaviour === "redirect") {
				if (!redirectUrl?.trim() || !statusCode) throw new Error("Redirect URL and status code are required");
				const { ProxyResourceType, StatusCode } = await import("@appwrite.io/console");
				const codeMap = {
					"301": StatusCode.MovedPermanently301,
					"302": StatusCode.Found302,
					"307": StatusCode.TemporaryRedirect307,
					"308": StatusCode.PermanentRedirect308
				};
				return await projectSdk.proxy.createRedirectRule({
					domain: domainNorm,
					url: redirectUrl.trim(),
					statusCode: codeMap[statusCode] ?? StatusCode.Found302,
					resourceId: siteId,
					resourceType: ProxyResourceType.Site
				});
			}
			if (behaviour === "branch" && branch) return await projectSdk.proxy.createSiteRule({
				domain: domainNorm,
				siteId,
				branch
			});
			return await projectSdk.proxy.createSiteRule({
				domain: domainNorm,
				siteId
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["proxy-rules"] });
		}
	});
}
const DEFAULT_USAGE_LOG_RETENTION_DAYS = 30;
const DEFAULT_USAGE_LOG_RETENTION_HOURS = 720;
var UNLIMITED_USAGE_LOG_RETENTION_THRESHOLD = 36500;
function hasFiniteUsageLogRetention(plan) {
	const days = plan?.usageLogs;
	if (days == null || !Number.isFinite(days) || days <= 0) return true;
	return days < UNLIMITED_USAGE_LOG_RETENTION_THRESHOLD;
}
function getUsageLogRetentionDaysFromPlan(plan) {
	const days = plan?.usageLogs;
	if (days == null || !Number.isFinite(days) || days <= 0) return 30;
	if (days >= UNLIMITED_USAGE_LOG_RETENTION_THRESHOLD) return UNLIMITED_USAGE_LOG_RETENTION_THRESHOLD;
	return days;
}
function getUsageLogRetentionHoursFromPlan(plan) {
	return getUsageLogRetentionDaysFromPlan(plan) * 24;
}
function getUsageLogRetentionFloor(retentionHours = 720) {
	return /* @__PURE__ */ new Date(Date.now() - retentionHours * 60 * 60 * 1e3);
}
function isUsageDateRangeBeyondRetention(dateRange, retentionHours = 720, presetId) {
	if (retentionHours <= 0) return false;
	const { from } = resolveUsageChartFetchBounds(dateRange, presetId);
	return from.getTime() < getUsageLogRetentionFloor(retentionHours).getTime();
}
var SHORTER_USAGE_DATE_RANGE_PRESET_CANDIDATES = [
	"30d",
	"mtd",
	"wtd",
	"7d",
	"yesterday",
	"today",
	"24h",
	"6h",
	"1h"
];
function resolveShorterUsageDateRangePreset(retentionHours = 720) {
	for (const value of SHORTER_USAGE_DATE_RANGE_PRESET_CANDIDATES) {
		const preset = getUsageDateRangePresetByValue(value);
		if (!preset) continue;
		if (!isUsageDateRangeBeyondRetention(preset.getRange(), retentionHours, preset.value)) return preset;
	}
	return getUsageDateRangePresetByValue("24h");
}
const DEDICATED_DATABASE_USAGE_RESOURCE_TYPE = "dedicatedDatabases";
function buildUsageResourceFilterQueries(options) {
	const merged = [...options.queries ?? []];
	const resourceType = options.resourceType?.trim();
	if (resourceType) merged.push(Query.equal("resourceType", resourceType));
	const resourceId = options.resourceId?.trim();
	if (resourceId) merged.push(Query.equal("resourceId", resourceId));
	if (options.ordinal !== void 0 && options.ordinal !== null && options.ordinal !== "") merged.push(Query.equal("ordinal", String(options.ordinal)));
	return merged.length > 0 ? merged : void 0;
}
function parseDatabaseIdFromUsageResourceLabel(label) {
	const trimmed = label.trim();
	if (!trimmed) return "";
	const slashIndex = trimmed.indexOf("/");
	if (slashIndex > 0) return trimmed.slice(0, slashIndex).trim();
	return trimmed;
}
function resolveDatabaseBreakdownResource(label, databaseLookup) {
	if (!databaseLookup) return void 0;
	const direct = databaseLookup[label];
	if (direct) return direct;
	const parsedId = parseDatabaseIdFromUsageResourceLabel(label);
	if (parsedId && parsedId !== label) return databaseLookup[parsedId];
}
function normalizeDatabaseBreakdownResourceIds(resourceIds) {
	return [...new Set(resourceIds.map((id) => parseDatabaseIdFromUsageResourceLabel(id)).filter((id) => id.length > 0))].slice(0, 6);
}
async function fetchDatabaseBreakdownResources(projectId, resourceIds) {
	const ids = normalizeDatabaseBreakdownResourceIds(resourceIds);
	if (!projectId || ids.length === 0) return { resources: {} };
	const { databases } = await fetchProjectDatabasesByIds(projectId, ids);
	const resources = {};
	for (const database of databases) {
		if (!database?.$id) continue;
		resources[database.$id] = {
			id: database.$id,
			name: database.name,
			databaseType: database.type
		};
	}
	return { resources };
}
function getDatabaseBreakdownServiceLabel(databaseType) {
	const dbKind = databaseRouteKindFromApiType(databaseType);
	if (dbKind === "documentsdb") return "DocumentsDB";
	if (dbKind === "vectorsdb") return "VectorsDB";
	return "TablesDB";
}
function normalizeComputeBreakdownResourceIds(resourceIds) {
	return [...new Set(resourceIds.filter((id) => typeof id === "string" && id.trim()))].slice(0, 8);
}
async function fetchComputeBreakdownResources(projectId, resourceIds) {
	const ids = normalizeComputeBreakdownResourceIds(resourceIds);
	if (!projectId || ids.length === 0) return { resources: {} };
	const [functionsResult, sitesResult] = await Promise.all([fetchProjectFunctionsByIds(projectId, ids).catch(() => ({ functions: [] })), fetchProjectSitesByIds(projectId, ids).catch(() => ({ sites: [] }))]);
	const resources = {};
	for (const fn of functionsResult.functions) resources[fn.$id] = {
		id: fn.$id,
		name: fn.name,
		type: "function"
	};
	for (const site of sitesResult.sites) resources[site.$id] = {
		id: site.$id,
		name: site.name,
		type: "site"
	};
	return { resources };
}
function getComputeBreakdownResourceTypeLabel(type) {
	return type === "function" ? "Functions" : "Sites";
}
function resolveComputeBreakdownResource(resourceId, lookup) {
	if (!lookup) return void 0;
	const trimmed = resourceId.trim();
	if (!trimmed) return void 0;
	return lookup[trimmed];
}
function normalizeStorageBreakdownResourceIds(resourceIds) {
	return [...new Set(resourceIds.filter((id) => typeof id === "string" && id.trim()))].slice(0, 6);
}
async function fetchProjectBucketsByIds(projectId, bucketIds) {
	const ids = normalizeStorageBreakdownResourceIds(bucketIds);
	if (!projectId || ids.length === 0) return { buckets: [] };
	const idQuery = ids.length === 1 ? Query.equal("$id", ids[0]) : Query.or(ids.map((id) => Query.equal("$id", id)));
	return { buckets: ((await sdk.forProject(projectId).storage.listBuckets({ queries: [idQuery, Query.limit(ids.length)] })).buckets ?? []).map((bucket) => ({
		id: bucket.$id,
		name: bucket.name
	})) };
}
async function fetchStorageBreakdownResources(projectId, resourceIds) {
	const ids = normalizeStorageBreakdownResourceIds(resourceIds);
	if (!projectId || ids.length === 0) return { resources: {} };
	const { buckets } = await fetchProjectBucketsByIds(projectId, ids).catch(() => ({ buckets: [] }));
	const resources = {};
	for (const bucket of buckets) resources[bucket.id] = bucket;
	return { resources };
}
function resolveStorageBreakdownResource(resourceId, lookup) {
	return lookup?.[resourceId];
}
function getStorageBreakdownResourceTypeLabel() {
	return "Storage";
}
function parseTableUsageResourceLabel(label) {
	const trimmed = label.trim();
	if (!trimmed) return { tableId: "" };
	for (const separator of ["/", ":"]) {
		const index = trimmed.indexOf(separator);
		if (index > 0) return {
			databaseId: trimmed.slice(0, index).trim(),
			tableId: trimmed.slice(index + 1).trim()
		};
	}
	return { tableId: trimmed };
}
function normalizeTableBreakdownResourceLabels(labels) {
	return [...new Set(labels.filter((label) => typeof label === "string" && label.trim()))].slice(0, 100);
}
async function resolveDbKindForDatabase(projectId, databaseId) {
	const { databases } = await fetchProjectConsoleDatabases(projectId, 0, 1, void 0, [Query.equal("$id", [databaseId])]).catch(() => ({
		databases: [],
		total: 0
	}));
	const type = databases[0]?.type;
	return type ? databaseRouteKindFromApiType(type) : null;
}
async function listTablesByIdsInDatabase(projectId, databaseId, dbKind, tableIds) {
	if (tableIds.length === 0) return [];
	const projectSdk = sdk.forProject(projectId);
	const buildIdQuery = (ids) => ids.length === 1 ? Query.equal("$id", ids[0]) : Query.or(ids.map((id) => Query.equal("$id", id)));
	const buildNameQuery = (names) => names.length === 1 ? Query.equal("name", names[0]) : Query.or(names.map((name) => Query.equal("name", name)));
	const kind = resolveProjectDatabaseType(dbKind);
	const listMatches = async (query) => {
		if (kind === DatabaseType.Documentsdb) return ((await projectSdk.documentsDB.listCollections({
			databaseId,
			queries: [...query, Query.limit(tableIds.length)]
		})).collections ?? []).map((collection) => ({
			$id: collection.$id,
			name: collection.name
		}));
		if (kind === DatabaseType.Vectorsdb) return ((await projectSdk.vectorsDB.listCollections({
			databaseId,
			queries: [...query, Query.limit(tableIds.length)]
		})).collections ?? []).map((collection) => ({
			$id: collection.$id,
			name: collection.name
		}));
		return ((await projectSdk.tablesDB.listTables({
			databaseId,
			queries: [...query, Query.limit(tableIds.length)]
		})).tables ?? []).map((table) => ({
			$id: table.$id,
			name: table.name
		}));
	};
	const byId = await listMatches([buildIdQuery(tableIds)]).catch(() => []);
	if (byId.length >= tableIds.length) return byId;
	const matchedIds = new Set(byId.map((table) => table.$id));
	const unmatchedLabels = tableIds.filter((label) => {
		return !byId.some((table) => table.$id === label || table.name === label);
	});
	if (unmatchedLabels.length === 0) return byId;
	const byName = await listMatches([buildNameQuery(unmatchedLabels)]).catch(() => []);
	const merged = [...byId];
	for (const table of byName) {
		if (matchedIds.has(table.$id)) continue;
		matchedIds.add(table.$id);
		merged.push(table);
	}
	return merged;
}
function storeTableBreakdownResource(resources, label, resource) {
	resources[label] = resource;
	resources[resource.id] = resource;
}
async function fetchTableBreakdownResources(projectId, labels) {
	const normalizedLabels = normalizeTableBreakdownResourceLabels(labels);
	if (!projectId || normalizedLabels.length === 0) return { resources: {} };
	const resources = {};
	const plainTableLabels = [];
	await Promise.all(normalizedLabels.map(async (label) => {
		const { databaseId, tableId } = parseTableUsageResourceLabel(label);
		if (!tableId) return;
		if (databaseId) {
			const resolvedDbKind = await resolveDbKindForDatabase(projectId, databaseId).catch(() => null);
			if (!resolvedDbKind) return;
			const table = await fetchProjectTable(projectId, databaseId, resolvedDbKind, tableId).catch(() => null);
			if (!table) return;
			const databaseType = resolveProjectDatabaseType(resolvedDbKind);
			storeTableBreakdownResource(resources, label, {
				id: table.$id,
				name: table.name,
				databaseId,
				databaseType
			});
			return;
		}
		plainTableLabels.push({
			label,
			tableId
		});
	}));
	if (plainTableLabels.length === 0) return { resources };
	const unresolvedTableIds = new Set(plainTableLabels.map(({ tableId }) => tableId).filter((tableId) => !resources[tableId]));
	if (unresolvedTableIds.size === 0) return { resources };
	const { databases } = await fetchProjectDatabases(projectId, 0, 500).catch(() => ({
		databases: [],
		total: 0
	}));
	for (const database of databases) {
		if (unresolvedTableIds.size === 0) break;
		if (!database?.$id) continue;
		const databaseType = database.type ?? DatabaseType.Tablesdb;
		const dbKind = databaseRouteKindFromApiType(databaseType);
		const idsToQuery = [...unresolvedTableIds];
		const tables = await listTablesByIdsInDatabase(projectId, database.$id, dbKind, idsToQuery).catch(() => []);
		for (const table of tables) {
			const resource = {
				id: table.$id,
				name: table.name,
				databaseId: database.$id,
				databaseType
			};
			for (const { label, tableId } of plainTableLabels) if (tableId === table.$id || tableId === table.name) {
				storeTableBreakdownResource(resources, label, resource);
				unresolvedTableIds.delete(tableId);
			}
		}
	}
	return { resources };
}
function getTableBreakdownResourceTypeLabel(databaseType) {
	return databaseRouteKindFromApiType(databaseType) === "tablesdb" ? "Tables" : "Collections";
}
function resolveTableBreakdownResource(label, lookup) {
	if (!lookup) return void 0;
	const trimmed = label.trim();
	if (!trimmed) return void 0;
	const direct = lookup[trimmed];
	if (direct) return direct;
	const { tableId } = parseTableUsageResourceLabel(trimmed);
	if (tableId && tableId !== trimmed) return lookup[tableId];
}
function parseTableUsageResourceType(resourceType) {
	return /^database\/([^/]+)\/table$/.exec(resourceType.trim())?.[1];
}
function formatUsageResourceTypeLabel(value) {
	const trimmed = value.trim();
	if (!trimmed) return "Unknown";
	if (trimmed === "bucket") return "Bucket";
	if (trimmed === "function") return "Function";
	if (trimmed === "site") return "Site";
	if (trimmed === "database" || trimmed === "dedicatedDatabases") return "Database";
	if (trimmed === "project") return "Project";
	const tableMatch = /^database\/([^/]+)\/table$/.exec(trimmed);
	if (tableMatch) return `Table (${tableMatch[1]})`;
	return trimmed;
}
function isUsageProjectResourceType(resourceType) {
	return resourceType?.trim().toLowerCase() === "project";
}
function resolveUsageResourceBreakdownItem(item, lookups) {
	const resourceId = (item.resourceId ?? item.label).trim();
	const resourceType = item.resourceType?.trim() ?? "";
	if (isUsageProjectResourceType(resourceType)) return {
		typeLabel: formatUsageResourceTypeLabel("project"),
		name: ""
	};
	if (resourceType === "function" || resourceType === "site") {
		const computeResource = resolveComputeBreakdownResource(resourceId, lookups.computeLookup);
		if (computeResource) return {
			typeLabel: getComputeBreakdownResourceTypeLabel(computeResource.type),
			name: computeResource.name,
			computeResource
		};
	}
	if (resourceType === "bucket") {
		const storageResource = resolveStorageBreakdownResource(resourceId, lookups.storageLookup);
		if (storageResource) return {
			typeLabel: getStorageBreakdownResourceTypeLabel(),
			name: storageResource.name,
			storageResource
		};
	}
	if (resourceType === "database" || resourceType === "dedicatedDatabases") {
		const databaseResource = resolveDatabaseBreakdownResource(resourceId, lookups.databaseLookup);
		if (databaseResource) return {
			typeLabel: getDatabaseBreakdownServiceLabel(databaseResource.databaseType),
			name: databaseResource.name,
			databaseResource
		};
	}
	const tableDatabaseId = parseTableUsageResourceType(resourceType);
	if (tableDatabaseId) {
		const tableResource = resolveTableBreakdownResource(`${tableDatabaseId}/${resourceId}`, lookups.tableLookup) ?? resolveTableBreakdownResource(resourceId, lookups.tableLookup);
		if (tableResource) return {
			typeLabel: getTableBreakdownResourceTypeLabel(tableResource.databaseType),
			name: tableResource.name,
			tableResource
		};
	}
	if (!resourceType) {
		const computeResource = resolveComputeBreakdownResource(resourceId, lookups.computeLookup);
		if (computeResource) return {
			typeLabel: getComputeBreakdownResourceTypeLabel(computeResource.type),
			name: computeResource.name,
			computeResource
		};
		const storageResource = resolveStorageBreakdownResource(resourceId, lookups.storageLookup);
		if (storageResource) return {
			typeLabel: getStorageBreakdownResourceTypeLabel(),
			name: storageResource.name,
			storageResource
		};
		const tableResource = resolveTableBreakdownResource(resourceId, lookups.tableLookup);
		if (tableResource) return {
			typeLabel: getTableBreakdownResourceTypeLabel(tableResource.databaseType),
			name: tableResource.name,
			tableResource
		};
		const databaseResource = resolveDatabaseBreakdownResource(resourceId, lookups.databaseLookup);
		if (databaseResource) return {
			typeLabel: getDatabaseBreakdownServiceLabel(databaseResource.databaseType),
			name: databaseResource.name,
			databaseResource
		};
	}
	return {
		typeLabel: formatUsageResourceTypeLabel(resourceType || "Unknown"),
		name: resourceId
	};
}
function getUsageResourceFilterEntries(resourceIdLabel, resources, resourceType) {
	const normalizedType = resourceType?.trim() ?? "";
	if (isUsageProjectResourceType(normalizedType)) return [{
		dimension: "resourceType",
		value: "project"
	}];
	const resourceId = resourceIdLabel.trim();
	if (!resourceId) return [];
	if (normalizedType) return [{
		dimension: "resourceId",
		value: resourceId
	}, {
		dimension: "resourceType",
		value: normalizedType
	}];
	if (resources.computeResource) return [{
		dimension: "resourceId",
		value: resourceId
	}, {
		dimension: "resourceType",
		value: resources.computeResource.type
	}];
	if (resources.storageResource) return [{
		dimension: "resourceId",
		value: resourceId
	}, {
		dimension: "resourceType",
		value: "bucket"
	}];
	if (resources.tableResource) return [{
		dimension: "resourceId",
		value: resourceId
	}, {
		dimension: "resourceType",
		value: `database/${resources.tableResource.databaseId}/table`
	}];
	if (resources.databaseResource) return [{
		dimension: "resourceId",
		value: resourceId
	}, {
		dimension: "resourceType",
		value: "database"
	}];
	return [{
		dimension: "resourceId",
		value: resourceId
	}];
}
const USAGE_RESOURCE_BREAKDOWN_DIMENSIONS = ["resourceId", "resourceType"];
const USAGE_SDK_BREAKDOWN_DIMENSIONS = ["sdk", "sdkVersion"];
function getUsageDataPointBreakdownLabel(point, dimension) {
	switch (dimension) {
		case "path": return point.path?.trim() || "/";
		case "method": return point.method?.trim() || "Unknown";
		case "status": return point.status?.trim() || "Unknown";
		case "service": return point.service?.trim() || "Unknown";
		case "country": return point.country?.trim() || "Unknown";
		case "city": return point.city?.trim() || "Unknown";
		case "hostname": return point.hostname?.trim() || "Unknown";
		case "ip": return point.ip?.trim() || "Unknown";
		case "osName": return point.osName?.trim() || "Unknown";
		case "clientType": return point.clientType?.trim() || "Unknown";
		case "clientName": return point.clientName?.trim() || "Unknown";
		case "deviceName": return point.deviceName?.trim() || "Unknown";
		case "teamId": return point.teamId?.trim() || "Unknown";
		case "resourceId": return point.resourceId?.trim() || "Unknown";
		case "resourceType": return point.resourceType?.trim() || "Unknown";
		case "resource": return point.resourceId?.trim() || "Unknown";
		case "sdk": return formatSdkBreakdownLabel(point.sdk?.trim() || "Unknown", point.sdkVersion?.trim() || "");
		default: return "Unknown";
	}
}
function formatSdkBreakdownLabel(sdk$1, sdkVersion) {
	const trimmedSdk = sdk$1.trim() || "Unknown";
	const trimmedVersion = sdkVersion.trim();
	if (!trimmedVersion || trimmedVersion === "Unknown") return trimmedSdk;
	return `${trimmedSdk}@${trimmedVersion}`;
}
function getUsageBreakdownItemMergeKey(item) {
	if (isUsageProjectResourceType(item.resourceType)) return "project";
	if (item.resourceId && item.resourceType) return `${item.resourceType}\0${item.resourceId}`;
	if (item.sdk !== void 0) return `sdk\0${item.sdk}\0${item.sdkVersion ?? ""}`;
	return item.label;
}
function mapBreakdownGroupsForResourceDimensions(groups, limit = 6) {
	return mergeUsageBreakdownItems([groups.map((group, index) => {
		const resourceType = group.resourceType?.trim() || "Unknown";
		if (isUsageProjectResourceType(resourceType)) return {
			id: `resource-project-${index}`,
			label: "project",
			count: group.value,
			resourceType: "project"
		};
		const resourceId = group.resourceId?.trim() || "Unknown";
		return {
			id: `resource-${resourceType}-${resourceId}-${index}`,
			label: resourceId,
			count: group.value,
			resourceId,
			resourceType
		};
	})], limit);
}
function mapBreakdownGroupsForSdkDimensions(groups, limit = 6) {
	return mergeUsageBreakdownItems([groups.map((group, index) => {
		const sdk$1 = group.sdk?.trim() || "Unknown";
		const sdkVersion = group.sdkVersion?.trim() || "";
		const label = formatSdkBreakdownLabel(sdk$1, sdkVersion);
		return {
			id: `sdk-${sdk$1}-${sdkVersion || "unknown"}-${index}`,
			label,
			count: group.value,
			sdk: sdk$1,
			sdkVersion: sdkVersion || void 0
		};
	})], limit);
}
function mapBreakdownGroupsForDimension(groups, dimension, limit = 6) {
	if (dimension === "resource") return mapBreakdownGroupsForResourceDimensions(groups, limit);
	if (dimension === "sdk") return mapBreakdownGroupsForSdkDimensions(groups, limit);
	return groups.map((group, index) => {
		const label = getUsageDataPointBreakdownLabel(group, dimension);
		return {
			id: `${dimension}-${label}-${index}`,
			label,
			count: group.value
		};
	}).sort((a, b) => b.count - a.count).slice(0, limit);
}
function mergeUsageBreakdownItems(lists, limit = 6) {
	const grouped = /* @__PURE__ */ new Map();
	for (const list of lists) for (const item of list) {
		const key = getUsageBreakdownItemMergeKey(item);
		const existing = grouped.get(key);
		if (existing) {
			existing.count += item.count;
			continue;
		}
		grouped.set(key, { ...item });
	}
	return Array.from(grouped.values()).sort((a, b) => b.count - a.count).slice(0, limit);
}
async function fetchProjectUsageEventBreakdown(projectId, metric, dateRange, dimension, breakdownLimit = 6, queries, resourceId, resourceType) {
	if (!projectId) return [];
	const { from, to } = resolveOverviewUsagePeriod(dateRange);
	return mapBreakdownGroupsForDimension(await listUsageEventGroupsForMetric(projectId, metric, {
		dimensions: dimension === "resource" ? [...USAGE_RESOURCE_BREAKDOWN_DIMENSIONS] : dimension === "sdk" ? [...USAGE_SDK_BREAKDOWN_DIMENSIONS] : [dimension],
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		queries,
		resourceId,
		resourceType,
		limit: breakdownLimit
	}), dimension, breakdownLimit);
}
function resolveFirstHalfComparisonPeriod(from, to, calendarRange) {
	if (calendarRange) {
		const rangeDays = Math.max(1, differenceInCalendarDays(to, from) + 1);
		return {
			previousFrom: from,
			previousTo: endOfDay(addDays(from, Math.max(1, Math.floor(rangeDays / 2)) - 1))
		};
	}
	const midMs = from.getTime() + (to.getTime() - from.getTime()) / 2;
	return {
		previousFrom: from,
		previousTo: new Date(midMs)
	};
}
function resolveOverviewUsagePeriod(dateRange, interval = "1h", logRetentionHours = 720) {
	const { from, to } = resolveUsageDateBounds(dateRange);
	const calendarRange = isFullCalendarDayRange(from, to);
	let previousFrom;
	let previousTo;
	if (calendarRange) {
		const rangeDays = Math.max(1, differenceInCalendarDays(to, from) + 1);
		previousTo = endOfDay(subDays(from, 1));
		previousFrom = startOfDay(subDays(previousTo, rangeDays - 1));
	} else {
		const durationMs = to.getTime() - from.getTime();
		previousTo = new Date(from.getTime());
		previousFrom = new Date(from.getTime() - durationMs);
	}
	let comparisonMode = "prior_window";
	if (logRetentionHours > 0) {
		const retentionFloor = getUsageLogRetentionFloor(logRetentionHours);
		if (previousFrom.getTime() < retentionFloor.getTime()) {
			const firstHalf = resolveFirstHalfComparisonPeriod(from, to, calendarRange);
			previousFrom = firstHalf.previousFrom;
			previousTo = firstHalf.previousTo;
			comparisonMode = "first_half";
		}
	}
	return {
		from,
		to,
		previousFrom,
		previousTo,
		interval,
		comparisonMode
	};
}
function getUsageChartFirstHalfPoints(chartPoints) {
	const midIndex = Math.ceil(chartPoints.length / 2);
	return chartPoints.slice(0, midIndex);
}
function sumUsageChartPointsForComparison(chartPoints, comparisonMode) {
	if (comparisonMode === "prior_window") return sumUsageChartPoints(chartPoints);
	const midIndex = Math.ceil(chartPoints.length / 2);
	return sumUsageChartPoints(chartPoints.slice(midIndex));
}
function get15MinuteIntervalStart(date) {
	const start = startOfMinute(date);
	start.setMinutes(start.getMinutes() - start.getMinutes() % 15, 0, 0);
	return start;
}
function getIntervalStart(date, interval) {
	if (interval === "15m") return get15MinuteIntervalStart(date);
	if (interval === "1h") return startOfHour(date);
	return startOfDay(date);
}
function advanceIntervalCursor(date, interval) {
	if (interval === "15m") return addMinutes(date, 15);
	if (interval === "1h") return addHours(date, 1);
	return addDays(date, 1);
}
function mergeValuesByTime(groups) {
	const merged = /* @__PURE__ */ new Map();
	for (const group of groups) merged.set(group.time, (merged.get(group.time) ?? 0) + group.value);
	return merged;
}
function normalizeBucketTime(date, interval) {
	return getIntervalStart(date, interval);
}
function formatChartPointLabel(day, interval, rangeFrom, rangeTo) {
	if (interval === "15m" || interval === "1h") return !isSameDay(rangeFrom, rangeTo) ? formatLocalizedDate(day, "d MMM HH:mm") : format(day, "HH:mm");
	return formatLocalizedDate(day, "d MMM");
}
function buildBucketLookup(merged, interval) {
	const lookup = /* @__PURE__ */ new Map();
	for (const [time, value] of merged.entries()) {
		const key = normalizeBucketTime(parseISO(time), interval).getTime();
		lookup.set(key, (lookup.get(key) ?? 0) + value);
	}
	return lookup;
}
function sumUsageChartPoints(points) {
	return points.reduce((sum, point) => sum + point.total, 0);
}
function mergeChartPointsSeries(series) {
	if (series.length === 0) return [];
	const [first] = series;
	if (!first) return [];
	return first.map((point, index) => ({
		...point,
		total: series.reduce((sum, items) => sum + (items[index]?.total ?? 0), 0)
	}));
}
function mergeTopEndpoints(lists, limit = 6) {
	const grouped = /* @__PURE__ */ new Map();
	for (const list of lists) for (const item of list) {
		const existing = grouped.get(item.id);
		if (existing) {
			existing.count += item.count;
			continue;
		}
		grouped.set(item.id, { ...item });
	}
	return Array.from(grouped.values()).sort((a, b) => b.count - a.count).slice(0, limit);
}
function mergeUsageMetricSeries(results, comparisonMode = "prior_window") {
	if (results.length === 0) return {
		changePercent: 0,
		chartPoints: [],
		topEndpoints: []
	};
	const chartPoints = mergeChartPointsSeries(results.map((result) => result.chartPoints));
	const previousChartPoints = mergeChartPointsSeries(results.map((result) => result.previousChartPoints));
	return {
		chartPoints,
		topEndpoints: mergeTopEndpoints(results.map((result) => result.topEndpoints)),
		changePercent: computeChangePercent(sumUsageChartPointsForComparison(chartPoints, comparisonMode), sumUsageChartPoints(previousChartPoints))
	};
}
var TOP_ENDPOINTS_DIMENSIONS = ["path"];
function mapBreakdownGroupsToEndpoints(groups, dimensions, limit = 6) {
	let items;
	if (dimensions.length === 2 && dimensions.includes("resourceId") && dimensions.includes("resourceType")) items = groups.map((group, index) => {
		const resourceType = group.resourceType?.trim() || "";
		if (isUsageProjectResourceType(resourceType)) return {
			id: `project-${index}`,
			method: "",
			statusCode: 0,
			path: "project",
			count: group.value,
			resourceType: "project"
		};
		const resourceId = group.resourceId?.trim() || "";
		return {
			id: resourceId || `resource-${index}`,
			method: "",
			statusCode: 0,
			path: resourceId,
			count: group.value,
			resourceType
		};
	});
	else if (dimensions.length === 1 && dimensions[0] === "resourceId") items = groups.map((group, index) => {
		const resourceId = group.resourceId?.trim() || "";
		return {
			id: resourceId || `resource-${index}`,
			method: "",
			statusCode: 0,
			path: resourceId,
			count: group.value
		};
	});
	else if (dimensions.length === 1 && dimensions[0] === "resourceType") items = groups.map((group, index) => {
		const resource = group.resourceType?.trim() || "";
		return {
			id: resource || `resource-type-${index}`,
			method: "",
			statusCode: 0,
			path: resource,
			count: group.value
		};
	});
	else items = groups.map((group, index) => {
		const path = group.path || "/";
		return {
			id: path || `path-${index}`,
			method: "",
			statusCode: 0,
			path,
			count: group.value
		};
	});
	return items.sort((a, b) => b.count - a.count).slice(0, limit);
}
async function fetchUsageMetricsChartSeriesByMetric(projectId, metrics, dateRange, interval = "1h", queries, logRetentionHours = 720, resourceId, resourceType) {
	if (metrics.length === 0) return /* @__PURE__ */ new Map();
	const { from, to, previousFrom, previousTo, interval: resolvedInterval, comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, logRetentionHours);
	if (isScreenshotModeActive()) {
		const result$1 = /* @__PURE__ */ new Map();
		for (const metric of metrics) {
			const chartPoints = buildScreenshotModeChartPoints(from, to, resolvedInterval, metric);
			const previousChartPoints = comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : buildScreenshotModeChartPoints(previousFrom, previousTo, resolvedInterval, metric, { quieter: true });
			result$1.set(metric, {
				chartPoints,
				previousChartPoints
			});
		}
		return result$1;
	}
	const currentByMetric = await listUsageEventGroupsByMetric(projectId, {
		metrics,
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		queries,
		resourceId,
		resourceType
	});
	const previousByMetric = comparisonMode === "prior_window" ? await listUsageEventGroupsByMetric(projectId, {
		metrics,
		interval: resolvedInterval,
		startAt: previousFrom.toISOString(),
		endAt: previousTo.toISOString(),
		queries,
		resourceId,
		resourceType
	}) : null;
	const result = /* @__PURE__ */ new Map();
	for (const metric of metrics) {
		const chartPoints = fillChartPointsGaps(mergeValuesByTime(currentByMetric.get(metric) ?? []), from, to, resolvedInterval);
		const previousChartPoints = comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : fillChartPointsGaps(mergeValuesByTime(previousByMetric?.get(metric) ?? []), previousFrom, previousTo, resolvedInterval);
		result.set(metric, {
			chartPoints,
			previousChartPoints
		});
	}
	return result;
}
async function fetchUsageMetricChartSeries(projectId, metric, dateRange, interval = "1h", queries, logRetentionHours = 720, resourceId, resourceType) {
	return (await fetchUsageMetricsChartSeriesByMetric(projectId, [metric], dateRange, interval, queries, logRetentionHours, resourceId, resourceType)).get(metric) ?? {
		chartPoints: [],
		previousChartPoints: []
	};
}
async function fetchUsageMetricsBreakdownByMetric(projectId, metrics, dateRange, dimensions, breakdownLimit = 6, queries, resourceId, resourceType) {
	if (metrics.length === 0) return /* @__PURE__ */ new Map();
	if (metrics.length > 1) {
		const entries = await Promise.all(metrics.map(async (metric) => {
			return [metric, (await fetchUsageMetricsBreakdownByMetric(projectId, [metric], dateRange, dimensions, breakdownLimit, queries, resourceId, resourceType)).get(metric) ?? []];
		}));
		return new Map(entries);
	}
	const { from, to } = resolveOverviewUsagePeriod(dateRange);
	const groupsByMetric = await listUsageEventGroupsByMetric(projectId, {
		metrics,
		dimensions: [...dimensions],
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		queries,
		resourceId,
		resourceType,
		limit: breakdownLimit
	});
	const result = /* @__PURE__ */ new Map();
	for (const metric of metrics) result.set(metric, mapBreakdownGroupsToEndpoints(groupsByMetric.get(metric) ?? [], dimensions, breakdownLimit));
	return result;
}
async function fetchUsageMetricBreakdown(projectId, metric, dateRange, dimensions, breakdownLimit = 6, queries, resourceId, resourceType) {
	return (await fetchUsageMetricsBreakdownByMetric(projectId, [metric], dateRange, dimensions, breakdownLimit, queries, resourceId, resourceType)).get(metric) ?? [];
}
async function fetchUsageMetricSeries(projectId, metric, dateRange, interval = "1h", dimensions = TOP_ENDPOINTS_DIMENSIONS, breakdownLimit = 6, options) {
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const resourceId = options?.resourceId;
	const resourceType = options?.resourceType;
	const logRetentionHours = options?.logRetentionHours ?? 720;
	const [chartSeries, topEndpoints] = await Promise.all([fetchUsageMetricChartSeries(projectId, metric, dateRange, interval, queries, logRetentionHours, resourceId, resourceType), dimensions.length > 0 && includeBreakdown ? fetchUsageMetricBreakdown(projectId, metric, dateRange, dimensions, breakdownLimit, queries, resourceId, resourceType) : Promise.resolve([])]);
	return {
		...chartSeries,
		topEndpoints
	};
}
async function fetchProjectUsageMetricsOverview(projectId, dateRange, metrics, interval = "1h", dimensions = TOP_ENDPOINTS_DIMENSIONS, breakdownLimit = 6, options) {
	if (!projectId) return {
		changePercent: 0,
		chartPoints: [],
		topEndpoints: []
	};
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const resourceId = options?.resourceId;
	const resourceType = options?.resourceType;
	const logRetentionHours = options?.logRetentionHours ?? 720;
	const { comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, logRetentionHours);
	const [chartSeriesByMetric, breakdownByMetric] = await Promise.all([fetchUsageMetricsChartSeriesByMetric(projectId, metrics, dateRange, interval, queries, logRetentionHours, resourceId, resourceType), includeBreakdown && dimensions.length > 0 ? fetchUsageMetricsBreakdownByMetric(projectId, metrics, dateRange, dimensions, breakdownLimit, queries, resourceId, resourceType) : Promise.resolve(/* @__PURE__ */ new Map())]);
	return mergeUsageMetricSeries(metrics.map((metric) => ({
		chartPoints: chartSeriesByMetric.get(metric)?.chartPoints ?? [],
		previousChartPoints: chartSeriesByMetric.get(metric)?.previousChartPoints ?? [],
		topEndpoints: breakdownByMetric.get(metric) ?? []
	})), comparisonMode);
}
async function fetchProjectUsageMetricSeriesOverview(projectId, metric, dateRange, interval = "1h", dimensions = TOP_ENDPOINTS_DIMENSIONS, breakdownLimit = 6, options) {
	if (!projectId) return {
		chartPoints: [],
		previousChartPoints: [],
		topEndpoints: []
	};
	return fetchUsageMetricSeries(projectId, metric, dateRange, interval, dimensions, breakdownLimit, options);
}
function fillChartPointsGaps(merged, from, to, interval) {
	const lookup = buildBucketLookup(merged, interval);
	const points = [];
	let cursor = getIntervalStart(from, interval);
	const endCursor = getIntervalStart(to, interval);
	while (cursor.getTime() <= endCursor.getTime()) {
		const key = cursor.getTime();
		points.push({
			date: formatChartPointLabel(cursor, interval, from, to),
			day: cursor,
			total: lookup.get(key) ?? 0
		});
		cursor = advanceIntervalCursor(cursor, interval);
	}
	return points;
}
function fillGaugeChartPointsGaps(merged, from, to, interval) {
	const lookup = buildBucketLookup(merged, interval);
	const skeleton = [];
	let cursor = getIntervalStart(from, interval);
	const endCursor = getIntervalStart(to, interval);
	while (cursor.getTime() <= endCursor.getTime()) {
		const key = cursor.getTime();
		skeleton.push({
			date: formatChartPointLabel(cursor, interval, from, to),
			day: cursor,
			sample: lookup.get(key)
		});
		cursor = advanceIntervalCursor(cursor, interval);
	}
	let firstKnown;
	for (const row of skeleton) if (row.sample !== void 0) {
		firstKnown = row.sample;
		break;
	}
	let lastKnown = firstKnown;
	return skeleton.map((row) => {
		if (row.sample !== void 0) lastKnown = row.sample;
		return {
			date: row.date,
			day: row.day,
			total: lastKnown ?? 0
		};
	});
}
function hashScreenshotMetric(metric) {
	let hash = 0;
	for (let i = 0; i < metric.length; i++) hash = hash * 31 + metric.charCodeAt(i) | 0;
	return Math.abs(hash);
}
function getScreenshotMetricScale(metric) {
	const m = metric.toLowerCase();
	if (m.includes("network") || m.includes("bandwidth") || m.includes("inbound") || m.includes("outbound")) return {
		base: 92e7,
		amplitude: 38e7
	};
	if (m.includes("storage") || m.includes("imagestransformed")) return {
		base: 48e9,
		amplitude: 6e9,
		gauge: true
	};
	if (m.includes("gbhour") || m.includes("gb-hour") || m.includes("compute") || m.includes("execution")) return {
		base: 14500,
		amplitude: 4800
	};
	if (m.includes("request") || m.includes("http")) return {
		base: 128e3,
		amplitude: 42e3
	};
	if (m.includes("auth") || m.includes("mau") || m.includes("signup")) return {
		base: 18400,
		amplitude: 2200,
		gauge: true
	};
	if (m.includes("realtime") || m.includes("message") || m.includes("connection")) return {
		base: 64e3,
		amplitude: 22e3
	};
	if (m.includes("database") || m.includes("read") || m.includes("write")) return {
		base: 24e4,
		amplitude: 8e4
	};
	if (m.includes("webhook") || m.includes("messaging") || m.includes("sms")) return {
		base: 32e3,
		amplitude: 12e3
	};
	return {
		base: 72e3,
		amplitude: 24e3
	};
}
function buildScreenshotModeChartPoints(from, to, interval, metric, options) {
	const skeleton = options?.gauge ? fillGaugeChartPointsGaps(/* @__PURE__ */ new Map(), from, to, interval) : fillChartPointsGaps(/* @__PURE__ */ new Map(), from, to, interval);
	if (skeleton.length === 0) return skeleton;
	const scale = getScreenshotMetricScale(metric);
	const phase = hashScreenshotMetric(metric) % 1e3 / 100;
	const quieter = options?.quieter ? .72 : 1;
	const base = scale.base * quieter;
	const amplitude = scale.amplitude * quieter;
	return skeleton.map((point, index) => {
		const t = index / Math.max(skeleton.length - 1, 1);
		const wave = Math.sin(phase + t * Math.PI * 2.15) * amplitude;
		const secondary = Math.sin(phase * 1.6 + index * .37) * amplitude * .22;
		const trend = options?.gauge || scale.gauge ? base * .08 * t : 0;
		const peak = !scale.gauge && t > .55 && t < .82 ? amplitude * .35 : 0;
		return {
			...point,
			total: Math.max(0, Math.round(base + wave + secondary + trend + peak))
		};
	});
}
async function listUsageEventGroupsByMetric(projectId, params) {
	if (params.metrics.length === 0) return /* @__PURE__ */ new Map();
	const projectSdk = sdk.forProject(projectId);
	const queries = buildUsageResourceFilterQueries({
		queries: params.queries,
		resourceId: params.resourceId,
		resourceType: params.resourceType
	});
	const { orderBy, orderDir, limit } = resolveUsageListOrder({
		interval: params.interval,
		hasDimensions: (params.dimensions?.length ?? 0) > 0,
		limit: params.limit
	});
	const request = {
		metrics: [...params.metrics],
		startAt: params.startAt,
		endAt: params.endAt,
		orderBy,
		orderDir,
		limit
	};
	if (params.interval) request.interval = params.interval;
	if (params.dimensions?.length) request.dimensions = params.dimensions;
	if (queries?.length) request.queries = queries;
	const response = await projectSdk.usage.listEvents(request);
	const result = /* @__PURE__ */ new Map();
	for (const metric of params.metrics) result.set(metric, response.metrics?.find((entry) => entry.metric === metric)?.points ?? []);
	return result;
}
async function listUsageEventGroupsForMetric(projectId, metric, params) {
	return (await listUsageEventGroupsByMetric(projectId, {
		...params,
		metrics: [metric]
	})).get(metric) ?? [];
}
async function listUsageEventGroupsForMetrics(projectId, metrics, params) {
	const groupsByMetric = await listUsageEventGroupsByMetric(projectId, {
		...params,
		metrics
	});
	return Array.from(groupsByMetric.values()).flat();
}
function computeChangePercent(current, previous) {
	if (previous <= 0) return current > 0 ? 100 : 0;
	return Number(((current - previous) / previous * 100).toFixed(1));
}
async function fetchProjectUsageChartOverview(projectId, dateRange, metrics, interval = "1h", queries, logRetentionHours = 720) {
	if (!projectId) return {
		changePercent: 0,
		chartPoints: []
	};
	const { from, to, previousFrom, previousTo, interval: resolvedInterval, comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, logRetentionHours);
	if (isScreenshotModeActive()) {
		const metricKey = metrics.join("|") || "requests";
		const chartPoints$1 = buildScreenshotModeChartPoints(from, to, resolvedInterval, metricKey);
		const previousChartPoints$1 = comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints$1) : buildScreenshotModeChartPoints(previousFrom, previousTo, resolvedInterval, metricKey, { quieter: true });
		return {
			changePercent: computeChangePercent(sumUsageChartPointsForComparison(chartPoints$1, comparisonMode), sumUsageChartPoints(previousChartPoints$1)),
			chartPoints: chartPoints$1
		};
	}
	const currentGroups = await listUsageEventGroupsForMetrics(projectId, metrics, {
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		queries
	});
	const previousGroups = comparisonMode === "prior_window" ? await listUsageEventGroupsForMetrics(projectId, metrics, {
		interval: resolvedInterval,
		startAt: previousFrom.toISOString(),
		endAt: previousTo.toISOString(),
		queries
	}) : [];
	const chartPoints = fillChartPointsGaps(mergeValuesByTime(currentGroups), from, to, resolvedInterval);
	const previousChartPoints = comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : fillChartPointsGaps(mergeValuesByTime(previousGroups), previousFrom, previousTo, resolvedInterval);
	return {
		changePercent: computeChangePercent(sumUsageChartPointsForComparison(chartPoints, comparisonMode), sumUsageChartPoints(previousChartPoints)),
		chartPoints
	};
}
const AFFILIATE_REWARD_AMOUNT_USD = 15;
const AFFILIATE_ATTRIBUTION_DAYS = 180;
const AFFILIATE_METRICS = {
	clicks: "affiliates.clicks",
	signups: "affiliates.signups",
	conversions: "affiliates.conversions"
};
const AFFILIATE_USAGE_INTERVALS = ["1h", "1d"];
function getDefaultAffiliateUsageQueryParams() {
	const dateRange = getStableUsageChartDateRange();
	const interval = resolveAffiliateUsageInterval("1h", dateRange);
	const { from, to } = resolveUsageDateBounds(dateRange);
	return {
		interval,
		startAt: from.toISOString(),
		endAt: to.toISOString()
	};
}
function resolveAffiliateUsageInterval(interval, dateRange) {
	const resolved = resolveUsageChartIntervalForRange(interval, dateRange);
	if (resolved === "15m") return isUsageChartIntervalValidForRange("1h", dateRange) ? "1h" : "1d";
	return resolved;
}
var AFFILIATE_LINK_ID_LENGTH = 8;
var AFFILIATE_LINK_ID_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function generateAffiliateLinkId(length = AFFILIATE_LINK_ID_LENGTH) {
	const bytes = new Uint8Array(length);
	crypto.getRandomValues(bytes);
	let id = "";
	for (let i = 0; i < length; i++) id += AFFILIATE_LINK_ID_ALPHABET[bytes[i] % 62];
	return id;
}
async function fetchAffiliateLinks(page = 0, limit = 10) {
	return await sdk.forConsole.affiliates.listLinks({ queries: [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	] });
}
async function createAffiliateLink(params) {
	return await sdk.forConsole.affiliates.createLink({
		linkId: params.linkId?.trim() || generateAffiliateLinkId(),
		name: params.name?.trim() || void 0
	});
}
async function deleteAffiliateLink(linkId) {
	await sdk.forConsole.affiliates.deleteLink({ linkId });
}
async function fetchAffiliateReferrals(page = 0, limit = 10) {
	return await sdk.forConsole.affiliates.listReferrals({ queries: [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	] });
}
async function fetchAffiliateRewards(page = 0, limit = 10) {
	return await sdk.forConsole.affiliates.listRewards({ queries: [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	] });
}
const AFFILIATE_PENDING_REWARDS_LIMIT = 100;
async function fetchPendingAffiliateRewards(limit = 100) {
	return await sdk.forConsole.affiliates.listRewards({ queries: [
		Query.equal("status", "pending"),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(0)
	] });
}
function sumPendingAffiliateRewardAmount(rewards) {
	return (rewards ?? []).reduce((sum, reward) => sum + (reward.amount || 0), 0);
}
async function claimAffiliateReward(rewardId, organizationId) {
	return await sdk.forConsole.affiliates.updateReward({
		rewardId,
		status: "claimed",
		organizationId
	});
}
async function fetchAffiliateUsage(params) {
	return await sdk.forConsole.usage.listEvents({
		metrics: [
			AFFILIATE_METRICS.clicks,
			AFFILIATE_METRICS.signups,
			AFFILIATE_METRICS.conversions
		],
		interval: params.interval,
		startAt: params.startAt,
		endAt: params.endAt,
		queries: params.linkId ? [Query.equal("resourceId", [params.linkId])] : void 0
	});
}
function sumUsageMetric(usage, metric) {
	const series = usage?.metrics?.find((entry) => entry.metric === metric);
	if (!series?.points?.length) return 0;
	return series.points.reduce((sum, point) => sum + (point.value || 0), 0);
}
function metricToFilledPoints(usage, metric, from, to, interval) {
	const series = usage?.metrics?.find((entry) => entry.metric === metric);
	const merged = /* @__PURE__ */ new Map();
	for (const point of series?.points ?? []) {
		if (!point.time) continue;
		merged.set(point.time, (merged.get(point.time) ?? 0) + (point.value || 0));
	}
	return fillChartPointsGaps(merged, from, to, interval);
}
function buildAffiliateFunnelChartPoints(usage, from, to, interval) {
	const clicks = metricToFilledPoints(usage, AFFILIATE_METRICS.clicks, from, to, interval);
	const signups = metricToFilledPoints(usage, AFFILIATE_METRICS.signups, from, to, interval);
	const conversions = metricToFilledPoints(usage, AFFILIATE_METRICS.conversions, from, to, interval);
	return clicks.map((point, index) => ({
		date: point.date,
		day: point.day,
		clicks: point.total,
		signups: signups[index]?.total ?? 0,
		conversions: conversions[index]?.total ?? 0
	}));
}
function affiliateLinksQueryOptions(page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"affiliates",
			"account",
			"links",
			page,
			limit
		],
		queryFn: () => fetchAffiliateLinks(page, limit),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData
	});
}
function affiliateReferralsQueryOptions(page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"affiliates",
			"account",
			"referrals",
			page,
			limit
		],
		queryFn: () => fetchAffiliateReferrals(page, limit),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData
	});
}
function affiliateRewardsQueryOptions(page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"affiliates",
			"account",
			"rewards",
			page,
			limit
		],
		queryFn: () => fetchAffiliateRewards(page, limit),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData
	});
}
function affiliatePendingRewardsQueryOptions(limit = 100) {
	return queryOptions({
		queryKey: [
			"affiliates",
			"account",
			"rewards",
			"pending",
			limit
		],
		queryFn: () => fetchPendingAffiliateRewards(limit),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function affiliateUsageQueryOptions(params) {
	return queryOptions({
		queryKey: [
			"affiliates",
			"account",
			"usage",
			params.linkId ?? "all",
			params.interval,
			params.startAt,
			params.endAt
		],
		queryFn: () => fetchAffiliateUsage(params),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData
	});
}
function useAffiliateLinks(page = 0, limit = 10) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(affiliateLinksQueryOptions(page, limit));
	return {
		links: data?.links ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useAffiliateReferrals(page = 0, limit = 10) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(affiliateReferralsQueryOptions(page, limit));
	return {
		referrals: data?.referrals ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useAffiliateRewards(page = 0, limit = 10) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(affiliateRewardsQueryOptions(page, limit));
	return {
		rewards: data?.rewards ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePendingAffiliateRewards(limit = 100) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(affiliatePendingRewardsQueryOptions(limit));
	const rewards = data?.rewards ?? [];
	return {
		data,
		rewards,
		total: data?.total ?? 0,
		amount: sumPendingAffiliateRewardAmount(rewards),
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useAffiliateUsage(params) {
	const { data, isLoading, isFetching, isError, error, refetch } = useQuery(affiliateUsageQueryOptions(params));
	return {
		usage: data,
		clicks: sumUsageMetric(data, AFFILIATE_METRICS.clicks),
		signups: sumUsageMetric(data, AFFILIATE_METRICS.signups),
		conversions: sumUsageMetric(data, AFFILIATE_METRICS.conversions),
		isLoading,
		isFetching,
		isError,
		error,
		refetch
	};
}
function useCreateAffiliateLink() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createAffiliateLink,
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"affiliates",
				"account",
				"links"
			] });
		}
	});
}
function useDeleteAffiliateLink() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteAffiliateLink,
		onSuccess: async () => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"affiliates",
				"account",
				"links"
			] }), queryClient.refetchQueries({ queryKey: [
				"affiliates",
				"account",
				"usage"
			] })]);
		}
	});
}
function useClaimAffiliateReward() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ rewardId, organizationId }) => claimAffiliateReward(rewardId, organizationId),
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"affiliates",
				"account",
				"rewards"
			] });
		}
	});
}
export { parseTableUsageResourceType as $, fetchProjectRuntimes as $n, siteQueryOptions as $t, useCreateAffiliateLink as A, SITE_TEMPLATE_USE_CASE_OPTIONS as An, hasUnavailableSpecifications as Ar, deleteSiteDeployment as At, fetchUsageMetricsChartSeriesByMetric as B, fetchFunctionDeployment as Bn, fetchSiteFrameworks as Bt, sumPendingAffiliateRewardAmount as C, useSiteTemplates as Cn, useFunctionVariables as Cr, hasFiniteUsageLogRetention as Ct, useAffiliateRewards as D, MARKETING_SITE_TEMPLATES_PAGE_SIZE as Dn, useUpdateFunctionVariable as Dr, SITES_DEFAULT_SORT_ORDER as Dt, useAffiliateReferrals as E, MARKETING_SITE_TEMPLATES_COLUMNS as En, useProjectRuntimes as Er, SITES_DEFAULT_SORT_BY as Et, fetchProjectUsageChartOverview as F, allFunctionTemplatesQueryOptions as Fn, fetchProjectSitesByIds as Ft, mergeTopEndpoints as G, fetchFunctionExecutions as Gn, fetchSiteTemplates as Gt, fillGaugeChartPointsGaps as H, fetchFunctionDeployments as Hn, fetchSiteLogs as Ht, fetchProjectUsageEventBreakdown as I, buildFunctionUpdateParams as In, fetchProxyRule as It, sumUsageChartPoints as J, fetchFunctionTemplatesPage as Jn, siteDeploymentQueryOptions as Jt, mergeUsageBreakdownItems as K, fetchFunctionSpecifications as Kn, fetchSiteVariables as Kt, fetchProjectUsageMetricSeriesOverview as L, cancelFunctionDeployment as Ln, fetchSiteDeployment as Lt, usePendingAffiliateRewards as M, getSiteTemplateScreenshotUrl as Mn, fetchDeploymentProxyRules as Mt, buildScreenshotModeChartPoints as N, FUNCTIONS_DEFAULT_SORT_BY as Nn, fetchProjectSite as Nt, useAffiliateUsage as O, MARKETING_SITE_TEMPLATES_PROJECT_ID as On, SpecificationType as Or, buildSiteUpdateParams as Ot, computeChangePercent as P, FUNCTIONS_DEFAULT_SORT_ORDER as Pn, fetchProjectSites as Pt, isUsageProjectResourceType as Q, fetchProjectFunctionsByIds as Qn, siteLogsQueryOptions as Qt, fetchProjectUsageMetricsOverview as R, deleteFunctionDeployment as Rn, fetchSiteDeployments as Rt, resolveAffiliateUsageInterval as S, useSiteTemplate as Sn, useFunctionTemplate as Sr, getUsageLogRetentionHoursFromPlan as St, useAffiliateLinks as T, useUpdateSiteVariable as Tn, useProjectFunctions as Tr, resolveShorterUsageDateRangePreset as Tt, getUsageChartFirstHalfPoints as U, fetchFunctionDomains as Un, fetchSiteSpecifications as Ut, fillChartPointsGaps as V, fetchFunctionDeploymentProxyRules as Vn, fetchSiteLog as Vt, mergeChartPointsSeries as W, fetchFunctionExecution as Wn, fetchSiteTemplate as Wt, formatUsageResourceTypeLabel as X, fetchProjectFunction as Xn, siteDomainsQueryOptions as Xt, sumUsageChartPointsForComparison as Y, fetchFunctionVariables as Yn, siteDeploymentsQueryOptions as Yt, getUsageResourceFilterEntries as Z, fetchProjectFunctions as Zn, siteFrameworksQueryOptions as Zt, fetchAffiliateRewards as _, useSiteDeployments as _n, useFunctionDeploymentProxyRules as _r, DEDICATED_DATABASE_USAGE_RESOURCE_TYPE as _t, AFFILIATE_USAGE_INTERVALS as a, useCreateSite as an, functionSpecificationsQueryOptions as ar, fetchStorageBreakdownResources as at, generateAffiliateLinkId as b, useSiteLogs as bn, useFunctionExecutions as br, DEFAULT_USAGE_LOG_RETENTION_HOURS as bt, affiliateReferralsQueryOptions as c, useCreateSiteVariable as cn, functionVariablesQueryOptions as cr, resolveStorageBreakdownResource as ct, buildAffiliateFunnelChartPoints as d, useDeleteSite as dn, projectRuntimesQueryOptions as dr, normalizeComputeBreakdownResourceIds as dt, siteSpecificationsQueryOptions as en, functionDeploymentProxyRulesQueryOptions as er, resolveUsageResourceBreakdownItem as et, claimAffiliateReward as f, useDeleteSiteVariable as fn, useCreateFunctionDomainRule as fr, resolveComputeBreakdownResource as ft, fetchAffiliateReferrals as g, useSiteDeployment as gn, useFunctionDeployment as gr, resolveDatabaseBreakdownResource as gt, fetchAffiliateLinks as h, useProjectSites as hn, useDeleteFunctionVariable as hr, normalizeDatabaseBreakdownResourceIds as ht, AFFILIATE_REWARD_AMOUNT_USD as i, sitesQueryOptions as in, functionExecutionsQueryOptions as ir, resolveTableBreakdownResource as it, useDeleteAffiliateLink as j, buildSiteTemplateFrameworkOptions as jn, isSpecificationAllowedInPlan as jr, deploymentProxyRulesQueryOptions as jt, useClaimAffiliateReward as k, SITE_TEMPLATE_GALLERY_DEFAULT_PAGE_SIZE as kn, getFirstEnabledSpecification as kr, cancelSiteDeployment as kt, affiliateRewardsQueryOptions as l, useCreateTemplateDeployment as ln, functionsQueryOptions as lr, fetchComputeBreakdownResources as lt, deleteAffiliateLink as m, useProjectSite as mn, useDeleteFunction as mr, getDatabaseBreakdownServiceLabel as mt, AFFILIATE_METRICS as n, siteTemplatesQueryOptions as nn, functionDeploymentsQueryOptions as nr, getTableBreakdownResourceTypeLabel as nt, affiliateLinksQueryOptions as o, useCreateSiteDomain as on, functionTemplateQueryOptions as or, getStorageBreakdownResourceTypeLabel as ot, createAffiliateLink as p, useDeploymentProxyRules as pn, useCreateFunctionVariable as pr, fetchDatabaseBreakdownResources as pt, resolveOverviewUsagePeriod as q, fetchFunctionTemplate as qn, marketingSiteTemplatesQueryOptions as qt, AFFILIATE_PENDING_REWARDS_LIMIT as r, siteVariablesQueryOptions as rn, functionDomainsQueryOptions as rr, normalizeTableBreakdownResourceLabels as rt, affiliatePendingRewardsQueryOptions as s, useCreateSiteDomainRule as sn, functionTemplatesPageQueryOptions as sr, normalizeStorageBreakdownResourceIds as st, AFFILIATE_ATTRIBUTION_DAYS as t, siteTemplateQueryOptions as tn, functionDeploymentQueryOptions as tr, fetchTableBreakdownResources as tt, affiliateUsageQueryOptions as u, useCreateVcsDeployment as un, projectFunctionQueryOptions as ur, getComputeBreakdownResourceTypeLabel as ut, fetchAffiliateUsage as v, useSiteDomains as vn, useFunctionDeployments as vr, buildUsageResourceFilterQueries as vt, sumUsageMetric as w, useSiteVariables as wn, useProjectFunction as wr, isUsageDateRangeBeyondRetention as wt, getDefaultAffiliateUsageQueryParams as x, useSiteSpecifications as xn, useFunctionSpecifications as xr, getUsageLogRetentionDaysFromPlan as xt, fetchPendingAffiliateRewards as y, useSiteFrameworks as yn, useFunctionDomains as yr, DEFAULT_USAGE_LOG_RETENTION_DAYS as yt, fetchUsageMetricsBreakdownByMetric as z, fetchAllFunctionTemplates as zn, fetchSiteDomains as zt };
