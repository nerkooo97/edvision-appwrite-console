function whenOrgRoles(_access, features, hasAccess) {
	return !features.orgRoles || hasAccess;
}
function canShowProjectSettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteProjects);
}
function canShowConnectSection(access, features) {
	return whenOrgRoles(access, features, access.isOwner || access.isDeveloper);
}
function canShowProjectTerminal(access, features) {
	return whenOrgRoles(access, features, access.isOwner || access.isDeveloper);
}
function canShowGetStartedSection(access, features) {
	return canShowConnectSection(access, features);
}
function canSaveTeamFilters(access, features) {
	return whenOrgRoles(access, features, access.isOwner || access.isDeveloper);
}
function canPinProjects(access, features) {
	return whenOrgRoles(access, features, access.isOwner || access.isDeveloper);
}
function canCreateProject(access, features) {
	return whenOrgRoles(access, features, access.canWriteProjects);
}
function canCreateDatabase(access, features) {
	return whenOrgRoles(access, features, access.canWriteDatabases);
}
function canCreateRow(access, features) {
	return whenOrgRoles(access, features, access.canWriteRows);
}
function canCreateBucket(access, features) {
	return whenOrgRoles(access, features, access.canWriteBuckets);
}
function canCreateFunction(access, features) {
	return whenOrgRoles(access, features, access.canWriteFunctions);
}
function canCreateSite(access, features) {
	return whenOrgRoles(access, features, access.canWriteSites);
}
function canCreateUser(access, features) {
	return whenOrgRoles(access, features, access.canWriteUsers);
}
function canCreateTeam(access, features) {
	return whenOrgRoles(access, features, access.canWriteTeams);
}
function canCreateKey(access, features) {
	return whenOrgRoles(access, features, access.canWriteKeys);
}
function canCreatePlatform(access, features) {
	return whenOrgRoles(access, features, access.canWritePlatforms);
}
function canWriteDomains(access, features) {
	return whenOrgRoles(access, features, access.canWriteDomains);
}
function canWriteWebhooks(access, features) {
	return whenOrgRoles(access, features, access.canWriteWebhooks);
}
function canCreateMigration(access, features) {
	return whenOrgRoles(access, features, access.canWriteMigrations);
}
function canWriteRules(access, features) {
	return whenOrgRoles(access, features, access.canWriteRules);
}
function canShowDatabaseSecuritySettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteDatabases);
}
function canShowTableSecuritySettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteTables);
}
function canShowBucketSecuritySettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteBuckets);
}
function canShowFunctionSecuritySettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteFunctions);
}
function canShowSiteSettingsTab(access, features) {
	return whenOrgRoles(access, features, access.canWriteSites);
}
function canShowAuthSecuritySettings(access, features) {
	return whenOrgRoles(access, features, access.canWriteUsers || access.canWriteTeams);
}
function canShowProjectOAuth2Server(access, features) {
	return !!features.oauth2Server && canShowAuthSecuritySettings(access, features);
}
function canShowTopicSettingsTab(access, features) {
	return whenOrgRoles(access, features, access.canWriteTopics);
}
function canSeeProjectNavItem(access, features, itemId) {
	if (!features.orgRoles) return true;
	switch (itemId) {
		case "apps":
		case "api-keys":
		case "explorer": return (access.isOwner || access.isDeveloper) && access.canSeeProjects;
		case "databases": return access.canSeeDatabases;
		case "storage": return access.canSeeBuckets;
		case "functions": return access.canSeeFunctions;
		case "messaging": return access.canSeeMessages;
		case "sites": return access.canWriteSites;
		case "usage":
		case "activity":
		case "realtime":
		case "analytics": return access.canSeeProjects;
		case "firewall": return access.canSeeProjects;
		default: return true;
	}
}
function canSeeUsageNav(access, features) {
	return !features.orgRoles || access.canSeeProjects;
}
function canSeeActivityNav(access, features) {
	return !features.orgRoles || access.canSeeProjects;
}
function canSeeProjects(access, features) {
	return whenOrgRoles(access, features, access.canSeeProjects);
}
function canShowOrgDomainsTab(access, features) {
	return !!(features.domains && (!features.orgRoles || access.isOwner || access.isDeveloper));
}
function canShowOrgMarketplaceTab(access, features) {
	return !!(features.marketplace && canSeeProjects(access, features));
}
function canShowOrgSettingsTab(access) {
	return access.isOwner || access.canSeeBilling || access.canSeeTeams;
}
function canAccessOrgSettingsOverview(access) {
	return access.isOwner;
}
function canAccessOrgSettingsMembers(access) {
	return access.canSeeTeams;
}
function canAccessOrgSettingsBilling(access) {
	return access.canSeeBilling;
}
function canAccessOrgSettingsCompliance(access) {
	return access.isOwner;
}
function canAccessOrgSettingsOAuthOrApiKeys(access) {
	return access.isOwner || access.isDeveloper;
}
function canShowOrgOAuthAppsSettings(access, features) {
	return !!features.oauthApps && canAccessOrgSettingsOAuthOrApiKeys(access);
}
function canShowOrgApiKeysSettings(access, features) {
	return !!features.orgApiKeys && canAccessOrgSettingsOAuthOrApiKeys(access);
}
function canAccessOrgDomains(access, features) {
	return whenOrgRoles(access, features, access.isOwner || access.isDeveloper);
}
function canShowOrgBillingNav(access, features) {
	return !!(features.billing && (!features.orgRoles || access.canSeeBilling));
}
function canShowOrgComplianceNav(access, features) {
	return !!(features.compliance && (!features.orgRoles || access.isOwner));
}
function canInviteOrgMember(access, features) {
	return whenOrgRoles(access, features, access.isOwner);
}
function canWriteMessages(access, features) {
	return whenOrgRoles(access, features, access.canWriteMessages);
}
function canWriteTopics(access, features) {
	return whenOrgRoles(access, features, access.canWriteTopics);
}
function canWriteProviders(access, features) {
	return whenOrgRoles(access, features, access.canWriteProviders);
}
function getFirstAllowedOrgSettingsPath(access, features, basePath) {
	if (canAccessOrgSettingsOverview(access)) return basePath;
	if (canAccessOrgSettingsMembers(access)) return `${basePath}/members`;
	if (canAccessOrgSettingsBilling(access)) return `${basePath}/billing`;
	if (canAccessOrgSettingsCompliance(access) && features.compliance) return `${basePath}/compliance`;
	if (canShowOrgOAuthAppsSettings(access, features)) return `${basePath}/oauth-apps`;
	if (canShowOrgApiKeysSettings(access, features)) return `${basePath}/api-keys`;
	return basePath;
}
function getFirstAllowedOrgOverviewPath(access, features) {
	if (canSeeProjects(access, features)) return "/organizations/$orgId";
	if (canShowOrgMarketplaceTab(access, features)) return "/organizations/$orgId/marketplace/";
	if (canShowOrgDomainsTab(access, features)) return "/organizations/$orgId/domains/";
	if (canShowOrgSettingsTab(access)) return getFirstAllowedOrgSettingsPath(access, features, "/organizations/$orgId/settings");
	return "/organizations/$orgId";
}
function canAccessOrgOverviewTab(access, features, tab) {
	if (tab === "projects") return canSeeProjects(access, features);
	if (tab === "marketplace") return canShowOrgMarketplaceTab(access, features);
	if (tab === "domains") return canShowOrgDomainsTab(access, features);
	return canShowOrgSettingsTab(access);
}
export { canShowGetStartedSection as A, canShowProjectTerminal as B, canSeeProjects as C, canShowConnectSection as D, canShowBucketSecuritySettings as E, canShowOrgMarketplaceTab as F, canWriteMessages as G, canShowTableSecuritySettings as H, canShowOrgOAuthAppsSettings as I, canWriteTopics as J, canWriteProviders as K, canShowOrgSettingsTab as L, canShowOrgBillingNav as M, canShowOrgComplianceNav as N, canShowDatabaseSecuritySettings as O, canShowOrgDomainsTab as P, canShowProjectOAuth2Server as R, canSeeProjectNavItem as S, canShowAuthSecuritySettings as T, canShowTopicSettingsTab as U, canShowSiteSettingsTab as V, canWriteDomains as W, getFirstAllowedOrgOverviewPath as X, canWriteWebhooks as Y, getFirstAllowedOrgSettingsPath as Z, canCreateUser as _, canAccessOrgSettingsMembers as a, canSaveTeamFilters as b, canCreateDatabase as c, canCreateMigration as d, canCreatePlatform as f, canCreateTeam as g, canCreateSite as h, canAccessOrgSettingsCompliance as i, canShowOrgApiKeysSettings as j, canShowFunctionSecuritySettings as k, canCreateFunction as l, canCreateRow as m, canAccessOrgOverviewTab as n, canAccessOrgSettingsOverview as o, canCreateProject as p, canWriteRules as q, canAccessOrgSettingsBilling as r, canCreateBucket as s, canAccessOrgDomains as t, canCreateKey as u, canInviteOrgMember as v, canSeeUsageNav as w, canSeeActivityNav as x, canPinProjects as y, canShowProjectSettings as z };
