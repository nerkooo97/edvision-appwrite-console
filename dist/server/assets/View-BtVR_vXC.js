import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk, s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { $v as useUpdateUserPassword, Bv as useProjectTeams, Iv as useDeleteProjectUser, Jv as useUpdateUserEmailVerification, Mv as useCreateTeamMembership, Nv as useCreateUserTarget, Pv as useDeleteAllUserSessions, Qv as useUpdateUserName, Rv as useDeleteUserMFAAuthenticator, Xv as useUpdateUserLabels, Yv as useUpdateUserImpersonator, Zv as useUpdateUserMFA, ay as useUserIdentities, cy as useUserSessions, ey as useUpdateUserPhone, iy as useUser, ly as useUserTargets, ny as useUpdateUserPrefs, oy as useUserMFAFactors, qv as useUpdateUserEmail, ry as useUpdateUserStatus, sy as useUserMemberships, ty as useUpdateUserPhoneVerification, zv as useDeleteUserSession } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { t as formatIpForDisplay } from "./format-ip-BZEMAGGm.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { n as MembershipContextMenu, r as useHashScroll, t as MembershipUpdateDrawer } from "./MembershipUpdateDrawer-OyIwsvOp.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AuthenticatorType, MessagingProviderType } from "@appwrite.io/console";
import { toast } from "sonner";
import { Activity, CheckCircle2, ExternalLink, Globe, Info, Key, Loader2, LogOut, Mail, Monitor, Phone, Plus, Shield, Smartphone, Tablet, Trash2, UserRound, Users as Users$1, X } from "lucide-react";
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
function View() {
	const t = useT();
	const { projectId, userId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const { data: user, isLoading: userLoading, error: userError } = useUser(projectId ?? "", userId ?? "");
	const { data: mfaFactors } = useUserMFAFactors(projectId ?? "", userId ?? "");
	const { data: sessionsData, isLoading: sessionsLoading } = useUserSessions(projectId, userId);
	const sessions = sessionsData?.sessions || [];
	const [deleteAllSessionsDialogOpen, setDeleteAllSessionsDialogOpen] = useState(false);
	const [createMembershipDialogOpen, setCreateMembershipDialogOpen] = useState(false);
	const deleteAllSessions = useDeleteAllUserSessions(projectId ?? "", userId ?? "");
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const userIdIndex = pathParts.findIndex((part) => part === userId);
		if (userIdIndex >= 0 && pathParts[userIdIndex + 1]) {
			const tabFromPath = pathParts[userIdIndex + 1];
			if ([
				"memberships",
				"identities",
				"targets",
				"sessions"
			].includes(tabFromPath)) return tabFromPath;
		}
		return "overview";
	}, [location.pathname, userId]);
	useHashScroll(activeTab === "overview" && !userLoading, location.hash);
	const tabs = useMemo(() => [
		{
			id: "overview",
			label: t("Overview"),
			to: "/projects/$projectId/auth/users/$userId",
			params: {
				projectId,
				userId
			}
		},
		{
			id: "memberships",
			label: t("Memberships"),
			to: "/projects/$projectId/auth/users/$userId/memberships",
			params: {
				projectId,
				userId
			}
		},
		{
			id: "identities",
			label: t("Identities"),
			to: "/projects/$projectId/auth/users/$userId/identities",
			params: {
				projectId,
				userId
			}
		},
		{
			id: "targets",
			label: t("Targets"),
			to: "/projects/$projectId/auth/users/$userId/targets",
			params: {
				projectId,
				userId
			}
		},
		{
			id: "sessions",
			label: t("Sessions"),
			to: "/projects/$projectId/auth/users/$userId/sessions",
			params: {
				projectId,
				userId
			}
		}
	], [
		projectId,
		userId,
		t
	]);
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/auth",
			params: { projectId }
		});
	};
	if (!projectId || !userId) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Missing project ID or user ID")
				}),
				!projectId && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground mt-2",
					children: t("Project ID is required")
				}),
				!userId && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground mt-2",
					children: t("User ID is required")
				})
			]
		})
	});
	if (userLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (userError) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-destructive mb-2",
				children: t("Error loading user")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: userError instanceof Error ? userError.message : t("Unknown error")
			})]
		})
	});
	if (!user) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("User not found")
			}), projectId && userId && /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-muted-foreground mt-2",
				children: [
					t("Project"),
					": ",
					projectId,
					", ",
					t("User"),
					": ",
					userId
				]
			})]
		})
	});
	const userName = user.name || "-";
	const displayName = user.name || user.email || user.phone || t("Anonymous");
	const handleDeleteAllSessions = () => {
		deleteAllSessions.mutate(void 0, {
			onSuccess: () => {
				toast.success(t("All sessions have been deleted"));
				setDeleteAllSessionsDialogOpen(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to delete all sessions"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
					kind: "user",
					label: userName,
					resourceId: user.$id,
					projectId,
					back: {
						onClick: handleBack,
						"aria-label": t("Back to users")
					}
				}),
				tabs,
				activeTab,
				showFilters: false,
				fullWidthBorder: true,
				beforeCreateButtons: activeTab === "sessions" && !sessionsLoading && sessions.length > 0 ? /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 w-9 p-0 text-[13px] @[640px]:w-auto @[640px]:px-3",
					onClick: () => setDeleteAllSessionsDialogOpen(true),
					disabled: deleteAllSessions.isPending,
					"aria-label": t("Delete all sessions"),
					children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4 shrink-0 @[640px]:me-1.5" }), /* @__PURE__ */ jsx("span", {
						className: "hidden @[640px]:inline",
						children: t("Delete all sessions")
					})]
				}) : void 0,
				createLabel: activeTab === "memberships" ? t("Create membership") : void 0,
				onCreate: activeTab === "memberships" ? () => setCreateMembershipDialogOpen(true) : void 0,
				createAnalyticsAction: activeTab === "memberships" ? "create-membership" : void 0,
				contentAfterBorder: activeTab === "targets" ? /* @__PURE__ */ jsx("div", {
					className: "border-b border-border bg-blue-500/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: "border-blue-500/30 bg-transparent",
							children: [
								/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-500" }),
								/* @__PURE__ */ jsx(AlertTitle, {
									className: "text-[13px] font-medium text-blue-600 dark:text-blue-400",
									children: t("User targets")
								}),
								/* @__PURE__ */ jsx(AlertDescription, {
									className: "text-[12px] text-blue-600/80 dark:text-blue-400/80",
									children: t("User targets include emails, phone numbers, and devices with your app installed. These targets can subscribe to a topic and receive messages published to it.")
								})
							]
						})
					})
				}) : void 0
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex-1 flex flex-col",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("mx-auto w-full max-w-7xl flex-1"),
					children: [
						activeTab === "overview" && /* @__PURE__ */ jsx("div", {
							className: "px-4 py-4 sm:px-6",
							children: /* @__PURE__ */ jsx(OverviewTab, {
								user,
								mfaFactors,
								projectId,
								userId,
								displayName
							})
						}),
						activeTab === "memberships" && /* @__PURE__ */ jsx("div", {
							className: "px-4 pb-4 sm:px-6 sm:pb-6",
							children: /* @__PURE__ */ jsx(MembershipsTab, {
								projectId,
								userId,
								createDialogOpen: createMembershipDialogOpen,
								onCreateDialogOpenChange: setCreateMembershipDialogOpen
							})
						}),
						activeTab === "identities" && /* @__PURE__ */ jsx("div", {
							className: "px-4 py-4 sm:px-6",
							children: /* @__PURE__ */ jsx(IdentitiesTab, {
								projectId,
								userId
							})
						}),
						activeTab === "targets" && /* @__PURE__ */ jsx("div", {
							className: "px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6",
							children: /* @__PURE__ */ jsx(TargetsTab, {
								projectId,
								userId
							})
						}),
						activeTab === "sessions" && /* @__PURE__ */ jsx("div", {
							className: cn("px-4 pb-4 sm:px-6 sm:pb-6", sessions.length === 0 && "pt-4 sm:pt-6"),
							children: /* @__PURE__ */ jsx(SessionsTab, {
								projectId,
								userId,
								displayName
							})
						})
					]
				})
			}),
			activeTab === "sessions" && /* @__PURE__ */ jsx(Dialog, {
				open: deleteAllSessionsDialogOpen,
				onOpenChange: setDeleteAllSessionsDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete all sessions") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Are you sure you want to delete"),
								" ",
								/* @__PURE__ */ jsxs("strong", { children: [
									t("all sessions of"),
									" ",
									displayName
								] }),
								"? ",
								t("This action cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => setDeleteAllSessionsDialogOpen(false),
							disabled: deleteAllSessions.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							onClick: handleDeleteAllSessions,
							disabled: deleteAllSessions.isPending,
							children: t("Delete all sessions")
						})]
					})]
				})
			})
		]
	});
}
function OverviewTab({ user, mfaFactors, projectId, userId, displayName }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 overflow-x-hidden w-full min-w-0",
		children: [
			/* @__PURE__ */ jsx(UserStatusCard, {
				user,
				projectId,
				userId,
				displayName
			}),
			/* @__PURE__ */ jsx("div", {
				id: "user-details",
				children: /* @__PURE__ */ jsx(UpdateNameSection, {
					user,
					projectId,
					userId
				})
			}),
			/* @__PURE__ */ jsx(UpdateEmailSection, {
				user,
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx(UpdatePhoneSection, {
				user,
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx(UpdatePasswordSection, {
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx(UpdateLabelsSection, {
				user,
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx("div", {
				id: "user-preferences",
				children: /* @__PURE__ */ jsx(UpdatePreferencesSection, {
					user,
					projectId,
					userId
				})
			}),
			/* @__PURE__ */ jsx(UserImpersonationCapabilityCard, {
				user,
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx(UpdateMFASection, {
				user,
				mfaFactors,
				projectId,
				userId
			}),
			/* @__PURE__ */ jsx(DeleteUserSection, {
				user,
				projectId,
				userId,
				displayName
			})
		]
	});
}
function UserStatusCard({ user, projectId, userId, displayName }) {
	const t = useT();
	const [, setVerifyMenuOpen] = useState(false);
	const updateEmailVerification = useUpdateUserEmailVerification(projectId, userId);
	const updatePhoneVerification = useUpdateUserPhoneVerification(projectId, userId);
	const updateStatus = useUpdateUserStatus(projectId, userId);
	const hasEmail = !!user.email;
	const hasPhone = !!user.phone;
	const emailVerified = !!user.emailVerification;
	const phoneVerified = !!user.phoneVerification;
	const isBlocked = user.status === false;
	const getStatusBadge = () => {
		if (isBlocked) return {
			label: "blocked",
			variant: "error"
		};
		if (emailVerified && phoneVerified) return {
			label: "verified",
			variant: "success"
		};
		if (emailVerified) return {
			label: "verified email",
			variant: "success"
		};
		if (phoneVerified) return {
			label: "verified phone",
			variant: "success"
		};
		return {
			label: "unverified",
			variant: "warning"
		};
	};
	const statusBadge = getStatusBadge();
	const handleVerifyEmail = () => {
		updateEmailVerification.mutate(!emailVerified, {
			onSuccess: () => {
				toast.success(emailVerified ? `${displayName}: ${t("email has been unverified")}` : `${displayName}: ${t("email has been verified")}`);
				setVerifyMenuOpen(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update email verification"));
			}
		});
	};
	const handleVerifyPhone = () => {
		updatePhoneVerification.mutate(!phoneVerified, {
			onSuccess: () => {
				toast.success(phoneVerified ? `${displayName}: ${t("phone has been unverified")}` : `${displayName}: ${t("phone has been verified")}`);
				setVerifyMenuOpen(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update phone verification"));
			}
		});
	};
	const handleBlockToggle = () => {
		updateStatus.mutate(isBlocked, {
			onSuccess: () => {
				toast.success(isBlocked ? `${displayName} ${t("has been unblocked")}` : `${displayName} ${t("has been blocked")}`);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update status"));
			}
		});
	};
	const lastActivity = user.accessedAt ? new Date(user.accessedAt) : null;
	const joinedDate = user.$createdAt ? new Date(user.$createdAt) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Status")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-4 flex-wrap",
					children: [/* @__PURE__ */ jsx(InitialsAvatar, {
						name: displayName,
						size: "lg",
						className: "shrink-0"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 mb-1 flex-wrap",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[15px] font-medium text-foreground truncate",
								children: displayName
							}), /* @__PURE__ */ jsx(Badge, {
								variant: statusBadge.variant,
								className: "text-[10px] shrink-0",
								children: t(statusBadge.label)
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-1 text-[13px] text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "flex flex-wrap items-center gap-x-1.5 gap-y-1",
									children: [/* @__PURE__ */ jsx("span", { children: t("User ID:") }), /* @__PURE__ */ jsx(CopyableId, {
										id: user.$id,
										size: "sm"
									})]
								}),
								user.email && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 min-w-0",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: user.email
									})]
								}),
								user.phone && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 min-w-0",
									children: [/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: user.phone
									})]
								}),
								joinedDate && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("span", { children: t("Joined:") }), /* @__PURE__ */ jsx(DateTooltip, { date: joinedDate })]
								}),
								lastActivity ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("span", { children: t("Last activity:") }), /* @__PURE__ */ jsx(DateTooltip, { date: lastActivity })]
								}) : /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1.5",
									children: /* @__PURE__ */ jsx("span", { children: t("Last activity: never") })
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [
					hasEmail && /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleVerifyEmail,
						disabled: updateEmailVerification.isPending,
						children: emailVerified ? t("Unverify Email") : t("Verify Email")
					}),
					hasPhone && /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleVerifyPhone,
						disabled: updatePhoneVerification.isPending,
						children: phoneVerified ? t("Unverify Phone") : t("Verify Phone")
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleBlockToggle,
						disabled: updateStatus.isPending,
						children: isBlocked ? t("Unblock Account") : t("Block Account")
					})
				]
			})
		]
	});
}
function UserImpersonationCapabilityCard({ user, projectId, userId }) {
	const t = useT();
	const [canImpersonate, setCanImpersonate] = useState(!!user.impersonator);
	const updateImpersonator = useUpdateUserImpersonator(projectId, userId);
	useEffect(() => {
		setCanImpersonate(!!user.impersonator);
	}, [user.impersonator]);
	const handleToggle = (checked) => {
		setCanImpersonate(checked);
		updateImpersonator.mutate(checked, {
			onSuccess: () => {
				toast.success(checked ? t("User impersonation has been enabled for this account") : t("User impersonation has been disabled for this account"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update impersonation setting"));
				setCanImpersonate(!!user.impersonator);
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("User impersonation")
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: [
							t("When enabled, this user may use the Appwrite client SDK's impersonation support in your app: you designate which other project user a session should run as, and the SDK applies that context on outgoing requests so the API treats each call like it came from the impersonated user - permissions, data access, and limits follow that identity."),
							" ",
							/* @__PURE__ */ jsxs(DocsRouteLink, {
								className: "link-neutral inline-flex items-center gap-1",
								href: "/docs/products/auth/impersonation",
								children: [t("Documentation"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
							})
						]
					}),
					/* @__PURE__ */ jsxs(Alert, {
						variant: "default",
						className: "mt-4 border-border bg-muted/30 [&>svg]:text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
							/* @__PURE__ */ jsx(AlertTitle, {
								className: "text-[13px] font-medium text-foreground",
								children: t("Note")
							}),
							/* @__PURE__ */ jsx(AlertDescription, {
								className: "text-[12px] text-muted-foreground",
								children: t("Grant this only for trusted operator or support-style accounts. Audit logs still attribute actions to the account that started impersonation, not only the impersonated user.")
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3 min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted",
							children: /* @__PURE__ */ jsx(UserRound, { className: "h-5 w-5 text-muted-foreground" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-0.5 min-w-0",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "user-impersonation-toggle",
								className: "text-[13px] font-semibold text-foreground cursor-pointer",
								children: t("Impersonation capability")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: canImpersonate ? t("This user may impersonate others in this project") : t("This user cannot impersonate others")
							})]
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						id: "user-impersonation-toggle",
						checked: canImpersonate,
						onCheckedChange: handleToggle,
						disabled: updateImpersonator.isPending
					})]
				})
			})
		]
	});
}
function UpdateNameSection({ user, projectId, userId }) {
	const t = useT();
	const [userName, setUserName] = useState(user.name || "");
	const updateName = useUpdateUserName(projectId, userId);
	useEffect(() => {
		setUserName(user.name || "");
	}, [user.name]);
	const isDisabled = !(userName !== (user.name || "")) || updateName.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updateName.mutate(userName, {
			onSuccess: () => {
				toast.success(t("Name has been updated"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update name"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update name")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Update the user's display name.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "name",
							children: t("Name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "name",
							type: "text",
							placeholder: t("Enter name"),
							value: userName,
							onChange: (e) => setUserName(e.target.value),
							disabled: updateName.isPending,
							className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
							autoComplete: "off"
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdateEmailSection({ user, projectId, userId }) {
	const t = useT();
	const [userEmail, setUserEmail] = useState(user.email || "");
	const updateEmail = useUpdateUserEmail(projectId, userId);
	useEffect(() => {
		setUserEmail(user.email || "");
	}, [user.email]);
	const isDisabled = !(userEmail !== (user.email || "")) || updateEmail.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updateEmail.mutate(userEmail, {
			onSuccess: () => {
				toast.success(t("Email has been updated"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update email"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update email")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Update the user's email address.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "email",
							children: t("Email")
						}), /* @__PURE__ */ jsx(Input, {
							id: "email",
							type: "email",
							placeholder: t("Enter email"),
							value: userEmail,
							onChange: (e) => setUserEmail(e.target.value),
							disabled: updateEmail.isPending,
							className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
							autoComplete: "off"
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdatePhoneSection({ user, projectId, userId }) {
	const t = useT();
	const [userPhone, setUserPhone] = useState(user.phone || "");
	const updatePhone = useUpdateUserPhone(projectId, userId);
	useEffect(() => {
		setUserPhone(user.phone || "");
	}, [user.phone]);
	const isDisabled = !(userPhone !== (user.phone || "")) || updatePhone.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updatePhone.mutate(userPhone, {
			onSuccess: () => {
				toast.success(t("Phone has been updated"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update phone"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update phone")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Update the user's phone number.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "phone",
								children: t("Phone")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "phone",
								type: "tel",
								placeholder: t("For example: +14155552671"),
								value: userPhone,
								onChange: (e) => setUserPhone(e.target.value),
								disabled: updatePhone.isPending,
								className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
								autoComplete: "off"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("Phone number must start with '+' and maximum of 15 digits.")
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdatePasswordSection({ projectId, userId }) {
	const t = useT();
	const [newPassword, setNewPassword] = useState("");
	const updatePassword = useUpdateUserPassword(projectId, userId);
	const isDisabled = !newPassword || updatePassword.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updatePassword.mutate(newPassword, {
			onSuccess: () => {
				toast.success(t("Password has been updated"));
				setNewPassword("");
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update password"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update password")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Update the user's password.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								children: t("New password")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "password",
								type: "password",
								placeholder: t("Enter new password"),
								value: newPassword,
								onChange: (e) => setNewPassword(e.target.value),
								disabled: updatePassword.isPending,
								className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
								autoComplete: "off"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("A password must contain at least 8 characters.")
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdateLabelsSection({ user, projectId, userId }) {
	const t = useT();
	const [labels, setLabels] = useState(user.labels || []);
	const [labelInput, setLabelInput] = useState("");
	const [error, setError] = useState(null);
	const updateLabels = useUpdateUserLabels(projectId, userId);
	useEffect(() => {
		setLabels(user.labels || []);
	}, [user.labels]);
	const suggestedLabels = [
		"admin",
		"premium",
		"mvp"
	];
	const validateLabel = (label) => {
		return /^[a-zA-Z0-9]+$/.test(label);
	};
	const handleAddLabel = (label) => {
		const trimmed = label.trim();
		if (!trimmed) return;
		if (!validateLabel(trimmed)) {
			setError(t("Only alphanumeric characters are allowed"));
			return;
		}
		if (labels.includes(trimmed)) return;
		setLabels([...labels, trimmed]);
		setLabelInput("");
		setError(null);
	};
	const handleRemoveLabel = (labelToRemove) => {
		setLabels(labels.filter((l) => l !== labelToRemove));
		setError(null);
	};
	const handleLabelInputKeyDown = (e) => {
		if (e.key === "Enter" && labelInput.trim()) {
			e.preventDefault();
			handleAddLabel(labelInput);
		} else if (e.key === "," && labelInput.trim()) {
			e.preventDefault();
			handleAddLabel(labelInput);
		} else if (e.key === " " && labelInput.trim()) {
			e.preventDefault();
			handleAddLabel(labelInput);
		} else if ((e.key === "Backspace" || e.key === "Delete") && !labelInput.trim() && labels.length > 0) {
			e.preventDefault();
			handleRemoveLabel(labels[labels.length - 1]);
		}
	};
	const originalLabels = new Set(user.labels || []);
	const currentLabels = new Set(labels);
	const hasChanges = originalLabels.size !== currentLabels.size || [...originalLabels].some((label) => !currentLabels.has(label)) || [...currentLabels].some((label) => !originalLabels.has(label));
	const isDisabled = !!error || !hasChanges || updateLabels.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updateLabels.mutate(labels, {
			onSuccess: () => {
				toast.success(t("User labels have been updated"));
			},
			onError: (error$1) => {
				toast.error(error$1.message || t("Failed to update labels"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update labels")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Categorize and manage your users based on specific criteria by assigning them customizable labels. New label-based roles will be assigned.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "labels",
									className: "text-[13px] font-medium text-foreground",
									children: t("Labels")
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Type and press Enter or comma to add labels")
								}),
								/* @__PURE__ */ jsx("div", {
									className: "relative max-w-md",
									children: /* @__PURE__ */ jsxs("div", {
										className: cn("flex flex-wrap items-center gap-1.5 min-h-[36px] rounded-md border bg-transparent px-3 py-1.5 text-sm transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", updateLabels.isPending ? "opacity-50 cursor-not-allowed" : ""),
										children: [labels.map((label) => /* @__PURE__ */ jsxs(Badge, {
											variant: "info",
											className: "gap-1 h-6 text-[10px] shrink-0 pe-1",
											children: [label, /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => handleRemoveLabel(label),
												className: "ms-0.5 rounded-full hover:bg-muted/80 p-0.5",
												disabled: updateLabels.isPending,
												children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
											})]
										}, label)), /* @__PURE__ */ jsx("input", {
											id: "labels",
											type: "text",
											value: labelInput,
											onChange: (e) => {
												setLabelInput(e.target.value);
												setError(null);
											},
											onKeyDown: handleLabelInputKeyDown,
											placeholder: labels.length === 0 ? t("Enter label (e.g., admin)") : "",
											className: "flex-1 min-w-[120px] bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground",
											disabled: updateLabels.isPending,
											autoComplete: "off"
										})]
									})
								}),
								error && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive mt-1",
									children: error
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Only alphanumeric characters are allowed")
								})
							]
						}), suggestedLabels.length > 0 && /* @__PURE__ */ jsxs("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("Suggested:")
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: suggestedLabels.map((label) => /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: () => handleAddLabel(label),
									disabled: updateLabels.isPending || labels.includes(label),
									children: [/* @__PURE__ */ jsx(Plus, { className: "h-3 w-3 me-1" }), label]
								}, label))
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdatePreferencesSection({ user, projectId, userId }) {
	const t = useT();
	const [preferences, setPreferences] = useState([]);
	const updatePrefs = useUpdateUserPrefs(projectId, userId);
	useEffect(() => {
		const prefs = user.prefs || {};
		setPreferences(Object.entries(prefs).map(([key, value]) => ({
			key,
			value: String(value)
		})));
		if (Object.keys(prefs).length === 0) setPreferences([{
			key: "",
			value: ""
		}]);
	}, [user.prefs]);
	const handleAddPreference = () => {
		setPreferences([...preferences, {
			key: "",
			value: ""
		}]);
	};
	const handleRemovePreference = (index) => {
		if (preferences.length === 1 && !preferences[0].key && !preferences[0].value) return;
		setPreferences(preferences.filter((_, i) => i !== index));
	};
	const handlePreferenceChange = (index, field, value) => {
		const updated = [...preferences];
		updated[index] = {
			...updated[index],
			[field]: value
		};
		setPreferences(updated);
	};
	const originalPrefs = user.prefs || {};
	const currentPrefs = {};
	preferences.forEach((pref) => {
		if (pref.key && pref.value) currentPrefs[pref.key] = pref.value;
	});
	const hasChanges = JSON.stringify(originalPrefs) !== JSON.stringify(currentPrefs);
	const lastRowIncomplete = preferences.length > 0 && (!preferences[preferences.length - 1].key || !preferences[preferences.length - 1].value);
	const isDisabled = !hasChanges || lastRowIncomplete || updatePrefs.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updatePrefs.mutate(currentPrefs, {
			onSuccess: () => {
				toast.success(t("Preferences have been updated"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update preferences"));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update preferences")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: t("Update user preferences as key-value pairs.")
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [preferences.map((pref, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Input, {
									type: "text",
									placeholder: t("Key"),
									value: pref.key,
									onChange: (e) => handlePreferenceChange(index, "key", e.target.value),
									disabled: updatePrefs.isPending,
									className: "h-9 flex-1 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
								}),
								/* @__PURE__ */ jsx(Input, {
									type: "text",
									placeholder: t("Value"),
									value: pref.value,
									onChange: (e) => handlePreferenceChange(index, "value", e.target.value),
									disabled: updatePrefs.isPending,
									className: "h-9 flex-1 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-9 w-9 p-0",
									onClick: () => handleRemovePreference(index),
									disabled: preferences.length === 1 && !preferences[0].key && !preferences[0].value,
									children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
								})
							]
						}, index)), /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleAddPreference,
							disabled: lastRowIncomplete || updatePrefs.isPending,
							children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add preference")]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdateMFASection({ user, mfaFactors, projectId, userId }) {
	const t = useT();
	const [userMfa, setUserMfa] = useState(!!user.mfa);
	const updateMFA = useUpdateUserMFA(projectId, userId);
	const deleteAuthenticator = useDeleteUserMFAAuthenticator(projectId, userId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [authenticatorToDelete, setAuthenticatorToDelete] = useState(null);
	useEffect(() => {
		setUserMfa(!!user.mfa);
	}, [user.mfa]);
	const handleMfaToggle = (checked) => {
		setUserMfa(checked);
		updateMFA.mutate(checked, {
			onSuccess: () => {
				toast.success(checked ? t("Multi-factor authentication has been enabled") : t("Multi-factor authentication has been disabled"));
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update MFA"));
				setUserMfa(!!user.mfa);
			}
		});
	};
	const handleDeleteAuthenticator = (authenticator) => {
		setAuthenticatorToDelete(authenticator);
		setDeleteDialogOpen(true);
	};
	const confirmDeleteAuthenticator = () => {
		if (authenticatorToDelete) deleteAuthenticator.mutate(authenticatorToDelete.type, {
			onSuccess: () => {
				toast.success(t("Authentication method has been deleted"));
				setDeleteDialogOpen(false);
				setAuthenticatorToDelete(null);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to delete authenticator"));
			}
		});
	};
	const authenticators = mfaFactors?.authenticators || [];
	const hasTOTP = authenticators.some((auth) => auth.type === AuthenticatorType.Totp);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Multi-factor authentication")
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: [
						t("Enhance the user's account security by requiring a second sign-in method."),
						" ",
						/* @__PURE__ */ jsxs(DocsRouteLink, {
							className: "link-neutral inline-flex items-center gap-1",
							href: "/docs/products/auth/mfa",
							children: [t("Documentation"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-0.5",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "mfa-toggle",
							className: "text-[13px] font-semibold text-foreground cursor-pointer",
							children: t("Multi-factor authentication")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: userMfa ? t("MFA is currently enabled") : t("MFA is currently disabled")
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						id: "mfa-toggle",
						checked: userMfa,
						onCheckedChange: handleMfaToggle,
						disabled: updateMFA.isPending
					})]
				}), userMfa && /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
								children: /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-muted-foreground" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mb-1",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "text-[14px] font-semibold text-foreground",
										children: t("Authenticator app")
									}), hasTOTP && /* @__PURE__ */ jsxs(Badge, {
										variant: "success",
										className: "text-[10px] shrink-0 gap-1",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("connected")]
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground",
									children: hasTOTP ? t("User has connected an authenticator app for two-factor authentication.") : t("No authenticator app has been connected yet.")
								})]
							}),
							hasTOTP && authenticators.length > 0 && /* @__PURE__ */ jsx("div", {
								className: "flex gap-2",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => handleDeleteAuthenticator(authenticators.find((a) => a.type === AuthenticatorType.Totp)),
									disabled: deleteAuthenticator.isPending,
									children: t("Delete")
								})
							})
						]
					}), hasTOTP && authenticators.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border",
						children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Type")
							}), /* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[100px]" })]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: authenticators.map((auth) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px]",
							children: auth.type === AuthenticatorType.Totp ? "TOTP" : auth.type
						}), /* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-end",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 w-8 p-0",
								onClick: () => handleDeleteAuthenticator(auth),
								disabled: deleteAuthenticator.isPending,
								"aria-label": t("Remove authenticator"),
								children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
							})
						})] }, auth.$id)) })] })
					})]
				})]
			})
		]
	}), /* @__PURE__ */ jsx(Dialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete authentication method") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this authentication method? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: () => setDeleteDialogOpen(false),
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: confirmDeleteAuthenticator,
					disabled: deleteAuthenticator.isPending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function DeleteUserSection({ user, projectId, userId, displayName }) {
	const t = useT();
	const navigate = useNavigate();
	const { project } = useProject(projectId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteUser = useDeleteProjectUser(projectId);
	const handleDelete = () => {
		deleteUser.mutate(userId, {
			onSuccess: () => {
				toast.success(`${displayName} ${t("has been deleted")}`);
				navigate({
					to: "/projects/$projectId/auth",
					params: { projectId }
				});
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to delete user"));
			}
		});
	};
	const lastActivity = user.accessedAt ? new Date(user.accessedAt) : null;
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Delete user")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Permanently delete this user from the project. This action cannot be undone.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx(InitialsAvatar, {
						name: displayName,
						size: "md"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							children: displayName
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: (() => {
								const parts = [];
								if (user.email) parts.push(user.email);
								if (user.phone) parts.push(user.phone);
								if (lastActivity) parts.push(/* @__PURE__ */ jsxs(Fragment, { children: [
									t("Last activity:"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, { date: lastActivity })
								] }));
								return parts.map((item, index) => /* @__PURE__ */ jsxs("span", { children: [item, index < parts.length - 1 && " • "] }, index));
							})()
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
				children: /* @__PURE__ */ jsxs(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							children: t("Delete user")
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete user") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									/* @__PURE__ */ jsxs("strong", { children: [
										displayName,
										" · ",
										project?.name || t("this project")
									] }),
									"? ",
									t("This action cannot be undone.")
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => setDeleteDialogOpen(false),
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "destructive",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: handleDelete,
								disabled: deleteUser.isPending,
								children: t("Delete")
							})]
						})]
					})]
				})
			})
		]
	}) });
}
function MembershipsTab({ projectId, userId, createDialogOpen, onCreateDialogOpenChange }) {
	const t = useT();
	const { data, isLoading } = useUserMemberships(projectId, userId);
	const { teams } = useProjectTeams(projectId, 0, 100);
	const createMembershipMutation = useCreateTeamMembership(projectId, null);
	const [selectedMemberships, setSelectedMemberships] = useState(/* @__PURE__ */ new Set());
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedMembership, setSelectedMembership] = useState(null);
	const memberships = data?.memberships || [];
	const existingTeamIds = new Set(memberships.map((membership) => membership.teamId).filter(Boolean));
	const availableTeams = teams.filter((team) => !existingTeamIds.has(team.id));
	const openDrawer = (membership) => {
		setSelectedMembership(membership);
		setDrawerOpen(true);
	};
	const handleCreateMembership = async (data$1) => {
		try {
			const teamName = teams.find((team) => team.id === data$1.teamId)?.name || t("Team");
			await createMembershipMutation.mutateAsync({
				teamId: data$1.teamId,
				userId,
				roles: data$1.roles
			});
			toast.success(`${t("Membership created for team")} ${teamName}`);
			onCreateDialogOpenChange(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to create membership"));
		}
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (memberships.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsx(EmptyState, {
			icon: Users$1,
			title: t("No memberships available"),
			description: t("This user is not a member of any teams."),
			isEmpty: true,
			variant: "card",
			iconSize: "md"
		}), /* @__PURE__ */ jsx(CreateUserMembershipDialog, {
			open: createDialogOpen,
			onOpenChange: onCreateDialogOpenChange,
			onSubmit: handleCreateMembership,
			isLoading: createMembershipMutation.isPending,
			teams: availableTeams
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "w-[40px] px-4 py-3",
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: memberships.length > 0 && selectedMemberships.size === memberships.length,
								onCheckedChange: (checked) => {
									if (checked) setSelectedMemberships(new Set(memberships.map((m) => m.$id)));
									else setSelectedMemberships(/* @__PURE__ */ new Set());
								}
							})
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Name")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Status")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Roles")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Joined")
						})
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: memberships.map((membership) => /* @__PURE__ */ jsx(MembershipContextMenu, {
					projectId,
					membership,
					onOpenMembership: () => openDrawer(membership),
					children: /* @__PURE__ */ jsxs(TableRow, {
						className: "cursor-pointer hover:bg-muted/30 transition-colors",
						onClick: () => openDrawer(membership),
						children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "w-[40px] px-4 py-3",
								onClick: (e) => e.stopPropagation(),
								children: /* @__PURE__ */ jsx(Checkbox, {
									checked: selectedMemberships.has(membership.$id),
									onCheckedChange: (checked) => {
										const newSelected = new Set(selectedMemberships);
										if (checked) newSelected.add(membership.$id);
										else newSelected.delete(membership.$id);
										setSelectedMemberships(newSelected);
									}
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								onClick: () => openDrawer(membership),
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(InitialsAvatar, {
										name: membership.teamName,
										size: "sm"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[13px] font-medium text-foreground",
										children: membership.teamName
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								onClick: () => openDrawer(membership),
								children: /* @__PURE__ */ jsx(Badge, {
									variant: membership.confirm ? "active" : "pending",
									className: "text-[10px] shrink-0",
									children: membership.confirm ? t("Active") : t("Pending")
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								onClick: () => openDrawer(membership),
								children: /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-1.5 items-center",
									children: (() => {
										const roles = membership.roles ?? [];
										const maxVisible = 2;
										const visible = roles.slice(0, maxVisible);
										const remaining = roles.length - maxVisible;
										return /* @__PURE__ */ jsxs(Fragment, { children: [
											visible.map((role) => /* @__PURE__ */ jsx(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: role
											}, role)),
											remaining > 0 && /* @__PURE__ */ jsxs(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: ["+", remaining]
											}),
											roles.length === 0 && /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										] });
									})()
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								onClick: () => openDrawer(membership),
								children: /* @__PURE__ */ jsx(DateTooltip, {
									date: new Date(membership.joined),
									className: "text-[12px] text-muted-foreground"
								})
							})
						]
					})
				}, membership.$id)) })] })
			}),
			/* @__PURE__ */ jsx(MembershipUpdateDrawer, {
				open: drawerOpen,
				onOpenChange: setDrawerOpen,
				membership: selectedMembership,
				projectId,
				context: "user"
			}),
			/* @__PURE__ */ jsx(CreateUserMembershipDialog, {
				open: createDialogOpen,
				onOpenChange: onCreateDialogOpenChange,
				onSubmit: handleCreateMembership,
				isLoading: createMembershipMutation.isPending,
				teams: availableTeams
			})
		]
	});
}
function CreateUserMembershipDialog({ open, onOpenChange, onSubmit, isLoading, teams }) {
	const t = useT();
	const [teamId, setTeamId] = useState("");
	const [roles, setRoles] = useState([]);
	const [roleInput, setRoleInput] = useState("");
	const teamItems = teams.map((team) => ({
		value: team.id,
		label: team.name
	}));
	const handleOpenChange = (nextOpen) => {
		if (!nextOpen) {
			setTeamId("");
			setRoles([]);
			setRoleInput("");
		}
		onOpenChange(nextOpen);
	};
	const handleAddRole = () => {
		const nextRole = roleInput.trim();
		if (!nextRole || roles.includes(nextRole)) return;
		setRoles((prev) => [...prev, nextRole]);
		setRoleInput("");
	};
	const handleRemoveRole = (roleToRemove) => {
		setRoles((prev) => prev.filter((role) => role !== roleToRemove));
	};
	const handleSubmit = () => {
		if (!teamId || roles.length === 0) return;
		onSubmit({
			teamId,
			roles
		});
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create membership") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Select a team and assign roles for this user.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs(Label, {
								htmlFor: "membership-team",
								children: [
									t("Team"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}), /* @__PURE__ */ jsx(SearchableSelect, {
								value: teamId,
								onValueChange: setTeamId,
								items: teamItems,
								placeholder: t("Select a team"),
								searchPlaceholder: t("Search teams..."),
								emptyMessage: t("No available teams")
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "membership-roles",
									children: t("Roles")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx(Input, {
											id: "membership-roles",
											value: roleInput,
											onChange: (e) => setRoleInput(e.target.value),
											onKeyDown: (e) => {
												if (e.key === "Enter" && roleInput.trim()) {
													e.preventDefault();
													handleAddRole();
												}
											},
											placeholder: t("Add role"),
											autoComplete: "off"
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											onClick: handleAddRole,
											disabled: !roleInput.trim(),
											children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
										})]
									}), roles.length > 0 && /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-2",
										children: roles.map((role) => /* @__PURE__ */ jsxs(Badge, {
											variant: "info",
											className: "text-[10px] shrink-0 pe-1",
											children: [role, /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => handleRemoveRole(role),
												className: "ms-0.5 hover:text-foreground rounded p-0.5",
												children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
											})]
										}, role))
									})]
								}),
								/* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }), /* @__PURE__ */ jsxs(AlertDescription, {
									className: "text-[12px]",
									children: [
										t("Roles are used to manage access permissions."),
										" ",
										/* @__PURE__ */ jsx(DocsRouteLink, {
											className: "link-neutral",
											href: "/docs/advanced/platform/permissions",
											children: t("Learn more about permissions")
										})
									]
								})] })
							]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => handleOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleSubmit,
						disabled: !teamId || roles.length === 0 || isLoading,
						children: t("Create")
					})]
				})
			]
		})
	});
}
function IdentitiesTab({ projectId, userId }) {
	const t = useT();
	const [page, setPage] = useState(1);
	const [search] = useState("");
	const { data, isLoading } = useUserIdentities(projectId, userId, page - 1, 10, search);
	const identities = data?.identities || [];
	const total = data?.total || 0;
	const getProviderIcon = (provider) => {
		return {
			github: "github.svg",
			google: "google.svg",
			apple: "apple.svg",
			facebook: "facebook.svg",
			microsoft: "microsoft.svg",
			linkedin: "linkedin.svg",
			twitter: "twitter.svg",
			amazon: "amazon.svg",
			bitbucket: "bitbucket.svg",
			gitlab: "gitlab.svg",
			discord: "discord-simple.svg",
			spotify: "spotify.svg",
			slack: "slack.svg",
			salesforce: "salesforce.svg",
			paypal: "paypal.svg",
			okta: "okta.svg",
			auth0: "auth0.svg",
			authentik: "authentik.svg",
			oidc: "oidc.svg"
		}[provider.toLowerCase()] || "empty.svg";
	};
	const getProviderName = (provider) => {
		return {
			github: "GitHub",
			google: "Google",
			apple: "Apple",
			facebook: "Facebook",
			microsoft: "Microsoft",
			linkedin: "LinkedIn",
			twitter: "Twitter",
			amazon: "Amazon",
			bitbucket: "Bitbucket",
			gitlab: "GitLab",
			discord: "Discord",
			spotify: "Spotify",
			slack: "Slack",
			salesforce: "Salesforce",
			paypal: "PayPal",
			okta: "Okta",
			auth0: "Auth0",
			authentik: "Authentik",
			oidc: "OIDC"
		}[provider.toLowerCase()] || provider;
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (identities.length === 0) return /* @__PURE__ */ jsx(EmptyState, {
		icon: Key,
		title: t("No identities available"),
		description: t("No OAuth identities linked to this user."),
		isEmpty: true,
		variant: "card",
		iconSize: "md"
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-3",
				children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("User identities are the user's connected OAuth accounts. The user can sign in using these identities.")
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Identity ID")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Provider")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Email")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Created")
						})
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: identities.map((identity) => /* @__PURE__ */ jsxs(TableRow, { children: [
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(CopyableId, {
							id: identity.$id,
							size: "xs"
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("img", {
								src: `/icons/${getProviderIcon(identity.provider)}`,
								alt: identity.provider,
								className: `h-4 w-4 ${PUBLIC_ICON_MUTED_CLASSES}`,
								onError: (e) => {
									e.currentTarget.src = "/icons/empty.svg";
								}
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-medium text-foreground",
								children: getProviderName(identity.provider)
							})]
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-[13px]",
						children: identity.providerEmail || "-"
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(DateTooltip, {
							date: new Date(identity.$createdAt),
							className: "text-[12px] text-muted-foreground"
						})
					})
				] }, identity.$id)) })] })
			}),
			total > 10 && /* @__PURE__ */ jsx(Pagination, {
				currentPage: page,
				totalItems: total,
				pageSize: 10,
				onPageChange: setPage,
				onPageSizeChange: () => {}
			})
		]
	}) });
}
function TargetsTab({ projectId, userId }) {
	const t = useT();
	const [page, setPage] = useState(1);
	const { data, isLoading } = useUserTargets(projectId, userId, page - 1, 10);
	const targets = data?.targets || [];
	const total = data?.total || 0;
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "space-y-0",
		children: [targets.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
			icon: Smartphone,
			title: t("No targets available"),
			description: t("No messaging targets configured for this user."),
			isEmpty: true,
			variant: "card",
			iconSize: "md"
		}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card overflow-hidden",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Target ID")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Target")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Provider Type")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Created")
					})
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: targets.map((target) => /* @__PURE__ */ jsxs(TableRow, {
				className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
				children: [
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(CopyableId, {
							id: target.$id,
							size: "xs"
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-[13px]",
						children: target.name || target.identifier
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: "text-[10px] shrink-0",
							children: target.providerType
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(DateTooltip, {
							date: new Date(target.$createdAt),
							className: "text-[12px] text-muted-foreground"
						})
					})
				]
			}, target.$id)) })] })
		}), total > 10 && /* @__PURE__ */ jsx(Pagination, {
			currentPage: page,
			totalItems: total,
			pageSize: 10,
			onPageChange: setPage,
			onPageSizeChange: () => {}
		})] }), /* @__PURE__ */ jsx(CreateTargetDialog, {
			open: false,
			onOpenChange: () => {},
			projectId,
			userId
		})]
	}) });
}
function CreateTargetDialog({ open, onOpenChange, projectId, userId }) {
	const t = useT();
	const [providerType, setProviderType] = useState(MessagingProviderType.Push);
	const [identifier, setIdentifier] = useState("");
	const [providerId, setProviderId] = useState("");
	const [name, setName] = useState("");
	const [targetId, setTargetId] = useState("");
	const [showCustomId, setShowCustomId] = useState(false);
	const createTarget = useCreateUserTarget(projectId, userId);
	useEffect(() => {
		if (!open) {
			setProviderType(MessagingProviderType.Push);
			setIdentifier("");
			setProviderId("");
			setName("");
			setTargetId("");
			setShowCustomId(false);
		}
	}, [open]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const targetData = {
			providerType,
			identifier
		};
		if (providerType === MessagingProviderType.Push) {
			if (!providerId || !identifier || !name) {
				toast.error(t("Provider ID, identifier, and name are required for push targets"));
				return;
			}
			targetData.providerId = providerId;
			targetData.name = name;
		}
		if (showCustomId && targetId) targetData.targetId = targetId;
		createTarget.mutate(targetData, {
			onSuccess: () => {
				toast.success(t("Target has been created"));
				onOpenChange(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to create target"));
			}
		});
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create target") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Add a new messaging target for this user.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "provider-type",
									className: "text-[12px]",
									children: [
										t("Provider Type"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsxs(Select, {
									value: providerType,
									onValueChange: setProviderType,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "provider-type",
										className: "h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [
										/* @__PURE__ */ jsx(SelectItem, {
											value: MessagingProviderType.Push,
											children: t("Push")
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: MessagingProviderType.Email,
											children: t("Email")
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: MessagingProviderType.Sms,
											children: "SMS"
										})
									] })]
								})]
							}),
							providerType === MessagingProviderType.Push && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "provider-id",
									className: "text-[12px]",
									children: [
										t("Provider ID"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "provider-id",
									value: providerId,
									onChange: (e) => setProviderId(e.target.value),
									placeholder: t("Enter provider ID"),
									className: "h-9 text-[13px]",
									required: true
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "name",
									className: "text-[12px]",
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
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: t("Enter target name"),
									className: "h-9 text-[13px]",
									required: true
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "identifier",
									className: "text-[12px]",
									children: [
										t("Identifier"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "identifier",
									type: providerType === MessagingProviderType.Email ? "email" : "text",
									value: identifier,
									onChange: (e) => setIdentifier(e.target.value),
									placeholder: providerType === MessagingProviderType.Push ? t("Enter push token") : providerType === MessagingProviderType.Email ? t("Enter email address") : t("Enter phone number"),
									className: "h-9 text-[13px]",
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: "custom-id",
									checked: showCustomId,
									onCheckedChange: (checked) => setShowCustomId(checked === true)
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "custom-id",
									className: "text-[13px] cursor-pointer",
									children: t("Use custom target ID")
								})]
							}),
							showCustomId && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "target-id",
									className: "text-[12px]",
									children: t("Target ID")
								}), /* @__PURE__ */ jsx(Input, {
									id: "target-id",
									value: targetId,
									onChange: (e) => setTargetId(e.target.value),
									placeholder: t("Enter custom target ID"),
									className: "h-9 text-[13px] font-mono",
									maxLength: 36
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: createTarget.isPending,
							children: t("Create")
						})]
					})]
				})
			]
		})
	});
}
function SessionsTab({ projectId, userId }) {
	const t = useT();
	const { data, isLoading } = useUserSessions(projectId, userId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [sessionToDelete, setSessionToDelete] = useState(null);
	const deleteSession = useDeleteUserSession(projectId, userId);
	const sessions = data?.sessions || [];
	const handleDelete = (session) => {
		setSessionToDelete(session);
		setDeleteDialogOpen(true);
	};
	const confirmDelete = () => {
		if (sessionToDelete) deleteSession.mutate(sessionToDelete.$id, {
			onSuccess: () => {
				toast.success(t("Session has been deleted"));
				setDeleteDialogOpen(false);
				setSessionToDelete(null);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to delete session"));
			}
		});
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
		if (!provider) return "Unknown";
		return {
			email: "Email",
			phone: "Phone",
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
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (sessions.length === 0) return /* @__PURE__ */ jsx(EmptyState, {
		icon: Monitor,
		title: t("No active sessions"),
		description: t("This user doesn't have any active sessions at the moment."),
		isEmpty: true,
		variant: "card",
		iconSize: "md"
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
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
											className: "text-[10px] font-medium px-1.5 py-0 h-4",
											children: t("Current")
										}),
										hasMFA && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("div", {
												className: "flex items-center justify-center h-4 w-4 rounded bg-muted/50",
												children: /* @__PURE__ */ jsx(Shield, { className: "h-2.5 w-2.5 text-muted-foreground" })
											})
										}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", {
											className: "text-xs",
											children: [
												t("MFA"),
												": ",
												session.factors?.join(", ")
											]
										}) })] })
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 flex-wrap",
									children: [deviceInfo.secondary && /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: deviceInfo.secondary
									}), session.provider && /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [providerIcon ? /* @__PURE__ */ jsx("img", {
											src: `/icons/${providerIcon}`,
											alt: session.provider,
											className: `h-3 w-3 brightness-0 opacity-[0.55] dark:brightness-100 dark:opacity-100`,
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}) : /* @__PURE__ */ jsx(Key, { className: "h-3 w-3 text-muted-foreground/60" }), /* @__PURE__ */ jsx("span", {
											className: "text-[11px] text-muted-foreground/80 font-medium",
											children: t(getProviderName(session.provider))
										})]
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
							onClick: () => handleDelete(session),
							disabled: deleteSession.isPending,
							title: t("Revoke session"),
							"aria-label": t("Revoke session"),
							children: /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" })
						})
					})
				]
			}, session.$id);
		}) })] })
	}), /* @__PURE__ */ jsx(Dialog, {
		open: deleteDialogOpen,
		onOpenChange: (open) => {
			setDeleteDialogOpen(open);
			if (!open) setSessionToDelete(null);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete session") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this session? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => setDeleteDialogOpen(false),
					disabled: deleteSession.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					onClick: confirmDelete,
					disabled: deleteSession.isPending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
export { View as t };
