import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-CFWmsJbI.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function itemKey(item) {
	return `${item.src}\0${item.alt}`;
}
var ImagePreviewGalleryContext = createContext(null);
function useImagePreviewGallery() {
	return useContext(ImagePreviewGalleryContext);
}
var GALLERY_FRAME_WIDTH = "min(92vw, 1400px, calc(85dvh * 16 / 9))";
var GALLERY_FRAME_MAX_HEIGHT = "min(85dvh, calc(min(92vw, 1400px) * 9 / 16))";
function ImagePreviewGalleryDialog({ items, activeIndex, onActiveIndexChange, overlayClassName }) {
	const t = useT();
	const activeItem = activeIndex !== null ? items[activeIndex] : null;
	const hasMultiple = items.length > 1;
	useEffect(() => {
		if (activeIndex === null) return;
		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft" && activeIndex > 0) onActiveIndexChange(activeIndex - 1);
			if (event.key === "ArrowRight" && activeIndex < items.length - 1) onActiveIndexChange(activeIndex + 1);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		activeIndex,
		items.length,
		onActiveIndexChange
	]);
	return /* @__PURE__ */ jsx(Dialog, {
		open: activeIndex !== null,
		onOpenChange: (open) => {
			if (!open) onActiveIndexChange(null);
		},
		children: /* @__PURE__ */ jsx(DialogContent, {
			showCloseButton: true,
			overlayClassName: cn("z-[120] bg-background/98 backdrop-blur-sm", overlayClassName),
			className: cn("z-[120] w-auto max-w-none gap-0 overflow-visible border-0 bg-transparent p-0 shadow-none", "!max-w-none sm:!max-w-none", "[&_[data-slot=dialog-close]]:top-2 [&_[data-slot=dialog-close]]:end-2 sm:[&_[data-slot=dialog-close]]:-top-3 sm:[&_[data-slot=dialog-close]]:-end-3", "[&_[data-slot=dialog-close]]:z-20 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:size-9 [&_[data-slot=dialog-close]]:shrink-0", "[&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center", "[&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-border/80", "[&_[data-slot=dialog-close]]:bg-background [&_[data-slot=dialog-close]]:opacity-100", "[&_[data-slot=dialog-close]]:shadow-md [&_[data-slot=dialog-close]]:backdrop-blur-sm"),
			children: activeItem ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DialogTitle, {
				className: "sr-only",
				children: activeItem.alt.trim() ? activeItem.alt : t("Expanded image")
			}), /* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden rounded-xl border border-border/80 bg-card/95 shadow-2xl ring-1 ring-foreground/[0.06]",
				style: { width: GALLERY_FRAME_WIDTH },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-video w-full bg-muted/20",
					style: { maxHeight: GALLERY_FRAME_MAX_HEIGHT },
					children: [
						hasMultiple && activeIndex !== null && activeIndex > 0 ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "secondary",
							size: "icon",
							className: "absolute start-3 top-1/2 z-[1] size-9 -translate-y-1/2 rounded-full border border-border/80 bg-background/90 shadow-md backdrop-blur-sm",
							onClick: () => onActiveIndexChange(activeIndex - 1),
							"aria-label": t("Previous image"),
							children: /* @__PURE__ */ jsx(ChevronLeft, {
								className: "size-4",
								"aria-hidden": true
							})
						}) : null,
						/* @__PURE__ */ jsx("img", {
							src: activeItem.src,
							alt: activeItem.alt,
							className: "size-full object-contain"
						}),
						hasMultiple && activeIndex !== null && activeIndex < items.length - 1 ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "secondary",
							size: "icon",
							className: "absolute end-3 top-1/2 z-[1] size-9 -translate-y-1/2 rounded-full border border-border/80 bg-background/90 shadow-md backdrop-blur-sm",
							onClick: () => onActiveIndexChange(activeIndex + 1),
							"aria-label": t("Next image"),
							children: /* @__PURE__ */ jsx(ChevronRight, {
								className: "size-4",
								"aria-hidden": true
							})
						}) : null
					]
				}), activeItem.alt.trim() || hasMultiple ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4 border-t border-border px-4 py-3",
					children: [activeItem.alt.trim() ? /* @__PURE__ */ jsx("p", {
						className: "min-w-0 flex-1 text-[13px] leading-relaxed text-muted-foreground",
						children: activeItem.alt
					}) : /* @__PURE__ */ jsx("span", { className: "flex-1" }), hasMultiple && activeIndex !== null ? /* @__PURE__ */ jsxs("p", {
						className: "shrink-0 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
						children: [
							activeIndex + 1,
							" / ",
							items.length
						]
					}) : null]
				}) : null]
			})] }) : null
		})
	});
}
function ImagePreviewGalleryProvider({ children }) {
	const [items, setItems] = useState([]);
	const [activeIndex, setActiveIndex] = useState(null);
	const registerItem = useCallback((item) => {
		const key = itemKey(item);
		setItems((current) => {
			if (current.some((entry) => itemKey(entry) === key)) return current;
			return [...current, item];
		});
		return () => {
			setItems((current) => {
				const removedIndex = current.findIndex((entry) => itemKey(entry) === key);
				const next = current.filter((entry) => itemKey(entry) !== key);
				if (removedIndex >= 0) setActiveIndex((currentIndex) => {
					if (currentIndex === null) return null;
					if (currentIndex === removedIndex) return null;
					if (currentIndex > removedIndex) return currentIndex - 1;
					return currentIndex;
				});
				return next;
			});
		};
	}, []);
	const openItem = useCallback((item) => {
		const key = itemKey(item);
		setItems((current) => {
			const index = current.findIndex((entry) => itemKey(entry) === key);
			if (index >= 0) setActiveIndex(index);
			return current;
		});
	}, []);
	const contextValue = useMemo(() => ({
		registerItem,
		openItem
	}), [registerItem, openItem]);
	return /* @__PURE__ */ jsxs(ImagePreviewGalleryContext.Provider, {
		value: contextValue,
		children: [children, /* @__PURE__ */ jsx(ImagePreviewGalleryDialog, {
			items,
			activeIndex,
			onActiveIndexChange: setActiveIndex
		})]
	});
}
export { ImagePreviewGalleryProvider as n, useImagePreviewGallery as r, ImagePreviewGalleryDialog as t };
