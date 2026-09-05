import { useEffect } from "react";
var HIGHLIGHT_CLASSES = [
	"ring-2",
	"ring-foreground/30",
	"ring-offset-2",
	"ring-offset-background",
	"transition-all",
	"duration-700"
];
var HIGHLIGHT_DURATION_MS = 1600;
var HASH_PREFIX = "#card-";
function findCard(id) {
	return document.querySelector(`[data-card-id="${CSS.escape(id)}"]`);
}
function highlight(el) {
	el.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
	el.classList.add(...HIGHLIGHT_CLASSES);
	window.setTimeout(() => {
		el.classList.remove(...HIGHLIGHT_CLASSES);
	}, HIGHLIGHT_DURATION_MS);
}
function useScrollToCard() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const apply = () => {
			const hash = window.location.hash;
			if (!hash.startsWith(HASH_PREFIX)) return;
			const id = hash.slice(6);
			if (!id) return;
			let attempts = 0;
			const tick = () => {
				const el = findCard(id);
				if (el) {
					highlight(el);
					return;
				}
				if (attempts++ < 10) window.setTimeout(tick, 80);
			};
			tick();
		};
		apply();
		window.addEventListener("hashchange", apply);
		return () => window.removeEventListener("hashchange", apply);
	}, []);
}
export { useScrollToCard as t };
