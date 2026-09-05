import { t as cn } from "./utils-DoqqkI3X.js";
import { h as fetchConsoleAccount } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { c as resolveCoverSizePresetKey, d as getCoverBrandThemeForSvgExport, h as resolveCoverEditorThemeId, n as COVER_IMAGE_FORMATS, o as getCoverSizePresetKey, r as COVER_SIZE_PRESETS, u as DEFAULT_COVER_THEME_ID } from "./constants-CL7SLzjY.js";
import { $ as PERSPECTIVE_SCREENSHOT_CARD_SURFACE, F as getCoverChartValueKey, H as getCoverTableCellKey, K as getCoverTableMatrix, L as normalizeCoverBarChartData, M as getCoverChartLabelKey, P as getCoverChartPoints, Q as PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO, R as normalizeCoverLineChartData, St as COVER_ARTBOARD_DISPLAY_WIDTH, Tt as getCoverDisplayHeight, W as getCoverTableHeaderKey, at as getCoverScreenshotAngledCanvasScale, bt as getCoverFrameWidthPx, ct as scaleCoverScreenshotAngledPerspective, dt as formatCoverEyebrow, et as PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM, f as mapCoverCodeSnippetLanguageToCodeEditorLanguage, nt as buildPerspectiveScreenshotCardTransform, ot as getCoverScreenshotAngledCardTransform, q as normalizeCoverTableData, rt as computeCoverScreenshotAngledLayoutOffset, st as scaleCoverScreenshotAngledCardTransform } from "./constants-B5zUV45z.js";
import { p as COVER_HERO_SCREENSHOT_FRAME, x as getCoverScreenshotGlassColors } from "./lucide-icon-svg-BStxTNvw.js";
import { i as getCoverScreenshotAngledShellDimensions, r as getCoverScreenshotAngledLayoutResetFields } from "./cover-screenshot-angled-frame-B65X7TQr.js";
import { a as getCoverImageMimeType, r as getCoverCanvasEncodeQuality } from "./cover-image-format-CKZUHQO-.js";
import { D as syncConsoleAccountAfterMutation, Fr as isAccountPrefsPayloadWithinLimit, K as useCoverGeneratorColumnsLayout, O as updateAccountPrefs, m as getConsoleAccountFromCache } from "./auth-BPuxYQAc.js";
import { t as Slider } from "./slider-BKjrzSmD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as DropdownMenuItem, i as DropdownMenuGroup, l as DropdownMenuSeparator, o as DropdownMenuLabel, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { _ as getCoverCardsAngledIconVisibilityKey, b as normalizeCoverCardsAngledData, d as COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY, f as COVER_CARDS_ANGLED_ICON_VISIBILITY_OPTIONS, g as getCoverCardsAngledIconSlots, h as getCoverCardsAngledIconKeys, i as createDefaultCoverData, l as COVER_CARDS_ANGLED_FADED_ICON_OPACITY, m as getCoverCardsAngledIconCardMetrics, n as buildCoverApiUrl, p as buildCoverCardsAngledHaloGrid, v as getCoverCardsAngledLayoutResetFields, y as isCoverDomPreviewTemplate } from "./parse-params-BpMT2Ilk.js";
import { a as persistCoverImageDataUrl, c as resolveCoverRenderDataInlineAssets, i as migrateLegacyCoverImageStorageKeys, l as revokeCoverImageObjectUrl, n as isCoverUploadedImageValue, o as persistCoverImageUpload, r as loadCoverImageFieldUrlsForTemplate, s as removeCoverImageField, t as clearCoverImageFieldsForTemplate, u as revokeCoverImageObjectUrls } from "./editor-image-fields-BA0nVUcU.js";
import { a as clearLegacyCoverEditorLocalStorage, c as parseSavedCoverGenerations, d as resolveCoverEditorDocumentName, f as resolveCoverGenerationPersistName, h as getCoverTemplatesForCategory, i as applyCoverGenerationName, l as readLegacyCoverEditorGeneration, m as COVER_TEMPLATE_CATEGORIES, n as MAX_SAVED_COVER_GENERATION_NAME_LENGTH, o as getCoverGenerationDisplayName, p as upsertSavedCoverGeneration, r as USER_PREFS_KEY_COVER_GENERATIONS, s as mergeCoverGenerationsIntoPrefs, t as COVER_GENERATIONS_LOCAL_STORAGE_KEY, u as removeSavedCoverGeneration } from "./cover-generation-prefs-CEWcs08T.js";
import { n as getCoverTemplateDefinition, t as COVER_TEMPLATE_DEFINITIONS } from "./template-config-BNvUm4v5.js";
import { t as CodeEditor } from "./CodeEditor-Z8DByNgB.js";
import { n as useIsXlUp } from "./use-mobile-C9thwzsE.js";
import { n as useViewportPanZoom, r as SchemaBlueprintMat } from "./useViewportPanZoom-COUwlx3T.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { t as useDebouncedValue } from "./useDebouncedValue-CLVLvRJ7.js";
import { a as downloadCoverImageBlob, c as shouldPostCoverRenderRequest, d as formatCoverDownloadScaleLabel, f as getCoverScaledDimensions, l as COVER_DOWNLOAD_SCALES, n as useGeneratorLayout, o as encodeCoverImageBlob, r as buildCoverDownloadData, s as fetchCoverImage, u as formatCoverDimensionsLabel } from "./GeneratorLayoutContext-SOAvqHb9.js";
import { c as GeneratorStartShell, d as CoverBuiltInIconPicker, f as CoverBrandBackgroundPreview, h as GeneratorColumnsResizableLayout, i as getCoverGenerationDraft, l as GeneratorSavedGenerationsPanel, m as CoverIconPreview, n as deleteCoverGenerationDraft, o as setCoverGenerationDraft, p as CoverHeroBrowserFrame, t as useRouteGenerationEditor, u as CoverThemeSelect } from "./use-route-generation-editor-CNwZmqYt.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChevronDown, Copy, Download, ExternalLink, FileImage, Loader2, Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import { flushSync } from "react-dom";
import { toCanvas } from "html-to-image";
import { createRoot } from "react-dom/client";
function useCoverPreviewImage(data, options) {
	const enabled = options?.enabled ?? true;
	const debouncedData = useDebouncedValue(data, 250);
	const previewData = useMemo(() => ({
		...debouncedData,
		format: "png"
	}), [debouncedData]);
	const query = useQuery({
		queryKey: ["cover-preview", useMemo(() => JSON.stringify(previewData), [previewData])],
		queryFn: async () => {
			const blob = await fetchCoverImage(previewData);
			return URL.createObjectURL(blob);
		},
		enabled,
		staleTime: 3e4,
		retry: false
	});
	useEffect(() => {
		const objectUrl = query.data;
		return () => {
			if (objectUrl?.startsWith("blob:")) URL.revokeObjectURL(objectUrl);
		};
	}, [query.data]);
	return query;
}
function CoverIntegrationGlassCard({ src, alt = "", iconSize, themeId, className, style }) {
	const glass = getCoverScreenshotGlassColors(themeId);
	const { padding, cardSize, radius } = getCoverCardsAngledIconCardMetrics(iconSize);
	return /* @__PURE__ */ jsx("div", {
		className: cn("shrink-0 overflow-hidden", className),
		style: {
			width: cardSize,
			height: cardSize,
			borderRadius: radius,
			border: `${COVER_HERO_SCREENSHOT_FRAME.borderWidth}px solid ${glass.shellBorder}`,
			backgroundColor: glass.shellFill,
			...style
		},
		children: src ? /* @__PURE__ */ jsx("div", {
			style: { margin: padding },
			children: /* @__PURE__ */ jsx(CoverIconPreview, {
				src,
				themeId,
				size: iconSize
			})
		}) : /* @__PURE__ */ jsx("div", {
			className: "bg-muted/35",
			style: {
				width: iconSize,
				height: iconSize,
				margin: padding,
				borderRadius: Math.max(8, Math.round(radius * .45))
			}
		})
	});
}
function PerspectiveScreenshotScene({ children, className, perspective = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.perspective, style, showBaseBackground = true, showSceneGlow, showSceneGrid, layout = "center", clipOffset = {
	x: 0,
	y: 0
}, contentScale = 1, contentTransformOrigin = "20% 20%" }) {
	const clipBottomRight = layout === "clip-bottom-right" || layout === "fill-bottom-right";
	const coverEndEdge = layout === "cover-end-edge";
	const sceneGlowVisible = showSceneGlow ?? showBaseBackground;
	const sceneGridVisible = showSceneGrid ?? showBaseBackground;
	const transformOrigin = coverEndEdge ? "100% 50%" : clipBottomRight ? contentTransformOrigin : void 0;
	const contentTransform = clipBottomRight || coverEndEdge ? [coverEndEdge ? `translate(calc(0px + ${clipOffset.x}px), calc(-50% + ${clipOffset.y}px))` : `translate(${clipOffset.x}px, ${clipOffset.y}px)`, contentScale !== 1 ? `scale(${contentScale})` : null].filter(Boolean).join(" ") : void 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative overflow-hidden", showBaseBackground ? "bg-[#09090b]" : "bg-transparent", className),
		style,
		children: [
			sceneGlowVisible ? /* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 z-0",
				style: { background: "radial-gradient(ellipse 70% 55% at 18% 88%, rgba(255, 46, 107, 0.28), transparent 68%)" }
			}) : null,
			sceneGridVisible ? /* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 z-0 opacity-80",
				style: {
					background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
					backgroundSize: "18px 18px"
				}
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-[1]",
				style: {
					perspective,
					transformStyle: "preserve-3d"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: cn("relative flex h-full w-full", coverEndEdge ? "block" : clipBottomRight ? "items-end justify-end" : "items-center justify-center"),
					style: { transformStyle: "preserve-3d" },
					children: /* @__PURE__ */ jsx("div", {
						className: coverEndEdge ? "absolute end-0 top-1/2" : void 0,
						style: {
							transformStyle: "preserve-3d",
							transform: contentTransform ? `${contentTransform} translateZ(1px)` : "translateZ(1px)",
							transformOrigin
						},
						children
					})
				})
			})
		]
	});
}
function PerspectiveScreenshotCard({ src, alt = "Screenshot", width, aspectRatio = PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO, rotateX = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateX, rotateY = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateY, rotateZ = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateZ, translateX = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateX, translateY = PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateY, focusX = 0, focusY = 0, zoom = 1, className, cardClassName, placeholder, browserFrame = false, themeId }) {
	const t = useT();
	const cardTransform = buildPerspectiveScreenshotCardTransform({
		rotateX,
		rotateY,
		rotateZ,
		translateX,
		translateY
	});
	const shellDimensions = browserFrame ? getCoverScreenshotAngledShellDimensions(width) : null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center justify-center", className),
		style: { transformStyle: "preserve-3d" },
		children: /* @__PURE__ */ jsx("div", {
			className: cn(!browserFrame && "overflow-hidden", cardClassName),
			style: {
				width: browserFrame ? shellDimensions?.shellWidth : width,
				...browserFrame ? { height: shellDimensions?.shellHeight } : { aspectRatio },
				...!browserFrame ? {
					borderRadius: PERSPECTIVE_SCREENSHOT_CARD_SURFACE.borderRadius,
					border: PERSPECTIVE_SCREENSHOT_CARD_SURFACE.border,
					background: PERSPECTIVE_SCREENSHOT_CARD_SURFACE.background,
					boxShadow: PERSPECTIVE_SCREENSHOT_CARD_SURFACE.boxShadow
				} : {},
				transform: cardTransform,
				transformStyle: "preserve-3d"
			},
			children: browserFrame && themeId ? /* @__PURE__ */ jsx(CoverHeroBrowserFrame, {
				frameWidth: width,
				frameHeight: shellDimensions.shellHeight,
				themeId,
				src,
				alt: t(alt),
				focusX,
				focusY,
				zoom,
				placeholder
			}) : src ? /* @__PURE__ */ jsx("img", {
				src,
				alt: t(alt),
				draggable: false,
				className: "block h-full w-full object-cover",
				style: {
					objectPosition: `${focusX}% ${focusY}%`,
					transform: zoom > 1 ? `scale(${zoom})` : void 0,
					transformOrigin: `${focusX}% ${focusY}%`
				}
			}) : placeholder ?? /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full items-center justify-center text-[13px] text-white/45",
				children: t("Screenshot preview")
			})
		})
	});
}
function CoverCardsAngledPreview({ data, width, height }) {
	const normalizedData = useMemo(() => normalizeCoverCardsAngledData(data), [data]);
	const canvasScale = useMemo(() => getCoverScreenshotAngledCanvasScale(width), [width]);
	const iconSlots = useMemo(() => getCoverCardsAngledIconSlots(normalizedData), [normalizedData]);
	const haloGrid = useMemo(() => buildCoverCardsAngledHaloGrid(normalizedData.columns, normalizedData.rows), [normalizedData.columns, normalizedData.rows]);
	const layoutOffset = useMemo(() => computeCoverScreenshotAngledLayoutOffset(width, height, {
		posXRatio: normalizedData.posXRatio,
		posYRatio: normalizedData.posYRatio
	}), [
		width,
		height,
		normalizedData.posXRatio,
		normalizedData.posYRatio
	]);
	const cardTransform = useMemo(() => scaleCoverScreenshotAngledCardTransform(getCoverScreenshotAngledCardTransform(normalizedData), canvasScale), [normalizedData, canvasScale]);
	const scenePerspective = useMemo(() => scaleCoverScreenshotAngledPerspective(PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.perspective, canvasScale), [canvasScale]);
	const layoutStyle = useMemo(() => {
		const iconSize = Math.round(normalizedData.iconSize * canvasScale);
		const gap = Math.round(normalizedData.gap * canvasScale);
		const { cardSize } = getCoverCardsAngledIconCardMetrics(iconSize);
		return {
			iconSize,
			gap,
			cardSize
		};
	}, [
		canvasScale,
		normalizedData.gap,
		normalizedData.iconSize
	]);
	const planeTransform = buildPerspectiveScreenshotCardTransform(cardTransform);
	return /* @__PURE__ */ jsx("div", {
		className: "relative isolate overflow-hidden",
		style: {
			width,
			height
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0",
			style: {
				isolation: "isolate",
				transform: "translateZ(0)"
			},
			children: [/* @__PURE__ */ jsx(CoverBrandBackgroundPreview, {
				themeId: normalizedData.theme,
				width,
				height,
				templateId: normalizedData.template
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-[1] h-full w-full",
				children: /* @__PURE__ */ jsx(PerspectiveScreenshotScene, {
					className: "h-full w-full",
					perspective: scenePerspective,
					showBaseBackground: false,
					showSceneGlow: false,
					showSceneGrid: false,
					layout: "fill-bottom-right",
					clipOffset: layoutOffset,
					contentScale: normalizedData.displayScale,
					children: /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gap: layoutStyle.gap,
							gridTemplateColumns: `repeat(${haloGrid.columns}, ${layoutStyle.cardSize}px)`,
							gridTemplateRows: `repeat(${haloGrid.rows}, ${layoutStyle.cardSize}px)`,
							transform: planeTransform,
							transformStyle: "preserve-3d"
						},
						children: haloGrid.cells.map((cell, index) => {
							if (cell.kind === "empty") return /* @__PURE__ */ jsx(CoverIntegrationGlassCard, {
								iconSize: layoutStyle.iconSize,
								themeId: normalizedData.theme,
								style: { opacity: COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY }
							}, `empty-${index}`);
							const slot = iconSlots[cell.iconIndex];
							if (!slot || slot.visibility === "hidden") return /* @__PURE__ */ jsx(CoverIntegrationGlassCard, {
								iconSize: layoutStyle.iconSize,
								themeId: normalizedData.theme,
								style: { opacity: COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY }
							}, `hidden-${index}`);
							return /* @__PURE__ */ jsx(CoverIntegrationGlassCard, {
								src: slot.src,
								iconSize: layoutStyle.iconSize,
								themeId: normalizedData.theme,
								style: slot.visibility === "fade" ? { opacity: COVER_CARDS_ANGLED_FADED_ICON_OPACITY } : void 0
							}, `filled-${index}-${slot.src}`);
						})
					})
				})
			})]
		})
	});
}
function CoverScreenshotAngledPreview({ data, width, height }) {
	const canvasScale = useMemo(() => getCoverScreenshotAngledCanvasScale(width), [width]);
	const cardWidth = useMemo(() => {
		return Math.round(getCoverFrameWidthPx(data.frameWidthPercent, {
			width: data.width,
			height: data.height
		}) * canvasScale);
	}, [
		data.frameWidthPercent,
		data.width,
		data.height,
		canvasScale
	]);
	const layoutOffset = useMemo(() => computeCoverScreenshotAngledLayoutOffset(width, height, {
		posXRatio: data.posXRatio,
		posYRatio: data.posYRatio
	}), [
		width,
		height,
		data.posXRatio,
		data.posYRatio
	]);
	const cardTransform = useMemo(() => scaleCoverScreenshotAngledCardTransform(getCoverScreenshotAngledCardTransform(data), canvasScale), [data, canvasScale]);
	const scenePerspective = useMemo(() => scaleCoverScreenshotAngledPerspective(PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.perspective, canvasScale), [canvasScale]);
	return /* @__PURE__ */ jsx("div", {
		className: "relative isolate overflow-hidden",
		style: {
			width,
			height
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0",
			style: {
				isolation: "isolate",
				transform: "translateZ(0)"
			},
			children: [/* @__PURE__ */ jsx(CoverBrandBackgroundPreview, {
				themeId: data.theme,
				width,
				height,
				templateId: data.template
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-[1] h-full w-full",
				children: /* @__PURE__ */ jsx(PerspectiveScreenshotScene, {
					className: "h-full w-full",
					perspective: scenePerspective,
					showBaseBackground: false,
					showSceneGlow: false,
					showSceneGrid: false,
					layout: "fill-bottom-right",
					clipOffset: layoutOffset,
					contentScale: data.displayScale,
					children: /* @__PURE__ */ jsx(PerspectiveScreenshotCard, {
						src: data.screenshot,
						width: cardWidth,
						focusX: data.focusX,
						focusY: data.focusY,
						zoom: data.zoom,
						rotateX: cardTransform.rotateX,
						rotateZ: cardTransform.rotateZ,
						rotateY: cardTransform.rotateY,
						translateX: cardTransform.translateX,
						translateY: cardTransform.translateY,
						browserFrame: true,
						themeId: data.theme
					})
				})
			})]
		})
	});
}
function isCoverGeneratorDomPreviewTemplate(template) {
	return isCoverDomPreviewTemplate(template);
}
function CoverPreviewContent({ data, previewUrl, className }) {
	const { width, height } = data;
	if (data.template === "screenshot-angled") return /* @__PURE__ */ jsx(CoverScreenshotAngledPreview, {
		data,
		width,
		height
	});
	if (data.template === "cards-angled") return /* @__PURE__ */ jsx(CoverCardsAngledPreview, {
		data: normalizeCoverCardsAngledData(data),
		width,
		height
	});
	if (previewUrl) return /* @__PURE__ */ jsx("img", {
		src: previewUrl,
		alt: "",
		draggable: false,
		className: cn("block max-w-none", className),
		style: {
			width,
			height
		}
	});
	return null;
}
function CoverScaledPreview({ data, previewUrl, displayWidth, className }) {
	const scale = displayWidth / data.width;
	const displayHeight = Math.round(data.height * scale);
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative shrink-0 overflow-hidden", className),
		style: {
			width: displayWidth,
			height: displayHeight
		},
		children: /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute left-0 top-0 origin-top-left",
			style: {
				width: data.width,
				height: data.height,
				transform: `scale(${scale})`
			},
			children: /* @__PURE__ */ jsx(CoverPreviewContent, {
				data,
				previewUrl
			})
		})
	});
}
function CoverCanvas({ data, recommendsPost, onCanvasSizeChange, onCopyApiUrl, onOpenImage, onDownload }) {
	const handleDownload = (format, scale) => {
		onDownload(format, scale);
	};
	const { canvasRef, pan, zoom, isDragging, bindCanvas, zoomIn, zoomOut, resetView, zoomPercentage, zoomInDisabled, zoomOutDisabled } = useViewportPanZoom({ maxZoom: 3 });
	const isDomPreview = isCoverGeneratorDomPreviewTemplate(data.template);
	const { data: previewUrl, isFetching, isError } = useCoverPreviewImage(data, { enabled: !isDomPreview });
	const displayHeight = getCoverDisplayHeight(data.width, data.height);
	const canvasPresetKey = getCoverSizePresetKey(data.width, data.height);
	const handleCanvasKeyDown = useCallback((e) => {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		const key = e.key;
		if (key === "+" || key === "=") {
			if (zoomInDisabled) return;
			e.preventDefault();
			zoomIn();
		} else if (key === "-" || key === "_") {
			if (zoomOutDisabled) return;
			e.preventDefault();
			zoomOut();
		} else if (key === "0") {
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
		resetView();
	}, [
		data.template,
		data.theme,
		data.width,
		data.height,
		resetView
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-0 flex-1 overflow-hidden bg-background",
		children: [/* @__PURE__ */ jsx("div", {
			ref: canvasRef,
			...bindCanvas,
			tabIndex: -1,
			role: "application",
			"aria-label": "Pan and zoom cover preview. Scroll to zoom, drag to pan. Keys: + zoom in, - zoom out, 0 reset.",
			onKeyDown: handleCanvasKeyDown,
			className: cn("absolute inset-0 overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", isDragging ? "cursor-grabbing" : "cursor-grab"),
			children: /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none h-full w-full overflow-hidden will-change-transform",
				style: {
					transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
					transformOrigin: "0 0"
				},
				children: [/* @__PURE__ */ jsx(SchemaBlueprintMat, {}), /* @__PURE__ */ jsx("div", {
					className: "flex h-full w-full items-center justify-center px-4 py-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative shrink-0 overflow-hidden rounded-xl border border-border bg-background shadow-sm",
						style: {
							width: 720,
							height: displayHeight
						},
						children: [previewUrl || isDomPreview ? /* @__PURE__ */ jsx(CoverScaledPreview, {
							data,
							previewUrl,
							displayWidth: 720
						}) : /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center overflow-hidden bg-muted/20 text-[13px] text-muted-foreground",
							style: {
								width: 720,
								height: displayHeight
							},
							children: isError ? "Could not render preview" : "Rendering preview…"
						}), !isDomPreview && isFetching && previewUrl ? /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center justify-center bg-background/40",
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
						}) : null]
					})
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none absolute inset-x-4 top-4 z-20 flex items-start justify-between gap-2",
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
						"aria-label": "Zoom in",
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
						"aria-label": "Zoom out",
						children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
						onClick: resetView,
						"aria-label": "Reset pan and zoom",
						children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-auto flex max-w-[min(100%,720px)] shrink-0 flex-wrap items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 border-border bg-card/95 text-[12px] backdrop-blur-sm",
						onClick: onCopyApiUrl,
						disabled: recommendsPost,
						title: recommendsPost ? "This cover is too large for a GET URL. Open API docs for POST examples." : void 0,
						children: [/* @__PURE__ */ jsx(Copy, { className: "me-1.5 size-3.5" }), "Copy URL"]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 border-border bg-card/95 text-[12px] backdrop-blur-sm",
						onClick: onOpenImage,
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 size-3.5" }), "Open image"]
					}),
					/* @__PURE__ */ jsxs(Select, {
						value: canvasPresetKey,
						onValueChange: (value) => {
							const { width, height } = resolveCoverSizePresetKey(value);
							onCanvasSizeChange(width, height);
						},
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							"aria-label": "Canvas size",
							className: "h-8 w-auto max-w-[min(100%,220px)] border-border bg-card/95 text-[12px] backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(SelectValue, {})
						}), /* @__PURE__ */ jsx(SelectContent, {
							align: "end",
							children: COVER_SIZE_PRESETS.map((preset) => /* @__PURE__ */ jsx(SelectItem, {
								value: preset.id,
								children: preset.label
							}, preset.id))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative isolate flex shrink-0 items-stretch",
						children: [/* @__PURE__ */ jsxs(Button, {
							type: "button",
							size: "sm",
							className: "relative z-[1] h-8 rounded-e-none px-3 text-[12px] shadow-sm",
							onClick: () => handleDownload(data.format, 1),
							children: [/* @__PURE__ */ jsx(Download, { className: "me-1.5 size-3.5" }), "Download"]
						}), /* @__PURE__ */ jsxs(DropdownMenu, {
							modal: false,
							children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									className: "relative z-[2] h-8 rounded-s-none border-s border-primary-foreground/15 px-2 shadow-sm",
									"aria-label": "More download options",
									children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5" })
								})
							}), /* @__PURE__ */ jsx(DropdownMenuContent, {
								align: "end",
								className: "w-60 p-1.5",
								children: COVER_IMAGE_FORMATS.map((format, formatIndex) => /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
									formatIndex > 0 ? /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1.5" }) : null,
									/* @__PURE__ */ jsx(DropdownMenuLabel, {
										className: "px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: format.toUpperCase()
									}),
									COVER_DOWNLOAD_SCALES.map((scale) => {
										const dimensions = getCoverScaledDimensions(data.width, data.height, scale);
										const scaleLabel = formatCoverDownloadScaleLabel(scale);
										const sizeLabel = dimensions ? formatCoverDimensionsLabel(dimensions.width, dimensions.height) : "Too large";
										return /* @__PURE__ */ jsxs(DropdownMenuItem, {
											disabled: !dimensions,
											className: "min-h-10 cursor-pointer px-2.5 py-2 text-[13px]",
											title: dimensions ? void 0 : "Exceeds maximum export size (4096px)",
											onSelect: () => handleDownload(format, scale),
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: scaleLabel
											}), /* @__PURE__ */ jsx("span", {
												className: "ms-auto text-[12px] text-muted-foreground",
												children: sizeLabel
											})]
										}, `${format}-${scale}`);
									})
								] }, format))
							})]
						})]
					})
				]
			})]
		})]
	});
}
function setCardsAngledField(data, key, value) {
	return {
		...data,
		[key]: value
	};
}
function CoverCardsAngledIconGridEditor({ data, imageFields, onChange, onImageFieldChange, onImageFileUpload }) {
	const normalized = useMemo(() => normalizeCoverCardsAngledData(data), [data]);
	const iconSlots = useMemo(() => getCoverCardsAngledIconSlots(normalized), [normalized]);
	const haloGrid = useMemo(() => buildCoverCardsAngledHaloGrid(normalized.columns, normalized.rows), [normalized.columns, normalized.rows]);
	const iconKeys = useMemo(() => getCoverCardsAngledIconKeys(), []);
	const [editingIndex, setEditingIndex] = useState(null);
	const fileInputRef = useRef(null);
	const editingKey = editingIndex != null ? iconKeys[editingIndex] : null;
	const editingVisibilityKey = editingKey ? getCoverCardsAngledIconVisibilityKey(editingKey) : null;
	const editingIconValue = editingKey != null ? imageFields[editingKey] ?? normalized[editingKey] ?? "" : "";
	const editingVisibility = editingVisibilityKey != null ? normalized[editingVisibilityKey] ?? "visible" : "visible";
	const isCustomImage = typeof editingIconValue === "string" && editingIconValue.length > 0 && isCoverUploadedImageValue(editingIconValue);
	useEffect(() => {
		if (editingIndex != null && editingIndex >= iconSlots.length) setEditingIndex(null);
	}, [editingIndex, iconSlots.length]);
	const handleDialogOpenChange = (open) => {
		if (!open) setEditingIndex(null);
	};
	const updateIcon = (key, value) => {
		onImageFieldChange(key, void 0);
		onChange(setCardsAngledField(data, key, value));
	};
	const updateVisibility = (value) => {
		if (!editingVisibilityKey) return;
		onChange(setCardsAngledField(data, editingVisibilityKey, value));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
				className: "text-[13px]",
				children: "Icons"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] text-muted-foreground",
				children: "Grid matches the cover layout. Click a card to edit its icon and visibility."
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-fit rounded-lg border border-border bg-muted/15 p-2",
				style: {
					display: "grid",
					gap: 4,
					gridTemplateColumns: `repeat(${haloGrid.columns}, 36px)`
				},
				children: haloGrid.cells.map((cell, index) => {
					if (cell.kind === "empty") return /* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "rounded-md border border-border/70 bg-muted/25",
						style: {
							width: 36,
							height: 36,
							opacity: COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY
						}
					}, `halo-${index}`);
					const slot = iconSlots[cell.iconIndex];
					if (!slot) return null;
					const isHidden = slot.visibility === "hidden";
					const isFaded = slot.visibility === "fade";
					return /* @__PURE__ */ jsx("button", {
						type: "button",
						title: `Icon ${cell.iconIndex + 1}${isHidden ? " (hidden)" : isFaded ? " (faded)" : ""}`,
						"aria-label": `Edit icon ${cell.iconIndex + 1}`,
						"aria-pressed": editingIndex === cell.iconIndex,
						onClick: () => setEditingIndex(cell.iconIndex),
						className: cn("flex items-center justify-center overflow-hidden rounded-md border bg-background p-1 transition-colors", editingIndex === cell.iconIndex ? "border-[var(--brand-cta)] ring-1 ring-[var(--brand-cta)]/30" : "border-border hover:border-foreground/25 hover:bg-accent/40"),
						style: {
							width: 36,
							height: 36,
							opacity: isHidden ? COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY : isFaded ? COVER_CARDS_ANGLED_FADED_ICON_OPACITY : 1
						},
						children: !isHidden && slot.src ? /* @__PURE__ */ jsx(CoverIconPreview, {
							src: slot.src,
							themeId: data.theme,
							size: 20
						}) : null
					}, `icon-${cell.iconIndex}`);
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: editingIndex != null,
				onOpenChange: handleDialogOpenChange,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "flex max-h-[min(85dvh,640px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-lg",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: editingIndex != null ? `Icon ${editingIndex + 1}` : "Icon" }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "mt-2 text-[13px]",
								children: "Choose an icon and how it appears on the cover."
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						editingKey && editingVisibilityKey ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 overflow-y-auto px-6 py-4",
							children: [
								/* @__PURE__ */ jsx(CoverBuiltInIconPicker, {
									id: editingKey,
									label: "Icon",
									value: editingIconValue,
									isCustomImage,
									onSelectBuiltIn: (path) => {
										onImageFieldChange(editingKey, void 0);
										onChange(setCardsAngledField(data, editingKey, path));
									}
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: "Visibility"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-1.5",
										children: COVER_CARDS_ANGLED_ICON_VISIBILITY_OPTIONS.map((option) => /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => updateVisibility(option.value),
											className: cn("rounded-md border px-2.5 py-1.5 text-[12px] font-medium transition-colors", editingVisibility === option.value ? "border-foreground/30 bg-accent text-foreground" : "border-border text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
											children: option.label
										}, option.value))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[12px] font-medium text-muted-foreground",
											children: "Custom image"
										}),
										isCustomImage ? /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-3",
											children: [/* @__PURE__ */ jsx("img", {
												src: editingIconValue,
												alt: "",
												className: "h-14 w-14 shrink-0 rounded-md border border-border object-cover"
											}), /* @__PURE__ */ jsxs("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[13px] font-medium text-foreground",
													children: "Uploaded image"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground",
													children: "Saved locally in this browser for preview and export"
												})]
											})]
										}) : null,
										/* @__PURE__ */ jsx(Input, {
											value: isCustomImage ? "" : editingIconValue,
											onChange: (event) => {
												onImageFieldChange(editingKey, void 0);
												onChange(setCardsAngledField(data, editingKey, event.target.value || void 0));
											},
											placeholder: "Paste an image URL or path",
											className: "h-9 text-[13px]",
											disabled: isCustomImage
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap gap-2",
											children: [
												/* @__PURE__ */ jsx("input", {
													ref: fileInputRef,
													type: "file",
													accept: "image/*,.svg",
													className: "hidden",
													onChange: (event) => {
														const file = event.target.files?.[0];
														if (!file || !editingKey) return;
														onImageFileUpload(editingKey, file);
														event.target.value = "";
													}
												}),
												/* @__PURE__ */ jsx(Button, {
													type: "button",
													variant: "outline",
													size: "sm",
													className: "h-8 text-[12px]",
													onClick: () => fileInputRef.current?.click(),
													children: "Upload image"
												}),
												editingIconValue ? /* @__PURE__ */ jsx(Button, {
													type: "button",
													variant: "ghost",
													size: "sm",
													className: "h-8 text-[12px]",
													onClick: () => updateIcon(editingKey, void 0),
													children: "Clear"
												}) : null
											]
										})
									]
								})
							]
						}) : null
					]
				})
			})
		]
	});
}
function setTableField(data, key, value) {
	return {
		...data,
		[key]: value
	};
}
function CoverTableGridEditor({ data, onChange }) {
	const normalized = useMemo(() => normalizeCoverTableData(data), [data]);
	const matrix = useMemo(() => getCoverTableMatrix(normalized), [normalized]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
			className: "text-[13px]",
			children: "Table data"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[12px] text-muted-foreground",
			children: "Edit headers and cell values. The layout matches the cover table."
		})] }), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border border-border",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [normalized.showHeader ? /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: matrix.headers.map((header, col) => /* @__PURE__ */ jsx(TableHead, {
					className: "px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ jsx(Input, {
						value: header,
						onChange: (event) => {
							onChange(setTableField(data, getCoverTableHeaderKey(col), event.target.value));
						},
						placeholder: `Column ${col + 1}`,
						className: "h-8 border-0 bg-transparent px-0 text-[11px] font-semibold uppercase tracking-wider shadow-none focus-visible:ring-0"
					})
				}, getCoverTableHeaderKey(col)))
			}) }) : null, /* @__PURE__ */ jsx(TableBody, { children: matrix.rows.map((row, rowIndex) => /* @__PURE__ */ jsx(TableRow, {
				className: "hover:bg-transparent border-b border-border last:border-b-0",
				children: row.map((cell, colIndex) => /* @__PURE__ */ jsx(TableCell, {
					className: "px-3 py-2",
					children: /* @__PURE__ */ jsx(Input, {
						value: cell,
						onChange: (event) => {
							onChange(setTableField(data, getCoverTableCellKey(rowIndex, colIndex), event.target.value));
						},
						placeholder: colIndex === 0 ? `Row ${rowIndex + 1}` : "",
						className: "h-8 text-[13px]"
					})
				}, getCoverTableCellKey(rowIndex, colIndex)))
			}, `row-${rowIndex}`)) })] })
		})]
	});
}
function setChartField(data, key, value) {
	return {
		...data,
		[key]: value
	};
}
function CoverChartDataEditor({ data, onChange }) {
	const normalized = useMemo(() => {
		return data.template === "bar-chart" ? normalizeCoverBarChartData(data) : normalizeCoverLineChartData(data);
	}, [data]);
	const points = useMemo(() => getCoverChartPoints(normalized), [normalized]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
			className: "text-[13px]",
			children: "Chart data"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[12px] text-muted-foreground",
			children: "Edit labels and values for each data point."
		})] }), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border border-border",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [/* @__PURE__ */ jsx(TableHead, {
					className: "px-3 py-2 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Label"
				}), /* @__PURE__ */ jsx(TableHead, {
					className: "px-3 py-2 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Value"
				})]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: points.map((point, index) => /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border last:border-b-0",
				children: [/* @__PURE__ */ jsx(TableCell, {
					className: "px-3 py-2",
					children: /* @__PURE__ */ jsx(Input, {
						value: point.label,
						onChange: (event) => {
							onChange(setChartField(data, getCoverChartLabelKey(index), event.target.value));
						},
						placeholder: `Point ${index + 1}`,
						className: "h-8 text-[13px]"
					})
				}), /* @__PURE__ */ jsx(TableCell, {
					className: "px-3 py-2",
					children: /* @__PURE__ */ jsx(Input, {
						type: "number",
						min: 0,
						value: point.value,
						onChange: (event) => {
							onChange(setChartField(data, getCoverChartValueKey(index), event.target.value));
						},
						placeholder: "0",
						className: "h-8 text-[13px]"
					})
				})]
			}, `chart-point-${index}`)) })] })
		})]
	});
}
function snapCoverRangeValue(value, min, max, step) {
	if (!Number.isFinite(value)) return min;
	const clamped = Math.min(max, Math.max(min, value));
	const snapped = Math.round(clamped / step) * step;
	return Number(Math.min(max, Math.max(min, snapped)).toFixed(4));
}
function formatCoverRangeValue(value, step) {
	if (step >= 1) return String(Math.round(value));
	const decimals = String(step).includes(".") ? String(step).split(".")[1]?.length ?? 2 : 2;
	return value.toFixed(decimals).replace(/\.?0+$/, "");
}
function CoverRangeField({ field, value, onValueChange }) {
	const min = field.min ?? 0;
	const max = field.max ?? 100;
	const step = field.step ?? 1;
	const numericValue = typeof value === "number" && Number.isFinite(value) ? snapCoverRangeValue(value, min, max, step) : min;
	const setValue = (next) => {
		onValueChange(snapCoverRangeValue(next, min, max, step));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: field.key,
					className: "text-[13px]",
					children: field.label
				}), /* @__PURE__ */ jsxs("span", {
					className: "text-[12px] tabular-nums text-muted-foreground",
					children: [formatCoverRangeValue(numericValue, step), field.unit ? ` ${field.unit}` : ""]
				})]
			}),
			field.description ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: field.description
			}) : null,
			/* @__PURE__ */ jsx(Slider, {
				id: field.key,
				min,
				max,
				step,
				value: [numericValue],
				onValueChange: ([next]) => setValue(next ?? numericValue),
				className: "py-1"
			})
		]
	});
}
function CoverFieldInput({ field, value, editorData, onValueChange, onImageChange, onImageFileUpload, onClearImageField, onSelectBuiltInIcon }) {
	const fileInputRef = useRef(null);
	if (field.type === "boolean") return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2.5",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.key,
			className: "text-[13px]",
			children: field.label
		}), field.description ? /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[12px] text-muted-foreground",
			children: field.description
		}) : null] }), /* @__PURE__ */ jsx(Switch, {
			id: field.key,
			checked: Boolean(value),
			onCheckedChange: (checked) => onValueChange(checked)
		})]
	});
	if (field.type === "select") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.key,
			className: "text-[13px]",
			children: field.label
		}), /* @__PURE__ */ jsxs(Select, {
			value: String(value ?? field.options?.[0]?.value ?? ""),
			onValueChange: (next) => onValueChange(next),
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				id: field.key,
				className: "h-9 text-[13px]",
				children: /* @__PURE__ */ jsx(SelectValue, {})
			}), /* @__PURE__ */ jsx(SelectContent, { children: (field.options ?? []).map((option) => /* @__PURE__ */ jsx(SelectItem, {
				value: option.value,
				children: option.label
			}, option.value)) })]
		})]
	});
	if (field.type === "image") {
		const stringValue = typeof value === "string" ? value : "";
		const isUploadedImage = stringValue.length > 0 && isCoverUploadedImageValue(stringValue);
		const showBuiltInPicker = field.imagePicker === "builtin-icons";
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [
				showBuiltInPicker ? /* @__PURE__ */ jsx(CoverBuiltInIconPicker, {
					id: field.key,
					label: field.label,
					description: field.description,
					value: stringValue,
					isCustomImage: isUploadedImage,
					onSelectBuiltIn: onSelectBuiltInIcon
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: field.key,
					className: "text-[13px]",
					children: field.label
				}), field.description ? /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: field.description
				}) : null] }),
				isUploadedImage ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: stringValue,
						alt: "",
						className: "h-14 w-14 shrink-0 rounded-md border border-border object-cover"
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] font-medium text-foreground",
							children: "Uploaded image"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: "Saved locally in this browser for preview and export"
						})]
					})]
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						showBuiltInPicker ? /* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-medium text-muted-foreground",
							children: "Custom image"
						}) : null,
						/* @__PURE__ */ jsx(Input, {
							id: field.key,
							value: isUploadedImage ? "" : stringValue,
							onChange: (event) => {
								onClearImageField();
								onImageChange(event.target.value || void 0);
							},
							placeholder: field.placeholder ?? "Paste an image URL or path",
							className: "h-9 text-[13px]",
							disabled: isUploadedImage
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ jsx("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/*,.svg",
									className: "hidden",
									onChange: async (event) => {
										const file = event.target.files?.[0];
										if (!file) return;
										onImageFileUpload(file);
										event.target.value = "";
									}
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: () => fileInputRef.current?.click(),
									children: "Upload image"
								}),
								stringValue ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: () => {
										onClearImageField();
										onImageChange(void 0);
									},
									children: "Clear"
								}) : null
							]
						})
					]
				})
			]
		});
	}
	if (field.type === "range") return /* @__PURE__ */ jsx(CoverRangeField, {
		field,
		value,
		onValueChange
	});
	if (field.type === "code") {
		const languageValue = editorData[field.codeLanguageField ?? "language"];
		const monacoLanguage = editorData.template === "code-snippet" ? mapCoverCodeSnippetLanguageToCodeEditorLanguage(typeof languageValue === "string" ? languageValue : void 0) : "plaintext";
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsx(Label, {
					htmlFor: field.key,
					className: "text-[13px]",
					children: field.label
				}),
				field.description ? /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: field.description
				}) : null,
				/* @__PURE__ */ jsx(CodeEditor, {
					value: String(value ?? ""),
					onChange: (next) => onValueChange(next),
					language: monacoLanguage,
					height: 280,
					minimap: false,
					lineNumbers: "on",
					modelPath: `cover-generator/${editorData.template}/${field.key}`,
					className: "min-h-[280px] rounded-lg"
				})
			]
		});
	}
	const commonProps = {
		id: field.key,
		placeholder: field.placeholder,
		className: "text-[13px]"
	};
	if (field.type === "textarea") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: field.key,
			className: "text-[13px]",
			children: field.label
		}), /* @__PURE__ */ jsx(Textarea, {
			...commonProps,
			value: String(value ?? ""),
			onChange: (event) => onValueChange(event.target.value),
			className: "min-h-[96px] text-[13px]"
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx(Label, {
				htmlFor: field.key,
				className: "text-[13px]",
				children: field.label
			}),
			field.description ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: field.description
			}) : null,
			/* @__PURE__ */ jsx(Input, {
				...commonProps,
				type: field.type === "number" ? "number" : "text",
				min: field.min,
				max: field.max,
				step: field.step,
				value: value == null ? "" : String(value),
				onChange: (event) => {
					if (field.type === "number") {
						onValueChange(Number(event.target.value));
						return;
					}
					onValueChange(event.target.value);
				},
				className: "h-9 text-[13px]"
			})
		]
	});
}
function getFieldValue(data, key) {
	return data[key];
}
function setFieldValue(data, key, value) {
	return {
		...data,
		[key]: value
	};
}
function CoverEditorForm({ data, imageFields, onChange, onImageFieldChange, onImageFileUpload }) {
	const fields = getCoverTemplateDefinition(data.template)?.fields ?? [];
	const handleResetPerspectiveLayout = () => {
		if (data.template === "screenshot-angled") {
			onChange({
				...data,
				...getCoverScreenshotAngledLayoutResetFields()
			});
			return;
		}
		if (data.template === "cards-angled") onChange({
			...data,
			...getCoverCardsAngledLayoutResetFields()
		});
	};
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-4",
		children: fields.flatMap((field) => {
			const items = [];
			if ((data.template === "screenshot-angled" || data.template === "cards-angled") && field.key === "displayScale") items.push(/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: "3D position and layout"
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-8 shrink-0 text-[12px]",
					onClick: handleResetPerspectiveLayout,
					children: "Reset"
				})]
			}, "perspective-layout-reset"));
			items.push(/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CoverFieldInput, {
				field,
				editorData: data,
				value: field.type === "image" ? imageFields[field.key] ?? getFieldValue(data, field.key) : getFieldValue(data, field.key),
				onValueChange: (value) => {
					const nextValue = field.key === "eyebrow" && typeof value === "string" ? formatCoverEyebrow(value) ?? value : value;
					onChange(setFieldValue(data, field.key, nextValue));
				},
				onImageChange: (value) => {
					if (value && isCoverUploadedImageValue(value)) {
						onImageFieldChange(field.key, value);
						return;
					}
					onImageFieldChange(field.key, void 0);
					onChange(setFieldValue(data, field.key, value));
				},
				onImageFileUpload: (file) => {
					onImageFileUpload(field.key, file);
				},
				onClearImageField: () => {
					onImageFieldChange(field.key, void 0);
				},
				onSelectBuiltInIcon: (path) => {
					onImageFieldChange(field.key, void 0);
					onChange(setFieldValue(data, field.key, path));
				}
			}) }, field.key));
			if (data.template === "cards-angled" && field.key === "gap") items.push(/* @__PURE__ */ jsx(CoverCardsAngledIconGridEditor, {
				data,
				imageFields,
				onChange,
				onImageFieldChange,
				onImageFileUpload
			}, "cards-angled-icon-grid"));
			if (data.template === "table" && field.key === "frameWidthPercent") items.push(/* @__PURE__ */ jsx(CoverTableGridEditor, {
				data,
				onChange
			}, "table-grid-editor"));
			if ((data.template === "bar-chart" || data.template === "line-chart") && field.key === "frameWidthPercent") items.push(/* @__PURE__ */ jsx(CoverChartDataEditor, {
				data,
				onChange
			}, "chart-data-editor"));
			return items;
		})
	});
}
function CoverPropertiesPanel({ data, imageFields, apiUrl, onChange, onThemeChange, onImageFieldChange, onImageFileUpload, onResetTemplate }) {
	const [resetOpen, setResetOpen] = useState(false);
	const templateDefinition = getCoverTemplateDefinition(data.template);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "Properties"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[12px] text-muted-foreground",
						children: templateDefinition?.label ?? data.template
					})]
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-8 shrink-0 text-[12px]",
					onClick: () => setResetOpen(true),
					children: "Reset"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 py-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-4",
					children: /* @__PURE__ */ jsx(CoverThemeSelect, {
						theme: data.theme,
						onThemeChange
					})
				}), /* @__PURE__ */ jsx(CoverEditorForm, {
					data,
					imageFields,
					onChange,
					onImageFieldChange,
					onImageFileUpload
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "shrink-0 border-t border-border bg-muted/20 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] font-medium text-foreground",
					children: "API URL"
				}), /* @__PURE__ */ jsx("code", {
					className: "mt-2 block max-h-24 overflow-y-auto rounded-md bg-background px-2 py-1.5 text-[10px] leading-5 text-muted-foreground",
					children: apiUrl
				})]
			}),
			/* @__PURE__ */ jsx(AlertDialog, {
				open: resetOpen,
				onOpenChange: setResetOpen,
				children: /* @__PURE__ */ jsxs(AlertDialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(AlertDialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: "Reset template fields" }), /* @__PURE__ */ jsx(AlertDialogDescription, {
							className: "mt-2 text-[13px]",
							children: "Restore all fields for this template to their defaults. Uploaded images for this template will be removed. Canvas size, cover theme, and export format stay the same."
						})]
					}), /* @__PURE__ */ jsxs(AlertDialogFooter, {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
							className: "mt-0",
							children: "Cancel"
						}), /* @__PURE__ */ jsx(AlertDialogAction, {
							onClick: () => {
								onResetTemplate();
								setResetOpen(false);
							},
							children: "Reset"
						})]
					})]
				})
			})
		]
	});
}
function CoverTemplateCard({ template, theme, selected = false, variant = "start", onSelect }) {
	const previewRef = useRef(null);
	const [previewWidth, setPreviewWidth] = useState(280);
	const previewData = useMemo(() => createDefaultCoverData(template, theme), [template, theme]);
	const usesDomPreview = isCoverGeneratorDomPreviewTemplate(template);
	const previewUrl = useMemo(() => {
		if (typeof window === "undefined" || usesDomPreview) return "";
		return buildCoverApiUrl({
			...previewData,
			format: "png"
		}, window.location.origin);
	}, [previewData, usesDomPreview]);
	const definition = COVER_TEMPLATE_DEFINITIONS.find((item) => item.id === template);
	const previewBackground = getCoverBrandThemeForSvgExport(theme).background;
	useLayoutEffect(() => {
		const element = previewRef.current;
		if (!element) return;
		const updatePreviewWidth = () => {
			const width = element.getBoundingClientRect().width;
			if (width > 0) setPreviewWidth(width);
		};
		updatePreviewWidth();
		const resizeObserver = new ResizeObserver(updatePreviewWidth);
		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: onSelect,
		className: cn("flex w-full flex-col overflow-hidden border text-start transition-colors", variant === "panel" ? "rounded-md" : "rounded-xl", selected ? "border-[var(--brand-cta)] bg-[var(--brand-cta)]/5 ring-1 ring-[var(--brand-cta)]/25" : "border-border bg-card/40 hover:bg-accent/40"),
		children: [/* @__PURE__ */ jsx("div", {
			ref: previewRef,
			className: "relative aspect-[1200/630] w-full overflow-hidden border-b border-border",
			style: { backgroundColor: previewBackground },
			children: previewWidth > 0 ? /* @__PURE__ */ jsx(CoverScaledPreview, {
				data: previewData,
				previewUrl: previewUrl || void 0,
				displayWidth: previewWidth,
				className: "absolute left-0 top-0"
			}) : null
		}), /* @__PURE__ */ jsx("div", {
			className: variant === "panel" ? "px-1.5 py-1" : "px-3 py-2.5",
			children: /* @__PURE__ */ jsx("span", {
				className: cn("block font-medium text-foreground", variant === "panel" ? "truncate text-center text-[10px]" : "text-[14px]"),
				children: definition?.label ?? template
			})
		})]
	});
}
function CoverStartView({ generations, isAuthenticated, isDeleting = false, isRenaming = false, maxNameLength, onSelectTemplate, onOpenGeneration, onRenameGeneration, onDeleteGeneration }) {
	const [categoryFilter, setCategoryFilter] = useState("all");
	const templates = useMemo(() => getCoverTemplatesForCategory(categoryFilter), [categoryFilter]);
	return /* @__PURE__ */ jsx(GeneratorStartShell, {
		title: "Create a cover",
		description: "Continue a saved cover or start from a template. Your work is saved automatically while you edit.",
		savedTitle: "Saved covers",
		templatesTitle: "Choose template",
		saved: /* @__PURE__ */ jsx(GeneratorSavedGenerationsPanel, {
			generations: useMemo(() => generations.map((generation) => {
				const definition = COVER_TEMPLATE_DEFINITIONS.find((entry) => entry.id === generation.templateId);
				return {
					id: generation.id,
					name: generation.name,
					updatedAt: generation.updatedAt,
					subtitle: definition?.label
				};
			}), [generations]),
			isAuthenticated,
			isDeleting,
			isRenaming,
			maxNameLength,
			icon: FileImage,
			emptyTitle: "No saved covers yet",
			emptyDescription: "Pick a template to create your first cover.",
			signInHint: "Sign in to sync covers across devices.",
			onOpenGeneration,
			onRenameGeneration,
			onDeleteGeneration
		}),
		templates: /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-10 flex flex-wrap gap-1.5 bg-background pb-3 pt-0.5",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: categoryFilter === "all" ? "secondary" : "outline",
					className: "h-7 text-[11px]",
					onClick: () => setCategoryFilter("all"),
					children: "All"
				}), COVER_TEMPLATE_CATEGORIES.map((category) => /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: categoryFilter === category.id ? "secondary" : "outline",
					className: "h-7 text-[11px]",
					onClick: () => setCategoryFilter(category.id),
					children: category.label
				}, category.id))]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
				children: templates.map((templateId) => /* @__PURE__ */ jsx(CoverTemplateCard, {
					template: templateId,
					theme: DEFAULT_COVER_THEME_ID,
					onSelect: () => onSelectTemplate(templateId)
				}, templateId))
			})]
		})
	});
}
async function preloadImages(element) {
	const images = element.querySelectorAll("img");
	await Promise.all(Array.from(images).map((img) => new Promise((resolve) => {
		if (img.complete && img.naturalWidth > 0) {
			resolve();
			return;
		}
		const done = () => resolve();
		img.addEventListener("load", done, { once: true });
		img.addEventListener("error", done, { once: true });
	})));
}
function waitForPaint() {
	return new Promise((resolve) => {
		requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
	});
}
function tryCanvasToBlob(canvas, mimeType, quality) {
	return new Promise((resolve) => {
		canvas.toBlob((blob) => resolve(blob), mimeType, quality);
	});
}
async function canvasToBlob(canvas, format) {
	const blob = await tryCanvasToBlob(canvas, getCoverImageMimeType(format), getCoverCanvasEncodeQuality(format));
	if (blob) return blob;
	if (format === "avif") {
		const pngBlob = await tryCanvasToBlob(canvas, "image/png");
		if (!pngBlob) throw new Error("Could not encode cover image");
		return encodeCoverImageBlob(pngBlob, "avif");
	}
	throw new Error("Could not encode cover image");
}
function renderCoverDomPreview(data, width, height) {
	if (!isCoverDomPreviewTemplate(data.template)) throw new Error(`Template "${data.template}" does not support DOM preview capture`);
	const sizedData = {
		...data,
		width,
		height
	};
	if (data.template === "cards-angled") return /* @__PURE__ */ jsx(CoverPreviewContent, { data: normalizeCoverCardsAngledData(sizedData) });
	return /* @__PURE__ */ jsx(CoverPreviewContent, { data: sizedData });
}
async function captureCoverDomPreviewBlob(data, { renderWidth, renderHeight, format, pixelRatio = 1 }) {
	if (typeof document === "undefined") throw new Error("Cover capture requires a browser environment");
	const captureData = await resolveCoverRenderDataInlineAssets({
		...data,
		width: renderWidth,
		height: renderHeight
	});
	const mount = document.createElement("div");
	mount.style.position = "fixed";
	mount.style.left = "-100000px";
	mount.style.top = "0";
	mount.style.width = `${renderWidth}px`;
	mount.style.height = `${renderHeight}px`;
	mount.style.pointerEvents = "none";
	mount.style.opacity = "1";
	document.body.appendChild(mount);
	const root = createRoot(mount);
	flushSync(() => {
		root.render(renderCoverDomPreview(captureData, renderWidth, renderHeight));
	});
	const target = mount.firstElementChild instanceof HTMLElement ? mount.firstElementChild : null;
	if (!target) {
		root.unmount();
		mount.remove();
		throw new Error("Cover capture target is missing");
	}
	try {
		await document.fonts.ready;
		await preloadImages(target);
		await waitForPaint();
		return canvasToBlob(await toCanvas(target, {
			width: renderWidth,
			height: renderHeight,
			pixelRatio,
			cacheBust: false,
			skipAutoScale: true
		}), format);
	} finally {
		root.unmount();
		mount.remove();
	}
}
function shouldCaptureCoverDomPreviewClientSide(data) {
	return isCoverDomPreviewTemplate(data.template);
}
var PERSIST_DEBOUNCE_MS = 400;
function applyThemeToCoverData(data, theme) {
	return {
		...data,
		theme: resolveCoverEditorThemeId(theme)
	};
}
function withTemplateDataEntry(state, data) {
	return {
		...state,
		data,
		templateData: {
			...state.templateData,
			[data.template]: data
		}
	};
}
function createEmptyEditorState(data = createDefaultCoverData()) {
	return {
		data,
		templateData: { [data.template]: data },
		imageFields: {},
		typeFilter: "all"
	};
}
function useCoverGeneratorState(options = {}) {
	const generationIdRef = useRef(options.generationId ?? null);
	generationIdRef.current = options.generationId ?? null;
	const onDocumentPersistRef = useRef(options.onDocumentPersist);
	onDocumentPersistRef.current = options.onDocumentPersist;
	const [state, setState] = useState(createEmptyEditorState);
	const [imagesHydrated, setImagesHydrated] = useState(false);
	const imageFieldsRef = useRef(state.imageFields);
	const dataRef = useRef(state.data);
	const previousTemplateRef = useRef(state.data.template);
	const persistTimerRef = useRef(null);
	const suppressNextPersistRef = useRef(false);
	const hasUserEditsRef = useRef(false);
	useEffect(() => {
		imageFieldsRef.current = state.imageFields;
	}, [state.imageFields]);
	useEffect(() => {
		dataRef.current = state.data;
	}, [state.data]);
	const hydrateImages = async (templateId, generationId) => {
		await migrateLegacyCoverImageStorageKeys(templateId);
		return loadCoverImageFieldUrlsForTemplate(templateId, generationId);
	};
	const loadCover = (data) => {
		revokeCoverImageObjectUrls(imageFieldsRef.current);
		const nextData = applyThemeToCoverData(data, data.theme);
		suppressNextPersistRef.current = true;
		hasUserEditsRef.current = false;
		if (persistTimerRef.current != null) {
			window.clearTimeout(persistTimerRef.current);
			persistTimerRef.current = null;
		}
		setState(createEmptyEditorState(nextData));
		setImagesHydrated(false);
		previousTemplateRef.current = nextData.template;
		(async () => {
			const imageFields = await hydrateImages(nextData.template, generationIdRef.current);
			suppressNextPersistRef.current = true;
			setState(() => ({
				...createEmptyEditorState(nextData),
				imageFields
			}));
			setImagesHydrated(true);
		})();
	};
	useEffect(() => {
		if (!imagesHydrated) return;
		if (previousTemplateRef.current === state.data.template) return;
		previousTemplateRef.current = state.data.template;
		let cancelled = false;
		const templateId = state.data.template;
		hydrateImages(templateId, generationIdRef.current).then((imageFields) => {
			if (cancelled) return;
			setState((current) => {
				if (current.data.template !== templateId) return current;
				revokeCoverImageObjectUrls(current.imageFields);
				return {
					...current,
					imageFields
				};
			});
		});
		return () => {
			cancelled = true;
		};
	}, [state.data.template, imagesHydrated]);
	useEffect(() => {
		return () => {
			revokeCoverImageObjectUrls(imageFieldsRef.current);
		};
	}, []);
	useEffect(() => {
		if (!imagesHydrated) return;
		if (suppressNextPersistRef.current) {
			suppressNextPersistRef.current = false;
			return;
		}
		hasUserEditsRef.current = true;
		const timeoutId = window.setTimeout(() => {
			onDocumentPersistRef.current?.(state.data);
		}, PERSIST_DEBOUNCE_MS);
		persistTimerRef.current = timeoutId;
		return () => {
			window.clearTimeout(timeoutId);
			if (persistTimerRef.current === timeoutId) persistTimerRef.current = null;
		};
	}, [state.data, imagesHydrated]);
	const cancelPersistDebounce = useCallback(() => {
		if (persistTimerRef.current == null) return;
		window.clearTimeout(persistTimerRef.current);
		persistTimerRef.current = null;
	}, []);
	const flushPersist = useCallback(() => {
		if (!hasUserEditsRef.current) {
			cancelPersistDebounce();
			return;
		}
		cancelPersistDebounce();
		onDocumentPersistRef.current?.(dataRef.current);
	}, [cancelPersistDebounce]);
	const isDirty = useCallback(() => hasUserEditsRef.current, []);
	const setData = (next) => {
		setState((current) => {
			const resolved = typeof next === "function" ? next(current.data) : next;
			return withTemplateDataEntry(current, applyThemeToCoverData(resolved, resolved.theme));
		});
	};
	const setTheme = (theme) => {
		setState((current) => {
			const resolvedTheme = resolveCoverEditorThemeId(theme);
			return withTemplateDataEntry(current, applyThemeToCoverData(current.data, resolvedTheme));
		});
	};
	const setImageField = (key, value) => {
		(async () => {
			const templateId = dataRef.current.template;
			const generationId = generationIdRef.current;
			const previousUrl = imageFieldsRef.current[key];
			if (!value) {
				revokeCoverImageObjectUrl(previousUrl);
				await removeCoverImageField(templateId, key, generationId);
				setState((current) => {
					const nextFields = { ...current.imageFields };
					delete nextFields[key];
					return {
						...current,
						imageFields: nextFields
					};
				});
				return;
			}
			if (value.startsWith("data:")) {
				const objectUrl = await persistCoverImageDataUrl(templateId, key, value, generationId);
				revokeCoverImageObjectUrl(previousUrl);
				setState((current) => ({
					...current,
					imageFields: {
						...current.imageFields,
						[key]: objectUrl
					}
				}));
				return;
			}
			if (value.startsWith("blob:")) {
				setState((current) => ({
					...current,
					imageFields: {
						...current.imageFields,
						[key]: value
					}
				}));
				return;
			}
			revokeCoverImageObjectUrl(previousUrl);
			await removeCoverImageField(templateId, key, generationId);
			setState((current) => {
				const nextFields = { ...current.imageFields };
				delete nextFields[key];
				return {
					...current,
					imageFields: nextFields
				};
			});
		})();
	};
	const setImageFile = (key, file) => {
		(async () => {
			const templateId = dataRef.current.template;
			const generationId = generationIdRef.current;
			const previousUrl = imageFieldsRef.current[key];
			const objectUrl = await persistCoverImageUpload(templateId, key, file, generationId);
			revokeCoverImageObjectUrl(previousUrl);
			setState((current) => ({
				...current,
				imageFields: {
					...current.imageFields,
					[key]: objectUrl
				}
			}));
		})();
	};
	const setCategoryFilter = (categoryFilter) => {
		setState((current) => ({
			...current,
			typeFilter: categoryFilter
		}));
	};
	const setFormat = (format) => {
		setState((current) => withTemplateDataEntry(current, {
			...current.data,
			format
		}));
	};
	const resetCurrentTemplate = () => {
		(async () => {
			const current = dataRef.current;
			const templateId = current.template;
			const generationId = generationIdRef.current;
			const nextData = createDefaultCoverData(templateId, resolveCoverEditorThemeId(current.theme), {
				width: current.width,
				height: current.height,
				format: current.format
			});
			revokeCoverImageObjectUrls(imageFieldsRef.current);
			await clearCoverImageFieldsForTemplate(templateId, generationId);
			setState((currentState) => withTemplateDataEntry({
				...currentState,
				imageFields: {}
			}, nextData));
		})();
	};
	return {
		data: state.data,
		imageFields: state.imageFields,
		typeFilter: state.typeFilter,
		imagesHydrated,
		setData,
		setImageField,
		setImageFile,
		setCategoryFilter,
		setTypeFilter: setCategoryFilter,
		setFormat,
		setTheme,
		resetCurrentTemplate,
		loadCover,
		flushPersist,
		cancelPersistDebounce,
		isDirty
	};
}
function readLocalCoverGenerations() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(COVER_GENERATIONS_LOCAL_STORAGE_KEY);
		if (!raw) return [];
		return parseSavedCoverGenerations(raw);
	} catch {
		return [];
	}
}
function writeLocalCoverGenerations(list) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(COVER_GENERATIONS_LOCAL_STORAGE_KEY, JSON.stringify(list));
	} catch {}
}
function isPrefsCapacityError(error) {
	if (!(error instanceof AppwriteException)) return false;
	if (error.code !== 400 && error.code !== 413) return false;
	const message = error.message.toLowerCase();
	return message.includes("valid object") || message.includes("size") || message.includes("limit") || message.includes("too long") || message.includes("too large") || message.includes("storage") || message.includes("maximum");
}
function trimCoverGenerationsToPrefsLimit(existingPrefs, list) {
	let candidate = list;
	while (candidate.length > 0) {
		if (isAccountPrefsPayloadWithinLimit(mergeCoverGenerationsIntoPrefs(existingPrefs, candidate))) return candidate;
		candidate = candidate.slice(0, -1);
	}
	return candidate;
}
function useCoverGenerations(account) {
	const queryClient = useQueryClient();
	const isAuthenticated = Boolean(account);
	const [localRevision, setLocalRevision] = useState(0);
	const resolveAccount = useCallback(() => {
		return getConsoleAccountFromCache(queryClient) ?? account;
	}, [account, queryClient]);
	const readGenerationsList = useCallback(() => {
		if (isAuthenticated) return parseSavedCoverGenerations(resolveAccount()?.prefs?.[USER_PREFS_KEY_COVER_GENERATIONS]);
		return readLocalCoverGenerations();
	}, [isAuthenticated, resolveAccount]);
	const generations = useMemo(() => {
		if (isAuthenticated) return parseSavedCoverGenerations(resolveAccount()?.prefs?.[USER_PREFS_KEY_COVER_GENERATIONS]);
		return readLocalCoverGenerations();
	}, [
		isAuthenticated,
		localRevision,
		resolveAccount
	]);
	const persistList = useCallback(async (next) => {
		if (isAuthenticated) {
			const currentAccount = resolveAccount();
			if (!currentAccount) throw new Error("Account not available");
			const existingPrefs = currentAccount.prefs ?? {};
			let candidate = trimCoverGenerationsToPrefsLimit(existingPrefs, next);
			if (candidate.length === 0 && next.length > 0) throw new Error("Account preferences are full. Delete older covers or other saved prefs and try again.");
			let prefsBase = existingPrefs;
			let refreshedFromServer = false;
			for (;;) try {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: await updateAccountPrefs(mergeCoverGenerationsIntoPrefs(prefsBase, candidate)) });
				return;
			} catch (error) {
				if (!isPrefsCapacityError(error)) throw error;
				if (!refreshedFromServer) {
					refreshedFromServer = true;
					const fresh = await fetchConsoleAccount({ force: true });
					syncConsoleAccountAfterMutation(queryClient, { apiResult: fresh });
					prefsBase = fresh.prefs ?? {};
					candidate = trimCoverGenerationsToPrefsLimit(prefsBase, next);
					if (candidate.length === 0 && next.length > 0) throw new Error("Account preferences are full. Delete older covers or other saved prefs and try again.");
					continue;
				}
				if (candidate.length <= 1) throw error;
				candidate = candidate.slice(0, -1);
			}
		}
		writeLocalCoverGenerations(next);
		setLocalRevision((value) => value + 1);
	}, [
		isAuthenticated,
		queryClient,
		resolveAccount
	]);
	const saveMutation = useMutation({ mutationFn: async (entry) => {
		const next = upsertSavedCoverGeneration(readGenerationsList(), entry);
		await persistList(next);
		return next;
	} });
	const deleteMutation = useMutation({ mutationFn: async (id) => {
		const next = removeSavedCoverGeneration(readGenerationsList(), id);
		await persistList(next);
		return next;
	} });
	const renameMutation = useMutation({ mutationFn: async ({ id, name }) => {
		const generation = readGenerationsList().find((item) => item.id === id);
		if (!generation) throw new Error("Cover not found");
		const trimmed = name.trim().slice(0, 64);
		if (!trimmed) throw new Error("Name is required");
		const entry = {
			...generation,
			name: trimmed,
			updatedAt: Date.now(),
			data: applyCoverGenerationName(generation.data, trimmed)
		};
		const next = upsertSavedCoverGeneration(readGenerationsList(), entry);
		await persistList(next);
		return next;
	} });
	const migrateLegacyMutation = useMutation({ mutationFn: async () => {
		const current = readGenerationsList();
		if (current.length > 0) return current;
		const legacy = readLegacyCoverEditorGeneration();
		if (!legacy) return current;
		const next = upsertSavedCoverGeneration(current, legacy);
		await persistList(next);
		clearLegacyCoverEditorLocalStorage();
		return next;
	} });
	const saveGeneration = useCallback((entry) => saveMutation.mutateAsync(entry), [saveMutation]);
	const deleteGeneration = useCallback((id) => deleteMutation.mutateAsync(id), [deleteMutation]);
	const renameGeneration = useCallback((id, name) => renameMutation.mutateAsync({
		id,
		name
	}), [renameMutation]);
	const migrateLegacyIfNeeded = useCallback(() => migrateLegacyMutation.mutateAsync(), [migrateLegacyMutation]);
	return {
		generations,
		isAuthenticated,
		isSaving: saveMutation.isPending,
		isDeleting: deleteMutation.isPending,
		isRenaming: renameMutation.isPending,
		saveGeneration,
		deleteGeneration,
		renameGeneration,
		maxNameLength: 64,
		migrateLegacyIfNeeded
	};
}
var RESIZE_HANDLE_CLASS = cn("relative z-[45] w-[0.5px] bg-border", "before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:w-2 before:-translate-x-1/2 before:bg-border before:opacity-0 before:transition-opacity", "hover:before:opacity-100 data-[resize-handle-state=drag]:before:opacity-100", "after:w-2 after:left-1/2 after:-translate-x-1/2");
function mergeImageFieldsIntoData(data, imageFields) {
	const next = { ...data };
	for (const [key, value] of Object.entries(imageFields)) if (value) next[key] = value;
	return next;
}
function CoverView({ generationId: routeGenerationId } = {}) {
	const { setCoverExportData, setApiDocsOpen, setDocumentChrome, setEditorTitle, setLeftPanelOpen, rightPanelOpen, setRightPanelOpen } = useGeneratorLayout();
	const { account } = useAuth();
	const consoleAccount = account;
	const { layout, persistLayout } = useCoverGeneratorColumnsLayout(consoleAccount);
	const { generations, isAuthenticated, isDeleting, isRenaming, saveGeneration, deleteGeneration, renameGeneration, maxNameLength, migrateLegacyIfNeeded } = useCoverGenerations(consoleAccount);
	const loadCoverRef = useRef(() => {});
	const documentNameRef = useRef("");
	const loadSavedCoverGeneration = useCallback((generation) => {
		loadCoverRef.current(generation.data);
		documentNameRef.current = generation.name;
	}, []);
	const getCoverGenerationId = useCallback((generation) => generation.id, []);
	const resolveDraft = useCallback((id) => getCoverGenerationDraft(id), []);
	const discardDraftIfUnsaved = useCallback((generationId) => {
		if (!generationId) return;
		if (generations.some((item) => item.id === generationId)) {
			deleteCoverGenerationDraft(generationId);
			return;
		}
		deleteCoverGenerationDraft(generationId);
	}, [generations]);
	const { phase, activeGenerationId, activeGenerationIdRef, isRouteSyncing, openEditorRoute, backToStart } = useRouteGenerationEditor({
		routeGenerationId,
		startTo: "/generator",
		editorTo: "/generator/$generationId",
		generations,
		getGenerationId: getCoverGenerationId,
		loadGeneration: loadSavedCoverGeneration,
		resolveDraft,
		migrateLegacyIfNeeded,
		onEnterEditor: () => setLeftPanelOpen(false),
		onLeaveEditor: (generationId) => {
			discardDraftIfUnsaved(generationId);
		},
		notFoundMessage: "Cover not found"
	});
	const { data, imageFields, imagesHydrated, setData, setImageField, setImageFile, setFormat, setTheme, resetCurrentTemplate, loadCover, flushPersist, cancelPersistDebounce, isDirty } = useCoverGeneratorState({
		generationId: activeGenerationId,
		onDocumentPersist: useCallback((coverData) => {
			const generationId = activeGenerationIdRef.current;
			if (!generationId) return;
			const draft = getCoverGenerationDraft(generationId);
			saveGeneration({
				id: generationId,
				name: resolveCoverGenerationPersistName(coverData, documentNameRef.current || draft?.name || ""),
				updatedAt: Date.now(),
				templateId: coverData.template,
				data: coverData
			}).then(() => {
				deleteCoverGenerationDraft(generationId);
			}).catch((error) => {
				toast.error(getErrorMessage(error, "Could not save cover"));
			});
		}, [saveGeneration])
	});
	loadCoverRef.current = loadCover;
	const activeGeneration = useMemo(() => activeGenerationId ? generations.find((item) => item.id === activeGenerationId) ?? getCoverGenerationDraft(activeGenerationId) : void 0, [activeGenerationId, generations]);
	useEffect(() => {
		if (!activeGeneration) {
			documentNameRef.current = "";
			return;
		}
		documentNameRef.current = activeGeneration.name;
	}, [activeGeneration]);
	const isXlUp = useIsXlUp();
	const migratedLegacyRef = useRef(false);
	useEffect(() => {
		if (migratedLegacyRef.current) return;
		migratedLegacyRef.current = true;
		migrateLegacyIfNeeded().catch(() => {});
	}, [migrateLegacyIfNeeded]);
	const exportData = useMemo(() => mergeImageFieldsIntoData(data, imageFields), [data, imageFields]);
	const editorDocumentName = useMemo(() => resolveCoverEditorDocumentName(exportData, activeGeneration?.name), [activeGeneration?.name, exportData]);
	const apiUrl = useMemo(() => {
		if (typeof window === "undefined") return buildCoverApiUrl(exportData);
		return buildCoverApiUrl(exportData, window.location.origin);
	}, [exportData]);
	const recommendsPost = useMemo(() => {
		if (typeof window === "undefined") return false;
		return shouldPostCoverRenderRequest(exportData, window.location.origin);
	}, [exportData]);
	const handleBackToStart = useCallback(() => {
		const generationId = activeGenerationIdRef.current;
		backToStart(() => {
			flushPersist();
			if (!isDirty()) discardDraftIfUnsaved(generationId);
		});
		setLeftPanelOpen(false);
	}, [
		activeGenerationIdRef,
		backToStart,
		discardDraftIfUnsaved,
		flushPersist,
		isDirty,
		setLeftPanelOpen
	]);
	const handleBackToStartRef = useRef(handleBackToStart);
	handleBackToStartRef.current = handleBackToStart;
	useEffect(() => {
		setDocumentChrome({
			phase: phase === "editor" ? "editor" : "start",
			resource: "covers",
			showLeftPanelToggle: false,
			leftPanelLabel: "Toggle elements panel",
			onNewDocument: () => handleBackToStartRef.current(),
			onBrowseDocuments: () => handleBackToStartRef.current(),
			newDocumentLabel: "New cover",
			browseDocumentsLabel: "All covers"
		});
		return () => setDocumentChrome(null);
	}, [phase, setDocumentChrome]);
	useEffect(() => {
		if (phase !== "editor") {
			setCoverExportData(null);
			return;
		}
		setCoverExportData(exportData);
		return () => setCoverExportData(null);
	}, [
		exportData,
		phase,
		setCoverExportData
	]);
	const openEditor = useCallback((generationId, coverData) => {
		setCoverGenerationDraft({
			id: generationId,
			name: getCoverGenerationDisplayName(coverData),
			updatedAt: Date.now(),
			templateId: coverData.template,
			data: coverData
		});
		openEditorRoute(generationId);
	}, [openEditorRoute]);
	const handleSelectTemplate = useCallback((templateId) => {
		const coverData = createDefaultCoverData(templateId, DEFAULT_COVER_THEME_ID);
		openEditor(crypto.randomUUID(), coverData);
	}, [openEditor]);
	const handleOpenGeneration = useCallback((generationId) => {
		if (!generations.some((item) => item.id === generationId)) {
			toast.error("Cover not found");
			return;
		}
		openEditorRoute(generationId);
	}, [generations, openEditorRoute]);
	const handleDeleteGeneration = useCallback(async (generationId) => {
		try {
			await deleteGeneration(generationId);
			if (activeGenerationId === generationId) handleBackToStart();
			toast.success("Cover deleted");
		} catch {
			toast.error("Could not delete cover");
		}
	}, [
		activeGenerationId,
		deleteGeneration,
		handleBackToStart
	]);
	const handleRenameGeneration = useCallback(async (generationId, name) => {
		try {
			await renameGeneration(generationId, name);
			toast.success("Name updated");
		} catch {
			toast.error("Could not update name");
			throw new Error("Could not update name");
		}
	}, [renameGeneration]);
	const handleEditorTitleChange = useCallback(async (name) => {
		if (!activeGenerationId) return;
		const trimmed = name.trim().slice(0, maxNameLength);
		if (!trimmed) return;
		documentNameRef.current = trimmed;
		cancelPersistDebounce();
		setData((current) => applyCoverGenerationName(current, trimmed));
		const draft = getCoverGenerationDraft(activeGenerationId);
		if (draft) setCoverGenerationDraft({
			...draft,
			name: trimmed,
			updatedAt: Date.now()
		});
		if (generations.some((item) => item.id === activeGenerationId)) await handleRenameGeneration(activeGenerationId, trimmed);
	}, [
		activeGenerationId,
		cancelPersistDebounce,
		generations,
		handleRenameGeneration,
		maxNameLength,
		setData
	]);
	const handleEditorTitleChangeRef = useRef(handleEditorTitleChange);
	handleEditorTitleChangeRef.current = handleEditorTitleChange;
	useEffect(() => {
		if (phase !== "editor" || !activeGenerationId) {
			setEditorTitle(null);
			return;
		}
		setEditorTitle({
			name: editorDocumentName,
			maxLength: maxNameLength,
			isSaving: isRenaming,
			onChange: (name) => handleEditorTitleChangeRef.current(name)
		});
		return () => setEditorTitle(null);
	}, [
		activeGenerationId,
		editorDocumentName,
		isRenaming,
		maxNameLength,
		phase,
		setEditorTitle
	]);
	const handleCopyApiUrl = async () => {
		if (recommendsPost) {
			setApiDocsOpen(true);
			toast.message("Use POST for this cover", { description: "Open the API drawer for JSON and cURL examples." });
			return;
		}
		try {
			await navigator.clipboard.writeText(apiUrl);
			toast.success("API URL copied");
		} catch {
			toast.error("Could not copy API URL");
		}
	};
	const handleOpenImage = async () => {
		try {
			const blob = await fetchCoverImage(exportData);
			const objectUrl = URL.createObjectURL(blob);
			window.open(objectUrl, "_blank", "noopener,noreferrer");
			window.setTimeout(() => URL.revokeObjectURL(objectUrl), 6e4);
		} catch {
			toast.error("Could not open cover image");
		}
	};
	const handleDownload = async (format, scale) => {
		setFormat(format);
		const downloadData = buildCoverDownloadData({
			...exportData,
			format
		}, scale);
		if (!downloadData) {
			toast.error("This size exceeds the maximum export dimensions");
			return;
		}
		try {
			downloadCoverImageBlob(shouldCaptureCoverDomPreviewClientSide(downloadData) ? await captureCoverDomPreviewBlob({
				...exportData,
				format
			}, {
				renderWidth: exportData.width,
				renderHeight: exportData.height,
				format,
				pixelRatio: scale
			}) : await fetchCoverImage(downloadData), downloadData, scale);
		} catch {
			toast.error("Could not download cover");
		}
	};
	if (phase === "start") return /* @__PURE__ */ jsx(CoverStartView, {
		generations,
		isAuthenticated,
		isDeleting,
		isRenaming,
		maxNameLength,
		onSelectTemplate: handleSelectTemplate,
		onOpenGeneration: handleOpenGeneration,
		onRenameGeneration: handleRenameGeneration,
		onDeleteGeneration: (generationId) => {
			handleDeleteGeneration(generationId);
		}
	});
	if (phase === "editor" && (isRouteSyncing || activeGenerationId !== routeGenerationId)) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center text-[13px] text-muted-foreground",
		children: "Loading cover…"
	});
	if (!imagesHydrated) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center text-[13px] text-muted-foreground",
		children: "Loading cover…"
	});
	const propertiesPanel = /* @__PURE__ */ jsx(CoverPropertiesPanel, {
		data,
		imageFields,
		apiUrl,
		onChange: setData,
		onThemeChange: setTheme,
		onImageFieldChange: setImageField,
		onImageFileUpload: setImageFile,
		onResetTemplate: resetCurrentTemplate
	});
	const canvas = /* @__PURE__ */ jsx(CoverCanvas, {
		data: exportData,
		recommendsPost,
		onCanvasSizeChange: (width, height) => setData({
			...data,
			width,
			height
		}),
		onCopyApiUrl: handleCopyApiUrl,
		onOpenImage: handleOpenImage,
		onDownload: handleDownload
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-hidden",
			children: !isXlUp ? /* @__PURE__ */ jsxs("div", {
				className: "flex h-full min-h-0 flex-col overflow-hidden",
				children: [canvas, rightPanelOpen ? /* @__PURE__ */ jsx("div", {
					className: "max-h-[42dvh] min-h-0 shrink-0 overflow-hidden border-t border-border",
					children: propertiesPanel
				}) : null]
			}) : /* @__PURE__ */ jsx(GeneratorColumnsResizableLayout, {
				layout,
				persistLayout,
				leftOpen: false,
				rightOpen: rightPanelOpen,
				onLeftOpenChange: setLeftPanelOpen,
				onRightOpenChange: setRightPanelOpen,
				handleClassName: RESIZE_HANDLE_CLASS,
				className: "h-full min-h-0",
				templates: /* @__PURE__ */ jsx("div", { className: "hidden" }),
				canvas: /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
					children: canvas
				}),
				properties: /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",
					children: propertiesPanel
				})
			})
		})
	});
}
export { CoverView as t };
