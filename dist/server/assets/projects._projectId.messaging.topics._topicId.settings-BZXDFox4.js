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
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { hs as useTopic } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
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
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./skeleton-8d0Q_D56.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import "./FrameworkIcon-DTkSe6r3.js";
import { U as canShowTopicSettingsTab } from "./console-access-checks-BTMEOKcL.js";
import "./console-rbac-loader-DvaSNNjB.js";
import "./LanguageIcon-C0AhXLp0.js";
import "./RuntimeIcon-Dt6YMTy1.js";
import "./ResourceSearchPopover-bBzpMw-c.js";
import { t as Route$1 } from "./projects._projectId.messaging.topics._topicId.settings-7imFt8we.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Hash, Trash2 } from "lucide-react";
function View({ initialTopic } = {}) {
	const t = useT();
	const { projectId, topicId } = useParams({ strict: false });
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data: topicFromHook, isLoading: topicLoading } = useTopic(projectId, topicId, initialTopic);
	const topic = topicFromHook ?? initialTopic;
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSettingsTab = canShowTopicSettingsTab(access, features);
	const [name, setName] = useState("");
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	useMemo(() => {
		if (topic) setName(topic.name || "");
	}, [topic]);
	const updateNameMutation = useMutation({
		mutationFn: async (name$1) => {
			if (!projectId || !topicId) throw new Error("Project ID and Topic ID are required");
			await sdk.forProject(projectId).messaging.updateTopic({
				topicId,
				name: name$1
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"topic",
				"project",
				projectId,
				topicId
			] });
			toast.success(t("Topic name updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update topic name"));
		}
	});
	const deleteTopicMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !topicId) throw new Error("Project ID and Topic ID are required");
			await sdk.forProject(projectId).messaging.deleteTopic({ topicId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"topics",
				"project",
				projectId
			] });
			toast.success(t("Topic deleted successfully"));
			navigate({
				to: "/projects/$projectId/messaging/topics",
				params: { projectId }
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete topic"));
		}
	});
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/messaging/topics/$topicId",
			params: {
				projectId,
				topicId
			}
		});
	};
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const topicIndex = pathParts.findIndex((part, idx) => part === "topics" && pathParts[idx + 1] === topicId);
		if (topicIndex >= 0 && pathParts[topicIndex + 2]) {
			if (pathParts[topicIndex + 2] === "settings") return "settings";
		}
		return "subscribers";
	}, [location.pathname, topicId]);
	const tabs = useMemo(() => [{
		id: "subscribers",
		label: t("Subscribers"),
		to: "/projects/$projectId/messaging/topics/$topicId",
		params: {
			projectId,
			topicId
		}
	}, ...showSettingsTab ? [{
		id: "settings",
		label: t("Settings"),
		to: "/projects/$projectId/messaging/topics/$topicId/settings",
		params: {
			projectId,
			topicId
		}
	}] : []], [
		projectId,
		topicId,
		showSettingsTab,
		t
	]);
	if (topicLoading && !initialTopic) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading topic...")
			})
		})
	});
	if (!topic) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Topic not found")
			})
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
				kind: "topic",
				label: topic.name,
				resourceId: topic.$id,
				projectId,
				back: {
					onClick: handleBack,
					"aria-label": t("Back to topics")
				}
			}),
			tabs,
			activeTab,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6 pt-4 sm:pt-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Name")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground",
									children: t("Update your topic's display name. This will be visible to all organization members.")
								}), /* @__PURE__ */ jsx(Input, {
									id: "topic-name",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: t("Topic name"),
									className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30",
								children: /* @__PURE__ */ jsx(Button, {
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: name.trim() === topic.name || !name.trim() || updateNameMutation.isPending,
									onClick: () => updateNameMutation.mutate(name),
									children: t("Update")
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Overview")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex items-start justify-between gap-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5",
												children: t("Topic ID")
											}), /* @__PURE__ */ jsx(CopyableId, {
												id: topic.$id,
												size: "sm"
											})]
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5",
											children: t("Created")
										}), topic.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
											date: topic.$createdAt,
											className: "text-[13px] text-foreground",
											showFormattedDate: true
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-muted-foreground/50 italic",
											children: "N/A"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5",
											children: t("Updated")
										}), /* @__PURE__ */ jsx(DateTooltip, {
											date: topic.$updatedAt || topic.$createdAt,
											className: "text-[13px] text-foreground",
											showFormattedDate: true
										})] })]
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Delete topic")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground",
									children: t("Permanently delete this topic and all its subscribers. This action cannot be undone.")
								}), topic && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mt-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
										children: /* @__PURE__ */ jsx(Hash, { className: "h-5 w-5 text-muted-foreground" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] font-medium text-foreground truncate",
											children: topic.name
										}), topic.emailTotal !== void 0 || topic.smsTotal !== void 0 || topic.pushTotal !== void 0 ? /* @__PURE__ */ jsxs("p", {
											className: "text-[12px] text-muted-foreground",
											children: [
												(topic.emailTotal || 0) + (topic.smsTotal || 0) + (topic.pushTotal || 0),
												" ",
												(topic.emailTotal || 0) + (topic.smsTotal || 0) + (topic.pushTotal || 0) !== 1 ? t("subscribers") : t("subscriber")
											]
										}) : null]
									})]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => setDeleteDialogOpen(true),
									disabled: deleteTopicMutation.isPending,
									children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete topic")]
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx(Dialog, {
				open: deleteDialogOpen,
				onOpenChange: setDeleteDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete topic") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Are you sure you want to delete this topic? This action cannot be undone.")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => setDeleteDialogOpen(false),
							disabled: deleteTopicMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							onClick: () => deleteTopicMutation.mutate(),
							disabled: deleteTopicMutation.isPending,
							children: t("Delete")
						})]
					})]
				})
			})]
		})]
	});
}
function TopicSettingsPage() {
	return /* @__PURE__ */ jsx(View, { initialTopic: Route$1.useLoaderData()?.topic });
}
export { TopicSettingsPage as component };
