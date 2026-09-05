import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { t as normalizeHostnameForFavicon } from "./hostname-favicon-C9NpbUP-.js";
import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Globe } from "lucide-react";
var frameSizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5"
};
var globeSizeClasses = {
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5"
};
function HostnameFaviconIcon({ hostname, size = "sm", className }) {
	const [failed, setFailed] = useState(false);
	const normalizedHostname = normalizeHostnameForFavicon(hostname);
	const frameClass = cn("flex shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background", frameSizeClasses[size], className);
	if (!normalizedHostname || failed) return /* @__PURE__ */ jsx("div", {
		className: cn(frameClass, "border-transparent bg-transparent"),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Globe, {
			className: cn(globeSizeClasses[size], "shrink-0 text-muted-foreground"),
			"aria-hidden": true
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: frameClass,
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("img", {
			src: sdk.forConsole.avatars.getFavicon({ url: `https://${normalizedHostname}` }),
			alt: "",
			className: "h-full w-full object-contain p-0.5",
			onError: () => setFailed(true)
		})
	});
}
export { HostnameFaviconIcon as t };
