import { n as useT } from "./translate-DZcqveGn.js";
import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useRef, useState } from "react";
import { toast } from "sonner";
var MIN_ANIMATION_DURATION = 1e3;
var RefreshContext = createContext(null);
function RefreshProvider({ children }) {
	const t = useT();
	const [isRefreshing, setIsRefreshing] = useState(false);
	const refreshHandlerRef = useRef(null);
	const refreshLabelRef = useRef("data");
	const refreshStartTimeRef = useRef(null);
	const [hasRefreshHandler, setHasRefreshHandler] = useState(false);
	const registerRefreshHandler = useCallback((handler, label = "data") => {
		refreshHandlerRef.current = handler;
		refreshLabelRef.current = label;
		setHasRefreshHandler(true);
	}, []);
	const unregisterRefreshHandler = useCallback(() => {
		refreshHandlerRef.current = null;
		refreshLabelRef.current = "data";
		setHasRefreshHandler(false);
	}, []);
	const triggerRefresh = useCallback(async () => {
		if (!refreshHandlerRef.current) return;
		refreshStartTimeRef.current = Date.now();
		setIsRefreshing(true);
		try {
			await refreshHandlerRef.current();
			const elapsed = Date.now() - (refreshStartTimeRef.current || 0);
			const remaining = Math.max(0, MIN_ANIMATION_DURATION - elapsed);
			await new Promise((resolve) => setTimeout(resolve, remaining));
			toast.success(t(`${refreshLabelRef.current} refreshed successfully`));
		} catch {
			toast.error(t(`Failed to refresh ${refreshLabelRef.current.toLowerCase()}`));
		} finally {
			setIsRefreshing(false);
			refreshStartTimeRef.current = null;
		}
	}, [t]);
	return /* @__PURE__ */ jsx(RefreshContext.Provider, {
		value: {
			isRefreshing,
			registerRefreshHandler,
			unregisterRefreshHandler,
			triggerRefresh,
			hasRefreshHandler
		},
		children
	});
}
function useRefresh() {
	const context = useContext(RefreshContext);
	if (!context) throw new Error("useRefresh must be used within a RefreshProvider");
	return context;
}
function useRefreshOptional() {
	return useContext(RefreshContext);
}
export { useRefresh as n, useRefreshOptional as r, RefreshProvider as t };
