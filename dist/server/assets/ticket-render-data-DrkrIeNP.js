import { i as resolveInitTicketAppearance } from "./ticket-types-BpqSrvYB.js";
import { a as formatInitTicketNumber } from "./ticket-prefs-DDmwAY1F.js";
function findGitHubIdentity(identities) {
	return identities?.find((identity) => identity.provider?.toLowerCase() === "github");
}
function getGitHubUsername(identity, accountName) {
	if (!identity) return void 0;
	const email = identity.providerEmail?.trim();
	if (email) {
		const noreplyMatch = email.match(/^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/i);
		if (noreplyMatch?.[1]) return noreplyMatch[1];
	}
	return accountName?.trim() || void 0;
}
function getInitTicketAccountName(account) {
	return account?.name?.trim() || account?.email?.split("@")[0] || void 0;
}
function getInitTicketHolderName(accountName, prefs, fallback = "Your name") {
	return prefs.displayName?.trim() || accountName?.trim() || fallback;
}
function getInitTicketNumberForUser(userId) {
	return formatInitTicketNumber(userId);
}
function buildInitTicketRenderData(params) {
	const accountName = getInitTicketAccountName(params.account);
	const githubUsername = params.githubUsername ?? getGitHubUsername(findGitHubIdentity(params.identities), accountName);
	const holderName = getInitTicketHolderName(accountName, params.prefs, params.fallbackHolderName);
	const ticketAppearance = resolveInitTicketAppearance(params.event.tickets, {
		account: params.account,
		identities: params.identities
	}, params.themeUsesDarkImage, params.mockTypeId);
	return {
		dateRangeLabel: params.event.dateRangeLabel,
		holderName,
		githubUsername,
		ticketNumber: params.ticketNumber ?? getInitTicketNumberForUser(params.account?.$id),
		prefs: params.prefs,
		ticketAppearance
	};
}
export { getInitTicketNumberForUser as n, buildInitTicketRenderData as t };
