import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { B as useProjectPlatform, F as useDeletePlatform, K as useUpdatePlatform } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as copyResourceAsJson, r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { n as getPlatformIdentifier, t as getPlatformDisplayName } from "./platform-k0Qw_0lL.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Copy, ExternalLink, FileJson, Pencil, Tag, Trash2 } from "lucide-react";
function PlatformDrawer({ open, onOpenChange, projectId, platform, onSuccess }) {
	const t = useT();
	const platformId = platform?.$id ?? null;
	const { platform: fullPlatform, isLoading: platformLoading } = useProjectPlatform(projectId, platformId);
	const displayPlatform = fullPlatform ?? platform;
	const updateMutation = useUpdatePlatform(projectId);
	const deleteMutation = useDeletePlatform(projectId);
	const isPending = updateMutation.isPending || deleteMutation.isPending;
	const [name, setName] = useState("");
	const [key, setKey] = useState("");
	const [hostname, setHostname] = useState("");
	const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
	const [errors, setErrors] = useState({});
	useEffect(() => {
		if (!open) {
			setName("");
			setKey("");
			setHostname("");
			setErrors({});
			setDeleteConfirmOpen(false);
		} else if (displayPlatform) {
			setName(displayPlatform.name || "");
			setKey(getPlatformIdentifier(displayPlatform));
			setHostname("hostname" in displayPlatform ? displayPlatform.hostname || "" : "");
			setErrors({});
		}
	}, [open, displayPlatform]);
	const handleOpenChange = (newOpen) => {
		if (!isPending) {
			onOpenChange(newOpen);
			if (!newOpen) setDeleteConfirmOpen(false);
		}
	};
	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = t("Name is required");
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate() || !platformId) return;
		updateMutation.mutate({
			platformId,
			name: name.trim(),
			key: key.trim() || void 0,
			hostname: hostname.trim() || void 0
		}, {
			onSuccess: () => {
				toast.success(t("App updated successfully"));
				handleOpenChange(false);
				onSuccess?.();
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to update app"));
			}
		});
	};
	const handleDelete = () => {
		if (!platformId) return;
		deleteMutation.mutate(platformId, {
			onSuccess: () => {
				toast.success(t("App deleted successfully"));
				setDeleteConfirmOpen(false);
				handleOpenChange(false);
				onSuccess?.();
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete app"));
			}
		});
	};
	const platformType = displayPlatform?.type ?? "web";
	const showKey = !!displayPlatform && ("applicationId" in displayPlatform || "bundleIdentifier" in displayPlatform || "packageName" in displayPlatform || "packageIdentifierName" in displayPlatform);
	const showHostname = !!displayPlatform && "hostname" in displayPlatform;
	if (!platform && !platformId) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: t("Update app"),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6 space-y-5",
					children: platformLoading && !displayPlatform ? /* @__PURE__ */ jsxs("div", {
						className: "animate-pulse space-y-4",
						children: [/* @__PURE__ */ jsx("div", { className: "h-10 bg-muted rounded" }), /* @__PURE__ */ jsx("div", { className: "h-10 bg-muted rounded" })]
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									htmlFor: "platform-name",
									className: "text-[12px] font-medium",
									children: [
										t("Name"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "platform-name",
									placeholder: t("App name"),
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (errors.name) setErrors((prev) => ({
											...prev,
											name: ""
										}));
									},
									disabled: isPending,
									className: errors.name ? "border-destructive" : ""
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.name
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								className: "text-[12px] font-medium text-muted-foreground",
								children: t("Type")
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2",
								children: [/* @__PURE__ */ jsx(PlatformIcon, {
									platform: platformType,
									size: "sm"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-foreground",
									children: getPlatformDisplayName(platformType)
								})]
							})]
						}),
						showHostname && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "platform-hostname",
									className: "text-[12px] font-medium",
									children: t("Hostname")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "platform-hostname",
									placeholder: "e.g. localhost or myapp.example.com",
									value: hostname,
									onChange: (e) => setHostname(e.target.value),
									disabled: isPending
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t("The domain your app makes requests from. Use"),
										" ",
										/* @__PURE__ */ jsx("code", {
											className: "rounded bg-muted px-1 py-0.5 text-[11px]",
											children: "localhost"
										}),
										" ",
										t("for development (no port or protocol). Add a separate platform for each origin (e.g. localhost and production).")
									]
								}),
								/* @__PURE__ */ jsxs(BlogPageAnchor, {
									href: "/blog/post/cors-error",
									className: "inline-flex items-center gap-1 link-neutral text-[12px]",
									children: [t("Troubleshoot CORS errors"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
								})
							]
						}),
						showKey && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "platform-key",
								className: "text-[12px] font-medium",
								children: displayPlatform && "bundleIdentifier" in displayPlatform ? t("Bundle ID") : displayPlatform && "applicationId" in displayPlatform ? t("Application ID") : displayPlatform && "packageIdentifierName" in displayPlatform ? t("Package identifier") : t("Package name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "platform-key",
								placeholder: "com.example.app",
								value: key,
								onChange: (e) => setKey(e.target.value),
								disabled: isPending
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden mt-6",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Delete app")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Remove this app from the project. This action cannot be undone.")
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
										children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete app")]
									})
								})
							]
						})
					] })
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: isPending || platformLoading,
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
			className: "sm:max-w-md p-0 z-[130]",
			overlayClassName: "z-[130]",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete app") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to delete"),
						" ",
						/* @__PURE__ */ jsx("strong", { children: displayPlatform?.name || t("this app") }),
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
					children: t("Delete")
				})]
			})]
		})
	})] });
}
function PlatformContextMenu({ projectId, platform, children, onUpdate }) {
	const t = useT();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useDeletePlatform(projectId);
	if (!platform?.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	const hasName = !!platform.name;
	const identifier = getPlatformIdentifier(platform);
	const hasIdentifier = !!identifier;
	const handleDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate(platform.$id, {
			onSuccess: () => {
				toast.success(t("App deleted"));
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete app"));
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
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(platform)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", platform.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", platform.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				hasIdentifier && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Identifier", identifier),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Tag }), t("Copy identifier")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => sdk.forProject(projectId).project.getPlatform({ platformId: platform.$id })),
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
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete app") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to delete"),
						platform.name ? ` "${platform.name}"` : ` ${t("this app")}`,
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
export { PlatformDrawer as n, PlatformContextMenu as t };
