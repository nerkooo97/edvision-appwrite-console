import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { toast } from "sonner";
async function copyToClipboard(label, value, options) {
	if (!value) return false;
	const showToast = options?.showToast !== false;
	try {
		await navigator.clipboard.writeText(value);
		if (showToast) toast.success(`${label} copied to clipboard`);
		return true;
	} catch {
		toast.error("Failed to copy");
		return false;
	}
}
function buildConsoleUrl(path) {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${window.location.origin}${normalized}`;
}
function openInNewTab(url) {
	window.open(url, "_blank", "noopener,noreferrer");
}
function openInNewWindow(url) {
	window.open(url, "_blank", "noopener,noreferrer,width=1200,height=800");
}
function toPrettyJson(value) {
	return JSON.stringify(value, null, 2);
}
async function copyResourceAsJson(fetchResource, options) {
	try {
		const payload = await Promise.resolve(fetchResource()) ?? options?.fallback;
		if (payload == null) {
			toast.error("Resource not found");
			return false;
		}
		return await copyToClipboard("JSON", toPrettyJson(payload));
	} catch (error) {
		toast.error(getErrorMessage(error) ?? "Failed to copy JSON");
		return false;
	}
}
export { openInNewWindow as a, openInNewTab as i, copyResourceAsJson as n, toPrettyJson as o, copyToClipboard as r, buildConsoleUrl as t };
