import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import "./hooks-BONwG3Mt.js";
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
import { Ot as buildSiteUpdateParams, dn as useDeleteSite, mn as useProjectSite } from "./affiliates-BOg1SHC6.js";
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
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as ConfirmNameDialog } from "./ConfirmNameDialog-CzIMv4mD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
function NameCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [name, setName] = useState("");
	useEffect(() => {
		if (site) setName(site.name || "");
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Site name updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update site name")));
		}
	});
	const handleSave = () => {
		if (!name.trim()) {
			toast.error(t("Site name is required"));
			return;
		}
		updateSiteMutation.mutate({ name });
	};
	const hasChanges = name !== site?.name;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Name")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Site name used for identification")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx(Input, {
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: t("Enter site name"),
					className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !name.trim() || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function SiteDetailsCard({ site }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Details")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Identifiers and timestamps for this site.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-1",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground",
						children: [
							t("Site ID:"),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "ms-1.5",
								children: /* @__PURE__ */ jsx(CopyableId, {
									id: site.$id,
									size: "sm"
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground",
						children: [
							t("Created:"),
							" ",
							/* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(site.$createdAt),
								showFormattedDate: true,
								className: "text-foreground"
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground",
						children: [
							t("Last updated:"),
							" ",
							/* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(site.$updatedAt || site.$createdAt),
								showFormattedDate: true,
								className: "text-foreground"
							})
						]
					})
				]
			})
		]
	});
}
function SiteStatusCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [enabled, setEnabled] = useState(false);
	useEffect(() => {
		if (site) setEnabled(site.enabled !== false);
	}, [site]);
	const updateEnabledMutation = useMutation({
		mutationFn: async (nextEnabled) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, { enabled: nextEnabled }));
		},
		onSuccess: (updated, nextEnabled) => {
			toast.success(nextEnabled ? t("Site has been enabled") : t("Site has been disabled"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
			if (site) setEnabled(site.enabled !== false);
		}
	});
	const hasChanges = enabled !== (site?.enabled !== false);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Status")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Enable or disable this site without deleting it.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Switch, {
							id: "toggle-site-enabled",
							checked: enabled,
							onCheckedChange: setEnabled,
							disabled: updateEnabledMutation.isPending
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "toggle-site-enabled",
							className: "text-[13px] text-foreground",
							children: enabled ? t("Enabled") : t("Disabled")
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || updateEnabledMutation.isPending,
					onClick: () => {
						if (hasChanges) updateEnabledMutation.mutate(enabled);
					},
					children: t("Update")
				})
			})
		]
	});
}
function DangerZoneCard({ projectId, siteId, site, onDelete }) {
	const t = useT();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteSiteMutation = useDeleteSite(projectId);
	const handleDelete = () => {
		if (!siteId) return;
		deleteSiteMutation.mutate(siteId, {
			onSuccess: () => {
				toast.success(t("Site deleted successfully"));
				setDeleteDialogOpen(false);
				onDelete?.();
			},
			onError: (error) => {
				toast.error(getErrorMessage(error, t("Failed to delete site")));
			}
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Delete site")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Permanently delete this site and all its data. This action cannot be undone.")
				}), site && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
						children: /* @__PURE__ */ jsx(Trash2, { className: "h-5 w-5 text-muted-foreground" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							children: site.name || t("Unnamed Site")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: site.$id
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
				children: [/* @__PURE__ */ jsxs(Button, {
					variant: "destructive",
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: deleteSiteMutation.isPending,
					onClick: () => setDeleteDialogOpen(true),
					children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete site")]
				}), /* @__PURE__ */ jsx(ConfirmNameDialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					title: "Delete site",
					description: /* @__PURE__ */ jsxs(Fragment, { children: [
						t("Are you sure you want to delete"),
						" ",
						site && /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: site.name || t("this site")
						}),
						" ",
						t("and all its data? This action cannot be undone.")
					] }),
					confirmValue: site?.name?.trim() || site?.$id || "",
					confirmPlaceholder: "Enter site name",
					onConfirm: handleDelete,
					isConfirming: deleteSiteMutation.isPending
				})]
			})
		]
	});
}
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { data: site, isLoading: siteLoading } = useProjectSite(projectId, siteId);
	const handleDelete = () => {
		navigate({
			to: "/projects/$projectId/sites",
			params: { projectId }
		});
	};
	if (siteLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!site) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "details",
			search: {
				title: "Details",
				keywords: [
					"id",
					"created",
					"updated",
					"identifiers"
				]
			},
			node: /* @__PURE__ */ jsx(SiteDetailsCard, { site })
		},
		{
			id: "name",
			search: {
				title: "Name",
				keywords: [
					"rename",
					"display",
					"site name"
				]
			},
			node: /* @__PURE__ */ jsx(NameCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "status",
			search: {
				title: "Status",
				description: "Enable or disable this site without deleting it.",
				keywords: [
					"enabled",
					"disabled",
					"toggle"
				]
			},
			node: /* @__PURE__ */ jsx(SiteStatusCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "delete",
			search: {
				title: "Delete site",
				keywords: [
					"delete",
					"remove",
					"destroy",
					"danger"
				]
			},
			node: /* @__PURE__ */ jsx(DangerZoneCard, {
				projectId,
				siteId,
				site,
				onDelete: handleDelete
			})
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
