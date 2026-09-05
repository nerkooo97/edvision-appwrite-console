import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";
function useRefreshSpin(isActive) {
	const [isSpinning, setIsSpinning] = useState(false);
	const isActiveRef = useRef(isActive);
	isActiveRef.current = isActive;
	useEffect(() => {
		if (isActive) setIsSpinning(true);
	}, [isActive]);
	const startSpin = useCallback(() => {
		setIsSpinning(true);
	}, []);
	return {
		isSpinning,
		onAnimationIteration: useCallback(() => {
			if (!isActiveRef.current) setIsSpinning(false);
		}, []),
		startSpin
	};
}
function RefreshButton({ onClick, isRefreshing = false, disabled = false, tooltip, className, iconClassName, variant = "outline", type = "button" }) {
	const t = useT();
	const label = tooltip ?? t("Refresh");
	const { isSpinning, onAnimationIteration, startSpin } = useRefreshSpin(isRefreshing);
	const handleClick = () => {
		startSpin();
		onClick?.();
	};
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				type,
				variant,
				size: "sm",
				onClick: handleClick,
				disabled: disabled || isRefreshing,
				"aria-label": label,
				className: cn("h-9 w-9 shrink-0 p-0 border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground disabled:opacity-50", className),
				children: /* @__PURE__ */ jsx(RefreshCw, {
					className: cn("h-4 w-4", isSpinning && "animate-spin", iconClassName),
					onAnimationIteration
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: label })
		})] })
	});
}
export { RefreshButton as t };
