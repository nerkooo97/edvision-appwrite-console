import { r as resetConsoleShellDocumentScroll } from "./utils-DoqqkI3X.js";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
function scrollMarketingMainToTop(behavior = "auto") {
	if (typeof document === "undefined") return;
	const main = document.getElementById("main-content");
	if (main) {
		main.scrollTo({
			top: 0,
			behavior
		});
		return;
	}
	resetConsoleShellDocumentScroll();
}
function MarketingScrollToTop() {
	const { pathname } = useLocation();
	const previousPathnameRef = useRef(pathname);
	useEffect(() => {
		if (previousPathnameRef.current === pathname) return;
		previousPathnameRef.current = pathname;
		scrollMarketingMainToTop();
	}, [pathname]);
	return null;
}
export { scrollMarketingMainToTop as n, MarketingScrollToTop as t };
