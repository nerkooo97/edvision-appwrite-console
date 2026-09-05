import { K as organizationScopesQueryOptions, mn as deriveAccessFromRolesScopes } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { A as canShowGetStartedSection, E as canShowBucketSecuritySettings, H as canShowTableSecuritySettings, O as canShowDatabaseSecuritySettings, R as canShowProjectOAuth2Server, T as canShowAuthSecuritySettings, U as canShowTopicSettingsTab, V as canShowSiteSettingsTab, c as canCreateDatabase, k as canShowFunctionSecuritySettings, t as canAccessOrgDomains, z as canShowProjectSettings } from "./console-access-checks-BTMEOKcL.js";
async function getProjectAccess(queryClient, projectId) {
	if (!getActiveProfileFeatures().orgRoles) return null;
	const teamId = (await queryClient.ensureQueryData(projectQueryOptions(projectId)))?.teamId;
	if (!teamId) return null;
	try {
		const scopes = await queryClient.ensureQueryData(organizationScopesQueryOptions(teamId, projectId));
		if (!scopes) return null;
		return deriveAccessFromRolesScopes(scopes.roles, scopes.scopes);
	} catch {
		return null;
	}
}
async function getOrganizationAccess(queryClient, organizationId) {
	if (!getActiveProfileFeatures().orgRoles) return null;
	try {
		const scopes = await queryClient.ensureQueryData(organizationScopesQueryOptions(organizationId));
		if (!scopes) return null;
		return deriveAccessFromRolesScopes(scopes.roles, scopes.scopes);
	} catch {
		return null;
	}
}
async function canAccessDatabaseSecuritySettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowDatabaseSecuritySettings(access, getActiveProfileFeatures());
}
async function canAccessPostgresDatabaseSettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canCreateDatabase(access, getActiveProfileFeatures());
}
async function canAccessMysqlDatabaseSettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canCreateDatabase(access, getActiveProfileFeatures());
}
async function canAccessTableSecuritySettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowTableSecuritySettings(access, getActiveProfileFeatures());
}
async function canAccessProjectSettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowProjectSettings(access, getActiveProfileFeatures());
}
async function canAccessAuthSecuritySettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowAuthSecuritySettings(access, getActiveProfileFeatures());
}
async function canAccessProjectOAuth2Server(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	const features = getActiveProfileFeatures();
	if (!features.oauth2Server) return false;
	if (!access) return true;
	return canShowProjectOAuth2Server(access, features);
}
async function canAccessBucketSecuritySettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowBucketSecuritySettings(access, getActiveProfileFeatures());
}
async function canAccessFunctionSecuritySettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowFunctionSecuritySettings(access, getActiveProfileFeatures());
}
async function canAccessSiteSettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowSiteSettingsTab(access, getActiveProfileFeatures());
}
async function canAccessTopicSettings(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowTopicSettingsTab(access, getActiveProfileFeatures());
}
async function canAccessOrganizationDomains(queryClient, organizationId) {
	const access = await getOrganizationAccess(queryClient, organizationId);
	if (!access) return true;
	return canAccessOrgDomains(access, getActiveProfileFeatures());
}
async function canAccessProjectOnboarding(queryClient, projectId) {
	const access = await getProjectAccess(queryClient, projectId);
	if (!access) return true;
	return canShowGetStartedSection(access, getActiveProfileFeatures());
}
export { canAccessMysqlDatabaseSettings as a, canAccessProjectOAuth2Server as c, canAccessSiteSettings as d, canAccessTableSecuritySettings as f, canAccessFunctionSecuritySettings as i, canAccessProjectOnboarding as l, canAccessBucketSecuritySettings as n, canAccessOrganizationDomains as o, canAccessTopicSettings as p, canAccessDatabaseSecuritySettings as r, canAccessPostgresDatabaseSettings as s, canAccessAuthSecuritySettings as t, canAccessProjectSettings as u };
