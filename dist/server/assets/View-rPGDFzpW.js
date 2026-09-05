import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { r as updateConsoleProject } from "./console-projects-C0b0tMaH.js";
import { p as SMALL_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Dt as useOrganizationById, Ft as useOrganizations, Mt as useOrganizationPlan, Pt as useOrganizationScopes, gt as useBillingPlans } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Bl as useUpdateWebhookSecret, Cc as useUpdateSMTP, Fl as useCreateWebhook, Fy as useProjectAddonPrice, Il as useDeleteWebhook, Iy as useProjectAddons, Ll as useProjectWebhook, My as projectAddonsQueryOptions, Nl as fetchProjectWebhook, Ns as useVcsInstallations, Os as useDeleteVcsInstallation, Rl as useProjectWebhooks, Sc as useTestSMTP, Yc as useProjectMigrations, hc as useVerifyDomain, jy as projectAddonPriceQueryOptions, mc as useProjectDomains, pc as useDeleteDomain, zl as useUpdateWebhook } from "./hooks-BONwG3Mt.js";
import { I as useDeleteProjectVariable, N as useCreateProjectVariable, R as useProject, T as projectQueryOptions, V as useProjectVariables, _ as formatProjectNameForDisplay, a as PROJECT_NAME_MAX_LENGTH, it as servicesRecordFromProject, l as deleteProject, q as useUpdateProjectVariable, rt as protocolsRecordFromProject, tt as patchProjectProtocolsInCache, y as getProjectNameDisplayTitle } from "./projects-BaTJenfQ.js";
import { H as useOrganizationDomains } from "./domains-Bfw8HsXF.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, d as DropdownMenuSubContent, f as DropdownMenuSubTrigger, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuSub } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { i as menuItemRowClassName, n as MenuItemContent, r as MenuItemIcon, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { n as navigateToUpgradeWizard, t as UpgradeCurtain } from "./upgrade-curtain-D427ml_E.js";
import { a as hasUpgradeablePlanWithAddon, c as resolveStripeProviderMethodId, i as getAddonConfirmSearchParams, n as ADDON_KEY_PREMIUM_GEO_DB, o as isAddonScheduledForRemoval, r as findActiveOrPendingAddon, s as isPaymentAuthentication } from "./addons-DpAB_yDA.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import { t as EnablePremiumGeoDBDialog } from "./EnablePremiumGeoDBDialog-B57n4Kqr.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as MCPSection } from "./MCPSection-k-iSVVVO.js";
import { t as Separator } from "./separator-B2hXZdKL.js";
import { W as canWriteDomains, Y as canWriteWebhooks, d as canCreateMigration } from "./console-access-checks-BTMEOKcL.js";
import { a as getKnownVcsProvider, n as VcsIcon, o as getProviderOwnerUrl, r as buildVcsAuthUrl } from "./providers-8aVvAoJZ.js";
import { t as ProgressBarRow } from "./ProgressBarRow-ec10tuU_.js";
import { t as getDomainStatusBadgeConfig } from "./status-badge-_8W34wot.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { i as RESOURCE_CARD_GRID_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as useScrollToCard } from "./use-scroll-to-card-D2kn3yrC.js";
import { t as InputTags } from "./input-tags-CcIzF147.js";
import { a as parseStatusCounters, r as getMigrationProgress, t as getMigrationCounts } from "./migrationProgress-D2iDqO1r.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { n as getApexDomain } from "./proxy-domains-BLLl99AI.js";
import { n as dnsPendingVerificationError, t as VerifyDomainContent } from "./VerifyDomainContent-1Al8Q-I5.js";
import { n as DeleteDomainDialog, r as ViewLogsDialog, t as ProxyRuleContextMenu } from "./ProxyRuleContextMenu-BKFi8s_C.js";
import { n as DOCS_LINK, t as EventEditorModal } from "./EventEditor-Ba3G3deD.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ProjectProtocolId, ProjectServiceId, Query } from "@appwrite.io/console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, AlertTriangle, ArrowRightLeft, ArrowUpDown, Building2, Check, CheckCircle2, Clock, Code, Copy, CreditCard, Database, ExternalLink, FileJson, FileText, Folder, GitBranch, Globe, Info, LayoutList, Link2, Loader2, MessageSquare, Minus, Pencil, Plus, RefreshCw, Settings, Shield, Square, Trash2, Unplug, Upload, User, UserCircle, Users as Users$1, Webhook, X, XCircle, Zap } from "lucide-react";
function GitInstallationContextMenu({ installation, configureHref, onDisconnect, children }) {
	const t = useT();
	const providerUrl = getProviderOwnerUrl(installation.provider, installation.organization);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			configureHref ? /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => window.open(configureHref, "_blank", "noreferrer"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Configure")]
			}) : null,
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", installation.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Organization", installation.organization),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				providerUrl ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", providerUrl),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => installation, { fallback: installation }),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onDisconnect(installation),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Disconnect")]
			})
		]
	})] });
}
function GitConfigurationCard({ projectId, page, limit, onPageChange, getGitHubAuthUrl, getVcsAuthUrl, isSelfHosted = false, isVcsEnabled = true }) {
	const t = useT();
	const vcsAuthUrl = (provider, mode = "create") => getVcsAuthUrl ? getVcsAuthUrl(provider, mode) : getGitHubAuthUrl(mode);
	const { data: installationsData, isLoading } = useVcsInstallations(projectId, page, limit);
	const deleteMutation = useDeleteVcsInstallation(projectId);
	const installations = installationsData?.installations || [];
	const total = installationsData?.total || 0;
	const [disconnectModalOpen, setDisconnectModalOpen] = useState(false);
	const [selectedInstallation, setSelectedInstallation] = useState(null);
	const { data: affectedFunctions, isLoading: functionsLoading } = useQuery({
		queryKey: [
			"functions",
			"project",
			projectId,
			"installation",
			selectedInstallation?.$id
		],
		queryFn: async () => {
			if (!projectId || !selectedInstallation?.$id) return {
				functions: [],
				total: 0
			};
			const projectSdk = sdk.forProject(projectId);
			const queries = [Query.limit(100), Query.equal("installationId", selectedInstallation.$id)];
			const response = await projectSdk.functions.list({ queries });
			return {
				functions: response.functions || [],
				total: response.total || 0
			};
		},
		enabled: disconnectModalOpen && !!selectedInstallation?.$id
	});
	const { data: affectedSites, isLoading: sitesLoading } = useQuery({
		queryKey: [
			"sites",
			"project",
			projectId,
			"installation",
			selectedInstallation?.$id
		],
		queryFn: async () => {
			if (!projectId || !selectedInstallation?.$id) return {
				sites: [],
				total: 0
			};
			const projectSdk = sdk.forProject(projectId);
			const queries = [Query.limit(100), Query.equal("installationId", selectedInstallation.$id)];
			const response = await projectSdk.sites.list({ queries });
			return {
				sites: response.sites || [],
				total: response.total || 0
			};
		},
		enabled: disconnectModalOpen && !!selectedInstallation?.$id
	});
	const handleDisconnect = async () => {
		if (!selectedInstallation) return;
		const installation = selectedInstallation;
		closeDialogBeforeOverlayUnmount(() => {
			setDisconnectModalOpen(false);
			setSelectedInstallation(null);
		});
		try {
			await deleteMutation.mutateAsync(installation.$id);
			toast.success(`${installation.organization} ${t("has been disconnected from this project")}`);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to disconnect installation")));
		}
	};
	const handleOpenDisconnectModal = (installation) => {
		setSelectedInstallation(installation);
		openDialogAfterOverlayCloses(() => setDisconnectModalOpen(true));
	};
	const getProviderUrl = (provider, organization) => {
		return getProviderOwnerUrl(provider, organization);
	};
	if (total === 0 && (!isSelfHosted || isVcsEnabled)) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-dashed border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Git configuration")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mb-4",
					children: t("Add a Git installation to your project so you can connect repositories later through your function or site settings.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center justify-center py-8 text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted ring-1 ring-border",
							children: /* @__PURE__ */ jsx(GitBranch, { className: "h-6 w-6 text-muted-foreground" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mb-1 text-[14px] font-medium text-foreground",
							children: t("No installation was added to the project yet")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mb-4 text-[13px] text-muted-foreground",
							children: t("Add an installation to connect repositories")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Button, {
									variant: "secondary",
									size: "sm",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: vcsAuthUrl("github"),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "github",
											className: "me-1.5 h-4 w-4"
										}), t("Connect to GitHub")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "secondary",
									size: "sm",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: vcsAuthUrl("gitlab"),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "gitlab",
											className: "me-1.5 h-4 w-4"
										}), t("Connect to GitLab")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "secondary",
									size: "sm",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: vcsAuthUrl("bitbucket"),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "bitbucket",
											className: "me-1.5 h-4 w-4"
										}), t("Connect to Bitbucket")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "secondary",
									size: "sm",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: vcsAuthUrl("origin"),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "origin",
											className: "me-1.5 h-4 w-4"
										}), t("Connect to Origin")]
									})
								})
							]
						})
					]
				})]
			})
		]
	});
	if (total === 0 && isSelfHosted && !isVcsEnabled) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Git configuration")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsxs(AlertDescription, {
					className: "text-[13px]",
					children: [
						/* @__PURE__ */ jsx("strong", { children: t("Installing Git on a self-hosted instance") }),
						/* @__PURE__ */ jsx("br", {}),
						t("Before installing Git in a locally hosted Appwrite project, ensure your environment variables are configured."),
						" ",
						/* @__PURE__ */ jsx(Button, {
							variant: "link",
							size: "sm",
							className: "h-auto p-0 text-[13px] font-medium underline",
							asChild: true,
							children: /* @__PURE__ */ jsx(DocsRouteLink, {
								href: "/docs/advanced/self-hosting/configuration/version-control",
								children: t("Learn more")
							})
						})
					]
				})] })
			})
		]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Git configuration")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 @container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6 @[600px]:flex-row flex-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "@[600px]:w-64 shrink-0",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Add a Git installation to your project so you can connect repositories later through your function or site settings.")
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "flex-1 min-w-0",
						children: isLoading ? /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center py-8",
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
						}) : installations.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "text-center py-8 text-[13px] text-muted-foreground",
							children: t("No installations found")
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider min-w-[150px] max-w-[500px]",
									children: t("Owner")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider min-w-[150px] max-w-[500px]",
									children: t("Created")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider min-w-[150px] max-w-[500px]",
									children: t("Updated")
								}),
								/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[60px]" })
							]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: installations.map((installation) => {
							const providerUrl = getProviderUrl(installation.provider, installation.organization);
							const knownProvider = getKnownVcsProvider(installation.provider);
							return /* @__PURE__ */ jsx(GitInstallationContextMenu, {
								installation,
								configureHref: knownProvider ? vcsAuthUrl(knownProvider.id, "update") : null,
								onDisconnect: handleOpenDisconnectModal,
								children: /* @__PURE__ */ jsxs(TableRow, { children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-8 w-8 items-center justify-center rounded-full bg-muted",
												children: /* @__PURE__ */ jsx(VcsIcon, {
													type: installation.provider,
													className: "h-4 w-4"
												})
											}), providerUrl ? /* @__PURE__ */ jsx("a", {
												href: providerUrl,
												target: "_blank",
												rel: "noreferrer",
												className: "text-[13px] font-medium link-neutral",
												children: installation.organization
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium text-foreground",
												children: installation.organization
											})]
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx(DateTooltip, { date: installation.$createdAt })
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx(DateTooltip, { date: installation.$updatedAt })
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { compact: true })
										}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
											align: "end",
											children: [knownProvider ? /* @__PURE__ */ jsx(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ jsx("a", {
													href: vcsAuthUrl(knownProvider.id, "update"),
													target: "_blank",
													rel: "noreferrer",
													className: menuItemRowClassName,
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Settings,
														children: t("Configure")
													})
												})
											}) : null, /* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handleOpenDisconnectModal(installation),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Unplug,
													children: t("Disconnect")
												})
											})]
										})] })
									})
								] })
							}, installation.$id);
						}) })] }), total > limit && /* @__PURE__ */ jsx("div", {
							className: "mt-4",
							children: /* @__PURE__ */ jsx(Pagination, {
								currentPage: page + 1,
								totalItems: total,
								pageSize: limit,
								pageSizeOptions: [limit],
								onPageChange: (newPage) => onPageChange(newPage - 1),
								onPageSizeChange: () => {},
								itemLabel: t("installations")
							})
						})] })
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-9 w-full text-[13px] sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("github"),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "github",
									className: "me-1.5 h-4 w-4"
								}), t("Connect with GitHub")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-9 w-full text-[13px] sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("gitlab"),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "gitlab",
									className: "me-1.5 h-4 w-4"
								}), t("Connect with GitLab")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-9 w-full text-[13px] sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("bitbucket"),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "bitbucket",
									className: "me-1.5 h-4 w-4"
								}), t("Connect with Bitbucket")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-9 w-full text-[13px] sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("origin"),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "origin",
									className: "me-1.5 h-4 w-4"
								}), t("Connect with Origin")]
							})
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ jsx(Dialog, {
		open: disconnectModalOpen,
		onOpenChange: setDisconnectModalOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Disconnect installation") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: affectedFunctions?.total === 0 && affectedSites?.total === 0 ? t("Are you sure you want to disconnect this git installation?") : t("Are you sure you want to disconnect this git installation? This will affect future deployments to the following sites and functions:")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 max-h-[60dvh] overflow-y-auto",
					children: [(functionsLoading || sitesLoading) && /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center py-8",
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
					}), !functionsLoading && !sitesLoading && /* @__PURE__ */ jsxs(Fragment, { children: [affectedSites && affectedSites.total > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mb-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-medium text-foreground mb-2",
							children: t("Sites")
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-2",
							children: affectedSites.sites.map((site) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30",
								children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium text-foreground truncate",
										children: site.name
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Last deployed:"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, { date: site.$updatedAt })
										]
									})]
								})]
							}, site.$id))
						})]
					}), affectedFunctions && affectedFunctions.total > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-medium text-foreground mb-2",
						children: t("Functions")
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: affectedFunctions.functions.map((func) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30",
							children: [/* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground truncate",
									children: func.name
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t("Last deployed:"),
										" ",
										/* @__PURE__ */ jsx(DateTooltip, { date: func.$updatedAt })
									]
								})]
							})]
						}, func.$id))
					})] })] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => {
							setDisconnectModalOpen(false);
							setSelectedInstallation(null);
						},
						disabled: deleteMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleDisconnect,
						disabled: deleteMutation.isPending,
						children: t("Disconnect")
					})]
				})
			]
		})
	})] });
}
function DisablePremiumGeoDBDialog({ open, onOpenChange, projectId, addonId }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const handleDisable = async () => {
		setSubmitting(true);
		setError(null);
		try {
			await sdk.forConsole.projects.deleteAddon({
				projectId,
				addonId
			});
			await Promise.all([queryClient.refetchQueries({ queryKey: projectAddonsQueryOptions(projectId).queryKey }), queryClient.refetchQueries({ queryKey: projectAddonPriceQueryOptions(projectId, ADDON_KEY_PREMIUM_GEO_DB).queryKey })]);
			toast.success(t("Premium Geo DB addon will be removed at the end of your current billing cycle"));
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
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Disable Premium Geo DB") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Are you sure you want to disable the Premium Geo DB addon? The addon will remain active until the end of your current billing cycle and will not be renewed.")
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
						children: t("Disable Premium Geo DB")
					})]
				})
			]
		})
	});
}
var GEO_DATA_FIELDS = [
	{
		label: "Country",
		standard: true
	},
	{
		label: "Continent",
		standard: true
	},
	{
		label: "EU membership",
		standard: true
	},
	{
		label: "Currency",
		standard: true
	},
	{
		label: "City",
		standard: false
	},
	{
		label: "State / region",
		standard: false
	},
	{
		label: "Postal code",
		standard: false
	},
	{
		label: "Timezone",
		standard: false
	},
	{
		label: "Coordinates",
		standard: false
	},
	{
		label: "ISP",
		standard: false
	},
	{
		label: "ASN",
		standard: false
	},
	{
		label: "Connection type",
		standard: false
	},
	{
		label: "Connection usage",
		standard: false
	},
	{
		label: "Organization",
		standard: false
	}
];
function PremiumGeoDBCard({ projectId }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const orgId = project?.teamId;
	const { organization } = useOrganizationById(orgId);
	const { plan } = useOrganizationPlan(orgId);
	const { plans } = useBillingPlans();
	const { addons, refetch: refetchAddons } = useProjectAddons(features.billing ? projectId : null);
	const { addonPrice } = useProjectAddonPrice(features.billing ? projectId : null, ADDON_KEY_PREMIUM_GEO_DB);
	const [showEnable, setShowEnable] = useState(false);
	const [showDisable, setShowDisable] = useState(false);
	const [reEnabling, setReEnabling] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const confirmHandledRef = useRef(false);
	const planSupportsPremiumGeoDB = plan?.supportedAddons?.premiumGeoDB === true;
	const canUpgradeToPremiumGeoDB = !planSupportsPremiumGeoDB && hasUpgradeablePlanWithAddon(plan, plans, "premiumGeoDB");
	const premiumGeoDBAddon = useMemo(() => findActiveOrPendingAddon(addons, ADDON_KEY_PREMIUM_GEO_DB), [addons]);
	const isPending = premiumGeoDBAddon?.status === "pending";
	const isActive = premiumGeoDBAddon?.status === "active";
	const isScheduledForRemoval = isAddonScheduledForRemoval(premiumGeoDBAddon);
	const monthlyPriceLabel = addonPrice ? formatCurrency(addonPrice.monthlyPrice, addonPrice.currency) : null;
	const confirmAddon = async (addonId) => {
		try {
			await sdk.forConsole.projects.confirmAddonPayment({
				projectId,
				addonId
			});
			await Promise.all([queryClient.refetchQueries({ queryKey: projectAddonsQueryOptions(projectId).queryKey }), queryClient.refetchQueries({ queryKey: ["project", projectId] })]);
			toast.success(t("Premium Geo DB addon has been enabled"));
		} catch (error) {
			const candidate = error;
			if (candidate?.type === "addon_not_found" || candidate?.code === 404) {
				await Promise.all([queryClient.refetchQueries({ queryKey: projectAddonsQueryOptions(projectId).queryKey }), queryClient.refetchQueries({ queryKey: ["project", projectId] })]);
				toast.success(t("Premium Geo DB addon has been enabled"));
				return;
			}
			if (candidate?.code === 402) {
				await refetchAddons();
				toast.error(candidate.message ?? t("Payment could not be authorized. Please try enabling the addon again."));
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
				addonId = findActiveOrPendingAddon((await sdk.forConsole.projects.listAddons({ projectId })).addons, "premiumGeoDB")?.$id ?? null;
			} catch (error) {
				toast.error(getErrorMessage(error) || t("Unable to verify Premium Geo DB addon status. Please retry."));
				addonId = null;
			}
			if (addonId) await confirmAddon(addonId);
			navigate({
				to: "/projects/$projectId/settings",
				params: { projectId },
				replace: true
			});
		})();
	}, [features.billing, projectId]);
	if (!features.billing) return null;
	const handleRefresh = async () => {
		if (!premiumGeoDBAddon) return;
		setRefreshing(true);
		try {
			await confirmAddon(premiumGeoDBAddon.$id);
		} finally {
			setRefreshing(false);
		}
	};
	const handleReEnable = async () => {
		setReEnabling(true);
		try {
			const result = await sdk.forConsole.projects.createPremiumGeoDBAddon({ projectId });
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
			await Promise.all([queryClient.refetchQueries({ queryKey: projectAddonsQueryOptions(projectId).queryKey }), queryClient.refetchQueries({ queryKey: ["project", projectId] })]);
			toast.success(t("Premium Geo DB addon has been re-enabled"));
		} catch (error) {
			toast.error(getErrorMessage(error));
		} finally {
			setReEnabling(false);
		}
	};
	const statusBadge = (() => {
		if (!planSupportsPremiumGeoDB) return /* @__PURE__ */ jsx(Badge, {
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
		if (!planSupportsPremiumGeoDB && canUpgradeToPremiumGeoDB) return t("Premium Geo DB is not available on your current plan. Upgrade your plan to enable it.");
		if (!planSupportsPremiumGeoDB) return t("Premium Geo DB is not available on your current plan.");
		if (isPending) return t("A payment is awaiting confirmation. If you've completed authentication, click refresh to check the payment status.");
		if (isActive && isScheduledForRemoval) return t("Premium Geo DB will be removed at the end of your current billing cycle.");
		if (isActive) return null;
		return monthlyPriceLabel ? t("Enrich request and session data with premium geolocation. {price}/month, prorated for the current billing cycle.").replace("{price}", monthlyPriceLabel) : t("Enrich request and session data with premium geolocation. Billed prorated for the current cycle.");
	})();
	const footerAction = (() => {
		if (!planSupportsPremiumGeoDB && canUpgradeToPremiumGeoDB) return /* @__PURE__ */ jsx(Button, {
			size: "sm",
			className: "h-9 text-[13px]",
			onClick: () => navigateToUpgradeWizard(navigate, orgId),
			children: t("Upgrade plan")
		});
		if (!planSupportsPremiumGeoDB) return null;
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
			children: t("Keep Premium Geo DB")
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
			children: t("Enable Premium Geo DB")
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
							children: t("Premium Geo DB")
						}), statusBadge]
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground max-w-2xl",
						children: t("Enrich sessions, activity, and usage with detailed geolocation from every request.")
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Attribute")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-center w-[120px]",
							children: t("Included")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-center w-[140px]",
							children: t("Premium Geo DB")
						})
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: GEO_DATA_FIELDS.map((field) => /* @__PURE__ */ jsxs(TableRow, {
					className: "border-border",
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-2.5 text-[13px] text-foreground",
							children: t(field.label)
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-2.5 text-center",
							children: field.standard ? /* @__PURE__ */ jsx(Check, {
								className: "mx-auto h-4 w-4 text-foreground",
								"aria-label": t("Included")
							}) : /* @__PURE__ */ jsx(Minus, {
								className: "mx-auto h-4 w-4 text-muted-foreground/50",
								"aria-label": t("Not included")
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-2.5 text-center",
							children: /* @__PURE__ */ jsx(Check, {
								className: "mx-auto h-4 w-4 text-foreground",
								"aria-label": t("Included")
							})
						})
					]
				}, field.label)) })] }),
				statusCopy ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: statusCopy
					})
				})] }) : null,
				footerAction ? /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-wrap items-center gap-3",
					children: [footerAction, isActive && !isScheduledForRemoval && monthlyPriceLabel ? /* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: t("{price}/month").replace("{price}", monthlyPriceLabel)
					}) : null]
				}) : null
			]
		}),
		/* @__PURE__ */ jsx(EnablePremiumGeoDBDialog, {
			open: showEnable,
			onOpenChange: setShowEnable,
			projectId
		}),
		premiumGeoDBAddon ? /* @__PURE__ */ jsx(DisablePremiumGeoDBDialog, {
			open: showDisable,
			onOpenChange: setShowDisable,
			projectId,
			addonId: premiumGeoDBAddon.$id
		}) : null
	] });
}
function CopyableInput({ value, label, className }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const inputRef = useRef(null);
	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative", className),
		children: [/* @__PURE__ */ jsx(Input, {
			ref: inputRef,
			value,
			readOnly: true,
			className: "pe-10 font-mono text-[13px]"
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: handleCopy,
			className: "absolute end-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-md hover:bg-accent transition-colors",
			"aria-label": `${t("Copy")} ${label}`,
			children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 text-muted-foreground" })
		})]
	});
}
var Dependencies = /* @__PURE__ */ function(Dependencies$1) {
	Dependencies$1["PROJECT"] = "project";
	Dependencies$1["ORGANIZATION"] = "organization";
	Dependencies$1["PROJECT_VARIABLES"] = "project-variables";
	Dependencies$1["PROJECT_INSTALLATIONS"] = "project-installations";
	return Dependencies$1;
}(Dependencies || {});
var PROJECT_PROTOCOLS = [
	{
		id: ProjectProtocolId.Rest,
		label: "REST",
		description: "Standard HTTP API requests from client SDKs.",
		icon: ArrowUpDown
	},
	{
		id: ProjectProtocolId.Graphql,
		label: "GraphQL",
		description: "GraphQL API access for queries and mutations.",
		icon: Code
	},
	{
		id: ProjectProtocolId.Websocket,
		label: "WebSocket",
		description: "Realtime subscriptions over WebSocket connections.",
		icon: MessageSquare
	}
];
var PROJECT_SERVICES = [
	{
		id: ProjectServiceId.Account,
		label: "Account",
		icon: User
	},
	{
		id: ProjectServiceId.Avatars,
		label: "Avatars",
		icon: UserCircle
	},
	{
		id: ProjectServiceId.Databases,
		label: "Databases",
		icon: Database
	},
	{
		id: ProjectServiceId.Tablesdb,
		label: "TablesDB",
		icon: Database
	},
	{
		id: ProjectServiceId.Functions,
		label: "Functions",
		icon: Zap
	},
	{
		id: ProjectServiceId.Locale,
		label: "Locale",
		icon: Globe
	},
	{
		id: ProjectServiceId.Messaging,
		label: "Messaging",
		icon: MessageSquare
	},
	{
		id: ProjectServiceId.Migrations,
		label: "Migrations",
		icon: Upload
	},
	{
		id: ProjectServiceId.Project,
		label: "Project",
		icon: Folder
	},
	{
		id: ProjectServiceId.Storage,
		label: "Storage",
		icon: Folder
	},
	{
		id: ProjectServiceId.Sites,
		label: "Sites",
		icon: Globe
	},
	{
		id: ProjectServiceId.Teams,
		label: "Teams",
		icon: Building2
	},
	{
		id: ProjectServiceId.Users,
		label: "Users",
		icon: Users$1
	}
];
function removeAlertSearchParam(prev) {
	const next = prev && typeof prev === "object" ? { ...prev } : {};
	delete next.alert;
	return next;
}
function ProjectSettingsOverview({ projectId }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const supportsMultiRegion = features.multiRegion;
	const supportsMultiTenancy = features.multiTenancy;
	const navigate = useNavigate();
	useScrollToCard();
	const queryClient = useQueryClient();
	const search = useSearch({ from: "/_public/projects/$projectId/settings" });
	const { project, projectData: rawProjectData, isLoading: projectLoading } = useProject(projectId);
	const canWriteProjects = useMemo(() => {
		return true;
	}, []);
	const [projectName, setProjectName] = useState("");
	const [updatingServices, setUpdatingServices] = useState(/* @__PURE__ */ new Set());
	const [services, setServices] = useState({});
	const [updatingProtocols, setUpdatingProtocols] = useState(/* @__PURE__ */ new Set());
	const [protocols, setProtocols] = useState({
		[ProjectProtocolId.Rest]: true,
		[ProjectProtocolId.Graphql]: true,
		[ProjectProtocolId.Websocket]: true
	});
	const [protocolDialogOpen, setProtocolDialogOpen] = useState(false);
	const [protocolBulkStatus, setProtocolBulkStatus] = useState(null);
	const [installationsPage, setInstallationsPage] = useState(0);
	const installationsLimit = 25;
	const [selectedOrgId, setSelectedOrgId] = useState("");
	const [deleteConfirmation, setDeleteConfirmation] = useState("");
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const refetchProjectLists = async () => {
		await queryClient.refetchQueries({
			predicate: (query) => query.queryKey[0] === "projects",
			type: "all"
		});
		await queryClient.refetchQueries({
			queryKey: ["organizations", "console"],
			type: "all"
		});
	};
	useEffect(() => {
		if (project) setProjectName(project.name);
	}, [project]);
	useEffect(() => {
		if (rawProjectData) {
			setServices(servicesRecordFromProject(rawProjectData, PROJECT_SERVICES.map((s) => s.id)));
			setProtocols(protocolsRecordFromProject(rawProjectData));
		}
	}, [rawProjectData]);
	useEffect(() => {
		const alert = search?.alert;
		if (alert === "installation-created") {
			toast.success(t("Git installation has imported to your project"));
			navigate({
				search: removeAlertSearchParam,
				replace: true
			});
		} else if (alert === "installation-updated") {
			toast.success(t("Git installation has been successfully updated"));
			navigate({
				search: removeAlertSearchParam,
				replace: true
			});
		}
	}, [
		search,
		navigate,
		t
	]);
	const projectEndpoint = useMemo(() => getApiEndpoint(project?.region), [project?.region]);
	const projectRegion = useMemo(() => rawProjectData?.region || project?.region, [rawProjectData?.region, project?.region]);
	const updateProjectService = async (serviceId, enabled) => {
		return await sdk.forProject(projectId, projectRegion).project.updateService({
			serviceId,
			enabled
		});
	};
	const updateProjectProtocol = async (protocolId, enabled) => {
		return await sdk.forProject(projectId, projectRegion).project.updateProtocol({
			protocolId,
			enabled
		});
	};
	const patchCachedProtocol = (protocolId, enabled) => {
		queryClient.setQueryData(["project", projectId], (current) => current ? patchProjectProtocolsInCache(current, protocolId, enabled) : current);
	};
	const handleViewApiKeys = () => {
		navigate({
			to: "/projects/$projectId/api-keys",
			params: { projectId }
		});
	};
	const updateNameMutation = useMutation({
		mutationFn: async (name) => {
			const trimmedName = name.trim();
			if (trimmedName.length < 1 || trimmedName.length > 128) throw new Error(`${t("Name must be between 1 and")} 128 ${t("characters")}`);
			if (!project?.teamId) throw new Error(t("Organization not found for this project"));
			await updateConsoleProject({
				projectId,
				name: trimmedName,
				organizationId: project.teamId
			});
		},
		onSuccess: async () => {
			toast.success(t("Project name has been updated"));
			await queryClient.refetchQueries({
				queryKey: [Dependencies.PROJECT, projectId],
				exact: true,
				type: "all"
			});
			await refetchProjectLists();
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update project name")));
		}
	});
	const setServicesFromProjectResponse = (response) => {
		setServices(servicesRecordFromProject(response, PROJECT_SERVICES.map((service) => service.id)));
		queryClient.setQueryData(["project", projectId], response);
	};
	const updateServiceMutation = useMutation({
		mutationFn: async ({ service, status }) => {
			return {
				response: await updateProjectService(service, status),
				service,
				status
			};
		},
		onSuccess: (data) => {
			const { response, service, status } = data;
			const serviceLabel = PROJECT_SERVICES.find((item) => item.id === service)?.label ?? service;
			toast.success(`${t(serviceLabel)} ${status ? t("service has been enabled") : t("service has been disabled")}`);
			setServicesFromProjectResponse(response);
			setUpdatingServices((prev) => {
				const next = new Set(prev);
				next.delete(service);
				return next;
			});
		},
		onError: (error, variables) => {
			toast.error(getErrorMessage(error, t("Failed to update service")));
			setServices((prev) => ({
				...prev,
				[variables.service]: !variables.status
			}));
			setUpdatingServices((prev) => {
				const next = new Set(prev);
				next.delete(variables.service);
				return next;
			});
		}
	});
	const updateAllServicesMutation = useMutation({
		mutationFn: async (status) => {
			let response = null;
			for (const service of PROJECT_SERVICES) {
				if (services[service.id] === status) continue;
				response = await updateProjectService(service.id, status);
			}
			return {
				response,
				status
			};
		},
		onSuccess: (data) => {
			const { response, status } = data;
			toast.success(`${t("All services for")} ${project?.name || t("project")} ${status ? t("have been enabled.") : t("have been disabled.")}`);
			if (response) setServicesFromProjectResponse(response);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update services")));
		}
	});
	const updateProtocolMutation = useMutation({
		mutationFn: async ({ protocol, status }) => {
			return await updateProjectProtocol(protocol, status);
		},
		onSuccess: async (_projectData, variables) => {
			const protocolConfig = PROJECT_PROTOCOLS.find((protocol) => protocol.id === variables.protocol);
			setProtocols((prev) => ({
				...prev,
				[variables.protocol]: variables.status
			}));
			if (protocolConfig) patchCachedProtocol(protocolConfig.id, variables.status);
			toast.success(`${protocolConfig?.label || t("Protocol")} ${variables.status ? t("protocol has been enabled") : t("protocol has been disabled")}`);
		},
		onError: (error, variables) => {
			toast.error(getErrorMessage(error, t("Failed to update protocol")));
			setProtocols((prev) => ({
				...prev,
				[variables.protocol]: !variables.status
			}));
		},
		onSettled: (_data, _error, variables) => {
			setUpdatingProtocols((prev) => {
				const next = new Set(prev);
				next.delete(variables.protocol);
				return next;
			});
		}
	});
	const updateAllProtocolsMutation = useMutation({
		mutationFn: async (status) => {
			for (const protocol of PROJECT_PROTOCOLS) {
				if (protocols[protocol.id] === status) continue;
				await updateProjectProtocol(protocol.id, status);
			}
			return status;
		},
		onSuccess: async (status) => {
			setProtocols({
				[ProjectProtocolId.Rest]: status,
				[ProjectProtocolId.Graphql]: status,
				[ProjectProtocolId.Websocket]: status
			});
			for (const protocol of PROJECT_PROTOCOLS) patchCachedProtocol(protocol.id, status);
			toast.success(`${t("All protocols for")} ${project?.name || t("project")} ${status ? t("have been enabled.") : t("have been disabled.")}`);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update protocols")));
		},
		onSettled: () => {
			setProtocolDialogOpen(false);
			setProtocolBulkStatus(null);
		}
	});
	const transferProjectMutation = useMutation({
		mutationFn: async (teamId) => {
			if (!getActiveProfileFeatures().multiTenancy) throw new Error("This console profile does not support transferring between organizations");
			await sdk.forConsole.projects.updateTeam({
				projectId,
				teamId
			});
		},
		onSuccess: async (_, teamId) => {
			const oldTeamId = project?.teamId;
			const orgName = (queryClient.getQueryData(["organizations", "console"])?.teams?.find((t$1) => t$1.$id === teamId))?.name || t("Organization");
			toast.success(`${project?.name || t("Project")} ${t("has been transferred to")} ${orgName}`);
			await queryClient.refetchQueries({
				queryKey: ["project", projectId],
				exact: true,
				type: "all"
			});
			await queryClient.refetchQueries({
				queryKey: [Dependencies.PROJECT, projectId],
				exact: true,
				type: "all"
			});
			if (oldTeamId) await queryClient.refetchQueries({
				queryKey: [
					"projects",
					"team",
					oldTeamId
				],
				type: "all"
			});
			await queryClient.refetchQueries({
				queryKey: [
					"projects",
					"team",
					teamId
				],
				type: "all"
			});
			await refetchProjectLists();
			navigate({
				to: "/organizations/$orgId",
				params: { orgId: teamId }
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to transfer project")));
		}
	});
	const deleteProjectMutation = useMutation({
		mutationFn: async () => {
			await deleteProject(projectId, project?.region);
		},
		onSuccess: async () => {
			toast.success(`${project?.name || t("Project")} ${t("has been deleted")}`);
			const orgId = project?.teamId;
			if (orgId) {
				await queryClient.refetchQueries({
					queryKey: [Dependencies.ORGANIZATION, orgId],
					type: "all"
				});
				await refetchProjectLists();
				navigate({
					to: "/organizations/$orgId",
					params: { orgId }
				});
			} else await refetchProjectLists();
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to delete project")));
		}
	});
	const handleServiceToggle = (service, checked) => {
		const nextChecked = services[service] === void 0 ? checked : !services[service];
		setServices((prev) => ({
			...prev,
			[service]: nextChecked
		}));
		setUpdatingServices((prev) => new Set(prev).add(service));
		updateServiceMutation.mutate({
			service,
			status: nextChecked
		}, { onError: () => {
			setServices((prev) => ({
				...prev,
				[service]: !nextChecked
			}));
		} });
	};
	const handleBulkServiceUpdate = (status) => {
		setServices(Object.fromEntries(PROJECT_SERVICES.map((service) => [service.id, status])));
		updateAllServicesMutation.mutate(status);
	};
	const handleProtocolToggle = (protocol, checked) => {
		const nextChecked = protocols[protocol] === void 0 ? checked : !protocols[protocol];
		setProtocols((prev) => ({
			...prev,
			[protocol]: nextChecked
		}));
		setUpdatingProtocols((prev) => new Set(prev).add(protocol));
		updateProtocolMutation.mutate({
			protocol,
			status: nextChecked
		});
	};
	const openProtocolBulkDialog = (status) => {
		setProtocolBulkStatus(status);
		setProtocolDialogOpen(true);
	};
	const allServicesEnabled = useMemo(() => {
		const serviceValues = Object.values(services);
		return serviceValues.length > 0 && serviceValues.every((v) => v === true);
	}, [services]);
	const allServicesDisabled = useMemo(() => {
		const serviceValues = Object.values(services);
		return serviceValues.length > 0 && serviceValues.every((v) => v === false);
	}, [services]);
	const anyServiceUpdating = updatingServices.size > 0 || updateAllServicesMutation.isPending;
	const allProtocolsEnabled = useMemo(() => {
		const protocolValues = Object.values(protocols);
		return protocolValues.length > 0 && protocolValues.every(Boolean);
	}, [protocols]);
	const allProtocolsDisabled = useMemo(() => {
		const protocolValues = Object.values(protocols);
		return protocolValues.length > 0 && protocolValues.every((v) => !v);
	}, [protocols]);
	const anyProtocolUpdating = updatingProtocols.size > 0 || updateAllProtocolsMutation.isPending;
	const { organizations: allOrganizations, isLoading: organizationsLoading } = useOrganizations();
	const organizations = useMemo(() => {
		if (!allOrganizations || !project) return [];
		return allOrganizations.filter((org) => org.$id !== project.teamId).map((org) => ({
			value: org.$id,
			label: org.name
		}));
	}, [allOrganizations, project]);
	const getVcsAuthUrl = (provider = "github", mode = "create") => {
		const alertType = mode === "create" ? "installation-created" : "installation-updated";
		return buildVcsAuthUrl({
			endpoint: projectEndpoint,
			provider,
			projectId,
			successUrl: `${window.location.origin}/projects/${projectId}/settings?alert=${alertType}`,
			failureUrl: `${window.location.origin}/projects/${projectId}/settings`
		});
	};
	const getGitHubAuthUrl = (mode = "create") => getVcsAuthUrl("github", mode);
	if (projectLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	if (!project) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[14px] font-medium text-foreground",
				children: t("Project not found")
			})
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl space-y-6 px-4 py-4 sm:px-6",
		children: [
			canWriteProjects && /* @__PURE__ */ jsxs("div", {
				"data-card-id": "project-name",
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Name")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "name",
							className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block",
							children: t("Name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "name",
							value: projectName,
							onChange: (e) => setProjectName(e.target.value),
							placeholder: t("Enter name"),
							maxLength: 128,
							className: "mt-2 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: projectName === project.name || !projectName.trim() || projectName.trim().length < 1 || projectName.trim().length > 128 || updateNameMutation.isPending,
							onClick: () => {
								const trimmedName = projectName.trim();
								if (trimmedName && trimmedName !== project.name && trimmedName.length >= 1 && trimmedName.length <= 128) updateNameMutation.mutate(trimmedName);
							},
							children: t("Update")
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				"data-card-id": "api-credentials",
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("API credentials")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 @container",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex gap-6 @[600px]:flex-row flex-col",
							children: [/* @__PURE__ */ jsx("div", {
								className: "@[600px]:w-64 shrink-0",
								children: /* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground",
									children: [t("Access Appwrite services using this project's API Endpoint and Project ID."), " "]
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-1 min-w-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block",
										children: t("Project ID")
									}), /* @__PURE__ */ jsx(CopyableInput, {
										value: project.$id,
										label: t("Project ID")
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block",
										children: t("API Endpoint")
									}), /* @__PURE__ */ jsx(CopyableInput, {
										value: projectEndpoint,
										label: t("API Endpoint")
									})] })]
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleViewApiKeys,
							children: t("View API keys")
						})
					})
				]
			}),
			canWriteProjects && /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Protocols")
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 @container",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex gap-6 @[600px]:flex-row flex-col",
								children: [/* @__PURE__ */ jsx("div", {
									className: "@[600px]:w-64 shrink-0",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Protocol settings control access through REST, GraphQL, and WebSocket APIs independently from service-level access.")
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-4",
										children: [
											/* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-[12px]",
												disabled: anyProtocolUpdating || allProtocolsEnabled,
												onClick: () => openProtocolBulkDialog(true),
												children: t("Enable all")
											}),
											/* @__PURE__ */ jsx(Separator, {
												orientation: "vertical",
												className: "h-4"
											}),
											/* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-[12px]",
												disabled: anyProtocolUpdating || allProtocolsDisabled,
												onClick: () => openProtocolBulkDialog(false),
												children: t("Disable all")
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "rounded-lg border border-border bg-background",
										children: PROJECT_PROTOCOLS.map((protocol, index) => {
											const Icon$1 = protocol.icon;
											const isUpdating = updatingProtocols.has(protocol.id);
											return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
												className: cn("flex items-center justify-between gap-4 px-4 py-3", isUpdating && "opacity-75"),
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex min-w-0 items-start gap-3",
													children: [/* @__PURE__ */ jsx("div", {
														className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
														children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
													}), /* @__PURE__ */ jsxs("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ jsx(Label, {
															htmlFor: `protocol-${protocol.id}`,
															className: "text-[13px] font-medium text-foreground cursor-pointer",
															children: protocol.label
														}), /* @__PURE__ */ jsx("p", {
															className: "mt-1 text-[12px] text-muted-foreground",
															children: t(protocol.description)
														})]
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [isUpdating && /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx(Switch, {
														id: `protocol-${protocol.id}`,
														checked: protocols[protocol.id],
														onCheckedChange: (checked) => handleProtocolToggle(protocol.id, checked),
														disabled: isUpdating || anyProtocolUpdating
													})]
												})]
											}), index < PROJECT_PROTOCOLS.length - 1 && /* @__PURE__ */ jsx("div", { className: "border-t border-border" })] }, protocol.id);
										})
									})]
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					"data-card-id": "services",
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Services")
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 @container",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex gap-6 @[600px]:flex-row flex-col",
								children: [/* @__PURE__ */ jsx("div", {
									className: "@[600px]:w-64 shrink-0",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Choose services you wish to enable or disable for the client API. When disabled, the services are not accessible to client SDKs but remain accessible to server SDKs.")
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-4",
										children: [
											/* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-[12px]",
												disabled: anyServiceUpdating || allServicesEnabled,
												onClick: () => {
													handleBulkServiceUpdate(true);
												},
												children: t("Enable all")
											}),
											/* @__PURE__ */ jsx(Separator, {
												orientation: "vertical",
												className: "h-4"
											}),
											/* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-[12px]",
												disabled: anyServiceUpdating || allServicesDisabled,
												onClick: () => {
													handleBulkServiceUpdate(false);
												},
												children: t("Disable all")
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "grid min-w-0 gap-3 @[640px]:grid-cols-2 @[1024px]:grid-cols-3 [&>*]:min-w-0",
										children: PROJECT_SERVICES.map((service) => {
											const Icon$1 = service.icon;
											const enabled = services[service.id] ?? true;
											const isUpdating = updatingServices.has(service.id);
											return /* @__PURE__ */ jsx("div", {
												className: cn("min-w-0 rounded-lg border border-border bg-card/50 p-4 transition-colors", isUpdating && "opacity-75", !isUpdating && "hover:bg-card"),
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Label, {
															htmlFor: service.id,
															className: "text-[13px] font-medium text-foreground cursor-pointer",
															children: t(service.label)
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [isUpdating && /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx(Switch, {
															id: service.id,
															checked: enabled,
															onCheckedChange: (checked) => handleServiceToggle(service.id, checked),
															disabled: isUpdating
														})]
													})]
												})
											}, service.id);
										})
									})]
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsx(GitConfigurationCard, {
					projectId,
					page: installationsPage,
					limit: installationsLimit,
					onPageChange: setInstallationsPage,
					getGitHubAuthUrl,
					getVcsAuthUrl,
					isSelfHosted: false,
					isVcsEnabled: true
				}),
				/* @__PURE__ */ jsx(PremiumGeoDBCard, { projectId }),
				/* @__PURE__ */ jsx(MCPSection, {
					projectId,
					projectName: project.name
				}),
				supportsMultiTenancy && /* @__PURE__ */ jsx(ChangeOrganizationSection, {
					project,
					organizations,
					organizationsLoading,
					selectedOrgId,
					onOrgChange: setSelectedOrgId,
					onTransfer: transferProjectMutation
				}),
				/* @__PURE__ */ jsx(DeleteProjectSection, {
					project,
					supportsMultiRegion,
					deleteConfirmation,
					onDeleteConfirmationChange: setDeleteConfirmation,
					deleteDialogOpen,
					onDeleteDialogOpenChange: setDeleteDialogOpen,
					onDelete: deleteProjectMutation
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: protocolDialogOpen,
					onOpenChange: setProtocolDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: protocolBulkStatus ? t("Enable all protocols") : t("Disable all protocols") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: protocolBulkStatus ? t("All project protocols will be enabled.") : t("Are you sure you want to disable all protocols? This will disable client access over those protocols until they are re-enabled.")
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => setProtocolDialogOpen(false),
								disabled: updateAllProtocolsMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => {
									if (protocolBulkStatus !== null) updateAllProtocolsMutation.mutate(protocolBulkStatus);
								},
								disabled: protocolBulkStatus === null || updateAllProtocolsMutation.isPending,
								children: protocolBulkStatus ? t("Enable all") : t("Disable all")
							})]
						})]
					})
				})
			] })
		]
	});
}
function ChangeOrganizationSection({ project, organizations, organizationsLoading, selectedOrgId, onOrgChange, onTransfer }) {
	const t = useT();
	const [transferDialogOpen, setTransferDialogOpen] = useState(false);
	const hasNoTargetOrgs = !organizationsLoading && organizations.length === 0;
	const isMoveDisabled = hasNoTargetOrgs || !selectedOrgId || selectedOrgId === project.teamId || onTransfer.isPending;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		"data-card-id": "transfer-project",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Transfer project")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mb-4",
						children: t("To transfer this project, you must be a member of both the current and target organization. Select a destination below.")
					}),
					hasNoTargetOrgs && /* @__PURE__ */ jsxs(Alert, {
						className: "mb-4",
						children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[13px]",
							children: t("You do not have any organizations you can transfer this project to. Create or join another organization to transfer.")
						})]
					}),
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "organization",
						className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block",
						children: t("Move to")
					}),
					/* @__PURE__ */ jsxs(Select, {
						value: selectedOrgId,
						onValueChange: onOrgChange,
						disabled: organizationsLoading,
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							id: "organization",
							className: "mt-2 h-9 max-w-sm",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: organizationsLoading ? t("Loading organizations...") : t("Select destination") })
						}), /* @__PURE__ */ jsx(SelectContent, { children: organizations.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "px-2 py-1.5 text-[13px] text-muted-foreground",
							children: organizationsLoading ? t("Loading...") : t("No other organizations available")
						}) : organizations.map((org) => /* @__PURE__ */ jsx(SelectItem, {
							value: org.value,
							children: org.label
						}, org.value)) })]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: isMoveDisabled ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("span", {
						className: "inline-block",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: true,
							onClick: () => setTransferDialogOpen(true),
							children: t("Transfer project")
						})
					})
				}), /* @__PURE__ */ jsx(TooltipContent, { children: hasNoTargetOrgs ? t("You do not have any organizations you can transfer this project to.") : !selectedOrgId || selectedOrgId === project.teamId ? t("Select a different organization to transfer to.") : t("Transfer this project to the selected organization") })] }) }) : /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: () => setTransferDialogOpen(true),
					children: t("Transfer project")
				})
			})
		]
	}), /* @__PURE__ */ jsx(Dialog, {
		open: transferDialogOpen,
		onOpenChange: setTransferDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsxs(DialogTitle, { children: [
						t("Transfer project"),
						" ",
						/* @__PURE__ */ jsx("span", {
							title: getProjectNameDisplayTitle(project.name) ?? project.name,
							children: formatProjectNameForDisplay(project.name)
						})
					] }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Consider the following before transferring your project:")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted",
								children: /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-muted-foreground" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Permissions")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: t("Depending on your role in the target organization, your level of access may change after transfer.")
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted",
								children: /* @__PURE__ */ jsx(Users$1, { className: "h-4 w-4 text-muted-foreground" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Access")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: t("Members who are not part of the destination organization will lose access and must be invited to the new organization to regain access.")
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted",
								children: /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-muted-foreground" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Features and usage")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: t("The target organization’s pricing plan may limit features or usage (e.g. executions, storage, or team size) for this project.")
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => setTransferDialogOpen(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: onTransfer.isPending,
						onClick: () => {
							if (selectedOrgId) {
								onTransfer.mutate(selectedOrgId);
								setTransferDialogOpen(false);
							}
						},
						children: t("Transfer project")
					})]
				})
			]
		})
	})] });
}
function DeleteProjectSection({ project, supportsMultiRegion, deleteConfirmation, onDeleteConfirmationChange, deleteDialogOpen, onDeleteDialogOpenChange, onDelete }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		"data-card-id": "delete-project",
		className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Delete project")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Permanently delete this project and all associated data. This action cannot be undone.")
				}), project && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx(InitialsAvatar, {
						name: project.name,
						size: "md"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							title: getProjectNameDisplayTitle(project.name) ?? project.name,
							children: formatProjectNameForDisplay(project.name)
						}), supportsMultiRegion && project.region && /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Region:"),
								" ",
								project.region
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
				children: /* @__PURE__ */ jsxs(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: onDeleteDialogOpenChange,
					children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							children: t("Delete project")
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [
							/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Project") }), /* @__PURE__ */ jsxs(DialogDescription, {
									className: "text-[13px] mt-2",
									children: [
										t("Are you sure you want to delete"),
										" ",
										project && /* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											title: getProjectNameDisplayTitle(project.name) ?? project.name,
											children: formatProjectNameForDisplay(project.name)
										}),
										" ",
										t("and all its databases, functions, and files? This action cannot be undone.")
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-4 pt-0",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "rounded-lg border border-border bg-muted/50 p-3 mb-4 mt-2",
										children: project && /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ jsx(InitialsAvatar, {
												name: project.name,
												size: "sm"
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground truncate",
												title: getProjectNameDisplayTitle(project.name) ?? project.name,
												children: formatProjectNameForDisplay(project.name)
											}), supportsMultiRegion && project.region && /* @__PURE__ */ jsxs("p", {
												className: "text-[11px] text-muted-foreground",
												children: [
													t("Region:"),
													" ",
													project.region
												]
											})] })]
										})
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "text-[13px] text-muted-foreground",
										children: [
											t("Type"),
											" ",
											project && /* @__PURE__ */ jsx("span", {
												className: "font-mono font-medium text-foreground bg-muted px-1.5 py-0.5 rounded",
												children: project.name
											}),
											" ",
											t("to confirm")
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										value: deleteConfirmation,
										onChange: (e) => onDeleteConfirmationChange(e.target.value),
										placeholder: t("Enter project name"),
										className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0",
										autoFocus: true
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
										onDeleteDialogOpenChange(false);
										onDeleteConfirmationChange("");
									},
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: deleteConfirmation !== project.name || onDelete.isPending,
									onClick: () => {
										if (deleteConfirmation === project.name) {
											onDelete.mutate(void 0);
											onDeleteDialogOpenChange(false);
										}
									},
									children: t("Delete")
								})]
							})
						]
					})]
				})
			})
		]
	}) });
}
function VerifyDomainDialog({ open, onOpenChange, projectId, region, rule, organizationDomainId, onVerifySuccess, onReconfigure }) {
	const t = useT();
	const verifyDomainMutation = useVerifyDomain(projectId, region);
	const deleteDomainMutation = useDeleteDomain(projectId, region);
	const [verificationError, setVerificationError] = useState(null);
	useEffect(() => {
		if (open) setVerificationError(null);
	}, [open]);
	const handleChange = async () => {
		try {
			await deleteDomainMutation.mutateAsync(rule.$id);
			onOpenChange(false);
			onReconfigure?.(rule.domain);
		} catch {
			toast.error(t("Failed to remove domain"));
		}
	};
	const handleVerify = async () => {
		setVerificationError(null);
		try {
			const updatedRule = await verifyDomainMutation.mutateAsync({
				ruleId: rule.$id,
				organizationDomainId
			});
			if (updatedRule.status === "created" || updatedRule.status === "unverified") setVerificationError(dnsPendingVerificationError(t));
			else if (updatedRule.status === "verified") {
				toast.success(t("Domain added successfully"));
				onVerifySuccess();
			} else {
				toast.success(t("Verification in progress"));
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
						disabled: verifyDomainMutation.isPending || deleteDomainMutation.isPending,
						children: t("Change")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						onClick: handleVerify,
						disabled: verifyDomainMutation.isPending,
						children: t("Verify")
					})]
				})
			]
		})
	});
}
function RetryDomainDialog({ open, onOpenChange, projectId, region, rule, organizationDomainId, onRetrySuccess }) {
	const t = useT();
	const verifyDomainMutation = useVerifyDomain(projectId, region);
	const [verificationError, setVerificationError] = useState(null);
	useEffect(() => {
		if (open) setVerificationError(null);
	}, [open]);
	const handleRetry = async () => {
		setVerificationError(null);
		try {
			const updatedRule = await verifyDomainMutation.mutateAsync({
				ruleId: rule.$id,
				organizationDomainId
			});
			if (updatedRule.status === "created" || updatedRule.status === "unverified") setVerificationError(dnsPendingVerificationError(t));
			else if (updatedRule.status === "verified") {
				toast.success(`${rule.domain} ${t("has been verified")}`);
				onRetrySuccess();
			} else {
				toast.success(t("Verification in progress"));
				onRetrySuccess();
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
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Retry verification") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Retry domain verification for"),
							" ",
							rule.domain
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 max-h-[70dvh] overflow-y-auto",
					children: /* @__PURE__ */ jsx(VerifyDomainContent, {
						rule,
						region,
						noCard: true,
						verificationError
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: verifyDomainMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						onClick: handleRetry,
						disabled: verifyDomainMutation.isPending,
						children: t("Retry")
					})]
				})
			]
		})
	});
}
function Domains$1({ projectId, searchValue: searchValueProp = "" }) {
	const t = useT();
	const navigate = useNavigate();
	const { project } = useProject(projectId);
	const region = project?.region;
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const [verifyDomainOpen, setVerifyDomainOpen] = useState(false);
	const [deleteDomainOpen, setDeleteDomainOpen] = useState(false);
	const [viewLogsOpen, setViewLogsOpen] = useState(false);
	const [retryDomainOpen, setRetryDomainOpen] = useState(false);
	const [selectedRule, setSelectedRule] = useState(null);
	const { rules, isLoading } = useProjectDomains(projectId, region, searchValueProp);
	const { domains: orgDomains } = useOrganizationDomains(project?.teamId, 0, 500);
	const apexToOrgDomainId = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const d of orgDomains) if (d.domain) map.set(d.domain.toLowerCase(), d.$id);
		return map;
	}, [orgDomains]);
	const getStatusBadge = (status) => {
		const config = getDomainStatusBadgeConfig(status);
		return /* @__PURE__ */ jsxs(Badge, {
			variant: config.variant,
			className: "text-[10px] shrink-0 gap-1.5",
			title: status === "verifying" ? t("SSL certificate is being issued. This usually takes a couple of minutes.") : void 0,
			children: [status === "verifying" && /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }), t(config.label)]
		});
	};
	const handleRetry = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedRule(rule);
			setRetryDomainOpen(true);
		});
	};
	const handleViewLogs = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedRule(rule);
			setViewLogsOpen(true);
		});
	};
	const handleDelete = (rule) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedRule(rule);
			setDeleteDomainOpen(true);
		});
	};
	const canRetry = (status) => {
		return status === "created" || status === "unverified";
	};
	const getOrganizationDomainId = (rule) => {
		const apex = getApexDomain(rule.domain);
		return apex ? apexToOrgDomainId.get(apex.toLowerCase()) : void 0;
	};
	const filteredRules = useMemo(() => {
		if (!searchValueProp.trim()) return rules;
		const search = searchValueProp.toLowerCase();
		return rules.filter((rule) => rule.domain.toLowerCase().includes(search) || rule.$id.toLowerCase().includes(search));
	}, [rules, searchValueProp]);
	const pageIndexed = currentPage - 1;
	const paginatedRules = useMemo(() => {
		const start = pageIndexed * pageSize;
		const end = start + pageSize;
		return filteredRules.slice(start, end);
	}, [
		filteredRules,
		pageIndexed,
		pageSize
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
		children: [isLoading ? /* @__PURE__ */ jsx("div", {
			className: "flex h-64 items-center justify-center",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		}) : paginatedRules.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
			icon: ExternalLink,
			title: searchValueProp ? void 0 : t("No domains yet"),
			description: searchValueProp ? void 0 : t("Add a custom domain to serve your Appwrite API on your own domain"),
			isEmpty: !searchValueProp,
			hasFilters: !!searchValueProp,
			variant: "card"
		}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Domain")
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
			}) }), /* @__PURE__ */ jsx(TableBody, { children: paginatedRules.map((rule) => /* @__PURE__ */ jsx(ProxyRuleContextMenu, {
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
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								getStatusBadge(rule.status),
								rule.status !== "verified" && /* @__PURE__ */ jsx(Button, {
									variant: "link",
									size: "sm",
									className: "h-auto p-0 text-[13px]",
									onClick: () => handleViewLogs(rule),
									children: t("View logs")
								}),
								canRetry(rule.status) && /* @__PURE__ */ jsx(Button, {
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
									canRetry(rule.status) && /* @__PURE__ */ jsx(DropdownMenuItem, {
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
			}, rule.$id)) })] })
		}), filteredRules.length > 0 && /* @__PURE__ */ jsx(Pagination, {
			currentPage,
			totalItems: filteredRules.length,
			pageSize,
			pageSizeOptions: [
				10,
				25,
				50,
				100
			],
			onPageChange: setCurrentPage,
			onPageSizeChange: (size) => {
				setPageSize(size);
				setCurrentPage(1);
			},
			itemLabel: t("domains")
		})] }), selectedRule && /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(VerifyDomainDialog, {
				open: verifyDomainOpen,
				onOpenChange: setVerifyDomainOpen,
				projectId,
				region,
				rule: selectedRule,
				organizationDomainId: getOrganizationDomainId(selectedRule),
				onReconfigure: (reconfigureDomain) => {
					setVerifyDomainOpen(false);
					setSelectedRule(null);
					navigate({
						to: "/projects/$projectId/settings/domains/add",
						params: { projectId },
						search: reconfigureDomain ? { domain: reconfigureDomain } : void 0
					});
				},
				onVerifySuccess: () => {
					toast.success(t("Domain verified successfully"));
					setVerifyDomainOpen(false);
					setSelectedRule(null);
				}
			}),
			/* @__PURE__ */ jsx(RetryDomainDialog, {
				open: retryDomainOpen,
				onOpenChange: setRetryDomainOpen,
				projectId,
				region,
				rule: selectedRule,
				organizationDomainId: getOrganizationDomainId(selectedRule),
				onRetrySuccess: () => {
					toast.success(t("Verification in progress"));
					setRetryDomainOpen(false);
					setSelectedRule(null);
				}
			}),
			/* @__PURE__ */ jsx(ViewLogsDialog, {
				open: viewLogsOpen,
				onOpenChange: setViewLogsOpen,
				rule: selectedRule
			}),
			/* @__PURE__ */ jsx(DeleteDomainDialog, {
				open: deleteDomainOpen,
				onOpenChange: setDeleteDomainOpen,
				projectId,
				region,
				rule: selectedRule,
				onDeleteSuccess: () => {
					toast.success(t("Domain has been deleted"));
					setDeleteDomainOpen(false);
					setSelectedRule(null);
				}
			})
		] })]
	});
}
function EventSelector({ projectId, selectedEvents, onEventsChange, maxEvents = 100 }) {
	const t = useT();
	const [eventDialogOpen, setEventDialogOpen] = useState(false);
	const handleCreated = (eventString) => {
		const trimmed = eventString.trim();
		if (!trimmed || selectedEvents.includes(trimmed)) return;
		if (selectedEvents.length >= maxEvents) return;
		onEventsChange([...selectedEvents, trimmed]);
		setEventDialogOpen(false);
	};
	const handleRemoveEvent = (event) => {
		onEventsChange(selectedEvents.filter((e) => e !== event));
	};
	const handleOpenEventDialog = () => {
		openDialogAfterOverlayCloses(() => setEventDialogOpen(true));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground mb-2",
				children: [
					t("Set the events that will trigger your webhook. Maximum"),
					" ",
					maxEvents,
					" ",
					t("events allowed."),
					" ",
					/* @__PURE__ */ jsx(DocsRouteLink, {
						className: "link-neutral",
						href: DOCS_LINK,
						children: t("Learn more")
					})
				]
			}), selectedEvents.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2",
				children: selectedEvents.map((event) => /* @__PURE__ */ jsxs(Badge, {
					variant: "secondary",
					className: "gap-1.5",
					children: [event, /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							handleRemoveEvent(event);
						},
						className: "ms-1 rounded-full hover:bg-muted",
						children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
					})]
				}, event))
			}) : /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("No events selected")
			})] }),
			/* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				onClick: handleOpenEventDialog,
				disabled: selectedEvents.length >= maxEvents,
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add event")]
			}),
			/* @__PURE__ */ jsx(EventEditorModal, {
				open: eventDialogOpen,
				onOpenChange: setEventDialogOpen,
				onCreated: handleCreated,
				description: t("Select events that will trigger your webhook."),
				projectId
			})
		]
	});
}
function getWebhookSecret(webhook) {
	if (!webhook) return "";
	const record = webhook;
	return String(record.secret || "");
}
function CopyableSecret({ value }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		await navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2",
		children: [/* @__PURE__ */ jsx("code", {
			className: "min-w-0 flex-1 break-all font-mono text-[12px] leading-5 text-foreground",
			children: value
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			size: "icon",
			className: "h-7 w-7 shrink-0",
			onClick: handleCopy,
			"aria-label": t("Copy secret"),
			children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
		})]
	});
}
function WebhookDrawer({ open, onOpenChange, projectId, webhook, onSuccess, onDelete }) {
	const t = useT();
	const isEditing = !!webhook;
	const createMutation = useCreateWebhook(projectId);
	const updateMutation = useUpdateWebhook(projectId);
	const regenerateSignatureMutation = useUpdateWebhookSecret(projectId);
	const { webhook: fullWebhook } = useProjectWebhook(projectId, isEditing ? webhook?.$id : null);
	const isPending = createMutation.isPending || updateMutation.isPending || regenerateSignatureMutation.isPending;
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [events, setEvents] = useState([]);
	const [enabled, setEnabled] = useState(true);
	const [authUsername, setAuthUsername] = useState("");
	const [authPassword, setAuthPassword] = useState("");
	const [tls, setTls] = useState(true);
	const [errors, setErrors] = useState({});
	const [secretDialogOpen, setSecretDialogOpen] = useState(false);
	const [secretDialogMode, setSecretDialogMode] = useState("rotate");
	const [customSecret, setCustomSecret] = useState("");
	const [revealedSecret, setRevealedSecret] = useState("");
	useEffect(() => {
		if (!open) {
			setName("");
			setUrl("");
			setEvents([]);
			setEnabled(true);
			setAuthUsername("");
			setAuthPassword("");
			setTls(true);
			setErrors({});
			setCustomSecret("");
			return;
		}
		const source = fullWebhook ?? webhook;
		if (source) {
			setName(source.name || "");
			setUrl(source.url || "");
			setEvents(source.events || []);
			setEnabled(source.enabled ?? true);
			setAuthUsername(source.authUsername || "");
			setAuthPassword("");
			setTls(source.tls ?? true);
			setErrors({});
			setCustomSecret("");
		}
	}, [
		open,
		webhook,
		fullWebhook
	]);
	const canSubmit = !!name.trim() && !!url.trim();
	const submitDisabledReason = !name.trim() ? t("Enter a webhook name.") : !url.trim() ? t("Enter a webhook URL.") : void 0;
	const handleOpenChange = (newOpen) => {
		if (!isPending) onOpenChange(newOpen);
	};
	const openRotateSecretDialog = () => {
		if (!webhook) return;
		setSecretDialogMode("rotate");
		setCustomSecret("");
		setRevealedSecret("");
		setSecretDialogOpen(true);
	};
	const handleRotateSecret = async () => {
		if (!webhook) return;
		try {
			setRevealedSecret(getWebhookSecret(await regenerateSignatureMutation.mutateAsync({
				webhookId: webhook.$id,
				secret: customSecret
			})));
			toast.success(customSecret.trim() ? t("Webhook secret updated.") : t("Webhook secret rotated."));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to rotate secret")));
		}
	};
	const handleSecretContinue = () => {
		setSecretDialogOpen(false);
		setCustomSecret("");
		setRevealedSecret("");
		if (secretDialogMode === "create") {
			handleOpenChange(false);
			onSuccess?.();
		}
	};
	const handleRequestDelete = () => {
		if (!webhook || !onDelete || isPending) return;
		handleOpenChange(false);
		openDialogAfterOverlayCloses(() => onDelete(webhook));
	};
	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = t("Name is required");
		if (!url.trim()) newErrors.url = t("URL is required");
		if (events.length === 0) newErrors.events = t("Select at least one event");
		if (events.length > 100) newErrors.events = t("Maximum 100 events allowed");
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate() || !canSubmit) return;
		if (isEditing && webhook) updateMutation.mutate({
			webhookId: webhook.$id,
			name: name.trim(),
			url: url.trim(),
			events,
			tls,
			enabled,
			authUsername: authUsername.trim() || void 0,
			authPassword: authPassword.trim() || void 0
		}, {
			onSuccess: () => {
				toast.success(t("Webhook has been updated"));
				handleOpenChange(false);
				onSuccess?.();
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to update webhook"));
			}
		});
		else createMutation.mutate({
			name: name.trim(),
			url: url.trim(),
			events,
			tls,
			enabled: true,
			authUsername: authUsername.trim() || void 0,
			authPassword: authPassword.trim() || void 0
		}, {
			onSuccess: (createdWebhook) => {
				const secret = getWebhookSecret(createdWebhook);
				toast.success(secret ? t("Webhook created. Secret ready to copy.") : t("Webhook has been created"));
				if (secret) {
					setSecretDialogMode("create");
					setCustomSecret("");
					setRevealedSecret(secret);
					onOpenChange(false);
					openDialogAfterOverlayCloses(() => setSecretDialogOpen(true));
					return;
				}
				handleOpenChange(false);
				onSuccess?.();
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to create webhook"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: isEditing ? t("Update webhook") : t("Create webhook"),
		maxWidth: "sm:max-w-2xl",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-6 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									htmlFor: "webhook-name",
									className: "text-[12px] font-medium",
									children: [
										t("Name"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "webhook-name",
									placeholder: t("Enter webhook name"),
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (errors.name) setErrors((prev) => ({
											...prev,
											name: ""
										}));
									},
									disabled: isPending,
									className: errors.name ? "border-destructive" : ""
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.name
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									htmlFor: "webhook-url",
									className: "text-[12px] font-medium",
									children: [
										t("POST URL"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "webhook-url",
									type: "url",
									placeholder: "https://example.com/callback",
									value: url,
									onChange: (e) => {
										setUrl(e.target.value);
										if (errors.url) setErrors((prev) => ({
											...prev,
											url: ""
										}));
									},
									disabled: isPending,
									className: errors.url ? "border-destructive" : ""
								}),
								errors.url && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.url
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									className: "text-[12px] font-medium",
									children: [
										t("Events"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ jsx(EventSelector, {
									projectId,
									selectedEvents: events,
									onEventsChange: (e) => {
										setEvents(e);
										if (errors.events) setErrors((prev) => ({
											...prev,
											events: ""
										}));
									},
									maxEvents: 100
								}),
								errors.events && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.events
								})
							]
						}),
						isEditing && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-2",
							children: [/* @__PURE__ */ jsx(Checkbox, {
								id: "webhook-enabled",
								checked: enabled,
								onCheckedChange: (checked) => setEnabled(checked === true),
								disabled: isPending
							}), /* @__PURE__ */ jsx(Label, {
								htmlFor: "webhook-enabled",
								className: "text-[13px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
								children: t("Enabled")
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Security")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4 space-y-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "webhook-authUsername",
												className: "text-[12px] font-medium text-muted-foreground",
												children: t("User")
											}), /* @__PURE__ */ jsx(Input, {
												id: "webhook-authUsername",
												placeholder: t("Enter username"),
												value: authUsername,
												onChange: (e) => setAuthUsername(e.target.value),
												disabled: isPending
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "webhook-authPassword",
												className: "text-[12px] font-medium text-muted-foreground",
												children: t("Password")
											}), /* @__PURE__ */ jsx(Input, {
												id: "webhook-authPassword",
												type: "password",
												placeholder: isEditing ? t("Leave blank to keep existing") : t("Enter password"),
												value: authPassword,
												onChange: (e) => setAuthPassword(e.target.value),
												disabled: isPending
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center space-x-2",
											children: [/* @__PURE__ */ jsx(Checkbox, {
												id: "webhook-tls",
												checked: tls,
												onCheckedChange: (checked) => setTls(checked === true),
												disabled: isPending
											}), /* @__PURE__ */ jsx(Label, {
												htmlFor: "webhook-tls",
												className: "text-[13px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
												children: t("Certificate verification (SSL/TLS)")
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: t("Set an optional basic HTTP authentication username and password to protect your endpoint from unauthorized access.")
										})
									]
								})
							]
						}),
						isEditing && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Webhook secret")
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-2 text-[13px] text-muted-foreground",
										children: [
											t("Used to validate incoming webhook payloads with the X-Appwrite-Webhook-Signature header."),
											" ",
											/* @__PURE__ */ jsxs(DocsRouteLink, {
												className: "link-neutral inline-flex items-center gap-1",
												href: "/docs/advanced/platform/webhooks#verification",
												children: [t("Learn more"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 items-start gap-3 rounded-md border border-border bg-muted/20 px-3 py-2.5 text-[13px] text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Info, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("p", { children: t("This secret is only shown once after webhook creation or secret rotation.") })]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex justify-end px-6 py-4 border-t border-border bg-muted/30",
									children: /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: openRotateSecretDialog,
										disabled: regenerateSignatureMutation.isPending,
										children: [/* @__PURE__ */ jsx(RefreshCw, { className: `me-1.5 h-4 w-4 ${regenerateSignatureMutation.isPending ? "animate-spin" : ""}` }), t("Rotate secret")]
									})
								})
							]
						}),
						isEditing && onDelete && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden mt-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Delete webhook")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Permanently delete this webhook. It will stop receiving events immediately. This action cannot be undone.")
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
									children: /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "destructive",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: handleRequestDelete,
										disabled: isPending,
										children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete webhook")]
									})
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [!canSubmit && submitDisabledReason ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("span", {
						className: "inline-flex",
						children: /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: true,
							"aria-describedby": "webhook-submit-disabled-reason",
							children: isEditing ? t("Update") : t("Create webhook")
						})
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					id: "webhook-submit-disabled-reason",
					side: "top",
					children: submitDisabledReason
				})] }) : /* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: isPending,
					children: isEditing ? t("Update") : t("Create webhook")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => handleOpenChange(false),
					disabled: isPending,
					children: t("Cancel")
				})]
			})]
		})] })
	}), /* @__PURE__ */ jsx(Dialog, {
		open: secretDialogOpen,
		onOpenChange: (nextOpen) => {
			if (!regenerateSignatureMutation.isPending) setSecretDialogOpen(nextOpen);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0 z-[130] overflow-hidden",
			overlayClassName: "z-[130]",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: revealedSecret ? secretDialogMode === "create" ? t("Webhook created") : t("Webhook secret rotated") : t("Rotate webhook secret") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: revealedSecret ? t("This secret is only shown once after webhook creation or secret rotation. Copy it now.") : t("Leave this empty to rotate the webhook secret automatically, or enter a value to set a custom secret.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "min-w-0 px-6 py-4",
					children: revealedSecret ? /* @__PURE__ */ jsx(CopyableSecret, { value: revealedSecret }) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "webhook-secret",
								className: "text-[12px] font-medium",
								children: t("Secret")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "webhook-secret",
								type: "password",
								placeholder: t("Leave empty to auto-generate"),
								value: customSecret,
								onChange: (e) => setCustomSecret(e.target.value),
								disabled: regenerateSignatureMutation.isPending,
								autoComplete: "new-password"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("Used to validate incoming webhook payloads.")
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: revealedSecret ? /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleSecretContinue,
						children: t("Continue")
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => setSecretDialogOpen(false),
						disabled: regenerateSignatureMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleRotateSecret,
						disabled: regenerateSignatureMutation.isPending,
						children: customSecret.trim() ? t("Set custom secret") : t("Rotate secret")
					})] })
				})
			]
		})
	})] });
}
function WebhookContextMenu({ projectId, webhook, onUpdate, onDelete, children }) {
	const t = useT();
	const webhookHref = buildConsoleUrl(`/projects/${projectId}/settings/webhooks?webhookId=${webhook.$id}`);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(webhook)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", webhook.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", webhook.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", webhookHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchProjectWebhook(projectId, webhook.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(webhookHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(webhookHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(webhook)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] });
}
function Webhooks$1({ projectId, searchValue: searchValueProp = "" }) {
	const t = useT();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedWebhook, setSelectedWebhook] = useState(null);
	const [webhookToDelete, setWebhookToDelete] = useState(null);
	const { webhooks, isLoading } = useProjectWebhooks(projectId);
	const deleteMutation = useDeleteWebhook(projectId);
	useEffect(() => {
		const handleCreate = () => {
			openDialogAfterOverlayCloses(() => {
				setSelectedWebhook(null);
				setDrawerOpen(true);
			});
		};
		window.addEventListener("settings-create-webhook", handleCreate);
		return () => {
			window.removeEventListener("settings-create-webhook", handleCreate);
		};
	}, []);
	const filteredWebhooks = useMemo(() => {
		if (!searchValueProp.trim()) return webhooks;
		const search = searchValueProp.toLowerCase();
		return webhooks.filter((webhook) => webhook.name.toLowerCase().includes(search) || webhook.url.toLowerCase().includes(search) || webhook.$id.toLowerCase().includes(search));
	}, [webhooks, searchValueProp]);
	const pageIndexed = currentPage - 1;
	const paginatedWebhooks = useMemo(() => {
		const start = pageIndexed * pageSize;
		const end = start + pageSize;
		return filteredWebhooks.slice(start, end);
	}, [
		filteredWebhooks,
		pageIndexed,
		pageSize
	]);
	const handleUpdate = (webhook) => {
		openDialogAfterOverlayCloses(() => {
			setSelectedWebhook(webhook);
			setDrawerOpen(true);
		});
	};
	const requestDelete = (webhook) => {
		openDialogAfterOverlayCloses(() => {
			setWebhookToDelete(webhook);
		});
	};
	const handleDelete = () => {
		if (!webhookToDelete) return;
		const webhookId = webhookToDelete.$id;
		closeDialogBeforeOverlayUnmount(() => {
			setWebhookToDelete(null);
			setSelectedWebhook(null);
		});
		deleteMutation.mutate(webhookId, {
			onSuccess: () => {
				toast.success(t("Webhook has been deleted"));
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete webhook"));
			}
		});
	};
	const getWebhookHref = (webhook) => buildConsoleUrl(`/projects/${projectId}/settings/webhooks?webhookId=${webhook.$id}`);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
		children: [
			isLoading ? /* @__PURE__ */ jsx("div", {
				className: "flex h-64 items-center justify-center",
				children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
			}) : paginatedWebhooks.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
				icon: Webhook,
				title: searchValueProp ? void 0 : t("No webhooks yet"),
				description: searchValueProp ? void 0 : t("Set up webhooks to receive real-time notifications about events in your project"),
				isEmpty: !searchValueProp,
				hasFilters: !!searchValueProp,
				variant: "card"
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card",
				children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Webhook ID")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Name")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Events")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: "URL"
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Enabled")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
							children: t("Created")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
							children: t("Updated")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: paginatedWebhooks.map((webhook) => /* @__PURE__ */ jsx(WebhookContextMenu, {
					projectId,
					webhook,
					onUpdate: handleUpdate,
					onDelete: requestDelete,
					children: /* @__PURE__ */ jsxs(TableRow, {
						className: "cursor-pointer",
						onClick: () => handleUpdate(webhook),
						children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(CopyableId, {
									id: webhook.$id,
									size: "xs"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 font-medium",
								children: webhook.name
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: [
										webhook.events?.length || 0,
										" ",
										t("events")
									]
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "truncate text-[13px] text-muted-foreground",
									children: webhook.url
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: webhook.enabled ? /* @__PURE__ */ jsx(Badge, {
									variant: "success",
									className: "text-[10px] shrink-0",
									children: t("Enabled")
								}) : /* @__PURE__ */ jsx(Badge, {
									variant: "inactive",
									className: "text-[10px] shrink-0",
									children: t("Disabled")
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: /* @__PURE__ */ jsx(DateTooltip, { date: webhook.$createdAt })
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: /* @__PURE__ */ jsx(DateTooltip, { date: webhook.$updatedAt })
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex justify-end",
									onClick: (event) => event.stopPropagation(),
									children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { "aria-label": `${t("Actions for")} ${webhook.name}` })
									}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
										align: "end",
										className: "w-56",
										children: [
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handleUpdate(webhook),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Pencil,
													children: t("Update")
												})
											}),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, { children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(DropdownMenuSubContent, { children: [
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => copyToClipboard("ID", webhook.$id),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Copy,
														children: t("Copy ID")
													})
												}),
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => copyToClipboard("Name", webhook.name),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Copy,
														children: t("Copy name")
													})
												}),
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => copyToClipboard("Link", getWebhookHref(webhook)),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Link2,
														children: t("Copy link")
													})
												}),
												/* @__PURE__ */ jsx(DropdownMenuItem, {
													onClick: () => void copyResourceAsJson(() => fetchProjectWebhook(projectId, webhook.$id)),
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: FileJson,
														children: t("Copy as JSON")
													})
												})
											] })] }),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => openInNewTab(getWebhookHref(webhook)),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: ExternalLink,
													children: t("Open in new tab")
												})
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => openInNewWindow(getWebhookHref(webhook)),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Square,
													children: t("Open in new window")
												})
											}),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => requestDelete(webhook),
												children: /* @__PURE__ */ jsx(MenuItemContent, {
													icon: Trash2,
													children: t("Delete")
												})
											})
										]
									})] })
								})
							})
						]
					})
				}, webhook.$id)) })] })
			}), filteredWebhooks.length > 0 && /* @__PURE__ */ jsx(Pagination, {
				currentPage,
				totalItems: filteredWebhooks.length,
				pageSize,
				pageSizeOptions: [
					10,
					25,
					50,
					100
				],
				onPageChange: setCurrentPage,
				onPageSizeChange: (size) => {
					setPageSize(size);
					setCurrentPage(1);
				},
				itemLabel: t("webhooks")
			})] }),
			/* @__PURE__ */ jsx(WebhookDrawer, {
				open: drawerOpen,
				onOpenChange: setDrawerOpen,
				projectId,
				webhook: selectedWebhook,
				onSuccess: () => setSelectedWebhook(null),
				onDelete: requestDelete
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: !!webhookToDelete,
				onOpenChange: (open) => {
					if (!open && !deleteMutation.isPending) setWebhookToDelete(null);
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete webhook") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Are you sure you want to delete"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: webhookToDelete?.name || t("this webhook") }),
								"?",
								" ",
								t("It will stop receiving events immediately. This action cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setWebhookToDelete(null),
							disabled: deleteMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleDelete,
							disabled: deleteMutation.isPending,
							children: t("Delete")
						})]
					})]
				})
			})
		]
	});
}
function getEntityLabel(key, total) {
	const singular = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
	return total === 1 ? singular : `${singular}s`;
}
var ERROR_CODE_MESSAGES = {
	400: "Bad request",
	401: "Unauthorized",
	403: "Forbidden",
	404: "Not found",
	409: "Conflict",
	413: "Payload too large",
	422: "Validation failed",
	429: "Too many requests",
	500: "Server error",
	502: "Bad gateway",
	503: "Service unavailable"
};
function getMessageForCode(code) {
	return ERROR_CODE_MESSAGES[code] ?? `Error (${code})`;
}
function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
function formatResourceContext(resourceName, resourceGroup, resourceId) {
	const parts = [];
	if (resourceName) parts.push(capitalize(resourceName));
	if (resourceGroup) parts.push(`in ${capitalize(resourceGroup)}`);
	if (resourceId && resourceId.length > 8) parts.push(`(${resourceId.slice(0, 8)}…)`);
	return parts.join(" ");
}
function parseMigrationErrors(errors) {
	if (!errors?.length) return [];
	return errors.map((error) => {
		try {
			const parsed = typeof error === "string" ? JSON.parse(error) : error;
			if (parsed && typeof parsed === "object") {
				const code = typeof parsed.code === "number" ? parsed.code : void 0;
				const message = typeof parsed.message === "string" && parsed.message.trim() ? parsed.message.trim() : code != null ? getMessageForCode(code) : typeof parsed.error === "string" ? parsed.error : "Unknown error";
				const resourceName = typeof parsed.resourceName === "string" ? parsed.resourceName : void 0;
				const resourceGroup = typeof parsed.resourceGroup === "string" ? parsed.resourceGroup : void 0;
				const resourceId = typeof parsed.resourceId === "string" ? parsed.resourceId : void 0;
				const context = formatResourceContext(resourceName, resourceGroup, resourceId);
				return {
					friendlyMessage: context.length > 0 ? `${context}: ${message}` : message,
					code,
					resourceName,
					resourceGroup,
					resourceId,
					raw: parsed
				};
			}
		} catch {}
		return {
			friendlyMessage: typeof error === "string" ? error : String(error),
			raw: error
		};
	});
}
function MigrationDetailsDrawer({ open, onOpenChange, migration }) {
	const t = useT();
	const statusCountersMap = useMemo(() => parseStatusCounters(migration), [migration]);
	const parsedErrors = useMemo(() => parseMigrationErrors(migration.errors), [migration.errors]);
	const countSummary = useMemo(() => {
		let succeeded = 0;
		let failed = 0;
		let skipped = 0;
		let warning = 0;
		for (const counter of Object.values(statusCountersMap)) {
			const c = counter || {};
			succeeded += c.success ?? 0;
			failed += c.error ?? 0;
			skipped += c.skip ?? 0;
			warning += c.warning ?? 0;
		}
		return {
			succeeded,
			failed,
			skipped,
			warning
		};
	}, [statusCountersMap]);
	const entityEntries = useMemo(() => {
		return Object.entries(statusCountersMap).map(([entityKey, counter]) => {
			const c = counter || {};
			const pending = c.pending ?? 0;
			const success = c.success ?? 0;
			const error = c.error ?? 0;
			const skip = c.skip ?? 0;
			const processing = c.processing ?? 0;
			const warning = c.warning ?? 0;
			const total = pending + success + error + skip + processing + warning;
			let icon = Clock;
			let tone = "waiting";
			if (error > 0 || warning > 0) {
				icon = error > 0 ? XCircle : AlertTriangle;
				tone = error > 0 ? "error" : "warning";
			} else if (pending > 0 || processing > 0) {
				icon = Loader2;
				tone = "processing";
			} else if (success > 0) {
				icon = CheckCircle2;
				tone = "success";
			}
			return {
				key: entityKey,
				label: getEntityLabel(entityKey, total),
				total,
				succeeded: success,
				icon,
				tone
			};
		});
	}, [statusCountersMap]);
	const hasStatusErrors = entityEntries.some((e) => statusCountersMap[e.key]?.error && statusCountersMap[e.key].error > 0) || parsedErrors.length > 0;
	const title = migration.status === "failed" ? t("Resolve migration issues") : t("Migration details");
	const MAX_ERRORS_IN_DETAILS = 3;
	const displayedErrors = parsedErrors.slice(0, MAX_ERRORS_IN_DETAILS);
	const hasMoreErrors = parsedErrors.length > MAX_ERRORS_IN_DETAILS;
	const [activeTab, setActiveTab] = useState("details");
	useEffect(() => {
		if (open) setActiveTab("details");
	}, [open, migration.$id]);
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title,
		maxWidth: "sm:max-w-xl",
		side: "right",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsx("div", {
			className: "flex flex-1 flex-col min-h-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6",
					children: /* @__PURE__ */ jsxs(Tabs, {
						value: activeTab,
						onValueChange: (v) => setActiveTab(v),
						className: "w-full",
						children: [
							/* @__PURE__ */ jsxs(TabsList, {
								className: "w-full grid grid-cols-2 h-9",
								children: [/* @__PURE__ */ jsx(TabsTrigger, {
									value: "details",
									className: "text-[13px]",
									children: t("Details")
								}), /* @__PURE__ */ jsx(TabsTrigger, {
									value: "logs",
									className: "text-[13px]",
									children: t("Logs")
								})]
							}),
							/* @__PURE__ */ jsxs(TabsContent, {
								value: "details",
								className: "mt-6 flex flex-1 flex-col gap-6 min-h-0",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "rounded-xl border border-border bg-card/50 overflow-hidden",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "px-6 py-3",
												children: /* @__PURE__ */ jsx("h3", {
													className: "text-[15px] font-semibold text-foreground",
													children: t("Overview")
												})
											}),
											/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
											/* @__PURE__ */ jsxs("div", {
												className: "px-6 py-3 grid grid-cols-2 gap-x-4 gap-y-3",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
														children: t("Created")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-0.5 text-[13px] text-foreground",
														children: /* @__PURE__ */ jsx(DateTooltip, {
															date: migration.$createdAt,
															showFormattedDate: true
														})
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
														children: t("Source")
													}), /* @__PURE__ */ jsx("p", {
														className: "mt-0.5 text-[13px] text-muted-foreground",
														children: migration.source
													})]
												})]
											}),
											migration.status === "failed" && (countSummary.succeeded > 0 || countSummary.failed > 0 || countSummary.skipped > 0 || countSummary.warning > 0) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
												className: "px-6 py-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Summary")
												}), /* @__PURE__ */ jsxs("p", {
													className: "mt-0.5 text-[13px] text-muted-foreground",
													children: [
														countSummary.succeeded > 0 && /* @__PURE__ */ jsxs("span", { children: [
															countSummary.succeeded,
															" ",
															countSummary.succeeded === 1 ? t("item") : t("items"),
															" ",
															t("succeeded"),
															(countSummary.failed > 0 || countSummary.skipped > 0 || countSummary.warning > 0) && ", "
														] }),
														countSummary.failed > 0 && /* @__PURE__ */ jsxs("span", { children: [
															countSummary.failed,
															" ",
															countSummary.failed === 1 ? t("item") : t("items"),
															" ",
															t("failed"),
															(countSummary.skipped > 0 || countSummary.warning > 0) && ", "
														] }),
														countSummary.skipped > 0 && /* @__PURE__ */ jsxs("span", { children: [
															countSummary.skipped,
															" ",
															t("skipped"),
															countSummary.warning > 0 && ", "
														] }),
														countSummary.warning > 0 && /* @__PURE__ */ jsxs("span", { children: [
															countSummary.warning,
															" ",
															t("warning")
														] })
													]
												})]
											})] })
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "rounded-xl border border-border bg-card/50 overflow-hidden",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "px-6 py-3",
												children: /* @__PURE__ */ jsx("h3", {
													className: "text-[15px] font-semibold text-foreground",
													children: t("Status")
												})
											}),
											/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
											/* @__PURE__ */ jsx("div", {
												className: "px-6 py-3",
												children: entityEntries.length > 0 ? /* @__PURE__ */ jsx("div", {
													className: "grid gap-2 sm:grid-cols-2",
													children: entityEntries.map(({ key, label, total, succeeded, icon: Icon$1, tone }) => /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2 rounded-lg border border-border bg-background p-3",
														children: [
															/* @__PURE__ */ jsx("div", {
																className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tone === "error" ? "bg-red-500/10" : tone === "warning" ? "bg-amber-500/10" : tone === "processing" ? "bg-blue-500/10" : tone === "success" ? "bg-green-500/10" : "bg-muted"}`,
																children: /* @__PURE__ */ jsx(Icon$1, { className: `h-4 w-4 ${tone === "error" ? "text-red-600 dark:text-red-400" : tone === "warning" ? "text-amber-600 dark:text-amber-400" : tone === "processing" ? "text-blue-600 dark:text-blue-400 animate-spin" : tone === "success" ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}` })
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "min-w-0 flex-1",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "truncate text-[13px] font-medium",
																	children: label
																}), /* @__PURE__ */ jsxs("p", {
																	className: "text-[12px] text-muted-foreground",
																	children: [
																		succeeded,
																		" / ",
																		total,
																		" ",
																		total === 1 ? t("item") : t("items")
																	]
																})]
															}),
															/* @__PURE__ */ jsxs(Badge, {
																variant: "info",
																className: "shrink-0 text-[10px]",
																children: [
																	succeeded,
																	" / ",
																	total
																]
															})
														]
													}, key))
												}) : /* @__PURE__ */ jsx("p", {
													className: "text-[13px] text-muted-foreground",
													children: t("No status data yet")
												})
											})
										]
									}),
									hasStatusErrors && parsedErrors.length === 0 && /* @__PURE__ */ jsxs(Alert, {
										className: "border-red-500/30 bg-red-500/5",
										children: [
											/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 dark:text-red-400" }),
											/* @__PURE__ */ jsx(AlertTitle, {
												className: "text-red-600 dark:text-red-400",
												children: t("Migration errors")
											}),
											/* @__PURE__ */ jsx(AlertDescription, {
												className: "text-foreground",
												children: t("Some entities failed to migrate. Check status counts above.")
											})
										]
									}),
									parsedErrors.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-foreground",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3 shrink-0",
												children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 translate-y-0.5 shrink-0 text-red-600 dark:text-red-400" }), /* @__PURE__ */ jsxs("p", {
													className: "font-medium tracking-tight text-sm text-red-600 dark:text-red-400",
													children: [
														parsedErrors.length,
														" ",
														parsedErrors.length === 1 ? t("error") : t("errors"),
														" ",
														t("recorded")
													]
												})]
											}),
											/* @__PURE__ */ jsx("ul", {
												className: "mt-2 list-disc list-outside ps-5 space-y-1.5 overflow-y-auto overflow-x-hidden pe-2 text-[13px] text-foreground min-h-0 flex-1 overscroll-contain",
												onWheel: (e) => {
													const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
													const atTop = scrollTop <= 0;
													const atBottom = scrollTop + clientHeight >= scrollHeight;
													const scrollingDown = e.deltaY > 0;
													const scrollingUp = e.deltaY < 0;
													if (atTop && scrollingUp || atBottom && scrollingDown) return;
													e.stopPropagation();
												},
												children: displayedErrors.map((err, i) => /* @__PURE__ */ jsx("li", { children: err.friendlyMessage }, i))
											}),
											hasMoreErrors && /* @__PURE__ */ jsxs("div", {
												className: "mt-2 shrink-0 border-t border-red-500/20 pt-2",
												children: [/* @__PURE__ */ jsxs("p", {
													className: "text-[12px] text-muted-foreground",
													children: [
														t("Showing first"),
														" ",
														MAX_ERRORS_IN_DETAILS,
														" ",
														t("of"),
														" ",
														parsedErrors.length,
														" ",
														t("errors.")
													]
												}), /* @__PURE__ */ jsx(Button, {
													variant: "link",
													size: "sm",
													className: "h-auto p-0 text-[12px] text-foreground underline underline-offset-2 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring",
													onClick: () => setActiveTab("logs"),
													children: t("View full list in Logs")
												})]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsx(TabsContent, {
								value: "logs",
								className: "mt-6",
								children: /* @__PURE__ */ jsx(CodeBlock, {
									code: JSON.stringify(migration, null, 2),
									language: "json",
									showCopy: true,
									fixedHeight: "400px"
								})
							})
						]
					})
				})
			})
		})] })
	});
}
function MigrationContextMenu({ projectId, region, migration, onViewDetails, children }) {
	const t = useT();
	const migrationHref = buildConsoleUrl(`/projects/${projectId}/settings/migrations?migrationId=${migration.$id}`);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onViewDetails(migration),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", migration.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", migrationHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(async () => {
						return sdk.forProject(projectId, region).migrations.get({ migrationId: migration.$id });
					}),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(migrationHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(migrationHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			})
		]
	})] });
}
function Migrations$1({ projectId, initialData }) {
	const t = useT();
	const { project } = useProject(projectId);
	const region = project?.region;
	const [selectedMigrationId, setSelectedMigrationId] = useState(null);
	const { migrations, total, isLoading } = useProjectMigrations(projectId, region);
	const detailsOpen = selectedMigrationId !== null;
	const effectiveMigrations = migrations.length > 0 ? migrations : initialData?.migrations ?? [];
	migrations.length > 0 || initialData?.total;
	const selectedMigration = effectiveMigrations.find((m) => m.$id === selectedMigrationId) ?? null;
	const showLoading = isLoading && !initialData;
	const getStatusBadge = (status) => {
		const config = {
			completed: {
				label: "Complete",
				variant: "success"
			},
			processing: {
				label: "Processing",
				variant: "processing",
				icon: Loader2,
				spin: true
			},
			failed: {
				label: "Failed",
				variant: "error"
			},
			pending: {
				label: "Pending",
				variant: "warning"
			}
		}[status] || {
			label: "Waiting",
			variant: "warning"
		};
		const Icon$1 = config.icon;
		return /* @__PURE__ */ jsxs(Badge, {
			variant: config.variant,
			className: "text-[10px] shrink-0 gap-1.5",
			children: [Icon$1 && /* @__PURE__ */ jsx(Icon$1, { className: cn("h-3 w-3", config.spin && "animate-spin") }), t(config.label)]
		});
	};
	const handleViewDetails = (migration) => {
		setSelectedMigrationId(migration.$id);
	};
	const handleCloseDrawer = () => {
		setSelectedMigrationId(null);
	};
	useEffect(() => {
		if (selectedMigrationId && !effectiveMigrations.some((m) => m.$id === selectedMigrationId)) setSelectedMigrationId(null);
	}, [selectedMigrationId, effectiveMigrations]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6 space-y-4",
		children: [showLoading ? /* @__PURE__ */ jsx("div", {
			className: "flex h-64 items-center justify-center",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		}) : effectiveMigrations.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
			icon: ArrowRightLeft,
			title: t("No migrations yet"),
			description: t("Import data from another platform or export your project data"),
			isEmpty: true,
			variant: "card"
		}) : /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Migration ID")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Date")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Source")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Destination")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Status")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Progress")
					})
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: effectiveMigrations.map((migration) => {
				const showProgress = migration.status === "pending" || migration.status === "processing";
				const progress = getMigrationProgress(migration);
				const { succeeded, total: total$1 } = getMigrationCounts(migration);
				const hasCounts = total$1 > 0;
				return /* @__PURE__ */ jsx(MigrationContextMenu, {
					projectId,
					region,
					migration,
					onViewDetails: handleViewDetails,
					children: /* @__PURE__ */ jsxs(TableRow, {
						className: "cursor-pointer hover:bg-muted/50",
						onClick: () => handleViewDetails(migration),
						children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(CopyableId, {
									id: migration.$id,
									size: "xs"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(DateTooltip, {
									date: migration.$createdAt,
									className: "text-[12px] text-muted-foreground font-mono"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: migration.source
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: migration.destination ?? "-"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-x-2 gap-y-0.5",
									children: [getStatusBadge(migration.status), hasCounts && /* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-muted-foreground",
										children: [
											succeeded,
											" / ",
											total$1
										]
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: showProgress ? /* @__PURE__ */ jsx("div", {
									className: "min-w-[120px]",
									children: /* @__PURE__ */ jsx(ProgressBarRow, {
										value: progress,
										className: "mb-0"
									})
								}) : /* @__PURE__ */ jsx("span", {
									className: "text-[12px] text-muted-foreground",
									children: "-"
								})
							})
						]
					})
				}, migration.$id);
			}) })] })
		}), selectedMigrationId && selectedMigration && /* @__PURE__ */ jsx(MigrationDetailsDrawer, {
			open: detailsOpen,
			onOpenChange: (open) => !open && handleCloseDrawer(),
			migration: selectedMigration
		})]
	});
}
var MAX_TEST_EMAILS = 10;
function SendSMTPTestDialog({ open, onOpenChange, projectId, smtp, defaultRecipientEmail, onSent }) {
	const t = useT();
	const testSMTPMutation = useTestSMTP(projectId);
	const [phase, setPhase] = useState("form");
	const [emails, setEmails] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		if (!open) return;
		setPhase("form");
		setErrorMessage("");
		setEmails(defaultRecipientEmail?.trim() ? [defaultRecipientEmail.trim()] : []);
	}, [open, defaultRecipientEmail]);
	const handleOpenChange = (next) => {
		if (testSMTPMutation.isPending) return;
		onOpenChange(next);
	};
	const handleEmailsChange = (next) => {
		setEmails(next.slice(0, MAX_TEST_EMAILS));
	};
	const handleSend = async () => {
		if (emails.length === 0) return;
		setPhase("sending");
		setErrorMessage("");
		try {
			await testSMTPMutation.mutateAsync({
				emails,
				smtp
			});
			setPhase("success");
			onSent?.();
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : t("Failed to send test email"));
			setPhase("error");
		}
	};
	const isSending = phase === "sending" || testSMTPMutation.isPending;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Send test email") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Verify your SMTP configuration by sending a test email to one or more recipients.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0",
					children: [
						phase === "form" ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "smtp-test-recipients",
									children: t("Recipients")
								}),
								/* @__PURE__ */ jsx(InputTags, {
									value: emails,
									onChange: handleEmailsChange,
									validateEmail: true,
									placeholder: "email@example.com"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t("Press Enter, Space, or comma to add each address. You can paste multiple addresses separated by commas or spaces. Up to"),
										" ",
										MAX_TEST_EMAILS,
										" ",
										t("recipients."),
										emails.length >= MAX_TEST_EMAILS ? ` ${t("Maximum recipients reached.")}` : null
									]
								})
							]
						}) : null,
						phase === "sending" ? /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center gap-3 py-4",
							children: [/* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground text-center",
								children: t("Sending test email…")
							})]
						}) : null,
						phase === "success" ? /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-3 text-center",
							children: [
								/* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-green-600" }),
								/* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-foreground",
									children: [
										t("Test email sent to"),
										" ",
										emails.length,
										" ",
										emails.length === 1 ? t("recipient") : t("recipients"),
										"."
									]
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "w-full text-start text-[12px] text-muted-foreground space-y-1",
									children: emails.map((email) => /* @__PURE__ */ jsx("li", {
										className: "truncate",
										children: email
									}, email))
								})
							]
						}) : null,
						phase === "error" ? /* @__PURE__ */ jsxs(Alert, {
							variant: "destructive",
							className: "border-destructive/30",
							children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
								className: "text-[13px]",
								children: errorMessage
							})]
						}) : null
					]
				}),
				phase !== "sending" ? /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [
						phase === "form" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: emails.length === 0 || isSending,
							onClick: handleSend,
							children: t("Send")
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => handleOpenChange(false),
							disabled: isSending,
							children: t("Cancel")
						})] }) : null,
						phase === "success" ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => handleOpenChange(false),
							children: t("Close")
						}) : null,
						phase === "error" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setPhase("form"),
							children: t("Try again")
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => handleOpenChange(false),
							children: t("Close")
						})] }) : null
					]
				}) : null
			]
		})
	});
}
function secureFromProject(smtpSecure) {
	if (smtpSecure === "tls") return "tls";
	if (smtpSecure === "ssl") return "ssl";
	return "none";
}
function SMTP({ projectId }) {
	const t = useT();
	const { account } = useAuth();
	const { data: project, isLoading } = useQuery(projectQueryOptions(projectId));
	const updateSMTPMutation = useUpdateSMTP(projectId);
	const [testDialogOpen, setTestDialogOpen] = useState(false);
	const orgId = project?.teamId;
	const { plan: organizationPlan } = useOrganizationPlan(orgId);
	const supportsCustomSmtp = organizationPlan?.customSmtp ?? false;
	const [enabled, setEnabled] = useState(false);
	const [senderName, setSenderName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [replyTo, setReplyTo] = useState("");
	const [host, setHost] = useState("");
	const [port, setPort] = useState(587);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [secure, setSecure] = useState("tls");
	useEffect(() => {
		if (project) {
			setEnabled(project.smtpEnabled || false);
			setSenderName(project.smtpSenderName || "");
			setSenderEmail(project.smtpSenderEmail || "");
			setReplyTo(project.smtpReplyToEmail || "");
			setHost(project.smtpHost || "");
			setPort(project.smtpPort || 587);
			setUsername(project.smtpUsername || "");
			setPassword("");
			setSecure(secureFromProject(project.smtpSecure));
		}
	}, [project]);
	const hasChanges = useMemo(() => {
		if (!project) return false;
		return enabled !== (project.smtpEnabled || false) || senderName !== (project.smtpSenderName || "") || senderEmail !== (project.smtpSenderEmail || "") || replyTo !== (project.smtpReplyToEmail || "") || host !== (project.smtpHost || "") || port !== (project.smtpPort || 587) || username !== (project.smtpUsername || "") || secure !== secureFromProject(project.smtpSecure);
	}, [
		enabled,
		senderName,
		senderEmail,
		replyTo,
		host,
		port,
		username,
		secure,
		project
	]);
	const smtpFormPayload = useMemo(() => ({
		enabled,
		senderName: enabled ? senderName : void 0,
		senderEmail: enabled ? senderEmail : void 0,
		replyTo: enabled ? replyTo : void 0,
		host: enabled ? host : void 0,
		port: enabled ? port : void 0,
		username: enabled ? username : void 0,
		password: enabled && password ? password : void 0,
		secure: enabled ? secure === "none" ? "" : secure : void 0
	}), [
		enabled,
		senderName,
		senderEmail,
		replyTo,
		host,
		port,
		username,
		password,
		secure
	]);
	const handleUpdate = async () => {
		try {
			await updateSMTPMutation.mutateAsync(smtpFormPayload);
			setPassword("");
			toast.success(enabled ? t("SMTP server has been enabled.") : t("SMTP server has been disabled."));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update SMTP settings"));
		}
	};
	const hasSavedSmtpPassword = Boolean(project?.smtpHost);
	const isFormReadyForTest = enabled && senderName.trim() !== "" && senderEmail.trim() !== "" && host.trim() !== "" && port > 0 && (password.trim() !== "" || hasSavedSmtpPassword);
	const testDisabledReason = !supportsCustomSmtp ? t("Custom SMTP is available on Appwrite Cloud Pro and higher plans.") : !enabled ? t("Enable custom SMTP to send a test email.") : !isFormReadyForTest ? t("Fill in sender name, sender email, server host, port, and password (for new setups) before sending a test email.") : void 0;
	const canSendTest = supportsCustomSmtp && isFormReadyForTest;
	const isSmtpBusy = updateSMTPMutation.isPending;
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-64 items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl space-y-6 px-4 py-4 sm:px-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Custom SMTP server")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Configure a custom SMTP server to send emails from your own domain. This allows you to customize email templates and prevents emails from being labeled as spam.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx(UpgradeCurtain, {
					isLocked: !supportsCustomSmtp,
					orgId,
					message: t("Custom SMTP is available on Appwrite Cloud Pro and higher plans."),
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "smtp-enabled",
									className: "text-[13px] font-medium text-foreground",
									children: t("Enable custom SMTP server")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground mt-0.5",
									children: t("When enabled, all emails will be sent through your configured SMTP server.")
								})]
							}), /* @__PURE__ */ jsx(Switch, {
								id: "smtp-enabled",
								checked: enabled,
								onCheckedChange: setEnabled,
								disabled: !supportsCustomSmtp || isSmtpBusy
							})]
						}), enabled && /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-[13px] font-medium text-foreground mb-3",
										children: t("Sender information")
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ jsxs(Label, {
													htmlFor: "sender-name",
													className: "text-[12px] font-medium",
													children: [
														t("Sender name"),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}), /* @__PURE__ */ jsx(Input, {
													id: "sender-name",
													placeholder: "John Doe",
													value: senderName,
													onChange: (e) => setSenderName(e.target.value),
													disabled: isSmtpBusy,
													className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ jsxs(Label, {
													htmlFor: "sender-email",
													className: "text-[12px] font-medium",
													children: [
														t("Sender email"),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}), /* @__PURE__ */ jsx(Input, {
													id: "sender-email",
													type: "email",
													placeholder: "noreply@example.com",
													value: senderEmail,
													onChange: (e) => setSenderEmail(e.target.value),
													disabled: isSmtpBusy,
													className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2 sm:col-span-2",
												children: [
													/* @__PURE__ */ jsx(Label, {
														htmlFor: "reply-to",
														className: "text-[12px] font-medium",
														children: t("Reply to")
													}),
													/* @__PURE__ */ jsx(Input, {
														id: "reply-to",
														type: "email",
														placeholder: "support@example.com",
														value: replyTo,
														onChange: (e) => setReplyTo(e.target.value),
														disabled: isSmtpBusy,
														className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-[11px] text-muted-foreground",
														children: t("Optional. Email address where replies will be sent.")
													})
												]
											})
										]
									})] })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-[13px] font-medium text-foreground mb-3",
										children: t("Server configuration")
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2 sm:col-span-2",
												children: [/* @__PURE__ */ jsxs(Label, {
													htmlFor: "host",
													className: "text-[12px] font-medium",
													children: [
														t("Server host"),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}), /* @__PURE__ */ jsx(Input, {
													id: "host",
													placeholder: "smtp.example.com",
													value: host,
													onChange: (e) => setHost(e.target.value),
													disabled: isSmtpBusy,
													className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ jsxs(Label, {
													htmlFor: "port",
													className: "text-[12px] font-medium",
													children: [
														t("Server port"),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}), /* @__PURE__ */ jsx(Input, {
													id: "port",
													type: "number",
													placeholder: "587",
													value: port || "",
													onChange: (e) => setPort(parseInt(e.target.value) || 587),
													disabled: isSmtpBusy,
													className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "secure",
													className: "text-[12px] font-medium",
													children: t("Secure protocol")
												}), /* @__PURE__ */ jsxs(Select, {
													value: secure,
													onValueChange: (value) => setSecure(value),
													disabled: isSmtpBusy,
													children: [/* @__PURE__ */ jsx(SelectTrigger, {
														id: "secure",
														className: "h-9 text-[13px]",
														children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select protocol") })
													}), /* @__PURE__ */ jsxs(SelectContent, { children: [
														/* @__PURE__ */ jsx(SelectItem, {
															value: "tls",
															children: "TLS"
														}),
														/* @__PURE__ */ jsx(SelectItem, {
															value: "ssl",
															children: "SSL"
														}),
														/* @__PURE__ */ jsx(SelectItem, {
															value: "none",
															children: t("None")
														})
													] })]
												})]
											})
										]
									})] })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-[13px] font-medium text-foreground mb-3",
										children: t("Authentication")
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "username",
												className: "text-[12px] font-medium",
												children: t("Username")
											}), /* @__PURE__ */ jsx(Input, {
												id: "username",
												placeholder: "smtp@example.com",
												value: username,
												onChange: (e) => setUsername(e.target.value),
												disabled: isSmtpBusy,
												className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsx(Label, {
													htmlFor: "password",
													className: "text-[12px] font-medium",
													children: t("Password")
												}),
												/* @__PURE__ */ jsx(Input, {
													id: "password",
													type: "password",
													placeholder: t("Enter password"),
													value: password,
													onChange: (e) => setPassword(e.target.value),
													disabled: isSmtpBusy,
													className: "h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[11px] text-muted-foreground",
													children: t("Leave blank to keep current password unchanged.")
												})
											]
										})]
									})] })
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: handleUpdate,
								disabled: !hasChanges || !supportsCustomSmtp || isSmtpBusy,
								children: t("Update")
							}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex",
									children: /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: () => setTestDialogOpen(true),
										disabled: !canSendTest || isSmtpBusy,
										children: t("Send test email")
									})
								})
							}), testDisabledReason ? /* @__PURE__ */ jsx(TooltipContent, {
								className: "max-w-xs text-[13px]",
								children: testDisabledReason
							}) : null] })]
						})
					})] })
				})
			]
		}), /* @__PURE__ */ jsx(SendSMTPTestDialog, {
			open: testDialogOpen,
			onOpenChange: setTestDialogOpen,
			projectId,
			smtp: smtpFormPayload,
			defaultRecipientEmail: account?.email,
			onSent: () => setPassword("")
		})]
	});
}
function Variables() {
	const t = useT();
	const projectId = useParams({ strict: false }).projectId;
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(10);
	const { project } = useProject(projectId);
	const { variables, total, isLoading } = useProjectVariables(projectId, page, limit);
	const createMutation = useCreateProjectVariable(projectId);
	const updateMutation = useUpdateProjectVariable(projectId);
	const deleteMutation = useDeleteProjectVariable(projectId);
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6",
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-6",
			children: /* @__PURE__ */ jsx(VariablesSettingsCard, {
				title: t("Global variables"),
				description: t("Set the environment variables or secret keys that will be passed to all Functions and Sites within your project."),
				variables,
				total,
				isLoading,
				createMutation,
				updateMutation,
				deleteMutation,
				scopeLabel: `${project?.name || t("Project")} ${t("global")}`,
				page,
				limit,
				onPageChange: setPage,
				onPageSizeChange: (newLimit) => {
					setLimit(newLimit);
					setPage(0);
				},
				itemLabel: t("variables")
			})
		})
	});
}
function View({ initialMigrationsData } = {}) {
	const t = useT();
	const params = useParams({ strict: false });
	const location = useLocation();
	const projectId = params.projectId;
	const [searchValue, setSearchValue] = useState("");
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const settingsIndex = pathParts.findIndex((part) => part === "settings");
		if (settingsIndex >= 0) {
			if (pathParts[settingsIndex + 1]) {
				const tabFromPath = pathParts[settingsIndex + 1];
				if ([
					"domains",
					"webhooks",
					"migrations",
					"smtp",
					"variables"
				].includes(tabFromPath)) return tabFromPath;
			}
		}
		return "overview";
	}, [location.pathname]);
	const tabs = useMemo(() => [
		{
			id: "overview",
			label: t("Overview"),
			to: "/projects/$projectId/settings/",
			params: { projectId }
		},
		{
			id: "domains",
			label: t("Custom domains"),
			to: "/projects/$projectId/settings/domains",
			params: { projectId }
		},
		{
			id: "variables",
			label: t("Variables"),
			to: "/projects/$projectId/settings/variables",
			params: { projectId }
		},
		{
			id: "webhooks",
			label: t("Webhooks"),
			to: "/projects/$projectId/settings/webhooks",
			params: { projectId }
		},
		{
			id: "migrations",
			label: t("Migrations"),
			to: "/projects/$projectId/settings/migrations",
			params: { projectId }
		},
		{
			id: "smtp",
			label: t("SMTP"),
			to: "/projects/$projectId/settings/smtp",
			params: { projectId }
		}
	], [projectId, t]);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noDomainsPermission = !canWriteDomains(access, features);
	const noWebhooksPermission = !canWriteWebhooks(access, features);
	const noMigrationsPermission = !canCreateMigration(access, features);
	const createDisabled = activeTab === "domains" && noDomainsPermission || activeTab === "webhooks" && noWebhooksPermission || activeTab === "migrations" && noMigrationsPermission;
	const createDisabledTooltip = activeTab === "domains" && noDomainsPermission ? t("You don't have permission to add domains.") : activeTab === "webhooks" && noWebhooksPermission ? t("You don't have permission to create webhooks.") : activeTab === "migrations" && noMigrationsPermission ? t("You don't have permission to create migrations.") : void 0;
	const hasSearch = activeTab !== "overview" && activeTab !== "smtp" && activeTab !== "variables";
	const searchPlaceholder = hasSearch ? activeTab === "domains" ? t("Search domains...") : activeTab === "webhooks" ? t("Search webhooks...") : activeTab === "migrations" ? t("Search migrations...") : `Search ${activeTab}...` : void 0;
	const createLabel = activeTab === "domains" ? t("Add domain") : activeTab === "webhooks" ? t("Create webhook") : activeTab === "migrations" ? t("Import data") : void 0;
	const createTo = activeTab === "domains" ? "/projects/$projectId/settings/domains/add" : activeTab === "migrations" ? "/projects/$projectId/settings/migrations/import" : void 0;
	const createParams = activeTab === "domains" || activeTab === "migrations" ? { projectId } : void 0;
	const handleCreate = useMemo(() => {
		if (activeTab === "webhooks") return () => {
			if (typeof window !== "undefined") {
				const event = new CustomEvent("settings-create-webhook");
				window.dispatchEvent(event);
			}
		};
	}, [activeTab]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Settings"),
			tabs,
			activeTab,
			showFilters: false,
			fullWidthBorder: true,
			searchPlaceholder,
			searchValue: hasSearch ? searchValue : void 0,
			onSearchChange: hasSearch ? setSearchValue : void 0,
			createLabel,
			createTo,
			createParams,
			createAnalyticsAction: activeTab === "webhooks" ? "create-webhook" : activeTab === "domains" ? "add-project-domain" : activeTab === "migrations" ? "import-data" : void 0,
			onCreate: handleCreate,
			createDisabled,
			createDisabledTooltip
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [
				activeTab === "overview" && /* @__PURE__ */ jsx(ProjectSettingsOverview, { projectId }),
				activeTab === "domains" && /* @__PURE__ */ jsx(Domains$1, {
					projectId,
					searchValue
				}),
				activeTab === "webhooks" && /* @__PURE__ */ jsx(Webhooks$1, {
					projectId,
					searchValue
				}),
				activeTab === "migrations" && /* @__PURE__ */ jsx(Migrations$1, {
					projectId,
					initialData: initialMigrationsData
				}),
				activeTab === "smtp" && /* @__PURE__ */ jsx(SMTP, { projectId }),
				activeTab === "variables" && /* @__PURE__ */ jsx(Variables, {})
			]
		})]
	});
}
export { View as t };
