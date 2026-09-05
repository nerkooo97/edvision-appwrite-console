const COVER_JPEG_QUALITY = 90;
const COVER_AVIF_QUALITY = 50;
function getCoverImageMimeType(format) {
	switch (format) {
		case "jpeg": return "image/jpeg";
		case "avif": return "image/avif";
		default: return "image/png";
	}
}
function getCoverImageExtension(format) {
	switch (format) {
		case "jpeg": return "jpg";
		case "avif": return "avif";
		default: return "png";
	}
}
function getCoverCanvasEncodeQuality(format) {
	switch (format) {
		case "jpeg": return .92;
		case "avif": return .85;
		default: return;
	}
}
export { getCoverImageMimeType as a, getCoverImageExtension as i, COVER_JPEG_QUALITY as n, getCoverCanvasEncodeQuality as r, COVER_AVIF_QUALITY as t };
