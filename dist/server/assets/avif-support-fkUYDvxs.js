import { useEffect, useState } from "react";
import { ImageFormat } from "@appwrite.io/console";
var AVIF_PROBE_DATA_URL = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
var STORAGE_KEY = "appwrite:console:avif-support:v1";
function readPersistedSupport() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw === "1") return true;
		if (raw === "0") return false;
	} catch {}
	return null;
}
function persistSupport(supported) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(STORAGE_KEY, supported ? "1" : "0");
	} catch {}
}
var cachedSupport = readPersistedSupport();
var inflight = null;
var subscribers = /* @__PURE__ */ new Set();
function notifySubscribers(supported) {
	for (const subscriber of subscribers) try {
		subscriber(supported);
	} catch {}
}
function detectAvifSupport() {
	if (cachedSupport !== null) return Promise.resolve(cachedSupport);
	if (inflight) return inflight;
	if (typeof window === "undefined" || typeof Image === "undefined") {
		cachedSupport = false;
		return Promise.resolve(false);
	}
	inflight = new Promise((resolve) => {
		const img = new Image();
		img.onload = () => {
			const supported = img.width > 0 && img.height > 0;
			cachedSupport = supported;
			inflight = null;
			persistSupport(supported);
			notifySubscribers(supported);
			resolve(supported);
		};
		img.onerror = () => {
			cachedSupport = false;
			inflight = null;
			persistSupport(false);
			notifySubscribers(false);
			resolve(false);
		};
		img.src = AVIF_PROBE_DATA_URL;
	});
	return inflight;
}
function useAvifSupport() {
	const [supported, setSupported] = useState(() => cachedSupport === true);
	useEffect(() => {
		if (cachedSupport !== null) {
			setSupported(cachedSupport);
			return;
		}
		let active = true;
		const subscriber = (value) => {
			if (active) setSupported(value);
		};
		subscribers.add(subscriber);
		detectAvifSupport();
		return () => {
			active = false;
			subscribers.delete(subscriber);
		};
	}, []);
	return supported;
}
if (typeof window !== "undefined") detectAvifSupport();
export { useAvifSupport as t };
