import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { a as truncateMiddle, t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT, t as translate } from "./translate-DZcqveGn.js";
import { Mt as useOrganizationPlan, gt as useBillingPlans } from "./organizations-BKtnlNrj.js";
import { An as useOptionalUsageFilters, Ml as formatRequestsValue, Xs as resolveCountryDisplayName, Ys as resolveCountryCode } from "./hooks-BONwG3Mt.js";
import { n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { J as formatDatabaseServiceLabel, Y as getDatabaseServiceLucideIcon, n as FORM_FIELD_TYPE_PILL_CLASS } from "./form-field-type-badge-C7qMzJo0.js";
import { t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { X as formatUsageResourceTypeLabel, Z as getUsageResourceFilterEntries, ct as resolveStorageBreakdownResource, et as resolveUsageResourceBreakdownItem, ft as resolveComputeBreakdownResource, gt as resolveDatabaseBreakdownResource, it as resolveTableBreakdownResource, mt as getDatabaseBreakdownServiceLabel, nt as getTableBreakdownResourceTypeLabel, ot as getStorageBreakdownResourceTypeLabel, ut as getComputeBreakdownResourceTypeLabel, yt as DEFAULT_USAGE_LOG_RETENTION_DAYS } from "./affiliates-BOg1SHC6.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { i as createUsageChartAxisTickFormatter, l as getChartSeriesMax } from "./format-metric-6jsfxd5f.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { j as Tooltip, k as ResponsiveContainer } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { n as useUsageChartBrushSelect, t as UsageChartBrushReferenceArea } from "./UsageChartBrushReferenceArea-PlRYgCRx.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { a as USAGE_CHART_RESPONSIVE_CONTAINER_PROPS, i as USAGE_CHART_MARGIN, n as UsageChartXAxis, r as UsageChartYAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { C as overviewTopBreakdownListClass, n as OVERVIEW_CHART_HEIGHT, v as overviewChartPanelErrorClass, w as overviewTopBreakdownRowClass } from "./chart-panel-CCGEGd61.js";
import { n as compactUsagePathIds, r as UsageChartErrorMessage, t as OverviewChartPanelError } from "./OverviewChartPanelError-D9UA3Ssz.js";
import { i as shouldSuppressUsageChartRetry, r as resolveUsageChartErrorCopy, t as isUsageAddonNotFoundError } from "./usage-history-errors-9ZmxvNiN.js";
import { n as navigateToUpgradeWizard, t as UpgradeCurtain } from "./upgrade-curtain-D427ml_E.js";
import { a as hasUpgradeablePlanWithAddon } from "./addons-DpAB_yDA.js";
import { t as EnablePremiumGeoDBDialog } from "./EnablePremiumGeoDBDialog-B57n4Kqr.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as HostnameFaviconIcon } from "./HostnameFaviconIcon-BEkCxwPN.js";
import { a as getScopeCategoryIcon } from "./console-project-scopes-nd4nTLJF.js";
import { n as DatabaseTypeIcon } from "./DatabaseTypeIcon-CqLDDPFP.js";
import { i as getHttpStatusCodeBadgeVariant, r as getHttpMethodBadgeVariant, t as formatHttpMethodBadgeLabel } from "./http-method-badge-BudOHyRm.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectServiceId } from "@appwrite.io/console";
import { AlertCircle, ChevronRight, Globe } from "lucide-react";
var USAGE_SERVICE_ICON_MAP = {
	[ProjectServiceId.Account]: icons_exports.User,
	[ProjectServiceId.Avatars]: icons_exports.UserCircle,
	[ProjectServiceId.Locale]: icons_exports.Globe,
	[ProjectServiceId.Health]: icons_exports.Activity,
	[ProjectServiceId.Project]: icons_exports.Boxes,
	[ProjectServiceId.Storage]: icons_exports.Folder,
	[ProjectServiceId.Teams]: icons_exports.Building2,
	[ProjectServiceId.Users]: icons_exports.Users,
	[ProjectServiceId.Vcs]: icons_exports.GitBranch,
	[ProjectServiceId.Sites]: icons_exports.Globe,
	[ProjectServiceId.Functions]: icons_exports.Zap,
	[ProjectServiceId.Proxy]: icons_exports.Network,
	[ProjectServiceId.Graphql]: icons_exports.Code,
	[ProjectServiceId.Migrations]: icons_exports.Upload,
	[ProjectServiceId.Messaging]: icons_exports.MessageSquare,
	[ProjectServiceId.Advisor]: icons_exports.ScanSearch,
	[ProjectServiceId.Oauth2]: icons_exports.KeyRound,
	tokens: icons_exports.Key,
	realtime: icons_exports.Radio
};
var USAGE_SERVICE_LABEL_MAP = {
	[ProjectServiceId.Account]: "Account",
	[ProjectServiceId.Avatars]: "Avatars",
	[ProjectServiceId.Locale]: "Locale",
	[ProjectServiceId.Health]: "Health",
	[ProjectServiceId.Project]: "Project",
	[ProjectServiceId.Storage]: "Storage",
	[ProjectServiceId.Teams]: "Teams",
	[ProjectServiceId.Users]: "Users",
	[ProjectServiceId.Vcs]: "VCS",
	[ProjectServiceId.Sites]: "Sites",
	[ProjectServiceId.Functions]: "Functions",
	[ProjectServiceId.Proxy]: "Proxy",
	[ProjectServiceId.Graphql]: "GraphQL",
	[ProjectServiceId.Migrations]: "Migrations",
	[ProjectServiceId.Messaging]: "Messaging",
	[ProjectServiceId.Advisor]: "Advisor",
	[ProjectServiceId.Oauth2]: "OAuth2",
	tokens: "Tokens",
	realtime: "Realtime"
};
function normalizeUsageServiceKey(value) {
	return value.trim().toLowerCase();
}
function getUsageServiceIcon(service) {
	const key = normalizeUsageServiceKey(service);
	if (!key || key === "unknown") return icons_exports.MoreHorizontal;
	const databaseIcon = getDatabaseServiceLucideIcon(key);
	if (databaseIcon) return databaseIcon;
	return USAGE_SERVICE_ICON_MAP[key] ?? getScopeCategoryIcon(key, key);
}
function formatUsageServiceLabel(service) {
	const key = normalizeUsageServiceKey(service);
	if (!key || key === "unknown") return translate("Unknown");
	const databaseLabel = formatDatabaseServiceLabel(key);
	if (databaseLabel) return databaseLabel;
	return translate(USAGE_SERVICE_LABEL_MAP[key] ?? service.trim());
}
var USAGE_RESOURCE_TYPE_ICON_MAP = {
	project: icons_exports.Boxes,
	function: icons_exports.Zap,
	site: icons_exports.Globe,
	bucket: icons_exports.Folder,
	database: icons_exports.Database
};
function getUsageResourceTypeIcon(resourceType) {
	const key = normalizeUsageServiceKey(resourceType);
	if (!key || key === "unknown") return icons_exports.MoreHorizontal;
	if (USAGE_RESOURCE_TYPE_ICON_MAP[key]) return USAGE_RESOURCE_TYPE_ICON_MAP[key];
	if (/^database\/[^/]+\/table$/.test(key)) return icons_exports.Table;
	const databaseIcon = getDatabaseServiceLucideIcon(key);
	if (databaseIcon) return databaseIcon;
	return getScopeCategoryIcon(key, key);
}
const breakdownLeadingIconFrameClass = "flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background";
const REQUESTS_BREAKDOWN_ROW_COUNT = 6;
var COUNTRY_FLAG_FETCH_PX = 40;
function translateUnknownBreakdownLabel(value) {
	return value.trim() === "Unknown" ? translate("Unknown") : value;
}
function formatBreakdownLabel(item, labelVariant, dimension, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup) {
	const label = item.label;
	if (dimension === "resource") {
		const resolved = resolveUsageResourceBreakdownItem(item, {
			databaseLookup,
			computeLookup,
			storageLookup,
			tableLookup
		});
		if (!resolved.name) return resolved.typeLabel;
		return `${resolved.typeLabel} / ${resolved.name}`;
	}
	if (dimension === "resourceId") {
		const computeResource = resolveComputeBreakdownResource(label, computeLookup);
		if (computeResource) return `${getComputeBreakdownResourceTypeLabel(computeResource.type)} / ${computeResource.name}`;
		const storageResource = resolveStorageBreakdownResource(label, storageLookup);
		if (storageResource) return `${getStorageBreakdownResourceTypeLabel()} / ${storageResource.name}`;
		const tableResource = resolveTableBreakdownResource(label, tableLookup);
		if (tableResource) return `${getTableBreakdownResourceTypeLabel(tableResource.databaseType)} / ${tableResource.name}`;
		const resource = resolveDatabaseBreakdownResource(label, databaseLookup);
		if (resource) return `${getDatabaseBreakdownServiceLabel(resource.databaseType)} / ${resource.name}`;
	}
	if (dimension === "country" && countryLookups) return translateUnknownBreakdownLabel(resolveCountryDisplayName(label, countryLookups));
	if (dimension === "service") return translateUnknownBreakdownLabel(formatUsageServiceLabel(label));
	if (dimension === "resourceType") return translateUnknownBreakdownLabel(formatUsageResourceTypeLabel(label));
	if (labelVariant === "mono") return truncateMiddle(compactUsagePathIds(label), 42);
	return translateUnknownBreakdownLabel(label);
}
function CountryFlagIcon({ countryCode }) {
	const [failed, setFailed] = useState(false);
	const normalizedCode = countryCode.trim().toLowerCase();
	if (failed || normalizedCode.length !== 2) return /* @__PURE__ */ jsx("div", {
		className: cn(breakdownLeadingIconFrameClass, "border-transparent bg-transparent"),
		children: /* @__PURE__ */ jsx(Globe, {
			className: "h-3.5 w-3.5 shrink-0 text-muted-foreground",
			"aria-hidden": true
		})
	});
	const flagUrl = sdk.forConsole.avatars.getFlag({
		code: normalizedCode,
		width: COUNTRY_FLAG_FETCH_PX,
		height: COUNTRY_FLAG_FETCH_PX,
		quality: 100
	});
	return /* @__PURE__ */ jsx("div", {
		className: breakdownLeadingIconFrameClass,
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("img", {
			src: flagUrl,
			alt: "",
			className: "h-full w-full object-cover",
			onError: () => setFailed(true)
		})
	});
}
function UsageServiceIcon({ service }) {
	const Icon$1 = getUsageServiceIcon(service);
	return /* @__PURE__ */ jsx("div", {
		className: cn(breakdownLeadingIconFrameClass, "border-transparent bg-muted/30"),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Icon$1, { className: "h-3 w-3 text-muted-foreground" })
	});
}
function UsageResourceTypeIcon({ resourceType }) {
	const Icon$1 = getUsageResourceTypeIcon(resourceType);
	return /* @__PURE__ */ jsx("div", {
		className: cn(breakdownLeadingIconFrameClass, "border-transparent bg-muted/30"),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Icon$1, { className: "h-3 w-3 text-muted-foreground" })
	});
}
function BreakdownResourceRowLabel({ typeLabel, name, fullTitle }) {
	const t = useT();
	const hasName = !!name?.trim();
	const title = fullTitle ?? (hasName ? `${typeLabel} / ${name}` : typeLabel);
	if (!hasName) return /* @__PURE__ */ jsx("span", {
		className: "min-w-0 flex-1 truncate text-[12px] font-medium text-foreground/70",
		title,
		children: t(typeLabel)
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 flex-1 items-center gap-1 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[11px] text-muted-foreground",
				children: t(typeLabel)
			}),
			/* @__PURE__ */ jsx(ChevronRight, {
				className: "h-3 w-3 shrink-0 text-muted-foreground/70",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 truncate text-[12px] font-medium text-foreground/70",
				title,
				children: name
			})
		]
	});
}
function UsageBreakdownRow({ item, dimension, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup, maxCount, formatValue = formatRequestsValue, onAddFilter }) {
	const showCountryFlags = dimension === "country" && !!countryLookups;
	const showHostnameFavicons = dimension === "hostname";
	const showServiceIcons = dimension === "service";
	const showResourceTypeIcons = dimension === "resourceType";
	const showStatusBadges = dimension === "status";
	const showMethodBadges = dimension === "method";
	const resolvedResource = dimension === "resource" ? resolveUsageResourceBreakdownItem(item, {
		databaseLookup,
		computeLookup,
		storageLookup,
		tableLookup
	}) : null;
	const computeResource = dimension === "resourceId" ? resolveComputeBreakdownResource(item.label, computeLookup) : resolvedResource?.computeResource;
	const storageResource = dimension === "resourceId" && !computeResource ? resolveStorageBreakdownResource(item.label, storageLookup) : resolvedResource?.storageResource;
	const tableResource = dimension === "resourceId" && !computeResource && !storageResource ? resolveTableBreakdownResource(item.label, tableLookup) : resolvedResource?.tableResource;
	const databaseResource = dimension === "resourceId" && !computeResource && !storageResource && !tableResource ? resolveDatabaseBreakdownResource(item.label, databaseLookup) : resolvedResource?.databaseResource;
	const showDatabaseIcons = !!databaseResource;
	const showResourceBreakdownLabel = dimension === "resource" && !!resolvedResource;
	const displayLabel = formatBreakdownLabel(item, labelVariant, dimension, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup);
	const countryCode = showCountryFlags && countryLookups ? resolveCountryCode(item.label, countryLookups) : null;
	const showFavicon = showHostnameFavicons;
	const canAddFilter = !!onAddFilter && !!item.label.trim();
	const handleAddFilter = () => {
		if (!canAddFilter || !onAddFilter) return;
		if (dimension === "resourceId" || dimension === "resource") {
			onAddFilter(getUsageResourceFilterEntries(item.resourceId ?? item.label, {
				computeResource,
				storageResource,
				tableResource,
				databaseResource
			}, item.resourceType));
			return;
		}
		if (dimension === "sdk") {
			const filters = [];
			const sdk$1 = item.sdk?.trim();
			const sdkVersion = item.sdkVersion?.trim();
			if (sdk$1) filters.push({
				dimension: "sdk",
				value: sdk$1
			});
			if (sdkVersion) filters.push({
				dimension: "sdkVersion",
				value: sdkVersion
			});
			if (filters.length > 0) {
				onAddFilter(filters);
				return;
			}
		}
		onAddFilter([{
			dimension,
			value: item.label
		}]);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn(overviewTopBreakdownRowClass, "group relative overflow-hidden transition-colors hover:bg-accent/50", canAddFilter && "cursor-pointer"),
		onClick: canAddFilter ? handleAddFilter : void 0,
		onKeyDown: canAddFilter ? (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				handleAddFilter();
			}
		} : void 0,
		role: canAddFilter ? "button" : void 0,
		tabIndex: canAddFilter ? 0 : void 0,
		title: canAddFilter ? `Filter by ${displayLabel}` : displayLabel,
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
			style: { width: `${item.count / maxCount * 100}%` }
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative flex min-w-0 flex-1 items-center gap-2 overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden",
				children: [showCountryFlags ? /* @__PURE__ */ jsx(CountryFlagIcon, { countryCode: countryCode ?? item.label }) : showFavicon ? /* @__PURE__ */ jsx(HostnameFaviconIcon, { hostname: item.label }) : showServiceIcons ? /* @__PURE__ */ jsx(UsageServiceIcon, { service: item.label }) : showResourceTypeIcons ? /* @__PURE__ */ jsx(UsageResourceTypeIcon, { resourceType: item.label }) : showDatabaseIcons ? /* @__PURE__ */ jsx("div", {
					className: breakdownLeadingIconFrameClass,
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx(DatabaseTypeIcon, {
						apiType: databaseResource.databaseType,
						className: "h-3 w-3"
					})
				}) : computeResource || storageResource || tableResource ? /* @__PURE__ */ jsx(UsageResourceTypeIcon, { resourceType: computeResource ? computeResource.type : storageResource ? "bucket" : `database/${tableResource.databaseId}/table` }) : resolvedResource && !databaseResource && item.resourceType?.trim() ? /* @__PURE__ */ jsx(UsageResourceTypeIcon, { resourceType: item.resourceType }) : null, showResourceBreakdownLabel && resolvedResource ? /* @__PURE__ */ jsx(BreakdownResourceRowLabel, {
					typeLabel: resolvedResource.typeLabel,
					name: resolvedResource.name ? (item.resourceId ?? item.label) === resolvedResource.name ? truncateMiddle(compactUsagePathIds(resolvedResource.name), 42) : resolvedResource.name : void 0
				}) : computeResource ? /* @__PURE__ */ jsx(BreakdownResourceRowLabel, {
					typeLabel: getComputeBreakdownResourceTypeLabel(computeResource.type),
					name: computeResource.name
				}) : storageResource ? /* @__PURE__ */ jsx(BreakdownResourceRowLabel, {
					typeLabel: getStorageBreakdownResourceTypeLabel(),
					name: storageResource.name
				}) : tableResource ? /* @__PURE__ */ jsx(BreakdownResourceRowLabel, {
					typeLabel: getTableBreakdownResourceTypeLabel(tableResource.databaseType),
					name: tableResource.name
				}) : databaseResource ? /* @__PURE__ */ jsx(BreakdownResourceRowLabel, {
					typeLabel: getDatabaseBreakdownServiceLabel(databaseResource.databaseType),
					name: databaseResource.name
				}) : showMethodBadges ? /* @__PURE__ */ jsx(Badge, {
					variant: getHttpMethodBadgeVariant(item.label),
					className: cn(FORM_FIELD_TYPE_PILL_CLASS, "uppercase"),
					title: displayLabel,
					children: formatHttpMethodBadgeLabel(displayLabel)
				}) : showStatusBadges ? /* @__PURE__ */ jsx(Badge, {
					variant: getHttpStatusCodeBadgeVariant(item.label),
					className: FORM_FIELD_TYPE_PILL_CLASS,
					title: displayLabel,
					children: displayLabel
				}) : /* @__PURE__ */ jsx("span", {
					className: cn("min-w-0 flex-1 truncate text-[12px] text-foreground/70", labelVariant === "mono" && dimension !== "country" && dimension !== "hostname" && dimension !== "service" && dimension !== "resourceType" && "font-mono"),
					title: displayLabel,
					children: displayLabel
				})]
			}), /* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[12px] font-medium tabular-nums text-muted-foreground",
				children: formatValue(item.count)
			})]
		})]
	});
}
function UsageBreakdownRowSkeleton({ showLeadingIcon = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: overviewTopBreakdownRowClass,
		children: [
			showLeadingIcon ? /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4 shrink-0 rounded-sm" }) : null,
			/* @__PURE__ */ jsx(Skeleton, { className: "h-3 min-w-0 flex-1 rounded-sm" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-14 shrink-0 rounded-sm" })
		]
	});
}
function UsageBreakdownListSkeleton({ rowCount = REQUESTS_BREAKDOWN_ROW_COUNT, showLeadingIcon = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: overviewTopBreakdownListClass,
		"aria-busy": "true",
		"aria-label": t("Loading breakdown"),
		children: Array.from({ length: rowCount }).map((_, index) => /* @__PURE__ */ jsx(UsageBreakdownRowSkeleton, { showLeadingIcon }, index))
	});
}
function UsageBreakdownRowsList({ items, dimension, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup, variant = "card", className, formatValue, onAddFilter }) {
	const usageFilters = useOptionalUsageFilters();
	const handleAddFilter = onAddFilter ?? usageFilters?.onAddBreakdownFilter;
	const maxCount = Math.max(...items.map((item) => item.count), 1);
	const itemSlots = useMemo(() => {
		if (variant === "drawer") return items;
		return Array.from({ length: REQUESTS_BREAKDOWN_ROW_COUNT }, (_, index) => items[index] ?? null);
	}, [items, variant]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex w-full min-w-0 flex-col gap-1", className),
		children: itemSlots.map((item, index) => {
			if (!item) {
				if (variant === "drawer") return null;
				return /* @__PURE__ */ jsx("div", {
					className: overviewTopBreakdownRowClass,
					"aria-hidden": true
				}, `empty-${index}`);
			}
			return /* @__PURE__ */ jsx(UsageBreakdownRow, {
				item,
				dimension,
				labelVariant,
				countryLookups,
				databaseLookup,
				computeLookup,
				storageLookup,
				tableLookup,
				maxCount,
				formatValue,
				onAddFilter: handleAddFilter
			}, item.id);
		})
	});
}
function UsagePremiumGeoDBCurtain({ children, className, onEnabled }) {
	const t = useT();
	const navigate = useNavigate();
	const projectId = useParams({ strict: false }).projectId;
	const organizationId = useOptionalUsageFilters()?.organizationId;
	const { features } = useConsoleProfile();
	const { plan } = useOrganizationPlan(organizationId);
	const { plans } = useBillingPlans();
	const [enableOpen, setEnableOpen] = useState(false);
	const planSupportsPremiumGeoDB = plan?.supportedAddons?.premiumGeoDB === true;
	const canUpgradeToPremiumGeoDB = !planSupportsPremiumGeoDB && hasUpgradeablePlanWithAddon(plan, plans, "premiumGeoDB");
	const showCta = features.billing && (planSupportsPremiumGeoDB || canUpgradeToPremiumGeoDB);
	const handleCta = () => {
		if (planSupportsPremiumGeoDB && projectId) {
			setEnableOpen(true);
			return;
		}
		if (canUpgradeToPremiumGeoDB) navigateToUpgradeWizard(navigate, organizationId);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(UpgradeCurtain, {
		isLocked: true,
		orgId: organizationId,
		className,
		title: t("Premium Geo DB required"),
		message: t("Enable the Premium Geo DB addon for this project to view city and country usage breakdowns."),
		ctaLabel: planSupportsPremiumGeoDB ? t("Enable Premium Geo DB") : t("Upgrade plan"),
		onCtaClick: handleCta,
		showCta,
		children: children ?? /* @__PURE__ */ jsx(UsageBreakdownListSkeleton, { showLeadingIcon: false })
	}), projectId ? /* @__PURE__ */ jsx(EnablePremiumGeoDBDialog, {
		open: enableOpen,
		onOpenChange: setEnableOpen,
		projectId,
		onEnabled
	}) : null] });
}
function UsageMetricCardShell({ className, children }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card", className),
		children
	});
}
function UsageMetricCardFooter({ description, docsHref }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "mt-auto shrink-0 border-t border-border bg-muted/30 px-4 py-3",
		children: /* @__PURE__ */ jsxs("p", {
			className: "text-[12px] leading-relaxed text-muted-foreground",
			children: [t(description), docsHref ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx(DocsRouteLink, {
				href: docsHref,
				className: "font-medium text-foreground underline underline-offset-2 hover:text-primary",
				children: t("Learn more")
			})] }) : null]
		})
	});
}
function UsageBreakdownListEmptyOverlay() {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] text-muted-foreground",
		children: useT()("No data for this date range")
	});
}
function UsageBreakdownListError({ title, message, error, onRetry }) {
	const t = useT();
	const usageFilters = useOptionalUsageFilters();
	const resolvedErrorCopy = useMemo(() => resolveUsageChartErrorCopy(error, usageFilters?.usageLogRetentionDays ?? 30, {
		title,
		message
	}), [
		error,
		usageFilters?.usageLogRetentionDays,
		title,
		message
	]);
	const showRetry = !!onRetry && !shouldSuppressUsageChartRetry(resolvedErrorCopy);
	if (isUsageAddonNotFoundError(error) || resolvedErrorCopy.isAddonNotFound) return /* @__PURE__ */ jsx("div", {
		className: overviewTopBreakdownListClass,
		children: /* @__PURE__ */ jsx(UsagePremiumGeoDBCurtain, {
			className: "absolute inset-0",
			onEnabled: onRetry,
			children: /* @__PURE__ */ jsx(UsageBreakdownListSkeleton, { showLeadingIcon: false })
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: overviewTopBreakdownListClass,
		children: /* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 py-6 text-center",
			children: /* @__PURE__ */ jsx(OverviewChartPanelError, {
				title: t(resolvedErrorCopy.title),
				message: /* @__PURE__ */ jsx(UsageChartErrorMessage, { copy: resolvedErrorCopy }),
				onRetry: showRetry ? onRetry : void 0
			})
		})
	});
}
function UsageBreakdownCard({ title, description, dimension, items, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup, isLoading, isError, error, errorTitle, errorMessage, formatValue, onRetry, onShowMore, titleAddon, embedded = false, className }) {
	const t = useT();
	const showCountryFlags = dimension === "country" && !!countryLookups;
	const showHostnameFavicons = dimension === "hostname";
	const showServiceIcons = dimension === "service";
	const showResourceTypeIcons = dimension === "resourceType";
	const showResourceIcons = (dimension === "resource" || dimension === "resourceId") && !!(databaseLookup || computeLookup || storageLookup || tableLookup) && items.length > 0;
	const showLeadingIcon = showCountryFlags || showHostnameFavicons || showServiceIcons || showResourceTypeIcons || showResourceIcons;
	const showEmptyOverlay = !isLoading && !isError && items.length === 0;
	const showShowMore = !isError && items.length >= 6 && !!onShowMore;
	const breakdownContent = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("flex shrink-0 items-center justify-between gap-3 border-b border-border px-4", embedded ? "py-3" : "py-4"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: cn("min-w-0 font-medium text-foreground", embedded ? "text-[13px]" : "text-[14px]"),
				children: t(title)
			}), titleAddon]
		}), showShowMore && onShowMore ? /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "shrink-0 cursor-pointer text-[12px] text-muted-foreground transition-colors hover:text-foreground",
			onClick: onShowMore,
			children: t("Show more")
		}) : null]
	}), /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 flex-col p-4",
		children: isError ? /* @__PURE__ */ jsx(UsageBreakdownListError, {
			title: errorTitle,
			message: errorMessage,
			error,
			onRetry
		}) : isLoading && items.length === 0 ? /* @__PURE__ */ jsx(UsageBreakdownListSkeleton, { showLeadingIcon }) : /* @__PURE__ */ jsxs("div", {
			className: cn(overviewTopBreakdownListClass, "flex-1"),
			children: [showEmptyOverlay ? /* @__PURE__ */ jsx(UsageBreakdownListEmptyOverlay, {}) : null, /* @__PURE__ */ jsx(UsageBreakdownRowsList, {
				items,
				dimension,
				labelVariant,
				countryLookups,
				databaseLookup,
				computeLookup,
				storageLookup,
				tableLookup,
				variant: "card",
				formatValue
			})]
		})
	})] });
	if (embedded) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full min-h-0 flex-col", className),
		children: breakdownContent
	});
	return /* @__PURE__ */ jsxs(UsageMetricCardShell, {
		className: cn("h-full", className),
		children: [breakdownContent, /* @__PURE__ */ jsx(UsageMetricCardFooter, { description })]
	});
}
var usageMetricHeaderClass = "mt-2 min-h-[52px] flex flex-wrap items-baseline gap-x-2 gap-y-1";
function ChartMetricHeaderSkeleton() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-28 shrink-0 rounded-sm" }),
		/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[4.5rem] shrink-0 rounded-sm" }),
		/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-44 max-w-full shrink-0 rounded-sm" })
	] });
}
function ChartSkeleton({ label }) {
	return /* @__PURE__ */ jsxs("div", {
		role: "status",
		"aria-label": label,
		className: "relative w-full shrink-0",
		style: { height: 240 },
		children: [/* @__PURE__ */ jsx(Skeleton, { className: "absolute inset-0 rounded-lg" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: label
		})]
	});
}
function UsageChartArea({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative w-full shrink-0 text-muted-foreground", FORCE_LTR_CLASS),
		style: { height: 240 },
		children
	});
}
function UsageTimeSeriesChartCard({ title, description, unitLabel, chartGradientId, total, changePercent, chartPoints, isLoading, isError, error, queryError, errorTitle, errorMessage, formatTotal, formatValue, axisFormat = "count", onRetry, embedded = false, className, docsHref, dateRange: dateRangeProp, chartInterval: chartIntervalProp, onDateRangeChange: onDateRangeChangeProp }) {
	const t = useT();
	const usageFilters = useOptionalUsageFilters();
	const dateRange = dateRangeProp ?? usageFilters?.dateRange;
	const chartInterval = chartIntervalProp ?? usageFilters?.chartInterval ?? "1h";
	const onDateRangeChange = onDateRangeChangeProp ?? usageFilters?.onDateRangeChange;
	const resolvedQueryError = error ?? queryError;
	const resolvedErrorCopy = useMemo(() => resolveUsageChartErrorCopy(resolvedQueryError, usageFilters?.usageLogRetentionDays ?? 30, {
		title: errorTitle,
		message: errorMessage
	}), [
		resolvedQueryError,
		usageFilters?.usageLogRetentionDays,
		errorTitle,
		errorMessage
	]);
	const showRetry = !!onRetry && !shouldSuppressUsageChartRetry(resolvedErrorCopy);
	const showGeoDbCurtain = isUsageAddonNotFoundError(resolvedQueryError) || resolvedErrorCopy.isAddonNotFound;
	const chartData = useMemo(() => chartPoints.map((point) => ({
		date: point.date,
		fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
		value: point.total
	})), [chartPoints]);
	const { canSelect, isSelecting, brushLeft, brushRight, surfaceClassName, chartProps } = useUsageChartBrushSelect({
		points: chartPoints,
		chartInterval,
		onDateRangeChange
	});
	const chartColor = "var(--chart-brand)";
	const formattedTotal = formatTotal(total);
	const changeLabel = changePercent > 0 ? `+${changePercent}%` : changePercent < 0 ? `${changePercent}%` : "0%";
	const chartAxisMax = useMemo(() => getChartSeriesMax(chartData), [chartData]);
	const yAxisTickFormatter = useMemo(() => createUsageChartAxisTickFormatter(axisFormat, chartAxisMax), [axisFormat, chartAxisMax]);
	const chartContent = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: cn("shrink-0 flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between", embedded && "border-b-0"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[14px] font-medium text-foreground",
				children: t(title)
			}), /* @__PURE__ */ jsx("div", {
				className: usageMetricHeaderClass,
				children: isLoading ? /* @__PURE__ */ jsx(ChartMetricHeaderSkeleton, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[24px] font-semibold tabular-nums text-foreground",
						children: formattedTotal
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: t(unitLabel)
					}),
					!isError && chartPoints.length > 0 ? /* @__PURE__ */ jsxs("span", {
						className: cn("text-[12px] font-medium tabular-nums", changePercent > 0 && "text-emerald-600 dark:text-emerald-400", changePercent < 0 && "text-amber-600 dark:text-amber-400", changePercent === 0 && "text-muted-foreground"),
						children: [
							changeLabel,
							" ",
							t("vs previous period")
						]
					}) : !isLoading ? /* @__PURE__ */ jsxs("span", {
						className: "invisible text-[12px] font-medium tabular-nums",
						"aria-hidden": true,
						children: ["0% ", t("vs previous period")]
					}) : null
				] })
			})]
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "flex flex-1 flex-col p-4",
		children: isError ? /* @__PURE__ */ jsx(UsageChartArea, { children: showGeoDbCurtain ? /* @__PURE__ */ jsx(UsagePremiumGeoDBCurtain, {
			className: "absolute inset-0",
			onEnabled: onRetry,
			children: /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-muted/20" })
		}) : /* @__PURE__ */ jsxs("div", {
			className: overviewChartPanelErrorClass,
			children: [
				/* @__PURE__ */ jsx(AlertCircle, { className: "h-8 w-8 shrink-0 text-muted-foreground" }),
				/* @__PURE__ */ jsxs("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: t(resolvedErrorCopy.title)
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
						children: /* @__PURE__ */ jsx(UsageChartErrorMessage, { copy: resolvedErrorCopy })
					})]
				}),
				showRetry ? /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					onClick: onRetry,
					children: t("Try again")
				}) : null
			]
		}) }) : isLoading ? /* @__PURE__ */ jsx(ChartSkeleton, { label: t("Loading usage data") }) : chartData.length === 0 ? /* @__PURE__ */ jsx(UsageChartArea, { children: /* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 flex items-center justify-center text-[13px] text-muted-foreground",
			children: t("No data for this date range")
		}) }) : /* @__PURE__ */ jsx(UsageChartArea, { children: /* @__PURE__ */ jsx("div", {
			className: surfaceClassName,
			"aria-label": canSelect ? t("Drag on the chart to select a date range") : void 0,
			children: /* @__PURE__ */ jsx(ResponsiveContainer, {
				...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
				children: /* @__PURE__ */ jsxs(AreaChart, {
					data: chartData,
					margin: USAGE_CHART_MARGIN,
					...chartProps,
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: chartGradientId,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: chartColor,
								stopOpacity: .2
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: chartColor,
								stopOpacity: 0
							})]
						}) }),
						/* @__PURE__ */ jsx(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "hsl(var(--border))",
							vertical: false
						}),
						/* @__PURE__ */ jsx(UsageChartXAxis, {
							points: chartPoints,
							dateRange,
							chartInterval
						}),
						/* @__PURE__ */ jsx(UsageChartYAxis, { tickFormatter: yAxisTickFormatter }),
						/* @__PURE__ */ jsx(Tooltip, {
							isAnimationActive: false,
							cursor: !isSelecting,
							content: ({ active, payload }) => {
								if (isSelecting || !active || !payload?.length) return null;
								const data = payload[0].payload;
								return /* @__PURE__ */ jsxs("div", {
									className: "rounded-md border border-border bg-popover px-3 py-2",
									children: [/* @__PURE__ */ jsx("p", {
										className: "mb-1 text-[11px] text-muted-foreground",
										children: data.fullDate
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[13px] font-medium text-foreground",
										children: [
											formatValue(data.value),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "font-normal text-muted-foreground",
												children: t(unitLabel)
											})
										]
									})]
								});
							}
						}),
						/* @__PURE__ */ jsx(Area, {
							type: "monotone",
							dataKey: "value",
							stroke: chartColor,
							strokeWidth: 2,
							fill: `url(#${chartGradientId})`,
							name: title,
							dot: false,
							...CHART_ANIMATION_DISABLED
						}),
						/* @__PURE__ */ jsx(UsageChartBrushReferenceArea, {
							left: brushLeft,
							right: brushRight
						})
					]
				})
			})
		}) })
	})] });
	if (embedded) return /* @__PURE__ */ jsx("div", {
		className: cn("min-w-0 flex flex-col", className),
		children: chartContent
	});
	return /* @__PURE__ */ jsxs(UsageMetricCardShell, { children: [chartContent, /* @__PURE__ */ jsx(UsageMetricCardFooter, {
		description,
		docsHref
	})] });
}
export { UsageMetricCardFooter as a, UsageBreakdownListSkeleton as c, UsageBreakdownListError as i, UsageBreakdownRowsList as l, UsageBreakdownCard as n, UsageMetricCardShell as o, UsageBreakdownListEmptyOverlay as r, UsagePremiumGeoDBCurtain as s, UsageTimeSeriesChartCard as t, formatBreakdownLabel as u };
