import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as REALTIME_OUTGOING_ICON_CLASS, t as REALTIME_INCOMING_ICON_CLASS } from "./message-direction-styles-Dxalxa2m.js";
import { jsx } from "react/jsx-runtime";
import { ArrowDownLeft, ArrowUpRight, Info } from "lucide-react";
function MessageDirectionIcon({ direction, type = "unknown", className = "h-3.5 w-3.5 shrink-0" }) {
	const t = useT();
	if (type === "info") return /* @__PURE__ */ jsx(Info, {
		className: cn(className, "text-muted-foreground"),
		"aria-label": t("Info message")
	});
	if (direction === "in") return /* @__PURE__ */ jsx(ArrowDownLeft, {
		className: cn(className, REALTIME_INCOMING_ICON_CLASS),
		"aria-label": t("Incoming message")
	});
	return /* @__PURE__ */ jsx(ArrowUpRight, {
		className: cn(className, REALTIME_OUTGOING_ICON_CLASS),
		"aria-label": t("Outgoing message")
	});
}
export { MessageDirectionIcon as t };
