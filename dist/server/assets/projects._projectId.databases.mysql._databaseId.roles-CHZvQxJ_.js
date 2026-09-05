import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Mp as useExecuteMysqlSql, Rp as useMysqlRoles, _m as isMysqlRoleFlag, bm as validateMysqlRoleFormState, cm as buildMysqlCreateRoleSql, dm as canUpdateMysqlRole, fm as createDefaultMysqlRoleFormState, gm as isMysqlProtectedRole, hm as isMysqlBuiltinRole, lm as buildMysqlDropRoleSql, mm as formatMysqlRoleMembership, pm as formatMysqlRoleConnectionLimit, um as buildMysqlUpdateRoleSql, vm as mapMysqlRoleRowToFormState, ym as parseMysqlRoleMembership } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
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
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import "./calendar-6OJ5dwYN.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./horizontal-resize-BcegzCwH.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import "./mysql-tab-route-loader-D18CXQ4h.js";
import { t as Route$1 } from "./projects._projectId.databases.mysql._databaseId.roles-m186FgpT.js";
import { a as useDatabaseTableOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { r as SPREADSHEET_SCROLL_LAYER_CLASS } from "./spreadsheet-sticky-CpUihTZG.js";
import { n as useMysqlDatabaseHeaderSlot } from "./MysqlDatabaseHeaderSlotContext-BX8xR-AF.js";
import { g as matchesMysqlLocalSearch } from "./mysql-spreadsheet-chrome-CfmSw3G0.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Trash2, Users, X } from "lucide-react";
function RoleOptionSwitch({ title, description, checked, onCheckedChange, disabled = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: title
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: description
			})]
		}), /* @__PURE__ */ jsx(Switch, {
			checked,
			onCheckedChange,
			disabled,
			"aria-label": title
		})]
	});
}
function FormSection({ title, description, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[13px] font-semibold text-foreground",
			children: title
		}), description ? /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[12px] text-muted-foreground",
			children: description
		}) : null] }), /* @__PURE__ */ jsx("div", {
			className: "space-y-3",
			children
		})]
	});
}
function MysqlRoleDrawer({ open, onOpenChange, projectId, databaseId, role, availableRoles, onSuccess }) {
	const t = useT();
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const isEdit = Boolean(role);
	const [formState, setFormState] = useState(createDefaultMysqlRoleFormState());
	useEffect(() => {
		if (!open) return;
		setFormState(role ? mapMysqlRoleRowToFormState(role) : createDefaultMysqlRoleFormState());
	}, [open, role]);
	const membershipOptions = useMemo(() => {
		const currentRoleName = role?.role_name;
		return availableRoles.map((entry) => entry.role_name).filter((name) => name !== currentRoleName).sort((a, b) => a.localeCompare(b)).map((name) => ({
			value: name,
			label: name
		}));
	}, [availableRoles, role?.role_name]);
	const updateForm = (patch) => {
		setFormState((current) => ({
			...current,
			...patch
		}));
	};
	const handleSubmit = async () => {
		const validationError = validateMysqlRoleFormState(formState, { isEdit });
		if (validationError) {
			toast.error(t(validationError));
			return;
		}
		try {
			if (isEdit && role) {
				await executeSql.mutateAsync(buildMysqlUpdateRoleSql(formState, parseMysqlRoleMembership(role.member_of)));
				toast.success(t("Role updated"));
			} else {
				await executeSql.mutateAsync(buildMysqlCreateRoleSql(formState));
				toast.success(t("Role created"));
			}
			onOpenChange(false);
			onSuccess();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t(isEdit ? "Failed to update role" : "Failed to create role"));
		}
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: isEdit ? t("Update role") : t("Create role"),
		description: isEdit ? t("Update MySQL role attributes, limits, and membership.") : t("Create a MySQL role for RLS policies and database access."),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 space-y-6 overflow-y-auto px-6 pb-4 pt-4",
				children: [
					/* @__PURE__ */ jsxs(FormSection, {
						title: t("General"),
						description: t("Identity and authentication settings for this role."),
						children: [
							!isEdit ? /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "role-name",
										className: "text-[12px] font-medium",
										children: [
											t("Role name"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "role-name",
										value: formState.roleName,
										onChange: (event) => updateForm({ roleName: event.target.value }),
										placeholder: "app_reader"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Use letters, numbers, and underscores only.")
									})
								]
							}) : /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-muted/20 px-4 py-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Role name")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground",
									children: formState.roleName
								})]
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Can login"),
								description: t("Allow this role to sign in to the database."),
								checked: formState.canLogin,
								onCheckedChange: (checked) => updateForm({ canLogin: checked })
							}),
							formState.canLogin ? /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "role-password",
										className: "text-[12px] font-medium",
										children: [
											isEdit ? t("New password") : t("Password"),
											" ",
											!isEdit ? /* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											}) : null
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "role-password",
										type: "password",
										value: formState.password,
										onChange: (event) => updateForm({ password: event.target.value }),
										autoComplete: "new-password"
									}),
									isEdit ? /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Leave blank to keep the current password.")
									}) : null
								]
							}) : null,
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("No expiry"),
								description: t("Keep this role valid indefinitely."),
								checked: formState.noExpiry,
								onCheckedChange: (checked) => updateForm({ noExpiry: checked })
							}),
							!formState.noExpiry ? /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "role-valid-until",
									className: "text-[12px] font-medium",
									children: [
										t("Valid until"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(DateTimePicker, {
									id: "role-valid-until",
									value: formState.validUntil || null,
									onChange: (value) => updateForm({ validUntil: value ?? "" }),
									clearable: false
								})]
							}) : null
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs(FormSection, {
						title: t("Privileges"),
						description: t("Cluster-level capabilities granted to this role."),
						children: [
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Superuser"),
								description: t("Grant unrestricted access across the entire cluster."),
								checked: formState.isSuperuser,
								onCheckedChange: (checked) => updateForm({ isSuperuser: checked })
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Can create roles"),
								description: t("Allow this role to create, alter, and drop other roles."),
								checked: formState.canCreateRole,
								onCheckedChange: (checked) => updateForm({ canCreateRole: checked })
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Can create databases"),
								description: t("Allow this role to create databases."),
								checked: formState.canCreateDb,
								onCheckedChange: (checked) => updateForm({ canCreateDb: checked })
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Replication"),
								description: t("Allow this role to connect in replication mode."),
								checked: formState.canReplicate,
								onCheckedChange: (checked) => updateForm({ canReplicate: checked })
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Inherit privileges"),
								description: t("Allow this role to use privileges granted to roles it is a member of."),
								checked: formState.inherit,
								onCheckedChange: (checked) => updateForm({ inherit: checked })
							}),
							/* @__PURE__ */ jsx(RoleOptionSwitch, {
								title: t("Bypass row level security"),
								description: t("Allow this role to read and write rows without matching RLS policies."),
								checked: formState.bypassRls,
								onCheckedChange: (checked) => updateForm({ bypassRls: checked })
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs(FormSection, {
						title: t("Limits"),
						description: t("Connection limits for roles that can sign in."),
						children: [/* @__PURE__ */ jsx(RoleOptionSwitch, {
							title: t("Unlimited connections"),
							description: t("Allow any number of concurrent connections."),
							checked: formState.unlimitedConnections,
							onCheckedChange: (checked) => updateForm({ unlimitedConnections: checked })
						}), !formState.unlimitedConnections ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs(Label, {
								htmlFor: "role-connection-limit",
								className: "text-[12px] font-medium",
								children: [
									t("Connection limit"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})
								]
							}), /* @__PURE__ */ jsx(Input, {
								id: "role-connection-limit",
								type: "number",
								min: 0,
								value: formState.connectionLimit,
								onChange: (event) => updateForm({ connectionLimit: event.target.value }),
								placeholder: "10"
							})]
						}) : null]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx(FormSection, {
						title: t("Membership"),
						description: t("Grant membership in other roles so this role inherits their privileges."),
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									className: "text-[12px] font-medium",
									children: t("Member of")
								}),
								/* @__PURE__ */ jsx(SearchableSelect, {
									value: "",
									onValueChange: (value) => {
										if (!value || formState.memberOf.includes(value)) return;
										updateForm({ memberOf: [...formState.memberOf, value] });
									},
									items: membershipOptions.filter((option) => !formState.memberOf.includes(option.value)),
									placeholder: t("Add parent role"),
									searchPlaceholder: t("Search roles..."),
									emptyMessage: t("No roles available"),
									disabled: membershipOptions.length === 0
								}),
								formState.memberOf.length > 0 ? /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: formState.memberOf.map((member) => /* @__PURE__ */ jsxs(Badge, {
										variant: "secondary",
										className: "gap-1 pr-1 text-[12px]",
										children: [member, /* @__PURE__ */ jsx("button", {
											type: "button",
											className: "rounded-sm p-0.5 text-muted-foreground hover:text-foreground",
											onClick: () => updateForm({ memberOf: formState.memberOf.filter((entry) => entry !== member) }),
											"aria-label": t("Remove"),
											children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
										})]
									}, member))
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("This role is not a member of any other roles.")
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex flex-col gap-2 sm:flex-row sm:justify-start",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: executeSql.isPending,
					children: isEdit ? t("Update") : t("Create")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: executeSql.isPending,
					children: t("Cancel")
				})]
			})]
		})] })
	});
}
var rolesTableClassName = "w-full min-w-[62rem] table-fixed";
var rolesTableScrollWrapperClassName = `${SPREADSHEET_SCROLL_LAYER_CLASS} min-w-[62rem]`;
var ROLES_TABLE_HEAD_CLASS = "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]";
function RolesTableColGroup() {
	return /* @__PURE__ */ jsxs("colgroup", { children: [
		/* @__PURE__ */ jsx("col", { className: "w-[16rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[6.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[6.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[10.5rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[7.5rem]" }),
		/* @__PURE__ */ jsx("col", {}),
		/* @__PURE__ */ jsx("col", { className: "w-[100px]" })
	] });
}
function RolesTableHead() {
	const t = useT();
	return /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
		className: "border-b border-border hover:bg-transparent",
		children: [
			/* @__PURE__ */ jsx(TableHead, {
				className: `${ROLES_TABLE_HEAD_CLASS} ps-6 sm:ps-8`,
				title: t("Role name"),
				children: t("Role")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Can login"),
				children: t("Login")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Can create roles"),
				children: t("Create roles")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Can create databases"),
				children: t("Create DB")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Connection limit"),
				children: t("Max connections")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Valid until"),
				children: t("Expiry")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: ROLES_TABLE_HEAD_CLASS,
				title: t("Member of"),
				children: t("Membership")
			}),
			/* @__PURE__ */ jsx(TableHead, { className: `${ROLES_TABLE_HEAD_CLASS} w-[100px] text-end` })
		]
	}) });
}
function RolesSkeletonRows({ rowCount }) {
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: rowCount }, (_, index) => /* @__PURE__ */ jsxs(TableRow, {
		className: "pointer-events-none hover:bg-transparent",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3 ps-6 sm:ps-8",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-10 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-10 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-10 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-[6.5rem]" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-full max-w-[12rem]" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3 text-end",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "ms-auto h-8 w-8 rounded-md" })
			})
		]
	}, index)) });
}
function RoleFlagBadge({ enabled }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Badge, {
		variant: enabled ? "success" : "info",
		className: "text-[10px] shrink-0",
		children: enabled ? t("Yes") : t("No")
	});
}
function formatConnectionLimitLabel(value, t) {
	const formatted = formatMysqlRoleConnectionLimit(value);
	if (formatted === null) return t("N/A");
	if (formatted === "Unlimited") return t("Unlimited");
	return formatted;
}
function MysqlRolesPanel({ databaseId, searchValue, createOpen, onCreateOpenChange }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { roles, isLoading, refetch } = useMysqlRoles(projectId, databaseId);
	const executeSql = useExecuteMysqlSql(projectId, databaseId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [roleToDelete, setRoleToDelete] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedRole, setSelectedRole] = useState(null);
	useEffect(() => {
		if (!createOpen) return;
		setSelectedRole(null);
		setDrawerOpen(true);
	}, [createOpen]);
	const handleDrawerOpenChange = (open) => {
		setDrawerOpen(open);
		if (!open) {
			setSelectedRole(null);
			onCreateOpenChange(false);
		}
	};
	const filteredRoles = useMemo(() => {
		if (!searchValue.trim()) return roles;
		return roles.filter((role) => matchesMysqlLocalSearch(searchValue, role.role_name));
	}, [roles, searchValue]);
	const handleDelete = async () => {
		if (!roleToDelete) return;
		const role = roleToDelete;
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
			setRoleToDelete(null);
		});
		try {
			await executeSql.mutateAsync(buildMysqlDropRoleSql(role.role_name));
			toast.success(t("Role deleted"));
			await refetch();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete role"));
		}
	};
	if (!isLoading && roles.length === 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 w-full items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: Users,
				iconSize: "md",
				title: t("No roles yet"),
				description: t("Create roles to reference in RLS policies and control database access."),
				isEmpty: true,
				className: "w-full",
				action: canWrite ? /* @__PURE__ */ jsxs(Button, {
					size: "sm",
					onClick: () => onCreateOpenChange(true),
					children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Create role")]
				}) : void 0
			})
		})
	}), /* @__PURE__ */ jsx(MysqlRoleDrawer, {
		open: drawerOpen,
		onOpenChange: handleDrawerOpenChange,
		projectId,
		databaseId,
		role: selectedRole,
		availableRoles: roles,
		onSuccess: () => void refetch()
	})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
			children: isLoading && roles.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				"aria-label": t("Loading roles…"),
				children: /* @__PURE__ */ jsx("div", {
					className: rolesTableScrollWrapperClassName,
					children: /* @__PURE__ */ jsxs(Table$1, {
						withScrollContainer: false,
						className: rolesTableClassName,
						children: [
							/* @__PURE__ */ jsx(RolesTableColGroup, {}),
							/* @__PURE__ */ jsx(RolesTableHead, {}),
							/* @__PURE__ */ jsx(TableBody, { children: /* @__PURE__ */ jsx(RolesSkeletonRows, { rowCount: 8 }) })
						]
					})
				})
			}) : filteredRoles.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: rolesTableScrollWrapperClassName,
					children: /* @__PURE__ */ jsxs(Table$1, {
						withScrollContainer: false,
						className: rolesTableClassName,
						children: [
							/* @__PURE__ */ jsx(RolesTableColGroup, {}),
							/* @__PURE__ */ jsx(RolesTableHead, {}),
							/* @__PURE__ */ jsx(TableBody, { children: filteredRoles.map((role) => {
								const protectedRole = isMysqlProtectedRole(role);
								const canDelete = canWrite && !protectedRole;
								const canUpdate = canWrite && canUpdateMysqlRole(role);
								const membershipLabel = formatMysqlRoleMembership(role.member_of);
								return /* @__PURE__ */ jsxs(TableRow, { children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 px-4 py-3 ps-6 sm:ps-8",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-[13px] font-medium text-foreground",
													children: role.role_name
												}),
												isMysqlBuiltinRole(role) ? /* @__PURE__ */ jsx(Badge, {
													variant: "info",
													className: "shrink-0 text-[10px]",
													children: t("System")
												}) : null,
												isMysqlRoleFlag(role.is_superuser) ? /* @__PURE__ */ jsx(Badge, {
													variant: "warning",
													className: "shrink-0 text-[10px]",
													children: t("Superuser")
												}) : null
											]
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: /* @__PURE__ */ jsx(RoleFlagBadge, { enabled: isMysqlRoleFlag(role.can_login) })
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: /* @__PURE__ */ jsx(RoleFlagBadge, { enabled: isMysqlRoleFlag(role.can_create_role) })
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: /* @__PURE__ */ jsx(RoleFlagBadge, { enabled: isMysqlRoleFlag(role.can_create_db) })
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-muted-foreground",
											children: formatConnectionLimitLabel(role.connection_limit, t)
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: role.valid_until ? /* @__PURE__ */ jsx(DateTooltip, {
											date: role.valid_until,
											className: "text-[13px] text-muted-foreground"
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-muted-foreground",
											children: t("N/A")
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "min-w-0 whitespace-nowrap px-4 py-3",
										children: membershipLabel ? /* @__PURE__ */ jsx("span", {
											className: "block truncate text-[13px] text-muted-foreground",
											title: membershipLabel,
											children: membershipLabel
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-muted-foreground",
											children: t("N/A")
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex justify-end",
											children: canUpdate || canDelete ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
											}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
												align: "end",
												children: [canUpdate ? /* @__PURE__ */ jsx(DropdownMenuItem, {
													onSelect: () => {
														openDialogAfterOverlayCloses(() => {
															setSelectedRole(role);
															setDrawerOpen(true);
														});
													},
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Pencil,
														children: t("Update")
													})
												}) : null, canDelete ? /* @__PURE__ */ jsx(DropdownMenuItem, {
													onSelect: () => {
														openDialogAfterOverlayCloses(() => {
															setRoleToDelete(role);
															setDeleteDialogOpen(true);
														});
													},
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Trash2,
														children: t("Delete")
													})
												}) : null]
											})] }) : null
										})
									})
								] }, role.role_name);
							}) })
						]
					})
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "h-[54px] shrink-0 border-t border-border bg-background px-4 sm:px-6",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex h-full items-center justify-between gap-3 py-3",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: filteredRoles.length === roles.length ? `${roles.length} role${roles.length === 1 ? "" : "s"}` : `${filteredRoles.length} of ${roles.length} roles`
					})
				})
			})] }) : /* @__PURE__ */ jsx(EmptyState, {
				icon: Users,
				title: t("No roles match your search"),
				description: t("Try adjusting or clearing your search."),
				hasFilters: true,
				variant: "centered"
			})
		}),
		/* @__PURE__ */ jsx(MysqlRoleDrawer, {
			open: drawerOpen,
			onOpenChange: handleDrawerOpenChange,
			projectId,
			databaseId,
			role: selectedRole,
			availableRoles: roles,
			onSuccess: () => void refetch()
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete role") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Delete"),
							" \"",
							roleToDelete?.role_name,
							"\"?",
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setDeleteDialogOpen(false),
						disabled: executeSql.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: () => void handleDelete(),
						disabled: executeSql.isPending,
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function MysqlRolesView({ databaseId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite, writeTooltip } = useDatabaseTableOperationsAccess();
	const [searchValue, setSearchValue] = useState("");
	const [createOpen, setCreateOpen] = useState(false);
	const { refetch, isFetching } = useMysqlRoles(projectId, databaseId);
	useMysqlDatabaseHeaderSlot(useMemo(() => ({
		searchPlaceholder: t("Search roles..."),
		searchValue,
		onSearchChange: setSearchValue,
		createLabel: canWrite ? t("Create role") : void 0,
		onCreate: canWrite ? () => setCreateOpen(true) : void 0,
		createDisabled: !canWrite,
		createDisabledTooltip: writeTooltip,
		showRefresh: true,
		onRefresh: () => void refetch(),
		isRefreshing: isFetching
	}), [
		canWrite,
		isFetching,
		refetch,
		searchValue,
		t,
		writeTooltip
	]));
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden",
		children: /* @__PURE__ */ jsx(MysqlRolesPanel, {
			databaseId,
			searchValue,
			createOpen,
			onCreateOpenChange: setCreateOpen
		})
	});
}
function MysqlRolesPage() {
	const { databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(MysqlRolesView, { databaseId });
}
export { MysqlRolesPage as component };
