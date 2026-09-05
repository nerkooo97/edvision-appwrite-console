import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Copy } from "lucide-react";
var sizeStyles = {
	xs: {
		text: "text-[10px]",
		icon: "h-2.5 w-2.5",
		padding: "ps-1.5 pe-2 py-0.5"
	},
	sm: {
		text: "text-[11px]",
		icon: "h-3 w-3",
		padding: "ps-1.5 pe-2 py-0.5"
	},
	md: {
		text: "text-[12px]",
		icon: "h-3 w-3",
		padding: "ps-2.5 pe-3 py-1.5"
	}
};
function CopyableId({ id, displayText, className = "", variant = "badge", size = "sm", maxWidth = 140, constrainToContainer = false, showCopyOnHover, copyToastLabel, copyLabel }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const shown = copyLabel ? t(copyLabel) : displayText ?? id;
	const copyOnHover = showCopyOnHover ?? variant === "inline";
	const nativeTitle = copyLabel ? id : displayText && displayText !== id ? id : void 0;
	const handleCopy = (e) => {
		e.stopPropagation();
		e.preventDefault();
		navigator.clipboard.writeText(id);
		if (copyToastLabel) toast.success(`${t(copyToastLabel)} ${t("copied")}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const styles = sizeStyles[size];
	const shouldTruncate = !copyLabel && !/\s/.test(shown);
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: handleCopy,
		title: nativeTitle,
		className: cn("group/copyable inline-flex max-w-full items-center cursor-pointer transition-colors", copyLabel ? "font-medium" : "font-mono", variant === "badge" ? "gap-1.5 rounded bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground" : "gap-1.5 rounded-md border border-transparent bg-transparent text-foreground transition-[color,background-color,border-color] hover:border-border hover:bg-muted/40 hover:text-foreground", styles.text, styles.padding, constrainToContainer && "min-w-0", className),
		children: [/* @__PURE__ */ jsx("span", {
			className: cn("min-w-0", shouldTruncate ? "truncate" : "break-words whitespace-normal"),
			style: shouldTruncate && !constrainToContainer ? { maxWidth: `${maxWidth}px` } : void 0,
			children: shown
		}), copied ? /* @__PURE__ */ jsx(CheckCircle2, { className: cn("shrink-0 text-emerald-500", styles.icon) }) : /* @__PURE__ */ jsx(Copy, { className: cn("shrink-0", styles.icon, copyOnHover && "opacity-0 transition-opacity group-hover/copyable:opacity-100") })]
	});
}
export { CopyableId as t };
