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
import { Au as useOrganizationAppSecrets, Du as useDeleteOrganizationAppSecret, Tu as useCreateOrganizationAppSecret, ku as useOrganizationApp } from "./hooks-BONwG3Mt.js";
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
import { r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, Check, Copy, Key, Loader2, Lock, Plus, Shield, Terminal, Trash2 } from "lucide-react";
function maskClientSecret(hint) {
	return `client_secret_${"•".repeat(18)}${hint}`;
}
function View() {
	const t = useT();
	const { orgId, appId } = useParams({ strict: false });
	const { app } = useOrganizationApp(appId);
	const { secrets, isLoading } = useOrganizationAppSecrets(appId);
	const createSecretMutation = useCreateOrganizationAppSecret(appId);
	const deleteSecretMutation = useDeleteOrganizationAppSecret(appId);
	const [newSecretPlaintext, setNewSecretPlaintext] = useState(null);
	const [copiedNewSecret, setCopiedNewSecret] = useState(false);
	const [deleteTargetId, setDeleteTargetId] = useState(null);
	if (!app || !orgId) return null;
	if (app.type === "public") return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50",
					children: /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-muted-foreground" })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Public client")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Public clients use PKCE and do not require OAuth secrets. Switch to a confidential client on the OAuth client tab if you need server-side secret authentication.")
				})] })]
			})
		})
	});
	const handleCreateSecret = async () => {
		try {
			setNewSecretPlaintext((await createSecretMutation.mutateAsync()).secret);
			toast.success(t("OAuth secret created"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create OAuth secret")));
		}
	};
	const handleDeleteSecret = async () => {
		if (!deleteTargetId) return;
		try {
			await deleteSecretMutation.mutateAsync(deleteTargetId);
			toast.success(t("OAuth secret deleted"));
			setDeleteTargetId(null);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete OAuth secret")));
		}
	};
	const handleCopyNewSecret = async () => {
		if (!newSecretPlaintext) return;
		await copyToClipboard("OAuth secret", newSecretPlaintext);
		setCopiedNewSecret(true);
		setTimeout(() => setCopiedNewSecret(false), 2e3);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("OAuth secrets")
						}), !isLoading && secrets.length > 0 && /* @__PURE__ */ jsxs(Badge, {
							variant: "info",
							className: "text-[10px] shrink-0",
							children: [
								secrets.length,
								" ",
								t("active")
							]
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Confidential clients authenticate token exchanges with a secret. Rotate regularly and store values in a secrets manager.")
					})] }), /* @__PURE__ */ jsxs(Button, {
						size: "sm",
						className: "h-9 text-[13px] shrink-0",
						disabled: createSecretMutation.isPending,
						onClick: handleCreateSecret,
						children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Create secret")]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-4",
					children: [/* @__PURE__ */ jsxs(Alert, {
						className: "border-border bg-muted/30",
						children: [
							/* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ jsx(AlertTitle, {
								className: "text-[13px] font-medium text-foreground",
								children: t("Server-side only")
							}),
							/* @__PURE__ */ jsxs(AlertDescription, {
								className: "text-[12px] text-muted-foreground",
								children: [
									t("Never embed OAuth secrets in mobile apps, SPAs, or public repositories. Use environment variables such as"),
									" ",
									/* @__PURE__ */ jsxs("span", {
										className: "whitespace-nowrap",
										children: [/* @__PURE__ */ jsx("code", {
											className: "rounded bg-muted px-1 py-0.5 font-mono text-[11px] text-foreground",
											children: "OAUTH_CLIENT_SECRET"
										}), "."]
									})
								]
							})
						]
					}), isLoading ? /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center py-10",
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
					}) : secrets.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
						icon: Key,
						title: t("No OAuth secrets"),
						description: t("Create a secret for confidential OAuth flows such as authorization code with server-side token exchange."),
						variant: "card"
					}) : /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-lg border border-border",
						children: /* @__PURE__ */ jsx("div", {
							className: "divide-y divide-border",
							children: secrets.map((secret) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-3 p-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1 overflow-hidden",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 min-w-0",
										children: [
											/* @__PURE__ */ jsx(Key, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
											/* @__PURE__ */ jsxs("p", {
												className: "text-[13px] font-medium text-foreground truncate min-w-0 font-mono",
												children: ["secret_", secret.hint]
											}),
											/* @__PURE__ */ jsx(Badge, {
												variant: "success",
												className: "text-[10px] shrink-0",
												children: t("Active")
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-2 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
										children: [/* @__PURE__ */ jsx("code", {
											className: "rounded border border-border bg-muted/50 px-2.5 py-1 font-mono text-[12px] text-muted-foreground truncate max-w-full",
											children: maskClientSecret(secret.hint)
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "whitespace-nowrap",
												children: [
													t("Created"),
													" ",
													/* @__PURE__ */ jsx(DateTooltip, {
														date: secret.$createdAt,
														className: "text-[12px] text-muted-foreground"
													})
												]
											}), /* @__PURE__ */ jsx(CopyableId, {
												id: secret.$id,
												copyLabel: "Secret ID",
												copyToastLabel: "Secret ID",
												variant: "inline",
												size: "xs"
											})]
										})]
									})]
								}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
								}), /* @__PURE__ */ jsx(DropdownMenuContent, {
									align: "end",
									children: /* @__PURE__ */ jsx(DropdownMenuItem, {
										onClick: () => setDeleteTargetId(secret.$id),
										children: /* @__PURE__ */ jsx(MenuItemContent, {
											icon: Trash2,
											children: t("Delete")
										})
									})
								})] })]
							}, secret.$id))
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: newSecretPlaintext !== null,
			onOpenChange: (open) => {
				if (!open) setNewSecretPlaintext(null);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-lg p-0 max-h-[90dvh] flex flex-col overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "shrink-0 px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("OAuth secret created") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Copy this value now. For security, the full secret cannot be retrieved after you close this dialog.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-4",
						children: [/* @__PURE__ */ jsxs(Alert, {
							className: "border-amber-500/20 bg-amber-500/10 text-foreground",
							children: [
								/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-amber-600 dark:text-amber-400" }),
								/* @__PURE__ */ jsx(AlertTitle, {
									className: "text-[13px] font-medium",
									children: t("One-time display")
								}),
								/* @__PURE__ */ jsx(AlertDescription, {
									className: "text-[12px] text-muted-foreground",
									children: t("Store this secret in your deployment environment before continuing. Active sessions using a deleted secret will fail token refresh immediately.")
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 overflow-hidden rounded-lg border border-border bg-muted/20",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Terminal, { className: "h-3.5 w-3.5 shrink-0" }), t("Secret value")]
								}), /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 shrink-0 px-2 text-[12px]",
									onClick: () => void handleCopyNewSecret(),
									children: [copiedNewSecret ? /* @__PURE__ */ jsx(Check, { className: "me-1.5 h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "me-1.5 h-3.5 w-3.5" }), t("Copy")]
								})]
							}), /* @__PURE__ */ jsx("pre", {
								className: cn("max-h-[min(30dvh,200px)] overflow-auto p-4 font-mono text-[13px] leading-relaxed text-foreground", "break-all whitespace-pre-wrap", "selection:bg-primary/20"),
								children: newSecretPlaintext
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex justify-end",
						children: /* @__PURE__ */ jsx(Button, {
							onClick: () => setNewSecretPlaintext(null),
							children: t("Done")
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteTargetId !== null,
			onOpenChange: (open) => {
				if (!open) setDeleteTargetId(null);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete OAuth secret") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Token refresh and authorization flows using this secret will stop working immediately. This cannot be undone.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: deleteTargetId && /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-muted/30 px-4 py-3",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[12px] font-medium uppercase tracking-wider text-muted-foreground",
								children: t("Secret ID")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 font-mono text-[13px] text-foreground break-all",
								children: deleteTargetId
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => setDeleteTargetId(null),
							disabled: deleteSecretMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							disabled: deleteSecretMutation.isPending,
							onClick: () => void handleDeleteSecret(),
							children: t("Delete")
						})]
					})
				]
			})
		})
	] });
}
function OrgAppSecretsPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { OrgAppSecretsPage as component };
