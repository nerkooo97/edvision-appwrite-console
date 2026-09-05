import { t as cn } from "./utils-DoqqkI3X.js";
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
import { A_ as backendTypeBadgeVariant, Cf as useTerminatePostgresIdleInTransaction, F_ as formatPostgresClientAddress, G_ as matchesPostgresConnectionStateFilter, H_ as isLongRunningConnection, I_ as formatPostgresConnectionDatabase, K_ as serializePostgresActiveConnectionJson, N_ as formatPostgresApplicationName, R_ as formatPostgresConnectionUsername, Sf as useTerminatePostgresBackend, U_ as isPostgresClientBackend, V_ as formatPostgresWaitEvent, W_ as matchesPostgresConnectionBackendScope, _f as usePostgresActiveConnections, gf as useCancelPostgresBackend, j_ as connectionStateBadgeVariant, z_ as formatPostgresDurationSince } from "./hooks-BONwG3Mt.js";
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
import "./popover-BjTNxuf9.js";
import "./select-BYGLGp-f.js";
import { r as copyToClipboard } from "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import "./sheet-CbM5lIV1.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import "./postgres-sql-editor-shortcuts-CXAI529H.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./postgres-tab-route-loader-B--X8VvC.js";
import { t as Route$1 } from "./projects._projectId.databases.postgres._databaseId.connections-B4Qo-ahH.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { a as localizePostgresConnectionStateLabel, i as localizePostgresBackendTypeLabel } from "./resource-status-labels-C-bLMJxj.js";
import { n as useDatabaseAdminOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { i as usePostgresSidebar } from "./PostgresSidebarContext-CiaD4ogj.js";
import "./postgres-chrome-B-StjUdY.js";
import { t as PostgresSegmentedToggle } from "./PostgresSegmentedToggle-DI-wMyPm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import { AlertCircle, Cable, Copy, FileJson, LayoutList, SearchCode, StopCircle, Unplug } from "lucide-react";
function DetailSection({ title, children, bodyClassName }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "overflow-hidden rounded-xl border border-border bg-card/40",
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/20 px-4 py-2.5",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: title
			})
		}), /* @__PURE__ */ jsx("div", {
			className: cn("px-4 py-3", bodyClassName),
			children
		})]
	});
}
function DetailField({ label, children, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("min-w-0", className),
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1",
			children
		})]
	});
}
function PostgresConnectionDrawer({ open, onOpenChange, connection, canManageConnections, manageDisabledTooltip, onOpenInSqlEditor, onCancelQuery, onTerminateConnection, isCancelPending, isTerminatePending }) {
	const t = useT();
	const handleCopyPid = useCallback(() => {
		if (!connection) return;
		copyToClipboard("PID", String(connection.pid));
	}, [connection]);
	if (!connection) return null;
	const longRunning = isLongRunningConnection(connection);
	const isClient = isPostgresClientBackend(connection);
	const canCancel = isClient && connection.state?.toLowerCase() === "active";
	const canTerminate = isClient;
	const actionPending = isCancelPending || isTerminatePending;
	const query = connection.query?.trim() || null;
	const clientAddress = formatPostgresClientAddress(connection.clientHost, connection.clientPort);
	const queryDuration = formatPostgresDurationSince(connection.queryStart);
	const connectionAge = formatPostgresDurationSince(connection.backendStart);
	const usernameLabel = formatPostgresConnectionUsername(connection.username, connection.backendType);
	const databaseLabel = formatPostgresConnectionDatabase(connection.database);
	const applicationLabel = formatPostgresApplicationName(connection.applicationName);
	const stateLabel = localizePostgresConnectionStateLabel(connection.state, connection.backendType, t);
	const typeLabel = localizePostgresBackendTypeLabel(connection.backendType, t);
	const waitEventLabel = formatPostgresWaitEvent(connection.waitEventType, connection.waitEvent);
	const showActionFooter = isClient && (canCancel || canTerminate);
	const renderManageButton = (label, icon, onClick, disabled) => {
		const button = /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "h-9 text-[13px]",
			disabled: disabled || actionPending,
			onClick,
			children: [icon, label]
		});
		if (!canManageConnections && manageDisabledTooltip) return /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("span", {
					className: "inline-flex",
					children: button
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-xs text-[12px]",
				children: /* @__PURE__ */ jsx("p", { children: t(manageDisabledTooltip) })
			})] })
		});
		return button;
	};
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: t("Connection details"),
		description: `Details for connection PID ${connection.pid}`,
		maxWidth: "sm:max-w-xl",
		side: "right",
		contentClassName: "overflow-hidden",
		headerActions: /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 shrink-0 p-0",
					onClick: handleCopyPid,
					children: [/* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
						className: "sr-only",
						children: t("Copy PID")
					})]
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				children: t("Copy PID")
			})] })
		}),
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-border" }), /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 flex-1 flex-col",
			children: [/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 px-6 py-6",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-gradient-to-br from-muted/40 via-background to-background p-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-start gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(Cable, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "text-[16px] font-semibold tracking-tight text-foreground",
													children: ["PID ", connection.pid]
												}),
												/* @__PURE__ */ jsx(Badge, {
													variant: backendTypeBadgeVariant(connection.backendType),
													className: "shrink-0 text-[10px]",
													children: typeLabel
												}),
												stateLabel === "-" ? null : /* @__PURE__ */ jsx(Badge, {
													variant: connectionStateBadgeVariant(connection.state, connection.backendType),
													className: "shrink-0 text-[10px]",
													children: stateLabel
												}),
												longRunning ? /* @__PURE__ */ jsx(Badge, {
													variant: "warning",
													className: "shrink-0 text-[10px]",
													children: t("Long-running")
												}) : null
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "mt-1.5 text-[13px] text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", {
												className: cn(usernameLabel !== "System" && usernameLabel !== "-" && "font-medium text-foreground"),
												children: usernameLabel
											}), databaseLabel !== "-" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
												className: "mx-1.5 text-border",
												children: "·"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-mono",
												children: databaseLabel
											})] }) : null]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 font-mono text-[12px] text-muted-foreground",
											children: clientAddress
										}),
										connection.backendStart ? /* @__PURE__ */ jsx("p", {
											className: "mt-3 text-[12px] text-muted-foreground",
											children: /* @__PURE__ */ jsx(DateTooltip, {
												date: connection.backendStart,
												showFormattedDate: true,
												className: "text-[12px]"
											})
										}) : null
									]
								})]
							})
						}),
						/* @__PURE__ */ jsx(DetailSection, {
							title: t("Session"),
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(DetailField, {
										label: "PID",
										children: /* @__PURE__ */ jsx(CopyableId, {
											id: String(connection.pid),
											size: "xs",
											maxWidth: 220
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Type"),
										children: /* @__PURE__ */ jsx(Badge, {
											variant: backendTypeBadgeVariant(connection.backendType),
											className: "text-[10px]",
											children: typeLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("User"),
										children: /* @__PURE__ */ jsx("p", {
											className: cn("text-[13px]", usernameLabel === "System" || usernameLabel === "-" ? "text-muted-foreground" : "font-medium text-foreground"),
											children: usernameLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Database"),
										children: /* @__PURE__ */ jsx("p", {
											className: "font-mono text-[12px] text-muted-foreground",
											children: databaseLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Application"),
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: applicationLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Client"),
										children: /* @__PURE__ */ jsx(CopyableId, {
											id: clientAddress,
											displayText: clientAddress,
											size: "xs",
											maxWidth: 280,
											className: "max-w-full"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ jsx(DetailSection, {
							title: t("Activity"),
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Connection state"),
										children: stateLabel === "-" ? /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: "-"
										}) : /* @__PURE__ */ jsx(Badge, {
											variant: connectionStateBadgeVariant(connection.state, connection.backendType),
											className: "text-[10px]",
											children: stateLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Wait event"),
										children: /* @__PURE__ */ jsx("p", {
											className: "font-mono text-[12px] text-muted-foreground",
											children: waitEventLabel
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Query duration"),
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-foreground",
											children: queryDuration
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Connection age"),
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-foreground",
											children: connectionAge
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Backend start"),
										children: connection.backendStart ? /* @__PURE__ */ jsx(DateTooltip, { date: connection.backendStart }) : /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: "-"
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("Query start"),
										children: connection.queryStart ? /* @__PURE__ */ jsx(DateTooltip, { date: connection.queryStart }) : /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: "-"
										})
									}),
									/* @__PURE__ */ jsx(DetailField, {
										label: t("State change"),
										className: "sm:col-span-2",
										children: connection.stateChange ? /* @__PURE__ */ jsx(DateTooltip, { date: connection.stateChange }) : /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: "-"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ jsx(DetailSection, {
							title: t("Query"),
							bodyClassName: "p-0",
							children: query ? /* @__PURE__ */ jsx(ConnectCodeExample, {
								code: query,
								language: "sql",
								headless: true,
								actions: /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 shrink-0 gap-1 text-[12px] text-muted-foreground",
									onClick: () => onOpenInSqlEditor(query),
									children: [/* @__PURE__ */ jsx(SearchCode, { className: "h-3.5 w-3.5" }), t("Open in SQL editor")]
								})
							}) : /* @__PURE__ */ jsx("p", {
								className: "px-4 py-3 text-[13px] text-muted-foreground",
								children: t("No query running on this connection.")
							})
						})
					]
				})
			}), showActionFooter ? /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
				children: [canCancel ? renderManageButton("Cancel query", /* @__PURE__ */ jsx(StopCircle, { className: "me-1.5 h-3.5 w-3.5" }), () => onCancelQuery(connection), !canManageConnections) : null, canTerminate ? renderManageButton("Terminate connection", /* @__PURE__ */ jsx(Unplug, { className: "me-1.5 h-3.5 w-3.5" }), () => onTerminateConnection(connection), !canManageConnections) : null]
			}) : null]
		})] })
	});
}
function normalizeQuery$1(query) {
	if (!query) return null;
	return query.trim() || null;
}
function PostgresConnectionContextMenu({ connection, canManageConnections, onOpenDetails, onOpenInSqlEditor, onCancelQuery, onTerminateConnection, children }) {
	const t = useT();
	const query = normalizeQuery$1(connection.query);
	const isClient = isPostgresClientBackend(connection);
	const canCancel = isClient && connection.state?.toLowerCase() === "active";
	const canTerminate = isClient;
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-52",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onOpenDetails(),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyToClipboard("PID", String(connection.pid)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy PID")]
				}),
				query ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyToClipboard("Query", query),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy query")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyToClipboard("JSON", serializePostgresActiveConnectionJson(connection)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			query ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => onOpenInSqlEditor(query),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: SearchCode }), t("Open in SQL editor")]
			})] }) : null,
			isClient ? /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					disabled: !canManageConnections || !canCancel,
					onSelect: () => onCancelQuery(),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: StopCircle }), t("Cancel query")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					disabled: !canManageConnections || !canTerminate,
					onSelect: () => onTerminateConnection(),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Unplug }), t("Terminate connection")]
				})
			] }) : null
		]
	})] });
}
function normalizeQuery(query) {
	if (!query) return null;
	return query.trim() || null;
}
function PostgresConnectionRowActionsMenu({ connection, canManageConnections, onOpenDetails, onOpenInSqlEditor, onCancelQuery, onTerminateConnection }) {
	const t = useT();
	const query = normalizeQuery(connection.query);
	const isClient = isPostgresClientBackend(connection);
	const canCancel = isClient && connection.state?.toLowerCase() === "active";
	const canTerminate = isClient;
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { onClick: (event) => event.stopPropagation() })
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (event) => {
					event.stopPropagation();
					onOpenDetails();
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: LayoutList,
					children: t("Overview")
				})
			}),
			query ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (event) => {
					event.stopPropagation();
					onOpenInSqlEditor(query);
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: SearchCode,
					children: t("Open in SQL editor")
				})
			}), /* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (event) => {
					event.stopPropagation();
					copyToClipboard("Query", query);
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Copy,
					children: t("Copy query")
				})
			})] }) : null,
			isClient ? /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					disabled: !canManageConnections || !canCancel,
					onClick: (event) => {
						event.stopPropagation();
						onCancelQuery();
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: StopCircle,
						children: t("Cancel query")
					})
				}),
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					disabled: !canManageConnections || !canTerminate,
					onClick: (event) => {
						event.stopPropagation();
						onTerminateConnection();
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: Unplug,
						children: t("Terminate connection")
					})
				})
			] }) : null
		]
	})] });
}
var BACKEND_SCOPES = [{
	id: "clients",
	label: "Clients"
}, {
	id: "backends",
	label: "Backends"
}];
var STATE_FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "active",
		label: "Active"
	},
	{
		id: "idle",
		label: "Idle"
	},
	{
		id: "idle in transaction",
		label: "Idle in transaction"
	},
	{
		id: "long-running",
		label: "Long-running"
	}
];
function truncateQuery(query, maxLength = 72) {
	if (!query) return "-";
	const trimmed = query.replace(/\s+/g, " ").trim();
	if (trimmed.length <= maxLength) return trimmed;
	return `${trimmed.slice(0, maxLength)}…`;
}
var connectionsTableClassName = "w-full min-w-[80rem] table-fixed";
function ConnectionsTableColGroup() {
	return /* @__PURE__ */ jsxs("colgroup", { children: [
		/* @__PURE__ */ jsx("col", { className: "w-[7rem]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[7%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[8%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[9%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[9%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[10%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[8%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[7%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[9%]" }),
		/* @__PURE__ */ jsx("col", { className: "" }),
		/* @__PURE__ */ jsx("col", { className: "w-[10%]" }),
		/* @__PURE__ */ jsx("col", { className: "w-[100px]" })
	] });
}
function ConnectionsTableHead() {
	const t = useT();
	return /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
		className: "border-b border-border hover:bg-transparent",
		children: [
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 ps-6 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)] sm:ps-8",
				children: "PID"
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Type")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("User")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Database")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Application")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Client")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Connection state")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Duration")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Wait")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Query")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]",
				children: t("Started")
			}),
			/* @__PURE__ */ jsx(TableHead, { className: "sticky top-0 z-10 w-[100px] bg-background px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]" })
		]
	}) });
}
function ConnectionsSkeletonRows({ rowCount }) {
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: rowCount }, (_, index) => /* @__PURE__ */ jsxs(TableRow, {
		className: "pointer-events-none hover:bg-transparent",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3 ps-6 sm:ps-8",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-10" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-14 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-20" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-14 rounded px-1.5" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-10" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-full max-w-[12rem]" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 whitespace-nowrap px-4 py-3",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-[6.5rem]" })
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3 text-end",
				children: /* @__PURE__ */ jsx(Skeleton, { className: "ms-auto h-8 w-8 rounded-md" })
			})
		]
	}, index)) });
}
function PostgresConnectionDetails({ projectId, databaseId, centerInPanel = false }) {
	const t = useT();
	const { openQueryTab } = usePostgresSidebar();
	const { canWrite: canManageConnections, writeTooltip: manageDisabledTooltip } = useDatabaseAdminOperationsAccess({ permissionDeniedTooltip: t("You don't have permission to manage connections.") });
	const [backendScope, setBackendScope] = useState("clients");
	const [stateFilter, setStateFilter] = useState("all");
	const [selectedConnection, setSelectedConnection] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [pendingAction, setPendingAction] = useState(null);
	const { connections, isLoading, isFetching, error, refetch } = usePostgresActiveConnections(projectId, databaseId);
	const cancelMutation = useCancelPostgresBackend(projectId, databaseId);
	const terminateMutation = useTerminatePostgresBackend(projectId, databaseId);
	const terminateIdleMutation = useTerminatePostgresIdleInTransaction(projectId, databaseId);
	const scopedConnections = useMemo(() => connections.filter((connection) => matchesPostgresConnectionBackendScope(connection, backendScope)), [connections, backendScope]);
	const filteredConnections = useMemo(() => scopedConnections.filter((connection) => matchesPostgresConnectionStateFilter(connection, stateFilter)), [scopedConnections, stateFilter]);
	const clientConnectionCount = useMemo(() => connections.filter(isPostgresClientBackend).length, [connections]);
	const backendConnectionCount = useMemo(() => connections.filter((connection) => !isPostgresClientBackend(connection)).length, [connections]);
	const idleInTransactionCount = useMemo(() => connections.filter((connection) => isPostgresClientBackend(connection) && matchesPostgresConnectionStateFilter(connection, "idle in transaction")).length, [connections]);
	const filterCounts = useMemo(() => {
		const counts = {
			all: scopedConnections.length,
			active: 0,
			idle: 0,
			"idle in transaction": 0,
			"long-running": 0
		};
		for (const connection of scopedConnections) {
			if (connection.state?.toLowerCase() === "active") counts.active += 1;
			if (connection.state?.toLowerCase() === "idle") counts.idle += 1;
			if (matchesPostgresConnectionStateFilter(connection, "idle in transaction")) counts["idle in transaction"] += 1;
			if (isLongRunningConnection(connection)) counts["long-running"] += 1;
		}
		return counts;
	}, [scopedConnections]);
	const errorMessage = error ? getErrorMessage(error) : null;
	const actionPending = cancelMutation.isPending || terminateMutation.isPending || terminateIdleMutation.isPending;
	const openDrawer = useCallback((connection) => {
		setSelectedConnection(connection);
		setDrawerOpen(true);
	}, []);
	const closeDrawer = useCallback(() => {
		setDrawerOpen(false);
		setSelectedConnection(null);
	}, []);
	const openInSqlEditor = useCallback((sql) => {
		openQueryTab(sql);
	}, [openQueryTab]);
	const runPendingAction = useCallback(async () => {
		if (!pendingAction) return;
		try {
			if (pendingAction.type === "cancel") await cancelMutation.mutateAsync(pendingAction.connection.pid);
			else if (pendingAction.type === "terminate") await terminateMutation.mutateAsync(pendingAction.connection.pid);
			else await terminateIdleMutation.mutateAsync();
			if (pendingAction.type !== "terminate-idle" && selectedConnection?.pid === pendingAction.connection.pid) closeDrawer();
		} finally {
			setPendingAction(null);
		}
	}, [
		cancelMutation,
		closeDrawer,
		pendingAction,
		selectedConnection?.pid,
		terminateIdleMutation,
		terminateMutation
	]);
	const bulkTerminateButton = /* @__PURE__ */ jsxs(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "h-9 shrink-0 text-[13px]",
		disabled: !canManageConnections || idleInTransactionCount === 0 || actionPending,
		onClick: () => setPendingAction({ type: "terminate-idle" }),
		children: [/* @__PURE__ */ jsx(Unplug, { className: "me-1.5 h-3.5 w-3.5" }), t("Terminate idle in transaction")]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col overflow-hidden", centerInPanel && "items-center justify-center"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex min-h-0 w-full flex-1 flex-col overflow-hidden", centerInPanel && "my-auto max-h-full shrink-0"),
				children: [
					errorMessage ? /* @__PURE__ */ jsx("div", {
						className: "shrink-0 px-4 pb-4 pt-4 sm:px-6",
						children: /* @__PURE__ */ jsxs(Alert, {
							variant: "destructive",
							children: [
								/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
								/* @__PURE__ */ jsx(AlertTitle, { children: t("Failed to load connections") }),
								/* @__PURE__ */ jsx(AlertDescription, {
									className: "text-[13px]",
									children: errorMessage
								})
							]
						})
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "shrink-0 border-b border-border bg-background px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ jsx(PostgresSegmentedToggle, {
									variant: "inline",
									value: backendScope,
									onValueChange: (value) => {
										setBackendScope(value);
										setStateFilter("all");
									},
									ariaLabel: "Connection scope",
									options: BACKEND_SCOPES.map((scope) => ({
										value: scope.id,
										label: scope.label
									}))
								}), backendScope === "clients" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
									className: "hidden h-4 w-px shrink-0 bg-border sm:block",
									"aria-hidden": true
								}), STATE_FILTERS.map((filter) => {
									const count = filterCounts[filter.id];
									return /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: stateFilter === filter.id ? "secondary" : "outline",
										size: "sm",
										className: "h-8 text-[12px]",
										onClick: () => setStateFilter(filter.id),
										children: [filter.label, /* @__PURE__ */ jsx("span", {
											className: "ms-1.5 text-muted-foreground",
											children: count
										})]
									}, filter.id);
								})] }) : null]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [!canManageConnections ? /* @__PURE__ */ jsx(TooltipProvider, {
									delayDuration: 0,
									children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx("span", {
											className: "inline-flex",
											children: bulkTerminateButton
										})
									}), /* @__PURE__ */ jsx(TooltipContent, {
										side: "bottom",
										className: "max-w-xs",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[12px]",
											children: t(manageDisabledTooltip)
										})
									})] })
								}) : bulkTerminateButton, /* @__PURE__ */ jsx(RefreshButton, {
									onClick: () => void refetch(),
									isRefreshing: isFetching
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex min-h-0 min-w-0 flex-1 flex-col",
						children: isLoading && connections.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
							role: "status",
							"aria-live": "polite",
							"aria-busy": "true",
							"aria-label": t("Loading connections"),
							children: /* @__PURE__ */ jsxs(Table$1, {
								withScrollContainer: false,
								className: connectionsTableClassName,
								children: [
									/* @__PURE__ */ jsx(ConnectionsTableColGroup, {}),
									/* @__PURE__ */ jsx(ConnectionsTableHead, {}),
									/* @__PURE__ */ jsx(TableBody, { children: /* @__PURE__ */ jsx(ConnectionsSkeletonRows, { rowCount: 8 }) })
								]
							})
						}) : filteredConnections.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "relative min-h-0 min-w-0 flex-1 overflow-auto",
							children: /* @__PURE__ */ jsxs(Table$1, {
								withScrollContainer: false,
								className: connectionsTableClassName,
								children: [
									/* @__PURE__ */ jsx(ConnectionsTableColGroup, {}),
									/* @__PURE__ */ jsx(ConnectionsTableHead, {}),
									/* @__PURE__ */ jsx(TableBody, { children: filteredConnections.map((connection) => {
										const longRunning = isLongRunningConnection(connection);
										const clientAddress = formatPostgresClientAddress(connection.clientHost, connection.clientPort);
										const startedAt = connection.queryStart ?? connection.backendStart;
										const usernameLabel = formatPostgresConnectionUsername(connection.username, connection.backendType);
										const databaseLabel = formatPostgresConnectionDatabase(connection.database);
										const applicationLabel = formatPostgresApplicationName(connection.applicationName);
										const stateLabel = localizePostgresConnectionStateLabel(connection.state, connection.backendType, t);
										const typeLabel = localizePostgresBackendTypeLabel(connection.backendType, t);
										return /* @__PURE__ */ jsx(PostgresConnectionContextMenu, {
											connection,
											canManageConnections,
											onOpenDetails: () => openDrawer(connection),
											onOpenInSqlEditor: openInSqlEditor,
											onCancelQuery: () => setPendingAction({
												type: "cancel",
												connection
											}),
											onTerminateConnection: () => setPendingAction({
												type: "terminate",
												connection
											}),
											children: /* @__PURE__ */ jsxs(TableRow, {
												role: "button",
												tabIndex: 0,
												"data-state": drawerOpen && selectedConnection?.pid === connection.pid ? "selected" : void 0,
												"aria-label": `Open connection details for PID ${connection.pid}`,
												className: cn("cursor-pointer", longRunning && "bg-amber-500/5 hover:bg-amber-500/10", drawerOpen && selectedConnection?.pid === connection.pid && "bg-muted/60 hover:bg-muted/60"),
												onClick: () => openDrawer(connection),
												onKeyDown: (event) => {
													if (event.key === "Enter" || event.key === " ") {
														event.preventDefault();
														openDrawer(connection);
													}
												},
												children: [
													/* @__PURE__ */ jsx(TableCell, {
														className: "overflow-hidden whitespace-nowrap px-4 py-3 ps-6 sm:ps-8",
														children: /* @__PURE__ */ jsx("span", {
															className: "block truncate font-mono text-[13px] text-foreground",
															children: connection.pid
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "overflow-hidden whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx(Badge, {
															variant: backendTypeBadgeVariant(connection.backendType),
															className: "shrink-0 text-[10px]",
															children: typeLabel
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: cn("block truncate text-[13px]", usernameLabel === "System" ? "text-muted-foreground" : "font-medium text-foreground"),
															title: usernameLabel,
															children: usernameLabel
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: cn("block truncate font-mono text-[13px]", databaseLabel === "-" ? "text-muted-foreground" : "text-foreground"),
															title: databaseLabel,
															children: databaseLabel
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: "block truncate text-[13px] text-muted-foreground",
															title: applicationLabel,
															children: applicationLabel
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: "block truncate font-mono text-[13px] text-muted-foreground",
															title: clientAddress,
															children: clientAddress
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [stateLabel === "-" ? /* @__PURE__ */ jsx("span", {
																className: "text-[13px] text-muted-foreground",
																children: "-"
															}) : /* @__PURE__ */ jsx(Badge, {
																variant: connectionStateBadgeVariant(connection.state, connection.backendType),
																className: "shrink-0 text-[10px]",
																children: stateLabel
															}), longRunning ? /* @__PURE__ */ jsx(Badge, {
																variant: "warning",
																className: "shrink-0 text-[10px]",
																children: t("Long-running")
															}) : null]
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: "text-[13px] text-muted-foreground",
															children: formatPostgresDurationSince(connection.queryStart ?? connection.backendStart)
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: "block truncate text-[13px] text-muted-foreground",
															title: formatPostgresWaitEvent(connection.waitEventType, connection.waitEvent),
															children: formatPostgresWaitEvent(connection.waitEventType, connection.waitEvent)
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: /* @__PURE__ */ jsx("span", {
															className: "block truncate font-mono text-[12px] text-muted-foreground",
															title: connection.query ?? void 0,
															children: truncateQuery(connection.query)
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "min-w-0 whitespace-nowrap px-4 py-3",
														children: startedAt ? /* @__PURE__ */ jsx(DateTooltip, {
															date: startedAt,
															className: "text-[12px] text-muted-foreground"
														}) : /* @__PURE__ */ jsx("span", {
															className: "text-[12px] text-muted-foreground",
															children: "-"
														})
													}),
													/* @__PURE__ */ jsx(TableCell, {
														className: "px-4 py-3 text-end",
														onClick: (event) => event.stopPropagation(),
														children: /* @__PURE__ */ jsx("div", {
															className: "flex justify-end",
															children: /* @__PURE__ */ jsx(PostgresConnectionRowActionsMenu, {
																connection,
																canManageConnections,
																onOpenDetails: () => openDrawer(connection),
																onOpenInSqlEditor: openInSqlEditor,
																onCancelQuery: () => setPendingAction({
																	type: "cancel",
																	connection
																}),
																onTerminateConnection: () => setPendingAction({
																	type: "terminate",
																	connection
																})
															})
														})
													})
												]
											})
										}, connection.pid);
									}) })
								]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "h-[54px] shrink-0 border-t border-border bg-background px-4 sm:px-6",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-full items-center justify-between gap-3 py-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground",
									children: filteredConnections.length === scopedConnections.length ? `${scopedConnections.length} connection${scopedConnections.length === 1 ? "" : "s"}` : `${filteredConnections.length} of ${scopedConnections.length} connections`
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Refreshes every 30 seconds")
								})]
							})
						})] }) : /* @__PURE__ */ jsx(EmptyState, {
							icon: Cable,
							title: backendScope === "clients" && clientConnectionCount === 0 && backendConnectionCount > 0 ? t("No client connections") : backendScope === "backends" && backendConnectionCount === 0 && clientConnectionCount > 0 ? t("No system backends") : stateFilter === "all" && backendScope === "clients" ? t("No active connections") : void 0,
							description: backendScope === "clients" && clientConnectionCount === 0 && backendConnectionCount > 0 ? t("Only PostgreSQL system backends are running. Switch to Backends to inspect them.") : backendScope === "backends" && backendConnectionCount === 0 && clientConnectionCount > 0 ? t("Switch to Clients to inspect application sessions.") : stateFilter === "all" && backendScope === "clients" ? t("Client sessions will appear here when applications connect to this instance.") : void 0,
							isEmpty: backendScope === "clients" ? clientConnectionCount === 0 : backendConnectionCount === 0,
							hasFilters: backendScope === "clients" && stateFilter !== "all" || backendScope === "clients" && clientConnectionCount > 0 && filteredConnections.length === 0,
							variant: "centered"
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(PostgresConnectionDrawer, {
				open: drawerOpen,
				onOpenChange: (open) => {
					if (open) {
						setDrawerOpen(true);
						return;
					}
					closeDrawer();
				},
				connection: selectedConnection,
				canManageConnections,
				manageDisabledTooltip,
				onOpenInSqlEditor: openInSqlEditor,
				onCancelQuery: (connection) => setPendingAction({
					type: "cancel",
					connection
				}),
				onTerminateConnection: (connection) => setPendingAction({
					type: "terminate",
					connection
				}),
				isCancelPending: cancelMutation.isPending,
				isTerminatePending: terminateMutation.isPending || terminateIdleMutation.isPending
			}),
			/* @__PURE__ */ jsx(AlertDialog, {
				open: pendingAction != null,
				onOpenChange: (open) => {
					if (!open) setPendingAction(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: pendingAction?.type === "cancel" ? t("Cancel query?") : pendingAction?.type === "terminate" ? t("Terminate connection?") : t("Terminate idle in transaction connections?") }), /* @__PURE__ */ jsx(AlertDialogDescription, {
					className: "text-[13px]",
					children: pendingAction?.type === "cancel" ? /* @__PURE__ */ jsxs(Fragment, { children: [
						t("Cancel the active query for PID"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-mono",
							children: pendingAction.connection.pid
						}),
						". ",
						t("The client session will stay connected.")
					] }) : pendingAction?.type === "terminate" ? /* @__PURE__ */ jsxs(Fragment, { children: [
						t("Terminate the client session for PID"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-mono",
							children: pendingAction.connection.pid
						}),
						". ",
						t("The client will need to reconnect.")
					] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
						t("Terminate"),
						" ",
						idleInTransactionCount,
						" ",
						idleInTransactionCount === 1 ? t("connection currently idle in transaction.") : t("connections currently idle in transaction."),
						" ",
						t("Open transactions will be rolled back.")
					] })
				})] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: actionPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					disabled: actionPending,
					onClick: () => void runPendingAction(),
					children: pendingAction?.type === "cancel" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(StopCircle, { className: "me-1.5 h-3.5 w-3.5" }), t("Cancel query")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Unplug, { className: "me-1.5 h-3.5 w-3.5" }), t("Terminate")] })
				})] })] })
			})
		]
	});
}
function PostgresConnectionsPage() {
	const { projectId, databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(PostgresConnectionDetails, {
		projectId,
		databaseId
	});
}
export { PostgresConnectionsPage as component };
