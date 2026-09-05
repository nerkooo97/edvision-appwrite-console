import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { t as buildAttributePrefixSearchQueries } from "./appwrite-id-L15yEGeF.js";
import { useEffect, useMemo } from "react";
import { DomainRegistrationType, DomainTransferStatusEnum, Query } from "@appwrite.io/console";
import { keepPreviousData, queryOptions, useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
const PENDING_DOMAIN_TRANSFER_STATUSES = [
	DomainTransferStatusEnum.PendingOwner,
	DomainTransferStatusEnum.PendingAdmin,
	DomainTransferStatusEnum.PendingRegistry
];
const DOMAIN_TRANSFER_IN_PROGRESS_DESCRIPTION = "Domain transfers usually take 5-7 days. ICANN allows the old registrar up to 5 days to release the domain, with .com and .net sometimes taking 1-2 extra days to finalize.";
function normalizeDomainTransferStatus(status) {
	if (status == null || status === "") return null;
	return String(status).trim().toLowerCase();
}
function isPendingDomainTransferStatus(status) {
	const normalized = normalizeDomainTransferStatus(status);
	if (!normalized) return false;
	return normalized.startsWith("pending_") || PENDING_DOMAIN_TRANSFER_STATUSES.some((value) => value === normalized);
}
function isDomainTransferInProgress(domain) {
	return isPendingDomainTransferStatus(domain?.transferStatus);
}
function shouldShowDomainTransferStatus(status) {
	if (!status) return false;
	if (status === DomainTransferStatusEnum.Transferrable || status === DomainTransferStatusEnum.NotTransferrable || status === DomainTransferStatusEnum.Completed) return false;
	return true;
}
function getDomainTransferStatusLabel(status) {
	switch (status) {
		case DomainTransferStatusEnum.PendingOwner: return "Pending owner approval";
		case DomainTransferStatusEnum.PendingAdmin: return "Pending admin approval";
		case DomainTransferStatusEnum.PendingRegistry: return "Pending registry";
		case DomainTransferStatusEnum.Completed: return "Transfer completed";
		case DomainTransferStatusEnum.Cancelled: return "Transfer cancelled";
		case DomainTransferStatusEnum.Transferrable: return "Transferrable";
		case DomainTransferStatusEnum.NotTransferrable: return "Not transferrable";
		case DomainTransferStatusEnum.ServiceUnavailable: return "Transfer unavailable";
		default: return String(status).replaceAll("_", " ");
	}
}
function getDomainTransferStatusBadgeConfig(status) {
	const label = getDomainTransferStatusLabel(status);
	switch (status) {
		case DomainTransferStatusEnum.Completed: return {
			variant: "success",
			label
		};
		case DomainTransferStatusEnum.Cancelled:
		case DomainTransferStatusEnum.NotTransferrable:
		case DomainTransferStatusEnum.ServiceUnavailable: return {
			variant: "error",
			label
		};
		case DomainTransferStatusEnum.Transferrable: return {
			variant: "processing",
			label
		};
		case DomainTransferStatusEnum.PendingOwner:
		case DomainTransferStatusEnum.PendingAdmin:
		case DomainTransferStatusEnum.PendingRegistry: return {
			variant: "processing",
			label
		};
		default: return {
			variant: "processing",
			label
		};
	}
}
var DOMAIN_TRANSFER_STATUS_POLL_MS = 15e3;
const DOMAINS_DEFAULT_SORT_BY = "$createdAt";
const DOMAINS_DEFAULT_SORT_ORDER = "desc";
async function fetchOrganizationDomains(organizationId, page = 0, limit = 10, search, filterQueries, sortBy = DOMAINS_DEFAULT_SORT_BY, sortOrder = DOMAINS_DEFAULT_SORT_ORDER) {
	if (!organizationId) return {
		domains: [],
		total: 0
	};
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		Query.equal("teamId", organizationId),
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries(["domain", "$id"], search),
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await sdk.forConsole.domains.list({ queries });
	return {
		domains: response.domains || [],
		total: response.total || 0
	};
}
async function fetchDomain(domainId) {
	if (!domainId) throw new Error("Domain ID is required");
	return await sdk.forConsole.domains.get({ domainId });
}
async function fetchDomainPrice(domain) {
	const normalized = domain.toLowerCase();
	const periodYears = normalized.endsWith(".ai") ? 2 : void 0;
	const params = {
		domain: normalized,
		...periodYears != null && { periodYears }
	};
	const [registration, renewal] = await Promise.all([sdk.forConsole.domains.getPrice({
		...params,
		registrationType: DomainRegistrationType.New
	}), sdk.forConsole.domains.getPrice({
		...params,
		registrationType: DomainRegistrationType.Renewal
	}).catch(() => null)]);
	return {
		...registration,
		renewalPrice: renewal?.price,
		renewalPeriodYears: renewal?.periodYears
	};
}
async function fetchDomainTransferPriceQuote(domain) {
	const normalized = domain.toLowerCase().trim();
	const periodYears = normalized.endsWith(".ai") ? 2 : void 0;
	const params = {
		domain: normalized,
		...periodYears != null && { periodYears }
	};
	const [transfer, renewal] = await Promise.all([sdk.forConsole.domains.getPrice({
		...params,
		registrationType: DomainRegistrationType.Transfer
	}), sdk.forConsole.domains.getPrice({
		...params,
		registrationType: DomainRegistrationType.Renewal
	}).catch(() => null)]);
	return {
		...transfer,
		renewalPrice: renewal?.price,
		renewalPeriodYears: renewal?.periodYears
	};
}
function domainTransferPriceQueryOptions(domain) {
	const normalized = domain?.trim().toLowerCase() ?? "";
	const enabled = normalized.length > 0 && normalized.includes(".") && !normalized.startsWith(".") && !normalized.endsWith(".");
	return queryOptions({
		queryKey: [
			"domain-price",
			"transfer",
			normalized
		],
		queryFn: () => fetchDomainTransferPriceQuote(normalized),
		enabled,
		staleTime: DEFAULT_STALE_TIME,
		retry: false
	});
}
async function createDomainPurchase(params) {
	return await sdk.forConsole.domains.createPurchase({
		domain: params.domain.toLowerCase(),
		organizationId: params.organizationId,
		firstName: params.firstName,
		lastName: params.lastName,
		email: params.email,
		phone: params.phone,
		billingAddressId: params.billingAddressId,
		paymentMethodId: params.paymentMethodId,
		addressLine3: params.addressLine3,
		companyName: params.companyName,
		periodYears: params.periodYears
	});
}
async function finalizeDomainPurchase(params) {
	return await sdk.forConsole.domains.updatePurchase({
		invoiceId: params.invoiceId,
		organizationId: params.organizationId
	});
}
async function createDomainTransferIn(params) {
	return await sdk.forConsole.domains.createTransferIn({
		domain: params.domain.toLowerCase(),
		organizationId: params.organizationId,
		authCode: params.authCode,
		paymentMethodId: params.paymentMethodId
	});
}
async function finalizeDomainTransferIn(params) {
	return await sdk.forConsole.domains.updateTransferIn({
		invoiceId: params.invoiceId,
		organizationId: params.organizationId
	});
}
async function createDomainTransferOut(params) {
	return await sdk.forConsole.domains.createTransferOut({
		domainId: params.domainId,
		organizationId: params.organizationId
	});
}
async function fetchDomainTransferStatus(domainId) {
	if (!domainId) throw new Error("Domain ID is required");
	return await sdk.forConsole.domains.getTransferStatus({ domainId });
}
async function createOrganizationDomain(organizationId, domain) {
	if (!organizationId) throw new Error("Organization ID is required");
	if (!domain) throw new Error("Domain is required");
	return await sdk.forConsole.domains.create({
		teamId: organizationId,
		domain: domain.toLowerCase()
	});
}
async function deleteOrganizationDomain(domainId) {
	if (!domainId) throw new Error("Domain ID is required");
	await sdk.forConsole.domains.delete({ domainId });
}
async function retryDomainVerification(domainId) {
	if (!domainId) throw new Error("Domain ID is required");
	return await sdk.forConsole.domains.verifyNameservers({ domainId });
}
async function updateDomainTeam(domainId, teamId) {
	if (!getActiveProfileFeatures().multiTenancy) throw new Error("This console profile does not support transferring between organizations");
	if (!domainId) throw new Error("Domain ID is required");
	if (!teamId) throw new Error("Team ID is required");
	await sdk.forConsole.domains.updateTeam({
		domainId,
		teamId
	});
}
async function updateDomainAutoRenewal(domainId, autoRenewal) {
	if (!domainId) throw new Error("Domain ID is required");
	return await sdk.forConsole.domains.updateAutoRenewal({
		domainId,
		autoRenewal
	});
}
const DNS_RECORDS_DEFAULT_SORT_BY = "$createdAt";
const DNS_RECORDS_DEFAULT_SORT_ORDER = "asc";
async function fetchDomainRecords(domainId, page = 0, limit = 10, filterQueries, sortBy = DNS_RECORDS_DEFAULT_SORT_BY, sortOrder = "asc") {
	if (!domainId) return {
		dnsRecords: [],
		total: 0
	};
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		orderQuery,
		Query.offset(page * limit),
		Query.limit(limit)
	];
	const response = await sdk.forConsole.domains.listRecords({
		domainId,
		queries
	});
	return {
		dnsRecords: response.dnsRecords || [],
		total: response.total || 0
	};
}
async function fetchDomainZone(domainId) {
	if (!domainId) throw new Error("Domain ID is required");
	return await sdk.forConsole.domains.getZone({ domainId });
}
async function createDnsRecord(domainId, type, data) {
	if (!domainId) throw new Error("Domain ID is required");
	const baseParams = {
		domainId,
		name: data.name,
		value: data.value,
		ttl: data.ttl,
		comment: data.comment
	};
	switch (type.toUpperCase()) {
		case "A": return await sdk.forConsole.domains.createRecordA(baseParams);
		case "AAAA": return await sdk.forConsole.domains.createRecordAAAA(baseParams);
		case "CNAME": return await sdk.forConsole.domains.createRecordCNAME(baseParams);
		case "MX":
			if (data.priority === void 0) throw new Error("Priority is required for MX records");
			return await sdk.forConsole.domains.createRecordMX({
				...baseParams,
				priority: data.priority
			});
		case "TXT": return await sdk.forConsole.domains.createRecordTXT(baseParams);
		case "NS": return await sdk.forConsole.domains.createRecordNS(baseParams);
		case "SRV":
			if (data.priority === void 0 || data.weight === void 0 || data.port === void 0) throw new Error("Priority, weight, and port are required for SRV records");
			return await sdk.forConsole.domains.createRecordSRV({
				...baseParams,
				priority: data.priority,
				weight: data.weight,
				port: data.port
			});
		case "CAA": return await sdk.forConsole.domains.createRecordCAA(baseParams);
		case "HTTPS": return await sdk.forConsole.domains.createRecordHTTPS(baseParams);
		case "ALIAS": return await sdk.forConsole.domains.createRecordAlias(baseParams);
		default: throw new Error(`Unsupported DNS record type: ${type}`);
	}
}
async function updateDnsRecord(domainId, recordId, type, data) {
	if (!domainId) throw new Error("Domain ID is required");
	if (!recordId) throw new Error("Record ID is required");
	const baseParams = {
		domainId,
		recordId,
		name: data.name,
		value: data.value,
		ttl: data.ttl,
		comment: data.comment
	};
	switch (type.toUpperCase()) {
		case "A": return await sdk.forConsole.domains.updateRecordA(baseParams);
		case "AAAA": return await sdk.forConsole.domains.updateRecordAAAA(baseParams);
		case "CNAME": return await sdk.forConsole.domains.updateRecordCNAME(baseParams);
		case "MX":
			if (data.priority === void 0) throw new Error("Priority is required for MX records");
			return await sdk.forConsole.domains.updateRecordMX({
				...baseParams,
				priority: data.priority
			});
		case "TXT": return await sdk.forConsole.domains.updateRecordTXT(baseParams);
		case "NS": return await sdk.forConsole.domains.updateRecordNS(baseParams);
		case "SRV":
			if (data.priority === void 0 || data.weight === void 0 || data.port === void 0) throw new Error("Priority, weight, and port are required for SRV records");
			return await sdk.forConsole.domains.updateRecordSRV({
				...baseParams,
				priority: data.priority,
				weight: data.weight,
				port: data.port
			});
		case "CAA": return await sdk.forConsole.domains.updateRecordCAA(baseParams);
		case "HTTPS": return await sdk.forConsole.domains.updateRecordHTTPS(baseParams);
		case "ALIAS": return await sdk.forConsole.domains.updateRecordAlias(baseParams);
		default: throw new Error(`Unsupported DNS record type: ${type}`);
	}
}
async function deleteDnsRecord(domainId, recordId) {
	if (!domainId) throw new Error("Domain ID is required");
	if (!recordId) throw new Error("Record ID is required");
	await sdk.forConsole.domains.deleteRecord({
		domainId,
		recordId
	});
}
async function updateDomainZone(domainId, content) {
	if (!domainId) throw new Error("Domain ID is required");
	if (!content) throw new Error("Zone file content is required");
	await sdk.forConsole.domains.updateZone({
		domainId,
		content
	});
}
async function fetchPresetRecords(domainId, preset) {
	if (!domainId) throw new Error("Domain ID is required");
	switch (preset) {
		case "zoho": return await sdk.forConsole.domains.getPresetZoho({ domainId });
		case "mailgun": return await sdk.forConsole.domains.getPresetMailgun({ domainId });
		case "outlook": return await sdk.forConsole.domains.getPresetOutlook({ domainId });
		case "protonmail": return await sdk.forConsole.domains.getPresetProtonMail({ domainId });
		case "icloud": return await sdk.forConsole.domains.getPresetICloud({ domainId });
		case "google-workspace": return await sdk.forConsole.domains.getPresetGoogleWorkspace({ domainId });
		default: throw new Error(`Unsupported preset: ${preset}`);
	}
}
function organizationDomainsQueryOptions(organizationId, page = 0, limit = 10, search, filterQueries, sortBy = DOMAINS_DEFAULT_SORT_BY, sortOrder = DOMAINS_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"domains",
			"organization",
			organizationId,
			page,
			limit,
			search,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchOrganizationDomains(organizationId, page, limit, search, filterQueries, sortBy, sortOrder),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function domainQueryOptions(domainId) {
	return queryOptions({
		queryKey: ["domain", domainId],
		queryFn: () => fetchDomain(domainId),
		enabled: !!domainId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function domainTransferStatusQueryOptions(domainId, transferStatusFromDomain) {
	const enabled = !!domainId && isPendingDomainTransferStatus(transferStatusFromDomain);
	return queryOptions({
		queryKey: [
			"domain",
			domainId,
			"transfer-status"
		],
		queryFn: () => fetchDomainTransferStatus(domainId),
		enabled,
		staleTime: 0,
		retry: false,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchInterval: (query) => isPendingDomainTransferStatus(query.state.data?.status) ? DOMAIN_TRANSFER_STATUS_POLL_MS : false
	});
}
function domainPriceQueryOptions(domain) {
	return queryOptions({
		queryKey: [
			"domain-price",
			domain,
			"renewal"
		],
		queryFn: () => fetchDomainPrice(domain),
		enabled: !!domain && domain.length >= 4,
		staleTime: 60 * 1e3
	});
}
function domainRecordsQueryOptions(domainId, page = 0, limit = 10, filterQueries, sortBy = DNS_RECORDS_DEFAULT_SORT_BY, sortOrder = "asc") {
	return queryOptions({
		queryKey: [
			"dns-records",
			"domain",
			domainId,
			page,
			limit,
			...filterQueries !== void 0 && filterQueries.length > 0 ? [filterQueries] : [],
			sortBy,
			sortOrder
		],
		queryFn: () => fetchDomainRecords(domainId, page, limit, filterQueries, sortBy, sortOrder),
		enabled: !!domainId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData
	});
}
function useOrganizationDomains(organizationId, page = 0, limit = 10, search, filterQueries, sortBy = DOMAINS_DEFAULT_SORT_BY, sortOrder = DOMAINS_DEFAULT_SORT_ORDER) {
	const { data: domainsData, isLoading, isFetching, isFetched, error, refetch } = useQuery(organizationDomainsQueryOptions(organizationId, page, limit, search, filterQueries, sortBy, sortOrder));
	const domains = useMemo(() => {
		if (!domainsData?.domains) return [];
		return domainsData.domains;
	}, [domainsData]);
	const totalPages = useMemo(() => {
		if (!domainsData?.total) return 0;
		return Math.ceil(domainsData.total / limit);
	}, [domainsData?.total, limit]);
	return {
		domains,
		total: domainsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useDomainPrices(baseName, tlds = []) {
	const domains = useMemo(() => baseName && baseName.length >= 1 ? tlds.map((tld) => `${baseName}.${tld}`) : [], [baseName, tlds]);
	const queries = useQueries({ queries: domains.map((domain) => domainPriceQueryOptions(domain)) });
	const pricesByDomain = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (let i = 0; i < domains.length; i++) {
			const { data } = queries[i];
			if (data) {
				const quote = data;
				map.set(domains[i], {
					price: quote.price,
					available: quote.available,
					periodYears: typeof quote.periodYears === "number" ? quote.periodYears : 1,
					premium: quote.premium,
					renewalPrice: quote.renewalPrice,
					renewalPeriodYears: quote.renewalPeriodYears
				});
			}
		}
		return map;
	}, [domains, queries]);
	const hasError = queries.some((q) => q.error);
	return {
		pricesByDomain,
		isFetching: queries.some((q) => q.isFetching),
		error: hasError ? queries.find((q) => q.error)?.error : void 0
	};
}
function useDomain(domainId) {
	return useQuery(domainQueryOptions(domainId));
}
function useDomainTransferStatus(domainId, transferStatusFromDomain, organizationId) {
	const queryClient = useQueryClient();
	const query = useQuery(domainTransferStatusQueryOptions(domainId, transferStatusFromDomain));
	useEffect(() => {
		const status = query.data?.status;
		if (!status || !domainId) return;
		const endpointPending = isPendingDomainTransferStatus(status);
		const domainPending = isPendingDomainTransferStatus(transferStatusFromDomain);
		if (endpointPending && !domainPending) {
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
			if (organizationId) queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
			return;
		}
		if (domainPending && !endpointPending) {
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
			if (organizationId) queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
		}
	}, [
		query.data?.status,
		domainId,
		organizationId,
		queryClient,
		transferStatusFromDomain
	]);
	return query;
}
function useCreateOrganizationDomain(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (domain) => {
			if (!organizationId) throw new Error("Organization ID is required");
			return await createOrganizationDomain(organizationId, domain);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
		}
	});
}
function useDeleteOrganizationDomain(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (domainId) => {
			return await deleteOrganizationDomain(domainId);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
			await queryClient.refetchQueries({ queryKey: Dependencies.DOMAINS });
		}
	});
}
function useRetryDomainVerification(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (domainId) => {
			return await retryDomainVerification(domainId);
		},
		onSuccess: (_, domainId) => {
			queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
		}
	});
}
function useUpdateDomainTeam(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ domainId, teamId }) => {
			return await updateDomainTeam(domainId, teamId);
		},
		onSuccess: async (_, { domainId, teamId }) => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] }), queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				teamId
			] })]);
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
			queryClient.invalidateQueries({ queryKey: Dependencies.DOMAINS });
		}
	});
}
function useUpdateDomainAutoRenewal(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ domainId, autoRenewal }) => {
			return await updateDomainAutoRenewal(domainId, autoRenewal);
		},
		onSuccess: (_, { domainId }) => {
			queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
			queryClient.invalidateQueries({ queryKey: Dependencies.DOMAINS });
		}
	});
}
function useDomainRecords(domainId, page = 0, limit = 10, filterQueries, sortBy = DNS_RECORDS_DEFAULT_SORT_BY, sortOrder = "asc") {
	const { data: recordsData, isLoading, isFetching, error, refetch } = useQuery(domainRecordsQueryOptions(domainId, page, limit, filterQueries, sortBy, sortOrder));
	const dnsRecords = useMemo(() => {
		if (!recordsData?.dnsRecords) return [];
		return recordsData.dnsRecords || [];
	}, [recordsData]);
	const totalPages = useMemo(() => {
		if (!recordsData?.total) return 0;
		return Math.ceil(recordsData.total / limit);
	}, [recordsData?.total, limit]);
	return {
		dnsRecords,
		total: recordsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useDomainZone(domainId) {
	return useQuery({
		queryKey: [
			"zone",
			"domain",
			domainId
		],
		queryFn: () => fetchDomainZone(domainId),
		enabled: !!domainId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useCreateDnsRecord(domainId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ type, data }) => {
			if (!domainId) throw new Error("Domain ID is required");
			return await createDnsRecord(domainId, type, data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
		}
	});
}
function useUpdateDnsRecord(domainId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ recordId, type, data }) => {
			if (!domainId) throw new Error("Domain ID is required");
			return await updateDnsRecord(domainId, recordId, type, data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
		}
	});
}
function useDeleteDnsRecord(domainId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (recordId) => {
			if (!domainId) throw new Error("Domain ID is required");
			return await deleteDnsRecord(domainId, recordId);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			await queryClient.refetchQueries({ queryKey: ["domain", domainId] });
		}
	});
}
function useUpdateDomainZone(domainId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (content) => {
			if (!domainId) throw new Error("Domain ID is required");
			return await updateDomainZone(domainId, content);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"zone",
				"domain",
				domainId
			] });
			queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
		}
	});
}
function usePresetRecords(domainId, preset) {
	return useQuery({
		queryKey: [
			"preset-records",
			"domain",
			domainId,
			preset
		],
		queryFn: () => fetchPresetRecords(domainId, preset),
		enabled: !!domainId && !!preset,
		staleTime: DEFAULT_STALE_TIME
	});
}
export { shouldShowDomainTransferStatus as $, updateDomainAutoRenewal as A, useDomainTransferStatus as B, fetchOrganizationDomains as C, organizationDomainsQueryOptions as D, finalizeDomainTransferIn as E, useDeleteDnsRecord as F, useUpdateDnsRecord as G, useOrganizationDomains as H, useDeleteOrganizationDomain as I, useUpdateDomainZone as J, useUpdateDomainAutoRenewal as K, useDomain as L, updateDomainZone as M, useCreateDnsRecord as N, retryDomainVerification as O, useCreateOrganizationDomain as P, isPendingDomainTransferStatus as Q, useDomainPrices as R, fetchDomainZone as S, finalizeDomainPurchase as T, usePresetRecords as U, useDomainZone as V, useRetryDomainVerification as W, getDomainTransferStatusBadgeConfig as X, DOMAIN_TRANSFER_IN_PROGRESS_DESCRIPTION as Y, isDomainTransferInProgress as Z, fetchDomain as _, createDnsRecord as a, fetchDomainTransferPriceQuote as b, createDomainTransferOut as c, deleteOrganizationDomain as d, domainPriceQueryOptions as f, domainTransferStatusQueryOptions as g, domainTransferPriceQueryOptions as h, DOMAINS_DEFAULT_SORT_ORDER as i, updateDomainTeam as j, updateDnsRecord as k, createOrganizationDomain as l, domainRecordsQueryOptions as m, DNS_RECORDS_DEFAULT_SORT_ORDER as n, createDomainPurchase as o, domainQueryOptions as p, useUpdateDomainTeam as q, DOMAINS_DEFAULT_SORT_BY as r, createDomainTransferIn as s, DNS_RECORDS_DEFAULT_SORT_BY as t, deleteDnsRecord as u, fetchDomainPrice as v, fetchPresetRecords as w, fetchDomainTransferStatus as x, fetchDomainRecords as y, useDomainRecords as z };
