import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { H as useProjectsForTeam } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as parseAppLogoFileId, i as getAppsLogoConsoleStorageSdk, n as buildAppLogoFilePermissions, o as resolveAppLogoDisplayUrl, r as getAppLogoFilePreviewUrl, s as resolveAppsLogoConsoleRegion, t as APPS_LOGO_BUCKET_ID } from "./apps-logo-Bz8cZPsI.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { toast } from "sonner";
import { ImageIcon, ImagePlus, Loader2, Upload, X } from "lucide-react";
function AppLogoFilePicker({ teamId, value, onChange, disabled = false, region }) {
	const t = useT();
	const uploadInputRef = useRef(null);
	const { projects } = useProjectsForTeam(teamId, 0, 1);
	const consoleRegion = resolveAppsLogoConsoleRegion(region ?? projects[0]?.region);
	const consoleStorageSdk = useMemo(() => getAppsLogoConsoleStorageSdk(consoleRegion), [consoleRegion]);
	const [uploading, setUploading] = useState(false);
	const selectedFromValue = useMemo(() => parseAppLogoFileId(value), [value]);
	const previewUrl = useMemo(() => {
		if (!value.trim()) return null;
		if (selectedFromValue) return getAppLogoFilePreviewUrl(selectedFromValue, {
			width: 128,
			height: 128,
			region: consoleRegion
		});
		return value;
	}, [
		selectedFromValue,
		value,
		consoleRegion
	]);
	const handleUpload = async (event) => {
		const file = event.target.files?.[0];
		event.target.value = "";
		if (!file) return;
		if (!file.name.toLowerCase().endsWith(".png")) {
			toast.error(t("Only PNG logos are supported"));
			return;
		}
		setUploading(true);
		try {
			onChange(getAppLogoFilePreviewUrl((await consoleStorageSdk.storage.createFile({
				bucketId: APPS_LOGO_BUCKET_ID,
				fileId: ID.unique(),
				file,
				permissions: buildAppLogoFilePermissions(teamId)
			})).$id, {
				width: 256,
				height: 256,
				region: consoleRegion
			}));
			toast.success(t("Logo uploaded"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to upload logo")));
		} finally {
			setUploading(false);
			if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-dashed border-border bg-muted/20 p-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card",
				children: previewUrl ? /* @__PURE__ */ jsx("img", {
					src: previewUrl,
					alt: t("App logo preview"),
					className: "h-full w-full object-contain"
				}) : /* @__PURE__ */ jsx(ImageIcon, { className: "h-8 w-8 text-muted-foreground" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 space-y-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Upload a PNG logo for the consent screen and marketplace.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: uploadInputRef,
							type: "file",
							accept: "image/png,.png",
							className: "sr-only",
							tabIndex: -1,
							disabled: disabled || uploading,
							onChange: handleUpload
						}),
						/* @__PURE__ */ jsxs(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							disabled: disabled || uploading,
							onClick: () => uploadInputRef.current?.click(),
							children: [uploading ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Upload, { className: "me-1.5 h-3.5 w-3.5" }), t("Upload PNG")]
						}),
						value ? /* @__PURE__ */ jsxs(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							disabled: disabled || uploading,
							onClick: () => onChange(""),
							children: [/* @__PURE__ */ jsx(X, { className: "me-1.5 h-3.5 w-3.5" }), t("Remove")]
						}) : null
					]
				})]
			})]
		})
	});
}
var ACCEPTED_IMAGE_TYPES = "image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp";
var MAX_IMAGES = 12;
function isSupportedImageFile(file) {
	const lower = file.name.toLowerCase();
	return lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".webp");
}
function AppImagesPicker({ teamId, value, onChange, disabled = false, region }) {
	const t = useT();
	const uploadInputRef = useRef(null);
	const { projects } = useProjectsForTeam(teamId, 0, 1);
	const consoleRegion = resolveAppsLogoConsoleRegion(region ?? projects[0]?.region);
	const consoleStorageSdk = useMemo(() => getAppsLogoConsoleStorageSdk(consoleRegion), [consoleRegion]);
	const [uploading, setUploading] = useState(false);
	const images = useMemo(() => value.map((item) => item.trim()).filter(Boolean), [value]);
	const atLimit = images.length >= MAX_IMAGES;
	const handleUpload = async (event) => {
		const files = Array.from(event.target.files ?? []);
		event.target.value = "";
		if (files.length === 0 || disabled || uploading || !teamId) return;
		const remaining = MAX_IMAGES - images.length;
		if (remaining <= 0) {
			toast.error(t("You can add up to 12 images."));
			return;
		}
		const selected = files.slice(0, remaining);
		if (selected.filter((file) => !isSupportedImageFile(file)).length > 0) {
			toast.error(t("Only PNG, JPEG, or WebP images are supported"));
			return;
		}
		setUploading(true);
		try {
			const uploadedUrls = [];
			for (const file of selected) {
				const uploaded = await consoleStorageSdk.storage.createFile({
					bucketId: APPS_LOGO_BUCKET_ID,
					fileId: ID.unique(),
					file,
					permissions: buildAppLogoFilePermissions(teamId)
				});
				uploadedUrls.push(getAppLogoFilePreviewUrl(uploaded.$id, {
					width: 1280,
					height: 720,
					region: consoleRegion
				}));
			}
			const next = [...images];
			for (const url of uploadedUrls) if (!next.includes(url)) next.push(url);
			onChange(next);
			toast.success(uploadedUrls.length === 1 ? t("Image uploaded") : t("Images uploaded"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to upload image")));
		} finally {
			setUploading(false);
			if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
		}
	};
	const removeAt = (index) => {
		onChange(images.filter((_, i) => i !== index));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: t("Optional screenshots shown on the marketplace listing.")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
				children: [images.map((image, index) => {
					return /* @__PURE__ */ jsxs("div", {
						className: "group relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card",
						children: [/* @__PURE__ */ jsx("img", {
							src: resolveAppLogoDisplayUrl(image, {
								width: 320,
								height: 180,
								region: consoleRegion
							}) ?? image,
							alt: t("Marketplace image"),
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "secondary",
							size: "sm",
							className: cn("absolute end-1.5 top-1.5 h-7 w-7 p-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100", "bg-background/90 hover:bg-background"),
							disabled: disabled || uploading,
							"aria-label": t("Remove image"),
							onClick: () => removeAt(index),
							children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
						})]
					}, `${image}-${index}`);
				}), !atLimit ? /* @__PURE__ */ jsxs("button", {
					type: "button",
					disabled: disabled || uploading || !teamId,
					onClick: () => uploadInputRef.current?.click(),
					className: cn("flex aspect-[16/10] flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-border bg-muted/20 px-2 text-center transition-colors", "hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", (disabled || uploading || !teamId) && "cursor-not-allowed opacity-60"),
					children: [uploading ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : /* @__PURE__ */ jsx(ImagePlus, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: uploading ? t("Uploading…") : t("Add image")
					})]
				}) : null]
			}),
			/* @__PURE__ */ jsx("input", {
				ref: uploadInputRef,
				type: "file",
				accept: ACCEPTED_IMAGE_TYPES,
				multiple: true,
				className: "sr-only",
				tabIndex: -1,
				disabled: disabled || uploading || !teamId || atLimit,
				onChange: handleUpload
			})
		]
	});
}
export { AppLogoFilePicker as n, AppImagesPicker as t };
