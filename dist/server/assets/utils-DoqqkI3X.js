import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ELLIPSIS = "...";
function truncateMiddle(str, maxLength) {
	if (typeof str !== "string" || str.length <= maxLength) return str;
	const take = maxLength - 3;
	const half = Math.floor(take / 2);
	return `${str.slice(0, half)}${ELLIPSIS}${str.slice(-(take - half))}`;
}
function resetConsoleShellDocumentScroll() {
	if (typeof window === "undefined" || typeof document === "undefined") return;
	window.scrollTo(0, 0);
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	const root = document.querySelector(".root-container");
	if (root instanceof HTMLElement) root.scrollTop = 0;
}
function findScrollParent(el) {
	if (!el) return null;
	let parent = el.parentElement;
	while (parent) {
		const { overflowY } = getComputedStyle(parent);
		if (/(auto|scroll|overlay)/.test(overflowY) && parent.scrollHeight > parent.clientHeight) return parent;
		parent = parent.parentElement;
	}
	return null;
}
function scrollConsoleMainToTop() {
	setTimeout(() => {
		if (typeof document === "undefined") return;
		const main = document.getElementById("main-content");
		if (main) {
			main.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		if (document.documentElement.scrollTop > 0) document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		if (typeof window !== "undefined" && window.scrollY > 0) window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, 150);
}
export { truncateMiddle as a, scrollConsoleMainToTop as i, findScrollParent as n, resetConsoleShellDocumentScroll as r, cn as t };
