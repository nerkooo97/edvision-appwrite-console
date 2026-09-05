import { flushSync } from "react-dom";
function openDialogAfterOverlayCloses(open) {
	if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) document.activeElement.blur();
	window.setTimeout(open, 0);
}
function closeDialogBeforeOverlayUnmount(close) {
	flushSync(close);
}
export { openDialogAfterOverlayCloses as n, closeDialogBeforeOverlayUnmount as t };
