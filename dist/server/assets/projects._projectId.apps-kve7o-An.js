import { t as cn } from "./utils-DoqqkI3X.js";
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
import "./constants-BDeF927R.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { L as usePlatforms, R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./mcp-CgjPVMsn.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./skeleton-8d0Q_D56.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import "./calendar-6OJ5dwYN.js";
import "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import { n as useProjectConnectDialog } from "./ProjectConnectDialogContext-DgcmISfV.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import "./FrameworkIcon-DTkSe6r3.js";
import "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import { f as canCreatePlatform } from "./console-access-checks-BTMEOKcL.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import "./analytics-C_KnVoso.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as Route$1 } from "./projects._projectId.apps-DsuMbKoV.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { d as RESOURCE_CARD_SHELL_CLASSNAME, i as RESOURCE_CARD_GRID_CLASSNAME, l as RESOURCE_CARD_PADDED_CLASSNAME, o as RESOURCE_CARD_INTERACTIVE_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { n as getPlatformIdentifier, r as getPlatformSearchText, t as getPlatformDisplayName } from "./platform-k0Qw_0lL.js";
import { n as PlatformDrawer, t as PlatformContextMenu } from "./PlatformContextMenu-CEoLZrvr.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Outlet, useMatches, useNavigate, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plug2 } from "lucide-react";
var supportedPlatforms = [
	{
		id: "web",
		platform: "web"
	},
	{
		id: "react-native",
		platform: "react-native"
	},
	{
		id: "flutter",
		platform: "flutter"
	},
	{
		id: "apple",
		platform: "apple"
	},
	{
		id: "android",
		platform: "android"
	},
	{
		id: "windows",
		platform: "windows"
	},
	{
		id: "linux",
		platform: "linux"
	}
];
function View({ initialData } = {}) {
	const t = useT();
	const projectConnect = useProjectConnectDialog();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");
	const [platformDrawerOpen, setPlatformDrawerOpen] = useState(false);
	const [selectedPlatform, setSelectedPlatform] = useState(null);
	const { platforms: platformsFromHook, isLoading } = usePlatforms(projectId);
	const platforms = platformsFromHook.length > 0 ? platformsFromHook : isLoading ? initialData?.platforms ?? [] : platformsFromHook;
	const showLoading = isLoading && platforms.length === 0 && !initialData;
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noCreatePermission = !canCreatePlatform(access, features);
	const filteredPlatforms = useMemo(() => {
		if (!searchValue.trim()) return platforms;
		const q = searchValue.toLowerCase();
		return platforms.filter((p) => (p.name || "").toLowerCase().includes(q) || getPlatformSearchText(p).toLowerCase().includes(q) || getPlatformDisplayName(p.type || "").toLowerCase().includes(q));
	}, [platforms, searchValue]);
	const goToAddAppWizard = (kind) => {
		if (!projectId) return;
		navigate({
			to: "/projects/$projectId/apps/add",
			params: { projectId },
			search: kind ? {
				kind,
				configureStep: "details"
			} : {}
		});
	};
	const handlePlatformClick = (platform) => {
		setSelectedPlatform(platform);
		setPlatformDrawerOpen(true);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: t("Apps"),
				searchPlaceholder: t("Search apps..."),
				searchValue,
				onSearchChange: setSearchValue,
				createLabel: t("Add app"),
				createAnalyticsAction: "add-platform",
				onCreate: () => goToAddAppWizard(),
				createDisabled: noCreatePermission,
				createDisabledTooltip: noCreatePermission ? t("You don't have permission to add apps.") : void 0,
				showFilters: false,
				fullWidthBorder: true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
				children: showLoading ? /* @__PURE__ */ jsx("div", {
					className: "rounded-xl border border-border bg-card/50",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3",
						children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 rounded-lg border border-border/50 bg-muted/20 p-4",
							children: [/* @__PURE__ */ jsx("div", { className: "h-10 w-10 shrink-0 animate-pulse rounded-lg bg-muted" }), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1 space-y-2",
								children: [/* @__PURE__ */ jsx("div", { className: "h-4 w-24 animate-pulse rounded bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-3 w-32 animate-pulse rounded bg-muted" })]
							})]
						}, i))
					})
				}) : filteredPlatforms.length === 0 ? platforms.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
					icon: Plug2,
					variant: "card",
					isEmpty: true,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
								children: /* @__PURE__ */ jsx(Plug2, { className: "h-6 w-6 text-muted-foreground" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mb-2 text-[15px] font-medium text-foreground",
								children: t("No apps connected")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mb-6 max-w-sm text-[13px] text-muted-foreground",
								children: t("Connect your first app to start building with Appwrite. Add web apps, mobile apps, or server SDKs to get started.")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "my-6 flex w-full items-center gap-3 text-[12px] text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground/80",
										children: t("Connect with your stack")
									}),
									/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex w-full flex-wrap justify-center gap-2",
								children: supportedPlatforms.map(({ id, platform }) => /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => goToAddAppWizard(id),
									className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground",
									children: [/* @__PURE__ */ jsx(PlatformIcon, {
										platform,
										size: "sm"
									}), /* @__PURE__ */ jsx("span", { children: getPlatformDisplayName(platform) })]
								}, id))
							}),
							projectConnect ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "my-6 flex w-full items-center gap-3 text-[12px] text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground/80",
										children: t("or")
									}),
									/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
								]
							}), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "lg",
								className: "gap-1.5",
								onClick: () => projectConnect.openConnect("mcp"),
								children: [/* @__PURE__ */ jsx(McpIcon, { className: "h-4 w-4" }), t("Build with an agent")]
							})] }) : null
						]
					})
				}) : /* @__PURE__ */ jsx(EmptyState, {
					icon: Plug2,
					variant: "card",
					isEmpty: false,
					hasFilters: true,
					title: t("No apps match your search"),
					description: t("Try a different search term.")
				}) : /* @__PURE__ */ jsx("div", {
					className: RESOURCE_CARD_GRID_CLASSNAME,
					children: filteredPlatforms.map((platform) => {
						const platformType = platform.type || "web";
						const displayName = platform.name || getPlatformDisplayName(platformType);
						const identifier = getPlatformIdentifier(platform);
						const initialIcon = platformType === "web" ? (platform.$id?.charCodeAt(0) ?? 0) % 2 === 0 ? "ts" : "js" : void 0;
						return /* @__PURE__ */ jsx(PlatformContextMenu, {
							projectId: projectId ?? "",
							platform,
							onUpdate: handlePlatformClick,
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => handlePlatformClick(platform),
								className: cn(RESOURCE_CARD_PADDED_CLASSNAME, RESOURCE_CARD_INTERACTIVE_CLASSNAME, "flex items-center gap-4 text-start", RESOURCE_CARD_SHELL_CLASSNAME),
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-foreground",
									children: /* @__PURE__ */ jsx(PlatformIcon, {
										platform: platformType,
										size: "md",
										initialIcon
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate text-[14px] font-medium text-foreground",
										title: displayName,
										children: displayName
									}), identifier && /* @__PURE__ */ jsx("p", {
										className: "truncate text-[12px] text-muted-foreground",
										title: identifier,
										children: identifier
									})]
								})]
							})
						}, platform.$id);
					})
				})
			}),
			/* @__PURE__ */ jsx(PlatformDrawer, {
				open: platformDrawerOpen,
				onOpenChange: (open) => {
					setPlatformDrawerOpen(open);
					if (!open) setSelectedPlatform(null);
				},
				projectId: projectId ?? "",
				platform: selectedPlatform
			})
		]
	});
}
function AppsPage() {
	const matches = useMatches();
	const loaderData = Route$1.useLoaderData();
	if (matches.some((m) => m.routeId === "/_public/projects/$projectId/apps/add")) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-1 flex-col",
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
	return /* @__PURE__ */ jsx(View, { initialData: loaderData ? { platforms: loaderData.platforms } : void 0 });
}
export { AppsPage as component };
