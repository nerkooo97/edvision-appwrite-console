import { n as useT } from "./translate-DZcqveGn.js";
import { pc as useDeleteDomain } from "./hooks-BONwG3Mt.js";
import { It as fetchProxyRule } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { n as getApexDomain } from "./proxy-domains-BLLl99AI.js";
import { t as BuildLogsCard } from "./BuildLogsCard-BN250kf6.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Copy, ExternalLink, FileJson, FileText, Globe, Link2, RefreshCw, Square, Trash2 } from "lucide-react";
function normalizeLogs(logs) {
	if (typeof logs === "string") return logs;
	if (Array.isArray(logs)) return logs.join("\n");
	return "";
}
function ViewLogsDialog({ open, onOpenChange, rule }) {
	const t = useT();
	const buildLogs = normalizeLogs(rule.logs);
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-4xl p-0 max-h-[90dvh] flex flex-col",
			children: [
				/* @__PURE__ */ jsx(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start shrink-0",
					children: /* @__PURE__ */ jsx(DialogTitle, { children: t("View logs") })
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 overflow-y-auto flex-1 min-h-0 space-y-4",
					children: [rule.status === "verifying" && /* @__PURE__ */ jsx(Alert, {
						variant: "default",
						className: "border-blue-500/30 bg-blue-500/5",
						children: /* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[13px] text-muted-foreground",
							children: t("SSL certificate is being issued. This usually takes a couple of minutes - no action needed on your end.")
						})
					}), /* @__PURE__ */ jsx(BuildLogsCard, {
						buildLogs,
						emptyMessage: t("No logs available"),
						hideTitle: true,
						downloadFilename: `verification-logs-${rule.domain.replace(/\./g, "-")}.txt`,
						hideWhenEmpty: false
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end shrink-0",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => onOpenChange(false),
						children: t("Close")
					})
				})
			]
		})
	});
}
function DeleteDomainDialog({ open, onOpenChange, projectId, region, rule, onDeleteSuccess }) {
	const t = useT();
	const deleteDomainMutation = useDeleteDomain(projectId, region);
	const handleDelete = async () => {
		try {
			await deleteDomainMutation.mutateAsync(rule.$id);
			onDeleteSuccess();
		} catch (error) {
			toast.error(error.message || t("Failed to delete domain"));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete domain") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this domain? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: () => onOpenChange(false),
					disabled: deleteDomainMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "destructive",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleDelete,
					disabled: deleteDomainMutation.isPending,
					children: t("Delete")
				})]
			})]
		})
	});
}
function ProxyRuleContextMenu({ projectId, rule, projectTeamId, apexToOrgDomainId, onViewLogs, onRetry, onDelete, children }) {
	const t = useT();
	const navigate = useNavigate();
	const ruleUrl = domainUrl(rule.domain);
	const apex = getApexDomain(rule.domain);
	const orgDomainId = apex ? apexToOrgDomainId.get(apex.toLowerCase()) : void 0;
	const canOpenDnsRecords = !!projectTeamId && !!orgDomainId;
	const canRetry = rule.status === "created" || rule.status === "unverified";
	const handleOpenDnsRecords = () => {
		if (!projectTeamId || !orgDomainId) return;
		navigate({
			to: "/organizations/$orgId/domains/$domainId",
			params: {
				orgId: projectTeamId,
				domainId: orgDomainId
			}
		});
	};
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			rule.status !== "verified" && /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onViewLogs(rule)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileText }), t("View logs")]
			}),
			canRetry && /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onRetry(rule)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: RefreshCw }), t("Retry")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleOpenDnsRecords,
				disabled: !canOpenDnsRecords,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Globe }), t("DNS Records")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", rule.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Domain", rule.domain),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy domain")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", ruleUrl),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchProxyRule(projectId, rule.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(ruleUrl),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(ruleUrl),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(rule)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] });
}
export { DeleteDomainDialog as n, ViewLogsDialog as r, ProxyRuleContextMenu as t };
