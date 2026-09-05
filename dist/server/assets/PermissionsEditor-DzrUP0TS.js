import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Bv as useProjectTeams, Vv as useProjectUsers, sy as useUserMemberships } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DsYcfNc5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { ArrowLeft, Building2, Code, Plus, Tag, User, Users, X } from "lucide-react";
var EMPTY_ACTIONS = {
	create: false,
	read: false,
	update: false,
	delete: false,
	write: false,
	execute: false
};
function hasAnyPermission(actions, mode) {
	if (mode.executeOnly) return actions.execute;
	if (mode.withWrite) return actions.read || actions.update || actions.delete || actions.write;
	return actions.create || actions.read || actions.update || actions.delete;
}
function parsePermissions(perms, mode) {
	const roleMap = /* @__PURE__ */ new Map();
	if (!Array.isArray(perms)) return roleMap;
	perms.forEach((perm) => {
		if (typeof perm !== "string") return;
		const match = perm.match(/(\w+)\(["']([^"']+)["']\)/);
		if (match) {
			const [, action, role] = match;
			if (!roleMap.has(role)) roleMap.set(role, { ...EMPTY_ACTIONS });
			const actions = roleMap.get(role);
			if (mode.executeOnly) {
				if (action === "execute") actions.execute = true;
			} else if (mode.withWrite) {
				if (action === "read" || action === "update" || action === "delete" || action === "write") actions[action] = true;
			} else if (action === "create" || action === "read" || action === "update" || action === "delete") actions[action] = true;
		} else if (mode.executeOnly && perm.trim()) {
			const role = perm.trim();
			if (!roleMap.has(role)) roleMap.set(role, { ...EMPTY_ACTIONS });
			roleMap.get(role).execute = true;
		}
	});
	return roleMap;
}
function exportPermissions(roleMap, mode) {
	const perms = [];
	if (mode.executeOnly) {
		roleMap.forEach((actions, role) => {
			if (actions.execute) perms.push(role);
		});
		return perms;
	}
	roleMap.forEach((actions, role) => {
		(mode.withWrite ? [
			"read",
			"update",
			"delete",
			"write"
		] : [
			...mode.withCreate ? ["create"] : [],
			"read",
			"update",
			"delete"
		]).forEach((action) => {
			if (actions[action]) perms.push(`${action}("${role}")`);
		});
	});
	return perms;
}
function permissionsEqual(a, b) {
	if (a.length !== b.length) return false;
	const sortedA = [...a].sort();
	const sortedB = [...b].sort();
	return sortedA.every((val, idx) => val === sortedB[idx]);
}
function RoleDisplay({ role, projectId }) {
	const t = useT();
	if (role === "any") return /* @__PURE__ */ jsx("span", {
		className: "text-[13px] font-medium text-foreground",
		children: t("Any")
	});
	if (role === "guests") return /* @__PURE__ */ jsx("span", {
		className: "text-[13px] font-medium text-foreground",
		children: t("All guests")
	});
	if (role === "users") return /* @__PURE__ */ jsx("span", {
		className: "text-[13px] font-medium text-foreground",
		children: t("All users")
	});
	const userMatch = role.match(/^user:([^/]+)(?:\/(.+))?$/);
	if (userMatch) {
		const [, userId, roleName] = userMatch;
		return /* @__PURE__ */ jsx(UserRoleDisplay, {
			userId,
			roleName,
			projectId
		});
	}
	const teamMatch = role.match(/^team:([^/]+)(?:\/(.+))?$/);
	if (teamMatch) {
		const [, teamId, roleName] = teamMatch;
		return /* @__PURE__ */ jsx(TeamRoleDisplay, {
			teamId,
			roleName,
			projectId
		});
	}
	const memberMatch = role.match(/^member:(.+)$/);
	if (memberMatch) {
		const [, membershipId] = memberMatch;
		return /* @__PURE__ */ jsx(MemberRoleDisplay, { membershipId });
	}
	const labelMatch = role.match(/^label:(.+)$/);
	if (labelMatch) {
		const [, labelName] = labelMatch;
		return /* @__PURE__ */ jsx(LabelRoleDisplay, { labelName });
	}
	return /* @__PURE__ */ jsx(CustomRoleDisplay, { role });
}
function UserRoleDisplay({ userId, projectId }) {
	const t = useT();
	const { users } = useProjectUsers(projectId || null, 0, 100, "");
	const user = users.find((u) => u.$id === userId);
	const displayName = user?.name || user?.email || user?.phone || userId;
	const initials = user?.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : user?.email ? user.email[0].toUpperCase() : "?";
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 min-w-0",
		children: [/* @__PURE__ */ jsxs(Avatar, {
			className: "size-6 shrink-0",
			children: [user?.avatar && /* @__PURE__ */ jsx(AvatarImage, {
				src: user.avatar,
				alt: displayName
			}), /* @__PURE__ */ jsx(AvatarFallback, {
				className: "bg-muted text-muted-foreground text-[10px]",
				children: initials
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground truncate",
					children: displayName
				}), /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0",
					children: t("User")
				})]
			}), userId && /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground truncate",
				children: userId
			})]
		})]
	});
}
function TeamRoleDisplay({ teamId, projectId }) {
	const t = useT();
	const { teams } = useProjectTeams(projectId || null, 0, 100, "");
	const displayName = teams.find((item) => item.id === teamId)?.name || teamId;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 min-w-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "size-6 shrink-0 rounded-full bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Building2, { className: "size-3.5 text-muted-foreground" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground truncate",
					children: displayName
				}), /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0",
					children: t("Team")
				})]
			}), teamId && /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground truncate",
				children: teamId
			})]
		})]
	});
}
function LabelRoleDisplay({ labelName }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 min-w-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "size-6 shrink-0 rounded-full bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Tag, { className: "size-3.5 text-muted-foreground" })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 min-w-0",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground truncate max-w-[120px] sm:max-w-[200px]",
					children: labelName
				}), /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0",
					children: t("Label")
				})]
			})
		})]
	});
}
function MemberRoleDisplay({ membershipId }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 min-w-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "size-6 shrink-0 rounded-full bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Users, { className: "size-3.5 text-muted-foreground" })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 min-w-0",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground truncate max-w-[120px] sm:max-w-[200px]",
					children: membershipId
				}), /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0",
					children: t("Member")
				})]
			})
		})]
	});
}
function CustomRoleDisplay({ role }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 min-w-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "size-6 shrink-0 rounded-full bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Code, { className: "size-3.5 text-muted-foreground" })
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 min-w-0",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground truncate max-w-[120px] sm:max-w-[200px]",
					children: role
				}), /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0",
					children: t("Custom")
				})]
			})
		})]
	});
}
function UserSelectionModal({ open, onOpenChange, onSelect, projectId, existingRoles }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [selectedUserIds, setSelectedUserIds] = useState(/* @__PURE__ */ new Set());
	const [page, setPage] = useState(0);
	const { users, isLoading } = useProjectUsers(projectId || null, page, 25, search);
	const isUserAlreadyAdded = (userId) => {
		return existingRoles?.has(`user:${userId}`) || false;
	};
	const handleToggleUser = (userId) => {
		const newSelected = new Set(selectedUserIds);
		if (newSelected.has(userId)) newSelected.delete(userId);
		else newSelected.add(userId);
		setSelectedUserIds(newSelected);
	};
	const handleAdd = () => {
		const userIds = Array.from(selectedUserIds);
		if (userIds.length > 0) {
			onSelect(userIds);
			setSelectedUserIds(/* @__PURE__ */ new Set());
			setSearch("");
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		setSelectedUserIds(/* @__PURE__ */ new Set());
		setSearch("");
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Select Users") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Choose one or more users to add permissions for.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx(Input, {
							placeholder: t("Search users by name, email, or ID..."),
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							}
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[300px] overflow-y-auto space-y-1",
							children: isLoading ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading users...")
							}) : users.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: User,
								isEmpty: !search,
								hasFilters: !!search,
								className: "py-8"
							}) : users.map((user) => {
								const isSelected = selectedUserIds.has(user.$id);
								const isAlreadyAdded = isUserAlreadyAdded(user.$id);
								const displayName = user.name || user.email || user.phone || user.$id;
								const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : user.email ? user.email[0].toUpperCase() : "?";
								return /* @__PURE__ */ jsxs("div", {
									onClick: () => !isAlreadyAdded && handleToggleUser(user.$id),
									className: cn("flex items-center gap-3 rounded-lg border p-3 transition-colors", isAlreadyAdded ? "border-border bg-muted/30 opacity-50 cursor-not-allowed" : isSelected ? "border-primary bg-primary/5 cursor-pointer" : "border-border hover:bg-muted/50 cursor-pointer"),
									children: [
										/* @__PURE__ */ jsx(Checkbox, {
											checked: isSelected,
											onCheckedChange: () => {
												if (!isAlreadyAdded) handleToggleUser(user.$id);
											},
											disabled: isAlreadyAdded,
											onClick: (e) => e.stopPropagation(),
											className: "cursor-pointer"
										}),
										/* @__PURE__ */ jsxs(Avatar, {
											className: "size-8",
											children: [user.avatar && /* @__PURE__ */ jsx(AvatarImage, {
												src: user.avatar,
												alt: displayName
											}), /* @__PURE__ */ jsx(AvatarFallback, {
												className: "bg-muted text-muted-foreground text-xs",
												children: initials
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-sm font-medium truncate",
												children: displayName
											}), user.email && /* @__PURE__ */ jsx("p", {
												className: "text-xs text-muted-foreground truncate",
												children: user.email
											})]
										})
									]
								}, user.$id);
							})
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: handleAdd,
						disabled: selectedUserIds.size === 0,
						children: [
							t("Add"),
							" ",
							selectedUserIds.size > 0 ? `(${selectedUserIds.size})` : ""
						]
					})]
				})
			]
		})
	});
}
function TeamSelectionModal({ open, onOpenChange, onSelect, projectId, existingRoles }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [selectedTeamIds, setSelectedTeamIds] = useState(/* @__PURE__ */ new Set());
	const [page, setPage] = useState(0);
	const { teams, isLoading } = useProjectTeams(projectId || null, page, 25, search);
	const isTeamAlreadyAdded = (teamId) => {
		return existingRoles?.has(`team:${teamId}`) || false;
	};
	const handleToggleTeam = (teamId) => {
		const newSelected = new Set(selectedTeamIds);
		if (newSelected.has(teamId)) newSelected.delete(teamId);
		else newSelected.add(teamId);
		setSelectedTeamIds(newSelected);
	};
	const handleAdd = () => {
		const teamIds = Array.from(selectedTeamIds);
		if (teamIds.length > 0) {
			onSelect(teamIds);
			setSelectedTeamIds(/* @__PURE__ */ new Set());
			setSearch("");
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		setSelectedTeamIds(/* @__PURE__ */ new Set());
		setSearch("");
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Select Teams") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Choose one or more teams to add permissions for.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx(Input, {
							placeholder: t("Search teams by name or ID..."),
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							}
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[300px] overflow-y-auto space-y-1",
							children: isLoading ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading teams...")
							}) : teams.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Users,
								isEmpty: !search,
								hasFilters: !!search,
								className: "py-8"
							}) : teams.map((team) => {
								const isSelected = selectedTeamIds.has(team.id);
								const isAlreadyAdded = isTeamAlreadyAdded(team.id);
								return /* @__PURE__ */ jsxs("div", {
									onClick: () => !isAlreadyAdded && handleToggleTeam(team.id),
									className: cn("flex items-center gap-3 rounded-lg border p-3 transition-colors", isAlreadyAdded ? "border-border bg-muted/30 opacity-50 cursor-not-allowed" : isSelected ? "border-primary bg-primary/5 cursor-pointer" : "border-border hover:bg-muted/50 cursor-pointer"),
									children: [
										/* @__PURE__ */ jsx(Checkbox, {
											checked: isSelected,
											onCheckedChange: () => {
												if (!isAlreadyAdded) handleToggleTeam(team.id);
											},
											disabled: isAlreadyAdded,
											onClick: (e) => e.stopPropagation(),
											className: "cursor-pointer"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "size-8 rounded-full bg-muted flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(Building2, { className: "size-4 text-muted-foreground" })
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-sm font-medium truncate",
												children: team.name
											}), /* @__PURE__ */ jsx("p", {
												className: "text-xs text-muted-foreground truncate",
												children: team.id
											})]
										})
									]
								}, team.id);
							})
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: handleAdd,
						disabled: selectedTeamIds.size === 0,
						children: [
							t("Add"),
							" ",
							selectedTeamIds.size > 0 ? `(${selectedTeamIds.size})` : ""
						]
					})]
				})
			]
		})
	});
}
function MemberSelectionModal({ open, onOpenChange, onSelect, projectId, existingRoles }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);
	const [selectedMembershipIds, setSelectedMembershipIds] = useState(/* @__PURE__ */ new Set());
	const [page, setPage] = useState(0);
	const { users, isLoading } = useProjectUsers(projectId || null, page, 25, search);
	const { data: membershipsData, isLoading: isLoadingMemberships } = useUserMemberships(projectId || null, selectedUser?.$id || null);
	const memberships = membershipsData?.memberships || [];
	const isMembershipAlreadyAdded = (membershipId) => {
		return existingRoles?.has(`member:${membershipId}`) || false;
	};
	const handleToggleMembership = (membershipId) => {
		const newSelected = new Set(selectedMembershipIds);
		if (newSelected.has(membershipId)) newSelected.delete(membershipId);
		else newSelected.add(membershipId);
		setSelectedMembershipIds(newSelected);
	};
	const resetState = () => {
		setSelectedMembershipIds(/* @__PURE__ */ new Set());
		setSelectedUser(null);
		setSearch("");
		setPage(0);
	};
	const handleAdd = () => {
		const membershipIds = Array.from(selectedMembershipIds);
		if (membershipIds.length > 0) {
			onSelect(membershipIds.map((membershipId) => `member:${membershipId}`));
			resetState();
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		resetState();
		onOpenChange(false);
	};
	const handleBack = () => {
		setSelectedUser(null);
		setSelectedMembershipIds(/* @__PURE__ */ new Set());
	};
	const selectedUserName = selectedUser?.name || selectedUser?.email || selectedUser?.phone || selectedUser?.$id || "";
	const selectedUserInitials = selectedUser?.name ? selectedUser.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : selectedUser?.email ? selectedUser.email[0].toUpperCase() : "?";
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) resetState();
			onOpenChange(next);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Select Memberships") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: selectedUser ? t("Choose one or more team memberships to add permissions for.") : t("Choose a user to see the team memberships you can add.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: selectedUser ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3",
							children: [
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8 shrink-0",
									onClick: handleBack,
									"aria-label": t("Back to users"),
									children: /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4 rtl:-scale-x-100" })
								}),
								/* @__PURE__ */ jsxs(Avatar, {
									className: "size-8",
									children: [selectedUser.avatar && /* @__PURE__ */ jsx(AvatarImage, {
										src: selectedUser.avatar,
										alt: selectedUserName
									}), /* @__PURE__ */ jsx(AvatarFallback, {
										className: "bg-muted text-muted-foreground text-xs",
										children: selectedUserInitials
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm font-medium truncate",
										children: selectedUserName
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground truncate",
										children: selectedUser.$id
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[300px] overflow-y-auto space-y-1",
							children: isLoadingMemberships ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading memberships...")
							}) : memberships.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Users,
								title: t("No memberships available"),
								description: t("This user is not a member of any teams."),
								isEmpty: true,
								className: "py-8"
							}) : memberships.map((membership) => {
								const isSelected = selectedMembershipIds.has(membership.$id);
								const isAlreadyAdded = isMembershipAlreadyAdded(membership.$id);
								return /* @__PURE__ */ jsxs("div", {
									onClick: () => !isAlreadyAdded && handleToggleMembership(membership.$id),
									className: cn("flex items-center gap-3 rounded-lg border p-3 transition-colors", isAlreadyAdded ? "border-border bg-muted/30 opacity-50 cursor-not-allowed" : isSelected ? "border-primary bg-primary/5 cursor-pointer" : "border-border hover:bg-muted/50 cursor-pointer"),
									children: [
										/* @__PURE__ */ jsx(Checkbox, {
											checked: isSelected,
											onCheckedChange: () => {
												if (!isAlreadyAdded) handleToggleMembership(membership.$id);
											},
											disabled: isAlreadyAdded,
											onClick: (e) => e.stopPropagation(),
											className: "cursor-pointer"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "size-8 rounded-full bg-muted flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(Users, { className: "size-4 text-muted-foreground" })
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-sm font-medium truncate",
												children: membership.teamName || membership.teamId
											}), /* @__PURE__ */ jsx("p", {
												className: "text-xs text-muted-foreground truncate",
												children: membership.$id
											})]
										})
									]
								}, membership.$id);
							})
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Input, {
							placeholder: t("Search users by name, email, or ID..."),
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							}
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[300px] overflow-y-auto space-y-1",
							children: isLoading ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading users...")
							}) : users.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: User,
								isEmpty: !search,
								hasFilters: !!search,
								className: "py-8"
							}) : users.map((user) => {
								const displayName = user.name || user.email || user.phone || user.$id;
								const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : user.email ? user.email[0].toUpperCase() : "?";
								return /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setSelectedUser(user),
									className: "w-full text-start flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50 cursor-pointer",
									children: [/* @__PURE__ */ jsxs(Avatar, {
										className: "size-8",
										children: [user.avatar && /* @__PURE__ */ jsx(AvatarImage, {
											src: user.avatar,
											alt: displayName
										}), /* @__PURE__ */ jsx(AvatarFallback, {
											className: "bg-muted text-muted-foreground text-xs",
											children: initials
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-sm font-medium truncate",
											children: displayName
										}), user.email && /* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground truncate",
											children: user.email
										})]
									})]
								}, user.$id);
							})
						})] })
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: handleAdd,
						disabled: !selectedUser || selectedMembershipIds.size === 0,
						children: [
							t("Add"),
							" ",
							selectedMembershipIds.size > 0 ? `(${selectedMembershipIds.size})` : ""
						]
					})]
				})
			]
		})
	});
}
function LabelInputModal({ open, onOpenChange, onAdd }) {
	const t = useT();
	const [labelName, setLabelName] = useState("");
	const handleAdd = () => {
		if (labelName.trim()) {
			onAdd(labelName.trim());
			setLabelName("");
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		setLabelName("");
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add Label") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Enter a label name to create a label-based permission.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "label-name",
								children: t("Label Name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "label-name",
								placeholder: t("e.g., premium, admin, moderator"),
								value: labelName,
								onChange: (e) => setLabelName(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && labelName.trim()) handleAdd();
								}
							})]
						})
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleAdd,
						disabled: !labelName.trim(),
						children: t("Add")
					})]
				})
			]
		})
	});
}
function isValidPermissionFormat(value) {
	const trimmed = value.trim();
	if (!trimmed) return false;
	if (/^user:[^/]+(\/.+)?$/.test(trimmed)) return true;
	if (/^team:[^/]+(\/.+)?$/.test(trimmed)) return true;
	if (/^member:[^/]+$/.test(trimmed)) return true;
	return false;
}
function CustomRoleInputModal({ open, onOpenChange, onAdd }) {
	const t = useT();
	const [role, setRole] = useState("");
	const trimmed = role.trim();
	const isValid = isValidPermissionFormat(trimmed);
	const showFormatError = trimmed.length > 0 && !isValid;
	const handleAdd = () => {
		if (isValid) {
			onAdd(trimmed);
			setRole("");
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		setRole("");
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add by role string") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Grant access using a user, team, or membership ID. Use"),
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-muted px-1 py-0.5 text-[12px]",
								children: "user:[USER_ID]"
							}),
							",",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-muted px-1 py-0.5 text-[12px]",
								children: "team:[TEAM_ID]/[ROLE]"
							}),
							" ",
							t("or"),
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-muted px-1 py-0.5 text-[12px]",
								children: "member:[MEMBERSHIP_ID]"
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "custom-role",
									children: t("Permission string")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "custom-role",
									placeholder: "user:USER_ID, team:TEAM_ID/ROLE or member:MEMBERSHIP_ID",
									value: role,
									onChange: (e) => setRole(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && isValid) handleAdd();
									},
									className: showFormatError ? "border-destructive" : ""
								}),
								showFormatError && /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-destructive flex flex-wrap items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx("span", { children: t("Use format") }),
										/* @__PURE__ */ jsx("code", {
											className: "rounded bg-destructive/10 px-1 py-0.5",
											children: "user:USER_ID"
										}),
										/* @__PURE__ */ jsx("span", { children: "," }),
										/* @__PURE__ */ jsx("code", {
											className: "rounded bg-destructive/10 px-1 py-0.5",
											children: "team:TEAM_ID/ROLE"
										}),
										/* @__PURE__ */ jsx("span", { children: t("or") }),
										/* @__PURE__ */ jsx("code", {
											className: "rounded bg-destructive/10 px-1 py-0.5",
											children: "member:MEMBERSHIP_ID"
										})
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleAdd,
						disabled: !isValid,
						children: t("Add")
					})]
				})
			]
		})
	});
}
const PermissionsEditor = forwardRef(function PermissionsEditor$1({ permissions, onPermissionsChange, deferChanges = false, withCreate = false, withWrite = false, executeOnly = false, projectId: projectIdProp, compact = false }, ref) {
	const t = useT();
	const params = useParams({ strict: false });
	const projectId = projectIdProp || params.projectId;
	const permissionMode = useMemo(() => ({
		executeOnly,
		withWrite
	}), [executeOnly, withWrite]);
	const exportMode = useMemo(() => ({
		executeOnly,
		withWrite,
		withCreate
	}), [
		executeOnly,
		withWrite,
		withCreate
	]);
	const d = compact ? {
		pad: "px-2 py-1.5",
		head: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
		roleMin: "min-w-[120px]",
		actMin: "min-w-[48px]",
		rmCol: "w-[36px]",
		rmBtn: "size-7",
		rmIcon: "size-3.5",
		stack: "space-y-2",
		emptyY: "py-6",
		emptyGap: "gap-2"
	} : {
		pad: "px-4 py-3",
		head: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
		roleMin: "min-w-[220px]",
		actMin: "min-w-[64px]",
		rmCol: "w-[40px]",
		rmBtn: "size-8",
		rmIcon: "size-4",
		stack: "space-y-4",
		emptyY: "py-12",
		emptyGap: "gap-4"
	};
	const [permissionsMap, setPermissionsMap] = useState(/* @__PURE__ */ new Map());
	const [, setRolesWithPermissions] = useState(/* @__PURE__ */ new Set());
	const newlyAddedRolesRef = useRef(/* @__PURE__ */ new Set());
	const [userModalOpen, setUserModalOpen] = useState(false);
	const [teamModalOpen, setTeamModalOpen] = useState(false);
	const [memberModalOpen, setMemberModalOpen] = useState(false);
	const [labelModalOpen, setLabelModalOpen] = useState(false);
	const [customModalOpen, setCustomModalOpen] = useState(false);
	const isInitialMountRef = useRef(true);
	const lastExportedRef = useRef("");
	useEffect(() => {
		const permissionsStr = JSON.stringify([...permissions].sort());
		if (isInitialMountRef.current) {
			isInitialMountRef.current = false;
			if (permissions.length > 0) lastExportedRef.current = permissionsStr;
			const newMap$1 = parsePermissions(permissions, permissionMode);
			setPermissionsMap(newMap$1);
			const rolesWithPerms = /* @__PURE__ */ new Set();
			newMap$1.forEach((actions, role) => {
				if (hasAnyPermission(actions, permissionMode)) rolesWithPerms.add(role);
			});
			setRolesWithPermissions(rolesWithPerms);
			return;
		}
		if (lastExportedRef.current && lastExportedRef.current === permissionsStr) return;
		if (!lastExportedRef.current && permissions.length > 0) {
			lastExportedRef.current = permissionsStr;
			const newMap$1 = parsePermissions(permissions, permissionMode);
			setPermissionsMap(newMap$1);
			const rolesWithPerms = /* @__PURE__ */ new Set();
			newMap$1.forEach((actions, role) => {
				if (hasAnyPermission(actions, permissionMode)) rolesWithPerms.add(role);
			});
			setRolesWithPermissions(rolesWithPerms);
			return;
		}
		const newMap = parsePermissions(permissions, permissionMode);
		setPermissionsMap((prevMap) => {
			if (prevMap.size === 0) {
				const rolesWithPerms$1 = /* @__PURE__ */ new Set();
				newMap.forEach((actions, role) => {
					if (hasAnyPermission(actions, permissionMode)) rolesWithPerms$1.add(role);
				});
				setRolesWithPermissions(rolesWithPerms$1);
				return newMap;
			}
			const mergedMap = new Map(newMap);
			prevMap.forEach((actions, role) => {
				if (!mergedMap.has(role)) mergedMap.set(role, { ...actions });
				else {
					const parsedActions = mergedMap.get(role);
					mergedMap.set(role, { ...parsedActions });
				}
			});
			const rolesWithPerms = /* @__PURE__ */ new Set();
			mergedMap.forEach((actions, role) => {
				if (hasAnyPermission(actions, permissionMode)) rolesWithPerms.add(role);
			});
			setRolesWithPermissions(rolesWithPerms);
			return mergedMap;
		});
	}, [permissions, permissionMode]);
	useImperativeHandle(ref, () => ({ getPermissions: () => exportPermissions(permissionsMap, exportMode) }), [permissionsMap, exportMode]);
	useEffect(() => {
		if (deferChanges || !onPermissionsChange) return;
		if (isInitialMountRef.current) return;
		const exported = exportPermissions(permissionsMap, exportMode);
		const exportedStr = JSON.stringify([...exported].sort());
		if (!permissionsEqual(exported, permissions) && lastExportedRef.current !== exportedStr) {
			lastExportedRef.current = exportedStr;
			onPermissionsChange(exported);
		}
	}, [
		permissionsMap,
		permissions,
		onPermissionsChange,
		exportMode,
		deferChanges
	]);
	const handlePermissionChange = useCallback((role, action, enabled) => {
		setPermissionsMap((prev) => {
			const newMap = new Map(prev);
			if (!newMap.has(role)) newMap.set(role, { ...EMPTY_ACTIONS });
			const actions = newMap.get(role);
			const hadPermissionsBefore = hasAnyPermission(actions, permissionMode);
			actions[action] = enabled;
			if (enabled) {
				setRolesWithPermissions((prev$1) => new Set(prev$1).add(role));
				newlyAddedRolesRef.current.delete(role);
			}
			const isNewlyAdded = newlyAddedRolesRef.current.has(role);
			if (!hasAnyPermission(actions, permissionMode) && hadPermissionsBefore && !isNewlyAdded) {
				newMap.delete(role);
				setRolesWithPermissions((prev$1) => {
					const newSet = new Set(prev$1);
					newSet.delete(role);
					return newSet;
				});
			}
			return newMap;
		});
	}, [permissionMode]);
	const handleRemoveRole = useCallback((role) => {
		setPermissionsMap((prev) => {
			const newMap = new Map(prev);
			newMap.delete(role);
			return newMap;
		});
		setRolesWithPermissions((prev) => {
			const newSet = new Set(prev);
			newSet.delete(role);
			return newSet;
		});
		newlyAddedRolesRef.current.delete(role);
	}, []);
	const handleAddRole = useCallback((role) => {
		if (permissionsMap.has(role)) return;
		setPermissionsMap((prev) => {
			const newMap = new Map(prev);
			newMap.set(role, {
				...EMPTY_ACTIONS,
				...executeOnly ? { execute: true } : {}
			});
			return newMap;
		});
		if (executeOnly) setRolesWithPermissions((prev) => new Set(prev).add(role));
		else newlyAddedRolesRef.current.add(role);
	}, [permissionsMap, executeOnly]);
	const handleAddUsers = useCallback((userIds) => {
		userIds.forEach((userId) => {
			handleAddRole(`user:${userId}`);
		});
	}, [handleAddRole]);
	const handleAddTeams = useCallback((teamIds) => {
		teamIds.forEach((teamId) => {
			handleAddRole(`team:${teamId}`);
		});
	}, [handleAddRole]);
	const handleAddMembers = useCallback((roles$1) => {
		roles$1.forEach((role) => {
			handleAddRole(role);
		});
	}, [handleAddRole]);
	const handleAddLabel = useCallback((labelName) => {
		handleAddRole(`label:${labelName}`);
	}, [handleAddRole]);
	const handleAddCustom = useCallback((role) => {
		handleAddRole(role);
	}, [handleAddRole]);
	const roles = Array.from(permissionsMap.keys());
	const hasAny = permissionsMap.has("any");
	const hasGuests = permissionsMap.has("guests");
	const hasUsers = permissionsMap.has("users");
	if (roles.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col items-center justify-center", d.emptyGap, d.emptyY),
		children: [
			/* @__PURE__ */ jsx(AddRoleDropdown, {
				onAddSpecialRole: handleAddRole,
				onOpenUserModal: () => setUserModalOpen(true),
				onOpenTeamModal: () => setTeamModalOpen(true),
				onOpenMemberModal: () => setMemberModalOpen(true),
				onOpenLabelModal: () => setLabelModalOpen(true),
				onOpenCustomModal: () => setCustomModalOpen(true),
				hasAny,
				hasGuests,
				hasUsers,
				emptyState: true
			}),
			/* @__PURE__ */ jsx("p", {
				className: cn("text-muted-foreground", compact ? "text-[12px]" : "text-sm"),
				children: executeOnly ? t("Add roles to choose who can execute") : t("Add a role to get started")
			}),
			/* @__PURE__ */ jsx(UserSelectionModal, {
				open: userModalOpen,
				onOpenChange: setUserModalOpen,
				onSelect: handleAddUsers,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(TeamSelectionModal, {
				open: teamModalOpen,
				onOpenChange: setTeamModalOpen,
				onSelect: handleAddTeams,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(MemberSelectionModal, {
				open: memberModalOpen,
				onOpenChange: setMemberModalOpen,
				onSelect: handleAddMembers,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(LabelInputModal, {
				open: labelModalOpen,
				onOpenChange: setLabelModalOpen,
				onAdd: handleAddLabel
			}),
			/* @__PURE__ */ jsx(CustomRoleInputModal, {
				open: customModalOpen,
				onOpenChange: setCustomModalOpen,
				onAdd: handleAddCustom
			})
		]
	});
	if (executeOnly) {
		const rolesWithExecute = roles.filter((role) => permissionsMap.get(role)?.execute);
		return /* @__PURE__ */ jsxs("div", {
			className: d.stack,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: rolesWithExecute.map((role) => /* @__PURE__ */ jsxs("div", {
						className: cn("flex items-center gap-2 rounded-lg border border-border bg-muted/30 pe-1 min-w-0", compact ? "ps-2 py-1.5" : "ps-3 py-2"),
						children: [/* @__PURE__ */ jsx(RoleDisplay, {
							role,
							projectId
						}), /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: cn(compact ? "size-7" : "size-8", "shrink-0"),
							onClick: () => handleRemoveRole(role),
							"aria-label": `${t("Remove")} ${role} ${t("from execute list")}`,
							children: /* @__PURE__ */ jsx(X, { className: compact ? "size-3.5" : "size-4" })
						})]
					}, role))
				}),
				/* @__PURE__ */ jsx(AddRoleDropdown, {
					onAddSpecialRole: handleAddRole,
					onOpenUserModal: () => setUserModalOpen(true),
					onOpenTeamModal: () => setTeamModalOpen(true),
					onOpenMemberModal: () => setMemberModalOpen(true),
					onOpenLabelModal: () => setLabelModalOpen(true),
					onOpenCustomModal: () => setCustomModalOpen(true),
					hasAny,
					hasGuests,
					hasUsers
				}),
				/* @__PURE__ */ jsx(UserSelectionModal, {
					open: userModalOpen,
					onOpenChange: setUserModalOpen,
					onSelect: handleAddUsers,
					projectId,
					existingRoles: new Set(permissionsMap.keys())
				}),
				/* @__PURE__ */ jsx(TeamSelectionModal, {
					open: teamModalOpen,
					onOpenChange: setTeamModalOpen,
					onSelect: handleAddTeams,
					projectId,
					existingRoles: new Set(permissionsMap.keys())
				}),
				/* @__PURE__ */ jsx(MemberSelectionModal, {
					open: memberModalOpen,
					onOpenChange: setMemberModalOpen,
					onSelect: handleAddMembers,
					projectId,
					existingRoles: new Set(permissionsMap.keys())
				}),
				/* @__PURE__ */ jsx(LabelInputModal, {
					open: labelModalOpen,
					onOpenChange: setLabelModalOpen,
					onAdd: handleAddLabel
				}),
				/* @__PURE__ */ jsx(CustomRoleInputModal, {
					open: customModalOpen,
					onOpenChange: setCustomModalOpen,
					onAdd: handleAddCustom
				})
			]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: d.stack,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, d.roleMin),
							children: t("Role")
						}),
						withCreate && /* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, "text-center", d.actMin),
							children: t("Create")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, "text-center", d.actMin),
							children: t("Read")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, "text-center", d.actMin),
							children: t("Update")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, "text-center", d.actMin),
							children: t("Delete")
						}),
						withWrite && /* @__PURE__ */ jsx(TableHead, {
							className: cn(d.pad, d.head, "text-center", d.actMin),
							children: t("Write")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: cn(d.pad, d.head, d.rmCol) })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: roles.map((role) => {
					const actions = permissionsMap.get(role);
					return /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.roleMin),
							children: /* @__PURE__ */ jsx(RoleDisplay, {
								role,
								projectId
							})
						}),
						withCreate && /* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.actMin, "text-center"),
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: actions.create,
								onCheckedChange: (checked) => handlePermissionChange(role, "create", checked === true),
								"aria-label": `${t("Create permission for")} ${role}`
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.actMin, "text-center"),
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: actions.read,
								onCheckedChange: (checked) => handlePermissionChange(role, "read", checked === true),
								"aria-label": `${t("Read permission for")} ${role}`
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.actMin, "text-center"),
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: actions.update,
								onCheckedChange: (checked) => handlePermissionChange(role, "update", checked === true),
								"aria-label": `${t("Update permission for")} ${role}`
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.actMin, "text-center"),
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: actions.delete,
								onCheckedChange: (checked) => handlePermissionChange(role, "delete", checked === true),
								"aria-label": `${t("Delete permission for")} ${role}`
							})
						}),
						withWrite && /* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.actMin, "text-center"),
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: actions.write,
								onCheckedChange: (checked) => handlePermissionChange(role, "write", checked === true),
								"aria-label": `${t("Write permission for")} ${role}`
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: cn(d.pad, d.rmCol),
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "icon",
								className: d.rmBtn,
								onClick: () => handleRemoveRole(role),
								"aria-label": `${t("Remove")} ${role} ${t("permissions")}`,
								children: /* @__PURE__ */ jsx(X, { className: d.rmIcon })
							})
						})
					] }, role);
				}) })] })
			}),
			/* @__PURE__ */ jsx(AddRoleDropdown, {
				onAddSpecialRole: handleAddRole,
				onOpenUserModal: () => setUserModalOpen(true),
				onOpenTeamModal: () => setTeamModalOpen(true),
				onOpenMemberModal: () => setMemberModalOpen(true),
				onOpenLabelModal: () => setLabelModalOpen(true),
				onOpenCustomModal: () => setCustomModalOpen(true),
				hasAny,
				hasGuests,
				hasUsers
			}),
			/* @__PURE__ */ jsx(UserSelectionModal, {
				open: userModalOpen,
				onOpenChange: setUserModalOpen,
				onSelect: handleAddUsers,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(TeamSelectionModal, {
				open: teamModalOpen,
				onOpenChange: setTeamModalOpen,
				onSelect: handleAddTeams,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(MemberSelectionModal, {
				open: memberModalOpen,
				onOpenChange: setMemberModalOpen,
				onSelect: handleAddMembers,
				projectId,
				existingRoles: new Set(permissionsMap.keys())
			}),
			/* @__PURE__ */ jsx(LabelInputModal, {
				open: labelModalOpen,
				onOpenChange: setLabelModalOpen,
				onAdd: handleAddLabel
			}),
			/* @__PURE__ */ jsx(CustomRoleInputModal, {
				open: customModalOpen,
				onOpenChange: setCustomModalOpen,
				onAdd: handleAddCustom
			})
		]
	});
});
function AddRoleDropdown({ onAddSpecialRole, onOpenUserModal, onOpenTeamModal, onOpenMemberModal, onOpenLabelModal, onOpenCustomModal, hasAny, hasGuests, hasUsers, emptyState = false }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: emptyState ? /* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			size: "icon",
			className: "size-10",
			"aria-label": t("Add role"),
			children: /* @__PURE__ */ jsx(Plus, { className: "size-4" })
		}) : /* @__PURE__ */ jsxs(Button, {
			variant: "secondary",
			size: "sm",
			children: [/* @__PURE__ */ jsx(Plus, { className: "size-4 me-1.5" }), t("Add role")]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "start",
		className: "w-56",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => onAddSpecialRole("any"),
				disabled: hasAny,
				children: /* @__PURE__ */ jsx("span", { children: t("Any") })
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => onAddSpecialRole("guests"),
				disabled: hasGuests,
				children: /* @__PURE__ */ jsx("span", { children: t("All guests") })
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => onAddSpecialRole("users"),
				disabled: hasUsers,
				children: /* @__PURE__ */ jsx("span", { children: t("All users") })
			}),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onOpenUserModal),
				children: [/* @__PURE__ */ jsx(User, { className: "size-4 me-2" }), /* @__PURE__ */ jsx("span", { children: t("Select users") })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onOpenTeamModal),
				children: [/* @__PURE__ */ jsx(Building2, { className: "size-4 me-2" }), /* @__PURE__ */ jsx("span", { children: t("Select teams") })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onOpenMemberModal),
				children: [/* @__PURE__ */ jsx(Users, { className: "size-4 me-2" }), /* @__PURE__ */ jsx("span", { children: t("Select memberships") })]
			}),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onOpenLabelModal),
				children: [/* @__PURE__ */ jsx(Tag, { className: "size-4 me-2" }), /* @__PURE__ */ jsx("span", { children: t("Label") })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onOpenCustomModal),
				children: [/* @__PURE__ */ jsx(Code, { className: "size-4 me-2" }), /* @__PURE__ */ jsx("span", { children: t("Custom") })]
			})
		]
	})] });
}
export { PermissionsEditor as t };
