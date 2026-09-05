import { useSyncExternalStore } from "react";
function useMediaMinWidth(minWidthPx) {
	const query = `(min-width: ${minWidthPx}px)`;
	return useSyncExternalStore((onStoreChange) => {
		if (typeof window === "undefined") return () => {};
		const mq = window.matchMedia(query);
		mq.addEventListener("change", onStoreChange);
		return () => mq.removeEventListener("change", onStoreChange);
	}, () => typeof window !== "undefined" ? window.matchMedia(query).matches : false, () => false);
}
export { useMediaMinWidth as t };
