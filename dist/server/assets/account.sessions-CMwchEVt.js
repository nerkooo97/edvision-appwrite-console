import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
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
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import { P as useAccountSessions } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
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
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Route$1 } from "./account.sessions-5ENhiM0w.js";
import { t as formatIpForDisplay } from "./format-ip-BZEMAGGm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Activity, Globe, Key, LogOut, Monitor, Shield, Smartphone, Tablet } from "lucide-react";
var Dependencies = { SESSIONS: ["sessions", "account"] };
function BrowserIcon({ clientCode, deviceName }) {
	const [iconUrl, setIconUrl] = useState(null);
	const [error, setError] = useState(false);
	useEffect(() => {
		if (!clientCode) {
			setError(true);
			return;
		}
		const loadIcon = async () => {
			try {
				setIconUrl(sdk.forConsole.avatars.getBrowser({
					code: clientCode,
					width: 64,
					height: 64
				}));
			} catch {
				setError(true);
			}
		};
		loadIcon();
	}, [clientCode]);
	const getDeviceIcon = () => {
		switch (deviceName?.toLowerCase()) {
			case "smartphone": return Smartphone;
			case "tablet": return Tablet;
			case "desktop":
			default: return Monitor;
		}
	};
	const DeviceIcon = getDeviceIcon();
	if (error || !iconUrl) return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
			children: /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-muted-foreground" })
		}), deviceName && /* @__PURE__ */ jsx("div", {
			className: "absolute -bottom-0.5 -end-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-background",
			children: /* @__PURE__ */ jsx(DeviceIcon, { className: "h-2.5 w-2.5 text-muted-foreground" })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50 overflow-hidden",
			children: /* @__PURE__ */ jsx("img", {
				src: iconUrl,
				alt: clientCode,
				className: "h-9 w-9 object-contain p-1",
				onError: () => setError(true)
			})
		}), deviceName && /* @__PURE__ */ jsx("div", {
			className: "absolute -bottom-0.5 -end-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-background",
			children: /* @__PURE__ */ jsx(DeviceIcon, { className: "h-2.5 w-2.5 text-muted-foreground" })
		})]
	});
}
function AccountSessions({ initialData } = {}) {
	const t = useT();
	const { data, isFetched } = useAccountSessions();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const sessions = data?.sessions ?? initialData?.sessions ?? [];
	const hasResolvedData = isFetched || initialData !== void 0;
	const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
	const [deleteAllDialogOpen, setDeleteAllDialogOpen] = useState(false);
	const [sessionToDelete, setSessionToDelete] = useState(null);
	const [isCurrentSession, setIsCurrentSession] = useState(false);
	const deleteSessionMutation = useMutation({
		mutationFn: async (sessionId) => {
			return await sdk.forConsole.account.deleteSession({ sessionId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.SESSIONS });
			toast.success(t("Session has been deleted"));
			setLogoutDialogOpen(false);
			const wasCurrentSession = isCurrentSession;
			setSessionToDelete(null);
			setIsCurrentSession(false);
			if (wasCurrentSession) navigate({ to: "/sign-in" });
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete session"));
		}
	});
	const deleteAllSessionsMutation = useMutation({
		mutationFn: async () => {
			return await sdk.forConsole.account.deleteSessions();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.SESSIONS });
			toast.success(t("All sessions have been deleted"));
			setDeleteAllDialogOpen(false);
			navigate({ to: "/sign-in" });
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete sessions"));
		}
	});
	const handleDeleteClick = (sessionId) => {
		const session = sessions.find((s) => s.$id === sessionId);
		setSessionToDelete(sessionId);
		setIsCurrentSession(session?.current || false);
		setLogoutDialogOpen(true);
	};
	const handleConfirmLogout = () => {
		if (sessionToDelete) deleteSessionMutation.mutate(sessionToDelete);
	};
	const handleDeleteAllClick = () => {
		setDeleteAllDialogOpen(true);
	};
	const handleConfirmDeleteAll = () => {
		deleteAllSessionsMutation.mutate();
	};
	const formatDeviceInfo = (session) => {
		const parts = [];
		if (session.clientName) {
			const clientInfo = session.clientVersion ? `${session.clientName} ${session.clientVersion}` : session.clientName;
			parts.push(clientInfo);
		}
		const osInfo = session.osName ? session.osVersion ? `${session.osName} ${session.osVersion}` : session.osName : null;
		const deviceInfo = session.deviceBrand && session.deviceModel ? `${session.deviceBrand} ${session.deviceModel}` : session.deviceModel || session.deviceBrand || null;
		return {
			primary: parts.length > 0 ? parts.join(" ") : t("Unknown device"),
			secondary: osInfo || deviceInfo || null
		};
	};
	const getProviderName = (provider) => {
		if (!provider) return t("Unknown");
		return {
			email: t("Email"),
			phone: t("Phone"),
			github: "GitHub",
			google: "Google",
			apple: "Apple",
			facebook: "Facebook",
			twitter: "Twitter",
			microsoft: "Microsoft",
			linkedin: "LinkedIn",
			discord: "Discord",
			twitch: "Twitch",
			spotify: "Spotify"
		}[provider.toLowerCase()] || provider;
	};
	const getProviderIcon = (provider) => {
		if (!provider) return null;
		return {
			email: "mail.svg",
			phone: "phone.svg",
			github: "github.svg",
			google: "google.svg",
			apple: "apple.svg",
			facebook: "facebook.svg"
		}[provider.toLowerCase()] || null;
	};
	const getCountryFlagUrl = (countryCode) => {
		if (!countryCode) return null;
		return `${getBaseEndpoint()}/avatars/flags/${countryCode.toLowerCase()}?width=20&height=20&quality=100&project=console`;
	};
	if (hasResolvedData && sessions.length === 0) return /* @__PURE__ */ jsx(EmptyState, {
		icon: Monitor,
		title: t("No active sessions"),
		description: t("You don't have any active sessions at the moment."),
		isEmpty: true,
		variant: "card",
		iconSize: "md"
	});
	if (!hasResolvedData) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", { children: [sessions.length > 1 && /* @__PURE__ */ jsx("div", {
			className: "mb-4 flex justify-end",
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "outline",
				size: "sm",
				className: "h-9 text-[13px]",
				onClick: handleDeleteAllClick,
				disabled: deleteAllSessionsMutation.isPending,
				children: [/* @__PURE__ */ jsx(LogOut, { className: "me-1.5 h-4 w-4" }), t("Delete all sessions")]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card overflow-hidden",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[320px]",
						children: t("Device & Auth")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
						children: t("Location")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[140px]",
						children: t("IP Address")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[160px]",
						children: t("Created")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
						children: t("Expires")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: sessions.map((session) => {
				const deviceInfo = formatDeviceInfo(session);
				const isCurrent = session.current || false;
				const flagUrl = getCountryFlagUrl(session.countryCode);
				const providerIcon = getProviderIcon(session.provider);
				const hasMFA = session.factors && session.factors.length > 0;
				return /* @__PURE__ */ jsxs(TableRow, {
					className: "group",
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(BrowserIcon, {
									clientCode: session.clientCode,
									deviceName: session.deviceName
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0 space-y-1",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-semibold text-foreground",
												children: deviceInfo.primary
											}),
											isCurrent && /* @__PURE__ */ jsx(Badge, {
												variant: "success",
												className: "text-[10px] font-medium shrink-0 px-1.5 py-0 h-4",
												children: t("Current")
											}),
											hasMFA && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsxs(Badge, {
													variant: "info",
													className: "h-4 shrink-0 gap-0.5 px-1 py-0 text-[10px] font-medium",
													children: [/* @__PURE__ */ jsx(Shield, { className: "h-2.5 w-2.5" }), "MFA"]
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", {
												className: "text-xs",
												children: ["MFA: ", session.factors?.join(", ")]
											}) })] })
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 flex-wrap",
										children: [deviceInfo.secondary && /* @__PURE__ */ jsx("span", {
											className: "text-[12px] text-muted-foreground",
											children: deviceInfo.secondary
										}), session.provider && /* @__PURE__ */ jsxs(Badge, {
											variant: "info",
											className: "text-[10px] shrink-0 gap-1.5 font-medium",
											children: [providerIcon ? /* @__PURE__ */ jsx("img", {
												src: `/icons/${providerIcon}`,
												alt: session.provider,
												className: `h-3 w-3 brightness-0 opacity-[0.55] dark:brightness-100 dark:opacity-100`,
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}) : /* @__PURE__ */ jsx(Key, { className: "h-3 w-3 opacity-70" }), getProviderName(session.provider)]
										})]
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [flagUrl ? /* @__PURE__ */ jsx("img", {
									src: flagUrl,
									alt: session.countryName || "",
									className: "h-4 w-4 rounded-sm border border-border/30 shadow-sm",
									onError: (e) => {
										e.currentTarget.style.display = "none";
									}
								}) : /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-muted-foreground/60" }), /* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-medium text-foreground",
									children: session.countryName && session.countryCode && session.countryCode !== "--" ? session.countryName : t("Unknown")
								})]
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5",
							children: session.ip ? /* @__PURE__ */ jsx("code", {
								className: "text-[12px] text-muted-foreground font-mono bg-muted/30 px-1.5 py-0.5 rounded",
								children: formatIpForDisplay(session.ip) ?? session.ip
							}) : /* @__PURE__ */ jsx("span", {
								className: "text-[12px] text-muted-foreground/50",
								children: "-"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: session.$createdAt,
								className: "text-[12px] font-medium text-foreground"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: session.expire,
								className: "text-[12px] font-medium text-foreground"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3.5 text-end",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 w-8 p-0",
								onClick: () => handleDeleteClick(session.$id),
								disabled: deleteSessionMutation.isPending,
								title: t("Revoke session"),
								"aria-label": t("Revoke session"),
								children: /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" })
							})
						})
					]
				}, session.$id);
			}) })] })
		})] }),
		/* @__PURE__ */ jsx(Dialog, {
			open: logoutDialogOpen,
			onOpenChange: (open) => {
				setLogoutDialogOpen(open);
				if (!open) {
					setSessionToDelete(null);
					setIsCurrentSession(false);
				}
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Logout from device") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: isCurrentSession ? t("Are you sure you want to logout from this device? You will be redirected to the sign-in page and will need to sign in again to access your account.") : t("Are you sure you want to logout from this device? You will need to sign in again to access your account from this device.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setLogoutDialogOpen(false),
						disabled: deleteSessionMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: handleConfirmLogout,
						disabled: deleteSessionMutation.isPending,
						children: t("Logout")
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteAllDialogOpen,
			onOpenChange: setDeleteAllDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Logout from all devices") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Are you sure you want to logout from all devices? You will need to sign in again to access your account from any device.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setDeleteAllDialogOpen(false),
						disabled: deleteAllSessionsMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: handleConfirmDeleteAll,
						disabled: deleteAllSessionsMutation.isPending,
						children: t("Logout from all devices")
					})]
				})]
			})
		})
	] });
}
function AccountSessionsPage() {
	return /* @__PURE__ */ jsx(AccountSessions, { initialData: Route$1.useLoaderData() });
}
export { AccountSessionsPage as component };
