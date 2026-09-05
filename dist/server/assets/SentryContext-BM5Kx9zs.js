import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { A as initSentryClient, G as canTrackAnalytics, M as shouldSkipSentryError } from "./sdk-DjIJ_hjn.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { Fragment, jsx } from "react/jsx-runtime";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import * as Sentry from "@sentry/tanstackstart-react";
import { useQuery } from "@tanstack/react-query";
var reportedErrors = /* @__PURE__ */ new WeakSet();
function isSentryReportingEnabled() {
	return !!getRuntimeConfig().sentryDsn && canTrackAnalytics();
}
function extractRouteContext(pathname) {
	const context = {};
	const projectMatch = pathname.match(/\/projects\/([^/]+)/);
	if (projectMatch) context.projectId = projectMatch[1];
	const orgMatch = pathname.match(/\/organizations\/([^/]+)/);
	if (orgMatch) context.orgId = orgMatch[1];
	const functionMatch = pathname.match(/\/functions\/([^/]+)/);
	if (functionMatch && functionMatch[1] !== "executions") context.functionId = functionMatch[1];
	const bucketMatch = pathname.match(/\/storage\/([^/]+)/);
	if (bucketMatch && bucketMatch[1] !== "files") context.bucketId = bucketMatch[1];
	const fileMatch = pathname.match(/\/files\/([^/]+)/);
	if (fileMatch) context.fileId = fileMatch[1];
	const dbMatch = pathname.match(/\/databases\/([^/]+)/);
	if (dbMatch) context.databaseId = dbMatch[1];
	const collectionMatch = pathname.match(/\/collections\/([^/]+)/);
	if (collectionMatch) context.collectionId = collectionMatch[1];
	const documentMatch = pathname.match(/\/documents\/([^/]+)/);
	if (documentMatch) context.documentId = documentMatch[1];
	const authSegment = pathname.match(/\/auth\/([^/]+)/)?.[1];
	if (authSegment && !new Set([
		"teams",
		"policies",
		"social-providers",
		"templates",
		"settings",
		"security",
		"users"
	]).has(authSegment)) context.userId = authSegment;
	const siteMatch = pathname.match(/\/sites\/([^/]+)/);
	if (siteMatch) context.siteId = siteMatch[1];
	const deploymentMatch = pathname.match(/\/deployments\/([^/]+)/);
	if (deploymentMatch) context.deploymentId = deploymentMatch[1];
	const providerMatch = pathname.match(/\/providers\/([^/]+)/);
	if (providerMatch) context.providerId = providerMatch[1];
	const topicMatch = pathname.match(/\/topics\/([^/]+)/);
	if (topicMatch) context.topicId = topicMatch[1];
	const messageMatch = pathname.match(/\/messages\/([^/]+)/);
	if (messageMatch) context.messageId = messageMatch[1];
	const serviceMatch = pathname.match(/\/projects\/[^/]+\/([^/]+)/);
	if (serviceMatch) context.service = serviceMatch[1];
	return context;
}
function toReportableError(error) {
	if (error instanceof Error) return error;
	if (typeof error === "string") return new Error(error);
	try {
		return new Error(JSON.stringify(error));
	} catch {
		return new Error(String(error));
	}
}
function captureExceptionWithContext(error, additionalContext) {
	if (!isSentryReportingEnabled()) return void 0;
	if (shouldSkipSentryError(error)) return void 0;
	if (!initSentryClient()) return void 0;
	const dedupeKey = error !== null && typeof error === "object" ? error : toReportableError(error);
	if (reportedErrors.has(dedupeKey)) return void 0;
	reportedErrors.add(dedupeKey);
	const reportable = toReportableError(error);
	return Sentry.captureException(reportable, {
		extra: {
			...additionalContext,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		},
		tags: {
			...additionalContext?.source && { error_source: additionalContext.source },
			...additionalContext?.projectId && { project_id: additionalContext.projectId },
			...additionalContext?.orgId && { org_id: additionalContext.orgId },
			...additionalContext?.functionId && { function_id: additionalContext.functionId },
			...additionalContext?.bucketId && { bucket_id: additionalContext.bucketId },
			...additionalContext?.databaseId && { database_id: additionalContext.databaseId },
			...additionalContext?.siteId && { site_id: additionalContext.siteId }
		}
	}) ?? Sentry.lastEventId();
}
function reportRouterCaughtError(error, errorInfo, options) {
	const pathname = options?.pathname ?? (typeof window !== "undefined" ? window.location.pathname : "");
	const href = options?.href ?? (typeof window !== "undefined" ? window.location.href : void 0);
	return captureExceptionWithContext(error, {
		...extractRouteContext(pathname),
		componentStack: errorInfo?.componentStack ?? void 0,
		source: options?.source ?? "router-onCatch",
		url: href,
		pathname
	});
}
function reportUnhandledError(error, source) {
	if (shouldSkipSentryError(error)) return void 0;
	const pathname = typeof window !== "undefined" ? window.location.pathname : "";
	const href = typeof window !== "undefined" ? window.location.href : void 0;
	return captureExceptionWithContext(error, {
		...extractRouteContext(pathname),
		source,
		url: href,
		pathname
	});
}
var isSentryEnabled = () => isSentryReportingEnabled();
function extractProjectId(pathname) {
	return pathname.match(/\/projects\/([^/]+)/)?.[1] || null;
}
function extractOrgId(pathname) {
	return pathname.match(/\/organizations\/([^/]+)/)?.[1] || null;
}
function extractCurrentService(pathname) {
	const projectMatch = pathname.match(/\/projects\/[^/]+\/([^/]+)/);
	if (projectMatch) return projectMatch[1];
	const orgMatch = pathname.match(/\/organizations\/[^/]+\/([^/]+)/);
	if (orgMatch) return orgMatch[1];
	return null;
}
function SentryContextProvider({ children }) {
	const location = useLocation();
	const { account, isAuthenticated } = useAuth();
	const accountUser = account;
	const { features } = useConsoleProfile();
	const projectId = extractProjectId(location.pathname);
	const { project } = useProject(projectId ?? void 0);
	const orgIdFromUrl = extractOrgId(location.pathname);
	const currentOrgId = projectId ? project?.teamId ?? void 0 : orgIdFromUrl ?? accountUser?.prefs?.organization;
	const { data: orgPlan } = useQuery({
		...organizationPlanQueryOptions(currentOrgId),
		enabled: !!currentOrgId && typeof window !== "undefined" && features.billing
	});
	useEffect(() => {
		if (!isSentryEnabled()) return;
		if (isAuthenticated && accountUser) {
			Sentry.setUser({ id: accountUser.$id });
			Sentry.setContext("user_details", {
				userId: accountUser.$id,
				status: accountUser.status,
				emailVerification: accountUser.emailVerification,
				phoneVerification: accountUser.phoneVerification,
				mfaEnabled: accountUser.mfa,
				preferredOrgId: accountUser.prefs?.organization
			});
		} else {
			Sentry.setUser(null);
			Sentry.setContext("user_details", null);
		}
	}, [isAuthenticated, accountUser]);
	useEffect(() => {
		if (!isSentryEnabled()) return;
		const projectId$1 = extractProjectId(location.pathname);
		const orgId = extractOrgId(location.pathname);
		const service = extractCurrentService(location.pathname);
		Sentry.setContext("navigation", {
			pathname: location.pathname,
			projectId: projectId$1,
			orgId,
			service,
			fullUrl: location.href
		});
		if (projectId$1) Sentry.setTag("project_id", projectId$1);
		else Sentry.setTag("project_id", void 0);
		if (orgId) Sentry.setTag("org_id", orgId);
		else if (accountUser?.prefs?.organization) Sentry.setTag("org_id", accountUser.prefs.organization);
		else Sentry.setTag("org_id", void 0);
		if (service) Sentry.setTag("service", service);
		else Sentry.setTag("service", void 0);
	}, [
		location.pathname,
		location.href,
		accountUser
	]);
	useEffect(() => {
		if (!isSentryEnabled()) return;
		if (orgPlan) {
			Sentry.setContext("organization_plan", {
				planId: orgPlan.$id,
				planName: orgPlan.name
			});
			Sentry.setTag("billing_plan", orgPlan.name);
		} else {
			Sentry.setContext("organization_plan", null);
			Sentry.setTag("billing_plan", void 0);
		}
	}, [orgPlan]);
	return /* @__PURE__ */ jsx(Fragment, { children });
}
export { reportUnhandledError as a, reportRouterCaughtError as i, captureExceptionWithContext as n, extractRouteContext as r, SentryContextProvider as t };
