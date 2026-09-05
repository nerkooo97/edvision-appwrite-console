import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { ImageFormat } from "@appwrite.io/console";
import { Archive, File, FileText, Film, Image, Music } from "lucide-react";
const STORAGE_FILE_PREVIEW_ICON_CLASS = "bg-muted text-muted-foreground";
function getStorageFileIcon(mimeType) {
	const type = mimeType ?? "";
	if (type.startsWith("image/")) return Image;
	if (type.startsWith("video/")) return Film;
	if (type.startsWith("audio/")) return Music;
	if (type.includes("pdf") || type.includes("document")) return FileText;
	if (type.includes("zip") || type.includes("archive")) return Archive;
	return File;
}
function isStoragePreviewSupportedMimeType(mimeType) {
	if (!mimeType) return false;
	const t = mimeType.toLowerCase().split(";")[0].trim();
	return new Set([
		"image/jpeg",
		"image/jpg",
		"image/pjpeg",
		"image/png",
		"image/apng",
		"image/gif",
		"image/webp",
		"image/bmp",
		"image/x-ms-bmp",
		"image/avif",
		"image/x-icon",
		"image/vnd.microsoft.icon",
		"image/tiff",
		"image/x-tiff"
	]).has(t);
}
function isStorageVideoPreviewSupportedMimeType(mimeType) {
	if (!mimeType) return false;
	const t = mimeType.toLowerCase().split(";")[0].trim();
	return new Set([
		"video/mp4",
		"video/webm",
		"video/ogg",
		"video/quicktime",
		"video/x-m4v",
		"video/mpeg",
		"video/3gpp",
		"video/3gpp2"
	]).has(t);
}
function withStoragePreviewAdminMode(previewUrl) {
	return previewUrl + (previewUrl.includes("?") ? "&" : "?") + "mode=admin";
}
function StorageFilePreviewThumb({ projectId, bucketId, fileId, mimeType, name, variant, pending = false, className }) {
	const avifSupported = useAvifSupport();
	const FileIcon = getStorageFileIcon(mimeType);
	const iconClass = STORAGE_FILE_PREVIEW_ICON_CLASS;
	const useImagePreview = isStoragePreviewSupportedMimeType(mimeType) && !!projectId && !!bucketId && !!fileId && (variant === "table" || !pending);
	const previewSrc = useMemo(() => {
		if (!useImagePreview) return null;
		return withStoragePreviewAdminMode(sdk.forProject(projectId).storage.getFilePreview({
			bucketId,
			fileId,
			width: variant === "grid" ? 400 : 80,
			output: avifSupported ? ImageFormat.Avif : void 0
		}));
	}, [
		projectId,
		bucketId,
		fileId,
		useImagePreview,
		avifSupported,
		variant
	]);
	if (variant === "grid") {
		if (previewSrc) return /* @__PURE__ */ jsx("div", {
			className: cn("h-32 w-full overflow-hidden border-b border-border", className),
			children: /* @__PURE__ */ jsx("img", {
				src: previewSrc,
				alt: name ?? "",
				className: "h-full w-full object-cover"
			})
		});
		return /* @__PURE__ */ jsx("div", {
			className: cn("flex h-32 w-full items-center justify-center border-b border-border", iconClass, className),
			children: /* @__PURE__ */ jsx(FileIcon, { className: "h-12 w-12" })
		});
	}
	const imgClass = "h-10 w-10 rounded-md object-cover border border-border";
	if (previewSrc) return /* @__PURE__ */ jsx("img", {
		src: previewSrc,
		alt: name ?? "",
		className: cn(imgClass, className)
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-10 w-10 items-center justify-center rounded-md", iconClass, className),
		children: /* @__PURE__ */ jsx(FileIcon, { className: "h-5 w-5" })
	});
}
export { isStorageVideoPreviewSupportedMimeType as i, getStorageFileIcon as n, isStoragePreviewSupportedMimeType as r, StorageFilePreviewThumb as t };
