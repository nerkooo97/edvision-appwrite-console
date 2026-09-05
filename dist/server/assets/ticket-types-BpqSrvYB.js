import { a as INIT_TICKET_BG_SRC_SILVER, i as INIT_TICKET_BG_SRC_LIGHT, n as INIT_TICKET_BG_SRC_DARK, r as INIT_TICKET_BG_SRC_GOLD } from "./ticket-layout-B97VGq99.js";
const INIT_TICKET_TYPE_IDS = [
	"standard",
	"silver",
	"gold"
];
function isInitTicketTypeId(value) {
	return INIT_TICKET_TYPE_IDS.includes(value);
}
function formatInitMockTicketType(mockTypeId) {
	if (mockTypeId === null || mockTypeId === void 0) return "Use account rules on /init";
	switch (mockTypeId) {
		case "gold": return "Gold · Contributor";
		case "silver": return "Silver · Appwrite VIP";
		default: return "Standard · theme pass";
	}
}
const INIT_TICKET_TYPE_CATALOG = {
	standard: {
		id: "standard",
		themeBackgroundSrcLight: INIT_TICKET_BG_SRC_LIGHT,
		themeBackgroundSrcDark: INIT_TICKET_BG_SRC_DARK,
		themeAccentColorLight: "var(--brand-cta)",
		themeAccentColorDark: "var(--brand-cta)",
		shadowClassName: "bg-black/8",
		shadowClassNameDarkTheme: "bg-black/8",
		shadowOffsetY: 0,
		passLabel: "Init pass",
		holderTitle: "Appwrite developer"
	},
	silver: {
		id: "silver",
		backgroundSrc: INIT_TICKET_BG_SRC_SILVER,
		forceDarkChrome: true,
		accentColor: "#E4E4E7",
		shadowClassName: "bg-black/8",
		shadowOffsetY: 0,
		passLabel: "Appwrite VIP",
		holderTitle: "Appwrite developer"
	},
	gold: {
		id: "gold",
		backgroundSrc: INIT_TICKET_BG_SRC_GOLD,
		forceDarkChrome: true,
		accentColor: "#FBBF24",
		shadowOffsetY: 0,
		passLabel: "Contributor",
		holderTitle: "Appwrite developer"
	}
};
function isAppwriteVerifiedTicketUser(account) {
	const email = account?.email?.trim().toLowerCase();
	if (!email || !account?.emailVerification) return false;
	return email.endsWith("@appwrite.io");
}
var INIT_TICKET_VIP_TENURE_MS = 3 * 365.25 * 24 * 60 * 60 * 1e3;
function isLongTermVipMember(account) {
	if (!account) return false;
	const createdAt = account.$createdAt || account.registration;
	if (!createdAt) return false;
	const created = new Date(createdAt).getTime();
	if (Number.isNaN(created)) return false;
	return Date.now() - created >= INIT_TICKET_VIP_TENURE_MS;
}
const INIT_TICKET_MATCHERS = {
	appwriteVerified: (context) => isAppwriteVerifiedTicketUser(context.account),
	longTermVip: (context) => isLongTermVipMember(context.account),
	always: () => true
};
INIT_TICKET_MATCHERS.appwriteVerified, INIT_TICKET_MATCHERS.longTermVip, INIT_TICKET_MATCHERS.always;
function resolveInitTicketType(config, context) {
	return INIT_TICKET_TYPE_CATALOG[config.rules.find((entry) => entry.when(context))?.typeId ?? "standard"];
}
function resolveInitTicketAppearance(config, context, themeUsesDarkImage, mockTypeId) {
	const type = mockTypeId ? INIT_TICKET_TYPE_CATALOG[mockTypeId] : resolveInitTicketType(config, context);
	const usesDarkChrome = type.forceDarkChrome ?? themeUsesDarkImage;
	const backgroundSrc = type.backgroundSrc ?? (themeUsesDarkImage ? type.themeBackgroundSrcDark : type.themeBackgroundSrcLight);
	const shadowClassName = type.id === "standard" && themeUsesDarkImage && type.shadowClassNameDarkTheme ? type.shadowClassNameDarkTheme : type.shadowClassName;
	const accentColor = type.accentColor ?? (themeUsesDarkImage ? type.themeAccentColorDark : type.themeAccentColorLight);
	return {
		typeId: type.id,
		backgroundSrc,
		usesDarkChrome,
		shadowClassName,
		shadowOffsetY: type.shadowOffsetY,
		passLabel: type.passLabel ?? "Init pass",
		holderTitle: type.holderTitle ?? "Appwrite developer",
		accentColor
	};
}
export { resolveInitTicketAppearance as i, formatInitMockTicketType as n, isInitTicketTypeId as r, INIT_TICKET_MATCHERS as t };
