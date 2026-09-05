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
import { Eu as useDeleteOrganizationApp, Fu as MARKETPLACE_CATEGORY_LABELS, Iu as MARKETPLACE_CATEGORY_ORDER, Lu as buildMarketplaceAppTags, Nu as mapAppToMarketplaceApp, ku as useOrganizationApp } from "./hooks-BONwG3Mt.js";
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
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { n as trimOrEmpty, r as useOrgAppUpdate } from "./useOrgAppUpdate-SSQwla9J.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Package, Trash2 } from "lucide-react";
function DeleteAppCard({ orgId, app }) {
	const t = useT();
	const navigate = useNavigate();
	const deleteMutation = useDeleteOrganizationApp(orgId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const handleDelete = async () => {
		try {
			await deleteMutation.mutateAsync(app.$id);
			toast.success(t("App deleted"));
			setDeleteDialogOpen(false);
			navigate({
				to: "/organizations/$orgId/settings/oauth-apps",
				params: { orgId }
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete app")));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Delete app")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Permanently delete this app and revoke all associated tokens. This action cannot be undone.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
						children: /* @__PURE__ */ jsx(Package, { className: "h-5 w-5 text-muted-foreground" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							children: app.name || t("Unnamed app")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: app.$id
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
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: deleteMutation.isPending,
							children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete app")]
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete app") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground",
										children: app.name || t("this app")
									}),
									" ",
									t("and revoke all associated tokens? This action cannot be undone.")
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
					})]
				})
			})
		]
	});
}
function View() {
	const t = useT();
	const { orgId, appId } = useParams({ strict: false });
	const { app } = useOrganizationApp(appId);
	if (!app || !orgId) return null;
	const mapped = mapAppToMarketplaceApp(app, { organizationId: orgId });
	const { submit, isUpdating } = useOrgAppUpdate(orgId, app);
	const [name, setName] = useState(app.name);
	const [tagline, setTagline] = useState(app.tagline ?? "");
	const [description, setDescription] = useState(app.description ?? "");
	const [category, setCategory] = useState(mapped.category);
	useEffect(() => {
		const nextMapped = mapAppToMarketplaceApp(app, { organizationId: orgId });
		setName(app.name);
		setTagline(app.tagline ?? "");
		setDescription(app.description ?? "");
		setCategory(nextMapped.category);
	}, [app, orgId]);
	const handleUpdate = async () => {
		if (!trimOrEmpty(name)) return;
		await submit({
			name: trimOrEmpty(name),
			tagline: trimOrEmpty(tagline),
			description: trimOrEmpty(description),
			tags: buildMarketplaceAppTags(category, app.tags ?? [])
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Details")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Name and descriptions shown on the marketplace listing and OAuth2 consent screen.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "app-general-name",
								children: t("Name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "app-general-name",
								value: name,
								onChange: (e) => setName(e.target.value)
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "app-general-tagline",
								children: t("Tagline")
							}), /* @__PURE__ */ jsx(Input, {
								id: "app-general-tagline",
								value: tagline,
								onChange: (e) => setTagline(e.target.value),
								placeholder: t("Short summary for listings and consent")
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "app-general-description",
								children: t("Description")
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "app-general-description",
								value: description,
								onChange: (e) => setDescription(e.target.value),
								rows: 4,
								className: "resize-none"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "app-general-category",
								children: t("Category")
							}), /* @__PURE__ */ jsxs(Select, {
								value: category,
								onValueChange: (value) => setCategory(value),
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									id: "app-general-category",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsx(SelectContent, { children: MARKETPLACE_CATEGORY_ORDER.map((key) => /* @__PURE__ */ jsx(SelectItem, {
									value: key,
									children: t(MARKETPLACE_CATEGORY_LABELS[key])
								}, key)) })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, { children: t("App ID") }), /* @__PURE__ */ jsx(CopyableId, { id: app.$id })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isUpdating || !trimOrEmpty(name),
						onClick: handleUpdate,
						children: t("Update")
					})
				})
			]
		}), /* @__PURE__ */ jsx(DeleteAppCard, {
			orgId,
			app
		})]
	});
}
function OrgAppGeneralPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { OrgAppGeneralPage as component };
