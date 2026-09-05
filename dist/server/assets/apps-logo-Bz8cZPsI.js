import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { Permission, Role } from "@appwrite.io/console";
const APPS_LOGO_BUCKET_ID = "appAssets";
var APPS_LOGO_LEGACY_BUCKET_ID = "apps";
function resolveAppsLogoConsoleRegion(region) {
	if (typeof region === "string" && region.trim() && region.trim().toLowerCase() !== "unknown") return region.trim().toLowerCase().replace(/\s+/g, "");
	return "fra";
}
function getAppsLogoConsoleStorageSdk(region) {
	return sdk.forConsoleIn(resolveAppsLogoConsoleRegion(region));
}
function buildAppLogoFilePermissions(teamId) {
	return [Permission.read(Role.any()), Permission.write(Role.team(teamId))];
}
function getAppLogoFilePreviewUrl(fileId, options) {
	return getAppsLogoConsoleStorageSdk(options?.region).storage.getFilePreview({
		bucketId: APPS_LOGO_BUCKET_ID,
		fileId,
		width: options?.width ?? 256,
		height: options?.height ?? 256,
		output: options?.output
	});
}
var APPS_LOGO_FILE_ID_PATTERN = /\/storage\/buckets\/(?:appAssets|apps)\/files\/([^/?#]+)\/(?:preview|view|download)/i;
function parseAppLogoFileId(logoUri) {
	const trimmed = logoUri.trim();
	if (!trimmed) return null;
	return trimmed.match(APPS_LOGO_FILE_ID_PATTERN)?.[1] ?? null;
}
function resolveAppLogoDisplayUrl(logoUri, options) {
	const trimmed = logoUri?.trim();
	if (!trimmed) return null;
	const fileId = parseAppLogoFileId(trimmed);
	if (fileId) return getAppLogoFilePreviewUrl(fileId, options);
	if (trimmed.includes(`/${APPS_LOGO_LEGACY_BUCKET_ID}/`)) return trimmed;
	return trimmed;
}
export { parseAppLogoFileId as a, getAppsLogoConsoleStorageSdk as i, buildAppLogoFilePermissions as n, resolveAppLogoDisplayUrl as o, getAppLogoFilePreviewUrl as r, resolveAppsLogoConsoleRegion as s, APPS_LOGO_BUCKET_ID as t };
