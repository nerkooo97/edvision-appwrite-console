import { t as cn } from "./utils-DoqqkI3X.js";
import { c as getProjectApiEndpoint, d as sdk, h as fetchConsoleAccount, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { f as ROWS_DEFAULT_PAGE_SIZE, l as FILE_TOKENS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { Mt as useOrganizationPlan, Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { Ad as removeCachedFile, Dd as getBucketFromProjectCaches, Md as useBucketFiles, Nd as useFile, Od as getCachedBucketListsFromQueryClient, Pd as useFileTokens, Sd as fetchFile, Td as fileQueryOptions, _d as FILES_DEFAULT_SORT_ORDER, gd as FILES_DEFAULT_SORT_BY, jd as useBucket, kd as pickNextBucketIdAfterDelete } from "./hooks-BONwG3Mt.js";
import { D as syncConsoleAccountAfterMutation, Dr as clampStorageFilesListDataColumnWidthPx, Gr as mergeStorageFilesListColumnWidthsIntoPrefs, Kr as mergeStorageFilesListColumnWidthsWithDefaults, Nr as getStorageFilesListColumnWidthsFromPrefs, O as updateAccountPrefs, Pr as hasStorageFilesTablePaneWidthPref, Y as useImageTransformSavedPresets, an as STORAGE_FILES_TABLE_PANE_MAX_PX, in as STORAGE_FILES_LIST_RESIZABLE_COLUMN_WIDTH_KEYS, m as getConsoleAccountFromCache, nn as STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS, nt as useStorageFilesTablePaneWidth, on as STORAGE_FILES_TABLE_PANE_MIN_PX, rn as STORAGE_FILES_LIST_DATA_COLUMN_MIN_WIDTH_PX, vi as parseStorageFilesTablePaneWidthPx } from "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { St as toByteCount, X as filesFilterColumns, at as getLimit, bt as formatDecimalBytes, ct as getSearch, et as MIN_SEARCH_LENGTH, ft as parseSort, ht as urlFromRouterLocation, lt as getSort, mt as searchParamsFromRouterLocation, ot as getPage, pt as queryParamToMap, rt as encodeSort, st as getQueryParam, tt as buildListSearchParams, ut as mapToQueryParam, xt as pickFormDecimalByteDisplayUnit } from "./form-field-type-badge-C7qMzJo0.js";
import { G as clampSplitFirstPaneWidthPx, Y as fitSplitFirstPaneWidthOnContainerResize } from "./resizable-layout-BVnWw80t.js";
import { t as Slider } from "./slider-BKjrzSmD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { n as ICON_NO_RTL_FLIP_CLASS } from "./force-ltr-DzjunFli.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, d as DropdownMenuSubContent, f as DropdownMenuSubTrigger, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuSub } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, r as MenuItemIcon, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { t as useMediaMinWidth } from "./use-media-min-width-T-T6WgXi.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { f as isRtlElement, l as horizontalResizeDeltaPx, m as setBodyResizeDragActive, s as applyColumnResizeRailPosition, u as horizontalSplitHandleStyle } from "./horizontal-resize-BcegzCwH.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { E as canShowBucketSecuritySettings, b as canSaveTeamFilters } from "./console-access-checks-BTMEOKcL.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { t as CodeEditor } from "./CodeEditor-Z8DByNgB.js";
import { t as uploadManager } from "./upload-manager-DVbeAVI1.js";
import { t as formatBytes } from "./mock-data-bi-y2wwb.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { n as useViewportPanZoom, r as SchemaBlueprintMat } from "./useViewportPanZoom-COUwlx3T.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { a as SPREADSHEET_STICKY_END_EDGE_SHADOW, i as SPREADSHEET_STICKY_BODY_Z, s as SPREADSHEET_STICKY_START_EDGE_SHADOW } from "./spreadsheet-sticky-CpUihTZG.js";
import { S as storageFilesSplitGridStyle, _ as STORAGE_SPREADSHEET_HEADER_STICKY_CHECKBOX_SHADOW, a as STORAGE_FILES_INSPECTOR_DRAWER_HEIGHT_CLASS, b as defaultStorageFilesTablePaneWidthPx, c as STORAGE_FILES_PREVIEW_PANE_MIN_PX, d as STORAGE_FILES_TABLE_HEADER_TH_CLASS, f as STORAGE_FILES_TABLE_PREVIEW_SPLIT_MIN_VIEWPORT_PX, g as STORAGE_SPREADSHEET_HEADER_STICKY_ACTIONS_SHADOW, h as STORAGE_SPREADSHEET_HEADER_CELL_BORDER, l as STORAGE_FILES_SPLIT_PANE_BG_CLASS, m as STORAGE_SPREADSHEET_BODY_STICKY_EDGE_BG_CLASS, o as STORAGE_FILES_LIST_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS, p as STORAGE_SPREADSHEET_BODY_CELL_BORDER, s as STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS, u as STORAGE_FILES_TABLE_EDGE_COL_PX, v as STORAGE_SPREADSHEET_STICKY_THEAD_CLASS, y as STORAGE_SPREADSHEET_TABLE_LAYER_CLASS } from "./files-documents-layout-CQuCfa54.js";
import { t as PermissionsEditor } from "./PermissionsEditor-DzrUP0TS.js";
import { i as isStorageVideoPreviewSupportedMimeType, n as getStorageFileIcon, r as isStoragePreviewSupportedMimeType } from "./StorageFilePreviewThumb-B9bmNXmt.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ImageFormat, ImageGravity } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowUpDown, Calendar, Check, Copy, CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight, Crosshair, Download, ExternalLink, Eye, File, FileJson, FileText, Filter, Fingerprint, FolderOpen, GripVertical, KeyRound, LayoutList, Link2, Loader2, Maximize2, PanelRight, Pencil, Plus, Redo2, RotateCcw, RotateCw, Shield, Square, Trash2, Undo2, Upload, Wand2, X, ZoomIn, ZoomOut } from "lucide-react";
import { z } from "zod";
import { flushSync } from "react-dom";
function UploadFile({ open, onOpenChange, onUpload, bucket, isLoading = false, prefillFiles = null, onPrefillConsumed }) {
	const t = useT();
	const [fileId, setFileId] = useState(void 0);
	const [files, setFiles] = useState([]);
	const [invalidFiles, setInvalidFiles] = useState([]);
	const [errors, setErrors] = useState({});
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef(null);
	const dropZoneRef = useRef(null);
	const handleOpenChange = (newOpen) => {
		if (!isLoading) {
			onOpenChange(newOpen);
			if (!newOpen) resetForm();
		}
	};
	const resetForm = () => {
		setFileId(void 0);
		setFiles([]);
		setInvalidFiles([]);
		setErrors({});
		setIsDragging(false);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	useEffect(() => {
		if (!open) resetForm();
	}, [open]);
	const getFileValidationError = (fileToValidate) => {
		if (bucket?.allowedFileExtensions && bucket.allowedFileExtensions.length > 0) {
			const fileExtension = fileToValidate.name.split(".").pop()?.toLowerCase();
			if (!fileExtension || !bucket.allowedFileExtensions.includes(fileExtension)) return `${t("Only")} ${bucket.allowedFileExtensions.join(", ")} ${t("files allowed")}`;
		}
		if (bucket?.maximumFileSize && fileToValidate.size > toByteCount(bucket.maximumFileSize)) {
			const maxSizeMB = (toByteCount(bucket.maximumFileSize) / (1e3 * 1e3)).toFixed(2);
			return `${t("File size exceeds maximum of")} ${maxSizeMB} MB`;
		}
		return null;
	};
	const validateFiles = (selectedFiles) => {
		const valid = [];
		const invalid = [];
		selectedFiles.forEach((file) => {
			const error = getFileValidationError(file);
			if (error) invalid.push({
				name: file.name,
				reason: error
			});
			else valid.push(file);
		});
		return {
			valid,
			invalid
		};
	};
	const handleFileSelect = (selectedFiles) => {
		const { valid, invalid } = validateFiles(selectedFiles);
		setFiles(valid);
		setInvalidFiles(invalid);
		setErrors({});
		if (valid.length !== 1) setFileId(void 0);
	};
	useEffect(() => {
		if (!open || !prefillFiles?.length) return;
		handleFileSelect(prefillFiles);
		onPrefillConsumed?.();
	}, [open, prefillFiles]);
	const handleFileInputChange = (e) => {
		const selectedFiles = Array.from(e.target.files ?? []);
		if (selectedFiles.length > 0) handleFileSelect(selectedFiles);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		const droppedFiles = Array.from(e.dataTransfer.files ?? []);
		if (droppedFiles.length > 0) handleFileSelect(droppedFiles);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (files.length === 0) {
			setErrors({ file: t("Please select at least one file to upload") });
			return;
		}
		onUpload({
			fileId: files.length === 1 ? fileId : void 0,
			files
		});
	};
	const formatFileSize = (bytes) => {
		return formatDecimalBytes(bytes);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "min-w-0 sm:max-w-md p-0 max-h-[85dvh] overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: files.length > 1 ? t("Create files") : t("Create file") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Upload files to this bucket.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "min-w-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 space-y-4 overflow-x-hidden overflow-y-auto px-6 pb-4 pt-0 max-h-[60dvh]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "file-upload",
										children: [
											t("Files"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										ref: dropZoneRef,
										onDragOver: handleDragOver,
										onDragLeave: handleDragLeave,
										onDrop: handleDrop,
										className: cn("min-w-0 overflow-hidden border-2 border-dashed rounded-lg p-6 text-center transition-colors", isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30", errors.file && "border-destructive"),
										children: [/* @__PURE__ */ jsx("input", {
											ref: fileInputRef,
											id: "file-upload",
											type: "file",
											multiple: true,
											onChange: handleFileInputChange,
											className: "hidden",
											disabled: isLoading
										}), /* @__PURE__ */ jsxs("label", {
											htmlFor: "file-upload",
											className: "flex w-full min-w-0 cursor-pointer flex-col items-center gap-2 px-1",
											children: [
												/* @__PURE__ */ jsx(Upload, { className: "h-8 w-8 shrink-0 text-muted-foreground" }),
												/* @__PURE__ */ jsx("span", {
													className: "block w-full min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[13px] text-foreground",
													title: files.length === 1 ? files[0].name : void 0,
													children: files.length === 0 ? t("Click to upload or drag and drop") : files.length === 1 ? files[0].name : `${files.length} ${t("files selected")}`
												}),
												bucket?.allowedFileExtensions && bucket.allowedFileExtensions.length > 0 && /* @__PURE__ */ jsxs("span", {
													className: "text-[12px] text-muted-foreground",
													children: [
														t("Allowed:"),
														" ",
														bucket.allowedFileExtensions.join(", ")
													]
												}),
												bucket?.maximumFileSize && /* @__PURE__ */ jsxs("span", {
													className: "text-[12px] text-muted-foreground",
													children: [
														t("Max size:"),
														" ",
														formatFileSize(bucket.maximumFileSize)
													]
												})
											]
										})]
									}),
									files.length > 0 && /* @__PURE__ */ jsx("div", {
										className: "min-w-0 space-y-2 max-h-40 overflow-x-hidden overflow-y-auto pe-1",
										children: files.map((selectedFile, index) => /* @__PURE__ */ jsxs("div", {
											className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 rounded-md border border-border bg-muted/30 px-2.5 py-2",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-start text-[12px] font-medium leading-snug text-foreground",
													title: selectedFile.name,
													children: selectedFile.name
												}),
												/* @__PURE__ */ jsx("span", {
													className: "shrink-0 whitespace-nowrap text-end text-[12px] text-muted-foreground tabular-nums",
													children: formatFileSize(selectedFile.size)
												}),
												/* @__PURE__ */ jsx(Button, {
													type: "button",
													variant: "ghost",
													size: "sm",
													className: "h-7 w-7 shrink-0 p-0",
													onClick: () => {
														setFiles((prev) => prev.filter((_, fileIndex) => fileIndex !== index));
														if (fileInputRef.current) fileInputRef.current.value = "";
													},
													children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
												})
											]
										}, `${selectedFile.name}-${selectedFile.size}-${index}`))
									}),
									invalidFiles.length > 0 && /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
										className: "text-[12px]",
										children: `${invalidFiles.length > 1 ? t("Skipped files:") : t("Skipped file:")} ${invalidFiles.slice(0, 3).map((file) => `${file.name} (${file.reason})`).join(", ")}${invalidFiles.length > 3 ? `, ${t("and more.")}` : "."}`
									})] }),
									errors.file && /* @__PURE__ */ jsxs(Alert, {
										variant: "destructive",
										children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
											className: "text-[12px]",
											children: errors.file
										})]
									})
								]
							}),
							files.length === 1 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "file-id",
									children: t("File ID")
								}), /* @__PURE__ */ jsx(IdInput, {
									id: "file-id",
									value: fileId,
									onChange: setFileId,
									maxLength: 36,
									disabled: isLoading,
									placeholder: t("Leave blank to auto-generate")
								})]
							}),
							files.length > 1 && /* @__PURE__ */ jsx("p", {
								className: "border-t border-border pt-3 text-[12px] leading-relaxed text-muted-foreground",
								children: t("File IDs will be auto-generated for bulk uploads.")
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => handleOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || files.length === 0,
							children: t("Create")
						})]
					})]
				})
			]
		})
	});
}
function BucketSettings() {
	const t = useT();
	const { projectId, bucketId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data: bucket, isLoading: bucketLoading } = useBucket(projectId, bucketId);
	const { project } = useProject(projectId);
	const orgId = project?.teamId;
	const { plan: organizationPlan } = useOrganizationPlan(orgId);
	const maxFileSizeByPlan = useMemo(() => {
		if (!organizationPlan) return null;
		const fileSize = organizationPlan?.fileSize;
		const fileSizeNumber = fileSize == null ? null : typeof fileSize === "bigint" ? Number(fileSize) : Number(fileSize);
		if (fileSizeNumber == null || !Number.isFinite(fileSizeNumber) || fileSizeNumber === -1) return null;
		return fileSizeNumber * 1e3 * 1e3;
	}, [organizationPlan]);
	const [bucketName, setBucketName] = useState("");
	const [enabled, setEnabled] = useState(false);
	const [encryption, setEncryption] = useState(false);
	const [compression, setCompression] = useState("none");
	const [transformations, setTransformations] = useState(false);
	const [maximumFileSize, setMaximumFileSize] = useState(0);
	const [fileSizeUnit, setFileSizeUnit] = useState("MB");
	const [allowedFileExtensions, setAllowedFileExtensions] = useState([]);
	const [extensionInput, setExtensionInput] = useState("");
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteConfirmation, setDeleteConfirmation] = useState("");
	useEffect(() => {
		if (bucket) {
			setBucketName(bucket.name);
			setEnabled(bucket.enabled);
			setEncryption(bucket.encryption);
			setCompression(bucket.compression || "none");
			setTransformations(bucket.transformations);
			if (toByteCount(bucket.maximumFileSize) > 0) {
				const { value, unit } = pickFormDecimalByteDisplayUnit(toByteCount(bucket.maximumFileSize));
				setMaximumFileSize(value);
				setFileSizeUnit(unit);
			} else {
				setMaximumFileSize(0);
				setFileSizeUnit("MB");
			}
			setAllowedFileExtensions(bucket.allowedFileExtensions || []);
		}
	}, [bucket]);
	const updateNameMutation = useMutation({
		mutationFn: async (name) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: name.trim(),
				enabled: bucket.enabled ?? void 0,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				transformations: bucket.transformations ?? void 0,
				maximumFileSize: bucket.maximumFileSize ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Bucket name has been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.BUCKETS });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const updateEnabledMutation = useMutation({
		mutationFn: async (enabled$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				enabled: enabled$1,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				transformations: bucket.transformations ?? void 0,
				maximumFileSize: bucket.maximumFileSize ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(enabled ? t("Bucket has been enabled") : t("Bucket has been disabled"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.BUCKETS });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
			if (bucket) setEnabled(bucket.enabled);
		}
	});
	const updateCompressionMutation = useMutation({
		mutationFn: async (compression$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				compression: compression$1 === "none" ? void 0 : compression$1,
				enabled: bucket.enabled ?? void 0,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				transformations: bucket.transformations ?? void 0,
				maximumFileSize: bucket.maximumFileSize ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Compression setting has been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const updateMaximumFileSizeMutation = useMutation({
		mutationFn: async (maximumFileSize$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				maximumFileSize: maximumFileSize$1,
				enabled: bucket.enabled ?? void 0,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				transformations: bucket.transformations ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Maximum file size has been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const updateAllowedExtensionsMutation = useMutation({
		mutationFn: async (allowedFileExtensions$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				allowedFileExtensions: allowedFileExtensions$1,
				enabled: bucket.enabled ?? void 0,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				transformations: bucket.transformations ?? void 0,
				maximumFileSize: bucket.maximumFileSize ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Allowed file extensions have been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const deleteBucketMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !bucketId) throw new Error("Project ID and Bucket ID are required");
			return await sdk.forProject(projectId).storage.deleteBucket({ bucketId });
		},
		onSuccess: async () => {
			const deletedId = bucketId;
			const nextBucketId = pickNextBucketIdAfterDelete(getCachedBucketListsFromQueryClient(queryClient, projectId), deletedId);
			await queryClient.refetchQueries({ queryKey: Dependencies.BUCKETS });
			toast.success(t("Bucket has been deleted"));
			if (nextBucketId) navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId: nextBucketId
				}
			});
			else navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId: "-"
				}
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const updateEncryptionMutation = useMutation({
		mutationFn: async (encryption$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				encryption: encryption$1,
				enabled: bucket.enabled ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				transformations: bucket.transformations ?? void 0,
				maximumFileSize: bucket.maximumFileSize ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Encryption setting has been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
			if (bucket) setEncryption(bucket.encryption);
		}
	});
	const updateTransformationsMutation = useMutation({
		mutationFn: async (transformations$1) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				transformations: transformations$1,
				enabled: bucket.enabled ?? void 0,
				encryption: bucket.encryption ?? void 0,
				antivirus: bucket.antivirus ?? void 0,
				compression: bucket.compression,
				maximumFileSize: bucket.maximumFileSize ?? void 0,
				allowedFileExtensions: bucket.allowedFileExtensions ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Image transformations setting has been updated"));
			queryClient.invalidateQueries({ queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
			if (bucket) setTransformations(bucket.transformations);
		}
	});
	const handleNameUpdate = () => {
		if (bucketName.trim() && bucketName !== bucket?.name) updateNameMutation.mutate(bucketName);
	};
	const handleEnabledToggle = (checked) => {
		setEnabled(checked);
	};
	const handleEncryptionToggle = (checked) => {
		setEncryption(checked);
	};
	const handleTransformationsToggle = (checked) => {
		setTransformations(checked);
	};
	const handleEncryptionUpdate = () => {
		if (encryption !== bucket?.encryption) updateEncryptionMutation.mutate(encryption);
	};
	const handleTransformationsUpdate = () => {
		if (transformations !== bucket?.transformations) updateTransformationsMutation.mutate(transformations);
	};
	const handleCompressionUpdate = (value) => {
		setCompression(value);
	};
	const getCompressionDisplayName = (value) => {
		if (!value) return "";
		return {
			none: t("None"),
			gzip: "Gzip",
			zstd: "Zstd"
		}[value];
	};
	const fileSizeInBytes = useMemo(() => {
		if (maximumFileSize === null || maximumFileSize === 0) return 0;
		return Math.round(maximumFileSize * {
			bytes: 1,
			KB: 1e3,
			MB: 1e3 * 1e3,
			GB: 1e3 * 1e3 * 1e3
		}[fileSizeUnit]);
	}, [maximumFileSize, fileSizeUnit]);
	const maxFileSizeInCurrentUnit = useMemo(() => {
		if (maxFileSizeByPlan === null) return void 0;
		return maxFileSizeByPlan / {
			bytes: 1,
			KB: 1e3,
			MB: 1e3 * 1e3,
			GB: 1e3 * 1e3 * 1e3
		}[fileSizeUnit];
	}, [maxFileSizeByPlan, fileSizeUnit]);
	const fileSizeError = useMemo(() => {
		if (maxFileSizeByPlan === null) return null;
		if (fileSizeInBytes === 0) return null;
		if (fileSizeInBytes > maxFileSizeByPlan) return {
			message: `${t("Maximum file size cannot exceed")} ${formatBytes(maxFileSizeByPlan)} ${t("for your plan")}`,
			showUpgrade: true
		};
		return null;
	}, [
		fileSizeInBytes,
		maxFileSizeByPlan,
		t
	]);
	const handleMaximumFileSizeUpdate = () => {
		if (fileSizeInBytes !== toByteCount(bucket?.maximumFileSize)) {
			if (fileSizeError) {
				toast.error(fileSizeError.message || t("File size exceeds plan limit"));
				return;
			}
			updateMaximumFileSizeMutation.mutate(fileSizeInBytes);
		}
	};
	const handleAllowedExtensionsUpdate = () => {
		if (!arraysEqual(allowedFileExtensions, bucket?.allowedFileExtensions || [])) updateAllowedExtensionsMutation.mutate(allowedFileExtensions);
	};
	const handleAddExtension = (ext) => {
		const trimmed = ext.trim().toLowerCase().replace(/^\./, "");
		if (trimmed && !allowedFileExtensions.includes(trimmed) && allowedFileExtensions.length < 100) {
			setAllowedFileExtensions([...allowedFileExtensions, trimmed]);
			setExtensionInput("");
		}
	};
	const handleRemoveExtension = (ext) => {
		setAllowedFileExtensions(allowedFileExtensions.filter((e) => e !== ext));
	};
	const handleExtensionInputKeyDown = (e) => {
		if (e.key === "Enter" && extensionInput.trim()) {
			e.preventDefault();
			handleAddExtension(extensionInput);
		} else if (e.key === "," && extensionInput.trim()) {
			e.preventDefault();
			handleAddExtension(extensionInput);
		} else if (e.key === " " && extensionInput.trim()) {
			e.preventDefault();
			handleAddExtension(extensionInput);
		} else if ((e.key === "Backspace" || e.key === "Delete") && !extensionInput.trim() && allowedFileExtensions !== null && allowedFileExtensions.length > 0) {
			e.preventDefault();
			handleRemoveExtension(allowedFileExtensions[allowedFileExtensions.length - 1]);
		}
	};
	const popularExtensions = [
		"jpg",
		"png",
		"gif",
		"pdf",
		"doc",
		"docx",
		"xls",
		"xlsx",
		"zip",
		"mp4"
	];
	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		const sortedA = [...a].sort();
		const sortedB = [...b].sort();
		return sortedA.every((val, idx) => val === sortedB[idx]);
	};
	if (bucketLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (!bucket) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Bucket not found")
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "w-full px-4 py-4 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
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
								children: t("Update your bucket's display name. This will be visible to all organization members.")
							}), /* @__PURE__ */ jsx(Input, {
								value: bucketName,
								onChange: (e) => setBucketName(e.target.value),
								placeholder: t("Bucket name"),
								className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: bucketName.trim() === bucket.name || !bucketName.trim() || updateNameMutation.isPending,
								onClick: handleNameUpdate,
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
								children: bucket.name
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(Switch, {
										id: "toggle",
										checked: enabled ?? false,
										onCheckedChange: handleEnabledToggle,
										disabled: updateEnabledMutation.isPending
									}), /* @__PURE__ */ jsx(Label, {
										htmlFor: "toggle",
										className: "text-[13px] text-foreground",
										children: enabled ? t("Enabled") : t("Disabled")
									})]
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 space-y-1",
								children: [
									/* @__PURE__ */ jsxs("p", {
										className: "text-[13px] text-muted-foreground",
										children: [
											t("Bucket ID:"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "ms-1.5",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: bucket.$id,
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
												date: new Date(bucket.$createdAt),
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
												date: new Date(bucket.$updatedAt),
												showFormattedDate: true,
												className: "text-foreground"
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: enabled === bucket.enabled || updateEnabledMutation.isPending,
								onClick: () => {
									if (enabled !== bucket.enabled) updateEnabledMutation.mutate(enabled);
								},
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Encryption")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Encrypt files stored in this bucket. For file size above 20MB encryption is skipped even if it's enabled. This change will only apply to new files uploaded after the update.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "encryption",
									className: "text-[13px] font-medium text-foreground",
									children: t("Enabled")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground mt-0.5",
									children: t("Encrypt files stored in this bucket")
								})] }), /* @__PURE__ */ jsx(Switch, {
									id: "encryption",
									checked: encryption,
									onCheckedChange: handleEncryptionToggle,
									disabled: updateEncryptionMutation.isPending
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: encryption === bucket.encryption || updateEncryptionMutation.isPending,
								onClick: handleEncryptionUpdate,
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Image transformations")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Enable image transformation features for files in this bucket.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "transformations",
									className: "text-[13px] font-medium text-foreground",
									children: t("Enabled")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground mt-0.5",
									children: t("Enable image transformation features")
								})] }), /* @__PURE__ */ jsx(Switch, {
									id: "transformations",
									checked: transformations,
									onCheckedChange: handleTransformationsToggle,
									disabled: updateTransformationsMutation.isPending
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: transformations === bucket.transformations || updateTransformationsMutation.isPending,
								onClick: handleTransformationsUpdate,
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Compression")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Choose a compression algorithm for files in this bucket. Compression reduces file sizes, lowering storage costs and bandwidth usage while improving transfer speeds. This change will only apply to new files uploaded after the update.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "compression",
									className: "text-[13px] font-medium text-foreground",
									children: t("Algorithm")
								}), /* @__PURE__ */ jsxs(Select, {
									value: compression || void 0,
									onValueChange: (value) => handleCompressionUpdate(value),
									disabled: updateCompressionMutation.isPending,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "compression",
										className: "mt-1.5 max-w-sm",
										children: /* @__PURE__ */ jsx(SelectValue, {
											placeholder: t("Select algorithm"),
											children: getCompressionDisplayName(compression)
										})
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [
										/* @__PURE__ */ jsx(SelectItem, {
											value: "none",
											className: "items-start py-2",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col gap-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-medium",
													children: t("None")
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground",
													children: t("No compression applied. Files are stored as-is.")
												})]
											})
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "gzip",
											className: "items-start py-2",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col gap-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-medium",
													children: "Gzip"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground",
													children: t("Good balance between compression ratio and speed.")
												})]
											})
										}),
										/* @__PURE__ */ jsx(SelectItem, {
											value: "zstd",
											className: "items-start py-2",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col gap-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-medium",
													children: "Zstd"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground",
													children: t("Excellent compression ratios with fast decompression.")
												})]
											})
										})
									] })]
								})] })
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: compression === (bucket.compression || "none") || updateCompressionMutation.isPending,
								onClick: () => {
									if (compression !== (bucket.compression || "none")) updateCompressionMutation.mutate(compression);
								},
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Maximum file size")
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: [
									t("Set the maximum file size allowed."),
									" ",
									maxFileSizeByPlan !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
										t("Maximum allowed value is"),
										" ",
										formatBytes(maxFileSizeByPlan),
										" ",
										t("for your plan."),
										" ",
										/* @__PURE__ */ jsx(Button, {
											variant: "link",
											size: "sm",
											className: "h-auto p-0 text-[13px] font-medium underline",
											onClick: () => {
												navigate({
													to: "/upgrade",
													...orgId ? { search: { orgId } } : {}
												});
											},
											children: t("Upgrade")
										}),
										" ",
										t("to increase the limit. Set to 0 to use your plan's maximum limit"),
										" ",
										"(",
										formatBytes(maxFileSizeByPlan),
										")."
									] }) : t("No limit for your plan. Set to 0 for unlimited.")
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-end gap-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 flex-1 max-w-[200px]",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "max-file-size",
										className: "text-[13px] font-medium text-foreground",
										children: t("Size")
									}), /* @__PURE__ */ jsx(Input, {
										id: "max-file-size",
										type: "number",
										min: 0,
										step: "any",
										value: maximumFileSize,
										onChange: (e) => {
											const value = parseFloat(e.target.value);
											if (!isNaN(value) && value >= 0) setMaximumFileSize(value);
											else if (e.target.value === "") setMaximumFileSize(0);
										},
										max: maxFileSizeInCurrentUnit,
										placeholder: t("0 for unlimited"),
										disabled: updateMaximumFileSizeMutation.isPending
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2 flex-1 max-w-[200px]",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "file-size-unit",
										className: "text-[13px] font-medium text-foreground",
										children: t("Unit")
									}), /* @__PURE__ */ jsxs(Select, {
										value: fileSizeUnit,
										onValueChange: (value) => {
											const newUnit = value;
											setMaximumFileSize(fileSizeInBytes / {
												bytes: 1,
												KB: 1e3,
												MB: 1e3 * 1e3,
												GB: 1e3 * 1e3 * 1e3
											}[newUnit]);
											setFileSizeUnit(newUnit);
										},
										disabled: updateMaximumFileSizeMutation.isPending,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											id: "file-size-unit",
											children: /* @__PURE__ */ jsx(SelectValue, {})
										}), /* @__PURE__ */ jsxs(SelectContent, { children: [
											/* @__PURE__ */ jsx(SelectItem, {
												value: "bytes",
												children: t("Bytes")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "KB",
												children: "KB"
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "MB",
												children: "MB"
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "GB",
												children: "GB"
											})
										] })]
									})]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-2",
								children: fileSizeError ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-destructive",
										children: fileSizeError.message
									}), fileSizeError.showUpgrade && orgId && /* @__PURE__ */ jsx(Button, {
										variant: "link",
										size: "sm",
										className: "h-auto p-0 text-[12px] font-medium underline",
										onClick: () => {
											navigate({
												to: "/upgrade",
												search: { orgId }
											});
										},
										children: t("Upgrade")
									})]
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: bucket.maximumFileSize > 0 ? `${t("Current:")} ${formatBytes(bucket.maximumFileSize)}` : t("Unlimited")
								})
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !bucket || Math.abs(fileSizeInBytes - toByteCount(bucket.maximumFileSize)) < 1 || updateMaximumFileSizeMutation.isPending || fileSizeError !== null,
								onClick: handleMaximumFileSizeUpdate,
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Allowed file extensions")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Restrict file uploads to specific file extensions. Maximum of 100 extensions are allowed, each 64 characters long. Leave empty to allow all.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "allowed-extensions",
										className: "text-[13px] font-medium text-foreground",
										children: t("File extensions")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground mt-0.5 mb-2",
										children: t("Type and press Enter or comma to add extensions")
									}),
									/* @__PURE__ */ jsx("div", {
										className: "relative max-w-md",
										children: /* @__PURE__ */ jsxs("div", {
											className: cn("flex flex-wrap items-center gap-1.5 min-h-[36px] rounded-md border bg-transparent px-3 py-1.5 text-sm transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", updateAllowedExtensionsMutation.isPending || allowedFileExtensions.length >= 100 ? "opacity-50 cursor-not-allowed" : ""),
											children: [allowedFileExtensions.map((ext) => /* @__PURE__ */ jsxs(Badge, {
												variant: "secondary",
												className: "gap-1 h-6 text-[11px] px-1.5 py-0 bg-muted border-border",
												children: [ext, /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => handleRemoveExtension(ext),
													className: "ms-0.5 rounded-full hover:bg-muted/80 p-0.5",
													disabled: updateAllowedExtensionsMutation.isPending,
													children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
												})]
											}, ext)), /* @__PURE__ */ jsx("input", {
												id: "allowed-extensions",
												type: "text",
												value: extensionInput,
												onChange: (e) => setExtensionInput(e.target.value),
												onKeyDown: handleExtensionInputKeyDown,
												placeholder: allowedFileExtensions.length === 0 ? t("Enter extension (e.g., jpg)") : "",
												className: "flex-1 min-w-[120px] bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground",
												disabled: updateAllowedExtensionsMutation.isPending || allowedFileExtensions.length >= 100
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-2 mt-3",
										children: popularExtensions.map((ext) => /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											className: "h-8 text-[12px]",
											onClick: () => handleAddExtension(ext),
											disabled: updateAllowedExtensionsMutation.isPending || allowedFileExtensions.includes(ext) || allowedFileExtensions.length >= 100,
											children: [/* @__PURE__ */ jsx(Plus, { className: "h-3 w-3 me-1" }), ext]
										}, ext))
									})
								] })
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !bucket || arraysEqual(allowedFileExtensions, bucket.allowedFileExtensions || []) || updateAllowedExtensionsMutation.isPending,
								onClick: handleAllowedExtensionsUpdate,
								children: t("Update")
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-red-500/30 bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Delete bucket")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Permanently delete this bucket and all its files. This action cannot be undone.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-red-500/20" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
									children: /* @__PURE__ */ jsx(FolderOpen, { className: "h-5 w-5 text-muted-foreground" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[14px] font-medium text-foreground truncate",
										children: bucket.name
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Last updated:"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, {
												date: new Date(bucket.$updatedAt),
												showFormattedDate: true,
												className: "text-foreground"
											})
										]
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
							children: /* @__PURE__ */ jsxs(Dialog, {
								open: deleteDialogOpen,
								onOpenChange: setDeleteDialogOpen,
								children: [/* @__PURE__ */ jsx(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(Button, {
										variant: "destructive",
										size: "sm",
										className: "h-9 text-[13px]",
										children: t("Delete")
									})
								}), /* @__PURE__ */ jsxs(DialogContent, {
									className: "sm:max-w-md p-0",
									children: [
										/* @__PURE__ */ jsxs(DialogHeader, {
											className: "px-6 pt-6 text-start",
											children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete bucket") }), /* @__PURE__ */ jsxs(DialogDescription, {
												className: "text-[13px] mt-2",
												children: [
													t("Are you sure you want to delete"),
													" ",
													/* @__PURE__ */ jsx("strong", { children: bucket.name }),
													"?",
													" ",
													t("This will permanently delete the bucket and all its files. This action cannot be undone.")
												]
											})]
										}),
										/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
										/* @__PURE__ */ jsx("div", {
											className: "px-6 pb-4 pt-0",
											children: /* @__PURE__ */ jsx("div", {
												className: "space-y-4",
												children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "delete-confirmation",
													className: "text-[13px] font-medium text-foreground",
													children: t("Type the bucket name to confirm")
												}), /* @__PURE__ */ jsx(Input, {
													id: "delete-confirmation",
													value: deleteConfirmation,
													onChange: (e) => setDeleteConfirmation(e.target.value),
													placeholder: bucket.name,
													className: "mt-1.5"
												})] })
											})
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
											children: [/* @__PURE__ */ jsx(Button, {
												variant: "outline",
												size: "sm",
												className: "h-9 text-[13px]",
												onClick: () => {
													setDeleteDialogOpen(false);
													setDeleteConfirmation("");
												},
												disabled: deleteBucketMutation.isPending,
												children: t("Cancel")
											}), /* @__PURE__ */ jsx(Button, {
												variant: "destructive",
												size: "sm",
												className: "h-9 text-[13px]",
												disabled: deleteConfirmation !== bucket.name || deleteBucketMutation.isPending,
												onClick: () => {
													if (deleteConfirmation === bucket.name) deleteBucketMutation.mutate();
												},
												children: t("Delete")
											})]
										})
									]
								})]
							})
						})
					]
				})
			]
		})
	});
}
function BucketSecurity() {
	const t = useT();
	const { projectId, bucketId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const { data: bucket, isLoading: bucketLoading } = useBucket(projectId, bucketId);
	const [bucketPermissions, setBucketPermissions] = useState([]);
	const [fileSecurity, setFileSecurity] = useState(false);
	useEffect(() => {
		if (bucket) {
			setBucketPermissions(bucket.$permissions || []);
			setFileSecurity(bucket.fileSecurity);
		}
	}, [bucket]);
	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		const sortedA = [...a].sort();
		const sortedB = [...b].sort();
		return sortedA.every((val, idx) => val === sortedB[idx]);
	};
	const updateBucketPermissionsMutation = useMutation({
		mutationFn: async (permissions) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				permissions,
				enabled: bucket.enabled ?? void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Bucket permissions have been updated"));
			queryClient.invalidateQueries({ queryKey: Dependencies.BUCKET });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const updateFileSecurityMutation = useMutation({
		mutationFn: async (newFileSecurity) => {
			if (!projectId || !bucketId || !bucket) throw new Error("Project ID, Bucket ID, and Bucket are required");
			return await sdk.forProject(projectId).storage.updateBucket({
				bucketId,
				name: bucket.name,
				fileSecurity: newFileSecurity,
				enabled: bucket.enabled ?? void 0
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.BUCKET });
			toast.success(t("Security has been updated"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const handleBucketPermissionsUpdate = () => {
		if (!arraysEqual(bucketPermissions, bucket?.$permissions || [])) updateBucketPermissionsMutation.mutate(bucketPermissions);
	};
	if (bucketLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-muted-foreground",
			children: t("Loading...")
		})
	});
	if (!bucket) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-muted-foreground",
			children: t("Bucket not found")
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "w-full px-4 py-4 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Permissions")
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground mt-2",
							children: [
								t("Choose who can access your bucket and files."),
								" ",
								/* @__PURE__ */ jsx(DocsRouteLink, {
									className: "link-neutral",
									href: "/docs/permissions",
									children: t("Learn more")
								}),
								"."
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx(PermissionsEditor, {
							permissions: bucketPermissions,
							onPermissionsChange: setBucketPermissions,
							withCreate: true,
							projectId
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: arraysEqual(bucketPermissions, bucket.$permissions || []) || updateBucketPermissionsMutation.isPending,
							onClick: handleBucketPermissionsUpdate,
							children: t("Update")
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("File level security")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-between",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx(Switch, {
									id: "file-security",
									checked: fileSecurity,
									onCheckedChange: (checked) => setFileSecurity(checked),
									disabled: updateFileSecurityMutation.isPending
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "file-security",
									className: "text-[13px] text-foreground",
									children: t("File level security")
								})]
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 space-y-2",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground",
									children: [
										t("When file security is enabled, users need"),
										" ",
										/* @__PURE__ */ jsx("strong", { children: t("both bucket permissions and file permissions") }),
										" ",
										t("to access files. File permissions are an additional layer, not an alternative to bucket permissions.")
									]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground",
									children: [
										/* @__PURE__ */ jsx("strong", { children: t("Upload operations") }),
										" ",
										t("always require bucket-level permissions, regardless of file security settings.")
									]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-[13px] text-muted-foreground",
									children: [
										t("If file security is disabled, users can access files"),
										" ",
										/* @__PURE__ */ jsx("strong", { children: t("only if they have bucket permissions") }),
										".",
										" ",
										t("File permissions will be ignored.")
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: fileSecurity === bucket.fileSecurity || updateFileSecurityMutation.isPending,
							onClick: () => {
								if (fileSecurity !== bucket.fileSecurity) updateFileSecurityMutation.mutate(fileSecurity);
							},
							children: t("Update")
						})
					})
				]
			})]
		})
	});
}
var TERMINAL_STATUSES = [
	"completed",
	"failed",
	"cancelled"
];
function useUploadQueue(projectId, bucketId, options) {
	const { onUploadComplete } = options ?? {};
	const [uploads, setUploads] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (!projectId || !bucketId) {
			setUploads([]);
			setIsLoading(false);
			return;
		}
		let mounted = true;
		async function loadUploads() {
			try {
				const items = await uploadManager.getBucketUploads(projectId, bucketId);
				if (mounted) {
					setUploads(items);
					setIsLoading(false);
				}
			} catch (error) {
				console.error("Failed to load uploads:", error);
				if (mounted) setIsLoading(false);
			}
		}
		loadUploads();
		const unsubscribes = [];
		const setupListeners = async () => {
			(await uploadManager.getBucketUploads(projectId, bucketId)).forEach((item) => {
				const unsubscribe = uploadManager.onProgress(item.id, (progress) => {
					if (mounted) setUploads((prev) => prev.map((u) => u.id === progress.id ? {
						...u,
						status: progress.status,
						progress: progress.progress,
						error: progress.error
					} : u));
				});
				unsubscribes.push(unsubscribe);
			});
		};
		setupListeners();
		let interval = null;
		const pollIfNeeded = async () => {
			if (!mounted) return;
			const items = await uploadManager.getBucketUploads(projectId, bucketId);
			if (!mounted) return;
			const hasActive = items.some((u) => u.status === "pending" || u.status === "uploading");
			if (hasActive && !interval) interval = setInterval(() => {
				if (mounted) loadUploads();
			}, 5e3);
			else if (!hasActive && interval) {
				clearInterval(interval);
				interval = null;
			}
		};
		const checkInterval = setInterval(() => {
			pollIfNeeded();
		}, 1e4);
		pollIfNeeded();
		return () => {
			mounted = false;
			if (interval) clearInterval(interval);
			clearInterval(checkInterval);
			unsubscribes.forEach((unsubscribe) => unsubscribe());
		};
	}, [projectId, bucketId]);
	const queueUpload = useCallback(async (file, fileId, permissions) => {
		if (!projectId || !bucketId) throw new Error("Project ID and Bucket ID are required");
		const uploadId = await uploadManager.queueUpload(projectId, bucketId, file, fileId, permissions);
		const unsubscribe = uploadManager.onProgress(uploadId, (progress) => {
			setUploads((prev) => {
				if (prev.find((u) => u.id === uploadId)) return prev.map((u) => u.id === uploadId ? {
					...u,
					status: progress.status,
					progress: progress.progress,
					error: progress.error
				} : u);
				else return [...prev, {
					id: uploadId,
					projectId,
					bucketId,
					fileId: fileId || "",
					fileName: file.name,
					fileSize: file.size,
					fileType: file.type,
					fileData: /* @__PURE__ */ new ArrayBuffer(0),
					permissions,
					status: progress.status,
					progress: progress.progress,
					error: progress.error,
					createdAt: Date.now(),
					updatedAt: Date.now()
				}];
			});
			if (TERMINAL_STATUSES.includes(progress.status)) {
				onUploadComplete?.(projectId, bucketId);
				setTimeout(() => unsubscribe(), 0);
			}
		});
		setTimeout(async () => {
			const item = await uploadManager.getUploadStatus(uploadId);
			if (item) setUploads((prev) => {
				if (!prev.find((u) => u.id === uploadId)) return [...prev, item];
				return prev;
			});
		}, 100);
		return uploadId;
	}, [
		projectId,
		bucketId,
		onUploadComplete
	]);
	const cancelUpload = useCallback(async (uploadId) => {
		await uploadManager.cancelUpload(uploadId);
		setUploads((prev) => prev.filter((u) => u.id !== uploadId));
	}, []);
	return {
		uploads,
		activeUploads: uploads.filter((u) => u.status === "pending" || u.status === "uploading"),
		isLoading,
		queueUpload,
		cancelUpload
	};
}
function useFileActions(projectId, bucketId, file) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useMutation({
		mutationFn: async () => {
			await sdk.forProject(projectId).storage.deleteFile({
				bucketId,
				fileId: file.id
			});
		},
		onSuccess: async () => {
			removeCachedFile(queryClient, projectId, bucketId, file.id);
			await queryClient.refetchQueries({ queryKey: Dependencies.FILES });
			toast.success(t("File deleted"));
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId
				},
				search: (prev) => {
					if (prev.file !== file.id) return prev;
					const next = { ...prev };
					delete next.file;
					delete next.filePanel;
					return next;
				},
				replace: true
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete file"));
		}
	});
	const navigateToTab = (tab) => {
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const next = {
					...prev,
					file: file.id
				};
				if (tab === "overview") delete next.filePanel;
				else next.filePanel = tab;
				return next;
			}
		});
	};
	const fileHref = buildConsoleUrl(`/projects/${projectId}/storage/${bucketId}?file=${encodeURIComponent(file.id)}`);
	return {
		hasName: !!file.name,
		fileHref,
		navigateToTab,
		handleDeleteClick: () => openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true)),
		deleteDialogOpen,
		setDeleteDialogOpen,
		deleteMutation
	};
}
function FileDeleteDialog({ open, onOpenChange, deleteMutation }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete file") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this file? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: deleteMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					onClick: () => {
						closeDialogBeforeOverlayUnmount(() => onOpenChange(false));
						deleteMutation.mutate();
					},
					disabled: deleteMutation.isPending,
					children: t("Delete")
				})]
			})]
		})
	});
}
function FileContextMenu({ projectId, bucketId, file, children }) {
	const { hasName, fileHref, navigateToTab, handleDeleteClick, deleteDialogOpen, setDeleteDialogOpen, deleteMutation } = useFileActions(projectId, bucketId, file);
	const t = useT();
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
				onSelect: () => navigateToTab("permissions"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Shield }), t("Permissions")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("tokens"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: KeyRound }), t("Tokens")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", file.id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", file.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", fileHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchFile(projectId, bucketId, file.id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(fileHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(fileHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] }), /* @__PURE__ */ jsx(FileDeleteDialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		deleteMutation
	})] });
}
function FileRowActionsMenu({ projectId, bucketId, file }) {
	const { hasName, fileHref, navigateToTab, handleDeleteClick, deleteDialogOpen, setDeleteDialogOpen, deleteMutation } = useFileActions(projectId, bucketId, file);
	const t = useT();
	if (file.pending) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { onClick: (e) => e.stopPropagation() })
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-56",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					navigateToTab("overview");
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: LayoutList,
					children: t("Overview")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					navigateToTab("permissions");
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Shield,
					children: t("Permissions")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					navigateToTab("tokens");
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: KeyRound,
					children: t("Tokens")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsxs(DropdownMenuSubTrigger, { children: [/* @__PURE__ */ jsx(MenuItemIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(DropdownMenuSubContent, { children: [
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					onClick: (e) => {
						e.stopPropagation();
						copyToClipboard("ID", file.id);
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: Copy,
						children: t("Copy ID")
					})
				}),
				hasName && /* @__PURE__ */ jsx(DropdownMenuItem, {
					onClick: (e) => {
						e.stopPropagation();
						copyToClipboard("Name", file.name);
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: Copy,
						children: t("Copy name")
					})
				}),
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					onClick: (e) => {
						e.stopPropagation();
						copyToClipboard("Link", fileHref);
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: Link2,
						children: t("Copy link")
					})
				}),
				/* @__PURE__ */ jsx(DropdownMenuItem, {
					onClick: (e) => {
						e.stopPropagation();
						copyResourceAsJson(() => fetchFile(projectId, bucketId, file.id));
					},
					children: /* @__PURE__ */ jsx(MenuItemContent, {
						icon: FileJson,
						children: t("Copy as JSON")
					})
				})
			] })] }),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					openInNewTab(fileHref);
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: ExternalLink,
					children: t("Open in new tab")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					openInNewWindow(fileHref);
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Square,
					children: t("Open in new window")
				})
			}),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: (e) => {
					e.stopPropagation();
					handleDeleteClick();
				},
				children: /* @__PURE__ */ jsx(MenuItemContent, {
					icon: Trash2,
					children: t("Delete")
				})
			})
		]
	})] }), /* @__PURE__ */ jsx(FileDeleteDialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		deleteMutation
	})] });
}
function maskSecret(secret) {
	if (!secret) return "•••••";
	if (secret.length <= 8) return `${secret[0]}${"•".repeat(4)}${secret[secret.length - 1]}`;
	return `${secret.slice(0, 4)}${"•".repeat(8)}${secret.slice(-3)}`;
}
var FILE_TOKEN_EXPIRY_OPTIONS = [
	{
		value: "never",
		label: "Never"
	},
	{
		value: "1h",
		label: "1 hour"
	},
	{
		value: "24h",
		label: "24 hours"
	},
	{
		value: "7d",
		label: "7 days"
	},
	{
		value: "30d",
		label: "30 days"
	},
	{
		value: "custom",
		label: "Custom"
	}
];
function getFileTokenCreateExpirationIso(option, customIso) {
	switch (option) {
		case "never": return;
		case "1h": return new Date(Date.now() + 3600 * 1e3).toISOString();
		case "24h": return new Date(Date.now() + 1440 * 60 * 1e3).toISOString();
		case "7d": return new Date(Date.now() + 10080 * 60 * 1e3).toISOString();
		case "30d": return new Date(Date.now() + 720 * 60 * 60 * 1e3).toISOString();
		case "custom": {
			const trimmed = customIso.trim();
			if (!trimmed) return void 0;
			const d = new Date(trimmed);
			if (Number.isNaN(d.getTime())) return void 0;
			return d.toISOString();
		}
	}
}
function FileSecurity({ projectId: projectIdProp, bucketId: bucketIdProp, fileId: fileIdProp, variant = "page", panelSection = "all" } = {}) {
	const params = useParams({ strict: false });
	const t = useT();
	const projectId = projectIdProp ?? params.projectId;
	const bucketId = bucketIdProp ?? params.bucketId;
	const fileId = fileIdProp ?? params.fileId;
	const cardlessPanel = variant === "panel" && panelSection !== "all";
	const queryClient = useQueryClient();
	const [filePermissions, setFilePermissions] = useState([]);
	const [createTokenDialogOpen, setCreateTokenDialogOpen] = useState(false);
	const [tokenExpiration, setTokenExpiration] = useState("");
	const [tokenExpiryOption, setTokenExpiryOption] = useState("never");
	const [viewingTokenId, setViewingTokenId] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const [deleteTokenDialogOpen, setDeleteTokenDialogOpen] = useState(false);
	const [tokenToDelete, setTokenToDelete] = useState(null);
	const [copyTokenDialogOpen, setCopyTokenDialogOpen] = useState(false);
	const [tokenForCopy, setTokenForCopy] = useState(null);
	const [copyUrlMode, setCopyUrlMode] = useState("preview");
	const [tokensPage, setTokensPage] = useState(1);
	const [tokensPageSize, setTokensPageSize] = useState(25);
	const { data: file, isLoading: fileLoading } = useFile(projectId, bucketId, fileId);
	const { data: tokensData, isLoading: tokensLoading } = useFileTokens(projectId, bucketId, fileId, tokensPage - 1, tokensPageSize);
	const { project: currentProject } = useProject(projectId);
	const tokens = tokensData?.tokens || [];
	const tokensTotal = tokensData?.total || 0;
	const projectEndpoint = useMemo(() => getApiEndpoint(currentProject?.region), [currentProject?.region]);
	useEffect(() => {
		if (file && fileId && file.$id === fileId) setFilePermissions(file.$permissions || []);
		else if (!file) setFilePermissions([]);
	}, [file, fileId]);
	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		const sortedA = [...a].sort();
		const sortedB = [...b].sort();
		return sortedA.every((val, idx) => val === sortedB[idx]);
	};
	const updateFilePermissionsMutation = useMutation({
		mutationFn: async (permissions) => {
			if (!projectId || !bucketId || !fileId) throw new Error("Project ID, Bucket ID, and File ID are required");
			return await sdk.forProject(projectId).storage.updateFile({
				bucketId,
				fileId,
				permissions
			});
		},
		onSuccess: () => {
			toast.success(t("File permissions have been updated"));
			queryClient.invalidateQueries({ queryKey: Dependencies.FILE });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const handleFilePermissionsUpdate = () => {
		if (!arraysEqual(filePermissions, file?.$permissions || [])) updateFilePermissionsMutation.mutate(filePermissions);
	};
	const createTokenMutation = useMutation({
		mutationFn: async (expiration) => {
			if (!projectId || !bucketId || !fileId) throw new Error("Project ID, Bucket ID, and File ID are required");
			return await sdk.forProject(projectId).tokens.createFileToken({
				bucketId,
				fileId,
				expire: expiration || void 0
			});
		},
		onSuccess: () => {
			toast.success(t("Token has been created"));
			queryClient.invalidateQueries({ queryKey: Dependencies.FILE_TOKENS });
			setCreateTokenDialogOpen(false);
			setTokenExpiration("");
			setTokenExpiryOption("never");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const deleteTokenMutation = useMutation({
		mutationFn: async (tokenId) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).tokens.delete({ tokenId });
		},
		onSuccess: () => {
			toast.success(t("Token has been deleted"));
			queryClient.invalidateQueries({ queryKey: Dependencies.FILE_TOKENS });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const handleCreateToken = () => {
		const expiration = getFileTokenCreateExpirationIso(tokenExpiryOption, tokenExpiration);
		if (tokenExpiryOption === "custom" && tokenExpiration.trim() && expiration === void 0) {
			toast.error(t("Invalid expiration date"));
			return;
		}
		createTokenMutation.mutate(expiration);
	};
	const createTokenExpiryInvalid = tokenExpiryOption === "custom" && (!tokenExpiration.trim() || Number.isNaN(new Date(tokenExpiration).getTime()));
	const copyToClipboard$1 = (text, field) => {
		navigator.clipboard.writeText(text);
		if (field) {
			setCopiedField(field);
			setTimeout(() => setCopiedField(null), 2e3);
		} else toast.success(t("Copied to clipboard"));
	};
	const viewingToken = tokens.find((item) => item.$id === viewingTokenId);
	const getFileUrl = (mode, tokenSecret) => {
		if (!projectId || !bucketId || !fileId) return "";
		const baseUrl = `${projectEndpoint}/storage/buckets/${bucketId}/files/${fileId}`;
		const qs = new URLSearchParams({
			project: projectId,
			token: tokenSecret
		}).toString();
		if (mode === "preview") return `${baseUrl}/preview?${qs}`;
		if (mode === "view") return `${baseUrl}/view?${qs}`;
		return `${baseUrl}/download?${qs}`;
	};
	const handleOpenCopyDialog = (token) => {
		setTokenForCopy(token);
		setCopyTokenDialogOpen(true);
		setCopyUrlMode("preview");
	};
	if (fileLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (!file) return /* @__PURE__ */ jsx("div", {
		className: cn("py-12 text-center", !cardlessPanel && "rounded-lg border border-border bg-card"),
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("File not found")
		})
	});
	const cardPad = variant === "panel" ? "px-3 py-2" : "px-6 py-4";
	const tokenRowPad = cardlessPanel ? "px-3 py-3.5" : variant === "panel" ? "px-3 py-3" : "px-4 py-3.5";
	const panelTone = variant === "panel" || cardlessPanel;
	const showPermissions = panelSection === "all" || panelSection === "permissions";
	const showTokens = panelSection === "all" || panelSection === "tokens";
	function renderPermissionsDescription(opts) {
		const afterHeading = opts?.afterHeading ?? false;
		return /* @__PURE__ */ jsxs("p", {
			className: cn("text-muted-foreground", variant === "panel" || cardlessPanel ? "text-[12px] leading-snug" : "text-[13px]", afterHeading && (variant === "panel" || cardlessPanel ? "mt-1" : "mt-2")),
			children: [
				t("Choose who can access this file."),
				" ",
				/* @__PURE__ */ jsx(DocsRouteLink, {
					className: "link-neutral",
					href: "/docs/permissions",
					children: t("Learn more")
				}),
				"."
			]
		});
	}
	const permissionsIntroWithTitle = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", {
		className: cn("font-semibold text-foreground", variant === "panel" || cardlessPanel ? "text-[14px]" : "text-[15px]"),
		children: t("Permissions")
	}), renderPermissionsDescription({ afterHeading: true })] });
	function renderTokensDescription(opts) {
		const afterHeading = opts?.afterHeading ?? false;
		return /* @__PURE__ */ jsxs("p", {
			className: cn("text-muted-foreground", variant === "panel" || cardlessPanel ? "text-[12px] leading-snug" : "text-[13px]", afterHeading && "mt-2"),
			children: [
				t("File tokens allow you to share files publicly with anyone without configuring bucket or file permissions. They work around browser restrictions on third-party cookies and can be set to expire on a specific date or work indefinitely."),
				" ",
				/* @__PURE__ */ jsx(DocsRouteLink, {
					className: "link-neutral",
					href: "/docs/products/storage/file-tokens",
					children: t("Learn more")
				}),
				"."
			]
		});
	}
	const tokensIntroCardless = /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [renderTokensDescription(), /* @__PURE__ */ jsxs(Button, {
			size: "sm",
			className: "h-8 w-fit text-[12px]",
			onClick: () => setCreateTokenDialogOpen(true),
			children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5 me-1.5" }), t("Create token")]
		})]
	});
	const tokensIntroWithTitle = /* @__PURE__ */ jsxs("div", {
		className: cn("flex gap-3", variant === "page" ? "flex-row items-center justify-between" : "flex-col items-stretch sm:flex-row sm:items-start sm:justify-between"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn(variant === "panel" && "min-w-0 flex-1"),
			children: [/* @__PURE__ */ jsx("h3", {
				className: cn("font-semibold text-foreground", variant === "panel" || cardlessPanel ? "text-[14px]" : "text-[15px]"),
				children: t("Tokens")
			}), renderTokensDescription({ afterHeading: true })]
		}), /* @__PURE__ */ jsxs(Button, {
			size: "sm",
			className: variant === "panel" || cardlessPanel ? "h-8 shrink-0 text-[12px]" : "h-9 text-[13px]",
			onClick: () => setCreateTokenDialogOpen(true),
			children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5 me-1.5" }), t("Create token")]
		})]
	});
	const permissionsEditorBlock = /* @__PURE__ */ jsx(PermissionsEditor, {
		permissions: filePermissions,
		onPermissionsChange: setFilePermissions,
		withCreate: false,
		projectId,
		compact: variant === "panel"
	});
	const updatePermissionsButton = /* @__PURE__ */ jsx(Button, {
		size: "sm",
		className: variant === "panel" || cardlessPanel ? "h-8 text-[12px]" : "h-9 text-[13px]",
		disabled: arraysEqual(filePermissions, file.$permissions || []) || updateFilePermissionsMutation.isPending,
		onClick: handleFilePermissionsUpdate,
		children: t("Update")
	});
	function renderTokenRow(token) {
		const now = /* @__PURE__ */ new Date();
		const expireDate = token.expire ? new Date(token.expire) : null;
		const isExpired = expireDate && expireDate < now;
		const isExpiringSoon = expireDate && !isExpired && expireDate.getTime() - now.getTime() <= 10080 * 60 * 1e3;
		return /* @__PURE__ */ jsxs("div", {
			className: cn("flex flex-col gap-3 transition-colors hover:bg-muted/30", tokenRowPad),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "min-w-0 flex-1",
					children: token.secret ? /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsx("code", {
								className: "max-w-[min(100%,220px)] truncate rounded bg-muted px-2 py-0.5 font-mono text-[12px] text-muted-foreground sm:max-w-md",
								children: maskSecret(token.secret)
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setViewingTokenId(token.$id),
								className: "shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								title: t("View token"),
								children: /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" })
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => copyToClipboard$1(token.secret, `token-secret-${token.$id}`),
								className: "shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								title: t("Copy secret"),
								children: copiedField === `token-secret-${token.$id}` ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
							})
						]
					}) : null
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-0.5",
					children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "h-8 w-8 text-muted-foreground",
							"aria-label": t("Copy URL"),
							onClick: () => handleOpenCopyDialog(token),
							children: /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Copy URL") })] }), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, { "aria-label": t("Token actions") })
					}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
						align: "end",
						children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
							onClick: () => copyToClipboard$1(token.$id, `token-id-${token.$id}`),
							children: /* @__PURE__ */ jsx(MenuItemContent, {
								icon: copiedField === `token-id-${token.$id}` ? Check : Copy,
								children: copiedField === `token-id-${token.$id}` ? t("Copied") : t("Copy ID")
							})
						}), /* @__PURE__ */ jsx(DropdownMenuItem, {
							onClick: () => {
								setTokenToDelete(token.$id);
								setDeleteTokenDialogOpen(true);
							},
							children: /* @__PURE__ */ jsx(MenuItemContent, {
								icon: Trash2,
								children: t("Delete")
							})
						})]
					})] })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex flex-wrap items-baseline gap-x-2 gap-y-1.5 py-1.5 leading-relaxed text-muted-foreground sm:gap-x-2.5", panelTone ? "text-[11px]" : "text-[12px]"),
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex shrink-0 items-center gap-1 whitespace-nowrap",
							children: [/* @__PURE__ */ jsx("span", { children: t("Created") }), /* @__PURE__ */ jsx(DateTooltip, {
								date: token.$createdAt,
								className: cn("text-muted-foreground", panelTone ? "text-[11px]" : "text-[12px]")
							})]
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "shrink-0 text-muted-foreground/40",
							children: "·"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex shrink-0 flex-nowrap items-center gap-1 whitespace-nowrap",
							children: [/* @__PURE__ */ jsx("span", { children: t("Expires") }), token.expire ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DateTooltip, {
								date: token.expire,
								className: cn("text-muted-foreground", panelTone ? "text-[11px]" : "text-[12px]")
							}), isExpired ? /* @__PURE__ */ jsx(Badge, {
								variant: "error",
								className: "text-[10px] shrink-0",
								children: t("Expired")
							}) : isExpiringSoon ? /* @__PURE__ */ jsx(Badge, {
								variant: "warning",
								className: "text-[10px] shrink-0",
								children: t("Expires soon")
							}) : null] }) : /* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: t("Never")
							})]
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "shrink-0 text-muted-foreground/40",
							children: "·"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex shrink-0 items-center gap-1 whitespace-nowrap",
							children: [/* @__PURE__ */ jsx("span", { children: t("Accessed") }), token.accessedAt ? /* @__PURE__ */ jsx(DateTooltip, {
								date: token.accessedAt,
								className: cn("text-muted-foreground", panelTone ? "text-[11px]" : "text-[12px]")
							}) : /* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: t("Never")
							})]
						})
					]
				})
			})]
		}, token.$id);
	}
	const tokensListSection = /* @__PURE__ */ jsx(Fragment, { children: tokensLoading ? /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
	}) : tokens.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [cardlessPanel ? /* @__PURE__ */ jsx("div", {
		className: "divide-y divide-border",
		children: tokens.map(renderTokenRow)
	}) : /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-lg border border-border",
		children: /* @__PURE__ */ jsx("div", {
			className: "divide-y divide-border",
			children: tokens.map(renderTokenRow)
		})
	}), tokensTotal > 0 ? /* @__PURE__ */ jsx("div", {
		className: cardlessPanel ? "mt-4" : "mt-2",
		children: /* @__PURE__ */ jsx(Pagination, {
			currentPage: tokensPage,
			totalItems: tokensTotal,
			pageSize: tokensPageSize,
			pageSizeOptions: [
				10,
				25,
				50,
				100
			],
			onPageChange: setTokensPage,
			onPageSizeChange: (size) => {
				setTokensPageSize(size);
				setTokensPage(1);
			},
			itemLabel: t("tokens"),
			className: "py-0"
		})
	}) : null] }) : /* @__PURE__ */ jsx("div", {
		className: cn("py-8 text-center", !cardlessPanel && "rounded-lg border border-border bg-card"),
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("No tokens found. Create a token to share this file publicly.")
		})
	}) });
	return /* @__PURE__ */ jsxs("div", {
		className: cn("w-full", variant === "page" && "px-4 py-4 sm:px-6"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn(cardlessPanel ? "space-y-4" : variant === "panel" ? "space-y-3" : "space-y-6"),
				children: [showPermissions ? cardlessPanel ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsx("div", { children: renderPermissionsDescription() }),
						/* @__PURE__ */ jsx("div", {
							className: "border-t border-border pt-4",
							children: permissionsEditorBlock
						}),
						/* @__PURE__ */ jsx("div", {
							className: "border-t border-border pt-4",
							children: updatePermissionsButton
						})
					]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: cardPad,
							children: permissionsIntroWithTitle
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: cardPad,
							children: permissionsEditorBlock
						}),
						/* @__PURE__ */ jsx("div", {
							className: cn(cardPad, "border-t border-border bg-muted/30"),
							children: updatePermissionsButton
						})
					]
				}) : null, showTokens ? cardlessPanel ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [tokensIntroCardless, /* @__PURE__ */ jsx("div", {
						className: "border-t border-border pt-4",
						children: tokensListSection
					})]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: cardPad,
							children: tokensIntroWithTitle
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: cardPad,
							children: tokensListSection
						})
					]
				}) : null]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: createTokenDialogOpen,
				onOpenChange: (open) => {
					setCreateTokenDialogOpen(open);
					if (!open) {
						setTokenExpiration("");
						setTokenExpiryOption("never");
					}
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create file token") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Create a token to share this file publicly. Choose when the token should expire.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-0",
							children: /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx(Label, {
											className: "text-[13px] font-medium text-foreground",
											children: t("Expiration")
										}),
										/* @__PURE__ */ jsx(RadioGroup, {
											value: tokenExpiryOption,
											onValueChange: (value) => {
												const next = value;
												setTokenExpiryOption(next);
												if (next === "custom" && !tokenExpiration.trim()) setTokenExpiration(new Date(Date.now() + 1440 * 60 * 1e3).toISOString());
											},
											disabled: createTokenMutation.isPending,
											className: "grid grid-cols-2 gap-3",
											children: FILE_TOKEN_EXPIRY_OPTIONS.map((option) => {
												const isSelected = tokenExpiryOption === option.value;
												return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(RadioGroupItem, {
													value: option.value,
													id: `file-token-expire-${option.value}`,
													className: "peer sr-only"
												}), /* @__PURE__ */ jsx(Label, {
													htmlFor: `file-token-expire-${option.value}`,
													className: cn("flex cursor-pointer items-center justify-center rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-all", "hover:border-primary/50 hover:bg-accent/50", isSelected && "border-primary bg-accent", createTokenMutation.isPending && "cursor-not-allowed opacity-50"),
													children: t(option.label)
												})] }, option.value);
											})
										}),
										tokenExpiryOption === "custom" && /* @__PURE__ */ jsxs("div", {
											className: "pt-2",
											children: [
												/* @__PURE__ */ jsx(Label, {
													htmlFor: "file-token-expiration-custom",
													className: "text-[12px] font-medium text-muted-foreground",
													children: t("Date and time")
												}),
												/* @__PURE__ */ jsx(DateTimePicker, {
													id: "file-token-expiration-custom",
													value: tokenExpiration || null,
													onChange: (value) => setTokenExpiration(value ?? ""),
													disabled: createTokenMutation.isPending,
													clearable: true,
													className: cn("mt-1.5", createTokenExpiryInvalid && "border-destructive")
												}),
												createTokenExpiryInvalid && /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-destructive mt-1",
													children: t("Enter a valid date and time")
												})
											]
										})
									]
								})
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => {
									setCreateTokenDialogOpen(false);
									setTokenExpiration("");
									setTokenExpiryOption("never");
								},
								disabled: createTokenMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								onClick: handleCreateToken,
								disabled: createTokenMutation.isPending || createTokenExpiryInvalid,
								children: t("Create token")
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: viewingTokenId !== null,
				onOpenChange: (open) => !open && setViewingTokenId(null),
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-[600px] p-0",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("File Token") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Copy the full token below. Keep it secure and never share it publicly.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-sm font-medium text-foreground",
									children: t("Token")
								}), /* @__PURE__ */ jsx("textarea", {
									readOnly: true,
									value: viewingToken?.secret || "",
									className: "w-full min-h-[100px] rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
									onClick: (e) => e.target.select()
								})]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setViewingTokenId(null),
								children: t("Close")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => {
									if (viewingToken?.secret) copyToClipboard$1(viewingToken.secret, "tokenModal");
								},
								className: "gap-2",
								children: copiedField === "tokenModal" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }), t("Copied")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }), t("Copy")] })
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteTokenDialogOpen,
				onOpenChange: (open) => {
					setDeleteTokenDialogOpen(open);
					if (!open) setTokenToDelete(null);
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete token") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Are you sure you want to delete this token? This action cannot be undone.")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => {
								setDeleteTokenDialogOpen(false);
								setTokenToDelete(null);
							},
							disabled: deleteTokenMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							onClick: () => {
								if (tokenToDelete) deleteTokenMutation.mutate(tokenToDelete, { onSuccess: () => {
									setDeleteTokenDialogOpen(false);
									setTokenToDelete(null);
								} });
							},
							disabled: deleteTokenMutation.isPending,
							children: t("Delete")
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: copyTokenDialogOpen,
				onOpenChange: (open) => {
					setCopyTokenDialogOpen(open);
					if (!open) setTokenForCopy(null);
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "sm:max-w-[600px] p-0 max-h-[90dvh] overflow-hidden flex flex-col",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start shrink-0",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Copy File URL") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Use the token-based URL below to access this file securely.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-0 overflow-y-auto flex-1 min-h-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-2 flex-wrap",
											children: [/* @__PURE__ */ jsx(Label, {
												className: "text-sm font-medium text-foreground",
												children: t("URL")
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 flex-shrink-0",
												children: [
													/* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														onClick: () => {
															if (tokenForCopy?.secret) {
																setCopyUrlMode("preview");
																copyToClipboard$1(getFileUrl("preview", tokenForCopy.secret), "copyUrl");
															}
														},
														className: "h-7 text-[11px]",
														children: copiedField === "copyUrl" && copyUrlMode === "preview" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 me-1 text-emerald-500" }), t("Copied")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 me-1" }), t("Preview")] })
													}),
													/* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														onClick: () => {
															if (tokenForCopy?.secret) {
																setCopyUrlMode("view");
																copyToClipboard$1(getFileUrl("view", tokenForCopy.secret), "copyUrl");
															}
														},
														className: "h-7 text-[11px]",
														children: copiedField === "copyUrl" && copyUrlMode === "view" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 me-1 text-emerald-500" }), t("Copied")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 me-1" }), t("View")] })
													}),
													/* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														onClick: () => {
															if (tokenForCopy?.secret) {
																setCopyUrlMode("download");
																copyToClipboard$1(getFileUrl("download", tokenForCopy.secret), "copyUrl");
															}
														},
														className: "h-7 text-[11px]",
														children: copiedField === "copyUrl" && copyUrlMode === "download" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 me-1 text-emerald-500" }), t("Copied")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 me-1" }), t("Download")] })
													})
												]
											})]
										}),
										/* @__PURE__ */ jsx(Textarea, {
											readOnly: true,
											value: tokenForCopy?.secret ? getFileUrl(copyUrlMode, tokenForCopy.secret) : "",
											className: "font-mono text-[12px] min-h-[80px] resize-none break-all",
											onClick: (e) => e.target.select()
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-[11px] text-muted-foreground",
											children: [
												copyUrlMode === "preview" && t("Apply transformations or filters. Good for thumbnails or previews."),
												copyUrlMode === "view" && t("Display the file in the browser. Good for images and documents."),
												copyUrlMode === "download" && t("Download the file directly. Good for files that need to be saved.")
											]
										})
									]
								}), tokenForCopy && !tokenForCopy.expire && /* @__PURE__ */ jsxs(Alert, {
									variant: "destructive",
									className: "bg-destructive/10 border-destructive/20",
									children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-destructive" }), /* @__PURE__ */ jsxs(AlertDescription, {
										className: "text-[12px] text-destructive",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-semibold",
												children: t("No expiration date.")
											}),
											" ",
											t("This token doesn't expire. Be cautious when sharing links.")
										]
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end shrink-0",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => {
									setCopyTokenDialogOpen(false);
									setTokenForCopy(null);
								},
								children: t("Close")
							})
						})
					]
				})
			})
		]
	});
}
function getStorageInspectorPreviewBaseWidthPx() {
	if (typeof window === "undefined") return 960;
	return Math.min(1600, Math.max(720, Math.round(540 * window.devicePixelRatio)));
}
function getStorageInspectorPreviewWidthFromBasePx(baseWidthPx, originalSizeBytes) {
	const bytes = originalSizeBytes ?? 0;
	if (bytes > 0 && bytes < 12 * 1024) return Math.min(baseWidthPx, 320);
	if (bytes > 0 && bytes < 96 * 1024) return Math.min(baseWidthPx, 640);
	return baseWidthPx;
}
function getStorageInspectorPreviewRequestWidthPx(originalSizeBytes) {
	return getStorageInspectorPreviewWidthFromBasePx(getStorageInspectorPreviewBaseWidthPx(), originalSizeBytes);
}
function buildAdminStorageInspectorPreviewUrl(projectId, bucketId, fileId, options) {
	const width = options.initialPreviewRequestWidthPx != null ? Math.min(4e3, Math.max(1, Math.round(options.initialPreviewRequestWidthPx))) : getStorageInspectorPreviewRequestWidthPx(options.originalSizeBytes);
	const raw = sdk.forProject(projectId).storage.getFilePreview({
		bucketId,
		fileId,
		width,
		output: options.preferAvif ? ImageFormat.Avif : void 0
	});
	return raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
}
Object.values(ImageGravity);
const TRANSFORM_IMAGE_GRAVITY_GRID_ROWS = [
	[
		ImageGravity.Topleft,
		ImageGravity.Top,
		ImageGravity.Topright
	],
	[
		ImageGravity.Left,
		ImageGravity.Center,
		ImageGravity.Right
	],
	[
		ImageGravity.Bottomleft,
		ImageGravity.Bottom,
		ImageGravity.Bottomright
	]
];
var widthNullable = z.union([z.number().min(64).max(4e3), z.null()]);
var heightNullable = z.union([z.number().min(1).max(4e3), z.null()]);
var transformJsonSchema = z.object({
	width: widthNullable.optional(),
	height: heightNullable.optional(),
	gravity: z.nativeEnum(ImageGravity).optional(),
	quality: z.number().min(0).max(100).optional(),
	borderWidth: z.number().min(0).max(100).optional(),
	borderColor: z.string().max(12).optional(),
	borderRadius: z.number().min(0).max(4e3).optional(),
	opacity: z.number().min(0).max(1).optional(),
	rotation: z.number().min(-360).max(360).optional(),
	background: z.string().max(12).optional(),
	output: z.nativeEnum(ImageFormat).nullable().optional()
});
function gravityToObjectPosition(g) {
	const key = g;
	return {
		center: "50% 50%",
		"top-left": "0% 0%",
		top: "50% 0%",
		"top-right": "100% 0%",
		left: "0% 50%",
		right: "100% 50%",
		"bottom-left": "0% 100%",
		bottom: "50% 100%",
		"bottom-right": "100% 100%"
	}[key] ?? "50% 50%";
}
function computeImageTransformDisplayLayout(nat, state, maxDisplayW = 1280, maxDisplayH = 720) {
	const logicalW = Math.max(64, state.width ?? Math.min(480, nat.w));
	const implicitH = Math.round(logicalW * nat.h / Math.max(1, nat.w));
	const logicalH = Math.max(1, state.height ?? implicitH);
	const fit = Math.min(1, maxDisplayW / logicalW, maxDisplayH / logicalH);
	let displayW = logicalW * fit;
	let displayH = logicalH * fit;
	const rad = state.rotation * Math.PI / 180;
	const c = Math.abs(Math.cos(rad));
	const s = Math.abs(Math.sin(rad));
	let aabbW = displayW * c + displayH * s;
	let aabbH = displayW * s + displayH * c;
	if (aabbW > 0 && aabbH > 0) {
		const fitR = Math.min(1, maxDisplayW / aabbW, maxDisplayH / aabbH);
		displayW *= fitR;
		displayH *= fitR;
		aabbW *= fitR;
		aabbH *= fitR;
	}
	return {
		logicalW,
		logicalH,
		displayW,
		displayH,
		aabbW,
		aabbH
	};
}
function defaultImageTransformState(opts) {
	return {
		width: opts.initialPreviewRequestWidthPx != null ? Math.min(4e3, Math.max(1, Math.round(opts.initialPreviewRequestWidthPx))) : getStorageInspectorPreviewRequestWidthPx(opts.originalSizeBytes),
		height: null,
		gravity: ImageGravity.Center,
		quality: 100,
		borderWidth: 0,
		borderColor: "",
		borderRadius: 0,
		opacity: 1,
		rotation: 0,
		background: "",
		output: opts.preferAvif ? ImageFormat.Avif : null
	};
}
const IMAGE_TRANSFORM_PRESETS = [
	{
		id: "avatar-128",
		label: "Profile avatar · 128 × 128",
		patch: {
			width: 128,
			height: 128
		}
	},
	{
		id: "thumb-256",
		label: "Gallery thumbnail · 256 px wide",
		patch: {
			width: 256,
			height: null
		}
	},
	{
		id: "card-640",
		label: "Article / card · 640 px wide",
		patch: {
			width: 640,
			height: null
		}
	},
	{
		id: "og-1200",
		label: "Social preview · 1200 × 630",
		patch: {
			width: 1200,
			height: 630
		}
	},
	{
		id: "hd-1280",
		label: "HD · 1280 px wide",
		patch: {
			width: 1280,
			height: null
		}
	},
	{
		id: "full-hd-1920",
		label: "Full HD · 1920 px wide",
		patch: {
			width: 1920,
			height: null
		}
	}
];
function applyImageTransformPreset(preset, preferAvif, previewDefaults) {
	return {
		...defaultImageTransformState({
			preferAvif,
			...previewDefaults
		}),
		...preset.patch
	};
}
function resetImageTransformSizeSection(preferAvif, previewDefaults) {
	const d = defaultImageTransformState({
		preferAvif,
		...previewDefaults
	});
	return {
		width: d.width,
		height: d.height,
		gravity: d.gravity
	};
}
function resetImageTransformQualitySection(preferAvif, previewDefaults) {
	const d = defaultImageTransformState({
		preferAvif,
		...previewDefaults
	});
	return {
		quality: d.quality,
		output: d.output
	};
}
function resetImageTransformStyleSection(preferAvif, previewDefaults) {
	const d = defaultImageTransformState({
		preferAvif,
		...previewDefaults
	});
	return {
		opacity: d.opacity,
		rotation: d.rotation,
		borderWidth: d.borderWidth,
		borderColor: d.borderColor,
		borderRadius: d.borderRadius,
		background: d.background
	};
}
function isImageTransformSizeSectionDirty(s, preferAvif, previewDefaults) {
	const d = resetImageTransformSizeSection(preferAvif, previewDefaults);
	return s.width !== d.width || s.height !== d.height || s.gravity !== d.gravity;
}
function isImageTransformQualitySectionDirty(s, preferAvif, previewDefaults) {
	const d = resetImageTransformQualitySection(preferAvif, previewDefaults);
	return s.quality !== d.quality || s.output !== d.output;
}
function isImageTransformStyleSectionDirty(s, preferAvif, previewDefaults) {
	const d = resetImageTransformStyleSection(preferAvif, previewDefaults);
	return s.opacity !== d.opacity || s.rotation !== d.rotation || s.borderWidth !== d.borderWidth || s.borderColor !== d.borderColor || s.borderRadius !== d.borderRadius || s.background !== d.background;
}
function imageTransformStatesEqual(a, b) {
	return a.width === b.width && a.height === b.height && a.gravity === b.gravity && a.quality === b.quality && a.borderWidth === b.borderWidth && a.borderColor === b.borderColor && a.borderRadius === b.borderRadius && a.opacity === b.opacity && a.rotation === b.rotation && a.background === b.background && a.output === b.output;
}
function mergeJsonIntoTransformState(raw, preferAvif, previewDefaults) {
	let parsed;
	try {
		parsed = JSON.parse(raw);
	} catch {
		return {
			ok: false,
			error: "Invalid JSON"
		};
	}
	if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
		const o = parsed;
		if (o.height === 0) o.height = null;
		if (o.width === 0) o.width = null;
	}
	const r = transformJsonSchema.safeParse(parsed);
	if (!r.success) return {
		ok: false,
		error: r.error.issues.map((i) => i.message).join(", ") || "Invalid parameters"
	};
	const p = r.data;
	const next = { ...defaultImageTransformState({
		preferAvif,
		...previewDefaults
	}) };
	if (p.width !== void 0) next.width = p.width === null ? null : Math.min(4e3, Math.max(64, Math.round(p.width)));
	if (p.height !== void 0) next.height = p.height === null ? null : Math.min(4e3, Math.max(1, Math.round(p.height)));
	if (p.gravity !== void 0) next.gravity = p.gravity;
	if (p.quality !== void 0) next.quality = Math.round(p.quality);
	if (p.borderWidth !== void 0) next.borderWidth = Math.round(p.borderWidth);
	if (p.borderColor !== void 0) next.borderColor = p.borderColor.replace(/^#/, "");
	if (p.borderRadius !== void 0) next.borderRadius = Math.round(p.borderRadius);
	if (p.opacity !== void 0) next.opacity = p.opacity;
	if (p.rotation !== void 0) next.rotation = Math.round(p.rotation);
	if (p.background !== void 0) next.background = p.background.replace(/^#/, "");
	if (p.output !== void 0) next.output = p.output;
	return {
		ok: true,
		state: next
	};
}
function transformStateToJsonCompact(state) {
	const o = {
		width: state.width,
		height: state.height,
		gravity: state.gravity,
		quality: state.quality,
		borderWidth: state.borderWidth,
		borderColor: state.borderColor,
		borderRadius: state.borderRadius,
		opacity: state.opacity,
		rotation: state.rotation,
		background: state.background,
		output: state.output
	};
	return JSON.stringify(o);
}
function buildGetFilePreviewArgs(bucketId, fileId, s) {
	const args = {
		bucketId,
		fileId
	};
	if (s.width !== null && s.width > 0) args.width = Math.min(4e3, Math.max(1, Math.round(s.width)));
	if (s.height !== null && s.height > 0) args.height = Math.min(4e3, Math.max(1, Math.round(s.height)));
	if (s.gravity !== ImageGravity.Center) args.gravity = s.gravity;
	if (s.quality > 0 && s.quality < 100) args.quality = Math.round(s.quality);
	if (s.borderWidth > 0) args.borderWidth = Math.min(100, Math.round(s.borderWidth));
	if (s.borderColor.trim().length > 0) args.borderColor = s.borderColor.replace(/^#/, "").slice(0, 12);
	if (s.borderRadius > 0) args.borderRadius = Math.min(4e3, Math.round(s.borderRadius));
	if (s.opacity < 1) args.opacity = Math.max(0, Math.min(1, s.opacity));
	if (s.rotation !== 0) args.rotation = Math.max(-360, Math.min(360, Math.round(s.rotation)));
	if (s.background.trim().length > 0) args.background = s.background.replace(/^#/, "").slice(0, 12);
	if (s.output) args.output = s.output;
	return args;
}
function buildGetFilePreviewArgsForDesignCanvas(bucketId, fileId, s) {
	return buildGetFilePreviewArgs(bucketId, fileId, {
		...s,
		rotation: 0
	});
}
function buildAdminDesignCanvasPreviewUrl(projectId, bucketId, fileId, s) {
	const args = buildGetFilePreviewArgsForDesignCanvas(bucketId, fileId, s);
	const raw = sdk.forProject(projectId).storage.getFilePreview(args);
	return raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
}
function buildFilePreviewUrl(projectId, bucketId, fileId, s) {
	const args = buildGetFilePreviewArgs(bucketId, fileId, s);
	return sdk.forProject(projectId).storage.getFilePreview(args);
}
function buildAdminPreviewUrl(projectId, bucketId, fileId, s) {
	const raw = buildFilePreviewUrl(projectId, bucketId, fileId, s);
	return raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
}
function buildAdminFileViewUrl(projectId, bucketId, fileId) {
	const raw = sdk.forProject(projectId).storage.getFileView({
		bucketId,
		fileId
	});
	return raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
}
function buildAdminUntransformedPreviewUrl(projectId, bucketId, fileId) {
	const raw = sdk.forProject(projectId).storage.getFilePreview({
		bucketId,
		fileId
	});
	return raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
}
const OUTPUT_FORMAT_LABELS = [
	{
		value: ImageFormat.Jpeg,
		label: "JPEG"
	},
	{
		value: ImageFormat.Png,
		label: "PNG"
	},
	{
		value: ImageFormat.Webp,
		label: "WebP"
	},
	{
		value: ImageFormat.Avif,
		label: "AVIF"
	},
	{
		value: ImageFormat.Gif,
		label: "GIF"
	},
	{
		value: ImageFormat.Heic,
		label: "HEIC"
	}
];
const TRANSFORM_IMAGE_CODE_SDK_OPTIONS = [
	{
		id: "web",
		label: "Web SDK",
		language: "javascript",
		modelPath: "inmemory://transform-image-wizard/web.js"
	},
	{
		id: "flutter",
		label: "Flutter SDK",
		language: "dart",
		modelPath: "inmemory://transform-image-wizard/flutter.dart"
	},
	{
		id: "react_native",
		label: "React Native",
		language: "typescript",
		modelPath: "inmemory://transform-image-wizard/react-native.ts"
	},
	{
		id: "apple",
		label: "Apple",
		language: "swift",
		modelPath: "inmemory://transform-image-wizard/apple.swift"
	},
	{
		id: "android",
		label: "Android",
		language: "kotlin",
		modelPath: "inmemory://transform-image-wizard/android.kt"
	},
	{
		id: "deno",
		label: "Deno",
		language: "typescript",
		modelPath: "inmemory://transform-image-wizard/deno.ts"
	},
	{
		id: "node",
		label: "Node.js",
		language: "typescript",
		modelPath: "inmemory://transform-image-wizard/node.ts"
	},
	{
		id: "python",
		label: "Python",
		language: "python",
		modelPath: "inmemory://transform-image-wizard/preview.py"
	},
	{
		id: "php",
		label: "PHP",
		language: "php",
		modelPath: "inmemory://transform-image-wizard/preview.php"
	},
	{
		id: "ruby",
		label: "Ruby",
		language: "ruby",
		modelPath: "inmemory://transform-image-wizard/preview.rb"
	},
	{
		id: "dotnet",
		label: ".NET",
		language: "csharp",
		modelPath: "inmemory://transform-image-wizard/preview.cs"
	},
	{
		id: "go",
		label: "Go",
		language: "go",
		modelPath: "inmemory://transform-image-wizard/preview.go"
	}
];
function gravityEnumKeyForWeb(g) {
	return Object.keys(ImageGravity).find((k) => ImageGravity[k] === g) ?? "Center";
}
function imageFormatEnumKeyForSdk(v) {
	return Object.keys(ImageFormat).find((k) => ImageFormat[k] === v) ?? null;
}
function gravityRestString(g) {
	return String(g);
}
function gravityPhpRubyMethodSuffix(g) {
	return {
		Center: "CENTER",
		Topleft: "TOP_LEFT",
		Top: "TOP",
		Topright: "TOP_RIGHT",
		Left: "LEFT",
		Right: "RIGHT",
		Bottomleft: "BOTTOM_LEFT",
		Bottom: "BOTTOM",
		Bottomright: "BOTTOM_RIGHT"
	}[gravityEnumKeyForWeb(g)] ?? "CENTER";
}
function pythonImageFormatRef(s) {
	if (!s.output) return null;
	const k = imageFormatEnumKeyForSdk(s.output);
	if (!k) return null;
	return `ImageFormat.${{
		Jpg: "JPG",
		Jpeg: "JPG",
		Png: "PNG",
		Gif: "GIF",
		Webp: "WEBP",
		Avif: "AVIF",
		Heic: "HEIC"
	}[k] ?? k.toUpperCase()}`;
}
function pythonGravityRef(g) {
	return `ImageGravity.${gravityPhpRubyMethodSuffix(g)}`;
}
function dotnetImageFormatMember(s) {
	if (!s.output) return null;
	const k = imageFormatEnumKeyForSdk(s.output);
	if (!k) return null;
	return `ImageFormat.${k}`;
}
function goOutputString(s) {
	if (!s.output) return null;
	return String(s.output).toLowerCase();
}
function escapeDartString(s) {
	return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
function pushCommonJsPreviewFields(lines, s, bucketId, fileId) {
	const gKey = gravityEnumKeyForWeb(s.gravity);
	lines.push(`  bucketId: ${JSON.stringify(bucketId)},`);
	lines.push(`  fileId: ${JSON.stringify(fileId)},`);
	if (s.width !== null) lines.push(`  width: ${s.width},`);
	if (s.height !== null) lines.push(`  height: ${s.height},`);
	lines.push(`  gravity: ImageGravity.${gKey},`);
	lines.push(`  quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`  borderWidth: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`  borderColor: ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`  borderRadius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`  opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`  rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`  background: ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	if (s.output) {
		const outKey = imageFormatEnumKeyForSdk(s.output);
		if (outKey) lines.push(`  output: ImageFormat.${outKey},`);
	}
}
function buildWebSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const lines = [
		`import { Client, Storage, ImageFormat, ImageGravity } from 'appwrite'`,
		``,
		`// Full example: Appwrite client + Storage.getFilePreview for this project and file.`,
		`// - Endpoint is the regional API URL for this console session (adjust if self-hosted).`,
		`// - Browser: authenticate first (e.g. Account.createEmailPasswordSession, OAuth, etc.).`,
		`// - Server: client.setKey(process.env.APPWRITE_API_KEY) - never expose API keys in client code.`,
		``,
		`const client = new Client()`,
		`  .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`  .setProject(${JSON.stringify(projectId)})`,
		``,
		`const storage = new Storage(client)`,
		``,
		`const previewUrl = storage.getFilePreview({`
	];
	pushCommonJsPreviewFields(lines, s, bucketId, fileId);
	lines.push(`})`, ``);
	lines.push(`// Example (React): <img src={previewUrl} alt="" />`);
	lines.push(`// Example (fetch, cookies/session): await fetch(previewUrl, { credentials: 'include' })`);
	return lines.join("\n");
}
function buildNodeSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const lines = [
		`import { Client, Storage, ImageFormat, ImageGravity } from 'node-appwrite'`,
		``,
		`// Node.js (server): same preview URL builder as the Web SDK, using node-appwrite.`,
		`// Use setKey with your API key (or setSession for user context). Never ship keys to clients.`,
		``,
		`const client = new Client()`,
		`  .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`  .setProject(${JSON.stringify(projectId)})`,
		`  .setKey(process.env.APPWRITE_API_KEY ?? '')`,
		``,
		`const storage = new Storage(client)`,
		``,
		`const previewUrl = storage.getFilePreview({`
	];
	pushCommonJsPreviewFields(lines, s, bucketId, fileId);
	lines.push(`})`, ``, `// previewUrl is a string URL; use fetch(previewUrl) or pass to clients as needed.`);
	return lines.join("\n");
}
function buildDenoSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const lines = [
		`import { Client, Storage, ImageFormat, ImageGravity } from 'npm:node-appwrite'`,
		``,
		`// Deno: import from npm specifiers. Run with env access, e.g. deno run --allow-env --allow-net main.ts`,
		``,
		`const client = new Client()`,
		`  .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`  .setProject(${JSON.stringify(projectId)})`,
		`  .setKey(Deno.env.get('APPWRITE_API_KEY') ?? '')`,
		``,
		`const storage = new Storage(client)`,
		``,
		`const previewUrl = storage.getFilePreview({`
	];
	pushCommonJsPreviewFields(lines, s, bucketId, fileId);
	lines.push(`})`);
	return lines.join("\n");
}
function buildFlutterSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const ep = escapeDartString(apiEndpoint);
	const pid = escapeDartString(projectId);
	const bid = escapeDartString(bucketId);
	const fid = escapeDartString(fileId);
	const lines = [
		`import 'package:appwrite/appwrite.dart';`,
		``,
		`// Add appwrite to pubspec.yaml, then run dart pub get.`,
		`// Browser / Flutter app: sign in first (e.g. Account.createEmailSession).`,
		`// Server / isolate: client.setKey(Platform.environment['APPWRITE_API_KEY']!) - never in client apps.`,
		``,
		`Future<void> example() async {`,
		`  final client = Client()`,
		`    ..setEndpoint('${ep}')`,
		`    ..setProject('${pid}');`,
		``,
		`  final storage = Storage(client);`,
		``,
		`  final String previewUrl = storage.getFilePreview(`,
		`    bucketId: '${bid}',`,
		`    fileId: '${fid}',`
	];
	if (s.width !== null) lines.push(`    width: ${s.width},`);
	if (s.height !== null) lines.push(`    height: ${s.height},`);
	lines.push(`    gravity: '${escapeDartString(String(s.gravity))}',`);
	lines.push(`    quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    borderWidth: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    borderColor: '${escapeDartString(s.borderColor.replace(/^#/, ""))}',`);
	if (s.borderRadius > 0) lines.push(`    borderRadius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`    background: '${escapeDartString(s.background.replace(/^#/, ""))}',`);
	if (s.output) {
		const outKey = imageFormatEnumKeyForSdk(s.output);
		if (outKey) lines.push(`    output: ImageFormat.${outKey},`);
	}
	lines.push(`  );`, ``, `  // Example: Image.network(previewUrl)`, `  // ignore: avoid_print`, `  print(previewUrl);`, `}`);
	return lines.join("\n");
}
function buildReactNativeSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const gKey = gravityEnumKeyForWeb(s.gravity);
	const outStr = s.output ? String(s.output).toLowerCase() : "jpg";
	return [
		`import { Client, Storage, ImageFormat, ImageGravity } from 'react-native-appwrite';`,
		`import { Image } from 'react-native';`,
		``,
		`// react-native-appwrite uses positional arguments for getFilePreview (see Appwrite docs).`,
		``,
		`const client = new Client()`,
		`  .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`  .setProject(${JSON.stringify(projectId)});`,
		``,
		`const storage = new Storage(client);`,
		``,
		`// bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output`,
		`const previewUrl = storage.getFilePreview(`,
		`  ${JSON.stringify(bucketId)},`,
		`  ${JSON.stringify(fileId)},`,
		`  ${s.width ?? 0},`,
		`  ${s.height ?? 0},`,
		`  ImageGravity.${gKey},`,
		`  ${s.quality},`,
		`  ${s.borderWidth},`,
		`  ${JSON.stringify(s.borderColor.replace(/^#/, "") || "")},`,
		`  ${s.borderRadius},`,
		`  ${s.opacity},`,
		`  ${s.rotation},`,
		`  ${JSON.stringify(s.background.replace(/^#/, "") || "")},`,
		`  ${JSON.stringify(outStr)},`,
		`);`,
		``,
		`// Example: <Image source={{ uri: String(previewUrl) }} style={{ width: 300, height: 200 }} resizeMode="contain" />`
	].join("\n");
}
function buildAppleSwiftSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const grav = gravityRestString(s.gravity);
	const lines = [
		`import Appwrite`,
		``,
		`// Apple (iOS / macOS): async getFilePreview returns image data; sign in on the client first.`,
		``,
		`func loadPreview() async throws {`,
		`    let client = Client()`,
		`        .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`        .setProject(${JSON.stringify(projectId)})`,
		`    let storage = Storage(client)`,
		`    let data = try await storage.getFilePreview(`,
		`        bucketId: ${JSON.stringify(bucketId)},`,
		`        fileId: ${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`        width: ${s.width},`);
	if (s.height !== null) lines.push(`        height: ${s.height},`);
	lines.push(`        gravity: ${JSON.stringify(grav)},`);
	lines.push(`        quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`        borderWidth: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`        borderColor: ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`        borderRadius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`        opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`        rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`        background: ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	if (s.output) {
		const o = String(s.output).toLowerCase();
		lines.push(`        output: ${JSON.stringify(o)},`);
	}
	lines.push(`    )`, `    // Use data with UIImage(data:) / NSImage`, `}`);
	return lines.join("\n");
}
function buildAndroidKotlinSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const grav = gravityRestString(s.gravity);
	const lines = [
		`import io.appwrite.Client`,
		`import io.appwrite.services.Storage`,
		``,
		`// Android (Kotlin): getFilePreview returns a URL string when using the Android SDK (see Appwrite docs).`,
		``,
		`val client = Client(context)`,
		`    .setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`    .setProject(${JSON.stringify(projectId)})`,
		`val storage = Storage(client)`,
		`val previewUrl = storage.getFilePreview(`,
		`    bucketId = ${JSON.stringify(bucketId)},`,
		`    fileId = ${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`    width = ${s.width},`);
	if (s.height !== null) lines.push(`    height = ${s.height},`);
	lines.push(`    gravity = ${JSON.stringify(grav)},`);
	lines.push(`    quality = ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    borderWidth = ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    borderColor = ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`    borderRadius = ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity = ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation = ${s.rotation},`);
	if (s.background.trim()) lines.push(`    background = ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	if (s.output) lines.push(`    output = ${JSON.stringify(String(s.output).toLowerCase())},`);
	lines.push(`)`);
	return lines.join("\n");
}
function buildPythonSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const lines = [
		`from appwrite.client import Client`,
		`from appwrite.services.storage import Storage`,
		`from appwrite.enums import ImageGravity`,
		`from appwrite.enums import ImageFormat`,
		``,
		`# Python (server): get_file_preview returns bytes. Use set_key for API key or set_session for user JWT.`,
		``,
		`client = Client()`,
		`client.set_endpoint(${JSON.stringify(apiEndpoint)})`,
		`client.set_project(${JSON.stringify(projectId)})`,
		`client.set_key("<YOUR_API_KEY>")`,
		``,
		`storage = Storage(client)`,
		``,
		`result: bytes = storage.get_file_preview(`,
		`    bucket_id=${JSON.stringify(bucketId)},`,
		`    file_id=${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`    width=${s.width},`);
	if (s.height !== null) lines.push(`    height=${s.height},`);
	lines.push(`    gravity=${pythonGravityRef(s.gravity)},`);
	lines.push(`    quality=${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    border_width=${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    border_color=${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`    border_radius=${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity=${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation=${s.rotation},`);
	if (s.background.trim()) lines.push(`    background=${JSON.stringify(s.background.replace(/^#/, ""))},`);
	const pfmt = pythonImageFormatRef(s);
	if (pfmt) lines.push(`    output=${pfmt},`);
	lines.push(`)`, `print(len(result))`);
	return lines.join("\n");
}
function buildPhpSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const gx = gravityPhpRubyMethodSuffix(s.gravity);
	const lines = [
		`<?php`,
		``,
		`use Appwrite\\Client;`,
		`use Appwrite\\Services\\Storage;`,
		`use Appwrite\\Enums\\ImageGravity;`,
		`use Appwrite\\Enums\\ImageFormat;`,
		``,
		`// PHP (server): getFilePreview returns raw image bytes.`,
		``,
		`$client = (new Client())`,
		`    ->setEndpoint(${JSON.stringify(apiEndpoint)})`,
		`    ->setProject(${JSON.stringify(projectId)})`,
		`    ->setKey(getenv('APPWRITE_API_KEY') ?: '');`,
		``,
		`$storage = new Storage($client);`,
		``,
		`$result = $storage->getFilePreview(`,
		`    bucketId: ${JSON.stringify(bucketId)},`,
		`    fileId: ${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`    width: ${s.width},`);
	if (s.height !== null) lines.push(`    height: ${s.height},`);
	lines.push(`    gravity: ImageGravity::${gx}(),`);
	lines.push(`    quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    borderWidth: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    borderColor: ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`    borderRadius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`    background: ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	if (s.output) {
		const k = imageFormatEnumKeyForSdk(s.output);
		const phpFmt = k ? k === "Jpeg" ? "JPEG" : k.toUpperCase() : "JPG";
		lines.push(`    output: ImageFormat::${phpFmt}(),`);
	}
	lines.push(`);`);
	return lines.join("\n");
}
function buildRubySnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const gx = gravityPhpRubyMethodSuffix(s.gravity);
	const lines = [
		`require 'appwrite'`,
		``,
		`include Appwrite`,
		`include Appwrite::Enums`,
		``,
		`# Ruby (server): get_file_preview returns binary string.`,
		``,
		`client = Client.new`,
		`    .set_endpoint(${JSON.stringify(apiEndpoint)})`,
		`    .set_project(${JSON.stringify(projectId)})`,
		`    .set_key(ENV['APPWRITE_API_KEY'] || '')`,
		``,
		`storage = Storage.new(client)`,
		``,
		`result = storage.get_file_preview(`,
		`    bucket_id: ${JSON.stringify(bucketId)},`,
		`    file_id: ${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`    width: ${s.width},`);
	if (s.height !== null) lines.push(`    height: ${s.height},`);
	lines.push(`    gravity: ImageGravity::${gx},`);
	lines.push(`    quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    border_width: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    border_color: ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`    border_radius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`    background: ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	if (s.output) {
		const k = imageFormatEnumKeyForSdk(s.output);
		const rbFmt = !k || k === "Jpg" || k === "Jpeg" ? "JPG" : k === "Png" ? "PNG" : k === "Gif" ? "GIF" : k === "Webp" ? "WEBP" : k === "Avif" ? "AVIF" : k === "Heic" ? "HEIC" : "JPG";
		lines.push(`    output: ImageFormat::${rbFmt},`);
	}
	lines.push(`)`);
	return lines.join("\n");
}
function buildDotnetSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const gKey = gravityEnumKeyForWeb(s.gravity);
	const lines = [
		`using Appwrite;`,
		`using Appwrite.Enums;`,
		`using Appwrite.Services;`,
		``,
		`// .NET (C#): GetFilePreview returns byte[]. Use SetKey for server API keys.`,
		``,
		`var client = new Client()`,
		`    .SetEndPoint(${JSON.stringify(apiEndpoint)})`,
		`    .SetProject(${JSON.stringify(projectId)})`,
		`    .SetKey(Environment.GetEnvironmentVariable("APPWRITE_API_KEY") ?? "");`,
		``,
		`var storage = new Storage(client);`,
		``,
		`byte[] result = await storage.GetFilePreview(`,
		`    bucketId: ${JSON.stringify(bucketId)},`,
		`    fileId: ${JSON.stringify(fileId)},`
	];
	if (s.width !== null) lines.push(`    width: ${s.width},`);
	if (s.height !== null) lines.push(`    height: ${s.height},`);
	lines.push(`    gravity: ImageGravity.${gKey},`);
	lines.push(`    quality: ${s.quality},`);
	if (s.borderWidth > 0) lines.push(`    borderWidth: ${s.borderWidth},`);
	if (s.borderColor.trim()) lines.push(`    borderColor: ${JSON.stringify(s.borderColor.replace(/^#/, ""))},`);
	if (s.borderRadius > 0) lines.push(`    borderRadius: ${s.borderRadius},`);
	if (s.opacity < 1) lines.push(`    opacity: ${s.opacity},`);
	if (s.rotation !== 0) lines.push(`    rotation: ${s.rotation},`);
	if (s.background.trim()) lines.push(`    background: ${JSON.stringify(s.background.replace(/^#/, ""))},`);
	const dfmt = dotnetImageFormatMember(s);
	if (dfmt) lines.push(`    output: ${dfmt},`);
	lines.push(`);`);
	return lines.join("\n");
}
function buildGoSnippet(projectId, bucketId, fileId, s, apiEndpoint) {
	const grav = gravityRestString(s.gravity);
	const optLines = [];
	if (s.width !== null) optLines.push(`    storage.WithGetFilePreviewWidth(${s.width}),`);
	if (s.height !== null) optLines.push(`    storage.WithGetFilePreviewHeight(${s.height}),`);
	optLines.push(`    storage.WithGetFilePreviewGravity(${JSON.stringify(grav)}),`);
	optLines.push(`    storage.WithGetFilePreviewQuality(${s.quality}),`);
	if (s.borderWidth > 0) optLines.push(`    storage.WithGetFilePreviewBorderWidth(${s.borderWidth}),`);
	if (s.borderColor.trim()) optLines.push(`    storage.WithGetFilePreviewBorderColor(${JSON.stringify(s.borderColor.replace(/^#/, ""))}),`);
	if (s.borderRadius > 0) optLines.push(`    storage.WithGetFilePreviewBorderRadius(${s.borderRadius}),`);
	if (s.opacity < 1) optLines.push(`    storage.WithGetFilePreviewOpacity(${s.opacity}),`);
	if (s.rotation !== 0) optLines.push(`    storage.WithGetFilePreviewRotation(${s.rotation}),`);
	if (s.background.trim()) optLines.push(`    storage.WithGetFilePreviewBackground(${JSON.stringify(s.background.replace(/^#/, ""))}),`);
	const out = goOutputString(s);
	if (out) optLines.push(`    storage.WithGetFilePreviewOutput(${JSON.stringify(out)}),`);
	return [
		`package main`,
		``,
		`import (`,
		`    "fmt"`,
		`    "github.com/appwrite/sdk-for-go/client"`,
		`    "github.com/appwrite/sdk-for-go/storage"`,
		`    "os"`,
		`)`,
		``,
		`// Go (server): GetFilePreview returns the preview payload; configure API key via options as per SDK version.`,
		``,
		`func main() {`,
		`    client := client.New(`,
		`        client.WithEndpoint(${JSON.stringify(apiEndpoint)}),`,
		`        client.WithProject(${JSON.stringify(projectId)}),`,
		`        client.WithKey(os.Getenv("APPWRITE_API_KEY")),`,
		`    )`,
		`    service := storage.New(client)`,
		`    response, err := service.GetFilePreview(`,
		`        ${JSON.stringify(bucketId)},`,
		`        ${JSON.stringify(fileId)},`,
		...optLines,
		`    )`,
		`    if err != nil {`,
		`        panic(err)`,
		`    }`,
		`    fmt.Println(len(response))`,
		`}`
	].join("\n");
}
function buildTransformImageCodeSnippet(id, projectId, bucketId, fileId, state, apiEndpoint) {
	switch (id) {
		case "web": return buildWebSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "flutter": return buildFlutterSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "react_native": return buildReactNativeSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "apple": return buildAppleSwiftSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "android": return buildAndroidKotlinSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "deno": return buildDenoSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "node": return buildNodeSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "python": return buildPythonSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "php": return buildPhpSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "ruby": return buildRubySnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "dotnet": return buildDotnetSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		case "go": return buildGoSnippet(projectId, bucketId, fileId, state, apiEndpoint);
		default: return buildWebSnippet(projectId, bucketId, fileId, state, apiEndpoint);
	}
}
var CLAMP_W = (w) => Math.min(4e3, Math.max(64, Math.round(w)));
var CLAMP_H = (h) => Math.min(4e3, Math.max(1, Math.round(h)));
var CLAMP_R = (r) => Math.min(4e3, Math.max(0, Math.round(r)));
var CLAMP_ROT = (r) => Math.min(360, Math.max(-360, Math.round(r)));
function previewOutputFormatLabel(output) {
	if (output == null) return "Original";
	return OUTPUT_FORMAT_LABELS.find((r) => r.value === output)?.label ?? "Format";
}
function resizeDeltaForEdge(edge, dx, dy) {
	switch (edge) {
		case "e": return {
			dw: dx,
			dh: 0
		};
		case "w": return {
			dw: -dx,
			dh: 0
		};
		case "s": return {
			dw: 0,
			dh: dy
		};
		case "n": return {
			dw: 0,
			dh: -dy
		};
		case "se": return {
			dw: dx,
			dh: dy
		};
		case "sw": return {
			dw: -dx,
			dh: dy
		};
		case "ne": return {
			dw: dx,
			dh: -dy
		};
		case "nw": return {
			dw: -dx,
			dh: -dy
		};
		default: return {
			dw: 0,
			dh: 0
		};
	}
}
var HANDLE_HIT_BASE = "pointer-events-auto absolute flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-ring";
var HANDLE_EDGE = `${HANDLE_HIT_BASE} z-20`;
var HANDLE_TOOL = `${HANDLE_HIT_BASE} z-30`;
var FRAME_GUIDE_OUTSET = 28;
var PREVIEW_VIEW_MARGIN = 64;
var PREVIEW_CROSSFADE_CLASS = "transition-opacity duration-300 ease-in-out";
var HANDLE_DOT = "h-5 w-5 shrink-0 rounded-full border-2 border-border bg-background shadow-sm";
function outwardUnitForCorner(corner, rect) {
	const cx = rect.left + rect.width / 2;
	const cy = rect.top + rect.height / 2;
	let px;
	let py;
	switch (corner) {
		case "nw":
			px = rect.left;
			py = rect.top;
			break;
		case "ne":
			px = rect.right;
			py = rect.top;
			break;
		case "se":
			px = rect.right;
			py = rect.bottom;
			break;
		case "sw":
			px = rect.left;
			py = rect.bottom;
			break;
	}
	const vx = px - cx;
	const vy = py - cy;
	const len = Math.hypot(vx, vy) || 1;
	return {
		ux: vx / len,
		uy: vy / len
	};
}
var RADIUS_CORNER_CURSOR = {
	nw: "cursor-nwse-resize",
	ne: "cursor-nesw-resize",
	se: "cursor-nwse-resize",
	sw: "cursor-nesw-resize"
};
var RADIUS_CORNER_POS = {
	nw: "start-0 top-0 -translate-x-[42px] -translate-y-[42px]",
	ne: "end-0 top-0 translate-x-[42px] -translate-y-[42px]",
	se: "end-0 bottom-0 translate-x-[42px] translate-y-[42px]",
	sw: "start-0 bottom-0 -translate-x-[42px] translate-y-[42px]"
};
function CornerRadiusArchIcon({ corner }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("pointer-events-none flex h-10 w-10 items-center justify-center text-primary", corner === "ne" && "scale-x-[-1]", corner === "sw" && "scale-y-[-1]", corner === "se" && "scale-x-[-1] scale-y-[-1]"),
		children: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 32 32",
			className: "h-full w-full",
			"aria-hidden": true,
			children: /* @__PURE__ */ jsx("path", {
				d: "M 6 30 A 22 22 0 0 1 30 6",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "3.5",
				strokeLinecap: "round"
			})
		})
	});
}
var EDGE_CURSOR = {
	nw: "cursor-nwse-resize",
	n: "cursor-ns-resize",
	ne: "cursor-nesw-resize",
	e: "cursor-ew-resize",
	se: "cursor-nwse-resize",
	s: "cursor-ns-resize",
	sw: "cursor-nesw-resize",
	w: "cursor-ew-resize"
};
var RESIZE_HANDLE_POS = {
	nw: "start-5 top-5",
	n: "start-1/2 top-5 -translate-x-1/2",
	ne: "end-5 top-5",
	e: "end-5 top-1/2 -translate-y-1/2",
	se: "end-5 bottom-5",
	s: "start-1/2 bottom-5 -translate-x-1/2",
	sw: "start-5 bottom-5",
	w: "start-5 top-1/2 -translate-y-1/2"
};
var CORNER_RESIZE = [
	"nw",
	"ne",
	"se",
	"sw"
];
function applyAspectLockedResize(edge, baseW, baseH, dw, dh) {
	const ar = baseW / Math.max(1, baseH);
	if (CORNER_RESIZE.includes(edge)) {
		const scaleW = (baseW + dw) / baseW;
		const scaleH = (baseH + dh) / baseH;
		const scale = Math.abs(scaleW - 1) > Math.abs(scaleH - 1) ? scaleW : scaleH;
		return {
			nw: CLAMP_W(Math.round(baseW * scale)),
			nh: CLAMP_H(Math.round(baseH * scale))
		};
	}
	if (edge === "e" || edge === "w") {
		const nw = CLAMP_W(baseW + dw);
		return {
			nw,
			nh: CLAMP_H(Math.max(1, Math.round(nw / ar)))
		};
	}
	if (edge === "n" || edge === "s") {
		const nh = CLAMP_H(baseH + dh);
		return {
			nw: CLAMP_W(Math.max(64, Math.round(nh * ar))),
			nh
		};
	}
	return {
		nw: CLAMP_W(baseW + dw),
		nh: CLAMP_H(baseH + dh)
	};
}
function resizeKeyboardNudge(edge, key, shift) {
	const step = shift ? 32 : 8;
	switch (key) {
		case "ArrowRight":
			if (edge === "e" || edge === "ne" || edge === "se") return {
				dw: step,
				dh: 0
			};
			if (edge === "w" || edge === "nw" || edge === "sw") return {
				dw: -step,
				dh: 0
			};
			return null;
		case "ArrowLeft":
			if (edge === "e" || edge === "ne" || edge === "se") return {
				dw: -step,
				dh: 0
			};
			if (edge === "w" || edge === "nw" || edge === "sw") return {
				dw: step,
				dh: 0
			};
			return null;
		case "ArrowDown":
			if (edge === "s" || edge === "se" || edge === "sw") return {
				dw: 0,
				dh: step
			};
			if (edge === "n" || edge === "ne" || edge === "nw") return {
				dw: 0,
				dh: -step
			};
			return null;
		case "ArrowUp":
			if (edge === "s" || edge === "se" || edge === "sw") return {
				dw: 0,
				dh: -step
			};
			if (edge === "n" || edge === "ne" || edge === "nw") return {
				dw: 0,
				dh: step
			};
			return null;
		default: return null;
	}
}
function TransformImageDesignOverlay({ zoom, state, setState, localImgSrc, originalImgSrc, serverImgSrc, imgAlt, canvasMode = "edit", onTransformInteractionStart, onTransformInteractionEnd }) {
	const t = useT();
	const wrapRef = useRef(null);
	const frameRef = useRef(null);
	const localImgRef = useRef(null);
	const [nat, setNat] = useState(null);
	const natRef = useRef(null);
	natRef.current = nat;
	const [dragging, setDragging] = useState(false);
	const [serverDecoded, setServerDecoded] = useState(false);
	const dragRef = useRef(null);
	const captureRef = useRef(null);
	const stateRef = useRef(state);
	stateRef.current = state;
	const pristineSrc = originalImgSrc ?? localImgSrc;
	const layout = useMemo(() => {
		if (!nat) return null;
		return computeImageTransformDisplayLayout(nat, state);
	}, [nat, state]);
	useEffect(() => {
		setServerDecoded(false);
	}, [serverImgSrc]);
	const serverPreviewReady = !dragging && serverDecoded;
	const showServerFidelity = canvasMode === "edit" && serverPreviewReady;
	const objectPosStyle = { objectPosition: gravityToObjectPosition(state.gravity) };
	const applyResizeKeyboard = (edge, e) => {
		if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
		const n = natRef.current;
		if (!n) return;
		const delta = resizeKeyboardNudge(edge, e.key, e.altKey);
		if (!delta) return;
		e.preventDefault();
		const { logicalW: bw, logicalH: bh } = computeImageTransformDisplayLayout(n, stateRef.current);
		const aspectLock = e.shiftKey && CORNER_RESIZE.includes(edge);
		const { nw, nh } = aspectLock ? applyAspectLockedResize(edge, bw, bh, delta.dw, delta.dh) : {
			nw: CLAMP_W(bw + delta.dw),
			nh: CLAMP_H(bh + delta.dh)
		};
		onTransformInteractionStart?.();
		setState((prev) => {
			if (aspectLock) return {
				...prev,
				width: nw,
				height: nh
			};
			if (edge === "e" || edge === "w") return {
				...prev,
				width: nw
			};
			if (edge === "n" || edge === "s") return {
				...prev,
				height: nh
			};
			return {
				...prev,
				width: nw,
				height: nh
			};
		});
		queueMicrotask(() => onTransformInteractionEnd?.());
	};
	const applyRadiusKeyboard = (e) => {
		if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
		e.preventDefault();
		const step = e.altKey ? 20 : e.shiftKey ? 10 : 1;
		const delta = e.key === "ArrowUp" ? step : -step;
		onTransformInteractionStart?.();
		setState((s) => ({
			...s,
			borderRadius: CLAMP_R(s.borderRadius + delta)
		}));
		queueMicrotask(() => onTransformInteractionEnd?.());
	};
	const endDrag = useCallback(() => {
		const hadDrag = dragRef.current !== null;
		const cap = captureRef.current;
		if (cap) {
			try {
				cap.el.releasePointerCapture(cap.pointerId);
			} catch {}
			captureRef.current = null;
		}
		dragRef.current = null;
		setDragging(false);
		if (hadDrag) onTransformInteractionEnd?.();
	}, [onTransformInteractionEnd]);
	const beginCapture = (el, pointerId) => {
		try {
			el.setPointerCapture(pointerId);
			captureRef.current = {
				el,
				pointerId
			};
		} catch {
			captureRef.current = null;
		}
	};
	const onPointerMove = useCallback((e) => {
		const d = dragRef.current;
		if (!d) return;
		e.preventDefault();
		if (d.kind === "resize") {
			const dx = (e.clientX - d.startClientX) / zoom;
			const dy = (e.clientY - d.startClientY) / zoom;
			const { dw, dh } = resizeDeltaForEdge(d.edge, dx, dy);
			const { nw, nh } = d.aspectLock ? applyAspectLockedResize(d.edge, d.baseW, d.baseH, dw, dh) : {
				nw: CLAMP_W(d.baseW + dw),
				nh: CLAMP_H(d.baseH + dh)
			};
			setState((prev) => {
				if (d.aspectLock) return {
					...prev,
					width: nw,
					height: nh
				};
				if (d.edge === "e" || d.edge === "w") return {
					...prev,
					width: nw
				};
				if (d.edge === "n" || d.edge === "s") return {
					...prev,
					height: nh
				};
				return {
					...prev,
					width: nw,
					height: nh
				};
			});
			return;
		}
		if (d.kind === "rotate") {
			const prev = dragRef.current;
			if (!prev || prev.kind !== "rotate") return;
			const a = Math.atan2(e.clientY - prev.cy, e.clientX - prev.cx);
			let da = a - prev.lastAngle;
			if (da > Math.PI) da -= 2 * Math.PI;
			if (da < -Math.PI) da += 2 * Math.PI;
			dragRef.current = {
				...prev,
				lastAngle: a
			};
			const deltaDeg = da * 180 / Math.PI;
			setState((s) => ({
				...s,
				rotation: CLAMP_ROT(s.rotation + deltaDeg)
			}));
			return;
		}
		if (d.kind === "radiusCorner") {
			const delta = ((e.clientX - d.startClientX) * d.ux + (e.clientY - d.startClientY) * d.uy) / zoom;
			const next = CLAMP_R(d.startBorderRadius - delta);
			setState((prev) => ({
				...prev,
				borderRadius: next
			}));
		}
	}, [setState, zoom]);
	useEffect(() => {
		if (!dragging) return;
		window.addEventListener("pointermove", onPointerMove, { passive: false });
		const up = () => endDrag();
		window.addEventListener("pointerup", up);
		window.addEventListener("pointercancel", up);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", up);
			window.removeEventListener("pointercancel", up);
		};
	}, [
		dragging,
		onPointerMove,
		endDrag
	]);
	const startResize = (edge, e) => {
		const n = natRef.current;
		if (!n) return;
		e.stopPropagation();
		e.preventDefault();
		onTransformInteractionStart?.();
		const s = stateRef.current;
		const { logicalW: bw, logicalH: bh } = computeImageTransformDisplayLayout(n, s);
		dragRef.current = {
			kind: "resize",
			edge,
			startClientX: e.clientX,
			startClientY: e.clientY,
			baseW: bw,
			baseH: bh,
			aspectLock: e.shiftKey
		};
		beginCapture(e.currentTarget, e.pointerId);
		setDragging(true);
	};
	const startRotate = (e) => {
		e.stopPropagation();
		e.preventDefault();
		onTransformInteractionStart?.();
		const el = frameRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const cx = r.left + r.width / 2;
		const cy = r.top + r.height / 2;
		dragRef.current = {
			kind: "rotate",
			cx,
			cy,
			lastAngle: Math.atan2(e.clientY - cy, e.clientX - cx)
		};
		beginCapture(e.currentTarget, e.pointerId);
		setDragging(true);
	};
	const startRadiusCorner = (corner, e) => {
		e.stopPropagation();
		e.preventDefault();
		onTransformInteractionStart?.();
		const fr = frameRef.current;
		if (!fr) return;
		const { ux, uy } = outwardUnitForCorner(corner, fr.getBoundingClientRect());
		dragRef.current = {
			kind: "radiusCorner",
			corner,
			startClientX: e.clientX,
			startClientY: e.clientY,
			startBorderRadius: stateRef.current.borderRadius,
			ux,
			uy
		};
		beginCapture(e.currentTarget, e.pointerId);
		setDragging(true);
	};
	const handleLocalLoad = () => {
		const im = localImgRef.current;
		if (!im?.naturalWidth) return;
		setNat({
			w: im.naturalWidth,
			h: im.naturalHeight
		});
	};
	const handleServerLoad = async (e) => {
		const im = e.currentTarget;
		if (!im.naturalWidth) return;
		try {
			if (im.decode) await im.decode();
		} catch {}
		setServerDecoded(true);
	};
	const handleServerError = () => {
		setServerDecoded(false);
	};
	const showHandles = !!layout && canvasMode === "edit";
	const borderStyle = state.borderWidth > 0 ? `${state.borderWidth}px solid ${state.borderColor.trim() ? `#${state.borderColor.replace(/^#/, "").slice(0, 12)}` : "hsl(var(--border))"}` : void 0;
	const bgFill = state.background.trim().length > 0 ? `#${state.background.replace(/^#/, "").slice(0, 12)}` : void 0;
	if (!nat || !layout) return /* @__PURE__ */ jsx("div", {
		ref: wrapRef,
		className: cn("relative w-fit max-w-full select-none", dragging && "cursor-inherit"),
		children: /* @__PURE__ */ jsx("img", {
			ref: localImgRef,
			src: localImgSrc,
			alt: imgAlt,
			draggable: false,
			onLoad: handleLocalLoad,
			className: "pointer-events-none block max-h-[min(80dvh,720px)] max-w-full object-contain"
		})
	});
	const { displayW, displayH, aabbW, aabbH, logicalW, logicalH } = layout;
	const frameShell = (opts) => /* @__PURE__ */ jsx("div", {
		className: "flex h-full w-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "relative flex items-center justify-center",
			style: {
				width: aabbW,
				height: aabbH
			},
			children: /* @__PURE__ */ jsx("div", {
				className: cn("group/frame relative", dragging && "cursor-inherit"),
				style: {
					width: displayW,
					height: displayH,
					transform: `rotate(${state.rotation}deg)`,
					transformOrigin: "center center"
				},
				children: /* @__PURE__ */ jsx("div", {
					ref: opts.frameRefProp ?? void 0,
					className: "relative overflow-hidden",
					style: {
						width: displayW,
						height: displayH,
						borderRadius: state.borderRadius,
						backgroundColor: bgFill,
						border: borderStyle,
						boxSizing: "border-box"
					},
					children: opts.children
				})
			})
		})
	});
	if (canvasMode === "compare") {
		const rightShowServer = serverPreviewReady;
		return /* @__PURE__ */ jsx("div", {
			ref: wrapRef,
			className: cn("group/preview-size relative shrink-0 select-none", dragging && "cursor-inherit"),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-full max-w-full flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-start sm:gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 flex-col items-center gap-1.5 sm:flex-initial",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Original")
					}), /* @__PURE__ */ jsx("div", {
						className: "flex w-full max-w-full min-h-0 items-center justify-center",
						style: {
							width: aabbW + PREVIEW_VIEW_MARGIN * 2,
							height: aabbH + PREVIEW_VIEW_MARGIN * 2
						},
						children: /* @__PURE__ */ jsx("img", {
							ref: localImgRef,
							src: pristineSrc,
							alt: imgAlt,
							draggable: false,
							onLoad: handleLocalLoad,
							className: "pointer-events-none max-h-full max-w-full object-contain"
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 flex-col items-center gap-1.5 sm:flex-initial",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Output")
					}), /* @__PURE__ */ jsx("div", {
						className: "flex w-full max-w-full items-center justify-center",
						style: {
							width: aabbW + PREVIEW_VIEW_MARGIN * 2,
							height: aabbH + PREVIEW_VIEW_MARGIN * 2
						},
						children: frameShell({
							frameRefProp: null,
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative h-full w-full",
								style: { opacity: state.opacity },
								children: [/* @__PURE__ */ jsx("img", {
									src: localImgSrc,
									alt: "",
									"aria-hidden": true,
									draggable: false,
									className: cn("pointer-events-none absolute inset-0 z-0 block h-full w-full object-cover", PREVIEW_CROSSFADE_CLASS, rightShowServer ? "opacity-0" : "opacity-100"),
									style: objectPosStyle
								}), /* @__PURE__ */ jsx("div", {
									className: cn("pointer-events-none absolute inset-0 z-[1] h-full w-full", PREVIEW_CROSSFADE_CLASS, rightShowServer ? "opacity-100" : "opacity-0"),
									children: /* @__PURE__ */ jsx("img", {
										src: serverImgSrc,
										alt: rightShowServer ? imgAlt : "",
										"aria-hidden": !rightShowServer,
										draggable: false,
										onLoad: handleServerLoad,
										onError: handleServerError,
										className: "pointer-events-none block h-full w-full object-cover",
										style: objectPosStyle
									})
								}, serverImgSrc)]
							})
						})
					})]
				})]
			})
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		ref: wrapRef,
		className: cn("group/preview-size relative shrink-0 select-none", dragging && "cursor-inherit"),
		style: {
			width: aabbW + PREVIEW_VIEW_MARGIN * 2,
			height: aabbH + PREVIEW_VIEW_MARGIN * 2
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-full w-full items-center justify-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "relative flex items-center justify-center",
				style: {
					width: aabbW,
					height: aabbH
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("group/frame relative", dragging && "cursor-inherit"),
					style: {
						width: displayW,
						height: displayH,
						transform: `rotate(${state.rotation}deg)`,
						transformOrigin: "center center"
					},
					children: [/* @__PURE__ */ jsx("div", {
						ref: frameRef,
						className: "relative overflow-hidden",
						style: {
							width: displayW,
							height: displayH,
							borderRadius: state.borderRadius,
							backgroundColor: bgFill,
							border: borderStyle,
							boxSizing: "border-box"
						},
						children: /* @__PURE__ */ jsx("div", {
							className: "relative h-full w-full",
							style: { opacity: state.opacity },
							children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
								ref: localImgRef,
								src: localImgSrc,
								alt: showServerFidelity ? "" : imgAlt,
								"aria-hidden": showServerFidelity,
								draggable: false,
								onLoad: handleLocalLoad,
								className: cn("pointer-events-none absolute inset-0 z-0 block h-full w-full object-cover", PREVIEW_CROSSFADE_CLASS, !showServerFidelity ? "opacity-100" : "opacity-0"),
								style: objectPosStyle
							}), /* @__PURE__ */ jsx("div", {
								className: cn("pointer-events-none absolute inset-0 z-[1] h-full w-full", PREVIEW_CROSSFADE_CLASS, showServerFidelity ? "opacity-100" : "opacity-0"),
								children: /* @__PURE__ */ jsx("img", {
									src: serverImgSrc,
									alt: showServerFidelity ? imgAlt : "",
									"aria-hidden": !showServerFidelity,
									draggable: false,
									onLoad: handleServerLoad,
									onError: handleServerError,
									className: "pointer-events-none block h-full w-full object-cover",
									style: objectPosStyle
								})
							}, serverImgSrc)] })
						})
					}), showHandles && /* @__PURE__ */ jsxs("div", {
						className: "pointer-events-none absolute start-0 top-0 opacity-100 transition-opacity duration-150",
						style: {
							width: displayW,
							height: displayH
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pointer-events-none absolute z-[1] border-[3px] border-dotted border-muted-foreground/35",
								style: {
									inset: -FRAME_GUIDE_OUTSET,
									borderRadius: Math.min(4e3, Math.max(0, state.borderRadius + FRAME_GUIDE_OUTSET))
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pointer-events-auto absolute inset-0 z-[5] cursor-default",
								"aria-hidden": true
							}),
							[
								"nw",
								"n",
								"ne",
								"e",
								"se",
								"s",
								"sw",
								"w"
							].map((edge) => /* @__PURE__ */ jsx("button", {
								type: "button",
								className: cn(HANDLE_EDGE, EDGE_CURSOR[edge], RESIZE_HANDLE_POS[edge]),
								"aria-label": `${t("Resize from")} ${edge}. ${t("Use arrow keys to nudge; Alt for larger steps. Hold Shift with corner handles to keep aspect. Pointer drag with Shift locks aspect.")}`,
								onPointerDown: (ev) => startResize(edge, ev),
								onKeyDown: (ev) => applyResizeKeyboard(edge, ev),
								children: /* @__PURE__ */ jsx("span", { className: HANDLE_DOT })
							}, edge)),
							/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									className: cn(HANDLE_TOOL, "start-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+40px)] cursor-grab active:cursor-grabbing"),
									"aria-label": t("Rotate: drag in a circle, or use Left and Right arrow keys. Shift with arrows rotates 15 degrees."),
									onPointerDown: startRotate,
									onKeyDown: (ev) => {
										if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
											ev.preventDefault();
											onTransformInteractionStart?.();
											const step = ev.shiftKey ? 15 : 1;
											const delta = ev.key === "ArrowLeft" ? -step : step;
											setState((s) => ({
												...s,
												rotation: CLAMP_ROT(s.rotation + delta)
											}));
											queueMicrotask(() => onTransformInteractionEnd?.());
										}
									},
									children: /* @__PURE__ */ jsx("span", {
										className: "flex h-9 w-9 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm backdrop-blur-sm",
										children: /* @__PURE__ */ jsx(RotateCw, { className: "h-5 w-5 text-muted-foreground" })
									})
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "top",
								className: "max-w-[220px] text-[12px]",
								children: t("Drag in a circle to rotate. Keyboard: Left or Right arrow (Shift for 15° steps). Same as rotation in the sidebar.")
							})] }),
							[
								"nw",
								"ne",
								"se",
								"sw"
							].map((corner) => /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									className: cn(HANDLE_TOOL, RADIUS_CORNER_POS[corner], RADIUS_CORNER_CURSOR[corner]),
									"aria-label": t("Corner radius: drag toward the image to increase radius, or use Up and Down arrow keys. Shift for larger steps, Alt for largest steps."),
									onPointerDown: (ev) => startRadiusCorner(corner, ev),
									onKeyDown: applyRadiusKeyboard,
									children: /* @__PURE__ */ jsx(CornerRadiusArchIcon, { corner })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: corner === "nw" || corner === "ne" ? "top" : corner === "sw" ? "left" : "bottom",
								className: "max-w-[220px] text-[12px]",
								children: t("Drag toward the image along the diagonal to increase corner radius (away from the image to decrease). Keyboard: Up or Down arrow (Shift or Alt for bigger steps).")
							})] }, `r-${corner}`))
						]
					})]
				})
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-x-0 bottom-1 z-[5] flex translate-y-3 justify-center px-2 opacity-100 transition-opacity duration-150",
			children: /* @__PURE__ */ jsxs("span", {
				className: "rounded-md border border-border bg-card/90 px-2 py-1 text-[11px] font-medium tabular-nums text-foreground shadow-sm backdrop-blur-sm",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground",
						children: [
							nat.w,
							"×",
							nat.h
						]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: " → "
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "text-foreground",
						children: [
							logicalW,
							" × ",
							logicalH,
							" px"
						]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: " · "
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: t(previewOutputFormatLabel(state.output))
					})
				]
			})
		})]
	});
}
var NAME_MAX = 64;
function SavedImageTransformPresetRow({ item, canEdit, dragOverKey, rowDropKey, onDragStart, onDragOver, onDragLeave, onDrop, onApply, onDelete, deleteBusy, deleteDisabled, onRenameCommit }) {
	const t = useT();
	const [editing, setEditing] = useState(false);
	const [draft, setDraft] = useState(item.name);
	const skipBlurCommitRef = useRef(false);
	const inputRef = useRef(null);
	useEffect(() => {
		if (!editing) setDraft(item.name);
	}, [item.name, editing]);
	const endEditing = useCallback(() => {
		setEditing(false);
	}, []);
	const commitFromDraft = useCallback(() => {
		const next = draft.trim();
		if (!next) {
			setDraft(item.name);
			endEditing();
			return;
		}
		if (next !== item.name) Promise.resolve(onRenameCommit(next)).catch(() => {});
		endEditing();
	}, [
		draft,
		item.name,
		onRenameCommit,
		endEditing
	]);
	const cancelEditing = useCallback(() => {
		skipBlurCommitRef.current = true;
		setDraft(item.name);
		endEditing();
	}, [item.name, endEditing]);
	const onInputBlur = useCallback(() => {
		if (skipBlurCommitRef.current) {
			skipBlurCommitRef.current = false;
			return;
		}
		commitFromDraft();
	}, [commitFromDraft]);
	const startEditing = useCallback(() => {
		setDraft(item.name);
		setEditing(true);
		requestAnimationFrame(() => {
			const el = inputRef.current;
			if (el) {
				el.focus();
				el.select();
			}
		});
	}, [item.name]);
	return /* @__PURE__ */ jsxs("div", {
		draggable: canEdit && !editing,
		onDragStart: canEdit && !editing ? onDragStart : void 0,
		onDragOver: (e) => {
			if (!canEdit || editing) return;
			onDragOver(e);
		},
		onDragLeave,
		onDrop: (e) => {
			e.preventDefault();
			if (canEdit) onDrop(e);
		},
		className: cn("group flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-2 py-1.5 transition-colors", editing ? "cursor-default" : canEdit && "cursor-grab active:cursor-grabbing", dragOverKey === rowDropKey && canEdit && !editing && "border-primary bg-primary/10"),
		"aria-label": editing ? void 0 : canEdit ? `${item.name}, ${t("drag to reorder")}` : item.name,
		children: [
			canEdit ? /* @__PURE__ */ jsx(GripVertical, {
				className: cn("h-3.5 w-3.5 shrink-0 text-muted-foreground transition-opacity", editing ? "opacity-0" : "opacity-0 group-hover:opacity-100"),
				"aria-hidden": true
			}) : /* @__PURE__ */ jsx("span", {
				className: "h-3.5 w-3.5 shrink-0",
				"aria-hidden": true
			}),
			editing ? /* @__PURE__ */ jsx(Input, {
				ref: inputRef,
				value: draft,
				onChange: (e) => setDraft(e.target.value.slice(0, NAME_MAX)),
				onBlur: onInputBlur,
				onKeyDown: (e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						skipBlurCommitRef.current = true;
						commitFromDraft();
					} else if (e.key === "Escape") {
						e.preventDefault();
						cancelEditing();
					}
				},
				className: "h-7 min-w-0 flex-1 text-[13px]",
				maxLength: NAME_MAX,
				"aria-label": t("Saved preset name"),
				onClick: (ev) => ev.stopPropagation()
			}) : /* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 truncate text-[13px] text-foreground",
				children: item.name
			}),
			canEdit && !editing ? /* @__PURE__ */ jsxs(Tooltip, {
				delayDuration: 300,
				children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
						"aria-label": t("Rename saved preset"),
						onClick: (e) => {
							e.stopPropagation();
							startEditing();
						},
						children: /* @__PURE__ */ jsx(Pencil, { className: "h-3.5 w-3.5" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					sideOffset: 4,
					className: "z-[10070]",
					children: t("Rename")
				})]
			}) : editing ? /* @__PURE__ */ jsx("span", {
				className: "w-7 shrink-0",
				"aria-hidden": true
			}) : null,
			/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "secondary",
				size: "sm",
				className: "h-7 shrink-0 text-[12px]",
				onClick: (e) => {
					e.stopPropagation();
					if (editing) {
						skipBlurCommitRef.current = true;
						commitFromDraft();
					}
					onApply();
				},
				children: t("Apply")
			}),
			canEdit ? /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onDelete();
				},
				disabled: deleteDisabled,
				className: "shrink-0 cursor-pointer rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50",
				"aria-label": t("Delete saved preset"),
				children: deleteBusy ? /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" })
			}) : null
		]
	});
}
function reorderList(list, fromIndex, toIndex) {
	const copy = [...list];
	const [removed] = copy.splice(fromIndex, 1);
	copy.splice(toIndex, 0, removed);
	return copy;
}
function tabCountBadge(count) {
	if (count <= 0) return null;
	return /* @__PURE__ */ jsx("span", {
		className: "flex size-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium tabular-nums text-muted-foreground",
		children: count
	});
}
function BuiltinTransformPresetRow({ label, onApply }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "group flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-2 py-1.5 transition-colors",
		"aria-label": label,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "h-3.5 w-3.5 shrink-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 truncate text-[13px] text-foreground",
				children: label
			}),
			/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "secondary",
				size: "sm",
				className: "h-7 shrink-0 text-[12px]",
				onClick: (e) => {
					e.stopPropagation();
					onApply();
				},
				children: t("Apply")
			})
		]
	});
}
function TransformImagePresetsPopover({ preferAvif, previewDefaults, projectId, state, setState, recordUndoPoint }) {
	const t = useT();
	const { account } = useAuth();
	const { project } = useProject(projectId);
	const teamId = project?.teamId ?? null;
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(teamId ?? void 0);
	const canTeamPresets = canSaveTeamFilters(access, features);
	const { userPresets, teamPresets, addPreset, deletePreset, reorderPresets, updatePresetName, isAdding, isReordering, hasTeamLevel } = useImageTransformSavedPresets(account, teamId);
	const [open, setOpen] = useState(false);
	const [browseTab, setBrowseTab] = useState("builtin");
	const [alertOpen, setAlertOpen] = useState(false);
	const [dragOverKey, setDragOverKey] = useState(null);
	const [deletingId, setDeletingId] = useState(null);
	const [pending, setPending] = useState(null);
	const [saveName, setSaveName] = useState("");
	const [saveLevel, setSaveLevel] = useState("user");
	useEffect(() => {
		if (!canTeamPresets && saveLevel === "team") setSaveLevel("user");
	}, [canTeamPresets, saveLevel]);
	const savedCount = userPresets.length + teamPresets.length;
	const requestApply = useCallback((next) => {
		setOpen(false);
		setPending(next);
		setAlertOpen(true);
	}, []);
	const runApply = useCallback(() => {
		const p = pending;
		setPending(null);
		setAlertOpen(false);
		if (!p) return;
		recordUndoPoint();
		if (p.kind === "builtin") {
			const preset = IMAGE_TRANSFORM_PRESETS.find((x) => x.id === p.id);
			if (!preset) return;
			setState(() => applyImageTransformPreset(preset, preferAvif, previewDefaults));
			toast.message(`${t("Applied preset:")} ${preset.label}`);
			return;
		}
		setState((base) => {
			const r = mergeJsonIntoTransformState(p.json, preferAvif, previewDefaults);
			if (!r.ok) {
				queueMicrotask(() => toast.error(r.error));
				return base;
			}
			queueMicrotask(() => toast.message(`${t("Applied preset:")} ${p.label}`));
			return r.state;
		});
	}, [
		pending,
		preferAvif,
		previewDefaults,
		recordUndoPoint,
		setState,
		t
	]);
	const handleSaveCurrent = useCallback(async () => {
		const json = transformStateToJsonCompact(state);
		const probe = mergeJsonIntoTransformState(json, preferAvif, previewDefaults);
		if (!probe.ok) {
			toast.error(probe.error);
			return;
		}
		if (saveLevel === "team" && (!teamId || !canTeamPresets)) {
			toast.error(t("You don't have permission to save team presets."));
			return;
		}
		try {
			await addPreset({
				name: saveName,
				json,
				level: saveLevel
			});
			toast.success(saveLevel === "team" ? t("Preset saved for team") : t("Preset saved"));
			setSaveName("");
		} catch (e) {
			toast.error(getErrorMessage(e));
		}
	}, [
		addPreset,
		canTeamPresets,
		preferAvif,
		previewDefaults,
		saveLevel,
		saveName,
		state,
		teamId,
		t
	]);
	const handleDelete = useCallback(async (id, level) => {
		if (level === "team" && !canTeamPresets) {
			toast.error(t("You don't have permission to remove team presets."));
			return;
		}
		try {
			setDeletingId(id);
			await deletePreset(id, level);
			toast.message(t("Preset removed"));
		} catch (e) {
			toast.error(getErrorMessage(e));
		} finally {
			setDeletingId(null);
		}
	}, [
		canTeamPresets,
		deletePreset,
		t
	]);
	const handlePresetDragStart = (e, level, index) => {
		if (e.target.closest("button")) {
			e.preventDefault();
			return;
		}
		e.dataTransfer.setData("application/json", JSON.stringify({
			level,
			index
		}));
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.dropEffect = "move";
		if (e.currentTarget instanceof HTMLElement) e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
	};
	const handlePresetDrop = (e, level, dropIndex) => {
		e.preventDefault();
		setDragOverKey(null);
		const raw = e.dataTransfer.getData("application/json");
		if (!raw) return;
		try {
			const { level: dragLevel, index: dragIndex } = JSON.parse(raw);
			if (dragLevel !== level || dragIndex === dropIndex) return;
			reorderPresets(reorderList(level === "user" ? userPresets : teamPresets, dragIndex, dropIndex), level).catch((err) => toast.error(getErrorMessage(err)));
		} catch {}
	};
	const rowDropKey = (level, index) => `${level}-${index}`;
	const canEditPresetLevel = (l) => l === "user" || canTeamPresets;
	const alertCopy = useMemo(() => {
		if (!pending) return {
			title: "",
			description: ""
		};
		if (pending.kind === "builtin") {
			const preset = IMAGE_TRANSFORM_PRESETS.find((x) => x.id === pending.id);
			return {
				title: t("Apply preset?"),
				description: `${t("Applying")} “${preset?.label ?? t("this preset")}” ${t("updates your transform parameters. You can use Undo afterward. Continue?")}`
			};
		}
		return {
			title: t("Apply saved preset?"),
			description: `${t("Applying")} “${pending.label}” ${t("merges saved parameters into your current transform. You can use Undo afterward. Continue?")}`
		};
	}, [pending, t]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Popover, {
		modal: false,
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 shrink-0 gap-1.5 px-2.5 text-[12px]",
				children: [
					/* @__PURE__ */ jsx(Filter, { className: "h-3.5 w-3.5 shrink-0" }),
					t("Presets"),
					savedCount > 0 ? /* @__PURE__ */ jsx("span", {
						className: "flex size-4 min-w-4 items-center justify-center rounded-full bg-muted text-[10px] font-medium tabular-nums text-muted-foreground",
						children: savedCount
					}) : null
				]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			className: "flex w-[min(100vw-2rem,380px)] max-h-[min(85dvh,560px)] flex-col overflow-hidden rounded-xl border-border p-0 shadow-lg",
			align: "start",
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 16,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "shrink-0 border-b border-border px-4 py-3",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("Presets")
					})
				}),
				/* @__PURE__ */ jsxs(Tabs, {
					value: browseTab,
					onValueChange: (v) => setBrowseTab(v),
					className: "flex min-h-0 flex-1 flex-col gap-0 overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "shrink-0 px-4 pb-3 pt-2",
						children: /* @__PURE__ */ jsxs(TabsList, {
							className: "grid h-9 w-full grid-cols-3 gap-0.5 p-[3px]",
							children: [
								/* @__PURE__ */ jsxs(TabsTrigger, {
									value: "builtin",
									className: "gap-1 px-1.5 text-[11px] sm:text-[12px]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: t("Built-in")
									}), tabCountBadge(IMAGE_TRANSFORM_PRESETS.length)]
								}),
								/* @__PURE__ */ jsxs(TabsTrigger, {
									value: "user",
									className: "gap-1 px-1.5 text-[11px] sm:text-[12px]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: t("Mine")
									}), tabCountBadge(userPresets.length)]
								}),
								/* @__PURE__ */ jsxs(TabsTrigger, {
									value: "team",
									className: "gap-1 px-1.5 text-[11px] sm:text-[12px]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: t("Team")
									}), tabCountBadge(teamPresets.length)]
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-h-0 max-h-[min(52dvh,380px)] flex-1 overflow-y-auto overflow-x-hidden overscroll-contain",
						children: [
							/* @__PURE__ */ jsx(TabsContent, {
								value: "builtin",
								className: "m-0 px-4 py-3 pe-3 pt-0 outline-none",
								children: /* @__PURE__ */ jsx("div", {
									className: "space-y-1",
									children: IMAGE_TRANSFORM_PRESETS.map((preset) => /* @__PURE__ */ jsx(BuiltinTransformPresetRow, {
										label: t(preset.label),
										onApply: () => requestApply({
											kind: "builtin",
											id: preset.id
										})
									}, preset.id))
								})
							}),
							/* @__PURE__ */ jsx(TabsContent, {
								value: "user",
								className: "m-0 px-4 py-3 pe-3 pt-0 outline-none",
								children: userPresets.length > 0 ? /* @__PURE__ */ jsx("div", {
									className: "space-y-1",
									children: userPresets.map((item, index) => /* @__PURE__ */ jsx(SavedImageTransformPresetRow, {
										item,
										canEdit: canEditPresetLevel("user") && !isReordering,
										dragOverKey,
										rowDropKey: rowDropKey("user", index),
										onDragStart: (ev) => handlePresetDragStart(ev, "user", index),
										onDragOver: (ev) => {
											ev.preventDefault();
											ev.dataTransfer.dropEffect = "move";
											setDragOverKey(rowDropKey("user", index));
										},
										onDragLeave: () => setDragOverKey(null),
										onDrop: (ev) => handlePresetDrop(ev, "user", index),
										onApply: () => requestApply({
											kind: "saved",
											json: item.json,
											label: item.name
										}),
										onDelete: () => void handleDelete(item.id, "user"),
										deleteBusy: deletingId === item.id,
										deleteDisabled: deletingId !== null,
										onRenameCommit: (name) => updatePresetName(item.id, "user", name).catch((err) => toast.error(getErrorMessage(err)))
									}, `user-${item.id}`))
								}) : /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] leading-relaxed text-muted-foreground",
									children: [
										t("You have not saved any presets yet. Use"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											children: t("Save preset")
										}),
										" ",
										t("below to store your current transform parameters.")
									]
								})
							}),
							/* @__PURE__ */ jsx(TabsContent, {
								value: "team",
								className: "m-0 px-4 py-3 pe-3 pt-0 outline-none",
								children: !hasTeamLevel ? /* @__PURE__ */ jsx("p", {
									className: "text-[12px] leading-relaxed text-muted-foreground",
									children: t("Team presets are available when the project belongs to an organization.")
								}) : teamPresets.length > 0 ? /* @__PURE__ */ jsx("div", {
									className: "space-y-1",
									children: teamPresets.map((item, index) => /* @__PURE__ */ jsx(SavedImageTransformPresetRow, {
										item,
										canEdit: canEditPresetLevel("team") && !isReordering,
										dragOverKey,
										rowDropKey: rowDropKey("team", index),
										onDragStart: (ev) => handlePresetDragStart(ev, "team", index),
										onDragOver: (ev) => {
											ev.preventDefault();
											ev.dataTransfer.dropEffect = "move";
											setDragOverKey(rowDropKey("team", index));
										},
										onDragLeave: () => setDragOverKey(null),
										onDrop: (ev) => handlePresetDrop(ev, "team", index),
										onApply: () => requestApply({
											kind: "saved",
											json: item.json,
											label: item.name
										}),
										onDelete: () => void handleDelete(item.id, "team"),
										deleteBusy: deletingId === item.id,
										deleteDisabled: deletingId !== null,
										onRenameCommit: (name) => updatePresetName(item.id, "team", name).catch((err) => toast.error(getErrorMessage(err)))
									}, `team-${item.id}`))
								}) : /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] leading-relaxed text-muted-foreground",
									children: [
										t("No team presets yet. Owners and developers can add presets for everyone in the organization using"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											children: t("For team")
										}),
										" ",
										t("below.")
									]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "shrink-0 border-t border-border bg-muted/20 px-4 py-3",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "transform-preset-save-name",
							className: "text-[12px] text-muted-foreground",
							children: t("Save current parameters")
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-2 flex gap-2",
							children: /* @__PURE__ */ jsx(Input, {
								id: "transform-preset-save-name",
								placeholder: t("Preset name"),
								value: saveName,
								onChange: (e) => setSaveName(e.target.value),
								className: "h-9 flex-1 text-[13px]",
								maxLength: 64
							})
						}),
						hasTeamLevel && canTeamPresets ? /* @__PURE__ */ jsx(Tabs, {
							value: saveLevel,
							onValueChange: (v) => setSaveLevel(v),
							className: "mt-3",
							children: /* @__PURE__ */ jsxs(TabsList, {
								className: "grid h-9 w-full grid-cols-2",
								children: [/* @__PURE__ */ jsx(TabsTrigger, {
									value: "user",
									className: "text-[12px]",
									children: t("For me")
								}), /* @__PURE__ */ jsx(TabsTrigger, {
									value: "team",
									className: "text-[12px]",
									children: t("For team")
								})]
							})
						}) : /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[11px] text-muted-foreground",
							children: t("Saved to your account. Team presets require owner or developer access.")
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							className: "mt-3 h-9 w-full text-[13px]",
							disabled: isAdding || !saveName.trim(),
							onClick: () => void handleSaveCurrent(),
							children: t("Save preset")
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ jsx(Dialog, {
		open: alertOpen,
		onOpenChange: (next) => {
			if (!next) setPending(null);
			setAlertOpen(next);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			showCloseButton: false,
			overlayClassName: "z-[10060]",
			className: "z-[10061] gap-0 border-border p-0 sm:max-w-md",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, {
						className: "text-[15px]",
						children: alertCopy.title
					}), /* @__PURE__ */ jsx(DialogDescription, {
						className: "mt-2 text-[13px]",
						children: alertCopy.description
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs(DialogFooter, {
					className: "flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => {
							setPending(null);
							setAlertOpen(false);
						},
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						onClick: () => runApply(),
						children: t("Apply preset")
					})]
				})
			]
		})
	})] });
}
var GRAVITY_PICKER_ICON = {
	[ImageGravity.Topleft]: CornerUpLeft,
	[ImageGravity.Top]: ArrowUp,
	[ImageGravity.Topright]: CornerUpRight,
	[ImageGravity.Left]: ArrowLeft,
	[ImageGravity.Center]: Crosshair,
	[ImageGravity.Right]: ArrowRight,
	[ImageGravity.Bottomleft]: CornerDownLeft,
	[ImageGravity.Bottom]: ArrowDown,
	[ImageGravity.Bottomright]: CornerDownRight
};
function NullablePxInput({ id, value, onChange, restoreValue, min, max }) {
	const t = useT();
	const isNull = value === null;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Input, {
			id,
			type: "number",
			min,
			max,
			disabled: isNull,
			placeholder: isNull ? "NULL" : void 0,
			value: isNull ? "" : value,
			onChange: (e) => {
				const raw = e.target.value;
				if (raw === "") {
					onChange(null);
					return;
				}
				const n = parseInt(raw, 10);
				if (!Number.isFinite(n)) return;
				onChange(Math.min(max, Math.max(min, n)));
			},
			onKeyDown: (e) => {
				if (isNull) return;
				if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
				e.preventDefault();
				const cur = value ?? restoreValue;
				const step = e.altKey ? 20 : e.shiftKey ? 10 : 1;
				const delta = e.key === "ArrowUp" ? step : -step;
				onChange(Math.min(max, Math.max(min, cur + delta)));
			},
			className: cn("h-9 pe-24 text-[13px]", isNull && "cursor-not-allowed opacity-50")
		}), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-y-0 end-2 flex items-center",
			children: /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-auto flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					id: `${id}-null`,
					checked: isNull,
					onCheckedChange: (checked) => {
						onChange(checked === true ? null : restoreValue);
					},
					onClick: (e) => e.stopPropagation(),
					className: "h-4 w-4"
				}), /* @__PURE__ */ jsx("label", {
					htmlFor: `${id}-null`,
					className: "cursor-pointer select-none text-[11px] text-muted-foreground",
					children: t("Null")
				})]
			})
		})]
	});
}
function sanitizeHexDigits(raw, maxLen) {
	return raw.replace(/#/g, "").replace(/[^0-9a-fA-F]/g, "").slice(0, maxLen);
}
function hexToColorInputValue(raw) {
	const digits = sanitizeHexDigits(raw, 12);
	if (digits.length === 0) return "#808080";
	if (digits.length <= 3) {
		const d = (digits + "000").slice(0, 3);
		return `#${d[0] + d[0]}${d[1] + d[1]}${d[2] + d[2]}`.toLowerCase();
	}
	return `#${(digits + "000000").slice(0, 6)}`.toLowerCase();
}
function pickerToStoredHex(v) {
	return v.replace(/^#/, "").toUpperCase().slice(0, 6);
}
function HexColorField({ id, label, value, onChange, allowClear, helperText }) {
	const t = useT();
	const pickerValue = useMemo(() => hexToColorInputValue(value), [value]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: `${id}-hex`,
					className: "text-[12px] text-muted-foreground",
					children: label
				}), allowClear && value.trim() !== "" ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-7 shrink-0 px-2 text-[11px] text-muted-foreground",
					onClick: () => onChange(""),
					children: t("Clear")
				}) : null]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsx("input", {
					id: `${id}-picker`,
					type: "color",
					className: cn("size-9 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-input bg-background p-0 shadow-xs disabled:opacity-50", "[&::-webkit-color-swatch-wrapper]:rounded-[inherit] [&::-webkit-color-swatch-wrapper]:p-0", "[&::-webkit-color-swatch]:rounded-md [&::-webkit-color-swatch]:border-0", "[&::-moz-color-swatch]:rounded-md [&::-moz-color-swatch]:border-0"),
					value: pickerValue,
					onChange: (e) => onChange(pickerToStoredHex(e.target.value)),
					"aria-label": `${label} ${t("color picker")}`
				}), /* @__PURE__ */ jsx(Input, {
					id: `${id}-hex`,
					className: "h-9 min-w-0 flex-1 font-mono text-[13px]",
					placeholder: "RRGGBB…",
					value,
					spellCheck: false,
					onChange: (e) => onChange(sanitizeHexDigits(e.target.value, 12))
				})]
			}),
			helperText ? /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: helperText
			}) : null
		]
	});
}
var FOOTER_PREVIEW_RING_PX = 40;
function PreviewReductionRing({ progress, tone, children, ringSize = 56 }) {
	const size = ringSize;
	const stroke = ringSize <= 44 ? 2 : 3;
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const pct = Math.min(100, Math.max(0, progress));
	const offset = c * (1 - pct / 100);
	const arcClass = tone === "success" ? "stroke-emerald-500" : tone === "warning" ? "stroke-amber-500" : "stroke-muted-foreground/45";
	return /* @__PURE__ */ jsxs("div", {
		className: "relative shrink-0",
		style: {
			width: size,
			height: size
		},
		role: "img",
		"aria-label": `${Math.round(pct)}%`,
		children: [/* @__PURE__ */ jsxs("svg", {
			width: size,
			height: size,
			viewBox: `0 0 ${size} ${size}`,
			className: "-rotate-90",
			"aria-hidden": true,
			children: [/* @__PURE__ */ jsx("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				className: "stroke-border",
				strokeWidth: stroke
			}), /* @__PURE__ */ jsx("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				className: cn("transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none", arcClass),
				strokeWidth: stroke,
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 grid place-items-center p-0",
			children
		})]
	});
}
async function fetchPreviewPayloadBytes(url, signal) {
	try {
		const headRes = await fetch(url, {
			method: "HEAD",
			signal,
			credentials: "include",
			cache: "no-store"
		});
		if (headRes.ok) {
			const cl = headRes.headers.get("content-length");
			if (cl) {
				const n = parseInt(cl, 10);
				if (Number.isFinite(n) && n > 0) return n;
			}
		}
	} catch {}
	try {
		const res = await fetch(url, {
			method: "GET",
			signal,
			credentials: "include",
			cache: "no-store"
		});
		if (!res.ok) return null;
		const blob = await res.blob();
		return blob.size > 0 ? blob.size : null;
	} catch {
		return null;
	}
}
var PREVIEW_DOWNLOAD_MIME_EXT = {
	"image/jpeg": "jpg",
	"image/jpg": "jpg",
	"image/png": "png",
	"image/webp": "webp",
	"image/avif": "avif",
	"image/gif": "gif",
	"image/heic": "heic",
	"image/heif": "heic"
};
function previewDownloadBasename(fileName) {
	return (fileName.trim().replace(/\.[^/.]+$/, "") || "image").replace(/[/\\?%*:|"<>]/g, "-").slice(0, 180) || "image";
}
function previewDownloadExtension(output, mimeType, sourceFileName) {
	const fromMime = PREVIEW_DOWNLOAD_MIME_EXT[mimeType.split(";")[0]?.trim().toLowerCase() ?? ""];
	if (fromMime) return fromMime;
	if (output != null) {
		const s = String(output).toLowerCase();
		if (s === "jpeg" || s === "jpg") return "jpg";
		if (/^[a-z0-9]+$/.test(s)) return s;
	}
	const fromName = /\.([a-zA-Z0-9]+)$/.exec(sourceFileName.trim())?.[1]?.toLowerCase();
	if (fromName === "jpeg" || fromName === "jpg") return "jpg";
	if (fromName) return fromName.slice(0, 8);
	return "jpg";
}
function useDebouncedValue(value, delayMs) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const id = window.setTimeout(() => setDebounced(value), delayMs);
		return () => window.clearTimeout(id);
	}, [value, delayMs]);
	return debounced;
}
function TransformImageWizard({ open, onClose, projectId, bucketId, fileId, fileName, preferAvif, originalSizeBytes = 0, initialPreviewRequestWidthPx }) {
	const t = useT();
	const previewDefaults = useMemo(() => ({
		originalSizeBytes,
		initialPreviewRequestWidthPx
	}), [originalSizeBytes, initialPreviewRequestWidthPx]);
	const [state, setState] = useState(() => defaultImageTransformState({
		preferAvif,
		...previewDefaults
	}));
	const stateRef = useRef(state);
	stateRef.current = state;
	const undoStackRef = useRef([]);
	const redoStackRef = useRef([]);
	const interactionSnapshotRef = useRef(null);
	const [historyTick, setHistoryTick] = useState(0);
	const bumpHistoryUi = useCallback(() => {
		setHistoryTick((t$1) => t$1 + 1);
	}, []);
	const recordUndoPoint = useCallback(() => {
		const cur = structuredClone(stateRef.current);
		undoStackRef.current = [...undoStackRef.current.slice(-39), cur];
		redoStackRef.current = [];
		bumpHistoryUi();
	}, [bumpHistoryUi]);
	const onTransformInteractionStart = useCallback(() => {
		interactionSnapshotRef.current = structuredClone(stateRef.current);
	}, []);
	const onTransformInteractionEnd = useCallback(() => {
		const before = interactionSnapshotRef.current;
		interactionSnapshotRef.current = null;
		if (!before) return;
		if (imageTransformStatesEqual(before, stateRef.current)) return;
		undoStackRef.current = [...undoStackRef.current.slice(-39), before];
		redoStackRef.current = [];
		bumpHistoryUi();
	}, [bumpHistoryUi]);
	const undo = useCallback(() => {
		const stack = undoStackRef.current;
		if (stack.length === 0) return;
		const prev = structuredClone(stack[stack.length - 1]);
		const cur = structuredClone(stateRef.current);
		undoStackRef.current = stack.slice(0, -1);
		redoStackRef.current = [...redoStackRef.current, cur];
		flushSync(() => {
			setState(prev);
		});
		bumpHistoryUi();
	}, [bumpHistoryUi]);
	const redo = useCallback(() => {
		const stack = redoStackRef.current;
		if (stack.length === 0) return;
		const next = structuredClone(stack[stack.length - 1]);
		const cur = structuredClone(stateRef.current);
		redoStackRef.current = stack.slice(0, -1);
		undoStackRef.current = [...undoStackRef.current, cur];
		flushSync(() => {
			setState(next);
		});
		bumpHistoryUi();
	}, [bumpHistoryUi]);
	const [canvasMode, setCanvasMode] = useState("edit");
	const [mainView, setMainView] = useState("design");
	const [codeTab, setCodeTab] = useState("web");
	const [copiedSdk, setCopiedSdk] = useState(false);
	const [previewDownloadBusy, setPreviewDownloadBusy] = useState(false);
	const [previewBytes, setPreviewBytes] = useState(null);
	const [previewBytesLoading, setPreviewBytesLoading] = useState(false);
	const [previewMeasureDone, setPreviewMeasureDone] = useState(false);
	const { canvasRef, pan, zoom, isDragging, bindCanvas, zoomIn, zoomOut, resetView, zoomPercentage, zoomInDisabled, zoomOutDisabled } = useViewportPanZoom({ maxZoom: 3 });
	const handleCanvasKeyDown = useCallback((e) => {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		const k = e.key;
		if (k === "+" || k === "=") {
			if (zoomInDisabled) return;
			e.preventDefault();
			zoomIn();
		} else if (k === "-" || k === "_") {
			if (zoomOutDisabled) return;
			e.preventDefault();
			zoomOut();
		} else if (k === "0") {
			e.preventDefault();
			resetView();
		}
	}, [
		zoomIn,
		zoomOut,
		resetView,
		zoomInDisabled,
		zoomOutDisabled
	]);
	useEffect(() => {
		if (open) {
			setState(defaultImageTransformState({
				preferAvif,
				...previewDefaults
			}));
			undoStackRef.current = [];
			redoStackRef.current = [];
			setCanvasMode("edit");
			setHistoryTick((t$1) => t$1 + 1);
			setMainView("design");
			setCodeTab("web");
			resetView();
		}
	}, [
		open,
		preferAvif,
		fileId,
		previewDefaults,
		resetView
	]);
	const previewUrl = useMemo(() => buildAdminPreviewUrl(projectId, bucketId, fileId, state), [
		projectId,
		bucketId,
		fileId,
		state
	]);
	const shareablePreviewUrl = useMemo(() => buildFilePreviewUrl(projectId, bucketId, fileId, state), [
		projectId,
		bucketId,
		fileId,
		state
	]);
	const designCanvasPreviewUrl = useMemo(() => buildAdminDesignCanvasPreviewUrl(projectId, bucketId, fileId, state), [
		projectId,
		bucketId,
		fileId,
		state
	]);
	const debouncedPreviewUrl = useDebouncedValue(previewUrl, 240);
	const debouncedDesignCanvasPreviewUrl = useDebouncedValue(designCanvasPreviewUrl, 240);
	const localFileViewUrl = useMemo(() => buildAdminFileViewUrl(projectId, bucketId, fileId), [
		projectId,
		bucketId,
		fileId
	]);
	const untransformedPreviewUrl = useMemo(() => buildAdminUntransformedPreviewUrl(projectId, bucketId, fileId), [
		projectId,
		bucketId,
		fileId
	]);
	useEffect(() => {
		if (!open || !debouncedPreviewUrl || originalSizeBytes <= 0) {
			setPreviewBytes(null);
			setPreviewBytesLoading(false);
			setPreviewMeasureDone(false);
			return;
		}
		setPreviewMeasureDone(false);
		setPreviewBytesLoading(true);
		const ac = new AbortController();
		fetchPreviewPayloadBytes(debouncedPreviewUrl, ac.signal).then((n) => {
			if (!ac.signal.aborted) {
				setPreviewBytes(n);
				setPreviewBytesLoading(false);
				setPreviewMeasureDone(true);
			}
		}).catch(() => {
			if (!ac.signal.aborted) {
				setPreviewBytes(null);
				setPreviewBytesLoading(false);
				setPreviewMeasureDone(true);
			}
		});
		return () => {
			ac.abort();
		};
	}, [
		open,
		debouncedPreviewUrl,
		originalSizeBytes
	]);
	const resetAllToDefaults = useCallback(() => {
		recordUndoPoint();
		setState(defaultImageTransformState({
			preferAvif,
			...previewDefaults
		}));
		toast.message(t("All parameters reset to defaults"));
	}, [
		preferAvif,
		previewDefaults,
		recordUndoPoint,
		t
	]);
	const resetSizeSection = useCallback(() => {
		recordUndoPoint();
		setState((s) => ({
			...s,
			...resetImageTransformSizeSection(preferAvif, previewDefaults)
		}));
		toast.message(t("Size & crop reset"));
	}, [
		preferAvif,
		previewDefaults,
		recordUndoPoint,
		t
	]);
	const resetQualitySection = useCallback(() => {
		recordUndoPoint();
		setState((s) => ({
			...s,
			...resetImageTransformQualitySection(preferAvif, previewDefaults)
		}));
		toast.message(t("Quality & format reset"));
	}, [
		preferAvif,
		previewDefaults,
		recordUndoPoint,
		t
	]);
	const resetStyleSection = useCallback(() => {
		recordUndoPoint();
		setState((s) => ({
			...s,
			...resetImageTransformStyleSection(preferAvif, previewDefaults)
		}));
		toast.message(t("Style & effects reset"));
	}, [
		preferAvif,
		previewDefaults,
		recordUndoPoint,
		t
	]);
	const copyPreviewUrl = useCallback(() => {
		navigator.clipboard.writeText(shareablePreviewUrl);
		toast.success(t("Preview URL copied"));
	}, [shareablePreviewUrl, t]);
	const openPreviewInNewTab = useCallback(() => {
		window.open(previewUrl, "_blank", "noopener,noreferrer");
	}, [previewUrl]);
	const downloadPreview = useCallback(async () => {
		try {
			const res = await fetch(previewUrl, {
				method: "GET",
				credentials: "include",
				cache: "no-store"
			});
			if (!res.ok) {
				toast.error(`${t("Could not download preview")} (${res.status})`);
				return;
			}
			const blob = await res.blob();
			const ext = previewDownloadExtension(state.output, blob.type, fileName);
			const downloadName = `${previewDownloadBasename(fileName)}-preview.${ext}`;
			const objectUrl = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = objectUrl;
			a.download = downloadName;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(objectUrl);
			toast.success(t("Preview downloaded"));
		} catch (e) {
			toast.error(getErrorMessage(e));
		} finally {
			setPreviewDownloadBusy(false);
		}
	}, [
		fileName,
		previewUrl,
		state.output,
		t
	]);
	const projectApiEndpoint = getProjectApiEndpoint(projectId);
	const activeCodeSnippet = useMemo(() => buildTransformImageCodeSnippet(codeTab, projectId, bucketId, fileId, state, projectApiEndpoint), [
		codeTab,
		projectId,
		bucketId,
		fileId,
		state,
		projectApiEndpoint
	]);
	const copyActiveCode = useCallback(async () => {
		await navigator.clipboard.writeText(activeCodeSnippet);
		setCopiedSdk(true);
		toast.success(t("Copied"));
		window.setTimeout(() => setCopiedSdk(false), 2e3);
	}, [activeCodeSnippet, t]);
	const handleCodeTabChange = useCallback((v) => {
		setCodeTab(v);
	}, []);
	const codeEditorConfig = TRANSFORM_IMAGE_CODE_SDK_OPTIONS.find((o) => o.id === codeTab) ?? TRANSFORM_IMAGE_CODE_SDK_OPTIONS[0];
	const sizeSectionDirty = useMemo(() => isImageTransformSizeSectionDirty(state, preferAvif, previewDefaults), [
		state,
		preferAvif,
		previewDefaults
	]);
	const qualitySectionDirty = useMemo(() => isImageTransformQualitySectionDirty(state, preferAvif, previewDefaults), [
		state,
		preferAvif,
		previewDefaults
	]);
	const styleSectionDirty = useMemo(() => isImageTransformStyleSectionDirty(state, preferAvif, previewDefaults), [
		state,
		preferAvif,
		previewDefaults
	]);
	const sizeComparison = useMemo(() => {
		if (originalSizeBytes <= 0) return null;
		if (previewBytesLoading || !previewMeasureDone) return { kind: "loading" };
		if (previewBytes === null) return { kind: "unavailable" };
		const original = originalSizeBytes;
		const preview = previewBytes;
		const delta = original - preview;
		return {
			kind: "ready",
			original,
			preview,
			delta,
			pctOfOriginal: Math.min(100, Math.round(preview / original * 100)),
			pctSaved: original > 0 ? Math.round(Math.max(0, delta) / original * 100) : 0,
			pctLarger: original > 0 && delta < 0 ? Math.round(-delta / original * 100) : 0
		};
	}, [
		originalSizeBytes,
		previewBytes,
		previewBytesLoading,
		previewMeasureDone
	]);
	const canUndo = undoStackRef.current.length > 0;
	const canRedo = redoStackRef.current.length > 0;
	useEffect(() => {
		if (!open || mainView !== "design") return;
		const id = requestAnimationFrame(() => {
			canvasRef.current?.focus({ preventScroll: true });
		});
		return () => cancelAnimationFrame(id);
	}, [
		open,
		mainView,
		fileId,
		canvasRef
	]);
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			const t$1 = e.target;
			if (t$1?.closest("input, textarea, [contenteditable=\"true\"]") || t$1?.closest("[role=\"textbox\"]")) return;
			if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== "z") return;
			e.preventDefault();
			if (e.shiftKey) redo();
			else undo();
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [
		open,
		undo,
		redo
	]);
	if (!open) return null;
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: fileName.trim() || t("Transform image"),
		headerBottom: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-muted/30 px-4 py-2 shadow-none",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 flex-wrap items-center gap-2",
				children: /* @__PURE__ */ jsx(Tabs, {
					value: mainView,
					onValueChange: (v) => setMainView(v),
					className: "shadow-none",
					children: /* @__PURE__ */ jsxs(TabsList, {
						className: "grid h-9 w-full max-w-xs grid-cols-2 shadow-none",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "design",
							className: "text-[13px] shadow-none data-[state=active]:shadow-none",
							children: t("Design")
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "code",
							className: "text-[13px] shadow-none data-[state=active]:shadow-none",
							children: t("Code")
						})]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 flex-wrap items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 gap-1.5 px-2.5 text-[12px]",
						disabled: !canUndo,
						onClick: undo,
						"aria-label": t("Undo"),
						title: `${t("Undo")} (⌘Z)`,
						children: [/* @__PURE__ */ jsx(Undo2, { className: "h-3.5 w-3.5" }), t("Undo")]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 gap-1.5 px-2.5 text-[12px]",
						disabled: !canRedo,
						onClick: redo,
						"aria-label": t("Redo"),
						title: `${t("Redo")} (⌘⇧Z)`,
						children: [/* @__PURE__ */ jsx(Redo2, { className: "h-3.5 w-3.5" }), t("Redo")]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 gap-1.5 px-2.5 text-[12px]",
						onClick: resetAllToDefaults,
						children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" }), t("Reset all")]
					}),
					mainView === "design" ? /* @__PURE__ */ jsx(TransformImagePresetsPopover, {
						preferAvif,
						previewDefaults,
						projectId,
						state,
						setState,
						recordUndoPoint
					}) : null
				]
			})]
		}),
		fullscreen: true,
		useSidebar: false,
		constrainWidth: false,
		constrainFooterWidth: false,
		maxWidth: "",
		contentPadding: false,
		skipInitialFieldFocus: true,
		contentWrapperClassName: "flex-1 min-h-0 overflow-hidden",
		fullscreenInnerClassName: "flex h-full min-h-0 flex-1 flex-col px-0 py-0 !max-w-none w-full",
		contentClassName: "flex min-h-0 flex-1 flex-col",
		onClose,
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full min-w-0 items-center justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("flex min-w-0 flex-1 items-center gap-2.5", sizeComparison != null && "min-h-11"),
				"aria-busy": sizeComparison?.kind === "loading",
				children: [
					sizeComparison && sizeComparison.kind === "loading" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PreviewReductionRing, {
						progress: 0,
						tone: "muted",
						ringSize: FOOTER_PREVIEW_RING_PX,
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" })
					}), /* @__PURE__ */ jsx("p", {
						className: "min-w-0 flex-1 truncate text-[11px] text-muted-foreground",
						children: t("Measuring preview size…")
					})] }),
					sizeComparison && sizeComparison.kind === "unavailable" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PreviewReductionRing, {
						progress: 0,
						tone: "muted",
						ringSize: FOOTER_PREVIEW_RING_PX,
						children: /* @__PURE__ */ jsx("span", {
							className: "text-[9px] font-normal text-muted-foreground",
							children: "-"
						})
					}), /* @__PURE__ */ jsxs("p", {
						className: "min-w-0 flex-1 truncate text-[11px] text-muted-foreground",
						children: [
							t("Preview size unavailable · original"),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-medium tabular-nums text-foreground",
								children: formatBytes(originalSizeBytes)
							})
						]
					})] }),
					sizeComparison && sizeComparison.kind === "ready" && /* @__PURE__ */ jsxs(Fragment, { children: [sizeComparison.delta > 0 ? /* @__PURE__ */ jsx(PreviewReductionRing, {
						progress: sizeComparison.pctSaved,
						tone: "success",
						ringSize: FOOTER_PREVIEW_RING_PX,
						children: /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-baseline justify-center gap-px tabular-nums leading-none text-[10px] font-medium text-foreground",
							children: [sizeComparison.pctSaved, /* @__PURE__ */ jsx("span", {
								className: "text-[8px] font-normal text-muted-foreground",
								children: "%"
							})]
						})
					}) : sizeComparison.delta < 0 ? /* @__PURE__ */ jsx(PreviewReductionRing, {
						progress: Math.min(100, sizeComparison.pctOfOriginal),
						tone: "warning",
						ringSize: FOOTER_PREVIEW_RING_PX,
						children: /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-baseline justify-center gap-px tabular-nums leading-none text-[10px] font-medium text-amber-700 dark:text-amber-400",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[8px] font-normal",
									children: "+"
								}),
								sizeComparison.pctLarger,
								/* @__PURE__ */ jsx("span", {
									className: "text-[8px] font-normal text-muted-foreground",
									children: "%"
								})
							]
						})
					}) : /* @__PURE__ */ jsx(PreviewReductionRing, {
						progress: Math.min(100, sizeComparison.pctOfOriginal),
						tone: "muted",
						ringSize: FOOTER_PREVIEW_RING_PX,
						children: /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-baseline justify-center gap-px tabular-nums leading-none text-[10px] font-medium text-muted-foreground",
							children: [sizeComparison.pctOfOriginal, /* @__PURE__ */ jsx("span", {
								className: "text-[8px] font-normal text-muted-foreground/80",
								children: "%"
							})]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ jsxs("p", {
							className: "truncate text-[11px] leading-tight text-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-medium tabular-nums",
									children: formatBytes(sizeComparison.original)
								}),
								/* @__PURE__ */ jsx(ArrowRight, { className: "mx-1 inline h-3 w-3 shrink-0 align-text-bottom text-muted-foreground" }),
								/* @__PURE__ */ jsx("span", {
									className: "font-medium tabular-nums",
									children: formatBytes(sizeComparison.preview)
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [
										" ",
										"· ",
										sizeComparison.pctOfOriginal,
										"% ",
										t("of original")
									]
								}),
								sizeComparison.delta < 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx(Badge, {
									variant: "warning",
									className: "ms-0.5 inline h-4 align-middle px-1 py-0 text-[9px]",
									children: t("Larger payload")
								})] }) : null
							]
						})
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						disabled: previewDownloadBusy,
						onClick: () => void downloadPreview(),
						children: [previewDownloadBusy ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Download, { className: "me-1.5 h-3.5 w-3.5" }), t("Download")]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: copyPreviewUrl,
						children: [/* @__PURE__ */ jsx(Copy, { className: "me-1.5 h-3.5 w-3.5" }), t("Copy URL")]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: openPreviewInNewTab,
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("Open")]
					})
				]
			})]
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 flex-1 flex-col md:flex-row",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
				children: mainView === "design" ? /* @__PURE__ */ jsx("div", {
					className: "relative flex min-h-0 flex-1 flex-col overflow-hidden bg-background",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative z-[1] flex min-h-0 flex-1 flex-col",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative min-h-0 flex-1",
							children: [/* @__PURE__ */ jsx("div", {
								ref: canvasRef,
								...bindCanvas,
								tabIndex: -1,
								role: "application",
								"aria-label": t("Pan and zoom preview. Use the scroll wheel to zoom, drag to pan. Keys: + or = zoom in, - zoom out, 0 reset."),
								onKeyDown: handleCanvasKeyDown,
								className: cn("absolute inset-0 overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", isDragging ? "cursor-grabbing" : "cursor-grab"),
								children: /* @__PURE__ */ jsxs("div", {
									className: "relative h-full w-full will-change-transform",
									style: {
										transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
										transformOrigin: "0 0"
									},
									children: [/* @__PURE__ */ jsx(SchemaBlueprintMat, {}), /* @__PURE__ */ jsx("div", {
										className: "relative z-10 flex h-full w-full items-center justify-center px-4 py-10",
										children: /* @__PURE__ */ jsx(TransformImageDesignOverlay, {
											zoom,
											state,
											setState,
											localImgSrc: localFileViewUrl,
											originalImgSrc: untransformedPreviewUrl,
											serverImgSrc: debouncedDesignCanvasPreviewUrl,
											imgAlt: fileName,
											canvasMode,
											onTransformInteractionStart,
											onTransformInteractionEnd
										})
									})]
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "pointer-events-none absolute inset-x-4 top-4 z-20 flex flex-wrap items-center justify-between gap-x-3 gap-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "pointer-events-auto flex shrink-0 items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
											onClick: zoomIn,
											disabled: zoomInDisabled,
											"aria-label": t("Zoom in"),
											children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ jsx("div", {
											className: "flex h-8 min-w-[64px] items-center justify-center rounded-md border border-border bg-card/95 px-3 backdrop-blur-sm",
											children: /* @__PURE__ */ jsxs("span", {
												className: "text-[12px] font-medium text-foreground",
												children: [zoomPercentage, "%"]
											})
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
											onClick: zoomOut,
											disabled: zoomOutDisabled,
											"aria-label": t("Zoom out"),
											children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
											onClick: resetView,
											"aria-label": t("Reset pan and zoom"),
											children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "pointer-events-auto shrink-0",
									children: /* @__PURE__ */ jsxs(ToggleGroup, {
										type: "single",
										value: canvasMode,
										onValueChange: (v) => {
											if (v === "edit" || v === "compare") setCanvasMode(v);
										},
										variant: "outline",
										size: "sm",
										className: "rounded-md border border-border bg-card/95 p-0.5 shadow-none backdrop-blur-sm",
										"aria-label": t("Design canvas mode"),
										children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
											value: "edit",
											className: "h-8 px-3 text-[12px] data-[state=on]:bg-muted",
											children: t("Edit")
										}), /* @__PURE__ */ jsx(ToggleGroupItem, {
											value: "compare",
											className: "h-8 px-3 text-[12px] data-[state=on]:bg-muted",
											children: t("Compare")
										})]
									})
								})]
							})]
						})
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "relative flex min-h-0 flex-1 flex-col overflow-hidden bg-background",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative min-h-0 flex-1",
						children: [
							/* @__PURE__ */ jsx(SchemaBlueprintMat, {}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 overflow-hidden",
								children: /* @__PURE__ */ jsx(CodeEditor, {
									modelPath: codeEditorConfig.modelPath,
									value: activeCodeSnippet,
									language: codeEditorConfig.language,
									readOnly: true,
									minimap: false,
									height: "100%",
									className: "h-full min-h-0 rounded-none border-0"
								}, codeTab)
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end p-3 sm:p-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "pointer-events-auto flex max-w-full flex-wrap items-center justify-end gap-2",
									children: [/* @__PURE__ */ jsxs(Select, {
										value: codeTab,
										onValueChange: handleCodeTabChange,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											className: "h-8 w-[min(200px,calc(100vw-8rem))] shrink-0 border-border bg-card/95 text-[12px] shadow-none backdrop-blur-sm",
											"aria-label": t("SDK example"),
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "SDK" })
										}), /* @__PURE__ */ jsx(SelectContent, {
											position: "popper",
											className: "z-[10070] max-h-[min(60dvh,360px)] overflow-y-auto",
											children: TRANSFORM_IMAGE_CODE_SDK_OPTIONS.map((opt) => /* @__PURE__ */ jsx(SelectItem, {
												value: opt.id,
												className: "text-[13px]",
												children: opt.label
											}, opt.id))
										})]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-8 w-8 shrink-0 border-border bg-card/95 p-0 shadow-none backdrop-blur-sm me-2",
										onClick: copyActiveCode,
										"aria-label": copiedSdk ? t("Copied") : t("Copy code example"),
										children: copiedSdk ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
									})]
								})
							})
						]
					})
				})
			}), /* @__PURE__ */ jsx("aside", {
				className: "flex max-h-[min(48dvh,420px)] min-h-0 w-full shrink-0 flex-col border-t border-border bg-background md:max-h-none md:w-[min(420px,100%)] md:border-s md:border-t-0",
				children: /* @__PURE__ */ jsx("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 py-4",
					children: /* @__PURE__ */ jsxs(Accordion, {
						type: "multiple",
						defaultValue: ["size"],
						className: "w-full",
						children: [
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "size",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: cn("text-[13px] hover:no-underline [&>span]:min-w-0"),
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 flex-1 items-center gap-2 pe-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "min-w-0 flex-1 truncate py-0.5",
											children: t("Size & crop")
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: cn("h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground", !sizeSectionDirty && "invisible pointer-events-none"),
											"aria-label": t("Reset size and crop"),
											title: sizeSectionDirty ? t("Reset size and crop") : void 0,
											tabIndex: sizeSectionDirty ? 0 : -1,
											"aria-hidden": !sizeSectionDirty,
											onPointerDown: (e) => {
												if (!sizeSectionDirty) return;
												e.stopPropagation();
											},
											onClick: (e) => {
												if (!sizeSectionDirty) return;
												e.preventDefault();
												e.stopPropagation();
												resetSizeSection();
											},
											children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" })
										})]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "space-y-4 px-0.5 pt-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-2",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "transform-width",
														className: "text-[12px] text-muted-foreground",
														children: t("Width (px)")
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[12px] tabular-nums text-foreground",
														children: state.width === null ? "-" : state.width
													})]
												}),
												state.width !== null && /* @__PURE__ */ jsx(Slider, {
													min: 64,
													max: 2e3,
													step: 1,
													value: [state.width],
													onValueChange: ([v]) => setState((s) => ({
														...s,
														width: Math.round(v ?? s.width ?? 480)
													})),
													className: "py-1"
												}),
												/* @__PURE__ */ jsx(NullablePxInput, {
													id: "transform-width",
													value: state.width,
													onChange: (width) => setState((s) => ({
														...s,
														width
													})),
													restoreValue: 480,
													min: 64,
													max: 4e3
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-2",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "transform-height",
														className: "text-[12px] text-muted-foreground",
														children: t("Height (px)")
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[12px] tabular-nums text-foreground",
														children: state.height === null ? "-" : state.height
													})]
												}),
												state.height !== null && /* @__PURE__ */ jsx(Slider, {
													min: 1,
													max: 2e3,
													step: 1,
													value: [state.height],
													onValueChange: ([v]) => setState((s) => ({
														...s,
														height: Math.round(v ?? s.height ?? 480)
													})),
													className: "py-1"
												}),
												/* @__PURE__ */ jsx(NullablePxInput, {
													id: "transform-height",
													value: state.height,
													onChange: (height) => setState((s) => ({
														...s,
														height
													})),
													restoreValue: 480,
													min: 1,
													max: 4e3
												})
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] leading-snug text-muted-foreground",
											children: t("Null width or height omits that dimension from the preview URL so the API derives sizing (often from the other side). A number is an explicit pixel target.")
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "min-w-0 space-y-2",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Label, {
													className: "shrink-0 text-[12px] text-muted-foreground",
													children: t("Gravity")
												}), /* @__PURE__ */ jsx("span", {
													className: "ms-auto min-w-0 shrink-0 whitespace-nowrap text-end font-mono text-[10px] leading-none tracking-wide text-muted-foreground",
													title: state.gravity,
													"aria-live": "polite",
													children: state.gravity
												})]
											}), /* @__PURE__ */ jsx("div", {
												className: "w-full max-w-[11.5rem] rounded-lg border border-border bg-muted/25 p-px shadow-inner dark:bg-muted/15",
												role: "group",
												"aria-label": t("Crop gravity"),
												children: /* @__PURE__ */ jsx("div", {
													className: "grid grid-cols-3 gap-px bg-border/70",
													children: TRANSFORM_IMAGE_GRAVITY_GRID_ROWS.flatMap((row, ri) => row.map((g, ci) => {
														const Icon$1 = GRAVITY_PICKER_ICON[g];
														const selected = state.gravity === g;
														const i = ri * 3 + ci;
														return /* @__PURE__ */ jsx("button", {
															type: "button",
															className: cn("relative flex aspect-square min-h-10 w-full min-w-0 items-center justify-center", "bg-background/90 transition-colors duration-150", "hover:bg-muted/70 hover:text-foreground", "focus-visible:z-[2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", selected ? "z-[1] bg-primary/[0.12] text-primary ring-1 ring-inset ring-primary/40 dark:bg-primary/18 dark:ring-primary/55" : "text-muted-foreground", i === 0 ? "rounded-ss-[calc(var(--radius-lg)_-_1px)]" : i === 2 ? "rounded-se-[calc(var(--radius-lg)_-_1px)]" : i === 6 ? "rounded-es-[calc(var(--radius-lg)_-_1px)]" : i === 8 ? "rounded-ee-[calc(var(--radius-lg)_-_1px)]" : ""),
															"aria-label": g,
															"aria-pressed": selected,
															title: g,
															onClick: () => setState((s) => ({
																...s,
																gravity: g
															})),
															children: /* @__PURE__ */ jsx(Icon$1, {
																className: cn("size-[15px] shrink-0", ICON_NO_RTL_FLIP_CLASS, selected ? "opacity-100" : "opacity-[0.72]"),
																strokeWidth: selected ? 2.25 : 1.85,
																"aria-hidden": true
															})
														}, g);
													}))
												})
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "quality",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: cn("text-[13px] hover:no-underline [&>span]:min-w-0"),
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 flex-1 items-center gap-2 pe-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "min-w-0 flex-1 truncate py-0.5",
											children: t("Quality & format")
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: cn("h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground", !qualitySectionDirty && "invisible pointer-events-none"),
											"aria-label": t("Reset quality and format"),
											title: qualitySectionDirty ? t("Reset quality and format") : void 0,
											tabIndex: qualitySectionDirty ? 0 : -1,
											"aria-hidden": !qualitySectionDirty,
											onPointerDown: (e) => {
												if (!qualitySectionDirty) return;
												e.stopPropagation();
											},
											onClick: (e) => {
												if (!qualitySectionDirty) return;
												e.preventDefault();
												e.stopPropagation();
												resetQualitySection();
											},
											children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" })
										})]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "space-y-4 px-0.5 pt-1",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ jsx(Label, {
												className: "text-[12px] text-muted-foreground",
												children: t("Quality")
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[12px] tabular-nums text-foreground",
												children: state.quality
											})]
										}), /* @__PURE__ */ jsx(Slider, {
											min: 1,
											max: 100,
											step: 1,
											value: [state.quality],
											onValueChange: ([v]) => setState((s) => ({
												...s,
												quality: Math.round(v ?? s.quality)
											}))
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Label, {
											className: "text-[12px] text-muted-foreground",
											children: t("Output format")
										}), /* @__PURE__ */ jsxs(Select, {
											value: state.output ?? "original",
											onValueChange: (v) => setState((s) => ({
												...s,
												output: v === "original" ? null : v
											})),
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Original") })
											}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
												value: "original",
												className: "text-[13px]",
												children: t("Original (no conversion)")
											}), OUTPUT_FORMAT_LABELS.map(({ value, label }) => /* @__PURE__ */ jsx(SelectItem, {
												value,
												className: "text-[13px]",
												children: label
											}, value))] })]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "style",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: cn("text-[13px] hover:no-underline [&>span]:min-w-0"),
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 flex-1 items-center gap-2 pe-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "min-w-0 flex-1 truncate py-0.5",
											children: t("Style & effects")
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: cn("h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground", !styleSectionDirty && "invisible pointer-events-none"),
											"aria-label": t("Reset style and effects"),
											title: styleSectionDirty ? t("Reset style and effects") : void 0,
											tabIndex: styleSectionDirty ? 0 : -1,
											"aria-hidden": !styleSectionDirty,
											onPointerDown: (e) => {
												if (!styleSectionDirty) return;
												e.stopPropagation();
											},
											onClick: (e) => {
												if (!styleSectionDirty) return;
												e.preventDefault();
												e.stopPropagation();
												resetStyleSection();
											},
											children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" })
										})]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "space-y-4 px-0.5 pt-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-2",
													children: [/* @__PURE__ */ jsx(Label, {
														className: "text-[12px] text-muted-foreground",
														children: t("Opacity")
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[12px] tabular-nums text-foreground",
														children: [Math.round(state.opacity * 100), "%"]
													})]
												}),
												/* @__PURE__ */ jsx(Slider, {
													min: 0,
													max: 100,
													step: 1,
													value: [Math.round(state.opacity * 100)],
													onValueChange: ([v]) => setState((s) => ({
														...s,
														opacity: (v ?? 100) / 100
													}))
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[11px] text-muted-foreground",
													children: t("The preview reflects opacity when the output format supports transparency.")
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-2",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "transform-rotation",
														className: "text-[12px] text-muted-foreground",
														children: t("Rotation (degrees)")
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[12px] tabular-nums text-foreground",
														children: [state.rotation, "°"]
													})]
												}),
												/* @__PURE__ */ jsx(Slider, {
													min: -360,
													max: 360,
													step: 1,
													value: [state.rotation],
													onValueChange: ([v]) => setState((s) => ({
														...s,
														rotation: Math.round(Math.min(360, Math.max(-360, v ?? s.rotation)))
													})),
													className: "py-1"
												}),
												/* @__PURE__ */ jsx(Input, {
													id: "transform-rotation",
													type: "number",
													min: -360,
													max: 360,
													className: "h-9 text-[13px]",
													value: state.rotation,
													onChange: (e) => {
														const v = parseInt(e.target.value, 10);
														setState((s) => ({
															...s,
															rotation: Number.isFinite(v) ? Math.min(360, Math.max(-360, v)) : 0
														}));
													},
													onKeyDown: (e) => {
														if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
														e.preventDefault();
														recordUndoPoint();
														const step = e.shiftKey ? 15 : 1;
														const delta = e.key === "ArrowLeft" ? -step : step;
														setState((s) => ({
															...s,
															rotation: Math.min(360, Math.max(-360, s.rotation + delta))
														}));
													}
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx(Label, {
												className: "text-[12px] text-muted-foreground",
												children: t("Border width (px)")
											}), /* @__PURE__ */ jsx(Input, {
												type: "number",
												min: 0,
												max: 100,
												className: "h-9 text-[13px]",
												value: state.borderWidth || "",
												onChange: (e) => {
													const v = parseInt(e.target.value, 10);
													setState((s) => ({
														...s,
														borderWidth: Number.isFinite(v) ? Math.min(100, Math.max(0, v)) : 0
													}));
												}
											})]
										}),
										/* @__PURE__ */ jsx(HexColorField, {
											id: "transform-border-color",
											label: t("Border color"),
											value: state.borderColor,
											onChange: (borderColor) => setState((s) => ({
												...s,
												borderColor
											})),
											allowClear: true,
											helperText: t("Picker or hex (no #). Up to 12 API chars. Clear to omit.")
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ jsx(Label, {
												className: "text-[12px] text-muted-foreground",
												children: t("Border radius (px)")
											}), /* @__PURE__ */ jsx(Input, {
												type: "number",
												min: 0,
												max: 4e3,
												className: "h-9 text-[13px]",
												value: state.borderRadius || "",
												onChange: (e) => {
													const v = parseInt(e.target.value, 10);
													setState((s) => ({
														...s,
														borderRadius: Number.isFinite(v) ? Math.min(4e3, Math.max(0, v)) : 0
													}));
												}
											})]
										}),
										/* @__PURE__ */ jsx(HexColorField, {
											id: "transform-background",
											label: t("Background"),
											value: state.background,
											onChange: (background) => setState((s) => ({
												...s,
												background
											})),
											allowClear: true,
											helperText: t("Clear when unused (e.g. transparent PNG).")
										})
									]
								})]
							})
						]
					})
				})
			})]
		})
	});
}
var INSPECTOR_PREVIEW_MAX_WIDTH_CSS = "min(100%, 28rem)";
var INSPECTOR_PREVIEW_MAX_HEIGHT_CSS = "min(50dvh, 32rem)";
function FileInspectorPanel({ projectId, bucketId, fileId, panelTab, onClose, presentation = "inline" }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const avifSupported = useAvifSupport();
	const { data: file, isLoading, isError } = useFile(projectId, bucketId, fileId);
	const { data: bucket } = useBucket(projectId, bucketId);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSecurityTab = canShowBucketSecuritySettings(access, features);
	const [videoPlaybackError, setVideoPlaybackError] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [previewIntrinsicPx, setPreviewIntrinsicPx] = useState(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [transformWizardOpen, setTransformWizardOpen] = useState(false);
	const inspectorPreviewWidthPx = useMemo(() => getStorageInspectorPreviewBaseWidthPx(), []);
	const inspectorTab = useMemo(() => {
		if (!showSecurityTab) return "overview";
		if (panelTab === "permissions" || panelTab === "tokens") return panelTab;
		if (panelTab === "security") return "permissions";
		return "overview";
	}, [showSecurityTab, panelTab]);
	const inspectorPreviewRequestWidthPx = useMemo(() => {
		return getStorageInspectorPreviewWidthFromBasePx(inspectorPreviewWidthPx, file?.sizeOriginal);
	}, [inspectorPreviewWidthPx, file?.sizeOriginal]);
	const previewUrl = useMemo(() => {
		if (!file || !projectId || !bucketId) return null;
		if (!isStoragePreviewSupportedMimeType(file.mimeType)) return null;
		return buildAdminStorageInspectorPreviewUrl(projectId, bucketId, file.$id, {
			preferAvif: avifSupported,
			initialPreviewRequestWidthPx: inspectorPreviewRequestWidthPx,
			originalSizeBytes: file.sizeOriginal
		});
	}, [
		file,
		projectId,
		bucketId,
		avifSupported,
		inspectorPreviewRequestWidthPx
	]);
	const videoSourceUrl = useMemo(() => {
		if (!file || !projectId || !bucketId) return null;
		if (!isStorageVideoPreviewSupportedMimeType(file.mimeType)) return null;
		return buildAdminFileViewUrl(projectId, bucketId, file.$id);
	}, [
		file,
		projectId,
		bucketId
	]);
	useEffect(() => {
		setImageLoaded(false);
		setPreviewIntrinsicPx(null);
		setVideoPlaybackError(false);
	}, [previewUrl, videoSourceUrl]);
	const onVideoLoadedMetadata = useCallback((e) => {
		const v = e.currentTarget;
		const reveal = () => setImageLoaded(true);
		const d = v.duration;
		if (!Number.isFinite(d) || d <= 0) return;
		const t$1 = Math.min(.05, Math.max(d / 1e3, 1e-5), d * .99);
		let revealed = false;
		const safeReveal = () => {
			if (revealed) return;
			revealed = true;
			reveal();
		};
		let seekFallbackId;
		const onSeeked = () => {
			v.removeEventListener("seeked", onSeeked);
			if (seekFallbackId !== void 0) window.clearTimeout(seekFallbackId);
			safeReveal();
		};
		v.addEventListener("seeked", onSeeked, { once: true });
		seekFallbackId = window.setTimeout(() => {
			v.removeEventListener("seeked", onSeeked);
			safeReveal();
		}, 1500);
		try {
			v.currentTime = t$1;
		} catch {
			if (seekFallbackId !== void 0) window.clearTimeout(seekFallbackId);
			safeReveal();
		}
	}, []);
	const onVideoLoadedData = useCallback((e) => {
		const v = e.currentTarget;
		if (!Number.isFinite(v.duration) || v.duration <= 0) setImageLoaded(true);
	}, []);
	const inspectorPreviewImageMaxStyle = useMemo(() => {
		if (!previewIntrinsicPx) return void 0;
		const r = Math.max(1, previewIntrinsicPx.dpr);
		const cssMaxW = previewIntrinsicPx.w / r;
		const cssMaxH = previewIntrinsicPx.h / r;
		return {
			maxWidth: `min(${INSPECTOR_PREVIEW_MAX_WIDTH_CSS}, ${cssMaxW}px)`,
			maxHeight: `min(${INSPECTOR_PREVIEW_MAX_HEIGHT_CSS}, ${cssMaxH}px)`
		};
	}, [previewIntrinsicPx]);
	const deleteFileMutation = useMutation({
		mutationFn: async (targetFileId) => {
			if (!projectId || !bucketId || !targetFileId) throw new Error("Project ID, Bucket ID, and File ID are required");
			return await sdk.forProject(projectId).storage.deleteFile({
				bucketId,
				fileId: targetFileId
			});
		},
		onSuccess: async (_data, targetFileId) => {
			removeCachedFile(queryClient, projectId, bucketId, targetFileId);
			await queryClient.refetchQueries({ queryKey: Dependencies.FILES });
			toast.success(t("File has been deleted"));
			setDeleteDialogOpen(false);
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId
				},
				search: (prev) => {
					const next = { ...prev };
					delete next.file;
					delete next.filePanel;
					return next;
				}
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const handleDownload = () => {
		if (!projectId || !bucketId || !file) return;
		const url = sdk.forProject(projectId).storage.getFileDownload({
			bucketId,
			fileId: file.$id
		});
		const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
		window.open(urlWithMode, "_blank");
	};
	const handlePreview = () => {
		if (!projectId || !bucketId || !file) return;
		const projectSdk = sdk.forProject(projectId);
		const raw = file.mimeType?.toLowerCase().startsWith("video/") ? projectSdk.storage.getFileView({
			bucketId,
			fileId: file.$id
		}) : projectSdk.storage.getFilePreview({
			bucketId,
			fileId: file.$id
		});
		const urlWithMode = raw + (raw.includes("?") ? "&" : "?") + "mode=admin";
		window.open(urlWithMode, "_blank");
	};
	const handleCopyFileViewUrl = () => {
		if (!projectId || !bucketId) return;
		const idForClipboard = file?.$id ?? fileId;
		if (!idForClipboard) return;
		copyToClipboard("File view URL", buildAdminFileViewUrl(projectId, bucketId, idForClipboard));
	};
	const closePreviewButton = onClose && presentation === "inline" ? /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "ghost",
		size: "icon",
		className: "h-6 w-6",
		onClick: onClose,
		"aria-label": t("Close file preview"),
		children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
	}) : null;
	if (!fileId) return /* @__PURE__ */ jsxs("aside", {
		className: cn("flex h-full min-h-0 w-full min-w-0 flex-col", STORAGE_FILES_SPLIT_PANE_BG_CLASS),
		children: [/* @__PURE__ */ jsxs("div", {
			className: STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS,
			children: [/* @__PURE__ */ jsx(PanelRight, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
				className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("File")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col items-center justify-center gap-3 px-5 py-8 text-center",
			children: [/* @__PURE__ */ jsx(FileText, { className: "h-10 w-10 text-muted-foreground/45" }), /* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[14px] font-medium text-foreground",
					children: t("No file selected")
				}), /* @__PURE__ */ jsx("p", {
					className: "max-w-sm text-[13px] leading-relaxed text-muted-foreground",
					children: t("Select a row in the table to view preview and metadata, or use Create file in the header to upload.")
				})]
			})]
		})]
	});
	if (!file) {
		if (isLoading) return /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs("aside", {
				className: cn("flex h-full min-h-0 w-full min-w-0 flex-col", STORAGE_FILES_SPLIT_PANE_BG_CLASS),
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn(STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS, "justify-between"),
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(PanelRight, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
								className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t("File")
							})]
						}),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6",
								onClick: handleCopyFileViewUrl,
								"aria-label": t("Copy file view URL"),
								children: /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							className: "text-xs",
							children: t("Copy view URL")
						})] }),
						closePreviewButton
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-1 items-center justify-center px-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Loading file…")
					})
				})]
			})
		});
		return /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs("aside", {
				className: cn("flex h-full min-h-0 w-full min-w-0 flex-col", STORAGE_FILES_SPLIT_PANE_BG_CLASS),
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn(STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS, "justify-between"),
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(PanelRight, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
								className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t("File")
							})]
						}),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6",
								onClick: handleCopyFileViewUrl,
								"aria-label": t("Copy file view URL"),
								children: /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							className: "text-xs",
							children: t("Copy view URL")
						})] }),
						closePreviewButton
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-1 items-center justify-center px-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: isError ? t("Could not load file") : t("File not found")
					})
				})]
			})
		});
	}
	const isPending = file.chunksTotal > 0 && file.chunksUploaded < file.chunksTotal;
	const compressionLabel = file.compression === "none" || !file.compression ? t("None") : file.compression === "gzip" ? "Gzip" : file.compression === "zstd" ? "Zstd" : file.compression.charAt(0).toUpperCase() + file.compression.slice(1);
	const PreviewPlaceholderIcon = getStorageFileIcon(file.mimeType);
	const inspectorTabContentClass = "space-y-4 px-3 pb-6 pt-3 sm:px-6 sm:pb-8 sm:pt-4";
	const overviewBody = /* @__PURE__ */ jsxs("div", {
		className: inspectorTabContentClass,
		children: [
			isPending ? /* @__PURE__ */ jsx(Badge, {
				variant: "warning",
				className: "text-[10px] shrink-0",
				children: t("Pending upload")
			}) : null,
			!isPending && videoSourceUrl ? /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border border-border/50 bg-black",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex w-full justify-center bg-black p-1.5 sm:p-2",
					children: /* @__PURE__ */ jsx("div", {
						className: cn("relative flex aspect-video w-[min(100%,28rem,calc(min(50dvh,32rem)*16/9))] max-w-full shrink-0 items-center justify-center overflow-hidden rounded-md bg-black"),
						children: videoPlaybackError ? /* @__PURE__ */ jsxs("div", {
							className: "flex h-full min-h-0 w-full flex-col items-center justify-center gap-2 px-4 py-6 text-center",
							children: [/* @__PURE__ */ jsx(PreviewPlaceholderIcon, { className: "h-10 w-10 shrink-0 text-muted-foreground/70" }), /* @__PURE__ */ jsx("p", {
								className: "max-w-[240px] text-[12px] leading-snug text-muted-foreground",
								children: t("This video could not be played inline. Try Open preview or Download.")
							})]
						}) : /* @__PURE__ */ jsx("video", {
							className: cn("h-full w-full max-w-full object-contain outline-none", "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]", "transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0"),
							controls: true,
							playsInline: true,
							preload: "auto",
							src: videoSourceUrl,
							"aria-label": `${t("Video preview:")} ${file.name}`,
							onLoadedMetadata: onVideoLoadedMetadata,
							onLoadedData: onVideoLoadedData,
							onError: () => setVideoPlaybackError(true)
						}, videoSourceUrl)
					})
				})
			}) : null,
			!isPending && previewUrl ? /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border border-border bg-muted/20",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex w-full justify-center p-1.5 sm:p-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("relative flex aspect-video w-[min(100%,28rem,calc(min(50dvh,32rem)*16/9))] max-w-full shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted/30"),
						children: [/* @__PURE__ */ jsx("img", {
							src: previewUrl,
							alt: file.name,
							decoding: "async",
							onLoad: (e) => {
								const el = e.currentTarget;
								const dpr = typeof window !== "undefined" ? Math.max(1, window.devicePixelRatio || 1) : 1;
								if (el.naturalWidth > 0 && el.naturalHeight > 0) setPreviewIntrinsicPx({
									w: el.naturalWidth,
									h: el.naturalHeight,
									dpr
								});
								setImageLoaded(true);
							},
							className: cn("h-full w-full max-h-full max-w-full object-contain [image-rendering:auto]", "transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0"),
							style: inspectorPreviewImageMaxStyle
						}), /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "absolute bottom-2 start-2 z-10 h-8 gap-1.5 bg-background/90 text-[13px] opacity-60 shadow-sm backdrop-blur-sm transition-opacity hover:opacity-100 sm:bottom-3 sm:start-3",
							onClick: () => setTransformWizardOpen(true),
							children: [/* @__PURE__ */ jsx(Wand2, { className: "h-3.5 w-3.5 shrink-0" }), t("Transform")]
						})]
					})
				})
			}) : null,
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "truncate text-[14px] font-semibold text-foreground",
				children: file.name
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-2",
				children: /* @__PURE__ */ jsx(CopyableId, {
					id: file.$id,
					size: "sm"
				})
			})] }),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: t("MIME type")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 break-all font-mono text-[12px] text-foreground/90",
						children: file.mimeType || "-"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: t("Size")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 font-mono text-[12px] text-foreground/90",
						children: formatBytes(file.sizeOriginal)
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: t("Created")
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(file.$createdAt),
								className: "text-[12px] text-muted-foreground"
							})
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: t("Updated")
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(file.$updatedAt),
								className: "text-[12px] text-muted-foreground"
							})
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: t("Encryption")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: file.encryption === true ? t("Enabled") : t("Disabled")
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: t("Compression")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: compressionLabel
						})] })]
					}),
					file.signature ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: t("MD5 signature")
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1",
						children: /* @__PURE__ */ jsx(CopyableId, {
							id: file.signature,
							size: "sm",
							maxWidth: 200
						})
					})] }) : null,
					isPending ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: t("Upload progress")
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-1 text-[12px] text-muted-foreground",
						children: [
							file.chunksUploaded,
							" ",
							t("of"),
							" ",
							file.chunksTotal,
							" ",
							t("chunks uploaded")
						]
					})] }) : null
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-red-500/30 bg-card/50 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "border-b border-red-500/20 px-4 py-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[14px] font-semibold text-red-600 dark:text-red-400",
						children: t("Delete file")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[12px] text-muted-foreground",
						children: t("Permanently delete this file. This action cannot be undone.")
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsxs(Dialog, {
						open: deleteDialogOpen,
						onOpenChange: setDeleteDialogOpen,
						children: [/* @__PURE__ */ jsx(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "destructive",
								size: "sm",
								className: "h-8 text-[12px]",
								children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-3.5 w-3.5" }), t("Delete")]
							})
						}), /* @__PURE__ */ jsxs(DialogContent, {
							className: "sm:max-w-md p-0",
							children: [/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete file") }), /* @__PURE__ */ jsxs(DialogDescription, {
									className: "text-[13px] mt-2",
									children: [
										t("Are you sure you want to delete"),
										" ",
										/* @__PURE__ */ jsx("strong", { children: file.name }),
										"?",
										" ",
										t("This action cannot be undone.")
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => setDeleteDialogOpen(false),
									disabled: deleteFileMutation.isPending,
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: deleteFileMutation.isPending,
									onClick: () => deleteFileMutation.mutate(file.$id),
									children: t("Delete")
								})]
							})]
						})]
					})
				})]
			})
		]
	});
	const permissionsTabBody = /* @__PURE__ */ jsxs("div", {
		className: cn("min-h-0", inspectorTabContentClass),
		children: [bucket && !bucket.fileSecurity ? /* @__PURE__ */ jsxs(Alert, {
			variant: "default",
			className: "border-amber-500/30 bg-amber-500/5",
			children: [
				/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }),
				/* @__PURE__ */ jsx(AlertTitle, {
					className: "text-[12px] font-medium text-amber-600 dark:text-amber-400",
					children: t("File level security is disabled")
				}),
				/* @__PURE__ */ jsxs(AlertDescription, {
					className: "text-[11px] text-amber-600/80 dark:text-amber-400/80",
					children: [
						t("File-level permissions only apply when file level security is enabled on the bucket."),
						" ",
						/* @__PURE__ */ jsxs("span", {
							className: "whitespace-nowrap",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/projects/$projectId/storage/$bucketId/security",
								params: {
									projectId,
									bucketId
								},
								className: "font-medium underline hover:no-underline",
								children: t("Enable in bucket Security")
							}), "."]
						})
					]
				})
			]
		}) : null, /* @__PURE__ */ jsx(FileSecurity, {
			projectId,
			bucketId,
			fileId: file.$id,
			variant: "panel",
			panelSection: "permissions"
		}, file.$id)]
	});
	const tokensTabBody = /* @__PURE__ */ jsx("div", {
		className: cn("min-h-0", inspectorTabContentClass),
		children: /* @__PURE__ */ jsx(FileSecurity, {
			projectId,
			bucketId,
			fileId: file.$id,
			variant: "panel",
			panelSection: "tokens"
		}, file.$id)
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs("aside", {
			className: cn("flex h-full min-h-0 w-full min-w-0 flex-col", STORAGE_FILES_SPLIT_PANE_BG_CLASS),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn(STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS, "justify-between gap-1"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 items-center gap-2",
					children: [/* @__PURE__ */ jsx(PanelRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
						className: "truncate text-start text-[12px] font-medium leading-none text-foreground",
						children: file.name
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-0.5",
					children: [
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6",
								onClick: handleCopyFileViewUrl,
								"aria-label": t("Copy file view URL"),
								children: /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							className: "text-xs",
							children: t("Copy view URL")
						})] }),
						!isPending ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6",
								onClick: handleDownload,
								"aria-label": t("Download"),
								children: /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							className: "text-xs",
							children: t("Download")
						})] }), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6",
								onClick: handlePreview,
								"aria-label": t("Open preview"),
								children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							side: "bottom",
							className: "text-xs",
							children: t("Open preview")
						})] })] }) : null,
						closePreviewButton
					]
				})]
			}), showSecurityTab ? /* @__PURE__ */ jsxs(Tabs, {
				value: inspectorTab,
				onValueChange: (v) => {
					const next = v;
					if (!fileId) return;
					navigate({
						to: "/projects/$projectId/storage/$bucketId",
						params: {
							projectId,
							bucketId
						},
						search: (prev) => {
							const out = {
								...prev,
								file: fileId
							};
							if (next === "overview") delete out.filePanel;
							else out.filePanel = next;
							return out;
						},
						replace: true
					});
				},
				className: "flex min-h-0 flex-1 flex-col gap-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "shrink-0 border-b border-border px-3 pb-3 pt-3 sm:px-6 sm:pb-4 sm:pt-4",
					children: /* @__PURE__ */ jsxs(TabsList, {
						className: "grid h-9 w-full grid-cols-3",
						children: [
							/* @__PURE__ */ jsx(TabsTrigger, {
								value: "overview",
								className: "text-[12px] sm:text-[13px]",
								children: t("Overview")
							}),
							/* @__PURE__ */ jsx(TabsTrigger, {
								value: "permissions",
								className: "text-[12px] sm:text-[13px]",
								children: t("Permissions")
							}),
							/* @__PURE__ */ jsx(TabsTrigger, {
								value: "tokens",
								className: "text-[12px] sm:text-[13px]",
								children: t("Tokens")
							})
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
					children: [
						/* @__PURE__ */ jsx(TabsContent, {
							value: "overview",
							className: "m-0 mt-0 block outline-none data-[state=inactive]:hidden",
							children: overviewBody
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "permissions",
							className: "m-0 mt-0 block outline-none data-[state=inactive]:hidden",
							children: permissionsTabBody
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "tokens",
							className: "m-0 mt-0 block outline-none data-[state=inactive]:hidden",
							children: tokensTabBody
						})
					]
				})]
			}) : /* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
				children: overviewBody
			})]
		})
	}), /* @__PURE__ */ jsx(TransformImageWizard, {
		open: transformWizardOpen,
		onClose: () => setTransformWizardOpen(false),
		projectId,
		bucketId,
		fileId: file.$id,
		fileName: file.name,
		preferAvif: avifSupported,
		originalSizeBytes: file.sizeOriginal,
		initialPreviewRequestWidthPx: inspectorPreviewRequestWidthPx
	})] });
}
function FileInspectorDrawer({ open, onOpenChange, projectId, bucketId, fileId, panelTab }) {
	const t = useT();
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		side: "bottom",
		title: t("File preview"),
		description: t("View and manage the selected storage file"),
		maxWidth: "w-full",
		contentClassName: cn("w-full max-w-none sm:max-w-none rounded-t-xl border-t p-0", STORAGE_FILES_INSPECTOR_DRAWER_HEIGHT_CLASS),
		disableAutoFocus: true,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("flex h-full min-h-0 w-full flex-col overflow-hidden", STORAGE_FILES_SPLIT_PANE_BG_CLASS),
			children: /* @__PURE__ */ jsx(FileInspectorPanel, {
				projectId,
				bucketId,
				fileId,
				panelTab,
				presentation: "drawer"
			})
		})
	});
}
var STORAGE_FILES_STACKED_COL_STYLES = {
	$id: { width: "180px" },
	name: { minWidth: "160px" },
	mimeType: { minWidth: "140px" },
	sizeOriginal: { width: "120px" },
	$createdAt: { width: "180px" },
	$updatedAt: { width: "180px" }
};
var STORAGE_FILES_LIST_COLUMN_RESIZE_LAYOUT_KEY = STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS.join("");
function dataTransferHasFileList(dataTransfer) {
	if (!dataTransfer?.types?.length) return false;
	return Array.from(dataTransfer.types).includes("Files");
}
function View() {
	const t = useT();
	const { projectId, bucketId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const search = useSearch({ strict: false });
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSecuritySettings = canShowBucketSecuritySettings(access, features);
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const bucketIndex = pathParts.findIndex((part, idx) => part === "storage" && pathParts[idx + 1] === bucketId);
		if (bucketIndex >= 0 && pathParts[bucketIndex + 2]) {
			const tabFromPath = pathParts[bucketIndex + 2];
			if (tabFromPath === "settings") return "settings";
			if (tabFromPath === "security") return "security";
		}
		return "files";
	}, [location.pathname, bucketId]);
	const isFilesIndex = activeTab === "files" && location.pathname.replace(/\/$/, "") === `/projects/${projectId}/storage/${bucketId}`;
	const defaultFilesSort = {
		sortBy: FILES_DEFAULT_SORT_BY,
		sortOrder: FILES_DEFAULT_SORT_ORDER
	};
	const filesListParams = useMemo(() => {
		if (!isFilesIndex || typeof search !== "object") return null;
		const url = urlFromRouterLocation(location, window.location.origin);
		const parsed = parseSort(search.sort) ?? getSort(url) ?? defaultFilesSort;
		const pageFromSearch = search.page != null ? typeof search.page === "number" ? search.page : Number(search.page) : void 0;
		const limitFromSearch = search.limit != null ? typeof search.limit === "number" ? search.limit : Number(search.limit) : void 0;
		const page = Number.isInteger(pageFromSearch) && (pageFromSearch ?? 0) >= 1 ? pageFromSearch : getPage(url, 1);
		const limit = Number.isInteger(limitFromSearch) && (limitFromSearch ?? 0) >= 1 ? limitFromSearch : getLimit(url, 25);
		return {
			search: getSearch(url) ?? search.search,
			page,
			limit,
			filterMap: queryParamToMap(getQueryParam(url) ?? search.query ?? null),
			sortBy: parsed.sortBy,
			sortOrder: parsed.sortOrder
		};
	}, [
		isFilesIndex,
		search?.search,
		search?.query,
		search?.page,
		search?.limit,
		search?.sort,
		location.pathname,
		location.search,
		projectId,
		bucketId
	]);
	const urlPage = filesListParams?.page ?? 1;
	const urlLimit = filesListParams?.limit ?? 25;
	const urlSearch = filesListParams?.search;
	const urlSortBy = filesListParams?.sortBy ?? "$createdAt";
	const urlSortOrder = filesListParams?.sortOrder ?? "desc";
	const filterMap = filesListParams?.filterMap ?? /* @__PURE__ */ new Map();
	const filterQueries = filterMap.size > 0 ? Array.from(filterMap.values()) : void 0;
	const inspectorFileId = useMemo(() => {
		if (typeof search?.file === "string" && search.file.trim().length > 0) return search.file.trim();
		if (typeof window === "undefined") return void 0;
		return searchParamsFromRouterLocation(location).get("file")?.trim() || void 0;
	}, [search?.file, location.search]);
	const isFilesStackedLayout = !useMediaMinWidth(STORAGE_FILES_TABLE_PREVIEW_SPLIT_MIN_VIEWPORT_PX);
	const splitFilesTable = !isFilesStackedLayout;
	const [stackedDrawerFileId, setStackedDrawerFileId] = useState();
	const effectiveInspectorFileId = isFilesStackedLayout ? inspectorFileId ?? stackedDrawerFileId : inspectorFileId;
	useEffect(() => {
		if (inspectorFileId) setStackedDrawerFileId(void 0);
	}, [inspectorFileId]);
	const prevInspectorFileIdRef = useRef(void 0);
	useEffect(() => {
		const prev = prevInspectorFileIdRef.current;
		prevInspectorFileIdRef.current = inspectorFileId;
		if (prev && !inspectorFileId) setStackedDrawerFileId(void 0);
	}, [inspectorFileId]);
	const queryClient = useQueryClient();
	const { account } = useAuth();
	const { persistTablePaneWidthPx } = useStorageFilesTablePaneWidth(account);
	const prefetchInspectorFileData = useCallback((targetFileId) => {
		if (!projectId || !bucketId || !targetFileId) return;
		queryClient.prefetchQuery(fileQueryOptions(projectId, bucketId, targetFileId));
	}, [
		projectId,
		bucketId,
		queryClient
	]);
	const [searchInput, setSearchInput] = useState("");
	const searchDebounceRef = useRef(null);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [displayedSearch, setDisplayedSearch] = useState(void 0);
	const [displayedSortBy, setDisplayedSortBy] = useState(FILES_DEFAULT_SORT_BY);
	const [displayedSortOrder, setDisplayedSortOrder] = useState(FILES_DEFAULT_SORT_ORDER);
	const [displayedFilterQueryString, setDisplayedFilterQueryString] = useState("");
	const displayedFilterQueries = useMemo(() => {
		if (!displayedFilterQueryString) return void 0;
		const map = queryParamToMap(displayedFilterQueryString);
		return map.size > 0 ? Array.from(map.values()) : void 0;
	}, [displayedFilterQueryString]);
	const hasInitedDisplayedRef = useRef(false);
	const [uploadFileDialogOpen, setUploadFileDialogOpen] = useState(false);
	const [uploadPrefillFiles, setUploadPrefillFiles] = useState(null);
	const clearUploadPrefill = useCallback(() => setUploadPrefillFiles(null), []);
	const [filesSectionFileDragActive, setFilesSectionFileDragActive] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState(/* @__PURE__ */ new Set());
	const fileSelectionAnchorRef = useRef(null);
	const stackedRowTouchActivateRef = useRef(false);
	const [fileMultiSelectModifierActive, setFileMultiSelectModifierActive] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	useEffect(() => {
		if (search?.create !== "file" || uploadFileDialogOpen) return;
		setUploadFileDialogOpen(true);
		navigate({
			to: location.pathname,
			search: (prev) => {
				if (!prev || typeof prev !== "object") return {};
				const next = { ...prev };
				delete next.create;
				return Object.keys(next).length === 0 ? {} : next;
			},
			replace: true
		});
	}, [
		search?.create,
		uploadFileDialogOpen,
		navigate,
		location.pathname
	]);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const filterQueryString = filterMap.size > 0 ? mapToQueryParam(filterMap) : "";
	const { queueUpload } = useUploadQueue(projectId, bucketId, { onUploadComplete: useCallback(() => {
		if (projectId && bucketId) queryClient.refetchQueries({ queryKey: [
			"files",
			"project",
			projectId,
			"bucket",
			bucketId
		] });
	}, [
		queryClient,
		projectId,
		bucketId
	]) });
	const { data: bucket } = useBucket(projectId, bucketId);
	const lastDisplayBucketRef = useRef(null);
	useLayoutEffect(() => {
		if (lastDisplayBucketRef.current && bucketId && lastDisplayBucketRef.current.$id !== bucketId) lastDisplayBucketRef.current = null;
	}, [bucketId]);
	useEffect(() => {
		if (bucket && bucketId && bucket.$id === bucketId) lastDisplayBucketRef.current = bucket;
	}, [bucket, bucketId]);
	const displayBucket = bucket ?? (lastDisplayBucketRef.current?.$id === bucketId ? lastDisplayBucketRef.current : null) ?? getBucketFromProjectCaches(queryClient, projectId, bucketId) ?? void 0;
	useEffect(() => {
		setSearchInput(urlSearch ?? "");
	}, [urlSearch]);
	useEffect(() => {
		if (!isFilesIndex || !filesListParams) return;
		if (!hasInitedDisplayedRef.current) {
			setDisplayedPage(urlPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
			hasInitedDisplayedRef.current = true;
		}
	}, [
		isFilesIndex,
		filesListParams,
		urlPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString
	]);
	useEffect(() => {
		if (activeTab !== "files") return;
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = searchInput.trim();
			if (trimmed === (urlSearch ?? "")) return;
			if (trimmed.length > 0 && trimmed.length < 3) return;
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId
				},
				search: (prev) => {
					const built = buildListSearchParams({
						search: trimmed || void 0,
						query: filterQueryString || void 0,
						page: 1,
						limit: urlLimit,
						sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
					});
					const next = {
						...prev,
						...built
					};
					delete next.file;
					if (!trimmed) delete next.search;
					if (!filterQueryString) delete next.query;
					return next;
				},
				replace: true
			});
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [
		activeTab,
		searchInput,
		projectId,
		bucketId,
		navigate,
		urlSearch,
		urlLimit,
		urlSortBy,
		urlSortOrder,
		filterQueryString
	]);
	const { data: requestedFilesData, isLoading: filesLoading, isFetching: filesFetching, isFetched: filesFetched } = useBucketFiles(projectId, bucketId, urlPage - 1, urlLimit, urlSearch ?? void 0, void 0, filterQueries, urlSortBy, urlSortOrder);
	const { data: displayedFilesData, isLoading: displayedFilesLoading } = useBucketFiles(projectId, bucketId, displayedPage - 1, urlLimit, displayedSearch ?? void 0, void 0, displayedFilterQueries, displayedSortBy, displayedSortOrder);
	useEffect(() => {
		if (!isFilesIndex || filesFetching || filesLoading || !filesFetched) return;
		if (!(urlPage === displayedPage && (urlSearch ?? "") === (displayedSearch ?? "") && filterQueryString === displayedFilterQueryString && urlSortBy === displayedSortBy && urlSortOrder === displayedSortOrder)) {
			setDisplayedPage(urlPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
		}
	}, [
		isFilesIndex,
		filesFetching,
		filesLoading,
		filesFetched,
		urlPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString,
		displayedPage,
		displayedSearch,
		displayedSortBy,
		displayedSortOrder,
		displayedFilterQueryString
	]);
	const files = displayedFilesData?.files ?? requestedFilesData?.files ?? [];
	const filesTotal = displayedFilesData?.total ?? requestedFilesData?.total ?? 0;
	const showFilesLoading = displayedFilesLoading && (displayedFilesData?.files?.length ?? requestedFilesData?.files?.length ?? 0) === 0;
	const tabs = useMemo(() => {
		return [{
			id: "files",
			label: t("Files"),
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			}
		}, ...showSecuritySettings ? [{
			id: "security",
			label: t("Security"),
			to: "/projects/$projectId/storage/$bucketId/security",
			params: {
				projectId,
				bucketId
			}
		}, {
			id: "settings",
			label: t("Settings"),
			to: "/projects/$projectId/storage/$bucketId/settings",
			params: {
				projectId,
				bucketId
			}
		}] : []];
	}, [
		projectId,
		bucketId,
		showSecuritySettings,
		t
	]);
	useEffect(() => {
		if (showSecuritySettings || !projectId || !bucketId) return;
		if (activeTab === "security" || activeTab === "settings") navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			replace: true
		});
	}, [
		showSecuritySettings,
		activeTab,
		projectId,
		bucketId,
		navigate
	]);
	const handleFileUpload = async (data) => {
		try {
			await Promise.all(data.files.map((file) => queueUpload(file, data.files.length === 1 ? data.fileId : void 0, data.permissions)));
			setUploadFileDialogOpen(false);
		} catch (error) {
			toast.error(getErrorMessage(error));
		}
	};
	const handleFilesShellDragOverCapture = (e) => {
		if (!dataTransferHasFileList(e.dataTransfer)) return;
		e.preventDefault();
		e.stopPropagation();
		e.dataTransfer.dropEffect = "copy";
	};
	const handleFilesShellDragEnter = (e) => {
		if (!dataTransferHasFileList(e.dataTransfer)) return;
		e.preventDefault();
		const root = e.currentTarget;
		const related = e.relatedTarget;
		if (related instanceof Node && root.contains(related)) return;
		setFilesSectionFileDragActive(true);
	};
	const handleFilesShellDragLeave = (e) => {
		if (!dataTransferHasFileList(e.dataTransfer)) return;
		const root = e.currentTarget;
		const related = e.relatedTarget;
		if (related instanceof Node && root.contains(related)) return;
		setFilesSectionFileDragActive(false);
	};
	const handleFilesShellDropCapture = (e) => {
		if (!dataTransferHasFileList(e.dataTransfer)) return;
		e.preventDefault();
		e.stopPropagation();
		setFilesSectionFileDragActive(false);
		const dropped = Array.from(e.dataTransfer.files ?? []);
		if (dropped.length === 0) return;
		setUploadPrefillFiles(dropped);
		setUploadFileDialogOpen(true);
	};
	useEffect(() => {
		if (activeTab !== "files") {
			setFilesSectionFileDragActive(false);
			return;
		}
		const endDrag = () => setFilesSectionFileDragActive(false);
		window.addEventListener("dragend", endDrag);
		return () => window.removeEventListener("dragend", endDrag);
	}, [activeTab]);
	const isFilePending = (file) => {
		return file.chunksTotal > 0 && file.chunksUploaded < file.chunksTotal;
	};
	useEffect(() => {
		setSelectedFiles(/* @__PURE__ */ new Set());
		setDeleteDialogOpen(false);
	}, [
		location.pathname,
		projectId,
		bucketId,
		urlSearch,
		filterMap.size
	]);
	const handleSearchChange = (value) => {
		setSearchInput(value);
		setSelectedFiles(/* @__PURE__ */ new Set());
	};
	const handleFilesSortChange = (sortBy, sortOrder) => {
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const built = buildListSearchParams({
					search: urlSearch,
					query: filterQueryString || void 0,
					page: 1,
					limit: urlLimit,
					sort: sortBy !== "$createdAt" || sortOrder !== "desc" ? encodeSort(sortBy, sortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				if (!(urlSearch ?? "").trim()) delete next.search;
				if (!filterQueryString) delete next.query;
				delete next.file;
				return next;
			},
			replace: true
		});
	};
	const applyFilter = (compactKey, queryStr, replaceKey) => {
		const newMap = new Map(filterMap);
		if (replaceKey) newMap.delete(replaceKey);
		newMap.set(compactKey, queryStr);
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const built = buildListSearchParams({
					search: urlSearch,
					query: mapToQueryParam(newMap),
					page: 1,
					limit: urlLimit,
					sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				if (!(urlSearch ?? "").trim()) delete next.search;
				delete next.file;
				return next;
			},
			replace: true
		});
	};
	const removeFilter = (key) => {
		const newMap = new Map(filterMap);
		newMap.delete(key);
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const built = buildListSearchParams({
					search: urlSearch,
					query: newMap.size > 0 ? mapToQueryParam(newMap) : void 0,
					page: 1,
					limit: urlLimit,
					sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				if (!(urlSearch ?? "").trim()) delete next.search;
				if (newMap.size === 0) delete next.query;
				delete next.file;
				return next;
			},
			replace: true
		});
	};
	const clearAllFilters = () => {
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const built = buildListSearchParams({
					search: urlSearch,
					page: 1,
					limit: urlLimit,
					sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				delete next.query;
				delete next.file;
				return next;
			},
			replace: true
		});
		setFiltersOpen(false);
	};
	const bulkDeleteMutation = useMutation({
		mutationFn: async (fileIds) => {
			if (!projectId || !bucketId) throw new Error("Project ID and Bucket ID are required");
			const projectSdk = sdk.forProject(projectId);
			await Promise.all(fileIds.map((fileId) => projectSdk.storage.deleteFile({
				bucketId,
				fileId
			})));
		},
		onSuccess: async (_data, fileIds) => {
			for (const id of fileIds) removeCachedFile(queryClient, projectId, bucketId, id);
			await queryClient.refetchQueries({ queryKey: Dependencies.FILES });
			toast.success(selectedFiles.size > 1 ? `${t("Successfully deleted")} ${selectedFiles.size} ${t("files")}` : `${t("Successfully deleted")} ${selectedFiles.size} ${t("file")}`);
			setSelectedFiles(/* @__PURE__ */ new Set());
			setDeleteDialogOpen(false);
			setStackedDrawerFileId(void 0);
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId
				},
				search: (prev) => {
					const next = { ...prev };
					delete next.file;
					delete next.filePanel;
					return next;
				},
				replace: true
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete files"));
		}
	});
	const handleBulkDelete = () => {
		if (selectedFiles.size === 0) return;
		setDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedFiles.size === 0) return;
		bulkDeleteMutation.mutate(Array.from(selectedFiles));
	};
	const toggleFile = (fileId) => {
		const newSelected = new Set(selectedFiles);
		if (newSelected.has(fileId)) newSelected.delete(fileId);
		else newSelected.add(fileId);
		fileSelectionAnchorRef.current = fileId;
		setSelectedFiles(newSelected);
	};
	useEffect(() => {
		const syncModifierActive = (event) => {
			setFileMultiSelectModifierActive(event.shiftKey || event.ctrlKey || event.metaKey);
		};
		const onKeyDown = (event) => {
			if (event.key === "Shift" || event.key === "Control" || event.key === "Meta") setFileMultiSelectModifierActive(true);
		};
		const onBlur = () => setFileMultiSelectModifierActive(false);
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", syncModifierActive);
		window.addEventListener("blur", onBlur);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", syncModifierActive);
			window.removeEventListener("blur", onBlur);
		};
	}, []);
	const isFileMultiSelectModifierClick = (event) => event.shiftKey || event.ctrlKey || event.metaKey;
	const preventFileRowTextSelectionOnPointer = (event) => {
		if (isFileMultiSelectModifierClick(event)) event.preventDefault();
	};
	const selectableFiles = useMemo(() => files.filter((f) => !isFilePending(f)), [files]);
	const selectFilesWithShift = useCallback((fileId) => {
		const anchorId = fileSelectionAnchorRef.current ?? (selectedFiles.size > 0 ? Array.from(selectedFiles)[0] : fileId);
		const anchorIndex = selectableFiles.findIndex((f) => f.$id === anchorId);
		const clickIndex = selectableFiles.findIndex((f) => f.$id === fileId);
		if (anchorIndex === -1 || clickIndex === -1) {
			const next$1 = new Set(selectedFiles);
			if (next$1.has(fileId)) next$1.delete(fileId);
			else next$1.add(fileId);
			fileSelectionAnchorRef.current = fileId;
			setSelectedFiles(next$1);
			return;
		}
		const start = Math.min(anchorIndex, clickIndex);
		const end = Math.max(anchorIndex, clickIndex);
		const next = new Set(selectedFiles);
		for (let i = start; i <= end; i++) next.add(selectableFiles[i].$id);
		fileSelectionAnchorRef.current = fileId;
		setSelectedFiles(next);
	}, [selectableFiles, selectedFiles]);
	const handleFileMultiSelectPointer = (fileId, event) => {
		if (!isFileMultiSelectModifierClick(event)) return false;
		event.preventDefault();
		if (event.shiftKey) selectFilesWithShift(fileId);
		else toggleFile(fileId);
		return true;
	};
	const clearInspectorFile = useCallback(() => {
		setStackedDrawerFileId(void 0);
		if (!projectId || !bucketId) return;
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const next = { ...prev };
				delete next.file;
				delete next.filePanel;
				return next;
			},
			replace: true
		});
	}, [
		navigate,
		projectId,
		bucketId
	]);
	const handleFileRowClick = (file, event) => {
		if (handleFileMultiSelectPointer(file.$id, event)) return;
		fileSelectionAnchorRef.current = file.$id;
		if (isFilesStackedLayout) {
			setStackedDrawerFileId(file.$id);
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId
				},
				search: (prev) => {
					const next = { ...prev };
					next.file = file.$id;
					return next;
				},
				replace: true
			});
			return;
		}
		const isActive = inspectorFileId === file.$id;
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const next = { ...prev };
				if (isActive) delete next.file;
				else next.file = file.$id;
				return next;
			},
			replace: true
		});
	};
	const toggleAllFiles = () => {
		const nonPendingFiles = files.filter((f) => !isFilePending(f));
		if (selectedFiles.size === nonPendingFiles.length) setSelectedFiles(/* @__PURE__ */ new Set());
		else setSelectedFiles(new Set(nonPendingFiles.map((f) => f.$id)));
	};
	const handlePageChange = (page) => {
		setSelectedFiles(/* @__PURE__ */ new Set());
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const next = { ...prev };
				next.search = urlSearch ?? void 0;
				next.query = filterQueryString || void 0;
				next.page = page;
				next.limit = urlLimit;
				if (!next.search) delete next.search;
				if (!filterQueryString) delete next.query;
				if (page === 1) delete next.page;
				if (next.limit === 25) delete next.limit;
				delete next.file;
				return next;
			},
			replace: true
		});
	};
	const handleFileColumnSort = (column) => {
		handleFilesSortChange(column, urlSortBy === column ? urlSortOrder === "asc" ? "desc" : "asc" : "asc");
	};
	const handlePageSizeChange = (newPageSize) => {
		setSelectedFiles(/* @__PURE__ */ new Set());
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			search: (prev) => {
				const next = { ...prev };
				next.search = urlSearch ?? void 0;
				next.query = filterQueryString || void 0;
				delete next.page;
				if (newPageSize === 25) delete next.limit;
				else next.limit = newPageSize;
				if (!next.search) delete next.search;
				if (!filterQueryString) delete next.query;
				delete next.file;
				return next;
			},
			replace: true
		});
	};
	const filesTablePanePrefs = account?.prefs;
	const hasFilesTablePaneWidthPref = hasStorageFilesTablePaneWidthPref(filesTablePanePrefs);
	const hasFilesTablePaneWidthPrefRef = useRef(hasFilesTablePaneWidthPref);
	hasFilesTablePaneWidthPrefRef.current = hasFilesTablePaneWidthPref;
	const [fileTablePaneWidthPx, setFileTablePaneWidthPx] = useState(() => {
		const parsed = parseStorageFilesTablePaneWidthPx(getConsoleAccountFromCache(queryClient)?.prefs);
		if (parsed !== null) return parsed;
		return defaultStorageFilesTablePaneWidthPx(STORAGE_FILES_TABLE_PREVIEW_SPLIT_MIN_VIEWPORT_PX);
	});
	const [isFilesSplitResizing, setIsFilesSplitResizing] = useState(false);
	const isFilesSplitResizingRef = useRef(false);
	const filesSplitContainerRef = useRef(null);
	const fileTablePaneWidthRef = useRef(fileTablePaneWidthPx);
	fileTablePaneWidthRef.current = fileTablePaneWidthPx;
	const handleFilesSplitPointerDown = useCallback((e) => {
		e.preventDefault();
		setBodyResizeDragActive(true);
		isFilesSplitResizingRef.current = true;
		setIsFilesSplitResizing(true);
		const btn = e.currentTarget;
		btn.setPointerCapture(e.pointerId);
		const startX = e.clientX;
		const startW = fileTablePaneWidthRef.current;
		const splitEl = filesSplitContainerRef.current;
		const onMove = (ev) => {
			if (!splitEl) return;
			const next = clampSplitFirstPaneWidthPx(startW + horizontalResizeDeltaPx(startX, ev.clientX, isRtlElement(splitEl)), splitEl.clientWidth, 260, STORAGE_FILES_TABLE_PANE_MAX_PX, 480);
			setFileTablePaneWidthPx(next);
			fileTablePaneWidthRef.current = next;
		};
		const onUp = () => {
			const finalWidth = fileTablePaneWidthRef.current;
			persistTablePaneWidthPx(finalWidth);
			setBodyResizeDragActive(false);
			isFilesSplitResizingRef.current = false;
			setIsFilesSplitResizing(false);
			try {
				btn.releasePointerCapture(e.pointerId);
			} catch {}
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
	}, [persistTablePaneWidthPx]);
	useLayoutEffect(() => {
		if (isFilesStackedLayout) return;
		const el = filesSplitContainerRef.current;
		if (!el) return;
		const fitOnContainerResize = () => {
			if (isFilesSplitResizingRef.current) return;
			const containerW = el.clientWidth;
			if (containerW <= 0) return;
			setFileTablePaneWidthPx((w) => {
				if (!hasFilesTablePaneWidthPrefRef.current) return defaultStorageFilesTablePaneWidthPx(containerW);
				return fitSplitFirstPaneWidthOnContainerResize(w, containerW, 260, STORAGE_FILES_TABLE_PANE_MAX_PX, 480);
			});
		};
		const ro = new ResizeObserver(fitOnContainerResize);
		ro.observe(el);
		fitOnContainerResize();
		return () => ro.disconnect();
	}, [isFilesStackedLayout]);
	const [fileListColumnWidths, setFileListColumnWidths] = useState(() => {
		return mergeStorageFilesListColumnWidthsWithDefaults(getStorageFilesListColumnWidthsFromPrefs(getConsoleAccountFromCache(queryClient)?.prefs));
	});
	const filesTableMinWidthPx = useMemo(() => {
		return 80 + (splitFilesTable ? STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS.reduce((sum, key) => sum + fileListColumnWidths[key], 0) : 960);
	}, [fileListColumnWidths, splitFilesTable]);
	const [resizingFileColumnKey, setResizingFileColumnKey] = useState(null);
	const fileListColumnWidthsRef = useRef(fileListColumnWidths);
	if (resizingFileColumnKey == null) fileListColumnWidthsRef.current = fileListColumnWidths;
	const fileListColumnColRefs = useRef(/* @__PURE__ */ new Map());
	const setFileColumnColRef = useCallback((key) => (el) => {
		if (el) fileListColumnColRefs.current.set(key, el);
		else fileListColumnColRefs.current.delete(key);
	}, []);
	const filesTableScrollRef = useRef(null);
	const filesTableLayerRef = useRef(null);
	const fileColumnHeaderThRefs = useRef(/* @__PURE__ */ new Map());
	const fileColumnRailRefs = useRef(/* @__PURE__ */ new Map());
	const setFileColumnHeaderThRef = useCallback((key) => (node) => {
		if (node) fileColumnHeaderThRefs.current.set(key, node);
		else fileColumnHeaderThRefs.current.delete(key);
	}, []);
	const repositionFileColumnRailsOnly = useCallback(() => {
		const layer = filesTableLayerRef.current;
		if (!layer) return;
		for (const col of STORAGE_FILES_LIST_RESIZABLE_COLUMN_WIDTH_KEYS) {
			const th = fileColumnHeaderThRefs.current.get(col);
			const rail = fileColumnRailRefs.current.get(col);
			if (!th || !rail) continue;
			applyColumnResizeRailPosition(rail, layer, th);
		}
	}, []);
	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const acct = account ?? await fetchConsoleAccount();
				if (cancelled) return;
				const next = mergeStorageFilesListColumnWidthsWithDefaults(getStorageFilesListColumnWidthsFromPrefs(acct.prefs));
				setFileListColumnWidths((prev) => {
					let same = true;
					for (const k of STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS) if (prev[k] !== next[k]) {
						same = false;
						break;
					}
					return same ? prev : next;
				});
			} catch {
				if (!cancelled) setFileListColumnWidths(mergeStorageFilesListColumnWidthsWithDefaults(void 0));
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [account]);
	const getFileColumnWidthPx = useCallback((key) => fileListColumnWidths[key], [fileListColumnWidths]);
	const applyDraggedFileColumnWidthPx = useCallback((columnKey, widthPx) => {
		const next = clampStorageFilesListDataColumnWidthPx(widthPx);
		fileListColumnWidthsRef.current = {
			...fileListColumnWidthsRef.current,
			[columnKey]: next
		};
		const colEl = fileListColumnColRefs.current.get(columnKey);
		if (colEl) {
			colEl.style.width = `${next}px`;
			colEl.style.minWidth = `${next}px`;
		}
		const thEl = fileColumnHeaderThRefs.current.get(columnKey);
		if (thEl) {
			thEl.style.width = `${next}px`;
			thEl.style.minWidth = `72px`;
		}
		repositionFileColumnRailsOnly();
	}, [repositionFileColumnRailsOnly]);
	const persistFileListColumnWidths = useCallback(async (widths) => {
		try {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: await updateAccountPrefs(mergeStorageFilesListColumnWidthsIntoPrefs((await fetchConsoleAccount()).prefs || {}, widths)) });
		} catch {}
	}, [queryClient]);
	useLayoutEffect(() => {
		if (!splitFilesTable) return;
		const scroll = filesTableScrollRef.current;
		const layer = filesTableLayerRef.current;
		if (!scroll || !layer) return;
		const measure = () => {
			repositionFileColumnRailsOnly();
		};
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(scroll);
		ro.observe(layer);
		scroll.addEventListener("scroll", measure, { passive: true });
		window.addEventListener("resize", measure);
		return () => {
			ro.disconnect();
			scroll.removeEventListener("scroll", measure);
			window.removeEventListener("resize", measure);
		};
	}, [
		STORAGE_FILES_LIST_COLUMN_RESIZE_LAYOUT_KEY,
		splitFilesTable,
		fileListColumnWidths,
		files.length,
		repositionFileColumnRailsOnly
	]);
	const handleFileColumnResizePointerDown = useCallback((columnKey) => (e) => {
		if (!splitFilesTable) return;
		e.preventDefault();
		e.stopPropagation();
		setBodyResizeDragActive(true);
		const btn = e.currentTarget;
		btn.setPointerCapture(e.pointerId);
		const startX = e.clientX;
		const initialWidth = getFileColumnWidthPx(columnKey);
		flushSync(() => {
			setResizingFileColumnKey(columnKey);
		});
		applyDraggedFileColumnWidthPx(columnKey, initialWidth);
		const onMove = (ev) => {
			applyDraggedFileColumnWidthPx(columnKey, initialWidth + horizontalResizeDeltaPx(startX, ev.clientX));
		};
		const onUp = () => {
			setBodyResizeDragActive(false);
			try {
				btn.releasePointerCapture(e.pointerId);
			} catch {}
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			flushSync(() => {
				setResizingFileColumnKey(null);
				setFileListColumnWidths({ ...fileListColumnWidthsRef.current });
			});
			persistFileListColumnWidths(fileListColumnWidthsRef.current);
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
	}, [
		splitFilesTable,
		applyDraggedFileColumnWidthPx,
		getFileColumnWidthPx,
		persistFileListColumnWidths
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: displayBucket ? /* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: displayBucket.name
					}), /* @__PURE__ */ jsx(CopyableId, {
						id: displayBucket.$id,
						size: "xs",
						className: "shrink-0"
					})]
				}) : t("Bucket"),
				tabs,
				activeTab,
				searchPlaceholder: activeTab === "files" ? t("Search files...") : void 0,
				searchValue: activeTab === "files" ? searchInput : "",
				onSearchChange: activeTab === "files" ? handleSearchChange : void 0,
				createLabel: activeTab === "files" ? t("Create file") : void 0,
				createAnalyticsAction: activeTab === "files" ? "upload-file" : void 0,
				onCreate: activeTab === "files" ? () => setUploadFileDialogOpen(true) : void 0,
				showFilters: activeTab === "files",
				filterTrigger: activeTab === "files" ? /* @__PURE__ */ jsx(FiltersPopover, {
					open: filtersOpen,
					onOpenChange: setFiltersOpen,
					columns: filesFilterColumns,
					filterMap,
					onRemoveFilter: removeFilter,
					onClearAll: clearAllFilters,
					onApplyFilter: applyFilter,
					resourceLabel: "files",
					filterScope: "storage.files",
					onApplyQuery: (queryParam, sortParam) => {
						navigate({
							to: "/projects/$projectId/storage/$bucketId",
							params: {
								projectId,
								bucketId
							},
							search: (prev) => {
								const built = buildListSearchParams({
									search: urlSearch,
									query: queryParam ?? void 0,
									page: 1,
									limit: urlLimit,
									sort: sortParam ?? void 0
								});
								const next = {
									...prev,
									...built
								};
								if (!queryParam?.trim()) delete next.query;
								delete next.file;
								return next;
							},
							replace: true
						});
					},
					sortBy: urlSortBy,
					sortOrder: urlSortOrder,
					onSortChange: handleFilesSortChange,
					defaultSortParam: encodeSort(FILES_DEFAULT_SORT_BY, FILES_DEFAULT_SORT_ORDER),
					onReset: () => {
						navigate({
							to: "/projects/$projectId/storage/$bucketId",
							params: {
								projectId,
								bucketId
							},
							search: {
								page: 1,
								limit: urlLimit
							},
							replace: true
						});
					},
					teamId: project?.teamId
				}) : void 0,
				fullWidthBorder: true,
				fullWidth: true,
				contentAfterBorder: displayBucket && !displayBucket.enabled ? /* @__PURE__ */ jsx("div", {
					className: "border-b border-border bg-amber-500/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "w-full px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: "border-amber-500/30 bg-transparent",
							children: [
								/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }),
								/* @__PURE__ */ jsx(AlertTitle, {
									className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
									children: t("Bucket is disabled")
								}),
								/* @__PURE__ */ jsx(AlertDescription, {
									className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
									children: /* @__PURE__ */ jsxs("span", {
										className: "inline",
										children: [
											t("This bucket is disabled and not accessible to end users through the API. Console actions remain available."),
											" ",
											/* @__PURE__ */ jsx(Link, {
												to: "/projects/$projectId/storage/$bucketId/settings",
												params: {
													projectId,
													bucketId
												},
												className: "font-medium underline hover:no-underline inline",
												children: t("Enable it in the Settings tab")
											}),
											" ",
											t("to make it available to end users.")
										]
									})
								})
							]
						})
					})
				}) : void 0
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
				children: [activeTab === "files" && /* @__PURE__ */ jsxs("div", {
					className: cn("relative flex min-h-0 flex-1 flex-col overflow-hidden transition-colors duration-200 ease-out", filesSectionFileDragActive && "bg-muted/25"),
					onDragEnter: handleFilesShellDragEnter,
					onDragLeave: handleFilesShellDragLeave,
					onDragOverCapture: handleFilesShellDragOverCapture,
					onDropCapture: handleFilesShellDropCapture,
					children: [
						filesSectionFileDragActive ? /* @__PURE__ */ jsx("div", {
							className: "shrink-0 border-b border-border bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200 motion-reduce:animate-none",
							role: "status",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3 px-4 py-3 sm:px-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 text-muted-foreground",
									children: /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1 pt-0.5",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium leading-snug text-foreground",
										children: t("Drop files to upload")
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
										children: t("Review and upload in the dialog that opens next.")
									})]
								})]
							})
						}) : null,
						showFilesLoading ? /* @__PURE__ */ jsx("div", {
							className: "flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-12",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: t("Loading files…")
							})
						}) : files.length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "relative flex min-h-0 min-w-0 flex-1 flex-col border-t border-border bg-muted/20",
							children: /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center overflow-y-auto p-6 sm:p-10",
								children: /* @__PURE__ */ jsx(EmptyState, {
									icon: FileText,
									title: urlSearch?.trim() || filterMap.size > 0 ? t("No files match your filters") : t("No files yet"),
									description: urlSearch?.trim() || filterMap.size > 0 ? t("Try adjusting or clearing filters. You can also drop files anywhere here to upload new ones.") : t("Drag and drop files anywhere in this view, or use Create file in the header to upload your first file."),
									isEmpty: !urlSearch?.trim() && filterMap.size === 0,
									hasFilters: !!urlSearch?.trim() || filterMap.size > 0,
									variant: "default",
									iconSize: "xl",
									className: "w-full max-w-lg"
								})
							})
						}) : /* @__PURE__ */ jsxs("div", {
							className: "flex min-h-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ jsxs("div", {
									ref: filesSplitContainerRef,
									className: cn("relative min-h-0 flex-1 overflow-hidden", isFilesStackedLayout ? "flex flex-col" : "grid"),
									style: splitFilesTable ? storageFilesSplitGridStyle(fileTablePaneWidthPx) : void 0,
									children: [
										/* @__PURE__ */ jsx("div", {
											ref: filesTableScrollRef,
											className: cn("min-h-0 min-w-0 overflow-auto overscroll-contain", "bg-background", fileMultiSelectModifierActive && "select-none", splitFilesTable ? cn("col-start-1 row-start-1 border-e border-border", files.length === 0 && "border-t border-border") : cn("border-border", isFilesStackedLayout ? "min-h-0 w-full flex-1" : "shrink-0 border-e", files.length === 0 && "border-t border-border")),
											children: /* @__PURE__ */ jsxs("div", {
												ref: splitFilesTable ? filesTableLayerRef : void 0,
												className: STORAGE_SPREADSHEET_TABLE_LAYER_CLASS,
												style: { minWidth: filesTableMinWidthPx },
												children: [/* @__PURE__ */ jsxs("table", {
													className: cn("w-full border-collapse", splitFilesTable && "table-fixed"),
													children: [
														/* @__PURE__ */ jsxs("colgroup", { children: [
															/* @__PURE__ */ jsx("col", { style: splitFilesTable ? {
																width: 40,
																minWidth: 40,
																maxWidth: 40
															} : { width: 40 } }),
															STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS.map((key) => {
																const isDragResize = splitFilesTable && resizingFileColumnKey === key;
																return /* @__PURE__ */ jsx("col", {
																	ref: splitFilesTable ? setFileColumnColRef(key) : void 0,
																	style: splitFilesTable ? isDragResize ? void 0 : {
																		width: fileListColumnWidths[key],
																		minWidth: fileListColumnWidths[key]
																	} : STORAGE_FILES_STACKED_COL_STYLES[key]
																}, key);
															}),
															/* @__PURE__ */ jsx("col", { style: splitFilesTable ? {
																width: 40,
																minWidth: 40,
																maxWidth: 40
															} : {
																width: 40,
																minWidth: 40,
																maxWidth: 40
															} })
														] }),
														/* @__PURE__ */ jsx("thead", {
															className: "sticky top-0 z-20 bg-background",
															children: /* @__PURE__ */ jsxs("tr", { children: [
																/* @__PURE__ */ jsx("th", {
																	className: cn("sticky start-0 z-40 w-10 bg-background px-2 text-center", STORAGE_FILES_TABLE_HEADER_TH_CLASS, splitFilesTable && "min-w-[40px] max-w-[40px] shrink-0 box-border", STORAGE_SPREADSHEET_HEADER_STICKY_CHECKBOX_SHADOW),
																	style: splitFilesTable ? {
																		width: 40,
																		minWidth: 40,
																		maxWidth: 40
																	} : void 0,
																	children: /* @__PURE__ */ jsx("div", {
																		className: "flex h-full items-center justify-center",
																		children: /* @__PURE__ */ jsx(Checkbox, {
																			checked: files.filter((f) => !isFilePending(f)).length > 0 && files.filter((f) => !isFilePending(f)).every((f) => selectedFiles.has(f.$id)),
																			onCheckedChange: toggleAllFiles
																		})
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("$id") : void 0,
																	className: cn(splitFilesTable ? "min-w-0 px-3" : "w-[180px] px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? {
																		width: fileListColumnWidths.$id,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx(Fingerprint, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
																			/* @__PURE__ */ jsx("span", {
																				className: "text-[12px] font-medium text-foreground",
																				children: "$id"
																			}),
																			/* @__PURE__ */ jsx("button", {
																				type: "button",
																				onClick: () => handleFileColumnSort("$id"),
																				className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																				children: urlSortBy === "$id" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-foreground" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-foreground" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																			})
																		]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("name") : void 0,
																	className: cn("px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? resizingFileColumnKey === "name" ? void 0 : {
																		width: fileListColumnWidths.name,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full min-w-0 items-center gap-2 pe-1.5",
																		children: [
																			/* @__PURE__ */ jsx(File, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
																			/* @__PURE__ */ jsx("span", {
																				className: "text-[12px] font-medium text-foreground",
																				children: "name"
																			}),
																			/* @__PURE__ */ jsx("button", {
																				type: "button",
																				onClick: () => handleFileColumnSort("name"),
																				className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																				children: urlSortBy === "name" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																			})
																		]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("mimeType") : void 0,
																	className: cn("px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? resizingFileColumnKey === "mimeType" ? void 0 : {
																		width: fileListColumnWidths.mimeType,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full min-w-0 items-center gap-2 pe-1.5",
																		children: [/* @__PURE__ */ jsx("span", {
																			className: "text-[12px] font-medium text-foreground",
																			children: "mimeType"
																		}), /* @__PURE__ */ jsx("button", {
																			type: "button",
																			onClick: () => handleFileColumnSort("mimeType"),
																			className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																			children: urlSortBy === "mimeType" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																		})]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("sizeOriginal") : void 0,
																	className: cn("px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? resizingFileColumnKey === "sizeOriginal" ? void 0 : {
																		width: fileListColumnWidths.sizeOriginal,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full min-w-0 items-center gap-2 whitespace-nowrap pe-1.5",
																		children: [/* @__PURE__ */ jsx("span", {
																			className: "text-[12px] font-medium text-foreground",
																			children: "size"
																		}), /* @__PURE__ */ jsx("button", {
																			type: "button",
																			onClick: () => handleFileColumnSort("sizeOriginal"),
																			className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																			children: urlSortBy === "sizeOriginal" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																		})]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("$createdAt") : void 0,
																	className: cn(splitFilesTable ? "min-w-0 px-3" : "w-[180px] px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? resizingFileColumnKey === "$createdAt" ? void 0 : {
																		width: fileListColumnWidths.$createdAt,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
																			/* @__PURE__ */ jsx("span", {
																				className: "text-[12px] font-medium text-foreground",
																				children: "$createdAt"
																			}),
																			/* @__PURE__ */ jsx("button", {
																				type: "button",
																				onClick: () => handleFileColumnSort("$createdAt"),
																				className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																				children: urlSortBy === "$createdAt" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																			})
																		]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	ref: splitFilesTable ? setFileColumnHeaderThRef("$updatedAt") : void 0,
																	className: cn(splitFilesTable ? "min-w-0 px-3" : "w-[180px] px-3", STORAGE_FILES_TABLE_HEADER_TH_CLASS, "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]"),
																	style: splitFilesTable ? resizingFileColumnKey === "$updatedAt" ? void 0 : {
																		width: fileListColumnWidths.$updatedAt,
																		minWidth: 72
																	} : void 0,
																	children: /* @__PURE__ */ jsxs("div", {
																		className: "flex h-full items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
																			/* @__PURE__ */ jsx("span", {
																				className: "text-[12px] font-medium text-foreground",
																				children: "$updatedAt"
																			}),
																			/* @__PURE__ */ jsx("button", {
																				type: "button",
																				onClick: () => handleFileColumnSort("$updatedAt"),
																				className: "ms-auto shrink-0 cursor-pointer rounded p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
																				children: urlSortBy === "$updatedAt" ? urlSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3 shrink-0 text-chart-brand" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 shrink-0 text-muted-foreground" })
																			})
																		]
																	})
																}),
																/* @__PURE__ */ jsx("th", {
																	className: cn("sticky end-0 z-30 bg-background p-0", STORAGE_FILES_TABLE_HEADER_TH_CLASS, splitFilesTable && "shrink-0 box-border", STORAGE_SPREADSHEET_HEADER_STICKY_ACTIONS_SHADOW),
																	style: {
																		width: 40,
																		minWidth: 40,
																		maxWidth: 40
																	}
																})
															] })
														}),
														/* @__PURE__ */ jsx("tbody", { children: files.map((file) => {
															const pending = isFilePending(file);
															const isPreviewRow = !pending && effectiveInspectorFileId === file.$id;
															return /* @__PURE__ */ jsx(FileContextMenu, {
																projectId,
																bucketId,
																file: {
																	id: file.$id,
																	name: file.name,
																	pending
																},
																children: /* @__PURE__ */ jsxs("tr", {
																	className: cn("group transition-colors", pending ? "cursor-default hover:bg-transparent" : "cursor-pointer", !pending && (isPreviewRow ? "bg-muted/25 ring-1 ring-inset ring-border/20 hover:bg-muted/35" : selectedFiles.has(file.$id) ? "bg-muted" : "hover:bg-muted/50")),
																	onMouseDown: preventFileRowTextSelectionOnPointer,
																	onMouseEnter: () => {
																		if (pending) return;
																		prefetchInspectorFileData(file.$id);
																	},
																	onClick: (e) => {
																		if (pending) return;
																		if (isFilesStackedLayout && stackedRowTouchActivateRef.current) {
																			stackedRowTouchActivateRef.current = false;
																			return;
																		}
																		const target = e.target;
																		if (target.closest("button") || target.closest("[role=\"checkbox\"]")) return;
																		handleFileRowClick(file, e);
																	},
																	onPointerUp: isFilesStackedLayout ? (e) => {
																		if (pending || e.pointerType !== "touch") return;
																		const target = e.target;
																		if (target.closest("button") || target.closest("[role=\"checkbox\"]")) return;
																		stackedRowTouchActivateRef.current = true;
																		handleFileRowClick(file, e);
																	} : void 0,
																	children: [
																		/* @__PURE__ */ jsx("td", {
																			className: cn("sticky start-0 w-10 border-b border-border px-2 py-1.5 text-center", "z-10", splitFilesTable && "min-w-[40px] max-w-[40px] shrink-0 box-border", "shadow-[inset_-1px_0_0_0_var(--border)] rtl:shadow-[inset_1px_0_0_0_var(--border)]", "bg-background"),
																			style: splitFilesTable ? {
																				width: 40,
																				minWidth: 40,
																				maxWidth: 40
																			} : void 0,
																			onClick: (e) => e.stopPropagation(),
																			children: !pending ? /* @__PURE__ */ jsx("div", {
																				className: "flex justify-center",
																				children: /* @__PURE__ */ jsx(Checkbox, {
																					checked: selectedFiles.has(file.$id),
																					onClick: (e) => {
																						e.stopPropagation();
																						if (e.shiftKey) {
																							e.preventDefault();
																							selectFilesWithShift(file.$id);
																							return;
																						}
																						toggleFile(file.$id);
																					}
																				})
																			}) : null
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn(splitFilesTable ? "min-w-0 px-3 py-1.5" : "w-[180px] px-3 py-1.5", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "$id",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.$id,
																				minWidth: 72
																			} : void 0,
																			children: !pending ? /* @__PURE__ */ jsx(CopyableId, {
																				id: file.$id,
																				size: "xs"
																			}) : /* @__PURE__ */ jsx("span", {
																				className: "text-[12px] text-muted-foreground",
																				children: "-"
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn("max-w-0 px-3 py-1.5", splitFilesTable && "min-w-0", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "name",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.name,
																				minWidth: 72
																			} : void 0,
																			children: /* @__PURE__ */ jsxs("div", {
																				className: "flex min-w-0 items-center gap-2",
																				children: [/* @__PURE__ */ jsx("span", {
																					className: "min-w-0 flex-1 truncate text-[12px] text-foreground",
																					children: file.name
																				}), pending ? /* @__PURE__ */ jsx(Badge, {
																					variant: "secondary",
																					className: "shrink-0 text-[10px] font-medium",
																					children: t("Pending")
																				}) : null]
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn("px-3 py-1.5", splitFilesTable && "min-w-0", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "mimeType",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.mimeType,
																				minWidth: 72
																			} : void 0,
																			children: /* @__PURE__ */ jsx("span", {
																				className: "block truncate font-mono text-[12px] text-muted-foreground",
																				children: file.mimeType || "-"
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn(splitFilesTable ? "min-w-0 shrink-0 whitespace-nowrap px-3 py-1.5 text-end tabular-nums" : "w-[120px] min-w-[120px] shrink-0 whitespace-nowrap px-3 py-1.5 text-end tabular-nums", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "sizeOriginal",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.sizeOriginal,
																				minWidth: 72
																			} : void 0,
																			children: /* @__PURE__ */ jsx("span", {
																				className: "inline-block font-mono text-[12px] text-muted-foreground",
																				children: formatBytes(file.sizeOriginal)
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn(splitFilesTable ? "min-w-0 px-3 py-1.5" : "w-[180px] px-3 py-1.5", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "$createdAt",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.$createdAt,
																				minWidth: 72
																			} : void 0,
																			children: file.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
																				date: new Date(file.$createdAt),
																				className: "text-[12px] text-muted-foreground"
																			}) : /* @__PURE__ */ jsx("span", {
																				className: "text-[12px] text-foreground/60",
																				children: t("N/A")
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn(splitFilesTable ? "min-w-0 px-3 py-1.5" : "w-[180px] px-3 py-1.5", "border-b border-e border-border", pending && "opacity-70"),
																			"data-column": "$updatedAt",
																			style: splitFilesTable ? {
																				width: fileListColumnWidths.$updatedAt,
																				minWidth: 72
																			} : void 0,
																			children: file.$updatedAt ? /* @__PURE__ */ jsx(DateTooltip, {
																				date: new Date(file.$updatedAt),
																				className: "text-[12px] text-muted-foreground"
																			}) : /* @__PURE__ */ jsx("span", {
																				className: "text-[12px] text-foreground/60",
																				children: t("N/A")
																			})
																		}),
																		/* @__PURE__ */ jsx("td", {
																			className: cn("sticky end-0 border-b border-border p-0", "z-10", splitFilesTable && "shrink-0 box-border", "shadow-[inset_1px_0_0_0_var(--border)] rtl:shadow-[inset_-1px_0_0_0_var(--border)]", "bg-background"),
																			style: {
																				width: 40,
																				minWidth: 40,
																				maxWidth: 40
																			},
																			children: /* @__PURE__ */ jsx("div", {
																				className: "flex h-full items-center justify-center py-1.5",
																				style: { width: 40 },
																				children: /* @__PURE__ */ jsx(FileRowActionsMenu, {
																					projectId,
																					bucketId,
																					file: {
																						id: file.$id,
																						name: file.name,
																						pending
																					}
																				})
																			})
																		})
																	]
																})
															}, file.$id);
														}) })
													]
												}), splitFilesTable ? STORAGE_FILES_LIST_RESIZABLE_COLUMN_WIDTH_KEYS.map((col) => /* @__PURE__ */ jsx("button", {
													ref: (node) => {
														if (node) fileColumnRailRefs.current.set(col, node);
														else fileColumnRailRefs.current.delete(col);
													},
													type: "button",
													"aria-label": `${t("Resize")} ${col} ${t("column width")}`,
													"aria-orientation": "vertical",
													role: "separator",
													tabIndex: 0,
													onPointerDown: handleFileColumnResizePointerDown(col),
													className: cn(STORAGE_FILES_LIST_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS, resizingFileColumnKey === col && "before:opacity-100", "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background")
												}, `col-resize-rail-${col}`)) : null]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: cn("h-[54px] shrink-0 border-t border-border bg-background", splitFilesTable ? "col-start-1 row-start-2 border-e" : "w-full"),
											children: /* @__PURE__ */ jsx("div", {
												className: "@container flex h-full items-center px-4",
												children: /* @__PURE__ */ jsx("div", {
													className: "flex-1 min-w-0",
													children: /* @__PURE__ */ jsx(Pagination, {
														currentPage: displayedPage,
														totalItems: filesTotal,
														pageSize: urlLimit,
														pageSizeOptions: [
															10,
															25,
															50,
															100
														],
														onPageChange: handlePageChange,
														onPageSizeChange: handlePageSizeChange,
														itemLabel: t("files"),
														className: "h-full min-h-0 border-0 mt-0 py-0"
													})
												})
											})
										}),
										!isFilesStackedLayout ? /* @__PURE__ */ jsx("div", {
											className: cn("flex min-h-0 min-w-0 flex-col overflow-hidden", "bg-background", splitFilesTable ? "col-start-2 row-span-2 row-start-1" : "min-w-0 flex-1"),
											children: /* @__PURE__ */ jsx(FileInspectorPanel, {
												projectId,
												bucketId,
												fileId: inspectorFileId,
												panelTab: search?.filePanel === "overview" || search?.filePanel === "permissions" || search?.filePanel === "tokens" || search?.filePanel === "security" ? search.filePanel : void 0
											})
										}) : null,
										splitFilesTable ? /* @__PURE__ */ jsx("button", {
											type: "button",
											"aria-label": t("Resize file table and preview"),
											"aria-orientation": "vertical",
											role: "separator",
											tabIndex: 0,
											style: horizontalSplitHandleStyle(fileTablePaneWidthPx),
											onKeyDown: (e) => {
												const splitEl = filesSplitContainerRef.current;
												if (!splitEl) return;
												const step = 24;
												if (e.key === "ArrowLeft") {
													e.preventDefault();
													setFileTablePaneWidthPx((w) => {
														const next = clampSplitFirstPaneWidthPx(w - step, splitEl.clientWidth, 260, 4e3, 480);
														fileTablePaneWidthRef.current = next;
														persistTablePaneWidthPx(next);
														return next;
													});
												} else if (e.key === "ArrowRight") {
													e.preventDefault();
													setFileTablePaneWidthPx((w) => {
														const next = clampSplitFirstPaneWidthPx(w + step, splitEl.clientWidth, 260, 4e3, 480);
														fileTablePaneWidthRef.current = next;
														persistTablePaneWidthPx(next);
														return next;
													});
												}
											},
											className: cn("absolute top-0 bottom-0 z-30 w-1.5 cursor-col-resize border-0 bg-transparent p-0 outline-none transition-colors hover:bg-primary/20 dark:hover:bg-sidebar-accent/60", isFilesSplitResizing && "bg-primary/30 dark:bg-sidebar-accent/70", "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"),
											onPointerDown: handleFilesSplitPointerDown
										}) : null
									]
								}),
								selectedFiles.size > 0 && /* @__PURE__ */ jsx("div", {
									className: "fixed bottom-4 start-1/2 z-50 w-[min(100%,calc(100vw-2rem))] max-w-md -translate-x-1/2 px-2 sm:px-0 sm:w-auto sm:max-w-none",
									children: /* @__PURE__ */ jsxs("div", {
										className: "mx-auto flex min-w-0 items-center justify-between gap-2 rounded-lg border border-border bg-background px-4 py-3 sm:min-w-[400px] sm:gap-3 sm:px-6",
										children: [/* @__PURE__ */ jsxs(Badge, {
											variant: "secondary",
											className: "h-6 px-2.5",
											children: [
												selectedFiles.size,
												" ",
												selectedFiles.size > 1 ? t("files selected") : t("file selected")
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => setSelectedFiles(/* @__PURE__ */ new Set()),
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
											children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Files") }), /* @__PURE__ */ jsxs(DialogDescription, {
												className: "mt-2 text-[13px]",
												children: [
													t("Are you sure you want to delete"),
													" ",
													selectedFiles.size,
													" ",
													selectedFiles.size > 1 ? t("files") : t("file"),
													"?",
													" ",
													t("This action cannot be undone.")
												]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
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
								})
							]
						}),
						isFilesStackedLayout ? /* @__PURE__ */ jsx(FileInspectorDrawer, {
							open: !!effectiveInspectorFileId,
							onOpenChange: (open) => {
								if (!open) clearInspectorFile();
							},
							projectId,
							bucketId,
							fileId: effectiveInspectorFileId,
							panelTab: search?.filePanel === "overview" || search?.filePanel === "permissions" || search?.filePanel === "tokens" || search?.filePanel === "security" ? search.filePanel : void 0
						}) : null
					]
				}), (activeTab === "security" || activeTab === "settings") && /* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-1 min-h-0 flex-col overflow-y-auto",
					children: [activeTab === "security" && /* @__PURE__ */ jsx(BucketSecurity, {}), activeTab === "settings" && /* @__PURE__ */ jsx(BucketSettings, {})]
				})]
			}),
			/* @__PURE__ */ jsx(UploadFile, {
				open: uploadFileDialogOpen,
				onOpenChange: setUploadFileDialogOpen,
				onUpload: handleFileUpload,
				bucket: displayBucket,
				isLoading: false,
				prefillFiles: uploadPrefillFiles,
				onPrefillConsumed: clearUploadPrefill
			})
		]
	});
}
export { View as t };
