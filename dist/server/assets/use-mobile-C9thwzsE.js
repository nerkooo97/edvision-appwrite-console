import * as React$1 from "react";
var MOBILE_BREAKPOINT = 768;
var XL_BREAKPOINT = 1280;
function useIsMobile() {
	const [isMobile, setIsMobile] = React$1.useState(void 0);
	React$1.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
function useIsXlUp() {
	const [isXlUp, setIsXlUp] = React$1.useState(() => typeof window !== "undefined" ? window.matchMedia(`(min-width: ${XL_BREAKPOINT}px)`).matches : false);
	React$1.useEffect(() => {
		const mql = window.matchMedia(`(min-width: ${XL_BREAKPOINT}px)`);
		const onChange = () => {
			setIsXlUp(mql.matches);
		};
		mql.addEventListener("change", onChange);
		setIsXlUp(mql.matches);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return isXlUp;
}
export { useIsXlUp as n, useIsMobile as t };
