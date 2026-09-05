import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { c as DOMAINS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { hc as useVerifyDomain, pc as useDeleteDomain } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Xt as siteDomainsQueryOptions } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import { H as useOrganizationDomains } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import { t as getDomainStatusBadgeConfig } from "./status-badge-_8W34wot.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./BuildLogsView-ByzI55tv.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { n as getApexDomain } from "./proxy-domains-BLLl99AI.js";
import { n as dnsPendingVerificationError, t as VerifyDomainContent } from "./VerifyDomainContent-1Al8Q-I5.js";
import "./BuildLogsCard-BN250kf6.js";
import { n as DeleteDomainDialog, r as ViewLogsDialog, t as ProxyRuleContextMenu } from "./ProxyRuleContextMenu-BKFi8s_C.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, FileText, Globe, Loader2, RefreshCw, Trash2 } from "lucide-react";
function VerifyDomain({ open, onOpenChange, projectId, region, rule, organizationDomainId, onVerifySuccess, onReconfigure }) {
	const t = useT();
	const verifyMutation = useVerifyDomain(projectId, region);
	const deleteMutation = useDeleteDomain(projectId, region);
	const [verificationError, setVerificationError] = useState(null);
	useEffect(() => {
		if (open) setVerificationError(null);
	}, [open]);
	const handleChange = async () => {
		try {
			await deleteMutation.mutateAsync(rule.$id);
			onOpenChange(false);
			onReconfigure?.();
		} catch {
			toast.error(t("Failed to remove domain"));
		}
	};
	const handleVerify = async () => {
		setVerificationError(null);
		try {
			const updated = await verifyMutation.mutateAsync({
				ruleId: rule.$id,
				organizationDomainId
			});
			if (updated.status === "verified") {
				toast.success(t("Domain verified"));
				onOpenChange(false);
				onVerifySuccess();
			} else if (updated.status === "created" || updated.status === "unverified") setVerificationError(dnsPendingVerificationError(t));
			else {
				toast.success(t("Verifying..."));
				onOpenChange(false);
				onVerifySuccess();
			}
		} catch {
			setVerificationError(dnsPendingVerificationError(t));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-4xl p-0",
			children: [
				/* @__PURE__ */ jsx(DialogHeader, {
					className: "px-6 pt-6 pb-4",
					children: /* @__PURE__ */ jsxs(DialogTitle, { children: [
						t("Verify"),
						" ",
						rule.domain
					] })
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 max-h-[70dvh] overflow-y-auto",
					children: /* @__PURE__ */ jsx(VerifyDomainContent, {
						rule,
						region,
						resourceType: "site",
						noCard: true,
						verificationError
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end gap-2",
					children: [onReconfigure && /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: handleChange,
						disabled: verifyMutation.isPending || deleteMutation.isPending,
						children: t("Change")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						onClick: handleVerify,
						disabled: verifyMutation.isPending,
						children: t("Verify")
					})]
				})
			]
		})
	});
}
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const navigate = useNavigate();
	const search = useSearch({ strict: false });
	const { project } = useProject(projectId);
	const [currentPage, setCurrentPage] = useState(0);
	const [pageSize, setPageSize] = useState(25);
	const [verifyOpen, setVerifyOpen] = useState(false);
	const [viewLogsOpen, setViewLogsOpen] = useState(false);
	const [deleteDomainOpen, setDeleteDomainOpen] = useState(false);
	const [selectedRule, setSelectedRule] = useState(null);
	const [viewLogsRule, setViewLogsRule] = useState(null);
	const searchValue = search?.search ?? "";
	const filterMap = useMemo(() => queryParamToMap(search?.query ?? null), [search?.query]);
	const { data: domainsData, isLoading: domainsLoading, isFetching: domainsFetching } = useQuery(siteDomainsQueryOptions(projectId, siteId, currentPage, pageSize, searchValue, filterMap.size > 0 ? Array.from(filterMap.values()) : void 0));
	const rulesFromApi = domainsData?.rules || [];
	const total = domainsData?.total || 0;
	const lastRulesRef = useRef([]);
	useEffect(() => {
		if (!domainsFetching && rulesFromApi.length > 0) lastRulesRef.current = rulesFromApi;
	}, [domainsFetching, rulesFromApi]);
	const rules = domainsFetching && lastRulesRef.current.length > 0 ? lastRulesRef.current : rulesFromApi;
	const { domains: orgDomains } = useOrganizationDomains(project?.teamId, 0, 500);
	const apexToOrgDomainId = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const d of orgDomains) if (d.domain) map.set(d.domain.toLowerCase(), d.$id);
		return map;
	}, [orgDomains]);
	const handleRetry = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedRule(rule);
			setVerifyOpen(true);
		});
	};
	const handleViewLogs = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setViewLogsRule(rule);
			setViewLogsOpen(true);
		});
	};
	const handleDelete = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedRule(rule);
			setDeleteDomainOpen(true);
		});
	};
	const getOrganizationDomainId = (rule) => {
		const apex = getApexDomain(rule.domain);
		return apex ? apexToOrgDomainId.get(apex.toLowerCase()) : void 0;
	};
	if (domainsLoading && rules.length === 0 && !domainsFetching) return /* @__PURE__ */ jsx("div", {
		className: "mx-auto w-full max-w-7xl px-4 py-4 sm:px-6",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center py-12",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
		})
	});
	const hasFilters = filterMap.size > 0 || !!searchValue;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		rules.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-4 sm:px-6",
			children: /* @__PURE__ */ jsx(EmptyState, {
				icon: Globe,
				title: hasFilters ? void 0 : t("No domains yet"),
				description: hasFilters ? void 0 : t("Connect a custom domain to your site for a branded experience"),
				isEmpty: !hasFilters,
				hasFilters,
				variant: "card",
				iconSize: "md"
			})
		}) : /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Domain")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Type")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Status")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Created")
							}),
							/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })
						]
					}) }), /* @__PURE__ */ jsx(TableBody, { children: rules.map((rule) => {
						const statusConfig = getDomainStatusBadgeConfig(rule.status);
						return /* @__PURE__ */ jsx(ProxyRuleContextMenu, {
							projectId,
							rule,
							projectTeamId: project?.teamId,
							apexToOrgDomainId,
							onViewLogs: handleViewLogs,
							onRetry: handleRetry,
							onDelete: handleDelete,
							children: /* @__PURE__ */ jsxs(TableRow, { children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("a", {
										href: domainUrl(rule.domain),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1.5 font-mono text-[13px] font-medium link-neutral",
										children: [rule.domain, /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground shrink-0" })]
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3 text-[13px]",
									children: rule.redirectUrl ? /* @__PURE__ */ jsxs("span", { children: [
										t("Redirect to"),
										" ",
										rule.redirectUrl
									] }) : rule.deploymentVcsProviderBranch ? /* @__PURE__ */ jsxs("span", { children: [
										t("Deployed from"),
										" ",
										rule.deploymentVcsProviderBranch
									] }) : /* @__PURE__ */ jsx("span", { children: t("Active deployment") })
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ jsxs(Badge, {
												variant: statusConfig.variant,
												className: "text-[10px] shrink-0 gap-1.5",
												title: rule.status === "verifying" ? t("SSL certificate is being issued. This usually takes a couple of minutes.") : void 0,
												children: [rule.status === "verifying" && /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }), t(statusConfig.label)]
											}),
											rule.status !== "verified" && /* @__PURE__ */ jsx(Button, {
												variant: "link",
												size: "sm",
												className: "h-auto p-0 text-[13px]",
												onClick: () => handleViewLogs(rule),
												children: t("View logs")
											}),
											(rule.status === "created" || rule.status === "unverified") && /* @__PURE__ */ jsx(Button, {
												variant: "link",
												size: "sm",
												className: "h-auto p-0 text-[13px]",
												onClick: () => handleRetry(rule),
												children: t("Retry")
											})
										]
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx(DateTooltip, {
										date: rule.$createdAt,
										className: "text-[12px] text-muted-foreground"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3 text-end",
									children: /* @__PURE__ */ jsx("div", {
										className: "flex justify-end",
										children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
										}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
											align: "end",
											children: [
												rule.status !== "verified" && /* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => handleViewLogs(rule),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: FileText,
														children: t("Logs")
													})
												}),
												(rule.status === "created" || rule.status === "unverified") && /* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => handleRetry(rule),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: RefreshCw,
														children: t("Retry")
													})
												}),
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => {
														const apex = getApexDomain(rule.domain);
														const orgDomainId = apex ? apexToOrgDomainId.get(apex.toLowerCase()) : void 0;
														if (project?.teamId && orgDomainId) navigate({
															to: "/organizations/$orgId/domains/$domainId",
															params: {
																orgId: project.teamId,
																domainId: orgDomainId
															}
														});
													},
													disabled: !project?.teamId || !getApexDomain(rule.domain) || !apexToOrgDomainId.has(getApexDomain(rule.domain)?.toLowerCase() ?? ""),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Globe,
														children: t("Records")
													})
												}),
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => handleDelete(rule),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Trash2,
														children: t("Delete")
													})
												})
											]
										})] })
									})
								})
							] })
						}, rule.$id);
					}) })] })
				}), /* @__PURE__ */ jsx(Pagination, {
					currentPage: currentPage + 1,
					totalItems: total,
					pageSize,
					pageSizeOptions: [
						10,
						25,
						50,
						100
					],
					onPageChange: (page) => setCurrentPage(page - 1),
					onPageSizeChange: (size) => {
						setPageSize(size);
						setCurrentPage(0);
					},
					itemLabel: t("domains"),
					className: "mt-0"
				})]
			})
		}),
		selectedRule && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(VerifyDomain, {
			open: verifyOpen,
			onOpenChange: setVerifyOpen,
			projectId: projectId ?? "",
			rule: selectedRule,
			region: project?.region,
			organizationDomainId: getOrganizationDomainId(selectedRule),
			onVerifySuccess: () => {
				setSelectedRule(null);
			},
			onReconfigure: () => {
				setVerifyOpen(false);
				setSelectedRule(null);
				navigate({
					to: "/projects/$projectId/sites/$siteId/domains/add",
					params: {
						projectId,
						siteId
					}
				});
			}
		}), /* @__PURE__ */ jsx(DeleteDomainDialog, {
			open: deleteDomainOpen,
			onOpenChange: setDeleteDomainOpen,
			projectId: projectId ?? "",
			region: project?.region,
			rule: selectedRule,
			onDeleteSuccess: () => {
				toast.success(t("Domain has been deleted"));
				setDeleteDomainOpen(false);
				setSelectedRule(null);
			}
		})] }),
		viewLogsRule && /* @__PURE__ */ jsx(ViewLogsDialog, {
			open: viewLogsOpen,
			onOpenChange: (open) => {
				setViewLogsOpen(open);
				if (!open) setViewLogsRule(null);
			},
			rule: viewLogsRule
		})
	] });
}
function SiteDomainsListPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { SiteDomainsListPage as component };
