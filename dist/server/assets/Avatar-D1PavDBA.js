import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
import { Ghost } from "lucide-react";
var sizeClasses = {
	xs: "h-5 w-5 text-[9px]",
	sm: "h-6 w-6 text-[10px]",
	md: "h-8 w-8 text-[11px]",
	lg: "h-10 w-10 text-[13px]"
};
function getInitials(name) {
	if (!name) return "?";
	const cleaned = name.replace(/[^\p{L}\s]/gu, "").trim();
	if (!cleaned) return "?";
	const parts = cleaned.split(/\s+/).filter((part) => part.length > 0);
	if (parts.length === 0) return "?";
	if (parts.length === 1) {
		const firstLetter$1 = parts[0].match(/\p{L}/u)?.[0];
		return firstLetter$1 ? firstLetter$1.toUpperCase() : "?";
	}
	const firstLetter = parts[0].match(/\p{L}/u)?.[0];
	const lastLetter = parts[parts.length - 1].match(/\p{L}/u)?.[0];
	if (!firstLetter || !lastLetter) return "?";
	return (firstLetter + lastLetter).toUpperCase();
}
function InitialsAvatar({ name, size = "md", className }) {
	const trimmedName = name?.trim() || "";
	const initials = getInitials(trimmedName);
	const isAnonymous = trimmedName.length === 0;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 items-center justify-center rounded-full bg-zinc-200 font-medium text-zinc-600 dark:bg-accent dark:text-muted-foreground", sizeClasses[size], className),
		children: isAnonymous ? /* @__PURE__ */ jsx(Ghost, { className: "h-4 w-4" }) : initials
	});
}
export { InitialsAvatar as t };
