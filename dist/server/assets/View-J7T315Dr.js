import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { Fv as useDeleteProjectTeam, Gv as useUpdateTeamName, Hv as useTeam, Kv as useUpdateTeamPrefs, Lv as useDeleteTeamMembership, Mv as useCreateTeamMembership, Uv as useTeamMemberships, lv as fetchUser } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as ResourceSearchPopover } from "./ResourceSearchPopover-bBzpMw-c.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { n as MembershipContextMenu, r as useHashScroll, t as MembershipUpdateDrawer } from "./MembershipUpdateDrawer-OyIwsvOp.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChevronDown, Info, Loader2, Plus, Trash2, User, Users, X } from "lucide-react";
function TeamOverview() {
	const t = useT();
	const { projectId, teamId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const { data: team, isLoading } = useTeam(projectId, teamId);
	const updateNameMutation = useUpdateTeamName(projectId, teamId);
	const updatePrefsMutation = useUpdateTeamPrefs(projectId, teamId);
	const deleteTeamMutation = useDeleteProjectTeam(projectId);
	const [teamName, setTeamName] = useState("");
	const [preferences, setPreferences] = useState([{
		key: "",
		value: ""
	}]);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	useEffect(() => {
		if (team) {
			setTeamName(team.name || "");
			const prefsArray = Object.entries(team.prefs || {}).map(([key, value]) => ({
				key,
				value: String(value)
			}));
			setPreferences(prefsArray.length > 0 ? prefsArray : [{
				key: "",
				value: ""
			}]);
		}
	}, [team]);
	const nameChanged = useMemo(() => {
		return teamName !== (team?.name || "");
	}, [teamName, team?.name]);
	const prefsChanged = useMemo(() => {
		if (!team) return false;
		const currentPrefs = preferences.filter((p) => p.key.trim() && p.value.trim()).reduce((acc, { key, value }) => {
			acc[key.trim()] = value.trim();
			return acc;
		}, {});
		return JSON.stringify(currentPrefs) !== JSON.stringify(team.prefs || {});
	}, [preferences, team]);
	const lastPrefComplete = useMemo(() => {
		const last = preferences[preferences.length - 1];
		return last && last.key.trim() && last.value.trim();
	}, [preferences]);
	const handleUpdateName = async () => {
		if (!teamName.trim()) {
			toast.error(t("Team name is required"));
			return;
		}
		try {
			await updateNameMutation.mutateAsync(teamName.trim());
			toast.success(t("Name has been updated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update name"));
		}
	};
	const handleUpdatePrefs = async () => {
		const prefs = preferences.filter((p) => p.key.trim() && p.value.trim()).reduce((acc, { key, value }) => {
			acc[key.trim()] = value.trim();
			return acc;
		}, {});
		try {
			await updatePrefsMutation.mutateAsync(prefs);
			toast.success(t("Preferences have been updated"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to update preferences"));
		}
	};
	const handleDeleteTeam = async () => {
		if (!teamId) return;
		try {
			await deleteTeamMutation.mutateAsync(teamId);
			toast.success(t("Team deleted successfully"));
			navigate({
				to: "/projects/$projectId/auth/teams",
				params: { projectId }
			});
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to delete team"));
			setDeleteDialogOpen(false);
		}
	};
	const handleAddPreference = () => {
		if (lastPrefComplete) setPreferences([...preferences, {
			key: "",
			value: ""
		}]);
	};
	const handleRemovePreference = (index) => {
		if (preferences.length > 1) setPreferences(preferences.filter((_, i) => i !== index));
		else setPreferences([{
			key: "",
			value: ""
		}]);
	};
	const handlePreferenceChange = (index, field, value) => {
		const newPrefs = [...preferences];
		newPrefs[index] = {
			...newPrefs[index],
			[field]: value
		};
		setPreferences(newPrefs);
	};
	useHashScroll(!isLoading, location.hash);
	if (isLoading || !team) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-muted-foreground",
			children: t("Loading team...")
		})
	});
	const totalMembers = team.total || 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 overflow-x-hidden w-full min-w-0",
		children: [
			/* @__PURE__ */ jsxs("div", {
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
								name: team.name,
								size: "lg",
								className: "shrink-0"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-2 mb-1 flex-wrap",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[15px] font-medium text-foreground truncate",
										children: team.name
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1 text-[13px] text-muted-foreground",
									children: [
										/* @__PURE__ */ jsxs("p", {
											className: "flex flex-wrap items-center gap-x-1.5 gap-y-1",
											children: [/* @__PURE__ */ jsx("span", { children: t("Team ID:") }), /* @__PURE__ */ jsx(CopyableId, {
												id: team.$id,
												size: "sm"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-1.5",
											children: /* @__PURE__ */ jsxs("span", { children: [
												totalMembers,
												" ",
												totalMembers !== 1 ? t("members") : t("member")
											] })
										}),
										team.$createdAt && /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx("span", { children: t("Created:") }), /* @__PURE__ */ jsx(DateTooltip, { date: new Date(team.$createdAt) })]
										})
									]
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "team-details",
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Update name")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Update the team's display name.")
					})]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						handleUpdateName();
					},
					children: [
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "team-name",
									children: t("Name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "team-name",
									type: "text",
									placeholder: t("Enter team name"),
									value: teamName,
									onChange: (e) => setTeamName(e.target.value),
									disabled: updateNameMutation.isPending,
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
								disabled: !nameChanged || !teamName.trim() || updateNameMutation.isPending,
								children: t("Update")
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "team-preferences",
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Update preferences")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Update team preferences as key-value pairs.")
					})]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						handleUpdatePrefs();
					},
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
											disabled: updatePrefsMutation.isPending,
											className: "h-9 flex-1 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
										}),
										/* @__PURE__ */ jsx(Input, {
											type: "text",
											placeholder: t("Value"),
											value: pref.value,
											onChange: (e) => handlePreferenceChange(index, "value", e.target.value),
											disabled: updatePrefsMutation.isPending,
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
									disabled: !lastPrefComplete || updatePrefsMutation.isPending,
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
								disabled: !prefsChanged || !lastPrefComplete || updatePrefsMutation.isPending,
								children: t("Update")
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Delete team")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Permanently delete this team from the project. This action cannot be undone.")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mt-4",
							children: [/* @__PURE__ */ jsx(InitialsAvatar, {
								name: team.name,
								size: "md"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[14px] font-medium text-foreground truncate",
									children: team.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: (() => {
										const parts = [`${totalMembers} ${totalMembers !== 1 ? t("members") : t("member")}`];
										if (team.$createdAt) parts.push(/* @__PURE__ */ jsxs(Fragment, { children: [
											t("Created:"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, { date: new Date(team.$createdAt) })
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
									children: t("Delete team")
								})
							}), /* @__PURE__ */ jsxs(DialogContent, {
								className: "sm:max-w-md p-0",
								children: [/* @__PURE__ */ jsxs(DialogHeader, {
									className: "px-6 pt-6 text-start",
									children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete team") }), /* @__PURE__ */ jsxs(DialogDescription, {
										className: "text-[13px] mt-2",
										children: [
											t("Are you sure you want to delete"),
											" ",
											/* @__PURE__ */ jsx("strong", { children: team.name }),
											"?",
											" ",
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
										onClick: handleDeleteTeam,
										disabled: deleteTeamMutation.isPending,
										children: t("Delete")
									})]
								})]
							})]
						})
					})
				]
			})
		]
	});
}
function UserSelector({ projectId, value, onValueChange, placeholder = "Select a user", disabled = false, triggerClassName, contentClassName, excludeIds }) {
	const t = useT();
	const [selectedSnapshot, setSelectedSnapshot] = useState(null);
	useEffect(() => {
		if (!value) {
			setSelectedSnapshot(null);
			return;
		}
		if (selectedSnapshot && selectedSnapshot.id !== value) setSelectedSnapshot(null);
	}, [value, selectedSnapshot]);
	const { data: selectedUser } = useQuery({
		queryKey: [
			"user",
			"project",
			projectId,
			value
		],
		queryFn: () => fetchUser(projectId, value),
		enabled: !!projectId && !!value,
		staleTime: DEFAULT_STALE_TIME
	});
	const selectedLabel = selectedUser?.name || selectedUser?.email || selectedUser?.phone || (selectedSnapshot?.id === value ? selectedSnapshot.label : void 0) || "";
	const selectedInitials = selectedUser?.name || selectedUser?.email || selectedUser?.phone || (selectedSnapshot?.id === value ? selectedSnapshot.initialsName || selectedSnapshot.label : void 0) || selectedLabel;
	return /* @__PURE__ */ jsx(ResourceSearchPopover, {
		kind: "user",
		projectId,
		selectedId: value,
		onSelect: (id, item) => {
			setSelectedSnapshot(item);
			onValueChange(id);
		},
		excludeIds,
		pinnedItems: useMemo(() => {
			if (selectedUser) return [{
				id: selectedUser.$id,
				label: selectedUser.name || selectedUser.email || selectedUser.phone || selectedUser.$id,
				initialsName: selectedUser.name || selectedUser.email || selectedUser.phone || void 0
			}];
			if (selectedSnapshot?.id === value) return [selectedSnapshot];
			return [];
		}, [
			selectedUser,
			selectedSnapshot,
			value
		]),
		disabled: disabled || !projectId,
		prefetch: true,
		className: "w-full min-w-0",
		contentClassName,
		trigger: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			role: "combobox",
			disabled: disabled || !projectId,
			className: cn("h-9 w-full justify-between gap-2 text-[13px] font-normal", !value && "text-muted-foreground", triggerClassName),
			children: [/* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 items-center gap-2 truncate",
				children: [value && selectedLabel ? /* @__PURE__ */ jsx(InitialsAvatar, {
					name: selectedInitials || selectedLabel,
					size: "xs",
					className: "shrink-0"
				}) : /* @__PURE__ */ jsx(User, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: value && selectedLabel ? selectedLabel : t(placeholder)
				})]
			}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
		})
	});
}
var DEFAULT_PAGE_SIZE = 25;
function TeamMembers({ searchValue: searchValueProp, onSearchChange: onSearchChangeProp, createDialogOpen: createDialogOpenProp, onCreateDialogOpenChange: onCreateDialogOpenChangeProp } = {}) {
	const t = useT();
	const { projectId, teamId } = useParams({ strict: false });
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
	const [internalSearch, setInternalSearch] = useState("");
	const [selectedMemberships, setSelectedMemberships] = useState(/* @__PURE__ */ new Set());
	const [internalCreateDialogOpen, setInternalCreateDialogOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedMembership, setSelectedMembership] = useState(null);
	const search = searchValueProp !== void 0 ? searchValueProp : internalSearch;
	const createDialogOpen = createDialogOpenProp !== void 0 ? createDialogOpenProp : internalCreateDialogOpen;
	const setCreateDialogOpen = onCreateDialogOpenChangeProp ?? setInternalCreateDialogOpen;
	const hasHeaderInParent = searchValueProp !== void 0 && createDialogOpenProp !== void 0;
	const { data: membershipsData, isLoading } = useTeamMemberships(projectId, teamId, page - 1, pageSize, search);
	const createMembershipMutation = useCreateTeamMembership(projectId, teamId);
	const deleteMembershipMutation = useDeleteTeamMembership(projectId, teamId);
	const memberships = membershipsData?.memberships || [];
	const total = membershipsData?.total || 0;
	useEffect(() => {
		setSelectedMemberships(/* @__PURE__ */ new Set());
	}, [page, search]);
	useEffect(() => {
		setPage(1);
	}, [search]);
	const handleCreateMembership = async (data) => {
		if (!teamId) return;
		try {
			await createMembershipMutation.mutateAsync({
				userId: data.userId,
				roles: data.roles
			});
			toast.success(t("Member added successfully"));
			setCreateDialogOpen(false);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to add member"));
		}
	};
	const openDrawer = (membership) => {
		setSelectedMembership(membership);
		setDrawerOpen(true);
	};
	const handleBulkDelete = async () => {
		if (selectedMemberships.size === 0 || !teamId) return;
		try {
			await Promise.all(Array.from(selectedMemberships).map((membershipId) => deleteMembershipMutation.mutateAsync(membershipId)));
			toast.success(selectedMemberships.size !== 1 ? `${selectedMemberships.size} ${t("members deleted successfully")}` : t("Member deleted successfully"));
			setSelectedMemberships(/* @__PURE__ */ new Set());
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to delete members"));
		}
	};
	const toggleMembership = (membershipId) => {
		setSelectedMemberships((prev) => {
			const next = new Set(prev);
			if (next.has(membershipId)) next.delete(membershipId);
			else next.add(membershipId);
			return next;
		});
	};
	const toggleAll = () => {
		if (selectedMemberships.size === memberships.length) setSelectedMemberships(/* @__PURE__ */ new Set());
		else setSelectedMemberships(new Set(memberships.map((m) => m.$id)));
	};
	Math.ceil(total / pageSize);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			!hasHeaderInParent && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[15px] font-medium text-foreground",
					children: t("Members")
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[12px] text-muted-foreground mt-1",
					children: [
						total,
						" ",
						total !== 1 ? t("members") : t("member")
					]
				})] }), /* @__PURE__ */ jsxs(Button, {
					onClick: () => setCreateDialogOpen(true),
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 me-1.5" }), t("Add member")]
				})]
			}),
			isLoading ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-card py-12 text-center",
				children: [/* @__PURE__ */ jsx(Loader2, { className: "mx-auto h-5 w-5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Loading members...")
				})]
			}) : memberships.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ jsx(EmptyState, {
					icon: Users,
					title: t("No memberships available"),
					description: search ? t("No members match your search.") : t("Invite members to this team to get started."),
					isEmpty: !search,
					hasFilters: !!search,
					variant: "card",
					iconSize: "md"
				}), !hasHeaderInParent && !search && /* @__PURE__ */ jsx("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ jsxs(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => setCreateDialogOpen(true),
						children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add member")]
					})
				})]
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "w-[40px] px-4 py-3",
								children: /* @__PURE__ */ jsx(Checkbox, {
									checked: memberships.length > 0 && selectedMemberships.size === memberships.length,
									onCheckedChange: toggleAll
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
					}) }), /* @__PURE__ */ jsx(TableBody, { children: memberships.map((membership) => {
						const userName = membership.userName || "-";
						const userEmail = membership.userEmail || "";
						const roles = membership.roles || [];
						return /* @__PURE__ */ jsx(MembershipContextMenu, {
							projectId,
							membership,
							onOpenMembership: () => openDrawer(membership),
							children: /* @__PURE__ */ jsxs(TableRow, {
								className: cn("cursor-pointer transition-colors border-b border-border/50", selectedMemberships.has(membership.$id) ? "bg-muted" : "hover:bg-muted/30"),
								onClick: () => openDrawer(membership),
								children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "w-[40px] px-4 py-3",
										onClick: (e) => e.stopPropagation(),
										children: /* @__PURE__ */ jsx(Checkbox, {
											checked: selectedMemberships.has(membership.$id),
											onCheckedChange: () => toggleMembership(membership.$id)
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										onClick: () => openDrawer(membership),
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ jsx(InitialsAvatar, {
												name: userName !== "-" ? userName : userEmail,
												size: "md"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex-1 min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "truncate text-[13px] font-medium text-foreground",
													children: userName
												}), userEmail && /* @__PURE__ */ jsx("p", {
													className: "mt-0.5 truncate text-[12px] text-muted-foreground",
													children: userEmail
												})]
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
											children: roles.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [roles.slice(0, 2).map((role, idx) => /* @__PURE__ */ jsx(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: role
											}, idx)), roles.length > 2 && /* @__PURE__ */ jsxs(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: ["+", roles.length - 2]
											})] }) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: "-"
											})
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										onClick: () => openDrawer(membership),
										children: /* @__PURE__ */ jsx(DateTooltip, {
											date: membership.$createdAt,
											className: "text-[12px] text-muted-foreground"
										})
									})
								]
							})
						}, membership.$id);
					}) })] })
				}),
				memberships.length > 0 && /* @__PURE__ */ jsx(Pagination, {
					currentPage: page,
					totalItems: total,
					pageSize,
					pageSizeOptions: [
						10,
						25,
						50,
						100
					],
					onPageChange: setPage,
					onPageSizeChange: (size) => {
						setPageSize(size);
						setPage(1);
					},
					itemLabel: "members"
				}),
				selectedMemberships.size > 0 && /* @__PURE__ */ jsx("div", {
					className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
						children: [/* @__PURE__ */ jsxs(Badge, {
							variant: "secondary",
							className: "h-6 px-2.5",
							children: [
								selectedMemberships.size,
								" ",
								selectedMemberships.size !== 1 ? t("members selected") : t("member selected")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedMemberships(/* @__PURE__ */ new Set()),
								className: "h-8 text-xs",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								size: "sm",
								onClick: handleBulkDelete,
								disabled: deleteMembershipMutation.isPending,
								className: "h-8 gap-2",
								children: t("Delete")
							})]
						})]
					})
				})
			] }),
			/* @__PURE__ */ jsx(CreateMembershipDialog, {
				open: createDialogOpen,
				onOpenChange: setCreateDialogOpen,
				onSubmit: handleCreateMembership,
				isLoading: createMembershipMutation.isPending,
				projectId: projectId ?? "",
				memberships
			}),
			/* @__PURE__ */ jsx(MembershipUpdateDrawer, {
				open: drawerOpen,
				onOpenChange: setDrawerOpen,
				membership: selectedMembership,
				projectId,
				context: "team"
			})
		]
	});
}
function CreateMembershipDialog({ open, onOpenChange, onSubmit, isLoading, projectId, memberships }) {
	const t = useT();
	const [selectedUserId, setSelectedUserId] = useState("");
	const [roles, setRoles] = useState([]);
	const [roleInput, setRoleInput] = useState("");
	const existingMemberUserIds = useMemo(() => new Set(memberships.map((membership) => membership.userId).filter(Boolean)), [memberships]);
	const handleOpenChange = (newOpen) => {
		if (!newOpen) {
			setSelectedUserId("");
			setRoles([]);
			setRoleInput("");
		}
		onOpenChange(newOpen);
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
	const handleSubmit = () => {
		if (!selectedUserId || roles.length === 0) return;
		onSubmit({
			userId: selectedUserId,
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
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add member") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Select an existing user and assign team roles.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "member-user",
									children: [
										t("User"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), open ? /* @__PURE__ */ jsx(UserSelector, {
									projectId,
									value: selectedUserId,
									onValueChange: setSelectedUserId,
									placeholder: t("Select a user"),
									excludeIds: existingMemberUserIds
								}) : null]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "roles",
										children: t("Roles")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ jsx(Input, {
												id: "roles",
												value: roleInput,
												onChange: (e) => setRoleInput(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter" && roleInput.trim()) {
														e.preventDefault();
														handleAddRole();
													}
												},
												placeholder: t("Add roles"),
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
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-3",
										children: /* @__PURE__ */ jsx("h3", {
											className: "text-[14px] font-semibold text-foreground",
											children: t("Need a new user?")
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-3",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: t("Create the user in Users first, then add them to this team.")
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-3 border-t border-border bg-muted/30",
										children: /* @__PURE__ */ jsx(Link, {
											to: "/projects/$projectId/auth/users",
											params: { projectId },
											onClick: () => handleOpenChange(false),
											children: /* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-9 text-[13px]",
												children: t("Go to users")
											})
										})
									})
								]
							})
						]
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
						disabled: !selectedUserId || roles.length === 0 || isLoading,
						children: t("Add member")
					})]
				})
			]
		})
	});
}
function View() {
	const t = useT();
	const { projectId, teamId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const { data: team, isLoading: teamLoading, error: teamError } = useTeam(projectId ?? "", teamId ?? "");
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const teamIndex = pathParts.findIndex((part, idx) => part === "teams" && pathParts[idx + 1] === teamId);
		if (teamIndex >= 0 && pathParts[teamIndex + 2]) {
			const tabFromPath = pathParts[teamIndex + 2];
			if (["members"].includes(tabFromPath)) return tabFromPath;
		}
		return "overview";
	}, [location.pathname, teamId]);
	const tabs = useMemo(() => [{
		id: "overview",
		label: t("Overview"),
		to: "/projects/$projectId/auth/teams/$teamId",
		params: {
			projectId,
			teamId
		}
	}, {
		id: "members",
		label: t("Memberships"),
		to: "/projects/$projectId/auth/teams/$teamId/members",
		params: {
			projectId,
			teamId
		}
	}], [
		projectId,
		teamId,
		t
	]);
	const [membersSearchValue, setMembersSearchValue] = useState("");
	const [createMembershipDialogOpen, setCreateMembershipDialogOpen] = useState(false);
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/auth/teams",
			params: { projectId }
		});
	};
	if (!projectId || !teamId) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Missing project ID or team ID")
				}),
				!projectId && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground mt-2",
					children: t("Project ID is required")
				}),
				!teamId && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground mt-2",
					children: t("Team ID is required")
				})
			]
		})
	});
	if (teamLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (teamError) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-destructive mb-2",
				children: t("Error loading team")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: teamError instanceof Error ? teamError.message : t("Unknown error")
			})]
		})
	});
	if (!team) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Team not found")
			}), projectId && teamId && /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-muted-foreground mt-2",
				children: [
					t("Project"),
					": ",
					projectId,
					", ",
					t("Team"),
					": ",
					teamId
				]
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
				kind: "team",
				label: team.name || "-",
				resourceId: team.$id,
				projectId,
				back: {
					onClick: handleBack,
					"aria-label": t("Back to teams")
				}
			}),
			tabs,
			activeTab,
			searchPlaceholder: activeTab === "members" ? t("Search members...") : void 0,
			searchValue: activeTab === "members" ? membersSearchValue : void 0,
			onSearchChange: activeTab === "members" ? setMembersSearchValue : void 0,
			createLabel: activeTab === "members" ? t("Add member") : void 0,
			createAnalyticsAction: activeTab === "members" ? "add-team-member" : void 0,
			onCreate: activeTab === "members" ? () => setCreateMembershipDialogOpen(true) : void 0,
			showFilters: false,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 flex flex-col",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6", activeTab === "overview" && "pt-4 sm:pt-6"),
				children: [activeTab === "overview" && /* @__PURE__ */ jsx(TeamOverview, {}), activeTab === "members" && /* @__PURE__ */ jsx(TeamMembers, {
					searchValue: membersSearchValue,
					onSearchChange: setMembersSearchValue,
					createDialogOpen: createMembershipDialogOpen,
					onCreateDialogOpenChange: setCreateMembershipDialogOpen
				})]
			})
		})]
	});
}
export { View as t };
