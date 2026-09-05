import { useEffect, useState, useSyncExternalStore } from "react";
var CONNECTIVITY_PROBE_URL = "/logo-theme.svg";
var PROBE_TIMEOUT_MS = 5e3;
var PROBE_INTERVAL_MS = 1e4;
function subscribeNavigatorOnline(onStoreChange) {
	if (typeof window === "undefined") return () => {};
	const handleChange = () => onStoreChange();
	window.addEventListener("online", handleChange);
	window.addEventListener("offline", handleChange);
	return () => {
		window.removeEventListener("online", handleChange);
		window.removeEventListener("offline", handleChange);
	};
}
function getNavigatorOnlineSnapshot() {
	return typeof navigator === "undefined" ? true : navigator.onLine;
}
function getNavigatorOnlineServerSnapshot() {
	return true;
}
function useNavigatorOnline() {
	return useSyncExternalStore(subscribeNavigatorOnline, getNavigatorOnlineSnapshot, getNavigatorOnlineServerSnapshot);
}
async function probeLocalReachable() {
	if (typeof window === "undefined") return true;
	try {
		return (await fetch(CONNECTIVITY_PROBE_URL, {
			method: "HEAD",
			cache: "no-store",
			signal: AbortSignal.timeout(PROBE_TIMEOUT_MS)
		})).ok;
	} catch {
		return false;
	}
}
function useConfirmedOffline() {
	const navigatorOnline = useNavigatorOnline();
	const [reachable, setReachable] = useState(true);
	useEffect(() => {
		if (navigatorOnline) {
			setReachable(true);
			return;
		}
		let cancelled = false;
		const check = async () => {
			const ok = await probeLocalReachable();
			if (!cancelled) setReachable(ok);
		};
		check();
		const interval = window.setInterval(() => {
			check();
		}, PROBE_INTERVAL_MS);
		return () => {
			cancelled = true;
			window.clearInterval(interval);
		};
	}, [navigatorOnline]);
	return !navigatorOnline && !reachable;
}
export { useConfirmedOffline as t };
