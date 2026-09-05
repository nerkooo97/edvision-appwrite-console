import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Fd as useProjectBuckets, Ho as MESSAGE_DETAIL_TARGETS_LIMIT, Md as useBucketFiles, Nd as useFile, Vv as useProjectUsers, jd as useBucket, ls as useMessage, ps as useProjectTopics, us as useMessageTargets } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { r as trimForPageTitle } from "./page-title-D-d2GRz3.js";
import { t as formatBytes } from "./mock-data-bi-y2wwb.js";
import { r as formatDateTime } from "./date-utils-C_g8GS8c.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { n as getStorageFileIcon, t as StorageFilePreviewThumb } from "./StorageFilePreviewThumb-B9bmNXmt.js";
import { t as MessagingTargetsModal } from "./MessagingTargetsModal-CvMwcCIQ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ID, MessagePriority } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, ArrowLeft, Bell, Calendar, File, Folder, Hash, LayoutGrid, List, Loader2, Mail, Paperclip, Phone, Plus, Search, Target, Trash2, Upload, Users as Users$1, X } from "lucide-react";
var MODAL_WIDTH = 1100;
var MODAL_HEIGHT = 600;
function StorageFileExplorerDialog({ open, onOpenChange, projectId, title = "Select file", description = "Choose a bucket, then pick a file to attach.", confirmLabel = "Add", onConfirm }) {
	const t = useT();
	const queryClient = useQueryClient();
	const bucketUploadInputRef = useRef(null);
	const [selectedBucketId, setSelectedBucketId] = useState(null);
	const [displayedBucketId, setDisplayedBucketId] = useState(null);
	const [selectedStorageFile, setSelectedStorageFile] = useState(null);
	const [storageSearch, setStorageSearch] = useState("");
	const [displayedSearch, setDisplayedSearch] = useState("");
	const [storageViewMode, setStorageViewMode] = useState("list");
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const [bucketUploading, setBucketUploading] = useState(false);
	const { buckets } = useProjectBuckets(projectId, 0, 100);
	const { data: selectedBucketFilesData, isSuccess: selectedBucketFilesSuccess } = useBucketFiles(projectId, selectedBucketId, 0, pageSize, selectedBucketId ? storageSearch || void 0 : void 0, false);
	const { data: bucket } = useBucket(projectId, displayedBucketId);
	const { data: requestedFilesData, isFetching: filesFetching, isLoading: filesLoading } = useBucketFiles(projectId, displayedBucketId, requestedPage - 1, pageSize, displayedBucketId ? storageSearch || void 0 : void 0, false);
	const { data: displayedFilesData, isLoading: displayedFilesLoading } = useBucketFiles(projectId, displayedBucketId, displayedPage - 1, pageSize, displayedBucketId ? displayedSearch || void 0 : void 0, false);
	const files = displayedFilesData?.files ?? [];
	const filesTotal = displayedFilesData?.total ?? requestedFilesData?.total ?? 0;
	useEffect(() => {
		if (!filesFetching && !filesLoading && requestedPage !== displayedPage) setDisplayedPage(requestedPage);
	}, [
		filesFetching,
		filesLoading,
		requestedPage,
		displayedPage
	]);
	useEffect(() => {
		if (!filesFetching && !filesLoading && storageSearch !== displayedSearch && requestedPage === 1) {
			setDisplayedSearch(storageSearch);
			setDisplayedPage(1);
		}
	}, [
		filesFetching,
		filesLoading,
		storageSearch,
		displayedSearch,
		requestedPage
	]);
	useEffect(() => {
		if (selectedBucketId && selectedBucketFilesSuccess && selectedBucketFilesData != null) {
			setDisplayedBucketId(selectedBucketId);
			setDisplayedSearch(storageSearch);
			setRequestedPage(1);
			setDisplayedPage(1);
		}
	}, [
		selectedBucketId,
		selectedBucketFilesSuccess,
		selectedBucketFilesData,
		storageSearch
	]);
	useEffect(() => {
		setRequestedPage(1);
		setDisplayedPage(1);
	}, [storageSearch]);
	const reset = useCallback(() => {
		setSelectedBucketId(null);
		setDisplayedBucketId(null);
		setSelectedStorageFile(null);
		setStorageSearch("");
		setDisplayedSearch("");
		setRequestedPage(1);
		setDisplayedPage(1);
		if (bucketUploadInputRef.current) bucketUploadInputRef.current.value = "";
	}, []);
	useEffect(() => {
		if (!open) {
			reset();
			return;
		}
		if (buckets.length > 0 && !selectedBucketId) setSelectedBucketId(buckets[0].$id);
	}, [
		open,
		buckets,
		selectedBucketId,
		reset
	]);
	const handleOpenChange = (next) => {
		if (!next) reset();
		onOpenChange(next);
	};
	const handleStoragePageChange = (page) => {
		setRequestedPage(page);
		setSelectedStorageFile(null);
	};
	const handleStoragePageSizeChange = (newPageSize) => {
		setPageSize(newPageSize);
		setRequestedPage(1);
		setDisplayedPage(1);
		setSelectedStorageFile(null);
	};
	const handleBucketUpload = async (e) => {
		const chosen = e.target.files?.[0];
		if (!chosen || !displayedBucketId || !projectId) return;
		e.target.value = "";
		setBucketUploading(true);
		try {
			await sdk.forProject(projectId).storage.createFile({
				bucketId: displayedBucketId,
				fileId: ID.unique(),
				file: chosen
			});
			await queryClient.refetchQueries({ queryKey: [
				"files",
				"project",
				projectId,
				"bucket",
				displayedBucketId
			] });
			toast.success(t("File uploaded"));
		} catch (err) {
			toast.error(getErrorMessage(err));
		} finally {
			setBucketUploading(false);
		}
	};
	const handleConfirm = () => {
		if (!selectedStorageFile) return;
		if (onConfirm(selectedStorageFile) === false) return;
		reset();
		onOpenChange(false);
	};
	const canConfirm = !!selectedStorageFile && !!displayedBucketId && selectedStorageFile.bucketId === displayedBucketId && !bucketUploading;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "!flex flex-col gap-0 p-0 max-h-[90dvh] !max-w-[min(95vw,1100px)] w-full overflow-hidden",
			style: {
				width: MODAL_WIDTH,
				height: MODAL_HEIGHT
			},
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start shrink-0",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t(title) }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t(description)
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 min-h-0 overflow-hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "w-[220px] shrink-0 border-e border-border flex flex-col",
						children: [/* @__PURE__ */ jsx("div", {
							className: "px-3 py-1.5 border-b border-border",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Buckets")
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 overflow-y-auto py-1",
							children: [buckets.map((b) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setSelectedBucketId(b.$id);
									setSelectedStorageFile(null);
									setStorageSearch("");
								},
								className: cn("w-full px-3 py-2 text-start text-[13px] truncate transition-colors", selectedBucketId === b.$id ? "bg-accent text-accent-foreground font-medium" : "text-foreground hover:bg-muted/50"),
								children: b.name
							}, b.$id)), buckets.length === 0 && /* @__PURE__ */ jsx("p", {
								className: "px-3 py-2 text-[12px] text-muted-foreground",
								children: t("No buckets")
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 flex flex-col min-w-0 min-h-0",
						children: [!selectedBucketId && /* @__PURE__ */ jsx("div", {
							className: "flex-1 flex items-center justify-center text-[13px] text-muted-foreground",
							children: t("Select a bucket to browse files")
						}), selectedBucketId && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "shrink-0 border-b border-border px-4 py-3 space-y-3",
							children: displayedBucketId && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-medium text-foreground",
									children: bucket?.name ?? t("Bucket")
								}), /* @__PURE__ */ jsx(CopyableId, {
									id: displayedBucketId,
									size: "xs",
									maxWidth: 120
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "relative flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
											placeholder: t("Search files..."),
											value: storageSearch,
											onChange: (e) => setStorageSearch(e.target.value.trim()),
											className: "ps-8 h-8 text-[13px]"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1 rounded-md border border-border bg-muted/30 p-0.5",
										children: [/* @__PURE__ */ jsx(Button, {
											variant: "ghost",
											size: "sm",
											className: cn("h-7 w-7 p-0", storageViewMode === "list" ? "bg-background" : "hover:bg-transparent"),
											type: "button",
											onClick: () => setStorageViewMode("list"),
											children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
										}), /* @__PURE__ */ jsx(Button, {
											variant: "ghost",
											size: "sm",
											className: cn("h-7 w-7 p-0", storageViewMode === "grid" ? "bg-background" : "hover:bg-transparent"),
											type: "button",
											onClick: () => setStorageViewMode("grid"),
											children: /* @__PURE__ */ jsx(LayoutGrid, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										className: "h-8 gap-1.5",
										asChild: true,
										disabled: bucketUploading,
										children: /* @__PURE__ */ jsxs("label", {
											htmlFor: "storage-explorer-bucket-upload",
											className: "cursor-pointer flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Upload, { className: "h-3.5 w-3.5" }), t("Upload")]
										})
									}),
									/* @__PURE__ */ jsx("input", {
										id: "storage-explorer-bucket-upload",
										ref: bucketUploadInputRef,
										type: "file",
										className: "sr-only",
										onChange: handleBucketUpload,
										disabled: bucketUploading
									})
								]
							})] })
						}), displayedBucketId && /* @__PURE__ */ jsx("div", {
							className: "flex-1 min-h-0 flex flex-col overflow-hidden",
							children: /* @__PURE__ */ jsx("div", {
								className: "overflow-y-auto p-4 min-h-0 flex-1 max-h-[360px]",
								children: displayedFilesLoading && files.length === 0 ? /* @__PURE__ */ jsx("div", {
									className: "flex flex-1 items-center justify-center py-12 text-[13px] text-muted-foreground",
									children: t("Loading files…")
								}) : files.length === 0 && filesTotal === 0 ? /* @__PURE__ */ jsx(EmptyState, {
									icon: File,
									title: storageSearch ? t("No files match your search") : t("No files in this bucket"),
									description: storageSearch ? t("Try a different search or upload a file.") : t("Upload a file to this bucket or choose another bucket."),
									variant: "card",
									iconSize: "md"
								}) : storageViewMode === "list" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("ul", {
									className: "divide-y divide-border rounded-lg border border-border bg-card overflow-hidden",
									children: files.map((f) => {
										const isSelected = selectedStorageFile?.fileId === f.$id && selectedStorageFile?.bucketId === f.bucketId;
										const FileIcon = getStorageFileIcon(f.mimeType);
										return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setSelectedStorageFile({
												bucketId: f.bucketId,
												fileId: f.$id
											}),
											className: cn("w-full flex items-center gap-3 px-3 py-2.5 text-start text-[13px] transition-colors hover:bg-accent cursor-pointer", isSelected && "bg-accent"),
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
												children: /* @__PURE__ */ jsx(FileIcon, { className: "h-4 w-4" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ jsx("p", {
													className: "truncate font-medium text-foreground",
													children: f.name
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-[11px] text-muted-foreground",
													children: [
														f.mimeType ?? "-",
														" ·",
														" ",
														formatBytes(f.sizeOriginal ?? 0)
													]
												})]
											})]
										}) }, f.$id);
									})
								}), /* @__PURE__ */ jsx(Pagination, {
									currentPage: displayedPage,
									totalItems: filesTotal,
									pageSize,
									pageSizeOptions: [
										10,
										25,
										50,
										100
									],
									onPageChange: handleStoragePageChange,
									onPageSizeChange: handleStoragePageSizeChange,
									itemLabel: "files",
									className: "mt-4"
								})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
									className: "grid gap-2 sm:grid-cols-2",
									children: files.map((f) => {
										const isSelected = selectedStorageFile?.fileId === f.$id && selectedStorageFile?.bucketId === f.bucketId;
										const FileIcon = getStorageFileIcon(f.mimeType);
										return /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setSelectedStorageFile({
												bucketId: f.bucketId,
												fileId: f.$id
											}),
											className: cn("rounded-lg border border-border bg-card p-3 text-start transition-colors hover:border-primary/40 cursor-pointer", isSelected && "border-primary ring-1 ring-primary/20"),
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
													children: /* @__PURE__ */ jsx(FileIcon, { className: "h-5 w-5" })
												}),
												/* @__PURE__ */ jsx("p", {
													className: "mt-2 truncate text-[13px] font-medium text-foreground",
													children: f.name
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[11px] text-muted-foreground",
													children: formatBytes(f.sizeOriginal ?? 0)
												})
											]
										}, f.$id);
									})
								}), /* @__PURE__ */ jsx(Pagination, {
									currentPage: displayedPage,
									totalItems: filesTotal,
									pageSize,
									pageSizeOptions: [
										10,
										25,
										50,
										100
									],
									onPageChange: handleStoragePageChange,
									onPageSizeChange: handleStoragePageSizeChange,
									itemLabel: "files",
									className: "mt-4"
								})] })
							})
						})] })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end shrink-0",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						type: "button",
						onClick: () => handleOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						onClick: handleConfirm,
						disabled: !canConfirm,
						children: t(confirmLabel)
					})]
				})
			]
		})
	});
}
function estimateRecipientTargets(message, topics) {
	let total = message.targets?.length ?? 0;
	const topicMap = new Map(topics.map((t) => [t.$id, t]));
	for (const topicId of message.topics || []) {
		const topic = topicMap.get(topicId);
		if (!topic) continue;
		if (message.providerType === "push") total += topic.pushTotal || 0;
		else if (message.providerType === "email") total += topic.emailTotal || 0;
		else if (message.providerType === "sms") total += topic.smsTotal || 0;
	}
	total += message.users?.length ?? 0;
	return total;
}
function MessageSendDialog({ open, onOpenChange, projectId, message, topics, onSuccess }) {
	const t = useT();
	const queryClient = useQueryClient();
	const totalTargets = useMemo(() => estimateRecipientTargets(message, topics), [message, topics]);
	const sendMutation = useMutation({
		mutationFn: async () => {
			const projectSdk = sdk.forProject(projectId);
			if (message.providerType === "email") return projectSdk.messaging.updateEmail({
				messageId: message.$id,
				draft: false
			});
			if (message.providerType === "sms") return projectSdk.messaging.updateSMS({
				messageId: message.$id,
				draft: false
			});
			return projectSdk.messaging.updatePush({
				messageId: message.$id,
				draft: false
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"message",
				"project",
				projectId,
				message.$id
			] });
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(`${t("The message has been sent to an estimated")} ${totalTargets} ${t("targets.")}`);
			onOpenChange(false);
			onSuccess();
		},
		onError: (e) => {
			toast.error(getErrorMessage(e) || t("Failed to send message"));
		}
	});
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Confirm sending message") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Please confirm you want to send this message now. It will be delivered to an estimated"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: totalTargets
						}),
						" ",
						t("targets."),
						/* @__PURE__ */ jsx("span", {
							className: "mt-3 block font-medium text-foreground",
							children: t("This action cannot be undone.")
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: sendMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					onClick: () => sendMutation.mutate(),
					disabled: sendMutation.isPending,
					children: t("Send")
				})]
			})]
		})
	});
}
function MessageScheduleDialog({ open, onOpenChange, projectId, message, topics, onSuccess }) {
	const t = useT();
	const queryClient = useQueryClient();
	const totalTargets = useMemo(() => estimateRecipientTargets(message, topics), [message, topics]);
	const buildDefaultIso = (iso) => {
		if (iso) {
			const d = new Date(iso);
			if (!Number.isNaN(d.getTime())) return d.toISOString();
		}
		const now = /* @__PURE__ */ new Date();
		now.setMinutes(now.getMinutes() + 5);
		return now.toISOString();
	};
	const [localValue, setLocalValue] = useState(() => buildDefaultIso(message.scheduledAt));
	useEffect(() => {
		if (open) setLocalValue(buildDefaultIso(message.scheduledAt));
	}, [open, message.scheduledAt]);
	const scheduleMutation = useMutation({
		mutationFn: async (scheduledAt) => {
			const projectSdk = sdk.forProject(projectId);
			if (message.providerType === "email") return projectSdk.messaging.updateEmail({
				messageId: message.$id,
				scheduledAt
			});
			if (message.providerType === "sms") return projectSdk.messaging.updateSMS({
				messageId: message.$id,
				scheduledAt
			});
			return projectSdk.messaging.updatePush({
				messageId: message.$id,
				draft: false,
				scheduledAt
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"message",
				"project",
				projectId,
				message.$id
			] });
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(`${t("The message has been scheduled and will be sent to an estimated")} ${totalTargets} ${t("targets.")}`);
			onOpenChange(false);
			onSuccess();
		},
		onError: (e) => {
			toast.error(getErrorMessage(e) || t("Failed to schedule message"));
		}
	});
	const handleSubmit = () => {
		const dt = new Date(localValue);
		if (Number.isNaN(dt.getTime())) {
			toast.error(t("Enter a valid date and time"));
			return;
		}
		if (dt.getTime() <= Date.now()) {
			toast.error(t("Schedule a time in the future"));
			return;
		}
		scheduleMutation.mutate(dt.toISOString());
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Schedule message") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Choose when this message should be delivered. Time uses your local timezone.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0 space-y-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "schedule-local",
							className: "text-[13px]",
							children: t("Send at")
						}), /* @__PURE__ */ jsx(DateTimePicker, {
							id: "schedule-local",
							value: localValue || null,
							onChange: (value) => setLocalValue(value ?? ""),
							clearable: false,
							className: "h-9"
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: scheduleMutation.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleSubmit,
						disabled: scheduleMutation.isPending,
						children: t("Schedule")
					})]
				})
			]
		})
	});
}
function MessageCancelScheduleDialog({ open, onOpenChange, projectId, message, onSuccess }) {
	const t = useT();
	const queryClient = useQueryClient();
	const cancelMutation = useMutation({
		mutationFn: async () => {
			const projectSdk = sdk.forProject(projectId);
			if (message.providerType === "email") return projectSdk.messaging.updateEmail({
				messageId: message.$id,
				draft: true
			});
			if (message.providerType === "sms") return projectSdk.messaging.updateSMS({
				messageId: message.$id,
				draft: true
			});
			return projectSdk.messaging.updatePush({
				messageId: message.$id,
				draft: true
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"message",
				"project",
				projectId,
				message.$id
			] });
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			toast.success(t("The scheduling has been cancelled."));
			onOpenChange(false);
			onSuccess();
		},
		onError: (e) => {
			toast.error(getErrorMessage(e) || t("Failed to cancel scheduling"));
		}
	});
	const titleLabel = message.data?.title ?? message.data?.subject ?? message.data?.content ?? t("Message");
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Cancel scheduling") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to cancel the scheduling of"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: titleLabel
						}),
						"?",
						" ",
						t("The message returns to draft.")
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: cancelMutation.isPending,
					children: t("Keep scheduled")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					onClick: () => cancelMutation.mutate(),
					disabled: cancelMutation.isPending,
					children: t("Cancel scheduling")
				})]
			})]
		})
	});
}
function MessagingRecipientUsersModal({ open, onOpenChange, projectId, existingUserIds, onConfirm }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [selectedUserIds, setSelectedUserIds] = useState(/* @__PURE__ */ new Set());
	const [page, setPage] = useState(0);
	const { users, isLoading } = useProjectUsers(projectId || null, page, 25, search);
	useEffect(() => {
		if (!open) {
			setSelectedUserIds(/* @__PURE__ */ new Set());
			setSearch("");
			setPage(0);
		}
	}, [open]);
	const toggle = (userId) => {
		setSelectedUserIds((prev) => {
			const next = new Set(prev);
			if (next.has(userId)) next.delete(userId);
			else next.add(userId);
			return next;
		});
	};
	const handleAdd = () => {
		const picked = Array.from(selectedUserIds);
		if (picked.length === 0) return;
		const merged = new Set([...existingUserIds, ...picked]);
		onConfirm(Array.from(merged));
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0 max-h-[80dvh] flex flex-col",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add users") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Users receive this message on every target matching the message channel for their account.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 flex-1 min-h-0 flex flex-col gap-3",
					children: [/* @__PURE__ */ jsx(Input, {
						placeholder: t("Search users by name, email, or ID..."),
						value: search,
						onChange: (e) => {
							setSearch(e.target.value);
							setPage(0);
						},
						className: "h-9"
					}), /* @__PURE__ */ jsx("div", {
						className: "flex-1 min-h-0 overflow-y-auto space-y-1",
						children: isLoading ? /* @__PURE__ */ jsx("div", {
							className: "py-8 text-center text-[13px] text-muted-foreground",
							children: t("Loading users…")
						}) : users.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
							icon: Users$1,
							isEmpty: !search,
							hasFilters: !!search,
							className: "py-8"
						}) : users.map((user) => {
							const disabled = existingUserIds.has(user.$id);
							const isSelected = selectedUserIds.has(user.$id);
							const label = user.name || user.email || user.phone || user.$id;
							return /* @__PURE__ */ jsxs("div", {
								className: cn("flex items-center gap-3 rounded-lg border p-3", disabled ? "cursor-not-allowed border-border bg-muted/30 opacity-50" : "cursor-pointer border-border hover:bg-muted/50", !disabled && isSelected && "border-primary bg-primary/5"),
								onClick: () => !disabled && toggle(user.$id),
								children: [/* @__PURE__ */ jsx(Checkbox, {
									checked: isSelected,
									disabled,
									onCheckedChange: () => !disabled && toggle(user.$id),
									onClick: (e) => e.stopPropagation()
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate text-[13px] font-medium text-foreground",
										children: label
									}), user.email ? /* @__PURE__ */ jsx("p", {
										className: "truncate text-[12px] text-muted-foreground",
										children: user.email
									}) : null]
								})]
							}, user.$id);
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleAdd,
						disabled: selectedUserIds.size === 0,
						children: t("Add")
					})]
				})
			]
		})
	});
}
function parseStorageCompoundId(compound) {
	const i = compound.indexOf(":");
	if (i <= 0 || i === compound.length - 1) return null;
	return {
		bucketId: compound.slice(0, i),
		fileId: compound.slice(i + 1)
	};
}
function EmailAttachmentRow({ projectId, compoundId, buckets, isDraft, onRemove }) {
	const t = useT();
	const parsed = parseStorageCompoundId(compoundId);
	const bucketLabel = parsed ? buckets.find((b) => b.$id === parsed.bucketId)?.name ?? parsed.bucketId : compoundId;
	const { data: file, isLoading, isError } = useFile(projectId, parsed?.bucketId, parsed?.fileId);
	if (!parsed) return /* @__PURE__ */ jsxs("li", {
		className: "flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
				children: /* @__PURE__ */ jsx(Folder, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate text-[13px] font-medium text-foreground",
					children: t("Invalid attachment")
				}), /* @__PURE__ */ jsx("p", {
					className: "truncate font-mono text-[11px] text-muted-foreground",
					children: compoundId
				})]
			}),
			isDraft && /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 shrink-0 p-0",
				onClick: onRemove,
				children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
			})
		]
	});
	const displayName = !isLoading && !isError && file?.name ? file.name : isLoading ? void 0 : compoundId;
	const mimeType = file?.mimeType;
	return /* @__PURE__ */ jsxs("li", {
		className: "flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "relative shrink-0",
				children: isLoading ? /* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted/40",
					children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
				}) : /* @__PURE__ */ jsx(StorageFilePreviewThumb, {
					projectId,
					bucketId: parsed.bucketId,
					fileId: parsed.fileId,
					mimeType,
					name: file?.name,
					variant: "table",
					pending: false
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("truncate text-[13px] font-medium text-foreground", isLoading && "text-muted-foreground"),
					title: displayName,
					children: isLoading ? t("Loading file…") : displayName
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-0.5 flex min-w-0 items-center gap-1.5 text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Folder, {
						className: "h-3.5 w-3.5 shrink-0",
						"aria-hidden": true
					}), /* @__PURE__ */ jsx("span", {
						className: "truncate",
						title: bucketLabel,
						children: bucketLabel
					})]
				})]
			}),
			isDraft && /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 shrink-0 p-0",
				onClick: onRemove,
				children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
			})
		]
	});
}
function parseIdArray(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((x) => typeof x === "string" && x.trim().length > 0);
}
function parseMessagingEmailAttachments(value) {
	if (value == null) return [];
	if (!Array.isArray(value)) return [];
	const out = [];
	for (const item of value) {
		if (typeof item === "string") {
			const t = item.trim();
			if (t.length > 0) out.push(t);
			continue;
		}
		if (item && typeof item === "object") {
			const o = item;
			const bucketId = typeof o.bucketId === "string" ? o.bucketId : typeof o.bucket_id === "string" ? o.bucket_id : void 0;
			const fileId = typeof o.fileId === "string" ? o.fileId : typeof o.file_id === "string" ? o.file_id : typeof o.$id === "string" ? o.$id : void 0;
			if (bucketId && fileId) out.push(`${bucketId}:${fileId}`);
		}
	}
	return out;
}
function MessageComposeCardFooter({ messageStatus, hasContentChanges, updatePending, onSchedule, onUpdateDraft, onSend, onCancelSchedule, onReschedule }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "px-6 py-4 border-t border-border bg-muted/30",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex w-full flex-wrap items-center justify-end gap-2",
			children: messageStatus === "draft" ? /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: onSchedule,
					children: t("Schedule")
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasContentChanges || updatePending,
					onClick: onUpdateDraft,
					children: t("Update draft")
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					size: "sm",
					className: "h-9 shrink-0 text-[13px]",
					onClick: onSend,
					children: t("Send message")
				})
			] }) : messageStatus === "scheduled" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-9 text-[13px]",
				onClick: onCancelSchedule,
				children: t("Cancel scheduling")
			}), /* @__PURE__ */ jsxs(Button, {
				variant: "secondary",
				size: "sm",
				className: "h-9 text-[13px]",
				onClick: onReschedule,
				children: [/* @__PURE__ */ jsx(Calendar, { className: "me-1.5 h-4 w-4" }), t("Reschedule")]
			})] }) : null
		})
	});
}
function View({ initialMessage } = {}) {
	const t = useT();
	const { projectId, messageId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const { data: message, isLoading: messageLoading, refetch: refetchMessage } = useMessage(projectId, messageId, initialMessage);
	const { buckets } = useProjectBuckets(projectId ?? null, 0, 100, "");
	useEffect(() => {
		if (!message || message.status !== "processing") return;
		const interval = setInterval(() => {
			refetchMessage();
		}, 2e3);
		return () => clearInterval(interval);
	}, [message, refetchMessage]);
	const { data: targetsData } = useMessageTargets(projectId, messageId, 0, 100);
	const targets = useMemo(() => targetsData?.targets || [], [targetsData?.targets]);
	const topicsById = useMemo(() => {
		if (!projectId || !message?.topics?.length) return {};
		const map = {};
		for (const tid of message.topics) {
			const t$1 = queryClient.getQueryData([
				"topic",
				"project",
				projectId,
				tid
			]);
			if (t$1) map[tid] = t$1;
		}
		return map;
	}, [
		projectId,
		message,
		queryClient
	]);
	const usersById = useMemo(() => {
		if (!projectId || !message) return {};
		const ids = /* @__PURE__ */ new Set();
		for (const t$1 of targets) if (t$1.userId) ids.add(t$1.userId);
		const messageWithUsers = message;
		if (messageWithUsers.users) for (const uid of messageWithUsers.users) ids.add(uid);
		const map = {};
		ids.forEach((uid) => {
			const data = queryClient.getQueryData([
				"user",
				"project",
				projectId,
				uid
			]);
			map[uid] = data !== void 0 ? data : null;
		});
		return map;
	}, [
		projectId,
		message,
		targets,
		queryClient
	]);
	const targetsById = useMemo(() => {
		const map = {};
		targets.forEach((target) => {
			map[target.$id] = target;
		});
		return map;
	}, [targets]);
	const isDraft = message?.status === "draft";
	const [emailSubject, setEmailSubject] = useState("");
	const [emailContent, setEmailContent] = useState("");
	const [emailHtml, setEmailHtml] = useState(false);
	const [smsContent, setSmsContent] = useState("");
	const [pushTitle, setPushTitle] = useState("");
	const [pushBody, setPushBody] = useState("");
	const [pushImage, setPushImage] = useState(null);
	const [pushCustomData, setPushCustomData] = useState([{
		key: "",
		value: ""
	}]);
	const [selectedTopicIds, setSelectedTopicIds] = useState(/* @__PURE__ */ new Set());
	const [selectedTargetIds, setSelectedTargetIds] = useState(/* @__PURE__ */ new Set());
	const [selectedUserIds, setSelectedUserIds] = useState(/* @__PURE__ */ new Set());
	const [ccTargetIds, setCcTargetIds] = useState(/* @__PURE__ */ new Set());
	const [bccTargetIds, setBccTargetIds] = useState(/* @__PURE__ */ new Set());
	const [attachmentCompoundIds, setAttachmentCompoundIds] = useState([]);
	const [draftTargetDetailsById, setDraftTargetDetailsById] = useState({});
	const displayTargetById = useMemo(() => ({
		...targetsById,
		...draftTargetDetailsById
	}), [targetsById, draftTargetDetailsById]);
	const [pushBucketId, setPushBucketId] = useState("");
	const [pushAction, setPushAction] = useState("");
	const [pushIcon, setPushIcon] = useState("");
	const [pushSound, setPushSound] = useState("");
	const [pushColor, setPushColor] = useState("");
	const [pushTag, setPushTag] = useState("");
	const [pushBadge, setPushBadge] = useState("");
	const [pushPriority, setPushPriority] = useState(MessagePriority.Normal);
	const [pushContentAvailable, setPushContentAvailable] = useState(false);
	const [pushCritical, setPushCritical] = useState(false);
	const [sendDialogOpen, setSendDialogOpen] = useState(false);
	const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
	const [cancelScheduleOpen, setCancelScheduleOpen] = useState(false);
	const [recipientUsersModalOpen, setRecipientUsersModalOpen] = useState(false);
	const [attachmentExplorerOpen, setAttachmentExplorerOpen] = useState(false);
	const [targetPickerFor, setTargetPickerFor] = useState(null);
	useEffect(() => {
		if (!message) return;
		setSelectedUserIds(new Set(message.users || []));
		setSelectedTopicIds(new Set(message.topics || []));
		setSelectedTargetIds(new Set(message.targets || []));
	}, [useMemo(() => {
		if (!message) return "";
		return [
			message.$id,
			[...message.targets ?? []].sort().join("|"),
			[...message.topics ?? []].sort().join("|"),
			[...message.users ?? []].sort().join("|")
		].join("\0");
	}, [message])]);
	const messagePayloadSyncKey = useMemo(() => message?.data != null ? JSON.stringify(message.data) : "", [message?.data]);
	useEffect(() => {
		if (!message) return;
		if (message.providerType === "email") {
			setEmailSubject(message.data?.subject || "");
			setEmailContent(message.data?.content || "");
			setEmailHtml(message.data?.html || false);
			const raw = message.data;
			setCcTargetIds(new Set(parseIdArray(raw?.cc)));
			setBccTargetIds(new Set(parseIdArray(raw?.bcc)));
			setAttachmentCompoundIds(parseMessagingEmailAttachments(raw?.attachments));
		} else if (message.providerType === "sms") setSmsContent(message.data?.content || "");
		else if (message.providerType === "push") {
			setPushTitle(message.data?.title || "");
			setPushBody(message.data?.body || "");
			const d = message.data;
			setPushAction(typeof d?.action === "string" ? d.action : "");
			setPushIcon(typeof d?.icon === "string" ? d.icon : "");
			setPushSound(typeof d?.sound === "string" ? d.sound : "");
			setPushColor(typeof d?.color === "string" ? d.color : "");
			setPushTag(typeof d?.tag === "string" ? d.tag : "");
			setPushBadge(typeof d?.badge === "number" ? String(d.badge) : typeof d?.badge === "string" ? d.badge : "");
			setPushPriority(d?.priority === MessagePriority.High ? MessagePriority.High : MessagePriority.Normal);
			setPushContentAvailable(Boolean(d?.contentAvailable));
			setPushCritical(Boolean(d?.critical));
			if (message.data?.data && typeof message.data.data === "object") {
				const dataPairs = Object.entries(message.data.data).map(([key, value]) => ({
					key,
					value: String(value)
				}));
				setPushCustomData(dataPairs.length > 0 ? dataPairs : [{
					key: "",
					value: ""
				}]);
			} else setPushCustomData([{
				key: "",
				value: ""
			}]);
		}
		setPushImage(null);
	}, [
		message?.$id,
		message?.providerType,
		messagePayloadSyncKey
	]);
	useEffect(() => {
		setDraftTargetDetailsById({});
	}, [messageId]);
	useEffect(() => {
		setDraftTargetDetailsById((prev) => {
			const next = { ...prev };
			for (const t$1 of targets) next[t$1.$id] = t$1;
			return next;
		});
	}, [targets]);
	const [topicsModalOpen, setTopicsModalOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const updateEmailMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !messageId) throw new Error("Project ID and Message ID are required");
			return await sdk.forProject(projectId).messaging.updateEmail({
				messageId,
				subject: emailSubject,
				content: emailContent,
				html: emailHtml,
				topics: Array.from(selectedTopicIds),
				targets: Array.from(selectedTargetIds),
				users: Array.from(selectedUserIds),
				cc: Array.from(ccTargetIds),
				bcc: Array.from(bccTargetIds),
				attachments: attachmentCompoundIds.filter((s) => s.includes(":"))
			});
		},
		onSuccess: async (updatedMessage) => {
			queryClient.setQueryData([
				"message",
				"project",
				projectId,
				messageId
			], updatedMessage);
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"message-targets",
				"project",
				projectId,
				messageId
			] });
			toast.success(t("Draft updated"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update draft"));
		}
	});
	const updateSMSMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !messageId) throw new Error("Project ID and Message ID are required");
			return await sdk.forProject(projectId).messaging.updateSMS({
				messageId,
				content: smsContent,
				topics: Array.from(selectedTopicIds),
				targets: Array.from(selectedTargetIds),
				users: Array.from(selectedUserIds)
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"message",
				"project",
				projectId,
				messageId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"message-targets",
				"project",
				projectId,
				messageId
			] });
			toast.success(t("Message updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update message"));
		}
	});
	const updatePushMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !messageId) throw new Error("Project ID and Message ID are required");
			const projectSdk = sdk.forProject(projectId);
			const customData = {};
			pushCustomData.forEach(({ key, value }) => {
				if (key.trim()) customData[key] = value;
			});
			let image = typeof message?.data?.image === "string" ? message.data.image : void 0;
			if (pushImage) {
				if (!pushBucketId) throw new Error("Select a storage bucket before uploading an image");
				image = `${pushBucketId}:${(await projectSdk.storage.createFile({
					bucketId: pushBucketId,
					fileId: ID.unique(),
					file: pushImage
				})).$id}`;
			}
			const badgeNum = pushBadge.trim() === "" ? void 0 : parseInt(pushBadge, 10);
			return await projectSdk.messaging.updatePush({
				messageId,
				title: pushTitle,
				body: pushBody,
				data: Object.keys(customData).length > 0 ? customData : void 0,
				image,
				topics: Array.from(selectedTopicIds),
				targets: Array.from(selectedTargetIds),
				users: Array.from(selectedUserIds),
				action: pushAction.trim() || void 0,
				icon: pushIcon.trim() || void 0,
				sound: pushSound.trim() || void 0,
				color: pushColor.trim() || void 0,
				tag: pushTag.trim() || void 0,
				badge: Number.isFinite(badgeNum) ? badgeNum : void 0,
				priority: pushPriority,
				contentAvailable: pushContentAvailable || void 0,
				critical: pushCritical || void 0
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"message",
				"project",
				projectId,
				messageId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"message-targets",
				"project",
				projectId,
				messageId
			] });
			setPushImage(null);
			toast.success(t("Message updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update message"));
		}
	});
	const deleteMessageMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !messageId) throw new Error("Project ID and Message ID are required");
			await sdk.forProject(projectId).messaging.delete({ messageId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"messages",
				"project",
				projectId
			] });
			const statusMessage = message?.status === "draft" ? t("The draft message has been deleted") : message?.status === "scheduled" ? t("The scheduled message has been deleted, and its delivery was cancelled") : t("The message has been deleted");
			toast.success(statusMessage);
			navigate({
				to: "/projects/$projectId/messaging/",
				params: { projectId }
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete message"));
		}
	});
	const hasTopicsChanged = useMemo(() => {
		if (!message) return false;
		const currentTopics = new Set(message.topics || []);
		return selectedTopicIds.size !== currentTopics.size || Array.from(selectedTopicIds).some((id) => !currentTopics.has(id)) || Array.from(currentTopics).some((id) => !selectedTopicIds.has(id));
	}, [message, selectedTopicIds]);
	const hasTargetsChanged = useMemo(() => {
		if (!message) return false;
		const currentTargets = new Set(message.targets || []);
		return selectedTargetIds.size !== currentTargets.size || Array.from(selectedTargetIds).some((id) => !currentTargets.has(id)) || Array.from(currentTargets).some((id) => !selectedTargetIds.has(id));
	}, [message, selectedTargetIds]);
	const hasUsersChanged = useMemo(() => {
		if (!message) return false;
		const cur = new Set(message.users || []);
		return selectedUserIds.size !== cur.size || Array.from(selectedUserIds).some((id) => !cur.has(id)) || Array.from(cur).some((id) => !selectedUserIds.has(id));
	}, [message, selectedUserIds]);
	const parseDataStringIds = (key) => {
		if (!message || message.providerType !== "email") return /* @__PURE__ */ new Set();
		const raw = message.data;
		return new Set(parseIdArray(raw?.[key]));
	};
	const hasCcChanged = useMemo(() => {
		if (!message || message.providerType !== "email") return false;
		const cur = parseDataStringIds("cc");
		return ccTargetIds.size !== cur.size || Array.from(ccTargetIds).some((id) => !cur.has(id)) || Array.from(cur).some((id) => !ccTargetIds.has(id));
	}, [message, ccTargetIds]);
	const hasBccChanged = useMemo(() => {
		if (!message || message.providerType !== "email") return false;
		const cur = parseDataStringIds("bcc");
		return bccTargetIds.size !== cur.size || Array.from(bccTargetIds).some((id) => !cur.has(id)) || Array.from(cur).some((id) => !bccTargetIds.has(id));
	}, [message, bccTargetIds]);
	const hasAttachmentsChanged = useMemo(() => {
		if (!message || message.providerType !== "email") return false;
		const cur = parseMessagingEmailAttachments(message.data?.attachments);
		if (cur.length !== attachmentCompoundIds.length) return true;
		return cur.some((id, i) => id !== attachmentCompoundIds[i]);
	}, [message, attachmentCompoundIds]);
	const hasEmailChanges = useMemo(() => {
		if (!message || message.providerType !== "email") return false;
		return emailSubject !== (message.data?.subject || "") || emailContent !== (message.data?.content || "") || emailHtml !== (message.data?.html || false) || hasUsersChanged || hasCcChanged || hasBccChanged || hasAttachmentsChanged;
	}, [
		message,
		emailSubject,
		emailContent,
		emailHtml,
		hasUsersChanged,
		hasCcChanged,
		hasBccChanged,
		hasAttachmentsChanged
	]);
	const hasSMSChanges = useMemo(() => {
		if (!message || message.providerType !== "sms") return false;
		return smsContent !== (message.data?.content || "") || hasUsersChanged;
	}, [
		message,
		smsContent,
		hasUsersChanged
	]);
	const hasPushChanges = useMemo(() => {
		if (!message || message.providerType !== "push") return false;
		const titleChanged = pushTitle !== (message.data?.title || "");
		const bodyChanged = pushBody !== (message.data?.body || "");
		const imageChanged = pushImage !== null;
		const currentData = message.data?.data || {};
		const newData = {};
		pushCustomData.forEach(({ key, value }) => {
			if (key.trim()) newData[key] = value;
		});
		const dataChanged = JSON.stringify(currentData) !== JSON.stringify(newData);
		const d = message.data;
		const advChanged = pushAction !== (typeof d?.action === "string" ? d.action : "") || pushIcon !== (typeof d?.icon === "string" ? d.icon : "") || pushSound !== (typeof d?.sound === "string" ? d.sound : "") || pushColor !== (typeof d?.color === "string" ? d.color : "") || pushTag !== (typeof d?.tag === "string" ? d.tag : "") || pushBadge !== (typeof d?.badge === "number" ? String(d.badge) : typeof d?.badge === "string" ? d.badge : "") || pushPriority !== (d?.priority === MessagePriority.High ? MessagePriority.High : MessagePriority.Normal) || pushContentAvailable !== Boolean(d?.contentAvailable) || pushCritical !== Boolean(d?.critical);
		return titleChanged || bodyChanged || imageChanged || dataChanged || advChanged || hasUsersChanged;
	}, [
		message,
		pushTitle,
		pushBody,
		pushImage,
		pushCustomData,
		pushAction,
		pushIcon,
		pushSound,
		pushColor,
		pushTag,
		pushBadge,
		pushPriority,
		pushContentAvailable,
		pushCritical,
		hasUsersChanged
	]);
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/messaging/",
			params: { projectId }
		});
	};
	const topicsForEstimate = useMemo(() => {
		if (!message) return [];
		return message.topics.map((id) => topicsById[id]).filter((t$1) => Boolean(t$1));
	}, [message, topicsById]);
	const messagingModalInitialSelection = useMemo(() => {
		if (!targetPickerFor) return {};
		const ids = targetPickerFor === "cc" ? ccTargetIds : targetPickerFor === "bcc" ? bccTargetIds : selectedTargetIds;
		const map = {};
		for (const id of ids) map[id] = displayTargetById[id];
		return map;
	}, [
		targetPickerFor,
		ccTargetIds,
		bccTargetIds,
		selectedTargetIds,
		displayTargetById
	]);
	const getMessageDescription = () => {
		if (message?.providerType === "email" && message.data?.subject) return message.data.subject;
		if (message?.providerType === "sms" && message.data?.content) return message.data.content.substring(0, 50) + (message.data.content.length > 50 ? "..." : "");
		if (message?.providerType === "push" && message.data?.title) return message.data.title;
		return null;
	};
	const isMessageSettingsPath = useMemo(() => location.pathname.replace(/\/$/, "").endsWith("/settings"), [location.pathname]);
	const hasComposeSettingsTabs = message?.providerType === "email" || message?.providerType === "sms" || message?.providerType === "push";
	const messageDetailTabs = useMemo(() => {
		if (!hasComposeSettingsTabs || !projectId || !messageId) return;
		return [{
			id: "compose",
			label: t("Compose"),
			to: "/projects/$projectId/messaging/$messageId",
			params: {
				projectId,
				messageId
			}
		}, {
			id: "settings",
			label: t("Settings"),
			to: "/projects/$projectId/messaging/$messageId/settings",
			params: {
				projectId,
				messageId
			}
		}];
	}, [
		hasComposeSettingsTabs,
		projectId,
		messageId,
		t
	]);
	const messageDetailActiveTab = isMessageSettingsPath ? "settings" : "compose";
	const showMessageMain = !!message && (!hasComposeSettingsTabs || !isMessageSettingsPath);
	const showMessageSettings = !!message && hasComposeSettingsTabs && isMessageSettingsPath;
	const messageServiceHeaderTitle = useMemo(() => {
		if (message?.providerType === "email") {
			const full = emailSubject.trim();
			if (!full) return {
				label: t("Message"),
				nativeTitle: void 0
			};
			const label = trimForPageTitle(full);
			return {
				label,
				nativeTitle: label !== full ? full : void 0
			};
		}
		if (message?.providerType === "sms") {
			const full = smsContent.trim();
			if (!full) return {
				label: t("SMS"),
				nativeTitle: void 0
			};
			const label = trimForPageTitle(full);
			return {
				label,
				nativeTitle: label !== full ? full : void 0
			};
		}
		if (message?.providerType === "push") {
			const full = pushTitle.trim();
			if (!full) return {
				label: t("Push"),
				nativeTitle: void 0
			};
			const label = trimForPageTitle(full);
			return {
				label,
				nativeTitle: label !== full ? full : void 0
			};
		}
		return {
			label: t("Message"),
			nativeTitle: void 0
		};
	}, [
		message?.providerType,
		emailSubject,
		smsContent,
		pushTitle,
		t
	]);
	if (!message) {
		if (messageLoading) return null;
		return /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-6 py-16",
			children: /* @__PURE__ */ jsx(EmptyState, {
				icon: AlertCircle,
				title: t("Message not found"),
				description: t("This message may have been deleted or the link is incorrect."),
				variant: "card",
				iconSize: "md"
			})
		});
	}
	const getMessageStatusBadge = () => {
		if (message.status === "sent") return /* @__PURE__ */ jsx(Badge, {
			variant: "success",
			className: "text-[10px] shrink-0",
			children: t("Sent")
		});
		if (message.status === "processing") return /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx(Badge, {
				variant: "processing",
				className: "text-[10px] shrink-0",
				children: t("Processing")
			})]
		});
		if (message.status === "failed") return /* @__PURE__ */ jsx(Badge, {
			variant: "error",
			className: "text-[10px] shrink-0",
			children: t("Failed")
		});
		if (message.status === "draft") return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0",
			children: t("Draft")
		});
		if (message.status === "scheduled") return /* @__PURE__ */ jsx(Badge, {
			variant: "warning",
			className: "text-[10px] shrink-0",
			children: t("Scheduled")
		});
		return /* @__PURE__ */ jsx(Badge, {
			variant: "info",
			className: "text-[10px] shrink-0 capitalize",
			children: message.status
		});
	};
	const getMessageTypeIcon = () => {
		if (message.providerType === "email") return Mail;
		if (message.providerType === "sms") return Phone;
		if (message.providerType === "push") return Bell;
		return Mail;
	};
	const TypeIcon = getMessageTypeIcon();
	const handleUpdateMessage = () => {
		if (message.providerType === "email") updateEmailMutation.mutate();
		else if (message.providerType === "sms") updateSMSMutation.mutate();
		else if (message.providerType === "push") updatePushMutation.mutate();
	};
	const handleAddCustomData = () => {
		if (pushCustomData[pushCustomData.length - 1]?.key) setPushCustomData([...pushCustomData, {
			key: "",
			value: ""
		}]);
	};
	const handleRemoveCustomData = (index) => {
		if (pushCustomData.length > 1) setPushCustomData(pushCustomData.filter((_, i) => i !== index));
		else setPushCustomData([{
			key: "",
			value: ""
		}]);
	};
	const handleCustomDataKeyChange = (index, key) => {
		const newData = [...pushCustomData];
		newData[index].key = key;
		setPushCustomData(newData);
	};
	const handleCustomDataValueChange = (index, value) => {
		const newData = [...pushCustomData];
		newData[index].value = value;
		setPushCustomData(newData);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 items-center gap-2",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 w-7 p-0",
						onClick: handleBack,
						children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("span", {
						className: "min-w-0 truncate",
						title: messageServiceHeaderTitle.nativeTitle,
						children: messageServiceHeaderTitle.label
					}),
					/* @__PURE__ */ jsx(CopyableId, {
						id: message.$id,
						size: "xs",
						className: "shrink-0"
					})
				]
			}),
			tabs: messageDetailTabs,
			activeTab: messageDetailTabs ? messageDetailActiveTab : void 0,
			titleRightContent: !hasComposeSettingsTabs ? getMessageStatusBadge() : void 0,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6 pt-4 sm:pt-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [
						message.providerType === "email" && showMessageMain && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Content")
										}), getMessageStatusBadge()]
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 @container",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-6 @[600px]:flex-row",
										children: [/* @__PURE__ */ jsx("div", {
											className: "@[600px]:w-64 shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "text-[13px] text-muted-foreground",
												children: t("Write the subject and body, enable HTML if your content uses tags, add optional CC and BCC targets, and attach files from Storage.")
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "flex-1 min-w-0",
											children: /* @__PURE__ */ jsxs("div", {
												className: "w-full min-w-0 space-y-4",
												children: [
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "email-subject",
														className: "text-[13px] font-medium text-foreground",
														children: t("Subject")
													}), /* @__PURE__ */ jsx(Input, {
														id: "email-subject",
														value: emailSubject,
														onChange: (e) => setEmailSubject(e.target.value),
														disabled: !isDraft,
														placeholder: t("Email subject"),
														className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "email-content",
														className: "text-[13px] font-medium text-foreground",
														children: t("Body")
													}), /* @__PURE__ */ jsx(Textarea, {
														id: "email-content",
														value: emailContent,
														onChange: (e) => setEmailContent(e.target.value),
														disabled: !isDraft,
														placeholder: t("Email content"),
														className: "mt-1.5 min-h-32 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													})] }),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center justify-between rounded-md border border-border bg-card p-4",
														children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
															htmlFor: "email-html",
															className: "text-[13px] font-medium text-foreground",
															children: t("HTML mode")
														}), /* @__PURE__ */ jsx("p", {
															className: "text-[12px] text-muted-foreground mt-0.5",
															children: t("Enable the HTML mode if your message contains HTML tags.")
														})] }), /* @__PURE__ */ jsx(Switch, {
															id: "email-html",
															checked: emailHtml,
															onCheckedChange: setEmailHtml,
															disabled: !isDraft
														})]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "space-y-3 border-t border-border pt-4 mt-4",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between gap-2",
															children: [/* @__PURE__ */ jsx(Label, {
																className: "text-[13px] font-medium text-foreground",
																children: t("CC targets")
															}), isDraft && /* @__PURE__ */ jsxs(Button, {
																type: "button",
																variant: "ghost",
																size: "sm",
																className: "h-8 text-[12px]",
																onClick: () => setTargetPickerFor("cc"),
																children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
															})]
														}), ccTargetIds.size > 0 ? /* @__PURE__ */ jsx("ul", {
															className: "space-y-1 text-[13px] text-muted-foreground",
															children: [...ccTargetIds].map((id) => /* @__PURE__ */ jsxs("li", {
																className: "flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ jsx("span", {
																	className: "font-mono text-[12px] break-all",
																	children: displayTargetById[id]?.identifier || id
																}), isDraft && /* @__PURE__ */ jsx(Button, {
																	type: "button",
																	variant: "ghost",
																	size: "sm",
																	className: "h-7 w-7 p-0",
																	onClick: () => {
																		const n = new Set(ccTargetIds);
																		n.delete(id);
																		setCcTargetIds(n);
																	},
																	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																})]
															}, id))
														}) : /* @__PURE__ */ jsx("p", {
															className: "text-[12px] text-muted-foreground",
															children: t("No CC targets")
														})]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "space-y-3 border-t border-border pt-4 mt-4",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between gap-2",
															children: [/* @__PURE__ */ jsx(Label, {
																className: "text-[13px] font-medium text-foreground",
																children: t("BCC targets")
															}), isDraft && /* @__PURE__ */ jsxs(Button, {
																type: "button",
																variant: "ghost",
																size: "sm",
																className: "h-8 text-[12px]",
																onClick: () => setTargetPickerFor("bcc"),
																children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
															})]
														}), bccTargetIds.size > 0 ? /* @__PURE__ */ jsx("ul", {
															className: "space-y-1 text-[13px] text-muted-foreground",
															children: [...bccTargetIds].map((id) => /* @__PURE__ */ jsxs("li", {
																className: "flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ jsx("span", {
																	className: "font-mono text-[12px] break-all",
																	children: displayTargetById[id]?.identifier || id
																}), isDraft && /* @__PURE__ */ jsx(Button, {
																	type: "button",
																	variant: "ghost",
																	size: "sm",
																	className: "h-7 w-7 p-0",
																	onClick: () => {
																		const n = new Set(bccTargetIds);
																		n.delete(id);
																		setBccTargetIds(n);
																	},
																	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																})]
															}, id))
														}) : /* @__PURE__ */ jsx("p", {
															className: "text-[12px] text-muted-foreground",
															children: t("No BCC targets")
														})]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "space-y-3 border-t border-border pt-4 mt-4",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between gap-2",
															children: [/* @__PURE__ */ jsx(Label, {
																className: "text-[13px] font-medium text-foreground",
																children: t("Attachments")
															}), isDraft && /* @__PURE__ */ jsxs(Button, {
																type: "button",
																variant: "ghost",
																size: "sm",
																className: "h-8 text-[12px]",
																onClick: () => setAttachmentExplorerOpen(true),
																children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
															})]
														}), attachmentCompoundIds.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
															icon: Paperclip,
															title: t("No attachments"),
															description: t("Add files from your project's Storage buckets."),
															variant: "card",
															iconSize: "md"
														}) : projectId ? /* @__PURE__ */ jsx("ul", {
															className: "space-y-2",
															children: attachmentCompoundIds.map((val, idx) => /* @__PURE__ */ jsx(EmailAttachmentRow, {
																projectId,
																compoundId: val,
																buckets,
																isDraft,
																onRemove: () => setAttachmentCompoundIds((rows) => rows.filter((_, i) => i !== idx))
															}, `${val}-${idx}`))
														}) : /* @__PURE__ */ jsx("ul", {
															className: "space-y-2",
															children: attachmentCompoundIds.map((val, idx) => /* @__PURE__ */ jsx("li", {
																className: "flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2",
																children: /* @__PURE__ */ jsx("span", {
																	className: "min-w-0 flex-1 font-mono text-[12px] text-foreground break-all",
																	children: val
																})
															}, `${val}-${idx}`))
														})]
													})
												]
											})
										})]
									})
								}),
								/* @__PURE__ */ jsx(MessageComposeCardFooter, {
									messageStatus: message.status,
									hasContentChanges: hasEmailChanges,
									updatePending: updateEmailMutation.isPending,
									onSchedule: () => setScheduleDialogOpen(true),
									onUpdateDraft: handleUpdateMessage,
									onSend: () => setSendDialogOpen(true),
									onCancelSchedule: () => setCancelScheduleOpen(true),
									onReschedule: () => setScheduleDialogOpen(true)
								})
							]
						}),
						message.providerType === "sms" && showMessageMain && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Content")
										}), getMessageStatusBadge()]
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 @container",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-6 @[600px]:flex-row",
										children: [/* @__PURE__ */ jsx("div", {
											className: "@[600px]:w-64 shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "text-[13px] text-muted-foreground",
												children: t("Enter the SMS body for this message. Delivery uses topics, users, and targets you add on this page.")
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "flex-1 min-w-0",
											children: /* @__PURE__ */ jsx("div", {
												className: "w-full min-w-0 space-y-4",
												children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "sms-content",
													className: "text-[13px] font-medium text-foreground",
													children: t("Body")
												}), /* @__PURE__ */ jsx(Textarea, {
													id: "sms-content",
													value: smsContent,
													onChange: (e) => setSmsContent(e.target.value),
													disabled: !isDraft,
													placeholder: t("SMS content"),
													className: "mt-1.5 min-h-32 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
												})] })
											})
										})]
									})
								}),
								/* @__PURE__ */ jsx(MessageComposeCardFooter, {
									messageStatus: message.status,
									hasContentChanges: hasSMSChanges,
									updatePending: updateSMSMutation.isPending,
									onSchedule: () => setScheduleDialogOpen(true),
									onUpdateDraft: handleUpdateMessage,
									onSend: () => setSendDialogOpen(true),
									onCancelSchedule: () => setCancelScheduleOpen(true),
									onReschedule: () => setScheduleDialogOpen(true)
								})
							]
						}),
						message.providerType === "push" && showMessageMain && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Content")
										}), getMessageStatusBadge()]
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 @container",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-6 @[600px]:flex-row",
										children: [/* @__PURE__ */ jsx("div", {
											className: "@[600px]:w-64 shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "text-[13px] text-muted-foreground",
												children: t("Build title, body, optional image and custom data. Advanced fields control action, appearance, and iOS-specific options.")
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "flex-1 min-w-0",
											children: /* @__PURE__ */ jsxs("div", {
												className: "w-full min-w-0 space-y-4",
												children: [
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "push-title",
														className: "text-[13px] font-medium text-foreground",
														children: t("Title")
													}), /* @__PURE__ */ jsx(Input, {
														id: "push-title",
														value: pushTitle,
														onChange: (e) => setPushTitle(e.target.value),
														disabled: !isDraft,
														placeholder: t("Notification title"),
														className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "push-body",
														className: "text-[13px] font-medium text-foreground",
														children: "Body"
													}), /* @__PURE__ */ jsx(Textarea, {
														id: "push-body",
														value: pushBody,
														onChange: (e) => setPushBody(e.target.value),
														disabled: !isDraft,
														placeholder: t("Notification body"),
														className: "mt-1.5 min-h-32 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
														className: "text-[13px] font-medium text-foreground",
														children: t("Media (Optional)")
													}), /* @__PURE__ */ jsxs("div", {
														className: "mt-1.5",
														children: [
															/* @__PURE__ */ jsx("input", {
																type: "file",
																accept: "image/*",
																disabled: !isDraft,
																onChange: (e) => {
																	const file = e.target.files?.[0];
																	if (file) setPushImage(file);
																},
																className: "text-[13px]"
															}),
															pushImage && /* @__PURE__ */ jsxs("p", {
																className: "mt-1.5 text-[12px] text-muted-foreground",
																children: [
																	t("Selected:"),
																	" ",
																	pushImage.name
																]
															}),
															!pushImage && message.data?.image && /* @__PURE__ */ jsxs("p", {
																className: "mt-1.5 text-[12px] text-muted-foreground",
																children: [
																	t("Current image:"),
																	" ",
																	message.data.image
																]
															})
														]
													})] }),
													isDraft && buckets.length > 0 && /* @__PURE__ */ jsxs("div", {
														className: "space-y-2",
														children: [
															/* @__PURE__ */ jsx(Label, {
																htmlFor: "push-bucket",
																className: "text-[13px] font-medium text-foreground",
																children: t("Upload bucket")
															}),
															/* @__PURE__ */ jsxs(Select, {
																value: pushBucketId || void 0,
																onValueChange: setPushBucketId,
																children: [/* @__PURE__ */ jsx(SelectTrigger, {
																	id: "push-bucket",
																	className: "h-9",
																	children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select bucket for image upload") })
																}), /* @__PURE__ */ jsx(SelectContent, { children: buckets.map((b) => /* @__PURE__ */ jsx(SelectItem, {
																	value: b.$id,
																	children: b.name
																}, b.$id)) })]
															}),
															/* @__PURE__ */ jsx("p", {
																className: "text-[12px] text-muted-foreground",
																children: t("Uploading replaces the push image with a Storage file reference (bucket:file).")
															})
														]
													}),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center justify-between mb-2",
														children: [/* @__PURE__ */ jsx(Label, {
															className: "text-[13px] font-medium text-foreground",
															children: t("Custom Data")
														}), /* @__PURE__ */ jsxs(Button, {
															type: "button",
															variant: "ghost",
															size: "sm",
															className: "h-7 text-[12px]",
															onClick: handleAddCustomData,
															disabled: !isDraft || !pushCustomData[pushCustomData.length - 1]?.key,
															children: [/* @__PURE__ */ jsx(Plus, { className: "me-1 h-3.5 w-3.5" }), t("Add")]
														})]
													}), /* @__PURE__ */ jsx("div", {
														className: "space-y-2",
														children: pushCustomData.map((item, index) => /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-2",
															children: [
																/* @__PURE__ */ jsx(Input, {
																	placeholder: t("Enter key"),
																	value: item.key,
																	onChange: (e) => handleCustomDataKeyChange(index, e.target.value),
																	disabled: !isDraft,
																	className: "h-9 text-[13px]"
																}),
																/* @__PURE__ */ jsx(Input, {
																	placeholder: t("Enter value"),
																	value: item.value,
																	onChange: (e) => handleCustomDataValueChange(index, e.target.value),
																	disabled: !isDraft,
																	className: "h-9 text-[13px]"
																}),
																/* @__PURE__ */ jsx(Button, {
																	type: "button",
																	variant: "ghost",
																	size: "sm",
																	className: "h-9 w-9 p-0",
																	onClick: () => handleRemoveCustomData(index),
																	disabled: !isDraft || pushCustomData.length === 1 && !item.key && !item.value,
																	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																})
															]
														}, index))
													})] }),
													/* @__PURE__ */ jsxs("div", {
														className: "border-t border-border pt-4 space-y-3",
														children: [
															/* @__PURE__ */ jsx("h4", {
																className: "text-[13px] font-semibold text-foreground",
																children: t("Advanced")
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "grid gap-3 sm:grid-cols-2",
																children: [
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-action",
																		className: "text-[12px]",
																		children: t("Action")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-action",
																		value: pushAction,
																		onChange: (e) => setPushAction(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] }),
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-icon",
																		className: "text-[12px]",
																		children: t("Icon")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-icon",
																		value: pushIcon,
																		onChange: (e) => setPushIcon(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] }),
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-sound",
																		className: "text-[12px]",
																		children: t("Sound")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-sound",
																		value: pushSound,
																		onChange: (e) => setPushSound(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] }),
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-color",
																		className: "text-[12px]",
																		children: t("Color")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-color",
																		value: pushColor,
																		onChange: (e) => setPushColor(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] }),
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-tag",
																		className: "text-[12px]",
																		children: t("Tag")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-tag",
																		value: pushTag,
																		onChange: (e) => setPushTag(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] }),
																	/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-badge",
																		className: "text-[12px]",
																		children: t("Badge (iOS)")
																	}), /* @__PURE__ */ jsx(Input, {
																		id: "push-badge",
																		value: pushBadge,
																		onChange: (e) => setPushBadge(e.target.value),
																		disabled: !isDraft,
																		className: "mt-1 h-9 text-[13px]"
																	})] })
																]
															}),
															/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																className: "text-[12px]",
																children: t("Priority")
															}), /* @__PURE__ */ jsxs(Select, {
																value: pushPriority,
																onValueChange: (v) => setPushPriority(v),
																disabled: !isDraft,
																children: [/* @__PURE__ */ jsx(SelectTrigger, {
																	className: "mt-1 h-9",
																	children: /* @__PURE__ */ jsx(SelectValue, {})
																}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
																	value: MessagePriority.Normal,
																	children: t("Normal")
																}), /* @__PURE__ */ jsx(SelectItem, {
																	value: MessagePriority.High,
																	children: t("High")
																})] })]
															})] }),
															/* @__PURE__ */ jsxs("div", {
																className: "flex flex-col gap-3 rounded-md border border-border bg-card p-4",
																children: [/* @__PURE__ */ jsxs("div", {
																	className: "flex items-center justify-between",
																	children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-bg",
																		className: "text-[13px] font-medium",
																		children: t("Content available (iOS)")
																	}), /* @__PURE__ */ jsx("p", {
																		className: "text-[12px] text-muted-foreground mt-0.5",
																		children: t("Deliver in the background when possible.")
																	})] }), /* @__PURE__ */ jsx(Switch, {
																		id: "push-bg",
																		checked: pushContentAvailable,
																		onCheckedChange: setPushContentAvailable,
																		disabled: !isDraft
																	})]
																}), /* @__PURE__ */ jsxs("div", {
																	className: "flex items-center justify-between",
																	children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
																		htmlFor: "push-critical",
																		className: "text-[13px] font-medium",
																		children: t("Critical (iOS)")
																	}), /* @__PURE__ */ jsx("p", {
																		className: "text-[12px] text-muted-foreground mt-0.5",
																		children: t("Requires critical notification entitlement.")
																	})] }), /* @__PURE__ */ jsx(Switch, {
																		id: "push-critical",
																		checked: pushCritical,
																		onCheckedChange: setPushCritical,
																		disabled: !isDraft
																	})]
																})]
															})
														]
													})
												]
											})
										})]
									})
								}),
								/* @__PURE__ */ jsx(MessageComposeCardFooter, {
									messageStatus: message.status,
									hasContentChanges: hasPushChanges,
									updatePending: updatePushMutation.isPending,
									onSchedule: () => setScheduleDialogOpen(true),
									onUpdateDraft: handleUpdateMessage,
									onSend: () => setSendDialogOpen(true),
									onCancelSchedule: () => setCancelScheduleOpen(true),
									onReschedule: () => setScheduleDialogOpen(true)
								})
							]
						}),
						showMessageMain && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Topics")
											}), isDraft && /* @__PURE__ */ jsxs(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-8 shrink-0 text-[12px]",
												onClick: () => setTopicsModalOpen(true),
												children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4 @container",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-6 @[600px]:flex-row",
											children: [/* @__PURE__ */ jsx("div", {
												className: "@[600px]:w-64 shrink-0",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] text-muted-foreground",
													children: t("Link topics so this message reaches their subscribers when you send. Subscriber counts reflect targets registered on each topic.")
												})
											}), /* @__PURE__ */ jsx("div", {
												className: "flex-1 min-w-0",
												children: selectedTopicIds.size > 0 ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
														className: "hover:bg-transparent border-b border-border",
														children: [/* @__PURE__ */ jsx(TableHead, {
															className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
															children: t("Topic name")
														}), isDraft && /* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })]
													}) }), /* @__PURE__ */ jsx(TableBody, { children: Array.from(selectedTopicIds).map((topicId) => {
														const topic = topicsById[topicId];
														const totalSubscribers = topic ? (topic.emailTotal || 0) + (topic.smsTotal || 0) + (topic.pushTotal || 0) : 0;
														return /* @__PURE__ */ jsxs(TableRow, {
															className: "border-b border-border/50",
															children: [/* @__PURE__ */ jsx(TableCell, {
																className: "px-4 py-3",
																children: topic ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
																	className: "text-[13px] font-medium text-foreground",
																	children: [
																		topic.name,
																		" (",
																		totalSubscribers,
																		" ",
																		t("targets"),
																		")"
																	]
																}), /* @__PURE__ */ jsx(CopyableId, {
																	id: topic.$id,
																	size: "xs"
																})] }) : /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[13px] text-muted-foreground",
																	children: t("Topic not found")
																}), /* @__PURE__ */ jsx(CopyableId, {
																	id: topicId,
																	size: "xs"
																})] })
															}), isDraft && /* @__PURE__ */ jsx(TableCell, {
																className: "px-4 py-3 text-end",
																children: /* @__PURE__ */ jsx(Button, {
																	variant: "ghost",
																	size: "sm",
																	className: "h-7 w-7 p-0",
																	onClick: () => {
																		const newSelected = new Set(selectedTopicIds);
																		newSelected.delete(topicId);
																		setSelectedTopicIds(newSelected);
																	},
																	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																})
															})]
														}, topicId);
													}) })] })
												}) : isDraft ? /* @__PURE__ */ jsx(EmptyState, {
													icon: Hash,
													title: t("No topics yet"),
													description: t("Select topics using Add to reach their subscribers when you send."),
													variant: "card",
													iconSize: "md"
												}) : /* @__PURE__ */ jsx(EmptyState, {
													icon: Hash,
													title: t("No topics"),
													description: t("This message has no linked topics."),
													variant: "card",
													iconSize: "md"
												})
											})]
										})
									}),
									isDraft && /* @__PURE__ */ jsx("div", {
										className: "flex justify-end px-6 py-4 border-t border-border bg-muted/30",
										children: /* @__PURE__ */ jsx(Button, {
											size: "sm",
											className: "h-9 text-[13px]",
											disabled: !hasTopicsChanged || updateEmailMutation.isPending || updateSMSMutation.isPending || updatePushMutation.isPending,
											onClick: handleUpdateMessage,
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
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Users")
											}), isDraft && /* @__PURE__ */ jsxs(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-8 shrink-0 text-[12px]",
												onClick: () => setRecipientUsersModalOpen(true),
												children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4 @container",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-6 @[600px]:flex-row",
											children: [/* @__PURE__ */ jsx("div", {
												className: "@[600px]:w-64 shrink-0",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] text-muted-foreground",
													children: t("Add project users to deliver to every matching channel target on their account (email, SMS, or push), alongside any topics you selected.")
												})
											}), /* @__PURE__ */ jsx("div", {
												className: "flex-1 min-w-0",
												children: selectedUserIds.size > 0 ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
														className: "hover:bg-transparent border-b border-border",
														children: [/* @__PURE__ */ jsx(TableHead, {
															className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
															children: t("User")
														}), isDraft && /* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })]
													}) }), /* @__PURE__ */ jsx(TableBody, { children: [...selectedUserIds].map((uid) => {
														const u = usersById[uid];
														return /* @__PURE__ */ jsxs(TableRow, {
															className: "border-b border-border/50",
															children: [/* @__PURE__ */ jsxs(TableCell, {
																className: "px-4 py-3",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[13px] font-medium text-foreground",
																	children: u?.name || u?.email || uid
																}), /* @__PURE__ */ jsx(CopyableId, {
																	id: uid,
																	size: "xs"
																})]
															}), isDraft && /* @__PURE__ */ jsx(TableCell, {
																className: "px-4 py-3 text-end",
																children: /* @__PURE__ */ jsx(Button, {
																	variant: "ghost",
																	size: "sm",
																	className: "h-7 w-7 p-0",
																	onClick: () => {
																		const n = new Set(selectedUserIds);
																		n.delete(uid);
																		setSelectedUserIds(n);
																	},
																	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																})
															})]
														}, uid);
													}) })] })
												}) : isDraft ? /* @__PURE__ */ jsx(EmptyState, {
													icon: Users$1,
													title: t("No users yet"),
													description: t("Choose users using Add to target every matching channel target for each user."),
													variant: "card",
													iconSize: "md"
												}) : /* @__PURE__ */ jsx(EmptyState, {
													icon: Users$1,
													title: t("No users"),
													description: t("This message has no selected users."),
													variant: "card",
													iconSize: "md"
												})
											})]
										})
									}),
									isDraft && /* @__PURE__ */ jsx("div", {
										className: "flex justify-end px-6 py-4 border-t border-border bg-muted/30",
										children: /* @__PURE__ */ jsx(Button, {
											size: "sm",
											className: "h-9 text-[13px]",
											disabled: !hasUsersChanged || updateEmailMutation.isPending || updateSMSMutation.isPending || updatePushMutation.isPending,
											onClick: handleUpdateMessage,
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
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Targets")
											}), isDraft && /* @__PURE__ */ jsxs(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-8 shrink-0 text-[12px]",
												onClick: () => setTargetPickerFor("primary"),
												children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Add")]
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4 @container",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-6 @[600px]:flex-row",
											children: [/* @__PURE__ */ jsx("div", {
												className: "@[600px]:w-64 shrink-0",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[13px] text-muted-foreground",
													children: t("Pick specific channel targets for this message. Targets must match the message provider (email, SMS, or push).")
												})
											}), /* @__PURE__ */ jsx("div", {
												className: "flex-1 min-w-0",
												children: selectedTargetIds.size > 0 ? /* @__PURE__ */ jsx("div", {
													className: "rounded-lg border border-border bg-card overflow-hidden",
													children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
														className: "hover:bg-transparent border-b border-border",
														children: [
															/* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("Target")
															}),
															/* @__PURE__ */ jsx(TableHead, {
																className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
																children: t("User")
															}),
															isDraft && /* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[80px]" })
														]
													}) }), /* @__PURE__ */ jsx(TableBody, { children: Array.from(selectedTargetIds).map((targetId) => {
														const target = displayTargetById[targetId];
														const user = target?.userId ? usersById[target.userId] : null;
														return /* @__PURE__ */ jsxs(TableRow, {
															className: "border-b border-border/50",
															children: [
																/* @__PURE__ */ jsx(TableCell, {
																	className: "px-4 py-3",
																	children: target ? target.providerType === "push" ? /* @__PURE__ */ jsx("span", {
																		className: "text-[13px] text-foreground",
																		children: target.name || target.identifier
																	}) : /* @__PURE__ */ jsx("span", {
																		className: "text-[13px] text-foreground",
																		children: target.identifier
																	}) : /* @__PURE__ */ jsxs("div", {
																		className: "space-y-1",
																		children: [/* @__PURE__ */ jsx(CopyableId, {
																			id: targetId,
																			size: "xs"
																		}), /* @__PURE__ */ jsx("p", {
																			className: "text-[12px] text-muted-foreground",
																			children: t("Loading target details…")
																		})]
																	})
																}),
																/* @__PURE__ */ jsx(TableCell, {
																	className: "px-4 py-3",
																	children: user ? /* @__PURE__ */ jsx("span", {
																		className: "text-[13px] text-muted-foreground",
																		children: user.name || user.email
																	}) : /* @__PURE__ */ jsx("span", {
																		className: "text-[13px] text-muted-foreground",
																		children: target?.userId ? /* @__PURE__ */ jsx(CopyableId, {
																			id: target.userId,
																			size: "xs"
																		}) : "-"
																	})
																}),
																isDraft && /* @__PURE__ */ jsx(TableCell, {
																	className: "px-4 py-3 text-end",
																	children: /* @__PURE__ */ jsx(Button, {
																		variant: "ghost",
																		size: "sm",
																		className: "h-7 w-7 p-0",
																		onClick: () => {
																			const newSelected = new Set(selectedTargetIds);
																			newSelected.delete(targetId);
																			setSelectedTargetIds(newSelected);
																			setDraftTargetDetailsById((prev) => {
																				const next = { ...prev };
																				delete next[targetId];
																				return next;
																			});
																		},
																		children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
																	})
																})
															]
														}, targetId);
													}) })] })
												}) : isDraft ? /* @__PURE__ */ jsx(EmptyState, {
													icon: Target,
													title: t("No targets yet"),
													description: t("Select targets using Add to deliver this message on the matching channel."),
													variant: "card",
													iconSize: "md"
												}) : /* @__PURE__ */ jsx(EmptyState, {
													icon: Target,
													title: t("No targets"),
													description: t("No targets have been selected for this message."),
													variant: "card",
													iconSize: "md"
												})
											})]
										})
									}),
									isDraft && /* @__PURE__ */ jsx("div", {
										className: "flex justify-end px-6 py-4 border-t border-border bg-muted/30",
										children: /* @__PURE__ */ jsx(Button, {
											size: "sm",
											className: "h-9 text-[13px]",
											disabled: !hasTargetsChanged || updateEmailMutation.isPending || updateSMSMutation.isPending || updatePushMutation.isPending,
											onClick: handleUpdateMessage,
											children: t("Update")
										})
									})
								]
							})
						] }),
						showMessageSettings && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Details")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[13px] text-muted-foreground mt-2",
												children: t("Message ID and delivery timestamps.")
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "shrink-0 pt-0.5",
											children: getMessageStatusBadge()
										})]
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
													children: t("Message ID")
												}), /* @__PURE__ */ jsx(CopyableId, {
													id: message.$id,
													size: "sm"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
													children: t("Created")
												}), message.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
													date: message.$createdAt,
													showFormattedDate: true,
													className: "text-[13px] text-foreground"
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-muted-foreground/50 italic",
													children: t("N/A")
												})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
													children: t("Updated")
												}), /* @__PURE__ */ jsx(DateTooltip, {
													date: message.$updatedAt || message.$createdAt,
													showFormattedDate: true,
													className: "text-[13px] text-foreground"
												})] })]
											}),
											(message.scheduledAt || message.deliveredAt) && /* @__PURE__ */ jsxs("div", {
												className: "grid gap-4 border-t border-border pt-4 sm:grid-cols-2",
												children: [message.scheduledAt && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
													children: t("Scheduled for")
												}), /* @__PURE__ */ jsx(DateTooltip, {
													date: message.scheduledAt,
													showFormattedDate: true,
													className: "text-[13px] text-foreground"
												})] }), message.deliveredAt && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
													children: t("Sent")
												}), /* @__PURE__ */ jsx(DateTooltip, {
													date: message.deliveredAt,
													showFormattedDate: true,
													className: "text-[13px] text-foreground"
												})] })]
											})
										]
									})
								})
							]
						}),
						message.status !== "processing" && showMessageSettings && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-red-500/30 bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Delete message")
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[13px] text-muted-foreground mt-2",
										children: [t("Permanently delete this message. This action cannot be undone."), message.status === "scheduled" && /* @__PURE__ */ jsx("span", {
											className: "block mt-1",
											children: t("This is a scheduled message. Deleting it will result in the cancellation of its delivery.")
										})]
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-red-500/20" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
											children: /* @__PURE__ */ jsx(TypeIcon, { className: "h-5 w-5 text-muted-foreground" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[14px] font-medium text-foreground truncate",
												children: getMessageDescription() || t("Message")
											}), message.$updatedAt && /* @__PURE__ */ jsxs("p", {
												className: "text-[12px] text-muted-foreground",
												children: [
													t("Last updated:"),
													" ",
													formatDateTime(message.$updatedAt)
												]
											})]
										})]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-red-500/20 bg-destructive/5",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "destructive",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: () => setDeleteDialogOpen(true),
										disabled: deleteMessageMutation.isPending,
										children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete")]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsx(TopicsSelectionModal, {
					open: topicsModalOpen,
					onOpenChange: setTopicsModalOpen,
					onSelect: (topicIds) => {
						setSelectedTopicIds(new Set(topicIds));
						setTopicsModalOpen(false);
					},
					projectId,
					providerType: message.providerType,
					existingTopicIds: selectedTopicIds
				}),
				/* @__PURE__ */ jsx(MessagingTargetsModal, {
					open: targetPickerFor !== null,
					onOpenChange: (o) => {
						if (!o) setTargetPickerFor(null);
					},
					title: targetPickerFor === "cc" ? t("Select CC targets") : targetPickerFor === "bcc" ? t("Select BCC targets") : t("Select targets"),
					description: targetPickerFor === "cc" || targetPickerFor === "bcc" ? t("Choose email targets for copy. Targets must match the email channel.") : t("Choose user targets for this message. Each user can have multiple targets per channel."),
					projectId,
					providerType: targetPickerFor === "cc" || targetPickerFor === "bcc" ? "email" : message.providerType,
					initialSelectedById: messagingModalInitialSelection,
					onConfirm: (selectedById) => {
						const ids = new Set(Object.keys(selectedById));
						if (targetPickerFor === "cc") setCcTargetIds(ids);
						else if (targetPickerFor === "bcc") setBccTargetIds(ids);
						else {
							setSelectedTargetIds(ids);
							setDraftTargetDetailsById((prev) => ({
								...prev,
								...selectedById
							}));
						}
						setTargetPickerFor(null);
					}
				}),
				projectId ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(MessageSendDialog, {
						open: sendDialogOpen,
						onOpenChange: setSendDialogOpen,
						projectId,
						message,
						topics: topicsForEstimate,
						onSuccess: () => void refetchMessage()
					}),
					/* @__PURE__ */ jsx(MessageScheduleDialog, {
						open: scheduleDialogOpen,
						onOpenChange: setScheduleDialogOpen,
						projectId,
						message,
						topics: topicsForEstimate,
						onSuccess: () => void refetchMessage()
					}),
					/* @__PURE__ */ jsx(MessageCancelScheduleDialog, {
						open: cancelScheduleOpen,
						onOpenChange: setCancelScheduleOpen,
						projectId,
						message,
						onSuccess: () => void refetchMessage()
					}),
					/* @__PURE__ */ jsx(MessagingRecipientUsersModal, {
						open: recipientUsersModalOpen,
						onOpenChange: setRecipientUsersModalOpen,
						projectId,
						existingUserIds: selectedUserIds,
						onConfirm: (ids) => setSelectedUserIds(new Set(ids))
					}),
					/* @__PURE__ */ jsx(StorageFileExplorerDialog, {
						open: attachmentExplorerOpen,
						onOpenChange: setAttachmentExplorerOpen,
						projectId,
						title: t("Add attachment"),
						description: t("Pick a bucket and file from Storage. It will be referenced as bucketId:fileId on the message."),
						confirmLabel: t("Add"),
						onConfirm: (sel) => {
							const compound = `${sel.bucketId}:${sel.fileId}`;
							if (attachmentCompoundIds.includes(compound)) {
								toast.error(t("This file is already attached"));
								return false;
							}
							setAttachmentCompoundIds((rows) => [...rows, compound]);
						}
					})
				] }) : null,
				/* @__PURE__ */ jsx(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete message") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									getMessageDescription() ? `"${getMessageDescription()}"` : t("this message"),
									"?",
									" ",
									message.status === "draft" && t("This action is irreversible."),
									message.status === "scheduled" && t("This is a scheduled message. Deleting it will result in the cancellation of its delivery. This action is irreversible."),
									message.status === "sent" && t("The message has already been sent. After deleting it, you will no longer see it here."),
									message.status === "failed" && t("The message has been sent with errors. After deleting it, you will no longer see it here.")
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: deleteMessageMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => deleteMessageMutation.mutate(),
								disabled: deleteMessageMutation.isPending,
								children: t("Delete")
							})]
						})]
					})
				})
			]
		})]
	});
}
function TopicsSelectionModal({ open, onOpenChange, onSelect, projectId, providerType, existingTopicIds }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [selectedTopicIds, setSelectedTopicIds] = useState(/* @__PURE__ */ new Set());
	const [page, setPage] = useState(0);
	const { topics, isLoading } = useProjectTopics(projectId || null, page, 25, search);
	const filteredTopics = useMemo(() => {
		if (!providerType) return topics;
		return topics.filter((topic) => {
			if (providerType === "email") return (topic.emailTotal || 0) > 0;
			if (providerType === "sms") return (topic.smsTotal || 0) > 0;
			if (providerType === "push") return (topic.pushTotal || 0) > 0;
			return true;
		});
	}, [topics, providerType]);
	const handleToggleTopic = (topicId) => {
		const newSelected = new Set(selectedTopicIds);
		if (newSelected.has(topicId)) newSelected.delete(topicId);
		else newSelected.add(topicId);
		setSelectedTopicIds(newSelected);
	};
	const handleAdd = () => {
		const topicIds = Array.from(selectedTopicIds);
		if (topicIds.length > 0) {
			const merged = new Set([...existingTopicIds, ...topicIds]);
			onSelect(Array.from(merged));
			setSelectedTopicIds(/* @__PURE__ */ new Set());
			setSearch("");
			onOpenChange(false);
		}
	};
	const handleCancel = () => {
		setSelectedTopicIds(/* @__PURE__ */ new Set());
		setSearch("");
		onOpenChange(false);
	};
	useEffect(() => {
		if (!open) {
			setSelectedTopicIds(/* @__PURE__ */ new Set());
			setSearch("");
			setPage(0);
		}
	}, [open]);
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-2xl p-0 max-h-[80dvh] flex flex-col",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Select topics") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Choose one or more topics to send this message to.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0 flex-1 overflow-hidden flex flex-col",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx(Input, {
							placeholder: t("Search topics..."),
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							},
							className: "h-9"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex-1 overflow-y-auto space-y-1 min-h-0",
							children: isLoading ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading topics...")
							}) : filteredTopics.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Hash,
								isEmpty: !search,
								hasFilters: !!search,
								className: "py-8"
							}) : filteredTopics.map((topic) => {
								const isSelected = selectedTopicIds.has(topic.$id);
								const isAlreadyAdded = existingTopicIds.has(topic.$id);
								const totalSubscribers = (topic.emailTotal || 0) + (topic.smsTotal || 0) + (topic.pushTotal || 0);
								return /* @__PURE__ */ jsxs("div", {
									onClick: () => !isAlreadyAdded && handleToggleTopic(topic.$id),
									className: cn("flex items-center gap-3 rounded-lg border p-3 transition-colors", isAlreadyAdded ? "border-border bg-muted/30 opacity-50 cursor-not-allowed" : isSelected ? "border-primary bg-primary/5 cursor-pointer" : "border-border hover:bg-muted/50 cursor-pointer"),
									children: [/* @__PURE__ */ jsx(Checkbox, {
										checked: isSelected,
										onCheckedChange: () => {
											if (!isAlreadyAdded) handleToggleTopic(topic.$id);
										},
										disabled: isAlreadyAdded,
										onClick: (e) => e.stopPropagation(),
										className: "cursor-pointer"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-sm font-medium truncate",
											children: topic.name
										}), /* @__PURE__ */ jsxs("p", {
											className: "text-xs text-muted-foreground",
											children: [
												totalSubscribers,
												" ",
												totalSubscribers !== 1 ? t("subscribers") : t("subscriber")
											]
										})]
									})]
								}, topic.$id);
							})
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: handleAdd,
						disabled: selectedTopicIds.size === 0,
						children: [
							t("Add"),
							" ",
							selectedTopicIds.size > 0 ? `(${selectedTopicIds.size})` : ""
						]
					})]
				})
			]
		})
	});
}
export { View as t };
