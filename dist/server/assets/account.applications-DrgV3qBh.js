import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./constants-BDeF927R.js";
import "./cimd-CRIktQxf.js";
import { a as groupConnectedApps, n as cimdUrlHost, o as useAccountConnectedApps, s as useConsentTokens } from "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as Route$1 } from "./account.applications-lnv8hSaH.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChevronDown, KeyRound, Loader2, Package } from "lucide-react";
var Dependencies = { APPLICATIONS: ["applications", "account"] };
function truncateClientId(id) {
	return id.length > 12 ? `${id.slice(0, 4)}…${id.slice(-4)}` : id;
}
function clientIdDisplay(connectedApp) {
	return connectedApp.cimdUrl ? cimdUrlHost(connectedApp.cimdUrl) : truncateClientId(connectedApp.clientId);
}
function ConnectedAppAvatar({ app, knownClient }) {
	if (app?.logoUri) return /* @__PURE__ */ jsx("img", {
		src: app.logoUri,
		alt: app.name,
		className: "h-9 w-9 rounded-xl object-cover ring-1 ring-border/50",
		height: 36,
		width: 36
	});
	if (knownClient) return /* @__PURE__ */ jsx("img", {
		src: knownClient.iconPath,
		alt: knownClient.name,
		className: "h-9 w-9 rounded-xl object-cover ring-1 ring-border/50",
		height: 36,
		width: 36
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-9 w-9 items-center justify-center rounded-xl bg-muted ring-1 ring-border/50",
		children: /* @__PURE__ */ jsx(Package, { className: "h-4 w-4 text-muted-foreground" })
	});
}
function ClientIdentifier({ connectedApp, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-1 text-[12px] text-muted-foreground", className),
		children: [/* @__PURE__ */ jsxs("span", {
			className: "shrink-0",
			children: [connectedApp.cimdUrl ? t("Client URL") : t("Client ID"), ":"]
		}), /* @__PURE__ */ jsx(CopyableId, {
			id: connectedApp.clientId,
			displayText: clientIdDisplay(connectedApp),
			variant: "inline",
			size: "sm",
			copyToastLabel: connectedApp.cimdUrl ? "Client URL" : "Client ID",
			className: "-my-0.5 px-1 py-0.5 text-muted-foreground"
		})]
	});
}
function ConsentTokenFamilies({ consent, onRevoked }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data: tokens, isLoading } = useConsentTokens(consent.$id);
	const [revokingId, setRevokingId] = useState(null);
	const revokeToken = async (tokenId) => {
		setRevokingId(tokenId);
		try {
			await sdk.forConsole.account.deleteConsentToken({
				consentId: consent.$id,
				tokenId
			});
			toast.success(t("Token has been revoked"));
			queryClient.invalidateQueries({ queryKey: [
				"applications",
				"account",
				consent.$id,
				"tokens"
			] });
			onRevoked();
		} catch {
			toast.error(t("Failed to revoke token"));
		} finally {
			setRevokingId(null);
		}
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 py-1 text-[12px] text-muted-foreground",
		children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), t("Loading tokens")]
	});
	if (!tokens || tokens.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "py-1 text-[12px] text-muted-foreground",
		children: t("No active tokens for this authorization.")
	});
	return /* @__PURE__ */ jsx("ul", {
		className: "divide-y divide-border/60",
		children: tokens.map((token) => {
			const expiresAt = token.expire ? new Date(token.expire) : null;
			const isExpired = expiresAt !== null && expiresAt.getTime() < Date.now();
			return /* @__PURE__ */ jsxs("li", {
				className: "flex items-center justify-between gap-3 py-1.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-wrap items-center gap-x-3 gap-y-0.5 text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsx(KeyRound, { className: "h-3.5 w-3.5 shrink-0" }),
							t("Issued"),
							" ",
							/* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(token.$createdAt),
								className: "text-[12px] text-muted-foreground"
							})
						]
					}), expiresAt ? /* @__PURE__ */ jsxs("span", { children: [
						isExpired ? t("Expired") : t("Expires"),
						" ",
						/* @__PURE__ */ jsx(DateTooltip, {
							date: expiresAt,
							className: "text-[12px] text-muted-foreground"
						})
					] }) : null]
				}), /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-7 shrink-0 text-[12px] text-muted-foreground hover:text-foreground",
					onClick: () => revokeToken(token.$id),
					disabled: revokingId !== null,
					children: revokingId === token.$id ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : t("Revoke")
				})]
			}, token.$id);
		})
	});
}
function ConsentDetail({ connectedApp, showRevoke, onRevoke, onTokenRevoked, revokePending }) {
	const t = useT();
	const { consent } = connectedApp;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border/60 bg-background/60 px-3 py-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1",
					children: [/* @__PURE__ */ jsx(ClientIdentifier, { connectedApp }), /* @__PURE__ */ jsxs("span", {
						className: "text-[12px] text-muted-foreground",
						children: [
							t("Authorized"),
							" ",
							/* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(consent.$createdAt),
								className: "text-[12px] text-muted-foreground"
							})
						]
					})]
				}), showRevoke ? /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-7 shrink-0 text-[12px] text-muted-foreground hover:text-foreground",
					onClick: onRevoke,
					disabled: revokePending,
					children: t("Revoke")
				}) : null]
			}),
			consent.scopes.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "mt-1.5 flex flex-wrap items-center gap-1",
				children: consent.scopes.map((scope) => /* @__PURE__ */ jsx(Badge, {
					variant: "outline",
					className: "text-[10px] font-normal text-muted-foreground",
					children: scope
				}, scope))
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "mt-1.5",
				children: /* @__PURE__ */ jsx(ConsentTokenFamilies, {
					consent,
					onRevoked: onTokenRevoked
				})
			})
		]
	});
}
function AccountApplications({ initialData } = {}) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data, isFetched } = useAccountConnectedApps();
	const resolvedData = data ?? initialData;
	const groups = resolvedData?.groups ?? (resolvedData ? groupConnectedApps(resolvedData.connectedApps) : []);
	const hasResolvedData = isFetched || initialData !== void 0;
	const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
	const [groupToRevoke, setGroupToRevoke] = useState(null);
	const [expandedGroups, setExpandedGroups] = useState(/* @__PURE__ */ new Set());
	const toggleGroup = (key) => {
		setExpandedGroups((previous) => {
			const next = new Set(previous);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			return next;
		});
	};
	const invalidateApplications = () => {
		queryClient.invalidateQueries({ queryKey: Dependencies.APPLICATIONS });
	};
	const revokeMutation = useMutation({
		mutationFn: async (consentIds) => {
			const results = await Promise.allSettled(consentIds.map((consentId) => sdk.forConsole.account.deleteConsent({ consentId })));
			const failed = results.filter((result) => result.status === "rejected" && result.reason?.code !== 404).length;
			if (failed > 0) throw new Error(failed === consentIds.length ? t("Failed to revoke application access") : t("Some authorizations could not be revoked. Please try again."));
			return results.length;
		},
		onSuccess: (revokedCount) => {
			invalidateApplications();
			toast.success(revokedCount > 1 ? t("Application access has been revoked for all authorizations") : t("Application access has been revoked"));
			setRevokeDialogOpen(false);
			setGroupToRevoke(null);
		},
		onError: (error) => {
			invalidateApplications();
			toast.error(error.message || t("Failed to revoke application access"));
		}
	});
	const handleRevokeGroupClick = (group) => {
		setGroupToRevoke(group);
		setRevokeDialogOpen(true);
	};
	const handleRevokeSingleClick = (group, connectedApp) => {
		setGroupToRevoke({
			...group,
			grants: [connectedApp],
			latestAuthorizedAt: connectedApp.consent.$createdAt
		});
		setRevokeDialogOpen(true);
	};
	const handleConfirmRevoke = () => {
		if (groupToRevoke) revokeMutation.mutate(groupToRevoke.grants.map((grant) => grant.consent.$id));
	};
	const revokeCount = groupToRevoke?.grants.length ?? 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Applications")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[13px] text-muted-foreground",
				children: t("Applications you've authorized to access your Appwrite account.")
			})]
		}),
		hasResolvedData && groups.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
			icon: Package,
			title: t("No applications connected"),
			description: t("When you authorize an application through OAuth, it will appear here."),
			isEmpty: true,
			variant: "card",
			iconSize: "md"
		}) : groups.length > 0 ? /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card overflow-hidden",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Application")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Authorized")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-right w-[130px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: groups.map((group) => {
				const { key, displayName, app, knownClient, grants } = group;
				const isGrouped = grants.length > 1;
				const isExpanded = expandedGroups.has(key);
				const subtitle = app?.tagline?.trim() || app?.description?.trim();
				const singleGrant = !isGrouped ? grants[0] : null;
				return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(TableRow, {
					className: "cursor-pointer",
					onClick: () => toggleGroup(key),
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ jsx(ConnectedAppAvatar, {
									app,
									knownClient
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 min-w-0",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "truncate text-[13px] font-medium text-foreground",
												children: displayName
											}),
											isGrouped ? /* @__PURE__ */ jsxs(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: [
													grants.length,
													" ",
													t("authorizations")
												]
											}) : null,
											app?.deviceFlow ? /* @__PURE__ */ jsx(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: t("Device flow")
											}) : null
										]
									}), singleGrant ? /* @__PURE__ */ jsx(ClientIdentifier, {
										connectedApp: singleGrant,
										className: "mt-0.5"
									}) : subtitle ? /* @__PURE__ */ jsx("p", {
										className: "truncate text-[12px] text-muted-foreground mt-0.5",
										children: subtitle
									}) : null]
								})]
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(group.latestAuthorizedAt),
								className: "text-[12px] text-muted-foreground"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-end gap-1",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-8 text-[13px]",
									onClick: (event) => {
										event.stopPropagation();
										handleRevokeGroupClick(group);
									},
									disabled: revokeMutation.isPending,
									children: isGrouped ? t("Revoke all") : t("Revoke")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 w-8 p-0",
									onClick: (event) => {
										event.stopPropagation();
										toggleGroup(key);
									},
									"aria-label": isExpanded ? t("Hide authorization details") : t("Show authorization details"),
									"aria-expanded": isExpanded,
									children: /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform", isExpanded && "rotate-180") })
								})]
							})
						})
					]
				}), isExpanded ? /* @__PURE__ */ jsx(TableRow, {
					className: "bg-muted/30 hover:bg-muted/30",
					children: /* @__PURE__ */ jsx(TableCell, {
						colSpan: 3,
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-2 ps-12",
							children: grants.map((connectedApp) => /* @__PURE__ */ jsx(ConsentDetail, {
								connectedApp,
								showRevoke: isGrouped,
								onRevoke: () => handleRevokeSingleClick(group, connectedApp),
								onTokenRevoked: invalidateApplications,
								revokePending: revokeMutation.isPending
							}, connectedApp.consent.$id))
						})
					})
				}) : null] }, key);
			}) })] })
		}) : null,
		/* @__PURE__ */ jsx(Dialog, {
			open: revokeDialogOpen,
			onOpenChange: setRevokeDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Revoke application access") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: revokeCount > 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
							t("This application has been authorized multiple times, likely because it registers a new OAuth client on each connection."),
							" ",
							t("Revoking will remove all"),
							" ",
							revokeCount,
							" ",
							t("authorizations and their active tokens. You may need to authorize it again to use it.")
						] }) : t("Are you sure you want to revoke access for this application? All of its active tokens will stop working, and you may need to authorize it again to use it.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setRevokeDialogOpen(false),
						disabled: revokeMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleConfirmRevoke,
						disabled: revokeMutation.isPending,
						children: revokeCount > 1 ? t("Revoke all") : t("Revoke")
					})]
				})]
			})
		})
	] });
}
function AccountApplicationsPage() {
	return /* @__PURE__ */ jsx(AccountApplications, { initialData: Route$1.useLoaderData() });
}
export { AccountApplicationsPage as component };
