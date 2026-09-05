import { n as World, t as useGlobeThemeConfig } from "./use-globe-theme-config-BGQROv5i.js";
import { i as getNetworkSegmentColors, r as buildCombinedNetworkGlobeData } from "./build-network-globe-data-D-J47GhP.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
function NetworkGlobe({ active = true, ready = false, onReady, className }) {
	const { config: globeConfig, themeKey } = useGlobeThemeConfig();
	const segmentColors = useMemo(() => getNetworkSegmentColors(), [themeKey]);
	const globePresence = useMemo(() => buildCombinedNetworkGlobeData(segmentColors), [segmentColors]);
	if (!globeConfig) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("h-full w-full", ready ? "opacity-100" : "opacity-0", className),
		"aria-hidden": !ready,
		children: /* @__PURE__ */ jsx(World, {
			globeConfig,
			data: globePresence.arcs,
			markers: globePresence.markers,
			active,
			onReady
		}, themeKey)
	});
}
export { NetworkGlobe };
