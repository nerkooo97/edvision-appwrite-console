const INIT_TICKET_BG_SRC_LIGHT = "/images/init/ticket-bg-light.avif";
const INIT_TICKET_BG_SRC_DARK = "/images/init/ticket-bg-dark.avif";
const INIT_TICKET_BG_SRC_GOLD = "/images/init/ticket-bg-gold.avif";
const INIT_TICKET_BG_SRC_SILVER = "/images/init/ticket-bg-silver.avif";
const INIT_TICKET_IMAGE_WIDTH = 1024;
const INIT_TICKET_IMAGE_HEIGHT = 682;
const INIT_TICKET_OG_EXPORT_WIDTH = 1200;
const INIT_TICKET_OG_EXPORT_HEIGHT = 630;
const INIT_TICKET_ASPECT_RATIO = INIT_TICKET_IMAGE_WIDTH / 682;
const INIT_TICKET_MAX_WIDTH_PX = 820;
const INIT_TICKET_OG_SCALE = INIT_TICKET_IMAGE_WIDTH / 820;
function initTicketOgScalePx(value) {
	return Math.round(value * INIT_TICKET_OG_SCALE);
}
const INIT_TICKET_COLLAPSED_WIDTH_PX = 240;
const INIT_TICKET_BOTTOM_TRIM_PERCENT = 5;
function initTicketDisplayAspectRatio() {
	return INIT_TICKET_IMAGE_WIDTH / (682 * (1 - 5 / 100));
}
const INIT_TICKET_CONTENT_INSET = {
	top: 25,
	right: 12.5,
	bottom: 21.5,
	left: 12.5
};
function initTicketInsetStyle() {
	return {
		top: `${INIT_TICKET_CONTENT_INSET.top}%`,
		right: `${INIT_TICKET_CONTENT_INSET.right}%`,
		bottom: `${INIT_TICKET_CONTENT_INSET.bottom}%`,
		left: `${INIT_TICKET_CONTENT_INSET.left}%`
	};
}
function initTicketColumnSplit() {
	const contentWidth = 100 - INIT_TICKET_CONTENT_INSET.left - INIT_TICKET_CONTENT_INSET.right;
	return {
		main: (57 - INIT_TICKET_CONTENT_INSET.left) / contentWidth * 100,
		stub: (43 - INIT_TICKET_CONTENT_INSET.right) / contentWidth * 100
	};
}
const INIT_TICKET_STUB_LABEL_INSET = {
	left: 52,
	right: 3,
	bottom: 8
};
function initTicketStubTitleClass(title) {
	const len = title.trim().length;
	if (len > 36) return "text-[clamp(5px,0.9vw,8px)]";
	if (len > 28) return "text-[clamp(6px,1vw,9px)]";
	return "text-[clamp(7px,1.2vw,10px)]";
}
function initTicketContentGridStyle() {
	const { main, stub } = initTicketColumnSplit();
	return { gridTemplateColumns: `${main}fr ${stub}fr` };
}
function initTicketOgStubAnchorBox(stubW, contentH) {
	const { right, bottom } = INIT_TICKET_STUB_LABEL_INSET;
	return {
		left: Math.round(stubW * .86),
		right: Math.round(right / 100 * stubW),
		bottom: Math.round(bottom / 100 * contentH)
	};
}
function initTicketOgContentBox() {
	const contentX = INIT_TICKET_CONTENT_INSET.left / 100 * INIT_TICKET_IMAGE_WIDTH;
	const contentY = INIT_TICKET_CONTENT_INSET.top / 100 * 682;
	const contentW = INIT_TICKET_IMAGE_WIDTH * ((100 - INIT_TICKET_CONTENT_INSET.left - INIT_TICKET_CONTENT_INSET.right) / 100);
	const contentH = 682 * ((100 - INIT_TICKET_CONTENT_INSET.top - INIT_TICKET_CONTENT_INSET.bottom) / 100);
	const { main, stub } = initTicketColumnSplit();
	const mainW = contentW * main / (main + stub);
	return {
		contentX,
		contentY,
		contentW,
		contentH,
		mainW,
		stubW: contentW - mainW
	};
}
function initTicketHolderNameFontSizeClass(name) {
	const len = name.trim().length;
	if (len > 32) return "text-[clamp(16px,3.8vw,28px)]";
	if (len > 24) return "text-[clamp(20px,4.5vw,34px)]";
	if (len > 16) return "text-[clamp(24px,5.5vw,40px)]";
	return "text-[clamp(28px,6.5vw,48px)]";
}
export { initTicketInsetStyle as _, INIT_TICKET_BG_SRC_SILVER as a, initTicketOgStubAnchorBox as b, INIT_TICKET_IMAGE_HEIGHT as c, INIT_TICKET_OG_EXPORT_HEIGHT as d, INIT_TICKET_OG_EXPORT_WIDTH as f, initTicketHolderNameFontSizeClass as g, initTicketDisplayAspectRatio as h, INIT_TICKET_BG_SRC_LIGHT as i, INIT_TICKET_IMAGE_WIDTH as l, initTicketContentGridStyle as m, INIT_TICKET_BG_SRC_DARK as n, INIT_TICKET_BOTTOM_TRIM_PERCENT as o, INIT_TICKET_STUB_LABEL_INSET as p, INIT_TICKET_BG_SRC_GOLD as r, INIT_TICKET_COLLAPSED_WIDTH_PX as s, INIT_TICKET_ASPECT_RATIO as t, INIT_TICKET_MAX_WIDTH_PX as u, initTicketOgContentBox as v, initTicketStubTitleClass as x, initTicketOgScalePx as y };
