import "./ticket-layout-B97VGq99.js";
import { r as isInitTicketTypeId } from "./ticket-types-BpqSrvYB.js";
import { a as parseInitTicketStack } from "./ticket-stack-pzBI8NL4.js";
import { n as getInitTicketNumberForUser, t as buildInitTicketRenderData } from "./ticket-render-data-DrkrIeNP.js";
import { l as parseInitTicketPrefs, t as DEFAULT_INIT_TICKET_PREFS } from "./ticket-prefs-DDmwAY1F.js";
function parsePrefsJson(value) {
	if (!value) return null;
	try {
		return parseInitTicketPrefs(JSON.parse(value));
	} catch {
		return null;
	}
}
function mergeTicketPrefsFromSearch(searchParams) {
	const parsedPrefs = parsePrefsJson(searchParams.get("prefs"));
	const stackParam = searchParams.get("stack");
	const stack = stackParam ? parseInitTicketStack(stackParam.split(",").map((item) => item.trim()).filter(Boolean)) : parsedPrefs?.stack ?? DEFAULT_INIT_TICKET_PREFS.stack;
	const displayName = searchParams.get("name")?.trim() || parsedPrefs?.displayName;
	const holderTitle = searchParams.get("title")?.trim() || parsedPrefs?.holderTitle;
	return {
		...DEFAULT_INIT_TICKET_PREFS,
		...parsedPrefs,
		stack: stack.length ? stack : DEFAULT_INIT_TICKET_PREFS.stack,
		...displayName ? { displayName } : {},
		...holderTitle ? { holderTitle } : {}
	};
}
function parseTicketType(searchParams) {
	const type = searchParams.get("type");
	return type && isInitTicketTypeId(type) ? type : void 0;
}
function parseThemeUsesDarkImage(searchParams) {
	return searchParams.get("theme")?.trim().toLowerCase() === "dark";
}
function buildInitTicketImageRenderData(event, searchParams) {
	const prefs = mergeTicketPrefsFromSearch(searchParams);
	const ticketNumber = searchParams.get("ticketNumber")?.trim() || getInitTicketNumberForUser(searchParams.get("userId"));
	const githubUsername = searchParams.get("github")?.trim().replace(/^@+/, "") || void 0;
	return buildInitTicketRenderData({
		event,
		prefs,
		themeUsesDarkImage: parseThemeUsesDarkImage(searchParams),
		mockTypeId: parseTicketType(searchParams),
		fallbackHolderName: "Your name",
		githubUsername,
		ticketNumber
	});
}
async function renderInitTicketImagePng(data) {
	const { renderInitTicketImageWithOg } = await import("./render-init-ticket-image-DthG5Ej1.js");
	return renderInitTicketImageWithOg(data);
}
export { buildInitTicketImageRenderData, renderInitTicketImagePng };
