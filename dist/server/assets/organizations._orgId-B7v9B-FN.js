import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { a as DEFAULT_BILLING_PROJECTS_LIMIT, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { $ as resolvePaymentMethodIdForInvoiceRetry, At as useOrganizationInvoices, Ct as useDeleteOrganizationBillingAddress, Dt as useOrganizationById, F as isBudgetLimitReached, Ft as useOrganizations, G as organizationQueryOptions, H as organizationPlanQueryOptions, I as isOrganizationBillingReadonlyStatus, It as usePaymentMethods, K as organizationScopesQueryOptions, Kt as useUpdateOrganizationTaxId, L as organizationBillingAggregationQueryOptions, Lt as useRetryInvoicePayment, Mt as useOrganizationPlan, N as fetchPaymentMethod, Ot as useOrganizationCredits, Pt as useOrganizationScopes, R as organizationCreditsQueryOptions, U as organizationProjectScopeQueryOptions, Ut as useUpdateOrganizationBudget, Wt as useUpdateOrganizationPaymentMethod, Y as organizationsQueryOptions, Z as prefetchOrganizationInvoiceDataIfAllowed, Zt as isPlanUsageLimitReached, bt as useCreateOrganization, d as deleteOrganization, fn as resolveOrganizationPlanDisplayLabel, gn as buildProjectRole, gt as useBillingPlans, hn as PROJECT_ROLE_VALUES, ht as useBillingAddresses, jt as useOrganizationPaymentMethod, kt as useOrganizationFailedInvoicePresence, ln as getPlanNameFromTier, m as fetchBillingAddress, mt as useBillingAddress, pt as useAddOrganizationCredit, vn as parseProjectAccess, yn as projectIdsFromRoles, zt as useSetOrganizationBillingAddress } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ay as organizationAddonsQueryOptions, Ml as formatRequestsValue, Ny as useOrganizationAddonPrice, Py as useOrganizationAddons, jl as formatRequestsTotal, ju as useOrganizationApps, ky as organizationAddonPriceQueryOptions, on as useProjectListRequestsUsage, wu as useCreateOrganizationApp } from "./hooks-BONwG3Mt.js";
import { At as parsePinnedProjectIds, D as syncConsoleAccountAfterMutation, Dt as MAX_PINNED_PROJECTS, O as updateAccountPrefs, _o as useRemoveTeamMember, bo as useUpdateConsoleTeamPrefs, go as useConsoleTeam, jt as reorderPinnedProjectIds, kt as buildPinnedProjectIdsPrefs, mo as organizationMembershipsQueryOptions, po as mapOrganizationMembershipsToTeamMembers, uo as consoleTeamQueryOptions, vo as useResendMembershipInvite, xo as useUpdateMembershipRole } from "./auth-BPuxYQAc.js";
import { D as projectsByIdsQueryOptions, S as pinnedProjectsQueryOptions, _ as formatProjectNameForDisplay, i as PROJECT_NAME_DISPLAY_MAX_WIDE, l as deleteProject, m as fetchProject, o as activeProjectsQueryOptions, t as PROJECT_NAME_DISPLAY_MAX, v as getProjectListItemEndpoint, x as mapProjectToListItem, y as getProjectNameDisplayTitle, z as useProjectListPlatforms } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { Zt as dedicatedDatabaseSourceFromEngine, b as databaseSpecificationsQueryOptions } from "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { St as toByteCount, bt as formatDecimalBytes } from "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { J as sumUsageChartPoints } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import { D as organizationDomainsQueryOptions, i as DOMAINS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { o as registerCommandCenterOpener } from "./AgentChat-DNlva4IH.js";
import { n as useDebugMode } from "./DebugMode-DFSPYy81.js";
import "./ThinkingBubble-U48KAaRY.js";
import "./slider-BKjrzSmD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs, o as getOrgTabAnalyticsAction } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth, t as RequireAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./agent-paths-CTRM_FvO.js";
import "./mcp-CgjPVMsn.js";
import "./debug-mcp-endpoint-B4hkK2QF.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./skeleton-8d0Q_D56.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, d as DropdownMenuSubContent, f as DropdownMenuSubTrigger, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuSub } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import "./CronScheduleEditor-Dctcdb1H.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, r as MenuItemIcon, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { r as useSequentialShortcuts } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./display-DbRQIyxk.js";
import "./McpIcon-D1Jv-oq2.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as SettingsLayoutShell } from "./SettingsLayoutShell-B7hNlMNA.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import "./DateRangePicker-BwmpXdP_.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./UsageChartIntervalToggle-Bbo7DqjH.js";
import { j as Tooltip$1, k as ResponsiveContainer } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import "./UsageChartBrushReferenceArea-PlRYgCRx.js";
import "./ChartXAxis-Sg7PTtJF.js";
import "./chart-panel-CCGEGd61.js";
import "./OverviewChartPanelError-D9UA3Ssz.js";
import { n as navigateToUpgradeWizard } from "./upgrade-curtain-D427ml_E.js";
import { a as hasUpgradeablePlanWithAddon, c as resolveStripeProviderMethodId, i as getAddonConfirmSearchParams, o as isAddonScheduledForRemoval, r as findActiveOrPendingAddon, s as isPaymentAuthentication, t as ADDON_KEY_BAA } from "./addons-DpAB_yDA.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import { c as maskCardNumber, i as formatDate, n as formatCardExpiry, o as formatPaymentMethodSummary, r as formatCurrency, s as isSubscriptionFailedInvoiceWithError, t as asOrganizationPaymentRefs } from "./utils-DMkzhjmw.js";
import "./EnablePremiumGeoDBDialog-B57n4Kqr.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import "./HostnameFaviconIcon-BEkCxwPN.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import "./DatabaseTypeIcon-CqLDDPFP.js";
import "./database-mascot-icons-mAQ4uqbH.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./ChartSeriesDot-DRSaLZ-2.js";
import "./UsageSectionChartError-Bjd51l80.js";
import "./horizontal-resize-BcegzCwH.js";
import "./resizable-CfBrThFG.js";
import "./SentryContext-BM5Kx9zs.js";
import "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import "./ProjectConnectDialogContext-DgcmISfV.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import "./FrameworkIcon-DTkSe6r3.js";
import "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import { C as canSeeProjects, F as canShowOrgMarketplaceTab, I as canShowOrgOAuthAppsSettings, L as canShowOrgSettingsTab, M as canShowOrgBillingNav, N as canShowOrgComplianceNav, P as canShowOrgDomainsTab, X as getFirstAllowedOrgOverviewPath, Z as getFirstAllowedOrgSettingsPath, a as canAccessOrgSettingsMembers, i as canAccessOrgSettingsCompliance, j as canShowOrgApiKeysSettings, n as canAccessOrgOverviewTab, o as canAccessOrgSettingsOverview, p as canCreateProject, r as canAccessOrgSettingsBilling, v as canInviteOrgMember, y as canPinProjects, z as canShowProjectSettings } from "./console-access-checks-BTMEOKcL.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import "./analytics-C_KnVoso.js";
import "./avif-support-fkUYDvxs.js";
import "./console-hub-DIz9opmN.js";
import "./agent-docs-feature-COYbd_m1.js";
import "./navigation-BOrhbgOp.js";
import { b as SOC2_SETTINGS_KEYWORDS, d as CreateProjectDialog, f as wouldIncurPlanAddonCharge, g as FailedInvoiceWarningIcon, h as getPlanDisplayName, m as getPlanBadgeColor, o as CommandCenter, p as AdditionalChargeAlert, t as ConsoleLayout, u as useGlobalCommandShortcuts, y as ORG_SETTINGS_CARD_INDEX } from "./ConsoleLayout-c5WGBGep.js";
import "./partners-docs-feature-C-dnxcxd.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import "./manifest-THOJt7eC.js";
import "./events-s0i9XY3r.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import "./postgres-sql-editor-actions-C3EmLCXJ.js";
import "./postgres-sql-editor-shortcuts-CXAI529H.js";
import "./mysql-sql-editor-actions-Bp-OLXJY.js";
import "./mysql-sql-editor-shortcuts-vHKpSCi0.js";
import "./network-connectivity-D-2A27IF.js";
import "./CloudStatusBanner-CLph43RA.js";
import "./InitWordmark-DLiURix2.js";
import "./org-promo-banner-D8oCrFdK.js";
import { t as InitOrgPromoBanner } from "./InitOrgPromoBanner-DRDIkoKp.js";
import "./date-utils-C_g8GS8c.js";
import { n as getInvoiceStatusBadgeVariant } from "./status-badge-_8W34wot.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./use-mobile-C9thwzsE.js";
import "./feedback-BwuMSGir.js";
import "./support-BA-5OzxM.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import "./CloudMarkIcon-ChnstmGW.js";
import "./content-NlXhGy_g.js";
import "./nav-badge-CqWauT26.js";
import "./registry-C4rxXMsK.js";
import "./secondary-sidebar-nav-F3D8GuLT.js";
import { c as groupBillingProjectResources, d as resolveBillingProjectResourceMapping, i as formatDedicatedDbBillingUsageLabel, l as groupDedicatedDbBillingResources, n as buildDedicatedDbBillingSpecLookup, o as getBillingProjectResourceIdMap, r as buildOrganizationUsageCategoriesFromAggregation, s as getDedicatedDbBillingUsageDescription, t as DEDICATED_DB_BILLING_METRIC_IDS, u as parseDedicatedDbBillingResourceId } from "./project-breakdown-resources-Bazw2C09.js";
import { i as MarketplaceAppCard, r as CreateMarketplaceApp, t as View$1 } from "./View-CHNsld1C.js";
import "./apps-logo-Bz8cZPsI.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, i as RESOURCE_CARD_GRID_CLASSNAME, l as RESOURCE_CARD_PADDED_CLASSNAME, o as RESOURCE_CARD_INTERACTIVE_CLASSNAME, u as RESOURCE_CARD_SECTION_DIVIDER_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import "./MarketplaceAppBadges-CRO6NDF-.js";
import "./SearchableSelect-DPl0hr1b.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as AddressModal } from "./Address-BE4m8u57.js";
import { n as PaymentMethodBrandAvatar, t as PaymentModal } from "./Payment-BjDWA9P5.js";
import { n as warningAlertContainerClassName, r as warningAlertTextClassName, t as WarningAlert } from "./WarningAlert-ZIbpbrZO.js";
import { t as OrganizationBillingHeaderBanners } from "./OrganizationBillingHeaderBanners-DZOTNzPB.js";
import "./OrganizationFailedInvoiceHeaderBanner-voBgqGBe.js";
import "./RetryVerification-yAjjptiv.js";
import "./ToolbarCountBadge-WR-HvODH.js";
import "./FiltersPopover-De49yhdY.js";
import { t as useOrganizationDomainsPlanLimit } from "./useOrganizationDomainsPlanLimit-CdhZDNIk.js";
import { t as View } from "./View-Crc-jBjC.js";
import { t as ConfirmNameDialog } from "./ConfirmNameDialog-CzIMv4mD.js";
import { t as getPlatformDisplayName } from "./platform-k0Qw_0lL.js";
import { t as PlanLimitWarning } from "./PlanLimitWarning-Cyo_O_jj.js";
import { t as ProjectSelector } from "./ProjectSelector-xy8oKVKK.js";
import { t as useServiceListViewMode } from "./use-service-list-view-mode-8H9q__qR.js";
import { t as ServiceListViewToggle } from "./ServiceListViewToggle-BmH3ip7r.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, Outlet, useLocation, useMatches, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, AlertTriangle, ArrowLeftRight, ArrowUpCircle, Bell, Calendar, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Code, Copy, CreditCard, Database, Download, Edit, ExternalLink, Eye, FileJson, Folder, Gauge, Globe, GripVertical, Info, LayoutDashboard, Link2, Loader2, Mail, MapPin, MessageSquare, Package, Pencil, Pin, PinOff, Play, Plus, RotateCcw, Settings, Shield, ShieldCheck, Square, Star, Ticket, Trash2, TrendingDown, TrendingUp, Trophy, UserCog, Users, X, Zap } from "lucide-react";
import { createPortal } from "react-dom";
function OrgMemberContextMenu({ orgId, member, canManageMembers, onUpdate, onRemove, children }) {
	const t = useT();
	const resendInviteMutation = useResendMembershipInvite(orgId);
	const membershipId = member.membershipId || member.$id;
	const membersHref = buildConsoleUrl(`/organizations/${orgId}/settings/members`);
	const hasName = !!member.userName && member.userName !== member.userEmail;
	const isPending = member.status === "pending";
	const handleResend = () => {
		const roles = member.roles && member.roles.length > 0 ? member.roles : [member.role];
		resendInviteMutation.mutate({
			membershipId,
			email: member.userEmail,
			roles
		}, {
			onSuccess: () => {
				toast.success(t("Invitation resent successfully"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to resend invitation"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			canManageMembers && isPending && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				disabled: resendInviteMutation.isPending,
				onSelect: handleResend,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Mail }), t("Resend")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }),
			canManageMembers && !isPending && onUpdate && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: onUpdate,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: UserCog }), t("Update")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", membershipId),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", member.userName),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", membersHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => member),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(membersHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(membersHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			canManageMembers && onRemove && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: onRemove,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), isPending ? t("Cancel invitation") : t("Remove")]
			})] })
		]
	})] });
}
function ProjectContextMenu({ project, showSettingsTab, canDeleteProject, onProjectDeleted, canPinProjects: canPinProjects$1 = false, isPinned = false, canPinMore = false, onPinProject, isPinPending = false, children }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const projectHref = buildConsoleUrl(`/projects/${project.$id}`);
	const projectEndpoint = getApiEndpoint(project.region ?? void 0);
	const hasName = !!project.name;
	const navigateToTab = (path) => {
		navigate({
			to: path,
			params: { projectId: project.$id }
		});
	};
	const deleteMutation = useMutation({
		mutationFn: async () => {
			await deleteProject(project.$id, project.region);
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["projects"] });
			await queryClient.invalidateQueries({ queryKey: ["organization", project.teamId] });
			if (onProjectDeleted) await onProjectDeleted(project.$id);
			toast.success(`${project.name || t("Project")} ${t("has been deleted")}`);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to delete project")));
		}
	});
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	const handleDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate();
	};
	if (!project.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutDashboard }), t("Overview")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/auth");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Users }), t("Auth")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/databases");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Database }), t("Databases")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigate({
						to: "/projects/$projectId/storage/$bucketId",
						params: {
							projectId: project.$id,
							bucketId: "-"
						}
					});
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Folder }), t("Storage")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/functions");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Zap }), t("Functions")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/messaging");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: MessageSquare }), t("Messaging")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/sites");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Globe }), t("Sites")]
			}),
			showSettingsTab && /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					navigateToTab("/projects/$projectId/settings");
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
			}),
			canPinProjects$1 && (isPinned || canPinMore) ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				disabled: isPinPending,
				onSelect: () => onPinProject?.(project.$id),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: isPinned ? PinOff : Pin }), isPinned ? t("Unpin") : t("Pin")]
			})] }) : null,
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", project.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Endpoint", projectEndpoint),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy endpoint")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", project.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", projectHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchProject(project.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(projectHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(projectHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			canDeleteProject && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})] })
		]
	})] }), /* @__PURE__ */ jsx(ConfirmNameDialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		title: "Delete project",
		description: /* @__PURE__ */ jsx(Fragment, { children: t("Are you sure you want to delete this project? This action cannot be undone.") }),
		confirmValue: project.name?.trim() || project.$id,
		confirmPlaceholder: "Enter project name",
		onConfirm: handleDelete,
		isConfirming: deleteMutation.isPending
	})] });
}
function ProjectListCardActionsMenu({ project, showSettingsTab }) {
	const t = useT();
	const navigate = useNavigate();
	const projectHref = buildConsoleUrl(`/projects/${project.$id}`);
	const endpoint = getProjectListItemEndpoint(project);
	const hasName = !!project.name;
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
			compact: true,
			onClick: (event) => event.stopPropagation()
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-56",
		onClick: (event) => event.stopPropagation(),
		children: [/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, { children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(DropdownMenuSubContent, { children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onSelect: () => copyToClipboard("ID", project.$id),
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Copy,
					children: t("Copy ID")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onSelect: () => copyToClipboard("Endpoint", endpoint),
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Copy,
					children: t("Copy endpoint")
				})
			}),
			hasName ? /* @__PURE__ */ jsx(DropdownMenuItem, {
				onSelect: () => copyToClipboard("Name", project.name),
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Copy,
					children: t("Copy name")
				})
			}) : null,
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onSelect: () => copyToClipboard("Link", projectHref),
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Link2,
					children: t("Copy link")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onSelect: () => void copyResourceAsJson(() => fetchProject(project.$id)),
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: FileJson,
					children: t("Copy as JSON")
				})
			})
		] })] }), showSettingsTab ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DropdownMenuSeparator, {}), /* @__PURE__ */ jsx(DropdownMenuItem, {
			onSelect: () => navigate({
				to: "/projects/$projectId/settings",
				params: { projectId: project.$id }
			}),
			children: /* @__PURE__ */ jsx(MenuItemContent, {
				icon: Settings,
				children: t("Settings")
			})
		})] }) : null]
	})] });
}
function ProjectListName({ name, className, as: Component$2 = "span", maxLength = 28 }) {
	const displayName = formatProjectNameForDisplay(name, maxLength);
	return /* @__PURE__ */ jsx(Component$2, {
		className: cn("block min-w-0 truncate font-medium text-foreground", Component$2 === "h3" ? "text-[14px]" : "text-[13px]", className),
		title: getProjectNameDisplayTitle(name, maxLength),
		children: displayName
	});
}
const PROJECT_LIST_TABLE_ROW_HEIGHT_CLASS = "h-14 py-0 align-middle";
const PROJECT_LIST_PLATFORM_AVATAR_SIZE_CLASS = "size-7";
var tableRowAlignClassName = "h-7";
var MAX_VISIBLE_PLATFORMS = 4;
var tileClassName = cn("grid shrink-0 place-items-center overflow-hidden rounded-md border border-border/80 bg-muted/50 text-muted-foreground", "transition-colors duration-150", PROJECT_LIST_PLATFORM_AVATAR_SIZE_CLASS);
var emptyTileClassName = cn(tileClassName, "border-dashed border-muted-foreground/30 bg-transparent text-muted-foreground/60", "hover:border-muted-foreground/45 hover:bg-muted/40 hover:text-muted-foreground");
function ProjectListPlatformTileIcon({ platform }) {
	return /* @__PURE__ */ jsx(PlatformIcon, {
		platform,
		size: "sm",
		className: cn("!size-3.5 shrink-0", "[&>div.absolute]:hidden", "[&>div]:flex [&>div]:!size-3.5 [&>div]:items-center [&>div]:justify-center", "[&_svg]:block [&_svg]:!size-3.5")
	});
}
function groupPlatformsForStack(platforms) {
	const byType = /* @__PURE__ */ new Map();
	for (const platform of platforms) {
		const type = platform.type ?? "web";
		byType.set(type, (byType.get(type) ?? 0) + 1);
	}
	return Array.from(byType.entries()).map(([type, count]) => ({
		type,
		label: count > 1 ? `${getPlatformDisplayName(type)} (${count})` : getPlatformDisplayName(type)
	}));
}
function PlatformTilesLoading({ className, variant = "card" }) {
	const t = useT();
	if (variant === "table") return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center", tableRowAlignClassName, className),
		"aria-label": t("Loading platforms"),
		"aria-busy": true,
		children: /* @__PURE__ */ jsx("div", {
			className: cn(tileClassName, "animate-pulse bg-border/50"),
			"aria-hidden": true
		})
	});
	return /* @__PURE__ */ jsx("ul", {
		className: cn("inline-flex items-center gap-1 ps-0", className),
		"aria-label": t("Loading platforms"),
		"aria-busy": true,
		children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsx("li", {
			className: "shrink-0",
			"aria-hidden": true,
			children: /* @__PURE__ */ jsx("div", { className: cn(tileClassName, "animate-pulse bg-border/50") })
		}, index))
	});
}
function ProjectListPlatformAvatars({ projectId, platforms, isLoading = false, unavailable = false, className, variant = "card" }) {
	const t = useT();
	if (isLoading) return /* @__PURE__ */ jsx(PlatformTilesLoading, {
		className,
		variant
	});
	if (unavailable) return /* @__PURE__ */ jsx("div", {
		className: cn("inline-flex items-center text-[12px] font-medium text-muted-foreground", variant === "table" && tableRowAlignClassName, className),
		"aria-label": t("N/A"),
		children: t("N/A")
	});
	const stackItems = groupPlatformsForStack(platforms);
	if (stackItems.length === 0) return /* @__PURE__ */ jsx("div", {
		className: cn("inline-flex items-center", variant === "table" && tableRowAlignClassName, className),
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Link, {
				to: "/projects/$projectId/apps",
				params: { projectId },
				className: cn(emptyTileClassName, "pointer-events-auto"),
				"aria-label": t("Add platform"),
				onClick: (event) => event.stopPropagation(),
				children: /* @__PURE__ */ jsx(Plus, {
					className: "size-3.5",
					strokeWidth: 2
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			className: "text-[12px]",
			children: t("Add platform")
		})] })
	});
	const visibleItems = stackItems.slice(0, MAX_VISIBLE_PLATFORMS);
	const overflowCount = stackItems.length - visibleItems.length;
	return /* @__PURE__ */ jsxs("ul", {
		className: cn("inline-flex items-center gap-1 ps-0", variant === "table" && tableRowAlignClassName, className),
		"aria-label": stackItems.map((item) => item.label).join(", "),
		children: [visibleItems.map((item) => /* @__PURE__ */ jsx("li", {
			className: "shrink-0",
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("div", {
					className: cn(tileClassName, "hover:border-border hover:bg-muted hover:text-foreground"),
					"aria-label": item.label,
					children: /* @__PURE__ */ jsx(ProjectListPlatformTileIcon, { platform: item.type })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				className: "text-[12px]",
				children: item.label
			})] })
		}, item.type)), overflowCount > 0 ? /* @__PURE__ */ jsx("li", {
			className: "shrink-0",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn(tileClassName, "text-[10px] font-semibold tabular-nums tracking-tight text-muted-foreground"),
				"aria-label": `${overflowCount} ${t("more platforms")}`,
				children: ["+", overflowCount]
			})
		}) : null]
	});
}
function ProjectListCardMain({ project, failedInvoiceWarning, budgetLimitReached = false }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const showRegion = features.multiRegion && !!project.region && project.region !== "unknown";
	const showLockedBadge = budgetLimitReached;
	const showPausedBadge = !showLockedBadge && !!project.paused;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-wrap items-center gap-1.5",
			children: [
				/* @__PURE__ */ jsx(ProjectListName, {
					name: project.name,
					as: "h3",
					className: "min-w-0"
				}),
				showLockedBadge ? /* @__PURE__ */ jsx(Badge, {
					variant: "error",
					className: "text-[10px] font-medium shrink-0",
					children: t("Locked")
				}) : null,
				showPausedBadge ? /* @__PURE__ */ jsxs(Badge, {
					variant: "error",
					className: "gap-1.5 text-[10px] font-medium shrink-0",
					children: [/* @__PURE__ */ jsx(icons_exports.PauseCircle, { className: "h-3 w-3" }), t("Paused")]
				}) : null,
				failedInvoiceWarning ? /* @__PURE__ */ jsx("div", {
					className: "pointer-events-auto flex shrink-0 items-center",
					children: failedInvoiceWarning
				}) : null
			]
		}), showRegion ? /* @__PURE__ */ jsx("p", {
			className: "mt-0.5 truncate font-mono text-[12px] uppercase text-muted-foreground",
			children: project.region
		}) : null]
	});
}
function ProjectListCardFooter({ project, showSettingsTab, platformsByProjectId }) {
	const platformsEntry = platformsByProjectId.get(project.$id);
	return /* @__PURE__ */ jsx("div", {
		className: cn(RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, "relative pointer-events-none"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ jsx(ProjectListPlatformAvatars, {
				projectId: project.$id,
				platforms: platformsEntry?.platforms ?? [],
				isLoading: platformsEntry?.isLoading ?? true,
				unavailable: platformsEntry?.unavailable === true,
				className: "min-w-0 flex-1 pointer-events-auto"
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 shrink-0 pointer-events-auto",
				children: /* @__PURE__ */ jsx(ProjectListCardActionsMenu, {
					project,
					showSettingsTab
				})
			})]
		})
	});
}
var CHART_COLOR = "var(--chart-brand)";
var SKELETON_CHART_STROKE = "hsl(var(--border))";
var SKELETON_CHART_FILL = "hsl(var(--muted-foreground))";
var SKELETON_CHART_FILL_TOP_OPACITY = .06;
var SKELETON_CHART_FILL_BOTTOM_OPACITY = 0;
var SKELETON_CHART_POINTS = [
	620,
	840,
	760,
	980,
	910,
	1120,
	1040,
	1180,
	990,
	1260,
	1100,
	1240
].map((total, index) => ({
	date: "",
	day: new Date(index),
	total
}));
var EMPTY_CHART_POINTS = Array.from({ length: 12 }, (_, index) => ({
	date: "",
	day: new Date(index),
	total: 0
}));
var projectChartLinkClassName = "pointer-events-auto block min-w-0 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_*]:!cursor-pointer";
function ProjectRequestsChartLink({ projectId, children, className, style }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Link, {
		to: "/projects/$projectId",
		params: { projectId },
		className: cn(projectChartLinkClassName, className),
		style,
		"aria-label": t("View project"),
		onClick: (event) => event.stopPropagation(),
		children
	});
}
function ChartTooltipBody({ point }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
		className: "text-[12px] font-medium text-foreground",
		children: point.date
	}), /* @__PURE__ */ jsxs("p", {
		className: "text-[12px] tabular-nums text-muted-foreground",
		children: [
			formatRequestsValue(point.total),
			" ",
			t("requests")
		]
	})] });
}
function getChartAnchorElement(portalContainerRef) {
	const root = portalContainerRef.current;
	if (!root) return null;
	return root.querySelector(".recharts-wrapper") ?? root.querySelector(".recharts-responsive-container") ?? root;
}
function PortaledChartTooltip({ active, coordinate, portalContainerRef, children }) {
	const [position, setPosition] = useState(null);
	const coordinateX = coordinate?.x;
	const coordinateY = coordinate?.y;
	useLayoutEffect(() => {
		if (!active || coordinateX == null || coordinateY == null || !portalContainerRef.current) {
			setPosition(null);
			return;
		}
		const anchor = getChartAnchorElement(portalContainerRef);
		if (!anchor) {
			setPosition(null);
			return;
		}
		const rect = anchor.getBoundingClientRect();
		const anchorX = rect.left + coordinateX;
		const anchorY = rect.top + coordinateY;
		const estimatedTooltipHeight = 52;
		const gap = 8;
		const viewportPadding = 8;
		const fitsAbove = anchorY - estimatedTooltipHeight - gap >= viewportPadding;
		const fitsBelow = anchorY + gap + estimatedTooltipHeight <= window.innerHeight - viewportPadding;
		setPosition({
			left: anchorX,
			top: anchorY,
			placement: fitsAbove || !fitsBelow ? "above" : "below"
		});
	}, [
		active,
		coordinateX,
		coordinateY,
		portalContainerRef
	]);
	if (!active || !position || typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none fixed z-[200] max-w-none whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 shadow-md", position.placement === "above" ? "-translate-x-1/2 -translate-y-[calc(100%+8px)]" : "-translate-x-1/2 translate-y-2"),
		style: {
			left: position.left,
			top: position.top
		},
		children
	}), document.body);
}
function ChartTooltip({ active, payload, coordinate, disabled, portalContainerRef }) {
	if (disabled || !active || !payload?.length) return null;
	const point = payload[0].payload;
	if (portalContainerRef) return /* @__PURE__ */ jsx(PortaledChartTooltip, {
		active,
		coordinate,
		portalContainerRef,
		children: /* @__PURE__ */ jsx(ChartTooltipBody, { point })
	});
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-md border border-border bg-popover px-2.5 py-1.5 shadow-sm",
		children: /* @__PURE__ */ jsx(ChartTooltipBody, { point })
	});
}
function RequestsChartArea({ chartData, gradientId, isSkeleton = false, tooltipDisabled = false, height = 48, usePortalTooltip = false }) {
	const chartContainerRef = useRef(null);
	const strokeColor = isSkeleton ? SKELETON_CHART_STROKE : CHART_COLOR;
	const fillTopColor = isSkeleton ? SKELETON_CHART_FILL : CHART_COLOR;
	return /* @__PURE__ */ jsx("div", {
		ref: chartContainerRef,
		className: "h-full w-full min-w-0 text-muted-foreground",
		children: /* @__PURE__ */ jsx(ResponsiveContainer, {
			width: "100%",
			height,
			minHeight: height,
			debounce: 0,
			initialDimension: {
				width: 320,
				height
			},
			children: /* @__PURE__ */ jsxs(AreaChart, {
				data: chartData,
				margin: {
					top: 4,
					right: 0,
					left: 0,
					bottom: 0
				},
				style: { cursor: "pointer" },
				children: [
					/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
						id: gradientId,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: fillTopColor,
							stopOpacity: isSkeleton ? SKELETON_CHART_FILL_TOP_OPACITY : .22
						}), /* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: fillTopColor,
							stopOpacity: isSkeleton ? SKELETON_CHART_FILL_BOTTOM_OPACITY : 0
						})]
					}) }),
					/* @__PURE__ */ jsx(Tooltip$1, {
						content: /* @__PURE__ */ jsx(ChartTooltip, {
							disabled: tooltipDisabled,
							portalContainerRef: usePortalTooltip ? chartContainerRef : void 0
						}),
						allowEscapeViewBox: {
							x: true,
							y: true
						},
						isAnimationActive: false,
						wrapperStyle: usePortalTooltip ? {
							visibility: "hidden",
							pointerEvents: "none",
							width: 0,
							height: 0,
							overflow: "hidden"
						} : {
							zIndex: 50,
							pointerEvents: "none"
						},
						cursor: tooltipDisabled ? false : {
							stroke: "hsl(var(--border))",
							strokeWidth: 1,
							strokeDasharray: "4 4"
						}
					}),
					/* @__PURE__ */ jsx(Area, {
						type: "monotone",
						dataKey: "value",
						stroke: strokeColor,
						strokeWidth: isSkeleton ? .75 : 1.5,
						fill: `url(#${gradientId})`,
						dot: false,
						...CHART_ANIMATION_DISABLED
					})
				]
			})
		})
	});
}
function RequestsChartBlock({ chartData, gradientId, chartHeight, isLoading, isError, usePortalTooltip = false }) {
	const t = useT();
	if (isError) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center rounded-md border border-dashed border-border/60 bg-muted/10 px-2 text-center",
		children: /* @__PURE__ */ jsx("span", {
			className: "text-[11px] text-muted-foreground",
			children: t("Unavailable")
		})
	});
	return /* @__PURE__ */ jsx(RequestsChartArea, {
		chartData,
		gradientId,
		isSkeleton: isLoading,
		tooltipDisabled: isLoading,
		height: chartHeight,
		usePortalTooltip
	});
}
function ProjectListRequestsChart({ changePercent = 0, chartPoints = [], isLoading, isError = false, unavailable = false, className, variant = "card" }) {
	const t = useT();
	const gradientId = useId().replace(/:/g, "");
	const showUnavailable = unavailable || isError;
	const hasPoints = chartPoints.length > 0;
	const totalRequests = useMemo(() => sumUsageChartPoints(chartPoints), [chartPoints]);
	const isZeroUsage = !isLoading && !showUnavailable && totalRequests === 0;
	const isTable = variant === "table";
	const chartHeight = isTable ? 32 : 48;
	const showChange = !isLoading && !showUnavailable && hasPoints && !isZeroUsage;
	const isPositive = changePercent > 0;
	const isNegative = changePercent < 0;
	const chartData = useMemo(() => {
		return (isLoading ? SKELETON_CHART_POINTS : hasPoints ? chartPoints : EMPTY_CHART_POINTS).map((point) => ({
			...point,
			value: point.total
		}));
	}, [
		chartPoints,
		hasPoints,
		isLoading
	]);
	const valueTextSizeClass = isTable ? "text-[12px]" : "text-[13px]";
	const valueTextLayoutClass = isTable ? "block max-w-full truncate" : "shrink-0";
	const unavailableMessage = /* @__PURE__ */ jsx("div", {
		className: "flex h-full w-full items-center justify-center rounded-md border border-dashed border-border/60 bg-muted/10 px-3 text-center",
		children: /* @__PURE__ */ jsx("span", {
			className: "text-[12px] leading-snug text-muted-foreground",
			children: t("Usage unavailable")
		})
	});
	const valueContent = isLoading ? /* @__PURE__ */ jsx("span", {
		className: "block h-3.5 w-8 max-w-full shrink-0 rounded-sm bg-border/70",
		"aria-hidden": true
	}) : showUnavailable || isZeroUsage ? /* @__PURE__ */ jsx("div", {
		className: "min-w-0",
		children: /* @__PURE__ */ jsx("span", {
			className: cn(valueTextLayoutClass, "font-medium leading-none text-muted-foreground", valueTextSizeClass),
			children: t("N/A")
		})
	}) : /* @__PURE__ */ jsx("div", {
		className: "min-w-0",
		children: /* @__PURE__ */ jsx("span", {
			className: cn(valueTextLayoutClass, "font-medium leading-none tabular-nums text-foreground", valueTextSizeClass),
			children: formatRequestsTotal(totalRequests)
		})
	});
	const changeBadge = !isTable ? /* @__PURE__ */ jsxs("span", {
		className: cn("ms-auto inline-flex h-3.5 shrink-0 items-center gap-0.5 text-[11px] font-medium leading-none tabular-nums", isLoading && "invisible", !isLoading && showChange && cn(isPositive && "text-emerald-600 dark:text-emerald-400", isNegative && "text-red-500 dark:text-red-400", !isPositive && !isNegative && "text-muted-foreground")),
		"aria-hidden": isLoading || !showChange,
		children: [
			isPositive ? /* @__PURE__ */ jsx(TrendingUp, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}) : isNegative ? /* @__PURE__ */ jsx(TrendingDown, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}) : /* @__PURE__ */ jsx("span", {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}),
			isPositive ? "+" : "",
			changePercent,
			"%"
		]
	}) : null;
	if (isTable) {
		if (showUnavailable && !isLoading) return /* @__PURE__ */ jsx("div", {
			className: cn("flex h-full min-w-0 items-center", className),
			style: {
				height: 32,
				minHeight: 32
			},
			"aria-label": t("Usage unavailable"),
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[12px] font-medium text-muted-foreground",
				children: t("N/A")
			})
		});
		return /* @__PURE__ */ jsxs("div", {
			className: cn("flex h-full min-w-0 items-center gap-2", className),
			style: {
				height: 32,
				minHeight: 32
			},
			"aria-busy": isLoading,
			"aria-label": isLoading ? t("Loading request usage") : void 0,
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-full w-11 shrink-0 items-center",
				children: valueContent
			}), /* @__PURE__ */ jsx("div", {
				className: "relative min-w-0 flex-1 overflow-hidden",
				style: {
					height: chartHeight,
					minHeight: chartHeight
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0",
					children: /* @__PURE__ */ jsx(RequestsChartBlock, {
						chartData,
						gradientId,
						chartHeight,
						isLoading,
						isError,
						usePortalTooltip: true
					})
				})
			})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: cn("min-w-0", className),
		style: { minHeight: 74 },
		"aria-busy": isLoading,
		"aria-label": isLoading ? t("Loading request usage") : showUnavailable ? t("Usage unavailable") : void 0,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-1.5 flex h-5 min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[12px] font-medium leading-none text-muted-foreground",
				children: t("Requests")
			}), isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [valueContent, /* @__PURE__ */ jsx("span", {
				className: "ms-auto inline-flex h-3.5 w-9 shrink-0",
				"aria-hidden": true
			})] }) : showUnavailable ? null : /* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 flex-1 items-center gap-2",
				children: isZeroUsage ? /* @__PURE__ */ jsxs(Fragment, { children: [valueContent, /* @__PURE__ */ jsx("span", {
					className: "ms-auto inline-flex h-3.5 w-9 shrink-0",
					"aria-hidden": true
				})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [valueContent, changeBadge] })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative w-full min-w-0 overflow-hidden",
			style: { height: chartHeight },
			children: showUnavailable ? unavailableMessage : /* @__PURE__ */ jsx(RequestsChartBlock, {
				chartData,
				gradientId,
				chartHeight,
				isLoading,
				isError,
				usePortalTooltip: true
			})
		})]
	});
}
function ProjectListRequestsChartFromUsage({ projectId, usageByProjectId, className, variant = "card" }) {
	const usage = usageByProjectId.get(projectId);
	return /* @__PURE__ */ jsx(ProjectListRequestsChart, {
		className,
		variant,
		isLoading: usage?.isLoading ?? true,
		isError: usage?.isError ?? false,
		unavailable: usage?.unavailable === true,
		changePercent: usage?.data?.changePercent,
		chartPoints: usage?.data?.chartPoints
	});
}
function ProjectListCardRequestsChart({ projectId, usageByProjectId, className }) {
	return /* @__PURE__ */ jsx(ProjectRequestsChartLink, {
		projectId,
		className: cn(RESOURCE_CARD_SECTION_DIVIDER_CLASSNAME, "shrink-0"),
		style: { minHeight: 84 },
		children: /* @__PURE__ */ jsx(ProjectListRequestsChartFromUsage, {
			projectId,
			usageByProjectId,
			className,
			variant: "card"
		})
	});
}
function ProjectListTableRequestsCell({ projectId, usageByProjectId }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full w-full items-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full",
			style: {
				height: 32,
				minHeight: 32
			},
			children: /* @__PURE__ */ jsx(ProjectListRequestsChartFromUsage, {
				projectId,
				usageByProjectId,
				variant: "table"
			})
		})
	});
}
function ProjectListIdentities({ project }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 flex-wrap items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(CopyableId, {
			id: getProjectListItemEndpoint(project),
			copyLabel: t("Copy endpoint"),
			size: "md",
			copyToastLabel: "Endpoint",
			className: "w-fit"
		}), /* @__PURE__ */ jsx(CopyableId, {
			id: project.$id,
			copyLabel: t("Copy ID"),
			size: "md",
			copyToastLabel: "ID",
			className: "w-fit"
		})]
	});
}
function getProjectListRegionLabel(project) {
	if (!project.region || project.region === "unknown") return null;
	return project.region;
}
function getProjectColumnWidth(showRegionColumn, showUsageCharts) {
	if (showUsageCharts && showRegionColumn) return "w-[20%]";
	if (showUsageCharts) return "w-[22%]";
	if (showRegionColumn) return "w-[28%]";
	return "w-[32%]";
}
function getRequestsColumnWidth(showRegionColumn) {
	return showRegionColumn ? "w-[30%]" : "w-[34%]";
}
function getPlatformsColumnWidth(showRegionColumn, showUsageCharts) {
	if (showUsageCharts && showRegionColumn) return "w-[12%]";
	if (showUsageCharts) return "w-[14%]";
	if (showRegionColumn) return "w-[14%]";
	return "w-[16%]";
}
function getActionsColumnWidth(showRegionColumn, showUsageCharts) {
	if (showUsageCharts) return "w-[30%]";
	if (showRegionColumn) return "w-[50%]";
	return "w-[52%]";
}
var listTableCellClassName = cn(PROJECT_LIST_TABLE_ROW_HEIGHT_CLASS, "overflow-hidden px-4");
function ProjectsListTable({ projects, showProjectSettingsTab, canDeleteProject, onProjectDeleted, showFailedInvoiceOrgAlert, orgBillingReadonlyForFailedInvoice, budgetLimitReached = false, showUsageCharts = false, projectRequestsUsageById, projectPlatformsById, canPinProjects: canPinProjects$1 = false, pinnedIds = [], onPinProject, isPinPending = false }) {
	const t = useT();
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const showRegionColumn = features.multiRegion;
	const pinnedSet = useMemo(() => new Set(pinnedIds), [pinnedIds]);
	const canPinMore = pinnedIds.length < 6;
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card",
		children: /* @__PURE__ */ jsxs(Table$1, {
			className: "w-full table-fixed",
			children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "border-b border-border hover:bg-transparent",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: `${getProjectColumnWidth(showRegionColumn, showUsageCharts)} px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground`,
						children: t("Project")
					}),
					showRegionColumn ? /* @__PURE__ */ jsx(TableHead, {
						className: "w-[8%] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Region")
					}) : null,
					showUsageCharts ? /* @__PURE__ */ jsx(TableHead, {
						className: `${getRequestsColumnWidth(showRegionColumn)} px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground`,
						children: t("Requests")
					}) : null,
					/* @__PURE__ */ jsx(TableHead, {
						className: `${getPlatformsColumnWidth(showRegionColumn, showUsageCharts)} px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground`,
						children: t("Platforms")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: `${getActionsColumnWidth(showRegionColumn, showUsageCharts)} px-4 py-3 text-end` })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: projects.map((project) => {
				const regionLabel = getProjectListRegionLabel(project);
				const platformsEntry = projectPlatformsById.get(project.$id);
				const isPinned = pinnedSet.has(project.$id);
				const showPinControl = canPinProjects$1 && onPinProject && (isPinned || canPinMore);
				return /* @__PURE__ */ jsx(ProjectContextMenu, {
					project,
					showSettingsTab: showProjectSettingsTab,
					canDeleteProject,
					onProjectDeleted,
					canPinProjects: canPinProjects$1,
					isPinned,
					canPinMore,
					onPinProject,
					isPinPending,
					children: /* @__PURE__ */ jsxs(TableRow, {
						className: "cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/30",
						onClick: () => navigate({
							to: "/projects/$projectId",
							params: { projectId: project.$id }
						}),
						children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: cn(listTableCellClassName, "max-w-0"),
								children: /* @__PURE__ */ jsx("div", {
									className: "flex h-full min-w-0 items-center",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(ProjectListName, {
												name: project.name,
												className: "min-w-0 flex-1",
												maxLength: 36
											}),
											/* @__PURE__ */ jsx(FailedInvoiceWarningIcon, {
												show: showFailedInvoiceOrgAlert,
												orgBillingReadonly: orgBillingReadonlyForFailedInvoice,
												className: "shrink-0"
											}),
											budgetLimitReached ? /* @__PURE__ */ jsx(Badge, {
												variant: "error",
												className: "text-[10px] font-medium shrink-0",
												children: t("Locked")
											}) : project.paused ? /* @__PURE__ */ jsxs(Badge, {
												variant: "error",
												className: "gap-1 text-[10px] font-medium shrink-0",
												children: [/* @__PURE__ */ jsx(icons_exports.PauseCircle, { className: "h-3 w-3" }), t("Paused")]
											}) : null
										]
									})
								})
							}),
							showRegionColumn ? /* @__PURE__ */ jsx(TableCell, {
								className: cn(listTableCellClassName, "max-w-0"),
								children: /* @__PURE__ */ jsx("div", {
									className: "flex h-full min-w-0 items-center",
									children: regionLabel ? /* @__PURE__ */ jsx("span", {
										className: "truncate font-mono text-[12px] uppercase text-muted-foreground",
										children: regionLabel
									}) : null
								})
							}) : null,
							showUsageCharts ? /* @__PURE__ */ jsx(TableCell, {
								className: cn(listTableCellClassName, "max-w-0"),
								children: /* @__PURE__ */ jsx(ProjectListTableRequestsCell, {
									projectId: project.$id,
									usageByProjectId: projectRequestsUsageById
								})
							}) : null,
							/* @__PURE__ */ jsx(TableCell, {
								className: listTableCellClassName,
								children: /* @__PURE__ */ jsx("div", {
									className: "flex h-full items-center",
									children: /* @__PURE__ */ jsx(ProjectListPlatformAvatars, {
										projectId: project.$id,
										platforms: platformsEntry?.platforms ?? [],
										isLoading: platformsEntry?.isLoading ?? true,
										unavailable: platformsEntry?.unavailable === true,
										variant: "table"
									})
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: cn(listTableCellClassName, "text-end"),
								onClick: (event) => event.stopPropagation(),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex h-full items-center justify-end gap-1",
									children: [/* @__PURE__ */ jsx(ProjectListIdentities, { project }), showPinControl ? /* @__PURE__ */ jsx(TooltipProvider, {
										delayDuration: 0,
										children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "icon",
												className: "h-8 w-8 shrink-0 rounded-md",
												"aria-label": isPinned ? t("Unpin project") : t("Pin project"),
												onClick: () => onPinProject(project.$id),
												disabled: isPinPending,
												children: isPinned ? /* @__PURE__ */ jsx(icons_exports.PinOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(icons_exports.Pin, { className: "h-4 w-4" })
											})
										}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: isPinned ? t("Unpin project") : t("Pin project") }) })] })
									}) : null]
								})
							})
						]
					})
				}, project.$id);
			}) })]
		})
	});
}
var APPWRITE_LOGO_SRC = "/logo.svg";
var LIGHTNING_SVG = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22c55e" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 11 14 9 22 19 10 11 10 13 2"/></svg>`);
var GAME_WIDTH = 720;
var GAME_HEIGHT = 200;
var GROUND_HEIGHT = 32;
var PLAYER_SIZE = 28;
var PLAYER_X = 60;
function LightningCollectorTrigger({ open, onOpenChange }) {
	const t = useT();
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: cn("h-9 w-9", open && "bg-accent"),
				"aria-label": t("Lightning Collector"),
				"aria-pressed": open,
				onClick: () => onOpenChange(!open),
				children: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: t("Lightning Collector") })
		})] })
	});
}
function LightningCollectorGame({ open, onOpenChange }) {
	const t = useT();
	const [isRunning, setIsRunning] = useState(false);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [status, setStatus] = useState("idle");
	const [, forceRender] = useState(0);
	const playerRef = useRef({
		y: 0,
		velocity: 0
	});
	const entitiesRef = useRef([]);
	const animationRef = useRef(null);
	const lastHazardRef = useRef(0);
	const lastRewardRef = useRef(0);
	const lastFrameRef = useRef(null);
	const resetGame = () => {
		entitiesRef.current = [];
		playerRef.current = {
			y: 0,
			velocity: 0
		};
		lastHazardRef.current = 0;
		lastRewardRef.current = 0;
		lastFrameRef.current = null;
		setScore(0);
		setStatus("running");
		setIsRunning(true);
	};
	const endGame = () => {
		setIsRunning(false);
		setStatus("gameover");
		setHighScore((prev) => Math.max(prev, score));
	};
	const handleJump = () => {
		if (status === "idle" || status === "gameover") {
			resetGame();
			return;
		}
		if (!isRunning) return;
		const player = playerRef.current;
		if (player.y === 0) player.velocity = 10;
	};
	const spawnEntity = (type) => {
		if (type === "hazard") {
			const startY = 140 + Math.random() * 40;
			const fallSpeed = 2 + Math.random() * 1.5;
			entitiesRef.current.push({
				id: Math.random(),
				type,
				x: GAME_WIDTH + 20,
				y: startY,
				width: 26,
				height: 26,
				vy: fallSpeed
			});
			return;
		}
		entitiesRef.current.push({
			id: Math.random(),
			type,
			x: GAME_WIDTH + 20,
			y: 16,
			width: 24,
			height: 24
		});
	};
	const updateLoop = (timestamp) => {
		if (!isRunning) return;
		if (lastFrameRef.current == null) lastFrameRef.current = timestamp;
		const delta = Math.min(32, timestamp - lastFrameRef.current);
		lastFrameRef.current = timestamp;
		const speed = 3 + Math.min(4, score / 150);
		const player = playerRef.current;
		player.y = Math.max(0, player.y + player.velocity * (delta / 16));
		player.velocity = player.velocity + -.55 * (delta / 16);
		if (player.y <= 0 && player.velocity < 0) {
			player.y = 0;
			player.velocity = 0;
		}
		if (timestamp - lastHazardRef.current > 1100 + Math.random() * 600) {
			spawnEntity("hazard");
			lastHazardRef.current = timestamp;
		}
		if (timestamp - lastRewardRef.current > 1500 + Math.random() * 900) {
			spawnEntity("reward");
			lastRewardRef.current = timestamp;
		}
		entitiesRef.current = entitiesRef.current.map((entity) => {
			const nextX = entity.x - speed * (delta / 16);
			const nextY = entity.type === "hazard" ? Math.max(0, entity.y - (entity.vy || 0) * (delta / 16)) : entity.y;
			return {
				...entity,
				x: nextX,
				y: nextY
			};
		}).filter((entity) => entity.x + entity.width > 0);
		const playerRect = {
			x: PLAYER_X,
			y: GROUND_HEIGHT + player.y,
			width: PLAYER_SIZE,
			height: PLAYER_SIZE
		};
		let collected = 0;
		for (const entity of entitiesRef.current) {
			const entityRect = {
				x: entity.x,
				y: GROUND_HEIGHT + entity.y,
				width: entity.width,
				height: entity.height
			};
			if (playerRect.x < entityRect.x + entityRect.width && playerRect.x + playerRect.width > entityRect.x && playerRect.y < entityRect.y + entityRect.height && playerRect.y + playerRect.height > entityRect.y) {
				if (entity.type === "hazard") {
					endGame();
					forceRender((n) => n + 1);
					return;
				}
				if (entity.type === "reward") {
					collected += 5;
					entity.width = 0;
					entity.height = 0;
				}
			}
		}
		if (collected > 0) setScore((prev) => prev + collected);
		entitiesRef.current = entitiesRef.current.filter((entity) => entity.width > 0 && entity.height > 0);
		forceRender((n) => n + 1);
		animationRef.current = requestAnimationFrame(updateLoop);
	};
	useEffect(() => {
		if (!isRunning) {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
				animationRef.current = null;
			}
			return;
		}
		animationRef.current = requestAnimationFrame(updateLoop);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [isRunning]);
	useEffect(() => {
		if (!open) {
			setIsRunning(false);
			setStatus("idle");
			entitiesRef.current = [];
			playerRef.current = {
				y: 0,
				velocity: 0
			};
		}
	}, [open]);
	useEffect(() => {
		if (!open) return;
		const listener = (event) => {
			if (event.code === "Space" || event.code === "ArrowUp") {
				event.preventDefault();
				handleJump();
			}
			if (event.code === "KeyR") resetGame();
		};
		window.addEventListener("keydown", listener);
		return () => window.removeEventListener("keydown", listener);
	}, [open, status]);
	if (!open) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-4 overflow-hidden rounded-xl border border-border bg-card/50",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-start justify-between gap-4 px-6 py-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1 space-y-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Lightning Collector")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground leading-relaxed",
						children: t("Collect Appwrite tokens and avoid lightning hazards. Endurance mini-game for debug sessions.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 flex-wrap items-center gap-2",
					children: [highScore > 0 && /* @__PURE__ */ jsxs(Badge, {
						variant: "info",
						className: "text-[10px] shrink-0 gap-1",
						children: [
							/* @__PURE__ */ jsx(Trophy, { className: "h-3 w-3" }),
							t("Best"),
							" ",
							highScore
						]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => onOpenChange(false),
						children: t("Collapse")
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4 px-6 py-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("dl", {
							className: "flex flex-wrap items-center gap-x-6 gap-y-1 text-[13px]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: t("Score")
								}), /* @__PURE__ */ jsx("dd", {
									className: "font-medium tabular-nums text-foreground",
									children: score
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "hidden text-muted-foreground sm:block",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-border",
									children: "|"
								}), /* @__PURE__ */ jsx("span", {
									className: "ms-6",
									children: t("Space or ↑ to jump · R to restart · click arena to jump")
								})]
							})]
						}), /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							variant: "outline",
							onClick: resetGame,
							className: "h-9 gap-1.5 text-[13px]",
							children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" }), t("Restart")]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: cn("relative w-full overflow-hidden rounded-lg border border-border bg-muted/20"),
						style: { height: GAME_HEIGHT },
						onClick: handleJump,
						role: "application",
						"aria-label": t("Lightning Collector game arena"),
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pointer-events-none absolute inset-0 opacity-[0.35]",
								style: {
									backgroundImage: "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)",
									backgroundSize: "48px 100%"
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-x-0 border-t border-border/80 bg-muted/40",
								style: {
									height: GROUND_HEIGHT,
									bottom: 0
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute rounded-sm border border-border bg-foreground shadow-sm",
								style: {
									width: PLAYER_SIZE,
									height: PLAYER_SIZE,
									left: PLAYER_X,
									bottom: GROUND_HEIGHT + playerRef.current.y
								}
							}),
							entitiesRef.current.map((entity) => /* @__PURE__ */ jsx("div", {
								className: "absolute",
								style: {
									width: entity.width,
									height: entity.height,
									left: entity.x,
									bottom: GROUND_HEIGHT + entity.y,
									backgroundImage: entity.type === "hazard" ? `url("data:image/svg+xml;utf8,${LIGHTNING_SVG}")` : `url("${APPWRITE_LOGO_SRC}")`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "contain",
									opacity: entity.type === "hazard" ? .95 : .9
								}
							}, entity.id)),
							status !== "running" && /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "max-w-xs px-6 text-center",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[13px] font-semibold text-foreground",
											children: status === "gameover" ? t("Run ended") : t("Ready to start")
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1.5 text-[12px] leading-relaxed text-muted-foreground",
											children: status === "gameover" ? `${t("Final score:")} ${score}. ${t("Start another run to beat your best.")}` : t("Collect tokens and avoid lightning. Use Space, ↑, or click to jump.")
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-4 flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ jsxs(Button, {
												size: "sm",
												onClick: resetGame,
												className: "h-9 gap-1.5 text-[13px]",
												children: [/* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5" }), status === "gameover" ? t("Play again") : t("Start run")]
											}), /* @__PURE__ */ jsx(Button, {
												size: "sm",
												variant: "outline",
												className: "h-9 text-[13px]",
												onClick: () => onOpenChange(false),
												children: t("Collapse")
											})]
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground sm:hidden",
						children: t("Space or ↑ to jump · R to restart · tap arena to jump")
					})
				]
			})
		]
	});
}
const BILLING_ADDON_NAME_FALLBACK = {
	addon_baa: "HIPAA BAA",
	addon_premiumGeoDB: "Premium Geo DB",
	addon_premiumGeoDBOrg: "Premium Geo DB"
};
const BILLING_DEDICATED_DB_COMPUTE_CREDIT_RESOURCE_ID = "dedicatedDbComputeCredit";
const BILLING_DEDICATED_DB_COMPUTE_CREDIT_LABEL = "Dedicated DB compute credit";
function isBillingAddonResourceId(resourceId) {
	return typeof resourceId === "string" && resourceId.startsWith("addon_");
}
function resolveBillingAddonDisplayName(resource) {
	const fromApi = resource.name?.trim();
	if (fromApi) return fromApi;
	return BILLING_ADDON_NAME_FALLBACK[resource.resourceId] || resource.resourceId;
}
function getBillingAddonChargesFromResources(resources) {
	if (!resources?.length) return [];
	return resources.filter((resource) => {
		if (!isBillingAddonResourceId(resource.resourceId)) return false;
		const amount = Number(resource.amount);
		return Number.isFinite(amount) && amount > 0;
	}).map((resource) => {
		const resourceId = resource.resourceId;
		return {
			resourceId,
			name: resolveBillingAddonDisplayName({
				resourceId,
				name: resource.name || resource.desc
			}),
			amount: Number(resource.amount) || 0,
			value: Number(resource.value) || 0
		};
	});
}
function getDedicatedDbComputeCreditFromResources(resources) {
	if (!resources?.length) return null;
	const credit = resources.find((resource) => resource.resourceId === BILLING_DEDICATED_DB_COMPUTE_CREDIT_RESOURCE_ID);
	if (!credit) return null;
	const amount = Number(credit.amount);
	if (!Number.isFinite(amount) || amount === 0) return null;
	return {
		resourceId: BILLING_DEDICATED_DB_COMPUTE_CREDIT_RESOURCE_ID,
		name: BILLING_DEDICATED_DB_COMPUTE_CREDIT_LABEL,
		amount,
		value: Number(credit.value) || 0
	};
}
function PlanSummary({ onChangePlan, orgId }) {
	const t = useT();
	const [expanded, setExpanded] = useState(true);
	const [expandedProjects, setExpandedProjects] = useState(/* @__PURE__ */ new Set());
	const search = useSearch({ strict: false });
	const navigate = useNavigate();
	const requestedPage = Number(search?.page) || 1;
	const pageLimit = 10;
	const [displayedPage, setDisplayedPage] = useState(requestedPage);
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const { plan, isLoading: planLoading } = useOrganizationPlan(orgId);
	const { isFetching: requestedAggregationFetching, isLoading: requestedAggregationLoading } = useQuery(organizationBillingAggregationQueryOptions(orgId, organization?.billingAggregationId, pageLimit, (requestedPage - 1) * pageLimit));
	const { data: aggregation, isLoading: aggLoading } = useQuery(organizationBillingAggregationQueryOptions(orgId, organization?.billingAggregationId, pageLimit, (displayedPage - 1) * pageLimit));
	useEffect(() => {
		if (requestedAggregationFetching || requestedAggregationLoading || requestedPage === displayedPage) return;
		setDisplayedPage(requestedPage);
	}, [
		requestedAggregationFetching,
		requestedAggregationLoading,
		requestedPage,
		displayedPage
	]);
	const { credits } = useOrganizationCredits(orgId, 0, 1);
	const { data: databaseSpecificationsData } = useQuery(databaseSpecificationsQueryOptions(useMemo(() => {
		const projects = aggregation?.breakdown;
		if (!Array.isArray(projects) || projects.length === 0) return null;
		const firstProjectId = projects[0]?.$id;
		return typeof firstProjectId === "string" && firstProjectId.length > 0 ? firstProjectId : null;
	}, [aggregation?.breakdown]), dedicatedDatabaseSourceFromEngine("postgresql")));
	const dedicatedDbBillingSpecLookup = useMemo(() => buildDedicatedDbBillingSpecLookup(databaseSpecificationsData?.specifications), [databaseSpecificationsData?.specifications]);
	const availableCredit = useMemo(() => {
		if (!credits || credits.length === 0) return 0;
		const now = /* @__PURE__ */ new Date();
		return credits.reduce((sum, credit) => {
			if (credit.expiration && new Date(credit.expiration) > now) return sum + (credit.credits || 0);
			return sum;
		}, 0);
	}, [credits]);
	const planName = useMemo(() => {
		if (!organization) return "Free";
		const planMatchesOrg = !plan?.$id || plan.$id === organization.billingPlan || getPlanNameFromTier(plan.$id) === getPlanNameFromTier(organization.billingPlan);
		return resolveOrganizationPlanDisplayLabel({
			billingPlan: organization.billingPlan,
			planName: planMatchesOrg ? plan?.name ?? null : null,
			planId: planMatchesOrg ? plan?.$id : organization.billingPlan
		});
	}, [plan, organization]);
	const basePlanPrice = useMemo(() => {
		if (!plan) return 0;
		return plan.price || 0;
	}, [plan]);
	const baseAmount = useMemo(() => {
		if (aggregation && aggregation.amount !== void 0 && aggregation.amount !== null) return aggregation.amount;
		return basePlanPrice;
	}, [aggregation, basePlanPrice]);
	const creditsApplied = useMemo(() => {
		return Math.min(baseAmount, availableCredit);
	}, [baseAmount, availableCredit]);
	const totalAmount = useMemo(() => {
		return Math.max(baseAmount - creditsApplied, 0);
	}, [baseAmount, creditsApplied]);
	const billingCycle = useMemo(() => {
		if (!organization) return null;
		const cycleStart = organization.billingCurrentInvoiceDate;
		const cycleEnd = organization.billingNextInvoiceDate;
		if (cycleStart && cycleEnd) return {
			start: cycleStart,
			end: cycleEnd
		};
		return null;
	}, [organization]);
	const usagePerProject = plan?.usagePerProject === true;
	const nextPaymentDate = useMemo(() => {
		if (billingCycle) return billingCycle.end;
		return null;
	}, [billingCycle]);
	const billingCycleLabel = useMemo(() => {
		if (!plan) return "Monthly";
		return plan.billingCycle || "Monthly";
	}, [plan]);
	const additionalMembersCost = useMemo(() => {
		if (!aggregation || !aggregation.additionalMemberAmount) return 0;
		return aggregation.additionalMemberAmount;
	}, [aggregation]);
	const additionalMembersCount = useMemo(() => {
		if (!aggregation || !aggregation.additionalMembers) return 0;
		return aggregation.additionalMembers;
	}, [aggregation]);
	const projectsResource = useMemo(() => {
		if (!aggregation?.resources) return null;
		return aggregation.resources.find((r) => r.resourceId === "projects") ?? null;
	}, [aggregation]);
	const additionalProjectsCount = useMemo(() => {
		if (projectsResource?.value !== void 0 && projectsResource?.value !== null) return Number(projectsResource.value);
		if (!plan || !aggregation) return 0;
		const includedProjects = plan.projects || plan.addons?.projects?.planIncluded || 0;
		const projects = aggregation.breakdown || [];
		const totalProjects$1 = Array.isArray(projects) ? projects.length : 0;
		return Math.max(0, totalProjects$1 - includedProjects);
	}, [
		plan,
		aggregation,
		projectsResource
	]);
	const additionalProjectsCost = useMemo(() => {
		if (projectsResource?.amount !== void 0 && projectsResource?.amount !== null) return Number(projectsResource.amount);
		if (!plan || !aggregation) return 0;
		const includedProjects = plan.projects || plan.addons?.projects?.planIncluded || 0;
		const projects = aggregation.breakdown || [];
		const totalProjects$1 = Array.isArray(projects) ? projects.length : 0;
		if (totalProjects$1 <= includedProjects) return 0;
		return (totalProjects$1 - includedProjects) * (plan.addons?.projects?.price || 0);
	}, [
		plan,
		aggregation,
		projectsResource
	]);
	const billingAddonCharges = useMemo(() => getBillingAddonChargesFromResources(aggregation?.resources), [aggregation?.resources]);
	const dedicatedDbComputeCredit = useMemo(() => getDedicatedDbComputeCreditFromResources(aggregation?.resources), [aggregation?.resources]);
	const toggleProject = (projectId) => {
		setExpandedProjects((prev) => {
			const next = new Set(prev);
			if (next.has(projectId)) next.delete(projectId);
			else next.add(projectId);
			return next;
		});
	};
	const projectBreakdowns = useMemo(() => {
		if (!aggregation) return [];
		const projects = aggregation.breakdown || [];
		if (!Array.isArray(projects) || projects.length === 0) return [];
		return projects.map((project) => {
			const resources = [];
			let projectTotal = 0;
			const projectResources = Array.isArray(project.resources) ? project.resources : [];
			const resourceIdMap = getBillingProjectResourceIdMap(plan);
			const hasSpecSpecificDedicatedDbResources = projectResources.some((resource) => typeof resource.resourceId === "string" && parseDedicatedDbBillingResourceId(resource.resourceId) != null);
			const getResourceByResourceId = (resourceId) => {
				return projectResources.find((r) => r.resourceId === resourceId);
			};
			const getPlanLimit = (planKey) => {
				if (!plan) return null;
				const limitValue = plan[{
					bandwidth: "bandwidth",
					storage: "storage",
					users: "users",
					executions: "executions",
					gbHours: "GBHours",
					databaseReads: "databasesReads",
					databaseWrites: "databasesWrites",
					imageTransformations: "imageTransformations",
					screenshotsGenerated: "screenshotsGenerated",
					authPhone: "authPhone",
					realtime: "realtime",
					realtimeMessages: "realtimeMessages",
					realtimeBandwidth: "realtimeBandwidth"
				}[planKey] || planKey];
				if (limitValue === null || limitValue === void 0) return null;
				const numValue = Number(limitValue);
				if (isNaN(numValue)) return null;
				if (planKey === "bandwidth" || planKey === "storage") return numValue * 1e9;
				return numValue;
			};
			const apiOrderedResourceIds = projectResources.map((resource) => resource.resourceId).filter((resourceId) => typeof resourceId === "string" && resourceId.length > 0);
			const fallbackResourceIds = Object.keys(resourceIdMap).filter((resourceId) => {
				if (hasSpecSpecificDedicatedDbResources && resourceId.startsWith("dedicatedDb")) return false;
				return true;
			});
			Array.from(new Set([...apiOrderedResourceIds, ...fallbackResourceIds])).forEach((resourceId) => {
				if (hasSpecSpecificDedicatedDbResources && DEDICATED_DB_BILLING_METRIC_IDS.includes(resourceId)) return;
				const mappedResource = resolveBillingProjectResourceMapping(resourceId, plan, dedicatedDbBillingSpecLookup);
				if (!mappedResource) return;
				const { name, format, planKey, category, showLimit = true, showOnlyWhenUsed = false } = mappedResource;
				const resource = getResourceByResourceId(resourceId);
				const usage = resource?.value !== void 0 ? Number(resource.value) : 0;
				const limit = getPlanLimit(planKey);
				const requiresUpgrade = limit !== null && limit < 0;
				const cost = resource?.amount !== void 0 ? Number(resource.amount) : 0;
				if (showOnlyWhenUsed ? resource != null && (usage > 0 || cost > 0) : resource != null || limit !== null || requiresUpgrade) {
					resources.push({
						resourceId,
						name,
						usage,
						limit: requiresUpgrade ? null : limit,
						cost,
						formatType: format,
						showLimit: requiresUpgrade ? false : showLimit,
						requiresUpgrade,
						category
					});
					projectTotal += cost;
				}
			});
			projectResources.filter((resource) => typeof resource.resourceId === "string" && resource.resourceId.startsWith("addon_") && Number(resource.amount) > 0).forEach((addon) => {
				const resourceId = addon.resourceId;
				const cost = Number(addon.amount) || 0;
				resources.push({
					resourceId,
					name: resolveBillingAddonDisplayName({
						resourceId,
						name: addon.name
					}),
					usage: Number(addon.value) || 0,
					limit: null,
					cost,
					formatType: "number",
					showLimit: false,
					category: "addons"
				});
				projectTotal += cost;
			});
			return {
				projectId: project.$id,
				projectName: project.name || t("Unknown Project"),
				categories: groupBillingProjectResources(resources),
				total: Number.isFinite(Number(project.amount)) ? Number(project.amount) : projectTotal
			};
		});
	}, [
		aggregation,
		plan,
		dedicatedDbBillingSpecLookup,
		t
	]);
	const organizationUsageCategories = useMemo(() => {
		if (usagePerProject) return [];
		return buildOrganizationUsageCategoriesFromAggregation(aggregation?.resources, plan);
	}, [
		usagePerProject,
		aggregation?.resources,
		plan,
		2
	]);
	const totalProjects = useMemo(() => {
		if (projectsResource?.value !== void 0 && projectsResource?.value !== null) return Number(projectsResource.value);
		return projectBreakdowns.length;
	}, [projectsResource?.value, projectBreakdowns.length]);
	const displayedBreakdowns = projectBreakdowns;
	if (orgLoading && !organization || planLoading && !plan || aggLoading && !aggregation && !!organization?.billingAggregationId) return /* @__PURE__ */ jsxs("div", {
		id: "current-cycle-usage",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden scroll-mt-24",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("div", { className: "h-6 w-32 bg-muted animate-pulse rounded" })
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading plan details...")
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		id: "current-cycle-usage",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden scroll-mt-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: [
									planName,
									" ",
									t("plan")
								]
							}), /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary",
								children: billingCycleLabel
							})]
						}), totalAmount > 0 && nextPaymentDate && /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: [
								t("Next payment of"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(totalAmount)
								}),
								" ",
								t("will occur on"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatDate(nextPaymentDate, {
										month: "short",
										day: "numeric",
										year: "numeric"
									})
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "text-end shrink-0 flex items-end",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground italic",
							children: t("Estimate, subject to change based on usage")
						})
					})]
				})
			}),
			billingCycle && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-3 bg-muted/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between text-[12px]",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: t("Current billing cycle")
					}), /* @__PURE__ */ jsxs("span", {
						className: "font-medium text-foreground",
						children: [
							"(",
							formatDate(billingCycle.start, {
								month: "short",
								day: "numeric"
							}),
							"–",
							formatDate(billingCycle.end, {
								month: "short",
								day: "numeric"
							}),
							")"
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => setExpanded(!expanded),
					className: "flex w-full items-center justify-between px-6 py-3 text-[13px] text-muted-foreground hover:bg-accent/50 transition-colors",
					children: [/* @__PURE__ */ jsx("span", { children: t("View charges breakdown") }), expanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ jsx("div", {
					className: cn("transition-all duration-200", expanded ? "max-h-none overflow-visible" : "max-h-0 overflow-hidden"),
					children: /* @__PURE__ */ jsxs("div", {
						className: "border-t border-border px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-foreground",
									children: [
										planName,
										" ",
										t("plan (base)")
									]
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(basePlanPrice)
								})]
							}),
							additionalMembersCost > 0 && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-foreground flex items-center gap-2",
									children: [t("Additional members"), additionalMembersCount > 0 && /* @__PURE__ */ jsx(Badge, {
										variant: "info",
										className: "h-4 px-1.5 text-[10px] font-medium shrink-0",
										children: additionalMembersCount
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(additionalMembersCost)
								})]
							}),
							additionalProjectsCount > 0 && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-foreground flex items-center gap-2",
									children: [t("Additional projects"), /* @__PURE__ */ jsx(Badge, {
										variant: "info",
										className: "h-4 px-1.5 text-[10px] font-medium shrink-0",
										children: additionalProjectsCount
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(additionalProjectsCost)
								})]
							}),
							billingAddonCharges.map((addon) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: t(addon.name)
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(addon.amount)
								})]
							}, addon.resourceId)),
							dedicatedDbComputeCredit ? /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: t(dedicatedDbComputeCredit.name)
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: formatCurrency(dedicatedDbComputeCredit.amount)
								})]
							}) : null,
							creditsApplied > 0 && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: t("Credits applied")
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-medium text-foreground text-green-600 dark:text-green-400",
									children: ["-", formatCurrency(creditsApplied)]
								})]
							}),
							organizationUsageCategories.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
									children: t("Organization usage")
								}), /* @__PURE__ */ jsx("div", {
									className: "divide-y divide-border",
									children: organizationUsageCategories.map((category) => /* @__PURE__ */ jsx(BillingProjectResourceCategorySection, {
										category,
										plan,
										dedicatedDbBillingSpecLookup,
										onUpgrade: onChangePlan
									}, category.id))
								})]
							}),
							projectBreakdowns.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
										children: t("Project breakdown")
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-1",
										children: displayedBreakdowns.map((project) => /* @__PURE__ */ jsxs(Collapsible, {
											open: expandedProjects.has(project.projectId),
											onOpenChange: () => toggleProject(project.projectId),
											children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsxs("button", {
													className: "flex w-full items-center justify-between rounded-md px-2 py-2 text-[13px] hover:bg-accent/50 transition-colors -mx-2",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-2 text-foreground min-w-0",
														title: project.projectName,
														children: [/* @__PURE__ */ jsx(Folder, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
															className: "truncate",
															children: formatProjectNameForDisplay(project.projectName)
														})]
													}), /* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx("span", {
															className: "font-medium text-foreground",
															children: formatCurrency(project.total)
														}), expandedProjects.has(project.projectId) ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })]
													})]
												})
											}), /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxs("div", {
												className: "ms-5 mt-1 border-s border-border ps-3 pe-6 pb-2",
												children: [/* @__PURE__ */ jsx("div", {
													className: "divide-y divide-border",
													children: project.categories.map((category) => /* @__PURE__ */ jsx(BillingProjectResourceCategorySection, {
														category,
														plan,
														dedicatedDbBillingSpecLookup
													}, category.id))
												}), orgId && /* @__PURE__ */ jsxs(Link, {
													to: "/projects/$projectId/usage",
													params: { projectId: project.projectId },
													className: "flex items-center gap-1 text-[11px] link-neutral mt-2",
													children: [t("Usage details"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
												})]
											}) })]
										}, project.projectId))
									}),
									totalProjects > pageLimit && /* @__PURE__ */ jsx("div", {
										className: "pt-2 border-t border-border",
										children: /* @__PURE__ */ jsx(Pagination, {
											currentPage: displayedPage,
											totalItems: totalProjects,
											pageSize: pageLimit,
											onPageChange: (page) => {
												navigate({ search: (prev) => ({
													...typeof prev === "object" && prev !== null ? prev : {},
													page,
													limit: pageLimit
												}) });
											},
											onPageSizeChange: () => {},
											showPageSizeSelector: false,
											itemLabel: t("projects"),
											className: "flex-wrap"
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-t border-border pt-3 text-[13px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: t("Total")
								}), /* @__PURE__ */ jsx("span", {
									className: "font-semibold text-foreground",
									children: formatCurrency(totalAmount)
								})]
							})
						]
					})
				})]
			}),
			plan?.selfService !== false && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: (basePlanPrice ?? 0) === 0 ? /* @__PURE__ */ jsxs(Button, {
						size: "sm",
						className: "h-9 text-[13px] gap-1.5",
						onClick: onChangePlan,
						...analyticsAttrs("upgrade-clicked"),
						children: [/* @__PURE__ */ jsx(ArrowUpCircle, { className: "h-4 w-4" }), t("Upgrade")]
					}) : /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px] gap-1.5",
						onClick: onChangePlan,
						...analyticsAttrs("billing-change-plan"),
						children: [/* @__PURE__ */ jsx(ArrowLeftRight, { className: "h-4 w-4" }), t("Change plan")]
					})
				})
			})
		]
	});
}
function BillingProjectResourceCategorySection({ category, plan, dedicatedDbBillingSpecLookup, onUpgrade }) {
	const t = useT();
	if (category.id === "dedicated-databases") {
		const { specGroups, ungrouped } = groupDedicatedDbBillingResources(category.resources, plan, dedicatedDbBillingSpecLookup);
		return /* @__PURE__ */ jsxs("div", {
			className: "py-3 first:pt-0 last:pb-0",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground pb-1.5",
				children: t(category.label)
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [specGroups.map((group) => /* @__PURE__ */ jsx(BillingDedicatedDbSpecGroup, { group }, group.key)), ungrouped.map((resource) => /* @__PURE__ */ jsx(BillingProjectResourceRow, {
					resource,
					onUpgrade
				}, resource.resourceId))]
			})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "py-3 first:pt-0 last:pb-0",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground pb-1.5",
			children: t(category.label)
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-1",
			children: category.resources.map((resource) => /* @__PURE__ */ jsx(BillingProjectResourceRow, {
				resource,
				onUpgrade
			}, resource.resourceId))
		})]
	});
}
function BillingDedicatedDbSpecGroup({ group }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border/70 bg-muted/15 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-4 px-3 py-2 border-b border-border/70",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[12px] font-medium text-foreground truncate",
					children: group.title
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[12px] font-semibold text-foreground shrink-0 tabular-nums",
					children: formatCurrency(group.totalCost)
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-3 py-1.5 border-b border-border/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground min-w-[88px] text-end",
						children: t("Usage")
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground min-w-[70px] text-end",
						children: t("Cost")
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "divide-y divide-border/50",
				children: group.items.map((item) => /* @__PURE__ */ jsx(BillingDedicatedDbMetricRow, { item }, item.resourceId))
			})
		]
	});
}
function BillingDedicatedDbMetricRow({ item }) {
	const usageLabel = formatDedicatedDbBillingUsageLabel(item.usage, item.metricId, item.formatType);
	const usageDescription = getDedicatedDbBillingUsageDescription(item.metricId, item.formatType);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-4 px-3 py-1.5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[11px] text-muted-foreground truncate",
			children: item.metricLabel
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 shrink-0",
			children: [usageDescription ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground tabular-nums min-w-[88px] text-end underline decoration-dotted decoration-muted-foreground/50 underline-offset-2 cursor-help",
					children: usageLabel
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-[240px]",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[12px]",
					children: usageDescription
				})
			})] }) }) : /* @__PURE__ */ jsx("span", {
				className: "text-[11px] text-muted-foreground tabular-nums min-w-[88px] text-end",
				children: usageLabel
			}), /* @__PURE__ */ jsx("span", {
				className: "text-[11px] font-medium text-foreground tabular-nums min-w-[70px] text-end",
				children: formatCurrency(item.cost)
			})]
		})]
	});
}
function BillingProjectResourceRow({ resource, onUpgrade }) {
	const t = useT();
	const usage = toByteCount(resource.usage);
	const limit = resource.limit == null ? null : toByteCount(resource.limit);
	const usagePercentage = limit && limit > 0 ? Math.min(100, usage / limit * 100) : null;
	const usageFormatted = resource.usageLabel ?? formatResourceUsage(usage, resource.formatType);
	const limitFormatted = limit !== null ? formatResourceLimit(limit, resource.formatType) : t("Unlimited");
	const usageContent = resource.usageDescription ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("span", {
			className: "underline decoration-dotted decoration-muted-foreground/50 underline-offset-2 cursor-help",
			children: !resource.showLimit ? usageFormatted : limit === 0 ? usageFormatted : `${usageFormatted} / ${limitFormatted}`
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "max-w-[240px]",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[12px]",
			children: resource.usageDescription
		})
	})] }) }) : /* @__PURE__ */ jsx(Fragment, { children: !resource.showLimit ? usageFormatted : limit === 0 ? usageFormatted : `${usageFormatted} / ${limitFormatted}` });
	return /* @__PURE__ */ jsx("div", {
		className: "py-1.5",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-6",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-[12px] font-medium text-foreground w-[140px] shrink-0",
					children: t(resource.name)
				}),
				/* @__PURE__ */ jsx("div", {
					className: "w-[120px] shrink-0",
					children: usagePercentage !== null ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Progress, {
							value: usagePercentage,
							className: cn("h-2 cursor-pointer", usagePercentage >= 80 && "[&>div]:bg-blue-500")
						}) })
					}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", {
						className: "text-[12px]",
						children: [
							usagePercentage.toFixed(1),
							"% ",
							t("used")
						]
					}) })] }) }) : /* @__PURE__ */ jsx("div", { className: "h-2" })
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground whitespace-nowrap flex-1 min-w-0",
					children: resource.requiresUpgrade ? onUpgrade ? /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "link-neutral text-[11px]",
						onClick: onUpgrade,
						children: t("Upgrade")
					}) : t("Upgrade") : usageContent
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[12px] font-medium text-foreground shrink-0 text-end min-w-[70px]",
					children: resource.cost > 0 ? formatCurrency(resource.cost) : null
				})
			]
		})
	});
}
function formatBytes(bytes) {
	return formatDecimalBytes(bytes);
}
function formatNumber(num) {
	if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
	if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
	return num.toLocaleString();
}
function formatResourceUsage(value, type) {
	if (type === "bytes") return formatBytes(value);
	if (type === "sms") return `${value.toLocaleString()} SMS messages`;
	return formatNumber(value);
}
function formatResourceLimit(value, type) {
	if (value === null) return "Unlimited";
	if (type === "bytes") {
		if (value >= 1e3 * 1e3 * 1e3) return `${(value / (1e3 * 1e3 * 1e3)).toFixed(0)} GB`;
		return formatBytes(value);
	}
	if (type === "sms") return `${value.toLocaleString()}`;
	return formatNumber(value);
}
var ITEMS_PER_PAGE$1 = 5;
function mapApiInvoiceToComponent(apiInvoice) {
	let status;
	switch (apiInvoice.status?.toLowerCase() || "") {
		case "succeeded":
		case "paid":
			status = "paid";
			break;
		case "requires_authentication":
		case "requires_action":
			status = "requires_authentication";
			break;
		case "failed":
			status = "failed";
			break;
		case "cancelled":
			status = "cancelled";
			break;
		case "due":
			status = "due";
			break;
		case "overdue":
			status = "overdue";
			break;
		case "pending":
		default:
			status = "pending";
			break;
	}
	const invoiceNumber = `INV-${(apiInvoice.aggregationId || apiInvoice.$id).slice(-8).toUpperCase()}`;
	let dueDate;
	try {
		const normalized = apiInvoice.dueAt.replace(" ", "T") + "Z";
		const parsed = new Date(normalized);
		if (!isNaN(parsed.getTime())) dueDate = parsed.toISOString();
		else dueDate = new Date(apiInvoice.dueAt).toISOString();
	} catch {
		dueDate = apiInvoice.dueAt;
	}
	const paidDate = status === "paid" ? apiInvoice.$updatedAt : void 0;
	return {
		$id: apiInvoice.$id,
		invoiceNumber,
		dueDate,
		paidDate,
		status,
		amount: apiInvoice.grossAmount || apiInvoice.amount,
		currency: apiInvoice.currency || "USD",
		downloadUrl: void 0,
		clientSecret: apiInvoice.clientSecret || void 0,
		lastError: apiInvoice.lastError || void 0
	};
}
function extractUrlFromResponse(response) {
	if (!response || typeof response !== "object") return;
	const responseObject = response;
	const candidate = responseObject.url || responseObject.href || responseObject.link;
	return typeof candidate === "string" ? candidate : void 0;
}
function PaymentHistory() {
	const t = useT();
	const orgId = useParams({ strict: false }).orgId;
	const [requestedPage, setRequestedPage] = useState(0);
	const [displayedPage, setDisplayedPage] = useState(0);
	const queryClient = useQueryClient();
	const { organization } = useOrganizationById(orgId);
	const primaryFailed = useOrganizationPaymentMethod(orgId, (organization ? asOrganizationPaymentRefs(organization) : null)?.paymentMethodId ?? void 0).paymentMethod?.failed === true;
	const retryPaymentMutation = useRetryInvoicePayment();
	const handleAuthorizeInvoice = async (invoice) => {
		if (!invoice.clientSecret) {
			toast.error(t("This invoice is missing authentication details."));
			return;
		}
		try {
			await confirmPayment({ clientSecret: invoice.clientSecret });
			toast.success(t("Payment authorized"));
			if (orgId) {
				await queryClient.invalidateQueries({ queryKey: [
					"invoices",
					"organization",
					orgId
				] });
				await queryClient.invalidateQueries({ queryKey: ["organization", orgId] });
			}
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to authorize payment"));
		}
	};
	const handleRetryInvoicePayment = async (invoice) => {
		if (!orgId || !organization) return;
		try {
			const paymentMethodId = await resolvePaymentMethodIdForInvoiceRetry({
				organization: asOrganizationPaymentRefs(organization),
				primaryPaymentMethodFailed: primaryFailed
			});
			if (!paymentMethodId) {
				if (invoice.clientSecret) {
					await handleAuthorizeInvoice(invoice);
					return;
				}
				toast.error(t("No payment method available. Please add a payment method first."));
				return;
			}
			await retryPaymentMutation.mutateAsync({
				organizationId: orgId,
				invoiceId: invoice.$id,
				paymentMethodId
			});
			toast.success(t("Payment retry initiated"));
			await queryClient.invalidateQueries({ queryKey: [
				"invoices",
				"organization",
				orgId
			] });
			await queryClient.invalidateQueries({ queryKey: ["organization", orgId] });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to retry payment"));
		}
	};
	const { isFetching: requestedPageIsFetching, error: requestedPageError, data: requestedPageData } = useOrganizationInvoices(orgId, requestedPage, ITEMS_PER_PAGE$1);
	const { invoices: displayedApiInvoices, total: displayedTotalInvoices, data: displayedData, isPending: displayedIsPending, error: displayedError } = useOrganizationInvoices(orgId, displayedPage, ITEMS_PER_PAGE$1);
	useEffect(() => {
		if (requestedPage !== displayedPage && !requestedPageIsFetching && requestedPageData) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		requestedPageIsFetching,
		requestedPageData
	]);
	const invoices = useMemo(() => {
		return displayedApiInvoices.map(mapApiInvoiceToComponent);
	}, [displayedApiInvoices]);
	const totalInvoices = displayedTotalInvoices;
	const totalPages = Math.max(1, Math.ceil(totalInvoices / ITEMS_PER_PAGE$1));
	const isPageTransitioning = requestedPage !== displayedPage && requestedPageIsFetching;
	const handlePrevPage = () => {
		if (isPageTransitioning) return;
		setRequestedPage((prev) => Math.max(0, prev - 1));
	};
	const handleNextPage = () => {
		if (isPageTransitioning) return;
		setRequestedPage((prev) => Math.min(totalPages - 1, prev + 1));
	};
	if (displayedIsPending && !displayedData) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Payment history")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading invoices...")
			})
		})]
	});
	if (displayedError && !displayedData) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Payment history")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-6",
			children: /* @__PURE__ */ jsx(WarningAlert, {
				title: t("Failed to load invoices"),
				children: displayedError instanceof Error ? displayedError.message : t("Please try again.")
			})
		})]
	});
	if (totalInvoices === 0) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Payment history")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("No invoices yet. Once you have made a payment, your invoices will appear here.")
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Payment history")
				}), requestedPageError && requestedPage !== displayedPage && /* @__PURE__ */ jsxs(WarningAlert, {
					className: "max-w-sm",
					children: [
						t("Failed to load page"),
						" ",
						requestedPage + 1
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border overflow-x-auto",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full",
					children: [/* @__PURE__ */ jsx("thead", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs("tr", { children: [
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-2.5 text-start text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
								children: t("Invoice")
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-2.5 text-start text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
								children: t("Due Date")
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-2.5 text-start text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
								children: t("Status")
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-2.5 text-end text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
								children: t("Amount")
							}),
							/* @__PURE__ */ jsx("th", { className: "px-6 py-2.5 text-end text-[11px] font-medium uppercase tracking-wider text-muted-foreground" })
						] })
					}), /* @__PURE__ */ jsx("tbody", {
						className: "divide-y divide-border",
						children: invoices.map((invoice) => /* @__PURE__ */ jsx(InvoiceRow, {
							invoice,
							orgId,
							isRetrying: retryPaymentMutation.isPending && retryPaymentMutation.variables?.invoiceId === invoice.$id,
							onAuthorize: () => handleAuthorizeInvoice(invoice),
							onRetryPayment: invoice.status === "failed" || invoice.status === "overdue" ? () => handleRetryInvoicePayment(invoice) : void 0,
							onViewInvoice: async (invoiceId) => {
								if (!orgId) return;
								try {
									const response = await sdk.forConsole.organizations.getInvoiceView({
										organizationId: orgId,
										invoiceId
									});
									let url;
									if (typeof response === "string") url = response;
									else if (response && typeof response === "object") {
										url = extractUrlFromResponse(response) || "";
										if (!url) url = `${sdk.forConsole.client.config.endpoint}/organizations/${orgId}/invoices/${invoiceId}/view`;
									} else url = `${sdk.forConsole.client.config.endpoint}/organizations/${orgId}/invoices/${invoiceId}/view`;
									window.open(url, "_blank", "noopener,noreferrer");
								} catch (error) {
									toast.error(error instanceof Error ? error.message : t("Failed to view invoice"));
								}
							},
							onDownloadInvoice: async (invoiceId) => {
								if (!orgId) return;
								try {
									const response = await sdk.forConsole.organizations.getInvoiceDownload({
										organizationId: orgId,
										invoiceId
									});
									let url;
									if (typeof response === "string") url = response;
									else if (response && typeof response === "object") {
										url = extractUrlFromResponse(response) || "";
										if (!url) url = `${sdk.forConsole.client.config.endpoint}/organizations/${orgId}/invoices/${invoiceId}/download`;
									} else url = `${sdk.forConsole.client.config.endpoint}/organizations/${orgId}/invoices/${invoiceId}/download`;
									const pdfResponse = await fetch(url, {
										method: "GET",
										credentials: "include"
									});
									if (!pdfResponse.ok) throw new Error(`Failed to download invoice: ${pdfResponse.statusText}`);
									const blob = await pdfResponse.blob();
									const blobUrl = window.URL.createObjectURL(blob);
									const link = document.createElement("a");
									link.href = blobUrl;
									link.download = `invoice-${invoiceId}.pdf`;
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
									window.URL.revokeObjectURL(blobUrl);
								} catch (error) {
									toast.error(error instanceof Error ? error.message : t("Failed to download invoice"));
								}
							}
						}, invoice.$id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-3 bg-muted/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: totalInvoices > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
							t("Showing"),
							" ",
							displayedPage * ITEMS_PER_PAGE$1 + 1,
							"–",
							Math.min((displayedPage + 1) * ITEMS_PER_PAGE$1, totalInvoices),
							" ",
							t("of"),
							" ",
							totalInvoices,
							" ",
							t("invoices")
						] }) : t("No invoices")
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 w-8 p-0",
								onClick: handlePrevPage,
								disabled: displayedPage === 0 || isPageTransitioning,
								"aria-label": t("Go to previous page"),
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-[12px] text-muted-foreground",
								children: [
									t("Page"),
									" ",
									displayedPage + 1,
									" ",
									t("of"),
									" ",
									totalPages
								]
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 w-8 p-0",
								onClick: handleNextPage,
								disabled: displayedPage === totalPages - 1 || isPageTransitioning,
								"aria-label": t("Go to next page"),
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})]
				})
			})
		]
	});
}
function InvoiceRow({ invoice, orgId, isRetrying, onAuthorize, onRetryPayment, onViewInvoice, onDownloadInvoice }) {
	const t = useT();
	const [isViewing, setIsViewing] = useState(false);
	const [isDownloading, setIsDownloading] = useState(false);
	const [isAuthorizing, setIsAuthorizing] = useState(false);
	const handleAuthorize = async () => {
		setIsAuthorizing(true);
		try {
			await onAuthorize();
		} finally {
			setIsAuthorizing(false);
		}
	};
	const showAuthorize = invoice.status === "requires_authentication" && !!invoice.clientSecret;
	const handleView = async () => {
		if (!orgId) return;
		setIsViewing(true);
		try {
			await onViewInvoice(invoice.$id);
		} finally {
			setIsViewing(false);
		}
	};
	const handleDownload = async () => {
		if (!orgId) return;
		setIsDownloading(true);
		try {
			await onDownloadInvoice(invoice.$id);
		} finally {
			setIsDownloading(false);
		}
	};
	const rowBusy = isViewing || isDownloading || isAuthorizing || !!isRetrying;
	return /* @__PURE__ */ jsxs("tr", {
		className: "hover:bg-accent/50 transition-colors",
		children: [
			/* @__PURE__ */ jsx("td", {
				className: "px-6 py-3",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground",
					children: invoice.invoiceNumber
				})
			}),
			/* @__PURE__ */ jsx("td", {
				className: "px-6 py-3",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[13px] text-muted-foreground",
					children: formatDate(invoice.dueDate)
				})
			}),
			/* @__PURE__ */ jsx("td", {
				className: "px-6 py-3",
				children: /* @__PURE__ */ jsx(Badge, {
					variant: getInvoiceStatusBadgeVariant(invoice.status),
					className: "text-[10px] capitalize shrink-0",
					children: invoice.status === "requires_authentication" ? t("Action required") : invoice.status
				})
			}),
			/* @__PURE__ */ jsx("td", {
				className: "px-6 py-3 text-end",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground",
					children: formatCurrency(invoice.amount, invoice.currency)
				})
			}),
			/* @__PURE__ */ jsx("td", {
				className: "px-6 py-3 text-end",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center justify-end gap-1.5",
					children: [
						showAuthorize && /* @__PURE__ */ jsxs(Button, {
							size: "sm",
							className: "h-8 gap-1.5 px-2.5 text-[12px]",
							title: t("Authorize payment"),
							onClick: handleAuthorize,
							disabled: !orgId || rowBusy,
							children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), t("Authorize")]
						}),
						onRetryPayment && /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 text-[12px]",
							onClick: onRetryPayment,
							disabled: !orgId || rowBusy,
							children: t("Retry payment")
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-8 w-8 p-0 text-muted-foreground hover:text-foreground",
							title: t("View invoice"),
							"aria-label": t("View invoice"),
							onClick: handleView,
							disabled: !orgId || rowBusy,
							children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-8 w-8 p-0 text-muted-foreground hover:text-foreground",
							title: t("Download invoice"),
							"aria-label": t("Download invoice"),
							onClick: handleDownload,
							disabled: !orgId || rowBusy,
							children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
						})
					]
				})
			})
		]
	});
}
function CannotRemovePrimaryPaymentMethodModal({ open, onOpenChange, organizationName, availableMethods = [], onReplacePrimary, onAddNew }) {
	const t = useT();
	const orgLabel = organizationName?.trim() || t("your organization");
	const hasExistingCards = availableMethods.length > 0;
	const handleReplacePrimary = (paymentMethodId) => {
		onOpenChange(false);
		onReplacePrimary?.(paymentMethodId);
	};
	const handleAddNew = () => {
		onOpenChange(false);
		onAddNew?.();
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Payment method required") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2 space-y-3",
						children: [/* @__PURE__ */ jsxs("p", { children: [
							orgLabel,
							" ",
							t("is on a paid plan with recurring billing. Your primary payment method must remain on file while subscription charges are active.")
						] }), /* @__PURE__ */ jsx("p", { children: t("To remove this card, replace it with another payment method on your account first. Once a new primary card is set, you can remove this one.") })]
					})]
				}),
				(hasExistingCards || onAddNew) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-3",
					children: [
						hasExistingCards && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Replace with an existing card")
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2",
								children: availableMethods.map((method) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/20 px-4 py-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 items-center gap-3",
										children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: method.brand }), /* @__PURE__ */ jsx("span", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: formatPaymentMethodSummary(method)
										})]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										size: "sm",
										className: "h-8 shrink-0 text-[12px]",
										onClick: () => handleReplacePrimary(method.$id),
										children: t("Replace")
									})]
								}, method.$id))
							})]
						}),
						hasExistingCards && onAddNew && /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Or")
						}),
						onAddNew && /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 w-full gap-2 text-[13px]",
							onClick: handleAddNew,
							children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add new card")]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: t("Close")
					}), !hasExistingCards && onAddNew && /* @__PURE__ */ jsx(Button, {
						type: "button",
						onClick: handleAddNew,
						children: t("Add payment method")
					})]
				})
			]
		})
	});
}
function OrgPaymentMethodContextMenu({ method, isPrimary, availableMethods, onSetPrimary, onReplacePrimary, onReplaceBackup, onRemove, onAddPaymentMethod, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			!isPrimary && onSetPrimary ? /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onSetPrimary(method.$id),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Star }), t("Primary")]
			}) : null,
			(isPrimary && onReplacePrimary || !isPrimary && onReplaceBackup) && /* @__PURE__ */ jsxs(Fragment, { children: [!isPrimary && onSetPrimary ? /* @__PURE__ */ jsx(ContextMenuSeparator, {}) : null, /* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ArrowLeftRight }), t("Replace")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, {
				className: "w-56",
				children: [
					availableMethods.map((availableMethod) => /* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => {
							if (isPrimary && onReplacePrimary) onReplacePrimary(availableMethod.$id);
							else if (!isPrimary && onReplaceBackup) onReplaceBackup(availableMethod.$id);
						},
						children: [
							/* @__PURE__ */ jsx(ContextMenuIcon, { icon: CreditCard }),
							availableMethod.brand,
							" ••••",
							availableMethod.last4
						]
					}, availableMethod.$id)),
					availableMethods.length > 0 ? /* @__PURE__ */ jsx(ContextMenuSeparator, {}) : null,
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => openDialogAfterOverlayCloses(() => onAddPaymentMethod?.(!isPrimary)),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Plus }), t("Add")]
					})
				]
			})] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", method.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				method.name ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", method.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchPaymentMethod(method.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onRemove),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Remove")]
			})
		]
	})] });
}
function PaymentMethods({ onAddPaymentMethod, orgId }) {
	const t = useT();
	const { organization } = useOrganizationById(orgId);
	const { plan } = useOrganizationPlan(orgId);
	const { plans: billingPlans } = useBillingPlans();
	const { paymentMethods: allPaymentMethods, isLoading: methodsLoading } = usePaymentMethods();
	const [cannotRemovePrimaryOpen, setCannotRemovePrimaryOpen] = useState(false);
	const isPaidPlan = useMemo(() => {
		if (plan) return (plan.price ?? 0) > 0;
		const tier = organization?.billingPlan;
		if (tier && billingPlans[tier]) return (billingPlans[tier].price ?? 0) > 0;
		return false;
	}, [
		plan,
		organization?.billingPlan,
		billingPlans
	]);
	const primaryPaymentMethod = useOrganizationPaymentMethod(orgId, organization?.paymentMethodId);
	const backupPaymentMethod = useOrganizationPaymentMethod(orgId, organization?.backupPaymentMethodId);
	const updatePaymentMethodMutation = useUpdateOrganizationPaymentMethod();
	const completedPaymentMethods = allPaymentMethods.filter((pm) => pm.last4);
	const primaryMethodId = organization?.paymentMethodId;
	const backupMethodId = organization?.backupPaymentMethodId;
	const primaryMethod = useMemo(() => {
		if (primaryPaymentMethod.paymentMethod) return primaryPaymentMethod.paymentMethod;
		if (!primaryMethodId) return void 0;
		return completedPaymentMethods.find((pm) => pm.$id === primaryMethodId);
	}, [
		primaryPaymentMethod.paymentMethod,
		primaryMethodId,
		completedPaymentMethods
	]);
	const backupMethod = useMemo(() => {
		if (backupPaymentMethod.paymentMethod) return backupPaymentMethod.paymentMethod;
		if (!backupMethodId) return void 0;
		return completedPaymentMethods.find((pm) => pm.$id === backupMethodId);
	}, [
		backupPaymentMethod.paymentMethod,
		backupMethodId,
		completedPaymentMethods
	]);
	const hasPrimaryAssigned = !!primaryMethodId;
	const isPrimaryResolving = hasPrimaryAssigned && !primaryMethod && primaryPaymentMethod.isLoading;
	const availableMethods = completedPaymentMethods.filter((pm) => pm.$id !== organization?.paymentMethodId && pm.$id !== organization?.backupPaymentMethodId);
	const handleSetPrimary = async (paymentMethodId) => {
		if (!orgId) return;
		try {
			await updatePaymentMethodMutation.mutateAsync({
				organizationId: orgId,
				paymentMethodId
			});
			toast.success(t("Primary payment method updated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update payment method"));
		}
	};
	const handleSetBackup = async (paymentMethodId) => {
		if (!orgId) return;
		try {
			await updatePaymentMethodMutation.mutateAsync({
				organizationId: orgId,
				backupPaymentMethodId: paymentMethodId
			});
			toast.success(t("Backup payment method updated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update backup payment method"));
		}
	};
	const handleRemove = async (isPrimary) => {
		if (!orgId) return;
		if (isPrimary && !organization?.backupPaymentMethodId && isPaidPlan) {
			setCannotRemovePrimaryOpen(true);
			return;
		}
		try {
			if (isPrimary) {
				const backupId = organization?.backupPaymentMethodId;
				if (backupId) await updatePaymentMethodMutation.mutateAsync({
					organizationId: orgId,
					paymentMethodId: backupId,
					backupPaymentMethodId: null
				});
				else await updatePaymentMethodMutation.mutateAsync({
					organizationId: orgId,
					paymentMethodId: null
				});
			} else await updatePaymentMethodMutation.mutateAsync({
				organizationId: orgId,
				backupPaymentMethodId: null
			});
			toast.success(t("Payment method removed"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to remove payment method"));
		}
	};
	if (methodsLoading && completedPaymentMethods.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Payment methods")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading payment methods...")
			})
		})]
	});
	if (!hasPrimaryAssigned && completedPaymentMethods.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Payment methods")
			}), /* @__PURE__ */ jsxs(Button, {
				variant: "outline",
				size: "sm",
				className: "h-9 gap-2 text-[13px] shrink-0",
				onClick: () => onAddPaymentMethod?.(),
				children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add payment method")]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "border-t border-border px-6 py-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
					children: /* @__PURE__ */ jsx(icons_exports.CreditCard, { className: "h-6 w-6 text-muted-foreground" })
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground text-center mb-1",
					children: t("No payment method on file")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground text-center mb-4",
					children: t("Add a new credit card to pay for your organization.")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 gap-2 text-[13px]",
						onClick: () => onAddPaymentMethod?.(),
						children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add payment method")]
					})
				})
			]
		})]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Payment methods")
				}), !hasPrimaryAssigned && /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 gap-2 text-[13px] shrink-0",
					onClick: () => onAddPaymentMethod?.(),
					children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add payment method")]
				})]
			}),
			!hasPrimaryAssigned && /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-6 py-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
						children: /* @__PURE__ */ jsx(icons_exports.CreditCard, { className: "h-6 w-6 text-muted-foreground" })
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground text-center mb-1",
						children: t("No payment method on file")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground text-center mb-4",
						children: t("Use an existing card or add a new one for this organization.")
					}),
					availableMethods.length > 0 ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 max-w-md mx-auto",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] font-medium text-foreground",
								children: t("Use existing card")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2",
								children: availableMethods.map((pm) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: pm.brand }), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsxs("p", {
												className: "text-[13px] font-medium text-foreground truncate",
												children: [
													pm.brand,
													" ",
													maskCardNumber(pm.last4 || "")
												]
											}), pm.expiryMonth && pm.expiryYear && /* @__PURE__ */ jsxs("p", {
												className: "text-[12px] text-muted-foreground truncate",
												children: [
													t("Expires"),
													" ",
													formatCardExpiry(pm.expiryMonth, pm.expiryYear)
												]
											})]
										})]
									}), /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-8 text-[12px] shrink-0",
										onClick: () => handleSetPrimary(pm.$id),
										disabled: updatePaymentMethodMutation.isPending,
										children: t("Use as primary")
									})]
								}, pm.$id))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] font-medium text-foreground pt-1",
								children: t("Or add a new card")
							}),
							/* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								className: "h-9 gap-2 text-[13px] w-full",
								onClick: () => onAddPaymentMethod?.(),
								children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add new card")]
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 gap-2 text-[13px]",
							onClick: () => onAddPaymentMethod?.(),
							children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add payment method")]
						})
					})
				]
			}),
			(primaryMethod || isPrimaryResolving) && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border",
				children: primaryMethod ? /* @__PURE__ */ jsx(PaymentMethodCard, {
					method: primaryMethod,
					isPrimary: true,
					orgId,
					onReplacePrimary: handleSetPrimary,
					onRemove: () => handleRemove(true),
					availableMethods,
					onAddPaymentMethod
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4 px-6 py-4",
					children: [/* @__PURE__ */ jsx("div", { className: "h-10 w-10 shrink-0 animate-pulse rounded-lg bg-muted" }), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 space-y-2",
						children: [/* @__PURE__ */ jsx("div", { className: "h-4 w-40 animate-pulse rounded bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-3 w-24 animate-pulse rounded bg-muted" })]
					})]
				})
			}),
			backupMethod && /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsx("div", {
					className: "px-6 py-2 bg-muted/30",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: t("Backup methods")
					})
				}), /* @__PURE__ */ jsx(PaymentMethodCard, {
					method: backupMethod,
					isPrimary: false,
					orgId,
					onSetPrimary: handleSetPrimary,
					onReplaceBackup: handleSetBackup,
					onRemove: () => handleRemove(false),
					availableMethods,
					onAddPaymentMethod
				})]
			}),
			primaryMethod && !backupMethod && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("No backup payment method")
						}), /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(icons_exports.Info, { className: "h-4 w-4 text-muted-foreground shrink-0" })
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", {
							className: "text-[12px]",
							children: t("A backup payment method ensures uninterrupted service if your primary method fails.")
						}) })] }) })]
					}), availableMethods.length > 0 ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 gap-2 text-[13px]",
							children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add backup")]
						})
					}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
						align: "end",
						className: "w-52",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-2 py-1.5",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-[11px] font-medium text-muted-foreground mb-1",
									children: t("Choose existing card")
								})
							}),
							availableMethods.map((availableMethod) => /* @__PURE__ */ jsx(DropdownMenuItem, {
								className: "text-[13px]",
								onClick: () => handleSetBackup(availableMethod.$id),
								children: /* @__PURE__ */ jsxs("span", {
									className: "whitespace-nowrap",
									children: [
										availableMethod.brand,
										" ••••",
										availableMethod.last4
									]
								})
							}, availableMethod.$id)),
							/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
							/* @__PURE__ */ jsx(DropdownMenuItem, {
								className: "text-[13px]",
								onClick: () => onAddPaymentMethod?.(true),
								children: t("Add")
							})
						]
					})] }) : /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 gap-2 text-[13px]",
						onClick: () => onAddPaymentMethod?.(true),
						children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Add backup")]
					})]
				})
			})
		]
	}), /* @__PURE__ */ jsx(CannotRemovePrimaryPaymentMethodModal, {
		open: cannotRemovePrimaryOpen,
		onOpenChange: setCannotRemovePrimaryOpen,
		organizationName: organization?.name,
		availableMethods,
		onReplacePrimary: handleSetPrimary,
		onAddNew: onAddPaymentMethod ? () => onAddPaymentMethod() : void 0
	})] });
}
function PaymentMethodCard({ method, isPrimary, onSetPrimary, onReplacePrimary, onReplaceBackup, onRemove, availableMethods, onAddPaymentMethod }) {
	const t = useT();
	const isExpiringSoon = method.expiryMonth && method.expiryYear ? isCardExpiringSoon(method.expiryMonth, method.expiryYear) : false;
	const hasError = method.failed || method.expired;
	const errorMessage = method.lastError || (method.expired ? t("Card expired") : method.failed ? t("Payment failed") : null);
	return /* @__PURE__ */ jsx(OrgPaymentMethodContextMenu, {
		method,
		isPrimary,
		availableMethods,
		onSetPrimary,
		onReplacePrimary,
		onReplaceBackup,
		onRemove,
		onAddPaymentMethod,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between px-6 py-4 hover:bg-accent/50 transition-colors",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: method.brand }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] font-medium text-foreground",
								children: [
									method.brand,
									" ",
									maskCardNumber(method.last4 || "")
								]
							}),
							isPrimary && /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary",
								children: t("Primary")
							}),
							isExpiringSoon && /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-600 dark:text-yellow-400",
								children: t("Expiring soon")
							}),
							hasError && /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-600 dark:text-red-400",
								children: method.expired ? t("Expired") : t("Failed")
							})
						]
					}),
					method.expiryMonth && method.expiryYear && /* @__PURE__ */ jsxs("p", {
						className: "text-[12px] text-muted-foreground",
						children: [
							t("Expires"),
							" ",
							formatCardExpiry(method.expiryMonth, method.expiryYear)
						]
					}),
					errorMessage && /* @__PURE__ */ jsx("div", {
						className: cn("mt-1.5 rounded-md border px-2 py-1", "border-red-500/30 bg-red-500/5"),
						children: /* @__PURE__ */ jsx("p", {
							className: cn("text-[11px]", "text-[13px] text-red-600 dark:text-red-400"),
							children: errorMessage
						})
					})
				] })]
			}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
			}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
				align: "end",
				className: "w-52",
				children: [
					!isPrimary && onSetPrimary && /* @__PURE__ */ jsx(DropdownMenuItem, {
						className: "text-[13px]",
						onClick: () => onSetPrimary(method.$id),
						children: /* @__PURE__ */ jsx(MenuItemContent, {
							icon: Star,
							children: t("Primary")
						})
					}),
					(isPrimary && onReplacePrimary || !isPrimary && onReplaceBackup) && /* @__PURE__ */ jsxs(Fragment, { children: [!isPrimary && onSetPrimary && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}), /* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, {
						className: "text-[13px]",
						children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: ArrowLeftRight }), t("Replace")]
					}), /* @__PURE__ */ jsxs(DropdownMenuSubContent, {
						className: "w-52",
						children: [availableMethods.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-2 py-1.5",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: t("Choose existing card")
								})
							}),
							availableMethods.map((availableMethod) => /* @__PURE__ */ jsx(DropdownMenuItem, {
								className: "text-[13px]",
								onClick: () => {
									if (isPrimary && onReplacePrimary) onReplacePrimary(availableMethod.$id);
									else if (!isPrimary && onReplaceBackup) onReplaceBackup(availableMethod.$id);
								},
								children: /* @__PURE__ */ jsx(MenuItemContent, {
									icon: icons_exports.CreditCard,
									children: /* @__PURE__ */ jsxs("span", {
										className: "whitespace-nowrap",
										children: [
											availableMethod.brand,
											" ••••",
											availableMethod.last4
										]
									})
								})
							}, availableMethod.$id)),
							/* @__PURE__ */ jsx(DropdownMenuSeparator, {})
						] }), /* @__PURE__ */ jsx(DropdownMenuItem, {
							className: "text-[13px]",
							onClick: () => onAddPaymentMethod?.(!isPrimary),
							children: /* @__PURE__ */ jsx(MenuItemContent, {
								icon: icons_exports.Plus,
								children: t("Add")
							})
						})]
					})] })] }),
					/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
					/* @__PURE__ */ jsx(DropdownMenuItem, {
						className: "text-[13px]",
						onClick: onRemove,
						children: /* @__PURE__ */ jsx(MenuItemContent, {
							icon: Trash2,
							children: t("Remove")
						})
					})
				]
			})] })]
		})
	});
}
function isCardExpiringSoon(month, year) {
	const now = /* @__PURE__ */ new Date();
	const expiryDate = new Date(year, month - 1);
	const threeMonthsFromNow = /* @__PURE__ */ new Date();
	threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
	return expiryDate <= threeMonthsFromNow && expiryDate >= now;
}
function formatAddressLabel(address) {
	return [
		address.streetAddress,
		address.city,
		address.country
	].filter(Boolean).join(", ") || address.$id;
}
function OrgBillingAddressContextMenu({ address, availableAddresses, onUpdate, onReplace, onAddNew, onRemove, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onUpdate),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ArrowLeftRight }), t("Replace")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, {
				className: "w-56",
				children: [
					availableAddresses.map((addr) => /* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => onReplace(addr.$id),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: MapPin }), formatAddressLabel(addr)]
					}, addr.$id)),
					availableAddresses.length > 0 ? /* @__PURE__ */ jsx(ContextMenuSeparator, {}) : null,
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => openDialogAfterOverlayCloses(onAddNew),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Plus }), t("Add new address")]
					})
				]
			})] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", address.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Address", formatAddressLabel(address)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchBillingAddress(address.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onRemove),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Remove")]
			})
		]
	})] });
}
function BillingAddressSection({ onEditAddress, orgId }) {
	const t = useT();
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [createModalOpen, setCreateModalOpen] = useState(false);
	const [removeConfirmOpen, setRemoveConfirmOpen] = useState(false);
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const { address, isLoading: addressLoading } = useBillingAddress(organization?.billingAddressId);
	const { addresses: allAddresses } = useBillingAddresses();
	const setOrgAddressMutation = useSetOrganizationBillingAddress();
	const deleteOrgAddressMutation = useDeleteOrganizationBillingAddress();
	const isLoading = orgLoading && !organization || addressLoading && !address;
	const handleLinkAddress = async (addressId) => {
		if (!orgId) return;
		try {
			await setOrgAddressMutation.mutateAsync({
				organizationId: orgId,
				billingAddressId: addressId
			});
			toast.success(t("Billing address updated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update billing address"));
		}
	};
	const handleRemoveAddress = async () => {
		if (!orgId) return;
		closeDialogBeforeOverlayUnmount(() => setRemoveConfirmOpen(false));
		try {
			await deleteOrgAddressMutation.mutateAsync({ organizationId: orgId });
			toast.success(organization?.name ? `${t("Billing address has been removed from")} ${organization.name}` : t("Billing address removed"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to remove billing address"));
		}
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Billing address")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading address...")
			})
		})]
	});
	if (!address) {
		const availableAddresses = allAddresses.filter((addr) => addr.$id !== organization?.billingAddressId);
		const handleAddOrCreate = () => onEditAddress ? onEditAddress() : setCreateModalOpen(true);
		return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Billing address")
				}), /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 gap-2 text-[13px] shrink-0",
					onClick: handleAddOrCreate,
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add billing address")]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-6 py-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
						children: /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-muted-foreground" })
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground text-center mb-1",
						children: t("No billing address on file")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground text-center mb-4",
						children: t("Add a billing address for invoices and tax documents.")
					}),
					availableAddresses.length > 0 ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 max-w-md mx-auto",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] font-medium text-foreground",
								children: t("Use existing address")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2",
								children: availableAddresses.map((addr) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted shrink-0",
											children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-muted-foreground" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground truncate",
												children: addr.streetAddress || t("Address")
											}), (addr.city || addr.country) && /* @__PURE__ */ jsx("p", {
												className: "text-[12px] text-muted-foreground truncate",
												children: [
													addr.city,
													addr.state,
													addr.country
												].filter(Boolean).join(", ")
											})]
										})]
									}), /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-8 text-[12px] shrink-0",
										onClick: () => handleLinkAddress(addr.$id),
										disabled: setOrgAddressMutation.isPending,
										children: t("Use this address")
									})]
								}, addr.$id))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] font-medium text-foreground pt-1",
								children: t("Or add a new address")
							}),
							/* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								className: "h-9 gap-2 text-[13px] w-full",
								onClick: handleAddOrCreate,
								children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add new address")]
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 gap-2 text-[13px]",
							onClick: handleAddOrCreate,
							children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add billing address")]
						})
					})
				]
			})]
		}), orgId && /* @__PURE__ */ jsx(AddressModal, {
			open: createModalOpen,
			onOpenChange: setCreateModalOpen,
			organizationId: orgId,
			onSuccess: () => setCreateModalOpen(false)
		})] });
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Billing address")
				})
			}), /* @__PURE__ */ jsx(OrgBillingAddressContextMenu, {
				address,
				availableAddresses: (allAddresses || []).filter((addr) => addr.$id !== organization?.billingAddressId),
				onUpdate: () => setEditModalOpen(true),
				onReplace: handleLinkAddress,
				onAddNew: () => setCreateModalOpen(true),
				onRemove: () => setRemoveConfirmOpen(true),
				children: /* @__PURE__ */ jsxs("div", {
					className: "border-t border-border px-6 py-4 flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-4 min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted shrink-0",
							children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-muted-foreground" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-[13px] text-foreground space-y-0.5 min-w-0",
							children: [
								/* @__PURE__ */ jsx("p", { children: address.streetAddress }),
								address.addressLine2 && /* @__PURE__ */ jsx("p", { children: address.addressLine2 }),
								/* @__PURE__ */ jsxs("p", { children: [
									address.city,
									address.state && `, ${address.state}`,
									" ",
									address.postalCode
								] }),
								/* @__PURE__ */ jsx("p", { children: address.country })
							]
						})]
					}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { disabled: setOrgAddressMutation.isPending || deleteOrgAddressMutation.isPending })
					}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
						align: "end",
						className: "w-52",
						children: [
							/* @__PURE__ */ jsx(DropdownMenuItem, {
								className: "text-[13px]",
								onSelect: () => openDialogAfterOverlayCloses(() => setEditModalOpen(true)),
								children: /* @__PURE__ */ jsx(MenuItemContent, {
									icon: Pencil,
									children: t("Update")
								})
							}),
							/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
							/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, {
								className: "text-[13px]",
								children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: ArrowLeftRight }), t("Replace")]
							}), /* @__PURE__ */ jsx(DropdownMenuSubContent, {
								className: "w-52",
								children: (() => {
									const availableAddresses = (allAddresses || []).filter((addr) => addr.$id !== organization?.billingAddressId);
									return /* @__PURE__ */ jsxs(Fragment, { children: [availableAddresses.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
										/* @__PURE__ */ jsx("div", {
											className: "px-2 py-1.5",
											children: /* @__PURE__ */ jsx("p", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: t("Choose existing address")
											})
										}),
										availableAddresses.map((addr) => /* @__PURE__ */ jsx(DropdownMenuItem, {
											className: "text-[13px]",
											onClick: () => handleLinkAddress(addr.$id),
											children: /* @__PURE__ */ jsx(MenuItemContent, {
												icon: MapPin,
												children: /* @__PURE__ */ jsxs("span", {
													className: "truncate",
													children: [addr.streetAddress || t("Address"), addr.city ? `, ${addr.city}` : ""]
												})
											})
										}, addr.$id)),
										/* @__PURE__ */ jsx(DropdownMenuSeparator, {})
									] }), /* @__PURE__ */ jsx(DropdownMenuItem, {
										className: "text-[13px]",
										onSelect: () => openDialogAfterOverlayCloses(() => setCreateModalOpen(true)),
										children: /* @__PURE__ */ jsx(MenuItemContent, {
											icon: Plus,
											children: t("Add")
										})
									})] });
								})()
							})] }),
							/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
							/* @__PURE__ */ jsx(DropdownMenuItem, {
								className: "text-[13px]",
								onSelect: () => openDialogAfterOverlayCloses(() => setRemoveConfirmOpen(true)),
								children: /* @__PURE__ */ jsx(MenuItemContent, {
									icon: Trash2,
									children: t("Remove")
								})
							})
						]
					})] })]
				})
			})]
		}),
		/* @__PURE__ */ jsx(AddressModal, {
			open: editModalOpen,
			onOpenChange: setEditModalOpen,
			address,
			onSuccess: () => setEditModalOpen(false)
		}),
		orgId && /* @__PURE__ */ jsx(AddressModal, {
			open: createModalOpen,
			onOpenChange: setCreateModalOpen,
			organizationId: orgId,
			onSuccess: () => setCreateModalOpen(false)
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: removeConfirmOpen,
			onOpenChange: setRemoveConfirmOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Remove billing address") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Are you sure you want to remove the billing address from"),
							" ",
							/* @__PURE__ */ jsx("strong", { children: organization?.name }),
							"?",
							" ",
							t("The address will remain on your account; only the link to this organization will be removed.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setRemoveConfirmOpen(false),
						disabled: deleteOrgAddressMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: () => handleRemoveAddress(),
						disabled: deleteOrgAddressMutation.isPending,
						children: t("Remove")
					})]
				})]
			})
		})
	] });
}
function AddCreditsModal({ open, onOpenChange, organizationId, organizationName, onSuccess }) {
	const t = useT();
	const [couponCode, setCouponCode] = useState("");
	const trimmedCode = couponCode.trim();
	const addCreditMutation = useAddOrganizationCredit();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!trimmedCode) {
			toast.error(t("Please enter a promo code"));
			return;
		}
		try {
			await addCreditMutation.mutateAsync({
				organizationId,
				couponId: trimmedCode
			});
			const message = organizationName ? `${t("Credit has been added to")} ${organizationName}` : t("Credit has been added to your organization");
			toast.success(message);
			setCouponCode("");
			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			const message = error instanceof Error ? error.message : t("Failed to add credit");
			toast.error(message);
		}
	};
	const handleOpenChange = (newOpen) => {
		if (!newOpen) setCouponCode("");
		onOpenChange(newOpen);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add credits") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Apply Appwrite credits to your organization. Credits expire after a set period and do not roll over.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-4",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "add-credits-code",
							className: "text-[13px]",
							children: t("Add promo code")
						}), /* @__PURE__ */ jsx(Input, {
							id: "add-credits-code",
							value: couponCode,
							onChange: (e) => setCouponCode(e.target.value.trimStart().toUpperCase()),
							placeholder: t("Promo code"),
							className: "mt-2 h-9 text-[13px]",
							disabled: addCreditMutation.isPending,
							autoFocus: true
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => handleOpenChange(false),
							disabled: addCreditMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: !trimmedCode || addCreditMutation.isPending,
							children: t("Add credits")
						})]
					})]
				})
			]
		})
	});
}
function TaxIdSection({ orgId }) {
	const t = useT();
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const updateTaxIdMutation = useUpdateOrganizationTaxId();
	const [taxId, setTaxId] = useState("");
	const [hasChanges, setHasChanges] = useState(false);
	useEffect(() => {
		if (organization?.billingTaxId) {
			setTaxId(organization.billingTaxId);
			setHasChanges(false);
		} else {
			setTaxId("");
			setHasChanges(false);
		}
	}, [organization?.billingTaxId]);
	const handleTaxIdChange = (value) => {
		setTaxId(value);
		setHasChanges(value !== (organization?.billingTaxId || ""));
	};
	const handleUpdate = async () => {
		if (!orgId) return;
		try {
			await updateTaxIdMutation.mutateAsync({
				organizationId: orgId,
				billingTaxId: taxId.trim() || void 0
			});
			toast.success(t("Tax ID updated"));
			setHasChanges(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update tax ID"));
		}
	};
	if (orgLoading && !organization) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Tax ID")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading...")
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Tax ID")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx(Input, {
					value: taxId,
					onChange: (e) => handleTaxIdChange(e.target.value),
					placeholder: t("Enter tax ID (e.g., VAT, GST, EIN)"),
					className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleUpdate,
					disabled: !hasChanges || updateTaxIdMutation.isPending,
					children: t("Update")
				})
			})
		]
	});
}
function BudgetCapSection({ orgId }) {
	const t = useT();
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const { plan, isLoading: planLoading } = useOrganizationPlan(orgId);
	const updateBudgetMutation = useUpdateOrganizationBudget();
	const [budget, setBudget] = useState("");
	const [hasChanges, setHasChanges] = useState(false);
	useEffect(() => {
		if (organization?.billingBudget !== void 0) {
			setBudget(organization.billingBudget > 0 ? organization.billingBudget.toString() : "");
			setHasChanges(false);
		}
	}, [organization?.billingBudget]);
	const enabled = (organization?.billingBudget || 0) > 0;
	const budgetLimitReached = isBudgetLimitReached(organization);
	const isLoading = orgLoading && !organization || planLoading && !plan;
	const supportsBudgeting = plan?.budgeting !== false;
	const handleToggle = async (checked) => {
		if (!orgId) return;
		const newBudget = checked ? budget ? parseFloat(budget) : 100 : 0;
		try {
			await updateBudgetMutation.mutateAsync({
				organizationId: orgId,
				budget: newBudget,
				alerts: organization?.budgetAlerts || []
			});
			setBudget(newBudget > 0 ? newBudget.toString() : "");
			setHasChanges(false);
			toast.success(checked ? t("Budget cap enabled") : t("Budget cap disabled"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update budget cap"));
		}
	};
	const handleLimitChange = (value) => {
		if (/^\d*\.?\d*$/.test(value)) {
			setBudget(value);
			const currentBudget = organization?.billingBudget || 0;
			setHasChanges((value ? parseFloat(value) : 0) !== currentBudget);
		}
	};
	const handleSave = async () => {
		if (!orgId) return;
		const budgetValue = budget ? parseFloat(budget) : 0;
		if (budgetValue <= 0) {
			toast.error(t("Budget cap must be greater than 0"));
			return;
		}
		try {
			await updateBudgetMutation.mutateAsync({
				organizationId: orgId,
				budget: budgetValue,
				alerts: organization?.budgetAlerts || []
			});
			toast.success(t("Budget cap updated"));
			setHasChanges(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update budget cap"));
		}
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Budget cap")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading...")
			})
		})]
	});
	if (!supportsBudgeting) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Budget cap")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-4",
			children: /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
				className: "text-[13px]",
				children: t("Budget caps are not supported on your current plan.")
			})] })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		id: "update-budget",
		className: "scroll-mt-24 rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Budget cap")
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-6 py-4",
				children: [
					budgetLimitReached ? /* @__PURE__ */ jsxs(Alert, {
						className: "mb-4 border-red-600/20 bg-red-500/10 text-red-600 dark:border-red-400/20 dark:bg-red-500/20 dark:text-red-400 [&>svg]:text-current",
						children: [
							/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
							/* @__PURE__ */ jsx(AlertTitle, {
								className: "text-[13px] font-medium text-current",
								children: t("Budget limit reached")
							}),
							/* @__PURE__ */ jsx(AlertDescription, {
								className: "text-[13px] text-current/90",
								children: t("This organization has reached its budget limit and is now blocked. Increase the budget cap below to restore access to billable services.")
							})
						]
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted shrink-0",
								children: /* @__PURE__ */ jsx(Gauge, { className: "h-5 w-5 text-muted-foreground" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Enable budget cap")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: t("Budget cap applies only to additional usage beyond your plan limits")
							})] })]
						}), /* @__PURE__ */ jsx(Switch, {
							checked: enabled,
							onCheckedChange: handleToggle,
							disabled: updateBudgetMutation.isPending
						})]
					}),
					enabled && /* @__PURE__ */ jsxs("div", {
						className: "mt-4 ps-14",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[12px] text-muted-foreground",
							children: t("Budget cap (USD)")
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1.5 flex items-center gap-2",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("span", {
									className: "absolute start-3 top-1/2 -translate-y-1/2 text-[13px] text-muted-foreground",
									children: "$"
								}), /* @__PURE__ */ jsx(Input, {
									value: budget,
									onChange: (e) => handleLimitChange(e.target.value),
									className: "h-9 w-32 ps-7 text-[13px]",
									placeholder: "0.00"
								})]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-start gap-2 rounded-lg bg-muted/50 p-3",
						children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: enabled ? `${t("When your additional usage spending (beyond plan limits) reaches")} ${formatCurrency(parseFloat(budget) || 0)}${t(", all billable services will be paused until the next billing cycle or until you increase your limit.")}` : t("Enable budget cap to prevent unexpected charges from additional usage beyond your plan limits. Your services will automatically pause when the spending limit is reached.")
						})]
					})
				]
			}),
			enabled && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleSave,
					disabled: !hasChanges || updateBudgetMutation.isPending,
					children: t("Update")
				})
			})
		]
	});
}
var AVAILABLE_THRESHOLDS = [
	25,
	50,
	75,
	90,
	100
];
function BillingAlertsSection({ orgId }) {
	const t = useT();
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const updateBudgetMutation = useUpdateOrganizationBudget();
	const [showAddAlert, setShowAddAlert] = useState(false);
	const [newThreshold, setNewThreshold] = useState("");
	const alerts = organization?.budgetAlerts || [];
	const budget = organization?.billingBudget || 0;
	const enabled = budget > 0;
	const usedThresholds = alerts;
	const availableThresholds = AVAILABLE_THRESHOLDS.filter((th) => !usedThresholds.includes(th));
	const handleAddAlert = async () => {
		if (!newThreshold || !orgId) return;
		const threshold = parseInt(newThreshold, 10);
		const newAlerts = [...alerts, threshold].sort((a, b) => a - b);
		try {
			await updateBudgetMutation.mutateAsync({
				organizationId: orgId,
				budget,
				alerts: newAlerts
			});
			toast.success(t("Alert added"));
			setNewThreshold("");
			setShowAddAlert(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to add alert"));
		}
	};
	const handleRemoveAlert = async (threshold) => {
		if (!orgId) return;
		const newAlerts = alerts.filter((th) => th !== threshold);
		try {
			await updateBudgetMutation.mutateAsync({
				organizationId: orgId,
				budget,
				alerts: newAlerts
			});
			toast.success(t("Alert removed"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to remove alert"));
		}
	};
	if (orgLoading && !organization) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Billing alerts")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading...")
			})
		})]
	});
	if (!enabled) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Billing alerts")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-4",
			children: /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
				className: "text-[13px]",
				children: t("Enable budget cap to configure billing alerts.")
			})] })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Billing alerts")
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Get notified when your spending reaches certain thresholds of your budget.")
				})
			}),
			alerts.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border divide-y divide-border",
				children: alerts.map((threshold) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between px-6 py-3 hover:bg-accent/50 transition-colors",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10",
							children: /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-primary" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] font-medium text-foreground",
							children: [
								threshold,
								"% ",
								t("threshold")
							]
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Alert when spending reaches"),
								" ",
								threshold,
								"%",
								" ",
								t("of budget")
							]
						})] })]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-8 w-8 p-0 text-muted-foreground hover:text-foreground",
						onClick: () => handleRemoveAlert(threshold),
						disabled: updateBudgetMutation.isPending,
						children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
					})]
				}, threshold))
			}),
			alerts.length === 0 && /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-6 py-8 text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
					children: /* @__PURE__ */ jsx(Bell, { className: "h-6 w-6 text-muted-foreground" })
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("No billing alerts configured")
				})]
			}),
			showAddAlert && availableThresholds.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs(Select, {
							value: newThreshold,
							onValueChange: setNewThreshold,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-40 h-9 text-[13px]",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select threshold") })
							}), /* @__PURE__ */ jsx(SelectContent, { children: availableThresholds.map((threshold) => /* @__PURE__ */ jsxs(SelectItem, {
								value: threshold.toString(),
								className: "text-[13px]",
								children: [threshold, "%"]
							}, threshold)) })]
						}),
						/* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleAddAlert,
							disabled: !newThreshold || updateBudgetMutation.isPending,
							children: t("Add alert")
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => {
								setShowAddAlert(false);
								setNewThreshold("");
							},
							children: t("Cancel")
						})
					]
				})
			}),
			!showAddAlert && availableThresholds.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 gap-2 text-[13px]",
					onClick: () => setShowAddAlert(true),
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add alert")]
				})
			})
		]
	});
}
var ITEMS_PER_PAGE = 5;
function AvailableCreditsSection({ onAddCredits, orgId }) {
	const t = useT();
	const [requestedPage, setRequestedPage] = useState(0);
	const [displayedPage, setDisplayedPage] = useState(0);
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const { plan, isLoading: planLoading } = useOrganizationPlan(orgId);
	const { data: requestedCreditsData, isFetching: requestedCreditsFetching, error: requestedCreditsError } = useQuery(organizationCreditsQueryOptions(orgId, requestedPage, ITEMS_PER_PAGE));
	const { data: displayedCreditsData, isLoading: displayedCreditsLoading, error: displayedCreditsError } = useQuery(organizationCreditsQueryOptions(orgId, displayedPage, ITEMS_PER_PAGE));
	useEffect(() => {
		if (requestedPage !== displayedPage && !requestedCreditsFetching && requestedCreditsData) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		requestedCreditsFetching,
		requestedCreditsData
	]);
	const credits = displayedCreditsData?.credits || [];
	const creditsTotal = displayedCreditsData?.total || 0;
	const isPageTransitioning = requestedPage !== displayedPage && requestedCreditsFetching;
	const isLoading = orgLoading && !organization || planLoading && !plan || displayedCreditsLoading && credits.length === 0;
	const areCreditsSupported = plan?.supportsCredits === true;
	const totalAvailableCredit = useMemo(() => {
		if (!credits || credits.length === 0) return 0;
		const now = /* @__PURE__ */ new Date();
		return credits.reduce((sum, credit) => {
			if (credit.expiration && new Date(credit.expiration) > now) return sum + (credit.credits || 0);
			return sum;
		}, 0);
	}, [credits]);
	const processedCredits = useMemo(() => {
		if (!credits) return [];
		const now = /* @__PURE__ */ new Date();
		return credits.map((credit) => {
			const expiresAtDate = credit.expiration ? new Date(credit.expiration) : null;
			const isExpired = expiresAtDate ? expiresAtDate < now : false;
			return {
				...credit,
				isExpired,
				expiresAtDate
			};
		}).sort((a, b) => {
			if (a.isExpired !== b.isExpired) return a.isExpired ? 1 : -1;
			if (a.expiresAtDate && b.expiresAtDate) return a.expiresAtDate.getTime() - b.expiresAtDate.getTime();
			return 0;
		});
	}, [credits]);
	const totalPages = Math.max(1, Math.ceil(creditsTotal / ITEMS_PER_PAGE));
	const goToNextPage = () => {
		if (isPageTransitioning) return;
		if (displayedPage < totalPages - 1) setRequestedPage((prev) => Math.min(totalPages - 1, prev + 1));
	};
	const goToPrevPage = () => {
		if (isPageTransitioning) return;
		if (displayedPage > 0) setRequestedPage((prev) => Math.max(0, prev - 1));
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Available credits")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading credits...")
			})
		})]
	});
	if (!areCreditsSupported) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Available credits")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border px-6 py-4",
			children: /* @__PURE__ */ jsx(Alert, { children: /* @__PURE__ */ jsx(AlertDescription, {
				className: "text-[13px]",
				children: t("Upgrade to add credits.")
			}) })
		})]
	});
	const hasCredits = totalAvailableCredit > 0;
	if (displayedCreditsError || requestedCreditsError) {
		const error = displayedCreditsError || requestedCreditsError;
		return /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Available credits")
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-12 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: error instanceof Error ? error.message : t("Failed to load credits")
				})
			})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Available credits")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2 leading-relaxed",
						children: t("Credits expire on the date shown for each code. Unused credits do not roll over after that date.")
					})] }), hasCredits && /* @__PURE__ */ jsxs(Badge, {
						variant: "info",
						className: "h-6 px-2.5 text-[10px] font-medium shrink-0",
						children: [
							t("Balance:"),
							" ",
							formatCurrency(totalAvailableCredit)
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-6 py-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: cn("text-[24px] font-semibold", hasCredits ? "text-foreground" : "text-muted-foreground"),
						children: formatCurrency(totalAvailableCredit)
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Available balance")
					})] })
				}), !hasCredits && processedCredits.length === 0 && /* @__PURE__ */ jsx("div", {
					className: "mt-4 text-center py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("You don't have any credits. Credits can be used to offset your monthly charges.")
					})
				})]
			}),
			processedCredits.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-3 bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Ticket, { className: "h-4 w-4 text-muted-foreground" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-medium text-foreground",
									children: t("Credit History")
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-[11px] text-muted-foreground",
									children: [
										"(",
										creditsTotal,
										")"
									]
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Code")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
									children: t("Total")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
									children: t("Remaining")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
									children: t("Credit expires")
								})
							]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: processedCredits.map((credit) => {
							const isFullyUsed = (credit.credits || 0) === 0;
							const isExpired = credit.isExpired;
							return /* @__PURE__ */ jsxs(TableRow, {
								className: cn("hover:bg-accent/50", (isFullyUsed || isExpired) && "opacity-50"),
								children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("code", {
											className: "rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground",
											children: credit.couponId || "-"
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end text-[13px] text-muted-foreground",
										children: formatCurrency(credit.total || 0, "USD")
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end",
										children: /* @__PURE__ */ jsx("span", {
											className: cn("text-[13px] font-medium", isFullyUsed || isExpired ? "text-muted-foreground line-through" : "text-foreground"),
											children: formatCurrency(credit.credits || 0, "USD")
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end",
										children: credit.expiration ? /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-end gap-2",
											children: [/* @__PURE__ */ jsx(DateTooltip, {
												date: credit.expiration,
												className: cn("text-[12px]", isExpired ? "text-muted-foreground line-through" : "text-foreground")
											}), isExpired ? /* @__PURE__ */ jsx(Badge, {
												variant: "error",
												className: "h-5 px-1.5 text-[10px] shrink-0",
												children: t("Expired")
											}) : credit.expiresAtDate && !isExpired && credit.expiresAtDate.getTime() - Date.now() <= 720 * 60 * 60 * 1e3 ? /* @__PURE__ */ jsx(Badge, {
												variant: "warning",
												className: "h-5 px-1.5 text-[10px] shrink-0",
												children: t("Expires soon")
											}) : null]
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[12px] text-muted-foreground",
											children: "-"
										})
									})
								]
							}, credit.$id);
						}) })] })
					}),
					totalPages > 1 && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between border-t border-border px-6 py-3",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Showing"),
								" ",
								displayedPage * ITEMS_PER_PAGE + 1,
								"–",
								Math.min((displayedPage + 1) * ITEMS_PER_PAGE, creditsTotal),
								" ",
								t("of"),
								" ",
								creditsTotal
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-7 w-7 p-0",
									onClick: goToPrevPage,
									disabled: displayedPage === 0 || isPageTransitioning,
									children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-[12px] text-muted-foreground px-2",
									children: [
										displayedPage + 1,
										" / ",
										totalPages
									]
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-7 w-7 p-0",
									onClick: goToNextPage,
									disabled: displayedPage === totalPages - 1 || isPageTransitioning,
									children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-4 bg-muted/30",
				children: /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 gap-2 text-[13px]",
					onClick: onAddCredits,
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add credits")]
				})
			})
		]
	});
}
function BillingTab() {
	const t = useT();
	const params = useParams({ strict: false });
	const navigate = useNavigate();
	const orgId = params.orgId;
	const [paymentModalOpen, setPaymentModalOpen] = useState(false);
	const [isBackupPaymentMethod, setIsBackupPaymentMethod] = useState(false);
	const [addCreditsModalOpen, setAddCreditsModalOpen] = useState(false);
	const { organization, isLoading: orgLoading } = useOrganizationById(orgId);
	const orgRefs = organization ? asOrganizationPaymentRefs(organization) : null;
	const primaryPaymentMethod = useOrganizationPaymentMethod(orgId, orgRefs?.paymentMethodId ?? void 0);
	useOrganizationPaymentMethod(orgId, orgRefs?.backupPaymentMethodId ?? void 0);
	const retryPaymentMutation = useRetryInvoicePayment();
	const failedInvoice = orgRefs?.failedInvoice;
	const hasFailedInvoice = isSubscriptionFailedInvoiceWithError(failedInvoice);
	const primaryFailed = primaryPaymentMethod.paymentMethod?.failed === true;
	const hasExpiredPaymentMethod = primaryFailed && !orgRefs?.backupPaymentMethodId;
	const hasPlanDowngrade = !!orgRefs?.billingPlanDowngrade;
	const orgBillingReadonly = isOrganizationBillingReadonlyStatus(organization?.status);
	const handleRetryPayment = async () => {
		if (!orgId || !failedInvoice || !organization) return;
		try {
			const paymentMethodId = await resolvePaymentMethodIdForInvoiceRetry({
				organization: asOrganizationPaymentRefs(organization),
				primaryPaymentMethodFailed: primaryFailed
			});
			if (!paymentMethodId) {
				toast.error(t("No payment method available. Please add a payment method first."));
				return;
			}
			await retryPaymentMutation.mutateAsync({
				organizationId: orgId,
				invoiceId: failedInvoice.$id,
				paymentMethodId
			});
			toast.success(t("Payment retry initiated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to retry payment"));
		}
	};
	const handleChangePlan = () => {
		navigateToUpgradeWizard(navigate, orgId);
	};
	const handleAddPaymentMethod = (isBackup = false) => {
		setIsBackupPaymentMethod(isBackup);
		setPaymentModalOpen(true);
	};
	const handlePaymentModalSuccess = () => {
		setPaymentModalOpen(false);
	};
	const handleEditTaxId = () => {};
	const handleAddCredits = () => {
		setAddCreditsModalOpen(true);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SettingsCardsList, { cards: useMemo(() => {
			const items = [];
			if (!orgLoading) {
				if (hasFailedInvoice) items.push({
					id: "alert-failed-invoice",
					search: {
						title: "Payment failed",
						keywords: [
							"failed",
							"retry",
							"outstanding",
							"read-only",
							"invoice"
						]
					},
					node: /* @__PURE__ */ jsxs(WarningAlert, {
						title: orgBillingReadonly ? t("Payment failed - organization has restricted access") : t("Payment failed"),
						children: [
							orgBillingReadonly && /* @__PURE__ */ jsx("p", {
								className: "mb-2 font-medium text-red-600 dark:text-red-400",
								children: t("Changes to projects and services are limited until the outstanding invoice is paid. Complete payment to restore full access.")
							}),
							failedInvoice.lastError || t("Your last payment attempt failed. Please update your payment method and try again."),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3",
								children: /* @__PURE__ */ jsx(Button, {
									size: "sm",
									className: "h-8 bg-red-500 px-3 text-[12px] font-medium text-red-50 hover:bg-red-400",
									onClick: handleRetryPayment,
									disabled: retryPaymentMutation.isPending,
									children: t("Try again")
								})
							})
						]
					})
				});
				if (hasExpiredPaymentMethod) items.push({
					id: "alert-expired-payment-method",
					search: {
						title: "Payment method failed",
						keywords: [
							"expired",
							"declined",
							"failed card",
							"backup"
						]
					},
					node: /* @__PURE__ */ jsx(WarningAlert, {
						title: t("Payment method failed"),
						icon: CreditCard,
						children: t("Your default payment method has failed and you don't have a backup method. Please add a new payment method to continue using our services.")
					})
				});
				if (hasPlanDowngrade) items.push({
					id: "alert-plan-downgrade",
					search: {
						title: "Plan downgrade scheduled",
						keywords: [
							"downgrade",
							"scheduled",
							"end of period",
							"plan"
						]
					},
					node: /* @__PURE__ */ jsxs(Alert, { children: [
						/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
						/* @__PURE__ */ jsx(AlertTitle, { children: t("Plan downgrade scheduled") }),
						/* @__PURE__ */ jsx(AlertDescription, {
							className: "mt-2",
							children: t("Your plan will change at the end of your current billing period. You'll keep access to your current plan features until then.")
						})
					] })
				});
			}
			items.push({
				id: "plan-summary",
				search: {
					title: "Current plan",
					keywords: [
						"plan",
						"subscription",
						"tier",
						"upgrade",
						"downgrade",
						"change plan",
						"pro",
						"scale",
						"core",
						"free",
						"next payment",
						"charges",
						"billing cycle"
					]
				},
				node: /* @__PURE__ */ jsx(PlanSummary, {
					onChangePlan: handleChangePlan,
					orgId
				})
			}, {
				id: "payment-history",
				search: {
					title: "Payment history",
					keywords: [
						"invoice",
						"invoices",
						"receipt",
						"payment history",
						"paid"
					]
				},
				node: /* @__PURE__ */ jsx(PaymentHistory, {})
			}, {
				id: "payment-methods",
				search: {
					title: "Payment methods",
					keywords: [
						"card",
						"credit card",
						"stripe",
						"backup",
						"default payment",
						"payment method",
						"add payment"
					]
				},
				node: /* @__PURE__ */ jsx(PaymentMethods, {
					onAddPaymentMethod: handleAddPaymentMethod,
					orgId
				})
			}, {
				id: "billing-address",
				search: {
					title: "Billing address",
					keywords: [
						"address",
						"country",
						"city",
						"postal",
						"zip",
						"street"
					]
				},
				node: /* @__PURE__ */ jsx(BillingAddressSection, { orgId })
			}, {
				id: "tax-id",
				search: {
					title: "Tax ID",
					keywords: [
						"vat",
						"tax",
						"ein",
						"gst",
						"identification"
					]
				},
				node: /* @__PURE__ */ jsx(TaxIdSection, {
					onEditTaxId: handleEditTaxId,
					orgId
				})
			}, {
				id: "budget-cap",
				search: {
					title: "Budget cap",
					keywords: [
						"budget",
						"spending limit",
						"cap",
						"overage",
						"usage limit"
					]
				},
				node: /* @__PURE__ */ jsx(BudgetCapSection, { orgId })
			}, {
				id: "billing-alerts",
				search: {
					title: "Billing alerts",
					keywords: [
						"alerts",
						"threshold",
						"notification",
						"usage",
						"email"
					]
				},
				node: /* @__PURE__ */ jsx(BillingAlertsSection, { orgId })
			}, {
				id: "available-credits",
				search: {
					title: "Available credits",
					keywords: [
						"credits",
						"balance",
						"coupon",
						"promo",
						"prepaid",
						"add credits"
					]
				},
				node: /* @__PURE__ */ jsx(AvailableCreditsSection, {
					onAddCredits: handleAddCredits,
					orgId
				})
			});
			return items;
		}, [
			orgLoading,
			hasFailedInvoice,
			hasExpiredPaymentMethod,
			hasPlanDowngrade,
			orgBillingReadonly,
			failedInvoice,
			retryPaymentMutation.isPending,
			orgId,
			t
		]) }),
		/* @__PURE__ */ jsx(PaymentModal, {
			open: paymentModalOpen,
			onOpenChange: setPaymentModalOpen,
			organizationId: orgId,
			isBackup: isBackupPaymentMethod,
			onSuccess: handlePaymentModalSuccess
		}),
		orgId && /* @__PURE__ */ jsx(AddCreditsModal, {
			open: addCreditsModalOpen,
			onOpenChange: setAddCreditsModalOpen,
			organizationId: orgId,
			organizationName: organization?.name,
			onSuccess: () => setAddCreditsModalOpen(false)
		})
	] });
}
function EnableBaaDialog({ open, onOpenChange, organizationId, onEnabled }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { organization } = useOrganizationById(organizationId);
	const { addonPrice } = useOrganizationAddonPrice(open ? organizationId : null, "baa");
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const refreshAddonQueries = async () => {
		await Promise.all([
			queryClient.refetchQueries({ queryKey: organizationAddonsQueryOptions(organizationId).queryKey }),
			queryClient.refetchQueries({ queryKey: organizationAddonPriceQueryOptions(organizationId, "baa").queryKey }),
			queryClient.refetchQueries({ queryKey: ["organization", organizationId] }),
			queryClient.refetchQueries({ queryKey: ["billing-aggregation", "organization"] })
		]);
	};
	const handleEnable = async () => {
		setSubmitting(true);
		setError(null);
		try {
			const result = await sdk.forConsole.organizations.createBaaAddon({ organizationId });
			if (isPaymentAuthentication(result)) {
				const paymentMethodId = organization?.paymentMethodId;
				if (!paymentMethodId || !organization?.$id) throw new Error(t("Add a payment method to your organization before enabling this addon."));
				const providerMethodId = await resolveStripeProviderMethodId({
					organizationId: organization.$id,
					paymentMethodId
				});
				await confirmPayment({
					clientSecret: result.clientSecret,
					paymentMethod: providerMethodId
				});
				try {
					await sdk.forConsole.organizations.confirmAddonPayment({
						organizationId,
						addonId: result.addonId
					});
				} catch (confirmError) {
					const candidate = confirmError;
					if (candidate?.type !== "billing_invoice_not_found" && candidate?.type !== "addon_not_found" && candidate?.code !== 404) throw confirmError;
				}
			}
			await refreshAddonQueries();
			toast.success(t("BAA addon has been enabled"));
			onOpenChange(false);
			onEnabled?.();
		} catch (enableError) {
			if (enableError?.code === 409) {
				await refreshAddonQueries();
				toast.success(t("BAA addon is already active for your organization"));
				onOpenChange(false);
				onEnabled?.();
				return;
			}
			setError(getErrorMessage(enableError));
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("HIPAA BAA") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: addonPrice ? t("By clicking Accept & Enable, the monthly addon amount will be added to your subscription and your payment method will be charged the prorated amount immediately for the remaining days in your billing cycle.") : t("By clicking Accept & Enable, you confirm acceptance of the Business Associate Agreement and related terms.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("Your action confirms acceptance of Appwrite's Business Associate Agreement and related terms."),
								" ",
								/* @__PURE__ */ jsx(MarketingSiteLink, {
									className: "font-medium text-foreground underline underline-offset-2",
									href: "/baa",
									target: "_blank",
									rel: "noopener noreferrer",
									children: t("View BAA")
								})
							]
						}),
						addonPrice ? /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border p-4 space-y-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-3 text-[13px]",
									children: [/* @__PURE__ */ jsx("span", { children: addonPrice.name }), /* @__PURE__ */ jsxs("span", {
										className: "tabular-nums",
										children: [
											formatCurrency(addonPrice.monthlyPrice, addonPrice.currency),
											" ",
											"/ ",
											t("month")
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-3 text-[13px] font-medium",
									children: [/* @__PURE__ */ jsx("span", { children: t("Due today (prorated)") }), /* @__PURE__ */ jsx("span", {
										className: "tabular-nums",
										children: formatCurrency(addonPrice.proratedAmount, addonPrice.currency)
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground text-end",
									children: t("* Plus applicable tax and fees")
								})
							]
						}) : null,
						error ? /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-destructive",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						disabled: submitting,
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: submitting || !addonPrice,
						onClick: () => void handleEnable(),
						children: t("Accept & Enable")
					})]
				})
			]
		})
	});
}
function DisableBaaDialog({ open, onOpenChange, organizationId, addonId }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const handleDisable = async () => {
		setSubmitting(true);
		setError(null);
		try {
			await sdk.forConsole.organizations.deleteAddon({
				organizationId,
				addonId
			});
			await Promise.all([queryClient.refetchQueries({ queryKey: organizationAddonsQueryOptions(organizationId).queryKey }), queryClient.refetchQueries({ queryKey: organizationAddonPriceQueryOptions(organizationId, "baa").queryKey })]);
			toast.success(t("BAA addon will be removed at the end of your current billing cycle"));
			onOpenChange(false);
		} catch (disableError) {
			setError(getErrorMessage(disableError));
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Disable BAA") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Are you sure you want to disable the BAA addon? The addon will remain active until the end of your current billing cycle and will not be renewed.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				error ? /* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-destructive",
						children: error
					})
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						disabled: submitting,
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: submitting,
						onClick: () => void handleDisable(),
						children: t("Disable BAA")
					})]
				})
			]
		})
	});
}
function BaaSettingsCard({ organizationId }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { features } = useConsoleProfile();
	const { organization } = useOrganizationById(organizationId);
	const { plan } = useOrganizationPlan(organizationId);
	const { plans } = useBillingPlans();
	const { addons } = useOrganizationAddons(features.billing ? organizationId : null);
	const { addonPrice } = useOrganizationAddonPrice(features.billing ? organizationId : null, "baa");
	const [showEnable, setShowEnable] = useState(false);
	const [showDisable, setShowDisable] = useState(false);
	const [reEnabling, setReEnabling] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const confirmHandledRef = useRef(false);
	const planSupportsBaa = plan?.supportedAddons?.baa === true;
	const canUpgradeToBaa = !planSupportsBaa && hasUpgradeablePlanWithAddon(plan, plans, "baa");
	const baaAddon = useMemo(() => findActiveOrPendingAddon(addons, "baa"), [addons]);
	const isPending = baaAddon?.status === "pending";
	const isActive = baaAddon?.status === "active";
	const isScheduledForRemoval = isAddonScheduledForRemoval(baaAddon);
	const monthlyPriceLabel = addonPrice ? formatCurrency(addonPrice.monthlyPrice, addonPrice.currency) : formatCurrency(350);
	const confirmAddon = async (addonId) => {
		try {
			await sdk.forConsole.organizations.confirmAddonPayment({
				organizationId,
				addonId
			});
			await Promise.all([queryClient.refetchQueries({ queryKey: organizationAddonsQueryOptions(organizationId).queryKey }), queryClient.refetchQueries({ queryKey: ["organization", organizationId] })]);
			toast.success(t("BAA addon has been enabled"));
		} catch (error) {
			const candidate = error;
			if (candidate?.type === "addon_not_found" || candidate?.code === 404) {
				await Promise.all([queryClient.refetchQueries({ queryKey: organizationAddonsQueryOptions(organizationId).queryKey }), queryClient.refetchQueries({ queryKey: ["organization", organizationId] })]);
				toast.success(t("BAA addon has been enabled"));
				return;
			}
			toast.error(getErrorMessage(error));
		}
	};
	useEffect(() => {
		if (!features.billing || typeof window === "undefined") return;
		if (confirmHandledRef.current) return;
		const { type, addonId: searchAddonId } = getAddonConfirmSearchParams(window.location.search);
		if (type !== "confirm-addon") return;
		confirmHandledRef.current = true;
		(async () => {
			let addonId = searchAddonId;
			if (!addonId || addonId === "undefined") try {
				addonId = findActiveOrPendingAddon((await sdk.forConsole.organizations.listAddons({ organizationId })).addons, "baa")?.$id ?? null;
			} catch (error) {
				toast.error(getErrorMessage(error) || t("Unable to verify BAA addon status. Please retry."));
				addonId = null;
			}
			if (addonId) await confirmAddon(addonId);
			navigate({
				to: "/organizations/$orgId/settings/compliance",
				params: { orgId: organizationId },
				replace: true
			});
		})();
	}, [features.billing, organizationId]);
	if (!features.billing) return null;
	const handleRefresh = async () => {
		if (!baaAddon) return;
		setRefreshing(true);
		try {
			await confirmAddon(baaAddon.$id);
		} finally {
			setRefreshing(false);
		}
	};
	const handleReEnable = async () => {
		setReEnabling(true);
		try {
			const result = await sdk.forConsole.organizations.createBaaAddon({ organizationId });
			if (isPaymentAuthentication(result)) {
				const paymentMethodId = organization?.paymentMethodId;
				if (!paymentMethodId || !organization?.$id) throw new Error(t("Add a payment method to your organization before enabling this addon."));
				const providerMethodId = await resolveStripeProviderMethodId({
					organizationId: organization.$id,
					paymentMethodId
				});
				await confirmPayment({
					clientSecret: result.clientSecret,
					paymentMethod: providerMethodId
				});
				await confirmAddon(result.addonId);
				return;
			}
			await Promise.all([queryClient.refetchQueries({ queryKey: organizationAddonsQueryOptions(organizationId).queryKey }), queryClient.refetchQueries({ queryKey: ["organization", organizationId] })]);
			toast.success(t("BAA addon has been re-enabled"));
		} catch (error) {
			toast.error(getErrorMessage(error));
		} finally {
			setReEnabling(false);
		}
	};
	const statusBadge = (() => {
		if (!planSupportsBaa) return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0",
			children: t("Unavailable")
		});
		if (isPending) return /* @__PURE__ */ jsx(Badge, {
			variant: "warning",
			className: "text-[10px] shrink-0",
			children: t("Payment pending")
		});
		if (isActive && isScheduledForRemoval) return /* @__PURE__ */ jsx(Badge, {
			variant: "warning",
			className: "text-[10px] shrink-0",
			children: t("Scheduled for removal")
		});
		if (isActive) return /* @__PURE__ */ jsx(Badge, {
			variant: "success",
			className: "text-[10px] shrink-0",
			children: t("Active")
		});
		return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0",
			children: t("Not enabled")
		});
	})();
	const statusCopy = (() => {
		if (!planSupportsBaa && canUpgradeToBaa) return t("BAA is not available on your current plan. Upgrade your plan to enable it.");
		if (!planSupportsBaa) return t("BAA is not available on your current plan.");
		if (isPending) return t("A payment is awaiting confirmation. If you've completed authentication, click refresh to check the payment status.");
		if (isActive && isScheduledForRemoval) return t("BAA will be removed at the end of your current billing cycle.");
		if (isActive) return null;
		return t("Enable BAA for your organization. This addon costs {price}/month, prorated for your current billing cycle.").replace("{price}", monthlyPriceLabel);
	})();
	const footerAction = (() => {
		if (!planSupportsBaa && canUpgradeToBaa) return /* @__PURE__ */ jsx(Button, {
			size: "sm",
			className: "h-9 text-[13px]",
			onClick: () => navigateToUpgradeWizard(navigate, organizationId),
			children: t("Upgrade plan")
		});
		if (!planSupportsBaa) return null;
		if (isPending) return /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			size: "sm",
			className: "h-9 text-[13px]",
			disabled: refreshing,
			onClick: () => void handleRefresh(),
			children: t("Refresh")
		});
		if (isActive && isScheduledForRemoval) return /* @__PURE__ */ jsx(Button, {
			size: "sm",
			className: "h-9 text-[13px]",
			disabled: reEnabling,
			onClick: () => void handleReEnable(),
			children: t("Keep BAA")
		});
		if (isActive) return /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			size: "sm",
			className: "h-9 text-[13px]",
			onClick: () => setShowDisable(true),
			children: t("Disable")
		});
		return /* @__PURE__ */ jsx(Button, {
			size: "sm",
			className: "h-9 text-[13px]",
			onClick: () => setShowEnable(true),
			children: t("Enable BAA")
		});
	})();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Business associate agreement (BAA)")
						}), statusBadge]
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground max-w-2xl",
						children: t("A BAA is required under HIPAA when Appwrite handles Protected Health Information (PHI) for your organization. Enable it if you process, store, or transmit health data for US patients.")
					}), statusCopy ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: statusCopy
					}) : null]
				}),
				footerAction ? /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-wrap items-center gap-3",
					children: [footerAction, isActive && !isScheduledForRemoval && monthlyPriceLabel ? /* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: t("{price}/month").replace("{price}", monthlyPriceLabel)
					}) : null]
				}) : null
			]
		}),
		/* @__PURE__ */ jsx(EnableBaaDialog, {
			open: showEnable,
			onOpenChange: setShowEnable,
			organizationId
		}),
		baaAddon ? /* @__PURE__ */ jsx(DisableBaaDialog, {
			open: showDisable,
			onOpenChange: setShowDisable,
			organizationId,
			addonId: baaAddon.$id
		}) : null
	] });
}
var COMPANY_NAME = "Appwrite";
var CONTACT_SALES_URL = CONTACT_ENTERPRISE_URL;
var LEGAL_EMAIL = "legal@appwrite.io";
function ComplianceTab() {
	const t = useT();
	const organizationId = useParams({ strict: false }).orgId;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "dpa",
			search: {
				title: "Data processing agreement (DPA)",
				keywords: [
					"dpa",
					"gdpr",
					"legal",
					"data processing"
				]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Data processing agreement (DPA)")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("A DPA is a legally binding document that outlines how"),
								" ",
								COMPANY_NAME,
								" ",
								t("processes personal data on your behalf. It's required for GDPR compliance when handling EU residents' data.")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 mt-3",
							children: [/* @__PURE__ */ jsx(icons_exports.FileText, { className: "h-4 w-4 text-muted-foreground mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Download the DPA, review it with your legal team, sign it, and send a copy to"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground",
										children: LEGAL_EMAIL
									}),
									".",
									" ",
									t("We'll countersign and return a fully executed copy within 5 business days.")
								]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => {
								window.open("/legal/dpa.pdf", "_blank", "noopener,noreferrer");
							},
							children: t("Download DPA")
						})
					})
				]
			})
		},
		{
			id: "baa",
			search: {
				title: "Business associate agreement (BAA)",
				keywords: [
					"baa",
					"hipaa",
					"phi",
					"healthcare"
				]
			},
			node: organizationId ? /* @__PURE__ */ jsx(BaaSettingsCard, { organizationId }) : null
		},
		{
			id: "soc2",
			search: {
				title: "SOC 2 type II report",
				description: "SOC 2 Type II auditing standard for security, availability, and confidentiality. Enterprise plans.",
				keywords: [...SOC2_SETTINGS_KEYWORDS]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("SOC 2 type II report")
							}), /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
								children: t("Enterprise")
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("SOC 2 Type II is an auditing standard that verifies a service provider's security controls over an extended period. It demonstrates that"),
								" ",
								COMPANY_NAME,
								" ",
								t("maintains rigorous security practices for data protection, availability, and confidentiality.")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 mt-3",
							children: [/* @__PURE__ */ jsx(icons_exports.Shield, { className: "h-4 w-4 text-muted-foreground mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground",
										children: t("Why it matters:")
									}),
									" ",
									t("Many enterprise customers and regulated industries require SOC 2 compliance from their vendors. Access to our SOC 2 report is available on Enterprise plans.")
								]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => {
								window.open(CONTACT_SALES_URL, "_blank", "noopener,noreferrer");
							},
							children: t("Contact sales")
						})
					})
				]
			})
		}
	] });
}
function View$2() {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { organizations } = useOrganizations();
	const { apps, isLoading, isFetching } = useOrganizationApps(orgId, useMemo(() => Object.fromEntries(organizations.map((org) => [org.$id, org.name])), [organizations]));
	const createAppMutation = useCreateOrganizationApp(orgId);
	const [createDialogOpen, setCreateDialogOpen] = useState(false);
	const openApp = (app) => {
		if (!orgId) return;
		navigate({
			to: "/organizations/$orgId/apps/$appId",
			params: {
				orgId,
				appId: app.$id
			}
		});
	};
	const handleCreateApp = async (input) => {
		try {
			const app = await createAppMutation.mutateAsync(input);
			setCreateDialogOpen(false);
			toast.success(t("App created as draft"));
			if (orgId && app?.$id) navigate({
				to: "/organizations/$orgId/apps/$appId",
				params: {
					orgId,
					appId: app.$id
				}
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create app")));
		}
	};
	if (isLoading && apps.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-64 items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-4 mb-6",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Apps")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-1",
				children: t("OAuth2 apps published by your organization to the marketplace.")
			})] }), /* @__PURE__ */ jsxs(Button, {
				size: "sm",
				onClick: () => setCreateDialogOpen(true),
				...analyticsAttrs("create-marketplace-app"),
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add app")]
			})]
		}),
		apps.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
			icon: Package,
			title: t("No apps yet"),
			description: t("Create an app to share it with other organizations on the marketplace."),
			action: /* @__PURE__ */ jsx(Button, {
				size: "sm",
				onClick: () => setCreateDialogOpen(true),
				...analyticsAttrs("create-marketplace-app"),
				children: t("Add app")
			}),
			variant: "card"
		}) : /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [isFetching && /* @__PURE__ */ jsx("div", {
				className: "absolute end-0 top-0 z-10",
				children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: apps.map((app) => /* @__PURE__ */ jsx(MarketplaceAppCard, {
					app,
					onClick: () => openApp(app)
				}, app.$id))
			})]
		}),
		/* @__PURE__ */ jsx(CreateMarketplaceApp, {
			open: createDialogOpen,
			onOpenChange: setCreateDialogOpen,
			onCreate: handleCreateApp,
			isSubmitting: createAppMutation.isPending
		})
	] });
}
var defaultManager = {
	name: "Sarah Chen",
	title: "Customer success manager",
	email: "sarah.chen@appwrite.io",
	avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
	calendlyUrl: "https://calendly.com/appwrite/enterprise-success",
	slackChannelUrl: "https://appwrite-community.slack.com/archives/C0123456789",
	slackChannelName: "#acme-corp-support"
};
function EnterpriseSuccessManager({ manager = defaultManager }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-8 rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4 border-b border-border",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Your success team")
				}), /* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-medium text-purple-600 dark:text-purple-300",
					children: t("Custom")
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[13px] text-muted-foreground",
				children: t("Dedicated support for your organization")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative shrink-0",
						children: [/* @__PURE__ */ jsx("img", {
							src: manager.avatar,
							alt: manager.name,
							className: "h-14 w-14 rounded-full object-cover ring-2 ring-background"
						}), /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 end-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "text-[14px] font-medium text-foreground",
								children: manager.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: manager.title
							}),
							/* @__PURE__ */ jsxs("a", {
								href: `mailto:${manager.email}`,
								className: "mt-1 inline-flex items-center gap-1.5 link-neutral text-[12px]",
								children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" }), manager.email]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-5 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 gap-2 text-[13px] border-border hover:bg-accent",
						asChild: true,
						children: /* @__PURE__ */ jsxs("a", {
							href: manager.calendlyUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [
								/* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
								t("Schedule a meeting"),
								/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground" })
							]
						})
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 gap-2 text-[13px] border-border hover:bg-accent",
						asChild: true,
						children: /* @__PURE__ */ jsxs("a", {
							href: manager.slackChannelUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [
								/* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
								manager.slackChannelName,
								/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground" })
							]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-4 text-[12px] text-muted-foreground",
					children: [
						t("Your dedicated Slack channel is monitored during business hours (9am-6pm EST). For urgent issues, please use our"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-neutral",
							children: t("priority support portal")
						}),
						"."
					]
				})
			]
		})]
	});
}
var PROJECT_ROLE_LABELS = {
	owner: "Owner",
	developer: "Developer",
	editor: "Editor",
	analyst: "Analyst"
};
const DEFAULT_PROJECT_ROLE = "developer";
function ProjectAccessSelector({ orgId, value, onChange }) {
	const t = useT();
	const updateRow = (index, patch) => {
		onChange(value.map((row, i) => i === index ? {
			...row,
			...patch
		} : row));
	};
	const removeRow = (index) => {
		onChange(value.filter((_, i) => i !== index));
	};
	const addRow = () => {
		onChange([...value, {
			projectId: "",
			roleName: DEFAULT_PROJECT_ROLE
		}]);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [value.map((row, index) => {
			const takenByOtherRows = value.filter((_, i) => i !== index).map((r) => r.projectId).filter(Boolean);
			return /* @__PURE__ */ jsxs("div", {
				className: "flex items-end gap-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 space-y-1.5",
						children: [index === 0 && /* @__PURE__ */ jsx(Label, {
							className: "text-[13px] font-medium",
							children: t("Project")
						}), /* @__PURE__ */ jsx(ProjectSelector, {
							orgTeamId: orgId,
							value: row.projectId,
							onSelectProject: (projectId) => updateRow(index, { projectId }),
							excludeProjectIds: takenByOtherRows,
							showProjectId: true,
							triggerClassName: "h-9 w-full text-[13px]",
							listClassName: "min-h-0"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "w-36 shrink-0 space-y-1.5",
						children: [index === 0 && /* @__PURE__ */ jsx(Label, {
							className: "text-[13px] font-medium",
							children: t("Role")
						}), /* @__PURE__ */ jsxs(Select, {
							value: row.roleName,
							onValueChange: (roleName) => updateRow(index, { roleName }),
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "h-9 w-full text-[13px]",
								children: /* @__PURE__ */ jsx(SelectValue, {})
							}), /* @__PURE__ */ jsx(SelectContent, { children: PROJECT_ROLE_VALUES.map((role) => /* @__PURE__ */ jsx(SelectItem, {
								value: role,
								children: t(PROJECT_ROLE_LABELS[role])
							}, role)) })]
						})]
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-9 w-9 shrink-0 p-0",
						"aria-label": t("Remove project"),
						onClick: () => removeRow(index),
						children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
					})
				]
			}, index);
		}), /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			size: "sm",
			className: "h-9 text-[13px]",
			onClick: addRow,
			children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add project")]
		})]
	});
}
var ROLE_OPTIONS$1 = [
	{
		value: "owner",
		label: "Owner",
		icon: Shield,
		description: "Full control over all aspects including team and billing."
	},
	{
		value: "developer",
		label: "Developer",
		icon: Code,
		description: "All resources except team management and billing writes."
	},
	{
		value: "editor",
		label: "Editor",
		icon: Edit,
		description: "Can modify most resources but not critical backend."
	},
	{
		value: "analyst",
		label: "Analyst",
		icon: Eye,
		description: "Read-only access across all resources."
	},
	{
		value: "billing",
		label: "Billing",
		icon: CreditCard,
		description: "Billing and payment management only."
	}
];
function InviteMembersDialog({ open, onOpenChange, organizationId, currentMemberCount, memberLimit, organizationPlan, onSuccess }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { features } = useConsoleProfile();
	const [invites, setInvites] = useState([{
		email: "",
		role: "owner"
	}]);
	const [touchedFields, setTouchedFields] = useState(/* @__PURE__ */ new Set());
	const [accessType, setAccessType] = useState("all");
	const [projectAccess, setProjectAccess] = useState([]);
	const supportsProjectRoles = Boolean(features.orgRoles && organizationPlan?.supportsProjectSpecificRoles);
	const useProjectAccess = supportsProjectRoles && accessType === "specific";
	const validProjectAccess = useMemo(() => projectAccess.filter((row) => row.projectId && row.roleName), [projectAccess]);
	const buildRoles = (invite) => {
		if (useProjectAccess) return validProjectAccess.map((row) => buildProjectRole(row.projectId, row.roleName));
		return [features.orgRoles ? invite.role : "owner"];
	};
	const canAddMore = useMemo(() => {
		if (memberLimit === null || memberLimit === 0) return true;
		return currentMemberCount + invites.length < memberLimit;
	}, [
		memberLimit,
		currentMemberCount,
		invites.length
	]);
	const remainingSlots = useMemo(() => {
		if (memberLimit === null || memberLimit === 0) return null;
		return Math.max(0, memberLimit - currentMemberCount - invites.length);
	}, [
		memberLimit,
		currentMemberCount,
		invites.length
	]);
	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const validInviteCount = useMemo(() => invites.filter((invite) => invite.email.trim() !== "" && isValidEmail(invite.email.trim())).length, [invites]);
	const additionalMemberCharge = useMemo(() => {
		if (!features.billing || !organizationPlan || validInviteCount === 0) return null;
		return wouldIncurPlanAddonCharge(organizationPlan, "seats", currentMemberCount, validInviteCount);
	}, [
		features.billing,
		organizationPlan,
		currentMemberCount,
		validInviteCount
	]);
	const isValid = useMemo(() => {
		return invites.length > 0 && invites.every((invite) => invite.email.trim() !== "" && isValidEmail(invite.email.trim())) && canAddMore && (!useProjectAccess || validProjectAccess.length > 0);
	}, [
		invites,
		canAddMore,
		useProjectAccess,
		validProjectAccess
	]);
	const createMembershipMutation = useMutation({ mutationFn: async (invite) => {
		const roles = buildRoles(invite);
		const acceptUrl = `${window.location.origin}/join`;
		return await sdk.forConsole.teams.createMembership({
			teamId: organizationId,
			email: invite.email.trim(),
			roles,
			url: acceptUrl
		});
	} });
	const handleInvite = async () => {
		if (!isValid) return;
		try {
			const results = await Promise.allSettled(invites.map((invite) => createMembershipMutation.mutateAsync(invite)));
			const successes = results.filter((r) => r.status === "fulfilled").length;
			const failures = results.filter((r) => r.status === "rejected").length;
			if (successes > 0) {
				toast.success(`${t("Successfully invited")} ${successes} ${successes !== 1 ? t("members") : t("member")}`);
				onSuccess?.();
			}
			if (failures > 0) {
				const errors = results.filter((r) => r.status === "rejected").map((r) => r.reason?.message || "Unknown error");
				toast.error(`${t("Failed to invite")} ${failures} ${failures !== 1 ? t("members") : t("member")}: ${errors[0]}`);
			}
			queryClient.invalidateQueries({ queryKey: [
				"memberships",
				"organization",
				organizationId
			] });
			setInvites([{
				email: "",
				role: features.orgRoles ? "developer" : "owner"
			}]);
			setAccessType("all");
			setProjectAccess([]);
			onOpenChange(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to invite members"));
		}
	};
	const handleAddInvite = () => {
		if (memberLimit !== null && memberLimit > 0 && currentMemberCount + invites.length >= memberLimit) {
			toast.error(t("Member limit reached"));
			return;
		}
		setInvites([...invites, {
			email: "",
			role: features.orgRoles ? "developer" : "owner"
		}]);
	};
	const handleRemoveInvite = (index) => {
		if (invites.length === 1) setInvites([{
			email: "",
			role: features.orgRoles ? "developer" : "owner"
		}]);
		else setInvites(invites.filter((_, i) => i !== index));
	};
	const handleUpdateInvite = (index, updates) => {
		const newInvites = [...invites];
		newInvites[index] = {
			...newInvites[index],
			...updates
		};
		setInvites(newInvites);
	};
	const handleOpenChange = (newOpen) => {
		if (!newOpen) {
			setInvites([{
				email: "",
				role: features.orgRoles ? "developer" : "owner"
			}]);
			setTouchedFields(/* @__PURE__ */ new Set());
			setAccessType("all");
			setProjectAccess([]);
		}
		onOpenChange(newOpen);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-2xl p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Invite Members") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Invite organization members to your organization. They'll receive an email invitation to join.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 max-h-[60dvh] overflow-y-auto",
					children: [
						memberLimit !== null && memberLimit > 0 && remainingSlots !== null && remainingSlots <= 3 && /* @__PURE__ */ jsx("div", {
							className: "mb-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-amber-600 dark:text-amber-400",
								children: remainingSlots === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
									t("You have reached your member limit."),
									" ",
									/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: organizationId }),
									" ",
									t("to invite more members.")
								] }) : `${t("You have")} ${remainingSlots} ${remainingSlots !== 1 ? t("member slots") : t("member slot")} ${t("remaining.")}`
							})
						}),
						additionalMemberCharge && /* @__PURE__ */ jsx("div", {
							className: "mb-4",
							children: /* @__PURE__ */ jsx(AdditionalChargeAlert, {
								resourceLabel: "member",
								pricePerMonth: additionalMemberCharge.pricePerMonth,
								currency: additionalMemberCharge.currency,
								perUnit: true
							})
						}),
						supportsProjectRoles && /* @__PURE__ */ jsxs("div", {
							className: "mb-4 space-y-1.5",
							children: [/* @__PURE__ */ jsx(Label, {
								className: "text-[13px] font-medium",
								children: t("Access")
							}), /* @__PURE__ */ jsxs(RadioGroup, {
								value: accessType,
								onValueChange: (value) => {
									setAccessType(value);
									if (value === "specific" && projectAccess.length === 0) setProjectAccess([{
										projectId: "",
										roleName: "developer"
									}]);
								},
								className: "flex flex-row gap-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(RadioGroupItem, {
										id: "access-all",
										value: "all"
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "access-all",
										className: "cursor-pointer text-[13px] font-normal",
										children: t("All projects")
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(RadioGroupItem, {
										id: "access-specific",
										value: "specific"
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "access-specific",
										className: "cursor-pointer text-[13px] font-normal",
										children: t("Specific projects")
									})]
								})]
							})]
						}),
						useProjectAccess && /* @__PURE__ */ jsxs("div", {
							className: "mb-4",
							children: [/* @__PURE__ */ jsx(ProjectAccessSelector, {
								orgId: organizationId,
								value: projectAccess,
								onChange: setProjectAccess
							}), validProjectAccess.length === 0 && /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: t("Add at least one project to grant access.")
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "space-y-3",
							children: invites.map((invite, index) => {
								const isTouched = touchedFields.has(index);
								const isEmailValid = invite.email.trim() === "" || isValidEmail(invite.email.trim());
								const isDuplicate = invites.filter((i, idx) => i.email.trim() === invite.email.trim() && idx !== index && i.email.trim() !== "").length > 0;
								const selectedRole = ROLE_OPTIONS$1.find((r) => r.value === invite.role);
								const RoleIcon = selectedRole?.icon || Shield;
								const showEmailError = isTouched && invite.email.trim() !== "" && (!isEmailValid || isDuplicate);
								return /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 rounded-lg border border-border bg-card/50 p-3",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 space-y-1.5",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx(Mail, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
													type: "email",
													placeholder: "email@example.com",
													value: invite.email,
													onChange: (e) => handleUpdateInvite(index, { email: e.target.value }),
													onBlur: () => {
														setTouchedFields((prev) => new Set(prev).add(index));
													},
													className: cn("h-9 ps-10 text-[13px]", showEmailError ? "border-red-500/50 focus:border-red-500/50" : "")
												})]
											}), showEmailError && /* @__PURE__ */ jsxs(Fragment, { children: [!isEmailValid && /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-red-500",
												children: t("Invalid email address")
											}), isDuplicate && isEmailValid && /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-red-500",
												children: t("Duplicate email")
											})] })]
										}),
										features.orgRoles && !useProjectAccess && /* @__PURE__ */ jsx("div", {
											className: "w-36 shrink-0",
											children: /* @__PURE__ */ jsxs(Select, {
												value: invite.role,
												onValueChange: (value) => handleUpdateInvite(index, { role: value }),
												children: [/* @__PURE__ */ jsx(SelectTrigger, {
													className: "h-9 text-[13px] w-full",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-1.5 min-w-0",
														children: [/* @__PURE__ */ jsx(RoleIcon, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
															className: "truncate",
															children: selectedRole ? t(selectedRole.label) : t("Select role")
														})]
													})
												}), /* @__PURE__ */ jsx(SelectContent, {
													className: "min-w-[240px]",
													children: ROLE_OPTIONS$1.map((role) => {
														const Icon$1 = role.icon;
														return /* @__PURE__ */ jsx(SelectItem, {
															value: role.value,
															children: /* @__PURE__ */ jsxs("div", {
																className: "flex items-start gap-2 w-full",
																children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", {
																	className: "flex flex-col min-w-0 flex-1",
																	children: [/* @__PURE__ */ jsx("span", {
																		className: "text-[13px] font-medium",
																		children: t(role.label)
																	}), /* @__PURE__ */ jsx("span", {
																		className: "text-[11px] text-muted-foreground leading-tight mt-0.5",
																		children: t(role.description)
																	})]
																})]
															})
														}, role.value);
													})
												})]
											})
										}),
										invites.length > 1 && /* @__PURE__ */ jsx(Button, {
											variant: "ghost",
											size: "sm",
											className: "h-9 w-9 p-0 shrink-0",
											onClick: () => handleRemoveInvite(index),
											children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
										})
									]
								}, index);
							})
						}),
						canAddMore && /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							className: "mt-3 h-9 text-[13px]",
							onClick: handleAddInvite,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add another member")]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => handleOpenChange(false),
						disabled: createMembershipMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "brandCta",
						size: "sm",
						className: "h-9 text-[13px] font-medium",
						onClick: handleInvite,
						disabled: !isValid || createMembershipMutation.isPending,
						children: `${t("Invite")} ${invites.filter((i) => i.email.trim() !== "").length} ${invites.filter((i) => i.email.trim() !== "").length !== 1 ? t("members") : t("member")}`
					})]
				})
			]
		})
	});
}
function CreateOrganizationDialog({ open, onOpenChange, onCreate, isLoading = false }) {
	const t = useT();
	const [organizationId, setOrganizationId] = useState(void 0);
	const [name, setName] = useState("");
	useEffect(() => {
		if (!open) {
			setOrganizationId(void 0);
			setName("");
		}
	}, [open]);
	const handleOpenChange = (newOpen) => {
		if (!isLoading) onOpenChange(newOpen);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim()) return;
		onCreate({
			organizationId,
			name: name.trim()
		});
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create organization") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create a new organization to manage your projects and organization members.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "organization-id",
								children: t("Organization ID")
							}), /* @__PURE__ */ jsx(IdInput, {
								id: "organization-id",
								value: organizationId,
								onChange: setOrganizationId,
								maxLength: 36,
								disabled: isLoading,
								placeholder: t("Leave blank to auto-generate")
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs(Label, {
								htmlFor: "name",
								children: [
									t("Name"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}), /* @__PURE__ */ jsx(Input, {
								id: "name",
								type: "text",
								placeholder: t("My Organization"),
								value: name,
								onChange: (e) => setName(e.target.value),
								disabled: isLoading,
								maxLength: 128,
								required: true,
								autoFocus: true
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => handleOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || !name.trim(),
							children: t("Create organization")
						})]
					})]
				})
			]
		})
	});
}
function DomainsPlanLimitAlert({ orgId }) {
	const { currentCount, limit, plan, planName } = useOrganizationDomainsPlanLimit(orgId);
	if (plan === void 0) return null;
	return /* @__PURE__ */ jsx(PlanLimitWarning, {
		currentCount,
		limit,
		planName,
		resourceName: "domains",
		orgId,
		fullWidth: false
	});
}
var ROLE_OPTIONS = [
	{
		value: "owner",
		label: "Owner",
		icon: icons_exports.Shield,
		description: "Full control over all aspects including team and billing."
	},
	{
		value: "developer",
		label: "Developer",
		icon: icons_exports.Code,
		description: "All resources except team management and billing writes."
	},
	{
		value: "editor",
		label: "Editor",
		icon: icons_exports.Edit,
		description: "Can modify most resources but not critical backend."
	},
	{
		value: "analyst",
		label: "Analyst",
		icon: icons_exports.Eye,
		description: "Read-only access across all resources."
	},
	{
		value: "billing",
		label: "Billing",
		icon: icons_exports.CreditCard,
		description: "Billing and payment management only."
	}
];
function orgMembershipRoleDisplay(role) {
	const opt = ROLE_OPTIONS.find((r) => r.value === role);
	if (opt) return {
		Icon: opt.icon,
		label: opt.label
	};
	return {
		Icon: icons_exports.Users,
		label: role.charAt(0).toUpperCase() + role.slice(1)
	};
}
function OrgRoleBadge({ role }) {
	const t = useT();
	const { Icon: Icon$1, label } = orgMembershipRoleDisplay(role);
	return /* @__PURE__ */ jsxs(Badge, {
		variant: "secondary",
		className: cn("inline-flex items-center gap-1 border px-2 py-0.5 text-[11px] font-medium"),
		children: [/* @__PURE__ */ jsx(Icon$1, {
			className: "h-3 w-3 shrink-0",
			"aria-hidden": true
		}), t(label)]
	});
}
var HEADER_MEMBER_AVATAR_SLOTS = 2;
function EmptyMemberAvatarSlot({ zIndex, onClick, disabled, disabledTooltip }) {
	const t = useT();
	const button = /* @__PURE__ */ jsx("button", {
		type: "button",
		disabled,
		onClick,
		...analyticsAttrs("invite-org-member"),
		className: cn("relative flex shrink-0 items-center justify-center rounded-full border-2 border-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
		style: { zIndex },
		title: disabled ? void 0 : t("Invite member"),
		"aria-label": t("Invite member"),
		children: /* @__PURE__ */ jsx("div", {
			className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/35 bg-muted/25",
			children: /* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-3.5 w-3.5 text-muted-foreground" })
		})
	});
	if (!disabled || !disabledTooltip) return button;
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: "relative inline-flex shrink-0",
				style: { zIndex },
				children: button
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			className: "max-w-xs text-xs",
			children: disabledTooltip
		})] })
	});
}
function OrgOverview({ tab: tabProp, children }) {
	const t = useT();
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const { orgId } = useParams({ from: "/_public/organizations/$orgId" });
	const location = useLocation();
	const navigate = useNavigate();
	const search = useSearch({ strict: false });
	const matches = useMatches();
	const [searchQuery, setSearchQuery] = useState("");
	const [pinnedDragOverIndex, setPinnedDragOverIndex] = useState(null);
	const [pinnedDraggingIndex, setPinnedDraggingIndex] = useState(null);
	const pinnedDragPreviewRef = useRef(null);
	const { features, isCloud } = useConsoleProfile();
	const supportsMultiTenancy = features.multiTenancy;
	const { access, isLoading: orgScopesLoading } = useOrganizationScopes(orgId);
	const { viewMode: projectsViewMode, setViewMode: setProjectsViewMode } = useServiceListViewMode("projects");
	const { data: failedInvoicePresence } = useOrganizationFailedInvoicePresence(orgId);
	const showFailedInvoiceOrgAlert = features.billing && failedInvoicePresence?.hasFailedInvoice === true;
	const { showSuccessTeamCard: debugShowSuccessTeamCard } = useDebugOverrides();
	const { isDebugModeOpen } = useDebugMode();
	const [lightningCollectorOpen, setLightningCollectorOpen] = useState(false);
	useEffect(() => {
		if (!isDebugModeOpen) setLightningCollectorOpen(false);
	}, [isDebugModeOpen]);
	const isDomainDetailRoute = useMemo(() => {
		if (matches.some((match) => match.routeId.includes("/domains/$domainId") || match.routeId === "/_public/organizations/$orgId/domains/$domainId" || match.routeId.startsWith("/_public/organizations/$orgId/domains/$domainId"))) return true;
		const pathParts = location.pathname.split("/").filter(Boolean);
		const orgIndex = pathParts.findIndex((part) => part === "organizations");
		if (orgIndex >= 0 && pathParts[orgIndex + 2] === "domains" && pathParts[orgIndex + 3]) {
			const domainId = pathParts[orgIndex + 3];
			if (domainId && domainId.length > 10) return true;
		}
		return false;
	}, [matches, location.pathname]);
	const isAppDetailRoute = useMemo(() => {
		if (matches.some((match) => match.routeId.includes("/apps/$appId") || match.routeId.includes("/marketplace/$appId"))) return true;
		const pathParts = location.pathname.split("/").filter(Boolean);
		const orgIndex = pathParts.findIndex((part) => part === "organizations");
		if (orgIndex < 0) return false;
		const segment = pathParts[orgIndex + 2];
		return !!pathParts[orgIndex + 3] && (segment === "apps" || segment === "marketplace");
	}, [matches, location.pathname]);
	const shouldRenderChildren = useMemo(() => {
		if (isDomainDetailRoute) return false;
		const isDomainsIndexRoute = matches.some((match) => match.routeId === "/_public/organizations/$orgId/domains/");
		const isMarketplaceIndexRoute = matches.some((match) => match.routeId === "/_public/organizations/$orgId/marketplace/");
		const pathParts = location.pathname.split("/").filter(Boolean);
		const orgIndex = pathParts.findIndex((part) => part === "organizations");
		const isDomainsRouteByPath = orgIndex >= 0 && pathParts[orgIndex + 2] === "domains" && !pathParts[orgIndex + 3];
		const isMarketplaceRouteByPath = orgIndex >= 0 && pathParts[orgIndex + 2] === "marketplace" && !pathParts[orgIndex + 3];
		return isDomainsIndexRoute || isDomainsRouteByPath || isMarketplaceIndexRoute || isMarketplaceRouteByPath;
	}, [
		matches,
		location.pathname,
		isDomainDetailRoute
	]);
	const activeTab = useMemo(() => {
		if (tabProp) return tabProp;
		if (isDomainDetailRoute || isAppDetailRoute) return null;
		const pathParts = location.pathname.split("/").filter(Boolean);
		const orgIndex = pathParts.findIndex((part) => part === "organizations");
		if (orgIndex >= 0) {
			if (pathParts[orgIndex + 2]) {
				const tabFromPath = pathParts[orgIndex + 2];
				if (tabFromPath === "settings") return "settings";
				if ([
					"projects",
					"marketplace",
					"domains"
				].includes(tabFromPath)) return tabFromPath;
			}
		}
		return "projects";
	}, [
		tabProp,
		location.pathname,
		isDomainDetailRoute,
		isAppDetailRoute
	]);
	const settingsSubTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const orgIndex = pathParts.findIndex((part) => part === "organizations");
		if (orgIndex >= 0 && pathParts[orgIndex + 2] === "settings") {
			const subTab = pathParts[orgIndex + 3];
			if (subTab === "members") return "members";
			if (subTab === "billing") return "billing";
			if (subTab === "compliance") return "compliance";
			if (subTab === "oauth-apps") return "oauth-apps";
			if (subTab === "api-keys") return "api-keys";
			return "overview";
		}
		return "overview";
	}, [location.pathname]);
	const orgSettingsNavItems = useMemo(() => {
		const allNavItems = [
			{
				id: "overview",
				label: t("General"),
				to: "/organizations/$orgId/settings",
				icon: icons_exports.Settings,
				keywords: [
					"general",
					"overview",
					"name",
					"delete"
				]
			},
			{
				id: "members",
				label: t("Members"),
				to: "/organizations/$orgId/settings/members",
				icon: icons_exports.Users,
				keywords: [
					"members",
					"team",
					"invite",
					"roles"
				]
			},
			...features.billing ? [{
				id: "billing",
				label: t("Billing"),
				to: "/organizations/$orgId/settings/billing",
				icon: icons_exports.CreditCard,
				keywords: [
					"billing",
					"payment",
					"invoice",
					"subscription"
				]
			}] : [],
			...features.compliance ? [{
				id: "compliance",
				label: t("Compliance"),
				to: "/organizations/$orgId/settings/compliance",
				icon: icons_exports.ShieldCheck,
				keywords: [
					"compliance",
					"dpa",
					"baa",
					"hipaa",
					"gdpr",
					...SOC2_SETTINGS_KEYWORDS
				]
			}] : [],
			...features.oauthApps ? [{
				id: "oauth-apps",
				label: t("OAuth apps"),
				to: "/organizations/$orgId/settings/oauth-apps",
				icon: icons_exports.KeyRound,
				keywords: [
					"oauth",
					"sso",
					"apps",
					"login"
				]
			}] : [],
			...features.orgApiKeys ? [{
				id: "api-keys",
				label: t("API keys"),
				to: "/organizations/$orgId/settings/api-keys",
				icon: icons_exports.Key,
				keywords: [
					"api",
					"keys",
					"credentials"
				]
			}] : []
		];
		return (features.orgRoles ? allNavItems.filter((item) => {
			if (item.id === "overview") return canAccessOrgSettingsOverview(access);
			if (item.id === "members") return canAccessOrgSettingsMembers(access);
			if (item.id === "billing") return canAccessOrgSettingsBilling(access);
			if (item.id === "compliance") return canAccessOrgSettingsCompliance(access);
			if (item.id === "oauth-apps") return canShowOrgOAuthAppsSettings(access, features);
			if (item.id === "api-keys") return canShowOrgApiKeysSettings(access, features);
			return true;
		}) : allNavItems).map((item) => ({
			...item,
			params: { orgId: orgId ?? "" }
		}));
	}, [
		features,
		access,
		orgId,
		t
	]);
	const orgSettingsCardIndex = useMemo(() => {
		if (supportsMultiTenancy) return ORG_SETTINGS_CARD_INDEX;
		return ORG_SETTINGS_CARD_INDEX.filter((entry) => entry.title !== "Delete organization");
	}, [supportsMultiTenancy]);
	useEffect(() => {
		if (!features.orgRoles || !orgId || activeTab === null || orgScopesLoading) return;
		if (!(canSeeProjects(access, features) || canShowOrgMarketplaceTab(access, features) || canShowOrgDomainsTab(access, features) || canShowOrgSettingsTab(access))) return;
		if (!canAccessOrgOverviewTab(access, features, activeTab)) navigate({
			to: getFirstAllowedOrgOverviewPath(access, features),
			params: { orgId },
			replace: true
		});
	}, [
		features.orgRoles,
		features,
		orgId,
		activeTab,
		orgScopesLoading,
		access,
		navigate
	]);
	const [commandCenterOpen, setCommandCenterOpen] = useState(false);
	const [commandCenterInitialSubPage, setCommandCenterInitialSubPage] = useState(null);
	const [orgSwitcherOpen, setOrgSwitcherOpen] = useState(false);
	const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
	const [updateRoleDialogOpen, setUpdateRoleDialogOpen] = useState(false);
	const [removeMemberDialogOpen, setRemoveMemberDialogOpen] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);
	const [selectedRole, setSelectedRole] = useState("developer");
	const [editAccessType, setEditAccessType] = useState("all");
	const [editProjectAccess, setEditProjectAccess] = useState([]);
	const [createOrgDialogOpen, setCreateOrgDialogOpen] = useState(false);
	const handleOpenCreateOrganization = useCallback(() => {
		if (!supportsMultiTenancy) return;
		if (features.billing) {
			navigate({ to: "/upgrade" });
			return;
		}
		setCreateOrgDialogOpen(true);
	}, [
		features.billing,
		navigate,
		supportsMultiTenancy
	]);
	const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
	const [deleteOrgDialogOpen, setDeleteOrgDialogOpen] = useState(false);
	const [deleteOrgConfirmation, setDeleteOrgConfirmation] = useState("");
	useEffect(() => {
		if (settingsSubTab === "billing" && !features.billing) {
			navigate({
				to: "/organizations/$orgId/settings",
				params: { orgId },
				replace: true
			});
			return;
		}
		if (settingsSubTab === "compliance" && !features.compliance || settingsSubTab === "oauth-apps" && !features.oauthApps || settingsSubTab === "api-keys" && !features.orgApiKeys) {
			navigate({
				to: "/organizations/$orgId/settings",
				params: { orgId },
				replace: true
			});
			return;
		}
		if (features.orgRoles && activeTab === "settings") {
			if (!(settingsSubTab === "members" && canAccessOrgSettingsMembers(access) || settingsSubTab === "billing" && canAccessOrgSettingsBilling(access) || settingsSubTab === "overview" && canAccessOrgSettingsOverview(access) || settingsSubTab === "compliance" && canAccessOrgSettingsCompliance(access) || settingsSubTab === "oauth-apps" && canShowOrgOAuthAppsSettings(access, features) || settingsSubTab === "api-keys" && canShowOrgApiKeysSettings(access, features))) navigate({
				to: getFirstAllowedOrgSettingsPath(access, features, "/organizations/$orgId/settings"),
				params: { orgId },
				replace: true
			});
		}
	}, [
		activeTab,
		settingsSubTab,
		features,
		access,
		orgId,
		navigate
	]);
	const handleOrgNavigate = useCallback((tab) => {
		const route = {
			projects: "/organizations/$orgId",
			marketplace: "/organizations/$orgId/marketplace/",
			domains: "/organizations/$orgId/domains/",
			settings: "/organizations/$orgId/settings",
			"settings/members": "/organizations/$orgId/settings/members",
			"settings/billing": "/organizations/$orgId/settings/billing",
			"settings/compliance": "/organizations/$orgId/settings/compliance",
			"settings/oauth-apps": "/organizations/$orgId/settings/oauth-apps"
		}[tab];
		if (route) navigate({
			to: route,
			params: { orgId },
			replace: true
		});
	}, [navigate, orgId]);
	const openOrgCommandCenter = useCallback(() => {
		setCommandCenterInitialSubPage(null);
		setCommandCenterOpen(true);
	}, []);
	const openOrgShortcutsHelp = useCallback(() => {
		setCommandCenterInitialSubPage("shortcuts");
		setCommandCenterOpen(true);
	}, []);
	useEffect(() => {
		return registerCommandCenterOpener((page) => {
			setCommandCenterInitialSubPage(page);
			setCommandCenterOpen(true);
		});
	}, []);
	useGlobalCommandShortcuts({
		commandCenterOpen,
		onOpenCommandCenter: openOrgCommandCenter,
		onOpenShortcutsHelp: openOrgShortcutsHelp
	});
	useSequentialShortcuts({
		"g p": () => handleOrgNavigate("projects"),
		...canShowOrgDomainsTab(access, features) ? { "g d": () => handleOrgNavigate("domains") } : {},
		...canShowOrgSettingsTab(access) ? { "g s": () => handleOrgNavigate("settings") } : {},
		...canAccessOrgSettingsMembers(access) ? { "g m": () => handleOrgNavigate("settings/members") } : {},
		...canShowOrgBillingNav(access, features) ? { "g b": () => handleOrgNavigate("settings/billing") } : {},
		...canShowOrgComplianceNav(access, features) ? { "g c": () => handleOrgNavigate("settings/compliance") } : {},
		...canCreateProject(access, features) ? { "c p": () => {
			handleOrgNavigate("projects");
			setCreateProjectDialogOpen(true);
		} } : {},
		...supportsMultiTenancy ? { "c t": () => handleOpenCreateOrganization() } : {},
		...canInviteOrgMember(access, features) ? { "c m": () => setInviteDialogOpen(true) } : {}
	}, { enabled: !commandCenterOpen });
	const projectsPageFromSearch = typeof search === "object" && search != null && "projectsPage" in search ? typeof search.projectsPage === "number" ? search.projectsPage : Number(search.projectsPage) : void 0;
	const projectsLimitFromSearch = typeof search === "object" && search != null && "projectsLimit" in search ? typeof search.projectsLimit === "number" ? search.projectsLimit : Number(search.projectsLimit) : void 0;
	const urlProjectsPage = Number.isInteger(projectsPageFromSearch) && (projectsPageFromSearch ?? 0) >= 1 ? projectsPageFromSearch : 1;
	const urlProjectsLimit = Number.isInteger(projectsLimitFromSearch) && (projectsLimitFromSearch ?? 0) >= 1 ? projectsLimitFromSearch : 12;
	const [requestedPage, setRequestedPage] = useState(urlProjectsPage);
	const [displayedPage, setDisplayedPage] = useState(urlProjectsPage);
	const activeProjectsPage = displayedPage;
	const [requestedMembershipsPage, setRequestedMembershipsPage] = useState(1);
	const [displayedMembershipsPage, setDisplayedMembershipsPage] = useState(1);
	const [membershipsPageSize, setMembershipsPageSize] = useState(12);
	const [membershipsSearchQuery, setMembershipsSearchQuery] = useState("");
	const [settingsNavSearch, setSettingsNavSearch] = useState("");
	const { data: organizationsData, isLoading: organizationsLoading } = useQuery({
		...organizationsQueryOptions(),
		placeholderData: keepPreviousData
	});
	const { data: organizationDetail, isLoading: organizationDetailLoading, isFetching: organizationDetailFetching, isFetched: organizationDetailFetched, isError: organizationDetailError } = useQuery({
		...organizationQueryOptions(orgId),
		placeholderData: keepPreviousData
	});
	const organizations = useMemo(() => {
		if (!organizationsData?.teams) return [];
		return organizationsData.teams.map((org) => {
			const plan = getPlanNameFromTier(org.billingPlan ?? org.prefs?.tier ?? "free");
			return {
				$id: org.$id,
				name: org.name,
				slug: org.name.toLowerCase().replace(/\s+/g, "-"),
				avatar: void 0,
				plan,
				members: org.total || 0,
				status: org.status,
				billingPlanDowngrade: org.billingPlanDowngrade
			};
		});
	}, [organizationsData]);
	const selectedOrg = useMemo(() => {
		if (!orgId) return null;
		if (organizations.length > 0) {
			const fromList = organizations.find((org) => org.$id === orgId);
			if (fromList) return fromList;
		}
		if (organizationDetail && organizationDetail.$id === orgId) {
			const planName = getPlanNameFromTier(organizationDetail.billingPlan ?? organizationDetail.prefs?.tier ?? "free");
			return {
				$id: organizationDetail.$id,
				name: organizationDetail.name,
				slug: organizationDetail.name.toLowerCase().replace(/\s+/g, "-"),
				avatar: void 0,
				plan: planName,
				members: organizationDetail.total || 0,
				status: organizationDetail.status,
				billingPlanDowngrade: organizationDetail.billingPlanDowngrade
			};
		}
		return null;
	}, [
		orgId,
		organizations,
		organizationDetail
	]);
	const orgBillingReadonlyForFailedInvoice = showFailedInvoiceOrgAlert && isOrganizationBillingReadonlyStatus(selectedOrg?.status);
	const showBudgetLimitAlert = features.billing && isBudgetLimitReached(organizationDetail);
	const showPlanUsageLimitAlert = features.billing && !showBudgetLimitAlert && isPlanUsageLimitReached(organizationDetail);
	const showProjectsLockedAlert = showBudgetLimitAlert || showPlanUsageLimitAlert;
	const [orgName, setOrgName] = useState("");
	useEffect(() => {
		if (selectedOrg) {
			setOrgName(selectedOrg.name);
			setDeleteOrgConfirmation("");
			setRequestedPage(1);
			setDisplayedPage(1);
			setRequestedMembershipsPage(1);
			setDisplayedMembershipsPage(1);
			setMembershipsSearchQuery("");
		}
	}, [selectedOrg]);
	useEffect(() => {
		if (!(typeof search === "object" && "createOrg" in search && search.createOrg === true) || organizationsLoading) return;
		if (!features.multiTenancy) {
			const url = new URL(window.location.href);
			url.searchParams.delete("createOrg");
			window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
			return;
		}
		if (features.billing) {
			navigate({
				to: "/upgrade",
				replace: true
			});
			return;
		}
		if (!createOrgDialogOpen) {
			setCreateOrgDialogOpen(true);
			navigate({
				to: location.pathname,
				search: (prev) => {
					if (!prev || typeof prev !== "object") return {};
					const newSearch = { ...prev };
					delete newSearch.createOrg;
					return Object.keys(newSearch).length === 0 ? {} : newSearch;
				},
				replace: true
			});
		}
	}, [
		search,
		organizationsLoading,
		createOrgDialogOpen,
		navigate,
		location.pathname,
		features.billing,
		features.multiTenancy
	]);
	useEffect(() => {
		if (typeof search === "object" && "create" in search && search.create === "project" && !organizationsLoading && !createProjectDialogOpen) {
			setCreateProjectDialogOpen(true);
			navigate({
				to: location.pathname,
				search: (prev) => {
					if (!prev || typeof prev !== "object") return {};
					const newSearch = { ...prev };
					delete newSearch.create;
					return Object.keys(newSearch).length === 0 ? {} : newSearch;
				},
				replace: true
			});
		}
	}, [
		search,
		organizationsLoading,
		createProjectDialogOpen,
		navigate,
		location.pathname
	]);
	useEffect(() => {
		if (organizationsLoading || !orgId) return;
		if (!selectedOrg) {
			if (!(organizationDetail?.$id === orgId) && (organizationDetailLoading || organizationDetailFetching || !organizationDetailFetched && !organizationDetailError)) return;
			if (organizations.length > 0) navigate({
				to: "/organizations/$orgId",
				params: { orgId: organizations[0].$id },
				replace: true
			});
			else if (features.billing) navigate({
				to: "/upgrade",
				replace: true
			});
			else if (features.multiTenancy && !createOrgDialogOpen) setCreateOrgDialogOpen(true);
			else navigate({
				to: "/",
				replace: true
			});
		}
	}, [
		selectedOrg,
		organizations,
		organizationsLoading,
		organizationDetail,
		organizationDetailLoading,
		organizationDetailFetching,
		organizationDetailFetched,
		organizationDetailError,
		orgId,
		navigate,
		createOrgDialogOpen,
		features.billing,
		features.multiTenancy
	]);
	const updateOrgPrefsMutation = useMutation({
		mutationFn: async (orgId$1) => {
			const accountPrefs = account?.prefs;
			return await updateAccountPrefs({
				...accountPrefs,
				organization: orgId$1
			});
		},
		onMutate: (orgId$1) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					organization: orgId$1
				}
			} : current);
			syncConsoleAccountAfterMutation(queryClient);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const updateOrgNameMutation = useMutation({
		mutationFn: async ({ orgId: orgId$1, name }) => {
			await sdk.forConsole.teams.updateName({
				teamId: orgId$1,
				name
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
			toast.success(t("Organization name updated successfully"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update organization name"));
		}
	});
	const deleteOrgMutation = useMutation({
		mutationFn: async (orgIdToDelete) => {
			await deleteOrganization(orgIdToDelete);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
			toast.success(t("Organization deleted successfully"));
			setDeleteOrgDialogOpen(false);
			setDeleteOrgConfirmation("");
			const remainingOrgs = organizations.filter((org) => org.$id !== orgId);
			if (remainingOrgs.length > 0) navigate({
				to: "/organizations/$orgId",
				params: { orgId: remainingOrgs[0].$id },
				replace: true
			});
			else navigate({
				to: "/",
				replace: true
			});
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete organization"));
		}
	});
	const createOrgMutation = useCreateOrganization();
	const orgTeamId = orgId || null;
	const { data: consoleTeam } = useConsoleTeam(orgTeamId);
	const teamPrefs = consoleTeam?.prefs;
	const allPinnedIds = useMemo(() => parsePinnedProjectIds(teamPrefs), [teamPrefs]);
	const { data: orgProjectScope } = useQuery(organizationProjectScopeQueryOptions(orgTeamId));
	const restrictToProjectIds = orgProjectScope ?? null;
	const pinnedIds = useMemo(() => {
		if (!restrictToProjectIds) return allPinnedIds;
		const allowed = new Set(restrictToProjectIds);
		return allPinnedIds.filter((id) => allowed.has(id));
	}, [allPinnedIds, restrictToProjectIds]);
	const updateTeamPrefsMutation = useUpdateConsoleTeamPrefs(orgTeamId);
	const projectsSearchActive = Boolean(searchQuery.trim());
	const listExcludePinnedIds = projectsSearchActive ? void 0 : pinnedIds;
	const { data: pinnedProjectsData } = useQuery({
		...pinnedProjectsQueryOptions(orgTeamId, pinnedIds),
		placeholderData: keepPreviousData
	});
	useEffect(() => {
		setRequestedPage((p) => p === urlProjectsPage ? p : urlProjectsPage);
		setDisplayedPage((p) => p === urlProjectsPage ? p : urlProjectsPage);
	}, [urlProjectsPage]);
	const { data: requestedProjectsData, isLoading: activeProjectsLoading, isFetching: activeProjectsFetching, error: activeProjectsError } = useQuery({
		...activeProjectsQueryOptions(orgTeamId, requestedPage - 1, urlProjectsLimit, searchQuery, listExcludePinnedIds, restrictToProjectIds),
		placeholderData: keepPreviousData
	});
	const { data: activeProjectsData, isLoading: displayedProjectsLoading } = useQuery({
		...activeProjectsQueryOptions(orgTeamId, displayedPage - 1, urlProjectsLimit, searchQuery, listExcludePinnedIds, restrictToProjectIds),
		placeholderData: keepPreviousData
	});
	const displayedProjects = activeProjectsData?.projects ?? [];
	const showProjectsLoading = displayedProjectsLoading && displayedProjects.length === 0;
	useEffect(() => {
		if (requestedPage !== displayedPage && !activeProjectsFetching && requestedProjectsData != null) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		activeProjectsFetching,
		requestedProjectsData
	]);
	useEffect(() => {
		setRequestedPage(1);
		setDisplayedPage(1);
	}, [searchQuery]);
	useEffect(() => {
		setPinnedDragOverIndex(null);
		setPinnedDraggingIndex(null);
	}, [searchQuery]);
	const [, setProjectsRendered] = useState(false);
	const projectsContainerRef = useRef(null);
	useEffect(() => {
		if (!activeProjectsLoading && !activeProjectsFetching && activeProjectsData && displayedPage === 1 && !searchQuery.trim()) {
			const checkProjectsRendered = () => {
				const container = projectsContainerRef.current;
				if (container) {
					if (container.querySelectorAll("[data-project-card]").length > 0) {
						setProjectsRendered(true);
						return true;
					}
				}
				return false;
			};
			if (!checkProjectsRendered()) requestAnimationFrame(() => {
				if (!checkProjectsRendered()) setTimeout(() => {
					checkProjectsRendered();
				}, 100);
			});
		} else setProjectsRendered(false);
	}, [
		activeProjectsLoading,
		activeProjectsFetching,
		activeProjectsData,
		displayedPage,
		searchQuery,
		orgId
	]);
	const pinnedProjects = useMemo(() => {
		if (!pinnedProjectsData?.projects?.length) return [];
		const raw = pinnedProjectsData.projects;
		const byId = new Map(raw.map((p) => [p.$id, p]));
		return pinnedIds.map((id) => byId.get(id)).filter((p) => p != null).map(mapProjectToListItem);
	}, [pinnedProjectsData, pinnedIds]);
	const canPinProjectsResult = canPinProjects(access, features);
	const canReorderPinned = canPinProjectsResult && !searchQuery.trim() && pinnedProjects.length > 1;
	const canManageProjects = canCreateProject(access, features);
	const showProjectSettingsTab = canShowProjectSettings(access, features);
	const handlePinProject = (projectId) => {
		if (!canPinProjectsResult) return;
		updateTeamPrefsMutation.mutate((freshPrefs) => {
			const currentPinnedIds = parsePinnedProjectIds(freshPrefs);
			if (currentPinnedIds.length >= 6 && !currentPinnedIds.includes(projectId)) throw new Error(`You can pin up to 6 projects`);
			return buildPinnedProjectIdsPrefs(currentPinnedIds.includes(projectId) ? currentPinnedIds.filter((id) => id !== projectId) : [...currentPinnedIds, projectId].slice(0, 6));
		}, {
			onSuccess: (prefs) => {
				queryClient.invalidateQueries({ queryKey: ["projects"] });
				const nextIds = parsePinnedProjectIds(prefs);
				toast.success(nextIds.includes(projectId) ? t("Project pinned") : t("Project unpinned"));
			},
			onError: (error) => {
				const message = error instanceof Error ? error.message : void 0;
				toast.error(message?.startsWith("You can pin up to") ? message : t("Failed to update pinned projects"));
			}
		});
	};
	const handlePinnedDragStart = useCallback((e, index, projectName) => {
		if (updateTeamPrefsMutation.isPending) {
			e.preventDefault();
			return;
		}
		e.dataTransfer.setData("application/json", JSON.stringify({ index }));
		e.dataTransfer.effectAllowed = "move";
		setPinnedDraggingIndex(index);
		const preview = document.createElement("div");
		preview.style.cssText = "position:fixed;left:-9999px;top:0;z-index:99999;pointer-events:none;";
		preview.className = "flex min-h-[40px] min-w-[200px] max-w-[min(280px,calc(100vw-2rem))] items-center rounded-lg border border-border/80 bg-card px-3 py-2 shadow-md";
		const label = document.createElement("span");
		label.className = "block min-w-0 max-w-[240px] truncate text-[13px] font-medium text-foreground";
		label.textContent = projectName;
		preview.appendChild(label);
		document.body.appendChild(preview);
		pinnedDragPreviewRef.current = preview;
		const rect = preview.getBoundingClientRect();
		e.dataTransfer.setDragImage(preview, Math.min(rect.width / 2, 80), rect.height / 2);
	}, [updateTeamPrefsMutation.isPending]);
	const handlePinnedDragEnd = useCallback(() => {
		setPinnedDraggingIndex(null);
		setPinnedDragOverIndex(null);
		pinnedDragPreviewRef.current?.remove();
		pinnedDragPreviewRef.current = null;
	}, []);
	const handlePinnedDragOver = (e, index) => {
		if (!canReorderPinned || updateTeamPrefsMutation.isPending) return;
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
		setPinnedDragOverIndex(index);
	};
	const handlePinnedCardDragLeave = useCallback((e) => {
		const next = e.relatedTarget;
		if (next && e.currentTarget.contains(next)) return;
		setPinnedDragOverIndex(null);
	}, []);
	const handlePinnedDrop = (e, dropIndex) => {
		e.preventDefault();
		setPinnedDragOverIndex(null);
		setPinnedDraggingIndex(null);
		if (!canReorderPinned || !orgTeamId || updateTeamPrefsMutation.isPending) return;
		const raw = e.dataTransfer.getData("application/json");
		if (!raw) return;
		try {
			const { index: dragIndex } = JSON.parse(raw);
			if (dragIndex === dropIndex) return;
			updateTeamPrefsMutation.mutate((freshPrefs) => {
				return buildPinnedProjectIdsPrefs(reorderPinnedProjectIds(parsePinnedProjectIds(freshPrefs), dragIndex, dropIndex));
			}, {
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ["projects"] });
				},
				onError: () => toast.error(t("Failed to reorder pinned projects"))
			});
		} catch {}
	};
	const handleProjectDeleted = async (projectId) => {
		if (!pinnedIds.includes(projectId)) return;
		try {
			await updateTeamPrefsMutation.mutateAsync((freshPrefs) => {
				const currentPinnedIds = parsePinnedProjectIds(freshPrefs);
				if (!currentPinnedIds.includes(projectId)) return {};
				return buildPinnedProjectIdsPrefs(currentPinnedIds.filter((id) => id !== projectId));
			});
		} catch {}
	};
	const activeProjects = useMemo(() => {
		if (!activeProjectsData?.projects) return [];
		return activeProjectsData.projects.map((project) => mapProjectToListItem(project));
	}, [activeProjectsData]);
	const projectsByTeam = useMemo(() => {
		if (!selectedOrg || activeProjects.length === 0) return [];
		return [{
			team: {
				$id: selectedOrg.$id,
				name: selectedOrg.name,
				color: "from-blue-400 to-violet-500",
				members: selectedOrg.members,
				orgId: selectedOrg.$id
			},
			projects: activeProjects
		}];
	}, [selectedOrg, activeProjects]);
	const totalOrgProjects = useMemo(() => {
		return projectsByTeam.reduce((sum, { projects }) => sum + projects.length, 0);
	}, [projectsByTeam]);
	const activeProjectsTotal = activeProjectsData?.total || 0;
	const lastUnfilteredTotalRef = useRef(0);
	if (!searchQuery && activeProjectsData?.total != null) lastUnfilteredTotalRef.current = activeProjectsData.total + pinnedIds.length;
	const totalProjectsCount = !searchQuery ? (activeProjectsData?.total ?? 0) + pinnedIds.length : lastUnfilteredTotalRef.current;
	const { plan: organizationPlan } = useOrganizationPlan(orgId);
	const supportsAdditionalMembers = useMemo(() => {
		return organizationPlan?.addons?.seats?.supported !== false;
	}, [organizationPlan]);
	const supportsProjectRoles = Boolean(features.orgRoles && organizationPlan?.supportsProjectSpecificRoles);
	const orgProjectNameById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const project of activeProjects) map.set(project.$id, project.name);
		return map;
	}, [activeProjects]);
	const canInviteMembers = canInviteOrgMember(access, features);
	const inviteDisabled = !supportsAdditionalMembers || !canInviteMembers || !orgId;
	const inviteDisabledTooltip = !orgId ? t("Select an organization to invite members.") : !canInviteMembers ? t("You don't have permission to invite members.") : !supportsAdditionalMembers ? t("Member limit reached for your plan.") : void 0;
	useEffect(() => {
		if (!(typeof search === "object" && "invite" in search && search.invite === "member") || organizationsLoading || inviteDialogOpen || inviteDisabled) return;
		setInviteDialogOpen(true);
		navigate({
			to: location.pathname,
			search: (prev) => {
				if (!prev || typeof prev !== "object") return {};
				const newSearch = { ...prev };
				delete newSearch.invite;
				return Object.keys(newSearch).length === 0 ? {} : newSearch;
			},
			replace: true
		});
	}, [
		inviteDialogOpen,
		inviteDisabled,
		location.pathname,
		navigate,
		organizationsLoading,
		search
	]);
	const memberLimit = useMemo(() => {
		if (!organizationPlan) return null;
		const seatsLimit = organizationPlan?.addons?.seats?.limit;
		const seatsPlanIncluded = organizationPlan?.addons?.seats?.planIncluded;
		const planMembers = organizationPlan?.members;
		let limitNum = null;
		if (seatsLimit !== void 0 && seatsLimit !== null) limitNum = Number(seatsLimit);
		else if (seatsPlanIncluded !== void 0 && seatsPlanIncluded !== null) limitNum = Number(seatsPlanIncluded);
		else if (planMembers !== void 0 && planMembers !== null) limitNum = Number(planMembers);
		if (limitNum === 0 && organizationPlan?.addons?.seats?.supported === true) return null;
		return isNaN(limitNum) ? null : limitNum;
	}, [organizationPlan]);
	const supportsSuccessTeam = useMemo(() => {
		if (!organizationPlan) return false;
		return (organizationPlan.name?.toLowerCase() || "") === "custom" || selectedOrg?.plan === "custom";
	}, [organizationPlan, selectedOrg]);
	const { data: requestedMembershipsRaw, isFetching: membershipsRequestedFetching } = useQuery({
		...organizationMembershipsQueryOptions(orgId, requestedMembershipsPage - 1, membershipsPageSize, membershipsSearchQuery),
		placeholderData: keepPreviousData
	});
	const { data: displayedMembershipsRaw, isLoading: displayedMembershipsLoading, error: membershipsError } = useQuery({
		...organizationMembershipsQueryOptions(orgId, displayedMembershipsPage - 1, membershipsPageSize, membershipsSearchQuery),
		placeholderData: keepPreviousData
	});
	const memberships = useMemo(() => mapOrganizationMembershipsToTeamMembers(displayedMembershipsRaw, orgId), [displayedMembershipsRaw, orgId]);
	const { data: memberProjectsData } = useQuery(projectsByIdsQueryOptions(orgTeamId, useMemo(() => {
		if (!supportsProjectRoles) return [];
		const ids = /* @__PURE__ */ new Set();
		for (const member of memberships) for (const id of projectIdsFromRoles(member.roles)) ids.add(id);
		return Array.from(ids);
	}, [memberships, supportsProjectRoles])));
	const memberProjectNameById = useMemo(() => {
		const map = new Map(orgProjectNameById);
		const resolved = memberProjectsData?.projects ?? [];
		for (const project of resolved) map.set(project.$id, project.name);
		return map;
	}, [memberProjectsData, orgProjectNameById]);
	const membershipsTotal = displayedMembershipsRaw?.total ?? 0;
	const membershipsLoading = displayedMembershipsLoading && displayedMembershipsRaw === void 0;
	useEffect(() => {
		if (requestedMembershipsPage !== displayedMembershipsPage && !membershipsRequestedFetching && requestedMembershipsRaw != null) setDisplayedMembershipsPage(requestedMembershipsPage);
	}, [
		membershipsRequestedFetching,
		requestedMembershipsPage,
		displayedMembershipsPage,
		requestedMembershipsRaw
	]);
	const resendInviteMutation = useResendMembershipInvite(orgId);
	const updateRoleMutation = useUpdateMembershipRole(orgId);
	const removeMemberMutation = useRemoveTeamMember(orgId);
	useEffect(() => {
		setRequestedMembershipsPage(1);
		setDisplayedMembershipsPage(1);
	}, [membershipsSearchQuery]);
	const orgTabs = useMemo(() => {
		if (!selectedOrg) return [];
		const tabs = [];
		if (canSeeProjects(access, features)) tabs.push({
			id: "projects",
			label: "Projects",
			to: "/organizations/$orgId"
		});
		if (canShowOrgMarketplaceTab(access, features)) tabs.push({
			id: "marketplace",
			label: "Marketplace",
			to: "/organizations/$orgId/marketplace/"
		});
		if (canShowOrgDomainsTab(access, features)) tabs.push({
			id: "domains",
			label: "Domains",
			to: "/organizations/$orgId/domains/"
		});
		if (canShowOrgSettingsTab(access)) tabs.push({
			id: "settings",
			label: "Settings",
			to: "/organizations/$orgId/settings"
		});
		return tabs;
	}, [
		selectedOrg,
		access,
		features
	]);
	const filteredProjectsByTeam = projectsByTeam.map(({ team, projects }) => ({
		team,
		projects: projectsSearchActive ? projects : projects.filter((p) => p.name?.toLowerCase().includes(searchQuery.toLowerCase()))
	})).filter(({ projects }) => projects.length > 0);
	const displayedProjectsByTeam = activeProjectsFetching && searchQuery.trim() || requestedPage !== displayedPage ? projectsByTeam : filteredProjectsByTeam;
	const showProjectUsageCharts = features.usageStats;
	const skipProjectCardExtras = showProjectsLockedAlert;
	const fetchedProjectRequestsUsageById = useProjectListRequestsUsage(useMemo(() => {
		if (!showProjectUsageCharts || skipProjectCardExtras) return [];
		return [...new Set([...pinnedProjects.map((project) => project.$id), ...displayedProjectsByTeam.flatMap(({ projects }) => projects.map((project) => project.$id))])];
	}, [
		showProjectUsageCharts,
		skipProjectCardExtras,
		pinnedProjects,
		displayedProjectsByTeam
	]), showProjectUsageCharts && !skipProjectCardExtras);
	const projectListPlatformIds = useMemo(() => {
		if (skipProjectCardExtras) return [];
		return [...new Set([...pinnedProjects.map((project) => project.$id), ...displayedProjectsByTeam.flatMap(({ projects }) => projects.map((project) => project.$id))])];
	}, [
		skipProjectCardExtras,
		pinnedProjects,
		displayedProjectsByTeam
	]);
	const fetchedProjectPlatformsById = useProjectListPlatforms(projectListPlatformIds, projectListPlatformIds.length > 0);
	const lockedProjectCardIds = useMemo(() => {
		if (!skipProjectCardExtras) return [];
		return [...new Set([...pinnedProjects.map((project) => project.$id), ...displayedProjectsByTeam.flatMap(({ projects }) => projects.map((project) => project.$id))])];
	}, [
		skipProjectCardExtras,
		pinnedProjects,
		displayedProjectsByTeam
	]);
	const projectRequestsUsageById = useMemo(() => {
		if (!skipProjectCardExtras) return fetchedProjectRequestsUsageById;
		const map = new Map(fetchedProjectRequestsUsageById);
		for (const projectId of lockedProjectCardIds) map.set(projectId, {
			isLoading: false,
			isError: false,
			data: void 0,
			unavailable: true
		});
		return map;
	}, [
		skipProjectCardExtras,
		fetchedProjectRequestsUsageById,
		lockedProjectCardIds
	]);
	const projectPlatformsById = useMemo(() => {
		if (!skipProjectCardExtras) return fetchedProjectPlatformsById;
		const map = new Map(fetchedProjectPlatformsById);
		for (const projectId of lockedProjectCardIds) map.set(projectId, {
			isLoading: false,
			isError: false,
			platforms: [],
			unavailable: true
		});
		return map;
	}, [
		skipProjectCardExtras,
		fetchedProjectPlatformsById,
		lockedProjectCardIds
	]);
	const prefetchOrganizationSwitchData = useCallback(async (nextOrgId) => {
		const [nextTeam] = await Promise.all([
			queryClient.ensureQueryData(consoleTeamQueryOptions(nextOrgId)),
			queryClient.ensureQueryData(organizationsQueryOptions()),
			queryClient.ensureQueryData(organizationQueryOptions(nextOrgId)),
			...features.billing ? [queryClient.ensureQueryData(organizationPlanQueryOptions(nextOrgId)), prefetchOrganizationInvoiceDataIfAllowed(queryClient, nextOrgId)] : [],
			...features.orgRoles ? [queryClient.ensureQueryData(organizationScopesQueryOptions(nextOrgId)).catch(() => {})] : []
		]);
		const nextTeamPrefs = nextTeam?.prefs;
		const nextPinnedIds = parsePinnedProjectIds(nextTeamPrefs);
		const projectPages = Array.from(new Set([0, Math.max(0, requestedPage - 1)]));
		const nextProjectScope = await queryClient.ensureQueryData(organizationProjectScopeQueryOptions(nextOrgId)).catch(() => null);
		await Promise.all([
			queryClient.ensureQueryData(organizationMembershipsQueryOptions(nextOrgId, 0, 12, "")),
			...projectPages.map((page) => queryClient.ensureQueryData(activeProjectsQueryOptions(nextOrgId, page, urlProjectsLimit, searchQuery, searchQuery.trim() ? void 0 : nextPinnedIds, nextProjectScope))),
			...nextPinnedIds.length > 0 ? [queryClient.ensureQueryData(pinnedProjectsQueryOptions(nextOrgId, nextPinnedIds))] : [],
			...activeTab === "domains" ? [queryClient.ensureQueryData(organizationDomainsQueryOptions(nextOrgId, 0, 12, void 0, void 0, DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER)), queryClient.ensureQueryData(organizationDomainsQueryOptions(nextOrgId, 0, 1, void 0, void 0, DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER))] : []
		]);
	}, [
		activeTab,
		features.billing,
		features.orgRoles,
		queryClient,
		requestedPage,
		searchQuery,
		urlProjectsLimit
	]);
	const handleSelectOrg = async (org) => {
		setOrgSwitcherOpen(false);
		const route = (activeTab === "settings" && [
			"members",
			"billing",
			"compliance",
			"oauth-apps",
			"api-keys"
		].includes(settingsSubTab) ? `/organizations/$orgId/settings/${settingsSubTab}` : null) || activeTab && {
			projects: "/organizations/$orgId",
			marketplace: "/organizations/$orgId/marketplace/",
			domains: "/organizations/$orgId/domains/",
			settings: "/organizations/$orgId/settings"
		}[activeTab] || "/organizations/$orgId";
		try {
			await prefetchOrganizationSwitchData(org.$id);
		} catch (error) {
			console.warn("Failed to prefetch organization switch data:", error);
		}
		navigate({
			to: route,
			params: { orgId: org.$id },
			replace: true
		});
		try {
			await updateOrgPrefsMutation.mutateAsync(org.$id);
		} catch (error) {
			console.error("Failed to update organization preference:", error);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(ConsoleLayout, {
			header: {
				onCommandCenterOpen: openOrgCommandCenter,
				onCreateOrganization: supportsMultiTenancy ? handleOpenCreateOrganization : void 0
			},
			headerBanner: /* @__PURE__ */ jsx(OrganizationBillingHeaderBanners, { organizationId: orgId }),
			showFooter: true,
			containerClassName: "org-layout-container",
			children: [
				/* @__PURE__ */ jsx(InitOrgPromoBanner, {}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex h-16 min-h-16 w-full max-w-7xl shrink-0 items-center justify-between gap-3 px-4 sm:px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex h-8 min-h-8 max-h-8 min-w-0 flex-1 items-center gap-2",
						children: [selectedOrg ? supportsMultiTenancy ? /* @__PURE__ */ jsxs(Popover, {
							open: orgSwitcherOpen,
							onOpenChange: setOrgSwitcherOpen,
							children: [/* @__PURE__ */ jsx(PopoverTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs("button", {
									type: "button",
									...analyticsAttrs("organization-switcher"),
									className: "group flex h-8 max-h-8 min-h-8 min-w-0 max-w-full cursor-pointer items-center gap-2 rounded-lg px-2 -ms-2 transition-colors hover:bg-accent",
									children: [
										/* @__PURE__ */ jsx(InitialsAvatar, {
											name: selectedOrg.name,
											size: "sm"
										}),
										/* @__PURE__ */ jsx("h1", {
											className: "m-0 min-w-0 max-w-[10rem] truncate text-[13px] font-semibold leading-tight text-foreground sm:max-w-[14rem] md:max-w-[20rem] lg:max-w-[28rem]",
											children: selectedOrg.name
										}),
										isCloud && /* @__PURE__ */ jsx(Badge, {
											className: cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium leading-none", selectedOrg.billingPlanDowngrade ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : getPlanBadgeColor(selectedOrg.plan)),
											children: selectedOrg.billingPlanDowngrade ? t("Downgraded") : getPlanDisplayName(selectedOrg.plan)
										}),
										/* @__PURE__ */ jsx(icons_exports.ChevronDown, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" })
									]
								})
							}), /* @__PURE__ */ jsxs(PopoverContent, {
								align: "start",
								className: "w-72 border-border bg-popover p-0",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-3 py-2",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
											children: t("Switch organization")
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "max-h-64 overflow-y-auto py-1",
										children: organizations.map((org) => /* @__PURE__ */ jsxs("button", {
											onClick: () => handleSelectOrg(org),
											className: cn("flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-start transition-colors hover:bg-accent", selectedOrg.$id === org.$id && "bg-accent"),
											children: [
												/* @__PURE__ */ jsx(InitialsAvatar, {
													name: org.name,
													size: "md"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex-1 min-w-0",
													children: [/* @__PURE__ */ jsx("p", {
														className: "truncate text-[13px] font-medium text-foreground",
														children: org.name
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [isCloud && /* @__PURE__ */ jsx("span", {
															className: cn("rounded px-1.5 py-0.5 text-[10px] font-medium", org.billingPlanDowngrade ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : getPlanBadgeColor(org.plan)),
															children: org.billingPlanDowngrade ? t("Downgraded") : getPlanDisplayName(org.plan)
														}), /* @__PURE__ */ jsxs("span", {
															className: "text-[11px] text-muted-foreground",
															children: [
																org.members,
																" ",
																org.members !== 1 ? t("members") : t("member")
															]
														})]
													})]
												}),
												selectedOrg.$id === org.$id && /* @__PURE__ */ jsx(icons_exports.Check, { className: "h-4 w-4 text-muted-foreground" })
											]
										}, org.$id))
									}),
									/* @__PURE__ */ jsx("div", {
										className: "border-t border-border p-2",
										children: /* @__PURE__ */ jsxs("button", {
											type: "button",
											...analyticsAttrs("create-organization"),
											onClick: () => {
												setOrgSwitcherOpen(false);
												handleOpenCreateOrganization();
											},
											className: "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
											children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Create organization")]
										})
									})
								]
							})]
						}) : /* @__PURE__ */ jsxs("div", {
							className: "flex h-8 max-h-8 min-h-8 min-w-0 max-w-full items-center gap-2 px-2 -ms-2",
							children: [/* @__PURE__ */ jsx(InitialsAvatar, {
								name: selectedOrg.name,
								size: "sm"
							}), /* @__PURE__ */ jsx("h1", {
								className: "m-0 min-w-0 max-w-[10rem] truncate text-[13px] font-semibold leading-tight text-foreground sm:max-w-[14rem] md:max-w-[20rem] lg:max-w-[28rem]",
								children: selectedOrg.name
							})]
						}) : orgId ? /* @__PURE__ */ jsxs("div", {
							className: "flex h-8 max-h-8 min-h-8 min-w-0 max-w-full items-center gap-2 overflow-hidden px-2 -ms-2",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ jsx("div", { className: "h-6 w-6 shrink-0 animate-pulse rounded-full bg-muted" }),
								/* @__PURE__ */ jsx("div", { className: "h-4 min-h-4 min-w-0 flex-1 max-w-[10rem] animate-pulse rounded bg-muted sm:max-w-[14rem] md:max-w-[20rem]" }),
								isCloud && /* @__PURE__ */ jsx("div", { className: "h-5 max-h-5 min-h-5 w-14 shrink-0 animate-pulse rounded bg-muted" }),
								supportsMultiTenancy && /* @__PURE__ */ jsx("div", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded bg-muted" })
							]
						}) : null, supportsMultiTenancy && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 w-8 shrink-0 p-0 rounded-lg hover:bg-accent",
								"aria-label": t("Create organization"),
								onClick: handleOpenCreateOrganization,
								...analyticsAttrs("create-organization"),
								children: /* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Create organization") }) })] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden h-8 min-h-8 max-h-8 shrink-0 items-center gap-3 sm:flex",
						children: [orgId && /* @__PURE__ */ jsx("div", {
							className: "flex h-8 min-h-8 w-[5.5rem] shrink-0 items-center justify-start",
							children: !selectedOrg || membershipsLoading ? /* @__PURE__ */ jsxs("div", {
								className: "flex -space-x-2",
								"aria-hidden": true,
								children: [/* @__PURE__ */ jsx("div", {
									className: "relative rounded-full border-2 border-background",
									style: { zIndex: 2 },
									children: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 shrink-0 rounded-full bg-muted animate-pulse" })
								}), /* @__PURE__ */ jsx("div", {
									className: "relative rounded-full border-2 border-background",
									style: { zIndex: 1 },
									children: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 shrink-0 rounded-full bg-muted animate-pulse" })
								})]
							}) : (() => {
								const displayMembers = memberships.slice(0, HEADER_MEMBER_AVATAR_SLOTS);
								const totalCount = membershipsTotal;
								const showOverflow = totalCount > HEADER_MEMBER_AVATAR_SLOTS;
								const emptySlotCount = showOverflow ? 0 : Math.max(0, HEADER_MEMBER_AVATAR_SLOTS - totalCount);
								return /* @__PURE__ */ jsxs("div", {
									className: cn("flex h-8 min-h-8 items-center", displayMembers.length + emptySlotCount + (showOverflow ? 1 : 0) > 1 && "-space-x-2"),
									children: [(displayMembers.length > 0 || showOverflow) && /* @__PURE__ */ jsxs(Link, {
										to: "/organizations/$orgId/settings/members",
										params: { orgId },
										className: cn("flex h-8 min-h-8 items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer", (displayMembers.length > 1 || displayMembers.length > 0 && showOverflow) && "-space-x-2"),
										title: t("View members"),
										children: [displayMembers.map((member, index) => /* @__PURE__ */ jsx("div", {
											className: "relative rounded-full border-2 border-background",
											style: { zIndex: emptySlotCount + (displayMembers.length - index) },
											title: member.userName,
											children: /* @__PURE__ */ jsx(InitialsAvatar, {
												name: member.userName,
												size: "md"
											})
										}, member.$id)), showOverflow && /* @__PURE__ */ jsxs("div", {
											className: "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-[11px] font-medium text-foreground/80",
											style: { zIndex: 0 },
											children: ["+", totalCount - HEADER_MEMBER_AVATAR_SLOTS]
										})]
									}), Array.from({ length: emptySlotCount }).map((_, index) => /* @__PURE__ */ jsx(EmptyMemberAvatarSlot, {
										zIndex: emptySlotCount - index,
										onClick: () => setInviteDialogOpen(true),
										disabled: inviteDisabled,
										disabledTooltip: inviteDisabledTooltip
									}, `empty-member-slot-${index}`))]
								});
							})()
						}), /* @__PURE__ */ jsx(TooltipProvider, {
							delayDuration: 0,
							children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex",
									children: /* @__PURE__ */ jsxs(Button, {
										size: "sm",
										variant: "outline",
										className: "h-8 gap-2 border-border text-[13px] text-muted-foreground hover:bg-accent hover:text-foreground",
										onClick: () => setInviteDialogOpen(true),
										disabled: inviteDisabled,
										...analyticsAttrs("invite-org-member"),
										children: [/* @__PURE__ */ jsx(icons_exports.UserPlus, { className: "h-3.5 w-3.5" }), t("Invite")]
									})
								})
							}), inviteDisabledTooltip ? /* @__PURE__ */ jsx(TooltipContent, {
								className: "max-w-xs text-xs",
								children: inviteDisabledTooltip
							}) : null] })
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-b border-border",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto flex min-h-[2.75rem] w-full max-w-7xl items-end gap-0 overflow-x-auto px-4 sm:px-6",
						role: "tablist",
						children: orgTabs.length > 0 ? orgTabs.map((tab) => {
							const tabAnalytics = getOrgTabAnalyticsAction(tab.id);
							return /* @__PURE__ */ jsxs(Link, {
								to: tab.to,
								params: { orgId },
								replace: true,
								role: "tab",
								"aria-selected": activeTab === tab.id,
								...tabAnalytics ? analyticsAttrs(tabAnalytics) : {},
								className: cn("relative flex h-[2.75rem] shrink-0 items-center gap-1.5 px-3 text-[13px] font-medium leading-none transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
								children: [t(tab.label), activeTab === tab.id && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 start-0 end-0 h-0.5 bg-foreground" })]
							}, tab.id);
						}) : orgId ? /* @__PURE__ */ jsxs("div", {
							className: "flex h-[2.75rem] w-full items-center gap-6 px-3",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ jsx("div", { className: "h-4 w-16 animate-pulse rounded bg-muted" }),
								/* @__PURE__ */ jsx("div", { className: "h-4 w-14 animate-pulse rounded bg-muted" }),
								/* @__PURE__ */ jsx("div", { className: "h-4 w-16 animate-pulse rounded bg-muted" })
							]
						}) : null
					})
				})] }),
				activeTab === "domains" ? /* @__PURE__ */ jsx(DomainsPlanLimitAlert, { orgId }) : null,
				activeTab === "settings" && settingsSubTab === "members" && (() => {
					if (!organizationPlan) return null;
					const seatsLimit = organizationPlan?.addons?.seats?.limit;
					const planIncluded = organizationPlan?.addons?.seats?.planIncluded;
					const limitNum = Number(seatsLimit ?? planIncluded);
					const limit = isNaN(limitNum) ? null : limitNum;
					const planName = resolveOrganizationPlanDisplayLabel({
						planName: organizationPlan?.name ?? null,
						planId: organizationPlan?.$id
					}) || "plan";
					if (limit !== null && limit > 0) {
						const isAtLimit = membershipsTotal >= limit;
						const isApproachingLimit = membershipsTotal >= limit * .5;
						if (!isAtLimit && !isApproachingLimit) return null;
						const remaining = Math.max(0, limit - membershipsTotal);
						return /* @__PURE__ */ jsx("div", {
							className: "border-b border-border bg-amber-500/5",
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
								children: /* @__PURE__ */ jsxs(Alert, {
									variant: "default",
									className: "border-amber-500/30 bg-transparent",
									children: [/* @__PURE__ */ jsx(icons_exports.AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-1 items-start justify-between gap-4",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx(AlertTitle, {
												className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
												children: isAtLimit ? `${t("You've reached the limit of")} ${limit} ${limit !== 1 ? t("members") : t("member")}` : t("Approaching member limit")
											}), /* @__PURE__ */ jsx(AlertDescription, {
												className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
												children: /* @__PURE__ */ jsx("span", {
													className: "inline",
													children: isAtLimit ? /* @__PURE__ */ jsxs(Fragment, { children: [
														"Your ",
														planName,
														" plan includes up to ",
														limit,
														" ",
														"member",
														limit !== 1 ? "s" : "",
														".",
														" ",
														/* @__PURE__ */ jsx(Link, {
															to: "/upgrade",
															search: { orgId },
															className: "font-medium underline hover:no-underline",
															children: t("Upgrade")
														}),
														" ",
														t("to unlock more capacity.")
													] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
														"Your ",
														planName,
														" plan includes up to ",
														limit,
														" ",
														"member",
														limit !== 1 ? "s" : "",
														". You have",
														" ",
														remaining,
														" remaining.",
														" ",
														/* @__PURE__ */ jsx(Link, {
															to: "/upgrade",
															search: { orgId },
															className: "font-medium underline hover:no-underline",
															children: t("Upgrade")
														}),
														" ",
														t("to unlock more capacity.")
													] })
												})
											})]
										}), /* @__PURE__ */ jsx(Button, {
											asChild: true,
											size: "sm",
											className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/upgrade",
												search: { orgId },
												children: t("Upgrade")
											})
										})]
									})]
								})
							})
						});
					}
					return null;
				})(),
				activeTab === "projects" && (() => {
					if (!organizationPlan) return null;
					const projectLimit = organizationPlan?.addons?.projects?.limit;
					const planIncluded = organizationPlan?.addons?.projects?.planIncluded;
					const limitNum = Number(projectLimit ?? planIncluded);
					const limit = isNaN(limitNum) ? null : limitNum;
					const planName = resolveOrganizationPlanDisplayLabel({
						planName: organizationPlan?.name ?? null,
						planId: organizationPlan?.$id
					}) || "plan";
					if (limit !== null && limit > 0) {
						if (!(totalProjectsCount >= limit)) return null;
						return /* @__PURE__ */ jsx("div", {
							className: "border-b border-border bg-amber-500/5",
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
								children: /* @__PURE__ */ jsxs(Alert, {
									variant: "default",
									className: "border-amber-500/30 bg-transparent",
									children: [/* @__PURE__ */ jsx(icons_exports.AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-1 items-start justify-between gap-4",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx(AlertTitle, {
												className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
												children: `${t("You've reached the limit of")} ${limit} ${limit !== 1 ? t("projects") : t("project")}`
											}), /* @__PURE__ */ jsx(AlertDescription, {
												className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
												children: /* @__PURE__ */ jsx("span", {
													className: "inline",
													children: /* @__PURE__ */ jsxs(Fragment, { children: [
														"Your ",
														planName,
														" plan includes up to ",
														limit,
														" ",
														"project",
														limit !== 1 ? "s" : "",
														".",
														" ",
														/* @__PURE__ */ jsx(Link, {
															to: "/upgrade",
															search: { orgId },
															className: "font-medium underline hover:no-underline",
															children: t("Upgrade")
														}),
														" ",
														t("to unlock more capacity.")
													] })
												})
											})]
										}), /* @__PURE__ */ jsx(Button, {
											asChild: true,
											size: "sm",
											className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/upgrade",
												search: { orgId },
												children: t("Upgrade")
											})
										})]
									})]
								})
							})
						});
					}
					return null;
				})(),
				/* @__PURE__ */ jsx("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto min-w-0 max-w-7xl px-4 py-4 sm:px-6",
						children: shouldRenderChildren && children ? /* @__PURE__ */ jsx("div", {
							className: "h-full",
							children
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [
							activeTab === "projects" && /* @__PURE__ */ jsxs(Fragment, { children: [
								isDebugModeOpen && /* @__PURE__ */ jsx(LightningCollectorGame, {
									open: lightningCollectorOpen,
									onOpenChange: setLightningCollectorOpen
								}),
								activeProjectsError && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center justify-center py-16 text-center",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted",
											children: /* @__PURE__ */ jsx(icons_exports.Search, { className: "h-6 w-6 text-muted-foreground" })
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-medium text-foreground",
											children: t("Failed to load projects")
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-[13px] text-muted-foreground",
											children: activeProjectsError instanceof Error ? activeProjectsError.message : t("An error occurred")
										})
									]
								}),
								!activeProjectsError && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-4 flex items-center gap-3",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "relative min-w-0 flex-1 @[640px]:max-w-xs",
											children: [/* @__PURE__ */ jsx(icons_exports.Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
												placeholder: t("Search projects..."),
												value: searchQuery,
												onChange: (e) => setSearchQuery(e.target.value),
												className: "h-9 border-border bg-accent/50 ps-10 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
											})]
										}),
										/* @__PURE__ */ jsx(ServiceListViewToggle, {
											viewMode: projectsViewMode,
											onViewModeChange: setProjectsViewMode
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "ms-auto flex shrink-0 items-center gap-2",
											children: [isDebugModeOpen && /* @__PURE__ */ jsx(LightningCollectorTrigger, {
												open: lightningCollectorOpen,
												onOpenChange: setLightningCollectorOpen
											}), (() => {
												if (!canCreateProject(access, features)) return /* @__PURE__ */ jsx(TooltipProvider, {
													delayDuration: 0,
													children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(Button, {
															variant: "brandCta",
															className: "h-9 gap-2 text-[13px] font-medium opacity-50 cursor-not-allowed",
															disabled: true,
															...analyticsAttrs("create-project"),
															children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Create project")]
														}) })
													}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("You don't have permission to create projects.") }) })] })
												});
												if (!organizationPlan) return /* @__PURE__ */ jsxs(Button, {
													variant: "brandCta",
													className: "h-9 gap-2 text-[13px] font-medium",
													onClick: () => setCreateProjectDialogOpen(true),
													...analyticsAttrs("create-project"),
													children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Create project")]
												});
												const projectLimit = organizationPlan?.addons?.projects?.limit;
												const planIncluded = organizationPlan?.addons?.projects?.planIncluded;
												const limitNum = Number(projectLimit ?? planIncluded);
												const limit = isNaN(limitNum) ? null : limitNum;
												const isAtLimit = limit !== null && limit > 0 && totalProjectsCount >= limit;
												return /* @__PURE__ */ jsx(TooltipProvider, {
													delayDuration: 0,
													children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Button, {
															variant: "brandCta",
															className: "h-9 gap-2 text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed",
															disabled: isAtLimit,
															onClick: () => setCreateProjectDialogOpen(true),
															...analyticsAttrs("create-project"),
															children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Create project")]
														}) })
													}), isAtLimit && /* @__PURE__ */ jsx(TooltipContent, {
														side: "bottom",
														children: /* @__PURE__ */ jsx("p", { children: t("You've reached the limit for projects on your plan") })
													})] })
												});
											})()]
										})
									]
								}), showProjectsLoading ? /* @__PURE__ */ jsx("div", {
									className: "rounded-lg border border-border bg-card py-12 text-center",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Loading projects...")
									})
								}) : /* @__PURE__ */ jsxs(Fragment, { children: [
									!projectsSearchActive && pinnedProjects.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "mb-8",
										children: [/* @__PURE__ */ jsx("h2", {
											className: "mb-3 text-[13px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Pinned")
										}), projectsViewMode === "list" ? /* @__PURE__ */ jsx(ProjectsListTable, {
											projects: pinnedProjects,
											showProjectSettingsTab,
											canDeleteProject: canManageProjects,
											onProjectDeleted: handleProjectDeleted,
											showFailedInvoiceOrgAlert,
											orgBillingReadonlyForFailedInvoice,
											budgetLimitReached: showProjectsLockedAlert,
											showUsageCharts: showProjectUsageCharts,
											projectRequestsUsageById,
											projectPlatformsById,
											canPinProjects: canPinProjectsResult,
											pinnedIds,
											onPinProject: handlePinProject,
											isPinPending: updateTeamPrefsMutation.isPending
										}) : /* @__PURE__ */ jsx("div", {
											className: "grid min-w-0 gap-3 @[640px]:grid-cols-2 @[1024px]:grid-cols-3 [&>*]:min-w-0",
											children: pinnedProjects.map((project, index) => {
												const isDragActive = canReorderPinned && pinnedDraggingIndex !== null;
												const isDragSource = isDragActive && pinnedDraggingIndex === index;
												const isDropTarget = isDragActive && pinnedDragOverIndex === index && pinnedDraggingIndex !== index;
												const isDragDimmed = isDragActive && pinnedDraggingIndex !== index && pinnedDragOverIndex !== index;
												return /* @__PURE__ */ jsx(ProjectContextMenu, {
													project,
													showSettingsTab: showProjectSettingsTab,
													canDeleteProject: canManageProjects,
													onProjectDeleted: handleProjectDeleted,
													canPinProjects: canPinProjectsResult,
													isPinned: true,
													onPinProject: handlePinProject,
													isPinPending: updateTeamPrefsMutation.isPending,
													children: /* @__PURE__ */ jsxs("div", {
														className: cn(RESOURCE_CARD_PADDED_CLASSNAME, "cursor-pointer hover:border-border hover:bg-card", "pb-0", "group relative transition-[opacity,transform,box-shadow,border-color] duration-200 ease-out", !isDragActive && "border-border", isDragSource && "z-0 scale-[0.99] opacity-[0.48] ring-2 ring-dashed ring-muted-foreground/45", isDropTarget && "z-20 border-border opacity-100 ring-1 ring-inset ring-primary/35", isDragDimmed && "opacity-[0.26]"),
														"data-project-card": true,
														onDragOver: canReorderPinned ? (e) => handlePinnedDragOver(e, index) : void 0,
														onDragLeave: canReorderPinned ? handlePinnedCardDragLeave : void 0,
														onDrop: canReorderPinned ? (e) => handlePinnedDrop(e, index) : void 0,
														children: [
															/* @__PURE__ */ jsx(Link, {
																to: "/projects/$projectId",
																params: { projectId: project.$id },
																className: "absolute inset-0 z-0",
																"aria-label": `${t("Open")} ${project.name}`
															}),
															/* @__PURE__ */ jsx("div", {
																className: cn("relative z-[1] min-w-0 pointer-events-none", (canReorderPinned || canPinProjectsResult) && "pe-10"),
																children: /* @__PURE__ */ jsx(ProjectListCardMain, {
																	project,
																	budgetLimitReached: showProjectsLockedAlert,
																	failedInvoiceWarning: /* @__PURE__ */ jsx(FailedInvoiceWarningIcon, {
																		show: showFailedInvoiceOrgAlert,
																		orgBillingReadonly: orgBillingReadonlyForFailedInvoice,
																		className: "shrink-0"
																	})
																})
															}),
															showProjectUsageCharts ? /* @__PURE__ */ jsx(ProjectListCardRequestsChart, {
																projectId: project.$id,
																usageByProjectId: projectRequestsUsageById
															}) : null,
															/* @__PURE__ */ jsx(ProjectListCardFooter, {
																project,
																showSettingsTab: showProjectSettingsTab,
																platformsByProjectId: projectPlatformsById
															}),
															(canReorderPinned || canPinProjectsResult) && /* @__PURE__ */ jsxs("div", {
																className: cn("absolute end-2 top-2 z-10 flex shrink-0 items-center gap-0.5 opacity-0 pointer-events-none transition-opacity group-hover:pointer-events-auto group-hover:opacity-100", isDragActive && "pointer-events-auto opacity-100"),
																children: [canPinProjectsResult ? /* @__PURE__ */ jsx(TooltipProvider, {
																	delayDuration: 0,
																	children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																		asChild: true,
																		children: /* @__PURE__ */ jsx(Button, {
																			variant: "ghost",
																			size: "icon",
																			className: "h-8 w-8 rounded-md",
																			"aria-label": t("Unpin project"),
																			onClick: (e) => {
																				e.preventDefault();
																				handlePinProject(project.$id);
																			},
																			disabled: updateTeamPrefsMutation.isPending,
																			children: /* @__PURE__ */ jsx(icons_exports.PinOff, { className: "h-4 w-4" })
																		})
																	}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Unpin project") }) })] })
																}) : null, canReorderPinned ? /* @__PURE__ */ jsx(TooltipProvider, {
																	delayDuration: 0,
																	children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																		asChild: true,
																		children: /* @__PURE__ */ jsx(Button, {
																			type: "button",
																			variant: "ghost",
																			size: "icon",
																			draggable: !updateTeamPrefsMutation.isPending,
																			onDragStart: (e) => handlePinnedDragStart(e, index, project.name ?? ""),
																			onDragEnd: handlePinnedDragEnd,
																			className: cn("h-8 w-8 cursor-grab rounded-md active:cursor-grabbing", updateTeamPrefsMutation.isPending && "pointer-events-none opacity-40"),
																			"aria-grabbed": pinnedDraggingIndex === index,
																			"aria-label": `${t("Drag to reorder")} ${project.name}`,
																			children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" })
																		})
																	}), /* @__PURE__ */ jsx(TooltipContent, {
																		side: "top",
																		children: /* @__PURE__ */ jsx("p", { children: t("Drag to reorder") })
																	})] })
																}) : null]
															})
														]
													})
												}, project.$id);
											})
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-8",
										ref: projectsContainerRef,
										children: displayedProjectsByTeam.map(({ team, projects }) => /* @__PURE__ */ jsxs("div", { children: [!projectsSearchActive && pinnedProjects.length > 0 && /* @__PURE__ */ jsx("h2", {
											className: "mb-3 text-[13px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("All projects")
										}), projectsViewMode === "list" ? /* @__PURE__ */ jsx(ProjectsListTable, {
											projects,
											showProjectSettingsTab,
											canDeleteProject: canManageProjects,
											onProjectDeleted: handleProjectDeleted,
											showFailedInvoiceOrgAlert,
											orgBillingReadonlyForFailedInvoice,
											budgetLimitReached: showProjectsLockedAlert,
											showUsageCharts: showProjectUsageCharts,
											projectRequestsUsageById,
											projectPlatformsById,
											canPinProjects: canPinProjectsResult,
											pinnedIds,
											onPinProject: handlePinProject,
											isPinPending: updateTeamPrefsMutation.isPending
										}) : /* @__PURE__ */ jsx("div", {
											className: "grid min-w-0 gap-3 @[640px]:grid-cols-2 @[1024px]:grid-cols-3 [&>*]:min-w-0",
											children: projects.map((project) => {
												const canPin = pinnedIds.length < 6;
												return /* @__PURE__ */ jsx(ProjectContextMenu, {
													project,
													showSettingsTab: showProjectSettingsTab,
													canDeleteProject: canManageProjects,
													onProjectDeleted: handleProjectDeleted,
													canPinProjects: canPinProjectsResult,
													isPinned: false,
													canPinMore: canPin,
													onPinProject: handlePinProject,
													isPinPending: updateTeamPrefsMutation.isPending,
													children: /* @__PURE__ */ jsxs("div", {
														className: cn(RESOURCE_CARD_PADDED_CLASSNAME, "cursor-pointer hover:border-border hover:bg-card", "group relative pb-0"),
														"data-project-card": true,
														children: [
															/* @__PURE__ */ jsx(Link, {
																to: "/projects/$projectId",
																params: { projectId: project.$id },
																className: "absolute inset-0 z-0",
																"aria-label": `${t("Open")} ${project.name}`
															}),
															/* @__PURE__ */ jsx("div", {
																className: cn("relative z-[1] min-w-0 pointer-events-none", canPin && canPinProjectsResult && "pe-10"),
																children: /* @__PURE__ */ jsx(ProjectListCardMain, {
																	project,
																	budgetLimitReached: showProjectsLockedAlert,
																	failedInvoiceWarning: /* @__PURE__ */ jsx(FailedInvoiceWarningIcon, {
																		show: showFailedInvoiceOrgAlert,
																		orgBillingReadonly: orgBillingReadonlyForFailedInvoice,
																		className: "shrink-0"
																	})
																})
															}),
															showProjectUsageCharts ? /* @__PURE__ */ jsx(ProjectListCardRequestsChart, {
																projectId: project.$id,
																usageByProjectId: projectRequestsUsageById
															}) : null,
															/* @__PURE__ */ jsx(ProjectListCardFooter, {
																project,
																showSettingsTab: showProjectSettingsTab,
																platformsByProjectId: projectPlatformsById
															}),
															canPin && canPinProjectsResult && /* @__PURE__ */ jsx("div", {
																className: "absolute end-2 top-2 z-10 flex shrink-0 opacity-0 pointer-events-none transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
																children: /* @__PURE__ */ jsx(TooltipProvider, {
																	delayDuration: 0,
																	children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																		asChild: true,
																		children: /* @__PURE__ */ jsx(Button, {
																			variant: "ghost",
																			size: "icon",
																			className: "h-8 w-8 rounded-md",
																			"aria-label": t("Pin project"),
																			onClick: (e) => {
																				e.preventDefault();
																				handlePinProject(project.$id);
																			},
																			disabled: updateTeamPrefsMutation.isPending,
																			children: /* @__PURE__ */ jsx(icons_exports.Pin, { className: "h-4 w-4" })
																		})
																	}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Pin project") }) })] })
																})
															})
														]
													})
												}, project.$id);
											})
										})] }, team.$id))
									}),
									(projectsSearchActive || pinnedProjects.length === 0) && displayedProjectsByTeam.length === 0 && /* @__PURE__ */ jsx(EmptyState, {
										icon: icons_exports.Folder,
										title: t("No projects yet"),
										description: t("Create your first project to get started"),
										isEmpty: !searchQuery,
										hasFilters: !!searchQuery,
										variant: "card"
									}),
									activeProjectsTotal > urlProjectsLimit && /* @__PURE__ */ jsx(Pagination, {
										currentPage: activeProjectsPage,
										totalItems: activeProjectsTotal,
										pageSize: urlProjectsLimit,
										pageSizeOptions: [
											12,
											18,
											36,
											72
										],
										onPageChange: (page) => {
											setRequestedPage(page);
											navigate({
												to: location.pathname,
												search: (prev) => ({
													...typeof prev === "object" && prev ? prev : {},
													projectsPage: page,
													projectsLimit: urlProjectsLimit
												}),
												replace: true
											});
										},
										onPageSizeChange: (size) => {
											setRequestedPage(1);
											setDisplayedPage(1);
											navigate({
												to: location.pathname,
												search: (prev) => ({
													...typeof prev === "object" && prev ? prev : {},
													projectsPage: 1,
													projectsLimit: size
												}),
												replace: true
											});
										},
										itemLabel: t("projects")
									}),
									supportsSuccessTeam && debugShowSuccessTeamCard && /* @__PURE__ */ jsx(EnterpriseSuccessManager, {})
								] })] })
							] }),
							activeTab === "settings" && /* @__PURE__ */ jsx(SettingsLayoutShell, {
								navItems: orgSettingsNavItems.map((item) => item.id === "billing" && (showProjectsLockedAlert || showFailedInvoiceOrgAlert) ? {
									...item,
									endAdornment: /* @__PURE__ */ jsx(icons_exports.AlertTriangle, {
										className: "h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-400",
										"aria-label": showBudgetLimitAlert ? t("Budget limit reached") : showPlanUsageLimitAlert ? t("Plan limit reached") : t("Payment failed")
									})
								} : item),
								activeSectionId: settingsSubTab,
								cardIndex: orgSettingsCardIndex,
								searchQuery: settingsNavSearch,
								onSearchQueryChange: setSettingsNavSearch,
								onNavigateToSection: (sectionId) => {
									const item = orgSettingsNavItems.find((n) => n.id === sectionId);
									if (item && orgId) navigate({
										to: item.to,
										params: { orgId }
									});
								},
								children: settingsSubTab === "billing" ? /* @__PURE__ */ jsx(BillingTab, {}) : settingsSubTab === "compliance" ? /* @__PURE__ */ jsx(ComplianceTab, {}) : settingsSubTab === "oauth-apps" ? /* @__PURE__ */ jsx(View$2, {}) : settingsSubTab === "api-keys" ? /* @__PURE__ */ jsx(SettingsCardsList, {
									className: "mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6",
									cards: [
										{
											id: "api-key-types",
											search: {
												title: "API key types",
												description: "Keys apply at different levels. Each key has its own permissions (scopes) to control access.",
												keywords: [
													"api",
													"keys",
													"scopes",
													"credentials"
												]
											},
											node: /* @__PURE__ */ jsx("div", {
												className: "rounded-xl border border-border bg-card/50 overflow-hidden",
												children: /* @__PURE__ */ jsxs("div", {
													className: "px-6 py-4",
													children: [/* @__PURE__ */ jsx("h3", {
														className: "text-[15px] font-semibold text-foreground",
														children: t("API key types")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-1 text-[13px] text-muted-foreground",
														children: t("Keys apply at different levels. Each key has its own permissions (scopes) to control access.")
													})]
												})
											})
										},
										{
											id: "project-keys",
											search: {
												title: "Project keys",
												keywords: [
													"database",
													"storage",
													"functions",
													"project"
												]
											},
											node: /* @__PURE__ */ jsxs("div", {
												className: "rounded-xl border border-border bg-card/50 overflow-hidden transition-colors hover:border-border/80",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "px-4 py-3",
													children: [/* @__PURE__ */ jsx("h3", {
														className: "text-[13px] font-semibold text-foreground",
														children: t("Project keys")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-1 text-[12px] text-muted-foreground leading-relaxed",
														children: t("Databases, storage, users, functions. One project per key.")
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "flex min-h-9 w-full items-center border-t border-border px-4 py-3 bg-muted/20",
													children: activeProjects.length > 0 ? /* @__PURE__ */ jsx(ProjectSelector, {
														orgTeamId,
														getProjectLink: (projectId) => ({
															to: "/projects/$projectId/api-keys",
															params: { projectId }
														}),
														showApiKeysCount: true
													}) : /* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														className: "h-9 w-full justify-between text-[13px] font-normal",
														asChild: true,
														children: /* @__PURE__ */ jsxs(Link, {
															to: "/organizations/$orgId",
															params: { orgId: orgId ?? "" },
															className: "inline-flex items-center gap-1.5",
															children: [t("Create a project first"), /* @__PURE__ */ jsx(icons_exports.ChevronRight, { className: "h-3.5 w-3.5 shrink-0" })]
														})
													})
												})]
											})
										},
										{
											id: "account-keys",
											search: {
												title: "Account keys",
												keywords: [
													"cli",
													"sessions",
													"user",
													"account"
												]
											},
											node: /* @__PURE__ */ jsxs("div", {
												className: "rounded-xl border border-border bg-card/50 overflow-hidden transition-colors hover:border-border/80",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "px-4 py-3",
													children: [/* @__PURE__ */ jsx("h3", {
														className: "text-[13px] font-semibold text-foreground",
														children: t("Account keys")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-1 text-[12px] text-muted-foreground leading-relaxed",
														children: t("Account-level ops, CLI auth, sessions. Per-user credentials.")
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "flex min-h-9 w-full items-center border-t border-border px-4 py-3 bg-muted/20",
													children: /* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														className: "h-9 w-full justify-between text-[13px] font-normal",
														asChild: true,
														children: /* @__PURE__ */ jsxs(Link, {
															to: "/account",
															className: "inline-flex items-center gap-1.5",
															children: [t("Account settings"), /* @__PURE__ */ jsx(icons_exports.ChevronRight, { className: "h-3.5 w-3.5 shrink-0" })]
														})
													})
												})]
											})
										},
										{
											id: "org-keys",
											search: {
												title: "Org keys",
												keywords: [
													"billing",
													"team",
													"organization",
													"org"
												]
											},
											node: /* @__PURE__ */ jsxs("div", {
												className: "rounded-xl border border-border bg-card/50 overflow-hidden transition-colors hover:border-border/80",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "px-4 py-3",
													children: [/* @__PURE__ */ jsx("h3", {
														className: "text-[13px] font-semibold text-foreground",
														children: t("Org keys")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-1 text-[12px] text-muted-foreground leading-relaxed",
														children: t("Billing, team, cross-project. One key for the whole org.")
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "flex min-h-9 w-full items-center border-t border-border px-4 py-3 bg-muted/20",
													children: /* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														className: "h-9 w-full justify-between text-[13px] font-normal",
														asChild: true,
														children: /* @__PURE__ */ jsxs(DocsRouteLink, {
															className: "inline-flex items-center gap-1.5",
															href: "/docs/advanced/platform/api-keys",
															children: [t("Docs"), /* @__PURE__ */ jsx(icons_exports.ExternalLink, { className: "h-3.5 w-3.5 shrink-0" })]
														})
													})
												})]
											})
										},
										{
											id: "api-keys-info",
											search: {
												title: "API key types",
												keywords: [
													"organization-level",
													"server-side",
													"manageable"
												]
											},
											node: /* @__PURE__ */ jsx("div", {
												className: "rounded-lg border border-border bg-muted/20 px-4 py-3",
												children: /* @__PURE__ */ jsxs("p", {
													className: "text-[12px] text-muted-foreground",
													children: [/* @__PURE__ */ jsx(icons_exports.Info, { className: "mb-0.5 me-2 inline-block h-4 w-4 align-middle" }), t("Organization-level keys will be manageable here once available. Meanwhile, use project keys for server-side access.")]
												})
											})
										}
									]
								}) : settingsSubTab === "members" ? /* @__PURE__ */ jsxs(Fragment, { children: [membershipsError && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center justify-center py-16 text-center",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted",
											children: /* @__PURE__ */ jsx(icons_exports.Users, { className: "h-6 w-6 text-muted-foreground" })
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-medium text-foreground",
											children: t("Failed to load members")
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-[13px] text-muted-foreground",
											children: membershipsError instanceof Error ? membershipsError.message : t("An error occurred")
										})
									]
								}), !membershipsError && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-4 flex items-center gap-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative w-64",
										children: [/* @__PURE__ */ jsx(icons_exports.Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
											placeholder: t("Search members..."),
											value: membershipsSearchQuery,
											onChange: (e) => setMembershipsSearchQuery(e.target.value),
											className: "h-9 border-border bg-accent/50 ps-10 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
										})]
									}), /* @__PURE__ */ jsx(TooltipProvider, {
										delayDuration: 0,
										children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("span", {
												className: "ms-auto inline-flex",
												children: /* @__PURE__ */ jsxs(Button, {
													variant: "brandCta",
													className: "h-9 gap-2 text-[13px] font-medium",
													onClick: () => setInviteDialogOpen(true),
													disabled: inviteDisabled,
													...analyticsAttrs("invite-org-member"),
													children: [/* @__PURE__ */ jsx(icons_exports.Plus, { className: "h-4 w-4" }), t("Invite")]
												})
											})
										}), inviteDisabledTooltip ? /* @__PURE__ */ jsx(TooltipContent, {
											className: "max-w-xs text-xs",
											children: inviteDisabledTooltip
										}) : null] })
									})]
								}), membershipsLoading ? /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center justify-center py-16 text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted",
										children: /* @__PURE__ */ jsx(icons_exports.Users, { className: "h-6 w-6 text-muted-foreground" })
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Loading members...")
									})]
								}) : memberships.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
									className: "rounded-lg border border-border bg-card overflow-hidden",
									children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
										className: "hover:bg-transparent border-b border-border",
										children: [
											/* @__PURE__ */ jsx(TableHead, {
												className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
												children: t("Member")
											}),
											features.orgRoles && /* @__PURE__ */ jsx(TableHead, {
												className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-center",
												children: t("Role")
											}),
											supportsProjectRoles && /* @__PURE__ */ jsx(TableHead, {
												className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-center hidden md:table-cell",
												children: t("Projects")
											}),
											features.accountMfa && /* @__PURE__ */ jsx(TableHead, {
												className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-center hidden sm:table-cell",
												children: t("MFA")
											}),
											/* @__PURE__ */ jsx(TableHead, {
												className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end hidden sm:table-cell",
												children: t("Joined")
											}),
											/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[40px]" })
										]
									}) }), /* @__PURE__ */ jsx(TableBody, { children: memberships.map((member) => {
										const memberProjectAccess = supportsProjectRoles ? parseProjectAccess(member.roles) : [];
										const isProjectScoped = memberProjectAccess.length > 0;
										const projectLabel = (projectId) => memberProjectNameById.get(projectId) ?? projectId;
										const canManageMembers = canInviteOrgMember(access, features);
										return /* @__PURE__ */ jsx(OrgMemberContextMenu, {
											orgId,
											member,
											canManageMembers,
											onUpdate: canManageMembers && member.status !== "pending" ? () => {
												setSelectedMember(member);
												setSelectedRole(member.role);
												setEditAccessType(memberProjectAccess.length > 0 ? "specific" : "all");
												setEditProjectAccess(memberProjectAccess);
												setUpdateRoleDialogOpen(true);
											} : void 0,
											onRemove: canManageMembers ? () => {
												setSelectedMember(member);
												setRemoveMemberDialogOpen(true);
											} : void 0,
											children: /* @__PURE__ */ jsxs(TableRow, {
												className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
												children: [
													/* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3",
														children: /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-3 min-w-0",
															children: [/* @__PURE__ */ jsx(InitialsAvatar, {
																name: member.userName || member.userEmail,
																size: "sm",
																className: "shrink-0"
															}), /* @__PURE__ */ jsxs("div", {
																className: "flex-1 min-w-0",
																children: [/* @__PURE__ */ jsxs("div", {
																	className: "flex min-w-0 items-center gap-2",
																	children: [/* @__PURE__ */ jsx("p", {
																		className: "min-w-0 truncate text-[13px] font-medium text-foreground",
																		children: member.userName || member.userEmail
																	}), member.status === "pending" && /* @__PURE__ */ jsx(Badge, {
																		variant: "secondary",
																		className: "text-[11px] font-medium border px-2 py-0.5 shrink-0",
																		children: t("Pending")
																	})]
																}), /* @__PURE__ */ jsx("div", {
																	className: "mt-0.5",
																	children: /* @__PURE__ */ jsx("p", {
																		className: "truncate text-[12px] text-muted-foreground",
																		children: member.userEmail
																	})
																})]
															})]
														})
													}),
													features.orgRoles && /* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3",
														children: /* @__PURE__ */ jsx("div", {
															className: "flex flex-nowrap items-center justify-center gap-1 whitespace-nowrap",
															children: isProjectScoped ? /* @__PURE__ */ jsx("span", {
																className: "text-[12px] text-muted-foreground",
																children: t("Per project")
															}) : /* @__PURE__ */ jsx(OrgRoleBadge, { role: member.role })
														})
													}),
													supportsProjectRoles && /* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3 hidden md:table-cell",
														children: /* @__PURE__ */ jsx("div", {
															className: "flex items-center justify-center",
															children: !isProjectScoped ? /* @__PURE__ */ jsx("span", {
																className: "text-[12px] text-muted-foreground",
																children: t("All projects")
															}) : /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx("button", {
																	type: "button",
																	className: "inline-flex cursor-pointer items-center rounded-md px-1.5 py-0.5 text-[12px] text-foreground hover:bg-muted/60",
																	children: `${memberProjectAccess.length} ${t("projects")}`
																})
															}), /* @__PURE__ */ jsxs(PopoverContent, {
																align: "center",
																className: "w-64 p-0",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "border-b border-border px-3 py-2 text-[11px] font-medium text-muted-foreground",
																	children: t("Project access")
																}), /* @__PURE__ */ jsx("div", {
																	className: "max-h-64 overflow-y-auto py-1",
																	children: memberProjectAccess.map((row) => /* @__PURE__ */ jsxs("div", {
																		className: "flex items-center justify-between gap-3 px-3 py-1.5",
																		children: [/* @__PURE__ */ jsx("span", {
																			className: "min-w-0 truncate text-[12px] text-foreground",
																			title: projectLabel(row.projectId),
																			children: projectLabel(row.projectId)
																		}), /* @__PURE__ */ jsx("span", {
																			className: "shrink-0 text-[11px] text-muted-foreground",
																			children: t(orgMembershipRoleDisplay(row.roleName).label)
																		})]
																	}, row.projectId))
																})]
															})] })
														})
													}),
													features.accountMfa && /* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3 hidden sm:table-cell",
														children: /* @__PURE__ */ jsx("div", {
															className: "flex items-center justify-center",
															children: member.status === "pending" ? /* @__PURE__ */ jsx("span", {
																className: "text-muted-foreground/50 text-[12px]",
																children: "-"
															}) : member.mfaEnabled ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx("div", {
																	className: "flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(icons_exports.CheckCircle2, { className: "h-4 w-4 text-green-600 dark:text-green-400" })
																})
															}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", {
																className: "text-xs",
																children: t("Multi-factor authentication enabled")
															}) })] }) : /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx("div", {
																	className: "flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(icons_exports.XCircle, { className: "h-4 w-4 text-muted-foreground/40" })
																})
															}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", {
																className: "text-xs",
																children: t("Multi-factor authentication not enabled")
															}) })] })
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3 hidden sm:table-cell",
														children: /* @__PURE__ */ jsx("div", {
															className: "text-end",
															children: member.status === "pending" ? /* @__PURE__ */ jsx("span", {
																className: "text-[12px] text-muted-foreground/70 italic",
																children: t("Invited")
															}) : /* @__PURE__ */ jsx(DateTooltip, {
																date: new Date(member.joinedAt),
																className: "text-[12px] text-muted-foreground font-mono"
															})
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3",
														children: /* @__PURE__ */ jsx("div", {
															className: "flex items-center justify-end",
															children: member.status === "pending" ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
															}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
																align: "end",
																className: "w-48",
																children: [
																	/* @__PURE__ */ jsx(DropdownMenuItem, {
																		onClick: async () => {
																			try {
																				const roles = member.roles && member.roles.length > 0 ? member.roles : [member.role];
																				await resendInviteMutation.mutateAsync({
																					membershipId: member.membershipId || member.$id,
																					email: member.userEmail,
																					roles
																				});
																				toast.success(t("Invitation resent successfully"));
																			} catch (error) {
																				toast.error(error?.message || t("Failed to resend invitation"));
																			}
																		},
																		disabled: resendInviteMutation.isPending,
																		children: /* @__PURE__ */ jsx(MenuItemContent, {
																			icon: icons_exports.Mail,
																			children: resendInviteMutation.isPending ? t("Resending...") : t("Resend")
																		})
																	}),
																	/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
																	/* @__PURE__ */ jsx(DropdownMenuItem, {
																		onClick: () => {
																			setSelectedMember(member);
																			setRemoveMemberDialogOpen(true);
																		},
																		children: /* @__PURE__ */ jsx(MenuItemContent, {
																			icon: icons_exports.Trash2,
																			children: t("Remove")
																		})
																	})
																]
															})] }) : /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
																asChild: true,
																children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
															}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
																align: "end",
																className: "w-48",
																children: [canInviteOrgMember(access, features) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
																	onClick: () => {
																		setSelectedMember(member);
																		const role = member.role;
																		setSelectedRole(role);
																		setUpdateRoleDialogOpen(true);
																	},
																	children: /* @__PURE__ */ jsx(MenuItemContent, {
																		icon: icons_exports.UserCog,
																		children: t("Update")
																	})
																}), /* @__PURE__ */ jsx(DropdownMenuSeparator, {})] }), canInviteOrgMember(access, features) && /* @__PURE__ */ jsx(DropdownMenuItem, {
																	onClick: () => {
																		setSelectedMember(member);
																		setRemoveMemberDialogOpen(true);
																	},
																	children: /* @__PURE__ */ jsx(MenuItemContent, {
																		icon: icons_exports.Trash2,
																		children: t("Remove")
																	})
																})]
															})] })
														})
													})
												]
											})
										}, member.$id);
									}) })] })
								}), membershipsTotal > 0 && /* @__PURE__ */ jsx(Pagination, {
									currentPage: displayedMembershipsPage,
									totalItems: membershipsTotal,
									pageSize: membershipsPageSize,
									pageSizeOptions: [
										12,
										18,
										36,
										72
									],
									onPageChange: (page) => setRequestedMembershipsPage(page),
									onPageSizeChange: (size) => {
										setMembershipsPageSize(size);
										setRequestedMembershipsPage(1);
										setDisplayedMembershipsPage(1);
									},
									itemLabel: t("members")
								})] }) : /* @__PURE__ */ jsx(EmptyState, {
									icon: icons_exports.Users,
									title: t("No members found"),
									description: membershipsSearchQuery ? void 0 : t("Invite organization members to collaborate on your projects"),
									isEmpty: !membershipsSearchQuery,
									hasFilters: !!membershipsSearchQuery,
									variant: "centered",
									iconSize: "md"
								})] })] }) : /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
									...selectedOrg ? [{
										id: "org-id",
										search: {
											title: "Organization ID",
											keywords: [
												"id",
												"api",
												"webhook",
												"sdk",
												"copy"
											]
										},
										node: /* @__PURE__ */ jsxs("div", {
											className: "rounded-xl border border-border bg-card/50 overflow-hidden",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ jsx("h3", {
														className: "text-[15px] font-semibold text-foreground",
														children: t("Organization ID")
													})
												}),
												/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
												/* @__PURE__ */ jsxs("div", {
													className: "px-6 py-4",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-muted-foreground mb-3",
														children: t("Use this ID when integrating with the Appwrite API, webhooks, or SDKs. Support may also ask for this ID when assisting with issues.")
													}), /* @__PURE__ */ jsx(CopyableId, {
														id: selectedOrg.$id,
														size: "md",
														maxWidth: 240
													})]
												})
											]
										})
									}] : [],
									{
										id: "org-name",
										search: {
											title: "Organization name",
											keywords: ["rename", "display name"]
										},
										node: /* @__PURE__ */ jsxs("div", {
											className: "rounded-xl border border-border bg-card/50 overflow-hidden",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ jsx("h3", {
														className: "text-[15px] font-semibold text-foreground",
														children: t("Organization name")
													})
												}),
												/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
												/* @__PURE__ */ jsxs("div", {
													className: "px-6 py-4",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-muted-foreground",
														children: t("Update your organization's display name. This will be visible to all organization members.")
													}), /* @__PURE__ */ jsx(Input, {
														value: orgName,
														onChange: (e) => setOrgName(e.target.value),
														placeholder: t("Organization name"),
														className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "px-6 py-4 border-t border-border bg-muted/30",
													children: /* @__PURE__ */ jsx(Button, {
														size: "sm",
														className: "h-9 text-[13px]",
														disabled: !selectedOrg || orgName === selectedOrg.name || !orgName.trim() || updateOrgNameMutation.isPending,
														onClick: () => {
															if (selectedOrg && orgName.trim() && orgName !== selectedOrg.name) updateOrgNameMutation.mutate({
																orgId: selectedOrg.$id,
																name: orgName.trim()
															});
														},
														children: t("Update")
													})
												})
											]
										})
									},
									...supportsMultiTenancy ? [{
										id: "delete-org",
										search: {
											title: "Delete organization",
											keywords: [
												"delete",
												"remove",
												"destroy",
												"danger"
											]
										},
										node: /* @__PURE__ */ jsxs("div", {
											className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ jsx("h3", {
														className: "text-[15px] font-semibold text-foreground",
														children: t("Delete organization")
													})
												}),
												/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
												/* @__PURE__ */ jsxs("div", {
													className: "px-6 py-4",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-muted-foreground",
														children: t("Permanently delete this organization and all associated data. This action cannot be undone.")
													}), selectedOrg && /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3 mt-4",
														children: [
															/* @__PURE__ */ jsx(InitialsAvatar, {
																name: selectedOrg.name,
																size: "md"
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "flex-1 min-w-0",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[14px] font-medium text-foreground truncate",
																	children: selectedOrg.name
																}), /* @__PURE__ */ jsxs("p", {
																	className: "text-[12px] text-muted-foreground",
																	children: [
																		membershipsTotal,
																		" ",
																		membershipsTotal !== 1 ? t("members") : t("member"),
																		" ",
																		"• ",
																		totalOrgProjects,
																		" ",
																		totalOrgProjects !== 1 ? t("projects") : t("project")
																	]
																})]
															}),
															memberships.length > 0 && /* @__PURE__ */ jsx("div", {
																className: "flex items-center gap-2",
																children: /* @__PURE__ */ jsxs(Link, {
																	to: "/organizations/$orgId/settings/members",
																	params: { orgId },
																	className: "flex -space-x-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
																	title: t("View members"),
																	onClick: () => setDeleteOrgDialogOpen(false),
																	children: [memberships.slice(0, 4).map((member, index) => /* @__PURE__ */ jsx("div", {
																		className: "relative rounded-full border-2 border-background",
																		style: { zIndex: 4 - index },
																		title: member.userName,
																		children: /* @__PURE__ */ jsx(InitialsAvatar, {
																			name: member.userName,
																			size: "sm"
																		})
																	}, member.$id)), membershipsTotal > 4 && /* @__PURE__ */ jsxs("div", {
																		className: "relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium text-muted-foreground",
																		style: { zIndex: 0 },
																		children: ["+", membershipsTotal - 4]
																	})]
																})
															})
														]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
													children: /* @__PURE__ */ jsxs(Dialog, {
														open: deleteOrgDialogOpen,
														onOpenChange: setDeleteOrgDialogOpen,
														children: [/* @__PURE__ */ jsx(DialogTrigger, {
															asChild: true,
															children: /* @__PURE__ */ jsx(Button, {
																variant: "destructive",
																size: "sm",
																className: "h-9 text-[13px]",
																children: t("Delete organization")
															})
														}), /* @__PURE__ */ jsxs(DialogContent, {
															className: "sm:max-w-md p-0",
															children: [
																/* @__PURE__ */ jsxs(DialogHeader, {
																	className: "px-6 pt-6 text-start",
																	children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete organization") }), /* @__PURE__ */ jsxs(DialogDescription, {
																		className: "text-[13px] mt-2",
																		children: [
																			t("Are you sure you want to delete"),
																			" ",
																			selectedOrg && /* @__PURE__ */ jsx("span", {
																				className: "font-medium text-foreground",
																				children: selectedOrg.name
																			}),
																			" ",
																			t("and all its projects, databases, and files? This action cannot be undone.")
																		]
																	})]
																}),
																/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
																/* @__PURE__ */ jsxs("div", {
																	className: "px-6 pb-4 pt-0",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "rounded-lg border border-border bg-muted/50 p-3 mb-4 mt-2",
																			children: selectedOrg && /* @__PURE__ */ jsxs("div", {
																				className: "flex items-center gap-3",
																				children: [/* @__PURE__ */ jsx(InitialsAvatar, {
																					name: selectedOrg.name,
																					size: "sm"
																				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
																					className: "text-[13px] font-medium text-foreground",
																					children: selectedOrg.name
																				}), /* @__PURE__ */ jsxs("p", {
																					className: "text-[11px] text-muted-foreground",
																					children: [
																						membershipsTotal,
																						" ",
																						membershipsTotal !== 1 ? t("members") : t("member"),
																						" ",
																						t("will lose access"),
																						" ",
																						"•",
																						" ",
																						activeProjectsTotal,
																						" ",
																						activeProjectsTotal !== 1 ? t("projects") : t("project"),
																						" ",
																						t("will be deleted")
																					]
																				})] })]
																			})
																		}),
																		activeProjects.length > 0 && /* @__PURE__ */ jsx("div", {
																			className: "mb-4",
																			children: /* @__PURE__ */ jsxs("p", {
																				className: "text-[12px] text-muted-foreground",
																				children: [
																					t("Projects that will be deleted:"),
																					" ",
																					activeProjects.slice(0, 5).map((project, index) => /* @__PURE__ */ jsxs("span", { children: [index > 0 && ", ", /* @__PURE__ */ jsx("span", {
																						className: "font-medium text-foreground",
																						title: project.name,
																						children: formatProjectNameForDisplay(project.name)
																					})] }, project.$id)),
																					activeProjectsTotal > 5 && /* @__PURE__ */ jsxs("span", { children: [
																						" ",
																						"and",
																						" ",
																						activeProjectsTotal - 5,
																						" ",
																						"more"
																					] })
																				]
																			})
																		}),
																		/* @__PURE__ */ jsxs("label", {
																			className: "text-[13px] text-muted-foreground",
																			children: [
																				t("Type"),
																				" ",
																				selectedOrg && /* @__PURE__ */ jsx("span", {
																					className: "font-mono font-medium text-foreground bg-muted px-1.5 py-0.5 rounded",
																					children: selectedOrg.name
																				}),
																				" ",
																				t("to confirm")
																			]
																		}),
																		/* @__PURE__ */ jsx(Input, {
																			value: deleteOrgConfirmation,
																			onChange: (e) => setDeleteOrgConfirmation(e.target.value),
																			placeholder: t("Enter organization name"),
																			className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0"
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
																	children: [/* @__PURE__ */ jsx(Button, {
																		variant: "outline",
																		size: "sm",
																		className: "h-9 text-[13px]",
																		onClick: () => {
																			setDeleteOrgDialogOpen(false);
																			setDeleteOrgConfirmation("");
																		},
																		children: t("Cancel")
																	}), /* @__PURE__ */ jsx(Button, {
																		variant: "destructive",
																		size: "sm",
																		className: "h-9 text-[13px]",
																		disabled: !selectedOrg || deleteOrgConfirmation !== selectedOrg.name || deleteOrgMutation.isPending,
																		onClick: () => {
																			if (selectedOrg && deleteOrgConfirmation === selectedOrg.name) deleteOrgMutation.mutate(selectedOrg.$id);
																		},
																		children: t("Delete")
																	})]
																})
															]
														})]
													})
												})
											]
										})
									}] : []
								] })
							}),
							activeTab === "domains" && /* @__PURE__ */ jsx(View, {}),
							activeTab === "marketplace" && /* @__PURE__ */ jsx(View$1, {})
						] })
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(CommandCenter, {
			open: commandCenterOpen,
			onOpenChange: (open) => {
				setCommandCenterOpen(open);
				if (!open) setCommandCenterInitialSubPage(null);
			},
			context: "org",
			onOrgNavigate: handleOrgNavigate,
			initialSubPage: commandCenterInitialSubPage,
			onInitialSubPageConsumed: () => setCommandCenterInitialSubPage(null),
			onInviteMember: canInviteOrgMember(access, features) && supportsAdditionalMembers ? () => setInviteDialogOpen(true) : void 0,
			onOrgCreateProject: canCreateProject(access, features) ? () => {
				handleOrgNavigate("projects");
				setCreateProjectDialogOpen(true);
			} : void 0,
			orgId
		}),
		orgId && /* @__PURE__ */ jsx(InviteMembersDialog, {
			open: inviteDialogOpen,
			onOpenChange: setInviteDialogOpen,
			organizationId: orgId,
			currentMemberCount: membershipsTotal,
			memberLimit,
			organizationPlan,
			onSuccess: () => {
				if (activeTab !== "settings" || settingsSubTab !== "members") handleOrgNavigate("settings/members");
			}
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: updateRoleDialogOpen,
			onOpenChange: (open) => {
				setUpdateRoleDialogOpen(open);
				if (!open) setSelectedMember(null);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Update Role") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Update the role for"),
								" ",
								selectedMember?.userName || selectedMember?.userEmail || t("this member"),
								"."
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0",
						children: [supportsProjectRoles && /* @__PURE__ */ jsxs("div", {
							className: "mb-4 space-y-1.5",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-[13px] font-medium text-foreground mb-1.5 block",
								children: t("Access")
							}), /* @__PURE__ */ jsxs(RadioGroup, {
								value: editAccessType,
								onValueChange: (value) => {
									setEditAccessType(value);
									if (value === "specific" && editProjectAccess.length === 0) setEditProjectAccess([{
										projectId: "",
										roleName: "developer"
									}]);
								},
								className: "flex flex-row gap-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(RadioGroupItem, {
										id: "edit-access-all",
										value: "all"
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "edit-access-all",
										className: "cursor-pointer text-[13px] font-normal",
										children: t("All projects")
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(RadioGroupItem, {
										id: "edit-access-specific",
										value: "specific"
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "edit-access-specific",
										className: "cursor-pointer text-[13px] font-normal",
										children: t("Specific projects")
									})]
								})]
							})]
						}), supportsProjectRoles && editAccessType === "specific" ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(ProjectAccessSelector, {
							orgId,
							value: editProjectAccess,
							onChange: setEditProjectAccess
						}), !editProjectAccess.some((row) => row.projectId) && /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[11px] text-muted-foreground",
							children: t("Add at least one project to grant access.")
						})] }) : /* @__PURE__ */ jsxs("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-[13px] font-medium text-foreground mb-1.5 block",
								children: t("Role")
							}), /* @__PURE__ */ jsx(RadioGroup, {
								value: selectedRole,
								onValueChange: (value) => setSelectedRole(value),
								className: "rounded-lg border border-border bg-card/50 overflow-hidden divide-y divide-border gap-0",
								children: ROLE_OPTIONS.map((role) => {
									const Icon$1 = role.icon;
									const isSelected = selectedRole === role.value;
									return /* @__PURE__ */ jsxs("div", {
										className: "first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0",
										children: [/* @__PURE__ */ jsx(RadioGroupItem, {
											value: role.value,
											id: `role-${role.value}`,
											className: "peer sr-only"
										}), /* @__PURE__ */ jsxs(Label, {
											htmlFor: `role-${role.value}`,
											className: cn("flex cursor-pointer items-start gap-2.5 px-3 py-2.5 transition-colors", "hover:bg-accent", isSelected && "bg-accent"),
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "mt-0.5 shrink-0",
													children: /* @__PURE__ */ jsx("div", {
														className: cn("h-3.5 w-3.5 rounded-full border-2 flex items-center justify-center transition-colors", isSelected ? "border-foreground" : "border-muted-foreground"),
														children: isSelected && /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-foreground" })
													})
												}),
												/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" }),
												/* @__PURE__ */ jsxs("div", {
													className: "flex flex-col min-w-0 flex-1",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium text-foreground",
														children: t(role.label)
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[11px] text-muted-foreground leading-tight mt-0.5",
														children: t(role.description)
													})]
												})
											]
										})]
									}, role.value);
								})
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => {
								setUpdateRoleDialogOpen(false);
								setSelectedMember(null);
							},
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: (() => {
								if (!selectedMember || updateRoleMutation.isPending) return true;
								if (supportsProjectRoles && editAccessType === "specific") return !editProjectAccess.some((row) => row.projectId);
								if (parseProjectAccess(selectedMember.roles).length > 0) return false;
								return selectedRole === selectedMember.role;
							})(),
							onClick: async () => {
								if (!selectedMember) return;
								const roles = supportsProjectRoles && editAccessType === "specific" ? editProjectAccess.filter((row) => row.projectId && row.roleName).map((row) => buildProjectRole(row.projectId, row.roleName)) : [selectedRole];
								try {
									await updateRoleMutation.mutateAsync({
										membershipId: selectedMember.membershipId || selectedMember.$id,
										roles
									});
									toast.success(t("Role updated successfully"));
									setUpdateRoleDialogOpen(false);
									setSelectedMember(null);
								} catch (error) {
									toast.error(error?.message || t("Failed to update role"));
								}
							},
							children: t("Update role")
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: removeMemberDialogOpen,
			onOpenChange: (open) => {
				setRemoveMemberDialogOpen(open);
				if (!open) setSelectedMember(null);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: selectedMember?.status === "pending" ? t("Cancel Invitation") : t("Remove from Team") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: selectedMember?.status === "pending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
							t("Are you sure you want to cancel the invitation for"),
							" ",
							selectedMember?.userName || selectedMember?.userEmail || t("this member"),
							"? ",
							t("They will not be able to join the organization.")
						] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
							t("Are you sure you want to remove"),
							" ",
							selectedMember?.userName || selectedMember?.userEmail || t("this member"),
							" ",
							t("from the team? They will lose access to all organization resources.")
						] })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => {
							setRemoveMemberDialogOpen(false);
							setSelectedMember(null);
						},
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: !selectedMember || removeMemberMutation.isPending,
						onClick: async () => {
							if (!selectedMember) return;
							try {
								await removeMemberMutation.mutateAsync(selectedMember.membershipId || selectedMember.$id);
								toast.success(selectedMember.status === "pending" ? t("Invitation cancelled successfully") : t("Member removed successfully"));
								setRemoveMemberDialogOpen(false);
								setSelectedMember(null);
							} catch (error) {
								toast.error(error?.message || t("Failed to remove member"));
							}
						},
						children: selectedMember?.status === "pending" ? t("Cancel invitation") : t("Remove from team")
					})]
				})]
			})
		}),
		supportsMultiTenancy && !features.billing && /* @__PURE__ */ jsx(CreateOrganizationDialog, {
			open: createOrgDialogOpen,
			onOpenChange: setCreateOrgDialogOpen,
			onCreate: async (orgData) => {
				try {
					const newOrg = await createOrgMutation.mutateAsync(orgData);
					toast.success(t("Organization created successfully"));
					setCreateOrgDialogOpen(false);
					navigate({
						to: "/organizations/$orgId",
						params: { orgId: newOrg.$id },
						replace: true
					});
				} catch (error) {
					toast.error(error?.message || t("Failed to create organization"));
				}
			},
			isLoading: createOrgMutation.isPending
		}),
		/* @__PURE__ */ jsx(CreateProjectDialog, {
			open: createProjectDialogOpen,
			onOpenChange: setCreateProjectDialogOpen,
			teamId: orgTeamId,
			organizationPlan,
			currentProjectsCount: totalProjectsCount
		})
	] });
}
function OrganizationLayout() {
	const matches = useMatches();
	const pathname = useLocation().pathname;
	const isDomainDetailRoute = matches.some((match) => match.routeId.includes("/domains/$domainId") || match.routeId === "/_public/organizations/$orgId/domains/$domainId" || match.routeId.startsWith("/_public/organizations/$orgId/domains/$domainId"));
	const isSupportRoute = matches.some((match) => match.routeId.includes("/support") || match.routeId === "/_public/organizations/$orgId/support" || match.routeId.startsWith("/_public/organizations/$orgId/support"));
	const isOrgDomainsWizardRoute = pathname.includes("/domains/buy") || pathname.includes("/domains/transfer-in");
	const isMarketplaceAppDetailRoute = matches.some((match) => match.routeId.includes("/marketplace/$appId"));
	const isOrgAppDetailRoute = matches.some((match) => match.routeId.includes("/apps/$appId"));
	const isUpgradeWizardRoute = pathname === "/upgrade";
	const isAgentRoute = matches.some((match) => match.routeId.includes("/agent") || match.routeId === "/_public/organizations/$orgId/agent" || match.routeId.startsWith("/_public/organizations/$orgId/agent"));
	return /* @__PURE__ */ jsx(RequireAuth, { children: isDomainDetailRoute || isMarketplaceAppDetailRoute || isOrgAppDetailRoute || isSupportRoute || isOrgDomainsWizardRoute || isUpgradeWizardRoute || isAgentRoute ? /* @__PURE__ */ jsx(Outlet, {}) : /* @__PURE__ */ jsx(OrgOverview, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
export { OrganizationLayout as component };
