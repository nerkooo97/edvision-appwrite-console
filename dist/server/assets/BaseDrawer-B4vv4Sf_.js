import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as handleModalOpenAutoFocus } from "./modal-auto-focus-BO41bKmA.js";
import { a as SheetHeader, i as SheetDescription, n as SheetClose, o as SheetTitle, r as SheetContent, t as Sheet } from "./sheet-CbM5lIV1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { X } from "lucide-react";
function BaseDrawer({ open, onOpenChange, title, description, children, headerActions, headerLeading, contentClassName, maxWidth = "sm:max-w-lg", side = "right", disableAutoFocus = false }) {
	const t = useT();
	const contentRef = React$1.useRef(null);
	const blurActiveElement = React$1.useCallback(() => {
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}, []);
	const handleSheetOpenChange = React$1.useCallback((newOpen) => {
		if (!newOpen) blurActiveElement();
		onOpenChange(newOpen);
	}, [blurActiveElement, onOpenChange]);
	React$1.useEffect(() => {
		if (disableAutoFocus && open) {
			const rafId = requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					const sheetContent = document.querySelector("[data-slot=\"sheet-content\"]");
					if (sheetContent) {
						sheetContent.removeAttribute("tabindex");
						sheetContent.blur();
					}
					blurActiveElement();
				});
			});
			return () => cancelAnimationFrame(rafId);
		}
	}, [
		blurActiveElement,
		disableAutoFocus,
		open
	]);
	return /* @__PURE__ */ jsx(Sheet, {
		open,
		onOpenChange: handleSheetOpenChange,
		children: /* @__PURE__ */ jsxs(SheetContent, {
			className: cn("flex h-[100dvh] max-h-[100dvh] w-full flex-col gap-0 overflow-hidden p-0", maxWidth, contentClassName),
			side,
			showCloseButton: false,
			tabIndex: disableAutoFocus ? -1 : void 0,
			onOpenAutoFocus: disableAutoFocus ? (e) => {
				e.preventDefault();
			} : (e) => {
				handleModalOpenAutoFocus(e, contentRef.current);
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				blurActiveElement();
			},
			children: [/* @__PURE__ */ jsx(SheetHeader, {
				className: "!p-0 !gap-0 shrink-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4 w-full px-6 pt-4 pb-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-1 items-center gap-2",
							children: [headerLeading, title && /* @__PURE__ */ jsx(SheetTitle, {
								className: "text-[15px] m-0 leading-none font-semibold",
								children: t(title)
							})]
						}),
						/* @__PURE__ */ jsx(SheetDescription, {
							className: "sr-only",
							children: description ? t(description) : title ? t(title) : t("Drawer")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 shrink-0",
							children: [
								headerActions,
								headerActions && /* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-border mx-1" }),
								/* @__PURE__ */ jsx(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ jsx(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-8 w-8 p-0 cursor-pointer",
										"aria-label": t("Close"),
										children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
									})
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ jsx("div", {
				ref: contentRef,
				className: "flex min-h-0 flex-1 flex-col overflow-hidden pt-0",
				children
			})]
		})
	});
}
export { BaseDrawer as t };
