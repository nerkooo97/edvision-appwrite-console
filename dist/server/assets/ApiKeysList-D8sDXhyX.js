import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { P as useDeleteApiKey, d as fetchApiKey } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Eye, FileJson, Key, KeyRound, Pencil, Trash2 } from "lucide-react";
function ApiKeyContextMenu({ projectId, apiKey, children, onUpdate }) {
	const t = useT();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useDeleteApiKey(projectId);
	if (!apiKey?.id) return /* @__PURE__ */ jsx(Fragment, { children });
	const hasName = !!apiKey.name;
	const hasKey = !!apiKey.key;
	const handleDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate(apiKey.id, {
			onSuccess: () => {
				toast.success(t("API key deleted"));
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete API key"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			onUpdate && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(apiKey.id)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", apiKey.id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", apiKey.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				hasKey && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("API key", apiKey.key),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: KeyRound }), t("Copy key")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchApiKey(projectId, apiKey.id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
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
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete API key") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to delete"),
						apiKey.name ? ` "${apiKey.name}"` : ` ${t("this API key")}`,
						"?",
						" ",
						t("This action cannot be undone.")
					]
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
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function getExpirationStatus(expire) {
	if (!expire) return null;
	const now = /* @__PURE__ */ new Date();
	const expireDate = new Date(expire);
	const isExpired = expireDate < now;
	return {
		isExpired,
		isExpiringSoon: !isExpired && expireDate.getTime() - now.getTime() <= 10080 * 60 * 1e3,
		expireDate
	};
}
function ApiKeysList({ apiKeys, isLoading = false, onView, onUpdate, onDelete, onCopy, copiedField, showActions = true, projectId }) {
	const t = useT();
	const [viewingKeyId, setViewingKeyId] = useState(null);
	const maskKey = (key) => {
		return key.slice(0, 7) + "•".repeat(24) + key.slice(-4);
	};
	const viewingKey = apiKeys.find((key) => key.id === viewingKeyId);
	const handleView = (keyId) => {
		if (onView) onView(keyId);
		else setViewingKeyId(keyId);
	};
	const handleCopy = (key, field) => {
		if (onCopy) onCopy(key, field);
		else navigator.clipboard.writeText(key);
	};
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading API keys...")
		})
	});
	if (apiKeys.length === 0) return /* @__PURE__ */ jsx(EmptyState, {
		icon: Key,
		title: t("No API keys found"),
		description: t("Create your first API key to authenticate your applications"),
		isEmpty: true,
		variant: "card"
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card/50",
		children: /* @__PURE__ */ jsx("div", {
			className: "divide-y divide-border",
			children: apiKeys.map((apiKey) => {
				const expirationStatus = getExpirationStatus(apiKey.expire);
				const row = /* @__PURE__ */ jsxs("div", {
					role: onUpdate ? "button" : void 0,
					tabIndex: onUpdate ? 0 : void 0,
					onClick: onUpdate ? () => onUpdate(apiKey.id) : void 0,
					onKeyDown: onUpdate ? (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							onUpdate(apiKey.id);
						}
					} : void 0,
					className: cn("flex items-center justify-between gap-3 p-4 overflow-hidden", onUpdate && "cursor-pointer transition-colors hover:bg-muted/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 overflow-hidden",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 min-w-0",
							children: [
								/* @__PURE__ */ jsx(Key, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-[14px] font-medium text-foreground truncate min-w-0",
									children: apiKey.name
								}),
								expirationStatus?.isExpired ? /* @__PURE__ */ jsx(Badge, {
									variant: "error",
									className: "text-[10px] shrink-0",
									children: t("Expired")
								}) : expirationStatus?.isExpiringSoon ? /* @__PURE__ */ jsx(Badge, {
									variant: "warning",
									className: "text-[10px] shrink-0",
									children: t("Expires soon")
								}) : null,
								/* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: apiKey.scopes.length === 0 ? t("No scopes") : `${apiKey.scopes.length} ${apiKey.scopes.length !== 1 ? t("scopes") : t("scope")}`
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-1.5 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center gap-2 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("code", {
										className: "rounded bg-muted px-2 py-0.5 font-mono text-[12px] text-muted-foreground truncate max-w-[200px] sm:max-w-none",
										children: maskKey(apiKey.key)
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"data-api-key-action": true,
										onClick: (e) => {
											e.stopPropagation();
											handleView(apiKey.id);
										},
										className: "cursor-pointer rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground shrink-0",
										title: t("View key"),
										children: /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"data-api-key-action": true,
										onClick: (e) => {
											e.stopPropagation();
											handleCopy(apiKey.key, `apiKey-${apiKey.id}`);
										},
										className: "cursor-pointer rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground shrink-0",
										title: t("Copy key"),
										children: copiedField === `apiKey-${apiKey.id}` ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex w-full shrink-0 flex-wrap items-center justify-end gap-x-2 sm:w-auto sm:gap-x-3",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "text-[12px] text-muted-foreground whitespace-nowrap hidden sm:inline",
										children: [
											t("Created"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, {
												date: apiKey.createdAt,
												className: "text-[12px] text-muted-foreground"
											})
										]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-[12px] text-muted-foreground whitespace-nowrap hidden md:inline",
										children: [
											t("Last used"),
											" ",
											apiKey.lastUsed ? /* @__PURE__ */ jsx(DateTooltip, {
												date: apiKey.lastUsed,
												className: "text-[12px] text-muted-foreground"
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground",
												children: t("Never")
											})
										]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground whitespace-nowrap hidden md:inline",
										children: apiKey.expire ? /* @__PURE__ */ jsxs(Fragment, { children: [
											expirationStatus?.isExpired ? t("Expired") : t("Expires"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, {
												date: apiKey.expire,
												className: "text-[12px] text-muted-foreground"
											})
										] }) : t("No expiration")
									})
								]
							})]
						})]
					}), showActions && (onUpdate || onDelete) && /* @__PURE__ */ jsx("div", {
						"data-api-key-action": true,
						onClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { onClick: (e) => e.stopPropagation() })
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "end",
							children: [onUpdate && /* @__PURE__ */ jsx(DropdownMenuItem, {
								onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(apiKey.id)),
								children: /* @__PURE__ */ jsx(MenuItemContent, {
									icon: Pencil,
									children: t("Update")
								})
							}), onDelete && /* @__PURE__ */ jsx(DropdownMenuItem, {
								onSelect: () => openDialogAfterOverlayCloses(() => onDelete(apiKey.id)),
								children: /* @__PURE__ */ jsx(MenuItemContent, {
									icon: Trash2,
									children: t("Delete")
								})
							})]
						})] })
					})]
				});
				if (projectId) return /* @__PURE__ */ jsx(ApiKeyContextMenu, {
					projectId,
					apiKey: {
						id: apiKey.id,
						name: apiKey.name,
						key: apiKey.key,
						scopes: apiKey.scopes,
						expire: apiKey.expire
					},
					onUpdate,
					children: row
				}, apiKey.id);
				return /* @__PURE__ */ jsx(Fragment$1, { children: row }, apiKey.id);
			})
		})
	}), /* @__PURE__ */ jsx(Dialog, {
		open: viewingKeyId !== null,
		onOpenChange: (open) => !open && setViewingKeyId(null),
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-[600px] p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: viewingKey?.name || t("API Key") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Copy the full API key below. Keep it secure and never share it publicly.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0",
					children: [viewingKey && /* @__PURE__ */ jsxs("div", {
						className: "mb-4 flex w-full flex-wrap items-center justify-end gap-x-2 sm:gap-x-3 text-[12px] text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "whitespace-nowrap",
								children: [
									t("Created"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: viewingKey.createdAt,
										className: "text-[12px] text-muted-foreground"
									})
								]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "whitespace-nowrap",
								children: [
									t("Last used"),
									" ",
									viewingKey.lastUsed ? /* @__PURE__ */ jsx(DateTooltip, {
										date: viewingKey.lastUsed,
										className: "text-[12px] text-muted-foreground"
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: t("Never")
									})
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "whitespace-nowrap",
								children: viewingKey.expire ? /* @__PURE__ */ jsxs(Fragment, { children: [
									getExpirationStatus(viewingKey.expire)?.isExpired ? t("Expired") : t("Expires"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: viewingKey.expire,
										className: "text-[12px] text-muted-foreground"
									})
								] }) : t("No expiration")
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium text-foreground",
							children: t("API Key")
						}), /* @__PURE__ */ jsx("textarea", {
							readOnly: true,
							value: viewingKey?.key || "",
							className: "w-full min-h-[100px] rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
							onClick: (e) => e.target.select()
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setViewingKeyId(null),
						children: t("Close")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => {
							if (viewingKey?.key) handleCopy(viewingKey.key, "apiKeyModal");
						},
						className: "gap-2",
						children: copiedField === "apiKeyModal" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }), t("Copied")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }), t("Copy")] })
					})]
				})
			]
		})
	})] });
}
export { ApiKeysList as t };
