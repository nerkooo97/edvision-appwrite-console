import { a as getCoverImageMimeType, i as getCoverImageExtension } from "./cover-image-format-CKZUHQO-.js";
import { J as useGeneratorPanelVisibility } from "./auth-BPuxYQAc.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { h as getCoverCardsAngledIconKeys, n as buildCoverApiUrl } from "./parse-params-BpMT2Ilk.js";
import { c as resolveCoverRenderDataInlineAssets } from "./editor-image-fields-BA0nVUcU.js";
import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from "react";
const COVER_DOWNLOAD_SCALES = [1, 2];
function getCoverScaledDimensions(width, height, scale) {
	const scaledWidth = Math.round(width * scale);
	const scaledHeight = Math.round(height * scale);
	if (scaledWidth > 4096 || scaledHeight > 4096) return null;
	return {
		width: scaledWidth,
		height: scaledHeight
	};
}
function formatCoverDownloadScaleLabel(scale) {
	return `${scale}×`;
}
function formatCoverDimensionsLabel(width, height) {
	return `${width} × ${height}`;
}
function buildCoverDownloadFilename(template, format, scale, width, height) {
	const extension = getCoverImageExtension(format);
	return `cover-${template}${scale === 1 ? "" : `-${scale}x`}-${width}x${height}.${extension}`;
}
var MAX_COVER_GET_URL_LENGTH = 1800;
function getCoverImageFieldValues(data) {
	switch (data.template) {
		case "integration": return [data.logoLeft, data.logoRight];
		case "integration-icon":
		case "showcase-icon":
		case "title-icon": return [data.icon];
		case "screenshot":
		case "screenshot-side":
		case "screenshot-angled": return [data.screenshot];
		case "cards-angled": return getCoverCardsAngledIconKeys().map((key) => data[key]);
		default: return [];
	}
}
function coverRenderDataHasInlineAssets(data) {
	return getCoverImageFieldValues(data).some((value) => value?.startsWith("data:") || value?.startsWith("blob:"));
}
function shouldPostCoverRenderRequest(data, origin = "") {
	if (coverRenderDataHasInlineAssets(data)) return true;
	return buildCoverApiUrl(data, origin).length > MAX_COVER_GET_URL_LENGTH;
}
function buildCoverDownloadData(data, scale) {
	const dimensions = getCoverScaledDimensions(data.width, data.height, scale);
	if (!dimensions) return null;
	return {
		...data,
		...dimensions
	};
}
async function fetchCoverImage(data, origin = typeof window !== "undefined" ? window.location.origin : "") {
	const baseOrigin = origin.replace(/\/+$/, "");
	const requestData = shouldPostCoverRenderRequest(data, baseOrigin) ? await resolveCoverRenderDataInlineAssets(data) : data;
	const response = shouldPostCoverRenderRequest(data, baseOrigin) ? await fetch(`${baseOrigin}/generator/cover`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(requestData)
	}) : await fetch(buildCoverApiUrl(data, baseOrigin));
	if (!response.ok) throw new Error(`Failed to render cover (${response.status})`);
	return response.blob();
}
function downloadCoverImageBlob(blob, data, scale = 1) {
	const objectUrl = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = objectUrl;
	link.download = buildCoverDownloadFilename(data.template, data.format, scale, data.width, data.height);
	link.rel = "noopener";
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(objectUrl);
}
async function encodeCoverImageBlob(source, format, origin = typeof window !== "undefined" ? window.location.origin : "") {
	if (format === "png") return source;
	const baseOrigin = origin.replace(/\/+$/, "");
	const response = await fetch(`${baseOrigin}/generator/cover/encode?format=${format}`, {
		method: "POST",
		headers: { "Content-Type": "image/png" },
		body: source
	});
	if (!response.ok) throw new Error(`Failed to encode cover image (${response.status})`);
	const blob = await response.blob();
	const expectedType = getCoverImageMimeType(format);
	if (blob.type && blob.type !== expectedType) return new Blob([blob], { type: expectedType });
	return blob;
}
var GeneratorLayoutContext = createContext(null);
function GeneratorLayoutProvider({ children }) {
	const { account } = useAuth();
	const { leftOpen, rightOpen, setLeftOpen, setRightOpen, toggleLeft, toggleRight } = useGeneratorPanelVisibility(account);
	const [coverExportData, setCoverExportData] = useState(null);
	const [diagramDocument, setDiagramDocument] = useState(null);
	const [apiDocsOpen, setApiDocsOpen] = useState(false);
	const [documentChrome, setDocumentChrome] = useState(null);
	const [editorTitle, setEditorTitle] = useState(null);
	const value = useMemo(() => ({
		coverExportData,
		setCoverExportData,
		diagramDocument,
		setDiagramDocument,
		apiDocsOpen,
		setApiDocsOpen,
		documentChrome,
		setDocumentChrome,
		editorTitle,
		setEditorTitle,
		leftPanelOpen: leftOpen,
		rightPanelOpen: rightOpen,
		setLeftPanelOpen: setLeftOpen,
		setRightPanelOpen: setRightOpen,
		toggleLeftPanel: toggleLeft,
		toggleRightPanel: toggleRight
	}), [
		apiDocsOpen,
		coverExportData,
		diagramDocument,
		documentChrome,
		editorTitle,
		leftOpen,
		rightOpen,
		setLeftOpen,
		setRightOpen,
		toggleLeft,
		toggleRight
	]);
	return /* @__PURE__ */ jsx(GeneratorLayoutContext.Provider, {
		value,
		children
	});
}
function useGeneratorLayout() {
	const context = useContext(GeneratorLayoutContext);
	if (!context) throw new Error("useGeneratorLayout must be used within GeneratorLayoutProvider");
	return context;
}
export { downloadCoverImageBlob as a, shouldPostCoverRenderRequest as c, formatCoverDownloadScaleLabel as d, getCoverScaledDimensions as f, coverRenderDataHasInlineAssets as i, COVER_DOWNLOAD_SCALES as l, useGeneratorLayout as n, encodeCoverImageBlob as o, buildCoverDownloadData as r, fetchCoverImage as s, GeneratorLayoutProvider as t, formatCoverDimensionsLabel as u };
