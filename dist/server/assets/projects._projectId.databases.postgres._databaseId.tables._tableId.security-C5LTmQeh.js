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
import { Fg as usePostgresTableRls, Ng as usePostgresTableInfo, Pg as usePostgresTablePolicies, Zg as isPostgresBuiltinRole, __ as parsePostgresPolicyFormRoles, a_ as buildPostgresCreatePolicySql, c_ as buildPostgresEnableRlsSql, d_ as createDefaultPostgresPolicyFormState, f_ as formatPostgresPolicyFormRoles, g_ as normalizePostgresTablePolicyRow, h_ as normalizePostgresPolicyCommand, i_ as buildPostgresAlterPolicySql, l_ as buildPostgresForceRlsSql, m_ as mapPostgresPolicyRowToFormState, o_ as buildPostgresDisableRlsSql, p_ as formatPostgresPolicyRoles, pg as useExecutePostgresSql, r_ as addPostgresPolicyFormRole, s_ as buildPostgresDropPolicySql, u_ as buildPostgresNoForceRlsSql, v_ as removePostgresPolicyFormRole, y_ as validatePostgresPolicyFormState, yg as usePostgresRoles } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import { d as postgresNav, i as normalizePostgresTableRouteId } from "./postgres-database-routes-CyTsPbzl.js";
import { R as buildPostgresSingleRequestDdlSql } from "./database-row-inline-edits-CdyGeTxj.js";
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
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import "./sheet-CbM5lIV1.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./horizontal-resize-BcegzCwH.js";
import "./console-rbac-loader-DvaSNNjB.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import "./postgres-table-route-loader-Bhk0qI0O.js";
import { t as Route$1 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.security-BarwFdGW.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { a as useDatabaseTableOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { _ as matchesPostgresLocalSearch } from "./postgres-spreadsheet-chrome-BSNXJzGv.js";
import { n as usePostgresTableHeaderSlot } from "./PostgresTableHeaderSlotContext-Bh_kLwdq.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Search, Shield, Trash2, X } from "lucide-react";
var POLICY_COMMANDS = [
	"ALL",
	"SELECT",
	"INSERT",
	"UPDATE",
	"DELETE"
];
var POLICY_SPECIAL_ROLES = [
	{
		value: "public",
		descriptionKey: "Applies to all roles."
	},
	{
		value: "CURRENT_USER",
		descriptionKey: "The user executing the query."
	},
	{
		value: "CURRENT_ROLE",
		descriptionKey: "The role active in the session."
	}
];
function PostgresPolicyRolesField({ projectId, databaseId, value, onChange }) {
	const t = useT();
	const { roles, isLoading } = usePostgresRoles(projectId, databaseId);
	const selectedRoles = useMemo(() => parsePostgresPolicyFormRoles(value), [value]);
	const roleOptions = useMemo(() => {
		const selectedKeys = new Set(selectedRoles.map((role) => role.trim().toLowerCase()));
		const specialOptions = POLICY_SPECIAL_ROLES.filter((role) => !selectedKeys.has(role.value.toLowerCase())).map((role) => ({
			value: role.value,
			label: role.value,
			description: t(role.descriptionKey)
		}));
		const databaseOptions = roles.map((role) => role.role_name).filter((roleName) => !selectedKeys.has(roleName.toLowerCase())).sort((a, b) => a.localeCompare(b)).map((roleName) => {
			const row = roles.find((entry) => entry.role_name === roleName);
			return {
				value: roleName,
				label: roleName,
				description: row && isPostgresBuiltinRole(row) ? t("System") : void 0
			};
		});
		return [...specialOptions, ...databaseOptions];
	}, [
		roles,
		selectedRoles,
		t
	]);
	const addRole = (roleName) => {
		onChange(formatPostgresPolicyFormRoles(addPostgresPolicyFormRole(selectedRoles, roleName)));
	};
	const removeRole = (roleName) => {
		onChange(formatPostgresPolicyFormRoles(removePostgresPolicyFormRole(selectedRoles, roleName)));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx(Label, {
				className: "text-[12px] font-medium",
				children: t("Roles")
			}),
			/* @__PURE__ */ jsx(SearchableSelect, {
				value: "",
				onValueChange: addRole,
				items: roleOptions,
				placeholder: t("Add role"),
				searchPlaceholder: t("Search roles..."),
				emptyMessage: isLoading ? t("Loading roles…") : t("No roles available"),
				disabled: isLoading && roles.length === 0
			}),
			selectedRoles.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2",
				children: selectedRoles.map((role) => /* @__PURE__ */ jsxs(Badge, {
					variant: "secondary",
					className: "gap-1 pr-1 text-[12px]",
					children: [role, /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "rounded-sm p-0.5 text-muted-foreground hover:text-foreground",
						onClick: () => removeRole(role),
						"aria-label": t("Remove"),
						children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
					})]
				}, role))
			}) : /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: t("Defaults to all (public) roles if none selected.")
			})
		]
	});
}
function getPolicyTypeLabel(type, t) {
	return type === "PERMISSIVE" ? t("Permissive") : t("Restrictive");
}
function PostgresTablePolicyDrawer({ open, onOpenChange, projectId, databaseId, tableId, policy, onSuccess }) {
	const t = useT();
	const executeSql = useExecutePostgresSql(projectId, databaseId);
	const isEdit = Boolean(policy);
	const policySnapshot = useMemo(() => policy ? normalizePostgresTablePolicyRow(policy) : null, [policy]);
	const [formState, setFormState] = useState(() => policy ? mapPostgresPolicyRowToFormState(policy) : createDefaultPostgresPolicyFormState());
	useEffect(() => {
		if (!open) return;
		setFormState(policySnapshot ? mapPostgresPolicyRowToFormState(policySnapshot) : createDefaultPostgresPolicyFormState());
	}, [open, policySnapshot]);
	const title = useMemo(() => isEdit ? t("Update policy") : t("Create policy"), [isEdit, t]);
	const handleSubmit = async () => {
		const validationError = validatePostgresPolicyFormState(formState, { isEdit });
		if (validationError) {
			toast.error(t(validationError));
			return;
		}
		try {
			const sql = isEdit ? buildPostgresAlterPolicySql(tableId, policy.policyname, formState) : buildPostgresCreatePolicySql(tableId, formState);
			await executeSql.mutateAsync(sql);
			toast.success(isEdit ? t("Policy updated") : t("Policy created"));
			onOpenChange(false);
			onSuccess();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? (isEdit ? t("Failed to update policy") : t("Failed to create policy")));
		}
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title,
		description: isEdit ? t("Update the roles and expressions for this row level security policy.") : t("Create a row level security policy for this table."),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			className: "flex flex-col flex-1 min-h-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 overflow-y-auto px-6 pb-4 pt-4 space-y-5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "policy-name",
							className: "text-[12px] font-medium",
							children: [
								t("Policy Name"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-destructive",
									children: "*"
								})
							]
						}), /* @__PURE__ */ jsx(Input, {
							id: "policy-name",
							value: formState.name,
							onChange: (event) => setFormState((prev) => ({
								...prev,
								name: event.target.value
							})),
							placeholder: t("Enter policy name"),
							disabled: isEdit
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								className: "text-[12px] font-medium",
								children: t("Command")
							}), /* @__PURE__ */ jsxs(Select, {
								value: formState.command,
								onValueChange: (value) => setFormState((prev) => ({
									...prev,
									command: value
								})),
								disabled: isEdit,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									className: "w-full",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsx(SelectContent, {
									className: "min-w-[var(--radix-select-trigger-width)]",
									children: POLICY_COMMANDS.map((command) => /* @__PURE__ */ jsx(SelectItem, {
										value: command,
										children: command
									}, command))
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								className: "text-[12px] font-medium",
								children: t("Policy type")
							}), /* @__PURE__ */ jsxs(Select, {
								value: formState.permissive,
								onValueChange: (value) => setFormState((prev) => ({
									...prev,
									permissive: value
								})),
								disabled: isEdit,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									className: "w-full",
									children: /* @__PURE__ */ jsx(SelectValue, { children: getPolicyTypeLabel(formState.permissive, t) })
								}), /* @__PURE__ */ jsxs(SelectContent, {
									className: "min-w-[var(--radix-select-trigger-width)]",
									children: [/* @__PURE__ */ jsx(SelectItem, {
										value: "PERMISSIVE",
										className: "items-start py-2",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-0.5",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: t("Permissive")
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-muted-foreground",
												children: t("Policies are combined using the \"OR\" Boolean operator.")
											})]
										})
									}), /* @__PURE__ */ jsx(SelectItem, {
										value: "RESTRICTIVE",
										className: "items-start py-2",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-0.5",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: t("Restrictive")
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-muted-foreground",
												children: t("Policies are combined using the \"AND\" Boolean operator.")
											})]
										})
									})]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsx(PostgresPolicyRolesField, {
						projectId,
						databaseId,
						value: formState.roles,
						onChange: (roles) => setFormState((prev) => ({
							...prev,
							roles
						}))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "policy-using",
								className: "text-[12px] font-medium",
								children: t("Using expression")
							}),
							/* @__PURE__ */ jsx(Textarea, {
								id: "policy-using",
								value: formState.usingExpression,
								onChange: (event) => setFormState((prev) => ({
									...prev,
									usingExpression: event.target.value
								})),
								placeholder: "user_id = current_user",
								className: "min-h-[96px] font-mono text-[12px]"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("SQL expression that determines which rows are visible or can be modified.")
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "policy-with-check",
								className: "text-[12px] font-medium",
								children: t("With check expression")
							}),
							/* @__PURE__ */ jsx(Textarea, {
								id: "policy-with-check",
								value: formState.withCheckExpression,
								onChange: (event) => setFormState((prev) => ({
									...prev,
									withCheckExpression: event.target.value
								})),
								placeholder: "user_id = current_user",
								className: "min-h-[96px] font-mono text-[12px]"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("SQL expression checked on INSERT and UPDATE operations.")
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex flex-col gap-2 sm:flex-row sm:justify-start",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: executeSql.isPending || !formState.name.trim(),
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
function isBaseTable(tableType) {
	return tableType?.toUpperCase() === "BASE TABLE";
}
function PostgresTableSecurityPanel({ databaseId, tableId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { canWrite } = useDatabaseTableOperationsAccess();
	const { tableInfo, isLoading: tableInfoLoading } = usePostgresTableInfo(projectId, databaseId, tableId);
	const { rowSecurityEnabled, forceRowSecurity, isLoading: rlsLoading, isFetching: rlsFetching, refetch: refetchRls } = usePostgresTableRls(projectId, databaseId, tableId);
	const { policies, isLoading: policiesLoading, isFetching: policiesFetching, refetch: refetchPolicies } = usePostgresTablePolicies(projectId, databaseId, tableId);
	const executeSql = useExecutePostgresSql(projectId, databaseId);
	const [searchValue, setSearchValue] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedPolicy, setSelectedPolicy] = useState(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [policyToDelete, setPolicyToDelete] = useState(null);
	const [rowSecurityDraft, setRowSecurityDraft] = useState(null);
	const [forceRowSecurityDraft, setForceRowSecurityDraft] = useState(null);
	const supportsRls = isBaseTable(tableInfo?.table_type);
	const effectiveRowSecurity = rowSecurityDraft ?? rowSecurityEnabled;
	const effectiveForceRowSecurity = forceRowSecurityDraft ?? forceRowSecurity;
	const isLoading = tableInfoLoading || rlsLoading || policiesLoading;
	const setDialogOpenState = (open) => {
		setDialogOpen(open);
		if (!open) setSelectedPolicy(null);
	};
	const handleOpenCreate = () => {
		setSelectedPolicy(null);
		setDialogOpenState(true);
	};
	const handleOpenEdit = (policy) => {
		setSelectedPolicy(policy);
		setDialogOpen(true);
	};
	const refreshSecurity = async () => {
		setRowSecurityDraft(null);
		setForceRowSecurityDraft(null);
		await Promise.all([refetchRls(), refetchPolicies()]);
	};
	const handleRefreshPolicies = () => {
		refreshSecurity();
	};
	const handleUpdateRls = async () => {
		try {
			const statements = [];
			if (effectiveRowSecurity !== rowSecurityEnabled) statements.push(effectiveRowSecurity ? buildPostgresEnableRlsSql(tableId) : buildPostgresDisableRlsSql(tableId));
			if (effectiveForceRowSecurity !== forceRowSecurity) statements.push(effectiveForceRowSecurity ? buildPostgresForceRlsSql(tableId) : buildPostgresNoForceRlsSql(tableId));
			if (statements.length === 0) return;
			await executeSql.mutateAsync(buildPostgresSingleRequestDdlSql(statements, "Update table RLS"));
			toast.success(t("Security has been updated"));
			await refreshSecurity();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to update security"));
		}
	};
	const handleDeletePolicy = async () => {
		if (!policyToDelete) return;
		try {
			await executeSql.mutateAsync(buildPostgresDropPolicySql(tableId, policyToDelete));
			toast.success(t("Policy deleted"));
			setDeleteDialogOpen(false);
			setPolicyToDelete(null);
			await refetchPolicies();
		} catch (error) {
			toast.error(getErrorMessage(error) ?? t("Failed to delete policy"));
		}
	};
	const filteredPolicies = useMemo(() => {
		return policies.filter((policy) => matchesPostgresLocalSearch(searchValue, policy.policyname, policy.cmd, policy.permissive, formatPostgresPolicyRoles(policy.roles), policy.qual ?? "", policy.with_check ?? ""));
	}, [policies, searchValue]);
	const hasSearch = searchValue.trim().length > 0;
	const isRefreshingPolicies = policiesFetching || rlsFetching;
	const rlsChanged = effectiveRowSecurity !== rowSecurityEnabled || effectiveForceRowSecurity !== forceRowSecurity;
	if (isLoading && !tableInfo) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading security settings…")
		})
	});
	if (!supportsRls) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[15px] font-medium text-foreground",
			children: t("Row level security is not available")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 max-w-sm text-[13px] text-muted-foreground",
			children: t("Row level security can only be configured on base tables.")
		})]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "w-full flex-1 overflow-y-auto px-4 py-4 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-7xl space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Row level security (RLS)")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("When row level security is enabled, access to rows is controlled by policies on this table.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(Switch, {
										id: "postgres-row-security",
										checked: effectiveRowSecurity,
										onCheckedChange: (checked) => setRowSecurityDraft(checked),
										disabled: !canWrite
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "postgres-row-security",
										className: "text-[13px] text-foreground",
										children: t("Enable row level security")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(Switch, {
										id: "postgres-force-row-security",
										checked: effectiveForceRowSecurity,
										onCheckedChange: (checked) => setForceRowSecurityDraft(checked),
										disabled: !canWrite || !effectiveRowSecurity
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "postgres-force-row-security",
										className: "text-[13px] text-foreground",
										children: t("Force row level security for table owner")
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground",
									children: t("Policies define which roles can read or write rows. Without a matching policy, access is denied when row level security is enabled.")
								})
							]
						}),
						canWrite ? /* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !rlsChanged || executeSql.isPending,
								onClick: () => void handleUpdateRls(),
								children: t("Update")
							})
						}) : null
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Policies")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("Manage row level security policies for this table.")
								})] }), policies.length > 0 ? /* @__PURE__ */ jsxs("div", {
									className: "flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "relative min-w-[200px] flex-1 lg:w-[240px] lg:flex-none",
											children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
												type: "text",
												value: searchValue,
												onChange: (event) => setSearchValue(event.target.value),
												placeholder: t("Search policies..."),
												className: "h-9 ps-9 text-[13px]",
												"aria-label": t("Search policies...")
											})]
										}),
										/* @__PURE__ */ jsx(RefreshButton, {
											onClick: handleRefreshPolicies,
											isRefreshing: isRefreshingPolicies
										}),
										canWrite ? /* @__PURE__ */ jsxs(Button, {
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: handleOpenCreate,
											children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Create policy")]
										}) : null
									]
								}) : null]
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						policies.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "px-6 py-8 min-h-[280px] flex flex-col items-center justify-center",
							children: /* @__PURE__ */ jsx(EmptyState, {
								icon: Shield,
								title: t("No policies"),
								description: canWrite ? t("Create a policy to control access to rows in this table.") : t("This table has no row level security policies yet."),
								isEmpty: true,
								iconSize: "lg",
								action: canWrite ? /* @__PURE__ */ jsx(Button, {
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: handleOpenCreate,
									children: t("Create policy")
								}) : void 0
							})
						}) : hasSearch && filteredPolicies.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "px-6 py-8 min-h-[200px] flex flex-col items-center justify-center",
							children: /* @__PURE__ */ jsx(EmptyState, {
								icon: Shield,
								title: t("No policies match your search"),
								description: t("Try adjusting or clearing your search."),
								hasFilters: true,
								iconSize: "lg"
							})
						}) : /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Policy Name")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Command")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Roles")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Type")
								}),
								/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-right w-[100px]" })
							]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: filteredPolicies.map((policy) => /* @__PURE__ */ jsxs(TableRow, { children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-medium",
									children: policy.policyname
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: normalizePostgresPolicyCommand(policy.cmd)
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: formatPostgresPolicyRoles(policy.roles)
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: policy.permissive?.toUpperCase() === "RESTRICTIVE" ? t("Restrictive") : t("Permissive")
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-right",
								children: canWrite ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
								}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
									align: "end",
									children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
										onClick: () => handleOpenEdit(policy),
										children: /* @__PURE__ */ jsx(MenuItemContent, {
											icon: Pencil,
											children: t("Update")
										})
									}), /* @__PURE__ */ jsx(DropdownMenuItem, {
										onClick: () => {
											setPolicyToDelete(policy.policyname);
											setDeleteDialogOpen(true);
										},
										children: /* @__PURE__ */ jsx(MenuItemContent, {
											icon: Trash2,
											children: t("Delete")
										})
									})]
								})] }) : null
							})
						] }, policy.policyname)) })] })
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(PostgresTablePolicyDrawer, {
			open: dialogOpen,
			onOpenChange: setDialogOpenState,
			projectId,
			databaseId,
			tableId,
			policy: selectedPolicy,
			onSuccess: () => void refetchPolicies()
		}, selectedPolicy?.policyname ?? "create"),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete policy") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Delete"),
							" \"",
							policyToDelete,
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
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						disabled: executeSql.isPending,
						onClick: () => void handleDeletePolicy(),
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function PostgresTableSecurityView({ databaseId, tableId }) {
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { canWrite } = useDatabaseTableOperationsAccess();
	usePostgresTableHeaderSlot({});
	useEffect(() => {
		if (canWrite) return;
		navigate({
			...postgresNav({
				projectId,
				databaseId
			}).table({ tableId }).rows(),
			replace: true
		});
	}, [
		canWrite,
		databaseId,
		navigate,
		projectId,
		tableId
	]);
	if (!canWrite) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden",
		children: /* @__PURE__ */ jsx(PostgresTableSecurityPanel, {
			databaseId,
			tableId
		})
	});
}
function PostgresTableSecurityPage() {
	const { databaseId, tableId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(PostgresTableSecurityView, {
		databaseId,
		tableId: normalizePostgresTableRouteId(tableId)
	});
}
export { PostgresTableSecurityPage as component };
