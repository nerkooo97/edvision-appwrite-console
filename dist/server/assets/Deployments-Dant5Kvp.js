import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk, u as getSiteScreenshotFilePreviewUrl } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as DOMAINS_DEFAULT_PAGE_SIZE, o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { bt as formatDecimalBytes, ot as getPage, pt as queryParamToMap, st as getQueryParam } from "./form-field-type-badge-C7qMzJo0.js";
import { At as deleteSiteDeployment, _n as useSiteDeployments, gn as useSiteDeployment, kt as cancelSiteDeployment, mn as useProjectSite, vn as useSiteDomains } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, d as DropdownMenuSubContent, f as DropdownMenuSubTrigger, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuSub } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { n as MenuItemContent, r as MenuItemIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { a as isDeploymentTimeout, i as isDeploymentInProgress, n as getDeploymentStatusBadge, r as isDeploymentCompleted, t as DEPLOYMENT_TABLE_STATUS_COLUMN_CLASS } from "./deployment-status-gtgbrodz.js";
import { t as getDeploymentRepositoryWebUrl } from "./deployment-repository-url-C0skr3dd.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { n as SITE_SCREENSHOT_CARD_HEIGHT, r as SITE_SCREENSHOT_CARD_WIDTH, t as SITE_SCREENSHOTS_BUCKET_ID } from "./screenshot-preview-sizes-CXYa3cGX.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { i as proxyRuleServesActiveDeployment } from "./proxy-domains-BLLl99AI.js";
import { t as DeploymentListRowContextMenu } from "./DeploymentListRowContextMenu-sAjjPHEk.js";
import { i as CreateDeploymentDropdown, o as useCreateDeployment } from "./CreateManualDeploymentModal-CZJSSa3W.js";
import { n as mergeActiveDeploymentForCard } from "./deployment-screenshots-rgzxpb3Q.js";
import { t as DeploymentsToolbarContext } from "./Layout-DkdBPWi2.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { DeploymentDownloadType, ImageFormat, Query } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckCircle2, ChevronDown, Clock, Download, ExternalLink, FileCode, GitBranch, GitCommit, Globe, HelpCircle, Moon, Package, Play, RefreshCw, ScrollText, Shield, Sun, Trash2, XCircle } from "lucide-react";
import { useTheme } from "next-themes";
var DEPLOYMENTS_SELECT = [Query.select([
	"buildSize",
	"sourceSize",
	"totalSize",
	"buildDuration",
	"status",
	"type",
	"resourceId",
	"providerRepositoryUrl",
	"providerRepositoryOwner",
	"providerRepositoryName",
	"providerBranchUrl",
	"providerBranch",
	"providerCommitMessage",
	"providerCommitHash",
	"providerCommitUrl",
	"providerCommitAuthor",
	"providerCommitAuthorUrl",
	"screenshotDark",
	"screenshotLight",
	"$createdAt"
])];
function formatSize(bytes) {
	return formatDecimalBytes(bytes);
}
function formatDuration(seconds) {
	if (seconds < 60) return `${seconds}s`;
	return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
function detectVcsProvider(deployment) {
	if (deployment.providerRepositoryUrl) {
		const url = deployment.providerRepositoryUrl.toLowerCase();
		if (url.includes("github.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("github");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("gitlab.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("gitlab");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("bitbucket.org") || url.includes("bitbucket.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("bitbucket");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("cursor.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("origin");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
	}
	if (deployment.type === "git" || deployment.type === "vcs") {
		if (deployment.providerRepositoryUrl || deployment.providerRepositoryId) return {
			name: "Git",
			icon: /* @__PURE__ */ jsx(GitBranch, { className: "h-4 w-4" })
		};
	}
	return null;
}
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const location = useLocation();
	const isDeploymentsListPage = useMemo(() => {
		const path = location.pathname.replace(/\/$/, "");
		const base = `/projects/${projectId}/sites/${siteId}`;
		return path === base || path === `${base}/deployments`;
	}, [
		location.pathname,
		projectId,
		siteId
	]);
	const deploymentsListParams = useMemo(() => {
		if (!isDeploymentsListPage) return null;
		const locSearch = location.search;
		const queryParam = typeof locSearch === "object" && locSearch !== null && "query" in locSearch ? locSearch.query ?? null : getQueryParam(new URL(location.pathname + (typeof locSearch === "string" ? locSearch || "" : ""), typeof window !== "undefined" ? window.location.origin : "http://dummy"));
		return {
			page: getPage(new URL(location.pathname + (typeof locSearch === "string" ? locSearch || "" : ""), typeof window !== "undefined" ? window.location.origin : "http://dummy"), 1),
			filterMap: queryParamToMap(queryParam)
		};
	}, [
		isDeploymentsListPage,
		location.pathname,
		location.search
	]);
	const urlPage = useMemo(() => {
		const search = location.search;
		if (search && typeof search === "object" && "page" in search) {
			const p = search.page;
			if (typeof p === "number" && p >= 1) return p;
		}
		if (deploymentsListParams?.page != null) return deploymentsListParams.page;
		const pageParam = new URLSearchParams(typeof search === "string" ? search : "").get("page");
		return pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
	}, [deploymentsListParams?.page, location.search]);
	const deploymentsFilterMap = deploymentsListParams?.filterMap ?? /* @__PURE__ */ new Map();
	const deploymentsFilterQueries = deploymentsFilterMap.size > 0 ? Array.from(deploymentsFilterMap.values()) : void 0;
	const deploymentsQueries = useMemo(() => [...deploymentsFilterQueries ?? [], ...DEPLOYMENTS_SELECT], [deploymentsFilterQueries]);
	const [displayedPage, setDisplayedPage] = useState(urlPage - 1);
	const [requestedPage, setRequestedPage] = useState(urlPage - 1);
	const [pageSize, setPageSize] = useState(10);
	const [selectedDeployments, setSelectedDeployments] = useState(/* @__PURE__ */ new Set());
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteActiveDialogOpen, setDeleteActiveDialogOpen] = useState(false);
	const [cancelBuildDialogOpen, setCancelBuildDialogOpen] = useState(false);
	const [cancelTargetDeploymentId, setCancelTargetDeploymentId] = useState(null);
	const [redeployDialogOpen, setRedeployDialogOpen] = useState(false);
	const [activateDialogOpen, setActivateDialogOpen] = useState(false);
	const [screenshotLoaded, setScreenshotLoaded] = useState(false);
	const [screenshotThemeOverride, setScreenshotThemeOverride] = useState(null);
	const avifSupported = useAvifSupport();
	const scrollContainerRef = useRef(null);
	const deploymentsToolbar = useContext(DeploymentsToolbarContext);
	const { theme, resolvedTheme } = useTheme();
	const isDark = useMemo(() => resolvedTheme === "dark" || theme === "dark" || typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches, [theme, resolvedTheme]);
	const { data: site, isLoading: siteLoading } = useProjectSite(projectId, siteId);
	useEffect(() => {
		const newRequestedPage = urlPage - 1;
		if (newRequestedPage !== requestedPage) setRequestedPage(newRequestedPage);
	}, [urlPage, requestedPage]);
	const { total, isLoading: deploymentsLoading, isFetching: deploymentsFetching } = useSiteDeployments(projectId, siteId, requestedPage, pageSize, deploymentsQueries);
	const { deployments: displayedDeployments, total: displayedTotal } = useSiteDeployments(projectId, siteId, displayedPage, pageSize, deploymentsQueries);
	useEffect(() => {
		if (!deploymentsFetching && requestedPage !== displayedPage && !deploymentsLoading) setDisplayedPage(requestedPage);
	}, [
		deploymentsFetching,
		deploymentsLoading,
		requestedPage,
		displayedPage
	]);
	const lastDeploymentsRef = useRef([]);
	useEffect(() => {
		if (!deploymentsFetching && displayedDeployments.length > 0) lastDeploymentsRef.current = displayedDeployments;
	}, [deploymentsFetching, displayedDeployments]);
	const deployments = deploymentsFetching && lastDeploymentsRef.current.length > 0 ? lastDeploymentsRef.current : displayedDeployments;
	useLayoutEffect(() => {
		if (deployments.length > 0 && displayedPage !== void 0) {
			const element = scrollContainerRef.current;
			if (element) {
				let parent = element.parentElement;
				while (parent) {
					const style = window.getComputedStyle(parent);
					if (style.overflowY === "auto" || style.overflowY === "scroll") {
						parent.scrollTop = 0;
						break;
					}
					parent = parent.parentElement;
				}
			}
		}
	}, [displayedPage, deployments.length]);
	const { data: activeDeployment } = useSiteDeployment(projectId, siteId, site?.deploymentId || void 0);
	const activeDeploymentResolved = useMemo(() => {
		if (!site?.deploymentId) return activeDeployment ?? void 0;
		return deployments.find((d) => d.$id === site.deploymentId) ?? activeDeployment ?? void 0;
	}, [
		deployments,
		site?.deploymentId,
		activeDeployment
	]);
	const [, setTick] = useState(0);
	const hasInProgressDeployment = useMemo(() => (deployments?.some((d) => isDeploymentInProgress(d.status)) ?? false) || activeDeploymentResolved != null && isDeploymentInProgress(activeDeploymentResolved.status), [deployments, activeDeploymentResolved]);
	useEffect(() => {
		if (!hasInProgressDeployment) return;
		const interval = setInterval(() => setTick((t$1) => t$1 + 1), 1e3);
		return () => clearInterval(interval);
	}, [hasInProgressDeployment]);
	useEffect(() => {
		if (!projectId || !siteId) return;
		if (!queryClient.getQueriesData({
			queryKey: [
				"deployments",
				"site",
				projectId,
				siteId
			],
			exact: false
		}).some(([, data]) => data?.deployments?.some((d) => isDeploymentInProgress(d.status)))) return;
		queryClient.refetchQueries({
			queryKey: [
				"deployments",
				"site",
				projectId,
				siteId
			],
			exact: false
		});
	}, [
		projectId,
		siteId,
		queryClient
	]);
	const screenshotTheme = screenshotThemeOverride ?? (resolvedTheme === "dark" || resolvedTheme === "light" ? resolvedTheme : isDark ? "dark" : "light");
	useEffect(() => {
		setScreenshotLoaded(false);
	}, [activeDeploymentResolved?.$id, screenshotTheme]);
	const { rules: siteDomainsRules } = useSiteDomains(projectId, siteId, 0, 25, "");
	const activeDeploymentIdForDomains = activeDeploymentResolved?.$id ?? site?.deploymentId;
	const activeDomains = useMemo(() => {
		return (siteDomainsRules?.filter((rule) => proxyRuleServesActiveDeployment(rule, activeDeploymentIdForDomains)) || []).sort((a, b) => a.domain.length - b.domain.length).slice(0, 3);
	}, [siteDomainsRules, activeDeploymentIdForDomains]);
	const totalActiveDomains = useMemo(() => siteDomainsRules?.filter((rule) => proxyRuleServesActiveDeployment(rule, activeDeploymentIdForDomains)).length ?? 0, [siteDomainsRules, activeDeploymentIdForDomains]);
	const hasMoreDomains = totalActiveDomains > activeDomains.length;
	const vcsProvider = activeDeploymentResolved ? detectVcsProvider(activeDeploymentResolved) : null;
	useEffect(() => {
		setSelectedDeployments(/* @__PURE__ */ new Set());
		setDeleteDialogOpen(false);
	}, [displayedPage]);
	const isBuilding = activeDeploymentResolved != null && isDeploymentInProgress(activeDeploymentResolved.status);
	const activeDeploymentForCard = useMemo(() => mergeActiveDeploymentForCard(activeDeployment, activeDeploymentResolved), [activeDeployment, activeDeploymentResolved]);
	const handleDownloadSource = () => {
		if (!projectId || !siteId || !activeDeploymentResolved) return;
		try {
			const url = sdk.forProject(projectId).sites.getDeploymentDownload({
				siteId,
				deploymentId: activeDeploymentResolved.$id,
				type: DeploymentDownloadType.Source
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download source code"));
		}
	};
	const handleDownloadBuild = () => {
		if (!projectId || !siteId || !activeDeploymentResolved) return;
		try {
			const url = sdk.forProject(projectId).sites.getDeploymentDownload({
				siteId,
				deploymentId: activeDeploymentResolved.$id,
				type: DeploymentDownloadType.Output
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download build output"));
		}
	};
	const redeployMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !activeDeploymentResolved) throw new Error("Project ID, Site ID, and Deployment ID are required");
			return await sdk.forProject(projectId).sites.createDuplicateDeployment({
				siteId,
				deploymentId: activeDeploymentResolved.$id
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
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
	const activateMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !activeDeploymentResolved) throw new Error("Project ID, Site ID, and Deployment ID are required");
			return await sdk.forProject(projectId).sites.updateSiteDeployment({
				siteId,
				deploymentId: activeDeploymentResolved.$id
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
			await queryClient.refetchQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			toast.success(t("Deployment activated successfully"));
			setActivateDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to activate deployment"));
		}
	});
	const cancelBuildMutation = useMutation({
		mutationFn: async (deploymentIdToCancel) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			return await cancelSiteDeployment(projectId, siteId, deploymentIdToCancel);
		},
		onSuccess: async () => {
			setCancelBuildDialogOpen(false);
			setCancelTargetDeploymentId(null);
			await queryClient.refetchQueries({ queryKey: Dependencies.DEPLOYMENTS });
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
	const deleteActiveMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !activeDeploymentResolved) throw new Error("Project ID, Site ID, and Deployment ID are required");
			throw new Error(t("Cannot delete the active deployment. Please activate another deployment first."));
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
			queryClient.invalidateQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			toast.success(t("Deployment deleted successfully"));
			setDeleteActiveDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete deployment"));
		}
	});
	const bulkDeleteMutation = useMutation({
		mutationFn: async (deploymentIds) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			const activeDeploymentId = activeDeploymentResolved?.$id;
			if (activeDeploymentId && deploymentIds.includes(activeDeploymentId)) throw new Error(t("Cannot delete the active deployment. Please activate another deployment first."));
			await Promise.all(deploymentIds.map((deploymentId) => deleteSiteDeployment(projectId, siteId, deploymentId)));
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: Dependencies.DEPLOYMENTS });
			await queryClient.refetchQueries({ queryKey: [
				"site",
				"project",
				projectId,
				siteId
			] });
			toast.success(selectedDeployments.size === 1 ? t("Deployment deleted successfully") : `${t("Successfully deleted")} ${selectedDeployments.size} ${t("deployments")}`);
			setSelectedDeployments(/* @__PURE__ */ new Set());
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete deployments"));
		}
	});
	const handleBulkDelete = () => {
		if (selectedDeployments.size === 0) return;
		setDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedDeployments.size === 0) return;
		const ids = Array.from(selectedDeployments);
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
		});
		bulkDeleteMutation.mutate(ids);
	};
	const toggleDeployment = (deploymentId) => {
		const newSelected = new Set(selectedDeployments);
		if (newSelected.has(deploymentId)) newSelected.delete(deploymentId);
		else newSelected.add(deploymentId);
		setSelectedDeployments(newSelected);
	};
	const toggleAllDeployments = () => {
		const activeDeploymentId = activeDeploymentResolved?.$id;
		const selectableDeployments = deployments.filter((d) => d.$id !== activeDeploymentId);
		if (selectedDeployments.size === selectableDeployments.length) setSelectedDeployments(/* @__PURE__ */ new Set());
		else setSelectedDeployments(new Set(selectableDeployments.map((d) => d.$id)));
	};
	const handlePageChange = (page) => {
		navigate({
			to: location.pathname,
			search: (prev) => ({
				...prev,
				page: page === 1 ? void 0 : page
			}),
			replace: true
		});
		setSelectedDeployments(/* @__PURE__ */ new Set());
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
		setRequestedPage(0);
		setDisplayedPage(0);
		setSelectedDeployments(/* @__PURE__ */ new Set());
	};
	const createDeployment = useCreateDeployment();
	if ((siteLoading || deploymentsLoading) && deployments.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading deployments...")
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		ref: scrollContainerRef,
		className: "flex-1",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-7xl px-4 pt-6 pb-4 sm:px-6 sm:pt-6 sm:pb-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-6",
						children: [activeDeploymentResolved && (() => {
							const cardDeployment = activeDeploymentForCard ?? activeDeploymentResolved;
							return /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 overflow-hidden",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "px-6 py-4 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Active deployment")
											}), isBuilding && /* @__PURE__ */ jsx(Badge, {
												variant: "deploymentBuilding",
												className: "text-[10px] shrink-0",
												children: t("Building")
											})]
										}), isBuilding && /* @__PURE__ */ jsx(Button, {
											variant: "outline",
											size: "sm",
											className: "shrink-0 h-8 text-[12px]",
											onClick: () => {
												setCancelTargetDeploymentId(activeDeploymentResolved?.$id ?? null);
												setCancelBuildDialogOpen(true);
											},
											disabled: cancelBuildMutation.isPending,
											children: t("Cancel build")
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col lg:flex-row gap-6",
											children: [/* @__PURE__ */ jsx("div", {
												className: "w-full lg:w-1/2 shrink-0 min-w-0",
												children: /* @__PURE__ */ jsx("div", {
													className: "w-full aspect-video rounded-lg border border-border overflow-hidden bg-muted relative",
													children: (() => {
														const screenshotId = screenshotTheme === "dark" ? cardDeployment.screenshotDark : cardDeployment.screenshotLight;
														if (screenshotId && projectId) return /* @__PURE__ */ jsxs("div", {
															className: "absolute inset-0 group",
															children: [
																/* @__PURE__ */ jsx("img", {
																	src: getSiteScreenshotFilePreviewUrl(projectId, {
																		bucketId: "screenshots",
																		fileId: screenshotId,
																		width: 640,
																		height: 360,
																		output: avifSupported ? ImageFormat.Avif : void 0
																	}),
																	alt: t("Deployment screenshot"),
																	onLoad: () => setScreenshotLoaded(true),
																	className: cn("w-full h-full object-cover transition-opacity duration-500", screenshotLoaded ? "opacity-100" : "opacity-0")
																}, screenshotId),
																site && /* @__PURE__ */ jsx("div", {
																	className: "absolute bottom-2 start-2",
																	children: /* @__PURE__ */ jsx("div", {
																		className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-background/95 backdrop-blur-sm",
																		children: /* @__PURE__ */ jsx(FrameworkIcon, {
																			framework: site.buildFramework || site.buildFrameworkId || site.framework,
																			size: "sm"
																		})
																	})
																}),
																/* @__PURE__ */ jsx("div", {
																	className: "absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-opacity",
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex items-center gap-1 rounded-lg border border-border bg-background/95 backdrop-blur-sm p-1",
																		children: [/* @__PURE__ */ jsx("button", {
																			onClick: () => {
																				setScreenshotThemeOverride("light");
																				setScreenshotLoaded(false);
																			},
																			className: cn("p-1.5 rounded transition-colors", screenshotTheme === "light" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"),
																			title: t("Light screenshot"),
																			children: /* @__PURE__ */ jsx(Sun, { className: "h-3.5 w-3.5" })
																		}), /* @__PURE__ */ jsx("button", {
																			onClick: () => {
																				setScreenshotThemeOverride("dark");
																				setScreenshotLoaded(false);
																			},
																			className: cn("p-1.5 rounded transition-colors", screenshotTheme === "dark" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"),
																			title: t("Dark screenshot"),
																			children: /* @__PURE__ */ jsx(Moon, { className: "h-3.5 w-3.5" })
																		})]
																	})
																})
															]
														});
														return /* @__PURE__ */ jsxs("div", {
															className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 via-muted/30 to-muted/20",
															children: [
																/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" }),
																/* @__PURE__ */ jsx("p", {
																	className: "relative text-[12px] font-medium text-muted-foreground/60",
																	children: t("Preview not available")
																}),
																site && /* @__PURE__ */ jsx("div", {
																	className: "absolute bottom-2 start-2",
																	children: /* @__PURE__ */ jsx("div", {
																		className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-background/95 backdrop-blur-sm",
																		children: /* @__PURE__ */ jsx(FrameworkIcon, {
																			framework: site.buildFramework || site.buildFrameworkId || site.framework,
																			size: "sm"
																		})
																	})
																})
															]
														});
													})()
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex-1 lg:w-1/2",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
													children: [
														/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-muted-foreground mb-1.5",
															children: t("Deployed")
														}), /* @__PURE__ */ jsx("div", {
															className: "text-[13px] text-foreground",
															children: /* @__PURE__ */ jsx(DateTooltip, { date: cardDeployment.$createdAt })
														})] }),
														(cardDeployment.buildDuration || isDeploymentInProgress(cardDeployment.status)) && !isDeploymentTimeout(cardDeployment.status, cardDeployment.$createdAt) && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-muted-foreground mb-1.5",
															children: t("Build duration")
														}), /* @__PURE__ */ jsx("div", {
															className: "text-[13px] text-foreground",
															children: isDeploymentInProgress(cardDeployment.status) ? formatDuration(Math.max(0, Math.floor((Date.now() - new Date(cardDeployment.$createdAt).getTime()) / 1e3))) : formatDuration(cardDeployment.buildDuration)
														})] }),
														/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-muted-foreground mb-1.5",
															children: t("Total size")
														}), /* @__PURE__ */ jsx("div", {
															className: "text-[13px] text-foreground",
															children: formatSize((cardDeployment.buildSize || 0) + (cardDeployment.sourceSize || 0))
														})] }),
														vcsProvider && cardDeployment.providerRepositoryOwner && cardDeployment.providerRepositoryName && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-muted-foreground mb-1.5",
															children: t("Source")
														}), /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 text-[13px] text-foreground min-w-0",
															children: [vcsProvider.icon, (() => {
																const repoUrl = getDeploymentRepositoryWebUrl(cardDeployment);
																const label = `${cardDeployment.providerRepositoryOwner}/${cardDeployment.providerRepositoryName}`;
																return repoUrl ? /* @__PURE__ */ jsx("a", {
																	href: repoUrl,
																	target: "_blank",
																	rel: "noopener noreferrer",
																	className: "truncate link-neutral",
																	onClick: (e) => e.stopPropagation(),
																	children: label
																}) : /* @__PURE__ */ jsx("span", {
																	className: "truncate",
																	children: label
																});
															})()]
														})] }),
														/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 text-[12px] text-muted-foreground mb-1.5",
															children: [/* @__PURE__ */ jsx("span", { children: t("Global CDN") }), /* @__PURE__ */ jsx(TooltipProvider, {
																delayDuration: 0,
																children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																	asChild: true,
																	children: /* @__PURE__ */ jsx("button", {
																		type: "button",
																		className: "inline-flex items-center justify-center",
																		onClick: (e) => e.stopPropagation(),
																		children: /* @__PURE__ */ jsx(HelpCircle, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-foreground" })
																	})
																}), /* @__PURE__ */ jsxs(TooltipContent, {
																	side: "right",
																	className: "max-w-xs",
																	children: [
																		/* @__PURE__ */ jsx("p", {
																			className: "text-[12px] font-medium mb-1.5 text-background",
																			children: t("Content Delivery Network")
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "text-[11px] text-background/90",
																			children: t("Appwrite's CDN provides global coverage with 120+ points of presence worldwide, reducing latency through edge caching and content optimization. All content is delivered over TLS for secure, encrypted connections.")
																		}),
																		/* @__PURE__ */ jsx(DocsRouteLink, {
																			href: "/docs/products/network/cdn",
																			className: "link-neutral text-[11px] mt-1.5 inline-block",
																			onClick: (e) => e.stopPropagation(),
																			children: t("Learn more →")
																		})
																	]
																})] })
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }), /* @__PURE__ */ jsx("span", {
																className: "text-[13px] font-medium text-foreground",
																children: t("Connected")
															})]
														})] }),
														/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 text-[12px] text-muted-foreground mb-1.5",
															children: [/* @__PURE__ */ jsx("span", { children: t("DDoS protection") }), /* @__PURE__ */ jsx(TooltipProvider, {
																delayDuration: 0,
																children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																	asChild: true,
																	children: /* @__PURE__ */ jsx("button", {
																		type: "button",
																		className: "inline-flex items-center justify-center",
																		onClick: (e) => e.stopPropagation(),
																		children: /* @__PURE__ */ jsx(HelpCircle, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-foreground" })
																	})
																}), /* @__PURE__ */ jsxs(TooltipContent, {
																	side: "right",
																	className: "max-w-xs",
																	children: [
																		/* @__PURE__ */ jsx("p", {
																			className: "text-[12px] font-medium mb-1.5 text-background",
																			children: t("DDoS Mitigation")
																		}),
																		/* @__PURE__ */ jsx("p", {
																			className: "text-[11px] text-background/90",
																			children: t("Appwrite's network includes built-in DDoS mitigation to protect against distributed denial-of-service attacks, ensuring uninterrupted access to your sites and maintaining high availability even during high traffic loads.")
																		}),
																		/* @__PURE__ */ jsx(DocsRouteLink, {
																			href: "/docs/products/network",
																			className: "link-neutral text-[11px] mt-1.5 inline-block",
																			onClick: (e) => e.stopPropagation(),
																			children: t("Learn more →")
																		})
																	]
																})] })
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-500" }), /* @__PURE__ */ jsx("span", {
																className: "text-[13px] font-medium text-foreground",
																children: t("Active")
															})]
														})] })
													]
												}), /* @__PURE__ */ jsxs("div", {
													className: "mt-4 pt-4 border-t border-border",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-muted-foreground mb-1.5",
															children: t("Domains")
														}),
														/* @__PURE__ */ jsx("div", {
															className: "flex flex-col gap-1",
															children: activeDomains.map((rule) => /* @__PURE__ */ jsxs("a", {
																href: domainUrl(rule.domain),
																target: "_blank",
																rel: "noopener noreferrer",
																className: "inline-flex min-w-0 max-w-full items-center gap-1.5 text-[13px] font-mono link-neutral",
																children: [/* @__PURE__ */ jsx("span", {
																	className: "truncate",
																	children: rule.domain
																}), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0 text-muted-foreground" })]
															}, rule.$id))
														}),
														hasMoreDomains && /* @__PURE__ */ jsxs("p", {
															className: "text-[11px] text-muted-foreground mt-1.5",
															children: [
																"+",
																totalActiveDomains - activeDomains.length,
																" ",
																t("more")
															]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: cn(RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, "flex flex-wrap items-center gap-2"),
															children: [
																/* @__PURE__ */ jsx(Button, {
																	variant: "link",
																	size: "sm",
																	className: "h-auto p-0 text-[13px] font-medium",
																	asChild: true,
																	children: /* @__PURE__ */ jsxs(Link, {
																		to: "/projects/$projectId/sites/$siteId/domains",
																		params: {
																			projectId,
																			siteId
																		},
																		children: [t("View all domains"), hasMoreDomains && /* @__PURE__ */ jsxs(Badge, {
																			variant: "secondary",
																			className: "ms-1.5 h-4 min-w-4 px-1 text-[10px] font-semibold tabular-nums",
																			children: ["+", totalActiveDomains - activeDomains.length]
																		})]
																	})
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "text-muted-foreground/60",
																	children: "·"
																}),
																/* @__PURE__ */ jsx(Button, {
																	variant: "link",
																	size: "sm",
																	className: "h-auto p-0 text-[13px] font-medium",
																	asChild: true,
																	children: /* @__PURE__ */ jsx(Link, {
																		to: "/projects/$projectId/sites/$siteId/domains",
																		params: {
																			projectId,
																			siteId
																		},
																		children: t("Add domain")
																	})
																})
															]
														})
													]
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end [&>*]:w-full sm:[&>*]:w-auto [&_button]:w-full [&_button]:justify-start sm:[&_button]:w-auto sm:[&_button]:justify-center [&_a]:w-full [&_a]:justify-start sm:[&_a]:w-auto sm:[&_a]:justify-center",
										children: [
											/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsxs(Button, {
													variant: "outline",
													size: "sm",
													className: "h-9 text-[13px]",
													children: [
														/* @__PURE__ */ jsx(Download, { className: "me-1.5 h-4 w-4" }),
														t("Download"),
														/* @__PURE__ */ jsx(ChevronDown, { className: "ms-auto sm:ms-1.5 h-3.5 w-3.5" })
													]
												})
											}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
												align: "end",
												className: "z-[200]",
												children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: handleDownloadSource,
													children: t("Source code")
												}), /* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: handleDownloadBuild,
													disabled: !isDeploymentCompleted(activeDeploymentResolved?.status),
													title: !isDeploymentCompleted(activeDeploymentResolved?.status) ? t("Build output is available after the deployment has completed.") : void 0,
													children: t("Build output")
												})]
											})] }),
											/* @__PURE__ */ jsxs(Button, {
												variant: "outline",
												size: "sm",
												onClick: () => setRedeployDialogOpen(true),
												disabled: redeployMutation.isPending,
												className: "h-9 text-[13px]",
												children: [/* @__PURE__ */ jsx(RefreshCw, { className: "me-1.5 h-4 w-4" }), t("Redeploy")]
											}),
											/* @__PURE__ */ jsx(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: "h-9 text-[13px]",
												children: /* @__PURE__ */ jsxs(Link, {
													to: "/projects/$projectId/sites/$siteId/deployments/$deploymentId",
													params: {
														projectId,
														siteId,
														deploymentId: activeDeploymentResolved.$id
													},
													children: [/* @__PURE__ */ jsx(ScrollText, { className: "me-1.5 h-4 w-4" }), t("Build logs")]
												})
											}),
											activeDomains.length > 0 ? /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsxs(Button, {
													variant: "outline",
													size: "sm",
													className: "h-9 text-[13px]",
													children: [/* @__PURE__ */ jsx(Globe, { className: "me-1.5 h-4 w-4" }), t("Visit")]
												})
											}), /* @__PURE__ */ jsx(PopoverContent, {
												align: "end",
												className: "z-[200] w-80",
												children: /* @__PURE__ */ jsx("div", {
													className: "space-y-3",
													children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
														className: "text-[13px] font-semibold text-foreground mb-2",
														children: t("Domains")
													}), /* @__PURE__ */ jsxs("div", {
														className: "space-y-1.5",
														children: [activeDomains.map((rule) => /* @__PURE__ */ jsxs("a", {
															href: domainUrl(rule.domain),
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors group",
															children: [
																/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground shrink-0" }),
																/* @__PURE__ */ jsx("span", {
																	className: "text-[12px] font-mono text-foreground group-hover:text-foreground flex-1 truncate",
																	children: rule.domain
																}),
																/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground group-hover:text-foreground shrink-0" })
															]
														}, rule.$id)), hasMoreDomains && /* @__PURE__ */ jsx(Link, {
															to: "/projects/$projectId/sites/$siteId/domains",
															params: {
																projectId,
																siteId
															},
															className: "flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors text-[12px] text-muted-foreground hover:text-foreground",
															children: /* @__PURE__ */ jsxs("span", { children: [
																t("View all"),
																" ",
																totalActiveDomains,
																" ",
																t("domains")
															] })
														})]
													})] })
												})
											})] }) : /* @__PURE__ */ jsxs(Button, {
												variant: "outline",
												size: "sm",
												className: "h-9 text-[13px]",
												disabled: true,
												children: [/* @__PURE__ */ jsx(Globe, { className: "me-1.5 h-4 w-4" }), t("Visit")]
											})
										]
									})
								]
							});
						})(), !activeDeploymentResolved && !isBuilding && /* @__PURE__ */ jsx("div", {
							className: "flex h-full items-center justify-center py-16",
							children: /* @__PURE__ */ jsxs("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted ring-1 ring-border",
										children: /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-muted-foreground" })
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-1 text-[14px] font-medium text-foreground",
										children: t("There is no active deployment")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-4 text-[13px] text-muted-foreground",
										children: t("Create your first deployment to activate this site.")
									}),
									createDeployment && /* @__PURE__ */ jsx(CreateDeploymentDropdown, {
										onSelectGit: createDeployment.openGitModal,
										onSelectCli: createDeployment.openCliModal,
										onSelectManual: createDeployment.openManualModal
									})
								]
							})
						})]
					}),
					deploymentsToolbar ? /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap items-center justify-between gap-4 mt-6",
						children: deploymentsToolbar
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "mt-6",
						children: deployments.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-border bg-card",
							children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [
									/* @__PURE__ */ jsx(TableHead, {
										className: "w-[40px] px-4 py-3",
										children: /* @__PURE__ */ jsx(Checkbox, {
											checked: (() => {
												const activeDeploymentId = activeDeploymentResolved?.$id;
												const selectableDeployments = deployments.filter((d) => d.$id !== activeDeploymentId);
												return selectableDeployments.length > 0 && selectedDeployments.size === selectableDeployments.length;
											})(),
											onCheckedChange: toggleAllDeployments
										})
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
										children: t("Deployment ID")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: cn("px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider", DEPLOYMENT_TABLE_STATUS_COLUMN_CLASS),
										children: t("Status")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[150px]",
										children: t("Type")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[200px]",
										children: t("Source")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
										children: t("Total Size")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
										children: t("Duration")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[150px]",
										children: t("Created")
									}),
									/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[100px]" })
								]
							}) }), /* @__PURE__ */ jsx(TableBody, { children: deployments.map((deployment) => {
								const deploymentData = deployment;
								const statusBadge = getDeploymentStatusBadge(deploymentData.status || "unknown", deploymentData.$createdAt);
								const isActive = deploymentData.$id === activeDeploymentResolved?.$id;
								const canDeleteFromMenu = !isActive && !isDeploymentInProgress(deploymentData.status);
								return /* @__PURE__ */ jsx(DeploymentListRowContextMenu, {
									variant: "site",
									projectId,
									resourceId: siteId,
									deployment: deploymentData,
									isActive,
									onRequestCancelBuild: (id) => {
										setCancelTargetDeploymentId(id);
										setCancelBuildDialogOpen(true);
									},
									children: /* @__PURE__ */ jsxs("tr", {
										className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", selectedDeployments.has(deploymentData.$id) ? "bg-muted" : isActive ? "bg-muted/40 dark:bg-muted/35 hover:bg-muted/55 dark:hover:bg-muted/50" : "hover:bg-muted/50", "cursor-pointer"),
										onClick: () => {
											navigate({
												to: "/projects/$projectId/sites/$siteId/deployments/$deploymentId",
												params: {
													projectId,
													siteId,
													deploymentId: deploymentData.$id
												}
											});
										},
										children: [
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												onClick: (e) => e.stopPropagation(),
												children: /* @__PURE__ */ jsx(Checkbox, {
													checked: selectedDeployments.has(deploymentData.$id),
													onCheckedChange: () => toggleDeployment(deploymentData.$id),
													disabled: isActive
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: deploymentData.$id,
													size: "sm",
													maxWidth: 180
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: cn("px-4 py-3", DEPLOYMENT_TABLE_STATUS_COLUMN_CLASS),
												children: isActive ? /* @__PURE__ */ jsxs(Badge, {
													variant: "active",
													className: "gap-1.5 text-[11px] font-medium",
													children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("Active")]
												}) : /* @__PURE__ */ jsxs(Badge, {
													variant: statusBadge.badgeVariant,
													className: "gap-1.5 text-[11px] font-medium",
													children: [(() => {
														const StatusIcon = statusBadge.icon;
														return /* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" });
													})(), t(statusBadge.label)]
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: (() => {
													const vcsProvider$1 = detectVcsProvider(deploymentData);
													if (vcsProvider$1) {
														const repositoryOwner = deploymentData.providerRepositoryOwner;
														const repositoryName = deploymentData.providerRepositoryName;
														if (repositoryOwner && repositoryName) {
															const repoUrl = getDeploymentRepositoryWebUrl(deploymentData);
															const label = `${repositoryOwner}/${repositoryName}`;
															return /* @__PURE__ */ jsxs(Badge, {
																variant: "outline",
																className: "text-[11px] h-6 px-2.5 gap-1.5 max-w-full",
																children: [vcsProvider$1.icon, repoUrl ? /* @__PURE__ */ jsx("a", {
																	href: repoUrl,
																	target: "_blank",
																	rel: "noopener noreferrer",
																	className: "link-neutral truncate",
																	onClick: (e) => e.stopPropagation(),
																	children: label
																}) : /* @__PURE__ */ jsx("span", {
																	className: "truncate",
																	children: label
																})]
															});
														}
														return /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 text-[12px] text-foreground",
															children: [vcsProvider$1.icon, /* @__PURE__ */ jsx("span", { children: vcsProvider$1.name })]
														});
													}
													const typeLabel = deploymentData.type === "cli" ? "CLI" : deploymentData.type === "manual" ? "Manual" : deploymentData.type || "N/A";
													return /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-1.5 text-[12px] text-foreground",
														children: [deploymentData.type === "cli" && /* @__PURE__ */ jsx(GitBranch, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: t(typeLabel) })]
													});
												})()
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: (() => {
													if (!detectVcsProvider(deploymentData)) return /* @__PURE__ */ jsx("span", {
														className: "text-[12px] text-muted-foreground",
														children: "-"
													});
													const commitMessage = deploymentData.providerCommitMessage;
													const commitHash = deploymentData.providerCommitHash;
													const commitUrl = deploymentData.providerCommitUrl;
													const commitAuthor = deploymentData.providerCommitAuthor;
													const commitAuthorUrl = deploymentData.providerCommitAuthorUrl;
													const branch = deploymentData.providerBranch;
													if (!commitMessage && !branch && !commitHash) return /* @__PURE__ */ jsx("span", {
														className: "text-[12px] text-muted-foreground",
														children: "-"
													});
													return /* @__PURE__ */ jsxs("div", {
														className: "space-y-1.5 min-w-0",
														children: [commitMessage && /* @__PURE__ */ jsx("div", {
															className: "text-[12px] text-foreground line-clamp-1 font-mono",
															children: commitUrl ? /* @__PURE__ */ jsx("a", {
																href: commitUrl,
																target: "_blank",
																rel: "noopener noreferrer",
																className: "link-neutral",
																onClick: (e) => e.stopPropagation(),
																title: commitMessage.length > 30 ? commitMessage : void 0,
																children: commitMessage.length > 30 ? `${commitMessage.slice(0, 30)}...` : commitMessage
															}) : /* @__PURE__ */ jsx("span", {
																title: commitMessage.length > 30 ? commitMessage : void 0,
																children: commitMessage.length > 30 ? `${commitMessage.slice(0, 30)}...` : commitMessage
															})
														}), (branch || commitHash) && /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 text-[11px] text-muted-foreground flex-wrap",
															children: [branch && /* @__PURE__ */ jsxs("div", {
																className: "flex items-center gap-1",
																children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", {
																	className: "font-mono",
																	children: branch
																})]
															}), commitHash && /* @__PURE__ */ jsxs(Fragment, { children: [branch && /* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsxs("div", {
																className: "flex min-w-0 items-center gap-1",
																children: [
																	/* @__PURE__ */ jsx(GitCommit, { className: "h-3 w-3 shrink-0" }),
																	/* @__PURE__ */ jsx("span", {
																		className: "shrink-0 font-mono",
																		children: commitHash.slice(0, 7)
																	}),
																	commitAuthor ? /* @__PURE__ */ jsxs("span", {
																		className: "min-w-0 truncate",
																		children: [` ${t("by")} `, commitAuthorUrl ? /* @__PURE__ */ jsx("a", {
																			href: commitAuthorUrl,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className: "link-neutral",
																			onClick: (e) => e.stopPropagation(),
																			title: commitAuthor,
																			children: commitAuthor
																		}) : commitAuthor]
																	}) : null
																]
															})] })]
														})]
													});
												})()
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx("code", {
													className: "text-[12px] font-mono text-muted-foreground",
													children: formatSize((deploymentData.buildSize || 0) + (deploymentData.sourceSize || 0))
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx("code", {
													className: "text-[12px] font-mono text-muted-foreground",
													children: isDeploymentInProgress(deploymentData.status) && !isDeploymentTimeout(deploymentData.status, deploymentData.$createdAt) ? formatDuration(Math.max(0, Math.floor((Date.now() - new Date(deploymentData.$createdAt).getTime()) / 1e3))) : deploymentData.buildDuration && !isDeploymentTimeout(deploymentData.status, deploymentData.$createdAt) ? formatDuration(deploymentData.buildDuration) : "-"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(DateTooltip, {
													date: deploymentData.$createdAt,
													className: "text-[12px] font-medium text-muted-foreground"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3 text-end",
												onClick: (e) => e.stopPropagation(),
												children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
														onClick: (e) => e.stopPropagation(),
														onPointerDown: (e) => e.stopPropagation()
													})
												}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
													align: "end",
													className: "z-[200]",
													children: [
														!isActive && /* @__PURE__ */ jsx(DropdownMenuItem, {
															disabled: deploymentData.status !== "ready",
															title: deploymentData.status !== "ready" ? t("Build must be ready before activating") : void 0,
															onClick: async (e) => {
																e.stopPropagation();
																if (deploymentData.status !== "ready") return;
																try {
																	await sdk.forProject(projectId).sites.updateSiteDeployment({
																		siteId,
																		deploymentId: deploymentData.$id
																	});
																	queryClient.invalidateQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
																	queryClient.invalidateQueries({ queryKey: [
																		"site",
																		"project",
																		projectId,
																		siteId
																	] });
																	toast.success(t("Deployment activated successfully"));
																} catch {
																	toast.error(t("Failed to activate deployment"));
																}
															},
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: Play,
																children: t("Activate")
															})
														}),
														/* @__PURE__ */ jsx(DropdownMenuItem, {
															onClick: async (e) => {
																e.stopPropagation();
																try {
																	await sdk.forProject(projectId).sites.createDuplicateDeployment({
																		siteId,
																		deploymentId: deploymentData.$id
																	});
																	queryClient.invalidateQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
																	toast.success(t("Deployment rebuild started"));
																} catch {
																	toast.error(t("Failed to redeploy"));
																}
															},
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: RefreshCw,
																children: t("Redeploy")
															})
														}),
														/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, {
															onClick: (e) => e.stopPropagation(),
															onPointerDown: (e) => e.stopPropagation(),
															children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: Download }), t("Download")]
														}), /* @__PURE__ */ jsxs(DropdownMenuSubContent, {
															className: "z-[200]",
															children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
																onClick: (e) => {
																	e.stopPropagation();
																	if (!projectId || !siteId) return;
																	try {
																		const url = sdk.forProject(projectId).sites.getDeploymentDownload({
																			siteId,
																			deploymentId: deploymentData.$id,
																			type: DeploymentDownloadType.Source
																		});
																		const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
																		window.open(urlWithMode, "_blank");
																		toast.success(t("Download started"));
																	} catch {
																		toast.error(t("Failed to download source code"));
																	}
																},
																children: /* @__PURE__ */ jsx(MenuItemContent, {
																	icon: FileCode,
																	children: t("Source code")
																})
															}), /* @__PURE__ */ jsx(DropdownMenuItem, {
																disabled: !isDeploymentCompleted(deploymentData.status),
																title: !isDeploymentCompleted(deploymentData.status) ? t("Build output is available after the deployment has completed.") : void 0,
																onClick: (e) => {
																	e.stopPropagation();
																	if (!isDeploymentCompleted(deploymentData.status)) return;
																	if (!projectId || !siteId) return;
																	try {
																		const url = sdk.forProject(projectId).sites.getDeploymentDownload({
																			siteId,
																			deploymentId: deploymentData.$id,
																			type: DeploymentDownloadType.Output
																		});
																		const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
																		window.open(urlWithMode, "_blank");
																		toast.success(t("Download started"));
																	} catch {
																		toast.error(t("Failed to download build output"));
																	}
																},
																children: /* @__PURE__ */ jsx(MenuItemContent, {
																	icon: Package,
																	children: t("Build output")
																})
															})]
														})] }),
														/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
														/* @__PURE__ */ jsx(DropdownMenuItem, {
															disabled: !canDeleteFromMenu,
															title: !canDeleteFromMenu ? isActive ? t("The active deployment cannot be deleted from the list") : isDeploymentInProgress(deploymentData.status) ? t("Wait for the build to finish or cancel it first") : void 0 : void 0,
															onClick: async (e) => {
																e.stopPropagation();
																if (!canDeleteFromMenu) return;
																try {
																	await deleteSiteDeployment(projectId, siteId, deploymentData.$id);
																	queryClient.invalidateQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
																	queryClient.invalidateQueries({ queryKey: [
																		"site",
																		"project",
																		projectId,
																		siteId
																	] });
																	toast.success(t("Deployment deleted successfully"));
																} catch (error) {
																	toast.error(error instanceof Error ? error.message : t("Failed to delete deployment"));
																}
															},
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: Trash2,
																children: t("Delete")
															})
														}),
														isDeploymentInProgress(deploymentData.status) && /* @__PURE__ */ jsx(DropdownMenuItem, {
															onSelect: () => {
																const id = deploymentData.$id;
																openDialogAfterOverlayCloses(() => {
																	setCancelTargetDeploymentId(id);
																	setCancelBuildDialogOpen(true);
																});
															},
															children: /* @__PURE__ */ jsx(MenuItemContent, {
																icon: XCircle,
																children: t("Cancel")
															})
														})
													]
												})] })
											})
										]
									})
								}, deploymentData.$id);
							}) })] })
						}), /* @__PURE__ */ jsx(Pagination, {
							currentPage: displayedPage + 1,
							totalItems: displayedTotal ?? total,
							pageSize,
							pageSizeOptions: [
								10,
								25,
								50,
								100
							],
							onPageChange: handlePageChange,
							onPageSizeChange: handlePageSizeChange,
							itemLabel: t("deployments"),
							className: "py-2"
						})] }) : /* @__PURE__ */ jsx(EmptyState, {
							icon: Clock,
							title: deploymentsFilterMap.size > 0 ? void 0 : t("No deployments yet"),
							description: deploymentsFilterMap.size > 0 ? void 0 : t("Create your first deployment to get started"),
							isEmpty: deploymentsFilterMap.size === 0,
							hasFilters: deploymentsFilterMap.size > 0,
							variant: "card",
							iconSize: "md",
							children: deploymentsFilterMap.size === 0 && createDeployment ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center text-center mt-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
										children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-muted-foreground" })
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-1 text-[14px] font-medium text-foreground",
										children: t("No deployments yet")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-4 text-[13px] text-muted-foreground",
										children: t("Create your first deployment to get started")
									}),
									/* @__PURE__ */ jsx(CreateDeploymentDropdown, {
										onSelectGit: createDeployment.openGitModal,
										onSelectCli: createDeployment.openCliModal,
										onSelectManual: createDeployment.openManualModal
									})
								]
							}) : void 0
						})
					})
				]
			}),
			selectedDeployments.size > 0 && /* @__PURE__ */ jsx("div", {
				className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
					children: [/* @__PURE__ */ jsxs(Badge, {
						variant: "secondary",
						className: "h-6 px-2.5",
						children: [
							selectedDeployments.size,
							" ",
							selectedDeployments.size > 1 ? t("deployments") : t("deployment"),
							" ",
							t("selected")
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setSelectedDeployments(/* @__PURE__ */ new Set()),
							className: "h-8 text-xs",
							children: t("Cancel")
						}), /* @__PURE__ */ jsxs(Button, {
							variant: "destructive",
							size: "sm",
							onClick: handleBulkDelete,
							disabled: bulkDeleteMutation.isPending,
							className: "h-8 gap-2",
							children: [/* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }), t("Delete")]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteDialogOpen,
				onOpenChange: setDeleteDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Deployments") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mb-4",
								children: [
									t("Are you sure you want to delete"),
									" ",
									selectedDeployments.size,
									" ",
									selectedDeployments.size > 1 ? t("deployments") : t("deployment"),
									"? ",
									t("This action cannot be undone.")
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-2 max-h-[300px] overflow-y-auto",
								children: displayedDeployments?.filter((d) => selectedDeployments.has(d.$id)).map((deployment) => /* @__PURE__ */ jsx(DeploymentInfo, {
									deployment,
									showStatus: true,
									compact: true
								}, deployment.$id))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: bulkDeleteMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: confirmBulkDelete,
								disabled: bulkDeleteMutation.isPending,
								children: t("Delete")
							})]
						})
					]
				})
			}),
			activeDeploymentResolved && /* @__PURE__ */ jsx(Dialog, {
				open: deleteActiveDialogOpen,
				onOpenChange: setDeleteActiveDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Delete deployment") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mb-4",
								children: t("Are you sure you want to delete this deployment? This action cannot be undone.")
							}), /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment: activeDeploymentForCard ?? activeDeploymentResolved,
								showStatus: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteActiveDialogOpen(false),
								className: "h-9 text-[13px]",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => deleteActiveMutation.mutate(),
								disabled: deleteActiveMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Delete")
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: cancelBuildDialogOpen,
				onOpenChange: (open) => {
					setCancelBuildDialogOpen(open);
					if (!open) setCancelTargetDeploymentId(null);
				},
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
							children: (displayedDeployments?.find((d) => d.$id === cancelTargetDeploymentId) ?? (cancelTargetDeploymentId === activeDeploymentResolved?.$id ? activeDeploymentResolved : null)) && /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment: displayedDeployments?.find((d) => d.$id === cancelTargetDeploymentId) ?? activeDeploymentResolved,
								showStatus: true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => {
									setCancelBuildDialogOpen(false);
									setCancelTargetDeploymentId(null);
								},
								className: "h-9 text-[13px]",
								children: t("Keep building")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => cancelTargetDeploymentId && cancelBuildMutation.mutate(cancelTargetDeploymentId),
								disabled: cancelBuildMutation.isPending || !cancelTargetDeploymentId,
								className: "h-9 text-[13px]",
								children: t("Cancel build")
							})]
						})
					]
				})
			}),
			activeDeploymentResolved && /* @__PURE__ */ jsx(Dialog, {
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
								deployment: activeDeploymentForCard ?? activeDeploymentResolved,
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
			}),
			activeDeploymentResolved && /* @__PURE__ */ jsx(Dialog, {
				open: activateDialogOpen,
				onOpenChange: setActivateDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Activate deployment") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mb-4",
								children: t("This will switch the active deployment to this one. All traffic will be routed to this deployment once activated.")
							}), /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment: activeDeploymentForCard ?? activeDeploymentResolved,
								showStatus: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setActivateDialogOpen(false),
								disabled: activateMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "default",
								onClick: () => activateMutation.mutate(),
								disabled: activateMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Activate")
							})]
						})
					]
				})
			})
		]
	});
}
export { View as t };
