import { i as resolveSiteAssetUrl } from "./site-origin-DqNp3EP0.js";
import { t as getCoverRenderSiteOrigin } from "./render-context-C1ssi7kM.js";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
const COVER_EXPORT_TTF_SOURCES = {
	aeonikRegular: "fonts-ttf/AeonikPro-Regular.ttf",
	aeonikMedium: "fonts-ttf/AeonikPro-Medium.ttf",
	interRegular: "fonts-ttf/Inter-Regular.ttf",
	interSemibold: "fonts-ttf/Inter-SemiBold.ttf"
};
function getCoverPublicAssetRoots() {
	const cwd = process.cwd();
	return [join(cwd, "public"), join(cwd, "dist/client")];
}
async function fetchCoverPublicAssetBuffer(relativePath) {
	const url = resolveSiteAssetUrl(`/${relativePath.replace(/^\/+/, "")}`, getCoverRenderSiteOrigin());
	try {
		const response = await fetch(url);
		if (!response.ok) return null;
		return Buffer.from(await response.arrayBuffer());
	} catch {
		return null;
	}
}
async function readCoverPublicAssetBuffer(relativePath) {
	const normalized = relativePath.replace(/^\/+/, "");
	for (const root of getCoverPublicAssetRoots()) {
		const filepath = join(root, normalized);
		try {
			await access(filepath);
			return await readFile(filepath);
		} catch {}
	}
	return fetchCoverPublicAssetBuffer(relativePath);
}
async function readCoverPublicAssetDataUri(publicSrc, mimeType) {
	const buffer = await readCoverPublicAssetBuffer(publicSrc);
	if (!buffer) return null;
	return `data:${mimeType};base64,${buffer.toString("base64")}`;
}
export { readCoverPublicAssetDataUri as n, COVER_EXPORT_TTF_SOURCES as r, readCoverPublicAssetBuffer as t };
