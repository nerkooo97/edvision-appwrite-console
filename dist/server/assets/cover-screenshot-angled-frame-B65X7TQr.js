import { J as COVER_SCREENSHOT_ANGLED_3D_DEFAULTS, Q as PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO, X as COVER_SCREENSHOT_ANGLED_DEFAULTS, bt as getCoverFrameWidthPx } from "./constants-B5zUV45z.js";
import { p as COVER_HERO_SCREENSHOT_FRAME, y as getCoverScreenshotFrameLayout } from "./lucide-icon-svg-BStxTNvw.js";
function getCoverScreenshotAngledShellDimensions(frameWidth) {
	const { paddingX, paddingTop, chromeHeight } = COVER_HERO_SCREENSHOT_FRAME;
	const innerWidth = Math.max(1, frameWidth - paddingX * 2);
	const innerHeight = Math.round(innerWidth / PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO);
	const shellHeight = paddingTop + chromeHeight + innerHeight;
	return {
		shellWidth: frameWidth,
		shellHeight,
		innerWidth,
		innerHeight,
		frameHeight: shellHeight
	};
}
function resolveAngledFrameWidthPx(data) {
	return getCoverFrameWidthPx(data.frameWidthPercent, {
		width: data.width,
		height: data.height
	});
}
function getCoverScreenshotAngledInnerDimensions(data) {
	const { innerWidth, innerHeight } = getCoverScreenshotAngledShellDimensions(resolveAngledFrameWidthPx(data));
	return {
		width: innerWidth,
		height: innerHeight
	};
}
function getCoverScreenshotAngledFrameLayout(data) {
	const { shellHeight } = getCoverScreenshotAngledShellDimensions(resolveAngledFrameWidthPx(data));
	return getCoverScreenshotFrameLayout({
		frameWidthPercent: data.frameWidthPercent,
		width: data.width,
		height: data.height
	}, 0, 0, shellHeight);
}
function getCoverScreenshotAngledLayoutResetFields() {
	return {
		frameWidthPercent: COVER_SCREENSHOT_ANGLED_DEFAULTS.frameWidthPercent,
		zoom: 1,
		focusX: 0,
		focusY: 0,
		...COVER_SCREENSHOT_ANGLED_3D_DEFAULTS
	};
}
export { getCoverScreenshotAngledShellDimensions as i, getCoverScreenshotAngledInnerDimensions as n, getCoverScreenshotAngledLayoutResetFields as r, getCoverScreenshotAngledFrameLayout as t };
