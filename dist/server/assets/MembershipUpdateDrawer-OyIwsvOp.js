import { n as useT } from "./translate-DZcqveGn.js";
import { Lv as useDeleteTeamMembership, Wv as useUpdateTeamMembership } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Copy, ExternalLink, FileJson, LayoutList, Link2, Plus, Square, Trash2, User2, Users, X } from "lucide-react";
function useHashScroll(enabled, hash, options = {
	behavior: "smooth",
	block: "start"
}) {
	useLayoutEffect(() => {
		if (!enabled || !hash) return;
		const id = hash.replace("#", "");
		if (!id) return;
		const el = document.getElementById(id);
		if (!el) return;
		const handle = requestAnimationFrame(() => {
			el.scrollIntoView(options);
		});
		return () => cancelAnimationFrame(handle);
	}, [
		enabled,
		hash,
		options
	]);
}
function MembershipContextMenu({ projectId, membership, children, onOpenMembership, onDeleted }) {
	const t = useT();
	const navigate = useNavigate();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useDeleteTeamMembership(projectId, membership.teamId);
	const membershipHref = buildConsoleUrl(`/projects/${projectId}/auth/teams/${membership.teamId}/members`);
	const hasUserName = !!membership.userName;
	const hasTeamName = !!membership.teamName;
	const handleDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate(membership.$id, {
			onSuccess: () => {
				toast.success(t("Membership removed"));
				onDeleted?.();
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to remove membership"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onOpenMembership?.(),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigate({
					to: "/projects/$projectId/auth/teams/$teamId",
					params: {
						projectId,
						teamId: membership.teamId
					}
				}),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Users }), t("Team")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigate({
					to: "/projects/$projectId/auth/users/$userId",
					params: {
						projectId,
						userId: membership.userId
					}
				}),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: User2 }), t("User")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", membership.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasUserName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("User name", membership.userName),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: User2 }), t("Copy user name")]
				}),
				hasTeamName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Team name", membership.teamName),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Users }), t("Copy team name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", membershipHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => membership),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(membershipHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(membershipHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] }), /* @__PURE__ */ jsx(Dialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Remove from team") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to remove this membership? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => setDeleteDialogOpen(false),
					disabled: deleteMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					onClick: handleDelete,
					disabled: deleteMutation.isPending,
					children: t("Remove")
				})]
			})]
		})
	})] });
}
function MembershipUpdateDrawer({ open, onOpenChange, membership, projectId, context }) {
	const t = useT();
	const teamId = membership?.teamId ?? "";
	const [roles, setRoles] = useState([]);
	const [roleInput, setRoleInput] = useState("");
	const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
	const updateMutation = useUpdateTeamMembership(projectId, teamId);
	const deleteMutation = useDeleteTeamMembership(projectId, teamId);
	useEffect(() => {
		if (open && membership) {
			setRoles(membership.roles ?? []);
			setRoleInput("");
			setDeleteConfirmOpen(false);
		}
	}, [open, membership]);
	const handleOpenChange = (newOpen) => {
		if (!updateMutation.isPending && !deleteMutation.isPending) {
			onOpenChange(newOpen);
			if (!newOpen) setDeleteConfirmOpen(false);
		}
	};
	const handleAddRole = () => {
		if (roleInput.trim() && !roles.includes(roleInput.trim())) {
			setRoles([...roles, roleInput.trim()]);
			setRoleInput("");
		}
	};
	const handleRemoveRole = (roleToRemove) => {
		setRoles(roles.filter((r) => r !== roleToRemove));
	};
	const handleUpdate = () => {
		if (!membership || roles.length === 0) return;
		updateMutation.mutate({
			membershipId: membership.$id,
			roles
		}, {
			onSuccess: () => {
				toast.success(t("Membership updated"));
				onOpenChange(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to update membership"));
			}
		});
	};
	const handleDelete = () => {
		if (!membership) return;
		deleteMutation.mutate(membership.$id, {
			onSuccess: () => {
				toast.success(t("Membership removed"));
				setDeleteConfirmOpen(false);
				onOpenChange(false);
			},
			onError: (error) => {
				toast.error(error.message || t("Failed to remove membership"));
			}
		});
	};
	const isPending = updateMutation.isPending || deleteMutation.isPending;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: t("Update membership"),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							membership && /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-3",
										children: /* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Membership")
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsxs("div", {
										className: "px-6 py-3 grid grid-cols-2 gap-x-4 gap-y-3",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Status")
												}), /* @__PURE__ */ jsxs("div", {
													className: "mt-0.5 flex flex-col gap-0.5",
													children: [/* @__PURE__ */ jsx(Badge, {
														variant: membership.confirm ? "active" : "pending",
														className: "text-[10px] shrink-0 w-fit",
														children: membership.confirm ? t("Active") : t("Pending")
													}), !membership.confirm && /* @__PURE__ */ jsx("span", {
														className: "text-[11px] text-muted-foreground",
														children: t("Invitation not yet accepted")
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Membership ID")
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-0.5",
													children: /* @__PURE__ */ jsx(CopyableId, {
														id: membership.$id,
														size: "xs"
													})
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Created")
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-0.5 text-[13px] text-foreground",
													children: /* @__PURE__ */ jsx(DateTooltip, { date: membership.$createdAt })
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Invited")
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-0.5 text-[13px] text-foreground",
													children: membership.invited ? /* @__PURE__ */ jsx(DateTooltip, { date: membership.invited }) : /* @__PURE__ */ jsx("span", {
														className: "text-muted-foreground",
														children: "-"
													})
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Joined")
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-0.5 text-[13px] text-foreground",
													children: membership.joined ? /* @__PURE__ */ jsx(DateTooltip, { date: membership.joined }) : /* @__PURE__ */ jsx("span", {
														className: "text-muted-foreground",
														children: "-"
													})
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider",
													children: t("Updated")
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-0.5 text-[13px] text-foreground",
													children: /* @__PURE__ */ jsx(DateTooltip, { date: membership.$updatedAt })
												})]
											})
										]
									})
								]
							}),
							membership && projectId && /* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/projects/$projectId/auth/teams/$teamId",
									params: {
										projectId,
										teamId: membership.teamId
									},
									className: "flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 transition-colors hover:bg-muted/50",
									children: [
										/* @__PURE__ */ jsx(InitialsAvatar, {
											name: membership.teamName,
											size: "md"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground truncate",
												children: membership.teamName || t("Team")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[12px] text-muted-foreground truncate",
												children: t("Team")
											})]
										}),
										/* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
									]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/projects/$projectId/auth/users/$userId",
									params: {
										projectId,
										userId: membership.userId
									},
									className: "flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 transition-colors hover:bg-muted/50",
									children: [
										/* @__PURE__ */ jsx(InitialsAvatar, {
											name: membership.userName || membership.userEmail || "User",
											size: "md"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground truncate",
												children: membership.userName || membership.userEmail || t("User")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[12px] text-muted-foreground truncate",
												children: t("User")
											})]
										}),
										/* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "membership-roles",
										children: t("Roles")
									}),
									/* @__PURE__ */ jsxs("div", {
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
									}),
									roles.length > 0 && /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-1.5",
										children: roles.map((role) => /* @__PURE__ */ jsxs(Badge, {
											variant: "info",
											className: "text-[10px] shrink-0 gap-1 pe-1",
											children: [role, /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => handleRemoveRole(role),
												className: "hover:text-foreground rounded p-0.5",
												children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
											})]
										}, role))
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Roles are used to manage access permissions."),
											" ",
											/* @__PURE__ */ jsx(DocsRouteLink, {
												className: "link-neutral",
												href: "/docs/advanced/platform/permissions",
												children: t("Learn more about permissions")
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden mt-6",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Remove from team")
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: t("Remove this membership. The user will lose access to this team. This action cannot be undone.")
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
										children: /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "destructive",
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: () => setDeleteConfirmOpen(true),
											disabled: isPending,
											children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Remove from team")]
										})
									})
								]
							})
						]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					onClick: handleUpdate,
					disabled: roles.length === 0 || isPending,
					children: t("Update")
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
		open: deleteConfirmOpen,
		onOpenChange: setDeleteConfirmOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Remove from team") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to remove"),
						" ",
						/* @__PURE__ */ jsxs("strong", { children: [
							context === "team" ? membership?.userName || membership?.userEmail || t("this member") : membership?.userName || membership?.userEmail || t("this user"),
							" · ",
							membership?.teamName || t("this team")
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
					onClick: () => setDeleteConfirmOpen(false),
					disabled: deleteMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "destructive",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleDelete,
					disabled: deleteMutation.isPending,
					children: t("Remove")
				})]
			})]
		})
	})] });
}
export { MembershipContextMenu as n, useHashScroll as r, MembershipUpdateDrawer as t };
