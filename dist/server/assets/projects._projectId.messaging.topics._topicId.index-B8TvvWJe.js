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
import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { gs as useTopicSubscribers, hs as useTopic } from "./hooks-BONwG3Mt.js";
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
import "./input-yKHNPhDZ.js";
import "./collapsible-BcDIDOgI.js";
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./skeleton-8d0Q_D56.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import "./FrameworkIcon-DTkSe6r3.js";
import { J as canWriteTopics, U as canShowTopicSettingsTab } from "./console-access-checks-BTMEOKcL.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./LanguageIcon-C0AhXLp0.js";
import "./RuntimeIcon-Dt6YMTy1.js";
import "./ResourceSearchPopover-bBzpMw-c.js";
import { n as Route$1, t as Route$2 } from "./projects._projectId.messaging.topics._topicId.index-4b-Ng9QF.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { t as MessagingTargetsModal } from "./MessagingTargetsModal-CvMwcCIQ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Bell, Hash, Mail, Phone, Trash2 } from "lucide-react";
function View({ initialSubscribers, initialTopic } = {}) {
	const t = useT();
	const { projectId, topicId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const [addTargetsOpen, setAddTargetsOpen] = useState(false);
	const [subscriberPendingDelete, setSubscriberPendingDelete] = useState(null);
	const { data: topic } = useTopic(projectId, topicId, initialTopic);
	const topicResolved = topic ?? initialTopic;
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSettingsTab = canShowTopicSettingsTab(access, features);
	const canManageSubscribers = canWriteTopics(access, features);
	const subscribersPermissionTooltip = !canManageSubscribers ? t("You don't have permission to manage topic subscribers.") : void 0;
	const [searchValue, setSearchValue] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const searchDebounceRef = useRef(null);
	useEffect(() => {
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			setDebouncedSearch(searchValue.trim());
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [searchValue]);
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	useEffect(() => {
		setRequestedPage(1);
		setDisplayedPage(1);
	}, [debouncedSearch, topicId]);
	const pageIndexedRequested = requestedPage - 1;
	const pageIndexedDisplayed = displayedPage - 1;
	const { isLoading: requestedLoading, isFetching: requestedFetching } = useTopicSubscribers(projectId, topicId, pageIndexedRequested, pageSize, debouncedSearch || void 0);
	const { subscribers: displayedSubscribersRaw, total: displayedTotalRaw, isLoading: displayedLoading, isFetched: displayedFetched } = useTopicSubscribers(projectId, topicId, pageIndexedDisplayed, pageSize, debouncedSearch || void 0);
	useEffect(() => {
		if (requestedFetching || requestedLoading) return;
		if (requestedPage !== displayedPage) setDisplayedPage(requestedPage);
	}, [
		requestedFetching,
		requestedLoading,
		requestedPage,
		displayedPage
	]);
	const subscribers = useMemo(() => {
		if (displayedFetched || displayedSubscribersRaw.length > 0) return displayedSubscribersRaw;
		if (displayedPage === 1 && !debouncedSearch && initialSubscribers?.subscribers?.length) return initialSubscribers.subscribers;
		return [];
	}, [
		displayedFetched,
		displayedSubscribersRaw,
		displayedPage,
		debouncedSearch,
		initialSubscribers
	]);
	const subscribersTotal = useMemo(() => {
		if (displayedFetched || displayedTotalRaw > 0) return displayedTotalRaw;
		if (displayedPage === 1 && !debouncedSearch && initialSubscribers != null) return initialSubscribers.total;
		return displayedTotalRaw;
	}, [
		displayedFetched,
		displayedTotalRaw,
		displayedPage,
		debouncedSearch,
		initialSubscribers
	]);
	const existingSubscriberTargetIds = useMemo(() => new Set(subscribers.map((s) => s.targetId)), [subscribers]);
	const addSubscribersMutation = useMutation({
		mutationFn: async (targetIds) => {
			if (!projectId || !topicId) throw new Error("Project ID and Topic ID are required");
			const projectSdk = sdk.forProject(projectId);
			await Promise.all(targetIds.map((targetId) => projectSdk.messaging.createSubscriber({
				topicId,
				subscriberId: ID.unique(),
				targetId
			})));
		},
		onSuccess: async (_, targetIds) => {
			await queryClient.refetchQueries({ queryKey: [
				"subscribers",
				"project",
				projectId,
				"topic",
				topicId
			] });
			toast.success(`${targetIds.length} ${targetIds.length !== 1 ? t("subscribers") : t("subscriber")} ${t("added")}`);
			setAddTargetsOpen(false);
		},
		onError: (e) => {
			toast.error(getErrorMessage(e) || t("Failed to add subscribers"));
		}
	});
	const deleteSubscriberMutation = useMutation({
		mutationFn: async (subscriber) => {
			if (!projectId || !topicId) throw new Error("Project ID and Topic ID are required");
			await sdk.forProject(projectId).messaging.deleteSubscriber({
				topicId,
				subscriberId: subscriber.$id
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"subscribers",
				"project",
				projectId,
				"topic",
				topicId
			] });
			toast.success(t("Subscriber removed"));
			setSubscriberPendingDelete(null);
		},
		onError: (e) => {
			toast.error(getErrorMessage(e) || t("Failed to remove subscriber"));
		}
	});
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/messaging/topics",
			params: { projectId }
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
	useEffect(() => {
		if (showSettingsTab || !projectId || !topicId) return;
		if (activeTab === "settings") navigate({
			to: "/projects/$projectId/messaging/topics/$topicId",
			params: {
				projectId,
				topicId
			},
			replace: true
		});
	}, [
		showSettingsTab,
		activeTab,
		projectId,
		topicId,
		navigate
	]);
	const getTypeIcon = (type) => {
		if (type === "email") return Mail;
		if (type === "sms") return Phone;
		if (type === "push") return Bell;
		return Hash;
	};
	if (!topicResolved) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Topic not found")
			})
		})
	});
	const showSubscribersFullLoading = activeTab === "subscribers" && displayedLoading && subscribers.length === 0 && !(initialSubscribers && displayedPage === 1 && !debouncedSearch);
	const handlePageChange = (page) => {
		setRequestedPage(page);
	};
	const handlePageSizeChange = (size) => {
		setPageSize(size);
		setRequestedPage(1);
		setDisplayedPage(1);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
					kind: "topic",
					label: topicResolved.name,
					resourceId: topicResolved.$id,
					projectId,
					back: {
						onClick: handleBack,
						"aria-label": t("Back to topics")
					}
				}),
				tabs,
				activeTab,
				searchPlaceholder: activeTab === "subscribers" ? t("Search subscribers...") : void 0,
				searchValue: activeTab === "subscribers" ? searchValue : void 0,
				onSearchChange: activeTab === "subscribers" ? (value) => {
					setSearchValue(value);
					setRequestedPage(1);
					setDisplayedPage(1);
				} : void 0,
				createLabel: activeTab === "subscribers" ? t("Add subscriber") : void 0,
				createAnalyticsAction: activeTab === "subscribers" ? "add-subscriber" : void 0,
				onCreate: activeTab === "subscribers" ? () => setAddTargetsOpen(true) : void 0,
				createDisabled: activeTab === "subscribers" ? !canManageSubscribers : void 0,
				createDisabledTooltip: activeTab === "subscribers" ? subscribersPermissionTooltip : void 0,
				fullWidthBorder: true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
				children: activeTab === "subscribers" ? /* @__PURE__ */ jsx(Fragment, { children: showSubscribersFullLoading ? /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card py-12 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Loading subscribers...")
					})
				}) : subscribers.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Subscriber ID")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Name")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Target ID")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Target")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Type")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Created")
							}),
							/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 w-[52px]" })
						]
					}) }), /* @__PURE__ */ jsx(TableBody, { children: subscribers.map((subscriber) => {
						const target = subscriber.target;
						const TypeIcon = getTypeIcon(subscriber.providerType);
						const nameLabel = (() => {
							if (!target) return "-";
							const fromName = target.name?.trim();
							if (fromName) return fromName;
							const fromId = target.identifier?.trim();
							if (fromId) return fromId;
							if (target.userId) return target.userId;
							return "-";
						})();
						return /* @__PURE__ */ jsxs(TableRow, { children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(CopyableId, {
									id: subscriber.$id,
									size: "xs"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-foreground",
									children: nameLabel
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(CopyableId, {
									id: subscriber.targetId,
									size: "xs"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: target?.identifier || target?.name || subscriber.targetId
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(TypeIcon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground capitalize",
										children: subscriber.providerType
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: subscriber.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
									date: subscriber.$createdAt,
									className: "text-[12px] text-muted-foreground font-mono"
								}) : /* @__PURE__ */ jsx("span", {
									className: "text-[12px] text-muted-foreground/50 italic",
									children: "N/A"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { "aria-label": t("Subscriber actions") })
								}), /* @__PURE__ */ jsx(DropdownMenuContent, {
									align: "end",
									children: /* @__PURE__ */ jsx(DropdownMenuItem, {
										disabled: !canManageSubscribers,
										title: subscribersPermissionTooltip,
										onClick: () => setSubscriberPendingDelete(subscriber),
										children: /* @__PURE__ */ jsx(MenuItemContent, {
											icon: Trash2,
											children: t("Remove")
										})
									})
								})] })
							})
						] }, subscriber.$id);
					}) })] })
				}), /* @__PURE__ */ jsx(Pagination, {
					className: "py-2",
					currentPage: displayedPage,
					totalItems: subscribersTotal,
					pageSize,
					pageSizeOptions: [
						10,
						25,
						50,
						100
					],
					onPageChange: handlePageChange,
					onPageSizeChange: handlePageSizeChange,
					itemLabel: t("subscribers")
				})] }) : /* @__PURE__ */ jsx(EmptyState, {
					icon: Hash,
					title: t("No subscribers yet"),
					description: t("Add subscribers to this topic to start sending messages"),
					isEmpty: !debouncedSearch,
					hasFilters: !!debouncedSearch,
					variant: "card"
				}) }) : null
			}),
			/* @__PURE__ */ jsx(MessagingTargetsModal, {
				open: addTargetsOpen,
				onOpenChange: setAddTargetsOpen,
				title: t("Add subscribers"),
				description: t("Select user targets to subscribe to this topic. Targets already subscribed are skipped."),
				projectId,
				initialSelectedById: {},
				onConfirm: (selectedById) => {
					const newTargetIds = Object.keys(selectedById).filter((id) => !existingSubscriberTargetIds.has(id));
					if (newTargetIds.length === 0) {
						toast.info(t("No new targets selected (or all are already subscribed)"));
						return;
					}
					addSubscribersMutation.mutate(newTargetIds);
				}
			}),
			/* @__PURE__ */ jsx(AlertDialog, {
				open: subscriberPendingDelete != null,
				onOpenChange: (open) => {
					if (!open) setSubscriberPendingDelete(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: t("Remove subscriber?") }), /* @__PURE__ */ jsx(AlertDialogDescription, {
					className: "text-[13px]",
					children: t("This subscriber will be removed from the topic. You can add them again later.")
				})] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: deleteSubscriberMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					disabled: !canManageSubscribers || deleteSubscriberMutation.isPending,
					onClick: () => {
						if (subscriberPendingDelete) deleteSubscriberMutation.mutate(subscriberPendingDelete);
					},
					children: t("Remove")
				})] })] })
			})
		]
	});
}
function TopicDetailPage() {
	const loaderData = Route$2.useLoaderData();
	const parentData = Route$1.useLoaderData();
	const initialTopic = loaderData?.topic ?? parentData?.topic;
	return /* @__PURE__ */ jsx(View, {
		initialSubscribers: loaderData?.initialSubscribers,
		initialTopic
	});
}
export { TopicDetailPage as component };
