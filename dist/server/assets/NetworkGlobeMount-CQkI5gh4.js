import { n as NETWORK_SEGMENT_LABELS, t as NETWORK_SEGMENT_CSS_VARS } from "./build-network-globe-data-D-J47GhP.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
function useIntersectionVisible(ref, { rootMargin = "200px 0px", threshold = 0, once = false } = {}) {
	const [isVisible, setIsVisible] = useState(false);
	const [hasBeenVisible, setHasBeenVisible] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			const intersecting = entry.isIntersecting;
			setIsVisible(intersecting);
			if (intersecting) setHasBeenVisible(true);
			else if (!once) setIsVisible(false);
		}, {
			rootMargin,
			threshold
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [
		ref,
		rootMargin,
		threshold,
		once
	]);
	return {
		isVisible,
		hasBeenVisible
	};
}
var LazyNetworkGlobe = lazy(() => import("./NetworkGlobe.client-DWyg_thm.js").then((module) => ({ default: module.NetworkGlobe })));
var GLOBE_FRAME_CLASSNAME = "relative mx-auto w-full max-w-[min(100%,50rem)] overflow-hidden aspect-[100/48] sm:max-w-[min(100%,60rem)] lg:max-w-[min(100%,68rem)] xl:max-w-[min(100%,76rem)]";
var GLOBE_BACKDROP_CLASSNAME = "h-full w-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--foreground)_5%,transparent)_0%,transparent_68%)]";
function NetworkGlobeLegend({ className }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-lg border border-border/80 bg-background/90 px-2.5 py-1.5 shadow-sm", className),
		children: [
			"pop-locations",
			"edges",
			"regions"
		].map((segment) => /* @__PURE__ */ jsxs("span", {
			className: "flex items-center gap-1.5 text-[12px]",
			children: [/* @__PURE__ */ jsx("span", {
				className: "size-2 shrink-0 rounded-full",
				style: { backgroundColor: NETWORK_SEGMENT_CSS_VARS[segment] },
				"aria-hidden": true
			}), /* @__PURE__ */ jsx("span", {
				className: "text-foreground",
				children: t(NETWORK_SEGMENT_LABELS[segment])
			})]
		}, segment))
	});
}
function NetworkGlobeMount({ className }) {
	const containerRef = useRef(null);
	const [mounted, setMounted] = useState(false);
	const [shouldMountGlobe, setShouldMountGlobe] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const { isVisible } = useIntersectionVisible(containerRef, { rootMargin: "480px 0px" });
	useEffect(() => {
		setMounted(true);
	}, []);
	useEffect(() => {
		if (!mounted) return;
		const preloadGlobe = () => {
			import("./NetworkGlobe.client-DWyg_thm.js");
			setShouldMountGlobe(true);
		};
		if ("requestIdleCallback" in window) {
			const idleId = window.requestIdleCallback(preloadGlobe);
			return () => window.cancelIdleCallback(idleId);
		}
		const timeoutId = window.setTimeout(preloadGlobe, 300);
		return () => window.clearTimeout(timeoutId);
	}, [mounted]);
	const globeActive = isVisible || !isReady;
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className,
		children: /* @__PURE__ */ jsxs("div", {
			className: GLOBE_FRAME_CLASSNAME,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-0 top-0 aspect-square w-full",
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx("div", { className: GLOBE_BACKDROP_CLASSNAME })
				}),
				mounted && shouldMountGlobe ? /* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-0 top-0 aspect-square w-full",
					children: /* @__PURE__ */ jsx(Suspense, {
						fallback: null,
						children: /* @__PURE__ */ jsx(LazyNetworkGlobe, {
							active: globeActive,
							ready: isReady,
							onReady: () => setIsReady(true),
							className: "h-full w-full"
						})
					})
				}) : null,
				/* @__PURE__ */ jsx(NetworkGlobeLegend, { className: "absolute bottom-4 start-3 z-30 sm:bottom-5 sm:start-4" })
			]
		})
	});
}
export { useIntersectionVisible as n, NetworkGlobeMount as t };
