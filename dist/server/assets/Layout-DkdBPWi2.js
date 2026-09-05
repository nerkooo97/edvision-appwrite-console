import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { L as executionsFilterColumns, P as proxyRulesFilterColumns, R as deploymentsFilterColumns, pt as queryParamToMap, st as getQueryParam, ut as mapToQueryParam } from "./form-field-type-badge-C7qMzJo0.js";
import { Jt as siteDeploymentQueryOptions, gn as useSiteDeployment, kt as cancelSiteDeployment, mn as useProjectSite } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { V as canShowSiteSettingsTab } from "./console-access-checks-BTMEOKcL.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { n as useRefresh, t as RefreshProvider } from "./RefreshContext-CCamFujD.js";
import { a as CreateDeploymentProvider, i as CreateDeploymentDropdown, n as CreateCliDeploymentModal, r as CreateGitDeploymentModal, t as CreateManualDeploymentModal } from "./CreateManualDeploymentModal-CZJSSa3W.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Outlet, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import React, { useEffect, useMemo, useState } from "react";
import { useIsFetching, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, Info } from "lucide-react";
const DeploymentsToolbarContext = React.createContext(null);
function Layout() {
	return /* @__PURE__ */ jsx(RefreshProvider, { children: /* @__PURE__ */ jsx(SiteLayoutContent, {}) });
}
function SiteLayoutContent() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { triggerRefresh, hasRefreshHandler } = useRefresh();
	const siteLogsListRefreshing = useIsFetching({ queryKey: [
		"logs",
		"site",
		projectId,
		siteId
	] }) > 0;
	const siteUsageRefreshing = useIsFetching({
		queryKey: ["usage-events"],
		predicate: (query) => query.queryKey.includes(siteId)
	}) > 0;
	const { data: site } = useProjectSite(projectId, siteId);
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const sitesIndex = pathParts.findIndex((part) => part === "sites");
		if (sitesIndex >= 0 && pathParts[sitesIndex + 2]) {
			const tab = pathParts[sitesIndex + 2];
			if ([
				"deployments",
				"logs",
				"domains",
				"usage",
				"variables",
				"settings"
			].includes(tab)) return tab;
		}
		return "deployments";
	}, [location.pathname]);
	const activeDeploymentId = site?.deploymentId;
	const isLogsTab = activeTab === "logs";
	const cachedActiveDeployment = projectId && siteId && activeDeploymentId ? queryClient.getQueryData(siteDeploymentQueryOptions(projectId, siteId, activeDeploymentId).queryKey) : void 0;
	const { data: activeDeploymentFromQuery } = useSiteDeployment(projectId, siteId, isLogsTab ? void 0 : activeDeploymentId);
	const activeDeployment = activeDeploymentFromQuery ?? cachedActiveDeployment;
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSettingsTab = canShowSiteSettingsTab(access, features);
	const [cancelBuildDialogOpen, setCancelBuildDialogOpen] = useState(false);
	const [redeployDialogOpen, setRedeployDialogOpen] = useState(false);
	const cancelBuildMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !activeDeployment?.$id) throw new Error("Project ID, Site ID, and Deployment ID are required");
			return await cancelSiteDeployment(projectId, siteId, activeDeployment.$id);
		},
		onSuccess: async () => {
			setCancelBuildDialogOpen(false);
			await queryClient.refetchQueries({ queryKey: [
				"deployments",
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
			toast.success(t("Build cancelled"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to cancel build"));
		}
	});
	const redeployMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !activeDeployment) throw new Error("Project ID, Site ID, and Deployment ID are required");
			return await sdk.forProject(projectId).sites.createDuplicateDeployment({
				siteId,
				deploymentId: activeDeployment.$id
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"deployments",
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
			toast.success(t("Deployment rebuild started"));
			setRedeployDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to redeploy"));
		}
	});
	const handleCancelBuild = () => setCancelBuildDialogOpen(true);
	const isBuilding = useMemo(() => activeDeployment?.status === "building" || activeDeployment?.status === "processing", [activeDeployment?.status]);
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/sites",
			params: { projectId }
		});
	};
	const [gitDeployOpen, setGitDeployOpen] = useState(false);
	const [cliDeployOpen, setCliDeployOpen] = useState(false);
	const [manualDeployOpen, setManualDeployOpen] = useState(false);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const siteFilterMap = useMemo(() => {
		const search = location.search;
		return queryParamToMap(typeof search === "object" && search !== null && "query" in search ? search.query ?? null : getQueryParam(new URL(location.pathname + (typeof search === "string" ? search || "" : ""), typeof window !== "undefined" ? window.location.origin : "http://dummy")));
	}, [location.pathname, location.search]);
	const siteFilterColumns = useMemo(() => {
		if (activeTab === "deployments") return deploymentsFilterColumns;
		if (activeTab === "logs") return executionsFilterColumns;
		if (activeTab === "domains") return proxyRulesFilterColumns;
		return deploymentsFilterColumns;
	}, [activeTab]);
	const applySiteFilter = (key, queryStr, replaceKey) => {
		const newMap = new Map(siteFilterMap);
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
	const removeSiteFilter = (key) => {
		const newMap = new Map(siteFilterMap);
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
	const clearAllSiteFilters = () => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...typeof prev === "object" && prev !== null ? prev : {},
				query: void 0
			}),
			replace: true
		});
	};
	const tabs = useMemo(() => [
		{
			id: "deployments",
			label: t("Deployments"),
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId
			}
		},
		{
			id: "domains",
			label: t("Domains"),
			to: "/projects/$projectId/sites/$siteId/domains",
			params: {
				projectId,
				siteId
			}
		},
		{
			id: "logs",
			label: t("Logs"),
			to: "/projects/$projectId/sites/$siteId/logs",
			params: {
				projectId,
				siteId
			}
		},
		...features.usageStats ? [{
			id: "usage",
			label: t("Usage"),
			to: "/projects/$projectId/sites/$siteId/usage",
			params: {
				projectId,
				siteId
			}
		}] : [],
		...showSettingsTab ? [{
			id: "variables",
			label: t("Variables"),
			to: "/projects/$projectId/sites/$siteId/variables",
			params: {
				projectId,
				siteId
			}
		}, {
			id: "settings",
			label: t("Settings"),
			to: "/projects/$projectId/sites/$siteId/settings",
			params: {
				projectId,
				siteId
			}
		}] : []
	], [
		features.usageStats,
		projectId,
		siteId,
		showSettingsTab,
		t
	]);
	useEffect(() => {
		if (showSettingsTab || !projectId || !siteId) return;
		if (activeTab === "settings" || activeTab === "variables") navigate({
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId
			},
			replace: true
		});
	}, [
		showSettingsTab,
		activeTab,
		projectId,
		siteId,
		navigate
	]);
	const isLogsTabLayout = activeTab === "logs";
	const buildingAlert = isBuilding ? /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-blue-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("w-full px-4 py-3 sm:px-6", activeTab !== "logs" && "mx-auto max-w-7xl"),
			children: /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: "border-blue-500/30 bg-transparent",
				children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-500 shrink-0" }), /* @__PURE__ */ jsxs(AlertDescription, {
					className: "flex flex-1 items-center justify-between gap-3 text-[12px] text-blue-600/80 dark:text-blue-400/80",
					children: [/* @__PURE__ */ jsx("span", { children: t("Your site is currently being deployed.") }), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "shrink-0 border-blue-500/40 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/10",
						onClick: handleCancelBuild,
						disabled: cancelBuildMutation.isPending,
						children: t("Cancel build")
					})]
				})]
			})
		})
	}) : void 0;
	const configAlert = !isBuilding && site && !site.live ? /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-amber-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("w-full px-4 py-3 sm:px-6", activeTab !== "logs" && "mx-auto max-w-7xl"),
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
								children: t("You've updated site settings, but they won't take effect until you redeploy. The current deployment is still running with the previous settings.")
							})
						})]
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
						onClick: () => setRedeployDialogOpen(true),
						disabled: !site.deploymentId || !activeDeployment || redeployMutation.isPending,
						children: t("Redeploy")
					})]
				})]
			})
		})
	}) : void 0;
	return /* @__PURE__ */ jsxs(CreateDeploymentProvider, {
		onOpenGit: () => setGitDeployOpen(true),
		onOpenCli: () => setCliDeployOpen(true),
		onOpenManual: () => setManualDeployOpen(true),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex min-h-0 flex-1 flex-col", isLogsTabLayout && "h-full"),
				children: [
					/* @__PURE__ */ jsx("div", {
						className: cn(isLogsTabLayout && "sticky top-0 z-20 shrink-0 bg-background"),
						children: /* @__PURE__ */ jsx(ServiceHeader, {
							title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
								kind: "site",
								label: site?.name || t("Site"),
								resourceId: site?.$id ?? "",
								projectId,
								back: {
									onClick: handleBack,
									"aria-label": t("Back to sites")
								}
							}),
							tabs,
							activeTab,
							fullWidthBorder: true,
							fullWidth: activeTab === "logs",
							showToolbarBottomBorder: isLogsTabLayout,
							showFilters: activeTab === "logs" || activeTab === "domains",
							filterTrigger: activeTab === "logs" || activeTab === "domains" ? /* @__PURE__ */ jsx(FiltersPopover, {
								open: filtersOpen,
								onOpenChange: setFiltersOpen,
								columns: siteFilterColumns,
								filterMap: siteFilterMap,
								onRemoveFilter: removeSiteFilter,
								onClearAll: clearAllSiteFilters,
								onApplyFilter: applySiteFilter,
								resourceLabel: activeTab === "logs" ? t("logs") : t("domains"),
								filterScope: `sites.${activeTab}`,
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
							showRefresh: (activeTab === "logs" || activeTab === "usage") && hasRefreshHandler,
							onRefresh: activeTab === "logs" || activeTab === "usage" ? triggerRefresh : void 0,
							isRefreshing: activeTab === "usage" ? siteUsageRefreshing : siteLogsListRefreshing,
							createLabel: activeTab === "domains" ? t("Add domain") : void 0,
							createAnalyticsAction: activeTab === "domains" ? "create-site-domain" : void 0,
							onCreate: activeTab === "domains" ? () => navigate({
								to: "/projects/$projectId/sites/$siteId/domains/add",
								params: {
									projectId,
									siteId
								}
							}) : void 0,
							beforeCreateButtons: void 0,
							contentAfterBorder: buildingAlert || configAlert ? /* @__PURE__ */ jsxs("div", { children: [buildingAlert, configAlert] }) : void 0
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: cn("flex-1 min-h-0", isLogsTabLayout && "flex flex-col"),
						children: /* @__PURE__ */ jsx(DeploymentsToolbarContext.Provider, {
							value: activeTab === "deployments" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FiltersPopover, {
								open: filtersOpen,
								onOpenChange: setFiltersOpen,
								columns: siteFilterColumns,
								filterMap: siteFilterMap,
								onRemoveFilter: removeSiteFilter,
								onClearAll: clearAllSiteFilters,
								onApplyFilter: applySiteFilter,
								resourceLabel: t("deployments"),
								filterScope: "sites.deployments",
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
					site && siteId && projectId && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(CreateGitDeploymentModal, {
							open: gitDeployOpen,
							onOpenChange: setGitDeployOpen,
							resourceType: "site",
							projectId,
							resourceId: siteId,
							resource: site
						}),
						/* @__PURE__ */ jsx(CreateCliDeploymentModal, {
							open: cliDeployOpen,
							onOpenChange: setCliDeployOpen,
							resourceType: "site",
							projectId,
							resourceId: siteId,
							siteBuildConfig: {
								framework: site.framework,
								buildCommand: site.buildCommand,
								installCommand: site.installCommand,
								startCommand: site.startCommand,
								outputDirectory: site.outputDirectory
							}
						}),
						/* @__PURE__ */ jsx(CreateManualDeploymentModal, {
							open: manualDeployOpen,
							onOpenChange: setManualDeployOpen,
							resourceType: "site",
							projectId,
							resourceId: siteId
						})
					] })
				]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: cancelBuildDialogOpen,
				onOpenChange: setCancelBuildDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Cancel build") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Stop the current deployment? You can deploy again later.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-4",
							children: activeDeployment && /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment: activeDeployment,
								showStatus: true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setCancelBuildDialogOpen(false),
								className: "h-9 text-[13px]",
								children: t("Keep building")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => cancelBuildMutation.mutate(),
								disabled: cancelBuildMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Cancel build")
							})]
						})
					]
				})
			}),
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
								children: t("This will create a new build for this deployment using the current site configuration. The original deployment's code will be preserved and used for the new build.")
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
	});
}
export { Layout as n, DeploymentsToolbarContext as t };
