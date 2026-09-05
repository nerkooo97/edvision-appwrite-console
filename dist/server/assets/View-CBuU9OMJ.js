import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan, Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { Wo as fetchMessage, Xo as fetchTopic, Yo as fetchProvider, ds as useProjectMessages, fs as useProjectProviders, ps as useProjectTopics } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { n as buttonVariants, t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { G as canWriteMessages, J as canWriteTopics, K as canWriteProviders } from "./console-access-checks-BTMEOKcL.js";
import { a as serviceHeaderIconOnlyButton, o as serviceHeaderShowLabel } from "./service-header-container-CwwZ6im7.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { s as localizeResourceStatusLabel } from "./resource-status-labels-C-bLMJxj.js";
import { t as MessagingProviderIcon } from "./MessagingProviderIcon-CpmBYG59.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Bell, ChevronDown, Copy, ExternalLink, FileJson, LayoutList, Link2, Loader2, Mail, MessageSquare, Phone, Plus, Settings, Square, Trash2 } from "lucide-react";
function MessageContextMenu({ projectId, message, children }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useMutation({
		mutationFn: async () => {
			if (!message?.$id) return;
			await sdk.forProject(projectId).messaging.delete({ messageId: message.$id });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(t("Message deleted"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete message"));
		}
	});
	if (!message?.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	const navigateToCompose = () => {
		navigate({
			to: "/projects/$projectId/messaging/$messageId",
			params: {
				projectId,
				messageId: message.$id
			}
		});
	};
	const navigateToSettings = () => {
		navigate({
			to: "/projects/$projectId/messaging/$messageId/settings",
			params: {
				projectId,
				messageId: message.$id
			}
		});
	};
	const hasComposeSettingsTabs = message.providerType === "email" || message.providerType === "sms" || message.providerType === "push";
	const messageHref = buildConsoleUrl(`/projects/${projectId}/messaging/${message.$id}`);
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: navigateToCompose,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Compose")]
			}),
			hasComposeSettingsTabs ? /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: navigateToSettings,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
			}) : null,
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", message.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", messageHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchMessage(projectId, message.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(messageHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(messageHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
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
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete message") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this message? This action cannot be undone.")
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
					onClick: () => {
						closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
						deleteMutation.mutate();
					},
					disabled: deleteMutation.isPending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function TopicContextMenu({ projectId, topic, children }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useMutation({
		mutationFn: async () => {
			if (!topic?.$id) return;
			await sdk.forProject(projectId).messaging.deleteTopic({ topicId: topic.$id });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"topics",
				"project",
				projectId
			] });
			toast.success(t("Topic deleted"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete topic"));
		}
	});
	if (!topic?.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	const navigateToTab = (tab) => {
		const base = `/projects/${projectId}/messaging/topics/${topic.$id}`;
		navigate({
			to: tab === "overview" ? base : `${base}/${tab}`,
			params: {
				projectId,
				topicId: topic.$id
			}
		});
	};
	const topicHref = buildConsoleUrl(`/projects/${projectId}/messaging/topics/${topic.$id}`);
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	const hasName = !!topic.name;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("overview"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("settings"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", topic.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", topic.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", topicHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchTopic(projectId, topic.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(topicHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(topicHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
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
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete topic") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this topic? This action cannot be undone.")
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
					onClick: () => {
						closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
						deleteMutation.mutate();
					},
					disabled: deleteMutation.isPending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function ProviderContextMenu({ projectId, provider, children }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useMutation({
		mutationFn: async () => {
			if (!provider?.$id) return;
			await sdk.forProject(projectId).messaging.deleteProvider({ providerId: provider.$id });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				projectId
			] });
			toast.success(t("Provider deleted"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete provider"));
		}
	});
	if (!provider?.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	const navigateToOverview = () => {
		navigate({
			to: "/projects/$projectId/messaging/providers/$providerId",
			params: {
				projectId,
				providerId: provider.$id
			}
		});
	};
	const navigateToSettings = () => {
		navigate({
			to: "/projects/$projectId/messaging/providers/$providerId/settings",
			params: {
				projectId,
				providerId: provider.$id
			}
		});
	};
	const providerHref = buildConsoleUrl(`/projects/${projectId}/messaging/providers/${provider.$id}`);
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	const hasName = !!provider.name;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: navigateToOverview,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: navigateToSettings,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", provider.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", provider.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", providerHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchProvider(projectId, provider.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(providerHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(providerHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
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
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete provider") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this provider? This action cannot be undone.")
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
					onClick: () => {
						closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
						deleteMutation.mutate();
					},
					disabled: deleteMutation.isPending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function MessagingCreateControls({ projectId, activeTab, disabled, disabledTooltip }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [topicDialogOpen, setTopicDialogOpen] = useState(false);
	const [topicName, setTopicName] = useState("");
	const createDraftEmail = useMutation({
		mutationFn: async () => {
			if (!projectId) throw new Error("Missing project");
			const messageId = ID.unique();
			return sdk.forProject(projectId).messaging.createEmail({
				messageId,
				subject: "Untitled email",
				content: " ",
				topics: [],
				users: [],
				targets: [],
				draft: true,
				html: false
			});
		},
		onSuccess: (msg) => {
			queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(t("Draft message created"));
			navigate({
				to: "/projects/$projectId/messaging/$messageId",
				params: {
					projectId,
					messageId: msg.$id
				}
			});
		},
		onError: (e) => toast.error(getErrorMessage(e) || t("Could not create message"))
	});
	const createDraftSms = useMutation({
		mutationFn: async () => {
			if (!projectId) throw new Error("Missing project");
			const messageId = ID.unique();
			return sdk.forProject(projectId).messaging.createSMS({
				messageId,
				content: " ",
				topics: [],
				users: [],
				targets: [],
				draft: true
			});
		},
		onSuccess: (msg) => {
			queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(t("Draft message created"));
			navigate({
				to: "/projects/$projectId/messaging/$messageId",
				params: {
					projectId,
					messageId: msg.$id
				}
			});
		},
		onError: (e) => toast.error(getErrorMessage(e) || t("Could not create message"))
	});
	const createDraftPush = useMutation({
		mutationFn: async () => {
			if (!projectId) throw new Error("Missing project");
			const messageId = ID.unique();
			return sdk.forProject(projectId).messaging.createPush({
				messageId,
				title: "Untitled notification",
				body: " ",
				topics: [],
				users: [],
				targets: [],
				draft: true
			});
		},
		onSuccess: (msg) => {
			queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(t("Draft message created"));
			navigate({
				to: "/projects/$projectId/messaging/$messageId",
				params: {
					projectId,
					messageId: msg.$id
				}
			});
		},
		onError: (e) => toast.error(getErrorMessage(e) || t("Could not create message"))
	});
	const createTopicMutation = useMutation({
		mutationFn: async (name) => {
			if (!projectId) throw new Error("Missing project");
			return sdk.forProject(projectId).messaging.createTopic({
				topicId: ID.unique(),
				name: name.trim()
			});
		},
		onSuccess: async (topic) => {
			await queryClient.refetchQueries({ queryKey: [
				"topics",
				"project",
				projectId
			] });
			toast.success(t("Topic created"));
			setTopicDialogOpen(false);
			setTopicName("");
			navigate({
				to: "/projects/$projectId/messaging/topics/$topicId",
				params: {
					projectId,
					topicId: topic.$id
				}
			});
		},
		onError: (e) => toast.error(getErrorMessage(e) || t("Could not create topic"))
	});
	const busy = createDraftEmail.isPending || createDraftSms.isPending || createDraftPush.isPending;
	if (!projectId) return null;
	const label = activeTab === "messages" ? t("Create message") : activeTab === "topics" ? t("Create topic") : t("Create provider");
	if (disabled) return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("span", {
				className: cn(buttonVariants({ variant: "brandCta" }), serviceHeaderIconOnlyButton, "inline-flex cursor-not-allowed items-center justify-center text-[13px] font-medium opacity-50 pointer-events-none"),
				...analyticsAttrs(activeTab === "messages" ? "create-message" : activeTab === "topics" ? "create-topic" : "create-provider"),
				children: [
					/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
					/* @__PURE__ */ jsx("span", {
						className: serviceHeaderShowLabel,
						children: label
					}),
					/* @__PURE__ */ jsx("span", {
						className: "sr-only @[640px]:hidden",
						children: label
					})
				]
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: disabledTooltip ?? t("You do not have permission to create this resource.") })
		})] })
	});
	if (activeTab === "topics") return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
		variant: "brandCta",
		className: cn(serviceHeaderIconOnlyButton, "text-[13px] font-medium"),
		onClick: () => setTopicDialogOpen(true),
		"aria-label": t("Create topic"),
		...analyticsAttrs("create-topic"),
		children: [
			/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: serviceHeaderShowLabel,
				children: t("Create topic")
			}),
			/* @__PURE__ */ jsx("span", {
				className: "sr-only @[640px]:hidden",
				children: t("Create topic")
			})
		]
	}), /* @__PURE__ */ jsx(Dialog, {
		open: topicDialogOpen,
		onOpenChange: setTopicDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create topic") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Topics group subscribers for email, SMS, or push.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 space-y-3",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "topic-name",
						className: "text-[13px]",
						children: t("Name")
					}), /* @__PURE__ */ jsx(Input, {
						id: "topic-name",
						value: topicName,
						onChange: (e) => setTopicName(e.target.value),
						placeholder: t("Marketing"),
						className: "mt-1.5 h-9",
						onKeyDown: (e) => {
							if (e.key === "Enter" && topicName.trim()) createTopicMutation.mutate(topicName);
						}
					})] })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setTopicDialogOpen(false),
						disabled: createTopicMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: () => createTopicMutation.mutate(topicName),
						disabled: !topicName.trim() || createTopicMutation.isPending,
						children: t("Create")
					})]
				})
			]
		})
	})] });
	if (activeTab === "providers") return /* @__PURE__ */ jsxs(Button, {
		variant: "brandCta",
		className: cn(serviceHeaderIconOnlyButton, "text-[13px] font-medium"),
		onClick: () => navigate({
			to: "/projects/$projectId/messaging/providers/create",
			params: { projectId }
		}),
		"aria-label": t("Create provider"),
		...analyticsAttrs("create-provider"),
		children: [
			/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: serviceHeaderShowLabel,
				children: t("Create provider")
			}),
			/* @__PURE__ */ jsx("span", {
				className: "sr-only @[640px]:hidden",
				children: t("Create provider")
			})
		]
	});
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "brandCta",
			className: cn(serviceHeaderIconOnlyButton, "text-[13px] font-medium @[640px]:gap-1.5"),
			disabled: busy,
			"aria-label": t("Create message"),
			...analyticsAttrs("create-message"),
			children: [
				/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
				/* @__PURE__ */ jsx("span", {
					className: serviceHeaderShowLabel,
					children: t("Create message")
				}),
				/* @__PURE__ */ jsx("span", {
					className: "sr-only @[640px]:hidden",
					children: t("Create message")
				}),
				/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
			]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-48",
		children: [
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => createDraftEmail.mutate(),
				disabled: busy,
				children: [/* @__PURE__ */ jsx(Mail, { className: "me-2 h-4 w-4 text-muted-foreground" }), t("Email")]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => createDraftSms.mutate(),
				disabled: busy,
				children: [/* @__PURE__ */ jsx(Phone, { className: "me-2 h-4 w-4 text-muted-foreground" }), t("SMS")]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => createDraftPush.mutate(),
				disabled: busy,
				children: [/* @__PURE__ */ jsx(Bell, { className: "me-2 h-4 w-4 text-muted-foreground" }), t("Push")]
			})
		]
	})] });
}
function formatDeliveryErrors(deliveryErrors) {
	if (deliveryErrors == null) return [];
	if (Array.isArray(deliveryErrors)) return deliveryErrors.map((e) => {
		if (typeof e === "string") return e;
		if (e && typeof e === "object" && "message" in e) return String(e.message ?? "");
		try {
			return JSON.stringify(e);
		} catch {
			return String(e);
		}
	});
	if (typeof deliveryErrors === "object") try {
		return [JSON.stringify(deliveryErrors, null, 2)];
	} catch {
		return [String(deliveryErrors)];
	}
	return [String(deliveryErrors)];
}
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const messagingIndex = pathParts.findIndex((part) => part === "messaging");
		if (messagingIndex >= 0) {
			if (pathParts[messagingIndex + 1]) {
				const tabFromPath = pathParts[messagingIndex + 1];
				if (["topics", "providers"].includes(tabFromPath)) return tabFromPath;
			}
		}
		return "messages";
	}, [location.pathname]);
	const [searchValue, setSearchValue] = useState("");
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	useEffect(() => {
		setRequestedPage(1);
		setDisplayedPage(1);
	}, [projectId]);
	const [selectedItems, setSelectedItems] = useState(/* @__PURE__ */ new Set());
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deliveryErrorLines, setDeliveryErrorLines] = useState(null);
	const pollMessagesRef = useRef(null);
	const { total: messagesTotal, isFetching: messagesFetching, refetch: refetchMessages } = useProjectMessages(activeTab === "messages" ? projectId : null, requestedPage - 1, pageSize, activeTab === "messages" ? searchValue : void 0);
	const { total: topicsTotal, isFetching: topicsFetching } = useProjectTopics(activeTab === "topics" ? projectId : null, requestedPage - 1, pageSize, activeTab === "topics" ? searchValue : void 0);
	const { total: providersTotal, isFetching: providersFetching } = useProjectProviders(activeTab === "providers" ? projectId : null, requestedPage - 1, pageSize, activeTab === "providers" ? searchValue : void 0);
	const { messages, total: displayedMessagesTotal, refetch: refetchDisplayedMessages } = useProjectMessages(activeTab === "messages" ? projectId : null, displayedPage - 1, pageSize, activeTab === "messages" ? searchValue : void 0);
	const { topics, total: displayedTopicsTotal } = useProjectTopics(activeTab === "topics" ? projectId : null, displayedPage - 1, pageSize, activeTab === "topics" ? searchValue : void 0);
	const { providers, total: displayedProvidersTotal } = useProjectProviders(activeTab === "providers" ? projectId : null, displayedPage - 1, pageSize, activeTab === "providers" ? searchValue : void 0);
	const activeFetching = activeTab === "messages" ? messagesFetching : activeTab === "topics" ? topicsFetching : providersFetching;
	useEffect(() => {
		if (!activeFetching && requestedPage !== displayedPage) setDisplayedPage(requestedPage);
	}, [
		activeFetching,
		requestedPage,
		displayedPage
	]);
	useEffect(() => {
		if (activeTab !== "messages" || !projectId) {
			if (pollMessagesRef.current) {
				clearInterval(pollMessagesRef.current);
				pollMessagesRef.current = null;
			}
			return;
		}
		if (!(messages ?? []).some((m) => m.status === "processing")) {
			if (pollMessagesRef.current) {
				clearInterval(pollMessagesRef.current);
				pollMessagesRef.current = null;
			}
			return;
		}
		if (pollMessagesRef.current) clearInterval(pollMessagesRef.current);
		pollMessagesRef.current = setInterval(() => {
			refetchDisplayedMessages();
			refetchMessages();
		}, 2e3);
		return () => {
			if (pollMessagesRef.current) {
				clearInterval(pollMessagesRef.current);
				pollMessagesRef.current = null;
			}
		};
	}, [
		activeTab,
		projectId,
		messages,
		refetchDisplayedMessages,
		refetchMessages
	]);
	const currentData = useMemo(() => {
		if (activeTab === "messages") return {
			items: messages,
			total: displayedMessagesTotal ?? messagesTotal
		};
		if (activeTab === "topics") return {
			items: topics,
			total: displayedTopicsTotal ?? topicsTotal
		};
		if (activeTab === "providers") return {
			items: providers,
			total: displayedProvidersTotal ?? providersTotal
		};
		return {
			items: [],
			total: 0
		};
	}, [
		activeTab,
		messages,
		displayedMessagesTotal,
		messagesTotal,
		topics,
		displayedTopicsTotal,
		topicsTotal,
		providers,
		displayedProvidersTotal,
		providersTotal
	]);
	const { project } = useProject(projectId);
	useOrganizationPlan(project?.teamId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noCreatePermission = activeTab === "messages" ? !canWriteMessages(access, features) : activeTab === "topics" ? !canWriteTopics(access, features) : !canWriteProviders(access, features);
	const createPermissionTooltip = noCreatePermission ? activeTab === "messages" ? t("You don't have permission to create messages.") : activeTab === "topics" ? t("You don't have permission to create topics.") : t("You don't have permission to create providers.") : void 0;
	useEffect(() => {
		setSelectedItems(/* @__PURE__ */ new Set());
		setDeleteDialogOpen(false);
	}, [
		location.pathname,
		projectId,
		searchValue,
		activeTab
	]);
	const handleSearchChange = (value) => {
		setSearchValue(value);
		setRequestedPage(1);
		setDisplayedPage(1);
		setSelectedItems(/* @__PURE__ */ new Set());
	};
	const bulkDeleteMutation = useMutation({
		mutationFn: async (itemIds) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			if (activeTab === "messages") await Promise.all(itemIds.map((messageId) => projectSdk.messaging.delete({ messageId })));
			else if (activeTab === "topics") await Promise.all(itemIds.map((topicId) => projectSdk.messaging.deleteTopic({ topicId })));
			else if (activeTab === "providers") await Promise.all(itemIds.map((providerId) => projectSdk.messaging.deleteProvider({ providerId })));
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				activeTab === "messages" ? "messages" : activeTab === "topics" ? "topics" : "providers",
				"project",
				projectId
			] });
			toast.success(`${t("Successfully deleted")} ${selectedItems.size} ${selectedItems.size > 1 ? t(activeTab) : t(activeTab.slice(0, -1))}`);
			setSelectedItems(/* @__PURE__ */ new Set());
			setDeleteDialogOpen(false);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete items"));
		}
	});
	const handleBulkDelete = () => {
		if (selectedItems.size === 0) return;
		setDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedItems.size === 0) return;
		bulkDeleteMutation.mutate(Array.from(selectedItems));
	};
	const toggleItem = (itemId) => {
		const newSelected = new Set(selectedItems);
		if (newSelected.has(itemId)) newSelected.delete(itemId);
		else newSelected.add(itemId);
		setSelectedItems(newSelected);
	};
	const toggleAllItems = () => {
		const items = currentData.items ?? [];
		if (selectedItems.size === items.length) setSelectedItems(/* @__PURE__ */ new Set());
		else setSelectedItems(new Set(items.map((item) => item?.$id).filter(Boolean)));
	};
	const handlePageChange = (page) => {
		setRequestedPage(page);
		setSelectedItems(/* @__PURE__ */ new Set());
	};
	const handlePageSizeChange = (newPageSize) => {
		setPageSize(newPageSize);
		setRequestedPage(1);
		setDisplayedPage(1);
		setSelectedItems(/* @__PURE__ */ new Set());
	};
	const tabs = useMemo(() => [
		{
			id: "messages",
			label: t("Messages"),
			to: "/projects/$projectId/messaging/",
			params: { projectId }
		},
		{
			id: "topics",
			label: t("Topics"),
			to: "/projects/$projectId/messaging/topics",
			params: { projectId }
		},
		{
			id: "providers",
			label: t("Providers"),
			to: "/projects/$projectId/messaging/providers",
			params: { projectId }
		}
	], [projectId, t]);
	const getMessageTypeIcon = (providerType) => {
		if (providerType === "email") return Mail;
		if (providerType === "sms") return Phone;
		if (providerType === "push") return Bell;
		return MessageSquare;
	};
	const getMessageStatusBadge = (status, deliveryErrors) => {
		if (status === "sent") return /* @__PURE__ */ jsx(Badge, {
			variant: "success",
			className: "text-[10px] shrink-0",
			children: t("Sent")
		});
		if (status === "processing") return /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx(Badge, {
				variant: "processing",
				className: "text-[10px] shrink-0",
				children: t("Processing")
			})]
		});
		if (status === "failed") {
			const lines = formatDeliveryErrors(deliveryErrors);
			return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Badge, {
					variant: "error",
					className: "text-[10px] shrink-0",
					children: t("Failed")
				}), lines.length > 0 && /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-6 px-2 text-xs",
					onClick: (e) => {
						e.stopPropagation();
						setDeliveryErrorLines(lines);
					},
					children: t("Details")
				})]
			});
		}
		if (status === "draft") return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0",
			children: t("Draft")
		});
		if (status === "scheduled") return /* @__PURE__ */ jsx(Badge, {
			variant: "warning",
			className: "text-[10px] shrink-0",
			children: t("Scheduled")
		});
		return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0 capitalize",
			children: localizeResourceStatusLabel(status, t)
		});
	};
	const getMessageContent = (message) => {
		if (message.providerType === "push" && message.data?.title) return message.data.title;
		if (message.providerType === "sms" && message.data?.content) return message.data.content;
		if (message.providerType === "email" && message.data?.subject) return message.data.subject;
		return t("No content");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Messaging"),
			tabs,
			activeTab,
			searchPlaceholder: activeTab === "messages" ? t("Search messages...") : activeTab === "topics" ? t("Search topics...") : t("Search providers..."),
			searchValue,
			onSearchChange: handleSearchChange,
			fullWidthBorder: true,
			beforeCreateButtons: /* @__PURE__ */ jsx(MessagingCreateControls, {
				projectId,
				activeTab,
				disabled: noCreatePermission,
				disabledTooltip: createPermissionTooltip
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: [
				(currentData.items ?? []).length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [/* @__PURE__ */ jsx(TableHead, {
							className: "w-[40px] px-4",
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: (currentData.items ?? []).length > 0 && selectedItems.size === (currentData.items ?? []).length,
								onCheckedChange: toggleAllItems
							})
						}), activeTab === "messages" ? /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Message ID")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Message")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Type")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Status")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Scheduled at")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Delivered at")
							})
						] }) : activeTab === "topics" ? /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Topic ID")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Name")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Subscribers")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Created")
							})
						] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Provider ID")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Provider")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Type")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Enabled")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Name")
							})
						] })]
					}) }), /* @__PURE__ */ jsxs(TableBody, { children: [
						activeTab === "messages" && (currentData.items ?? []).map((message) => {
							if (!message?.$id) return null;
							const TypeIcon = getMessageTypeIcon(message.providerType);
							return /* @__PURE__ */ jsx(MessageContextMenu, {
								projectId,
								message: {
									$id: message.$id,
									providerType: message.providerType
								},
								children: /* @__PURE__ */ jsxs(TableRow, {
									className: cn("cursor-pointer transition-colors border-b border-border/50", selectedItems.has(message.$id) ? "bg-muted" : "hover:bg-muted/30"),
									onClick: (e) => {
										const target = e.target;
										if (target.closest("button") || target.closest("[role=\"checkbox\"]") || target.closest("a")) return;
										navigate({
											to: "/projects/$projectId/messaging/$messageId",
											params: {
												projectId,
												messageId: message.$id
											}
										});
									},
									children: [
										/* @__PURE__ */ jsx(TableCell, {
											onClick: (e) => e.stopPropagation(),
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Checkbox, {
												checked: selectedItems.has(message.$id),
												onCheckedChange: () => toggleItem(message.$id)
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/$messageId",
												params: {
													projectId,
													messageId: message.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: message.$id,
													size: "xs"
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/$messageId",
												params: {
													projectId,
													messageId: message.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] font-medium text-foreground",
													children: getMessageContent(message)
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(TypeIcon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-muted-foreground capitalize",
													children: message.providerType
												})]
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: getMessageStatusBadge(message.status, message.deliveryErrors)
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3 text-end",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/$messageId",
												params: {
													projectId,
													messageId: message.$id
												},
												className: "block",
												children: message.scheduledAt ? /* @__PURE__ */ jsx(DateTooltip, {
													date: message.scheduledAt,
													className: "text-[12px] text-muted-foreground font-mono"
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground/50 italic",
													children: "N/A"
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3 text-end",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/$messageId",
												params: {
													projectId,
													messageId: message.$id
												},
												className: "block",
												children: message.deliveredAt ? /* @__PURE__ */ jsx(DateTooltip, {
													date: message.deliveredAt,
													className: "text-[12px] text-muted-foreground font-mono"
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground/50 italic",
													children: "N/A"
												})
											})
										})
									]
								})
							}, message.$id);
						}),
						activeTab === "topics" && (currentData.items ?? []).map((topic) => {
							if (!topic?.$id) return null;
							const totalSubscribers = (topic.emailTotal || 0) + (topic.smsTotal || 0) + (topic.pushTotal || 0);
							return /* @__PURE__ */ jsx(TopicContextMenu, {
								projectId,
								topic: {
									$id: topic.$id,
									name: topic.name
								},
								children: /* @__PURE__ */ jsxs(TableRow, {
									className: cn("cursor-pointer transition-colors border-b border-border/50", selectedItems.has(topic.$id) ? "bg-muted" : "hover:bg-muted/30"),
									onClick: (e) => {
										const target = e.target;
										if (target.closest("button") || target.closest("[role=\"checkbox\"]") || target.closest("a")) return;
										navigate({
											to: "/projects/$projectId/messaging/topics/$topicId",
											params: {
												projectId,
												topicId: topic.$id
											}
										});
									},
									children: [
										/* @__PURE__ */ jsx(TableCell, {
											onClick: (e) => e.stopPropagation(),
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Checkbox, {
												checked: selectedItems.has(topic.$id),
												onCheckedChange: () => toggleItem(topic.$id)
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/topics/$topicId",
												params: {
													projectId,
													topicId: topic.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: topic.$id,
													size: "xs"
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/topics/$topicId",
												params: {
													projectId,
													topicId: topic.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] font-medium text-foreground",
													children: topic.name
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3 text-end",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/topics/$topicId",
												params: {
													projectId,
													topicId: topic.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-muted-foreground",
													children: totalSubscribers
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3 text-end",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/topics/$topicId",
												params: {
													projectId,
													topicId: topic.$id
												},
												className: "block",
												children: topic.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
													date: topic.$createdAt,
													className: "text-[12px] text-muted-foreground font-mono"
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground/50 italic",
													children: "N/A"
												})
											})
										})
									]
								})
							}, topic.$id);
						}),
						activeTab === "providers" && (currentData.items ?? []).map((provider) => {
							if (!provider?.$id) return null;
							const TypeIcon = getMessageTypeIcon(provider.type);
							return /* @__PURE__ */ jsx(ProviderContextMenu, {
								projectId,
								provider: {
									$id: provider.$id,
									name: provider.name
								},
								children: /* @__PURE__ */ jsxs(TableRow, {
									className: cn("cursor-pointer transition-colors border-b border-border/50", selectedItems.has(provider.$id) ? "bg-muted" : "hover:bg-muted/30"),
									onClick: (e) => {
										const target = e.target;
										if (target.closest("button") || target.closest("[role=\"checkbox\"]") || target.closest("a")) return;
										navigate({
											to: "/projects/$projectId/messaging/providers/$providerId",
											params: {
												projectId,
												providerId: provider.$id
											}
										});
									},
									children: [
										/* @__PURE__ */ jsx(TableCell, {
											onClick: (e) => e.stopPropagation(),
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Checkbox, {
												checked: selectedItems.has(provider.$id),
												onCheckedChange: () => toggleItem(provider.$id)
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/providers/$providerId",
												params: {
													projectId,
													providerId: provider.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: provider.$id,
													size: "xs"
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/providers/$providerId",
												params: {
													projectId,
													providerId: provider.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx(MessagingProviderIcon, {
														serviceKey: provider.provider,
														providerName: provider.name,
														providerType: provider.type,
														size: "sm",
														className: "h-5 w-5"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium text-foreground",
														children: provider.name
													})]
												})
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(TypeIcon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-muted-foreground capitalize",
													children: provider.type
												})]
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: provider.enabled ? /* @__PURE__ */ jsx(Badge, {
												variant: "success",
												className: "text-[10px] shrink-0",
												children: t("Enabled")
											}) : /* @__PURE__ */ jsx(Badge, {
												variant: "inactive",
												className: "text-[10px] shrink-0",
												children: t("Disabled")
											})
										}),
										/* @__PURE__ */ jsx(TableCell, {
											className: "px-4 py-3",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/messaging/providers/$providerId",
												params: {
													projectId,
													providerId: provider.$id
												},
												className: "block",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] text-foreground",
													children: provider.name
												})
											})
										})
									]
								})
							}, provider.$id);
						})
					] })] })
				}), /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: currentData.total,
					pageSize,
					pageSizeOptions: [
						10,
						25,
						50,
						100
					],
					onPageChange: handlePageChange,
					onPageSizeChange: handlePageSizeChange,
					itemLabel: t(activeTab)
				})] }) : /* @__PURE__ */ jsx(EmptyState, {
					icon: MessageSquare,
					title: searchValue ? void 0 : activeTab === "messages" ? t("No messages yet") : activeTab === "topics" ? t("No topics yet") : t("No providers yet"),
					description: searchValue ? void 0 : activeTab === "messages" ? t("Create your first message to start sending notifications") : activeTab === "topics" ? t("Create your first topic to organize subscribers") : t("Create your first provider to send messages"),
					isEmpty: !searchValue,
					hasFilters: !!searchValue,
					variant: "card"
				}),
				selectedItems.size > 0 && /* @__PURE__ */ jsx("div", {
					className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
						children: [/* @__PURE__ */ jsxs(Badge, {
							variant: "info",
							className: "h-6 shrink-0 px-2.5 text-[10px]",
							children: [
								selectedItems.size,
								" ",
								selectedItems.size > 1 ? t(activeTab) : t(activeTab.slice(0, -1)),
								" ",
								t("selected")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedItems(/* @__PURE__ */ new Set()),
								className: "h-8 text-xs",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								size: "sm",
								onClick: handleBulkDelete,
								disabled: bulkDeleteMutation.isPending,
								className: "h-8 gap-2",
								children: t("Delete")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsxs(DialogTitle, { children: [
								t("Delete"),
								" ",
								t(activeTab)
							] }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									selectedItems.size,
									" ",
									selectedItems.size > 1 ? t(activeTab) : t(activeTab.slice(0, -1)),
									"? ",
									t("This action cannot be undone.")
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: bulkDeleteMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: confirmBulkDelete,
								disabled: bulkDeleteMutation.isPending,
								children: t("Delete")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: deliveryErrorLines !== null,
					onOpenChange: (open) => !open && setDeliveryErrorLines(null),
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-lg p-0",
						children: [
							/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 pb-4 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Message error") }), /* @__PURE__ */ jsx(DialogDescription, {
									className: "text-[13px] mt-2",
									children: t("The message failed to deliver. See the details below.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 pb-4 pt-0",
								children: /* @__PURE__ */ jsx("pre", {
									className: "mt-4 max-h-[min(360px,50dvh)] overflow-auto whitespace-pre-wrap break-words rounded-md border border-border bg-muted/30 p-4 text-[12px] text-foreground",
									children: (deliveryErrorLines ?? []).join("\n")
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									onClick: () => setDeliveryErrorLines(null),
									children: t("Close")
								})
							})
						]
					})
				})
			]
		})]
	});
}
export { View as t };
