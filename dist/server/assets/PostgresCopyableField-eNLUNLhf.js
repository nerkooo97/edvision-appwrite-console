import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
function PostgresCopyableField({ label, value, mono = true, masked = false, isLoading = false, labelAction }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const [revealed, setRevealed] = useState(false);
	if (isLoading) return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Skeleton, { className: "mb-1.5 h-3 w-16" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" })] });
	if (!value) return null;
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			toast.success(`${label} ${t("copied")}`);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error(t("Failed to copy"));
		}
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-1.5 flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ jsx(Label, {
			className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), labelAction]
	}), /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Input, {
			value,
			readOnly: true,
			type: masked && !revealed ? "password" : "text",
			className: cn("h-9 border-border bg-muted/30 text-[13px] shadow-none focus-visible:ring-inset", mono && "font-mono", masked ? "pe-16" : "pe-10")
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute end-1 top-1/2 flex -translate-y-1/2 items-center gap-0.5",
			children: [masked ? /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setRevealed((current) => !current),
				className: "flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-accent",
				"aria-label": revealed ? t("Hide password") : t("Show password"),
				children: revealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-muted-foreground" })
			}) : null, /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => void handleCopy(),
				className: "flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-accent",
				"aria-label": `Copy ${label}`,
				children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 text-muted-foreground" })
			})]
		})]
	})] });
}
export { PostgresCopyableField as t };
